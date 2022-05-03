import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Checkout extends Component {
  getTotal = () => {
    const { cart } = this.props;
    let total = 0;
    cart.forEach((item) => {
      total += (item.price * item.quantity);
    });
    return total;
  }

  render() {
    const { cart } = this.props;
    return (
      <div>
        <h1>Finalize sua compra!</h1>
        <section>
          <h2>Revise seus produtos</h2>
          { cart.map((item) => (
            <div key={ item.id }>
              <img src={ item.thumbnail } alt={ item.title } />
              <h4>{ item.title }</h4>
              <h5>
                Valor unitário R$:
                { item.price }
              </h5>
              <h5>
                Quantidade:
                { item.quantity }
              </h5>
              <h5>
                Subtotal R$:
                { item.price * item.quantity }
              </h5>
            </div>
          )) }
          <h2>
            Total R$:
            { this.getTotal() }
          </h2>
        </section>
        <form>
          <label htmlFor="Nome completo">
            Nome completo:
            <input
              name="Nome completo"
              type="text"
              placeholder="Nome completo"
              data-testid="checkout-fullname"
            />
          </label>
          <label htmlFor="Email">
            Email:
            <input
              name="Email"
              type="email"
              placeholder="Email"
              data-testid="checkout-email"
            />
          </label>
          <label htmlFor="CPF">
            CPF:
            <input
              name="CPF"
              type="text"
              placeholder="insira seu CPF"
              data-testid="checkout-cpf"
            />
          </label>
          <label htmlFor="Telefone">
            Telefone:
            <input
              name="Telefone"
              type="text"
              placeholder="insira seu Telefone"
              data-testid="checkout-phone"
            />
          </label>
          <label htmlFor="CEP">
            CEP:
            <input
              name="CEP"
              type="text"
              placeholder="insira seu CEP"
              data-testid="checkout-cep"
            />
          </label>
          <label htmlFor="Endereço">
            Endereço:
            <input
              name="Endereço"
              type="text"
              placeholder="Endereço"
              data-testid="checkout-address"
            />
          </label>
        </form>
        <section id="metodo">
          <h2>Método de Pagamento</h2>
          <label htmlFor="metodo">
            Boleto:
            <input
              type="radio"
              name="radio"
            />
          </label>
          <label htmlFor="metodo">
            Cartão:
            <input
              type="radio"
              name="radio"
            />
          </label>
          <label htmlFor="metodo">
            Pix:
            <input
              type="radio"
              name="radio"
            />
          </label>
        </section>
        <Link to="/">
          Página inicial
        </Link>
        <button
          type="button"
        >
          Concluir Compra!!!
        </button>
      </div>
    );
  }
}

Checkout.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
