import React from 'react';
import { MagnifyingGlassIcon, MicrophoneIcon } from '@heroicons/react/24/solid';
import Logo from './Logo';

const Body = () => {
  return (
    <form className="flex flex-col items-center mt-40">
      <Logo />
      <div className="body-search">
        <MagnifyingGlassIcon className="h-5 mr-3" />
        <input className="flex-grow focus:outline-none" type="text" />
        <MicrophoneIcon className="h-5 ml-3" />
      </div>
      <div className="flex space-x-4">
        <button type="button" className="body-btn">
          Search with Google
        </button>
        <button type="button" className="body-btn">
          I'm feeling lucky
        </button>
      </div>
    </form>
  );
};

export default Body;
