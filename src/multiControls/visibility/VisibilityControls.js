import React from "react";
import { ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import SmartphoneIcon from '@mui/icons-material/Smartphone';

const CustomVisibilityControls = ({
  valueDesktop,
    valueTablet,
    valueMobile,
  slides, // Stato delle slide
  setAttributes, // Funzione per aggiornare lo stato delle slide
  updateType, // Tipo di elemento (primario o secondario)
  slideId, // ID della slide
  elementIndex, // Indice dell'elemento primario (se primario)
  innerIndex, // Indice dell'elemento secondario (se secondario)
  elementType, // Tipo di elemento (ad es. "title", "button", ecc.)
  updateElement, // Funzione di aggiornamento passata come prop
  desktopProperty, 
    tabletProperty,
    mobileProperty,
  ...restProps // Altri eventuali props da passare
}) => {
  // Funzione Desktop
  const handleChangeDesktop = (newValue) => {
    updateElement(
      slides,
      setAttributes,
      slideId,
      elementIndex,
      innerIndex,
      newValue,
      updateType,
      elementType,
      desktopProperty
    );
  };
  // Funzione Tablet
    const handleChangeTablet = (newValue) => {
        updateElement(
        slides,
        setAttributes,
        slideId,
        elementIndex,
        innerIndex,
        newValue,
        updateType,
        elementType,
        tabletProperty
        );
    };
    // Funzione Mobile
    const handleChangeMobile = (newValue) => {
        updateElement(
        slides,
        setAttributes,
        slideId,
        elementIndex,
        innerIndex,
        newValue,
        updateType,
        elementType,
        mobileProperty
        );
    }

  return (
    <>
        <div
            className="content-title-custom-panel intermedy"
            style={{
            marginTop: "-18px",
            }}
        >
            <h2 className="title-custom-panel">
            {__("Visibility", "cocoblocks")}
            </h2>
        </div>
        <div className="content-section-panel" style={{ padding: "0" }}>
        <div className="custom-select">
        <ToggleControl
            label={<>
                <PersonalVideoIcon />
                {__("Desktop", "cocoblocks")}
              </>}
            checked={valueDesktop}
            onChange={handleChangeDesktop}
            {...restProps}
        />
    </div>
    <div className="custom-select">
        <ToggleControl
            label={<>
                <TabletMacIcon />
                {__("Tablet", "cocoblocks")}
              </>}
            checked={valueTablet}
            onChange={handleChangeTablet}
            {...restProps}
        />
    </div>
    <div className="custom-select">
        <ToggleControl
            label={<>
                <SmartphoneIcon />
                {__("Mobile", "cocoblocks")}
              </>}
            checked={valueMobile}
            onChange={handleChangeMobile}
            {...restProps}
        />
    </div>
     
        </div>
    </>
  );
};

export default CustomVisibilityControls;
