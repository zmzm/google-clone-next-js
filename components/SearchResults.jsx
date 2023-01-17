import React from 'react';

const SearchResults = ({
  searchInformation: { formattedSearchTime, formattedTotalResults },
}) => {
  return (
    <div className="w-full">
      <p className="text-gray-500 text-sm mb-5 mt-3 pl-72">
        About {formattedTotalResults} results ({formattedSearchTime} sec.)
      </p>
    </div>
  );
};

export default SearchResults;
