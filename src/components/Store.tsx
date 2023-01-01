import React from 'react';
import Card from './Card';

function Store() {
  return (
    <div className="grid auto-rows-max grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] gap-4 overflow-scroll p-4">
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
