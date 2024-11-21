import React from "react";
import { ToggleControl,Tooltip } from "@wordpress/components";
import InfoIcon from '@mui/icons-material/Info';
import './ToggleControl.scss';

const CustomToggleControl = ({
  label,          
  value,          
  options, 
  checked,      
  onChange, 
  customClassToggle = '', // Classe personalizzata per il controllo (Facoltativo)
  tooltipText,  // Testo per il tooltip
  showTooltip = false, // Mostra o nasconde il tooltip (Facoltativo) 
  tooltipTop = '3px',  // Posizione 'top' del tooltip (di default 5px)
  tooltipLeft = '35%', // Posizione 'left' del tooltip (di default 35%)    
  ...restProps    
}) => {
  return (
    <div className={"custom-select " + customClassToggle}>
          <ToggleControl
            __nextHasNoMarginBottom
            label={label}
            checked={checked}
            onChange={onChange}
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
            <InfoIcon  className="tooltip-icon" style={{top: tooltipTop, left: tooltipLeft}} />
        </Tooltip>
        )}
    </div>
  );
};

export default CustomToggleControl;