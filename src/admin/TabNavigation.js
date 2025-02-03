import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Box, Drawer, IconButton, createTheme, ThemeProvider } from '@mui/material';
import MegaphoneIcon from '@mui/icons-material/Campaign';
import CloseIcon from '@mui/icons-material/Close';
import Welcome from './Welcome';
import Settings from './Settings';
import FreeVsPro from './FreeVsPro';
import Help from './Help';
import ComingSoon from './ComingSoon';
import { loadSettings } from './loadSettings';
import { __ } from "@wordpress/i18n";
import Tooltip from '@mui/material/Tooltip';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SettingsIcon from '@mui/icons-material/Settings';
import CompareIcon from '@mui/icons-material/Compare';
import HelpIcon from '@mui/icons-material/Help';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import Badge from '@mui/material/Badge';
import Rating from '@mui/material/Rating';

const TabNavigation = () => {
    const [activeTab, setActiveTab] = useState('welcome');
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [primaryColor, setPrimaryColor] = useState('#7A079A');
    const [backgroundColor, setBackgroundColor] = useState('#18191c');
    const [labelColor, setLabelColor] = useState('#535960');
    const [whiteColor, setWhiteColor] = useState('#ffffff');
    const [blackColor, setBlackColor] = useState('#000000');
    const [darkColor, setDarkColor] = useState ('#21242b');
    const [darkColorHover, setDarkColorHover] = useState ('#2e323c');
    const [darkButton, setDarkButton] = useState ('#3c4556');
    const [lightColor, setLightColor] = useState ('#c5c6d0');
    const [lightColorHover, setLightColorHover] = useState ('#d9dae1');

    const [theme, setTheme] = useState(createTheme({
        palette: {
            primary: {
                main: primaryColor,
            },
            background: {
                default: backgroundColor,
            },
            text: {
                primary: labelColor,
                secondary: whiteColor,
            },
            common: {
                black: blackColor,
                white: whiteColor,
            },
            dark: {
                main: darkColor,
                hover: darkColorHover,
                button: darkButton,
            },
            light: {
                main: lightColor,
                hover: lightColorHover,
            },
        },
    }));

    useEffect(() => {
        loadSettings(setPrimaryColor, setBackgroundColor, setLabelColor, setWhiteColor, setBlackColor, setDarkColor, setDarkColorHover, setDarkButton, setLightColor, setLightColorHover);
    }, []);

    useEffect(() => {
        const newTheme = createTheme({
            palette: {
                primary: {
                    main: primaryColor,
                },
                background: {
                    default: backgroundColor,
                },
                text: {
                    primary: labelColor,
                    secondary: whiteColor,
                },
                common: {
                    black: blackColor,
                    white: whiteColor,
                },
                dark: {
                    main: darkColor,
                    hover: darkColorHover,
                    button: darkButton,
                },
                light: {
                    main: lightColor,
                    hover: lightColorHover,
                },
            },
        });
        setTheme(newTheme);
    }, [primaryColor, backgroundColor, labelColor, whiteColor, blackColor, darkColor, darkColorHover, darkButton, lightColor, lightColorHover]);

    const renderTabContent = () => {
        switch (activeTab) {
            case 'welcome':
                return <Welcome theme={theme} />;
            case 'settings':
                return <Settings 
                    setPrimaryColor={setPrimaryColor} 
                    setBackgroundColor={setBackgroundColor} 
                    setLabelColor={setLabelColor} 
                    setWhiteColor={setWhiteColor} 
                    setBlackColor={setBlackColor} 
                    setDarkColor={setDarkColor}
                    setDarkColorHover={setDarkColorHover}
                    setDarkButton={setDarkButton}
                    setLightColor={setLightColor}
                    setLightColorHover={setLightColorHover}
                />;
            case 'freevspro':
                return <FreeVsPro />;
            case 'help':
                return <Help />;
            case 'soon':
                return <ComingSoon />;
            default:
                return <Welcome theme={theme} />;
        }
    };

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsDrawerOpen(open);
    };

    const isProFeature = typeof window.isProFeature !== 'undefined' ? window.isProFeature === 'true' : true;

    const [value, setValue] = React.useState(5);

    return (
        <ThemeProvider theme={theme}>
            <Box>
                <div className='logo-dashboard'>
                    <div className='logo'>
                           <span className="dashicons dashicons-images-alt2"></span><h1>{__('Slider Future', 'slider-future')}<span className="version">{__('1.0.0', 'slider-future')}</span></h1>
                    </div>
                    <div className='rating'>
                        <h4>{__('Rate New','slider-future')}</h4>
                        <a 
                            href="https://wordpress.org/support/plugin/slider-future/reviews/"
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none', display: 'inline-block' }}
                        >
                        <Rating name="no-value" readOnly value={value} />
                        </a>
                    </div>
                </div>
                <Tabs
                    value={activeTab}
                    onChange={(event, newValue) => setActiveTab(newValue)}
                    aria-label="navigation tabs"
                >
                    <Tab label={__("Welcome",'slider-future')} value="welcome" icon={<AutoAwesomeIcon />} iconPosition="start" />
                    <Tab label={__("Settings",'slider-future')} value="settings" icon={<SettingsIcon />} iconPosition="start"  />
                    {isProFeature && (
                    
                    <Tab label={__("Free vs Pro",'slider-future')} value="freevspro" icon={<CompareIcon />} iconPosition="start" />
                )}
                 {isProFeature && (
                    <Tab label={__("Help",'slider-future')} value="help" icon={<HelpIcon />} iconPosition="start" />
                 )}
                    
                    <Tab label={__("Coming Soon",'slider-future')} value="soon" icon={<HourglassTopIcon />} iconPosition="start" /><Badge badgeContent={__('New','slider-future')} color="primary"/>
                </Tabs>
                <Box mt={2}>
                    {renderTabContent()}
                </Box>
                <Tooltip title="Changelog">
                    <IconButton
                        color="primary"
                        aria-label="open drawer"
                        onClick={toggleDrawer(true)}
                        sx={{ position: 'fixed', right: 64, top: 64 }}
                    >
                        <MegaphoneIcon />
                    </IconButton>
                </Tooltip>
                <Drawer
                    anchor="right"
                    open={isDrawerOpen}
                    onClose={toggleDrawer(false)}
                >
                    <Box
                        sx={{ width: 300, paddingTop: 6, paddingLeft: 2, paddingRight: 2 , paddingBottom: 2}}
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
                            <h3>{__('Slider Future Changelog','slider-future')}</h3>
                            <p>{__('Version 1.0.0 - Initial release')}</p>
                        </div>
                    </Box>
                </Drawer>
            </Box>
        </ThemeProvider>
    );
};

export default TabNavigation;