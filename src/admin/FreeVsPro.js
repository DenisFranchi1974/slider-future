import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import { __ } from "@wordpress/i18n";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

const FreeVsPro = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(prev => !prev);
    };
    return <>
        <div className='content-dashboard'>
          <h3>{__('Comparison: Free vs Pro', 'slider-future')}</h3>
            <div className='documentation'>
                <p>{__('Explore the differences between the free and pro versions of Slider Future. Compare features and choose the version that best fits your needs.','slider-future')}</p>
            </div>
        </div>
     <TableContainer component={Paper} className='table-pro'
      sx={{
        maxHeight: expanded ? 'none' : 700, 
        overflowY: 'auto',
        transition: 'max-height 0.5s ease' 
    }}
     >
         <div style={{ textAlign: "center", margin: "20px" }}>
         <Button 
                  component="a"
                  href="https://sliderfuture.franchiwebdesign.com/pricing/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  variant="contained" 
                 sx={{
                 backgroundColor: "var(--primary-color)",
                 color: "var(--white-color)",
                 fontWeight: "bold",
                 borderRadius: "24px",
                 "&:hover": {
                   backgroundColor: "var(--primary-color)",
                     color: "var(--white-color)",
                 },
               }}>
                  {__('Upgrade Now','slider-future')}
                 </Button>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight:'bold'}}>{__('FEATURE','slider-future')}</TableCell>
            <TableCell align="center" sx={{fontWeight:'bold'}}>{__('FREE','slider-future')}</TableCell>
            <TableCell align="center" sx={{fontWeight:'bold'}}>{__('PRO','slider-future')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow>
            <TableCell>{__('Premium Templates','slider-future')}</TableCell>
            <TableCell align="center"><CancelIcon sx={{ color: "var(--red-color)" }} /></TableCell>
            <TableCell align="center"><CheckCircleOutlineIcon sx={{ color: "var(--green-color)" }} /></TableCell>
          </TableRow>
        <TableRow>
            <TableCell>{__('Slides per view','slider-future')}</TableCell>
            <TableCell align="center"><span className='vs-span'>{__('5')}</span></TableCell>
            <TableCell align="center"><span className='vs-span-pro'>{__('10')}</span></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{__('Slides per group','slider-future')}</TableCell>
            <TableCell align="center"><span className='vs-span'>{__('5')}</span></TableCell>
            <TableCell align="center"><span className='vs-span-pro'>{__('10')}</span></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{__('Slides per row','slider-future')}</TableCell>
            <TableCell align="center"><span className='vs-span'>{__('5')}</span></TableCell>
            <TableCell align="center"><span className='vs-span-pro'>{__('10')}</span></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{__('Centered slides','slider-future')}</TableCell>
            <TableCell align="center"><CancelIcon sx={{ color: "var(--red-color)" }} /></TableCell>
            <TableCell align="center"><CheckCircleOutlineIcon sx={{ color: "var(--green-color)" }} /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{__('Free mode','slider-future')}</TableCell>
            <TableCell align="center"><CancelIcon sx={{ color: "var(--red-color)" }} /></TableCell>
            <TableCell align="center"><CheckCircleOutlineIcon sx={{ color: "var(--green-color)" }} /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{__('Slider Background Image','slider-future')}</TableCell>
            <TableCell align="center"><CancelIcon sx={{ color: "var(--red-color)" }} /></TableCell>
            <TableCell align="center"><CheckCircleOutlineIcon sx={{ color: "var(--green-color)" }} /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{__('Content Type Woocommerce','slider-future')}</TableCell>
            <TableCell align="center"><CancelIcon sx={{ color: "var(--red-color)" }} /></TableCell>
            <TableCell align="center"><HourglassBottomIcon sx={{ color: "var(--green-color)" }} /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{__('Mouse Effect','slider-future')}</TableCell>
            <TableCell align="center"><CancelIcon sx={{ color: "var(--red-color)" }} /></TableCell>
            <TableCell align="center"><CheckCircleOutlineIcon sx={{ color: "var(--green-color)" }} /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{__('Scrollbar','slider-future')}</TableCell>
            <TableCell align="center"><CancelIcon sx={{ color: "var(--red-color)" }} /></TableCell>
            <TableCell align="center"><CheckCircleOutlineIcon sx={{ color: "var(--green-color)" }} /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{__('Autoplay progress','slider-future')}</TableCell>
            <TableCell align="center"><CancelIcon sx={{ color: "var(--red-color)" }} /></TableCell>
            <TableCell align="center"><CheckCircleOutlineIcon sx={{ color: "var(--green-color)" }} /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{__('Arrow Hide on click','slider-future')}</TableCell>
            <TableCell align="center"><CancelIcon sx={{ color: "var(--red-color)" }} /></TableCell>
            <TableCell align="center"><CheckCircleOutlineIcon sx={{ color: "var(--green-color)" }} /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{__('Bullets Hide on click','slider-future')}</TableCell>
            <TableCell align="center"><CancelIcon sx={{ color: "var(--red-color)" }} /></TableCell>
            <TableCell align="center"><CheckCircleOutlineIcon sx={{ color: "var(--green-color)" }} /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{__('Bullets Clickable','slider-future')}</TableCell>
            <TableCell align="center"><CancelIcon sx={{ color: "var(--red-color)" }} /></TableCell>
            <TableCell align="center"><CheckCircleOutlineIcon sx={{ color: "var(--green-color)" }} /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{__('Slider Animation Cube','slider-future')}</TableCell>
            <TableCell align="center"><CancelIcon sx={{ color: "var(--red-color)" }} /></TableCell>
            <TableCell align="center"><CheckCircleOutlineIcon sx={{ color: "var(--green-color)" }} /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{__('Slider Animation Cards','slider-future')}</TableCell>
            <TableCell align="center"><CancelIcon sx={{ color: "var(--red-color)" }} /></TableCell>
            <TableCell align="center"><CheckCircleOutlineIcon sx={{ color: "var(--green-color)" }} /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{__('Slider Advanced Animation','slider-future')}</TableCell>
            <TableCell align="center"><CancelIcon sx={{ color: "var(--red-color)" }} /></TableCell>
            <TableCell align="center"><CheckCircleOutlineIcon sx={{ color: "var(--green-color)" }} /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{__('Slider Filter','slider-future')}</TableCell>
            <TableCell align="center"><CancelIcon sx={{ color: "var(--red-color)" }} /></TableCell>
            <TableCell align="center"><CheckCircleOutlineIcon sx={{ color: "var(--green-color)" }} /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{__('Loop Mode Rewind','slider-future')}</TableCell>
            <TableCell align="center"><CancelIcon sx={{ color: "var(--red-color)" }} /></TableCell>
            <TableCell align="center"><CheckCircleOutlineIcon sx={{ color: "var(--green-color)" }} /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{__('Language Direction','slider-future')}</TableCell>
            <TableCell align="center"><CancelIcon sx={{ color: "var(--red-color)" }} /></TableCell>
            <TableCell align="center"><CheckCircleOutlineIcon sx={{ color: "var(--green-color)" }} /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{__('Direction','slider-future')}</TableCell>
            <TableCell align="center"><CancelIcon sx={{ color: "var(--red-color)" }} /></TableCell>
            <TableCell align="center"><CheckCircleOutlineIcon sx={{ color: "var(--green-color)" }} /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{__('Design Tools','slider-future')}</TableCell>
            <TableCell align="center"><CancelIcon sx={{ color: "var(--red-color)" }} /></TableCell>
            <TableCell align="center"><CheckCircleOutlineIcon sx={{ color: "var(--green-color)" }} /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{__('Slide Background Radial Effect','slider-future')}</TableCell>
            <TableCell align="center"><CancelIcon sx={{ color: "var(--red-color)" }} /></TableCell>
            <TableCell align="center"><CheckCircleOutlineIcon sx={{ color: "var(--green-color)" }} /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{__('Slide Background Video','slider-future')}</TableCell>
            <TableCell align="center"><CancelIcon sx={{ color: "var(--red-color)" }} /></TableCell>
            <TableCell align="center"><CheckCircleOutlineIcon sx={{ color: "var(--green-color)" }} /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{__('Slide Layout Canvas Mode','slider-future')}</TableCell>
            <TableCell align="center"><CancelIcon sx={{ color: "var(--red-color)" }} /></TableCell>
            <TableCell align="center"><CheckCircleOutlineIcon sx={{ color: "var(--green-color)" }} /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{__('Slide Bg Filter','slider-future')}</TableCell>
            <TableCell align="center"><CancelIcon sx={{ color: "var(--red-color)" }} /></TableCell>
            <TableCell align="center"><CheckCircleOutlineIcon sx={{ color: "var(--green-color)" }} /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{__('Slide Divider','slider-future')}</TableCell>
            <TableCell align="center"><CancelIcon sx={{ color: "var(--red-color)" }} /></TableCell>
            <TableCell align="center"><CheckCircleOutlineIcon sx={{ color: "var(--green-color)" }} /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{__('Element Text Typewriter Effect','slider-future')}</TableCell>
            <TableCell align="center"><CancelIcon sx={{ color: "var(--red-color)" }} /></TableCell>
            <TableCell align="center"><CheckCircleOutlineIcon sx={{ color: "var(--green-color)" }} /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{__('Element Advanced Effects','slider-future')}</TableCell>
            <TableCell align="center"><CancelIcon sx={{ color: "var(--red-color)" }} /></TableCell>
            <TableCell align="center"><CheckCircleOutlineIcon sx={{ color: "var(--green-color)" }} /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{__('Element Animations Split Text','slider-future')}</TableCell>
            <TableCell align="center"><CancelIcon sx={{ color: "var(--red-color)" }} /></TableCell>
            <TableCell align="center"><CheckCircleOutlineIcon sx={{ color: "var(--green-color)" }} /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{__('Element Animations Effects','slider-future')}</TableCell>
            <TableCell align="center"><span className='vs-span'>{__('4')}</span></TableCell>
            <TableCell align="center"><span className='vs-span-pro'>{__('10')}</span></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{__('Element Advanced Animations','slider-future')}</TableCell>
            <TableCell align="center"><CancelIcon sx={{ color: "var(--red-color)" }} /></TableCell>
            <TableCell align="center"><CheckCircleOutlineIcon sx={{ color: "var(--green-color)" }} /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{__('Element Animations Effects Hover','slider-future')}</TableCell>
            <TableCell align="center"><span className='vs-span'>{__('4')}</span></TableCell>
            <TableCell align="center"><span className='vs-span-pro-one'>{__('8')}</span></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{__('Element Advanced Animations Hover','slider-future')}</TableCell>
            <TableCell align="center"><CancelIcon sx={{ color: "var(--red-color)" }} /></TableCell>
            <TableCell align="center"><CheckCircleOutlineIcon sx={{ color: "var(--green-color)" }} /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{__('Element Image Advanced Style','slider-future')}</TableCell>
            <TableCell align="center"><CancelIcon sx={{ color: "var(--red-color)" }} /></TableCell>
            <TableCell align="center"><CheckCircleOutlineIcon sx={{ color: "var(--green-color)" }} /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{__('Element Image Advanced Effects','slider-future')}</TableCell>
            <TableCell align="center"><CancelIcon sx={{ color: "var(--red-color)" }} /></TableCell>
            <TableCell align="center"><CheckCircleOutlineIcon sx={{ color: "var(--green-color)" }} /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{__('Element Icon Advanced Animations Effects','slider-future')}</TableCell>
            <TableCell align="center"><span className='vs-span'>{__('2')}</span></TableCell>
            <TableCell align="center"><span className='vs-span-pro-one'>{__('8')}</span></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{__('Media Library','slider-future')}</TableCell>
            <TableCell align="center"><span className='vs-span-three'>{__('20+')}</span></TableCell>
            <TableCell align="center"><span className='vs-span-pro-four'>{__('100+')}</span></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{__('Template','slider-future')}</TableCell>
            <TableCell align="center"><span className='vs-span-three'>{__('10+')}</span></TableCell>
            <TableCell align="center"><span className='vs-span-pro-three'>{__('20+')}</span></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{__('Priority Support h24','slider-future')}</TableCell>
            <TableCell align="center"><CancelIcon sx={{ color: "var(--red-color)" }} /></TableCell>
            <TableCell align="center"><CheckCircleOutlineIcon sx={{ color: "var(--green-color)" }} /></TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div style={{ textAlign: "center", margin: "20px" }}>
          <Button 
                  component="a"
                  href="https://sliderfuture.franchiwebdesign.com/pricing/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  variant="contained" 
                 sx={{
                 backgroundColor: "var(--primary-color)",
                 color: "var(--white-color)",
                 fontWeight: "bold",
                 borderRadius: "24px",
                 "&:hover": {
                   backgroundColor: "var(--primary-color)",
                     color: "var(--white-color)",
                 },
               }}>
                  {__('Upgrade Now','slider-future')}
                 </Button>
      </div>
    </TableContainer>
    <div style={{ textAlign: "center", margin: "20px" }}>
                <Button 
                    variant="contained" 
                    color="primary" 
                    sx={{ borderRadius: "24px" }}
                    onClick={toggleExpand}
                >
                    {expanded ? __('Collapse','slider-future') : __('Expand','slider-future')}
                </Button>
            </div>
    </>;
};

export default FreeVsPro;