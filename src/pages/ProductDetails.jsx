import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ProductDetails extends Component {
  render() {
    const { location: { state: { product } } } = this.props;
    const { thumbnail, title, price, discounts, condition, id } = product;
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
          value={ id }
          /* onClick */
        >
          adicionar ao carrinho
        </button>
        <Link to="/ShoppinCart">
          Carrinho de Compras
        </Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.objectOf(PropTypes.shape).isRequired,
};
