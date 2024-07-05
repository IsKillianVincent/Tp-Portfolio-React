import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProjectsContext } from './contexts/ProjectsContext';

const AdminPage = () => {
  const navigate = useNavigate();
  const { projects, loading, error, addProject, deleteProject } = useContext(ProjectsContext);

  const handleAddProject = async () => {
    const newProject = {
      description: 'Nouveau projet',
      link: 'https://www.example.com',
    };
    await addProject(newProject);
  };

  const handleDeleteProject = async (projectId) => {
    await deleteProject(projectId);
  };

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur: {error.message}</p>;

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-2xl mb-4 font-semibold dark:text-white">Administration des projets</h2>
      <button
        onClick={handleAddProject}
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none mb-4"
      >
        Ajouter un projet
      </button>
      <ul className="divide-y divide-gray-300 w-full max-w-lg">
        {projects.map((project) => (
          <li key={project.id} className="py-4">
            <p className="text-lg font-semibold  dark:text-white">{project.description}</p>
            <p className="text-sm mb-2  dark:text-white"><a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a></p>
            <button
              onClick={() => handleDeleteProject(project.id)}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => navigate('/')}
        className="my-8 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Retour à l'accueil
      </button>
    </div>
  );
};

export default AdminPage;
