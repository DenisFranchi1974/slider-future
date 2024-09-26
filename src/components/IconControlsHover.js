import React from "react";
import { SelectControl, RangeControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import ColorOptionsPanel from "./colorPanel";

const IconControlsHover = ({
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
              element.type === "icon" && i === index
                ? { ...element, textColorHover: color }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Rotate
  const updateRotateHover = (slideId, index, rotate) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "icon" && i === index
                ? { ...element, rotateHover: rotate }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update border style
  const updateBorderStyleHover = (slideId, index, newBorderStyle) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "icon" && i === index
                ? { ...element, borderStyleHover: newBorderStyle }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Opacity
  const updateOpacityHover = (slideId, index, opacity) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "icon" && i === index
                ? { ...element, opacityHover: opacity }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Duration effect
  const updateDurationEffectHover = (slideId, index, newDurationEffect) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "icon" && i === index
                ? { ...element, durationEffectHover: newDurationEffect }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Border color
  const updateTitleBackgroundBorderColorHover = (slideId, index, color) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "icon" && i === index
                ? { ...element, backgroundBorderColorHover: color }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Border size
  const updateTitleBackgroundBorderSizeHover = (slideId, index, newSize) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "icon" && i === index
                ? { ...element, backgroundBorderSizeHover: newSize }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };
  // Update Annimation
  const updateTextAnimationHover = (slideId, index, animation) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "icon" && i === index
                ? { ...element, animationHover: animation }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Effect color
  const updateSlideEffectColorHover = (slideId, index, color) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "icon" && i === index
                ? { ...element, effectHoverColorHover: color }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Translate effect
  const updateTranslateEffectHover = (slideId, index, newEffect) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "icon" && i === index
                ? { ...element, translateEffectHover: newEffect }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  const isAnimationNone = element.animationHover === " ";
  const showColorOptionsPanel = [
    "hover-effect-3-icon-",
    "hover-effect-3-icon",
    "hover-effect-4-icon",
    "hover-light-effect-icon",
  ].includes(element.animationHover);
  const showTranslateRangeControl = [
    "hover-effect-2-icon", // Translate Y
    "hover-effect-5-icon", // Translate X
  ].includes(element.animationHover);

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
            value={element.borderStyleHover}
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
              updateBorderStyleHover(slide.id, elementIndex, newBorderStyle)
            }
          />
        </div>
        {element.borderStyleHover !== "none" && (
          <>
            <div className="custom-select color">
              <ColorOptionsPanel
                colorNormal={element.backgroundBorderColorHover}
                setColorNormal={(color) =>
                  updateTitleBackgroundBorderColorHover(
                    slide.id,
                    elementIndex,
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
                    value={element.backgroundBorderSizeHover}
                    onChange={(newSize) =>
                      updateTitleBackgroundBorderSizeHover(
                        slide.id,
                        elementIndex,
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
            value={element.opacityHover}
            onChange={(opacity) =>
              updateOpacityHover(slide.id, elementIndex, opacity)
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
            value={element.rotateHover}
            onChange={(rotate) =>
              updateRotateHover(slide.id, elementIndex, rotate)
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
            value={element.animationHover}
            options={[
              { label: "None", value: "none" },
              { label: "Scale", value: "hover-effect-1-icon" },
              { label: "Translate Y", value: "hover-effect-2-icon" },
              { label: "Translate X", value: "hover-effect-5-icon" },
              { label: "Shadow", value: "hover-effect-3-icon-" },
              { label: "Shadow Two", value: "hover-effect-3-icon" },
              { label: "Shadow Three", value: "hover-effect-4-icon" },
              { label: "Filter", value: "hover-effect-6-icon" },
            ]}
            onChange={(animation) =>
              updateTextAnimationHover(slide.id, elementIndex, animation)
            }
          />
        </div>
        {!isAnimationNone && (
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
                value={element.durationEffectHover}
                onChange={(newDurationEffect) =>
                  updateDurationEffectHover(
                    slide.id,
                    elementIndex,
                    newDurationEffect
                  )
                }
                min={0.1}
                max={10}
                step={0.1}
              />
            </div>
            {showColorOptionsPanel && (
              <div className="custom-select color">
                <ColorOptionsPanel
                  colorNormal={element.effectHoverColorHover}
                  setColorNormal={(color) =>
                    updateSlideEffectColorHover(slide.id, elementIndex, color)
                  }
                  buttonTitle={__("Effect Color", "cocoblocks")}
                  buttonIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#e8eaed"
                      style={{
                        marginBottom: "-5px",
                        height: "20px",
                        width: "20px",
                        marginLeft: "-3px",
                      }}
                    >
                      <path d="M120-380q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm0-160q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm120 340q-17 0-28.5-11.5T200-240q0-17 11.5-28.5T240-280q17 0 28.5 11.5T280-240q0 17-11.5 28.5T240-200Zm0-160q-17 0-28.5-11.5T200-400q0-17 11.5-28.5T240-440q17 0 28.5 11.5T280-400q0 17-11.5 28.5T240-360Zm0-160q-17 0-28.5-11.5T200-560q0-17 11.5-28.5T240-600q17 0 28.5 11.5T280-560q0 17-11.5 28.5T240-520Zm0-160q-17 0-28.5-11.5T200-720q0-17 11.5-28.5T240-760q17 0 28.5 11.5T280-720q0 17-11.5 28.5T240-680Zm160 340q-25 0-42.5-17.5T340-400q0-25 17.5-42.5T400-460q25 0 42.5 17.5T460-400q0 25-17.5 42.5T400-340Zm0-160q-25 0-42.5-17.5T340-560q0-25 17.5-42.5T400-620q25 0 42.5 17.5T460-560q0 25-17.5 42.5T400-500Zm0 300q-17 0-28.5-11.5T360-240q0-17 11.5-28.5T400-280q17 0 28.5 11.5T440-240q0 17-11.5 28.5T400-200Zm0-480q-17 0-28.5-11.5T360-720q0-17 11.5-28.5T400-760q17 0 28.5 11.5T440-720q0 17-11.5 28.5T400-680Zm0 580q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm0-720q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm160 480q-25 0-42.5-17.5T500-400q0-25 17.5-42.5T560-460q25 0 42.5 17.5T620-400q0 25-17.5 42.5T560-340Zm0-160q-25 0-42.5-17.5T500-560q0-25 17.5-42.5T560-620q25 0 42.5 17.5T620-560q0 25-17.5 42.5T560-500Zm0 300q-17 0-28.5-11.5T520-240q0-17 11.5-28.5T560-280q17 0 28.5 11.5T600-240q0 17-11.5 28.5T560-200Zm0-480q-17 0-28.5-11.5T520-720q0-17 11.5-28.5T560-760q17 0 28.5 11.5T600-720q0 17-11.5 28.5T560-680Zm0 580q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm0-720q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm160 620q-17 0-28.5-11.5T680-240q0-17 11.5-28.5T720-280q17 0 28.5 11.5T760-240q0 17-11.5 28.5T720-200Zm0-160q-17 0-28.5-11.5T680-400q0-17 11.5-28.5T720-440q17 0 28.5 11.5T760-400q0 17-11.5 28.5T720-360Zm0-160q-17 0-28.5-11.5T680-560q0-17 11.5-28.5T720-600q17 0 28.5 11.5T760-560q0 17-11.5 28.5T720-520Zm0-160q-17 0-28.5-11.5T680-720q0-17 11.5-28.5T720-760q17 0 28.5 11.5T760-720q0 17-11.5 28.5T720-680Zm120 300q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm0-160q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Z" />
                    </svg>
                  }
                />
              </div>
            )}
            {showTranslateRangeControl && (
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
                  value={element.translateEffectHover}
                  onChange={(newEffect) =>
                    updateTranslateEffectHover(
                      slide.id,
                      elementIndex,
                      newEffect
                    )
                  }
                  min={-70}
                  max={70}
                  step={1}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default IconControlsHover;
