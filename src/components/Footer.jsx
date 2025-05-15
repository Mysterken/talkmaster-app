import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 3, mt: 5, backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="textSecondary" align="center">
          © 2025 Conference Manager - Tous droits réservés.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;