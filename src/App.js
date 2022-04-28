import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Search from './pages/Search';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Search } />
            <Route path="/ShoppingCart" component={ ShoppingCart } />
            <Route path="/productDetails" component={ ProductDetails } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
