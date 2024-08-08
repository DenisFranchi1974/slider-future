import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './index.css';


const theme = createTheme({
  palette: {
    primary: {
      main: '#ab0052',
    },
    secondary: {
      main: '#000000',
    },
    background: {
      main: '#18191c',
    },
    light: {
      main: '#c5c6d0',
    },
    dark: {
      main: '#21242b',
    },
  },
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('my-plugin-admin-page');
    if (container) {
        const root = createRoot(container);
        root.render(
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        );
    }
});

