import React from 'react';
import Card from './Card';
import testData from '../testData.json';
import { IUseCartOutput } from '../hooks/useCart';

interface Props {
  cart: IUseCartOutput['cart'];
  updateCart: IUseCartOutput['updateCart'];
}

function Store(props: Props) {
  const { cart, updateCart } = props;
  const data = testData.results.map((element) => ({ ...element, price: 19.99, quantity: 1 }));

  return (
    <div className="grid auto-rows-max grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] gap-4 overflow-scroll p-4">
      {data.map((obj) => (
        <Card key={obj.id} game={obj} cart={cart} updateCart={updateCart} />
      ))}
    </div>
  );
}

export default Store;
