import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ShoppingCart extends Component {
  matchProducts = () => {
    const { location: { state: { cart } } } = this.props;
    const { location: { state: { products } } } = this.props;

    products.map((item, index) => {
      cart.find(item.id === cart[index]);
      return (item);
    });
  };

  render() {
    const { location: { state: { cart } } } = this.props;
    return (
      <div>
        { (cart.length === 0)
          ? <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
          : (
            <div>
              {cart}
            </div>) }

      </div>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.objectOf(PropTypes.shape).isRequired,
  /* product: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    cart: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired, */
};
