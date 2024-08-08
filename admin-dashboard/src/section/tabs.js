import {__} from '@wordpress/i18n';
import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Home, Settings } from '@mui/icons-material';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import SupportIcon from '@mui/icons-material/Support';
import CompareIcon from '@mui/icons-material/Compare';
import CustomizationSection from './CustomizationSection';
import FreeVsProSection from './FreeVsProSection';
import WelcomeSection from './WelcomeSection';
import LicenseSection from './LicenseSection';
import { useTheme } from '@mui/material/styles';



const VerticalTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = useTheme();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row',backgroundColor:theme.palette.dark.main ,color:theme.palette.light.main,borderRadius:'8px'}}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label= {__('tabs dashboard Coco One','coco-one')}
        className='tabs-dashboard'
        textColor="primary"
        indicatorColor="primary"
        sx={{minWidth: 190}}
      >
        <Tab icon={<Home />} label={__('HOME','coco-one')} iconPosition="start" sx={{color:theme.palette.light.main, justifyContent:'left'}} />
        <Tab icon={<SchoolIcon />} label={__('QUICK START','coco-one')} iconPosition="start" sx={{color:theme.palette.light.main, justifyContent:'left' }} />
        <Tab icon={<Settings />} label={__('SETTINGS','coco-one')} iconPosition="start" sx={{color:theme.palette.light.main, justifyContent:'left' }} />
        <Tab icon={<CodeIcon />} label={__('DEVELOPER','coco-one')} iconPosition="start" sx={{color:theme.palette.light.main, justifyContent:'left' }} />
        <Tab icon={<SupportIcon />} label={__('NEED HELP?','coco-one')} iconPosition="start" sx={{color:theme.palette.light.main, justifyContent:'left' }} />
        <Tab icon={<CompareIcon />} label={__('FREE VS PRO','coco-one')} iconPosition="start" sx={{color:theme.palette.light.main, justifyContent:'left' }} />
        <Tab icon={<CompareIcon />} label={__('LICENSE','coco-one')} iconPosition="start" sx={{color:theme.palette.light.main, justifyContent:'left' }} />


      </Tabs>
      <Box sx={{ flexGrow: 1,marginLeft:'-1px', borderLeft: `1px solid ${theme.palette.light.main}` }}>
        <TabPanel value={value} index={0}>
        <WelcomeSection />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Contenuto del tab 2
        </TabPanel>
        <TabPanel value={value} index={2}>
          <CustomizationSection />
        </TabPanel>
        <TabPanel value={value} index={3}>
          Contenuto del Tab 4
        </TabPanel>
        <TabPanel value={value} index={4}>
          Contenuto del Tab 5
        </TabPanel>
        <TabPanel value={value} index={5}>
        <FreeVsProSection />
        </TabPanel>
        <TabPanel value={value} index={6}>
        <LicenseSection />
        </TabPanel>
      </Box>
    </Box>
  );
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default VerticalTabs;