import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';
import { IUseCartOutput } from '../hooks/useCart';
import { IUseSearchOutput } from '../hooks/useSearch';
import { getGameList } from '../api';
import { MdSettings } from 'react-icons/md';
import { IGame } from '../types';

interface Props {
  cart: IUseCartOutput['cart'];
  updateCart: IUseCartOutput['updateCart'];
  search: [string, number];
  updateSearch: IUseSearchOutput['updateSearch'];
}

function Store(props: Props) {
  const { cart, updateCart, search, updateSearch } = props;
  const [data, setData] = useState<IGame[] | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const container = useRef<HTMLDivElement | null>(null);

  const scrollToTop = () => {
    container?.current?.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    scrollToTop();
  }, [data]);

  useEffect(() => {
    setLoading(true);

    getGameList(search[0], search[1])
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
  }, [search]);

  if (error) {
    return (
      <div className="flex items-center justify-center text-center text-3xl font-bold">
        Looks like something went wrong! 😭
      </div>
    );
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
      {data?.map((obj: any, index) => (
        <Card key={obj.id} index={index} game={obj} cart={cart} updateCart={updateCart} />
      ))}
      <div className="btn-group col-span-full justify-self-center">
        <button onClick={updateSearch.pageDown} className="btn">
          «
        </button>
        <button onClick={scrollToTop} className="btn">
          Page {search[1]}
        </button>
        <button onClick={updateSearch.pageUp} className="btn">
          »
        </button>
      </div>
    </div>
  );
}

export default Store;
