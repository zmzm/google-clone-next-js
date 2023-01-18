import React from 'react';
import Head from 'next/head';
import SearchHeader from '../components/SearchHeader';
import SearchResults from '../components/SearchResults';
import Pagination from '../components/Pagination';

const Search = ({ data: { searchInformation, items } }) => (
  <div>
    <Head>
      <title>Search results</title>
    </Head>
    <SearchHeader />
    <SearchResults searchInformation={searchInformation} searchData={items} />
    <Pagination />
  </div>
);

export async function getServerSideProps(context) {
  const { query: { q, searchType, start } = {} } = context;
  const data = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${
      process.env.GOOGLE_SEARCH_API_KEY
    }&cx=${process.env.GOOGLE_SEARCH_CX_KEY}&q=${q}${
      searchType && `&searchType=${searchType}`
    }&start=${start || '1'}`
  ).then((response) => response.json());
  return {
    props: { data },
  };
}

export default Search;
