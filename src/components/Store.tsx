import React from 'react';
import Card from './Card';

function Store() {
  return (
    <div className="grid auto-rows-max grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] gap-4 overflow-scroll p-4">
      <Card name={'Game Name'} price={19.99} image={'https://placeimg.com/400/400/arch'}></Card>
      <Card name={'Game Name'} price={19.99} image={'https://placeimg.com/400/400/arch'}></Card>
      <Card name={'Game Name'} price={19.99} image={'https://placeimg.com/400/400/arch'}></Card>
      <Card name={'Game Name'} price={19.99} image={'https://placeimg.com/400/400/arch'}></Card>
      <Card name={'Game Name'} price={19.99} image={'https://placeimg.com/400/400/arch'}></Card>
      <Card name={'Game Name'} price={19.99} image={'https://placeimg.com/400/400/arch'}></Card>
      <Card name={'Game Name'} price={19.99} image={'https://placeimg.com/400/400/arch'}></Card>
      <Card name={'Game Name'} price={19.99} image={'https://placeimg.com/400/400/arch'}></Card>
    </div>
  );
}

export default Store;
