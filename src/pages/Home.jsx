import React, { useState } from 'react';
import { Box, Grid, Paper, Typography, TextField } from '@mui/material';
import FilterPanel from '../components/Filter_Panel'; // si vous gardez ce composant, sinon utilisez directement les TextFields
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const hours = Array.from({ length: 11 }, (_, i) => `${9 + i}h`);
const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];

const mockTalks = [
  { id: 1, title: 'React Basics', topic: 'React', description: 'Introduction to React', duration: 60, level: 'Débutant', room: 'Salle 1', day: 'Lundi', time: '9h' },
  { id: 2, title: 'Advanced Symfony', topic: 'Symfony', description: 'Deep dive into Symfony', duration: 90, level: 'Avancé', room: 'Salle 2', day: 'Lundi', time: '10h' },
  { id: 3, title: 'Docker Workshop', topic: 'DevOps', description: 'Master Docker for development', duration: 120, level: 'Intermédiaire', room: 'Salle 3', day: 'Mardi', time: '11h' }
];

export default function HomePage() {
  const [talks] = useState(mockTalks);
  const [filters, setFilters] = useState({ day: '', room: '', topic: '' });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const filteredTalks = talks.filter(talk =>
    (!filters.day || talk.day.toLowerCase().includes(filters.day.toLowerCase())) &&
    (!filters.room || talk.room.toLowerCase().includes(filters.room.toLowerCase())) &&
    (!filters.topic || talk.topic.toLowerCase().includes(filters.topic.toLowerCase()))
  );

  const renderTalk = (day, hour) =>
    filteredTalks
      .filter(talk => talk.day === day && talk.time === hour)
      .map(talk => (
        <Paper
          key={talk.id}
          elevation={3}
          sx={{ p: 2, mb: 1, backgroundColor: '#1976d2', color: '#fff' }}
        >
          <Typography variant="subtitle1" fontWeight="bold">
            {talk.title}
          </Typography>
          <Typography variant="body2">{talk.room}</Typography>
          <Typography variant="body2">{talk.duration} min</Typography>
        </Paper>
      ));

  return (
    <Box
      sx={{
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: '#fff',
      }}
    >
      <Navbar />

      <Box component="main" sx={{ flexGrow: 1, px: 2, py: 3 }}>
        <Typography variant="h4" sx={{ mb: 4 }}>
          Planning des Talks
        </Typography>

        {/* Filtre */}
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            mb: 5,
            p: 2,
            backgroundColor: '#f5f5f5',
            borderRadius: 2,
          }}
        >
          <TextField
            fullWidth
            label="Jour"
            name="day"
            variant="outlined"
            value={filters.day}
            onChange={handleFilterChange}
            sx={{ backgroundColor: '#fff', borderRadius: 1 }}
          />
          <TextField
            fullWidth
            label="Salle"
            name="room"
            variant="outlined"
            value={filters.room}
            onChange={handleFilterChange}
            sx={{ backgroundColor: '#fff', borderRadius: 1 }}
          />
          <TextField
            fullWidth
            label="Sujet"
            name="topic"
            variant="outlined"
            value={filters.topic}
            onChange={handleFilterChange}
            sx={{ backgroundColor: '#fff', borderRadius: 1 }}
          />
        </Box>

        {/* Grille horaire */}
        <Grid container spacing={15}>
          {/* Colonne Heures */}
          <Grid item xs={1} sx={{ pr: 1, maxWidth: '80px' }}>
            <Typography variant="h6" sx={{ mb: 1, color: 'text.primary' }}>
              Heures
            </Typography>
            {hours.map(hour => (
              <Box
                key={hour}
                sx={{
                  height: 60,
                  display: 'flex',
                  alignItems: 'center',
                  color: 'text.primary',
                }}
              >
                {hour}
              </Box>
            ))}
          </Grid>

          {/* Colonnes Jours */}
          {days.map(day => (
            <Grid item xs={11 / days.length} key={day} sx={{ minWidth: 0 }}>
              <Typography variant="h6" sx={{ mb: 1, color: 'text.primary' }}>
                {day}
              </Typography>
              {hours.map(hour => (
                <Box
                  key={hour}
                  sx={{
                    height: 60,
                    border: '1px solid #ddd',
                    overflowY: 'auto',
                  }}
                >
                  {renderTalk(day, hour)}
                </Box>
              ))}
            </Grid>
          ))}
        </Grid>
      </Box>

      <Footer />
    </Box>
  );
}
