import React from 'react';
import parse from 'html-react-parser';

const ResultItem = ({ displayLink, link, title, snippet }) => {
  return (
    <div key={link} className="w-[50%] mb-10">
      <a href={link} className="group">
        <p className="text-sm">{displayLink}</p>
        <h3 className="text-xl text-blue-800 group-hover:underline font-medium truncate">
          {title}
        </h3>
      </a>
      <p className="text-sm text-gray-500">{parse(snippet)}</p>
    </div>
  );
};

export default ResultItem;
