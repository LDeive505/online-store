import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import Sidebar from '../components/Sidebar';
import { getProducts, getProductsFromCategory, getProductFromId } from '../services/api';

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      search: '',
      products: [],
      cart: [],
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

  handleCart = async ({ target: { value } }) => {
    const data = await getProductFromId(value);
    const cartProduct = { ...data, quantity: 1 };
    this.setState((prevState) => ({
      cart: [...prevState.cart, cartProduct],
    }));
  };

  render() {
    const { search, products, cart } = this.state;
    return (
      <div>
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
          {products.map((product) => (
            <Product
              product={ product }
              key={ product.id }
              handleCart={ this.handleCart }
            />
          ))}
          <Link
            to={ { pathname: '/ShoppingCart', state: { cart } } }
            data-testid="shopping-cart-button"
          >
            Carrinho de compras
          </Link>

        </label>
        <div className="sidebar">
          <Sidebar clickHandle={ this.getProductsFromAPI } />
        </div>
      </div>
    );
  }
}
