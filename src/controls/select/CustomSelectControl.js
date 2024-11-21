import React from "react";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { ThemeProvider } from '@mui/material/styles';
import InfoIcon from '@mui/icons-material/Info';
import { Tooltip } from "@wordpress/components";
import theme from '../theme';
import './SelectControl.scss';

const CustomSelectControl = ({
  label,          // Etichetta per il controllo (includi l'icona o altro HTML qui)
  value,          // Valore corrente del controllo
  options,        // Opzioni per il SelectControl
  onChange,       // Funzione di aggiornamento passata come prop
  tooltipText,  // Testo per il tooltip
  showTooltip = false, // Mostra o nasconde il tooltip (Facoltativo) 
  tooltipTop = '5px',  // Posizione 'top' del tooltip (di default 5px)
  tooltipLeft = '35%', // Posizione 'left' del tooltip (di default 35%)
  ...restProps    // Altri eventuali props da passare
}) => {
  return (
    <ThemeProvider theme={theme}>
      <div className="custom-select select-control-label-right select-material">
        <InputLabel>{label}</InputLabel>
        <Select
          value={value}
          onChange={(event) => onChange(event.target.value)}
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
          {options.map(option => (
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
            text={tooltipText || __("Default tooltip text", "cocoblocks")} // Testo di fallback
          >
            <InfoIcon  className="tooltip-icon" style={{top: tooltipTop, left: tooltipLeft}} />
          </Tooltip>
        )}
      </div>
    </ThemeProvider>
  );
};

export default CustomSelectControl;