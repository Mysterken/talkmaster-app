import React, { useState } from 'react';
import { TextField, Button, Typography, Alert } from '@mui/material';
import axios from 'axios';

const MagicLinkLogin = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/magic-link', { email });
      if (response.status === 200) {
        setMessage("Un lien magique a été envoyé à votre adresse e-mail.");
        setError('');
      }
    } catch (err) {
      setError("Une erreur est survenue. Vérifiez l'adresse e-mail.");
      setMessage('');
    }
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Connexion par lien magique
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Adresse e-mail"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="primary">
          Envoyer le lien magique
        </Button>
      </form>
      {message && <Alert severity="success" sx={{ mt: 2 }}>{message}</Alert>}
      {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
    </div>
  );
};

export default MagicLinkLogin;
