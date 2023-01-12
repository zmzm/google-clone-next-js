import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import Logo from './Logo';
import SearchInput from './SearchInput';

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
      <SearchInput
        ref={searchInputRef}
        onHandleSearch={handleKeyDown}
        className="mt-20 mb-16 "
      />
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
