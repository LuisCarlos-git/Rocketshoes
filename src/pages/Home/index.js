import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img src="https://w1.ezcdn.com.br/maze/fotos/grande/8823fg1/tenis-nike-react-presto-cosmic-clay.jpg" />
        <strong>Tênis da hora</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img src="https://w1.ezcdn.com.br/maze/fotos/grande/8823fg1/tenis-nike-react-presto-cosmic-clay.jpg" />
        <strong>Tênis da hora</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img src="https://w1.ezcdn.com.br/maze/fotos/grande/8823fg1/tenis-nike-react-presto-cosmic-clay.jpg" />
        <strong>Tênis da hora</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img src="https://w1.ezcdn.com.br/maze/fotos/grande/8823fg1/tenis-nike-react-presto-cosmic-clay.jpg" />
        <strong>Tênis da hora</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img src="https://w1.ezcdn.com.br/maze/fotos/grande/8823fg1/tenis-nike-react-presto-cosmic-clay.jpg" />
        <strong>Tênis da hora</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img src="https://w1.ezcdn.com.br/maze/fotos/grande/8823fg1/tenis-nike-react-presto-cosmic-clay.jpg" />
        <strong>Tênis da hora</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
