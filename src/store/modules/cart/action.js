export function addToCartRequest(id) {
  return {
    type: 'ADD_TO_CART_REQUEST',
    id,
  };
}
export function addToCartSuccsess(product) {
  return {
    type: 'ADD_TO_CART_SUCCSESS',
    product,
  };
}
export function removeFromCart(id) {
  return {
    type: 'REMOVE_FROM_CART',
    id,
  };
}

export function updateAmountRequest(id, amount) {
  return {
    type: 'UPDATE_AMOUNT_REQUEST',
    id,
    amount,
  };
}
export function updateAmountSuccess(id, amount) {
  return {
    type: 'UPDATE_AMOUNT_SUCCESS',
    id,
    amount,
  };
}
