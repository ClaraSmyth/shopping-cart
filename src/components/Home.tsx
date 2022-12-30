import React from 'react';

function Home() {
  return (
    <div className="flex flex-grow items-center justify-center">
      <div className="flex w-min flex-col gap-6 p-4">
        {/* Header */}
        <h1 className="min-w-max text-7xl font-bold">
          The Best Place To <br /> Find And Buy <br /> The Latest Games
        </h1>

        {/* Secondary Text */}
        <p className="flex-wrap text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit beatae tempore excepturi quis non eligendi
          autem culpa
        </p>

        {/* Button */}
        <button className="btn max-w-max">Explore Now</button>
      </div>

      <div className="">
        {/* Primary Image */}
        <img src="https://placeimg.com/400/400/arch" alt="" />
      </div>
    </div>
  );
}

export default Home;
