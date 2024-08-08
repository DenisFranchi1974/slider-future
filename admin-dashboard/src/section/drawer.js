import {__} from '@wordpress/i18n';
import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, Typography, Box } from '@mui/material';
import CampaignIcon from '@mui/icons-material/Campaign';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';

const changelogs = [
  { version: __('1.0.1','coco-one'), date: __('2024-05-01','coco-one'), description: __('Fixed minor bugs and improved performance.','coco-one') },
  { version: __('1.0.0','coco-one'), date: __('2024-04-15','coco-one'), description: __('Initial release with main features.','coco-one') },
];

const ChangelogDrawer = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)} sx={{color:theme.palette.light.main}}>
      <CampaignIcon />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 300,
            height: '100vh',
            padding: 2,
            display: 'flex',
            flexDirection: 'column',
            paddingTop:'33px',
            backgroundColor: theme.palette.dark.main
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" gutterBottom sx={{color:theme.palette.light.main}}>{__('Changelog','coco-one')}</Typography>
            <IconButton onClick={toggleDrawer(false)} sx={{color:theme.palette.light.main}}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List sx={{ flexGrow: 1, overflowY: 'auto' }}>
            {changelogs.map((log, index) => (
              <ListItem key={index}>
                <ListItemText
                  sx={{color:theme.palette.light.main}}
                  primary={`Version ${log.version}`}
                  secondary={`${log.date}: ${log.description}`}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default ChangelogDrawer;