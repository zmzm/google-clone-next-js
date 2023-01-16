import React from 'react';
import { useRouter } from 'next/router';
import Logo from '../Logo';
import SearchInput from '../SearchInput';
import User from '../User';
import Options from './Options';

const SearchHeader = () => {
  const router = useRouter();

  return (
    <header className="sticky top-0">
      <div className="flex w-full p-6 pl-32 items-center">
        <Logo width={92} height={30} className="object-contain" />
        <SearchInput className="ml-10" defaultValue={router.query.q} />
        <User />
      </div>
      <Options />
    </header>
  );
};

export default SearchHeader;