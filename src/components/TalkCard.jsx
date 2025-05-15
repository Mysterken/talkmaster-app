import React from 'react';
import { Card, CardContent, Typography, Chip, Box } from '@mui/material';

const statusColors = {
  'en attente': 'default',
  'accepté': 'success',
  'refusé': 'error',
  'planifié': 'primary'
};

const TalkCard = ({ talk }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="h6" component="div">
            {talk.title}
          </Typography>
          <Chip
            label={talk.status}
            color={statusColors[talk.status]}
            size="small"
            sx={{ textTransform: 'capitalize' }}
          />
        </Box>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          {talk.topic}
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          {talk.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Durée : {talk.duration} min
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Salle : {talk.room}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Jour : {talk.day}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TalkCard;
