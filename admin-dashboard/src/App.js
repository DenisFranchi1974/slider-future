import React from 'react';
import { Container, Box} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import AppBar from './section/topBar';
import VerticalTabs from './section/tabs';

const App = () => {

    return (
        <Container maxWidth="false" sx={{paddingTop:'40px',paddingBottom:'40px'}} className='body-dashboard'>
           <AppBar/>
             <Box sx={{ flexGrow: 1, mt: 5  }}>
                  <Grid container spacing={2}  columns={{ xs: 4, md: 12 }}>
                  <Grid item xs={9}>
                    <VerticalTabs/>
                  </Grid>
                  <Grid item xs={3} style={{ position: 'sticky', top: '200px',height: '100vh'}}>
                 Sidebar
                  </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default App;
