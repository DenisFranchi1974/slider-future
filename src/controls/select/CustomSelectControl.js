import React from "react";
import { SelectControl } from "@wordpress/components";
import './SelectControl.scss';

const CustomSelectControl = ({
  label,          // Etichetta per il controllo (includi l'icona o altro HTML qui)
  value,          // Valore corrente del controllo
  options,        // Opzioni per il SelectControl
  onChange,       // Funzione di aggiornamento passata come prop
  ...restProps    // Altri eventuali props da passare
}) => {
  return (
    <div className="custom-select select-control-label-right">
      <SelectControl
       __nextHasNoMarginBottom
        label={label}
        value={value}
        options={options}
        onChange={onChange}
        {...restProps}
      />
    </div>
  );
};

export default CustomSelectControl;