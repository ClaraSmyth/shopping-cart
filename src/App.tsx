import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Home, Store, CheckoutModal, MobileNav, Game } from './components';
import { useCart } from './hooks';

function App() {
  const { cart, updateCart } = useCart();
  const [search, setSearch] = useState('');

  return (
    <div className="grid h-full overflow-x-hidden overflow-y-scroll bg-base-300 pb-16 sm:grid-rows-[min-content,1fr] sm:pb-0">
      <Navbar cart={cart} setSearch={setSearch} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store cart={cart} updateCart={updateCart} search={search} />} />
        <Route path="/store/:slug" element={<Game cart={cart} updateCart={updateCart} />} />
      </Routes>

      <MobileNav cart={cart} setSearch={setSearch} />
      <CheckoutModal cart={cart} updateCart={updateCart} />
    </div>
  );
}

export default App;
