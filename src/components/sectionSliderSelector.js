import React, { useState } from 'react';
import { Button, ButtonGroup, Icon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const SectionSliderSelector = ({ onSectionChange }) => {
    const [activeSectionSlider, setActiveSectionSlider] = useState('layout');

    const handleSectionChange = (section) => {
        setActiveSectionSlider(section);
        onSectionChange(section);
    };

    return (
        <ButtonGroup
            className='section-selector'
        >
            <Button 
                className='section-selector-button'
                variant={activeSectionSlider === 'layout' ? 'primary' : 'secondary'}
                onClick={() => handleSectionChange('layout')}
            >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M80-160v-120h80v-440q0-33 23.5-56.5T240-800h600v80H240v440h240v120H80Zm520 0q-17 0-28.5-11.5T560-200v-400q0-17 11.5-28.5T600-640h240q17 0 28.5 11.5T880-600v400q0 17-11.5 28.5T840-160H600Zm40-120h160v-280H640v280Zm0 0h160-160Z"/></svg>
                {__('Layout', 'cocoblocks')}
            </Button> 
            <Button
                className='section-selector-button'
                variant={activeSectionSlider === 'general' ? 'primary' : 'secondary'}
                onClick={() => handleSectionChange('general')}
            >
               <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M686-132 444-376q-20 8-40.5 12t-43.5 4q-100 0-170-70t-70-170q0-36 10-68.5t28-61.5l146 146 72-72-146-146q29-18 61.5-28t68.5-10q100 0 170 70t70 170q0 23-4 43.5T584-516l244 242q12 12 12 29t-12 29l-84 84q-12 12-29 12t-29-12Zm29-85 27-27-256-256q18-20 26-46.5t8-53.5q0-60-38.5-104.5T386-758l74 74q12 12 12 28t-12 28L332-500q-12 12-28 12t-28-12l-74-74q9 57 53.5 95.5T360-440q26 0 52-8t47-25l256 256ZM472-488Z"/></svg>
               {__('General', 'cocoblocks')}
            </Button>
           
            <Button
                className='section-selector-button'
                variant={activeSectionSlider === 'content' ? 'primary' : 'secondary'}
                onClick={() => handleSectionChange('content')}
            >
               <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/></svg>
                {__('Content', 'cocoblocks')}
            </Button>
        </ButtonGroup>
    );
};

export default SectionSliderSelector;
