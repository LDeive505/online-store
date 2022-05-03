import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Search from './pages/Search';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  handleCart = (product) => {
    const cartProduct = { ...product, quantity: 1 };
    this.setState((prevState) => ({
      cart: [...prevState.cart, cartProduct],
    }));
  };

  incresaOrDecreaseProductQuantity = (id, add) => {
    const { cart } = this.state;
    cart.forEach((prod) => {
      if (prod.id === id) {
        if (add) prod.quantity += 1;
        else if (prod.quantity > 0) prod.quantity -= 1;
      }
    });
    this.setState({ cart });
  }

  render() {
    const { cart } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={ (props) => (
                <Search
                  { ...props }
                  handleCart={ this.handleCart }
                />) }
            />
            <Route
              path="/shoppingCart"
              render={ (props) => (
                <ShoppingCart
                  { ...props }
                  cart={ cart }
                  handleQuantity={ this.incresaOrDecreaseProductQuantity }
                />) }
            />
            <Route
              path="/productDetails/:id"
              render={ (props) => (
                <ProductDetails
                  { ...props }
                  handleCart={ this.handleCart }
                />) }
            />
            <Route path="/Checkout" component={ Checkout } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
