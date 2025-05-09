import React, { useState,  useEffect } from 'react';
import { Button, Popover, Icon, PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { justifyLeft, justifyCenter, justifyRight, justifySpaceBetween } from '@wordpress/icons';

const AlignmentControl = ({ value, onChange }) => {
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
    { value: 'top-left', label: __('Top Left', 'slider-future'), icon: justifyLeft},
    { value: 'top-center', label: __('Top Center', 'slider-future'), icon: justifyCenter },
    { value: 'top-right', label: __('Top Right', 'slider-future'), icon:justifyRight },
    { value: 'top-space-between', label: __('Space between start', 'slider-future'), icon: justifySpaceBetween },
    { value: 'center-left', label: __('Center Left', 'slider-future'), icon: justifyLeft },
    { value: 'center-center', label: __('Center Center', 'slider-future'), icon: justifyCenter },
    { value: 'center-right', label: __('Center Right', 'slider-future'), icon: justifyRight},
    { value: 'center-space-between', label: __('Space between center', 'slider-future'), icon: justifySpaceBetween },
    { value: 'bottom-left', label: __('Bottom Left', 'slider-future'), icon: justifyLeft},
    { value: 'bottom-center', label: __('Bottom Center', 'slider-future'), icon: justifyCenter },
    { value: 'bottom-right', label: __('Bottom Right', 'slider-future'), icon: justifyRight},
    { value: 'bottom-space-between', label: __('Space between end', 'slider-future'), icon: justifySpaceBetween },
  ];
  
  const selectedIcon = positionOptions.find(option => option.value === selectedPosition)?.icon;

  return (
    <div className='postion-slide'>
      <Button
        onClick={() => setIsPopoverOpen(!isPopoverOpen)}
        aria-expanded={isPopoverOpen}
        aria-haspopup="true"
        icon={'editor-alignleft'} // Mostra l'icona selezionata o un'icona di default
      >
        <div className='postion-slide__label'> <h2>{__('Content position', 'slider-future')}</h2><div className='group-icon-position'><Icon icon={selectedIcon || "editor-alignleft"} /><span class="ico-align-content dashicons dashicons-arrow-down-alt2"></span></div></div>
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

export default AlignmentControl;