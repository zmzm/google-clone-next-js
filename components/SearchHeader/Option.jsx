import React from 'react';

const Option = ({ title, Icon, active, onClick }) => {
  const handleOnClick = () => {
    onClick(title);
  };

  return (
    // eslint-disable-next-line
    <div
      onClick={handleOnClick}
      className={`flex items-center border-b-4 border-transparent hover:border-blue-500 hover:text-blue-500 cursor-pointer pb-3 ${
        active && 'text-blue-500 border-blue-500'
      }`}
    >
      <Icon className="h-4 mr-2" />
      <p>{title}</p>
    </div>
  );
};

export default Option;
