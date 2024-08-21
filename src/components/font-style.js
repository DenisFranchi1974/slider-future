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
        icon={<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M40-199v-200h80v120h720v-120h80v200H40Zm342-161v-34h-3q-13 20-35 31.5T294-351q-49 0-77-25.5T189-446q0-42 32.5-68.5T305-541q23 0 42.5 3.5T381-526v-14q0-27-18.5-43T312-599q-21 0-39.5 9T241-564l-43-32q19-27 48-41t67-14q62 0 95 29.5t33 85.5v176h-59Zm-66-134q-32 0-49 12.5T250-446q0 20 15 32.5t39 12.5q32 0 54.5-22.5T381-478q-14-8-32-12t-33-4Zm185 134v-401h62v113l-3 40h3q3-5 24-25.5t66-20.5q64 0 101 46t37 106q0 60-36.5 105.5T653-351q-41 0-62.5-18T563-397h-3v37h-59Zm143-238q-40 0-62 29.5T560-503q0 37 22 66t62 29q40 0 62.5-29t22.5-66q0-37-22.5-66T644-598Z"/></svg>} // Mostra un'icona di default se nessuna icona è selezionata
       
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