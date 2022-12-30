import React from 'react';
import Card from './Card';

function Store() {
  return (
    <div className="grid flex-grow auto-rows-max grid-cols-4 gap-4 overflow-scroll p-4">
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  );
}

export default Store;
