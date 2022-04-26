import React from 'react';
// import './App.css';
// import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Search from './components/Search';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Search } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
