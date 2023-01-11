import React from 'react';

const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-[50%] translate-x-[-50%] p-6">
      <div className="flex flex-col items-center">
        <p className="text-gray-700 text-sm whitespace-nowrap">
          Copyright &copy; {new Date().getFullYear()} Vladislav Kovalskij
        </p>
        <p className="text-gray-700 text-sm whitespace-nowrap">
          This website is created for learning purposes
        </p>
      </div>
    </footer>
  );
};

export default Footer;
