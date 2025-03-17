import React from "react";
import { RangeControl, Tooltip  } from "@wordpress/components";
import InfoIcon from '@mui/icons-material/Info';
import './RangeControl.scss';

const CustomRangeControl = ({
  label,         
  value,         
  onChange,       
  min,            
  max,           
  step,           
  tooltipText,  
  showTooltip = false, 
  tooltipTop = '3px',  
  tooltipLeft = '35%', 
  ...restProps   
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
            text={tooltipText || __("Default tooltip text", "slider-future")} 
        >
            <InfoIcon  className="tooltip-icon" style={{top: tooltipTop, left: tooltipLeft}} />
        </Tooltip>
        )}
    </div>
  );
};

export default CustomRangeControl;