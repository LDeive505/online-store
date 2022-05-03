import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Evaluations extends Component {
  constructor() {
    super();
    this.state = {
      comentario: '',
      email: '',
      radiobtn: '',
      savedComments: [],
    };
  }

  componentDidMount() {
    const { productId } = this.props;
    let local = JSON.parse(localStorage.getItem(productId));

    //  Na montagem do componente, recupero o localStorage para jogá-lo no estado, porém é verificado se o mesmo é 'null se for é atribuido um array vazio para que seja possivel acessar as propriedades dele como um array, evitando erros no método render.
    if (local === null) local = [];
    this.setState({ savedComments: local });
  }

  handleInputChange = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  handleSaveButton = () => {
    const { productId } = this.props;
    const { email, radiobtn, comentario } = this.state;
    const commentObj = { email, radiobtn, comentario };

    // recupero os comentarios já salvos que foram passados para estado do componente a partir do localStorage e insiro o novo comentario no array de comentários e salvo novamente tanto no estado atual(para ser exibido imediatamente apos o click em 'salvar') e no localStorage com a mesma key(id do produto em questão)
    const { savedComments } = this.state;
    savedComments.push(commentObj);
    this.setState({
      savedComments,
      comentario: '',
      email: '',
      radiobtn: '',
    });
    localStorage.setItem(productId, JSON.stringify(savedComments));
  }

  render() {
    const counterToFive = ['1', '2', '3', '4', '5'];
    const { savedComments, comentario, email } = this.state;
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
                value={ email }
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
                value={ comentario }
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
          savedComments.length > 0 && (savedComments.map((item, index) => (
            <div key={ index }>
              <p>{ item.email }</p>
              <p>{ item.comentario }</p>
              <p>{ item.radiobtn }</p>
            </div>
          )))
        }
      </div>
    );
  }
}

Evaluations.propTypes = {
  productId: PropTypes.string.isRequired,
};
