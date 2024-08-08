import React, { useState } from 'react';
import { Box, Typography, Slider, Button } from '@mui/material';
import { ColorPicker } from '@wordpress/components';



const CustomizationSection = () => {
    const [value, setValue] = useState(30);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const initialColor = window.myPluginData ? window.myPluginData.initialColor : '#fff';
    const [color, setColor] = useState(initialColor);

    const handleChangeComplete = (newColor) => {
        setColor(newColor.hex);
    };

    const handleSaveColor = async () => {
        try {
            const response = await fetch(window.myPluginData.rest_url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-WP-Nonce': window.myPluginData.nonce,
                },
                body: JSON.stringify({
                    color: color,
                }),
            });

            if (!response.ok) {
                throw new Error('Errore nella richiesta');
            }

            const data = await response.json();
            if (data.success) {
                alert('Colore salvato con successo');
            } else {
                alert(`Errore nel salvataggio del colore: ${data.data}`);
            }
        } catch (error) {
            console.error('Errore:', error);
            alert('Errore nel salvataggio del colore');
        }
    };

    return (
        <Box my={4}>
              <div>
            <h1>Impostazioni del mio plugin</h1>
            <ColorPicker
                color={color}
                onChangeComplete={(newColor) => handleChangeComplete(newColor)}
                disableAlpha
            />
            <button onClick={handleSaveColor}>Salva Colore</button>
        </div>
            <Typography variant="h5" component="h2" gutterBottom>
                Personalizza i Controlli
            </Typography>
            <Typography variant="body1" gutterBottom>
                Regola i colori, le dimensioni e altri aspetti visivi dei controlli del plugin.
            </Typography>
            <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
            <Button variant="contained" color="primary" onClick={handleSaveColor}>
                Salva Impostazioni
            </Button>
        </Box>
    );
};

export default CustomizationSection;
