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
    let local = JSON.parse(localStorage.getItem('cart'));
    if (local === null) local = [];
    this.state = {
      cart: local,
    };
  }

  componentDidUpdate() {
    const { cart } = this.state;
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  handleCart = (product) => {
    const { cart } = this.state;
    const isInCart = cart.some((item) => item.id === product.id);
    if (isInCart) {
      this.incresaOrDecreaseProductQuantity(product.id, true);
      return;
    }
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

  getTotalProducts = () => {
    let totalProducts = 0;
    const { cart } = this.state;
    cart.forEach((item) => { totalProducts += item.quantity; });
    return totalProducts;
  }

  render() {
    const { cart } = this.state;
    let total = 0;
    cart.forEach((item) => { total += item.quantity; });
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
                  totalProducts={ total }
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
                  totalProducts={ this.getTotalProducts }
                />) }
            />
            <Route
              path="/Checkout"
              render={ (props) => (
                <Checkout
                  { ...props }
                  cart={ cart }
                />) }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
