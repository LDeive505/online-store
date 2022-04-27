import React, { Component } from 'react';
import { getCategories } from '../services/api';

export default class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.getCategoriesFromSidebar();
  }

  getCategoriesFromSidebar = async () => {
    const data = await getCategories();
    this.setState({ categories: data });
  }

  render() {
    const { categories } = this.state;
    return (
      <ul>
        {categories.map((ctg) => (
          <li key={ ctg.id }>
            <button type="button" data-testid="category">
              {ctg.name}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
