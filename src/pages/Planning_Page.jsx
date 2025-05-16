import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Paper, TextField } from '@mui/material';
import TalkCard from '../components/TalkCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PlanningPage = ({ talks }) => {
  const [filters, setFilters] = useState({
    day: '',
    room: '',
    topic: ''
  });
  const [filteredTalks, setFilteredTalks] = useState(talks);

  useEffect(() => {
    let filtered = talks;

    if (filters.day) {
      filtered = filtered.filter(talk =>
        talk.day.toLowerCase().includes(filters.day.toLowerCase())
      );
    }

    if (filters.room) {
      filtered = filtered.filter(talk =>
        talk.room.toLowerCase().includes(filters.room.toLowerCase())
      );
    }

    if (filters.topic) {
      filtered = filtered.filter(talk =>
        talk.topic.toLowerCase().includes(filters.topic.toLowerCase())
      );
    }

    setFilteredTalks(filtered);
  }, [filters, talks]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Box
      sx={{
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.default',
      }}
    >
      <Navbar />

      <Box component="main" sx={{ flexGrow: 1, px: 2, py: 3 }}>
        <Typography variant="h3" gutterBottom sx={{ mb: 4 }}>
          Planning des Talks
        </Typography>

        <Box
          sx={{
            display: 'flex',
            gap: 2,
            mb: 5,
            p: 2,
            backgroundColor: '#f5f5f5',
            borderRadius: 2
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

        <Grid container spacing={4}>
          {filteredTalks.length > 0 ? (
            filteredTalks.map((talk) => (
              <Grid item xs={12} sm={6} md={4} key={talk.id}>
                <Paper elevation={3} sx={{ p: 3 }}>
                  <TalkCard talk={talk} />
                </Paper>
              </Grid>
            ))
          ) : (
            <Typography variant="body1" sx={{ ml: 2 }}>
              Aucun talk ne correspond aux filtres.
            </Typography>
          )}
        </Grid>
      </Box>

      <Footer />
    </Box>
  );
};

export default PlanningPage;
