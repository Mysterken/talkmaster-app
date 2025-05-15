import React, { useState } from 'react';
import testImage from '/src/assets/logo.png';

 import {
   Box,
   Button,
   TextField,
   Typography,
   Paper,
   Link,
   Grid,
 } from '@mui/material';

// Remplacez par vos propres identifiants EmailJS
const SERVICE_ID  = 'service_ytvv7em';
const TEMPLATE_ID = 'template_fww08s8';
const PUBLIC_KEY  = 'N3va-dwc71F_XmlCl';

 function Login() {
   const [email, setEmail]       = useState('');
   const [magicUrl, setMagicUrl] = useState('');

  // Initialise EmailJS une seule fois
  React.useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

   const handleSubmit = (e) => {
     e.preventDefault();
     const token = Math.random().toString(36).substr(2);
     const url   = `${window.location.origin}/magic-link?token=${token}`;
     setMagicUrl(url);

    // Envoi de l'email via EmailJS
    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      { email, magic_link: url }
    )
    .then(() => console.log('Email envoyé'))
    .catch((err) => console.error('Erreur EmailJS', err));
   };

   return (
     <Grid container sx={{ minHeight: '100vh' }}>
       {/* Colonne gauche : Formulaire */}
       <Grid
         size={{ xs: 12, md: 6 }}
         sx={{
           display: 'flex',
           justifyContent: 'center',
           alignItems: 'center',
           bgcolor: '#f0f2f5',
           p: 2,
         }}
       >
         <Paper elevation={3} sx={{ p: 4, width: '100%', maxWidth: 400 }}>
           {!magicUrl ? (
             <>
               <Typography variant="h5" gutterBottom>
                 Connexion par lien magique
               </Typography>
               <Box component="form" onSubmit={handleSubmit} noValidate>
                 <TextField
                   label="Adresse e-mail"
                   type="email"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   fullWidth
                   required
                   margin="normal"
                 />
                 <Button
                   type="submit"
                   variant="contained"
                   color="primary"
                   fullWidth
                   sx={{ mt: 2 }}
                   disabled={!email || status === 'sending'}
                 >
                   Générer le lien magique
                 </Button>
               </Box>
             </>
           ) 
           : (
             <>
               <Typography variant="h5" gutterBottom>
                 Lien magique envoyé !
               </Typography>
               <Typography variant="body1" gutterBottom>
                 Vérifiez votre boîte de réception pour le lien magique.
               </Typography>
             </>
           )}
         </Paper>
       </Grid>

       {/* Colonne droite : Image */}
       <Grid
         size={{ md: 6 }}
         sx={{
           display: { xs: 'none', md: 'flex' },
           justifyContent: 'center',
           alignItems: 'center',
         }}
       >
         <Box
           component="img"
           src={testImage}
           alt="Illustration"
           sx={{
             maxWidth: '80%',
             maxHeight: '80%',
           }}
         />
       </Grid>
     </Grid>
   );
 }

 export default Login;
