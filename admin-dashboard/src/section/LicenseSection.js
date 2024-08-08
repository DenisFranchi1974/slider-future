import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const LicenseSection = () => {
    const [licenseKey, setLicenseKey] = useState('');

    const handleSaveLicense = () => {
        // Aggiungi qui la logica per salvare la chiave di licenza
        alert(`Licenza salvata: ${licenseKey}`);
    };

    return (
        <Box my={4}>
            <Typography variant="h5" component="h2" gutterBottom>
                Gestione della Licenza
            </Typography>
            <TextField
                label="Chiave di Licenza"
                value={licenseKey}
                onChange={(e) => setLicenseKey(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Button variant="contained" color="primary" onClick={handleSaveLicense}>
                Salva Licenza
            </Button>
        </Box>
    );
};

export default LicenseSection;
