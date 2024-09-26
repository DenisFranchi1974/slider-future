import React, { useState,  useEffect } from 'react';
import { Button, Popover, Icon, PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';


const AlignmentControlFour = ({ value, onChange }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState(null);

  const handlePositionChange = (position) => {
    onChange(position);
    setSelectedPosition(position);
    setIsPopoverOpen(false);
  };

  useEffect(() => {
    setSelectedPosition(value);
  }, [value]);
  
  const positionOptions = [
    { value: 'left', label: __('Top', 'cocoblocks'), icon: (<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M160-760v-80h640v80H160Zm280 640v-408L336-424l-56-56 200-200 200 200-56 56-104-104v408h-80Z"/></svg>)},
    { value: 'center', label: __('Center', 'cocoblocks'), icon: (<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-80v-168l-64 64-56-56 160-160 160 160-56 56-64-64v168h-80ZM160-440v-80h640v80H160Zm320-120L320-720l56-56 64 64v-168h80v168l64-64 56 56-160 160Z"/></svg>)},
    { value: 'end', label: __('Bottom', 'cocoblocks'), icon: (<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M160-120v-80h640v80H160Zm320-160L280-480l56-56 104 104v-408h80v408l104-104 56 56-200 200Z"/></svg>)},
  ];
  
  const selectedIcon = positionOptions.find(option => option.value === selectedPosition)?.icon;

  return (
    <div className='postion-slide'>
      <Button
        onClick={() => setIsPopoverOpen(!isPopoverOpen)}
        aria-expanded={isPopoverOpen}
        aria-haspopup="true"
        icon={<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-120v-80h720v80H120Zm0-160v-80h480v80H120Zm0-160v-80h720v80H120Zm0-160v-80h480v80H120Zm0-160v-80h720v80H120Z"/></svg>} // Mostra l'icona selezionata o un'icona di default
      >
        <div className='postion-slide__label'> <h2>{__('Menu vertical align', 'cocoblocks')}</h2><Icon icon={selectedIcon || "editor-alignleft"} style={{right:'-24px'}}/><span class="ico-align-content dashicons dashicons-arrow-down-alt2"></span></div>
      </Button>
      {isPopoverOpen && (
        <Popover
          position="bottom left"
          onClickOutside={() => setIsPopoverOpen(false)}
          className="popow-content-ico"
        >
          <PanelBody>
            <div className='popow-content-ico-position'>
              {positionOptions.map((option) => (
                <Button
                  key={option.value}
                  onClick={() => handlePositionChange(option.value)}
                  label={option.label}
                  className={selectedPosition === option.value ? 'selected' : ''}
                >
                  <Icon icon={option.icon} />
                </Button>
              ))}
            </div>
          </PanelBody>
        </Popover>
      )}
    </div>
  );
};

export default AlignmentControlFour;