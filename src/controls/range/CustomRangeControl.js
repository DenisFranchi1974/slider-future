import React from "react";
import { RangeControl, Tooltip  } from "@wordpress/components";
import InfoIcon from '@mui/icons-material/Info';
import './RangeControl.scss';

const CustomRangeControl = ({
  label,          // Etichetta per il controllo (includi l'icona o altro HTML qui)
  value,          // Valore corrente del controllo
  onChange,       // Funzione di aggiornamento passata come prop
  min,            // Valore minimo
  max,            // Valore massimo
  step,           // Incremento del valore
  tooltipText,  // Testo per il tooltip
  showTooltip = false, // Mostra o nasconde il tooltip (Facoltativo) 
  tooltipTop = '3px',  // Posizione 'top' del tooltip (di default 5px)
  tooltipLeft = '35%', // Posizione 'left' del tooltip (di default 35%)    
  ...restProps    // Altri eventuali props da passare
}) => {
  return (
    <div className="custom-select">
      <RangeControl
       __nextHasNoMarginBottom
        label={label}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
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
            text={tooltipText || __("Default tooltip text", "slider-future")} // Testo di fallback
        >
            <InfoIcon  className="tooltip-icon" style={{top: tooltipTop, left: tooltipLeft}} />
        </Tooltip>
        )}
    </div>
  );
};

export default CustomRangeControl;