import React, { createContext, useState, useEffect } from 'react';

const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://127.0.0.1:3000/api/projects');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const addProject = async (newProject) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token available');
      }
  
      const response = await fetch('http://127.0.0.1:3000/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newProject),
      });
  
      if (!response.ok) {
        throw new Error('Failed to add project');
      }
  
      const addedProject = await response.json();
      setProjects([...projects, addedProject]);
    } catch (error) {
      console.error('Error adding project:', error.message);
      setError(error);
    }
  };
  
  

  const deleteProject = async (projectId) => {
    try {
      const response = await fetch(`http://127.0.0.1:3000/api/projects/${projectId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete project');
      }

      setProjects(projects.filter((project) => project.id !== projectId));
    } catch (error) {
      setError(error);
    }
  };

  return (
    <ProjectsContext.Provider value={{ projects, loading, error, addProject, deleteProject }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export { ProjectsContext };
