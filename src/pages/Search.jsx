import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import Sidebar from '../components/Sidebar';
import { getProducts } from '../services/api';

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

   render() {
     const { search, products } = this.state;
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
             <Product product={ product } key={ product.id } />
           ))}
           <Link to="/ShoppingCart" data-testid="shopping-cart-button">
             Carrinho de compras
           </Link>
         </label>
         <div className="sidebar">
           <Sidebar />
         </div>
       </div>
     );
   }
}
