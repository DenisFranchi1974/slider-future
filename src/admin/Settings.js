import React, { useEffect, useState } from 'react';
import { __ } from '@wordpress/i18n';
import {ColorPalette } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { Alert, Snackbar, Button, Typography, Paper } from '@mui/material';
import Grid from '@mui/material/Grid2';
import CheckIcon from '@mui/icons-material/Check';
import ErrorIcon from '@mui/icons-material/Error';

const Settings = ({ setPrimaryColor, setBackgroundColor,setLabelColor, setWhiteColor, setBlackColor,setDarkColor, setDarkColorHover, setDarkButton, setLightColor, setLightColorHover  }) => {
    const [settings, setSettings] = useState({
        autoplay: true,
        speed: 3000,
        primaryColor: '#7A079A', 
        blackColor: '#000000',
        backgroundColor: '#18191c',
        labelColor: '#535960',
        whiteColor: '#ffffff',
        darkColor: '#21242b',
        darkColorHover: '#2e323c',
        darkButton: '#3c4556',
        lightColor: '#c5c6d0',
        lightColorHover: '#d9dae1',
    });
    const [alert, setAlert] = useState({ open: false, severity: 'success', message: '' });

    const colors = [
        { name: 'Red', color: '#f00' },
        { name: 'White', color: '#fff' },
        { name: 'Blue', color: '#00f' },
    ];

    useEffect(() => {
        apiFetch({ path: '/wp/v2/slider-settings' }).then((data) => {
           
            const primaryColor = data.primaryColor || '#7A079A'; 
            const backgroundColor = data.backgroundColor || '#18191c';
            const labelColor = data.labelColor || '#535960';
            const whiteColor = data.whiteColor || '#ffffff';
            const blackColor = data.blackColor || '#000000';
            const darkColor = data.darkColor || '#21242b';
            const darkColorHover = data.darkColorHover || '#2e323c';
            const darkButton = data.darkButton || '#3c4556';
            const lightColor = data.lightColor || '#c5c6d0';
            const lightColorHover = data.lightColorHover || '#d9dae1';
            setSettings({ ...data, primaryColor, backgroundColor, labelColor, whiteColor, blackColor, darkColor, darkColorHover, darkButton, lightColor, lightColorHover });
      
            document.documentElement.style.setProperty('--primary-color', primaryColor);
            document.documentElement.style.setProperty('--background-color', backgroundColor);
            document.documentElement.style.setProperty('--label-color', labelColor);
            document.documentElement.style.setProperty('--white-color', whiteColor);
            document.documentElement.style.setProperty('--black-color', blackColor);
            document.documentElement.style.setProperty('--dark-color', darkColor);
            document.documentElement.style.setProperty('--dark-color-hover', darkColorHover);
            document.documentElement.style.setProperty('--dark-button', darkButton);
            document.documentElement.style.setProperty('--light-color', lightColor);
            document.documentElement.style.setProperty('--light-color-hover', lightColorHover);
            setPrimaryColor(primaryColor);
            setBackgroundColor(backgroundColor);
            setLabelColor(labelColor);
            setWhiteColor(whiteColor);
            setBlackColor(blackColor);
            setDarkColor(darkColor);
            setDarkColorHover(darkColorHover);
            setDarkButton(darkButton);
            setLightColor(lightColor);
            setLightColorHover(lightColorHover);
        });
    }, [setPrimaryColor, setBackgroundColor, setLabelColor, setWhiteColor, setBlackColor, setDarkColor, setDarkColorHover, setDarkButton, setLightColor, setLightColorHover]);
    
    const saveSettings = async () => {
        try {
            const primaryColor = settings.primaryColor || '#7A079A'; 
            const backgroundColor = settings.backgroundColor || '#18191c'; 
            const labelColor = settings.labelColor || '#535960'; 
            const whiteColor = settings.whiteColor || '#ffffff'; 
            const blackColor = settings.blackColor || '#000000'; 
            const darkColor = settings.darkColor || '#21242b';
            const darkColorHover = settings.darkColorHover || '#2e323c';
            const darkButton = settings.darkButton || '#3c4556';
            const lightColor = settings.lightColor || '#c5c6d0';
            const lightColorHover = settings.lightColorHover || '#d9dae1';
            const response = await apiFetch({
                path: '/wp/v2/slider-settings',
                method: 'POST',
                data: { ...settings, primaryColor, backgroundColor, labelColor, whiteColor, blackColor, darkColor, darkColorHover, darkButton, lightColor, lightColorHover },
            });
            if (response) {
                setAlert({ open: true, severity: 'success', message: __('Settings saved successfully!', 'slider-future') });
                
                document.documentElement.style.setProperty('--primary-color', primaryColor);
                document.documentElement.style.setProperty('--background-color', backgroundColor);
                document.documentElement.style.setProperty('--label-color', labelColor);
                document.documentElement.style.setProperty('--white-color', whiteColor);
                document.documentElement.style.setProperty('--black-color', blackColor);
                document.documentElement.style.setProperty('--dark-color', darkColor);
                document.documentElement.style.setProperty('--dark-color-hover', darkColorHover);
                document.documentElement.style.setProperty('--dark-button', darkButton);
                document.documentElement.style.setProperty('--light-color', lightColor);
                document.documentElement.style.setProperty('--light-color-hover', lightColorHover);
                setPrimaryColor(primaryColor);
                setBackgroundColor(backgroundColor);
                setLabelColor(labelColor);
                setWhiteColor(whiteColor);
                setBlackColor(blackColor);
                setDarkColor(darkColor);
                setDarkColorHover(darkColorHover);
                setDarkButton(darkButton);
                setLightColor(lightColor);
                setLightColorHover(lightColorHover);
            } else {
                throw new Error('Failed to save settings');
            }
        } catch (error) {
            console.error('Error:', error);
            setAlert({ open: true, severity: 'error', message: __('Error saving settings', 'slider-future') });
        }
    };
    
    return (
        <div className='content-dashboard'>
            <h3>{__('Control Panel Customization', 'slider-future')}</h3>
            <h4 style={{ marginBottom: '48px', color: 'var(--white-color)' }}>
                {__('Tailor the appearance and functionality of your slider controls.', 'slider-future')}
            </h4>
            <Paper elevation={3} sx={{ padding: '24px', borderRadius: '16px' }} className='paper-settings'>
                <Typography variant="h5" gutterBottom>
                   {__('Color Controls', 'slider-future')}
                </Typography>
                <Grid container spacing={3}>
                    <Grid xs={4} sx={{border: '1px solid var(--light-color)', borderRadius: '16px', padding: '16px'}}> 
                        <Typography variant="h6" gutterBottom>
                        {__('Primary', 'slider-future')}
                        </Typography>
                        <ColorPalette
                           colors={colors}
                           value={settings.primaryColor}
                           onChange={(value) => {
                               
                               const fallbackColor = '#7A079A'; 
                               const newColor = value || fallbackColor;
                               setSettings({ ...settings, primaryColor: newColor });
                            
                               document.documentElement.style.setProperty('--primary-color', newColor);
                               setPrimaryColor(newColor);
                           }}
                        />
                    </Grid>
                    <Grid xs={4} sx={{border: '1px solid var(--light-color)', borderRadius: '16px', padding: '16px'}}> 
                    <Typography variant="h6" gutterBottom>
                        {__('Dark', 'slider-future')}
                        </Typography>
                        <ColorPalette
                            colors={colors}
                            value={settings.blackColor}
                            onChange={(value) => {
                               
                                const fallbackColor = '#000000'; 
                                const newColor = value || fallbackColor;
                                setSettings({ ...settings, blackColor: newColor });
                          
                                document.documentElement.style.setProperty('--black-color', newColor);
                                setBlackColor(newColor);
                            }}
                            
                        />
                    </Grid>
                    <Grid xs={4} sx={{border: '1px solid var(--light-color)', borderRadius: '16px', padding: '16px'}}> 
                    <Typography variant="h6" gutterBottom>
                        {__('Dark 2', 'slider-future')}
                        </Typography>
                        <ColorPalette
                            colors={colors}
                            value={settings.darkColor}
                            onChange={(value) => {
                               
                                const fallbackColor = '#21242b'; 
                                const newColor = value || fallbackColor;
                                setSettings({ ...settings, darkColor: newColor });
                              
                                document.documentElement.style.setProperty('--dark-color', newColor);
                                setDarkColor(newColor);
                            }}
                            
                        />
                    </Grid>
                    <Grid xs={4} sx={{border: '1px solid var(--light-color)', borderRadius: '16px', padding: '16px'}}> 
                    <Typography variant="h6" gutterBottom>
                        {__('Dark 3', 'slider-future')}
                        </Typography>
                        <ColorPalette
                            colors={colors}
                            value={settings.darkColorHover}
                            onChange={(value) => {
                       
                                const fallbackColor = '#2e323c'; 
                                const newColor = value || fallbackColor;
                                setSettings({ ...settings, darkColorHover: newColor });
                            
                                document.documentElement.style.setProperty('--dark-color-hover', newColor);
                                setDarkColorHover(newColor);
                            }}
                            
                        />
                    </Grid>
                    <Grid xs={4} sx={{border: '1px solid var(--light-color)', borderRadius: '16px', padding: '16px'}}> 
                    <Typography variant="h6" gutterBottom>
                        {__('Intermediate Dark', 'slider-future')}
                        </Typography>
                        <ColorPalette
                            colors={colors}
                            value={settings.backgroundColor}
                            onChange={(value) => {
                              
                                const fallbackColor = '#18191c'; 
                                const newColor = value || fallbackColor;
                                setSettings({ ...settings, backgroundColor: newColor });
                               
                                document.documentElement.style.setProperty('--background-color', newColor);
                                setBackgroundColor(newColor);
                            }}
                            
                        />
                    </Grid>
                    <Grid xs={4} sx={{border: '1px solid var(--light-color)', borderRadius: '16px', padding: '16px'}}> 
                    <Typography variant="h6" gutterBottom>
                        {__('Intermediate Dark 2', 'slider-future')}
                        </Typography>
                        <ColorPalette
                            colors={colors}
                            value={settings.darkButton}
                            onChange={(value) => {
                              
                                const fallbackColor = '#3c4556'; 
                                const newColor = value || fallbackColor;
                                setSettings({ ...settings, darkButton: newColor });
                             
                                document.documentElement.style.setProperty('--dark-button', newColor);
                                setDarkButton(newColor);
                            }}
                            
                        />
                    </Grid>
                    <Grid xs={4} sx={{border: '1px solid var(--light-color)', borderRadius: '16px', padding: '16px'}}> 
                    <Typography variant="h6" gutterBottom>
                        {__('Light Dark', 'slider-future')}
                        </Typography>
                        <ColorPalette
                          colors={colors}
                          value={settings.labelColor}
                          onChange={(value) => {
                             
                              const fallbackColor = '#535960'; 
                              const newColor = value || fallbackColor;
                              setSettings({ ...settings, labelColor: newColor });
                            
                              document.documentElement.style.setProperty('--label-color', newColor);
                              setLabelColor(newColor);
                          }}
                        />
                    </Grid>
                    <Grid xs={4} sx={{border: '1px solid var(--light-color)', borderRadius: '16px', padding: '16px'}}> 
                    <Typography variant="h6" gutterBottom>
                        {__('Light Dark 2', 'slider-future')}
                        </Typography>
                        <ColorPalette
                          colors={colors}
                          value={settings.lightColor}
                          onChange={(value) => {
                            
                              const fallbackColor = '#c5c6d0'; 
                              const newColor = value || fallbackColor;
                              setSettings({ ...settings, lightColor: newColor });
                           
                              document.documentElement.style.setProperty('--light-color', newColor);
                              setLightColor(newColor);
                          }}
                        />
                    </Grid>
                    <Grid xs={4} sx={{border: '1px solid var(--light-color)', borderRadius: '16px', padding: '16px'}}> 
                    <Typography variant="h6" gutterBottom>
                        {__('Light Dark 3', 'slider-future')}
                        </Typography>
                        <ColorPalette
                          colors={colors}
                          value={settings.lightColorHover}
                          onChange={(value) => {
                       
                              const fallbackColor = '#d9dae1'; 
                              const newColor = value || fallbackColor;
                              setSettings({ ...settings, lightColorHover: newColor });
                         
                              document.documentElement.style.setProperty('--light-color-hover', newColor);
                              setLightColorHover(newColor);
                          }}
                        />
                    </Grid>
                    <Grid xs={4} sx={{border: '1px solid var(--light-color)', borderRadius: '16px', padding: '16px'}}> 
                    <Typography variant="h6" gutterBottom>
                        {__('Light', 'slider-future')}
                        </Typography>
                        <ColorPalette
                          colors={colors}
                          value={settings.whiteColor}
                          onChange={(value) => {
                     
                              const fallbackColor = '#ffffff'; 
                              const newColor = value || fallbackColor;
                              setSettings({ ...settings, whiteColor: newColor });
                           
                              document.documentElement.style.setProperty('--white-color', newColor);
                              setWhiteColor(newColor);
                          }}
                        />
                    </Grid>
                </Grid>
            </Paper>

            <div style={{textAlign: 'center'}}>
            <Button
                sx={{
                    backgroundColor: 'var(--white-color)',
                    color: 'var(--black-color)',
                    borderRadius: '24px',
                    fontWeight: 'bold',
                    '&:hover': {
                        backgroundColor: 'var(--primary-color)',
                        color: 'var(--white-color)',
                    },
                    marginTop: '24px',
                }}
                onClick={saveSettings}
            >
                {__('Save Settings', 'slider-future')}
            </Button>
            </div>
            <Snackbar
                open={alert.open}
                autoHideDuration={6000}
                onClose={() => setAlert({ ...alert, open: false })}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert
                    onClose={() => setAlert({ ...alert, open: false })}
                    severity={alert.severity}
                    iconMapping={{
                        success: <CheckIcon fontSize="inherit" />,
                        error: <ErrorIcon fontSize="inherit" />,
                    }}
                >
                    {alert.message}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default Settings;
