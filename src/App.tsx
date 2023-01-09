import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Home, Store, CheckoutModal, MobileNav, Game } from './components';
import { useCart, useSearch } from './hooks';

function App() {
  const { cart, updateCart } = useCart();
  const { search, updateSearch } = useSearch();

  return (
    <div className="grid h-full overflow-x-hidden overflow-y-scroll bg-base-300 pb-16 sm:grid-rows-[min-content,1fr] sm:pb-0">
      <Navbar cart={cart} updateSearch={updateSearch} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/store"
          element={<Store cart={cart} updateCart={updateCart} search={search} updateSearch={updateSearch} />}
        />
        <Route path="/store/:slug" element={<Game cart={cart} updateCart={updateCart} />} />
      </Routes>

      <MobileNav cart={cart} updateSearch={updateSearch} />
      <CheckoutModal cart={cart} updateCart={updateCart} />
    </div>
  );
}

export default App;
