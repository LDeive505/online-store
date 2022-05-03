import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Evaluations from '../components/Evaluations';
import { getProductFromId } from '../services/api';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const product = await getProductFromId(id);
    this.setState({ product });
  }

  render() {
    const { product } = this.state;
    const { handleCart, totalProducts } = this.props;
    const {
      thumbnail,
      title,
      price,
      discounts,
      condition,
    } = product;
    console.log(product);
    const { match: { params: { id } } } = this.props;
    const total = totalProducts();
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
          Carrinho de compras
          <span data-testid="shopping-cart-size">{total}</span>
        </Link>
        <Evaluations productId={ id } />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.shape).isRequired,
  handleCart: PropTypes.func.isRequired,
  totalProducts: PropTypes.func.isRequired,
};
