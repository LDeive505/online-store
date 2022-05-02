import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';
import '../style/Sidebar.css';

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
    const { clickHandle } = this.props;
    const { categories } = this.state;
    return (
      <ul>
        {categories.map((ctg) => (
          <li className="li" key={ ctg.id }>
            <button
              className="sideButton"
              id={ ctg.id }
              type="button"
              onClick={ clickHandle }
              data-testid="category"
            >
              {ctg.name}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

Sidebar.propTypes = {
  clickHandle: PropTypes.func.isRequired,
};
