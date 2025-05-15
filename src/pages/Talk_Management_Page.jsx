import React, { useState } from 'react';
import { Container, Typography, Grid, Paper, Button } from '@mui/material';
import TalkForm from '../components/TalkForm';
import TalkCard from '../components/TalkCard';

const initialTalks = [
  { id: 1, title: 'React Basics', topic: 'React', description: 'Introduction to React', duration: 60, level: 'Débutant', room: 'Salle 1', day: 'Lundi' },
  { id: 2, title: 'Advanced Symfony', topic: 'Symfony', description: 'Deep dive into Symfony', duration: 90, level: 'Avancé', room: 'Salle 2', day: 'Lundi' }
];

const TalkManagementPage = () => {
  const [talks, setTalks] = useState(initialTalks);
  const [showForm, setShowForm] = useState(false);

  const handleAddTalk = (newTalk) => {
    setTalks([...talks, { ...newTalk, id: talks.length + 1 }]);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ mb: 4 }}>Gestion des Talks</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setShowForm(!showForm)}
        sx={{ mb: 3 }}
      >
        {showForm ? 'Fermer le formulaire' : 'Ajouter un Talk'}
      </Button>
      {showForm && (
        <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
          <TalkForm onAddTalk={handleAddTalk} />
        </Paper>
      )}
      <Grid container spacing={3}>
        {talks.map((talk) => (
          <Grid item xs={12} md={6} lg={4} key={talk.id}>
            <TalkCard talk={talk} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TalkManagementPage;