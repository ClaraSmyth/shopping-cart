import React, { useState, useEffect } from 'react';
import Card from './Card';
import { IUseCartOutput } from '../hooks/useCart';
import { getGameList } from '../api';
import { MdSettings } from 'react-icons/md';
import { IGame } from '../types';

interface Props {
  cart: IUseCartOutput['cart'];
  updateCart: IUseCartOutput['updateCart'];
}

function Store(props: Props) {
  const { cart, updateCart } = props;
  const [data, setData] = useState<IGame[] | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGameList()
      .then((result) => {
        const modifiedResponse = result.results.map((item) => {
          // Adds a fake price to each game
          const price = item.id % 60 < 10 ? 10 : item.id % 60;
          return { ...item, price: price, quantity: 1 };
        });

        setData(modifiedResponse);
        setError(false);
        setLoading(false);
      })
      .catch(() => setError(true));
  }, []);

  if (error) {
    return <div className="flex items-center justify-center text-center text-2xl">Looks like an error occured! 😭</div>;
  }

  if (loading) {
    return (
      <div className="relative flex items-center justify-center gap-2 text-center text-3xl font-bold">
        <div className="animate-[spin_2400ms_linear_infinite]">
          <MdSettings size={'2em'} />
        </div>
        <p>Loading</p>
      </div>
    );
  }

  return (
    <div className="grid auto-rows-max grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] gap-4 overflow-scroll p-4">
      {data?.map((obj: any) => (
        <Card key={obj.id} game={obj} cart={cart} updateCart={updateCart} />
      ))}
    </div>
  );
}

export default Store;
