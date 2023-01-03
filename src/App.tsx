import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Home, Store, CheckoutModal, MobileNav } from './components';
import { useCart } from './hooks';

function App() {
  const { cart, updateCart } = useCart();

  return (
    <div className="grid h-full overflow-x-hidden overflow-y-scroll bg-base-300 pb-16 sm:grid-rows-[min-content,1fr] sm:pb-0">
      <Navbar cart={cart} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store updateCart={updateCart} />} />
      </Routes>

      <MobileNav cart={cart} />
      <CheckoutModal cart={cart} updateCart={updateCart} />
    </div>
  );
}

export default App;
