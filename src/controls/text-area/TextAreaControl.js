import React from "react";
import { TextareaControl, Tooltip } from "@wordpress/components";
import InfoIcon from '@mui/icons-material/Info';

const CustomTextAreaControl = ({
  placeholder,          // Etichetta per il controllo (includi l'icona o altro HTML qui)
  value,          // Valore corrente del controllo
  slides,         // Stato delle slide
  setAttributes,  // Funzione per aggiornare lo stato delle slide
  updateType,     // Tipo di elemento (primario o secondario)
  slideId,        // ID della slide
  elementIndex,   // Indice dell'elemento primario (se primario)
  innerIndex,     // Indice dell'elemento secondario (se secondario)
  elementType,    // Tipo di elemento (ad es. "title", "button", ecc.)
  updateElement,  // Funzione di aggiornamento passata come prop
  tooltipText,  // Testo per il tooltip
  showTooltip = false, // Mostra o nasconde il tooltip (Facoltativo) 
  ...restProps    // Altri eventuali props da passare
}) => {
  
  // Funzione di gestione del cambio valore
  const handleChange = ( newValue) => {
    console.log('New Value:', newValue);
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType);
  };

  return (
    <div className="custom-select">
       <TextareaControl
       __nextHasNoMarginBottom
          value={value}
          onChange={handleChange}
          placeholder={placeholder || __("Add text content...", "cocoblocks")} 
          {...restProps}
        />
        {showTooltip && (
          <Tooltip
            placement="top"
            style={{
              padding: "10px",
              maxWidth: "300px",
              borderRadius: "4px",
            }}
            text={tooltipText || __("Default tooltip text", "cocoblocks")} // Testo di fallback
          >
            <InfoIcon  className="tooltip-icon" style={{top:'3px'}} />
          </Tooltip>
        )}
    </div>
  );
};

export default CustomTextAreaControl;