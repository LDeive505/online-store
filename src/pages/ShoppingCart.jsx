import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ShoppingCart extends Component {
  render() {
    const { cart, handleQuantity } = this.props;
    let totalCart = 0;
    cart.forEach((item) => { totalCart += item.quantity; });
    return (
      <div>
        {cart.length === 0 ? (
          <div>
            <h3 data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </h3>
            <Link to="/">
              Página inicial
            </Link>
          </div>
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
                    disabled={ item.available_quantity <= quantity }
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
                  <Link
                    to="/Checkout"
                    data-testid="checkout-products"
                  >
                    Finalizar Compra
                  </Link>
                </div>
              );
            })}
            <span data-testid="shopping-cart-size">{totalCart}</span>
            <Link to="/">
              Página inicial
            </Link>
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
