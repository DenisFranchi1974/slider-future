import React from "react";
import ColorOptionsPanel from "../../components/colorPanel";  
import { __ } from "@wordpress/i18n";
import ColorLensIcon from '@mui/icons-material/ColorLens';
import FitbitIcon from '@mui/icons-material/Fitbit';
import BorderRightIcon from '@mui/icons-material/BorderRight';
import CustomRangeControl  from "../../controls/range/CustomRangeControl"; 
import CustomToggleControl from "../../controls/toggle/CustomToggleControl";

const CustomStrokeControl = ({
  valueEnableStroke, 
  valueRangeStroke, 
  valueRangeStrokeColor, 
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
  enablePropertyStroke, 
  rangePropertyStroke, 
  colorPropertyStroke, 
  ...restProps 
}) => {

  const handleChangeEnableStroke = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType,enablePropertyStroke);
  };
  const handleChangeRangeStroke = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, rangePropertyStroke);
  };

  const handleChangeColorStroke = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, colorPropertyStroke);
  };

  return (
    <>
      <CustomToggleControl
          label={
            <>
              <FitbitIcon />
              {__("Effect", "slider-future")}
            </>
          }
          checked={valueEnableStroke}
          onChange={handleChangeEnableStroke}
          {...restProps}
      />
    {valueEnableStroke && (
    <>
     <div className="custom-select color">
      <ColorOptionsPanel
          colorNormal={valueRangeStrokeColor}
          setColorNormal={handleChangeColorStroke}
          buttonTitle={__("Set Color", "slider-future")}
          buttonIcon={<ColorLensIcon style={{marginBottom:'-5px'}} />}
        />
     </div>
        <CustomRangeControl
          label={
            <>
              <BorderRightIcon />
              {__("Size", "slider-future")}
            </>
          }
          value={valueRangeStroke}
          onChange={handleChangeRangeStroke}
          min={min}
          max={max}
          step={step}
          {...restProps}
        />
      </>
    )}
    </>
  );
};

export default CustomStrokeControl;
