import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import Sidebar from '../components/Sidebar';
import { getProducts, getProductsFromCategory } from '../services/api';

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      search: '',
      products: [],
      cart: [],
    };
  }

  /*  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", this.state);
  } */

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

  handleCart = ({ target }) => {
    // console.log(target);
    this.setState((prevState) => ({
      cart: [...prevState.cart, target.value],
    }));
    // console.log(this.state.cart);
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
            to={ { pathname: '/ShoppingCart', state: { cart, products } } }
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
