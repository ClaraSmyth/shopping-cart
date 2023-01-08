import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';
import { IUseCartOutput } from '../hooks/useCart';
import { getGameList } from '../api';
import { MdSettings } from 'react-icons/md';
import { IGame } from '../types';

interface Props {
  cart: IUseCartOutput['cart'];
  updateCart: IUseCartOutput['updateCart'];
  search: string;
}

function Store(props: Props) {
  const { cart, updateCart, search } = props;
  const [data, setData] = useState<IGame[] | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const container = useRef<HTMLDivElement | null>(null);

  const scrollToTop = () => {
    container?.current?.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    getGameList(search, page)
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
  }, [search, page]);

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
    <div
      ref={container}
      className="grid auto-rows-max grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] gap-4 overflow-scroll p-4 md:grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] md:gap-6 md:p-6"
    >
      {data?.map((obj: any) => (
        <Card key={obj.id} game={obj} cart={cart} updateCart={updateCart} />
      ))}
      <div className="btn-group col-span-full justify-self-center">
        <button
          onClick={() => {
            setPage((prev) => (prev === 1 ? prev : prev - 1));
            scrollToTop();
          }}
          className="btn"
        >
          «
        </button>
        <button onClick={scrollToTop} className="btn">
          Page {page}
        </button>
        <button
          onClick={() => {
            setPage((prev) => prev + 1);
            scrollToTop();
          }}
          className="btn"
        >
          »
        </button>
      </div>
    </div>
  );
}

export default Store;
