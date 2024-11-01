import React, { useState } from 'react';
import { SelectControl, Button, ColorPicker, Icon, RangeControl, Tooltip } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import {selectOptionsScaleIn} from '../../assets/options';
import {selectOptionsEase} from '../../assets/options';
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
  slides, // Stato delle slide
  setAttributes, // Funzione per aggiornare lo stato delle slide
  updateType, // Tipo di elemento (primario o secondario)
  slideId, // ID della slide
  elementIndex, // Indice dell'elemento primario (se primario)
  innerIndex, // Indice dell'elemento secondario (se secondario)
  elementType, // Tipo di elemento (ad es. "title", "button", ecc.)
  updateElement, // Funzione di aggiornamento passata come prop
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


  ...restProps // Altri eventuali props da passare
}) => {
  // Funzione effect
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


  // Functions color
  const [colorPaletteOpen, setColorPaletteOpen] = useState(false);

  const toggleColorPalette = () => {
    setColorPaletteOpen(!colorPaletteOpen);
  };

  const handleColorChange = (color) => {
    setColorNormal(color.hex);
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, color.hex, updateType, elementType, colorProperty);
  };
  // Funzione opacity from
  const handleChangeOpacityFrom = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, opacityPropertyFrom);
  };
  // Funzione opacity to
  const handleChangeOpacityTo = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, opacityPropertyTo);
  };
  // Funzione blur from
  const handleChangeBlurFrom = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, blurPropertyFrom);
  };
  // Funzione blur to
  const handleChangeBlurTo = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, blurPropertyTo);
  };
  // Funzione translate X from
  const handleChangeTranslateXFrom = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, translateXFromProperty);
  };
  // Funzione translate X to
  const handleChangeTranslateXTo = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, translateXToProperty);
  };
  // Funzione translate Y from
  const handleChangeTranslateYFrom = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, translateYFromProperty);
  }
  // Funzione translate Y to
  const handleChangeTranslateYTo = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, translateYToProperty);
  }
  // Funzione scale type
  const handleChangeScaleType = (event) => {
    const newValue = event.target.value;
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, scaleTypeProperty);
  }
  // Funzione scale from
  const handleChangeScaleFrom = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, scaleFromProperty);
  }
  // Funzione scale to
  const handleChangeScaleTo = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, scaleToProperty);
  }
  // Funzione rotate from
  const handleChangeRotateFrom = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, rotateFromProperty);
  }
  // Funzione rotate to
  const handleChangeRotateTo = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, rotateToProperty);
  }
  // Funzione rotate X from
  const handleChangeRotateXFrom = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, rotateXFromProperty);
  }
  // Funzione rotate X to
  const handleChangeRotateXTo = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, rotateXToProperty);
  }
  // Funzione rotate Y from
  const handleChangeRotateYFrom = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, rotateYFromProperty);
  }
  // Funzione rotate Y to
  const handleChangeRotateYTo = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, rotateYToProperty);
  }
  // Funzione skew X from
  const handleChangeSkewXFrom = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, skewXFromProperty);
  }
  // Funzione skew X to
  const handleChangeSkewXTo = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, skewXToProperty);
  }
  // Funzione skew Y from
  const handleChangeSkewYFrom = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, skewYFromProperty);
  }
  // Funzione skew Y to
  const handleChangeSkewYTo = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, skewYToProperty);
  }
  // Funzione duration
  const handleChangeDuration = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, durationProperty);
  }
  // Funzione easing
  const handleChangeEasing = (event) => {
    const newValue = event.target.value;
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, easingProperty);
  }
  // Funzione direction
  const handleChangeDirection = (event) => {
    const newValue = event.target.value;
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, directionProperty);
  }
  // Funzione loop
  const handleChangeLoop = (event) => {
    const newValue = event.target.value;
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, loopProperty);
  }
  // Funzione delay
  const handleChangeDelay = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, delayProperty);
  }
  // Funzione end delay
  const handleChangeEndDelay = (newValue) => {
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, endDelayProperty);
  }
  // Funzione effect split
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
  // Funzione stagger
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
  // Funzione direction block
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

  return (
    <>
      <div
        className="content-title-custom-panel intermedy"
        style={{
          marginTop: "-18px",
          display: "flex",
          gap: "30px",
        }}
      >
        <h2 className="title-custom-panel">{__("Animations", "cocoblocks")}</h2>
        {(valueEffect !== 'none') && (
          <div className="button-reply-effect" style={{borderRadius:'50%'}}>
            <Tooltip text={__('Play','cocoblock')}>
            <Button onClick={onAnimated} style={{padding:'5px 8px'}}><SlowMotionVideoIcon/></Button> 
            </Tooltip>
          </div>
          )}
      </div>
      <div className="content-section-panel" style={{ padding: "0" }}>

      <ThemeProvider theme={theme}>
    <div className="custom-select select-control-label-right select-material">
        <InputLabel> <GrainIcon />
        {__("Effects", "cocoblocks")}</InputLabel>
        <Select
          value={valueEffect}
          onChange={handleChangeEffect}
          sx={{
            height: '30px', // Altezza del selettore
            fontSize: '13px', // Dimensione del font del selettore
            minWidth: '100px', // Larghezza minima del selettore
            '& .MuiSelect-select': {
              padding: '6px', // Padding interno del selettore
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
        {__("Effect Split", "cocoblocks")}</InputLabel>
        <Select
          value={valueEffectSplit}
          onChange={handleChangeEffectSplit}
          sx={{
            height: '30px', // Altezza del selettore
            fontSize: '13px', // Dimensione del font del selettore
            minWidth: '100px', // Larghezza minima del selettore
            '& .MuiSelect-select': {
              padding: '6px', // Padding interno del selettore
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
        <div className="custom-select">
        <RangeControl
          label={
            <>
                <HourglassBottomIcon />
                {__("Stagger", "cocoblocks")}
            </>
          }
          value={valueStagger ?? 80}
          onChange={handleChangeStagger}
          min={0}
          max={3000}
          step={10}
          {...restProps}
        />
    </div>
        </>
        )}
        {valueEffect !== "none" && (
        <>
    <div className="custom-select">
        <RangeControl
          label={
            <>
              <OpacityIcon />
              {__("Opacity From", "cocoblocks")}
            </>
          }
          value={valueOpacityFrom ?? 0}
          onChange={handleChangeOpacityFrom}
          min={0}
          max={1}
          step={.1}
          {...restProps}
        />
    </div>
    <div className="custom-select">
        <RangeControl
          label={
            <>
              <OpacityIcon />
              {__("Opacity To", "cocoblocks")}
            </>
          }
          value={valueOpacityTo ?? 1}
          onChange={handleChangeOpacityTo}
          min={0}
          max={1}
          step={.1}
          {...restProps}
        />
    </div>
    <div className="custom-select">
        <RangeControl
          label={
            <>
              <DeblurIcon />
              {__("Blur From", "cocoblocks")}
            </>
          }
          value={valueBlurFrom ?? 0}
          onChange={handleChangeBlurFrom}
          min={0}
          max={20}
          step={1}
          {...restProps}
        />
    </div>
    <div className="custom-select">
        <RangeControl
          label={
            <>
              <DeblurIcon />
              {__("Blur To", "cocoblocks")}
            </>
          }
          value={valueBlurTo ?? 0}
          onChange={handleChangeBlurTo}
          min={0}
          max={20}
          step={1}
          {...restProps}
        />
    </div>
    {(['translateXYIn', 'customEffectIn'].includes(valueEffect) || 
            (valueEffect === 'splitText' && 
            ['translateSplit', 'customSplit'].includes(valueEffectSplit))) && (
              <>
    <div className="custom-select">
        <RangeControl
          label={
            <>
              <SyncAltIcon />
              {__("Translate X From", "cocoblocks")}
            </>
          }
          value={valueTranslateXFrom ?? 100}
          onChange={handleChangeTranslateXFrom}
          min={-500}
          max={500}
          step={1}
          {...restProps}
        />
    </div>
    <div className="custom-select">
        <RangeControl
          label={
            <>
              <SyncAltIcon />
              {__("Translate X To", "cocoblocks")}
            </>
          }
          value={valueTranslateXTo ?? 0}
          onChange={handleChangeTranslateXTo}
          min={-500}
          max={500}
          step={1}
          {...restProps}
        />
    </div>
    <div className="custom-select">
        <RangeControl
          label={
            <>
               <SyncAltIcon style={{transform:'rotate(90deg)'}} />
               {__("Translate Y From", "cocoblocks")}
            </>
          }
          value={valueTranslateYFrom ?? 0}
          onChange={handleChangeTranslateYFrom}
          min={-500}
          max={500}
          step={1}
          {...restProps}
        />
     </div>
     <div className="custom-select">
        <RangeControl
          label={
            <>
               <SyncAltIcon style={{transform:'rotate(90deg)'}} />
               {__("Translate Y To", "cocoblocks")}
            </>
          }
          value={valueTranslateYTo ?? 0}
          onChange={handleChangeTranslateYTo}
          min={-500}
          max={500}
          step={1}
          {...restProps}
        />
     </div>
     </>
    )}
    {['customEffectIn'].includes(valueEffect) && (
       <ThemeProvider theme={theme}>
       <div className="custom-select select-control-label-right select-material">
           <InputLabel>  <LinearScaleIcon />
           {__("Choose the scale", "cocoblocks")}</InputLabel>
           <Select
             value={valueScaleType ?? 'scale'}
             onChange={handleChangeScaleType}
             sx={{
               height: '30px', // Altezza del selettore
               fontSize: '13px', // Dimensione del font del selettore
               minWidth: '100px', // Larghezza minima del selettore
               '& .MuiSelect-select': {
                 padding: '6px', // Padding interno del selettore
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
        <div className="custom-select">
        <RangeControl
          label={
            <>
                <ZoomOutMapIcon />
                {__("Scale From", "cocoblocks")}
            </>
          }
          value={valueScaleFrom ?? 0}
          onChange={handleChangeScaleFrom}
          min={.1}
          max={20}
          step={.1}
          {...restProps}
        />
     </div>
     <div className="custom-select">
        <RangeControl
          label={
            <>
                <ZoomOutMapIcon />
                {__("Scale To", "cocoblocks")}
            </>
          }
          value={valueScaleTo ?? 1}
          onChange={handleChangeScaleTo}
          min={.1}
          max={20}
          step={.1}
          {...restProps}
        />
     </div>
     </>
    )}
        {(['rotateIn','customEffectIn'].includes(valueEffect) ||  (valueEffect === 'splitText' && 
            ['rotateSplit', 'customSplit'].includes(valueEffectSplit))) && (
            <>
     <div className="custom-select">
        <RangeControl
          label={
            <>
                <RefreshIcon />
                {__("Rotate From", "cocoblocks")}
            </>
          }
          value={valueRotateFrom ?? 0}
          onChange={handleChangeRotateFrom}
          min={-360}
          max={360}
          step={1}
          {...restProps}
        />
     </div>
     <div className="custom-select">
        <RangeControl
          label={
            <>
                <RefreshIcon />
                {__("Rotate To", "cocoblocks")}
            </>
          }
          value={valueRotateTo ?? 0}
          onChange={handleChangeRotateTo}
          min={-360}
          max={360}
          step={1}
          {...restProps}
        />
     </div>
     <div className="custom-select">
        <RangeControl
          label={
            <>
                <ThreeSixtyIcon />
                {__("Rotate X From", "cocoblocks")}
            </>
          }
          value={valueRotateXFrom ?? 0}
          onChange={handleChangeRotateXFrom}
          min={-360}
          max={360}
          step={1}
          {...restProps}
        />
     </div>
     <div className="custom-select">
        <RangeControl
          label={
            <>
                <ThreeSixtyIcon />
                {__("Rotate X To", "cocoblocks")}
            </>
          }
          value={valueRotateXTo ?? 0}
          onChange={handleChangeRotateXTo}
          min={-360}
          max={360}
          step={1}
          {...restProps}
        />
     </div>
     <div className="custom-select">
        <RangeControl
          label={
            <>
               <ThreeSixtyIcon style={{transform:'rotate(90deg)'}} />
               {__("Rotate Y From", "cocoblocks")}
            </>
          }
          value={valueRotateYFrom ?? 0}
          onChange={handleChangeRotateYFrom}
          min={-360}
          max={360}
          step={1}
          {...restProps}
        />
     </div>
     <div className="custom-select">
        <RangeControl
          label={
            <>
               <ThreeSixtyIcon style={{transform:'rotate(90deg)'}} />
               {__("Rotate Y To", "cocoblocks")}
            </>
          }
          value={valueRotateYTo ?? 0}
          onChange={handleChangeRotateYTo}
          min={-360}
          max={360}
          step={1}
          {...restProps}
        />
     </div>
     </>
    )}
    {(['skewInX','customEffectIn'].includes(valueEffect) || (valueEffect === 'splitText' && 
            ['skewSplit', 'customSplit'].includes(valueEffectSplit))) && (
            <>
     <div className="custom-select">
        <RangeControl
          label={
            <>
                <RefreshIcon />
                {__("Skew X From", "cocoblocks")}
            </>
          }
          value={valueSkewXFrom ?? 0}
          onChange={handleChangeSkewXFrom}
          min={-90}
          max={90}
          step={1}
          {...restProps}
        />
     </div>
     <div className="custom-select">
        <RangeControl
          label={
            <>
                <RefreshIcon />
                {__("Skew X To", "cocoblocks")}
            </>
          }
          value={valueSkewXTo ?? 0}
          onChange={handleChangeSkewXTo}
          min={-90}
          max={90}
          step={1}
          {...restProps}
        />
     </div>
     <div className="custom-select">
        <RangeControl
          label={
            <>
                 <RefreshIcon />
                 {__("Skew Y From", "cocoblocks")}
            </>
          }
          value={valueSkewYFrom ?? 0}
          onChange={handleChangeSkewYFrom}
          min={-90}
          max={90}
          step={1}
          {...restProps}
        />
     </div>
     <div className="custom-select">
        <RangeControl
          label={
            <>
                 <RefreshIcon />
                 {__("Skew Y To", "cocoblocks")}
            </>
          }
          value={valueSkewYTo ?? 0}
          onChange={handleChangeSkewYTo}
          min={-90}
          max={90}
          step={1}
          {...restProps}
        />
     </div>
     </>
    )}
    {['BlockFromIn'].includes(valueEffect) && (
              <>
               <ThemeProvider theme={theme}>
       <div className="custom-select select-control-label-right select-material">
           <InputLabel>  <OpenInBrowserIcon />
           {__("Block Direction", "cocoblocks")}</InputLabel>
           <Select
             value={valueDirectionBlock ?? 'normal'}
             onChange={handleChangeDirectionBlock}
             sx={{
               height: '30px', // Altezza del selettore
               fontSize: '13px', // Dimensione del font del selettore
               minWidth: '100px', // Larghezza minima del selettore
               '& .MuiSelect-select': {
                 padding: '6px', // Padding interno del selettore
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
          <span>{buttonTitle || __('Block Color', 'cocoblocks')}</span>
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
     <div className="custom-select">
        <RangeControl
          label={
            <>
                 <HourglassBottomIcon />
                 {__("Duration", "cocoblocks")}
            </>
          }
          value={valueDuration ?? 800}
          onChange={handleChangeDuration}
          min={100}
          max={15000}
          step={100}
          {...restProps}
        />
     </div>
     <div className="custom-select">
        <RangeControl
          label={
            <>
                  <HistoryToggleOffIcon />
                  {__("Delay", "cocoblocks")}
            </>
          }
          value={valueDelay ?? 0}
          onChange={handleChangeDelay}
          min={0}
          max={5000}
          step={100}
          {...restProps}
        />
     </div>
     <div className="custom-select">
        <RangeControl
          label={
            <>
                  <HistoryToggleOffIcon />
                  {__("End Delay", "cocoblocks")}
            </>
          }
          value={valueEndDelay ?? 0}
          onChange={handleChangeEndDelay}
          min={0}
          max={5000}
          step={100}
          {...restProps}
        />
     </div>
     <ThemeProvider theme={theme}>
       <div className="custom-select select-control-label-right select-material">
           <InputLabel>   <SwapCallsIcon />
           {__("Easing", "cocoblocks")}</InputLabel>
           <Select
             value={valueEasing ?? 'linear'}
             onChange={handleChangeEasing}
             sx={{
               height: '30px', // Altezza del selettore
               fontSize: '13px', // Dimensione del font del selettore
               minWidth: '100px', // Larghezza minima del selettore
               '& .MuiSelect-select': {
                 padding: '6px', // Padding interno del selettore
               },
             }}
             {...restProps}
           >
           {selectOptionsEase.map(option => (
             <MenuItem key={option.value} value={option.value}>
               {option.label}
             </MenuItem>
           ))}
           </Select>
       </div> 
       </ThemeProvider>
       <ThemeProvider theme={theme}>
       <div className="custom-select select-control-label-right select-material">
           <InputLabel>   <SyncAltIcon />
           {__("Direction", "cocoblocks")}</InputLabel>
           <Select
             value={valueDirection ?? 'normal'}
             onChange={handleChangeDirection}
             sx={{
               height: '30px', // Altezza del selettore
               fontSize: '13px', // Dimensione del font del selettore
               minWidth: '100px', // Larghezza minima del selettore
               '& .MuiSelect-select': {
                 padding: '6px', // Padding interno del selettore
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
           {__("Loop", "cocoblocks")}</InputLabel>
           <Select
             value={valueLoop ?? '1'}
             onChange={handleChangeLoop}
             sx={{
               height: '30px', // Altezza del selettore
               fontSize: '13px', // Dimensione del font del selettore
               minWidth: '100px', // Larghezza minima del selettore
               '& .MuiSelect-select': {
                 padding: '6px', // Padding interno del selettore
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
            {/* Mostra la nota se valueLoop è maggiore di 1 */}
            {(valueLoop > 1 || valueLoop === "true") && (
             <p
             className="notice components-base-control__help"
             style={{
               borderRadius: "0",
               marginTop: "6px",
               marginBottom: "6px",
             }}
           >
                {__('The loop must complete the set cycle before it can be changed.','cocoblock')}
              </p>
            )}

            {/* Mostra la nota se valueLoop è uguale a true */}
            {valueLoop === 'true' && (
             <p
             className="notice components-base-control__help"
             style={{
               borderRadius: "0",
               marginTop: "6px",
               marginBottom: "6px",
             }}
           >
                {__('The loop is limited to 5 repetitions in the editor for performance reasons.','cocoblock')}
              </p>
            )}
            </div>
      </>
    )}
    {(valueEffect!== 'none' ) && (
          <div className="button-reply-effect">
            <Tooltip text={__('Play','cocoblock')}>
            <Button onClick={onAnimated}><SlowMotionVideoIcon/></Button> 
            </Tooltip>
          </div>
          )}
      </div>
    </>
  );
};

export default CustomEffectControls;
