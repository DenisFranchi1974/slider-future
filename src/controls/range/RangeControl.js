import React from "react";
import { RangeControl, Tooltip } from "@wordpress/components";
import InfoIcon from '@mui/icons-material/Info';

const CustomRangeControl = ({
  label,         
  value,         
  slides,        
  setAttributes, 
  min = 0,       
  max = 100,     
  step = 1,      
  updateType,     
  slideId,        
  elementIndex,   
  innerIndex,     
  elementType,   
  updateElement,  
  tooltipText,  
  showTooltip = false, 
  ...restProps   
}) => {
  
  const handleChange = ( newValue) => {
    console.log('New Value:', newValue);
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType);
  };

  return (
    <div className="custom-select">
        <RangeControl
          __nextHasNoMarginBottom
          label={label}
          value={value}
          onChange={handleChange}
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
            text={tooltipText || __("Default tooltip text", "slider-future")}
          >
            <InfoIcon  className="tooltip-icon" style={{top:'3px'}} />
          </Tooltip>
        )}
    </div>
  );
};

export default CustomRangeControl;