import React from "react";
import { __ } from "@wordpress/i18n";
import ColorOptionsPanel from "./colorPanel";
import { RangeControl } from "@wordpress/components";

const MenuControlsHover = ({
  slide,
  element,
  elementIndex,
  slides,
  setAttributes,
}) => {

  // Update Text color
  const updateSlideTextColorHover = (slideId, index, color) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "menu" && i === index
                ? { ...element, textColorHover: color }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

    // Update scale toggle
    const updateScaleToggle = (slideId, index, value) => {
      const updatedSlides = slides.map((slide) =>
        slide.id === slideId
          ? {
              ...slide,
              elements: slide.elements.map((element, i) =>
                element.type === "menu" && i === index
                  ? { ...element, scaleToggle: value }
                  : element
              ),
            }
          : slide
      );
      setAttributes({ slides: updatedSlides });
    };

  return (
    <div className="custom-block-added">
      <div
        className="content-title-custom-panel intermedy"
        style={{
          marginTop: "-18px",
        }}
      >
        <h2 className="title-custom-panel">{__("Style", "cocoblocks")}</h2>
      </div>
      <div className="content-section-panel" style={{ padding: "0" }}>
        <div className="custom-select color">
          <ColorOptionsPanel
            colorNormal={element.textColorHover}
            setColorNormal={(color) =>
              updateSlideTextColorHover(slide.id, elementIndex, color)
            }
            buttonTitle={__("Text Color", "cocoblocks")}
            buttonIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#e8eaed"
                style={{
                  marginBottom: "-9px",
                  height: "24px",
                  width: "24px",
                  marginLeft: "-4px",
                  marginRight: "-4px",
                }}
              >
                <path d="M192-396v-72h288v72H192Zm0-150v-72h432v72H192Zm0-150v-72h432v72H192Zm336 504v-113l210-209q7.26-7.41 16.13-10.71Q763-528 771.76-528q9.55 0 18.31 3.5Q798.83-521 806-514l44 45q6.59 7.26 10.29 16.13Q864-444 864-435.24t-3.29 17.92q-3.3 9.15-10.71 16.32L641-192H528Zm288-243-45-45 45 45ZM576-240h45l115-115-22-23-22-22-116 115v45Zm138-138-22-22 44 45-22-23Z" />
              </svg>
            }
          />
        </div>
        <div className="custom-select">
              <RangeControl
                label={
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="18px"
                      viewBox="0 -960 960 960"
                      width="18px"
                      fill="#e8eaed"
                    >
                      <path d="M240-160 80-320l56-56 64 62v-332l-64 62-56-56 160-160 160 160-56 56-64-62v332l64-62 56 56-160 160Zm240-40v-80h400v80H480Zm0-240v-80h400v80H480Zm0-240v-80h400v80H480Z" />
                    </svg>
                    {__("Scale Toggle", "cocoblocks")}
                  </>
                }
                value={element.scaleToggle}
                onChange={(value) =>
                  updateScaleToggle(slide.id, elementIndex, value)
                }
                min={1}
                max={2}
                step={0.1}
              />
            </div>
      </div>
    </div>
  );
};

export default MenuControlsHover;
