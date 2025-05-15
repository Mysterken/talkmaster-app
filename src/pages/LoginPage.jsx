import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Paper } from '@mui/material';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email) {
      setMessage(`Un lien magique a été envoyé à ${email}`);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 5 }}>
        <Typography variant="h5" sx={{ mb: 3 }}>Connexion via Magic Link</Typography>
        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Adresse e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 3 }}
          />
          <Button type="submit" variant="contained" color="primary">
            Envoyer le lien magique
          </Button>
        </form>
        {message && (
          <Typography variant="subtitle1" color="green" sx={{ mt: 3 }}>
            {message}
          </Typography>
        )}
      </Paper>
    </Container>
  );
};

export default LoginPage;
