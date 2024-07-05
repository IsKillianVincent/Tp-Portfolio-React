import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from './contexts/UserContext';

const Header = () => {
  const { token, logout } = useUser();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header className="p-4 md:p-8 border-b-2 border-black dark:border-gray-700 flex justify-between items-center dark:bg-gray-900">
      <Link to="/" className="text-base md:text-lg dark:text-white">Killian VINCENT</Link>
      <nav className="flex items-center">
        {token ? (
          <>
            <Link to="/admin" className="text-base md:text-lg mr-4 dark:text-white">Modifier les projets</Link>
            <button onClick={logout} className="text-base md:text-lg dark:text-white">Déconnexion</button>
          </>
        ) : (
          <Link to="/login" className="text-base md:text-lg dark:text-white">Se connecter</Link>
        )}
        <label className="relative inline-flex items-center cursor-pointer ml-4">
          <input 
            type="checkbox" 
            checked={darkMode} 
            onChange={() => setDarkMode(!darkMode)} 
            className="sr-only peer" 
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"></div>
        </label>
      </nav>
    </header>
  );
};

export default Header;
