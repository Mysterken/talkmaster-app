import React from 'react';
import { TextField, Grid, Box } from '@mui/material';

const FilterPanel = ({ onChange }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    onChange(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Box sx={{ maxWidth: 900, margin: '0 auto', mb: 5, p: 2, bgcolor: '#fff', borderRadius: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Jour"
            name="day"
            onChange={handleFilterChange}
            variant="outlined"
            sx={{ bgcolor: '#fff', borderRadius: 1 }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Salle"
            name="room"
            onChange={handleFilterChange}
            variant="outlined"
            sx={{ bgcolor: '#fff', borderRadius: 1 }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Sujet"
            name="topic"
            onChange={handleFilterChange}
            variant="outlined"
            sx={{ bgcolor: '#fff', borderRadius: 1 }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FilterPanel;