import React from 'react';
import { Link } from 'react-router-dom';
import { SiGithub } from 'react-icons/si';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="relative -z-0 flex w-full items-center justify-center overflow-clip">
      <div className="flex max-w-screen-2xl flex-col place-items-center gap-4 p-4 sm:p-12">
        {/* Header */}
        <h1 className="text-center text-[clamp(2rem,1.342rem+3.509vw,4.5rem)] font-bold leading-none">
          The Best Place To <br /> Find And Buy <br /> The{' '}
          <span
            style={{
              background: 'linear-gradient(to right, hsl(var(--s)), hsl(var(--a)))',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Latest Games
          </span>
        </h1>

        {/* Secondary Text */}
        <p className="flex-wrap text-center text-[clamp(0.9rem,0.821rem+0.421vw,1.2rem)] text-base sm:max-w-[60%]">
          We stock the largest online collection of games from every platform imaginable
        </p>

        {/* Button */}
        <Link to="/store" className="btn-primary btn m-auto w-max sm:m-0 md:btn-lg">
          Explore Now
        </Link>

        {/* Styled circles */}
        <motion.div
          initial={{ translateX: '-10%', translateY: '-10%', rotate: '10deg' }}
          animate={{ translateX: '0', translateY: '0', rotate: '15deg' }}
          transition={{ type: 'spring', stiffness: 30 }}
          style={{ backfaceVisibility: 'hidden', maskRepeat: 'no-repeat' }}
          className="mask mask-star absolute -left-[9%] -top-[14vw] -z-10 aspect-square h-[50vw] rotate-45 bg-secondary"
        ></motion.div>
        <motion.div
          initial={{ translateX: '10%', translateY: '10%' }}
          animate={{ translateX: '0', translateY: '0' }}
          transition={{ type: 'spring', stiffness: 30 }}
          className="absolute bottom-[5%] -right-[15%] -z-10 aspect-square w-[40%] rounded-full bg-accent"
        ></motion.div>
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
