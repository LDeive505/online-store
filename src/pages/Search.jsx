import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';

export default class Search extends Component {
  render() {
    return (
      <div>
        <label htmlFor="home-initial-message">
          <input
            placeholder="Digite algum termo de pesquisa ou escolha uma categoria"
            type="text"
            name="home-initial-message"
          />
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </label>
        <div className="sidebar">
          <Sidebar />
        </div>
      </div>
    );
  }
}
