import React from 'react';
import Card from './Card';
import testData from '../testData.json';

interface Props {
  addToCart: Function;
}

function Store(props: Props) {
  const { addToCart } = props;
  const data = testData.results.map((element) => ({ ...element, price: 19.99 }));

  return (
    <div className="grid auto-rows-max grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] gap-4 overflow-scroll p-4">
      {data.map((obj) => (
        <Card key={obj.id} game={obj} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default Store;
