import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', mt: 5 }}>
      <Typography variant="h3" sx={{ mb: 3 }}>404 - Page non trouvée</Typography>
      <Typography variant="body1" sx={{ mb: 5 }}>
        Oups ! La page que vous recherchez n'existe pas.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/">
        Retour à l'accueil
      </Button>
    </Container>
  );
};

export default NotFoundPage;
