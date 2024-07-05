import React from 'react';
import useFetchData from './hooks/useFetchData';

const Presentation = () => {
  const { data: portfolioData } = useFetchData('/data.json');

  if (!portfolioData) return null;

  return (
    <section className="px-4 py-8 md:px-8 lg:px-24 border-b-2 border-black dark:border-gray-700 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-16 dark:bg-gray-900">
      <img src={portfolioData.Avatar} alt="Avatar" className="w-24 md:w-32 rounded-full"/>
      <div className="md:text-left">
        <h2 className="mb-2 md:mb-4 text-lg md:text-xl font-semibold dark:text-white">{portfolioData.Title}</h2>
        <p className="text-sm md:text-base dark:text-gray-300">{portfolioData.SubTitle}</p>
      </div>
    </section>
  );
}

export default Presentation;
