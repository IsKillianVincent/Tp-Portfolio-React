import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Page non trouvée</h1>
      <p className="text-lg mb-4">La page que vous recherchez n'existe pas.</p>
      <Link to="/" className="text-blue-500">Retour à l'accueil</Link>
    </div>
  );
};

export default NotFoundPage;
