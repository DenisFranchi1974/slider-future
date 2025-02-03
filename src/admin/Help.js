import React from 'react';
import { __ } from "@wordpress/i18n";
import { Button } from "@mui/material";

const Help = () => {
    return (
    <div className='content-dashboard'>
        <h3>{__('How can we assist you?', 'slider-future')}</h3>
        <div className='help'>
            <h4>{__('Quick Start Guide','slider-future')}</h4>
            <h5>{__('1 Start Editing:','slider-future')}</h5> 
            <p>{__('Create a new post, a new page, or, if you\'re using a Full Site Editing (FSE) theme, go directly into the site editor.','slider-future')}</p>
            <h5>{__('2 Add the Slider Block:','slider-future')}</h5>
            <ul>
            <li>{__('Navigate to the section where you want to display your slider.','slider-future')}</li>
            <li>{__('Click the + button in the editor to add a new block.','slider-future')}</li>
            <li>{__('In the block search field, type "Slider". You\'ll see "Slider Future" appear as an option.','slider-future')}</li>
            <li>{__('Select "Slider Future" to insert it into your content.','slider-future')}</li>
            </ul>
            <h5>{__('3 Customize Your Slider:','slider-future')}</h5> 
            <p>{__('Once the block is added, you’ll find all its customization options conveniently located in the settings panel on the right.','slider-future')}</p>
            <h5>{__('4 Visual Adjustments:','slider-future')}</h5> 
            <p>{__('Tailor the slider\'s appearance to perfectly match your design. You can easily adjust settings like animation, layout, and more, all in a user-friendly, visual way.With Slider Future, building a beautiful, fully customizable slider has never been easier!','slider-future')}</p>
            <Button 
                component="a"
                href="https://sliderfuture.franchiwebdesign.com/documentation/" 
                target="_blank" 
                rel="noopener noreferrer" 
                variant="contained" 
                sx={{
                    backgroundColor: "var(--white-color)",
                    color:"var(--black-color)",
                    borderRadius: "24px",
                    fontWeight: "bold",
                    "&:hover": {
                    backgroundColor: "var(--primary-color)",
                        color: "var(--white-color)",
                    },
                    marginTop: '24px'
                }}>
                    {__('Read full documentation','slider-future')}
            </Button>
        </div>
        <div className='help' style={{marginTop: '48px'}}>
            <h4>{__('Contact Support','slider-future')}</h4>
            <p>{__('If you have found a bug in Slider Future, please report it in our support forum. We will fix it as soon as possible.','slider-future')}</p>
            <Button 
                component="a"
                href="https://wordpress.org/support/plugin/slider-future/" 
                target="_blank" 
                rel="noopener noreferrer" 
                variant="contained" 
                sx={{
                    backgroundColor: "var(--white-color)",
                    color: "var(--black-color)",
                    borderRadius: "24px",
                    fontWeight: "bold",
                    "&:hover": {
                    backgroundColor: "var(--primary-color)",
                        color: "var(--white-color)",
                    },
                    marginTop: '24px'
                }}>
                    {__('Report Now','slider-future')}
            </Button>
        </div>
    </div>
     ) ;
};

export default Help;