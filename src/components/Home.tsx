import React from 'react';
import { Link } from 'react-router-dom';
import { SiGithub } from 'react-icons/si';

function Home() {
  return (
    <div className="relative -z-0 flex w-full items-center justify-center overflow-clip">
      <div className="flex max-w-screen-2xl flex-col place-items-center gap-4 p-4 sm:p-12">
        {/* Header */}
        <h1 className="text-center text-[clamp(2rem,0.397rem+8.547vw,4.5rem)] font-bold leading-none">
          The Best Place To <br /> Find And Buy <br /> The Latest Games
        </h1>

        {/* Secondary Text */}
        <p className="flex-wrap text-center text-[clamp(1rem,0.872rem+0.684vw,1.2rem)] text-base sm:max-w-[60%]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit beatae tempore excepturi quis non eligendi
          autem culpa
        </p>

        {/* Button */}
        <Link to="/store" className="btn-primary btn m-auto w-max sm:m-0 md:btn-lg">
          Explore Now
        </Link>

        {/* Styled circles */}
        {/* <div
          style={{ backfaceVisibility: 'hidden' }}
          className="absolute -left-1/2 -top-[15%] -z-10 aspect-square w-[80%] rounded-full bg-secondary-focus"
        ></div> */}
        <div
          style={{ backfaceVisibility: 'hidden', maskRepeat: 'no-repeat' }}
          className="mask mask-star absolute -left-[9%] -top-[14vw] -z-10 aspect-square h-[50vw] rotate-12 bg-secondary-focus"
        ></div>
        <div className="absolute bottom-[5%] -right-[15%] -z-10 aspect-square w-[40%] rotate-45 rounded-full bg-accent"></div>
        <div className="absolute bottom-0 left-1 flex gap-2 text-sm text-base-content/40">
          <a className="flex items-center gap-1 font-semibold" href="https://github.com/ClaraSmyth">
            Clara Smyth <SiGithub />
          </a>
          |
          <p>
            API provided by{' '}
            <a className="font-semibold" href="https://rawg.io/">
              RAWG
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
