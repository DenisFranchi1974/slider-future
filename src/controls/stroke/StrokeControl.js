import React from "react";
import ColorOptionsPanel from "../../components/colorPanel";  
import { __ } from "@wordpress/i18n";
import ColorLensIcon from '@mui/icons-material/ColorLens';
import FitbitIcon from '@mui/icons-material/Fitbit';
import BorderRightIcon from '@mui/icons-material/BorderRight';
import CustomRangeControl  from "../../controls/range/CustomRangeControl"; 
import CustomToggleControl from "../../controls/toggle/CustomToggleControl";

const CustomStrokeControl = ({
  valueEnableStroke, // Valore corrente per l'abilitazione dell'effetto
  valueRangeStroke, 
  valueRangeStrokeColor, // Valore corrente per il colore
  slides, // Stato delle slide
  setAttributes, // Funzione per aggiornare lo stato
  min = 0, // Valore minimo per i RangeControl
  max = 100, // Valore massimo per i RangeControl
  step = 1, // Step per i RangeControl
  updateType, // Tipo di elemento (primario o secondario)
  slideId, // ID della slide
  elementIndex, // Indice dell'elemento primario
  innerIndex, // Indice dell'elemento secondario
  elementType, // Tipo di elemento (es. "title", "button")
  updateElement, // Funzione per aggiornare i valori
  enablePropertyStroke, // Proprietà da aggiornare per l'abilitazione
  rangePropertyStroke, 
  colorPropertyStroke, 

  ...restProps // Altri props
}) => {

  // Funzioni di aggiornamento per ciascuna proprietà
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
    {/* Abilita l'effetto */}
      <CustomToggleControl
          label={
            <>
              <FitbitIcon />
              {__("Effect", "cocoblocks")}
            </>
          }
          checked={valueEnableStroke}
          onChange={handleChangeEnableStroke}
          {...restProps}
      />
    {valueEnableStroke && (
    <>
     {/* Controllo per il Colore dell'ombra */}
     <div className="custom-select color">
      <ColorOptionsPanel
          colorNormal={valueRangeStrokeColor}
          setColorNormal={handleChangeColorStroke}
          buttonTitle={__("Set Color", "cocoblocks")}
          buttonIcon={<ColorLensIcon style={{marginBottom:'-5px'}} />}
        />
     </div>
      {/* Controllo per Stroke */}
        <CustomRangeControl
          label={
            <>
              <BorderRightIcon />
              {__("Size", "cocoblocks")}
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

