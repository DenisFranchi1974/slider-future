import React, { useState,  useEffect } from 'react';
import { Button, Popover, Icon, PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { alignLeft, alignCenter, alignRight } from '@wordpress/icons';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';

const AlignmentControlThree = ({ value, onChange }) => {
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
    { value: 'left', label: __('Left', 'cocoblocks'), icon: alignLeft},
    { value: 'center', label: __('Center', 'cocoblocks'), icon: alignCenter},
    { value: 'right', label: __('Right', 'cocoblocks'), icon: alignRight},
  ];
  
  const selectedIcon = positionOptions.find(option => option.value === selectedPosition)?.icon;

  return (
    <div className='postion-slide'>
      <Button
        onClick={() => setIsPopoverOpen(!isPopoverOpen)}
        aria-expanded={isPopoverOpen}
        aria-haspopup="true"
        icon={<FormatAlignLeftIcon />} // Mostra l'icona selezionata o un'icona di default
      >
        <div className='postion-slide__label'> 
          <h2>{__('Text align', 'cocoblocks')}</h2>
          <Icon icon={selectedIcon || "editor-alignleft"} style={{right:'-50px'}}/>
          <span class="ico-align-content dashicons dashicons-arrow-down-alt2"></span>
          </div>
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

export default AlignmentControlThree;