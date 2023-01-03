import { useState, useCallback } from 'react';
import { Game } from '../types';

export interface IUseCartOutput {
  cart: Game[];
  updateCart: {
    add: (obj: Game) => void;
    remove: (obj: Game) => void;
    changeQty: (obj: Game, num: number) => void;
    empty: () => void;
  };
}

function useCart(): IUseCartOutput {
  const [cart, setCart] = useState<Game[]>([]);

  const add = useCallback((obj: Game) => {
    setCart((prev) => {
      if (prev.some((item) => item.id === obj.id)) return [...prev];
      return [...prev, obj];
    });
  }, []);

  const remove = useCallback((obj: Game) => setCart((prev) => [...prev.filter((item) => item.id !== obj.id)]), []);

  const changeQty = useCallback((obj: Game, num: number) => {
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
