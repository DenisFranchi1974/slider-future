import React from "react";
import { TextControl, Tooltip } from "@wordpress/components";
import InfoIcon from '@mui/icons-material/Info';
import { __ } from "@wordpress/i18n";

const CustomTextControl = ({
  placeholder,    
  value,          
  label,       
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
  ...restProps    
}) => {
  
  const handleChange = ( newValue) => {
    console.log('New Value:', newValue);
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType);
  };

  return (
    <div className="custom-select select-text-control">
       <TextControl
         __nextHasNoMarginBottom
          value={value}
          label={label}
          onChange={handleChange}
          placeholder={placeholder || __("Add text content...", "slider-future")} 
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

export default CustomTextControl;