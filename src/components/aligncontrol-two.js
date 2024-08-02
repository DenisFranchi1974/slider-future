import React, { useState,  useEffect } from 'react';
import { Button, Popover, Icon, PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { justifyLeft, justifyRight} from '@wordpress/icons';

const AlignmentControlTwo = ({ value, onChange }) => {
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
    { value: 'top-left', label: __('Top Left', 'cocoblocks'), icon: justifyLeft},
    { value: 'top-right', label: __('Top Right', 'cocoblocks'), icon:justifyRight },
    { value: 'bottom-left', label: __('Bottom Left', 'cocoblocks'), icon: justifyLeft},
    { value: 'bottom-right', label: __('Bottom Right', 'cocoblocks'), icon: justifyRight},
  ];
  
  const selectedIcon = positionOptions.find(option => option.value === selectedPosition)?.icon;

  return (
    <div className='postion-slide'>
      <Button
        onClick={() => setIsPopoverOpen(!isPopoverOpen)}
        aria-expanded={isPopoverOpen}
        aria-haspopup="true"
        icon={'screenoptions'} // Mostra l'icona selezionata o un'icona di default
      >
        <div className='postion-slide__label'> <h2>{__('Position', 'cocoblocks')}</h2><Icon icon={selectedIcon || "screenoptions"} style={{right:'-50px'}}/><span class="ico-align-content dashicons dashicons-arrow-down-alt2"></span></div>
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

export default AlignmentControlTwo;