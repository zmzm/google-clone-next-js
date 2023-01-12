import React from 'react';
import { useRouter } from 'next/router';
import Logo from './Logo';
import SearchInput from './SearchInput';
import User from './User';

const SearchHeader = () => {
  const router = useRouter();

  return (
    <header className="sticky top-0">
      <div className="flex w-full p-6 pl-32 items-center">
        <Logo width={92} height={30} className="object-contain" />
        <SearchInput
          ref={null}
          onHandleSearch={() => {}}
          className="ml-10"
          defaultValue={router.query.q}
        />
        <User />
      </div>
    </header>
  );
};

export default SearchHeader;
