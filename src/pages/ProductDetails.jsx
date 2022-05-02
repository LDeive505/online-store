import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Evaluations from './Evaluations';

export default class ProductDetails extends Component {
  render() {
    const counterToFive = ['1', '2', '3', '4', '5'];
    const { location: { state: { product } } } = this.props;
    const { handleCart } = this.props;
    const { thumbnail, title, price, discounts, condition } = product;
    return (
      <div>
        <h3 data-testid="product-detail-name">
          { title }
        </h3>
        <img src={ thumbnail } alt={ title } />
        <h3>
          Preço:
          {price}
        </h3>
        <p>
          Condição:
          {condition}
        </p>
        {discounts === null
          ? <p>Descontos: não possui</p>
          : (
            <p>
              Descontos:
              {discounts}
            </p>)}
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => handleCart(product) }
        >
          Adicionar ao carrinho
        </button>
        <Link to="/shoppingCart" data-testid="shopping-cart-button">
          Carrinho de Compras
        </Link>
        <Evaluations />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.objectOf(PropTypes.shape).isRequired,
  handleCart: PropTypes.func.isRequired,
};
