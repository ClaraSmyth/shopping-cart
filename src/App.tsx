import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Home, Store, CheckoutModal } from './components';

function App() {
  return (
    <div className="grid h-full overflow-hidden bg-base-300 sm:grid-rows-[min-content,1fr]">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
      </Routes>

      <CheckoutModal />
    </div>
  );
}

export default App;
