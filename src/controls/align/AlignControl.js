import React, { useState, useEffect } from 'react';
import { Button, Popover, Icon, PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';

const CustomAlignControl = ({
  value,          // Valore corrente del controllo
  onChange,       // Funzione per aggiornare il valore
  label,          // Etichetta per il controll
  tooltipText,    // Testo per il tooltip
  showTooltip = false, // Mostra o nasconde il tooltip (Facoltativo)
  ...restProps    // Altri eventuali props da passare
}) => {
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
    { value: 'left', label: __('Left', 'slider-future'), icon: <FormatAlignLeftIcon/> },
    { value: 'center', label: __('Center', 'slider-future'), icon: <FormatAlignCenterIcon/> },
    { value: 'right', label: __('Right', 'slider-future'), icon: <FormatAlignRightIcon/> },
  ];

  const selectedIcon = positionOptions.find(option => option.value === selectedPosition)?.icon;

  return (
    <div className="custom-select">
        <div className='postion-slide'>
      <Button
        onClick={() => setIsPopoverOpen(!isPopoverOpen)}
        aria-expanded={isPopoverOpen}
        aria-haspopup="true"
        icon={<FormatAlignLeftIcon/>} // Mostra l'icona selezionata o un'icona di default
        {...restProps}
      >
        <div className='postion-slide__label'>
          <h2>{label || __('Align', 'slider-future')}</h2>
          <Icon icon={selectedIcon || "editor-alignleft"} style={{ right: '-50px' }} />
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
      {showTooltip && (
        <Tooltip
          placement="top"
          style={{
            padding: "10px",
            maxWidth: "300px",
            borderRadius: "4px",
          }}
          text={tooltipText || __("Default tooltip text", "slider-future")} // Testo di fallback
        >
          <InfoIcon className="tooltip-icon" style={{ top: '3px' }} />
        </Tooltip>
      )}
      </div>
    </div>
  );
};

export default CustomAlignControl;