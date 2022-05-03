import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../style/Product.css';

// Linha 17 - ultilizando uma forma de passar dados atraves do componente 'Link' para ser usado no componente que será
// renderizado quando o link for clicado. fonte: https://www.youtube.com/watch?v=nmbX2QL7ZJc
export default class Product extends Component {
  render() {
    const { product, handleCart } = this.props;
    const {
      thumbnail,
      title,
      price,
      id,
      shipping: { free_shipping: freeShipping },
    } = product;

    return (
      <div className="product" data-testid="product">
        <img src={ thumbnail } alt={ title } />
        { freeShipping && <span data-testid="free-shipping">FRETE GRÁTIS!!!</span> }
        <h3>{title}</h3>
        <span>{ `R$ ${price}` }</span>
        <button
          className="prodButton"
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => handleCart(product) }
        >
          Adicionar ao carrinho
        </button>
        <Link
          to={ { pathname: `productDetails/${id}` } }
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
    shipping: PropTypes.objectOf(PropTypes.shape),
  }).isRequired,
  handleCart: PropTypes.func.isRequired,
};
