import React, { useState } from 'react';
import { Button, ButtonGroup, Icon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const SectionSelectorSlide = ({ onSectionChange }) => {
    const [activeSectionSlide, setActiveSectionSlide] = useState('background');

    const handleSectionChangeSlide = (section) => {
        setActiveSectionSlide(section);
        onSectionChange(section);
    };

    return (
        <ButtonGroup
            className='section-selector'
            style={{ marginLeft: '-16px',marginRight: '-16px', marginBottom: '-16px' }}
        >
            <Button 
                className='section-selector-button'
                variant={activeSectionSlide === 'background' ? 'primary' : 'secondary'}
                onClick={() => handleSectionChangeSlide('background')}
            >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-120q-33 0-56.5-23.5T120-200v-240h80v240h240v80H200Zm320 0v-80h240v-240h80v240q0 33-23.5 56.5T760-120H520ZM240-280l120-160 90 120 120-160 150 200H240ZM120-520v-240q0-33 23.5-56.5T200-840h240v80H200v240h-80Zm640 0v-240H520v-80h240q33 0 56.5 23.5T840-760v240h-80Zm-140-40q-26 0-43-17t-17-43q0-26 17-43t43-17q26 0 43 17t17 43q0 26-17 43t-43 17Z"/></svg>
                {__('Background', 'cocoblocks')}
            </Button> 
            <Button
                className='section-selector-button'
                variant={activeSectionSlide === 'layout' ? 'primary' : 'secondary'}
                onClick={() => handleSectionChangeSlide('layout')}
            >
               <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h240v-560H200v560Zm320 0h240v-280H520v280Zm0-360h240v-200H520v200Z"/></svg>
               {__('Layout', 'cocoblocks')}
            </Button>
           
            <Button
                className='section-selector-button'
                variant={activeSectionSlide === 'style' ? 'primary' : 'secondary'}
                onClick={() => handleSectionChangeSlide('style')}
            >
               <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#5f6368"
                    >
                    <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 32.5-156t88-127Q256-817 330-848.5T488-880q80 0 151 27.5t124.5 76q53.5 48.5 85 115T880-518q0 115-70 176.5T640-280h-74q-9 0-12.5 5t-3.5 11q0 12 15 34.5t15 51.5q0 50-27.5 74T480-80Zm0-400Zm-220 40q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm120-160q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm200 0q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm120 160q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17ZM480-160q9 0 14.5-5t5.5-13q0-14-15-33t-15-57q0-42 29-67t71-25h70q66 0 113-38.5T800-518q0-121-92.5-201.5T488-800q-136 0-232 93t-96 227q0 133 93.5 226.5T480-160Z" />
                </svg>
                {__('Style', 'cocoblocks')}
            </Button>
        </ButtonGroup>
    );
};

export default SectionSelectorSlide;
