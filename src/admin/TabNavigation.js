import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Box, Drawer, IconButton, createTheme, ThemeProvider } from '@mui/material';
import MegaphoneIcon from '@mui/icons-material/Campaign';
import CloseIcon from '@mui/icons-material/Close';
import Welcome from './Welcome';
import Settings from './Settings';
import FreeVsPro from './FreeVsPro';
import Help from './Help';
import apiFetch from '@wordpress/api-fetch';

const TabNavigation = () => {
    const [activeTab, setActiveTab] = useState('welcome');
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [primaryColor, setPrimaryColor] = useState('#ab0052');

    useEffect(() => {
        // Carica le impostazioni salvate
        apiFetch({ path: '/wp/v2/slider-settings' }).then((data) => {
            setPrimaryColor(data.primaryColor);
        });
    }, []);

    const theme = createTheme({
        palette: {
            primary: {
                main: primaryColor,
            },
        },
    });

    const renderTabContent = () => {
        switch (activeTab) {
            case 'welcome':
                return <Welcome />;
            case 'settings':
                return <Settings setPrimaryColor={setPrimaryColor} />;
            case 'freevspro':
                return <FreeVsPro />;
            case 'help':
                return <Help />;
            default:
                return <Welcome />;
        }
    };

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsDrawerOpen(open);
    };

    return (
        <ThemeProvider theme={theme}>
            <Box>
                <Tabs
                    value={activeTab}
                    onChange={(event, newValue) => setActiveTab(newValue)}
                    aria-label="navigation tabs"
                >
                    <Tab label="Welcome" value="welcome" />
                    <Tab label="Settings" value="settings" />
                    <Tab label="Free vs Pro" value="freevspro" />
                    <Tab label="Help" value="help" />
                </Tabs>
                <Box mt={2}>
                    {renderTabContent()}
                </Box>
                <IconButton
                    color="primary"
                    aria-label="open drawer"
                    onClick={toggleDrawer(true)}
                    sx={{ position: 'fixed', right: 64, top: 64 }}
                >
                    <MegaphoneIcon />
                </IconButton>
                <Drawer
                    anchor="right"
                    open={isDrawerOpen}
                    onClose={toggleDrawer(false)}
                >
                    <Box
                        sx={{ width: 250, paddingTop: 6, paddingLeft: 2, paddingRight: 2 , paddingBottom: 2}}
                        role="presentation"
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}
                    >
                        <IconButton
                            color="inherit"
                            aria-label="close drawer"
                            onClick={toggleDrawer(false)}
                            sx={{ position: 'absolute', right: 8, top: 50 }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <div>
                            <h3>Changelog</h3>
                            <p>Version 1.0.0 - Initial release Beta</p>
                            
                        </div>
                    </Box>
                </Drawer>
            </Box>
        </ThemeProvider>
    );
};

export default TabNavigation;