import React, { Component } from 'react';

export default class Checkout extends Component {
  render() {
    return (
      <div>
        Checkout
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
      </div>
    );
  }
}
