import React, { Component } from 'react';

export default class Evaluations extends Component {
  render() {
    const counterToFive = ['1', '2', '3', '4', '5'];
    return (
      <div>
        <form>
          <h4>Avaliações:</h4>
          <label htmlFor="email">
            Insira seu email:
            <input
              data-testid="product-detail-email"
              type="email"
              name="email"
            />
          </label>
          {/* colocar 5 avaliadores */}
          <label htmlFor="avaliacao">
            Avalie este produto!
            <div id="avaliacao">
              { counterToFive.map((index) => (
                <input
                  data-testid={ `${index}-rating` }
                  type="radio"
                  key={ index }
                />
              ))}
            </div>
          </label>
          <label htmlFor="comentario">
            Descreva sua experiencia com o produto:
            <textarea
              data-testid="product-detail-evaluation"
              name="comentario"
            />
          </label>
          <button
            data-testid="submit-review-btn"
            type="button"
          >
            Salvar
          </button>
        </form>

      </div>
    );
  }
}
