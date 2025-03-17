import React from "react";
import ColorOptionsPanel from "../../components/colorPanel";  
import { __ } from "@wordpress/i18n";
import ColorLensIcon from '@mui/icons-material/ColorLens';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import ExpandIcon from '@mui/icons-material/Expand';
import FitbitIcon from '@mui/icons-material/Fitbit';
import CustomRangeControl  from "../../controls/range/CustomRangeControl"; 
import CustomToggleControl from "../../controls/toggle/CustomToggleControl";

const CustomShadowControl = ({
  valueEnableShadow,
  valueRangeShadowX, 
  valueRangeShadowY, 
  valueRangeShadowBlur, 
  valueRangeShadowSpread, 
  valueRangeShadowColor, 
  showSpread = false,
  slides, 
  setAttributes, 
  updateType, 
  slideId, 
  elementIndex, 
  innerIndex, 
  elementType, 
  updateElement, 
  enablePropertyShadow, 
  rangePropertyX, 
  rangePropertyY,
  rangePropertyBlur, 
  rangePropertySpread, 
  rangePropertyColor,
  ...restProps 
}) => {

  const handleChangeEnableShadow = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType,enablePropertyShadow);
  };
  const handleChangeRangeShadowX = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, rangePropertyX);
  };

  const handleChangeRangeShadowY = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, rangePropertyY);
  };

  const handleChangeRangeShadowBlur = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, rangePropertyBlur);
  };

  const handleChangeRangeShadowSpread = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, rangePropertySpread);
  };

  const handleChangeRangeShadowColor = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, rangePropertyColor);
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
          checked={valueEnableShadow}
          onChange={handleChangeEnableShadow}
          {...restProps}
      />
    {valueEnableShadow && (
    <>
     <div className="custom-select color">
      <ColorOptionsPanel
          colorNormal={valueRangeShadowColor}
          setColorNormal={handleChangeRangeShadowColor}
          buttonTitle={__("Set Color", "slider-future")}
          buttonIcon={<ColorLensIcon style={{marginBottom:'-5px'}} />}
        />
     </div>
        <CustomRangeControl
          label={
            <>
              <SwapHorizIcon />
              {__("Offset X", "slider-future")}
            </>
          }
          value={valueRangeShadowX}
          onChange={handleChangeRangeShadowX}
          min={-100}
          max={100}
          step={1}
          {...restProps}
        />
        <CustomRangeControl
          label={
            <>
              <SwapVertIcon />
              {__("Offset Y", "slider-future")}
            </>
          }
          value={valueRangeShadowY}
          onChange={handleChangeRangeShadowY}
          min={-100}
          max={100}
          step={1}
          {...restProps}
        />
        <CustomRangeControl
        __nextHasNoMarginBottom
          label={
            <>
              <BlurOnIcon />
              {__("Blur", "slider-future")}
            </>
          }
          value={valueRangeShadowBlur}
          onChange={handleChangeRangeShadowBlur}
          min={0}
          max={100}
          step={1}
          {...restProps}
        />
      {showSpread && (
        <CustomRangeControl
        __nextHasNoMarginBottom
          label={
            <>
              <ExpandIcon />
              {__("Spread", "slider-future")}
            </>
          }
          value={valueRangeShadowSpread}
          onChange={handleChangeRangeShadowSpread}
          min={-100}
          max={100}
          step={1}
          {...restProps}
        />
      )}
      </>
    )}
     
    </>
  );
};

export default CustomShadowControl;

