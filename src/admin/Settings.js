import React, { useEffect, useState } from 'react';
import { __ } from '@wordpress/i18n';
import {
    Button,
    Panel,
    PanelBody,
    PanelRow,
    TextControl,
    ColorPicker
} from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import CustomToggleControl from "../controls/toggle/CustomToggleControl";
import WidgetsIcon from '@mui/icons-material/Widgets';
import { Alert, Snackbar } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ErrorIcon from '@mui/icons-material/Error';

const Settings = ({ setPrimaryColor }) => {
    const [settings, setSettings] = useState({
        autoplay: true,
        speed: 3000,
        primaryColor: '#ab0052', // Aggiungi il colore primario
        // altre impostazioni...
    });
    const [alert, setAlert] = useState({ open: false, severity: 'success', message: '' });

    useEffect(() => {
        // Carica le impostazioni salvate
        apiFetch({ path: '/wp/v2/slider-settings' }).then((data) => {
            setSettings(data);
            // Applica il colore primario salvato
            document.documentElement.style.setProperty('--primary-color', data.primaryColor);
            setPrimaryColor(data.primaryColor);
        });
    }, [setPrimaryColor]);

    const saveSettings = async () => {
        try {
            const response = await apiFetch({
                path: '/wp/v2/slider-settings',
                method: 'POST',
                data: settings
            });
            if (response) {
                setAlert({ open: true, severity: 'success', message: __('Settings saved successfully!', 'your-text-domain') });
                // Applica il colore primario salvato
                document.documentElement.style.setProperty('--primary-color', settings.primaryColor);
                setPrimaryColor(settings.primaryColor);
            } else {
                throw new Error('Failed to save settings');
            }
        } catch (error) {
            console.error('Error:', error);
            setAlert({ open: true, severity: 'error', message: __('Error saving settings', 'your-text-domain') });
        }
    };

    return (
        <Panel>
            <PanelBody title={__('General Settings', 'your-text-domain')} initialOpen={true}>
                <PanelRow>
                    <CustomToggleControl
                        label={
                            <>
                                <WidgetsIcon />
                                {__("Autoplay", "cocoblocks")}
                            </>
                        }
                        checked={settings.autoplay}
                        onChange={(value) => setSettings({...settings, autoplay: value})}
                    />
                </PanelRow>
                <PanelRow>
                    <TextControl
                        label={__('Speed (ms)', 'your-text-domain')}
                        value={settings.speed}
                        onChange={(value) => setSettings({...settings, speed: parseInt(value)})}
                        type="number"
                    />
                </PanelRow>
                <PanelRow>
                    <ColorPicker
                        color={settings.primaryColor}
                        onChangeComplete={(value) => {
                            setSettings({...settings, primaryColor: value.hex});
                            setPrimaryColor(value.hex);
                        }}
                        disableAlpha
                    />
                </PanelRow>
                <Button 
                    isPrimary
                    onClick={saveSettings}
                >
                    {__('Save Settings', 'your-text-domain')}
                </Button>
            </PanelBody>
            <Snackbar open={alert.open} autoHideDuration={6000} onClose={() => setAlert({ ...alert, open: false })}  anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert onClose={() => setAlert({ ...alert, open: false })} severity={alert.severity} iconMapping={{
                    success: <CheckIcon fontSize="inherit" />,
                    error: <ErrorIcon fontSize="inherit" />
                }}>
                    {alert.message}
                </Alert>
            </Snackbar>
        </Panel>
    );
};

export default Settings;