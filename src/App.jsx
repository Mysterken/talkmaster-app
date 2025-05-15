import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TalkManagementPage from './pages/TalkManagementPage';
import PlanningPage from './pages/PlanningPage';
import LoginPage from './pages/LoginPage';

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
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/manage-talks" element={<TalkManagementPage talks={talks} addTalk={addTalk} />} />
        <Route path="/planning" element={<PlanningPage talks={talks} />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;