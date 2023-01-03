import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Home, Store, CheckoutModal, MobileNav } from './components';
import { Game } from './types';

function App() {
  const [cart, setCart] = useState<Game[]>([]);

  const addToCart = (obj: Game) => setCart((prev) => [...prev, obj]);
  const removeFromCart = (obj: Game) => setCart((prev) => [...prev.filter((item) => item.id !== obj.id)]);
  const updateCartQty = (obj: Game, num: number) => {
    setCart((prev) => [...prev.map((item) => (item.id === obj.id ? { ...item, quantity: num } : item))]);
  };

  return (
    <div className="grid h-full overflow-x-hidden overflow-y-scroll bg-base-300 pb-16 sm:grid-rows-[min-content,1fr] sm:pb-0">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store addToCart={addToCart} />} />
      </Routes>

      <MobileNav />
      <CheckoutModal cart={cart} removeFromCart={removeFromCart} updateCartQty={updateCartQty} />
    </div>
  );
}

export default App;
