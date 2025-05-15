import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';

function MagicLink() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');

    if (token) {
      localStorage.setItem('auth_token', token);
      navigate('/home');
    } else {
      navigate('/');
    }
  }, [location, navigate]);

  return (
    <div>
      <p>Vérification du lien magique...</p>
    </div>
  );
}

export default MagicLink;
