import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import SearchHeader from '../components/SearchHeader';
import dataMock from '../mocks/dataMock.json';
import SearchResults from '../components/SearchResults';

const Search = ({ data: { searchInformation } }) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.q} - Search results</title>
      </Head>
      <SearchHeader />
      <SearchResults searchInformation={searchInformation} />
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
