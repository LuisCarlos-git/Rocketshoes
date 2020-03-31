import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { formatPrice } from '../../../utils/format';
import { addToCartSuccsess, updateAmountSuccess } from './action';
import api from '../../../services/api';
import history from '../../../services/history';

function* addToCart({ id }) {
  const productExists = yield select((state) =>
    state.cart.find((p) => p.id === id)
  );

  const stock = yield call(api.get, `stock/${id}`);
  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;
  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    toast.error('Quantidade fora de estoque!');
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };
    yield put(addToCartSuccsess(data));

    history.push('/cart');
  }
}

function* updateAmount({ id, amount }) {
  if (amount < 0) {
    return;
  }

  const stock = yield call(api.get, `stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    toast.error('Quantidade fora de estoque!');
  }
}

export default all([
  takeLatest('ADD_TO_CART_REQUEST', addToCart),
  takeLatest('UPDATE_AMOUNT_REQUEST', updateAmount),
]);
