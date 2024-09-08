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
  __experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import { useState } from "react";
import { __ } from "@wordpress/i18n";
import { trash } from "@wordpress/icons";
import AlignmentControlThree from "./aligncontrol-three";
import ColorOptionsPanel from "./colorPanel";
import FontStyle from "./font-style";
import SectionSelector from "./sectionSelector";
import TextControlsHover from "./TextControlsHover";
import BoxShadowControl from "./boxShadow";

const ButtonControls = ({
  slide,
  element,
  elementIndex,
  slides,
  setAttributes,
  setActiveSection,
  activeSection,
  parallax,
  device,
  handleDesktopClick,
  handleTabletClick,
  handleMobileClick,
  showOtherButtons,
  attributes,
}) => {
  // Inizializza lo stato locale utilizzando element.playState
  const [playState, setPlayState] = useState(element.playState || "");

  // Funzione per alternare il valore dello stato
  const togglePlayState = () => {
    const newState = playState === "play" ? "" : "play";
    setPlayState(newState);
    // Aggiorna element.playState piuttosto che attributes.playState
    element.playState = newState;
    setAttributes({ elements: [...slides] }); // Oppure aggiorna la struttura dati appropriata
  };

  // Remove button
  const removeSlideButton = (slideId, index) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.filter(
              (element, i) => !(element.type === "button" && i === index)
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

    // Update button
    const updateSlideButton = (slideId, index, newButton) => {
      const updatedSlides = slides.map((slide) =>
        slide.id === slideId
          ? {
              ...slide,
              elements: slide.elements.map((element, i) =>
                element.type === "button" && i === index
                  ? { ...element, button: newButton }
                  : element
              ),
            }
          : slide
      );
      setAttributes({ slides: updatedSlides });
    };
  
  // Update button align
  const updateButtonAlign = (slideId, index, align) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "button" && i === index
                ? { ...element, buttonAlign: align }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update button color
  const updateSlideButtonColor = (slideId, index, color) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "button" && i === index
                ? { ...element, buttonColor: color }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

    // Update button background color
    const updateSlideButtonBackgroundColor = (slideId, index, color) => {
      const updatedSlides = slides.map((slide) =>
        slide.id === slideId
          ? {
              ...slide,
              elements: slide.elements.map((element, i) =>
                element.type === "button" && i === index
                  ? { ...element, buttonBackgroundColor: color }
                  : element
              ),
            }
          : slide
      );
      setAttributes({ slides: updatedSlides });
    };

  // Update Font Style
  const updateFontStyleButton = (slideId, index, styleType, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) => {
              if (element.type === "button" && i === index) {
                const updatedFontStyle = {
                  ...element.fontStyleButton,
                  [styleType]: value,
                };
                return {
                  ...element,
                  fontStyle: updatedFontStyle,
                };
              }
              return element;
            }),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Font Family
  const updateButtonFamily = (slideId, index, family) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "button" && i === index
                ? { ...element, fontFamilyButton: family }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update border style
  const updateBorderStyleButton = (slideId, index, newBorderStyle) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "button" && i === index
                ? { ...element, borderStyleButton: newBorderStyle }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Font Weight
  const updateButtonWeight = (slideId, index, weight) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "button" && i === index
                ? { ...element, fontWeightButton: weight }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Rotate
  const updateRotateButton = (slideId, index, rotate) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "button" && i === index
                ? { ...element, rotateButton: rotate }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Opacity
  const updateOpacityButton = (slideId, index, opacity) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "button" && i === index
                ? { ...element, opacityButton: opacity }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  
  // Width
  const updateWidthButton = (slideId, index, newWidthTitle) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "button" && i === index
                ? { ...element, widthButton: newWidthTitle }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Custom width
  const updateCustomWidthButton = (slideId, index, customWidth) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "button" && i === index
                ? { ...element, widthCustomButton: customWidth }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Size
  const updateFontSizeButton = (slideId, index, newSize) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "button" && i === index
                ? { ...element, fontSizeButton: newSize }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };
  // Size Tablet
  const updateFontSizeButtonTablet = (slideId, index, newSizeTablet) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "button" && i === index
                ? { ...element, fontSizeButtonTablet: newSizeTablet }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };
  // Size Mobile
  const updateFontSizeButtonMobile = (slideId, index, newSizeMobile) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "button" && i === index
                ? { ...element, fontSizeButtonMobile: newSizeMobile }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Line height
  const updateLineHeightButton = (slideId, index, newLineHeight) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "button" && i === index
                ? { ...element, lineHeightButton: newLineHeight }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Letter Spacing
  const updateLetterSpacingButton = (slideId, index, newLetterSpacing) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "button" && i === index
                ? { ...element, letterSpacingButton: newLetterSpacing }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Duration effect
  const updateDurationEffectButton = (slideId, index, newDurationEffect) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "button" && i === index
                ? { ...element, durationEffectButton: newDurationEffect }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  
  // Delay effect
  const updateDelayEffectButton = (slideId, index, newDelayEffect) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "button" && i === index
                ? { ...element, delayEffectButton: newDelayEffect }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };


  // Update Border color
  const updateButtonBackgroundBorderColor = (slideId, index, color) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "button" && i === index
                ? { ...element, backgroundBorderColorButton: color }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Width border
  const updateButtonBackgroundBorderSize = (slideId, index, newSize) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "button" && i === index
                ? { ...element, backgroundBorderSizeButton: newSize }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Border radius
  const updateButtonBackgroundBorderRadius = (slideId, index, newRadius) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "button" && i === index
                ? { ...element, backgroundBorderRadiusButton: newRadius }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Padding title
  const updatenewPaddingButton = (slideId, index, newPaddingtitle) => {
    console.log("Updating margin with:", newPaddingtitle); // Log per debug

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
              if (element.type === "button" && i === index) {
                return {
                  ...element,
                  paddingButton: {
                    top: addUnit(
                      newPaddingtitle.top || "0",
                      newPaddingtitle.unit || "px"
                    ),
                    right: addUnit(
                      newPaddingtitle.right || "0",
                      newPaddingtitle.unit || "px"
                    ),
                    bottom: addUnit(
                      newPaddingtitle.bottom || "0",
                      newPaddingtitle.unit || "px"
                    ),
                    left: addUnit(
                      newPaddingtitle.left || "0",
                      newPaddingtitle.unit || "px"
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

  // Margin title
  const updatenewMarginButton = (slideId, index, newMargintitle) => {
    console.log("Updating margin with:", newMargintitle); // Log per debug

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
              if (element.type === "button" && i === index) {
                return {
                  ...element,
                  marginButton: {
                    top: addUnit(
                      newMargintitle.top || "0",
                      newMargintitle.unit || "px"
                    ),
                    right: addUnit(
                      newMargintitle.right || "0",
                      newMargintitle.unit || "px"
                    ),
                    bottom: addUnit(
                      newMargintitle.bottom || "0",
                      newMargintitle.unit || "px"
                    ),
                    left: addUnit(
                      newMargintitle.left || "0",
                      newMargintitle.unit || "px"
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

  // Parallax text x
  const updateParallaxButton = (slideId, index, newParallaxTitle) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "button" && i === index
                ? { ...element, parallaxButton: newParallaxTitle }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Parallax text y
  const updateParallaxButtonY = (slideId, index, newParallaxTitleY) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "button" && i === index
                ? { ...element, parallaxButtonY: newParallaxTitleY }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Parallax text scale
  const updateParallaxButtonScale = (slideId, index, newParallaxTitleScale) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "button" && i === index
                ? { ...element, parallaxButtonScale: newParallaxTitleScale }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Parallax text opacity
  const updateParallaxButtonOpacity = (
    slideId,
    index,
    newParallaxTitleOpacity
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "button" && i === index
                ? { ...element, parallaxButtonOpacity: newParallaxTitleOpacity }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Parallax text duration
  const updateParallaxButtonDuration = (
    slideId,
    index,
    newParallaxTitleDuration
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "button" && i === index
                ? {
                    ...element,
                    parallaxButtonDuration: newParallaxTitleDuration,
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Effect Text Split
  const updateButtonAnimation = (slideId, index, animation) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "button" && i === index
                ? { ...element, animationButton: animation }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Selector link
  const updateButtonLink = (slideId, index, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "button" && i === index
                ? { ...element, buttonLink: value }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Link Url
  const updateLinkUrlButton = (slideId, index, url) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "button" && i === index
                ? { ...element, linkUrlButton: url }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Link Target
  const updateScrollToIdButton = (slideId, index, id) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "button" && i === index
                ? { ...element, scrollToIdButton: id }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Link Target
  const updateLinkTargetButton = (slideId, index, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "button" && i === index
                ? { ...element, linkTargetButton: value }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Link Rel
  const updateLinkRelButton = (slideId, index, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "button" && i === index
                ? { ...element, linkRelButton: value }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };


  // Enable Desktop
  const updateEnableDesktopButton = (slideId, index, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "button" && i === index
                ? { ...element, enableDesktopButton: value }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Enable Tablet
  const updateEnableTabletButton = (slideId, index, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "button" && i === index
                ? { ...element, enableTabletButton: value }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Enable Mobile
  const updateEnableMobileButton = (slideId, index, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "button" && i === index
                ? { ...element, enableMobileButton: value }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Font Family Options
  const fontOptions = [
    { label: __("Arial", "cocoblock"), value: "Arial, sans-serif" },
    { label: __("Helvetica", "cocoblock"), value: "Helvetica, sans-serif" },
    { label: __("Georgia", "cocoblock"), value: "Georgia, serif" },
    {
      label: __("Times New Roman", "cocoblock"),
      value: "Times New Roman, serif",
    },
    { label: __("Verdana", "cocoblock"), value: "Verdana, sans-serif" },
    { label: __("Tahoma", "cocoblock"), value: "Tahoma, sans-serif" },
    {
      label: __("Trebuchet MS", "cocoblock"),
      value: "Trebuchet MS, sans-serif",
    },
    { label: __("Gill Sans", "cocoblock"), value: "Gill Sans, sans-serif" },
    { label: __("Courier New", "cocoblock"), value: "Courier New, monospace" },
    {
      label: __("Lucida Console", "cocoblock"),
      value: "Lucida Console, monospace",
    },
    { label: __("Consolas", "cocoblock"), value: "Consolas, monospace" },
    { label: __("Monaco", "cocoblock"), value: "Monaco, monospace" },
    {
      label: __("Comic Sans MS", "cocoblock"),
      value: "Comic Sans MS, cursive",
    },
    {
      label: __("Brush Script MT", "cocoblock"),
      value: "Brush Script MT, cursive",
    },
    { label: __("Impact", "cocoblock"), value: "Impact, fantasy" },
    {
      label: __("Palatino Linotype", "cocoblock"),
      value: "Palatino Linotype, serif",
    },
    { label: __("Book Antiqua", "cocoblock"), value: "Book Antiqua, serif" },
    { label: __("Roboto", "cocoblock"), value: "Roboto, sans-serif" },
    { label: __("Open Sans", "cocoblock"), value: "Open Sans, sans-serif" },
    { label: __("Ubuntu Mono", "cocoblock"), value: "Ubuntu Mono, monospace" },
    { label: __("Inconsolata", "cocoblock"), value: "Inconsolata, monospace" },
    { label: __("Bungee Tint", "cocoblock"), value: "Bungee Tint, sans-serif" },
    { label: __("Matemasie", "cocoblock"), value: "Matemasie, sans-serif" },
    { label: __("Anton", "cocoblock"), value: "Anton, sans-serif" },
    {
      label: __("Baskervville SC", "cocoblock"),
      value: "Baskervville SC, serif",
    },
    {
      label: __("Bodoni Moda SC", "cocoblock"),
      value: "Bodoni Moda SC, serif",
    },
    { label: __("Ga Maamli", "cocoblock"), value: "Ga Maamli, sans-serif" },
    { label: __("Goldman", "cocoblock"), value: "Goldman, sans-serif" },
    { label: __("Kanit", "cocoblock"), value: "Kanit, sans-serif" },
    { label: __("Knewave", "cocoblock"), value: "Knewave, cursive" },
    {
      label: __("Londrina Outline", "cocoblock"),
      value: "Londrina Outline, sans-serif",
    },
    { label: __("Macondo", "cocoblock"), value: "Macondo, cursive" },
    { label: __("Rampart One", "cocoblock"), value: "Rampart One, sans-serif" },
    {
      label: __("Rubik Wet Paint", "cocoblock"),
      value: "Rubik Wet Paint, cursive",
    },
    {
      label: __("Ruslan Display", "cocoblock"),
      value: "Ruslan Display, display",
    },
    { label: __("Titan One", "cocoblock"), value: "Titan One, sans-serif" },
    {
      label: __("Vujahday Script", "cocoblock"),
      value: "Vujahday Script, cursive",
    },
    { label: __("Wallpoet", "cocoblock"), value: "Wallpoet, cursive" },
  ];

  return (
    <div className="custom-block-added">
      <div className="divider-controls"></div>
      <div className="title-block-added">
        <div className="title-element">
          <Button
            isDestructive
            onClick={() => removeSlideButton(slide.id, elementIndex)}
            className="button-remove-element"
            style={{
              position: "absolute",
              right: "80px",
              top: "10px",
            }}
            label={__("Remove Text", "cocoblocks")}
            icon={trash}
          ></Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
          </svg>
          <h2>{__("Button", "cocoblocks")}</h2>
        </div>
      </div>
      <SectionSelector onSectionChange={setActiveSection} />
      {activeSection === "content" && (
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

          <div className="content-section-panel" style={{ padding: "0" }}>
          <div className="custom-select">
              <TextareaControl
                value={element.button}
                onChange={(newButton) =>
                  updateSlideButton(slide.id, elementIndex, newButton)
                }
                placeholder={__("Add button", "cocoblocks")}
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
                      <path d="M120-120v-720h80v720h-80Zm640 0v-720h80v720h-80ZM280-440v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Z" />
                    </svg>
                    {__("Width", "cocoblocks")}
                  </>
                }
                value={element.widthButton}
                onChange={(newElement) =>
                  updateWidthButton(slide.id, elementIndex, newElement)
                }
                options={[
                  {
                    label: __("Auto", "cocoblocks"),
                    value: "auto",
                  },
                  {
                    label: __("100%", "cocoblocks"),
                    value: "100%",
                  },
                  {
                    label: __("Custom", "cocoblocks"),
                    value: "custom",
                  },
                ]}
              />
            </div>
            {element.widthButton !== "auto" && (
              <p
                className="notice components-base-control__help"
                style={{
                  borderRadius: "0",
                  marginTop: "6px",
                  marginBottom: "6px",
                }}
              >
                {__(
                  "Attention: Side transition effects will not work with this setting!",
                  "cocoblocks"
                )}
              </p>
            )}
            {element.widthButton === "custom" && (
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
                          <path d="M280-320 120-480l160-160 57 56-64 64h414l-63-64 56-56 160 160-160 160-56-56 63-64H273l63 64-56 56Z" />
                        </svg>
                        {__("Custom Width (%)", "cocoblocks")}
                      </>
                    }
                    value={element.widthCustomButton}
                    onChange={(customWidth) =>
                      updateCustomWidthButton(
                        slide.id,
                        elementIndex,
                        customWidth
                      )
                    }
                    min={1}
                    max={100}
                    step={1}
                  />
                </div>
              </>
            )}
            <div className="custom-select">
              <AlignmentControlThree
                value={element.buttonAlign}
                onChange={(align) =>
                  updateButtonAlign(slide.id, elementIndex, align)
                }
              />
            </div>
          </div>
        </>
      )}
      {activeSection === "style" && (
        <>
          <div
            className="content-title-custom-panel intermedy"
            style={{
              marginTop: "-18px",
            }}
          >
            <h2 className="title-custom-panel">{__("Font", "cocoblocks")}</h2>
          </div>
          <div className="content-section-panel" style={{ padding: "0" }}>
            <div className="custom-select">
              <ButtonGroup className="device-switcher">
                <Button
                  size="small"
                  isPressed={device === "desktop"}
                  onClick={handleDesktopClick}
                  className={device !== "desktop" ? "inactive" : ""}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                    style={{
                      width: "16px",
                      height: "16px",
                    }}
                  >
                    <path d="M320-120v-80h80v-80H160q-33 0-56.5-23.5T80-360v-400q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v400q0 33-23.5 56.5T800-280H560v80h80v80H320ZM160-360h640v-400H160v400Zm0 0v-400 400Z" />
                  </svg>
                </Button>

                <>
                  <Button
                    size="small"
                    isPressed={device === "tablet"}
                    onClick={handleTabletClick}
                    className={device !== "tablet" ? "inactive" : ""}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#e8eaed"
                      style={{
                        width: "16px",
                        height: "16px",
                      }}
                    >
                      <path d="M120-160q-33 0-56.5-23.5T40-240v-480q0-33 23.5-56.5T120-800h720q33 0 56.5 23.5T920-720v480q0 33-23.5 56.5T840-160H120Zm40-560h-40v480h40v-480Zm80 480h480v-480H240v480Zm560-480v480h40v-480h-40Zm0 0h40-40Zm-640 0h-40 40Z" />
                    </svg>
                  </Button>
                  <Button
                    size="small"
                    isPressed={device === "mobile"}
                    onClick={handleMobileClick}
                    className={device !== "mobile" ? "inactive" : ""}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#e8eaed"
                      style={{
                        width: "16px",
                        height: "16px",
                      }}
                    >
                      <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-120v40h400v-40H280Zm0-80h400v-480H280v480Zm0-560h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Z" />
                    </svg>
                  </Button>
                </>
              </ButtonGroup>
              {device === "desktop" && (
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
                        <path d="M560-160v-520H360v-120h520v120H680v520H560Zm-360 0v-320H80v-120h360v120H320v320H200Z" />
                      </svg>
                      {__("Font Size", "cocoblocks")}
                    </>
                  }
                  beforeIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#e8eaed"
                      style={{
                        width: "16px",
                        height: "16px",
                      }}
                    >
                      <path d="M320-120v-80h80v-80H160q-33 0-56.5-23.5T80-360v-400q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v400q0 33-23.5 56.5T800-280H560v80h80v80H320ZM160-360h640v-400H160v400Zm0 0v-400 400Z" />
                    </svg>
                  }
                  value={element.fontSizeButton}
                  onChange={(newSize) =>
                    updateFontSizeButton(slide.id, elementIndex, newSize)
                  }
                  min={4}
                  max={500}
                  step={1}
                />
              )}
              {device === "tablet" && (
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
                        <path d="M560-160v-520H360v-120h520v120H680v520H560Zm-360 0v-320H80v-120h360v120H320v320H200Z" />
                      </svg>
                      {__("Font Size", "cocoblocks")}
                    </>
                  }
                  beforeIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#e8eaed"
                      style={{
                        width: "16px",
                        height: "16px",
                      }}
                    >
                      <path d="M120-160q-33 0-56.5-23.5T40-240v-480q0-33 23.5-56.5T120-800h720q33 0 56.5 23.5T920-720v480q0 33-23.5 56.5T840-160H120Zm40-560h-40v480h40v-480Zm80 480h480v-480H240v480Zm560-480v480h40v-480h-40Zm0 0h40-40Zm-640 0h-40 40Z" />
                    </svg>
                  }
                  value={element.fontSizeButtonTablet}
                  onChange={(newSizeTablet) =>
                    updateFontSizeButtonTablet(slide.id, elementIndex, newSizeTablet)
                  }
                  min={4}
                  max={500}
                  step={1}
                />
              )}
              {device === "mobile" && (
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
                        <path d="M560-160v-520H360v-120h520v120H680v520H560Zm-360 0v-320H80v-120h360v120H320v320H200Z" />
                      </svg>
                      {__("Font Size", "cocoblocks")}
                    </>
                  }
                  beforeIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#e8eaed"
                      style={{
                        width: "16px",
                        height: "16px",
                      }}
                    >
                      <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-120v40h400v-40H280Zm0-80h400v-480H280v480Zm0-560h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Z" />
                    </svg>
                  }
                  value={element.fontSizeButtonMobile}
                  onChange={(newSizeMobile) =>
                    updateFontSizeButtonMobile(slide.id, elementIndex, newSizeMobile)
                  }
                  min={4}
                  max={500}
                  step={1}
                />
              )}
            </div>
            <div className="custom-select">
              <FontStyle
                value={element.fontStyleButton || {}} // Inizializza con un oggetto vuoto se undefined
                onChange={(styleType, value) =>
                  updateFontStyleButton(slide.id, elementIndex, styleType, value)
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
                      <path d="M186-80q-54 0-80-22t-26-66q0-58 49-74t116-16h21v-56q0-34-1-55.5t-6-35.5q-5-14-11.5-19.5T230-430q-9 0-16.5 3t-12.5 8q-4 5-5 10.5t1 11.5q6 11 14 21.5t8 24.5q0 25-17.5 42.5T159-291q-25 0-42.5-17.5T99-351q0-27 12-44t32.5-27q20.5-10 47.5-14t58-4q85 0 118 30.5T400-302v147q0 19 4.5 28t15.5 9q12 0 19.5-18t9.5-56h11q-3 62-23.5 87T368-80q-43 0-67.5-13.5T269-134q-10 29-29.5 41.5T186-80Zm373 0q-20 0-32.5-16.5T522-132l102-269q7-17 22-28t34-11q19 0 34 11t22 28l102 269q8 19-4.5 35.5T801-80q-12 0-22-7t-15-19l-20-58H616l-20 58q-4 11-14 18.5T559-80Zm-324-29q13 0 22-20.5t9-49.5v-67q-26 0-38 15.5T216-180v11q0 36 4 48t15 12Zm407-125h77l-39-114-38 114Zm-37-285q-48 0-76.5-33.5T500-643q0-104 66-170.5T735-880q42 0 68 9.5t26 24.5q0 6-2 12t-7 11q-5 7-12.5 10t-15.5 1q-14-4-32-7t-33-3q-71 0-114 48t-43 127q0 22 8 46t36 24q11 0 21.5-5t18.5-14q17-18 31.5-60T712-758q2-13 10.5-18.5T746-782q18 0 27.5 9.5T779-749q-12 43-17.5 75t-5.5 58q0 20 5.5 29t16.5 9q11 0 21.5-8t29.5-30q2-3 15-7 8 0 12 6t4 17q0 28-32 54t-67 26q-26 0-44.5-14T691-574q-15 26-37 40.5T605-519Zm-485-1v-220q0-58 41-99t99-41q58 0 99 41t41 99v220h-80v-80H200v80h-80Zm80-160h120v-60q0-25-17.5-42.5T260-800q-25 0-42.5 17.5T200-740v60Z" />
                    </svg>
                    {__("Font family", "cocoblocks")}
                  </>
                }
                value={element.fontFamilyButton}
                options={fontOptions}
                onChange={(family) =>
                  updateButtonFamily(slide.id, elementIndex, family)
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
                      <path d="M240-200h480l-57-400H297l-57 400Zm240-480q17 0 28.5-11.5T520-720q0-17-11.5-28.5T480-760q-17 0-28.5 11.5T440-720q0 17 11.5 28.5T480-680Zm113 0h70q30 0 52 20t27 49l57 400q5 36-18.5 63.5T720-120H240q-37 0-60.5-27.5T161-211l57-400q5-29 27-49t52-20h70q-3-10-5-19.5t-2-20.5q0-50 35-85t85-35q50 0 85 35t35 85q0 11-2 20.5t-5 19.5ZM240-200h480-480Z" />
                    </svg>
                    {__("Font weight", "cocoblocks")}
                  </>
                }
                value={element.fontWeightButton}
                options={[
                  {
                    label: __("100 Thin", "cocoblocks"),
                    value: "100",
                  },
                  {
                    label: __("300 Light", "cocoblocks"),
                    value: "300",
                  },
                  {
                    label: __("400 Regular", "cocoblocks"),
                    value: "400",
                  },
                  {
                    label: __("500 Medium", "cocoblocks"),
                    value: "500",
                  },
                  {
                    label: __("700 Bold", "cocoblocks"),
                    value: "700",
                  },
                  {
                    label: __("900 Black", "cocoblocks"),
                    value: "900",
                  },
                ]}
                onChange={(weight) =>
                  updateButtonWeight(slide.id, elementIndex, weight)
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
                    {__("Line height", "cocoblocks")}
                  </>
                }
                value={element.lineHeightButton}
                onChange={(newLineHeight) =>
                  updateLineHeightButton(slide.id, elementIndex, newLineHeight)
                }
                min={0.5}
                max={2.5}
                step={0.1}
              />
            </div>
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
                      <path d="M160-160v-640h80v640h-80Zm560 0v-640h80v640h-80ZM294-280l150-400h72l150 400h-69l-36-102H399l-36 102h-69Zm126-160h120l-58-166h-4l-58 166Z" />
                    </svg>
                    {__("Letter spacing", "cocoblocks")}
                  </>
                }
                value={element.letterSpacingButton}
                onChange={(newLetterSpacing) =>
                  updateLetterSpacingButton(slide.id, elementIndex, newLetterSpacing)
                }
                min={0}
                max={100}
                step={0.5}
              />
            </div>
            <p
              className="notice components-base-control__help"
              style={{
                borderRadius: "0",
                marginTop: "6px",
                marginBottom: "6px",
              }}
            >
              {__(
                "Attention: Not all browsers may support every listed font family, and not all font families support the full range of font weights!",
                "cocoblocks"
              )}
            </p>
            <div className="custom-select color">
              <ColorOptionsPanel
                colorNormal={element.buttonColor}
                setColorNormal={(color) =>
                  updateSlideButtonColor(slide.id, elementIndex, color)
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
                colorNormal={element.buttonBackgroundColor}
                setColorNormal={(color) =>
                  updateSlideButtonBackgroundColor(slide.id, elementIndex, color)
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
          </div>
          <div className="content-title-custom-panel intermedy">
            <h2 className="title-custom-panel">
              {__("Spacings", "cocoblocks")}
            </h2>
          </div>
          <div className="content-section-panel" style={{ padding: "0" }}>
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
                      <path d="M320-600q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm160 0q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm160 0q17 0 28.5-11.5T680-640q0-17-11.5-28.5T640-680q-17 0-28.5 11.5T600-640q0 17 11.5 28.5T640-600ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
                    </svg>
                    {__("Padding", "cocoblocks")}
                  </>
                }
                values={element.paddingButton}
                units={{}}
                onChange={(newPaddingtitle) =>
                  updatenewPaddingButton(slide.id, elementIndex, newPaddingtitle)
                }
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
                values={element.marginButton}
                units={{}}
                onChange={(newMargintitle) =>
                  updatenewMarginButton(slide.id, elementIndex, newMargintitle)
                }
              />
            </div>
          </div>
          <div className="content-title-custom-panel intermedy">
            <h2 className="title-custom-panel">{__("Border", "cocoblocks")}</h2>
          </div>
          <div
            className="content-section-panel"
            style={{ paddingTop: "0", paddingBottom: "0" }}
          >
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
                value={element.borderStyleButton}
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
                  updateBorderStyleButton(slide.id, elementIndex, newBorderStyle)
                }
              />
            </div>
            {element.borderStyleButton !== "none" && (
              <>
                <div className="custom-select color">
                  <ColorOptionsPanel
                    colorNormal={element.backgroundBorderColorButton}
                    setColorNormal={(color) =>
                      updateButtonBackgroundBorderColor(
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
                    value={element.backgroundBorderSizeButton}
                    onChange={(newSize) =>
                      updateButtonBackgroundBorderSize(
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
                          <path d="M216-216h528v-528H216v528Zm-72 72v-672h672v672H144Zm150-300v-72h72v72h-72Zm150 150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm150 150v-72h72v72h-72Z" />
                        </svg>
                        {__("Border radius", "cocoblocks")}
                      </>
                    }
                    value={element.backgroundBorderRadiusButton}
                    onChange={(newRadius) =>
                      updateButtonBackgroundBorderRadius(
                        slide.id,
                        elementIndex,
                        newRadius
                      )
                    }
                    min={0}
                    max={256}
                    step={1}
                  />
                </div>
              </>
            )}
          </div>
        </>
      )}
      {activeSection === "adv-style" && (
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
                value={element.rotateButton}
                onChange={(rotate) =>
                  updateRotateButton(slide.id, elementIndex, rotate)
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
                value={element.opacityButton}
                onChange={(opacity) =>
                  updateOpacityButton(slide.id, elementIndex, opacity)
                }
                min={0}
                max={1}
                step={0.1}
              />
            </div>
          </div>
          <BoxShadowControl
            slide={slide}
            slides={slides}
            element={element}
            elementIndex={elementIndex}
            setAttributes={setAttributes}
          />
        </>
      )}
      {activeSection === "animation" && (
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
                value={element.animationButton}
                options={[
                  { label: "None", value: "none" },
                  { label: "Fade In", value: "fade-in" },
                  { label: "Fade In Left", value: "fade-in-left" },
                  { label: "Fade In Right", value: "fade-in-right" },
                  { label: "Fade In Top", value: "fade-in-top" },
                  { label: "Fade In Bottom", value: "fade-in-bottom" },
                  { label: "Slide In Left", value: "slide-in-left" },
                  { label: "Slide In Right", value: "slide-in-right" },
                  { label: "Slide In Top", value: "slide-in-top" },
                  { label: "Slide In Bottom", value: "slide-in-bottom" },
                  { label: "Zoom In", value: "zoom-in" },
                  { label: "Zoom In Left", value: "zoom-in-left" },
                  { label: "Zoom In Right", value: "zoom-in-right" },
                  { label: "Zoom In Top", value: "zoom-in-top" },
                  { label: "Zoom In Bottom", value: "zoom-in-bottom" },
                  { label: "Rotate In Left", value: "rotate-in-left" },
                  { label: "Rotate In Right", value: "rotate-in-right" },
                  { label: "Rotate In Top", value: "rotate-in-top" },
                  { label: "Rotate In Bottom", value: "rotate-in-bottom" },
                  { label: "Rotate Continuos", value: "rotate-continuous" },
                  { label: "Bounce in", value: "bounce-effect" },
                  { label: "Bounce in Left", value: "bounce-left-effect" },
                  { label: "Bounce in Right", value: "bounce-right-effect" },
                  { label: "Bounce in Top", value: "bounce-top-effect" },
                  { label: "Bounce in Bottom", value: "bounce-bottom-effect" },
                  { label: "Wiggle", value: "wiggle" },
                  { label: "Flip", value: "flip" },
                  { label: "Swing", value: "swing" },
                  { label: "Rubber band", value: "rubber-band" },
                  { label: "Letter Bounce", value: "bounce" },
                  { label: "Stretch", value: "stretch" },
                  { label: "Focus", value: "focus" },
                  { label: "Typing", value: "typing-effect" },
                  { label: "Explosion", value: "explode" },
                  { label: "Implode", value: "implode" },
                  {
                    label: "Letters Fly In From Left",
                    value: "letters-fly-in-from-left",
                  },
                  {
                    label: "Letters Fly In From Right",
                    value: "letters-fly-in-from-right",
                  },
                  {
                    label: "Letters Fly In From Top",
                    value: "letters-fly-in-from-top",
                  },
                  {
                    label: "Letters Fly In From Bottom",
                    value: "letters-fly-in-from-bottom",
                  },
                  {
                    label: "Letter Flip From Top",
                    value: "letter-flip-from-top",
                  },
                  {
                    label: "Letter Flip From Bottom",
                    value: "letter-flip-from-bottom",
                  },
                  { label: "Letter Flip Cycle", value: "letter-flip-cycle" },
                  { label: "Gradient Animation", value: "gradient-animation" },
                  { label: "Text Shadow", value: "text-shadow" },
                  { label: "Text Shadow Light", value: "text-shadow-light" },
                  { label: "Text Shadow Heavy", value: "text-shadow-heavy" },
                  { label: "Neon Effect", value: "text-neon" },
                ]}
                onChange={(animation) =>
                  updateButtonAnimation(slide.id, elementIndex, animation)
                }
              />
            </div>
            {element.animationButton !== "none" && (
              <>
                {![
                  " ",
                  "typing-effect",
                  "text-shadow",
                  "text-shadow-light",
                  "text-shadow-heavy",
                  "text-neon",
                ].includes(element.animationButton) && (
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
                          {__("Duration", "cocoblocks")}
                        </>
                      }
                      value={element.durationEffectButton}
                      onChange={(newDurationEffect) =>
                        updateDurationEffectButton(
                          slide.id,
                          elementIndex,
                          newDurationEffect
                        )
                      }
                      min={0.1}
                      max={15}
                      step={0.1}
                    />
                  </div>
                )}
              </>
            )}
            {[
              "explode",
              "implode",
              "letters-fly-in-from-left",
              "letters-fly-in-from-right",
              "letters-fly-in-from-top",
              "letters-fly-in-from-bottom",
              "letter-flip-from-top",
              "letter-flip-from-bottom",
              "letter-flip-cycle",
            ].includes(element.animationButton) && (
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
                        <path d="M320-160h320v-120q0-66-47-113t-113-47q-66 0-113 47t-47 113v120ZM160-80v-80h80v-120q0-61 28.5-114.5T348-480q-51-32-79.5-85.5T240-680v-120h-80v-80h640v80h-80v120q0 61-28.5 114.5T612-480q51 32 79.5 85.5T720-280v120h80v80H160Z" />
                      </svg>
                      {__("Delay", "cocoblocks")}
                    </>
                  }
                  value={element.delayEffectButton}
                  onChange={(newDelayEffect) =>
                    updateDelayEffectButton(slide.id, elementIndex, newDelayEffect)
                  }
                  min={0}
                  max={10}
                  step={0.1}
                />
              </div>
            )}
            {[
              "bounce-effect",
              "bounce-left-effect",
              "bounce-right-effect",
              "bounce-top-effect",
              "bounce-bottom-effect",
              "wiggle",
              "flip",
              "swing",
              "rubber-band",
            ].includes(element.animationButton) && (
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
                  value={element.iterationButton}
                  options={[
                    { label: "Forwards", value: "forwards" },
                    { label: "Infinite", value: "infinite" },
                  ]}
                  onChange={(value) =>
                    updateInterationButton(slide.id, elementIndex, value)
                  }
                />
              </div>
            )}
            {element.animationButton !== "none" && (
              <div className="button-reply-effect">
                <Tooltip text={playState === "play" ? "Play" : "Repeat"}>
                  <Button
                    variant={playState === "play"}
                    onClick={togglePlayState}
                    icon={
                      playState === "play" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 -960 960 960"
                          width="24px"
                          fill="#e8eaed"
                        >
                          <path d="M170-228q-38-44-61-98T80-440h82q6 44 22 83.5t42 72.5l-56 56ZM80-520q8-60 30-114t60-98l56 56q-26 33-42 72.5T162-520H80ZM438-82q-60-6-113.5-29T226-170l56-58q35 26 73.5 43t82.5 23v80ZM284-732l-58-58q45-36 98.5-59T440-878v80q-45 6-84 23t-72 43Zm96 432v-360l280 180-280 180ZM520-82v-80q121-17 200.5-107T800-480q0-121-79.5-211T520-798v-80q154 17 257 130t103 268q0 155-103 268T520-82Z" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 -960 960 960"
                          width="24px"
                          fill="#e8eaed"
                        >
                          <path d="M480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440h80q0 117 81.5 198.5T480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720h-6l62 62-56 58-160-160 160-160 56 58-62 62h6q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80Z" />
                        </svg>
                      )
                    }
                  />
                </Tooltip>
              </div>
            )}
          </div>
        </>
      )}
      {activeSection === "hover" && (
        <>
          <TextControlsHover
            slide={slide}
            slides={slides}
            element={element}
            elementIndex={elementIndex}
            setAttributes={setAttributes}
          />
        </>
      )}
      {activeSection === "actions" && (
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
                      <path d="M419-80q-28 0-52.5-12T325-126L107-403l19-20q20-21 48-25t52 11l74 45v-328q0-17 11.5-28.5T340-760q17 0 29 11.5t12 28.5v472l-97-60 104 133q6 7 14 11t17 4h221q33 0 56.5-23.5T720-240v-160q0-17-11.5-28.5T680-440H461v-80h219q50 0 85 35t35 85v160q0 66-47 113T640-80H419ZM167-620q-13-22-20-47.5t-7-52.5q0-83 58.5-141.5T340-920q83 0 141.5 58.5T540-720q0 27-7 52.5T513-620l-69-40q8-14 12-28.5t4-31.5q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 17 4 31.5t12 28.5l-69 40Zm335 280Z" />
                    </svg>
                    {__("Link actions", "cocoblocks")}
                  </>
                }
                value={element.buttonLink}
                options={[
                  { label: "None", value: "none" },
                  { label: "Link", value: "link" },
                  { label: "Scroll Below Slider", value: "scroll-below" },
                  { label: "Scroll to ID Element", value: "scroll-to-id" },
                ]}
                onChange={(value) =>
                  updateButtonLink(slide.id, elementIndex, value)
                }
              />
            </div>
            {element.buttonLink === "link" && (
              <>
                <div className="custom-select select-text-control">
                  <TextControl
                    label={
                      <>
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 -960 960 960"
                          width="24px"
                          fill="#e8eaed"
                        >
                          <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" />
                        </svg>
                        {__("Enter URL", "cocoblocks")}
                      </>
                    }
                    value={element.linkUrlButton}
                    onChange={(value) =>
                      updateLinkUrlButton(slide.id, elementIndex, value)
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
                          <path d="M200-120q-33 0-56.5-23.5T120-200v-160h80v160h560v-560H200v160h-80v-160q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm220-160-56-58 102-102H120v-80h346L364-622l56-58 200 200-200 200Z" />
                        </svg>
                        {__("Target", "cocoblocks")}
                      </>
                    }
                    value={element.linkTargetButton}
                    options={[
                      { label: "Same Window", value: "_self" },
                      { label: "New Window", value: "_blank" },
                    ]}
                    onChange={(value) =>
                      updateLinkTargetButton(slide.id, elementIndex, value)
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
                          <path d="m791-55-91-91q-49 32-104.5 49T480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-60 17-115.5T146-700l-91-91 57-57 736 736-57 57ZM480-160q43 0 83.5-11t78.5-33L204-642q-22 38-33 78.5T160-480q0 133 93.5 226.5T480-160Zm334-100-58-58q22-38 33-78.5t11-83.5q0-133-93.5-226.5T480-800q-43 0-83.5 11T318-756l-58-58q49-32 104.5-49T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 60-17 115.5T814-260ZM537-537ZM423-423Z" />
                        </svg>
                        {__("Link Behavior", "cocoblocks")}
                      </>
                    }
                    value={element.linkRelButton}
                    options={[
                      { label: "Follow Link", value: "follow" },
                      { label: "No Follow", value: "nofollow" },
                    ]}
                    onChange={(value) =>
                      updateLinkRelButton(slide.id, elementIndex, value)
                    }
                  />
                </div>
              </>
            )}
            {element.buttonLink === "scroll-to-id" && (
              <div className="custom-select select-text-control">
                <TextControl
                  label={
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e8eaed"
                      >
                        <path d="M200-160q-33 0-56.5-23.5T120-240v-560q0-33 23.5-56.5T200-880h560q33 0 56.5 23.5T840-800v284q-10-2-19.5-3t-20.5-1h-40v-280H200v560h124q4 22 10.5 42t17.5 38H200Zm0-120v40-560 520Zm80-40h44q8-49 35-90.5t69-69.5H280v160Zm0-240h160v-160H280v160Zm280 440q-66 0-113-47t-47-113q0-66 47-113t113-47h80v80h-80q-33 0-56.5 23.5T480-280q0 33 23.5 56.5T560-200h80v80h-80Zm-40-440h160v-160H520v160Zm40 320v-80h240v80H560Zm160 120v-80h80q33 0 56.5-23.5T880-280q0-33-23.5-56.5T800-360h-80v-80h80q66 0 113 46.5T960-280q0 66-47 113t-113 47h-80Z" />
                      </svg>
                      {__("Enter ID", "cocoblocks")}
                    </>
                  }
                  value={element.scrollToIdButton}
                  onChange={(value) =>
                    updateScrollToIdButton(slide.id, elementIndex, value)
                  }
                />
              </div>
            )}
          </div>
        </>
      )}
      {activeSection === "visibility" && (
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
                label={
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#e8eaed"
                    >
                      <path d="M80-160q-33 0-56.5-23.5T0-240h160q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240h160q0 33-23.5 56.5T880-160H80Zm400-40q17 0 28.5-11.5T520-240q0-17-11.5-28.5T480-280q-17 0-28.5 11.5T440-240q0 17 11.5 28.5T480-200ZM160-320h640v-440H160v440Zm0 0v-440 440Z" />
                    </svg>
                    {__("Desktop", "cocoblocks")}
                  </>
                }
                checked={element.enableDesktopButton}
                onChange={(value) =>
                  updateEnableDesktopButton(slide.id, elementIndex, value)
                }
              />
            </div>
            <div className="custom-select">
              <ToggleControl
                label={
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#e8eaed"
                    >
                      <path d="M480-140q17 0 28.5-11.5T520-180q0-17-11.5-28.5T480-220q-17 0-28.5 11.5T440-180q0 17 11.5 28.5T480-140ZM200-40q-33 0-56.5-23.5T120-120v-720q0-33 23.5-56.5T200-920h560q33 0 56.5 23.5T840-840v720q0 33-23.5 56.5T760-40H200Zm0-200v120h560v-120H200Zm0-80h560v-400H200v400Zm0-480h560v-40H200v40Zm0 0v-40 40Zm0 560v120-120Z" />
                    </svg>
                    {__("Tablet", "cocoblocks")}
                  </>
                }
                checked={element.enableTabletButton}
                onChange={(value) =>
                  updateEnableTabletButton(slide.id, elementIndex, value)
                }
              />
            </div>
            <div className="custom-select">
              <ToggleControl
                label={
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#e8eaed"
                    >
                      <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-200v120h400v-120H280Zm200 100q17 0 28.5-11.5T520-180q0-17-11.5-28.5T480-220q-17 0-28.5 11.5T440-180q0 17 11.5 28.5T480-140ZM280-320h400v-400H280v400Zm0-480h400v-40H280v40Zm0 560v120-120Zm0-560v-40 40Z" />
                    </svg>
                    {__("Mobile", "cocoblocks")}
                  </>
                }
                checked={element.enableMobileButton}
                onChange={(value) =>
                  updateEnableMobileButton(slide.id, elementIndex, value)
                }
              />
            </div>
          </div>
        </>
      )}
      {activeSection === "parallax" && (
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
          {parallax && (
            <>
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
                          <path d="m680-320-56-56 63-64H440v-80h247l-63-64 56-56 160 160-160 160ZM200-200h80v-560h-80v560Zm-80 80v-720h240v720H120Zm320 0v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80ZM200-200h80-80Z" />
                        </svg>
                        {__("Parallax offset X", "cocoblocks")}
                      </>
                    }
                    value={element.parallaxButton}
                    onChange={(newParallaxTitle) =>
                      updateParallaxButton(
                        slide.id,
                        elementIndex,
                        newParallaxTitle
                      )
                    }
                    min={-500}
                    max={500}
                    step={1}
                  />
                </div>
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
                          <path d="m680-320-56-56 63-64H440v-80h247l-63-64 56-56 160 160-160 160ZM200-200h80v-560h-80v560Zm-80 80v-720h240v720H120Zm320 0v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80ZM200-200h80-80Z" />
                        </svg>
                        {__("Parallax offset Y", "cocoblocks")}
                      </>
                    }
                    value={element.parallaxButtonY}
                    onChange={(newParallaxTitleY) =>
                      updateParallaxButtonY(
                        slide.id,
                        elementIndex,
                        newParallaxTitleY
                      )
                    }
                    min={-500}
                    max={500}
                    step={1}
                  />
                </div>
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
                          <path d="m680-320-56-56 63-64H440v-80h247l-63-64 56-56 160 160-160 160ZM200-200h80v-560h-80v560Zm-80 80v-720h240v720H120Zm320 0v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80ZM200-200h80-80Z" />
                        </svg>
                        {__("Parallax scale", "cocoblocks")}
                      </>
                    }
                    value={element.parallaxButtonScale}
                    onChange={(newParallaxTitleScale) =>
                      updateParallaxButtonScale(
                        slide.id,
                        elementIndex,
                        newParallaxTitleScale
                      )
                    }
                    min={0}
                    max={2}
                    step={0.1}
                  />
                </div>
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
                          <path d="m680-320-56-56 63-64H440v-80h247l-63-64 56-56 160 160-160 160ZM200-200h80v-560h-80v560Zm-80 80v-720h240v720H120Zm320 0v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80ZM200-200h80-80Z" />
                        </svg>
                        {__("Parallax opacity", "cocoblocks")}
                      </>
                    }
                    value={element.parallaxButtonOpacity}
                    onChange={(newParallaxTitleOpacity) =>
                      updateParallaxButtonOpacity(
                        slide.id,
                        elementIndex,
                        newParallaxTitleOpacity
                      )
                    }
                    min={0}
                    max={1}
                    step={0.1}
                  />
                </div>
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
                          <path d="m680-320-56-56 63-64H440v-80h247l-63-64 56-56 160 160-160 160ZM200-200h80v-560h-80v560Zm-80 80v-720h240v720H120Zm320 0v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80ZM200-200h80-80Z" />
                        </svg>
                        {__("Parallax duration", "cocoblocks")}
                      </>
                    }
                    value={element.parallaxButtonDuration}
                    onChange={(newParallaxTitleDuration) =>
                      updateParallaxButtonDuration(
                        slide.id,
                        elementIndex,
                        newParallaxTitleDuration
                      )
                    }
                    min={100}
                    max={2000}
                    step={10}
                  />
                </div>
              </div>
            </>
          )}
          {!parallax && (
            <p
              className="notice components-base-control__help"
              style={{
                borderRadius: "8px",
                marginTop: "18px",
              }}
            >
              {__(
                'For these effects, you need to enable "Parallax" from the Slider options under the Animation section!',
                "cocoblocks"
              )}
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default ButtonControls;
