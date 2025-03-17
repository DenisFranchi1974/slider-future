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
  customClassToggle = '', 
  tooltipText,  
  showTooltip = false, 
  tooltipTop = '3px',  
  tooltipLeft = '35%', 
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
            text={tooltipText || __("Default tooltip text", "slider-future")} 
        >
            <InfoIcon  className="tooltip-icon" style={{top: tooltipTop, left: tooltipLeft}} />
        </Tooltip>
        )}
    </div>
  );
};

export default CustomToggleControl;