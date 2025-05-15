import React from 'react';
import { useNavigate } from 'react-router';

function Dashboard() {
  const navigate = useNavigate();
  const token = localStorage.getItem('auth_token');

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    navigate('/');
  };

  if (!token) {
    navigate('/');
    return null;
  }

  return (
    <div>
      <h2>Bienvenue sur votre tableau de bord</h2>
      <p>Vous êtes connecté avec le token : {token}</p>
      <button onClick={handleLogout}>Se déconnecter</button>
    </div>
  );
}

export default Dashboard;
