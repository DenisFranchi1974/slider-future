import React from "react";
import {
  Button,
  SelectControl,
  RangeControl,
  TextControl,
  ToggleControl,
  Tooltip,
  Icon,
  __experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import { useState } from "react";
import { __ } from "@wordpress/i18n";
import { trash , info, button} from "@wordpress/icons";
import ColorOptionsPanel from "./colorPanel";
import TextControlsBlock from "./TextControlsBlock";
import ImageControlsBlock from "./imageControlsBlock";
import SectionSelectorBlock from "./sectionSelectorBlock";
import AlignmentControl from "./aligncontrol";
import BoxShadowControlBlock from "./boxShadowBlock";
import DivControlsHover from "./DivControlsHover";
import FontStyle from "./font-style";
import ButtonControlsBlock from "./ButtonControlsBlock";
import ButtonTypeInnerSelectionModal from "./buttonInnerModal";
import IconControlsInner from "./IconControlsInner";


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
  attributes,
  innerElements,
  
}) => {
  // Inizializza lo stato locale utilizzando element.playStateDiv
  const [playStateDiv, setPlayState] = useState(element.playStateDiv || "");
  const [selectedIcon, setSelectedIcon] = useState(null); // Stato locale per l'icona selezionata

  // Funzione per alternare il valore dello stato
  const togglePlayState = () => {
    const newState = playStateDiv === "play" ? "" : "play";
    setPlayState(newState);
    // Aggiorna element.playStateDiv piuttosto che attributes.playStateDiv
    element.playStateDiv = newState;
    setAttributes({ elements: [...slides] }); // Oppure aggiorna la struttura dati appropriata
  };

  // nascondi il div in editor
  const [hideDiv, setHideDiv] = useState(element.hideDiv || "");

  const toggleHideDiv = () => {
    const newState = hideDiv === "hide" ? "" : "hide";
    setHideDiv(newState);
  
    element.hideDiv = newState;
    setAttributes({ elements: [...slides] }); // Oppure aggiorna la struttura dati appropriata
  };

  const { innerTextColorDefault } = attributes;
  

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

  // Update delay
  const updateDelayHide = (slideId, index, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === index
                ? { ...element, delayHide: value }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

    // Update delay
    const updateDelaySeconds = (slideId, index, value) => {
      const updatedSlides = slides.map((slide) =>
        slide.id === slideId
          ? {
              ...slide,
              elements: slide.elements.map((element, i) =>
                element.type === "div" && i === index
                  ? { ...element, delaySeconds: value }
                  : element
              ),
            }
          : slide
      );
      setAttributes({ slides: updatedSlides });
    };

        // Update delay transition
        const updateDelayTransition = (slideId, index, value) => {
          const updatedSlides = slides.map((slide) =>
            slide.id === slideId
              ? {
                  ...slide,
                  elements: slide.elements.map((element, i) =>
                    element.type === "div" && i === index
                      ? { ...element, delayTransition: value }
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
                ? { ...element, gapItemsDiv: newGapItemsDiv }
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
                ? { ...element, positionDiv: newPositionDiv }
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
  const updateSlideBackgroundBorderRadiusDiv = (
    slideId,
    index,
    newRadiusDiv
  ) => {
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
                ? {
                    ...element,
                    backgroundVerticalPaddingDiv: newVerticalPaddingDiv,
                  }
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
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === index
                ? {
                    ...element,
                    backgroundHorizontalPaddingDiv: newHorizontalPaddingDiv,
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update content width
  const updateContentWidthDiv = (slideId, index, value) => {
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
  const updateCustomContentWidthDiv = (slideId, index, value) => {
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
  const updateContentHeightDiv = (slideId, index, value) => {
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
  const updateCustomContentHeightDiv = (slideId, index, value) => {
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
  const updateElementDiv = (slideId, index, value) => {
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
  const updateBorderStyleDiv = (slideId, index, value) => {
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
  const updateRotateDiv = (slideId, index, value) => {
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
  const updateOpacityDiv = (slideId, index, value) => {
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
  const updateAnimationDiv = (slideId, index, value) => {
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
  const updateDurationEffectDiv = (slideId, index, value) => {
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
  const updateInterationDiv = (slideId, index, value) => {
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

  // Selector link
  const updateTextLinkDiv = (slideId, index, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === index
                ? { ...element, textLinkDiv: value }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Link Url
  const updateLinkUrlDiv = (slideId, index, url) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === index
                ? { ...element, linkUrlDiv: url }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Link Target
  const updateScrollToIdDiv = (slideId, index, id) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === index
                ? { ...element, scrollToIdDiv: id }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Link Target
  const updateLinkTargetDiv = (slideId, index, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === index
                ? { ...element, linkTargetDiv: value }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Link Rel
  const updateLinkRelDiv = (slideId, index, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === index
                ? { ...element, linkRelDiv: value }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Enable Desktop
  const updateEnableDesktopDiv = (slideId, index, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === index
                ? { ...element, enableDesktopDiv: value }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Enable Tablet
  const updateEnableTabletDiv = (slideId, index, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === index
                ? { ...element, enableTabletDiv: value }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Enable Mobile
  const updateEnableMobileDiv = (slideId, index, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === index
                ? { ...element, enableMobileDiv: value }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Margin div
  const updatenewMarginDiv = (slideId, index, newMarginDiv) => {
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
                    innerElements: [
                      ...(element.innerElements || []),
                      {
                        type: "text", 
                        content: "",
                        widthTitleBlock: "auto",
                        widthCustomTitleBlock: 100,
                        textAlign: "center",
                        elementTitle: "h4",
                        fontSize: 16,
                        fontSizeTablet: 16,
                        fontSizeMobile: 16,
                        fontStyle: "",
                        fontFamilyTitleBlock: "",
                        fontWeightTitleBlock: "",
                        lineHeight: 1.2,
                        letterSpacingTitleBlock: 0,
                        textColor: innerTextColorDefault,
                        paddingTitleBlock: {
                          top: "0",
                          right: "0",
                          bottom: "0",
                          left: "0",
                        },
                        marginTitle: {
                          top: "0",
                          right: "0",
                          bottom: "0",
                          left: "0",
                        },
                        borderStyle: "none",
                        backgroundBorderSize: 0,
                        backgroundBorderRadius: 0,
                        backgroundBorderColor: "",
                        rotate: 0,
                        opacity: 1,
                        textWriteMode: "horizontal-tb",
                        textOrientation: "initial",
                        animation: "none",
                        durationEffect: 1,
                        delayEffect: 0,
                        durationEffectOdd: 1,
                        durationEffectEven: 1,
                        interation: 1,
                        speedEffect: 100,
                        pauseEffect: 0,
                        animationCount: "1",
                        widthCursor: 2,
                        animationCursor: 1,
                        cursorColor: innerTextColorDefault,
                        gradinetColorOne: "",
                        gradinetColorTwo: "",
                        gradinetColorThree: "",
                        gradinetColorFour: "",
                        decoration: "none",
                        underlineColor: innerTextColorDefault,
                        underlinePadding: 0,
                        underlineVertical: 0,
                        underlineHorizontal: 0,
                        underlineWidth: 20,
                        underlineHeight: 3,
                        underlineAnimation: "none",
                        underlineAnimationFrom: 5,
                        underlineAnimationTo: 50,
                        underlineFromSizeNew: 5,
                        underlineToSizeNew: 5,
                        underlineAnimationTransition: 0.5,
                        textColorHover: innerTextColorDefault,
                        borderStyleHover: "none",
                        backgroundBorderColorHover: "",
                        backgroundBorderSizeHover: 0,
                        opacityHover: 1,
                        rotateHover: 0,
                        animationHover: "none",
                        durationEffectHover: 1,
                        effectHoverColorHover: innerTextColorDefault,
                        translateEffectHover: 0,
                        parallaxTitle: 0,
                        parallaxTitleY: 0,
                        parallaxTitleScale: 1,
                        parallaxTitleOpacity: 1,
                        parallaxTitleDuration: 100,
                        textLink: "none",
                        linkUrl: "",
                        linkTarget: "_self",
                        linkRel: "",
                        scrollToId: "",
                        enableDesktopTitle: true,
                        enableTabletTitle: true,
                        enableMobileTitle: true,
                        iteration: "forwards",
                        positionInnerText:"static",
                        verticalPositionInnerText: 0,
                        horizontalPositionInnerText: 0,
                        delayHide: false,
                        delaySeconds: 1,
                        delayTransition: 0,
                        zIndexTitle: 1,
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

  // Parallax  x
  const updateParallaxDiv = (slideId, index, newParallaxDiv) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === index
                ? { ...element, parallaxDiv: newParallaxDiv }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Parallax y
  const updateParallaxDivY = (slideId, index, newParallaxDivY) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === index
                ? { ...element, parallaxDivY: newParallaxDivY }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Parallax  scale
  const updateParallaxDivScale = (slideId, index, newParallaxDivScale) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === index
                ? { ...element, parallaxDivScale: newParallaxDivScale }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Parallax opacity
  const updateParallaxDivOpacity = (slideId, index, newParallaxDivOpacity) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === index
                ? { ...element, parallaxDivOpacity: newParallaxDivOpacity }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Parallax duration
  const updateParallaxDivDuration = (
    slideId,
    index,
    newParallaxDivDuration
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === index
                ? {
                    ...element,
                    parallaxDivDuration: newParallaxDivDuration,
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Delay effect
  const updateDelayEffectDiv = (slideId, index, newDelayEffect) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === index
                ? { ...element, delayEffectDiv: newDelayEffect }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Z index
  const updateZindexDiv = (slideId, index, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === index
                ? { ...element, zIndexDiv: value }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

// Name group
const updateNameGroup = (slideId, index, value) => {
  const updatedSlides = slides.map((slide) =>
    slide.id === slideId
      ? {
          ...slide,
          elements: slide.elements.map((element, i) =>
            element.type === "div" && i === index
              ? { ...element, nameGroup: value }
              : element
          ),
        }
      : slide
  );
  setAttributes({ slides: updatedSlides });
};

  // Add Image inside block
  const addSlideImageDiv = (slideId, divIndex) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, index) =>
              index === divIndex
                ? {
                    ...element,
                    innerElements: [
                      ...(element.innerElements || []),
                      {
                        imageUrl: "",
                        type: "image", 
                        alt: "",
                        fit: "cover",
                        widthImage: "fixed",
                        customWidthImage: false,
                        widthImageContent: "auto",
                        customWidthImagePx: 200,
                        heightImage: "fixed",
                        customHeightImage: false,
                        customHeightImagePx: 200,
                        backgroundBorderColorImage: "",
                        backgroundBorderSizeImage: 0,
                        backgroundBorderRadiusImage: 0,
                        backgroundColorImage: "",
                        paddingImage: 0,
                        borderStyleImage: "none",
                        backgroundBorderColorImage: "",
                        backgroundBorderSizeImage: 0,
                        backgroundBorderRadiusImage: 0,
                        rotateImage: 0,
                        opacityImage: 1,
                        parallaxImage: 0,
                        parallaxImageY: 0,
                        parallaxImageScale: 1,
                        parallaxImageOpacity: 1,
                        marginImage: {
                          top: 0,
                          right: 0,
                          bottom: 0,
                          left: 0,
                        },
                        blobMask: false,
                        animationImage: "none",
                        durationEffectImage: 1,
                        animationImageMoving: "none",
                        durationEffectImageMoving: 1,
                        translateEffectImageMoving: 0,
                        spikeMask: 0,
                        spikeLeftWidth: 0,
                        spikeMaskRight: "none",
                        spikeRightWidth: 0,
                        imageFilter: "none",
                        imageLink: "none",
                        linkUrlImage: "",
                        linkTargetImage: "_self",
                        linkRelImage: "",
                        scrollToIdImage: "",
                        enableDesktopImage: true,
                        enableTabletImage: true,
                        enableMobileImage: true,
                        imageColorHover: "",
                        borderStyleHoverImage: "none",
                        backgroundBorderColorHoverImage: "",
                        backgroundBorderSizeImageHover: 0,
                        opacityHoverImage: 1,
                        rotateHoverImage: 0,
                        animationHoverImage: "none",
                        durationEffectHoverImage: 1,
                        effectHoverColorHoverImage: "",
                        translateEffectHoverImage: 0,
                        colorShadowImage: "",
                        boxShadowXImage: 0,
                        boxShadowYImage: 0,
                        boxShadowBlurImage: 0,
                        boxShadowSpreadImage: 0,
                        parallaxImage: 0,
                        parallaxImageY: 0,
                        parallaxImageScale: 1,
                        parallaxImageOpacity: 1,
                        parallaxImageDuration: 100,
                        interationImage: "forwards",
                        zIndexImage: 1,
                        positionInnerImage: "static",
                        verticalPositionInnerImage: 0,
                        horizontalPositionInnerImage: 0,
                        delayEffectImage: 0,
                        delayHide:false,
                        delaySeconds:2,
                        delayTransition: 0.5,
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


  // Add Button inside block
  const addSlideButtonDiv = (slideId,  elementIndex,buttonType) => {
    const defaultValues = {
      type1: {
        buttonColor: '#FFFFFF',
        backgroundBorderColorButton: '#FFFFFF',
        borderStyleButton: 'solid',
        backgroundBorderRadiusButton: 30,
        backgroundBorderSizeButton: 3,
        buttonBackgroundColor: '#18191c',
        buttonColorHover: '#FFFFFF',
        rotateButton: 0,
        widthCustomButton: 35,
        heightCustomButton: 55,
        marginButton: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
        opacityButton: 1,
        colorShadow: "",
        boxShadowX: 0,
        boxShadowY: 0,
        boxShadowBlur: 0,
        boxShadowSpread: 0,
        animationButton: "none",
        durationEffectButton: 1,
        delayEffect: 0,
        interationButton: "forwards",
        buttonColorHover: "",
        borderStyleHover: "none",
        backgroundBorderColorHover: "",
        backgoroundBorderSizeHover: 0,
        opacityHover: 1,
        rotateHover: 0,
      },
      type2: {
        buttonColor: '#18191c',
        backgroundBorderColorButton: '#18191c',
        borderStyleButton: 'solid',
        backgroundBorderRadiusButton: 30,
        backgroundBorderSizeButton: 3,
        buttonBackgroundColor: '#FFFFFF',
        buttonColorHover: '#18191c',
        rotateButton: 0,
        widthCustomButton: 35,
        heightCustomButton: 55,
        marginButton: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
        opacityButton: 1,
        colorShadow: "",
        boxShadowX: 0,
        boxShadowY: 0,
        boxShadowBlur: 0,
        boxShadowSpread: 0,
        animationButton: "none",
        durationEffectButton: 1,
        delayEffect: 0,
        interationButton: "forwards",
        buttonColorHover: "",
        borderStyleHover: "none",
        backgroundBorderColorHover: "",
        backgoroundBorderSizeHover: 0,
        opacityHover: 1,
        rotateHover: 0,
      },
      type3: {
        buttonColor: '#FFFFFF',
        backgroundBorderColorButton: '#FFFFFF',
        borderStyleButton: 'solid',
        borderRadiusButton:{
          top: '50px',
          right: '50px',
          bottom:'50px',
          left: '50px',
        },
        backgroundBorderSizeButton: 1,
        buttonBackgroundColor: '#18191c',
        buttonColorHover: '#18191c',
        paddingButton: {
          top: '8px',
          right: '12px',
          bottom: '8px',
          left: '12px',
        },
        borderStyleHover: "solid",
        backgroundBorderColorHover: "#18191c",
        backgroundBorderSizeHover: 1,
        buttonBackgroundColorHover: "#FFFFFF",
      },
      type4: {
        buttonColor: '#18191c',
        backgroundBorderColorButton: '#18191c',
        borderStyleButton: 'solid',
        borderRadiusButton:{
          top: '50px',
          right: '50px',
          bottom:'50px',
          left: '50px',
        },
        backgroundBorderSizeButton: 1,
        buttonBackgroundColor: '#FFFFFF',
        buttonColorHover: '#FFFFFF',
        paddingButton: {
          top: '8px',
          right: '12px',
          bottom: '8px',
          left: '12px',
        },
        borderStyleHover: "solid",
        backgroundBorderColorHover: "#FFFFFF",
        backgroundBorderSizeHover: 1,
        buttonBackgroundColorHover: "#18191c",
      },
      type5: {
        buttonColor: '#FFFFFF',
        backgroundBorderColorButton: '#FFFFFF',
        borderStyleButton: 'solid',
        borderRadiusButton:{
          top: 0,
          right: 0,
          bottom:0,
          left: 0,
        },
        backgroundBorderSizeButton: 1,
        buttonBackgroundColor: '#18191c',
        buttonColorHover: '#18191c',
        paddingButton: {
          top: '8px',
          right: '12px',
          bottom: '8px',
          left: '12px',
        },
        borderStyleHover: "solid",
        backgroundBorderColorHover: "#18191c",
        backgroundBorderSizeHover: 1,
        buttonBackgroundColorHover: "#FFFFFF",
      },
      type6: {
        buttonColor: '#18191c',
        backgroundBorderColorButton: '#18191c',
        borderStyleButton: 'solid',
        borderRadiusButton:{
          top: 0,
          right: 0,
          bottom:0,
          left: 0,
        },
        backgroundBorderSizeButton: 1,
        buttonBackgroundColor: '#FFFFFF',
        buttonColorHover: '#FFFFFF',
        paddingButton: {
          top: '8px',
          right: '12px',
          bottom: '8px',
          left: '12px',
        },
        borderStyleHover: "solid",
        backgroundBorderColorHover: "#FFFFFF",
        backgroundBorderSizeHover: 1,
        buttonBackgroundColorHover: "#18191c",
      },
      type7: {
        buttonColor: '#FFFFFF',
        backgroundBorderColorButton: '#FFFFFF',
        borderStyleButton: 'solid',
        borderRadiusButton:{
          top: '35px',
          right: 0,
          bottom:'35px',
          left: 0,
        },
        backgroundBorderSizeButton: 1,
        buttonBackgroundColor: '#18191c',
        buttonColorHover: '#18191c',
        paddingButton: {
          top: '10px',
          right: '20px',
          bottom: '10px',
          left: '20px',
        },
        borderStyleHover: "solid",
        backgroundBorderColorHover: "#18191c",
        backgroundBorderSizeHover: 1,
        buttonBackgroundColorHover: "#FFFFFF",
      },
      type8: {
        buttonColor: '#18191c',
        backgroundBorderColorButton: '#18191c',
        borderStyleButton: 'solid',
        borderRadiusButton:{
          top: '35px',
          right: 0,
          bottom:'35px',
          left: 0,
        },
        backgroundBorderSizeButton: 1,
        buttonBackgroundColor: '#FFFFFF',
        buttonColorHover: '#FFFFFF',
        paddingButton: {
          top: '10px',
          right: '20px',
          bottom: '10px',
          left: '20px',
        },
        borderStyleHover: "solid",
        backgroundBorderColorHover: "#FFFFFF",
        backgroundBorderSizeHover: 1,
        buttonBackgroundColorHover: "#18191c",
      },


     
      // Aggiungi altri tipi di bottoni se necessario
    };
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, index) =>
              index ===  elementIndex
                ? {
                    ...element,
                    innerElements: [
                      ...(element.innerElements || []),
                      {
                        type: 'button',
                        button:__(' Click Here', 'cocoblocks'),
                        buttonType: buttonType,
                        desktop: { x: 0, y: 0 },
                        tablet: { x: 0, y: 0 },
                        mobile: { x: 0, y: 0 },
                        ...defaultValues[buttonType], 
                        enableDesktopButton: true,
                        enableTabletButton: true,
                        enableMobileButton: true,
                        buttonLink: "none",
                        linkUrlButton: "",
                        linkTargetButton: "_self",
                        linkRelButton: "",
                        scrollToIdButton: "",
                        parallaxButton: 0,
                        parallaxButtonY: 0,
                        parallaxButtonScale: 1,
                        parallaxButtonOpacity: 1,
                        parallaxButtonDuration: 100,
                        widthButton:"auto",
                        zIndexButton: 1,
                        delayHide:false,
                        delaySeconds:2,
                        delayTransition: 0.5,
                        fontFamilyButton: "Arial",
                        fontSizeButton: 16,
                        fontSizeButtonTablet: 16,
                        fontSizeButtonMobile: 16,
                        lineHeightButton: 1.5,
                        letterSpacingButton: 0,
                        widthCustomButton:35,
                        marginButton: {
                          top: 0,
                          right: 0,
                          bottom: 0,
                          left: 0,
                        },
                        opacityButton: 1,
                        colorShadow: "",
                        boxShadowX: 0,
                        boxShadowY: 0,
                        boxShadowBlur: 0,
                        boxShadowSpread: 0,
                        animationButton: "none",
                        durationEffectButton: 1,
                        delayEffect: 0,
                        interationButton: "forwards",
                        opacityHover: 1,
                        rotateHover: 0,
                        durationEffectHover:.2,
                        rotateButton: 0,
                        icoPositionButton: "after",
                        iconColor: "#000000",
                        sizeIcon: 16,
                        icoAligItemButton: "center",
                        gapIcon: 5,
                        rotateIcon: 0,
                        iconAnimationDuration:0.5,
                        iconAnimation: "none",
                        rotateIconHover: 0,
                        iconColorHover: "#000000",
                        iconShowHover:"icon-show-always-inner",
                        iconHideShowHover:"icon-hide-opacity-inner",
                        delayHide:false,
                        delaySeconds:2,
                        delayTransition: 0.5,
                        animationHoverIcon: "none",
                        durationEffectHoverIcon: 0.6,
                        translateEffectHoverIcon: 15,
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


  // Add Icon inside block
  const addSlideIconDiv = (slideId, divIndex) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, index) =>
              index === divIndex
                ? {
                    ...element,
                    innerElements: [
                      ...(element.innerElements || []),
                      {
                        type: "icon", 
                        content: "",
                        widthTitleBlock: "auto",
                        widthCustomTitleBlock: 100,
                        textAlign: "center",
                        elementTitle: "h4",
                        fontSize: 16,
                        fontSizeTablet: 16,
                        fontSizeMobile: 16,
                        fontStyle: "",
                        fontFamilyTitleBlock: "",
                        fontWeightTitleBlock: "",
                        lineHeight: 1.2,
                        letterSpacingTitleBlock: 0,
                        textColor: innerTextColorDefault,
                        paddingTitleBlock: {
                          top: "0",
                          right: "0",
                          bottom: "0",
                          left: "0",
                        },
                        marginTitle: {
                          top: "0",
                          right: "0",
                          bottom: "0",
                          left: "0",
                        },
                        borderStyle: "none",
                        backgroundBorderSize: 0,
                        backgroundBorderRadius: 0,
                        backgroundBorderColor: "",
                        rotate: 0,
                        opacity: 1,
                        textWriteMode: "horizontal-tb",
                        textOrientation: "initial",
                        animation: "none",
                        durationEffect: 1,
                        delayEffect: 0,
                        durationEffectOdd: 1,
                        durationEffectEven: 1,
                        interation: 1,
                        speedEffect: 100,
                        pauseEffect: 0,
                        animationCount: "1",
                        widthCursor: 2,
                        animationCursor: 1,
                        cursorColor: innerTextColorDefault,
                        gradinetColorOne: "",
                        gradinetColorTwo: "",
                        gradinetColorThree: "",
                        gradinetColorFour: "",
                        decoration: "none",
                        underlineColor: innerTextColorDefault,
                        underlinePadding: 0,
                        underlineVertical: 0,
                        underlineHorizontal: 0,
                        underlineWidth: 20,
                        underlineHeight: 3,
                        underlineAnimation: "none",
                        underlineAnimationFrom: 5,
                        underlineAnimationTo: 50,
                        underlineFromSizeNew: 5,
                        underlineToSizeNew: 5,
                        underlineAnimationTransition: 0.5,
                        textColorHover: innerTextColorDefault,
                        borderStyleHover: "none",
                        backgroundBorderColorHover: "",
                        backgroundBorderSizeHover: 0,
                        opacityHover: 1,
                        rotateHover: 0,
                        animationHover: "none",
                        durationEffectHover: 1,
                        effectHoverColorHover: innerTextColorDefault,
                        translateEffectHover: 0,
                        parallaxTitle: 0,
                        parallaxTitleY: 0,
                        parallaxTitleScale: 1,
                        parallaxTitleOpacity: 1,
                        parallaxTitleDuration: 100,
                        textLink: "none",
                        linkUrl: "",
                        linkTarget: "_self",
                        linkRel: "",
                        scrollToId: "",
                        enableDesktopTitle: true,
                        enableTabletTitle: true,
                        enableMobileTitle: true,
                        iteration: "forwards",
                        positionInnerText:"static",
                        verticalPositionInnerText: 0,
                        horizontalPositionInnerText: 0,
                        delayHide: false,
                        delaySeconds: 1,
                        delayTransition: 0,
                        zIndexTitle: 1,
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

    // Open panel
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
      setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    const truncateText = (text, maxLength) => {
      if (text.length <= maxLength) {
        return text;
      }
      return text.substring(0, maxLength) + ' ...';
    };

  const [activeSection, setActiveSection] = useState("content");
  const [activeSectionImage, setActiveSectionImage] = useState("content");
  
  const moveInnerElementUp = (slideIndex, elementIndex, innerIndex, slides, setAttributes) => {
    console.log(`Moving up: slideIndex=${slideIndex}, elementIndex=${elementIndex}, innerIndex=${innerIndex}`);
    const element = slides[slideIndex].elements[elementIndex];
    if (!element.innerElements || innerIndex === 0) return; // Non può spostare il primo elemento su
    const newInnerElements = [...element.innerElements];
    [newInnerElements[innerIndex - 1], newInnerElements[innerIndex]] = [newInnerElements[innerIndex], newInnerElements[innerIndex - 1]];
    element.innerElements = newInnerElements;
    console.log('Updated inner elements:', newInnerElements);
    setAttributes({ slides: [...slides] });
  };
  
  const moveInnerElementDown = (slideIndex, elementIndex, innerIndex, slides, setAttributes) => {
    console.log(`Moving down: slideIndex=${slideIndex}, elementIndex=${elementIndex}, innerIndex=${innerIndex}`);
    const element = slides[slideIndex].elements[elementIndex];
    if (!element.innerElements || innerIndex === element.innerElements.length - 1) return; // Non può spostare l'ultimo elemento giù
    const newInnerElements = [...element.innerElements];
    [newInnerElements[innerIndex + 1], newInnerElements[innerIndex]] = [newInnerElements[innerIndex], newInnerElements[innerIndex + 1]];
    element.innerElements = newInnerElements;
    console.log('Updated inner elements:', newInnerElements);
    setAttributes({ slides: [...slides] });
  };

  const isSingleInnerElement = element.innerElements.length === 1;

  const [isModalOpenButton, setIsModalOpenButton] = useState(false);
  const [selectedSlideId, setSelectedSlideId] = useState(null);
  const [selectedElementIndex, setSelectedElementIndex] = useState(null);
  
  const openModalButton = (slideId, elementIndex) => {
    setSelectedSlideId(slideId);
    setSelectedElementIndex(elementIndex);
    setIsModalOpenButton(true);
  };
  
  const closeModalButton = () => {
    setIsModalOpenButton(false);
    setSelectedSlideId(null);
    setSelectedElementIndex(null);
  };
  
  const handleButtonTypeSelect = (slideId, elementIndex, type) => {
    addSlideButtonDiv(slideId, elementIndex, type); // Passa slideId, elementIndex e il tipo selezionato
    closeModalButton();
  };

  return (
    <>
      <div className="custom-block-added">
        <div className="divider-controls"></div>
        <div className="title-block-added">
          <div className="title-element">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="M280-280h160v-160H280v160Zm240 0h160v-160H520v160ZM280-520h160v-160H280v160Zm240 0h160v-160H520v160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
            </svg>
            <h2>{element.nameGroup ? truncateText(element.nameGroup, 7) : __("Group", "slider")}</h2>
          </div>
          <div className="title-element">
          <Button
              onClick={() => removeSlideDiv(slide.id, elementIndex)}
              isDestructive
              icon={trash}
              label={__("Remove group", "cocoblocks")}
              className="button-remove-element"
            />
          <Tooltip  placement="top" text={isOpen ? __('Close Controls','slider') : __('Open Controls','slider')}>
        <button onClick={handleToggle} className="button-open-control-element">
          {isOpen ? (
             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed" style={{marginTop:'4px'}}><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed" style={{marginTop:'4px'}}><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
          )}
        </button>
      </Tooltip>
          </div>
        </div>
        {isOpen && ( 
        <>
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
            <div className="content-section-panel" style={{ padding: "0" }}>
            <div className="custom-select select-text-control">
              <TextControl
                label={
                  <>
                    {" "}
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M560-440h200v-80H560v80Zm0-120h200v-80H560v80ZM200-320h320v-22q0-45-44-71.5T360-440q-72 0-116 26.5T200-342v22Zm160-160q33 0 56.5-23.5T440-560q0-33-23.5-56.5T360-640q-33 0-56.5 23.5T280-560q0 33 23.5 56.5T360-480ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"/></svg>
                    {__("Add name group", "cocoblocks")}
                  </>
                }
                value={element.nameGroup}
                onChange={(value) =>
                  updateNameGroup(slide.id, elementIndex, value)
                }
              />
              <Tooltip
                  placement="top"
                  style={{
                    padding: "10px",
                    maxWidth: "300px",
                    borderRadius: "4px",
                  }}
                  text={__(
                    "Useful if you have many groups inside the slide!",
                    "cocoblocks"
                  )}
                >
                  <Icon
                    icon={info}
                    className="tooltip-icon"
                    style={{ top: "4px" }}
                  />
                </Tooltip>
            </div>
            </div>
            <div
              className="button-add-element"
              style={{ paddingBottom: "18px" }}
            >
              <Button
                onClick={() => addSlideTitleDiv(slide.id, elementIndex)}
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
                onClick={() => addSlideImageDiv(slide.id, elementIndex)} // Assicurati di passare elementIndex o divIndex
                label={__("Add inner image", "slide")}
              >
                <span class="dashicons dashicons-format-image"></span>
              </Button>
              <Button
                onClick={() => openModalButton(slide.id, elementIndex)} // Passa slide.id e elementIndex
                label={__("Add inner button", "slide")}
              >
                <Icon icon={button} />
              </Button>
              {isModalOpenButton && (
              <ButtonTypeInnerSelectionModal
                slideId={slide.id} 
                elementIndex={selectedElementIndex}
                onClose={closeModalButton}
                onSelect={handleButtonTypeSelect} 
              />
            )}
             <Button
                onClick={() => addSlideIconDiv(slide.id, elementIndex)}
                label={__("Add inner icon", "slide")}
              >
                <Icon icon={button} />
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
            <div className="content-section-panel" style={{ padding: "0" }}>
              <div className="custom-select color">
                <ColorOptionsPanel
                  colorNormal={element.backgroundColor}
                  setColorNormal={(newColor) =>
                    updateDivBackgroundColor(slide.id, elementIndex, newColor)
                  }
                  buttonTitle={__("Background Color", "cocoblocks")}
                  buttonIcon="admin-customizer"
                />
              </div>
            </div>
            <div className="content-title-custom-panel intermedy">
              <h2 className="title-custom-panel">
                {__("Layout", "cocoblocks")}
              </h2>
            </div>
            <div className="content-section-panel" style={{ padding: "0" }}>
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
                      {__("Content direction", "cocoblocks")}
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
                    updateSlideLayoutDiv(slide.id, elementIndex, newLayoutDiv)
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
                      {__("Gap between items", "cocoblocks")}
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e8eaed"
                      >
                        <path d="M280-320 120-480l160-160 57 56-64 64h414l-63-64 56-56 160 160-160 160-56-56 63-64H273l63 64-56 56Z" />
                      </svg>
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
              {element.contentWidthDiv === "custom" && (
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
                      {__("Custom width", "cocoblocks")}
                    </>
                  }
                  value={element.customContentWidthDiv}
                  onChange={(value) =>
                    updateCustomContentWidthDiv(slide.id, elementIndex, value)
                  }
                  min={0}
                  max={100}
                  step={1}
                />
              </div>
              )}
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
                        <path d="M480-120 320-280l56-56 64 63v-414l-64 63-56-56 160-160 160 160-56 57-64-64v414l64-63 56 56-160 160Z" />
                      </svg>
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
              {element.contentHeightDiv === "custom" && (
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
                        <path d="M480-120 320-280l56-56 64 63v-414l-64 63-56-56 160-160 160 160-56 57-64-64v414l64-63 56 56-160 160Z" />
                      </svg>
                      {__("Custom height", "cocoblocks")}
                    </>
                  }
                  value={element.customContentHeightDiv}
                  onChange={(value) =>
                    updateCustomContentHeightDiv(slide.id, elementIndex, value)
                  }
                  min={0}
                  max={100}
                  step={1}
                />
              </div>
              )}
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
                        <path d="M120-280v-400h720v160h-80v-80H200v240h360v80H120Zm80-80v-240 240Zm664 200L720-303v123h-80v-260h260v80H776l144 144-56 56Z" />
                      </svg>
                      {__("Element html", "cocoblocks")}
                    </>
                  }
                  value={element.elementDiv}
                  onChange={(value) =>
                    updateElementDiv(slide.id, elementIndex, value)
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
            <div className="content-section-panel" style={{ padding: "0" }}>
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
                      {__("Content vertical padding", "cocoblocks")}
                    </>
                  }
                  value={element.backgroundVerticalPaddingDiv}
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
                      {__("Content horizontal padding", "cocoblocks")}
                    </>
                  }
                  value={element.backgroundHorizontalPaddingDiv}
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
                        <path d="M280-120v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80ZM120-120v-720h720v80H200v640h-80Z" />
                      </svg>
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
                            style={{
                              marginRight: "4px",
                              marginLeft: "-2px",
                              marginBottom: "-4px",
                            }}
                          >
                            <path d="M216-216h528v-528H216v528Zm-72 72v-672h672v672H144Zm150-300v-72h72v72h-72Zm150 150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm150 150v-72h72v72h-72Z" />
                          </svg>
                          {__("Border radius", "cocoblocks")}
                        </>
                      }
                      value={element.backgroundBorderRadiusDiv}
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
                </>
              )}
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
            {slide.developerMode && (
            <>
          <div className="content-title-custom-panel intermedy">
            <h2 className="title-custom-panel">
              {__("LEVEL", "cocoblocks")}
            </h2>
          </div>
          <div className="content-section-panel" style={{ padding: "0" }}>
            <div className="custom-select">
              <RangeControl
                label={
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-80q-33 0-56.5-23.5T400-160v-320q0-33 23.5-56.5T480-560h320q33 0 56.5 23.5T880-480v320q0 33-23.5 56.5T800-80H480Zm0-80h320v-320H480v320Zm-240-80v-400q0-33 23.5-56.5T320-720h400v80H320v400h-80ZM80-400v-400q0-33 23.5-56.5T160-880h400v80H160v400H80Zm400 240v-320 320Z"/></svg>
                    {__("Z-index", "cocoblocks")}
                  </>
                }
                value={element.zIndexDiv}
                onChange={(value) =>
                  updateZindexDiv(slide.id, elementIndex, value)
                }
                min={0}
                max={999}
                step={1}
              />
            </div>
          </div>
          </>
          )}
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
                    {
                      label: "Rotate In Bottom",
                      value: "rotate-in-bottom-div",
                    },
                    {
                      label: "Rotate Continuos",
                      value: "rotate-continuous-div",
                    },
                    { label: "Bounce in", value: "bounce-effect-div" },
                    {
                      label: "Bounce in Left",
                      value: "bounce-left-effect-div",
                    },
                    {
                      label: "Bounce in Right",
                      value: "bounce-right-effect-div",
                    },
                    { label: "Bounce in Top", value: "bounce-top-effect-div" },
                    {
                      label: "Bounce in Bottom",
                      value: "bounce-bottom-effect-div",
                    },
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
                      value={element.durationEffectDiv}
                      onChange={(value) =>
                        updateDurationEffectDiv(slide.id, elementIndex, value)
                      }
                      min={0.1}
                      max={15}
                      step={0.1}
                    />
                  </div>
                  {![
                "bounce-effect-div",
                "bounce-left-effect-div",
                "bounce-right-effect-div",
                "bounce-top-effect-div",
                "bounce-bottom-effect-div",
                "rotate-continuous-div",
                "wiggle-div",
                "swing-div",
                "rubber-band-div",
              ].includes(element.animationDiv) && (
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
                  value={element.delayEffectDiv}
                  onChange={(newDelayEffect) =>
                    updateDelayEffectDiv(slide.id, elementIndex, newDelayEffect)
                  }
                  min={0}
                  max={10}
                  step={0.1}
                />
              </div>
            )}
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
                    <Tooltip text={playStateDiv === "play" ? "Play" : "Repeat"}>
                      <Button
                        variant={playStateDiv === "play"}
                        onClick={togglePlayState}
                        icon={
                          playStateDiv === "play" ? (
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
                </>
              )}
            </div>
            <div className="content-title-custom-panel intermedy">
            <h2 className="title-custom-panel">
              {__("Hide", "cocoblocks")}
            </h2>
          </div>
          <div className="content-section-panel" style={{ padding: "0" }}>
             <div className="custom-select">
              <ToggleControl
                label={
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M610-760q-21 0-35.5-14.5T560-810q0-21 14.5-35.5T610-860q21 0 35.5 14.5T660-810q0 21-14.5 35.5T610-760Zm0 660q-21 0-35.5-14.5T560-150q0-21 14.5-35.5T610-200q21 0 35.5 14.5T660-150q0 21-14.5 35.5T610-100Zm160-520q-21 0-35.5-14.5T720-670q0-21 14.5-35.5T770-720q21 0 35.5 14.5T820-670q0 21-14.5 35.5T770-620Zm0 380q-21 0-35.5-14.5T720-290q0-21 14.5-35.5T770-340q21 0 35.5 14.5T820-290q0 21-14.5 35.5T770-240Zm60-190q-21 0-35.5-14.5T780-480q0-21 14.5-35.5T830-530q21 0 35.5 14.5T880-480q0 21-14.5 35.5T830-430ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880v80q-134 0-227 93t-93 227q0 134 93 227t227 93v80Zm0-320q-33 0-56.5-23.5T400-480q0-5 .5-10.5T403-501l-83-83 56-56 83 83q4-1 21-3 33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Z"/></svg>
                    {__("Delay hide", "cocoblocks")}
                  </>
                }
                checked={element.delayHide}
                onChange={(value) =>
                  updateDelayHide(
                    slide.id,
                    elementIndex,
                    value
                  )
                }
              />
            </div>
            {element.delayHide && (
            <>
            <div className="custom-select">
              <RangeControl
                label={
                  <>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M360-270h160q33 0 56.5-23.5T600-350v-50q0-33-23.5-56.5T520-480h-80v-50h160v-80H360v210h160v50H360v80Zm0-570v-80h240v80H360ZM480-80q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z"/></svg>
                    {__("Seconds", "cocoblocks")}
                  </>
                }
                value={element.delaySeconds}
                onChange={(value) =>
                  updateDelaySeconds(
                    slide.id,
                    elementIndex,
                    value
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
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z"/></svg>
                    {__("Transition", "cocoblocks")}
                  </>
                }
                value={element.delayTransition}
                onChange={(value) =>
                  updateDelayTransition(
                    slide.id,
                    elementIndex,
                    value
                  )
                }
                min={0}
                max={3}
                step={.1}
              />
            </div>
            </>
            )}
          </div>
          </>
        )}
        {activeSectionBlock === "hover" && (
          <>
            <DivControlsHover
              slide={slide}
              slides={slides}
              element={element}
              elementIndex={elementIndex}
              setAttributes={setAttributes}
            />
          </>
        )}
        {activeSectionBlock === "actions" && (
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
                  value={element.textLinkDiv}
                  options={[
                    { label: "None", value: "none" },
                    { label: "Link", value: "link" },
                    { label: "Scroll Below Slider", value: "scroll-below" },
                    { label: "Scroll to ID Element", value: "scroll-to-id" },
                  ]}
                  onChange={(value) =>
                    updateTextLinkDiv(slide.id, elementIndex, value)
                  }
                />
              </div>
              {element.textLinkDiv === "link" && (
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
                      value={element.linkUrlDiv}
                      onChange={(value) =>
                        updateLinkUrlDiv(slide.id, elementIndex, value)
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
                      value={element.linkTargetDiv}
                      options={[
                        { label: "Same Window", value: "_self" },
                        { label: "New Window", value: "_blank" },
                      ]}
                      onChange={(value) =>
                        updateLinkTargetDiv(slide.id, elementIndex, value)
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
                      value={element.linkRelDiv}
                      options={[
                        { label: "Follow Link", value: "follow" },
                        { label: "No Follow", value: "nofollow" },
                      ]}
                      onChange={(value) =>
                        updateLinkRelDiv(slide.id, elementIndex, value)
                      }
                    />
                  </div>
                </>
              )}
              {element.textLinkDiv === "scroll-to-id" && (
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
                    value={element.scrollToIdDiv}
                    onChange={(value) =>
                      updateScrollToIdDiv(slide.id, elementIndex, value)
                    }
                  />
                </div>
              )}
            </div>
          </>
        )}
        {activeSectionBlock === "visibility" && (
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
                  checked={element.enableDesktopDiv}
                  onChange={(value) =>
                    updateEnableDesktopDiv(slide.id, elementIndex, value)
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
                  checked={element.enableTabletDiv}
                  onChange={(value) =>
                    updateEnableTabletDiv(slide.id, elementIndex, value)
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
                  checked={element.enableMobileDiv}
                  onChange={(value) =>
                    updateEnableMobileDiv(slide.id, elementIndex, value)
                  }
                />
              </div>
            </div>
          </>
        )}
        {activeSectionBlock === "parallax" && (
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
                      value={element.parallaxDiv}
                      onChange={(newParallaxDiv) =>
                        updateParallaxDiv(
                          slide.id,
                          elementIndex,
                          newParallaxDiv
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
                      value={element.parallaxDivY}
                      onChange={(newParallaxDivY) =>
                        updateParallaxDivY(
                          slide.id,
                          elementIndex,
                          newParallaxDivY
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
                      value={element.parallaxDivScale}
                      onChange={(newParallaxDivScale) =>
                        updateParallaxDivScale(
                          slide.id,
                          elementIndex,
                          newParallaxDivScale
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
                      value={element.parallaxDivOpacity}
                      onChange={(newParallaxDivOpacity) =>
                        updateParallaxDivOpacity(
                          slide.id,
                          elementIndex,
                          newParallaxDivOpacity
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
                      value={element.parallaxDivDuration}
                      onChange={(newParallaxDivDuration) =>
                        updateParallaxDivDuration(
                          slide.id,
                          elementIndex,
                          newParallaxDivDuration
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
        {activeSectionBlock === "hide-div-editor" && (
        <>
        <div
          className="content-title-custom-panel intermedy"
          style={{
            marginTop: "-18px",
          }}
        >
          <h2 className="title-custom-panel">
            {__("Hide in editor", "cocoblocks")}
          </h2>
        </div>
        <div className="content-section-panel" style={{ padding: "0" }}>
          <div className="custom-select button-hide-element" style={{textAlign:'center'}}>
        <Button
          variant={hideDiv === "hide"}
          onClick={toggleHideDiv}
          icon={
            hideDiv === "hide" ? (
              <svg style={{fill:'var(--light-color)'}} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>
            ) : (
              <svg style={{fill:'var(--light-color)'}} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"/></svg>
            )
          }
        />
        </div>
        </div>        
        </>
      )}

{element.innerElements &&
  element.innerElements.map((innerElement, innerIndex) => {
    if (innerElement.type === "text") {
      return (
        <div key={innerIndex}>
           <div className={"button-move-element-div"}>
                  <Tooltip text={__("Move before", "cocoblocks")}>
                    <Button
                      onClick={() => moveInnerElementUp(slides.indexOf(slide), elementIndex, innerIndex, slides, setAttributes)}
                      size="small"
                      disabled={innerIndex === 0 || isSingleInnerElement}
                      label={__("Move before", "cocoblocks")}
                    >
                      ↑
                    </Button>
                  </Tooltip>
                  <Tooltip text={__("Move after", "cocoblocks")}>
                    <Button
                      onClick={() => moveInnerElementDown(slides.indexOf(slide), elementIndex, innerIndex, slides, setAttributes)}
                      size="small"
                      disabled={innerIndex === element.innerElements.length - 1 || isSingleInnerElement}
                      label={__("Move after", "cocoblocks")}
                    >
                      ↓
                    </Button>
                  </Tooltip>
                </div>
          <TextControlsBlock
            slide={slide}
            slides={slides}
            textDiv={innerElement} // Usa `innerElement` invece di `textDiv`
            element={element}
            textIndex={innerIndex}
            elementIndex={elementIndex}
            setAttributes={setAttributes}
            setActiveSection={setActiveSection}
            activeSection={activeSection}
            parallax={parallax}
            device={device}
            handleDesktopClick={handleDesktopClick}
            handleTabletClick={handleTabletClick}
            handleMobileClick={handleMobileClick}
            showOtherButtons={showOtherButtons}
          />
          
              </div>
      );
    }
    return null;
  })}
         {element.innerElements &&
        element.innerElements.map((innerElement, imageIndex) => {
            if (innerElement.type === "image") {
              return (
            <div key={imageIndex}>
               <div className={"button-move-element-div"}>
                  <Tooltip text={__("Move before", "cocoblocks")}>
                    <Button
                      onClick={() => moveInnerElementUp(slides.indexOf(slide), elementIndex, imageIndex, slides, setAttributes)}
                      size="small"
                      disabled={imageIndex === 0 || isSingleInnerElement}
                      label={__("Move before", "cocoblocks")}
                    >
                      ↑
                    </Button>
                  </Tooltip>
                  <Tooltip text={__("Move after", "cocoblocks")}>
                    <Button
                      onClick={() => moveInnerElementDown(slides.indexOf(slide), elementIndex, imageIndex, slides, setAttributes)}
                      size="small"
                      disabled={imageIndex === element.innerElements.length - 1 || isSingleInnerElement}
                      label={__("Move after", "cocoblocks")}
                    >
                      ↓
                    </Button>
                  </Tooltip>
                </div>
              <ImageControlsBlock
                slide={slide}
                slides={slides}
                element={element}
                divIndex={elementIndex} 
                elementIndex={elementIndex}
                imageDiv={innerElement}
                imageIndex={imageIndex}
                setAttributes={setAttributes}
                setActiveSectionImage={setActiveSectionImage}
                activeSectionImage={activeSectionImage}
                parallax={parallax}
              />
            </div>
          );
        }
        return null;
      })}

{element.innerElements &&
        element.innerElements.map((innerElement, innerIndex) => {
            if (innerElement.type === "button") {
              return (
            <div key={innerIndex}>
               <div className={"button-move-element-div"}>
                  <Tooltip text={__("Move before", "cocoblocks")}>
                    <Button
                      onClick={() => moveInnerElementUp(slides.indexOf(slide), elementIndex, innerIndex, slides, setAttributes)}
                      size="small"
                      disabled={innerIndex === 0 || isSingleInnerElement}
                      label={__("Move before", "cocoblocks")}
                    >
                      ↑
                    </Button>
                  </Tooltip>
                  <Tooltip text={__("Move after", "cocoblocks")}>
                    <Button
                      onClick={() => moveInnerElementDown(slides.indexOf(slide), elementIndex, innerIndex, slides, setAttributes)}
                      size="small"
                      disabled={innerIndex === element.innerElements.length - 1 || isSingleInnerElement}
                      label={__("Move after", "cocoblocks")}
                    >
                      ↓
                    </Button>
                  </Tooltip>
                </div>
                <ButtonControlsBlock
                  slide={slide}
                  slides={slides}
                  element={element}
                  divIndex={elementIndex} 
                  elementIndex={elementIndex}
                  buttonDiv={innerElement}
                  setAttributes={setAttributes}
                  buttonIndex={innerIndex}
                  setActiveSection={setActiveSection}
                  activeSection={activeSection}
                  parallax={parallax}
                  setSelectedIcon={setSelectedIcon}
                />
            </div>
          );
        }
        return null;
      })}

{element.innerElements &&
        element.innerElements.map((innerElement, innerIndex) => {
            if (innerElement.type === "icon") {
              return (
            <div key={innerIndex}>
               <div className={"button-move-element-div"}>
                  <Tooltip text={__("Move before", "cocoblocks")}>
                    <Button
                      onClick={() => moveInnerElementUp(slides.indexOf(slide), elementIndex, innerIndex, slides, setAttributes)}
                      size="small"
                      disabled={innerIndex === 0 || isSingleInnerElement}
                      label={__("Move before", "cocoblocks")}
                    >
                      ↑
                    </Button>
                  </Tooltip>
                  <Tooltip text={__("Move after", "cocoblocks")}>
                    <Button
                      onClick={() => moveInnerElementDown(slides.indexOf(slide), elementIndex, innerIndex, slides, setAttributes)}
                      size="small"
                      disabled={innerIndex === element.innerElements.length - 1 || isSingleInnerElement}
                      label={__("Move after", "cocoblocks")}
                    >
                      ↓
                    </Button>
                  </Tooltip>
                </div>
                <IconControlsInner
                  slide={slide}
                  slides={slides}
                  element={element}
                  divIndex={elementIndex} 
                  elementIndex={elementIndex}
                  iconDiv={innerElement}
                  setAttributes={setAttributes}
                  iconIndex={innerIndex}
                  setActiveSection={setActiveSection}
                  activeSection={activeSection}
                  parallax={parallax}
                  setSelectedIcon={setSelectedIcon}
                />
            </div>
          );
        }
        return null;
      })}




           </>
      )}
      </div>

    </>
  );
};

export default DivControls;
