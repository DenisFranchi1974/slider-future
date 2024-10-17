import React from "react";
import { RangeControl, ToggleControl } from "@wordpress/components";
import ColorOptionsPanel from "../../components/colorPanel";  
import { __ } from "@wordpress/i18n";
import ColorLensIcon from '@mui/icons-material/ColorLens';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import ExpandIcon from '@mui/icons-material/Expand';
import FitbitIcon from '@mui/icons-material/Fitbit';

const CustomShadowControl = ({
  valueEnableShadow, // Valore corrente per l'abilitazione dell'effetto
  valueRangeShadowX, // Valore corrente per X
  valueRangeShadowY, // Valore corrente per Y
  valueRangeShadowBlur, // Valore corrente per Blur
  valueRangeShadowSpread, // Valore corrente per Spread
  valueRangeShadowColor, // Valore corrente per il colore
  showSpread = false,
  slides, // Stato delle slide
  setAttributes, // Funzione per aggiornare lo stato
  updateType, // Tipo di elemento (primario o secondario)
  slideId, // ID della slide
  elementIndex, // Indice dell'elemento primario
  innerIndex, // Indice dell'elemento secondario
  elementType, // Tipo di elemento (es. "title", "button")
  updateElement, // Funzione per aggiornare i valori
  enablePropertyShadow, // Proprietà da aggiornare per l'abilitazione
  rangePropertyX, // Proprietà da aggiornare per Shadow X
  rangePropertyY, // Proprietà da aggiornare per Shadow Y
  rangePropertyBlur, // Proprietà da aggiornare per Shadow Blur
  rangePropertySpread, // Proprietà da aggiornare per Shadow Spread
  rangePropertyColor, // Proprietà da aggiornare per Shadow Color

  ...restProps // Altri props
}) => {

  // Funzioni di aggiornamento per ciascuna proprietà
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
    {/* Abilita l'effetto */}
    <div className="custom-select">
      <ToggleControl
          label={
            <>
              <FitbitIcon />
              {__("Effect", "cocoblocks")}
            </>
          }
          checked={valueEnableShadow}
          onChange={handleChangeEnableShadow}
          {...restProps}
      />
    </div>
    {valueEnableShadow && (
    <>
     {/* Controllo per il Colore dell'ombra */}
     <div className="custom-select color">
      <ColorOptionsPanel
          colorNormal={valueRangeShadowColor}
          setColorNormal={handleChangeRangeShadowColor}
          buttonTitle={__("Set Color", "cocoblocks")}
          buttonIcon={<ColorLensIcon style={{marginBottom:'-5px'}} />}
        />
     </div>
      {/* Controllo per Shadow X */}
      <div className="custom-select">
        <RangeControl
          label={
            <>
              <SwapHorizIcon />
              {__("Offset X", "cocoblocks")}
            </>
          }
          value={valueRangeShadowX}
          onChange={handleChangeRangeShadowX}
          min={-100}
          max={100}
          step={1}
          {...restProps}
        />
      </div>

      {/* Controllo per Shadow Y */}
      <div className="custom-select">
        <RangeControl
          label={
            <>
              <SwapVertIcon />
              {__("Offset Y", "cocoblocks")}
            </>
          }
          value={valueRangeShadowY}
          onChange={handleChangeRangeShadowY}
          min={-100}
          max={100}
          step={1}
          {...restProps}
        />
      </div>

      {/* Controllo per Shadow Blur */}
      <div className="custom-select">
        <RangeControl
          label={
            <>
              <BlurOnIcon />
              {__("Blur", "cocoblocks")}
            </>
          }
          value={valueRangeShadowBlur}
          onChange={handleChangeRangeShadowBlur}
          min={0}
          max={100}
          step={1}
          {...restProps}
        />
      </div>
       {/* Controllo per Shadow Spread */}
      {showSpread && (
        <div className="custom-select">
        <RangeControl
          label={
            <>
              <ExpandIcon />
              {__("Spread", "cocoblocks")}
            </>
          }
          value={valueRangeShadowSpread}
          onChange={handleChangeRangeShadowSpread}
          min={-100}
          max={100}
          step={1}
          {...restProps}
        />
      </div>
      )}
      </>
    )}
     
    </>
  );
};

export default CustomShadowControl;

