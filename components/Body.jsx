import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import { MagnifyingGlassIcon, MicrophoneIcon } from '@heroicons/react/24/solid';
import Logo from './Logo';

const Body = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const handleSearch = (event) => {
    event.preventDefault();
    const {
      current: { value },
    } = searchInputRef;
    const trimedValue = value.trim();

    if (trimedValue) {
      const term = trimedValue.split(' ').join('+');

      router.push(`/search?q=${term}`);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch(event);
    }
  };

  return (
    <form className="flex flex-col items-center mt-40">
      <Logo />
      <div className="body-search">
        <MagnifyingGlassIcon className="h-5 mr-3" />
        <input
          className="flex-grow focus:outline-none"
          type="text"
          ref={searchInputRef}
          onKeyDown={handleKeyDown}
        />
        <MicrophoneIcon className="h-5 ml-3" />
      </div>
      <div className="flex space-x-4">
        <button type="button" className="body-btn" onClick={handleSearch}>
          Search with Google
        </button>
        <button type="button" className="body-btn">
          I&apos;m feeling lucky
        </button>
      </div>
    </form>
  );
};

export default Body;
