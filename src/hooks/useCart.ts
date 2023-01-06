import { useState, useCallback } from 'react';
import { IGame } from '../types';

export interface IUseCartOutput {
  cart: IGame[];
  updateCart: {
    add: (obj: IGame) => void;
    remove: (obj: IGame) => void;
    changeQty: (obj: IGame, num: number) => void;
    empty: () => void;
  };
}

function useCart(): IUseCartOutput {
  const [cart, setCart] = useState<IGame[]>([]);

  const add = useCallback((obj: IGame) => {
    setCart((prev) => {
      if (prev.some((item) => item.id === obj.id)) return [...prev];
      return [...prev, obj];
    });
  }, []);

  const remove = useCallback((obj: IGame) => setCart((prev) => [...prev.filter((item) => item.id !== obj.id)]), []);

  const changeQty = useCallback((obj: IGame, num: number) => {
    setCart((prev) => [...prev.map((item) => (item.id === obj.id ? { ...item, quantity: num } : item))]);
  }, []);

  const empty = useCallback(() => setCart([]), []);

  return {
    cart,
    updateCart: {
      add,
      remove,
      changeQty,
      empty,
    },
  };
}

export default useCart;
