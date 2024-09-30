import React from "react";
import {
  Button,
  ButtonGroup,
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
import SectionSelector from "./sectionSelector";
import IconControlsInnerHover from "./IconControlsInnerHover";
import BoxShadowIconBlock from "./boxShadowIconBlock";
import IconModal from "./IconModal";

const IconControlsInner = ({
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
  iconDiv,
  iconIndex
}) => {
  // Inizializza lo stato locale utilizzando element.playState
  const [playState, setPlayState] = useState(iconDiv.playState || "");


  // Funzione per alternare il valore dello stato
  const togglePlayState = () => {
    const newState = playState === "play" ? "" : "play";
    setPlayState(newState);
    // Aggiorna element.playState piuttosto che attributes.playState
    iconDiv.playState = newState;
    setAttributes({ elements: [...slides] }); // Oppure aggiorna la struttura dati appropriata
  };

    // nascondi il titolo in editor
    const [hideTitle, setHideTitle] = useState(iconDiv.hideTitle || "");

    const toggleHideTitle = () => {
      const newState = hideTitle === "hide" ? "" : "hide";
      setHideTitle(newState);
    
      iconDiv.hideTitle = newState;
      setAttributes({ elements: [...slides] }); // Oppure aggiorna la struttura dati appropriata
    };

  // Remove icon
  const removeSlideTitle = (slideId, divIndex, innerIndex) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerElements: element.innerElements.filter(
                      (innerElement, eIndex) => !(innerElement.type === "icon" && eIndex === innerIndex)
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
  const updateTextAlign = (slideId, divIndex, innerIndex, align) => {
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
                        eIndex === innerIndex && innerElement.type === "icon"
                          ? { ...innerElement, textAlign: align }
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

  // Update Text color
  const updateSlideTextColor = (slideId, divIndex, innerIndex, color) => {
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
                        eIndex === innerIndex && innerElement.type === "icon"
                          ? { ...innerElement, textColor: color }
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

   // Update hide
   const updateDelayHide = (slideId, divIndex, innerIndex, value) => {
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
                        eIndex === innerIndex && innerElement.type === "icon"
                          ? { ...innerElement, delayHide: value }
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

     // Update hide seconds
     const updateDelaySeconds = (slideId, divIndex, innerIndex, value) => {
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
                          eIndex === innerIndex && innerElement.type === "icon"
                            ? { ...innerElement, delaySeconds: value }
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

    // Update hide transition
    const updateDelayTransition = (slideId, divIndex, innerIndex, value) => {
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
                          eIndex === innerIndex && innerElement.type === "icon"
                            ? { ...innerElement, delayTransition: value }
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
  const updateBorderStyle = (slideId, divIndex, innerIndex, newBorderStyle) => {
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
                        eIndex === innerIndex && innerElement.type === "icon"
                          ? { ...innerElement, borderStyle: newBorderStyle }
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
  const updateRotate = (slideId, divIndex, innerIndex, rotate) => {
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
                        eIndex === innerIndex && innerElement.type === "icon"
                          ? { ...innerElement, rotate: rotate }
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
  const updateOpacity = (slideId, divIndex, innerIndex, opacity) => {
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
                        eIndex === innerIndex && innerElement.type === "icon"
                          ? { ...innerElement, opacity: opacity }
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

  // Width
  const updateWidthTitle = (
    slideId,
    divIndex,
    innerIndex,
    newWidthTitle
  ) => {
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
                        eIndex === innerIndex && innerElement.type === "icon"
                          ? { ...innerElement, widthTitle: newWidthTitle }
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

  // Custom width
  const updateCustomWidthTitle = (
    slideId,
    divIndex,
    innerIndex,
    customWidth
  ) => {
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
                        eIndex === innerIndex && innerElement.type === "icon"
                          ? { ...innerElement, widthCustomTitle: customWidth }
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

  // Size
  const updateFontSize = (slideId, divIndex, innerIndex, newSize) => {
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
                        eIndex === innerIndex && innerElement.type === "icon"
                          ? { ...innerElement, fontSize: newSize }
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
// Update Font Size for Tablet
const updateFontSizeTablet = (slideId, divIndex, innerIndex, newSizeTablet) => {
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
                      eIndex === innerIndex && innerElement.type === "icon"
                        ? { ...innerElement, fontSizeTablet: newSizeTablet }
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

// Update Font Size for Mobile
const updateFontSizeMobile = (slideId, divIndex, innerIndex, newSizeMobile) => {
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
                      eIndex === innerIndex && innerElement.type === "icon"
                        ? { ...innerElement, fontSizeMobile: newSizeMobile }
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
  const updateDurationEffect = (slideId, divIndex, innerIndex, newDurationEffect) => {
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
                        eIndex === innerIndex && innerElement.type === "icon"
                          ? { ...innerElement, durationEffect: newDurationEffect }
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

  // Delay effect
  const updateDelayEffect = (slideId, divIndex, innerIndex, newDelayEffect) => {
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
                        eIndex === innerIndex && innerElement.type === "icon"
                          ? { ...innerElement, delayEffect: newDelayEffect }
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
  const updateTitleBackgroundBorderColor = (slideId, divIndex, innerIndex, color) => {
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
                        eIndex === innerIndex && innerElement.type === "icon"
                          ? { ...innerElement, backgroundBorderColor: color }
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

  // Width border
  const updateTitleBackgroundBorderSize = (slideId, divIndex, innerIndex, newSize) => {
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
                        eIndex === innerIndex && innerElement.type === "icon"
                          ? { ...innerElement, backgroundBorderSize: newSize }
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

  // Update background color
  const updateSlideBackgroundColor = (slideId, divIndex, innerIndex, value) => {
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
                        eIndex === innerIndex && innerElement.type === "icon"
                          ? { ...innerElement, backgroundColor: value }
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

  // Border radius
const updateTitleBackgroundBorderRadius = (slideId, divIndex, innerIndex, newRadius) => {
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
                      eIndex === innerIndex && innerElement.type === "icon"
                        ? { ...innerElement, backgroundBorderRadius: newRadius }
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

  // Padding title
  const updatenewPaddingtitle = (slideId, divIndex, innerIndex, newPaddingtitle) => {
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
                    innerElements: element.innerElements.map(
                      (innerElement, eIndex) =>
                        eIndex === innerIndex && innerElement.type === "icon"
                          ? {
                              ...innerElement,
                              paddingTitle: {
                                top: addUnit(newPaddingtitle.top || "0", "px"),
                                right: addUnit(newPaddingtitle.right || "0", "px"),
                                bottom: addUnit(newPaddingtitle.bottom || "0", "px"),
                                left: addUnit(newPaddingtitle.left || "0", "px"),
                              },
                            }
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

  // Margin title
  const updatenewMargintitle = (slideId, divIndex, innerIndex, newMargintitle) => {
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
                    innerElements: element.innerElements.map(
                      (innerElement, eIndex) =>
                        eIndex === innerIndex && innerElement.type === "icon"
                          ? {
                              ...innerElement,
                              marginTitle: {
                                top: addUnit(newMargintitle.top || "0", "px"),
                                right: addUnit(newMargintitle.right || "0", "px"),
                                bottom: addUnit(newMargintitle.bottom || "0", "px"),
                                left: addUnit(newMargintitle.left || "0", "px"),
                              },
                            }
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
  

  // Parallax text x
  const updateParallaxTitle = (slideId, divIndex, innerIndex, newParallaxTitle) => {
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
                        eIndex === innerIndex && innerElement.type === "icon"
                          ? { ...innerElement, parallaxTitle: newParallaxTitle }
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

  // Parallax text y
  const updateParallaxTitleY = (slideId, divIndex, innerIndex, newParallaxTitleY) => {
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
                        eIndex === innerIndex && innerElement.type === "icon"
                          ? { ...innerElement, parallaxTitleY: newParallaxTitleY }
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

// Update Parallax Title Scale
const updateParallaxTitleScale = (slideId, divIndex, innerIndex, newParallaxTitleScale) => {
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
                      eIndex === innerIndex && innerElement.type === "icon"
                        ? { ...innerElement, parallaxTitleScale: newParallaxTitleScale }
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

  // Parallax text opacity
  const updateParallaxTitleOpacity = (slideId, divIndex, innerIndex, newParallaxTitleOpacity) => {
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
                        eIndex === innerIndex && innerElement.type === "icon"
                          ? { ...innerElement, parallaxTitleOpacity: newParallaxTitleOpacity }
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

  // Parallax text duration
  const updateParallaxTitleDuration = (slideId, divIndex, innerIndex, newParallaxTitleDuration) => {
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
                        eIndex === innerIndex && innerElement.type === "icon"
                          ? { ...innerElement, parallaxTitleDuration: newParallaxTitleDuration }
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

// Update Text Animation
const updateTextAnimation = (slideId, divIndex, innerIndex, animation) => {
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
                      eIndex === innerIndex && innerElement.type === "icon"
                        ? { ...innerElement, animation: animation }
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

  // Selector link
  const updateTextLink = (slideId, divIndex, innerIndex, value) => {
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
                        eIndex === innerIndex && innerElement.type === "icon"
                          ? { ...innerElement, textLink: value }
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
  // Link Url
  const updateLinkUrl = (slideId, divIndex, innerIndex, url) => {
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
                        eIndex === innerIndex && innerElement.type === "icon"
                          ? { ...innerElement, linkUrl: url }
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

// Link Scroll
const updateScrollToId = (slideId, divIndex, innerIndex, id) => {
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
                      eIndex === innerIndex && innerElement.type === "icon"
                        ? { ...innerElement, scrollToId: id }
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

  // Link Target
  const updateLinkTarget = (slideId, divIndex, innerIndex, value) => {
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
                        eIndex === innerIndex && innerElement.type === "icon"
                          ? { ...innerElement, linkTarget: value }
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

  // Link Rel
  const updateLinkRel = (slideId, divIndex, innerIndex, value) => {
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
                        eIndex === innerIndex && innerElement.type === "icon"
                          ? { ...innerElement, linkRel: value }
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

  // interaction animation
  const updateInteration = (slideId, divIndex, innerIndex, value) => {
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
                        eIndex === innerIndex && innerElement.type === "icon"
                          ? { ...innerElement, interation: value }
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

  // Update animation icon
  const updateIconAnimation = (slideId, divIndex, innerIndex, value) => {
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
                        eIndex === innerIndex && innerElement.type === "icon"
                          ? { ...innerElement, iconAnimation: value }
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

  // Update animation icon transition
  const updateIconAnimationDuration = (slideId, divIndex, innerIndex, value) => {
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
                        eIndex === innerIndex && innerElement.type === "icon"
                          ? { ...innerElement, iconAnimationDuration: value }
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
  // Enable Desktop
const updateEnableDesktopTitle = (slideId, divIndex, innerIndex, value) => {
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
                      eIndex === innerIndex && innerElement.type === "icon"
                        ? { ...innerElement, enableDesktopTitle: value }
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


// Enable Tablet
const updateEnableTabletTitle = (slideId, divIndex, innerIndex, value) => {
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
                      eIndex === innerIndex && innerElement.type === "icon"
                        ? { ...innerElement, enableTabletTitle: value }
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

// Enable Mobile
const updateEnableMobileTitle = (slideId, divIndex, innerIndex, value) => {
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
                      eIndex === innerIndex && innerElement.type === "icon"
                        ? { ...innerElement, enableMobileTitle: value }
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

    // Z index
    const updateZindexIcon = (slideId, divIndex, innerIndex, value) => {
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
                          eIndex === innerIndex && innerElement.type === "icon"
                            ? { ...innerElement, zIndexIcon: value }
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
   
  // Open panel
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

 // Icone
 const [isModalOpen, setIsModalOpen] = useState(false);

 const openIconModal = () => {
   setIsModalOpen(true);
 };

 const closeIconModal = () => {
   setIsModalOpen(false);
 };

 const handleSelectIcon = (iconClass) => {
   // Chiudi il modale
   closeIconModal();
   
   // Aggiorna l'icona nell'elemento
   updateSlideIcon(slide.id, elementIndex,iconIndex, iconClass);
 };

 const updateSlideIcon = (slideId, divIndex, innerIndex,  newIcon) => {
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
                      eIndex === innerIndex && innerElement.type === "icon"
                        ? { ...innerElement, icon: newIcon }
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
    <div className="divider-controls"></div>
    <div className="title-block-added">
      <div className="title-element">
      {iconDiv.icon && <i className={iconDiv.icon} style={{fontSize:'18px',color:'var(--light-color)',marginRight:'3px'}}></i>}
      <h2>{__('Icon','cocoblock')}</h2>
      </div>
      <div className="title-element">
      <Button
          isDestructive
          onClick={() => removeSlideTitle(slide.id, elementIndex,iconIndex)}
          className="button-remove-element"
          label={__("Remove Icon", "cocoblocks")}
          icon={trash}
        ></Button>
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
            <div className="add-icon-button-select">
              <div className="title-add-icon-button">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H260Zm0-80h480q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-83 0-141.5 58.5T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41Zm220-240Z"/></svg>
              <h2>{__('Select Icon','cocoblock')}</h2>
              </div>
              <div className="add-icon-button">
        <Button onClick={openIconModal}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg></Button>
        </div>
        </div>
          </div>
        {isModalOpen && (
      <IconModal
        isOpen={isModalOpen}
        onClose={closeIconModal}
        onSelectIcon={(iconName) => {
          handleSelectIcon(iconName); // Chiude il modale e aggiorna l'icona
        }}
      />
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
                    <path d="M120-120v-720h80v720h-80Zm640 0v-720h80v720h-80ZM280-440v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Z" />
                  </svg>
                  {__("Width", "cocoblocks")}
                </>
              }
              value={iconDiv.widthTitle}
              onChange={(newElement) =>
                updateWidthTitle(slide.id, elementIndex,iconIndex, newElement)
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
          {iconDiv.widthTitle !== "auto" && (
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
          {iconDiv.widthTitle === "custom" && (
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
                  value={iconDiv.widthCustomTitle}
                  onChange={(customWidth) =>
                    updateCustomWidthTitle(
                      slide.id,
                      elementIndex,
                      iconIndex,
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
              value={iconDiv.textAlign}
              onChange={(align) =>
                updateTextAlign(slide.id, elementIndex, iconIndex, align)
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
                value={iconDiv.fontSize}
                onChange={(newSize) =>
                  updateFontSize(slide.id, elementIndex, iconIndex, newSize)
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
                value={iconDiv.fontSizeTablet}
                onChange={(newSizeTablet) =>
                  updateFontSizeTablet(slide.id, elementIndex, iconIndex, newSizeTablet)
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
                value={iconDiv.fontSizeMobile}
                onChange={(newSizeMobile) =>
                  updateFontSizeMobile(slide.id, elementIndex, iconIndex, newSizeMobile)
                }
                min={4}
                max={500}
                step={1}
              />
            )}
          </div>
          <div className="custom-select color">
            <ColorOptionsPanel
              colorNormal={iconDiv.textColor}
              setColorNormal={(color) =>
                updateSlideTextColor(slide.id, elementIndex, iconIndex, color)
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
              colorNormal={iconDiv.backgroundColor}
              setColorNormal={(value) =>
                updateSlideBackgroundColor(slide.id, elementIndex, iconIndex, value)
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
              values={iconDiv.paddingTitle}
              units={{}}
              onChange={(newPaddingtitle) =>
                updatenewPaddingtitle(slide.id, elementIndex, iconIndex, newPaddingtitle)
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
              values={iconDiv.marginTitle}
              units={{}}
              onChange={(newMargintitle) =>
                updatenewMargintitle(slide.id, elementIndex, iconIndex, newMargintitle)
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
              value={iconDiv.borderStyle}
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
                updateBorderStyle(slide.id, elementIndex, iconIndex, newBorderStyle)
              }
            />
          </div>
          {iconDiv.borderStyle !== "none" && (
            <>
              <div className="custom-select color">
                <ColorOptionsPanel
                  colorNormal={iconDiv.backgroundBorderColor}
                  setColorNormal={(color) =>
                    updateTitleBackgroundBorderColor(
                      slide.id,
                      elementIndex,
                      iconIndex,
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
                  value={iconDiv.backgroundBorderSize}
                  onChange={(newSize) =>
                    updateTitleBackgroundBorderSize(
                      slide.id,
                      elementIndex,
                      iconIndex,
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
                  value={iconDiv.backgroundBorderRadius}
                  onChange={(newRadius) =>
                    updateTitleBackgroundBorderRadius(
                      slide.id,
                      elementIndex,
                      iconIndex,
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
              value={iconDiv.rotate}
              onChange={(rotate) =>
                updateRotate(slide.id, elementIndex, iconIndex, rotate)
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
              value={iconDiv.opacity}
              onChange={(opacity) =>
                updateOpacity(slide.id, elementIndex, iconIndex, opacity)
              }
              min={0}
              max={1}
              step={0.1}
            />
          </div>
        </div>
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
              value={iconDiv.zIndexIcon}
              onChange={(value) =>
                updateZindexIcon(slide.id, elementIndex, iconIndex, value)
              }
              min={0}
              max={999}
              step={1}
            />
          </div>
        </div>
        <BoxShadowIconBlock
          slide={slide}
          slides={slides}
          element={element}
          elementIndex={elementIndex}
          setAttributes={setAttributes}
          iconIndex={iconIndex}
          iconDiv={iconDiv}
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
                  {__("Animation In", "cocoblocks")}
                </>
              }
              value={iconDiv.animation}
              options={[
                { label: "None", value: "none" },
                { label: "Fade In", value: "fade-in-icon-inner" },
                { label: "Fade In Left", value: "fade-in-left-icon-inner" },
                { label: "Fade In Right", value: "fade-in-right-icon-inner" },
                { label: "Fade In Top", value: "fade-in-top-icon-inner" },
                { label: "Fade In Bottom", value: "fade-in-bottom-icon-inner" },
                { label: "Slide In Left", value: "slide-in-left-icon-inner" },
                { label: "Slide In Right", value: "slide-in-right-icon-inner" },
                { label: "Slide In Top", value: "slide-in-top-icon-inner" },
                { label: "Slide In Bottom", value: "slide-in-bottom-icon-inner" },
                { label: "Zoom In", value: "zoom-in-icon-inner" },
                { label: "Zoom In Left", value: "zoom-in-left-icon-inner" },
                { label: "Zoom In Right", value: "zoom-in-right-icon-inner" },
                { label: "Zoom In Top", value: "zoom-in-top-icon-inner" },
                { label: "Zoom In Bottom", value: "zoom-in-bottom-icon-inner" },
                { label: "Rotate In Left", value: "rotate-in-left-icon-inner" },
                { label: "Rotate In Right", value: "rotate-in-right-icon-inner" },
                { label: "Rotate In Top", value: "rotate-in-top-icon-inner" },
                { label: "Rotate In Bottom", value: "rotate-in-bottom-icon-inner" },
                { label: "Rotate Continuos", value: "rotate-continuous-icon-inner" },
                { label: "Bounce in", value: "bounce-effect-icon-inner" },
                { label: "Bounce in Left", value: "bounce-left-effect-icon-inner" },
                { label: "Bounce in Right", value: "bounce-right-effect-icon-inner" },
                { label: "Bounce in Top", value: "bounce-top-effect-icon-inner" },
                { label: "Bounce in Bottom", value: "bounce-bottom-effect-icon-inner" },
                { label: "Wiggle", value: "wiggle-icon-inner" },
                { label: "Flip", value: "flip-icon-inner" },
                { label: "Swing", value: "swing-icon-inner" },
                { label: "Rubber band", value: "rubber-band-icon-inner" },
                { label: "Stretch", value: "stretch-icon-inner" },
              ]}
              onChange={(animation) =>
                updateTextAnimation(slide.id, elementIndex, iconIndex, animation)
              }
            />
          </div>
          {iconDiv.animation !== "none" && (
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
                    value={iconDiv.durationEffect}
                    onChange={(newDurationEffect) =>
                      updateDurationEffect(
                        slide.id,
                        elementIndex,
                        iconIndex,
                        newDurationEffect
                      )
                    }
                    min={0.1}
                    max={15}
                    step={0.1}
                  />
                </div>
           
            {![
            "bounce-effect-icon-inner",
            "bounce-left-effect-icon-inner",
            "bounce-right-effect-icon-inner",
            "bounce-top-effect-icon-inner",
            "bounce-bottom-effect-icon-inner",
            "stretch-icon-inner",
            "wiggle-icon-inner",
            "swing-icon-inner",
            "rubber-band-icon-inner",
          ].includes(iconDiv.animation) && (
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
                      <path d="M320-160h320v-120q0-66-47-113t-113-47q-66 0-113 47t-47 113v120ZM160-80v-80h80v-120q0-61 28.5-114.5T348-480q-51-32-79.5-85.5T240-680v-120h-80v-80h640v80h-80v120q0 61-28.5 114.5T612-480q51 32 79.5 85.5T720-280v120h80v80H160Z" />
                    </svg>
                    {__("Delay", "cocoblocks")}
                  </>
                }
                value={iconDiv.delayEffect}
                onChange={(newDelayEffect) =>
                  updateDelayEffect(slide.id, elementIndex, iconIndex, newDelayEffect)
                }
                min={0}
                max={10}
                step={0.1}
              />
            </div>
            </>
          )}
          {[
            "bounce-effect-icon-inner",
            "bounce-left-effect-icon-inner",
            "bounce-right-effect-icon-inner",
            "bounce-top-effect-icon-inner",
            "bounce-bottom-effect-icon-inner",
            "wiggle-icon-inner",
            "flip-icon-inner",
            "swing-icon-inner",
            "rubber-band-icon-inner",
          ].includes(iconDiv.animation) && (
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
                value={iconDiv.interation}
                options={[
                  { label: "Forwards", value: "forwards" },
                  { label: "Infinite", value: "infinite" },
                ]}
                onChange={(value) =>
                  updateInteration(slide.id, elementIndex, iconIndex, value)
                }
              />
            </div>
          )}
           </>
          )}
           <div className="custom-select select-control-label-right">
            <SelectControl
              label={
                <>
                 <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M360-80q-58 0-109-22t-89-60q-38-38-60-89T80-360q0-81 42-148t110-102q20-39 49.5-68.5T350-728q33-68 101-110t149-42q58 0 109 22t89 60q38 38 60 89t22 109q0 85-42 150T728-350q-20 39-49.5 68.5T610-232q-35 68-102 110T360-80Zm0-80q33 0 63.5-10t56.5-30q-58 0-109-22t-89-60q-38-38-60-89t-22-109q-20 26-30 56.5T160-360q0 42 16 78t43 63q27 27 63 43t78 16Zm120-120q33 0 64.5-10t57.5-30q-59 0-110-22.5T403-403q-38-38-60.5-89T320-602q-20 26-30 57.5T280-480q0 42 15.5 78t43.5 63q27 28 63 43.5t78 15.5Zm120-120q18 0 34.5-3t33.5-9q22-60 6.5-115.5T621-621q-38-38-93.5-53.5T412-668q-6 17-9 33.5t-3 34.5q0 42 15.5 78t43.5 63q27 28 63 43.5t78 15.5Zm160-78q20-26 30-57.5t10-64.5q0-42-15.5-78T741-741q-27-28-63-43.5T600-800q-35 0-65.5 10T478-760q59 0 110 22.5t89 60.5q38 38 60.5 89T760-478Z"/></svg>
                  {__("Animation", "cocoblocks")}
                </>
              }
              value={iconDiv.iconAnimation}
              onChange={(value) =>
                updateIconAnimation(slide.id, elementIndex, iconIndex, value)
              }
              options={[
                {
                  label: __("None", "cocoblocks"),
                  value: "none",
                },
                {
                  label: __("Beat", "cocoblocks"),
                  value: "fa-beat",
                },
                {
                  label: __("Fade", "cocoblocks"),
                  value: "fa-fade",
                },
                {
                  label: __("Beat-fade", "cocoblocks"),
                  value: "fa-beat-fade",
                },
                {
                  label: __("Bounce", "cocoblocks"),
                  value: "fa-bounce",
                },
                {
                  label: __("Flip", "cocoblocks"),
                  value: "fa-flip",
                },
                {
                  label: __("Shake", "cocoblocks"),
                  value: "fa-shake",
                },
                {
                  label: __("Spin", "cocoblocks"),
                  value: "fa-spin",
                },
              ]}
            />
          </div>
          {iconDiv.iconAnimation !== "none" && (
          <div className="custom-select">
                <RangeControl
                  label={
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z"/></svg>
                      {__("Duration", "cocoblocks")}
                    </>
                  }
                  value={iconDiv.iconAnimationDuration}
                  onChange={(value) =>
                    updateIconAnimationDuration(
                      slide.id,
                      elementIndex,
                      iconIndex,
                      value
                    )
                  }
                  min={.1}
                  max={10}
                  step={.1}
                />
              </div>
          )}
          {iconDiv.animation !== "none" && (
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
        <div className="content-title-custom-panel intermedy">
          <h2 className="title-custom-panel">
            {__("Advanced", "cocoblocks")}
          </h2>
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
              checked={iconDiv.delayHide}
              onChange={(value) =>
                updateDelayHide(
                  slide.id,
                  elementIndex,
                  iconIndex,
                  value
                )
              }
            />
          </div>
          {iconDiv.delayHide && (
          <>
          <div className="custom-select">
            <RangeControl
              label={
                <>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M360-270h160q33 0 56.5-23.5T600-350v-50q0-33-23.5-56.5T520-480h-80v-50h160v-80H360v210h160v50H360v80Zm0-570v-80h240v80H360ZM480-80q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z"/></svg>
                  {__("Seconds", "cocoblocks")}
                </>
              }
              value={iconDiv.delaySeconds}
              onChange={(value) =>
                updateDelaySeconds(
                  slide.id,
                  elementIndex,
                  iconIndex,
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
              value={iconDiv.delayTransition}
              onChange={(value) =>
                updateDelayTransition(
                  slide.id,
                  elementIndex,
                  iconIndex,
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
    {activeSection === "hover" && (
      <>
        <IconControlsInnerHover
          slide={slide}
          slides={slides}
          element={element}
          elementIndex={elementIndex}
          setAttributes={setAttributes}
          iconDiv={iconDiv}
          iconIndex={iconIndex}
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
              value={iconDiv.textLink}
              options={[
                { label: "None", value: "none" },
                { label: "Link", value: "link" },
                { label: "Scroll Below Slider", value: "scroll-below" },
                { label: "Scroll to ID Element", value: "scroll-to-id" },
              ]}
              onChange={(value) =>
                updateTextLink(slide.id, elementIndex, iconIndex, value)
              }
            />
          </div>
          {iconDiv.textLink === "link" && (
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
                  value={iconDiv.linkUrl}
                  onChange={(value) =>
                    updateLinkUrl(slide.id, elementIndex, iconIndex, value)
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
                  value={iconDiv.linkTarget}
                  options={[
                    { label: "Same Window", value: "_self" },
                    { label: "New Window", value: "_blank" },
                  ]}
                  onChange={(value) =>
                    updateLinkTarget(slide.id, elementIndex, iconIndex, value)
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
                  value={iconDiv.linkRel}
                  options={[
                    { label: "Follow Link", value: "follow" },
                    { label: "No Follow", value: "nofollow" },
                  ]}
                  onChange={(value) =>
                    updateLinkRel(slide.id, elementIndex, iconIndex, value)
                  }
                />
              </div>
            </>
          )}
          {iconDiv.textLink === "scroll-to-id" && (
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
                value={iconDiv.scrollToId}
                onChange={(value) =>
                  updateScrollToId(slide.id, elementIndex, iconIndex, value)
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
              checked={iconDiv.enableDesktopTitle}
              onChange={(value) =>
                updateEnableDesktopTitle(slide.id, elementIndex, iconIndex, value)
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
              checked={iconDiv.enableTabletTitle}
              onChange={(value) =>
                updateEnableTabletTitle(slide.id, elementIndex, iconIndex, value)
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
              checked={iconDiv.enableMobileTitle}
              onChange={(value) =>
                updateEnableMobileTitle(slide.id, elementIndex, iconIndex, value)
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
                  value={iconDiv.parallaxTitle}
                  onChange={(newParallaxTitle) =>
                    updateParallaxTitle(
                      slide.id,
                      elementIndex,
                      iconIndex,
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
                  value={iconDiv.parallaxTitleY}
                  onChange={(newParallaxTitleY) =>
                    updateParallaxTitleY(
                      slide.id,
                      elementIndex,
                      iconIndex,
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
                  value={iconDiv.parallaxTitleScale}
                  onChange={(newParallaxTitleScale) =>
                    updateParallaxTitleScale(
                      slide.id,
                      elementIndex,
                      iconIndex,
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
                  value={iconDiv.parallaxTitleOpacity}
                  onChange={(newParallaxTitleOpacity) =>
                    updateParallaxTitleOpacity(
                      slide.id,
                      elementIndex,
                      iconIndex,
                      newParallaxTitleOpacity
                    )
                  }
                  min={0.1}
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
                  value={iconDiv.parallaxTitleDuration}
                  onChange={(newParallaxTitleDuration) =>
                    updateParallaxTitleDuration(
                      slide.id,
                      elementIndex,
                      iconIndex,
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
    {activeSection === "hide-title-editor" && (
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
        variant={hideTitle === "hide"}
        onClick={toggleHideTitle}
        icon={
          hideTitle === "hide" ? (
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
    </>
    )}
    </div>
  );
};

export default IconControlsInner;
