import React from "react";
import { RangeControl } from "@wordpress/components";
import './RangeControl.scss';

const CustomRangeControl = ({
  label,          // Etichetta per il controllo (includi l'icona o altro HTML qui)
  value,          // Valore corrente del controllo
  onChange,       // Funzione di aggiornamento passata come prop
  min,            // Valore minimo
  max,            // Valore massimo
  step,           // Incremento del valore
  ...restProps    // Altri eventuali props da passare
}) => {
  return (
    <div className="custom-select">
      <RangeControl
       __nextHasNoMarginBottom
        label={label}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
        {...restProps}
      />
    </div>
  );
};

export default CustomRangeControl;