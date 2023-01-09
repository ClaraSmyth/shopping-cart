import { useState, useCallback } from 'react';

export interface IUseSearchOutput {
  search: Search;
  updateSearch: {
    newSearch: (string: string) => void;
    pageUp: () => void;
    pageDown: () => void;
    reset: () => void;
  };
}

type Search = [string, number];

function useSearch(): IUseSearchOutput {
  const [search, setSearch] = useState<Search>(['', 1]);

  const newSearch = useCallback((string: string) => {
    setSearch([string, 1]);
  }, []);

  const pageUp = useCallback(() => {
    setSearch((prev: Search) => {
      return [prev[0], prev[1] + 1];
    });
  }, []);

  const pageDown = useCallback(() => {
    setSearch((prev: Search) => {
      return [prev[0], prev[1] === 1 ? prev[1] : prev[1] - 1];
    });
  }, []);

  const reset = useCallback(() => setSearch(['', 1]), []);

  return {
    search,
    updateSearch: {
      newSearch,
      pageUp,
      pageDown,
      reset,
    },
  };
}

export default useSearch;
