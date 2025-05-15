import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import MagicLink from './pages/MagicLink';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/Home';
import Talk_Management_Page from './pages/Talk_Management_Page';
import Planning_Page from './pages/Planning_Page';


const App = () => {
  const [talks, setTalks] = useState([
    { id: 1, title: 'React Basics', topic: 'React', description: 'Introduction to React', duration: 60, room: 'Salle 1', day: 'Lundi', status: 'planifié' },
    { id: 2, title: 'Symfony Deep Dive', topic: 'Symfony', description: 'Advanced Symfony topics', duration: 90, room: 'Salle 2', day: 'Mardi', status: 'planifié' },
  ]);

  const addTalk = (newTalk) => {
    setTalks(prev => [...prev, { ...newTalk, id: prev.length + 1, status: 'en attente' }]);
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/magic-link" element={<MagicLink />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/manage-talks" element={<Talk_Management_Page talks={talks} addTalk={addTalk} />} />
        <Route path="/planning" element={<Planning_Page talks={talks} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
