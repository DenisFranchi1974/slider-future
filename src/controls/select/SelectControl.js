import React from "react";
import { Tooltip } from "@wordpress/components";
import InfoIcon from '@mui/icons-material/Info';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import './SelectControl.scss';

const CustomSelectControl = ({
  label,          // Etichetta per il controllo (includi l'icona o altro HTML qui)
  value,          // Valore corrente del controllo
  slides,         // Stato delle slide
  setAttributes,  // Funzione per aggiornare lo stato delle slide
  updateType,     // Tipo di elemento (primario o secondario)
  slideId,        // ID della slide
  elementIndex,   // Indice dell'elemento primario (se primario)
  innerIndex,     // Indice dell'elemento secondario (se secondario)
  elementType,    // Tipo di elemento (ad es. "title", "button", ecc.)
  updateElement,  // Funzione di aggiornamento passata come prop
  selectOptions,  // Opzioni per il SelectControl
  tooltipText,  // Testo per il tooltip
  showTooltip = false, // Mostra o nasconde il tooltip (Facoltativo) 
  tooltipTop = '5px',  // Posizione 'top' del tooltip (di default 5px)
  tooltipLeft = '35%', // Posizione 'left' del tooltip (di default 35%)
  ...restProps    // Altri eventuali props da passare
}) => {
  
  // Funzione di gestione del cambio valore
  const handleChange = (event) => {
    const newValue = event.target.value;
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType);
  };

  return (
    <ThemeProvider theme={theme}>
    <div className="custom-select select-control-label-right select-material">
        <InputLabel>{label}</InputLabel>
        <Select
          value={value}
          onChange={handleChange}
          sx={{
            height: '30px', // Altezza del selettore
            fontSize: '13px', // Dimensione del font del selettore
            minWidth: '80px', // Larghezza minima del selettore
            '& .MuiSelect-select': {
              padding: '6px', // Padding interno del selettore
            },
          }}
          {...restProps}
        >
        {selectOptions.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
        </Select>
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
            <InfoIcon  className="tooltip-icon" style={{top: tooltipTop, left: tooltipLeft}} />
          </Tooltip>
        )}
    </div> 
    </ThemeProvider>
  );
};

export default CustomSelectControl;