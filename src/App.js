import React from 'react';
// import './App.css';
// import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
<<<<<<< HEAD
import Search from './pages/Search';
=======
import Search from './components/Search';
>>>>>>> 306f637500fbfae21ef09230f2d1d8193bc3f5d1

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
