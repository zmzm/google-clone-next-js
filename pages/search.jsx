import React from 'react';
import Head from 'next/head';
import SearchHeader from '../components/SearchHeader';

const Search = () => {
  return (
    <div>
      <Head>
        <title>Search results</title>
      </Head>
      <SearchHeader />
    </div>
  );
};

export default Search;
