import React, { useState } from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import FilterPanel from '../components/Filter_Panel';
import TalkCard from '../components/TalkCard';

const mockTalks = [
  { id: 1, title: 'React Basics', topic: 'React', description: 'Introduction to React', duration: 60, level: 'Débutant', room: 'Salle 1', day: 'Lundi' },
  { id: 2, title: 'Advanced Symfony', topic: 'Symfony', description: 'Deep dive into Symfony', duration: 90, level: 'Avancé', room: 'Salle 2', day: 'Lundi' },
  { id: 3, title: 'Docker Workshop', topic: 'DevOps', description: 'Master Docker for development', duration: 120, level: 'Intermédiaire', room: 'Salle 3', day: 'Mardi' }
];

const HomePage = () => {
  const [talks, setTalks] = useState(mockTalks);
  const [filters, setFilters] = useState({ day: '', room: '', topic: '' });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const filteredTalks = talks.filter((talk) =>
    (!filters.day || talk.day === filters.day) &&
    (!filters.room || talk.room === filters.room) &&
    (!filters.topic || talk.topic.includes(filters.topic))
  );

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ mb: 4 }}>Planning des Talks</Typography>
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <FilterPanel onChange={handleFilterChange} />
      </Paper>
      <Grid container spacing={3}>
        {filteredTalks.map((talk) => (
          <Grid item xs={12} md={6} lg={4} key={talk.id}>
            <TalkCard talk={talk} />
          </Grid>
        ))}
      </Grid>
      {filteredTalks.length === 0 && (
        <Typography variant="h6" sx={{ mt: 4 }}>
          Aucun Talk trouvé pour ces critères.
        </Typography>
      )}
    </Container>
  );
};

export default HomePage;