import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Home, Store, CheckoutModal, MobileNav } from './components';

function App() {
  return (
    <div className="grid h-full overflow-x-hidden overflow-y-scroll bg-base-300 pb-16 sm:grid-rows-[min-content,1fr] sm:pb-0">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
      </Routes>

      <MobileNav />
      <CheckoutModal />
    </div>
  );
}

export default App;
