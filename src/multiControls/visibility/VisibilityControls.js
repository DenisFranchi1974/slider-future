import React from "react";
import { __ } from "@wordpress/i18n";
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import CustomToggleControl from "../../controls/toggle/CustomToggleControl";

const CustomVisibilityControls = ({ 
  valueDesktop,
    valueTablet,
    valueMobile,
  slides, 
  setAttributes, 
  updateType, 
  slideId, 
  elementIndex,
  innerIndex,
  elementType, 
  updateElement, 
  desktopProperty, 
    tabletProperty,
    mobileProperty,
  ...restProps 
}) => {
  
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
            {__("Visibility", "slider-future")}
            </h2>
        </div>
        <div className="content-section-panel" style={{ padding: "0" }}>
        <CustomToggleControl
            label={<>
                <PersonalVideoIcon />
                {__("Desktop", "slider-future")}
              </>}
            checked={valueDesktop ?? true}
            onChange={handleChangeDesktop}
            {...restProps}
        />
        <CustomToggleControl
            label={<>
                <TabletMacIcon />
                {__("Tablet", "slider-future")}
              </>}
            checked={valueTablet ?? true}
            onChange={handleChangeTablet}
            {...restProps}
        />
        <CustomToggleControl
            label={<>
                <SmartphoneIcon />
                {__("Mobile", "slider-future")}
              </>}
            checked={valueMobile ?? true}
            onChange={handleChangeMobile}
            {...restProps}
        />
        </div>
    </>
  );
};

export default CustomVisibilityControls;
