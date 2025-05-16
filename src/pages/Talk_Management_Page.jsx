import React, { useState } from 'react';
import { Box, Typography, Grid, Paper, Button } from '@mui/material';
import TalkForm from '../components/TalkForm';
import TalkCard from '../components/TalkCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const initialTalks = [
  { id: 1, title: 'React Basics', topic: 'React', description: 'Introduction to React', duration: 60, level: 'Débutant', room: 'Salle 1', day: 'Lundi' },
  { id: 2, title: 'Advanced Symfony', topic: 'Symfony', description: 'Deep dive into Symfony', duration: 90, level: 'Avancé', room: 'Salle 2', day: 'Lundi' }
];

export default function TalkManagementPage() {
  const [talks, setTalks]       = useState(initialTalks);
  const [showForm, setShowForm] = useState(false);

  const handleAddTalk = (newTalk) => {
    setTalks([...talks, { ...newTalk, id: talks.length + 1 }]);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
        bgcolor: '#fff'           // fond blanc pour tout l'écran
      }}
    >
      <Navbar />

      {/* Contenu principal */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          overflowY: 'auto',
          p: 3,
          bgcolor: '#fff'         // fond blanc pour la zone principale
        }}
      >
        <Typography variant="h4" color="text.primary" sx={{ mb: 4 }}>
          Gestion des Talks
        </Typography>

        <Button
          variant="contained"
          color="primary"
          onClick={() => setShowForm(!showForm)}
          sx={{ mb: 3 }}
        >
          {showForm ? 'Fermer le formulaire' : 'Ajouter un Talk'}
        </Button>

        {showForm && (
          <Paper elevation={3} sx={{ p: 3, mb: 3, bgcolor: '#fff' }}>
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
      </Box>

      <Footer />
    </Box>
  );
}
