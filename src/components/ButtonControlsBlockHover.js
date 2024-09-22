import React from "react";
import { SelectControl, RangeControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import ColorOptionsPanel from "./colorPanel";

const ButtonControlsBlockHover = ({
  slide,
  slides,
  element,
  buttonDiv,
  buttonIndex,
  elementIndex,
  setAttributes,
}) => {
  
// Update Button color
const updateSlideButtonColorHover = (slideId, divIndex, innerIndex, color) => {
  const updatedSlides = slides.map((slide) =>
    slide.id === slideId
      ? {
          ...slide,
          elements: slide.elements.map((element, i) =>
            element.type === "div" && i === divIndex
              ? {
                  ...element,
                  innerElements: element.innerElements.map(
                    (innerElement, eIndex) =>
                      eIndex === innerIndex && innerElement.type === "button"
                        ? { ...innerElement, buttonColorHover: color }
                        : innerElement
                  ),
                }
              : element
          ),
        }
      : slide
  );
  setAttributes({ slides: updatedSlides });
};

// Update Icon color
const updateSlideIconColorHover = (slideId, divIndex, innerIndex, color) => {
  const updatedSlides = slides.map((slide) =>
    slide.id === slideId
      ? {
          ...slide,
          elements: slide.elements.map((element, i) =>
            element.type === "div" && i === divIndex
              ? {
                  ...element,
                  innerElements: element.innerElements.map(
                    (innerElement, eIndex) =>
                      eIndex === innerIndex && innerElement.type === "button"
                        ? { ...innerElement, iconColorHover: color }
                        : innerElement
                  ),
                }
              : element
          ),
        }
      : slide
  );
  setAttributes({ slides: updatedSlides });
};

// Update Button background color
const updateSlideButtonBackgroundColorHover = (slideId, divIndex, innerIndex, color) => {
  const updatedSlides = slides.map((slide) =>
    slide.id === slideId
      ? {
          ...slide,
          elements: slide.elements.map((element, i) =>
            element.type === "div" && i === divIndex
              ? {
                  ...element,
                  innerElements: element.innerElements.map(
                    (innerElement, eIndex) =>
                      eIndex === innerIndex && innerElement.type === "button"
                        ? { ...innerElement, buttonBackgroundColorHover: color }
                        : innerElement
                  ),
                }
              : element
          ),
        }
      : slide
  );
  setAttributes({ slides: updatedSlides });
};

// Update Rotate
const updateRotateHover = (slideId, divIndex, innerIndex, rotate) => {
  const updatedSlides = slides.map((slide) =>
    slide.id === slideId
      ? {
          ...slide,
          elements: slide.elements.map((element, i) =>
            element.type === "div" && i === divIndex
              ? {
                  ...element,
                  innerElements: element.innerElements.map(
                    (innerElement, eIndex) =>
                      eIndex === innerIndex && innerElement.type === "button"
                        ? { ...innerElement, rotateHover: rotate }
                        : innerElement
                  ),
                }
              : element
          ),
        }
      : slide
  );
  setAttributes({ slides: updatedSlides });
};

// Update Rotate Icon
const updateRotateIconHover = (slideId, divIndex, innerIndex, rotate) => {
  const updatedSlides = slides.map((slide) =>
    slide.id === slideId
      ? {
          ...slide,
          elements: slide.elements.map((element, i) =>
            element.type === "div" && i === divIndex
              ? {
                  ...element,
                  innerElements: element.innerElements.map(
                    (innerElement, eIndex) =>
                      eIndex === innerIndex && innerElement.type === "button"
                        ? { ...innerElement, rotateIconHover: rotate }
                        : innerElement
                  ),
                }
              : element
          ),
        }
      : slide
  );
  setAttributes({ slides: updatedSlides });
};

// Update animation Icon
const updateAnimationHoverIcon = (slideId, divIndex, innerIndex, value) => {
  const updatedSlides = slides.map((slide) =>
    slide.id === slideId
      ? {
          ...slide,
          elements: slide.elements.map((element, i) =>
            element.type === "div" && i === divIndex
              ? {
                  ...element,
                  innerElements: element.innerElements.map(
                    (innerElement, eIndex) =>
                      eIndex === innerIndex && innerElement.type === "button"
                        ? { ...innerElement, animationHoverIcon: value }
                        : innerElement
                  ),
                }
              : element
          ),
        }
      : slide
  );
  setAttributes({ slides: updatedSlides });
};

// Update animation Icon transition
const updateDurationEffectHoverIcon = (slideId, divIndex, innerIndex, value) => {
  const updatedSlides = slides.map((slide) =>
    slide.id === slideId
      ? {
          ...slide,
          elements: slide.elements.map((element, i) =>
            element.type === "div" && i === divIndex
              ? {
                  ...element,
                  innerElements: element.innerElements.map(
                    (innerElement, eIndex) =>
                      eIndex === innerIndex && innerElement.type === "button"
                        ? { ...innerElement, durationEffectHoverIcon: value }
                        : innerElement
                  ),
                }
              : element
          ),
        }
      : slide
  );
  setAttributes({ slides: updatedSlides });
};

// Update animation Icon translate
const updateTranslateEffectHoverIcon = (slideId, divIndex, innerIndex, value) => {
  const updatedSlides = slides.map((slide) =>
    slide.id === slideId
      ? {
          ...slide,
          elements: slide.elements.map((element, i) =>
            element.type === "div" && i === divIndex
              ? {
                  ...element,
                  innerElements: element.innerElements.map(
                    (innerElement, eIndex) =>
                      eIndex === innerIndex && innerElement.type === "button"
                        ? { ...innerElement, translateEffectHoverIcon: value }
                        : innerElement
                  ),
                }
              : element
          ),
        }
      : slide
  );
  setAttributes({ slides: updatedSlides });
};

// Update border style
const updateBorderStyleHover = (slideId, divIndex, innerIndex, newBorderStyle) => {
  const updatedSlides = slides.map((slide) =>
    slide.id === slideId
      ? {
          ...slide,
          elements: slide.elements.map((element, i) =>
            element.type === "div" && i === divIndex
              ? {
                  ...element,
                  innerElements: element.innerElements.map(
                    (innerElement, eIndex) =>
                      eIndex === innerIndex && innerElement.type === "button"
                        ? { ...innerElement, borderStyleHover: newBorderStyle }
                        : innerElement
                  ),
                }
              : element
          ),
        }
      : slide
  );
  setAttributes({ slides: updatedSlides });
};

// Update Opacity
const updateOpacityHover = (slideId, divIndex, innerIndex, opacity) => {
  const updatedSlides = slides.map((slide) =>
    slide.id === slideId
      ? {
          ...slide,
          elements: slide.elements.map((element, i) =>
            element.type === "div" && i === divIndex
              ? {
                  ...element,
                  innerElements: element.innerElements.map(
                    (innerElement, eIndex) =>
                      eIndex === innerIndex && innerElement.type === "button"
                        ? { ...innerElement, opacityHover: opacity }
                        : innerElement
                  ),
                }
              : element
          ),
        }
      : slide
  );
  setAttributes({ slides: updatedSlides });
};

// Duration effect
const updateDurationEffectHover = (slideId, divIndex, innerIndex, newDurationEffect) => {
  const updatedSlides = slides.map((slide) =>
    slide.id === slideId
      ? {
          ...slide,
          elements: slide.elements.map((element, i) =>
            element.type === "div" && i === divIndex
              ? {
                  ...element,
                  innerElements: element.innerElements.map(
                    (innerElement, eIndex) =>
                      eIndex === innerIndex && innerElement.type === "button"
                        ? { ...innerElement, durationEffectHover: newDurationEffect }
                        : innerElement
                  ),
                }
              : element
          ),
        }
      : slide
  );
  setAttributes({ slides: updatedSlides });
};

// Update Border color
const updateTitleBackgroundBorderColorHover = (slideId, divIndex, innerIndex, color) => {
  const updatedSlides = slides.map((slide) =>
    slide.id === slideId
      ? {
          ...slide,
          elements: slide.elements.map((element, i) =>
            element.type === "div" && i === divIndex
              ? {
                  ...element,
                  innerElements: element.innerElements.map(
                    (innerElement, eIndex) =>
                      eIndex === innerIndex && innerElement.type === "button"
                        ? { ...innerElement, backgroundBorderColorHover: color }
                        : innerElement
                  ),
                }
              : element
          ),
        }
      : slide
  );
  setAttributes({ slides: updatedSlides });
};

// Update Border size
const updateTitleBackgroundBorderSizeHover = (slideId, divIndex, innerIndex, newSize) => {
  const updatedSlides = slides.map((slide) =>
    slide.id === slideId
      ? {
          ...slide,
          elements: slide.elements.map((element, i) =>
            element.type === "div" && i === divIndex
              ? {
                  ...element,
                  innerElements: element.innerElements.map(
                    (innerElement, eIndex) =>
                      eIndex === innerIndex && innerElement.type === "button"
                        ? { ...innerElement, backgroundBorderSizeHover: newSize }
                        : innerElement
                  ),
                }
              : element
          ),
        }
      : slide
  );
  setAttributes({ slides: updatedSlides });
};

  // Show icon in hover
const updateIconShowHover = (slideId, divIndex, innerIndex, value) => {
  const updatedSlides = slides.map((slide) =>
    slide.id === slideId
      ? {
          ...slide,
          elements: slide.elements.map((element, i) =>
            element.type === "div" && i === divIndex
              ? {
                  ...element,
                  innerElements: element.innerElements.map(
                    (innerElement, eIndex) =>
                      eIndex === innerIndex && innerElement.type === "button"
                        ? { ...innerElement, iconShowHover: value }
                        : innerElement
                  ),
                }
              : element
          ),
        }
      : slide
  );
  setAttributes({ slides: updatedSlides });
};

// Update Icon hide show
const updateIconHideShowHover = (slideId, divIndex, innerIndex, value) => {
  const updatedSlides = slides.map((slide) =>
    slide.id === slideId
      ? {
          ...slide,
          elements: slide.elements.map((element, i) =>
            element.type === "div" && i === divIndex
              ? {
                  ...element,
                  innerElements: element.innerElements.map(
                    (innerElement, eIndex) =>
                      eIndex === innerIndex && innerElement.type === "button"
                        ? { ...innerElement, iconHideShowHover: value }
                        : innerElement
                  ),
                }
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
            colorNormal={buttonDiv.buttonColorHover}
            setColorNormal={(color) =>
              updateSlideButtonColorHover(slide.id, elementIndex,buttonIndex, color)
            }
            buttonTitle={__("Color", "cocoblocks")}
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
        <div className="custom-select color">
          <ColorOptionsPanel
            colorNormal={buttonDiv.buttonBackgroundColorHover}
            setColorNormal={(color) =>
              updateSlideButtonBackgroundColorHover(slide.id, elementIndex,buttonIndex, color)
            }
            buttonTitle={__("Background Color", "cocoblocks")}
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
        <div className="custom-select select-control-label-right">
          <SelectControl
            label={
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path d="M280-120v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80ZM120-120v-720h720v80H200v640h-80Z" />
                </svg>
                {__("Border style", "cocoblocks")}
              </>
            }
            value={buttonDiv.borderStyleHover}
            options={[
              {
                label: __("None", "cocoblocks"),
                value: "none",
              },
              {
                label: __("Solid", "cocoblocks"),
                value: "solid",
              },
              {
                label: __("Dashed", "cocoblocks"),
                value: "dashed",
              },
              {
                label: __("Dotted", "cocoblocks"),
                value: "dotted",
              },
              {
                label: __("Double", "cocoblocks"),
                value: "double",
              },
            ]}
            onChange={(newBorderStyle) =>
              updateBorderStyleHover(slide.id, elementIndex,buttonIndex, newBorderStyle)
            }
          />
        </div>
        {buttonDiv.borderStyleHover !== "none" && (
          <>
            <div className="custom-select color">
              <ColorOptionsPanel
                colorNormal={buttonDiv.backgroundBorderColorHover}
                setColorNormal={(color) =>
                  updateTitleBackgroundBorderColorHover(
                    slide.id,
                    elementIndex,
                    buttonIndex,
                    color
                  )
                }
                buttonTitle={__("Border Color", "cocoblocks")}
                buttonIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    fill="#e8eaed"
                    style={{
                      marginRight: "3px",
                      height: "16px",
                      width: "16px",
                    }}
                  >
                    <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" />
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
                          style={{ marginRight: "2px" }}
                        >
                          <path d="M144-144v-672h72v672h-72Zm150 0v-72h72v72h-72Zm0-300v-72h72v72h-72Zm0-300v-72h72v72h-72Zm150 600v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm150 600v-72h72v72h-72Zm0-300v-72h72v72h-72Zm0-300v-72h72v72h-72Zm150 600v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Z" />
                        </svg>
                        {__("Border width", "cocoblocks")}
                      </>
                    }
                    value={buttonDiv.backgroundBorderSizeHover}
                    onChange={(newSize) =>
                      updateTitleBackgroundBorderSizeHover(
                        slide.id,
                        elementIndex,
                        buttonIndex,
                        newSize
                      )
                    }
                    min={0}
                    max={20}
                    step={1}
                  />
                </div>
          </>
        )}
        <div className="custom-select">
          <RangeControl
            label={
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path d="M480-120q-133 0-226.5-92T160-436q0-65 25-121.5T254-658l226-222 226 222q44 44 69 100.5T800-436q0 132-93.5 224T480-120ZM242-400h474q12-72-13.5-123T650-600L480-768 310-600q-27 26-53 77t-15 123Z" />
                </svg>
                {__("Opacity", "cocoblocks")}
              </>
            }
            value={buttonDiv.opacityHover}
            onChange={(opacity) =>
              updateOpacityHover(slide.id, elementIndex,buttonIndex, opacity)
            }
            min={0.1}
            max={1}
            step={0.1}
          />
        </div>
      </div>
      <div className="content-title-custom-panel intermedy">
        <h2 className="title-custom-panel">{__("Animation", "cocoblocks")}</h2>
      </div>
      <div className="content-section-panel" style={{ padding: "0" }}>
      <div className="custom-select">
          <RangeControl
            label={
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path d="m360-160-56-56 70-72q-128-17-211-70T80-480q0-83 115.5-141.5T480-680q169 0 284.5 58.5T880-480q0 62-66.5 111T640-296v-82q77-20 118.5-49.5T800-480q0-32-85.5-76T480-600q-149 0-234.5 44T160-480q0 24 51 57.5T356-372l-52-52 56-56 160 160-160 160Z" />
                </svg>
                {__("Rotate", "cocoblocks")}
              </>
            }
            value={buttonDiv.rotateHover}
            onChange={(rotate) =>
              updateRotateHover(slide.id, elementIndex,buttonIndex, rotate)
            }
            min={0}
            max={360}
            step={1}
          />
        </div>
        </div>
      <div className="content-section-panel" style={{ padding: "0" }}>
            <div className="custom-select">
              <RangeControl
                label={
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#e8eaed"
                    >
                      <path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z" />
                    </svg>
                    {__("Transition", "cocoblocks")}
                  </>
                }
                value={buttonDiv.durationEffectHover}
                onChange={(newDurationEffect) =>
                  updateDurationEffectHover(
                    slide.id,
                    elementIndex,
                    buttonIndex,
                    newDurationEffect
                  )
                }
                min={0.1}
                max={10}
                step={0.1}
              />
            </div>
            </div>
            {buttonDiv.buttonType !== 'type1' && buttonDiv.buttonType !== 'type2' && (
            <>
            {buttonDiv.icon && (
              <>
            <div className="content-title-custom-panel intermedy">
        <h2 className="title-custom-panel">{__("Style Icon", "cocoblocks")}</h2>
      </div>
      <div className="content-section-panel" style={{ padding: "0" }}>
      <div className="custom-select color">
          <ColorOptionsPanel
            colorNormal={buttonDiv.iconColorHover}
            setColorNormal={(color) =>
              updateSlideIconColorHover(slide.id, elementIndex,buttonIndex, color)
            }
            buttonTitle={__("Color", "cocoblocks")}
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
      </div>
      <div className="content-title-custom-panel intermedy">
        <h2 className="title-custom-panel">{__("Animation Icon", "cocoblocks")}</h2>
      </div>
      <div className="content-section-panel" style={{ padding: "0" }}>
      <div className="custom-select">
          <RangeControl
            label={
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path d="m360-160-56-56 70-72q-128-17-211-70T80-480q0-83 115.5-141.5T480-680q169 0 284.5 58.5T880-480q0 62-66.5 111T640-296v-82q77-20 118.5-49.5T800-480q0-32-85.5-76T480-600q-149 0-234.5 44T160-480q0 24 51 57.5T356-372l-52-52 56-56 160 160-160 160Z" />
                </svg>
                {__("Rotate", "cocoblocks")}
              </>
            }
            value={buttonDiv.rotateIconHover}
            onChange={(rotate) =>
              updateRotateIconHover(slide.id, elementIndex,buttonIndex, rotate)
            }
            min={0}
            max={360}
            step={1}
          />
        </div>
        <div className="custom-select select-control-label-right">
          <SelectControl
            label={
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path d="M360-80q-58 0-109-22t-89-60q-38-38-60-89T80-360q0-81 42-148t110-102q20-39 49.5-68.5T350-728q33-68 101-110t149-42q58 0 109 22t89 60q38 38 60 89t22 109q0 85-42 150T728-350q-20 39-49.5 68.5T610-232q-35 68-102 110T360-80Zm0-80q33 0 63.5-10t56.5-30q-58 0-109-22t-89-60q-38-38-60-89t-22-109q-20 26-30 56.5T160-360q0 42 16 78t43 63q27 27 63 43t78 16Zm120-120q33 0 64.5-10t57.5-30q-59 0-110-22.5T403-403q-38-38-60.5-89T320-602q-20 26-30 57.5T280-480q0 42 15.5 78t43.5 63q27 28 63 43.5t78 15.5Zm120-120q18 0 34.5-3t33.5-9q22-60 6.5-115.5T621-621q-38-38-93.5-53.5T412-668q-6 17-9 33.5t-3 34.5q0 42 15.5 78t43.5 63q27 28 63 43.5t78 15.5Zm160-78q20-26 30-57.5t10-64.5q0-42-15.5-78T741-741q-27-28-63-43.5T600-800q-35 0-65.5 10T478-760q59 0 110 22.5t89 60.5q38 38 60.5 89T760-478Z" />
                </svg>
                {__("Animation", "cocoblocks")}
              </>
            }
            value={buttonDiv.animationHoverIcon}
            options={[
              { label: "None", value: "none" },
              { label: "Scale", value: "hover-effect-1-icon-button-inner" },
              { label: "Translate Y", value: "hover-effect-2-icon-button-inner" },
              { label: "Translate X", value: "hover-effect-5-icon-button-inner" },
            ]}
            onChange={(value) =>
              updateAnimationHoverIcon(slide.id, elementIndex,buttonIndex, value)
            }
          />
        </div>
        {buttonDiv.animationHoverIcon !== "none" && (
          <>
            <div className="custom-select">
              <RangeControl
                label={
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#e8eaed"
                    >
                      <path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z" />
                    </svg>
                    {__("Transition", "cocoblocks")}
                  </>
                }
                value={buttonDiv.durationEffectHoverIcon}
                onChange={(value) =>
                  updateDurationEffectHoverIcon(
                    slide.id,
                    elementIndex,
                    buttonIndex,
                    value
                  )
                }
                min={0.1}
                max={10}
                step={0.1}
              />
            </div>
            {(buttonDiv.animationHoverIcon === "hover-effect-2-icon-button-inner" || buttonDiv.animationHoverIcon === "hover-effect-5-icon-button-inner") && (
              <>
              <div className="custom-select">
                <RangeControl
                  label={
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e8eaed"
                      >
                        <path d="M200-120q-33 0-56.5-23.5T120-200v-120h80v120h560v-480H200v120h-80v-200q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm260-140-56-56 83-84H120v-80h367l-83-84 56-56 180 180-180 180Z" />
                      </svg>
                      {__("Translate", "cocoblocks")}
                    </>
                  }
                  value={buttonDiv.translateEffectHoverIcon}
                  onChange={(value) =>
                    updateTranslateEffectHoverIcon(
                      slide.id,
                      elementIndex,
                      buttonIndex,
                      value
                    )
                  }
                  min={-70}
                  max={70}
                  step={1}
                />
              </div>
              </>
            )}
            </>
        )}
        <div className="custom-select select-control-label-right">
          <SelectControl
            label={
              <>
               <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>
                {__("Show icon", "cocoblocks")}
              </>
            }
            value={buttonDiv.iconShowHover}
            options={[
              {
                label: __("Always", "cocoblocks"),
                value: "icon-show-always-inner",
              },
              {
                label: __("In Hover", "cocoblocks"),
                value: "icon-show-hover-inner",
              },
            ]}
            onChange={(value) =>
              updateIconShowHover(slide.id, elementIndex,buttonIndex, value)
            }
          />
        </div>
        {buttonDiv.iconShowHover === 'icon-show-hover-inner' && (
           <div className="custom-select select-control-label-right">
           <SelectControl
             label={
               <>
               <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M771-302 480-593v-175l-89 87-56-56 145-143 226 223q48 48 71 103.5T800-436q0 38-8 72.5T771-302Zm21 246L668-180q-42 31-91.5 45.5T480-120q-133 0-226.5-91.5T160-436q0-51 16-98t48-90L56-792l56-56 736 736-56 56ZM480-200v-167L280-567q-21 32-30.5 64.5T240-436q0 100 70 168t170 68Z"/></svg>
               {__("Hide option", "cocoblocks")}
               </>
             }
             value={buttonDiv.iconHideShowHover}
             options={[
               {
                 label: __("Opaciy", "cocoblocks"),
                 value: "icon-hide-opacity-inner",
               },
               {
                 label: __("Display none", "cocoblocks"),
                 value: "icon-hide-display-none-inner",
               },
             ]}
             onChange={(value) =>
               updateIconHideShowHover(slide.id, elementIndex,buttonIndex, value)
             }
           />
         </div>
          )}
        </div>
</>
)}
</>
)}
    </div>
  );
};

export default ButtonControlsBlockHover;
