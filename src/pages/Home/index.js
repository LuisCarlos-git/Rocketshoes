import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdAddShoppingCart } from 'react-icons/md';

import * as CardActions from '../../store/modules/cart/action';
import api from '../../services/api';
import { formatPrice } from '../../utils/format';

import { ProductList } from './styles';

class Home extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map((product) => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  handleAddToCart = (id) => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { products } = this.state;
    const { amonut } = this.props;
    return (
      <ProductList>
        {products.map((product) => (
          <li key={String(product.id)}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>

            <button
              type="button"
              onClick={() => this.handleAddToCart(product.id)}
            >
              <div>
                <MdAddShoppingCart size={16} color="#fff" />{' '}
                {amonut[product.id] || 0}
              </div>

              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

const mapStateToProps = (state) => ({
  amonut: state.cart.reduce((amonut, product) => {
    amonut[product.id] = product.amount;

    return amonut;
  }, {}),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CardActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
