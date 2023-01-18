import React from 'react';
import { useRouter } from 'next/router';
import Logo from '../Logo';
import SearchInput from '../SearchInput';
import User from '../User';
import Options from './Options';

const SearchHeader = () => {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push('/');
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 pl-32 items-center">
        <Logo
          width={92}
          height={30}
          className="object-contain"
          onClick={handleLogoClick}
        />
        <SearchInput className="ml-10" defaultValue={router.query.q} />
        <User />
      </div>
      <Options />
    </header>
  );
};

export default SearchHeader;
