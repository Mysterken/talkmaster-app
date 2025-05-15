import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const TalkForm = ({ onAddTalk }) => {
  const [talk, setTalk] = useState({
    title: '',
    topic: '',
    description: '',
    duration: '',
    //level: '',
    room: '',
    day: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTalk({ ...talk, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTalk(talk);
    setTalk({ title: '', topic: '', description: '', duration: '', level: '', room: '', day: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        {Object.keys(talk).map((field, index) => (
          <Grid item xs={12} md={6} key={index}>
            <TextField
              fullWidth
              label={field.charAt(0).toUpperCase() + field.slice(1)}
              name={field}
              value={talk[field]}
              onChange={handleChange}
            />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Ajouter le Talk
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default TalkForm;