import React from 'react';
import parse from 'html-react-parser';

const ResultItem = ({ displayLink, link, title, snippet }) => (
  <div key={link} className="w-fit mb-10">
    <a href={link} className="group">
      <img
        className="group-hover:shadow-xl rounded-md  w-full h-60 object-contain"
        src={link}
        alt={title}
      />
      <p className="text-sm group-hover:underline">{displayLink}</p>
      <p className="text-sm text-gray-500 group-hover:underline w-40 truncate">
        {parse(snippet)}
      </p>
    </a>
  </div>
);

export default ResultItem;
