import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ProductDetails extends Component {
  render() {
    const { location: { state: { product } } } = this.props;
    const { thumbnail, title, price, discounts, condition } = product;
    console.log(title);
    return (
      <div>
        <h3 data-testid="product-detail-name">
          { title }
        </h3>
        <img src={ thumbnail } alt={ title } />
        <h3>
          Preço:
          {price}
        </h3>
        <p>
          Condição:
          {condition}
        </p>
        {discounts === null
          ? <p>Descontos: não possui</p>
          : (
            <p>
              Descontos:
              {discounts}
            </p>)}
        <Link to="/ShoppinCart">
          Carrinho de Compras
        </Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.objectOf(PropTypes.shape).isRequired,
};

/* accepts_mercadopago: true
address: {state_id: 'BR-SP', state_name: 'São Paulo', city_id: 'BR-SP-44', city_name: 'São Paulo'}
attributes: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
available_quantity: 500
buying_mode: "buy_it_now"
catalog_product_id: null
category_id: "MLB116338"
condition: "new"
currency_id: "BRL"
discounts: null
domain_id: "MLB-HYDRAULIC_VEHICLE_JACKS"
id: "MLB1350433589"
installments: {quantity: 12, amount: 17.35, rate: 16.34, currency_id: 'BRL'}
listing_type_id: "gold_special"
match_score: null
melicoin: null
offer_score: null
offer_share: null
official_store_id: 2160
order_backend: 1
original_price: 189
permalink: "https://produto.mercadolivre.com.br/MLB-1350433589-macaco-hidraulico-2-ton-universal-tipo-jacarezinho-c-maleta-_JM"
price: 179
prices: {id: 'MLB1350433589', prices: Array(5), presentation: {…}, payment_method_prices: Array(0), reference_prices: Array(2), …}
sale_price: null
seller: {id: 116155669, permalink: 'http://perfil.mercadolivre.com.br/ISMAFER-VILA+GUILHERME', registration_date: '2012-07-05T11:20:45.000-04:00', car_dealer: false, real_estate_agency: false, …}
seller_address: {id: '', comment: '', address_line: '', zip_code: '', country: {…}, …}
shipping: {free_shipping: true, mode: 'me2', tags: Array(3), logistic_type: 'fulfillment', store_pick_up: false}
site_id: "MLB"
sold_quantity: 5000
stop_time: "2042-04-10T16:29:58.000Z"
tags: (9) ['good_quality_thumbnail', 'standard_price_by_channel', 'brand_verified', 'deal_of_the_day', 'good_quality_picture', 'immediate_payment', 'cart_eligible', 'best_seller_candidate', 'shipping_guaranteed']
thumbnail: "http://http2.mlstatic.com/D_917801-MLB49050902393_022022-I.jpg"
thumbnail_id: "917801-MLB49050902393_022022"
title: "Macaco Hidraulico 2 Ton Universal Tipo Jacarezinho C/ Maleta"
use_thumbnail_id: true
winner_item_id: null  */
