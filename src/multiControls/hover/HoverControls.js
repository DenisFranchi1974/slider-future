import React, { useState } from 'react';
import { Button, ColorPicker, Icon} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import {selectOptionsEffectHover} from '../../assets/options';
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
import CustomRangeControl  from "../../controls/range/CustomRangeControl"; 
import CustomSelectControl from "../../controls/select/CustomSelectControl";

const CustomHoverControls = ({
  valueEffectHover,
  colorNormal,       // Colore corrente
  setColorNormal,    // Funzione per aggiornare il colore
  buttonTitle,       // Titolo del pulsante
  buttonIcon,        // Icona del pulsante
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
    showColorControl = true, // Mostra o nasconde il controllo del colore
  slides, // Stato delle slide
  setAttributes, // Funzione per aggiornare lo stato delle slide
  updateType, // Tipo di elemento (primario o secondario)
  slideId, // ID della slide
  elementIndex, // Indice dell'elemento primario (se primario)
  innerIndex, // Indice dell'elemento secondario (se secondario)
  elementType, // Tipo di elemento (ad es. "title", "button", ecc.)
  updateElement, // Funzione di aggiornamento passata come prop
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
  ...restProps // Altri eventuali props da passare
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
  // Functions color
  const [colorPaletteOpen, setColorPaletteOpen] = useState(false);

  const toggleColorPalette = () => {
    setColorPaletteOpen(!colorPaletteOpen);
  };

  const handleColorChange = (color) => {
    setColorNormal(color.hex);
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, color.hex, updateType, elementType, colorHoverProperty);
  };
    // Funzione opacity
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
    // Funzione blur
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
    // Funzione translateX
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
    // Funzione translateY
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
    // Funzione scaleType
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
    // Funzione scale
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
    // Funzione rotate
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
    // Funzione rotateX
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
    // Funzione rotateY
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
    // Funzione skewX
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
    // Funzione skewY
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
    // Funzione duration
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
    // Funzione easing
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
  return (
    <>
      <div
        className="content-title-custom-panel intermedy"
        style={{
          marginTop: "-18px",
        }}
      >
        <h2 className="title-custom-panel">{__("Animations", "cocoblocks")}</h2>
      </div>
      <div className="content-section-panel" style={{ padding: "0" }}>
          <CustomSelectControl
            label={
              <>
                <GrainIcon />
                {__("Effects", "cocoblocks")}
              </>
            }
            value={valueEffectHover}
            onChange={handleChangeEffectHover}
            options={selectOptionsEffectHover}
            {...restProps}
          />
        {valueEffectHover !== "none" && (
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
          <span>{buttonTitle || __('Set Color', 'cocoblocks')}</span>
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
              {__("Opacity", "cocoblocks")}
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
              {__("Blur", "cocoblocks")}
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
              {__("Translate X", "cocoblocks")}
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
               {__("Translate Y", "cocoblocks")}
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
                {__("Choose the scale", "cocoblocks")}
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
                {__("Scale", "cocoblocks")}
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
                {__("Rotate", "cocoblocks")}
            </>
          }
          value={valueRotateHover ?? 0}
          onChange={handleChangeRotateHover}
          min={-360}
          max={360}
          step={1}
          {...restProps}
        />
        <CustomRangeControl
          label={
            <>
                <ThreeSixtyIcon />
                {__("Rotate X", "cocoblocks")}
            </>
          }
          value={valueRotateXHover ?? 0}
          onChange={handleChangeRotateXHover}
          min={-360}
          max={360}
          step={1}
          {...restProps}
        />
        <CustomRangeControl
          label={
            <>
               <ThreeSixtyIcon style={{transform:'rotate(90deg)'}} />
               {__("Rotate Y", "cocoblocks")}
            </>
          }
          value={valueRotateYHover ?? 0}
          onChange={handleChangeRotateYHover}
          min={-360}
          max={360}
          step={1}
          {...restProps}
        />
     </>
    )}
    {['skewHover','customHover'].includes(valueEffectHover) && (
    <>
        <CustomRangeControl
          label={
            <>
                <RefreshIcon />
                {__("Skew X", "cocoblocks")}
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
                 {__("Skew Y", "cocoblocks")}
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
                 {__("Duration", "cocoblocks")}
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
                {__("Easing", "cocoblocks")}
              </>
            }
            value={valueEasingHover ?? 'linear'}
            onChange={handleChangeEasingHover}
            options={selectOptionsEase}
            {...restProps}
          />
      </>
    )}
      </div>
    </>
  );
};

export default CustomHoverControls;
