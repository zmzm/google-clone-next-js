import React, { forwardRef } from 'react';
import { MagnifyingGlassIcon, MicrophoneIcon } from '@heroicons/react/24/solid';

const SearchInput = forwardRef(
  ({ onHandleSearch, className, defaultValue }, ref) => (
    <div className={`body-search ${className}`}>
      <MagnifyingGlassIcon className="h-5 mr-3" />
      <input
        className="flex-grow focus:outline-none"
        type="text"
        ref={ref}
        defaultValue={defaultValue}
        onKeyDown={onHandleSearch}
      />
      <MicrophoneIcon className="h-5 ml-3" />
    </div>
  )
);

SearchInput.displayName = 'SearchInput';

export default SearchInput;
