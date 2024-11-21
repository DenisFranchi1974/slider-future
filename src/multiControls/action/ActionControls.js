import React from "react";
import { TextControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DatasetLinkedIcon from "@mui/icons-material/DatasetLinked";
import PhishingIcon from "@mui/icons-material/Phishing";
import CustomSelectControl from "../../controls/select/CustomSelectControl";

const CustomActionControls = ({
  valueSelectLink,
  valueUrl,
  valueSelectTarget,
  valueSelectRel,
  valueScrollId,
  slides, // Stato delle slide
  setAttributes, // Funzione per aggiornare lo stato delle slide
  updateType, // Tipo di elemento (primario o secondario)
  slideId, // ID della slide
  elementIndex, // Indice dell'elemento primario (se primario)
  innerIndex, // Indice dell'elemento secondario (se secondario)
  elementType, // Tipo di elemento (ad es. "title", "button", ecc.)
  updateElement, // Funzione di aggiornamento passata come prop
  linkProperty, // Proprietà da aggiornare per il SelectControl
  urlProperty, // Proprietà da aggiornare per il TextControl
  targetProperty, // Proprietà da aggiornare per il SelectControl
  relProperty, // Proprietà da aggiornare per il SelectControl
  scrollIdProperty, // Proprietà da aggiornare per il TextControl
  ...restProps // Altri eventuali props da passare
}) => {
  // Funzione link
  const handleChangeSelectLink = (newValue) => {
    updateElement(
      slides,
      setAttributes,
      slideId,
      elementIndex,
      innerIndex,
      newValue,
      updateType,
      elementType,
      linkProperty
    );
  };
  // Funzione di gestione del cambio valore
  const handleChangeUrl = (newValue) => {
    updateElement(
      slides,
      setAttributes,
      slideId,
      elementIndex,
      innerIndex,
      newValue,
      updateType,
      elementType,
      urlProperty
    );
  };
  // Funzione target
  const handleChangeSelectTarget = (newValue) => {
    updateElement(
      slides,
      setAttributes,
      slideId,
      elementIndex,
      innerIndex,
      newValue,
      updateType,
      elementType,
      targetProperty
    );
  };
  // Funzione rel
  const handleChangeSelectRel = (newValue) => {
    updateElement(
      slides,
      setAttributes,
      slideId,
      elementIndex,
      innerIndex,
      newValue,
      updateType,
      elementType,
      relProperty
    );
  };
  // Funzione scroll id
  const handleChangeScrollId = (newValue) => {
    updateElement(
      slides,
      setAttributes,
      slideId,
      elementIndex,
      innerIndex,
      newValue,
      updateType,
      elementType,
      scrollIdProperty
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
              <h2 className="title-custom-panel">
                {__("Actions", "cocoblocks")}
              </h2>
            </div>
            <div className="content-section-panel" style={{ padding: "0" }}>
        <CustomSelectControl
          label={
            <>
              <TouchAppIcon />
              {__("Link actions", "cocoblocks")}
            </>
          }
          value={valueSelectLink}
          onChange={handleChangeSelectLink}
          options={[
            { label: "None", value: "none" },
            { label: "Link", value: "link" },
            { label: "Scroll Below Slider", value: "scroll-below" },
            { label: "Scroll to ID Element", value: "scroll-to-id" },
          ]}
          {...restProps}
        />
      {valueSelectLink === "link" && (
        <>
          <div className="custom-select select-text-control">
            <TextControl
              __nextHasNoMarginBottom
              value={valueUrl}
              label={
                <>
                  <InsertLinkIcon />
                  {__("Enter Url", "cocoblocks")}
                </>
              }
              onChange={handleChangeUrl}
              placeholder={__("Enter url...", "cocoblocks")}
              {...restProps}
            />
          </div>
            <CustomSelectControl
              label={
                <>
                  <OpenInNewIcon />
                  {__("Target", "cocoblocks")}
                </>
              }
              value={valueSelectTarget}
              onChange={handleChangeSelectTarget}
              options={[
                { label: "Same Window", value: "_self" },
                { label: "New Window", value: "_blank" },
              ]}
              {...restProps}
            />
            <CustomSelectControl
              label={
                <>
                  <DatasetLinkedIcon />
                  {__("Link Behavior", "cocoblocks")}
                </>
              }
              value={valueSelectRel}
              onChange={handleChangeSelectRel}
              options={[
                { label: "Follow Link", value: "follow" },
                { label: "No Follow", value: "nofollow" },
              ]}
              {...restProps}
            />
        </>
      )}
      {valueSelectLink === "scroll-to-id" && (
        <div className="custom-select select-text-control">
          <TextControl
            __nextHasNoMarginBottom
            value={valueScrollId}
            label={
              <>
                <PhishingIcon />
                {__("Enter ID", "cocoblocks")}
              </>
            }
            onChange={handleChangeScrollId}
            placeholder={__("Enter id...", "cocoblocks")}
            {...restProps}
          />
        </div>
      )}
      </div>
    </>
  );
};

export default CustomActionControls;
