import React from 'react';
import ResultItem from './ResultItem';

const SearchResults = ({
  searchData,
  searchInformation: { formattedSearchTime, formattedTotalResults },
}) => {
  const renderResults = () =>
    searchData.map(({ displayLink, link, title, htmlSnippet }) => (
      <ResultItem
        key={link}
        displayLink={displayLink}
        link={link}
        title={title}
        snippet={htmlSnippet}
      />
    ));

  return (
    <div className="w-full pl-72">
      <p className="text-gray-500 text-sm mb-5 mt-3">
        About {formattedTotalResults} results ({formattedSearchTime} sec.)
      </p>
      {renderResults()}
    </div>
  );
};

export default SearchResults;
