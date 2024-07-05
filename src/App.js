import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Presentation from './Presentation';
import Projects from './Projects';
import Footer from './Footer';
import LoginPage from './LoginPage';
import AdminPage from './AdminPage';
import NotFoundPage from './NotFoundPage';
import { UserProvider } from './contexts/UserContext';
import { ProjectsProvider } from './contexts/ProjectsContext';

const App = () => {
  return (
    <UserProvider>
      <ProjectsProvider>
        <Router>
          <div className="App m-4 border-2 border-black dark:bg-gray-900 dark:border-gray-700">
            <Header />
            <Routes>
              <Route path="/" element={
                <>
                  <Presentation />
                  <Projects />
                  <Footer />
                </>
              } />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </Router>
      </ProjectsProvider>
    </UserProvider>
  );
}

export default App;
