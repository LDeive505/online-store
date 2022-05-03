import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Product from '../components/Product';
import Sidebar from '../components/Sidebar';
import { getProducts, getProductsFromCategory } from '../services/api';
import '../style/Search.css';

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      search: '',
      products: [],
    };
  }

  handleInputChange = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  searchProducts = async () => {
    const { search } = this.state;
    const data = await getProducts(search);
    this.setState({ products: data });
  }

  getProductsFromAPI = async ({ target }) => {
    const resultCategory = await getProductsFromCategory(target.id);
    this.setState({ products: resultCategory });
  }

  render() {
    const { search, products } = this.state;
    const { handleCart, totalProducts } = this.props;
    return (
      <div className="container">
        <div className="sidebar">
          <Sidebar clickHandle={ this.getProductsFromAPI } />
        </div>
        <div className="right">
          <div className="inputSearch">
            <label htmlFor="home-initial-message">
              <input
                placeholder="Digite aqui"
                type="text"
                id="home-initial-message"
                name="search"
                data-testid="query-input"
                value={ search }
                onChange={ this.handleInputChange }
              />
            </label>
            <button
              type="button"
              data-testid="query-button"
              onClick={ this.searchProducts }
            >
              Pesquisar
            </button>
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
            <Link to="/ShoppingCart" data-testid="shopping-cart-button">
              Carrinho de compras:
              <span data-testid="shopping-cart-size">{totalProducts}</span>
            </Link>
          </div>
          <div className="allProducts">
            {products.map((product) => (
              <Product
                product={ product }
                key={ product.id }
                handleCart={ handleCart }
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  handleCart: PropTypes.func.isRequired,
  totalProducts: PropTypes.number.isRequired,
};
