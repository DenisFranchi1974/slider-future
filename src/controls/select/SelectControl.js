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
  selectOptions,  
  tooltipText,  
  showTooltip = false, 
  tooltipTop = '5px', 
  tooltipLeft = '35%',
  ...restProps    
}) => {
  
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
            height: '30px', 
            fontSize: '13px', 
            minWidth: '80px', 
            '& .MuiSelect-select': {
              padding: '6px', 
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
            text={tooltipText || __("Default tooltip text", "slider-future")} 
          >
            <InfoIcon  className="tooltip-icon" style={{top: tooltipTop, left: tooltipLeft}} />
          </Tooltip>
        )}
    </div> 
    </ThemeProvider>
  );
};

export default CustomSelectControl;