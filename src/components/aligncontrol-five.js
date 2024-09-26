import React, { useState,  useEffect } from 'react';
import { Button, Popover, Icon, PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';


const AlignmentControlFive = ({ value, onChange }) => {
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
    { value: 'baseline', label: __('Left', 'cocoblocks'), icon: (<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M80-80v-800h80v800H80Zm440-200v-400h120v400H520Zm-240 0v-400h120v400H280Z"/></svg>)},
    { value: 'center', label: __('Center', 'cocoblocks'), icon: (<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-80v-800h80v800h-80Zm160-200v-400h120v400H600Zm-360 0v-400h120v400H240Z"/></svg>)},
    { value: 'end', label: __('Right', 'cocoblocks'), icon: (<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M800-80v-800h80v800h-80ZM560-280v-400h120v400H560Zm-240 0v-400h120v400H320Z"/></svg>)},
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
        <div className='postion-slide__label'> <h2>{__('Menu align', 'cocoblocks')}</h2><Icon icon={selectedIcon || "editor-alignleft"} style={{right:'-48px'}}/><span class="ico-align-content dashicons dashicons-arrow-down-alt2"></span></div>
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

export default AlignmentControlFive;