import React, { Component } from 'react';

export default class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <p>teste carrinho de compras</p>
        <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
      </div>
    );
  }
}
