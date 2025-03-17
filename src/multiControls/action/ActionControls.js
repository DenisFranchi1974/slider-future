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
  slides, 
  setAttributes, 
  updateType, 
  slideId,
  elementIndex, 
  innerIndex, 
  elementType, 
  updateElement, 
  linkProperty, 
  urlProperty, 
  targetProperty, 
  relProperty, 
  scrollIdProperty, 
  ...restProps 
}) => {

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
                {__("Actions", "slider-future")}
              </h2>
            </div>
            <div className="content-section-panel" style={{ padding: "0" }}>
        <CustomSelectControl
          label={
            <>
              <TouchAppIcon />
              {__("Link actions", "slider-future")}
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
                  {__("Enter Url", "slider-future")}
                </>
              }
              onChange={handleChangeUrl}
              placeholder={__("Enter url...", "slider-future")}
              {...restProps}
            />
          </div>
            <CustomSelectControl
              label={
                <>
                  <OpenInNewIcon />
                  {__("Target", "slider-future")}
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
                  {__("Link Behavior", "slider-future")}
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
                {__("Enter ID", "slider-future")}
              </>
            }
            onChange={handleChangeScrollId}
            placeholder={__("Enter id...", "slider-future")}
            {...restProps}
          />
        </div>
      )}
      </div>
    </>
  );
};

export default CustomActionControls;
