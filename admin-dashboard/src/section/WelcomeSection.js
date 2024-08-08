import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const WelcomeSection = () => {
    const theme = useTheme();
    return (
        <Box my={4}>
            <Typography variant="h5" component="h2" gutterBottom sx={{color:theme.palette.light.main}}>
                Benvenuto!
            </Typography>
            <Typography variant="body1" gutterBottom>
                Scopri le funzionalità del nostro plugin, consulta la documentazione, guarda le demo della versione pro, e molto altro.
            </Typography>
            <Button variant="contained" color="primary" href="https://example.com">
                Guarda le Demo
            </Button>
        </Box>
    );
};

export default WelcomeSection;
