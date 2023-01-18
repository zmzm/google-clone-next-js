import React from 'react';
import ResultItem from './ResultItem';

const ImageSearchResults = ({ searchData }) => {
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4 mt-10">
      {renderResults()}
    </div>
  );
};

export default ImageSearchResults;
