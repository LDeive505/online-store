import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Evaluations extends Component {
  constructor() {
    super();
    this.state = {
      comentario: '',
      email: '',
      radiobtn: '',
      savedComents: [],
    };
  }

  componentDidMount() {
    const { id } = this.props;
    const local = JSON.parse(localStorage.getItem(id));
    this.setState({ savedComents: [local] });
    console.log(local);
  }

  handleInputChange = ({ target }) => {
    // console.log("rodou");
    const { value, name } = target;
    this.setState({ [name]: value });
    // console.log(this.state);
  }

  handleSaveButton = () => {
    const { id } = this.props;
    const { email, radiobtn, comentario } = this.state;
    localStorage.setItem(id, JSON.stringify({ email, radiobtn, comentario }));
  }
  // localStorage {[text]: "123"} = > {asdasas: '123'}, similar ao setState.

  render() {
    const counterToFive = ['1', '2', '3', '4', '5'];
    const { savedComents } = this.state;
    return (
      <div>
        <form>
          <h4>Avaliações:</h4>
          <span>
            <label htmlFor="email">
              Insira seu email:
              <input
                data-testid="product-detail-email"
                type="email"
                name="email"
                onChange={ this.handleInputChange }
              />
            </label>
          </span>
          <span>
            Avalie este produto!
            <div id="avaliacao">
              { counterToFive.map((index, key) => (
                <label htmlFor="avaliacao" key={ key }>
                  {index}
                  <input
                    data-testid={ `${index}-rating` }
                    type="radio"
                    name="radiobtn"
                    value={ index }
                    onClick={ this.handleInputChange }
                  />
                </label>
              ))}
            </div>

          </span>
          <span>
            <label htmlFor="comentario">
              Descreva sua experiencia com o produto:
              <textarea
                data-testid="product-detail-evaluation"
                name="comentario"
                onChange={ this.handleInputChange }
              />
            </label>
          </span>
          <span>
            <button
              data-testid="submit-review-btn"
              type="button"
              onClick={ this.handleSaveButton }
            >
              Salvar
            </button>
          </span>

        </form>
        { savedComents.length > 0 && savedComents.map((element, key) => (
          <div
            key={ key }
          >
            <p>{ element.email }</p>
            <p>{ element.comentario }</p>
            <p>{ element.radiobtn }</p>
          </div>))}

      </div>
    );
  }
}

Evaluations.propTypes = {
  id: PropTypes.string.isRequired,
};
