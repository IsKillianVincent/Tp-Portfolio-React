import React, { useContext } from 'react';
import { ProjectsContext } from './contexts/ProjectsContext';
import useFetchData from './hooks/useFetchData';

const Projects = () => {
  const { projects, loading, error } = useContext(ProjectsContext);
  const { data: userInfo } = useFetchData('/user.json');

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur: {error.message}</p>;

  return (
    <section className="px-4 py-8 md:px-8 lg:px-24">
      <h2 className="text-2xl font-bold mb-4">Mes Projets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="border border-gray-300 p-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold mb-2">{project.description}</h3>
            {project.image && (
              <img src={project.image} alt={project.description} className="w-full h-auto rounded-md" />
            )}
          </div>
        ))}
      </div>
      {userInfo && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">À propos de moi</h2>
          <p>{userInfo.bio}</p>
        </div>
      )}
    </section>
  );
};

export default Projects;
