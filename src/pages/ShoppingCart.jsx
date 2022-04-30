import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ShoppingCart extends Component {
  render() {
    const { cart } = this.props;
    return (
      <div>
        { (cart.length === 0)
          ? (<h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>)
          : (
            <div>
              {
                cart.map((item) => (
                  <div key={ item.id }>
                    <p data-testid="shopping-cart-product-name">{item.title}</p>
                    <p data-testid="shopping-cart-product-quantity">{item.quantity}</p>
                  </div>))
              }
            </div>) }
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
