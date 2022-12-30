import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Home, Store } from './components';

function App() {
  return (
    <div className="flex h-full flex-col bg-base-300">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </div>
  );
}

export default App;
