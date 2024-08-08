import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ChangelogDrawer from './drawer';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        className='header-dashboard'
        color='dark'
        sx={{ height: '100px', justifyContent: 'center',borderRadius:'8px' }}
      >
        <Toolbar>
          <img src={`${window.myPluginData.pluginUrl}admin-dashboard/images/logo-black-coco.png`} alt="Logo" className="logo" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
          <ChangelogDrawer />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
