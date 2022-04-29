import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

// Linha 17 - ultilizando uma forma de passar dados atraves do componente 'Link' para ser usado no componente que será
// renderizado quando o link for clicado. fonte: https://www.youtube.com/watch?v=nmbX2QL7ZJc
export default class Product extends Component {
  render() {
    const { product, handleCart } = this.props;
    const { thumbnail, title, price, id } = product;

    return (
      <div data-testid="product">
        <h3>{title}</h3>
        <img src={ thumbnail } alt={ title } />
        <span>{price}</span>
        {/* {console.log(product)} */}
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ handleCart }
          value={ id }
        >
          adicionar ao carrinho
        </button>
        <Link
          to={ { pathname: '/productDetails', state: { product } } }
          data-testid="product-detail-link"
        >
          Ver Detalhes...
        </Link>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  handleCart: PropTypes.func.isRequired,
};
