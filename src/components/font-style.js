import React, { useState } from 'react';
import { Button, Popover, Icon, PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { formatBold, formatItalic, formatUnderline } from '@wordpress/icons';

const FontStyle = ({ value, onChange }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleStyleChange = (styleType, styleValue) => {
    const currentValue = value[styleType];
    const newValue = currentValue === styleValue ? undefined : styleValue; // Toggle the value
    onChange(styleType, newValue);
    setIsPopoverOpen(false);
  };

  const styleOptions = [
    { type: 'fontWeight', value: 'bold', label: __('Bold', 'cocoblocks'), icon: formatBold },
    { type: 'fontStyle', value: 'italic', label: __('Italic', 'cocoblocks'), icon: formatItalic },
    { type: 'textDecoration', value: 'underline', label: __('Underline', 'cocoblocks'), icon: formatUnderline },
  ];

  const selectedIcons = styleOptions
    .filter(option => value[option.type] === option.value)
    .map(option => option.icon);

  // Calcola il margine a destra basato sul numero di icone
  const calculateMargin = (numIcons) => {
    return numIcons * 14 + 'px'; // 5px per ogni icona
  };

  const iconMargin = selectedIcons.length > 0 ? calculateMargin(selectedIcons.length) : '0';

  return (
    <div className='postion-slide'>
      <Button
        onClick={() => setIsPopoverOpen(!isPopoverOpen)}
        aria-expanded={isPopoverOpen}
        aria-haspopup="true"
        icon={'editor-spellcheck'} // Mostra un'icona di default se nessuna icona è selezionata
       
      >
        <div className='postion-slide__label'>
          <h2>{__('Font style', 'cocoblocks')}</h2>
          <div className='postion-slide__label-icons' style={{ marginRight: iconMargin }}>
            {selectedIcons.length > 0 ? (
              selectedIcons.map((icon, index) => (
                <Icon key={index} icon={icon} style={{right:'-57px', fill: 'var(--primary-color)' }} />
              ))
            ) : (
              <></>
            )}
          </div>
          <span className="ico-align-content dashicons dashicons-arrow-down-alt2"></span>
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
              {styleOptions.map((option) => (
                <Button
                  key={option.type}
                  onClick={() => handleStyleChange(option.type, option.value)}
                  label={option.label}
                  className={value[option.type] === option.value ? 'selected' : ''}
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

export default FontStyle;


