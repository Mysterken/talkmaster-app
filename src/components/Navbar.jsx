import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Conference Manager
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">Accueil</Button>
          <Button color="inherit" component={Link} to="/planning">Planning</Button>
          <Button color="inherit" component={Link} to="/manage-talks">Gestion</Button>
          <Button color="inherit" component={Link} to="/login">Connexion</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
