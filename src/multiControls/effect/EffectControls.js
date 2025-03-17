import React, { useEffect, useState } from "react";
import { Button, ColorPicker, Icon, Tooltip } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
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
import {selectOptionsRepeat} from '../../assets/options';
import {selectOptionsDirection} from '../../assets/options';
import {selectOptionsEffectSplit} from '../../assets/options';
import {selectOptionsDirectionBlock} from '../../assets/options';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import LoopIcon from '@mui/icons-material/Loop';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../controls/theme';
import CustomRangeControl  from "../../controls/range/CustomRangeControl"; 
import ProNotice from '../../components/ProNotice';
import ProTooltip from '../../components/ProTooltip';

const CustomEffectControls = ({
  valueEffect,
  colorNormal,     
  setColorNormal,    
  buttonTitle,       
  buttonIcon,    
  valueOpacityFrom,
  valueOpacityTo,
  valueBlurFrom,
  valueBlurTo,
    valueTranslateXFrom,
    valueTranslateXTo,
    valueTranslateYFrom,
    valueTranslateYTo,
    valueScaleType,
    valueScaleFrom,
    valueScaleTo,
    valueRotateFrom,
    valueRotateTo,
    valueRotateXFrom,
    valueRotateXTo,
    valueRotateYFrom,
    valueRotateYTo,
    valueSkewXFrom,
    valueSkewXTo,
    valueSkewYFrom,
    valueSkewYTo,
    valueDuration,
    valueEasing,
    valueDirection,
    valueLoop,
    valueDelay,
    valueEndDelay,
    valueEffectSplit,
    valueStagger,
    valueDirectionBlock,
    onAnimated,
    selectOptions,
  slides,
  setAttributes, 
  updateType, 
  slideId, 
  elementIndex, 
  innerIndex, 
  elementType, 
  updateElement, 
  effectProperty,
  colorProperty,
  opacityPropertyFrom,
  opacityPropertyTo,
  blurPropertyFrom,
  blurPropertyTo,
  translateXFromProperty,
  translateXToProperty,
  translateYFromProperty,
  translateYToProperty,
  scaleTypeProperty,
  scaleFromProperty,
  scaleToProperty,
  rotateFromProperty,
  rotateToProperty,
  rotateXFromProperty,
  rotateXToProperty,
  rotateYFromProperty,
  rotateYToProperty,
  skewXFromProperty,
  skewXToProperty,
  skewYFromProperty,
  skewYToProperty,
  durationProperty,
  easingProperty,
  directionProperty,
  loopProperty,
  delayProperty,
  endDelayProperty,
  effectSplitProperty,
  staggerProperty,
  directionBlockProperty,
  ...restProps
}) => {
  
  const handleChangeEffect = (event) => {
    const newValue = event.target.value;
    updateElement(
      slides,
      setAttributes,
      slideId,
      elementIndex,
      innerIndex,
      newValue,
      updateType,
      elementType,
      effectProperty
    );
  };

  const [colorPaletteOpen, setColorPaletteOpen] = useState(false);

  const toggleColorPalette = () => {
    setColorPaletteOpen(!colorPaletteOpen);
  };

  const handleColorChange = (color) => {
    setColorNormal(color.hex);
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, color.hex, updateType, elementType, colorProperty);
  };

  const handleChangeOpacityFrom = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, opacityPropertyFrom);
  };

  const handleChangeOpacityTo = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, opacityPropertyTo);
  };
  
  const handleChangeBlurFrom = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, blurPropertyFrom);
  };
 
  const handleChangeBlurTo = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, blurPropertyTo);
  };

  const handleChangeTranslateXFrom = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, translateXFromProperty);
  };

  const handleChangeTranslateXTo = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, translateXToProperty);
  };
  
  const handleChangeTranslateYFrom = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, translateYFromProperty);
  }
 
  const handleChangeTranslateYTo = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, translateYToProperty);
  }
  
  const handleChangeScaleType = (event) => {
    const newValue = event.target.value;
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, scaleTypeProperty);
  }
 
  const handleChangeScaleFrom = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, scaleFromProperty);
  }
  
  const handleChangeScaleTo = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, scaleToProperty);
  }
  
  const handleChangeRotateFrom = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, rotateFromProperty);
  }
  
  const handleChangeRotateTo = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, rotateToProperty);
  }
 
  const handleChangeRotateXFrom = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, rotateXFromProperty);
  }
  
  const handleChangeRotateXTo = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, rotateXToProperty);
  }

  const handleChangeRotateYFrom = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, rotateYFromProperty);
  }

  const handleChangeRotateYTo = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, rotateYToProperty);
  }
 
  const handleChangeSkewXFrom = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, skewXFromProperty);
  }

  const handleChangeSkewXTo = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, skewXToProperty);
  }
 
  const handleChangeSkewYFrom = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, skewYFromProperty);
  }
  
  const handleChangeSkewYTo = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, skewYToProperty);
  }
  
  const handleChangeDuration = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, durationProperty);
  }

  const handleChangeEasing = (event) => {
    const newValue = event.target.value;
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, easingProperty);
  }

  const handleChangeDirection = (event) => {
    const newValue = event.target.value;
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, directionProperty);
  }
 
  const handleChangeLoop = (event) => {
    const newValue = event.target.value;
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, loopProperty);
  }

  const handleChangeDelay = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, delayProperty);
  }

  const handleChangeEndDelay = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, endDelayProperty);
  }

  const handleChangeEffectSplit = (event) => {
    const newValue = event.target.value;
    updateElement(
      slides,
      setAttributes,
      slideId,
      elementIndex,
      innerIndex,
      newValue,
      updateType,
      elementType,
      effectSplitProperty
    );
  };

  const handleChangeStagger = (newValue) => {
    updateElement(
      slides,
      setAttributes,
      slideId,
      elementIndex,
      innerIndex,
      newValue,
      updateType,
      elementType,
      staggerProperty
    );
  };
  
  const handleChangeDirectionBlock = (event) => {
    const newValue = event.target.value;
    updateElement(
      slides,
      setAttributes,
      slideId,
      elementIndex,
      innerIndex,
      newValue,
      updateType,
      elementType,
      directionBlockProperty
    );
  };


   const [isProFeature, setIsProFeature] = useState(true);

  useEffect(() => {
      if (typeof window.isProFeature !== 'undefined') {
          setIsProFeature(window.isProFeature);
      }
  }, []);

  const options = isProFeature ? selectOptionsEase : selectOptionsEaseFree;

  return (
    <>
      <div
        className="content-title-custom-panel intermedy"
        style={{
          marginTop: "-18px",
        }}
      >
        <h2 className="title-custom-panel">{__("Animations", "slider-future")}</h2>
        {(valueEffect !== "none" && valueEffect !== "animation-pro") && (
          <div className="button-reply-effect" style={{borderRadius:'50%',position: 'absolute',right: '120px',top: '14px'}}>
            <Tooltip text={__('Play',"slider-future")}>
            <Button onClick={onAnimated} style={{padding:'5px 8px'}}><SlowMotionVideoIcon/></Button> 
            </Tooltip>
          </div>
          )}
      </div>
      <div className="content-section-panel" style={{ padding: "0" }}>

      <ThemeProvider theme={theme}>
    <div className="custom-select select-control-label-right select-material">
        <InputLabel> <GrainIcon />
        {__("Effects", "slider-future")}</InputLabel>
        <Select
          value={valueEffect}
          onChange={handleChangeEffect}
          sx={{
            height: '30px', 
            fontSize: '13px', 
            minWidth: '100px', 
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
    </div> 
    </ThemeProvider>
        {valueEffect === "splitText" && (
        <>
              <ThemeProvider theme={theme}>
    <div className="custom-select select-control-label-right select-material">
        <InputLabel> <ScatterPlotIcon />
        {__("Effect Split", "slider-future")}</InputLabel>
        <Select
          value={valueEffectSplit}
          onChange={handleChangeEffectSplit}
          sx={{
            height: '30px', 
            fontSize: '13px', 
            minWidth: '100px', 
            '& .MuiSelect-select': {
              padding: '6px',
            },
          }}
          {...restProps}
        >
        {selectOptionsEffectSplit.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
        </Select>
    </div> 
    </ThemeProvider>
        <CustomRangeControl
          label={
            <>
                <HourglassBottomIcon />
                {__("Stagger", "slider-future")}
            </>
          }
          value={valueStagger ?? 80}
          onChange={handleChangeStagger}
          min={0}
          max={3000}
          step={10}
          {...restProps}
        />
        </>
        )}
       {(valueEffect !== "none" && valueEffect !== "animation-pro") && (
        <>
        <CustomRangeControl
          label={
            <>
              <OpacityIcon />
              {__("Opacity From", "slider-future")}
            </>
          }
          value={valueOpacityFrom ?? 0}
          onChange={handleChangeOpacityFrom}
          min={0}
          max={1}
          step={.1}
          {...restProps}
        />
        <CustomRangeControl
          label={
            <>
              <OpacityIcon />
              {__("Opacity To", "slider-future")}
            </>
          }
          value={valueOpacityTo ?? 1}
          onChange={handleChangeOpacityTo}
          min={0}
          max={1}
          step={.1}
          {...restProps}
        />
        <CustomRangeControl
          label={
            <>
              <DeblurIcon />
              {__("Blur From", "slider-future")}
            </>
          }
          value={valueBlurFrom ?? 0}
          onChange={handleChangeBlurFrom}
          min={0}
          max={20}
          step={1}
          {...restProps}
        />
        <CustomRangeControl
          label={
            <>
              <DeblurIcon />
              {__("Blur To", "slider-future")}
            </>
          }
          value={valueBlurTo ?? 0}
          onChange={handleChangeBlurTo}
          min={0}
          max={20}
          step={1}
          {...restProps}
        />
    {(['translateXYIn', 'customEffectIn'].includes(valueEffect) || 
            (valueEffect === 'splitText' && 
            ['translateSplit', 'customSplit'].includes(valueEffectSplit))) && (
              <>
        <CustomRangeControl
          label={
            <>
              <SyncAltIcon />
              {__("Translate X From", "slider-future")}
            </>
          }
          value={valueTranslateXFrom ?? 100}
          onChange={handleChangeTranslateXFrom}
          min={-500}
          max={500}
          step={1}
          {...restProps}
        />
        <CustomRangeControl
          label={
            <>
              <SyncAltIcon />
              {__("Translate X To", "slider-future")}
            </>
          }
          value={valueTranslateXTo ?? 0}
          onChange={handleChangeTranslateXTo}
          min={-500}
          max={500}
          step={1}
          {...restProps}
        />
        <CustomRangeControl
          label={
            <>
               <SyncAltIcon style={{transform:'rotate(90deg)'}} />
               {__("Translate Y From", "slider-future")}
            </>
          }
          value={valueTranslateYFrom ?? 0}
          onChange={handleChangeTranslateYFrom}
          min={-500}
          max={500}
          step={1}
          {...restProps}
        />
        <CustomRangeControl
          label={
            <>
               <SyncAltIcon style={{transform:'rotate(90deg)'}} />
               {__("Translate Y To", "slider-future")}
            </>
          }
          value={valueTranslateYTo ?? 0}
          onChange={handleChangeTranslateYTo}
          min={-500}
          max={500}
          step={1}
          {...restProps}
        />
     </>
    )}
    {['customEffectIn'].includes(valueEffect) && (
       <ThemeProvider theme={theme}>
       <div className="custom-select select-control-label-right select-material">
           <InputLabel>  <LinearScaleIcon />
           {__("Choose the scale", "slider-future")}</InputLabel>
           <Select
             value={valueScaleType ?? 'scale'}
             onChange={handleChangeScaleType}
             sx={{
               height: '30px', 
               fontSize: '13px', 
               minWidth: '100px', 
               '& .MuiSelect-select': {
                 padding: '6px', 
               },
             }}
             {...restProps}
           >
           {selectOptionsScaleIn.map(option => (
             <MenuItem key={option.value} value={option.value}>
               {option.label}
             </MenuItem>
           ))}
           </Select>
       </div> 
       </ThemeProvider>
    )}
      {(['scaleIn', 'scaleInX', 'scaleInY','customEffectIn'].includes(valueEffect)  || ['scaleSplit', 'scaleXSplit', 'scaleYSplit','explosion','gather','customSplit'].includes(valueEffectSplit)) && (
            <>
        <CustomRangeControl
          label={
            <>
                <ZoomOutMapIcon />
                {__("Scale From", "slider-future")}
            </>
          }
          value={valueScaleFrom ?? 0}
          onChange={handleChangeScaleFrom}
          min={.1}
          max={20}
          step={.1}
          {...restProps}
        />
        <CustomRangeControl
          label={
            <>
                <ZoomOutMapIcon />
                {__("Scale To", "slider-future")}
            </>
          }
          value={valueScaleTo ?? 1}
          onChange={handleChangeScaleTo}
          min={.1}
          max={20}
          step={.1}
          {...restProps}
        />
     </>
    )}
        {(['rotateIn','customEffectIn'].includes(valueEffect) ||  (valueEffect === 'splitText' && 
            ['rotateSplit', 'customSplit'].includes(valueEffectSplit))) && (
            <>
        <CustomRangeControl
          label={
            <>
                <RefreshIcon />
                {__("Rotate From", "slider-future")}
            </>
          }
          value={valueRotateFrom ?? 0}
          onChange={handleChangeRotateFrom} 
          min={-360}
          max={360}
          step={1}
          {...restProps}
        />
        <CustomRangeControl
          label={
            <>
                <RefreshIcon />
                {__("Rotate To", "slider-future")}
            </>
          }
          value={valueRotateTo ?? 0}
          onChange={handleChangeRotateTo}
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
                {__("Rotate X From", "slider-future")}
            </>
          }
          value={valueRotateXFrom ?? 0}
          onChange={handleChangeRotateXFrom}
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
                <ThreeSixtyIcon />
                {__("Rotate X To", "slider-future")}
            </>
          }
          value={valueRotateXTo ?? 0}
          onChange={handleChangeRotateXTo}
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
               {__("Rotate Y From", "slider-future")}
            </>
          }
          value={valueRotateYFrom ?? 0}
          onChange={handleChangeRotateYFrom}
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
               {__("Rotate Y To", "slider-future")}
            </>
          }
          value={valueRotateYTo ?? 0}
          onChange={handleChangeRotateYTo}
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
    {(['skewInX','customEffectIn'].includes(valueEffect) || (valueEffect === 'splitText' && 
            ['skewSplit', 'customSplit'].includes(valueEffectSplit))) && (
            <>
        <CustomRangeControl
          label={
            <>
                <RefreshIcon />
                {__("Skew X From", "slider-future")}
            </>
          }
          value={valueSkewXFrom ?? 0}
          onChange={handleChangeSkewXFrom}
          min={-90}
          max={90}
          step={1}
          {...restProps}
        />
        <CustomRangeControl
          label={
            <>
                <RefreshIcon />
                {__("Skew X To", "slider-future")}
            </>
          }
          value={valueSkewXTo ?? 0}
          onChange={handleChangeSkewXTo}
          min={-90}
          max={90}
          step={1}
          {...restProps}
        />
        <CustomRangeControl
          label={
            <>
                 <RefreshIcon />
                 {__("Skew Y From", "slider-future")}
            </>
          }
          value={valueSkewYFrom ?? 0}
          onChange={handleChangeSkewYFrom}
          min={-90}
          max={90}
          step={1}
          {...restProps}
        />
        <CustomRangeControl
          label={
            <>
                 <RefreshIcon />
                 {__("Skew Y To", "slider-future")}
            </>
          }
          value={valueSkewYTo ?? 0}
          onChange={handleChangeSkewYTo}
          min={-90}
          max={90}
          step={1}
          {...restProps}
        />
     </>
    )}
    {['BlockFromIn'].includes(valueEffect) && (
              <>
               <ThemeProvider theme={theme}>
       <div className="custom-select select-control-label-right select-material">
           <InputLabel>  <OpenInBrowserIcon />
           {__("Block Direction", "slider-future")}</InputLabel>
           <Select
             value={valueDirectionBlock ?? 'normal'}
             onChange={handleChangeDirectionBlock}
             sx={{
               height: '30px', 
               fontSize: '13px',
               minWidth: '100px', 
               '& .MuiSelect-select': {
                 padding: '6px', 
               },
             }}
             {...restProps}
           >
           {selectOptionsDirectionBlock.map(option => (
             <MenuItem key={option.value} value={option.value}>
               {option.label}
             </MenuItem>
           ))}
           </Select>
       </div> 
       </ThemeProvider>
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
          <span>{buttonTitle || __('Block Color', 'slider-future')}</span>
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
                 <HourglassBottomIcon />
                 {__("Duration", "slider-future")}
            </>
          }
          value={valueDuration ?? 800}
          onChange={handleChangeDuration}
          min={100}
          max={15000}
          step={100}
          {...restProps}
        />
        <CustomRangeControl
          label={
            <>
                  <HistoryToggleOffIcon />
                  {__("Delay", "slider-future")}
            </>
          }
          value={valueDelay ?? 0}
          onChange={handleChangeDelay}
          min={0}
          max={5000}
          step={200}
          {...restProps}
        />
        <CustomRangeControl
          label={
            <>
                  <HistoryToggleOffIcon />
                  {__("End Delay", "slider-future")}
            </>
          }
          value={valueEndDelay ?? 0}
          onChange={handleChangeEndDelay}
          min={0}
          max={5000}
          step={200}
          {...restProps}
        />
     <ThemeProvider theme={theme}>
       <div className="custom-select select-control-label-right select-material">
           <InputLabel>   <SwapCallsIcon />
           {__("Easing", "slider-future")}</InputLabel>
           <Select
             value={valueEasing ?? 'linear'}
             onChange={handleChangeEasing}
             sx={{
               height: '30px', 
               fontSize: '13px',
               minWidth: '100px',
               '& .MuiSelect-select': {
                 padding: '6px', 
               },
             }}
             {...restProps}
           >
          {options.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
           </Select>
       </div> 
       {valueEasing === "more-pro" && (
      <ProNotice 
        radiusOneProNotice = '0'
        radiusTwoProNotice = '0'
      />
    )}
       </ThemeProvider>
       <ThemeProvider theme={theme}>
       <div className="custom-select select-control-label-right select-material">
           <InputLabel>   <SyncAltIcon />
           {__("Direction", "slider-future")}</InputLabel>
           <Select
             value={valueDirection ?? 'normal'}
             onChange={handleChangeDirection}
             sx={{
               height: '30px', 
               fontSize: '13px', 
               minWidth: '100px',
               '& .MuiSelect-select': {
                 padding: '6px', 
               },
             }}
             {...restProps}
           >
           {selectOptionsDirection.map(option => (
             <MenuItem key={option.value} value={option.value}>
               {option.label}
             </MenuItem>
           ))}
           </Select>
       </div> 
       </ThemeProvider>
       <ThemeProvider theme={theme}>
       <div className="custom-select select-control-label-right select-material">
           <InputLabel>    <LoopIcon />
           {__("Loop", "slider-future")}</InputLabel>
           <Select
             value={valueLoop ?? '1'}
             onChange={handleChangeLoop}
             sx={{
               height: '30px',
               fontSize: '13px', 
               minWidth: '100px', 
               '& .MuiSelect-select': {
                 padding: '6px', 
               },
             }}
             {...restProps}
           >
           {selectOptionsRepeat.map(option => (
             <MenuItem key={option.value} value={option.value}>
               {option.label}
             </MenuItem>
           ))}
           </Select>
       </div> 
       </ThemeProvider>
        <div className="custom-select">
           
            {(valueLoop > 1 || valueLoop === "true") && (
             <p
             className="notice components-base-control__help"
             style={{
               borderRadius: "0",
               marginTop: "6px",
               marginBottom: "6px",
             }}
           >
                {__('The loop must complete the set cycle before it can be changed.',"slider-future")}
              </p>
            )}

            {valueLoop === 'true' && (
             <p
             className="notice components-base-control__help"
             style={{
               borderRadius: "0",
               marginTop: "6px",
               marginBottom: "6px",
             }}
           >
                {__('The loop is limited to 5 repetitions in the editor for performance reasons.',"slider-future")}
              </p>
            )}
            </div>
      </>
    )}
    {(valueEffect !== "none" && valueEffect !== "animation-pro") && (
          <div className="button-reply-effect">
            <Tooltip text={__('Play',"slider-future")}>
            <Button onClick={onAnimated}><SlowMotionVideoIcon/></Button> 
            </Tooltip>
          </div>
          )}
      </div>
    </>
  );
};

export default CustomEffectControls;
