import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Logo from './Logo';
import SearchInput from './SearchInput';

const Body = () => {
  const router = useRouter();
  const [url, setUrl] = useState(null);

  const goToPage = (event) => {
    event.preventDefault();

    if (url) {
      router.push(url);
    }
  };

  const handleSearch = ({ path }) => {
    setUrl(path);
  };

  const randomSearch = async () => {
    const [randomWord] = await fetch(
      'https://random-word-api.herokuapp.com/word?number=1'
    ).then((result) => result.json());

    if (randomWord) {
      const path = `/search?q=${randomWord}&searchType=`;
      router.push(path);
    }
  };

  return (
    <form className="flex flex-col items-center mt-40">
      <Logo />
      <SearchInput onHandleSearch={handleSearch} className="mt-20 mb-16 " />
      <div className="flex space-x-4">
        <button type="button" className="body-btn" onClick={goToPage}>
          Search with Google
        </button>
        <button type="button" className="body-btn" onClick={randomSearch}>
          I&apos;m feeling lucky
        </button>
      </div>
    </form>
  );
};

export default Body;
