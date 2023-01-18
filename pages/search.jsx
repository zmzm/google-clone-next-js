import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import SearchHeader from '../components/SearchHeader';
import SearchResults from '../components/SearchResults';
import Pagination from '../components/Pagination';
import dataMock from '../mocks/dataMock.json';
import ImageSearchResults from '../components/ImageSearchResults';

const Search = ({ data: { searchInformation, items } }) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Search results</title>
      </Head>
      <SearchHeader />
      {router.query.searchType === 'image' ? (
        <ImageSearchResults searchData={items} />
      ) : (
        <SearchResults
          searchInformation={searchInformation}
          searchData={items}
        />
      )}
      <Pagination />
    </div>
  );
};

export async function getServerSideProps(context) {
  const useMock = false;
  const { query: { q, searchType, start } = {} } = context;
  const data = useMock
    ? dataMock
    : await fetch(
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
