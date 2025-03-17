import React from "react";
import { TextareaControl, Tooltip } from "@wordpress/components";
import InfoIcon from '@mui/icons-material/Info';

const CustomTextAreaControl = ({
  placeholder,          
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
  ...restProps    
}) => {
  
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

export default CustomTextAreaControl;