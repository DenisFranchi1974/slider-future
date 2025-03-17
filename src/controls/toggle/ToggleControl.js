import React from "react";
import { ToggleControl, Tooltip } from "@wordpress/components";
import InfoIcon from '@mui/icons-material/Info';

const CustomToggleControl = ({
  label,          
  value,         
  slides,        
  setAttributes,  
  updateType,     
  slideId,        
  elementIndex,   
  innerIndex,     
  elementType,    
  updateElement, 
  tooltipText, 
  showTooltip = false, 
  tooltipTop = '3px', 
  tooltipLeft = '35%', 
  ...restProps   
}) => {
  
  const handleChange = ( newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType);
  };

  return (
    <div className="custom-select">
        <ToggleControl
        __nextHasNoMarginBottom
            label={label}
            checked={value}
            onChange={handleChange}
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
            <InfoIcon  className="tooltip-icon" style={{top: tooltipTop}} />
        </Tooltip>
        )}
    </div>
  );
};

export default CustomToggleControl;