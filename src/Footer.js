import React from 'react';
import useFetchData from './hooks/useFetchData';

const Footer = () => {
  const { data: portfolioData } = useFetchData('/data.json');

  if (!portfolioData) return null;

  return (
    <footer className="px-4 py-8 md:px-8 lg:px-24 dark:bg-gray-900 dark:text-white">
      <h2 className="mb-4 text-xl md:text-2xl font-semibold dark:text-white text-left">Me Contacter</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <p className="text-sm md:text-base">{portfolioData.FullName}</p>
        <p className="text-sm md:text-base">{portfolioData.Address}</p>
        <p className="text-sm md:text-base">{portfolioData.ZIPCode}</p>
        <p className="text-sm md:text-base">{portfolioData.City}</p>
        <p className="text-sm md:text-base">{portfolioData.Tel}</p>
        <p className="text-sm md:text-base">{portfolioData.Mail}</p>
      </div>
    </footer>
  );
}

export default Footer;
