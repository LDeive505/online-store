import React, { Component } from 'react';

export default class Evaluations extends Component {
  constructor() {
    super();
    this.state = {
      comentario: '',
      email: '',
      radiobtn: '',
    };
  }

  componentDidMount() {
    const items = { ...localStorage };
    const local = JSON.parse(localStorage.getItem(items));
    console.log(items);
  }

  handleInputChange = ({ target }) => {
    // console.log("rodou");
    const { value, name } = target;
    this.setState({ [name]: value });
    // console.log(this.state);
  }

  handleSaveButton = () => {
    const { email } = this.state;
    // console.log(email);
    localStorage.setItem(email, JSON.stringify(this.state));
  }
  // localStorage {[text]: "123"} = > {asdasas: '123'}, similar ao setState.

  render() {
    const counterToFive = ['1', '2', '3', '4', '5'];
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

        { 
        console.log('teste')
        /* localStorage.length > 0 && (localStorage.forEach((element, key) => {
          <div key={key}>
            <span>{ element.email }</span>
            <span>{ element.comentario }</span>
            <span>{ element.radiobtn }</span>
          </div>;
        })) */ }

      </div>
    );
  }
}
