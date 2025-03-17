import React, { useEffect, useState } from "react";
import { Button, ColorPicker, Icon} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import {selectOptionsEffectHover} from '../../assets/options';
import {selectOptionsEffectHoverFree} from '../../assets/options';
import {selectOptionsScaleIn} from '../../assets/options';
import {selectOptionsEase} from '../../assets/options';
import {selectOptionsEaseFree} from '../../assets/options';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import SwapCallsIcon from '@mui/icons-material/SwapCalls';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import RefreshIcon from '@mui/icons-material/Refresh';
import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty';
import DeblurIcon from '@mui/icons-material/Deblur';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import GrainIcon from '@mui/icons-material/Grain';
import OpacityIcon from '@mui/icons-material/Opacity';
import CustomRangeControl  from "../../controls/range/CustomRangeControl"; 
import CustomSelectControl from "../../controls/select/CustomSelectControl";
import ProNotice from '../../components/ProNotice';
import ProTooltip from '../../components/ProTooltip';

const CustomHoverControls = ({
  valueEffectHover,
  colorNormal,       
  setColorNormal,    
  buttonTitle,      
  buttonIcon,       
  valueOpacityHover,
  valueBlurHover,
    valueTranslateXHover,
    valueTranslateYHover,
    valueScaleTypeHover,
    valueScaleHover,
    valueRotateHover,
    valueRotateXHover,
    valueRotateYHover,
    valueSkewXHover,
    valueSkewYHover, 
    valueDurationHover,
    valueEasingHover,
    showColorControl = true, 
  slides, 
  setAttributes, 
  updateType, 
  slideId, 
  elementIndex, 
  innerIndex, 
  elementType, 
  updateElement,
  effectHoverProperty,
  colorHoverProperty,
  opacityHoverProperty,
  blurHoverProperty,
    translateXHoverProperty,
    translateYHoverProperty,
    scaleTypeHoverProperty,
    scaleHoverProperty,
    rotateHoverProperty,
    rotateXHoverProperty,
    rotateYHoverProperty,
    skewXHoverProperty,
    skewYHoverProperty,
    durationHoverProperty,
    easingHoverProperty,
  ...restProps 
}) => {
  // Funzione effect
  const handleChangeEffectHover = (newValue) => {
    updateElement(
      slides,
      setAttributes,
      slideId,
      elementIndex,
      innerIndex,
      newValue,
      updateType,
      elementType,
      effectHoverProperty
    );
  };
 
  const [colorPaletteOpen, setColorPaletteOpen] = useState(false);

  const toggleColorPalette = () => {
    setColorPaletteOpen(!colorPaletteOpen);
  };

  const handleColorChange = (color) => {
    setColorNormal(color.hex);
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, color.hex, updateType, elementType, colorHoverProperty);
  };
    
    const handleChangeOpacityHover = (newValue) => {
        updateElement(
        slides,
        setAttributes,
        slideId,
        elementIndex,
        innerIndex,
        newValue,
        updateType,
        elementType,
        opacityHoverProperty
        );
    };
   
    const handleChangeBlurHover = (newValue) => {
        updateElement(
        slides,
        setAttributes,
        slideId,
        elementIndex,
        innerIndex,
        newValue,
        updateType,
        elementType,
        blurHoverProperty
        );
    };
    
    const handleChangeTranslateXHover = (newValue) => {
        updateElement(
        slides,
        setAttributes,
        slideId,
        elementIndex,
        innerIndex,
        newValue,
        updateType,
        elementType,
        translateXHoverProperty
        );
    };
    
    const handleChangeTranslateYHover = (newValue) => {
        updateElement(
        slides,
        setAttributes,
        slideId,
        elementIndex,
        innerIndex,
        newValue,
        updateType,
        elementType,
        translateYHoverProperty
        );
    };
    
    const handleChangeScaleTypeHover = (newValue) => {
        updateElement(
        slides,
        setAttributes,
        slideId,
        elementIndex,
        innerIndex,
        newValue,
        updateType,
        elementType,
        scaleTypeHoverProperty
        );
    }
    
    const handleChangeScaleHover = (newValue) => {
        updateElement(
        slides,
        setAttributes,
        slideId,
        elementIndex,
        innerIndex,
        newValue,
        updateType,
        elementType,
        scaleHoverProperty
        );
    };
   
    const handleChangeRotateHover = (newValue) => {
        updateElement(
        slides,
        setAttributes,
        slideId,
        elementIndex,
        innerIndex,
        newValue,
        updateType,
        elementType,
        rotateHoverProperty
        );
    };
    
    const handleChangeRotateXHover = (newValue) => {
        updateElement(
        slides,
        setAttributes,
        slideId,
        elementIndex,
        innerIndex,
        newValue,
        updateType,
        elementType,
        rotateXHoverProperty
        );
    };
   
    const handleChangeRotateYHover = (newValue) => {
        updateElement(
        slides,
        setAttributes,
        slideId,
        elementIndex,
        innerIndex,
        newValue,
        updateType,
        elementType,
        rotateYHoverProperty
        );
    };
    
    const handleChangeSkewXHover = (newValue) => {
        updateElement(
        slides,
        setAttributes,
        slideId,
        elementIndex,
        innerIndex,
        newValue,
        updateType,
        elementType,
        skewXHoverProperty
        );
    };
    
    const handleChangeSkewYHover = (newValue) => {
        updateElement(
        slides,
        setAttributes,
        slideId,
        elementIndex,
        innerIndex,
        newValue,
        updateType,
        elementType,
        skewYHoverProperty
        );
    };
    
    const handleChangeDurationHover = (newValue) => {
        updateElement(
        slides,
        setAttributes,
        slideId,
        elementIndex,
        innerIndex,
        newValue,
        updateType,
        elementType,
        durationHoverProperty
        );
    };
    
    const handleChangeEasingHover = (newValue) => {
        updateElement(
        slides,
        setAttributes,
        slideId,
        elementIndex,
        innerIndex,
        newValue,
        updateType,
        elementType,
        easingHoverProperty
        );
    };

     const [isProFeature, setIsProFeature] = useState(true);

  useEffect(() => {
      if (typeof window.isProFeature !== 'undefined') {
          setIsProFeature(window.isProFeature);
      }
  }, []);
  return (
    <>
      <div
        className="content-title-custom-panel intermedy"
        style={{
          marginTop: "-18px",
        }}
      >
        <h2 className="title-custom-panel">{__("Animations", "slider-future")}</h2>
      </div>
      <div className="content-section-panel" style={{ padding: "0" }}>
          <CustomSelectControl
            label={
              <>
                <GrainIcon />
                {__("Effects", "slider-future")}
              </>
            }
            value={valueEffectHover}
            onChange={handleChangeEffectHover}
            options={isProFeature ? selectOptionsEffectHover : selectOptionsEffectHoverFree}
            {...restProps}
          />
           {(valueEffectHover !== "none" && valueEffectHover !== "animation-pro") && (
       
        <>
        {showColorControl && (
          <>
        <div className="custom-select color">
    <div className="color-options-panel">
      <Button
        onClick={toggleColorPalette}
        className="color-options-button"
        style={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between', 
          cursor: 'pointer',
          width: '100%',
          marginLeft: '-18px',
        }}
      >
        <div>
          {buttonIcon && (
            <span className="button-icon" style={{ marginRight: '4px' }}>
              <Icon icon={buttonIcon} />
            </span>
          )}
          <span>{buttonTitle || __('Set Color', 'slider-future')}</span>
        </div>
        <div 
          className="color-indicator" 
          style={{ 
            width: '20px', 
            height: '20px', 
            borderRadius: '24%', 
            backgroundColor: colorNormal, 
            border: '1px solid var(--light-color)', 
            marginRight: '-6px'
          }}
        />
        <span className="dashicons dashicons-arrow-down-alt2" style={{ position: 'absolute', right: '6px', top: '12px', fontSize: '12px' }}></span>
      </Button>
      {colorPaletteOpen && (
        <>
          <ColorPicker
            color={colorNormal}
            onChangeComplete={handleColorChange}
            enableAlpha
          />
        </>
      )}
    </div>
    </div>
    </>
    )}
        <CustomRangeControl
          label={
            <>
              <OpacityIcon />
              {__("Opacity", "slider-future")}
            </>
          }
          value={valueOpacityHover ?? 1}
          onChange={handleChangeOpacityHover}
          min={0}
          max={1}
          step={.1}
          {...restProps}
        />
        <CustomRangeControl
          label={
            <>
              <DeblurIcon />
              {__("Blur", "slider-future")}
            </>
          }
          value={valueBlurHover ?? 0}
          onChange={handleChangeBlurHover}
          min={0}
          max={20}
          step={1}
          {...restProps}
        />
    {['translateHover','customHover'].includes(valueEffectHover) && (
    <>
        <CustomRangeControl
          label={
            <>
              <SyncAltIcon />
              {__("Translate X", "slider-future")}
            </>
          }
          value={valueTranslateXHover ?? 100}
          onChange={handleChangeTranslateXHover}
          min={-500}
          max={500}
          step={1}
          {...restProps}
        />
        <CustomRangeControl
          label={
            <>
               <SyncAltIcon style={{transform:'rotate(90deg)'}} />
               {__("Translate Y", "slider-future")}
            </>
          }
          value={valueTranslateYHover ?? 0}
          onChange={handleChangeTranslateYHover}
          min={-500}
          max={500}
          step={1}
          {...restProps}
        />
     </>
    )}
    {['customHover'].includes(valueEffectHover) && (
          <CustomSelectControl
            label={
              <>
                <LinearScaleIcon />
                {__("Choose the scale", "slider-future")}
              </>
            }
            value={valueScaleTypeHover ?? 'scale'}
            onChange={handleChangeScaleTypeHover}
            options={selectOptionsScaleIn}
            {...restProps}
          />
    )}
     {['scaleHover','scaleXHover','scaleYHover','customHover'].includes(valueEffectHover) && (
            <>
        <CustomRangeControl
          label={
            <>
                <ZoomOutMapIcon />
                {__("Scale", "slider-future")}
            </>
          }
          value={valueScaleHover ?? 1}
          onChange={handleChangeScaleHover}
          min={.1}
          max={20}
          step={.1}
          {...restProps}
        />
     </>
    )}
        {['rotateHover','customHover'].includes(valueEffectHover) && (
        <>
        <CustomRangeControl
          label={
            <>
                <RefreshIcon />
                {__("Rotate", "slider-future")}
            </>
          }
          value={valueRotateHover ?? 0}
          onChange={handleChangeRotateHover}
          min={-360}
          max={360}
          step={1}
          {...restProps}
        />
         <div className={` ${isProFeature ? 'hover-pro' : ''}`} style={{position:'relative'}}>
        <CustomRangeControl
          label={
            <>
                <ThreeSixtyIcon />
                {__("Rotate X", "slider-future")}
            </>
          }
          value={valueRotateXHover ?? 0}
          onChange={handleChangeRotateXHover}
          min={-360}
          max={360}
          step={1}
          {...restProps}
          disabled={isProFeature}
        />
        
        {isProFeature && (
                  <ProTooltip
                  tooltipProTop={'6px'}
                    tooltipProRight={'74px'}
                    />
                  )}
                  </div>
                    <div className={` ${isProFeature ? 'hover-pro' : ''}`} style={{position:'relative'}}>
        <CustomRangeControl
          label={
            <>
               <ThreeSixtyIcon style={{transform:'rotate(90deg)'}} />
               {__("Rotate Y", "slider-future")}
            </>
          }
          value={valueRotateYHover ?? 0}
          onChange={handleChangeRotateYHover}
          min={-360}
          max={360}
          step={1}
          {...restProps}
          disabled={isProFeature}
        />
        {isProFeature && (
                  <ProTooltip
                  tooltipProTop={'6px'}
                    tooltipProRight={'74px'}
                    />
                  )}
                  </div>
     </>
    )}
    {['skewHover','customHover'].includes(valueEffectHover) && (
    <>
        <CustomRangeControl
          label={
            <>
                <RefreshIcon />
                {__("Skew X", "slider-future")}
            </>
          }
          value={valueSkewXHover ?? 0}
          onChange={handleChangeSkewXHover}
          min={-90}
          max={90}
          step={1}
          {...restProps}
        />
        <CustomRangeControl
          label={
            <>
                 <RefreshIcon />
                 {__("Skew Y", "slider-future")}
            </>
          }
          value={valueSkewYHover ?? 0}
          onChange={handleChangeSkewYHover}
          min={-90}
          max={90}
          step={1}
          {...restProps}
        />
     </>
    )}
        <CustomRangeControl
          label={
            <>
                 <HourglassBottomIcon />
                 {__("Duration", "slider-future")}
            </>
          }
          value={valueDurationHover ?? 800}
          onChange={handleChangeDurationHover}
          min={100}
          max={15000}
          step={100}
          {...restProps}
        />
          <CustomSelectControl
            label={
              <>
                <SwapCallsIcon />
                {__("Easing", "slider-future")}
              </>
            }
            value={valueEasingHover ?? 'linear'}
            onChange={handleChangeEasingHover}
            options={isProFeature ? selectOptionsEase : selectOptionsEaseFree}
            {...restProps}
          />
           {valueEasingHover === "more-pro" && (
      <ProNotice 
        radiusOneProNotice = '0'
        radiusTwoProNotice = '0'
      />
    )}
      </>
    )}
      </div>
    </>
  );
};

export default CustomHoverControls;
