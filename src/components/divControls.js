import React from "react";
import {
  Button,
  ButtonGroup,
  TextareaControl,
  SelectControl,
  RangeControl,
  TextControl,
  ToggleControl,
  Tooltip,
  Icon,
  __experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import { useState } from 'react';
import { __ } from "@wordpress/i18n";
import { trash } from "@wordpress/icons";
import ColorOptionsPanel from "./colorPanel";
import TextControlsBlock from "./TextControlsBlock";
import ImageControlsBlock from "./imageControlsBlock";
import SectionSelectorBlock from "./sectionSelectorBlock";
import AlignmentControl from "./aligncontrol";
import BoxShadowControlBlock from "./boxShadowBlock";


const DivControls = ({
  slide,
  element,
  elementIndex,
  slides,
  setAttributes,
  setActiveSectionBlock,
  activeSectionBlock,
  parallax,
  device,
  handleDesktopClick,
  handleTabletClick,
  handleMobileClick,
  showOtherButtons,
  attributes

}) => {

  // Inizializza lo stato locale utilizzando element.playStateDiv
  const [playStateDiv, setPlayState] = useState(element.playStateDiv || '');

  // Funzione per alternare il valore dello stato
  const togglePlayState = () => {
    const newState = playStateDiv === 'play' ? '' : 'play';
    setPlayState(newState);
    // Aggiorna element.playStateDiv piuttosto che attributes.playStateDiv
    element.playStateDiv = newState;
    setAttributes({ elements: [...slides] }); // Oppure aggiorna la struttura dati appropriata
  };
  

  const {
    innerTextColorDefault
  } = attributes;

    // Background color Content
   const updateDivBackgroundColor = (slideId, index, newColor) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === index
                ? { ...element, backgroundColor: newColor }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Layout
  const updateSlideLayoutDiv = (slideId, index, newLayoutDiv) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
                  element.type === "div" && i === index
                    ? { ...element, layoutDiv: newLayoutDiv }
                    : element
                ), 
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

    // Update Gap Items
    const updateSlideGapItemsDiv = (slideId, index, newGapItemsDiv) => {
      const updatedSlides = slides.map((slide) =>
        slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
                  element.type === "div" && i === index
                    ? { ...element, gapItemsDiv: newGapItemsDiv}
                    : element
                ), 
          }
        : slide
      );
      setAttributes({ slides: updatedSlides });
    };

  // Update Position
  const updateSlidePositionDiv = (slideId, index, newPositionDiv) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
      ? {
          ...slide,
          elements: slide.elements.map((element, i) =>
                element.type === "div" && i === index
                  ? { ...element, positionDiv: newPositionDiv}
                  : element
              ), 
        }
      : slide
    );
    setAttributes({ slides: updatedSlides });
  };

    // Update Border Color
    const updateSlideBackgroundBorderColorDiv = (slideId, index, newColor) => {
      const updatedSlides = slides.map((slide) =>
        slide.id === slideId
          ? {
              ...slide,
              elements: slide.elements.map((element, i) =>
                    element.type === "div" && i === index
                      ? { ...element, backgroundBorderColorDiv: newColor }
                      : element
                  ), 
            }
          : slide
      );
      setAttributes({ slides: updatedSlides });
    };
  
    // Update border size
    const updateSlideBackgroundBorderSizeDiv = (slideId, index, newSizeDiv) => {
      const updatedSlides = slides.map((slide) =>
        slide.id === slideId
      ? {
          ...slide,
          elements: slide.elements.map((element, i) =>
                element.type === "div" && i === index
                  ? { ...element, backgroundBorderSizeDiv: newSizeDiv }
                  : element
              ), 
        }
      : slide
      );
      setAttributes({ slides: updatedSlides });
    };
  
    // Update border radius
    const updateSlideBackgroundBorderRadiusDiv = (slideId, index, newRadiusDiv) => {
      const updatedSlides = slides.map((slide) =>
        slide.id === slideId
      ? {
          ...slide,
          elements: slide.elements.map((element, i) =>
                element.type === "div" && i === index
                  ? { ...element, backgroundBorderRadiusDiv: newRadiusDiv }
                  : element
              ), 
        }
      : slide
      );
      setAttributes({ slides: updatedSlides });
    };
  
    // Update vertical padding
    const updateSlideBackgroundVerticalPaddingDiv = (
      slideId,
      index,
      newVerticalPaddingDiv
    ) => {
      const updatedSlides = slides.map((slide) =>
        slide.id === slideId
      ? {
          ...slide,
          elements: slide.elements.map((element, i) =>
                element.type === "div" && i === index
                  ? { ...element, backgroundVerticalPaddingDiv: newVerticalPaddingDiv }
                  : element
              ), 
        }
      : slide
      );
      setAttributes({ slides: updatedSlides });
    };
  
    // Update horizontal padding
    const updateSlideBackgroundHorizontalPaddingDiv = (
      slideId,
      index,
      newHorizontalPaddingDiv
    ) => {
      const updatedSlides = slides.map((slide) =>
        slide.id === slideId
      ? {
          ...slide,
          elements:slide.elements.map((element, i) =>
                element.type === "div" && i === index
                  ? { ...element, backgroundHorizontalPaddingDiv: newHorizontalPaddingDiv }
                  : element
              ), 
        }
      : slide
      );
      setAttributes({ slides: updatedSlides });
    };

    // Update content width
    const updateContentWidthDiv = (
      slideId,
      index,
      value
    ) => {
      const updatedSlides = slides.map((slide) =>
      slide.id === slideId
      ? {
          ...slide,
          elements: slide.elements.map((element, i) =>
                element.type === "div" && i === index
                  ? { ...element, contentWidthDiv: value }
                  : element
              ), 
        }
      : slide
      );
      setAttributes({ slides: updatedSlides });
    };

    // Update custom content width
    const updateCustomContentWidthDiv = (
      slideId,
      index,
      value
    ) => {
      const updatedSlides = slides.map((slide) =>
        slide.id === slideId
      ? {
          ...slide,
          elements: slide.elements.map((element, i) =>
                element.type === "div" && i === index
                  ? { ...element, customContentWidthDiv: value }
                  : element
              ), 
        }
      : slide
      );
      setAttributes({ slides: updatedSlides });
    };

     // Update content height
     const updateContentHeightDiv = (
      slideId,
      index,
      value
    ) => {
      const updatedSlides = slides.map((slide) =>
        slide.id === slideId
      ? {
          ...slide,
          elements: slide.elements.map((element, i) =>
                element.type === "div" && i === index
                  ? { ...element, contentHeightDiv: value }
                  : element
              ), 
        }
      : slide
      );
      setAttributes({ slides: updatedSlides });
    };

     // Update custom content height
     const updateCustomContentHeightDiv = (
      slideId,
      index,
      value
    ) => {
      const updatedSlides = slides.map((slide) =>
        slide.id === slideId
      ? {
          ...slide,
          elements: slide.elements.map((element, i) =>
                element.type === "div" && i === index
                  ? { ...element, customContentHeightDiv: value }
                  : element
              ), 
        }
      : slide
      );
      setAttributes({ slides: updatedSlides });
    };

    // Update element
    const updateElementDiv = (
      slideId,
      index,
      value
    ) => {
      const updatedSlides = slides.map((slide) =>
        slide.id === slideId
      ? {
          ...slide,
          elements: slide.elements.map((element, i) =>
                element.type === "div" && i === index
                  ? { ...element, elementDiv: value }
                  : element
              ), 
        }
      : slide
      );
      setAttributes({ slides: updatedSlides });
    };

      // Update border style 
      const updateBorderStyleDiv = (
        slideId,
        index,
        value
      ) => {
        const updatedSlides = slides.map((slide) =>
          slide.id === slideId
      ? {
          ...slide,
          elements: slide.elements.map((element, i) =>
                element.type === "div" && i === index
                  ? { ...element, borderStyleDiv: value }
                  : element
              ), 
        }
      : slide
        );
        setAttributes({ slides: updatedSlides });
      };

       // Update rotate
       const updateRotateDiv = (
        slideId,
        index,
        value
      ) => {
        const updatedSlides = slides.map((slide) =>
          slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
                  element.type === "div" && i === index
                    ? { ...element, rotateDiv: value }
                    : element
                ), 
          }
        : slide
        );
        setAttributes({ slides: updatedSlides });
      };

       // Update opacity
       const updateOpacityDiv = (
        slideId,
        index,
        value
      ) => {
        const updatedSlides = slides.map((slide) =>
          slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
                  element.type === "div" && i === index
                    ? { ...element, opacityDiv: value }
                    : element
                ), 
          }
        : slide
        );
        setAttributes({ slides: updatedSlides });
      };

        // Update animation
        const updateAnimationDiv = (
          slideId,
          index,
          value
        ) => {
          const updatedSlides = slides.map((slide) =>
            slide.id === slideId
          ? {
              ...slide,
              elements: slide.elements.map((element, i) =>
                    element.type === "div" && i === index
                      ? { ...element, animationDiv: value }
                      : element
                  ), 
            }
          : slide
          );
          setAttributes({ slides: updatedSlides });
        };

        // Update animation duration
        const updateDurationEffectDiv = (
          slideId,
          index,
          value
        ) => {
          const updatedSlides = slides.map((slide) =>
            slide.id === slideId
          ? {
              ...slide,
              elements: slide.elements.map((element, i) =>
                    element.type === "div" && i === index
                      ? { ...element, durationEffectDiv: value }
                      : element
                  ), 
            }
          : slide
          );
          setAttributes({ slides: updatedSlides });
        };

        // Update animation interation
        const updateInterationDiv = (
          slideId,
          index,
          value
        ) => {
          const updatedSlides = slides.map((slide) =>
            slide.id === slideId
          ? {
              ...slide,
              elements: slide.elements.map((element, i) =>
                    element.type === "div" && i === index
                      ? { ...element, interationDiv: value }
                      : element
                  ), 
            }
          : slide
          );
          setAttributes({ slides: updatedSlides });
        };

        
       // Margin div
       const updatenewMarginDiv= (slideId, index, newMarginDiv) => {
      
        const addUnit = (value, unit) => {
          // Verifica se il valore termina già con l'unità
          if (typeof value === "string" && value.endsWith(unit)) {
            return value;
          }
          return `${value}${unit}`;
        };
    
        const updatedSlides = slides.map((slide) =>
          slide.id === slideId
            ? {
                ...slide,
                elements: slide.elements.map((element, i) => {
                  if (element.type === "div" && i === index) {
                    return {
                      ...element,
                      marginDiv: {
                        top: addUnit(
                          newMarginDiv.top || "0",
                          newMarginDiv.unit || "px"
                        ),
                        right: addUnit(
                          newMarginDiv.right || "0",
                          newMarginDiv.unit || "px"
                        ),
                        bottom: addUnit(
                          newMarginDiv.bottom || "0",
                          newMarginDiv.unit || "px"
                        ),
                        left: addUnit(
                          newMarginDiv.left || "0",
                          newMarginDiv.unit || "px"
                        ),
                      },
                    };
                  }
                  return element;
                }),
              }
            : slide
        );
        setAttributes({ slides: updatedSlides });
      };

     // Remove Div
  const removeSlideDiv = (slideId, index) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.filter(
              (element, i) => element.type !== "div" || i !== index
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

      // Add Text inside block
  const addSlideTitleDiv = (slideId, divIndex) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, index) =>
              index === divIndex
                ? {
                    ...element,
                    innerTextDivs: [
                      ...(element.innerTextDivs || []),
                      { 
                        content: "" ,
                        textColor: innerTextColorDefault,
                      },
                    ],
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  const [activeSection, setActiveSection] = useState("content");
  const [activeSectionImage, setActiveSectionImage] = useState("content");
  return (
    <>
    <div className="custom-block-added">
      <div className="divider-controls"></div>
      <div className="title-block-added">
        <div className="title-element">
          <Button
            onClick={() =>
              removeSlideDiv(slide.id, elementIndex)
            }
            style={{
              position: "absolute",
              right: "80px",
              top: "10px",
            }}
            isDestructive
            icon={trash}
            label={__("Remove block", "cocoblocks")}
            className="button-remove-element"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="M280-280h160v-160H280v160Zm240 0h160v-160H520v160ZM280-520h160v-160H280v160Zm240 0h160v-160H520v160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
          </svg>
          <h2>{__("Block", "slider")}</h2>
        </div>
      </div>
      <SectionSelectorBlock onSectionChange={setActiveSectionBlock} />
      {activeSectionBlock === "content" && (
      <>
      <div
            className="content-title-custom-panel intermedy"
            style={{
              marginTop: "-18px",
            }}
          >
            <h2 className="title-custom-panel">
              {__("Content", "cocoblocks")}
            </h2>
          </div>
 <div
        className="button-add-element"
        style={{ paddingBottom: "18px" }}
      >
        <Button
          onClick={() =>
            addSlideTitleDiv(slide.id, elementIndex)
          }
          label={__("Add inner text", "slide")}
        >
          <svg
            fill="currentcolor"
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 56 56"
          >
            <path d="M 16.2929 29.6406 C 22.7617 29.6406 28.1992 24.2266 28.1992 17.7109 C 28.1992 11.1953 22.8320 5.8047 16.2929 5.8047 C 9.7773 5.8047 4.3867 11.1953 4.3867 17.7109 C 4.3867 24.2734 9.7773 29.6406 16.2929 29.6406 Z M 33.8008 13.3750 L 49.8085 13.3750 C 50.8165 13.3750 51.6133 12.6015 51.6133 11.5937 C 51.6133 10.6094 50.8165 9.8359 49.8085 9.8359 L 33.8008 9.8359 C 32.7929 9.8359 32.0195 10.6094 32.0195 11.5937 C 32.0195 12.6015 32.7929 13.3750 33.8008 13.3750 Z M 16.3164 25.4453 C 15.4960 25.4453 14.7695 24.8828 14.7695 24.0156 L 14.7695 19.1406 L 10.2929 19.1406 C 9.4960 19.1406 8.8398 18.4844 8.8398 17.7109 C 8.8398 16.9375 9.4960 16.2812 10.2929 16.2812 L 14.7695 16.2812 L 14.7695 11.4297 C 14.7695 10.5390 15.4960 10.0000 16.3164 10.0000 C 17.1367 10.0000 17.8398 10.5390 17.8398 11.4297 L 17.8398 16.2812 L 22.3164 16.2812 C 23.1132 16.2812 23.7695 16.9375 23.7695 17.7109 C 23.7695 18.4844 23.1132 19.1406 22.3164 19.1406 L 17.8398 19.1406 L 17.8398 24.0156 C 17.8398 24.8828 17.1367 25.4453 16.3164 25.4453 Z M 33.8008 25.6563 L 49.8085 25.6563 C 50.8165 25.6563 51.6133 24.8828 51.6133 23.8750 C 51.6133 22.8906 50.8165 22.1172 49.8085 22.1172 L 33.8008 22.1172 C 32.7929 22.1172 32.0195 22.8906 32.0195 23.8750 C 32.0195 24.8828 32.7929 25.6563 33.8008 25.6563 Z M 6.1679 37.9375 L 49.8085 37.9375 C 50.8165 37.9375 51.6133 37.1406 51.6133 36.1563 C 51.6133 35.1719 50.8165 34.3984 49.8085 34.3984 L 6.1679 34.3984 C 5.1601 34.3984 4.3867 35.1719 4.3867 36.1563 C 4.3867 37.1406 5.1601 37.9375 6.1679 37.9375 Z M 6.1679 50.1953 L 49.8085 50.1953 C 50.8165 50.1953 51.6133 49.4219 51.6133 48.4375 C 51.6133 47.4531 50.8165 46.6562 49.8085 46.6562 L 6.1679 46.6562 C 5.1601 46.6562 4.3867 47.4531 4.3867 48.4375 C 4.3867 49.4219 5.1601 50.1953 6.1679 50.1953 Z"></path>
          </svg>
        </Button>
        <Button
          onClick={() =>
            addSlideImageDiv(slide.id, elementIndex)
          } // Assicurati di passare elementIndex o divIndex
          label={__("Add inner image", "slide")}
        >
          <span class="dashicons dashicons-format-image"></span>
        </Button>
      </div>
      </>
      )}
      {activeSectionBlock === "style" && (
        <>
          <div
            className="content-title-custom-panel intermedy"
            style={{
              marginTop: "-18px",
            }}
          >
            <h2 className="title-custom-panel">
              {__("Background", "cocoblocks")}
            </h2>
          </div>
          <div
            className="content-section-panel"
            style={{ padding: "0" }}
          >
            <div className="custom-select color">
              <ColorOptionsPanel
                colorNormal={element.backgroundColor}
                setColorNormal={(newColor) =>
                  updateDivBackgroundColor(
                    slide.id,
                    elementIndex,
                    newColor
                  )
                }
                buttonTitle={__(
                  "Background Color",
                  "cocoblocks"
                )}
                buttonIcon="admin-customizer"
              />
            </div>
          </div>
          <div className="content-title-custom-panel intermedy">
            <h2 className="title-custom-panel">
              {__("Layout", "cocoblocks")}
            </h2>
          </div>
          <div
            className="content-section-panel"
            style={{ padding: "0" }}
          >
            <div className="custom-select">
              <SelectControl
                label={
                  <>
                    <Icon
                      icon="screenoptions"
                      style={{
                        marginRight: "5px",
                        width: "16px",
                        height: "16px",
                        fontSize: "16px",
                      }}
                    />
                    {__(
                      "Content direction",
                      "cocoblocks"
                    )}
                  </>
                }
                value={element.layoutDiv}
                options={[
                  {
                    label: __("Column", "slider"),
                    value: "vertical",
                  },
                  {
                    label: __("Row", "slider"),
                    value: "horizontal",
                  },
                ]}
                onChange={(newLayoutDiv) =>
                  updateSlideLayoutDiv(
                    slide.id,
                    elementIndex,
                    newLayoutDiv
                  )
                }
              />
            </div>
            <div className="custom-select">
              <RangeControl
                label={
                  <>
                    <Icon
                      icon="image-flip-horizontal"
                      style={{
                        marginRight: "5px",
                        width: "16px",
                        height: "16px",
                        fontSize: "16px",
                      }}
                    />
                    {__(
                      "Gap between items",
                      "cocoblocks"
                    )}
                  </>
                }
                value={element.gapItemsDiv}
                onChange={(newGapItemsDiv) =>
                  updateSlideGapItemsDiv(
                    slide.id,
                    elementIndex,
                    newGapItemsDiv
                  )
                }
                min={0}
                max={256}
                step={1}
              />
            </div>
            <div className="custom-select">
              <AlignmentControl
                value={element.positionDiv}
                onChange={(newPositionDiv) =>
                  updateSlidePositionDiv(
                    slide.id,
                    elementIndex,
                    newPositionDiv
                  )
                }
              />
            </div>
            <div className="custom-select select-control-label-right">
              <SelectControl
                label={
                  <>
                   <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-320 120-480l160-160 57 56-64 64h414l-63-64 56-56 160 160-160 160-56-56 63-64H273l63 64-56 56Z"/></svg>
                    {__("Content width", "cocoblocks")}
                  </>
                }
                value={element.contentWidthDiv}
                options={[
                  { label: "Auto", value: "auto" },
                  { label: "100%", value: "100%" },
                  { label: "Custom", value: "custom" },
                ]}
                onChange={(value) =>
                  updateContentWidthDiv(slide.id, elementIndex, value)
                }
              />
            </div>
            <div className="custom-select">
              <RangeControl
                label={
                  <>
                   <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-320 120-480l160-160 57 56-64 64h414l-63-64 56-56 160 160-160 160-56-56 63-64H273l63 64-56 56Z"/></svg>
                    {__(
                      "Custom width",
                      "cocoblocks"
                    )}
                  </>
                }
                value={element.customContentWidthDiv}
                onChange={(value) =>
                  updateCustomContentWidthDiv(
                    slide.id,
                    elementIndex,
                    value
                  )
                }
                min={0}
                max={100}
                step={1}
              />
            </div>
            <div className="custom-select select-control-label-right">
              <SelectControl
                label={
                  <>
                   <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-120 320-280l56-56 64 63v-414l-64 63-56-56 160-160 160 160-56 57-64-64v414l64-63 56 56-160 160Z"/></svg>
                    {__("Content height", "cocoblocks")}
                  </>
                }
                value={element.contentHeightDiv}
                options={[
                  { label: "Auto", value: "auto" },
                  { label: "100%", value: "100%" },
                  { label: "Custom", value: "custom" },
                ]}
                onChange={(value) =>
                  updateContentHeightDiv(slide.id, elementIndex, value)
                }
              />
            </div>
            <div className="custom-select">
              <RangeControl
                label={
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-120 320-280l56-56 64 63v-414l-64 63-56-56 160-160 160 160-56 57-64-64v414l64-63 56 56-160 160Z"/></svg>
                    {__(
                      "Custom height",
                      "cocoblocks"
                    )}
                  </>
                }
                value={element.customContentHeightDiv}
                onChange={(value) =>
                  updateCustomContentHeightDiv(
                    slide.id,
                    elementIndex,
                    value
                  )
                }
                min={0}
                max={100}
                step={1}
              />
            </div>
            <div className="custom-select select-control-label-right">
              <SelectControl
                label={
                  <>
                   <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-280v-400h720v160h-80v-80H200v240h360v80H120Zm80-80v-240 240Zm664 200L720-303v123h-80v-260h260v80H776l144 144-56 56Z"/></svg>
                    {__("Element html", "cocoblocks")}
                  </>
                }
                value={element.elementDiv}
                onChange={(value) =>
                  updateElementDiv(
                    slide.id,
                    elementIndex,
                    value
                  )
                }
                options={[
                  {
                    label: __("<div>", "cocoblocks"),
                    value: "div",
                  },
                  {
                    label: __("<section>", "cocoblocks"),
                    value: "section",
                  },
                  {
                    label: __("<main>", "cocoblocks"),
                    value: "main",
                  },
                  {
                    label: __("<article>", "cocoblocks"),
                    value: "article",
                  },
                  {
                    label: __("<aside>", "cocoblocks"),
                    value: "aside",
                  },
                ]}
              />
            </div>
          </div>
          <div className="content-title-custom-panel intermedy">
            <h2 className="title-custom-panel">
              {__("Spacings", "cocoblocks")}
            </h2>
          </div>
          <div
            className="content-section-panel"
            style={{ padding: "0" }}
          >
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
                      style={{
                        marginRight: "4px",
                        marginLeft: "-2px",
                        marginBottom: "-4px",
                      }}
                    >
                      <path d="M192-744v-72h576v72H192Zm252 600v-390L339-429l-51-51 192-192 192 192-51 51-105-105v390h-72Z" />
                    </svg>
                    {__(
                      "Content vertical padding",
                      "cocoblocks"
                    )}
                  </>
                }
                value={
                  element.backgroundVerticalPaddingDiv
                }
                onChange={(newVerticalPaddingDiv) =>
                  updateSlideBackgroundVerticalPaddingDiv(
                    slide.id,
                    elementIndex,
                    newVerticalPaddingDiv
                  )
                }
                min={0}
                max={256}
                step={1}
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
                      style={{
                        marginRight: "4px",
                        marginLeft: "-2px",
                        marginBottom: "-4px",
                        transform: "rotate(90deg)",
                      }}
                    >
                      <path d="M192-744v-72h576v72H192Zm252 600v-390L339-429l-51-51 192-192 192 192-51 51-105-105v390h-72Z" />
                    </svg>
                    {__(
                      "Content horizontal padding",
                      "cocoblocks"
                    )}
                  </>
                }
                value={
                  element.backgroundHorizontalPaddingDiv
                }
                onChange={(newHorizontalPaddingDiv) =>
                  updateSlideBackgroundHorizontalPaddingDiv(
                    slide.id,
                    elementIndex,
                    newHorizontalPaddingDiv
                  )
                }
                min={0}
                max={256}
                step={1}
              />
            </div>
            <div className="custom-select box-control">
              <BoxControl
                id="custom-margin-control"
                label={
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="18px"
                      viewBox="0 -960 960 960"
                      width="18px"
                      fill="#e8eaed"
                      style={{
                        marginRight: "5px",
                        marginBottom: "-5px",
                      }}
                    >
                      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Zm120 160q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm160 0q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm160 0q17 0 28.5-11.5T680-640q0-17-11.5-28.5T640-680q-17 0-28.5 11.5T600-640q0 17 11.5 28.5T640-600Zm0 160q17 0 28.5-11.5T680-480q0-17-11.5-28.5T640-520q-17 0-28.5 11.5T600-480q0 17 11.5 28.5T640-440Zm-160 0q17 0 28.5-11.5T520-480q0-17-11.5-28.5T480-520q-17 0-28.5 11.5T440-480q0 17 11.5 28.5T480-440Zm-160 0q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Z" />
                    </svg>
                    {__("Margin", "cocoblocks")}
                  </>
                }
                values={element.marginDiv}
                units={{}}
                onChange={(newMarginDiv) =>
                  updatenewMarginDiv(slide.id, elementIndex, newMarginDiv)
                }
              />
            </div>
          </div>
          <div className="content-title-custom-panel intermedy">
            <h2 className="title-custom-panel">
              {__("Border", "cocoblocks")}
            </h2>
          </div>
          <div
            className="content-section-panel"
            style={{ padding: "0" }}
          >
            <div className="custom-select select-control-label-right">
              <SelectControl
                label={
                  <>
                   <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-120v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80ZM120-120v-720h720v80H200v640h-80Z"/></svg>
                    {__("Border style", "cocoblocks")}
                  </>
                }
                value={element.borderStyleDiv}
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
                onChange={(value) =>
                  updateBorderStyleDiv(slide.id, elementIndex, value)
                }
              />
            </div>
            {element.borderStyleDiv !== "none" && (
            <>
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
                      style={{
                        marginRight: "4px",
                        marginLeft: "-2px",
                        marginBottom: "-4px",
                      }}
                    >
                      <path d="M144-144v-672h72v672h-72Zm150 0v-72h72v72h-72Zm0-300v-72h72v72h-72Zm0-300v-72h72v72h-72Zm150 600v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm150 600v-72h72v72h-72Zm0-300v-72h72v72h-72Zm0-300v-72h72v72h-72Zm150 600v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Z" />
                    </svg>
                    {__("Border width", "cocoblocks")}
                  </>
                }
                value={element.backgroundBorderSizeDiv}
                onChange={(newSizeDiv) =>
                  updateSlideBackgroundBorderSizeDiv(
                    slide.id,
                    elementIndex,
                    newSizeDiv
                  )
                }
                min={0}
                max={20}
                step={1}
              />
            </div>
            <div className="custom-select color">
            <ColorOptionsPanel
                colorNormal={element.backgroundBorderColorDiv}
                setColorNormal={(newColor) =>
                  updateSlideBackgroundBorderColorDiv(
                    slide.id,
                    elementIndex,
                    newColor
                  )
                }
                buttonTitle={__(
                  "Border Color",
                  "cocoblocks"
                )}
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
                      style={{
                        marginRight: "4px",
                        marginLeft: "-2px",
                        marginBottom: "-4px",
                      }}
                    >
                      <path d="M216-216h528v-528H216v528Zm-72 72v-672h672v672H144Zm150-300v-72h72v72h-72Zm150 150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm150 150v-72h72v72h-72Z" />
                    </svg>
                    {__(
                      "Border radius",
                      "cocoblocks"
                    )}
                  </>
                }
                value={
                  element.backgroundBorderRadiusDiv
                }
                onChange={(newRadiusDiv) =>
                  updateSlideBackgroundBorderRadiusDiv(
                    slide.id,
                    elementIndex,
                    newRadiusDiv
                  )
                }
                min={0}
                max={256}
                step={1}
              />
            </div>
            </>)}
          </div>
        </>
      )}
       {activeSectionBlock === "adv-style" && (
        <>
          <div
            className="content-title-custom-panel intermedy"
            style={{
              marginTop: "-18px",
            }}
          >
            <h2 className="title-custom-panel">
              {__("Basic Transforms", "cocoblocks")}
            </h2>
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
                value={element.rotateDiv}
                onChange={(value) =>
                  updateRotateDiv(slide.id, elementIndex, value)
                }
                min={0}
                max={360}
                step={1}
              />
            </div>
          </div>
          <div className="content-title-custom-panel intermedy">
            <h2 className="title-custom-panel">
              {__("Transparency Setting", "cocoblocks")}
            </h2>
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
                      <path d="M480-120q-133 0-226.5-92T160-436q0-65 25-121.5T254-658l226-222 226 222q44 44 69 100.5T800-436q0 132-93.5 224T480-120ZM242-400h474q12-72-13.5-123T650-600L480-768 310-600q-27 26-53 77t-15 123Z" />
                    </svg>
                    {__("Opacity", "cocoblocks")}
                  </>
                }
                value={element.opacityDiv}
                onChange={(value) =>
                  updateOpacityDiv(slide.id, elementIndex, value)
                }
                min={0}
                max={1}
                step={0.1}
              />
            </div>
          </div>
            <BoxShadowControlBlock
              slide={slide}
              slides={slides}
              element={element}
              elementIndex={elementIndex}
              setAttributes={setAttributes}
            />
           
        </>
      )}
        {activeSectionBlock === "animation" && (
        <>
          <div
            className="content-title-custom-panel intermedy"
            style={{
              marginTop: "-18px",
            }}
          >
            <h2 className="title-custom-panel">
              {__("Effects", "cocoblocks")}
            </h2>
          </div>
          <div className="content-section-panel" style={{ padding: "0" }}>
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
                value={element.animationDiv}
                options={[
                  { label: "None", value: "none" },
                  { label: "Fade In", value: "fade-in-div" },
                  { label: "Fade In Left", value: "fade-in-left-div" },
                  { label: "Fade In Right", value: "fade-in-right-div" },
                  { label: "Fade In Top", value: "fade-in-top-div" },
                  { label: "Fade In Bottom", value: "fade-in-bottom-div" },
                  { label: "Slide In Left", value: "slide-in-left-div" },
                  { label: "Slide In Right", value: "slide-in-right-div" },
                  { label: "Slide In Top", value: "slide-in-top-div" },
                  { label: "Slide In Bottom", value: "slide-in-bottom-div" },
                  { label: "Zoom In", value: "zoom-in-div" },
                  { label: "Zoom In Left", value: "zoom-in-left-div" },
                  { label: "Zoom In Right", value: "zoom-in-right-div" },
                  { label: "Zoom In Top", value: "zoom-in-top-div" },
                  { label: "Zoom In Bottom", value: "zoom-in-bottom-div" },
                  { label: "Rotate In Left", value: "rotate-in-left-div" },
                  { label: "Rotate In Right", value: "rotate-in-right-div" },
                  { label: "Rotate In Top", value: "rotate-in-top-div" },
                  { label: "Rotate In Bottom", value: "rotate-in-bottom-div" },
                  { label: "Rotate Continuos", value: "rotate-continuous-div" },
                  { label: "Bounce in", value: "bounce-effect-div" },
                  { label: "Bounce in Left", value: "bounce-left-effect-div" },
                  { label: "Bounce in Right", value: "bounce-right-effect-div" },
                  { label: "Bounce in Top", value: "bounce-top-effect-div" },
                  { label: "Bounce in Bottom", value: "bounce-bottom-effect-div" },
                  { label: "Swing", value: "swing-div" },
                  { label: "Flip In", value: "flip-div" },
                  { label: "Rubber Band", value: "rubber-band-div" },
                  { label: "Wiggle", value: "wiggle-div" },
                ]}
                onChange={(value) =>
                  updateAnimationDiv(slide.id, elementIndex, value)
                }
              />
            </div>
            {element.animationDiv !== "none" && (
            <>
            <div className="custom-select">
              <RangeControl
                label={
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z"/></svg>
                    {__("Duration", "cocoblocks")}
                  </>
                }
                value={element.durationEffectDiv}
                onChange={(value) =>
                  updateDurationEffectDiv(
                    slide.id,
                    elementIndex,
                    value
                  )
                }
                min={.1}
                max={15}
                step={.1}
              />
            </div>
            </>
            )}
            {[
            "bounce-effect-div",
            "bounce-left-effect-div",
            "bounce-right-effect-div",
            "bounce-top-effect-div",
            "bounce-bottom-effect-div",
            "wiggle-div",
            "flip-div",
            "swing-div",
            "rubber-band-div",
          ].includes(element.animationDiv) && (  
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
                    {__("Iteration Mode", "cocoblocks")}
                  </>
                }
                value={element.iterationDiv}
                options={[
                  { label: "Forwards", value: "forwards" },
                  { label: "Infinite", value: "infinite" },
                ]}
                onChange={(value) =>
                  updateInterationDiv(slide.id, elementIndex, value)
                }
              />
            </div>
          )}
           {element.animationDiv !== "none" && (
            <>
              <div className="button-reply-effect">
                <Tooltip text={playStateDiv === 'play' ? 'Play' : 'Repeat'}>
                  <Button
                    variant={playStateDiv === 'play'}
                    onClick={togglePlayState}
                    icon={
                      playStateDiv === 'play' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M170-228q-38-44-61-98T80-440h82q6 44 22 83.5t42 72.5l-56 56ZM80-520q8-60 30-114t60-98l56 56q-26 33-42 72.5T162-520H80ZM438-82q-60-6-113.5-29T226-170l56-58q35 26 73.5 43t82.5 23v80ZM284-732l-58-58q45-36 98.5-59T440-878v80q-45 6-84 23t-72 43Zm96 432v-360l280 180-280 180ZM520-82v-80q121-17 200.5-107T800-480q0-121-79.5-211T520-798v-80q154 17 257 130t103 268q0 155-103 268T520-82Z"/></svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440h80q0 117 81.5 198.5T480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720h-6l62 62-56 58-160-160 160-160 56 58-62 62h6q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80Z"/></svg>
                      )
                    }
                  />
                </Tooltip>
              </div>
              
             </>
            )}
            </div>
            </>
          )}
          
      {element.innerTextDivs &&
        element.innerTextDivs.map(
          (textDiv, textIndex) => (
            <div key={textIndex}>
              <TextControlsBlock
                slide={slide}
                slides={slides}
                textDiv={textDiv}
                element={element}
                textIndex={textIndex}
                elementIndex={elementIndex}
                setAttributes={setAttributes}
                setActiveSection={setActiveSection}
                activeSection={activeSection}
                parallax={parallax}
                device={device}
                handleDesktopClick={
                  handleDesktopClick
                }
                handleTabletClick={handleTabletClick}
                handleMobileClick={handleMobileClick}
                showOtherButtons={showOtherButtons}
              />
            </div>
          )
        )}

      {element.innerImageDivs &&
        element.innerImageDivs.map(
          (imageDiv, imageIndex) => (
            <div key={imageIndex}>
              <ImageControlsBlock
                slide={slide}
                slides={slides}
                element={element}
                divIndex={elementIndex}
                elementIndex={elementIndex}
                imageDiv={imageDiv}
                imageIndex={imageIndex}
                setAttributes={setAttributes}
                setActiveSectionImage={
                  setActiveSectionImage
                }
                activeSectionImage={
                  activeSectionImage
                }
                parallax={parallax}
              />
            </div>
          )
        )}
     
    </div>
    </>
   
  );
};

export default DivControls;
