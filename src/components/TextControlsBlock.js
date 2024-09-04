import React from "react";
import {
  Button,
  ButtonGroup,
  TextareaControl,
  SelectControl,
  RangeControl,
  Tooltip,
  __experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { trash } from "@wordpress/icons";
import { useState } from 'react';
import AlignmentControlThree from "./aligncontrol-three";
import ColorOptionsPanel from "./colorPanel";
import FontStyle from "./font-style";
import SectionSelector from "./sectionSelector";
import BoxShadowControlTextBlock from "./boxShadowTextBlock";

const TextControlsBlock = ({
  slide,
  textDiv,
  textIndex,
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
}) => {



  // Inizializza lo stato locale utilizzando element.playState
  const [playState, setPlayState] = useState(textDiv.playState || '');

  // Funzione per alternare il valore dello stato
  const togglePlayState = () => {
    const newState = playState === 'play' ? '' : 'play';
    setPlayState(newState);
    // Aggiorna element.playState piuttosto che attributes.playState
    textDiv.playState = newState;
    setAttributes({ elements: [...slides] }); // Oppure aggiorna la struttura dati appropriata
  };

  // Remove Text
  const removeSlideTitleBlock = (slideId, divIndex, textIndex) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerTextDivs: element.innerTextDivs.filter(
                      (textDiv, tIndex) => tIndex !== textIndex
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Text
  const updateSlideTitleBlock = (slideId, divIndex, textIndex, newTitle) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerTextDivs: element.innerTextDivs.map(
                      (textDiv, tIndex) =>
                        tIndex === textIndex
                          ? { ...textDiv, content: newTitle }
                          : textDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Width
  const updateWidthTitleBlock = (slideId, divIndex, textIndex, newWidthTitle) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
          ...slide,
          elements: slide.elements.map((element, i) =>
            element.type === "div" && i === divIndex
              ? {
                  ...element,
                  innerTextDivs: element.innerTextDivs.map(
                    (textDiv, tIndex) =>
                      tIndex === textIndex
                        ? { ...textDiv, widthTitleBlock: newWidthTitle }
                        : textDiv
                  ),
                }
              : element
          ),
        }
      : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Custom width
  const updateCustomWidthTitleBlock = (slideId, divIndex, textIndex, customWidth) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
    ? {
      ...slide,
      elements: slide.elements.map((element, i) =>
        element.type === "div" && i === divIndex
          ? {
              ...element,
              innerTextDivs: element.innerTextDivs.map(
                (textDiv, tIndex) =>
                  tIndex === textIndex
                    ? { ...textDiv, widthCustomTitleBlock: customWidth }
                    : textDiv
              ),
            }
          : element
      ),
    }
  : slide

    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Text align
  const updateTextAlign = (slideId, divIndex, textIndex, align) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerTextDivs: element.innerTextDivs.map(
                      (textDiv, tIndex) =>
                        tIndex === textIndex
                          ? { ...textDiv, textAlign: align }
                          : textDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Text color
  const updateSlideTextColor = (slideId, divIndex, textIndex, color) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerTextDivs: element.innerTextDivs.map(
                      (textDiv, tIndex) =>
                        tIndex === textIndex
                          ? { ...textDiv, textColor: color }
                          : textDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Font Style
  const updateFontStyle = (slideId, divIndex, textIndex, styleType, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerTextDivs: element.innerTextDivs.map(
                      (textDiv, tIndex) =>
                        tIndex === textIndex
                          ? {
                              ...textDiv,
                              fontStyle: {
                                ...textDiv.fontStyle,
                                [styleType]: value,
                              },
                            }
                          : textDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Font Family
  const updateTextFamilyTitleBlock = (slideId, divIndex, textIndex, family) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerTextDivs: element.innerTextDivs.map(
                      (textDiv, tIndex) =>
                        tIndex === textIndex
                          ? { ...textDiv, fontFamilyTitleBlock: family }
                          : textDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Font Weight

  const  updateTextWeightTitleBlock = (slideId, divIndex, textIndex, weight) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerTextDivs: element.innerTextDivs.map(
                      (textDiv, tIndex) =>
                        tIndex === textIndex
                          ? { ...textDiv, fontWeightTitleBlock: weight }
                          : textDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update letter spacing
  const  updateLetterSpacingTitleBlock = (slideId, divIndex, textIndex, newLetterSpacing) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerTextDivs: element.innerTextDivs.map(
                      (textDiv, tIndex) =>
                        tIndex === textIndex
                          ? { ...textDiv, letterSpacingTitleBlock: newLetterSpacing }
                          : textDiv
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
  const updateRotate = (slideId, divIndex, textIndex, rotate) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerTextDivs: element.innerTextDivs.map(
                      (textDiv, tIndex) =>
                        tIndex === textIndex
                          ? { ...textDiv, rotate: rotate }
                          : textDiv
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
  const updateOpacity = (slideId, divIndex, textIndex, opacity) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerTextDivs: element.innerTextDivs.map(
                      (textDiv, tIndex) =>
                        tIndex === textIndex
                          ? { ...textDiv, opacity: opacity }
                          : textDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Element Title
  const updateElementTitle = (
    slideId,
    divIndex,
    textIndex,
    newElementTitle
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerTextDivs: element.innerTextDivs.map(
                      (textDiv, tIndex) =>
                        tIndex === textIndex
                          ? { ...textDiv, elementTitle: newElementTitle }
                          : textDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Font Size
  const updateFontSize = (slideId, divIndex, textIndex, newSize) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerTextDivs: element.innerTextDivs.map(
                      (textDiv, tIndex) =>
                        tIndex === textIndex
                          ? { ...textDiv, fontSize: newSize }
                          : textDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Font Size for Tablet
  const updateFontSizeTablet = (
    slideId,
    divIndex,
    textIndex,
    newSizeTablet
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerTextDivs: element.innerTextDivs.map(
                      (textDiv, tIndex) =>
                        tIndex === textIndex
                          ? { ...textDiv, fontSizeTablet: newSizeTablet }
                          : textDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Font Size for Mobile
  const updateFontSizeMobile = (
    slideId,
    divIndex,
    textIndex,
    newSizeMobile
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerTextDivs: element.innerTextDivs.map(
                      (textDiv, tIndex) =>
                        tIndex === textIndex
                          ? { ...textDiv, fontSizeMobile: newSizeMobile }
                          : textDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Line Height
  const updateLineHeight = (slideId, divIndex, textIndex, newLineHeight) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerTextDivs: element.innerTextDivs.map(
                      (textDiv, tIndex) =>
                        tIndex === textIndex
                          ? { ...textDiv, lineHeight: newLineHeight }
                          : textDiv
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
    const updateBorderStyle = (slideId, divIndex, textIndex, newBorderStyle) => {
      const updatedSlides = slides.map((slide) =>
        slide.id === slideId
          ? {
              ...slide,
              elements: slide.elements.map((element, i) =>
                element.type === "div" && i === divIndex
                  ? {
                      ...element,
                      innerTextDivs: element.innerTextDivs.map(
                        (textDiv, tIndex) =>
                          tIndex === textIndex
                            ? { ...textDiv, borderStyle: newBorderStyle }
                            : textDiv
                      ),
                    }
                  : element
              ),
            }
          : slide
      );
      setAttributes({ slides: updatedSlides });
    };

    // Update border color
  const updateTitleBackgroundBorderColor = (slideId, divIndex, textIndex, color) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerTextDivs: element.innerTextDivs.map(
                      (textDiv, tIndex) =>
                        tIndex === textIndex
                          ? { ...textDiv, backgroundBorderColor: color }
                          : textDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

      // Update border size
      const updateTitleBackgroundBorderSize = (slideId, divIndex, textIndex, newSize) => {
        const updatedSlides = slides.map((slide) =>
          slide.id === slideId
            ? {
                ...slide,
                elements: slide.elements.map((element, i) =>
                  element.type === "div" && i === divIndex
                    ? {
                        ...element,
                        innerTextDivs: element.innerTextDivs.map(
                          (textDiv, tIndex) =>
                            tIndex === textIndex
                              ? { ...textDiv, backgroundBorderSize: newSize }
                              : textDiv
                        ),
                      }
                    : element
                ),
              }
            : slide
        );
        setAttributes({ slides: updatedSlides });
      };

      // Update border radius
      const updateTitleBackgroundBorderRadius = (slideId, divIndex, textIndex, newRadius) => {
        const updatedSlides = slides.map((slide) =>
          slide.id === slideId
            ? {
                ...slide,
                elements: slide.elements.map((element, i) =>
                  element.type === "div" && i === divIndex
                    ? {
                        ...element,
                        innerTextDivs: element.innerTextDivs.map(
                          (textDiv, tIndex) =>
                            tIndex === textIndex
                              ? { ...textDiv, backgroundBorderRadius: newRadius }
                              : textDiv
                        ),
                      }
                    : element
                ),
              }
            : slide
        );
        setAttributes({ slides: updatedSlides });
      };


      // Update text write mode
      const updateTextWriteMode = (slideId, divIndex, textIndex, value) => {
        const updatedSlides = slides.map((slide) =>
          slide.id === slideId
            ? {
                ...slide,
                elements: slide.elements.map((element, i) =>
                  element.type === "div" && i === divIndex
                    ? {
                        ...element,
                        innerTextDivs: element.innerTextDivs.map(
                          (textDiv, tIndex) =>
                            tIndex === textIndex
                              ? { ...textDiv, textWriteMode: value }
                              : textDiv
                        ),
                      }
                    : element
                ),
              }
            : slide
        );
        setAttributes({ slides: updatedSlides });
      };

       // Update text orientation
       const updateTexOrientation = (slideId, divIndex, textIndex, value) => {
        const updatedSlides = slides.map((slide) =>
          slide.id === slideId
            ? {
                ...slide,
                elements: slide.elements.map((element, i) =>
                  element.type === "div" && i === divIndex
                    ? {
                        ...element,
                        innerTextDivs: element.innerTextDivs.map(
                          (textDiv, tIndex) =>
                            tIndex === textIndex
                              ? { ...textDiv, textOrientation: value }
                              : textDiv
                        ),
                      }
                    : element
                ),
              }
            : slide
        );
        setAttributes({ slides: updatedSlides });
      };
  

  // Update padding Title
  const updatenewPaddingtitleBlock = (
    slideId,
    divIndex,
    textIndex,
    newPaddingtitle
  ) => {
    const addUnit = (value, unit) => {
      if (typeof value === "string" && value.endsWith(unit)) {
        return value;
      }
      return `${value}${unit}`;
    };

    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerTextDivs: element.innerTextDivs.map(
                      (textDiv, tIndex) =>
                        tIndex === textIndex
                          ? {
                              ...textDiv,
                              paddingTitleBlock: {
                                top: addUnit(newPaddingtitle.top || "0", "px"),
                                right: addUnit(
                                  newPaddingtitle.right || "0",
                                  "px"
                                ),
                                bottom: addUnit(
                                  newPaddingtitle.bottom || "0",
                                  "px"
                                ),
                                left: addUnit(newPaddingtitle.left || "0", "px"),
                              },
                            }
                          : textDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Margin Title
  const updatenewMargintitle = (
    slideId,
    divIndex,
    textIndex,
    newMargintitle
  ) => {
    const addUnit = (value, unit) => {
      if (typeof value === "string" && value.endsWith(unit)) {
        return value;
      }
      return `${value}${unit}`;
    };

    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerTextDivs: element.innerTextDivs.map(
                      (textDiv, tIndex) =>
                        tIndex === textIndex
                          ? {
                              ...textDiv,
                              marginTitle: {
                                top: addUnit(newMargintitle.top || "0", "px"),
                                right: addUnit(
                                  newMargintitle.right || "0",
                                  "px"
                                ),
                                bottom: addUnit(
                                  newMargintitle.bottom || "0",
                                  "px"
                                ),
                                left: addUnit(newMargintitle.left || "0", "px"),
                              },
                            }
                          : textDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };


   // Update duration effect
   const updateDurationEffect = (slideId, divIndex, textIndex,  newDurationEffect) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerTextDivs: element.innerTextDivs.map(
                      (textDiv, tIndex) =>
                        tIndex === textIndex
                          ? { ...textDiv, durationEffect:  newDurationEffect }
                          : textDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update delay effect
  const updateDelayEffect = (slideId, divIndex, textIndex, newDelayEffect) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerTextDivs: element.innerTextDivs.map(
                      (textDiv, tIndex) =>
                        tIndex === textIndex
                          ? { ...textDiv, delayEffect:  newDelayEffect }
                          : textDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };


  // Update delay effect
  const updateDurationEffectOdd = (slideId, divIndex, textIndex, newDurationEffectOdd) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerTextDivs: element.innerTextDivs.map(
                      (textDiv, tIndex) =>
                        tIndex === textIndex
                          ? { ...textDiv, durationEffectOdd:  newDurationEffectOdd }
                          : textDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update letter even
  const updateDurationEffectEven = (slideId, divIndex, textIndex, newDurationEffectEven) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerTextDivs: element.innerTextDivs.map(
                      (textDiv, tIndex) =>
                        tIndex === textIndex
                          ? { ...textDiv, durationEffectEven:  newDurationEffectEven }
                          : textDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

    // Update iteration mode
    const updateInteration = (slideId, divIndex, textIndex, value) => {
      const updatedSlides = slides.map((slide) =>
        slide.id === slideId
          ? {
              ...slide,
              elements: slide.elements.map((element, i) =>
                element.type === "div" && i === divIndex
                  ? {
                      ...element,
                      innerTextDivs: element.innerTextDivs.map(
                        (textDiv, tIndex) =>
                          tIndex === textIndex
                            ? { ...textDiv, iteration:  value }
                            : textDiv
                      ),
                    }
                  : element
              ),
            }
          : slide
      );
      setAttributes({ slides: updatedSlides });
    };

     // Update speed effect
     const updateEffectSpeed = (slideId, divIndex, textIndex, newSpeedEffect) => {
      const updatedSlides = slides.map((slide) =>
        slide.id === slideId
          ? {
              ...slide,
              elements: slide.elements.map((element, i) =>
                element.type === "div" && i === divIndex
                  ? {
                      ...element,
                      innerTextDivs: element.innerTextDivs.map(
                        (textDiv, tIndex) =>
                          tIndex === textIndex
                            ? { ...textDiv, speedEffect:  newSpeedEffect }
                            : textDiv
                      ),
                    }
                  : element
              ),
            }
          : slide
      );
      setAttributes({ slides: updatedSlides });
    };

    // Update pause effect
    const updateEffectPause = (slideId, divIndex, textIndex, newPauseEffect) => {
      const updatedSlides = slides.map((slide) =>
        slide.id === slideId
          ? {
              ...slide,
              elements: slide.elements.map((element, i) =>
                element.type === "div" && i === divIndex
                  ? {
                      ...element,
                      innerTextDivs: element.innerTextDivs.map(
                        (textDiv, tIndex) =>
                          tIndex === textIndex
                            ? { ...textDiv, pauseEffect:  newPauseEffect }
                            : textDiv
                      ),
                    }
                  : element
              ),
            }
          : slide
      );
      setAttributes({ slides: updatedSlides });
    };

    // Update animation count
    const updateTextAnimationCount = (slideId, divIndex, textIndex, animationCount) => {
      const updatedSlides = slides.map((slide) =>
        slide.id === slideId
          ? {
              ...slide,
              elements: slide.elements.map((element, i) =>
                element.type === "div" && i === divIndex
                  ? {
                      ...element,
                      innerTextDivs: element.innerTextDivs.map(
                        (textDiv, tIndex) =>
                          tIndex === textIndex
                            ? { ...textDiv, animationCount:  animationCount }
                            : textDiv
                      ),
                    }
                  : element
              ),
            }
          : slide
      );
      setAttributes({ slides: updatedSlides });
    };

        // Update width cursor
        const updateWidthCursor = (slideId, divIndex, textIndex, newWidthCursor) => {
          const updatedSlides = slides.map((slide) =>
            slide.id === slideId
              ? {
                  ...slide,
                  elements: slide.elements.map((element, i) =>
                    element.type === "div" && i === divIndex
                      ? {
                          ...element,
                          innerTextDivs: element.innerTextDivs.map(
                            (textDiv, tIndex) =>
                              tIndex === textIndex
                                ? { ...textDiv, widthCursor:  newWidthCursor }
                                : textDiv
                          ),
                        }
                      : element
                  ),
                }
              : slide
          );
          setAttributes({ slides: updatedSlides });
        };

         // Update animation cursor
         const updateAnimationCursor = (slideId, divIndex, textIndex, newAnimationCursor) => {
          const updatedSlides = slides.map((slide) =>
            slide.id === slideId
              ? {
                  ...slide,
                  elements: slide.elements.map((element, i) =>
                    element.type === "div" && i === divIndex
                      ? {
                          ...element,
                          innerTextDivs: element.innerTextDivs.map(
                            (textDiv, tIndex) =>
                              tIndex === textIndex
                                ? { ...textDiv, animationCursor:  newAnimationCursor }
                                : textDiv
                          ),
                        }
                      : element
                  ),
                }
              : slide
          );
          setAttributes({ slides: updatedSlides });
        };

         // Update color cursor
         const updateCursorColor = (slideId, divIndex, textIndex, newCursorColor) => {
          const updatedSlides = slides.map((slide) =>
            slide.id === slideId
              ? {
                  ...slide,
                  elements: slide.elements.map((element, i) =>
                    element.type === "div" && i === divIndex
                      ? {
                          ...element,
                          innerTextDivs: element.innerTextDivs.map(
                            (textDiv, tIndex) =>
                              tIndex === textIndex
                                ? { ...textDiv, cursorColor:  newCursorColor }
                                : textDiv
                          ),
                        }
                      : element
                  ),
                }
              : slide
          );
          setAttributes({ slides: updatedSlides });
        };

          // Update color first
          const updateGradinetColorOne= (slideId, divIndex, textIndex, newGradinetColorOne) => {
            const updatedSlides = slides.map((slide) =>
              slide.id === slideId
                ? {
                    ...slide,
                    elements: slide.elements.map((element, i) =>
                      element.type === "div" && i === divIndex
                        ? {
                            ...element,
                            innerTextDivs: element.innerTextDivs.map(
                              (textDiv, tIndex) =>
                                tIndex === textIndex
                                  ? { ...textDiv, gradinetColorOne:  newGradinetColorOne }
                                  : textDiv
                            ),
                          }
                        : element
                    ),
                  }
                : slide
            );
            setAttributes({ slides: updatedSlides });
          };

           // Update color two
           const updateGradinetColorTwo= (slideId, divIndex, textIndex, newGradinetColorTwo) => {
            const updatedSlides = slides.map((slide) =>
              slide.id === slideId
                ? {
                    ...slide,
                    elements: slide.elements.map((element, i) =>
                      element.type === "div" && i === divIndex
                        ? {
                            ...element,
                            innerTextDivs: element.innerTextDivs.map(
                              (textDiv, tIndex) =>
                                tIndex === textIndex
                                  ? { ...textDiv, gradinetColorTwo:  newGradinetColorTwo }
                                  : textDiv
                            ),
                          }
                        : element
                    ),
                  }
                : slide
            );
            setAttributes({ slides: updatedSlides });
          };

           // Update color three
           const updateGradinetColorThree= (slideId, divIndex, textIndex, newGradinetColorThree) => {
            const updatedSlides = slides.map((slide) =>
              slide.id === slideId
                ? {
                    ...slide,
                    elements: slide.elements.map((element, i) =>
                      element.type === "div" && i === divIndex
                        ? {
                            ...element,
                            innerTextDivs: element.innerTextDivs.map(
                              (textDiv, tIndex) =>
                                tIndex === textIndex
                                  ? { ...textDiv, gradinetColorThree:  newGradinetColorThree }
                                  : textDiv
                            ),
                          }
                        : element
                    ),
                  }
                : slide
            );
            setAttributes({ slides: updatedSlides });
          };

           // Update color four
           const updateGradinetColorFour= (slideId, divIndex, textIndex, newGradinetColorFour) => {
            const updatedSlides = slides.map((slide) =>
              slide.id === slideId
                ? {
                    ...slide,
                    elements: slide.elements.map((element, i) =>
                      element.type === "div" && i === divIndex
                        ? {
                            ...element,
                            innerTextDivs: element.innerTextDivs.map(
                              (textDiv, tIndex) =>
                                tIndex === textIndex
                                  ? { ...textDiv, gradinetColorFour:  newGradinetColorFour }
                                  : textDiv
                            ),
                          }
                        : element
                    ),
                  }
                : slide
            );
            setAttributes({ slides: updatedSlides });
          };

           // Update color five
           const updateGradinetColorFive= (slideId, divIndex, textIndex, newGradinetColorFive) => {
            const updatedSlides = slides.map((slide) =>
              slide.id === slideId
                ? {
                    ...slide,
                    elements: slide.elements.map((element, i) =>
                      element.type === "div" && i === divIndex
                        ? {
                            ...element,
                            innerTextDivs: element.innerTextDivs.map(
                              (textDiv, tIndex) =>
                                tIndex === textIndex
                                  ? { ...textDiv, gradinetColorFive:  newGradinetColorFive }
                                  : textDiv
                            ),
                          }
                        : element
                    ),
                  }
                : slide
            );
            setAttributes({ slides: updatedSlides });
          };

            // Update decoration
            const updateDecoration= (slideId, divIndex, textIndex, value) => {
              const updatedSlides = slides.map((slide) =>
                slide.id === slideId
                  ? {
                      ...slide,
                      elements: slide.elements.map((element, i) =>
                        element.type === "div" && i === divIndex
                          ? {
                              ...element,
                              innerTextDivs: element.innerTextDivs.map(
                                (textDiv, tIndex) =>
                                  tIndex === textIndex
                                    ? { ...textDiv, decoration:  value }
                                    : textDiv
                              ),
                            }
                          : element
                      ),
                    }
                  : slide
              );
              setAttributes({ slides: updatedSlides });
            };

              // Update decoration color
              const updateUnderlineColor= (slideId, divIndex, textIndex, value) => {
                const updatedSlides = slides.map((slide) =>
                  slide.id === slideId
                    ? {
                        ...slide,
                        elements: slide.elements.map((element, i) =>
                          element.type === "div" && i === divIndex
                            ? {
                                ...element,
                                innerTextDivs: element.innerTextDivs.map(
                                  (textDiv, tIndex) =>
                                    tIndex === textIndex
                                      ? { ...textDiv, underlineColor:  value }
                                      : textDiv
                                ),
                              }
                            : element
                        ),
                      }
                    : slide
                );
                setAttributes({ slides: updatedSlides });
              };

                // Update decoration padding
                const updateUnderlinePadding= (slideId, divIndex, textIndex, value) => {
                  const updatedSlides = slides.map((slide) =>
                    slide.id === slideId
                      ? {
                          ...slide,
                          elements: slide.elements.map((element, i) =>
                            element.type === "div" && i === divIndex
                              ? {
                                  ...element,
                                  innerTextDivs: element.innerTextDivs.map(
                                    (textDiv, tIndex) =>
                                      tIndex === textIndex
                                        ? { ...textDiv, underlinePadding:  value }
                                        : textDiv
                                  ),
                                }
                              : element
                          ),
                        }
                      : slide
                  );
                  setAttributes({ slides: updatedSlides });
                };

                  // Update decoration vertical
              const updateUnderlineVertical= (slideId, divIndex, textIndex, value) => {
                const updatedSlides = slides.map((slide) =>
                  slide.id === slideId
                    ? {
                        ...slide,
                        elements: slide.elements.map((element, i) =>
                          element.type === "div" && i === divIndex
                            ? {
                                ...element,
                                innerTextDivs: element.innerTextDivs.map(
                                  (textDiv, tIndex) =>
                                    tIndex === textIndex
                                      ? { ...textDiv, underlineVertical:  value }
                                      : textDiv
                                ),
                              }
                            : element
                        ),
                      }
                    : slide
                );
                setAttributes({ slides: updatedSlides });
              };

                // Update decoration horizontal
                const updateUnderlineHorizontal= (slideId, divIndex, textIndex, value) => {
                  const updatedSlides = slides.map((slide) =>
                    slide.id === slideId
                      ? {
                          ...slide,
                          elements: slide.elements.map((element, i) =>
                            element.type === "div" && i === divIndex
                              ? {
                                  ...element,
                                  innerTextDivs: element.innerTextDivs.map(
                                    (textDiv, tIndex) =>
                                      tIndex === textIndex
                                        ? { ...textDiv, underlineHorizontal:  value }
                                        : textDiv
                                  ),
                                }
                              : element
                          ),
                        }
                      : slide
                  );
                  setAttributes({ slides: updatedSlides });
                };

              // Update decoration height
              const updateUnderlineHeight= (slideId, divIndex, textIndex, value) => {
                const updatedSlides = slides.map((slide) =>
                  slide.id === slideId
                    ? {
                        ...slide,
                        elements: slide.elements.map((element, i) =>
                          element.type === "div" && i === divIndex
                            ? {
                                ...element,
                                innerTextDivs: element.innerTextDivs.map(
                                  (textDiv, tIndex) =>
                                    tIndex === textIndex
                                      ? { ...textDiv, underlineHeight:  value }
                                      : textDiv
                                ),
                              }
                            : element
                        ),
                      }
                    : slide
                );
                setAttributes({ slides: updatedSlides });
              };

                // Update decoration width
                const updateUnderlineWidth= (slideId, divIndex, textIndex, value) => {
                  const updatedSlides = slides.map((slide) =>
                    slide.id === slideId
                      ? {
                          ...slide,
                          elements: slide.elements.map((element, i) =>
                            element.type === "div" && i === divIndex
                              ? {
                                  ...element,
                                  innerTextDivs: element.innerTextDivs.map(
                                    (textDiv, tIndex) =>
                                      tIndex === textIndex
                                        ? { ...textDiv, underlineWidth:  value }
                                        : textDiv
                                  ),
                                }
                              : element
                          ),
                        }
                      : slide
                  );
                  setAttributes({ slides: updatedSlides });
                };

                  // Update decoration animation
              const updateUnderlineAnimation= (slideId, divIndex, textIndex, value) => {
                const updatedSlides = slides.map((slide) =>
                  slide.id === slideId
                    ? {
                        ...slide,
                        elements: slide.elements.map((element, i) =>
                          element.type === "div" && i === divIndex
                            ? {
                                ...element,
                                innerTextDivs: element.innerTextDivs.map(
                                  (textDiv, tIndex) =>
                                    tIndex === textIndex
                                      ? { ...textDiv, underlineAnimation:  value }
                                      : textDiv
                                ),
                              }
                            : element
                        ),
                      }
                    : slide
                );
                setAttributes({ slides: updatedSlides });
              };

                 // Update decoration animation from
                 const updateUnderlineAnimationFrom= (slideId, divIndex, textIndex, value) => {
                  const updatedSlides = slides.map((slide) =>
                    slide.id === slideId
                      ? {
                          ...slide,
                          elements: slide.elements.map((element, i) =>
                            element.type === "div" && i === divIndex
                              ? {
                                  ...element,
                                  innerTextDivs: element.innerTextDivs.map(
                                    (textDiv, tIndex) =>
                                      tIndex === textIndex
                                        ? { ...textDiv, underlineAnimationFrom:  value }
                                        : textDiv
                                  ),
                                }
                              : element
                          ),
                        }
                      : slide
                  );
                  setAttributes({ slides: updatedSlides });
                };
                // Update decoration animation to
                const updateUnderlineAnimationTo= (slideId, divIndex, textIndex, value) => {
                  const updatedSlides = slides.map((slide) =>
                    slide.id === slideId
                      ? {
                          ...slide,
                          elements: slide.elements.map((element, i) =>
                            element.type === "div" && i === divIndex
                              ? {
                                  ...element,
                                  innerTextDivs: element.innerTextDivs.map(
                                    (textDiv, tIndex) =>
                                      tIndex === textIndex
                                        ? { ...textDiv, underlineAnimationTo:  value }
                                        : textDiv
                                  ),
                                }
                              : element
                          ),
                        }
                      : slide
                  );
                  setAttributes({ slides: updatedSlides });
                };

                   // Update decoration animation from
                   const updateUnderlineFromSizeNew= (slideId, divIndex, textIndex, value) => {
                    const updatedSlides = slides.map((slide) =>
                      slide.id === slideId
                        ? {
                            ...slide,
                            elements: slide.elements.map((element, i) =>
                              element.type === "div" && i === divIndex
                                ? {
                                    ...element,
                                    innerTextDivs: element.innerTextDivs.map(
                                      (textDiv, tIndex) =>
                                        tIndex === textIndex
                                          ? { ...textDiv, underlineFromSizeNew:  value }
                                          : textDiv
                                    ),
                                  }
                                : element
                            ),
                          }
                        : slide
                    );
                    setAttributes({ slides: updatedSlides });
                  };

                  // Update decoration animation to size
                  const updateUnderlineToSizeNew= (slideId, divIndex, textIndex, value) => {
                    const updatedSlides = slides.map((slide) =>
                      slide.id === slideId
                        ? {
                            ...slide,
                            elements: slide.elements.map((element, i) =>
                              element.type === "div" && i === divIndex
                                ? {
                                    ...element,
                                    innerTextDivs: element.innerTextDivs.map(
                                      (textDiv, tIndex) =>
                                        tIndex === textIndex
                                          ? { ...textDiv, underlineToSizeNew:  value }
                                          : textDiv
                                    ),
                                  }
                                : element
                            ),
                          }
                        : slide
                    );
                    setAttributes({ slides: updatedSlides });
                  };

                    // Update decoration animation transition
                    const updateUnderlineAnimationTransition= (slideId, divIndex, textIndex, value) => {
                      const updatedSlides = slides.map((slide) =>
                        slide.id === slideId
                          ? {
                              ...slide,
                              elements: slide.elements.map((element, i) =>
                                element.type === "div" && i === divIndex
                                  ? {
                                      ...element,
                                      innerTextDivs: element.innerTextDivs.map(
                                        (textDiv, tIndex) =>
                                          tIndex === textIndex
                                            ? { ...textDiv, underlineAnimationTransition:  value }
                                            : textDiv
                                      ),
                                    }
                                  : element
                              ),
                            }
                          : slide
                      );
                      setAttributes({ slides: updatedSlides });
                    };
  
  
  // Update Parallax Title X
  const updateParallaxTitle = (
    slideId,
    divIndex,
    textIndex,
    newParallaxTitle
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerTextDivs: element.innerTextDivs.map(
                      (textDiv, tIndex) =>
                        tIndex === textIndex
                          ? { ...textDiv, parallaxTitle: newParallaxTitle }
                          : textDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Parallax Title Y
  const updateParallaxTitleY = (
    slideId,
    divIndex,
    textIndex,
    newParallaxTitleY
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerTextDivs: element.innerTextDivs.map(
                      (textDiv, tIndex) =>
                        tIndex === textIndex
                          ? { ...textDiv, parallaxTitleY: newParallaxTitleY }
                          : textDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Parallax Title Scale
  const updateParallaxTitleScale = (
    slideId,
    divIndex,
    textIndex,
    newParallaxTitleScale
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerTextDivs: element.innerTextDivs.map(
                      (textDiv, tIndex) =>
                        tIndex === textIndex
                          ? {
                              ...textDiv,
                              parallaxTitleScale: newParallaxTitleScale,
                            }
                          : textDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Parallax Title Opacity
  const updateParallaxTitleOpacity = (
    slideId,
    divIndex,
    textIndex,
    newParallaxTitleOpacity
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerTextDivs: element.innerTextDivs.map(
                      (textDiv, tIndex) =>
                        tIndex === textIndex
                          ? {
                              ...textDiv,
                              parallaxTitleOpacity: newParallaxTitleOpacity,
                            }
                          : textDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Parallax Title Duration
  const updateParallaxTitleDuration = (
    slideId,
    divIndex,
    textIndex,
    newParallaxTitleDuration
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerTextDivs: element.innerTextDivs.map(
                      (textDiv, tIndex) =>
                        tIndex === textIndex
                          ? {
                              ...textDiv,
                              parallaxTitleDuration: newParallaxTitleDuration,
                            }
                          : textDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Text Animation
  const updateTextAnimation = (slideId, divIndex, textIndex, animation) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerTextDivs: element.innerTextDivs.map(
                      (textDiv, tIndex) =>
                        tIndex === textIndex
                          ? { ...textDiv, animation: animation }
                          : textDiv
                    ),
                  }
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
      { label: __("Times New Roman", "cocoblock"), value: "Times New Roman, serif" },
      { label: __("Verdana", "cocoblock"), value: "Verdana, sans-serif" },
      { label: __("Tahoma", "cocoblock"), value: "Tahoma, sans-serif" },
      { label: __("Trebuchet MS", "cocoblock"), value: "Trebuchet MS, sans-serif" },
      { label: __("Gill Sans", "cocoblock"), value: "Gill Sans, sans-serif" },
      { label: __("Courier New", "cocoblock"), value: "Courier New, monospace" },
      { label: __("Lucida Console", "cocoblock"), value: "Lucida Console, monospace" },
      { label: __("Consolas", "cocoblock"), value: "Consolas, monospace" },
      { label: __("Monaco", "cocoblock"), value: "Monaco, monospace" },
      { label: __("Comic Sans MS", "cocoblock"), value: "Comic Sans MS, cursive" },
      { label: __("Brush Script MT", "cocoblock"), value: "Brush Script MT, cursive" },
      { label: __("Impact", "cocoblock"), value: "Impact, fantasy" },
      { label: __("Palatino Linotype", "cocoblock"), value: "Palatino Linotype, serif" },
      { label: __("Book Antiqua", "cocoblock"), value: "Book Antiqua, serif" },
      { label: __("Roboto", "cocoblock"), value: "Roboto, sans-serif" },
      { label: __("Open Sans", "cocoblock"), value: "Open Sans, sans-serif" },
      { label: __("Ubuntu Mono", "cocoblock"), value: "Ubuntu Mono, monospace" },
      { label: __("Inconsolata", "cocoblock"), value: "Inconsolata, monospace" },
      { label: __("Bungee Tint", "cocoblock"), value: "Bungee Tint, sans-serif" },
      { label: __("Matemasie", "cocoblock"), value: "Matemasie, sans-serif" },
      { label: __("Anton", "cocoblock"), value: "Anton, sans-serif" },
      { label: __("Baskervville SC", "cocoblock"), value: "Baskervville SC, serif" },
      { label: __("Bodoni Moda SC", "cocoblock"), value: "Bodoni Moda SC, serif" },
      { label: __("Ga Maamli", "cocoblock"), value: "Ga Maamli, sans-serif" },
      { label: __("Goldman", "cocoblock"), value: "Goldman, sans-serif" },
      { label: __("Kanit", "cocoblock"), value: "Kanit, sans-serif" },
      { label: __("Knewave", "cocoblock"), value: "Knewave, cursive" },
      { label: __("Londrina Outline", "cocoblock"), value: "Londrina Outline, sans-serif" },
      { label: __("Macondo", "cocoblock"), value: "Macondo, cursive" },
      { label: __("Rampart One", "cocoblock"), value: "Rampart One, sans-serif" },
      { label: __("Rubik Wet Paint", "cocoblock"), value: "Rubik Wet Paint, cursive" },
      { label: __("Ruslan Display", "cocoblock"), value: "Ruslan Display, display" },
      { label: __("Titan One", "cocoblock"), value: "Titan One, sans-serif" },
      { label: __("Vujahday Script", "cocoblock"), value: "Vujahday Script, cursive" },
      { label: __("Wallpoet", "cocoblock"), value: "Wallpoet, cursive" }
  ];

  
  return (
    <div className="custom-block-added">
      <div className="divider-controls-inner"></div>
      <div className="title-block-added">
        <div className="title-element">
          <Button
            isDestructive
            onClick={() =>
              removeSlideTitleBlock(slide.id, elementIndex, textIndex)
            }
            className="button-remove-element"
            style={{
              position: "absolute",
              right: "12px",
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
          <h2>{__("Inner Text", "cocoblocks")}</h2>
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
                value={textDiv.content}
                onChange={(newTitle) =>
                  updateSlideTitleBlock(
                    slide.id,
                    elementIndex,
                    textIndex,
                    newTitle
                  )
                }
                placeholder={__("Add text content...", "cocoblocks")}
              />
            </div>
            <div className="custom-select select-control-label-right">
              <SelectControl
                label={
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-120v-720h80v720h-80Zm640 0v-720h80v720h-80ZM280-440v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Z"/></svg>
                    {__("Width", "cocoblocks")}
                  </>
                }
                value={textDiv.widthTitleBlock}
                onChange={(newElement) =>
                  updateWidthTitleBlock(slide.id, elementIndex,textIndex, newElement)
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
            {textDiv.widthTitleBlock !== "auto" && (
                <p
                className="notice components-base-control__help"
                style={{
                  borderRadius: "0",
                  marginTop: "6px",
                  marginBottom: "6px"
                }}
              >
                {__(
                  'Attention: Side transition effects will not work with this setting!',
                  "cocoblocks"
                )}
              </p>
            )}
            {textDiv.widthTitleBlock === "custom" && (
              <>
               <div className="custom-select">
                <RangeControl
                  label={
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-320 120-480l160-160 57 56-64 64h414l-63-64 56-56 160 160-160 160-56-56 63-64H273l63 64-56 56Z"/></svg>
                      {__("Custom Width (%)", "cocoblocks")}
                    </>
                  }
                  value={textDiv.widthCustomTitleBlock}
                  onChange={(customWidth) =>
                    updateCustomWidthTitleBlock(slide.id, elementIndex, textIndex, customWidth)
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
                value={textDiv.textAlign}
                onChange={(align) =>
                  updateTextAlign(slide.id, elementIndex, textIndex, align)
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
                      <path d="M360-160v-240q-83 0-141.5-58.5T160-600q0-83 58.5-141.5T360-800h360v80h-80v560h-80v-560H440v560h-80Z" />
                    </svg>
                    {__("Element html", "cocoblocks")}
                  </>
                }
                value={textDiv.elementTitle}
                onChange={(newElementTitle) =>
                  updateElementTitle(
                    slide.id,
                    elementIndex,
                    textIndex,
                    newElementTitle
                  )
                }
                options={[
                  {
                    label: __("P", "cocoblocks"),
                    value: "p",
                  },
                  {
                    label: __("H6", "cocoblocks"),
                    value: "h6",
                  },
                  {
                    label: __("H5", "cocoblocks"),
                    value: "h5",
                  },
                  {
                    label: __("H4", "cocoblocks"),
                    value: "h4",
                  },
                  {
                    label: __("H3", "cocoblocks"),
                    value: "h3",
                  },
                  {
                    label: __("H2", "cocoblocks"),
                    value: "h2",
                  },
                  {
                    label: __("H1", "cocoblocks"),
                    value: "h1",
                  },
                ]}
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
                  value={textDiv.fontSize}
                  onChange={(newSize) =>
                    updateFontSize(slide.id, elementIndex, textIndex, newSize)
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
                  value={textDiv.fontSizeTablet}
                  onChange={(newSizeTablet) =>
                    updateFontSizeTablet(
                      slide.id,
                      elementIndex,
                      textIndex,
                      newSizeTablet
                    )
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
                  value={textDiv.fontSizeMobile}
                  onChange={(newSizeMobile) =>
                    updateFontSizeMobile(
                      slide.id,
                      elementIndex,
                      textIndex,
                      newSizeMobile
                    )
                  }
                  min={4}
                  max={500}
                  step={1}
                />
              )}
            </div>
            <div className="custom-select">
              <FontStyle
                value={textDiv.fontStyle || {}} // Inizializza con un oggetto vuoto se undefined
                onChange={(styleType, value) =>
                  updateFontStyle(
                    slide.id,
                    elementIndex,
                    textIndex,
                    styleType,
                    value
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
                      <path d="M186-80q-54 0-80-22t-26-66q0-58 49-74t116-16h21v-56q0-34-1-55.5t-6-35.5q-5-14-11.5-19.5T230-430q-9 0-16.5 3t-12.5 8q-4 5-5 10.5t1 11.5q6 11 14 21.5t8 24.5q0 25-17.5 42.5T159-291q-25 0-42.5-17.5T99-351q0-27 12-44t32.5-27q20.5-10 47.5-14t58-4q85 0 118 30.5T400-302v147q0 19 4.5 28t15.5 9q12 0 19.5-18t9.5-56h11q-3 62-23.5 87T368-80q-43 0-67.5-13.5T269-134q-10 29-29.5 41.5T186-80Zm373 0q-20 0-32.5-16.5T522-132l102-269q7-17 22-28t34-11q19 0 34 11t22 28l102 269q8 19-4.5 35.5T801-80q-12 0-22-7t-15-19l-20-58H616l-20 58q-4 11-14 18.5T559-80Zm-324-29q13 0 22-20.5t9-49.5v-67q-26 0-38 15.5T216-180v11q0 36 4 48t15 12Zm407-125h77l-39-114-38 114Zm-37-285q-48 0-76.5-33.5T500-643q0-104 66-170.5T735-880q42 0 68 9.5t26 24.5q0 6-2 12t-7 11q-5 7-12.5 10t-15.5 1q-14-4-32-7t-33-3q-71 0-114 48t-43 127q0 22 8 46t36 24q11 0 21.5-5t18.5-14q17-18 31.5-60T712-758q2-13 10.5-18.5T746-782q18 0 27.5 9.5T779-749q-12 43-17.5 75t-5.5 58q0 20 5.5 29t16.5 9q11 0 21.5-8t29.5-30q2-3 15-7 8 0 12 6t4 17q0 28-32 54t-67 26q-26 0-44.5-14T691-574q-15 26-37 40.5T605-519Zm-485-1v-220q0-58 41-99t99-41q58 0 99 41t41 99v220h-80v-80H200v80h-80Zm80-160h120v-60q0-25-17.5-42.5T260-800q-25 0-42.5 17.5T200-740v60Z" />
                    </svg>
                    {__("Font family", "cocoblocks")}
                  </>
                }
                value={textDiv.fontFamilyTitleBlock}
                options={fontOptions}
                onChange={(family) =>
                  updateTextFamilyTitleBlock(slide.id, elementIndex, textIndex, family)
                }
              />
            </div>
            <div className="custom-select select-control-label-right">
              <SelectControl
                label={
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-200h480l-57-400H297l-57 400Zm240-480q17 0 28.5-11.5T520-720q0-17-11.5-28.5T480-760q-17 0-28.5 11.5T440-720q0 17 11.5 28.5T480-680Zm113 0h70q30 0 52 20t27 49l57 400q5 36-18.5 63.5T720-120H240q-37 0-60.5-27.5T161-211l57-400q5-29 27-49t52-20h70q-3-10-5-19.5t-2-20.5q0-50 35-85t85-35q50 0 85 35t35 85q0 11-2 20.5t-5 19.5ZM240-200h480-480Z"/></svg>
                    {__("Font weight", "cocoblocks")}
                  </>
                }
                value={textDiv.fontWeightTitleBlock}
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
                  updateTextWeightTitleBlock(slide.id, elementIndex, textIndex, weight)
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
                value={textDiv.lineHeight}
                onChange={(newLineHeight) =>
                  updateLineHeight(
                    slide.id,
                    elementIndex,
                    textIndex,
                    newLineHeight
                  )
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
                   <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M160-160v-640h80v640h-80Zm560 0v-640h80v640h-80ZM294-280l150-400h72l150 400h-69l-36-102H399l-36 102h-69Zm126-160h120l-58-166h-4l-58 166Z"/></svg>
                    {__("Letter spacing", "cocoblocks")}
                  </>
                }
                value={textDiv.letterSpacingTitleBlock}
                onChange={(newLetterSpacing) =>
                  updateLetterSpacingTitleBlock(slide.id, elementIndex, textIndex, newLetterSpacing)
                }
                min={0}
                max={100}
                step={.5}
              />
            </div>
            <p
              className="notice components-base-control__help"
              style={{
                borderRadius: "0",
                marginTop: "6px",
                marginBottom: "6px"
              }}
            >
              {__(
                'Attention: Not all browsers may support every listed font family, and not all font families support the full range of font weights!',
                "cocoblocks"
              )}
            </p>
            <div className="custom-select color">
              <ColorOptionsPanel
                colorNormal={textDiv.textColor}
                setColorNormal={(color) =>
                  updateSlideTextColor(slide.id, elementIndex, textIndex, color)
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
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    height="18px" 
                    viewBox="0 -960 960 960" 
                    width="18px" 
                    fill="#e8eaed"
                    style={{
                      marginRight: "5px",
                      marginBottom: "-5px",
                    }}
                    ><path d="M320-600q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm160 0q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm160 0q17 0 28.5-11.5T680-640q0-17-11.5-28.5T640-680q-17 0-28.5 11.5T600-640q0 17 11.5 28.5T640-600ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>
                    {__("Padding", "cocoblocks")}
                  </>
                }
                values={textDiv.paddingTitleBlock}
                units={{}}
                onChange={(newPaddingtitle) =>
                  updatenewPaddingtitleBlock(slide.id, elementIndex, textIndex, newPaddingtitle)
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
                values={textDiv.marginTitle}
                units={{}}
                onChange={(newMargintitle) =>
                  updatenewMargintitle(
                    slide.id,
                    elementIndex,
                    textIndex,
                    newMargintitle
                  )
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
            style={{ paddingTop: "0", paddingBottom: "0" }}
          >
            <div className="custom-select select-control-label-right">
              <SelectControl
                label={
                  <>
                   <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-120v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80ZM120-120v-720h720v80H200v640h-80Z"/></svg>
                    {__("Border style", "cocoblocks")}
                  </>
                }
                value={textDiv.borderStyle}
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
                  updateBorderStyle(slide.id, elementIndex, textIndex, newBorderStyle)
                }
              />
            </div>
            {textDiv.borderStyle !== "none" && (  
            <>
            <div className="custom-select color">
              <ColorOptionsPanel
                colorNormal={textDiv.backgroundBorderColor}
                setColorNormal={(color) =>
                  updateTitleBackgroundBorderColor(
                    slide.id,
                    elementIndex,
                    textIndex,
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
                value={textDiv.backgroundBorderSize}
                onChange={(newSize) =>
                  updateTitleBackgroundBorderSize(
                    slide.id,
                    elementIndex,
                    textIndex,
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
                value={textDiv.backgroundBorderRadius}
                onChange={(newRadius) =>
                  updateTitleBackgroundBorderRadius(
                    slide.id,
                    elementIndex,
                    textIndex,
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
                value={textDiv.rotate}
                onChange={(rotate) =>
                  updateRotate(slide.id, elementIndex, textIndex, rotate)
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
                   <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M360-360v-200q-66 0-113-47t-47-113q0-66 47-113t113-47h320v80h-80v440h-80v-440h-80v440h-80Zm0-280v-160q-33 0-56.5 23.5T280-720q0 33 23.5 56.5T360-640Zm0-80ZM680-80l-56-56 64-64H120v-80h568l-64-64 56-56 160 160L680-80Z"/></svg>
                    {__("Writing mode", "cocoblocks")}
                  </>
                }
                value={textDiv.textWriteMode}
                options={[
                  { label: "Horizontal", value: "initial" },
                  { label: "Vertical lr", value: "vertical-lr" },
                  { label: "Vertical rl", value: "vertical-rl" },
                ]}
                onChange={(value) =>
                  updateTextWriteMode(slide.id, elementIndex, textIndex, value)
                }
              />
            </div>
            <div className="custom-select select-control-label-right">
              <SelectControl
                label={
                  <>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M160-160v-640h80v640h-80Zm560 0v-640h80v640h-80Zm-296-98L282-400l142-141 56 56-45 45h85q33 0 56.5-23.5T600-520q0-33-23.5-56.5T520-600H280v-80h240q66 0 113 47t47 113q0 66-47 113t-113 47h-85l45 45-56 57Z"/></svg>
                    {__("Orientation", "cocoblocks")}
                  </>
                }
                value={textDiv.textOrientation}
                options={[
                  { label: "Initial", value: "initial" },
                  { label: "Upright", value: "upright" },
                ]}
                onChange={(value) =>
                  updateTexOrientation(slide.id, elementIndex, textIndex, value)
                }
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
                value={textDiv.opacity}
                onChange={(opacity) =>
                  updateOpacity(slide.id, elementIndex, textIndex, opacity)
                }
                min={0}
                max={1}
                step={0.1}
              />
            </div>
          </div>
          <BoxShadowControlTextBlock
              slide={slide}
              slides={slides}
              element={element}
              textDiv={textDiv}
              textIndex={textIndex}
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
                value={textDiv.animation}
                options={[
                  { label: "None", value: "none" },
                  { label: "Fade In", value: "fade-in-title-div" },
                  { label: "Fade In Left", value: "fade-in-left-title-div" },
                  { label: "Fade In Right", value: "fade-in-right-title-div" },
                  { label: "Fade In Top", value: "fade-in-top-title-div" },
                  { label: "Fade In Bottom", value: "fade-in-bottom-title-div" },
                  { label: "Slide In Left", value: "slide-in-left-title-div" },
                  { label: "Slide In Right", value: "slide-in-right-title-div" },
                  { label: "Slide In Top", value: "slide-in-top-title-div" },
                  { label: "Slide In Bottom", value: "slide-in-bottom-title-div" },
                  { label: "Zoom In", value: "zoom-in-title-div" },
                  { label: "Zoom In Left", value: "zoom-in-left-title-div" },
                  { label: "Zoom In Right", value: "zoom-in-right-title-div" },
                  { label: "Zoom In Top", value: "zoom-in-top-title-div" },
                  { label: "Zoom In Bottom", value: "zoom-in-bottom-title-div" },
                  { label: "Rotate In Left", value: "rotate-in-left-title-div" },
                  { label: "Rotate In Right", value: "rotate-in-right-title-div" },
                  { label: "Rotate In Top", value: "rotate-in-top-title-div" },
                  { label: "Rotate In Bottom", value: "rotate-in-bottom-title-div" },
                  { label: "Rotate Continuos", value: "rotate-continuous-title-div" },
                  { label: "Bounce in", value: "bounce-effect-title-div" },
                  { label: "Bounce in Left", value: "bounce-left-effect-title-div" },
                  { label: "Bounce in Right", value: "bounce-right-effect-title-div" },
                  { label: "Bounce in Top", value: "bounce-top-effect-title-div" },
                  { label: "Bounce in Bottom", value: "bounce-bottom-effect-title-div" },
                  { label: "Wiggle", value: "wiggle-title-div" },
                  { label: "Flip", value: "flip-title-div" },
                  { label: "Swing", value: "swing-title-div" },
                  { label: "Rubber band", value: "rubber-band-title-div" },
                  { label: "Letter Bounce", value: "bounce-title-div" },
                  { label: "Stretch", value: "stretch-title-div" },
                  { label: "Focus", value: "focus-title-div" },
                  { label: "Typing", value: "typing-effect" },
                  { label: "Explosion", value: "explode-title-div" },
                  { label: "Implode", value: "implode-title-div" },
                  { label: "Letters Fly In From Left", value: "letters-fly-in-from-left-div" },
                  { label: "Letters Fly In From Right", value: "letters-fly-in-from-right-div" },
                  { label: "Letters Fly In From Top", value: "letters-fly-in-from-top-div" },
                  { label: "Letters Fly In From Bottom", value: "letters-fly-in-from-bottom-div" },
                  { label: "Letter Flip From Top", value: "letter-flip-from-top-div" },
                  { label: "Letter Flip From Bottom", value: "letter-flip-from-bottom-div" },
                  { label: "Letter Flip Cycle", value: "letter-flip-cycle-div" },
                  { label: "Gradient Animation", value: "gradient-animation-title-div" },
                  { label: "Text Shadow", value: "text-shadow-title-div" },
                  { label: "Text Shadow Light", value: "text-shadow-light-title-div" },
                  { label: "Text Shadow Heavy", value: "text-shadow-heavy-title-div" },
                  { label: "Neon Effect", value: "text-neon-title-div" },
                  { label: "Color Cycle", value: "color-cycle-title-div" },
                ]}
                onChange={(animation) =>
                  updateTextAnimation(
                    slide.id,
                    elementIndex,
                    textIndex,
                    animation
                  )
                }
              />
            </div>
            {textDiv.animation !== "none" && (
            <>
            {![" ", "typing-effect", "text-shadow-title-div", "text-shadow-light-title-div", "text-shadow-heavy-title-div", "text-neon-title-div"].includes(textDiv.animation) && (
            <div className="custom-select">
              <RangeControl
                label={
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z"/></svg>
                    {__("Duration", "cocoblocks")}
                  </>
                }
                value={textDiv.durationEffect}
                onChange={(newDurationEffect) =>
                  updateDurationEffect(
                    slide.id,
                    elementIndex,
                    textIndex,
                    newDurationEffect
                  )
                }
                min={.1}
                max={15}
                step={.1}
              />
            </div>
            
            )}
            </>)}
            {[
              "explode-title-div",
              "implode-title-div",
              "letters-fly-in-from-left-div",
              "letters-fly-in-from-right-div",
              "letters-fly-in-from-top-div",
              "letters-fly-in-from-bottom-div",
              "letter-flip-from-top-div",
              "letter-flip-from-bottom-div",
              "letter-flip-cycle-div",
            ].includes(textDiv.animation) && (      
            <div className="custom-select">
              <RangeControl
                label={
                  <>
                   <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M320-160h320v-120q0-66-47-113t-113-47q-66 0-113 47t-47 113v120ZM160-80v-80h80v-120q0-61 28.5-114.5T348-480q-51-32-79.5-85.5T240-680v-120h-80v-80h640v80h-80v120q0 61-28.5 114.5T612-480q51 32 79.5 85.5T720-280v120h80v80H160Z"/></svg>
                    {__("Delay", "cocoblocks")}
                  </>
                }
                value={textDiv.delayEffect}
                onChange={(newDelayEffect) =>
                  updateDelayEffect(
                    slide.id,
                    elementIndex,
                    textIndex,
                    newDelayEffect
                  )
                }
                min={0}
                max={10}
                step={.1}
              />
            </div>
            )}
            {textDiv.animation === "bounce-title-div" && (
            <>
            <div className="custom-select">
              <RangeControl
                label={
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z"/></svg>
                    {__("Duration letter odd", "cocoblocks")}
                  </>
                }
                value={textDiv.durationEffectOdd}
                onChange={(newDurationEffectOdd) =>
                  updateDurationEffectOdd(
                    slide.id,
                    elementIndex,
                    textIndex,
                    newDurationEffectOdd
                  )
                }
                min={.1}
                max={10}
                step={.1}
              />
            </div>
            <div className="custom-select">
              <RangeControl
                label={
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z"/></svg>
                    {__("Duration letter even", "cocoblocks")}
                  </>
                }
                value={textDiv.durationEffectEven}
                onChange={(newDurationEffectEven) =>
                  updateDurationEffectEven(
                    slide.id,
                    elementIndex,
                    textIndex,
                    newDurationEffectEven
                  )
                }
                min={.1}
                max={10}
                step={.1}
              />
            </div>
            </>
            )}
            {[
            "bounce-effect-title-div",
            "bounce-left-effect-title-div",
            "bounce-right-effect-title-div",
            "bounce-top-effect-title-div",
            "bounce-bottom-effect-title-div",
            "wiggle-title-div",
            "flip-title-div",
            "swing-title-div",
            "rubber-band-title-div",
          ].includes(textDiv.animation) && (  
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
                value={textDiv.iteration}
                options={[
                  { label: "Forwards", value: "forwards" },
                  { label: "Infinite", value: "infinite" },
                ]}
                onChange={(value) =>
                  updateInteration(slide.id, elementIndex, textIndex, value)
                }
              />
            </div>
          )}
            {textDiv.animation === "typing-effect" && (
            <>
            <div className="custom-select">
              <RangeControl
                label={
                  <>
                   <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M418-340q24 24 62 23.5t56-27.5l224-336-336 224q-27 18-28.5 55t22.5 61Zm62-460q59 0 113.5 16.5T696-734l-76 48q-33-17-68.5-25.5T480-720q-133 0-226.5 93.5T160-400q0 42 11.5 83t32.5 77h552q23-38 33.5-79t10.5-85q0-36-8.5-70T766-540l48-76q30 47 47.5 100T880-406q1 57-13 109t-41 99q-11 18-30 28t-40 10H204q-21 0-40-10t-30-28q-26-45-40-95.5T80-400q0-83 31.5-155.5t86-127Q252-737 325-768.5T480-800Zm7 313Z"/></svg>
                    {__("Speed", "cocoblocks")}
                  </>
                }
                value={textDiv.speedEffect}
                onChange={(newSpeedEffect) =>
                  updateEffectSpeed(
                    slide.id,
                    elementIndex,
                    textIndex,
                    newSpeedEffect
                  )
                }
                min={10}
                max={500}
                step={10}
              />
            </div>
            <div className="custom-select">
              <RangeControl
                label={
                  <>
                   <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M360-360v-240h80v240h-80Zm160 0v-240h80v240h-80ZM480-40q-108 0-202.5-49.5T120-228v108H40v-240h240v80h-98q51 75 129.5 117.5T480-120q115 0 208.5-66T820-361l78 18q-45 136-160 219.5T480-40ZM42-520q7-67 32-128.5T143-762l57 57q-32 41-52 87.5T123-520H42Zm214-241-57-57q53-44 114-69.5T440-918v80q-51 5-97 25t-87 52Zm449 0q-41-32-87.5-52T520-838v-80q67 6 128.5 31T762-818l-57 57Zm133 241q-5-51-25-97.5T761-705l57-57q44 52 69 113.5T918-520h-80Z"/></svg>
                    {__("Pause", "cocoblocks")}
                  </>
                }
                value={textDiv.pauseEffect}
                onChange={(newPauseEffect) =>
                  updateEffectPause(
                    slide.id,
                    elementIndex,
                    textIndex,
                    newPauseEffect
                  )
                }
                min={0}
                max={5000}
                step={100}
              />
            </div>
            </>
            )}
            {(textDiv.animation === "explode-title-div" || textDiv.animation === "implode-title-div") && (
            <div className="custom-select select-control-label-right">
              <SelectControl
                label={
                  <>
                   <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440h80q0 117 81.5 198.5T480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720h-6l62 62-56 58-160-160 160-160 56 58-62 62h6q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80ZM380-320v-60h120v-40H380v-140h180v60H440v40h80q17 0 28.5 11.5T560-420v60q0 17-11.5 28.5T520-320H380Z"/></svg>
                    {__("Interation count", "cocoblocks")}
                  </>
                }
                value={textDiv.animationCount}
                options={[
                  { label: "1", value: "1" },
                  { label: "2", value: "2" },
                  { label: "3", value: "3" },
                  { label: "4", value: "4" },
                  { label: "5", value: "5" },
                  { label: "Infinite", value: "infinite" },
                ]}
                onChange={(animationCount) =>
                  updateTextAnimationCount(slide.id, elementIndex, textIndex, animationCount)
                }
              />
            </div>
            )}
            {textDiv.animation === "typing-effect" && (
            <>
            <div className="custom-select">
              <RangeControl
                label={
                  <>
                   <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-760v-80h80v80h-80Zm0 640v-80h80v80h-80ZM280-760v-80h80v80h-80Zm0 640v-80h80v80h-80ZM120-760v-80h80v80h-80Zm0 160v-80h80v80h-80Zm0 160v-80h80v80h-80Zm0 160v-80h80v80h-80Zm0 160v-80h80v80h-80Zm480 0v-80h80v-560h-80v-80h240v80h-80v560h80v80H600Z"/></svg>
                    {__("Width cursor", "cocoblocks")}
                  </>
                }
                value={textDiv.widthCursor}
                onChange={(newWidthCursor) =>
                  updateWidthCursor(
                    slide.id,
                    elementIndex,
                    textIndex,
                    newWidthCursor
                  )
                }
                min={1}
                max={15}
                step={1}
              />
            </div>
            <div className="custom-select">
              <RangeControl
                label={
                  <>
                   <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-120v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80ZM120-120v-80h80v-560h-80v-80h240v80h-80v560h80v80H120Zm560-200-56-56 63-64H400v-80h287l-63-64 56-56 160 160-160 160Z"/></svg>
                    {__("Animation cursor", "cocoblocks")}
                  </>
                }
                value={textDiv.animationCursor}
                onChange={(newAnimationCursor) =>
                  updateAnimationCursor(
                    slide.id,
                    elementIndex,
                    textIndex,
                    newAnimationCursor
                  )
                }
                min={.10}
                max={3}
                step={.01}
              />
            </div>
            <div className="custom-select color">
              <ColorOptionsPanel
                colorNormal={textDiv.cursorColor}
                setColorNormal={(newCursorColor) =>
                  updateCursorColor(slide.id, elementIndex, textIndex, newCursorColor)
                }
                buttonTitle={__("Cursor Color", "cocoblocks")}
                buttonIcon={
                  <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      height="24px" 
                      viewBox="0 -960 960 960" 
                      width="24px" 
                      fill="#e8eaed"
                      style={{
                        marginBottom: "-3px"
                      }}
                    >
                        <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z"/></svg>
                }
              />
            </div>
            </>
            )}
            {["gradient-animation-title-div", "text-shadow-title-div", "text-shadow-light-title-div", "text-shadow-heavy-title-div", "text-neon-title-div", "color-cycle-title-div"].includes(textDiv.animation) && (
            <div className="custom-select color">
              <ColorOptionsPanel
                colorNormal={textDiv.gradinetColorOne}
                setColorNormal={(newGradinetColorOne) =>
                  updateGradinetColorOne(slide.id, elementIndex, textIndex, newGradinetColorOne)
                }
                buttonTitle={__("First Color", "cocoblocks")}
                buttonIcon={
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    height="24px" 
                    viewBox="0 -960 960 960" 
                    width="24px" 
                    fill="#e8eaed"
                    style={{
                      marginBottom: "-3px"
                    }}
                  ><path d="M440-440v-80h80v80h-80Zm-80 80v-80h80v80h-80Zm160 0v-80h80v80h-80Zm80-80v-80h80v80h-80Zm-320 0v-80h80v80h-80Zm-80 320q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm80-80h80v-80h-80v80Zm160 0h80v-80h-80v80Zm320 0v-80 80Zm-560-80h80v-80h80v80h80v-80h80v80h80v-80h80v80h80v-80h-80v-80h80v-320H200v320h80v80h-80v80Zm0 80v-560 560Zm560-240v80-80ZM600-280v80h80v-80h-80Z"/></svg>
                }
              />
            </div>
            )}
            {["gradient-animation-title-div", "color-cycle-title-div"].includes(textDiv.animation) && (
            <>
            <div className="custom-select color">
              <ColorOptionsPanel
                colorNormal={textDiv.gradinetColorTwo}
                setColorNormal={(newGradinetColorTwo) =>
                  updateGradinetColorTwo(slide.id, elementIndex, textIndex, newGradinetColorTwo)
                }
                buttonTitle={__("Second Color", "cocoblocks")}
                buttonIcon={
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    height="24px" 
                    viewBox="0 -960 960 960" 
                    width="24px" 
                    fill="#e8eaed"
                    style={{
                      marginBottom: "-3px"
                    }}
                  ><path d="M440-440v-80h80v80h-80Zm-80 80v-80h80v80h-80Zm160 0v-80h80v80h-80Zm80-80v-80h80v80h-80Zm-320 0v-80h80v80h-80Zm-80 320q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm80-80h80v-80h-80v80Zm160 0h80v-80h-80v80Zm320 0v-80 80Zm-560-80h80v-80h80v80h80v-80h80v80h80v-80h80v80h80v-80h-80v-80h80v-320H200v320h80v80h-80v80Zm0 80v-560 560Zm560-240v80-80ZM600-280v80h80v-80h-80Z"/></svg>
                }
              />
            </div>
            <div className="custom-select color">
              <ColorOptionsPanel
                colorNormal={textDiv.gradinetColorThree}
                setColorNormal={(newGradinetColorThree) =>
                  updateGradinetColorThree(slide.id, elementIndex, textIndex, newGradinetColorThree)
                }
                buttonTitle={__("Third Color", "cocoblocks")}
                buttonIcon={
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    height="24px" 
                    viewBox="0 -960 960 960" 
                    width="24px" 
                    fill="#e8eaed"
                    style={{
                      marginBottom: "-3px"
                    }}
                  ><path d="M440-440v-80h80v80h-80Zm-80 80v-80h80v80h-80Zm160 0v-80h80v80h-80Zm80-80v-80h80v80h-80Zm-320 0v-80h80v80h-80Zm-80 320q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm80-80h80v-80h-80v80Zm160 0h80v-80h-80v80Zm320 0v-80 80Zm-560-80h80v-80h80v80h80v-80h80v80h80v-80h80v80h80v-80h-80v-80h80v-320H200v320h80v80h-80v80Zm0 80v-560 560Zm560-240v80-80ZM600-280v80h80v-80h-80Z"/></svg>
                }
              />
            </div>
            <div className="custom-select color">
              <ColorOptionsPanel
                colorNormal={textDiv.gradinetColorFour}
                setColorNormal={(newGradinetColorFour) =>
                  updateGradinetColorFour(slide.id, elementIndex, textIndex, newGradinetColorFour)
                }
                buttonTitle={__("Fourth Color", "cocoblocks")}
                buttonIcon={
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    height="24px" 
                    viewBox="0 -960 960 960" 
                    width="24px" 
                    fill="#e8eaed"
                    style={{
                      marginBottom: "-3px"
                    }}
                  ><path d="M440-440v-80h80v80h-80Zm-80 80v-80h80v80h-80Zm160 0v-80h80v80h-80Zm80-80v-80h80v80h-80Zm-320 0v-80h80v80h-80Zm-80 320q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm80-80h80v-80h-80v80Zm160 0h80v-80h-80v80Zm320 0v-80 80Zm-560-80h80v-80h80v80h80v-80h80v80h80v-80h80v80h80v-80h-80v-80h80v-320H200v320h80v80h-80v80Zm0 80v-560 560Zm560-240v80-80ZM600-280v80h80v-80h-80Z"/></svg>
                }
              />
            </div>
            </>
            )}
             {textDiv.animation === "color-cycle-title-div" && (
            <div className="custom-select color">
              <ColorOptionsPanel
                colorNormal={textDiv.gradinetColorFive}
                setColorNormal={(newGradinetColorFive) =>
                  updateGradinetColorFive(slide.id, elementIndex, textIndex, newGradinetColorFive)
                }
                buttonTitle={__("Fifth Color", "cocoblocks")}
                buttonIcon={
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    height="24px" 
                    viewBox="0 -960 960 960" 
                    width="24px" 
                    fill="#e8eaed"
                    style={{
                      marginBottom: "-3px"
                    }}
                  ><path d="M440-440v-80h80v80h-80Zm-80 80v-80h80v80h-80Zm160 0v-80h80v80h-80Zm80-80v-80h80v80h-80Zm-320 0v-80h80v80h-80Zm-80 320q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm80-80h80v-80h-80v80Zm160 0h80v-80h-80v80Zm320 0v-80 80Zm-560-80h80v-80h80v80h80v-80h80v80h80v-80h80v80h80v-80h-80v-80h80v-320H200v320h80v80h-80v80Zm0 80v-560 560Zm560-240v80-80ZM600-280v80h80v-80h-80Z"/></svg>
                }
              />
            </div>
             )}
               {textDiv.animation !== "none" && (
                  <div className="button-reply-effect">
                    <Tooltip text={playState === 'play' ? 'Play' : 'Repeat'}>
                      <Button
                        variant={playState === 'play'}
                        onClick={togglePlayState}
                        icon={
                          playState === 'play' ? (
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M170-228q-38-44-61-98T80-440h82q6 44 22 83.5t42 72.5l-56 56ZM80-520q8-60 30-114t60-98l56 56q-26 33-42 72.5T162-520H80ZM438-82q-60-6-113.5-29T226-170l56-58q35 26 73.5 43t82.5 23v80ZM284-732l-58-58q45-36 98.5-59T440-878v80q-45 6-84 23t-72 43Zm96 432v-360l280 180-280 180ZM520-82v-80q121-17 200.5-107T800-480q0-121-79.5-211T520-798v-80q154 17 257 130t103 268q0 155-103 268T520-82Z"/></svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440h80q0 117 81.5 198.5T480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720h-6l62 62-56 58-160-160 160-160 56 58-62 62h6q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80Z"/></svg>
                          )
                        }
                      />
                    </Tooltip>
                  </div>
                  )}
          </div>
          <div className="content-title-custom-panel intermedy">
            <h2 className="title-custom-panel">
              {__("Advanced", "cocoblocks")}
            </h2>
          </div>
          <div className="content-section-panel" style={{ padding: "0" }}>
            <div className="custom-select select-control-label-right">
              <SelectControl
                label={
                  <>
                   <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M293-120q-15 0-31.5-6T233-140q-8-5-16-12.5t-17-7.5h-40v-80h40q15 0 31.5 6t28.5 14q8 5 16 12.5t17 7.5q10 0 18-7.5t16-12.5q12-9 28.5-14.5T387-240q15 0 31.5 5.5T447-220q8 5 15.5 12.5T480-200q10 0 18-7.5t16-12.5q12-9 28.5-14.5T574-240q14 0 31 6t29 14q8 5 16 12.5t18 7.5q10 0 17.5-7.5T701-220q12-8 28.5-14t31.5-6h40v80h-40q-10 0-18 7.5T727-140q-12 8-29 14t-32 6q-14 0-30.5-6T607-140q-8-5-16-12.5t-18-7.5q-10 0-18 7.5T539-140q-12 9-28.5 14.5T479-120q-15 0-31.5-5.5T419-140q-8-5-15.5-12.5T386-160q-9 0-17.5 7.5T352-140q-11 9-28 14.5t-31 5.5Zm187-180q-101 0-170.5-69.5T240-540v-320h100v320q0 59 40.5 99.5T480-400q59 0 99.5-40.5T620-540v-320h100v320q0 101-69.5 170.5T480-300Z"/></svg>
                    {__("Decorative Divider", "cocoblocks")}
                  </>
                }
                value={textDiv.decoration}
                options={[
                  { label: "None", value: "none" },
                  { label: "Underline", value: "underline-effect-title-div" },
                  { label: "Coming soon", value: "none" },
                ]}
                onChange={(value) =>
                  updateDecoration(slide.id, elementIndex, textIndex, value)
                }
              />
            </div>
            {textDiv.decoration === "underline-effect-title-div" && ( 
            <>
            <div className="custom-select color">
              <ColorOptionsPanel
                colorNormal={textDiv.underlineColor}
                setColorNormal={(value) =>
                  updateUnderlineColor(slide.id, elementIndex, textIndex, value)
                }
                buttonTitle={__("Color", "cocoblocks")}
                buttonIcon={
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px"  style={{
                    marginBottom: "-3px"
                  }} viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m247-904 57-56 343 343q23 23 23 57t-23 57L457-313q-23 23-57 23t-57-23L153-503q-23-23-23-57t23-57l190-191-96-96Zm153 153L209-560h382L400-751Zm360 471q-33 0-56.5-23.5T680-360q0-21 12.5-45t27.5-45q9-12 19-25t21-25q11 12 21 25t19 25q15 21 27.5 45t12.5 45q0 33-23.5 56.5T760-280ZM80 0v-160h800V0H80Z"/></svg>
                }
              />
            </div>
            <div className="custom-select">
              <RangeControl
                label={
                  <>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M320-600q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm160 0q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm160 0q17 0 28.5-11.5T680-640q0-17-11.5-28.5T640-680q-17 0-28.5 11.5T600-640q0 17 11.5 28.5T640-600ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>
                    {__("Padding", "cocoblocks")}
                  </>
                }
                value={textDiv.underlinePadding}
                onChange={(value) =>
                  updateUnderlinePadding(
                    slide.id,
                    elementIndex,
                    textIndex,
                    value
                  )
                }
                min={0}
                max={50}
                step={1}
              />
            </div>
            <div className="custom-select">
              <RangeControl
                label={
                  <>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M320-440v-287L217-624l-57-56 200-200 200 200-57 56-103-103v287h-80ZM600-80 400-280l57-56 103 103v-287h80v287l103-103 57 56L600-80Z"/></svg>
                    {__("Vertical Position", "cocoblocks")}
                  </>
                }
                value={textDiv.underlineVertical}
                onChange={(value) =>
                  updateUnderlineVertical(
                    slide.id,
                    elementIndex,
                    textIndex,
                    value
                  )
                }
                min={-100}
                max={100}
                step={1}
              />
            </div>
            <div className="custom-select">
              <RangeControl
                label={
                  <>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-160 80-360l200-200 56 57-103 103h287v80H233l103 103-56 57Zm400-240-56-57 103-103H440v-80h287L624-743l56-57 200 200-200 200Z"/></svg>
                    {__("Horizontal Position", "cocoblocks")}
                  </>
                }
                value={textDiv.underlineHorizontal}
                onChange={(value) =>
                  updateUnderlineHorizontal(
                    slide.id,
                    elementIndex,
                    textIndex,
                    value
                  )
                }
                min={-100}
                max={100}
                step={1}
              />
            </div>
            <div className="custom-select">
              <RangeControl
                label={
                  <>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-120 320-280l56-56 64 63v-414l-64 63-56-56 160-160 160 160-56 57-64-64v414l64-63 56 56-160 160Z"/></svg>
                    {__("Height", "cocoblocks")}
                  </>
                }
                value={textDiv.underlineHeight}
                onChange={(value) =>
                  updateUnderlineHeight(
                    slide.id,
                    elementIndex,
                    textIndex,
                    value
                  )
                }
                min={0}
                max={100}
                step={1}
              />
            </div>
            <div className="custom-select">
              <RangeControl
                label={
                  <>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-320 120-480l160-160 57 56-64 64h414l-63-64 56-56 160 160-160 160-56-56 63-64H273l63 64-56 56Z"/></svg>
                    {__("Width", "cocoblocks")}
                  </>
                }
                value={textDiv.underlineWidth}
                onChange={(value) =>
                  updateUnderlineWidth(
                    slide.id,
                    elementIndex,
                    textIndex,
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
                   <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M360-80q-58 0-109-22t-89-60q-38-38-60-89T80-360q0-81 42-148t110-102q20-39 49.5-68.5T350-728q33-68 101-110t149-42q58 0 109 22t89 60q38 38 60 89t22 109q0 85-42 150T728-350q-20 39-49.5 68.5T610-232q-35 68-102 110T360-80Zm0-80q33 0 63.5-10t56.5-30q-58 0-109-22t-89-60q-38-38-60-89t-22-109q-20 26-30 56.5T160-360q0 42 16 78t43 63q27 27 63 43t78 16Zm120-120q33 0 64.5-10t57.5-30q-59 0-110-22.5T403-403q-38-38-60.5-89T320-602q-20 26-30 57.5T280-480q0 42 15.5 78t43.5 63q27 28 63 43.5t78 15.5Zm120-120q18 0 34.5-3t33.5-9q22-60 6.5-115.5T621-621q-38-38-93.5-53.5T412-668q-6 17-9 33.5t-3 34.5q0 42 15.5 78t43.5 63q27 28 63 43.5t78 15.5Zm160-78q20-26 30-57.5t10-64.5q0-42-15.5-78T741-741q-27-28-63-43.5T600-800q-35 0-65.5 10T478-760q59 0 110 22.5t89 60.5q38 38 60.5 89T760-478Z"/></svg>
                    {__("Animation", "cocoblocks")}
                  </>
                }
                value={textDiv.underlineAnimation}
                options={[
                  { label: "None", value: "none" },
                  { label: "Bounce Y", value: "bounceUnderlineTitleDiv" },
                  { label: "Bounce X", value: "bounceUnderlineHorizontalTitleDiv" },
                ]}
                onChange={(value) =>
                  updateUnderlineAnimation(slide.id, elementIndex, textIndex, value)
                }
              />
            </div>
            {textDiv.underlineAnimation !== "none" && (
            <>
            <div className="custom-select">
              <RangeControl
                label={
                  <>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M80-240v-480h80v480H80Zm560 0-57-56 144-144H240v-80h487L584-664l56-56 240 240-240 240Z"/></svg>
                    {__("From", "cocoblocks")}
                  </>
                }
                value={textDiv.underlineAnimationFrom}
                onChange={(value) =>
                  updateUnderlineAnimationFrom(
                    slide.id,
                    elementIndex,
                    textIndex,
                    value
                  )
                }
                min={-100}
                max={100}
                step={1}
              />
            </div>
            <div className="custom-select">
              <RangeControl
                label={
                  <>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-760v-80h80v80h-80Zm0 640v-80h80v80h-80ZM280-760v-80h80v80h-80Zm0 640v-80h80v80h-80ZM120-760v-80h80v80h-80Zm0 640v-80h80v80h-80Zm480 0v-80h80v-560h-80v-80h240v80h-80v560h80v80H600ZM280-320 120-480l160-160 56 56-63 64h287v80H273l63 64-56 56Z"/></svg>
                    {__("To", "cocoblocks")}
                  </>
                }
                value={textDiv.underlineAnimationTo}
                onChange={(value) =>
                  updateUnderlineAnimationTo(
                    slide.id,
                    elementIndex,
                    textIndex,
                    value
                  )
                }
                min={-100}
                max={100}
                step={1}
              />
            </div>
            <div className="custom-select">
              <RangeControl
                label={
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m296-345-56-56 240-240 240 240-56 56-184-183-184 183Z"/></svg>
                    {__("Initial size", "cocoblocks")}
                  </>
                }
                value={textDiv.underlineFromSizeNew}
                onChange={(value) =>
                  updateUnderlineFromSizeNew(
                    slide.id,
                    elementIndex,
                    textIndex,
                    value
                  )
                }
                min={0}
                max={150}
                step={1}
              />
            </div>
            <div className="custom-select">
            <RangeControl
                label={
                  <>
                 <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m296-105-56-56 240-240 240 240-56 56-184-183-184 183Zm0-240-56-56 240-240 240 240-56 56-184-183-184 183Zm0-240-56-56 240-240 240 240-56 56-184-183-184 183Z"/></svg>
                    {__("Final size", "cocoblocks")}
                  </>
                }
                value={textDiv.underlineToSizeNew}
                onChange={(value) =>
                  updateUnderlineToSizeNew(
                    slide.id,
                    elementIndex,
                    textIndex,
                    value
                  )
                }
                min={0}
                max={150}
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
                value={textDiv.underlineAnimationTransition}
                onChange={(value) =>
                  updateUnderlineAnimationTransition(
                    slide.id,
                    elementIndex,
                    textIndex,
                    value
                  )
                }
                min={0}
                max={10}
                step={.1}
              />
            </div>
            </>
            )}
            </>
            )}
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
                    value={textDiv.parallaxTitle}
                    onChange={(newParallaxTitle) =>
                      updateParallaxTitle(
                        slide.id,
                        elementIndex,
                        textIndex,
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
                    value={textDiv.parallaxTitleY}
                    onChange={(newParallaxTitleY) =>
                      updateParallaxTitleY(
                        slide.id,
                        elementIndex,
                        textIndex,
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
                    value={textDiv.parallaxTitleScale}
                    onChange={(newParallaxTitleScale) =>
                      updateParallaxTitleScale(
                        slide.id,
                        elementIndex,
                        textIndex,
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
                    value={textDiv.parallaxTitleOpacity}
                    onChange={(newParallaxTitleOpacity) =>
                      updateParallaxTitleOpacity(
                        slide.id,
                        elementIndex,
                        textIndex,
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
                    value={textDiv.parallaxTitleDuration}
                    onChange={(newParallaxTitleDuration) =>
                      updateParallaxTitleDuration(
                        slide.id,
                        elementIndex,
                        textIndex,
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

export default TextControlsBlock;
