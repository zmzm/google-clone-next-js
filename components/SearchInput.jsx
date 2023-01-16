import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { MagnifyingGlassIcon, MicrophoneIcon } from '@heroicons/react/24/solid';

const SearchInput = ({ className, defaultValue, onHandleSearch }) => {
  const searchInputRef = useRef(null);
  const [url, setUrl] = useState(null);
  const router = useRouter();

  const handleSearch = (event) => {
    event.preventDefault();
    const {
      current: { value },
    } = searchInputRef;
    const trimedValue = value.trim();

    if (trimedValue) {
      const term = trimedValue.split(' ').join('+');
      const path = `/search?q=${term}&searchType=${
        router.query.searchType || ''
      }`;

      onHandleSearch && onHandleSearch({ value: trimedValue, path });
      setUrl(path);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && url) {
      event.preventDefault();
      router.push(url);
    }
  };

  return (
    <div className={`body-search ${className}`}>
      <MagnifyingGlassIcon className="h-5 mr-3" />
      <input
        className="flex-grow focus:outline-none"
        type="text"
        ref={searchInputRef}
        defaultValue={defaultValue}
        onKeyDown={handleKeyDown}
        onChange={handleSearch}
      />
      <MicrophoneIcon className="h-5 ml-3" />
    </div>
  );
};

export default SearchInput;
