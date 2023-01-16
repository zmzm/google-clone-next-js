import React from 'react';
import { useRouter } from 'next/router';
import { MagnifyingGlassIcon, PhotoIcon } from '@heroicons/react/24/solid';
import Option from './Option';

const Options = () => {
  const router = useRouter();
  const allOptionActive =
    router.query.searchType === '' || !router.query.searchType;
  const imageOptionActive = router.query.searchType === 'image';

  const getSearchType = (title) => (title === 'Images' ? 'image' : '');

  const handleTabClick = (title) => {
    const searchType = getSearchType(title);
    router.push(`/search?q=${router.query.q}&searchType=${searchType}`);
  };

  return (
    <div className="flex space-x-8 select-none w-full justify-start text-gray-700 text-sm pl-72 border-b">
      <Option
        id="all"
        title="All"
        Icon={MagnifyingGlassIcon}
        active={allOptionActive}
        onClick={handleTabClick}
      />
      <Option
        id="image"
        title="Images"
        Icon={PhotoIcon}
        active={imageOptionActive}
        onClick={handleTabClick}
      />
    </div>
  );
};

export default Options;
