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
    const categories = data.map((d) => d.name);
    this.setState({ categories });
  }

  render() {
    this.getCategoriesFromSidebar();
    const { categories } = this.state;
    console.log(categories);
    return (
      <div>
        {}
      </div>
    );
  }
}
