import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

// Linha 17 - ultilizando uma forma de passar dados atraves do componente 'Link' para ser usado no componente que será
// renderizado quando o link for clicado. fonte: https://www.youtube.com/watch?v=nmbX2QL7ZJc
export default class Product extends Component {
  constructor() {
    super();

    // this.handleCart = this.handleCart.bind(this);

    this.state = {
      cart: [],
    };
  }

  /*  this.setState(prevState =>{
      return{
           ...prevState,
           counter : prevState.counter + 1
      }
   }) */

  /* Increment = () => {
    this.setState((prevState) => ({
      options: prevState.count + 1)
    })); */
  // pega o estado anterior, faz spread do array, e adiciona o targe.value do botão clicado;

  render() {
    const { product } = this.props;
    const { thumbnail, title, price } = product;

    this.handleCart = ({ target }) => {
      const innerProduct = target.parentNode.firstChild.innerText;
      console.log(innerProduct);
      this.setState((prevState) => ({
        cart: [...prevState.cart, innerProduct],
      }));
      console.log(this.state);
    };

    return (
      <div data-testid="product">
        <h3>{title}</h3>
        <img src={ thumbnail } alt={ title } />
        <span>{price}</span>
        {/* {console.log(product)} */}
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.handleCart }
          // value={ id }
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
};
