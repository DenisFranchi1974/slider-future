import React from "react";
import { RangeControl, SelectControl } from "@wordpress/components";

const CustomAnimationControl = ({
  labelRange,     // Etichetta per il RangeControl
  labelSelect,    // Etichetta per il SelectControl
  valueRange,     // Valore corrente del RangeControl
  valueSelect,    // Valore corrente del SelectControl
  slides,         // Stato delle slide
  setAttributes,  // Funzione per aggiornare lo stato delle slide
  min = 0,        // Valore minimo per il RangeControl (default 0)
  max = 100,      // Valore massimo per il RangeControl (default 100)
  step = 1,       // Step per il RangeControl
  updateType,     // Tipo di elemento (primario o secondario)
  slideId,        // ID della slide
  elementIndex,   // Indice dell'elemento primario (se primario)
  innerIndex,     // Indice dell'elemento secondario (se secondario)
  elementType,    // Tipo di elemento (ad es. "title", "button", ecc.)
  updateElement,// Funzione di aggiornamento passata come prop
  selectOptions,  // Opzioni per il SelectControl
  rangeProperty,  // Proprietà da aggiornare per il RangeControl
  selectProperty, // Proprietà da aggiornare per il SelectControl
  ...restProps    // Altri eventuali props da passare
}) => {
  
 
     // Funzione di gestione del cambio valore Range
  const handleChangeRange = (newValue) => {
    console.log('New Range Value:', newValue);
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, rangeProperty);
  };

  // Funzione di gestione del cambio valore Select
  const handleChangeSelect = (newValue) => {
    console.log('New Select Value:', newValue);
    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, selectProperty);
  };

  return (
    <>
      <div className="custom-select">
        <RangeControl
          label={labelRange}
          value={valueRange}
          onChange={handleChangeRange}
          min={min}
          max={max}
          step={step}
          {...restProps}
        />
      </div>
      <div className="custom-select select-control-label-right">
        <SelectControl
          label={labelSelect}
          value={valueSelect}
          onChange={handleChangeSelect}
          options={selectOptions}
          {...restProps}
        />
      </div>
    </>
  );
};

export default CustomAnimationControl;