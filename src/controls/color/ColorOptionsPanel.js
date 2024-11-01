import React, { useState } from 'react';
import { Button, ColorPicker, Icon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './ColorOptionsPanel.scss';

const CustomColorOptionsPanel = ({
  colorNormal,       // Colore corrente
  setColorNormal,    // Funzione per aggiornare il colore
  buttonTitle,       // Titolo del pulsante
  buttonIcon,        // Icona del pulsante
  slides,            // Stato delle slide
  setAttributes,     // Funzione per aggiornare lo stato delle slide
  updateType,        // Tipo di elemento (primario o secondario)
  slideId,           // ID della slide
  elementIndex,      // Indice dell'elemento primario (se primario)
  innerIndex,        // Indice dell'elemento secondario (se secondario)
  elementType,       // Tipo di elemento (ad es. "title", "button", ecc.)
  updateElement,     // Funzione di aggiornamento passata come prop
  property,          // Proprietà da aggiornare
  ...restProps       // Altri eventuali props da passare
}) => {
  const [colorPaletteOpen, setColorPaletteOpen] = useState(false);

  const toggleColorPalette = () => {
    setColorPaletteOpen(!colorPaletteOpen);
  };

  const handleColorChange = (color) => {
    setColorNormal(color.hex);
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, color.hex, updateType, elementType, property);
  };

  return (
    <div className="custom-select color">
    <div className="color-options-panel">
      <Button
        onClick={toggleColorPalette}
        className="color-options-button"
        style={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between', 
          cursor: 'pointer',
          width: '100%',
          marginLeft: '-18px',
        }}
      >
        <div>
          {buttonIcon && (
            <span className="button-icon" style={{ marginRight: '4px' }}>
              <Icon icon={buttonIcon} />
            </span>
          )}
          <span>{buttonTitle || __('Set Color', 'cocoblocks')}</span>
        </div>
        <div 
          className="color-indicator" 
          style={{ 
            width: '20px', 
            height: '20px', 
            borderRadius: '24%', 
            backgroundColor: colorNormal, 
            border: '1px solid var(--light-color)', 
            marginRight: '-6px'
          }}
        />
        <span className="dashicons dashicons-arrow-down-alt2" style={{ position: 'absolute', right: '6px', top: '12px', fontSize: '12px' }}></span>
      </Button>
      {colorPaletteOpen && (
        <>
          <ColorPicker
            color={colorNormal}
            onChangeComplete={handleColorChange}
            enableAlpha
          />
        </>
      )}
    </div>
    </div>
  );
};

export default CustomColorOptionsPanel;