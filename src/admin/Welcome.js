import React from 'react';
import { useEffect, useState } from 'react';
import apiFetch from '@wordpress/api-fetch';
import { __ } from "@wordpress/i18n";
import HttpsIcon from '@mui/icons-material/Https';
import premiumImage from '../assets/images/premium.webp';
import backgroundImage from '../assets/images/background.png';
import { Button } from "@mui/material";
import SupportIcon from '@mui/icons-material/Support';

const Welcome = () => {
    const [adminName, setAdminName] = useState(null);
  
    useEffect(() => {
      apiFetch({ path: '/wp/v2/admin-name' })
        .then(data => setAdminName(data.admin_name))
        .catch(error => console.error('Error fetching admin name:', error));
    }, []);
  
    if (!adminName) {
      return <p>{__('Loading...','slider-future')}</p>;
    }

    const isProFeature = typeof window.isProFeature !== 'undefined' ? window.isProFeature === 'true' : true;
    
    return (
      <div className='content-dashboard'>
      <h2>{sprintf(__('Hi %s!', 'slider-future'), adminName)}</h2>
      {isProFeature && (
      <h3>{__('You are running Slider Future 1.0.5', 'slider-future')}</h3>
      )}
       {!isProFeature && (
      <h3>{__('You are running Slider Future Pro 1.0.5', 'slider-future')}</h3>
      )}
      <div className='documentation'>
      <p>{__('SliderFuture is a Gutenberg-native slider block, designed to seamlessly integrate with WordPress. It\'s faster, easier to set up, and gives you the power to create stunning visuals directly within the editor. Explore all its features with our detailed documentation.','slider-future')}</p>
      <Button 
      component="a"
      href="https://sliderfuture.franchiwebdesign.com/documentation/" 
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
      }}>
         {__('Read the documentation','slider-future')}
        </Button>
      </div>
      <div className='filter-go-premium'>
      <div className='content-go-premium' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {isProFeature && (
        <div className='description-go-premium'>
        <h3>{__('Upgrade to Slider Future Pro','slider-future')}</h3>
        <h4>{__('Unlock all these benefits and get the full Slider Future experience','slider-future')}</h4>
        <div className='grid-go-premium'>
            <div className='card-premium'>
                <div className='title-icon-pro'><HttpsIcon /><h5><a href='#' target='_blank' rel='noreferrer'>{__('Exclusive Featured','slider-future')}</a></h5></div>
                <p>{__('Unlock exclusive and early-access features.','slider-future')}</p>
            </div>
            <div className='card-premium'>
               <div className='title-icon-pro'><HttpsIcon /><h5><a href='#' target='_blank' rel='noreferrer'>{__('Premium Templates','slider-future')}</a></h5></div>
               <p>{__('Access more templates to get started with projects.','slider-future')}</p>
            </div>
        </div>
        <div className='grid-go-premium'>
        <div className='card-premium'>
                <div className='title-icon-pro'><HttpsIcon /><h5><a href='#' target='_blank' rel='noreferrer'>{__('Advanced Customization','slider-future')}</a></h5></div>
                <p>{__('Unlock powerful tools to customize every aspect of your sliders.','slider-future')}</p>
            </div>
            <div className='card-premium'>
                <div className='title-icon-pro'><HttpsIcon /><h5><a href='#' target='_blank' rel='noreferrer'>{__('Product Support','slider-future')}</a></h5></div>
                <p>{__('Get direct help from our experienced and friendly Support Team.','slider-future')}</p>
            </div>
        </div>
        <Button 
         component="a"
         href="https://sliderfuture.franchiwebdesign.com/pricing/" 
         target="_blank" 
         rel="noopener noreferrer" 
         variant="contained" 
        sx={{
        backgroundColor: "var(--white-color)",
        color: "var(--black-color)",
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
      )}
        {!isProFeature && (
        <div className='description-go-premium'>
        <h3>{__('Priority Support','slider-future')}</h3>
        <h4>{__('Get dedicated and fast assistance for any issues or questions with our Priority Support service.','slider-future')}</h4>
        <div className='grid-go-premium'>
            <div className='card-premium card-pro'>
                <div className='title-icon-pro'><SupportIcon /><h5>{__('H24','slider-future')}</h5></div>
                <p>{__('Feel free to reach out for any inquiries or support. You can contact us at:','slider-future')}</p>
                <p className='mail-pro'>{__('support@franchiwebdesign.com','slider-future')}</p>
            </div>
        </div>
        </div>
      )}
        <div className='image-go-premium'>
        <img src={premiumImage} alt={__('SliderFuture Go Premium', 'slider-future')} />
        </div>
        </div>
        </div>
      </div>
    );
  };
  
  export default Welcome;