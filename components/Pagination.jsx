import React from 'react';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';

const Pagination = () => {
  const router = useRouter();
  const startIndex = Number.parseFloat(router.query.start) || 1;

  const getPages = (index) =>
    `/search?q=${router.query.q}&searchType=${router.query.searchType}&start=${index}`;

  return (
    <div className="pl-72 w-[60%] mb-5 flex justify-between text-blue-500">
      {startIndex > 10 && (
        <Link href={getPages(startIndex - 10)}>
          <div className="cursor-pointer flex flex-col hover:underline">
            <ChevronLeftIcon className="h-4 mr-2" />
            <p>Previous 10 results</p>
          </div>
        </Link>
      )}
      {startIndex < 90 && (
        <Link href={getPages(startIndex + 10)}>
          <div className="cursor-pointer flex flex-col hover:underline">
            <ChevronRightIcon className="h-4 mr-2" />
            <p>Next 10 results</p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Pagination;
