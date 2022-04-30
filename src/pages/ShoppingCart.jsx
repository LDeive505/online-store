import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ShoppingCart extends Component {
  render() {
    const { cart, handleQuantity } = this.props;
    return (
      <div>
        {cart.length === 0 ? (
          <h3 data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </h3>
        ) : (
          <div>
            {cart.map((item) => {
              const { id, title, quantity } = item;
              return (
                <div key={ id }>
                  <p data-testid="shopping-cart-product-name">{title}</p>
                  <p data-testid="shopping-cart-product-quantity">{quantity}</p>
                  <button
                    type="button"
                    data-testid="product-increase-quantity"
                    onClick={ () => handleQuantity(id, true) }
                  >
                    +
                  </button>
                  <button
                    type="button"
                    data-testid="product-decrease-quantity"
                    onClick={ () => handleQuantity(id, false) }
                  >
                    -
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape).isRequired,
  handleQuantity: PropTypes.func.isRequired,
};
