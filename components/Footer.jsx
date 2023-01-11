import React from 'react';

const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-[50%] translate-x-[-50%] p-6">
      <p className="text-gray-700 text-sm">
        Copyright &copy; {new Date().getFullYear()} Vladislav Kovalskij
      </p>
    </footer>
  );
};

export default Footer;
