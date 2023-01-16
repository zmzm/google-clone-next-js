import React from 'react';
import Head from 'next/head';
import SearchHeader from '../components/SearchHeader';
import dataMock from '../mocks/dataMock.json';

const Search = ({ data }) => {
  console.log(data);
  return (
    <div>
      <Head>
        <title>Search results</title>
      </Head>
      <SearchHeader />
    </div>
  );
};

export async function getServerSideProps() {
  // const { query: { q, searchType } = {} } = context;
  /* const data = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_SEARCH_API_KEY}&cx=${process.env.GOOGLE_SEARCH_CX_KEY}&q=${q}&searchType=${searchType}`
  ).then((response) => response.json()); */
  return {
    props: { data: dataMock },
  };
}

export default Search;
