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
import { useState} from "react";
import { __ } from "@wordpress/i18n";
import { trash } from "@wordpress/icons";
import AlignmentControlFour from "./aligncontrol-four";
import AlignmentControlFive from "./aligncontrol-five";
import ColorOptionsPanel from "./colorPanel";
import FontStyle from "./font-style";
import SectionSelectorMenu from "./sectionSelectorMenu";
import MenuControlsHover from "./MenuControlsHover";
import BoxShadowControlMenu from "./boxShadowMenu";
import { __experimentalLinkControl as LinkControl } from "@wordpress/block-editor";

const MenuInnerControls = ({
  slide,
  menuDiv,
  menuIndex,
  element,
  elementIndex,
  slides,
  setAttributes,
  setActiveSection,
  activeSection,
  device,
  handleDesktopClick,
  handleTabletClick,
  handleMobileClick,
  showOtherButtons,
  attributes,
}) => {

    // nascondi il menu in editor
    const [hideTitle, setHideTitle] = useState(element.hideTitle || "");

    const toggleHideTitle = () => {
      const newState = hideTitle === "hide" ? "" : "hide";
      setHideTitle(newState);
    
      element.hideTitle = newState;
      setAttributes({ elements: [...slides] }); // Oppure aggiorna la struttura dati appropriata
    };

  // Remove Text
  const removeSlideTitle = (slideId,  divIndex, innerIndex) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
      ? {
        ...slide,
        elements: slide.elements.map((element, i) =>
          element.type === "div" && i === divIndex
            ? {
                ...element,
                innerElements: element.innerElements.filter(
                  (innerElement, eIndex) => eIndex !== innerIndex
                ),
              }
            : element
        ),
      }
    : slide
    );
    setAttributes({ slides: updatedSlides });
  };


  const [menuItems, setMenuItems] = useState(
    element.menuItems || [{ text: "Home", link: "",openInNewTab: false }]
  );
  
  const addMenuItem = () => {
    const newItem = { text: `Item ${menuItems.length + 1}`, link: "",openInNewTab: false }; // Rimuovi opensInNewTab
    const updatedMenuItems = [...menuItems, newItem];
    setMenuItems(updatedMenuItems);
  
    // Aggiorna l'elemento nel contesto delle slide
    const updatedSlides = slides.map((s) =>
      s.id === slide.id
        ? {
            ...s,
            elements: s.elements.map((el, idx) =>
              idx === elementIndex ? { ...el, menuItems: updatedMenuItems } : el
            ),
          }
        : s
    );
    setAttributes({ slides: updatedSlides });
  };
  
  const updateMenuItem = (index, key, value) => {
    const updatedMenuItems = menuItems.map((item, idx) =>
      idx === index ? { ...item, [key]: value } : item
    );
    setMenuItems(updatedMenuItems);
  
    // Aggiorna l'elemento nel contesto delle slide
    const updatedSlides = slides.map((s) =>
      s.id === slide.id
        ? {
            ...s,
            elements: s.elements.map((el, idx) =>
              idx === elementIndex ? { ...el, menuItems: updatedMenuItems } : el
            ),
          }
        : s
    );
    setAttributes({ slides: updatedSlides });
  };
  
  const removeMenuItem = (index) => {
    const updatedMenuItems = menuItems.filter((_, idx) => idx !== index);
    setMenuItems(updatedMenuItems);

    // Aggiorna l'elemento nel contesto delle slide
    const updatedSlides = slides.map((s) =>
      s.id === slide.id
        ? {
            ...s,
            elements: s.elements.map((el, idx) =>
              idx === elementIndex ? { ...el, menuItems: updatedMenuItems } : el
            ),
          }
        : s
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Text align
  const updateTextAlign = (slideId, index, align) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "menu" && i === index
                ? { ...element, textAlign: align }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

    // Update Text align items
    const updateTextAlignItems = (slideId, index, align) => {
      const updatedSlides = slides.map((slide) =>
        slide.id === slideId
          ? {
              ...slide,
              elements: slide.elements.map((element, i) =>
                element.type === "menu" && i === index
                  ? { ...element, textAlignItems: align }
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
                        eIndex === innerIndex && innerElement.type === "menu"
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

    // Update background color
    const updateSlideBackgroundColor = (slideId, index, color) => {
      const updatedSlides = slides.map((slide) =>
        slide.id === slideId
          ? {
              ...slide,
              elements: slide.elements.map((element, i) =>
                element.type === "menu" && i === index
                  ? { ...element, backgroundColor: color }
                  : element
              ),
            }
          : slide
      );
      setAttributes({ slides: updatedSlides });
    };

    // Update Toggle color
  const updateSlideToggleColor = (slideId, index, color) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "menu" && i === index
                ? { ...element, toggleColor: color }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

    // Update background color toggle
    const updateSlideBackgroundColorToggle = (slideId, index, color) => {
      const updatedSlides = slides.map((slide) =>
        slide.id === slideId
          ? {
              ...slide,
              elements: slide.elements.map((element, i) =>
                element.type === "menu" && i === index
                  ? { ...element, backgroundColorToggle: color }
                  : element
              ),
            }
          : slide
      );
      setAttributes({ slides: updatedSlides });
    };

  // Update Font Style
  const updateFontStyle = (slideId, index, styleType, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) => {
              if (element.type === "menu" && i === index) {
                const updatedFontStyle = {
                  ...element.fontStyle,
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


  // Update  gap
  const updateGapMenu = (slideId, index, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "menu" && i === index
                ? { ...element, gapMenu: value }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Font Family
  const updateTextFamily = (slideId, index, family) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "menu" && i === index
                ? { ...element, fontFamily: family }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Font Weight
  const updateTextWeight = (slideId, index, weight) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "menu" && i === index
                ? { ...element, fontWeight: weight }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };


  // Direction Toggle
  const updateDirection = (slideId, index, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "menu" && i === index
                ? { ...element, direction: value }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

    // Direction Menu
    const updateDirectionMenu = (slideId, index, value) => {
      const updatedSlides = slides.map((slide) =>
        slide.id === slideId
          ? {
              ...slide,
              elements: slide.elements.map((element, i) =>
                element.type === "menu" && i === index
                  ? { ...element, directionMenu: value }
                  : element
              ),
            }
          : slide
      );
      setAttributes({ slides: updatedSlides });
    };

    // Width menu
    const updateWidthMenu = (slideId, index, value) => {
      const updatedSlides = slides.map((slide) =>
        slide.id === slideId
          ? {
              ...slide,
              elements: slide.elements.map((element, i) =>
                element.type === "menu" && i === index
                  ? { ...element, widthMenu: value }
                  : element
              ),
            }
          : slide
      );
      setAttributes({ slides: updatedSlides });
    };

     // Height menu
     const updateHeightMenu = (slideId, index, value) => {
      const updatedSlides = slides.map((slide) =>
        slide.id === slideId
          ? {
              ...slide,
              elements: slide.elements.map((element, i) =>
                element.type === "menu" && i === index
                  ? { ...element, heightMenu: value }
                  : element
              ),
            }
          : slide
      );
      setAttributes({ slides: updatedSlides });
    };
  // Size
  const updateFontSize = (slideId, index, newSize) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "menu" && i === index
                ? { ...element, fontSize: newSize }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };
  // Size Tablet
  const updateFontSizeTablet = (slideId, index, newSizeTablet) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "menu" && i === index
                ? { ...element, fontSizeTablet: newSizeTablet }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };
  // Size Mobile
  const updateFontSizeMobile = (slideId, index, newSizeMobile) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "menu" && i === index
                ? { ...element, fontSizeMobile: newSizeMobile }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Line height
  const updateLineHeight = (slideId, index, newLineHeight) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "menu" && i === index
                ? { ...element, lineHeight: newLineHeight }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Size Toggle
  const updateSizeToggle = (slideId, index, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "menu" && i === index
                ? { ...element, sizeToggle: value }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };
  // Letter Spacing
  const updateLetterSpacing = (slideId, index, newLetterSpacing) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "menu" && i === index
                ? { ...element, letterSpacing: newLetterSpacing }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

    // Radius toggle
    const updateRadiusToggle = (slideId, index, value) => {
      const updatedSlides = slides.map((slide) =>
        slide.id === slideId
          ? {
              ...slide,
              elements: slide.elements.map((element, i) =>
                element.type === "menu" && i === index
                  ? { ...element, radiusToggle: value }
                  : element
              ),
            }
          : slide
      );
      setAttributes({ slides: updatedSlides });
    };
  

  // Padding title
  const updatenewPaddingtitle = (slideId, index, newPaddingtitle) => {
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
              if (element.type === "menu" && i === index) {
                return {
                  ...element,
                  paddingTitle: {
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
  const updatenewMargintitle = (slideId, index, newMargintitle) => {
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
              if (element.type === "menu" && i === index) {
                return {
                  ...element,
                  marginTitle: {
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

  // Enable Desktop
  const updateEnableDesktopTitle = (slideId, index, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "menu" && i === index
                ? { ...element, enableDesktopTitle: value }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Enable Tablet
  const updateEnableTabletTitle = (slideId, index, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "menu" && i === index
                ? { ...element, enableTabletTitle: value }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Enable Mobile
  const updateEnableMobileTitle = (slideId, index, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "menu" && i === index
                ? { ...element, enableMobileTitle: value }
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

    // Open panel item
    const [openItems, setOpenItems] = useState({});

    const handleToggleItem = (idx) => {
      setOpenItems((prevState) => ({
        ...prevState,
        [idx]: !prevState[idx], // Cambia lo stato solo per l'item selezionato
      }));
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
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
          </svg>
        <h2>{__('Menu','cocoblock')}</h2>
        </div>
        <div className="title-element">
        <Button
            isDestructive
            onClick={() => removeSlideTitle(slide.id, elementIndex, menuIndex)}
            className="button-remove-element"
            label={__("Remove Text", "cocoblocks")}
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
      <SectionSelectorMenu onSectionChange={setActiveSection} />
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
         
     
        {menuItems.map((item, idx) => (
           <div key={idx} className="content-section-panel menu-control" style={{ padding: "0" }}>
         
            <div className="custom-select select-text-control">
              <TextControl
               label={
                <>
                <div className="content-text-input-menu">
                  <div className="title-element">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-280h560v-80H200v80Zm0-160h560v-80H200v80Zm0-160h400v-80H200v80Zm-40 440q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"/></svg>
                  {__("Item text", "cocoblocks")}
                  </div>
                  <div className="title-element">
                          <Button
                        isDestructive
                        onClick={() => removeMenuItem(idx)}
                        className="button-remove-element"
                        label={__("Remove Item", "cocoblocks")}
                        icon={trash}
                      ></Button>
                      <Tooltip  placement="top" text={openItems[idx] ? __('Close Controls', 'slider') : __('Open Controls', 'slider')}>
                <button  onClick={() => handleToggleItem(idx)}  className="button-open-control-element">
                  {openItems[idx] ? (
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed" style={{marginTop:'4px'}}><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed" style={{marginTop:'4px'}}><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                  )}
                </button>
              </Tooltip>
              </div>
              </div>
                </>
              }
                value={item.text}
                onChange={(newValue) => updateMenuItem(idx, "text", newValue)} // Passa solo il valore
                placeholder={__("Add text...", "cocoblocks")}
              />
            </div>
            {openItems[idx] && (
            <>
              <div className="custom-select select-text-control">
              <LinkControl
            value={{ url: item.link }} // Rimuovi opensInNewTab
            onChange={(newLink) => {
              updateMenuItem(idx, "link", newLink.url); // Aggiorna solo il link
            }}
              />
              </div>
              <div className="custom-select">
                    <ToggleControl
                      label={<><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h240v80H200v560h560v-240h80v240q0 33-23.5 56.5T760-120H200Zm440-400v-120H520v-80h120v-120h80v120h120v80H720v120h-80Z"/></svg>{__("Open link in new tab?", "cocoblocks")}</>}
                      checked={item.openInNewTab}
                      onChange={(newValue) => updateMenuItem(idx, "openInNewTab", newValue)}
                    />
                  </div>
            </>
            )}
          </div>
        ))}
             <div
              className="button-add-element"
              style={{ display: "flex", justifyContent: "center" }}
            >
                <Tooltip  placement="top" text={__('Add item','slider')}>
            <button onClick={addMenuItem} label={__("Add item", "slide")}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M680-160v-120H560v-80h120v-120h80v120h120v80H760v120h-80ZM440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm560-40h-80q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480Z"/></svg>
            </button>
            </Tooltip>
            </div>
          <div className="content-section-panel" style={{ padding: "0" }}>
            <div className="custom-select select-control-label-right">
              <SelectControl
                label={
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                    {__("Toggle position", "cocoblocks")}
                  </>
                }
                value={element.direction}
                onChange={(value) =>
                  updateDirection(slide.id, elementIndex, value)
                }
                options={[
                  {
                    label: __("Left", "cocoblocks"),
                    value: "left",
                  },
                  {
                    label: __("Center", "cocoblocks"),
                    value: "top",
                  },
                  {
                    label: __("Right", "cocoblocks"),
                    value: "right",
                  },
                ]}
              />
            </div>
            <div className="custom-select select-control-label-right">
            <SelectControl
                label={
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-240v-80h520v80H120Zm664-40L584-480l200-200 56 56-144 144 144 144-56 56ZM120-440v-80h400v80H120Zm0-200v-80h520v80H120Z"/></svg>
                    {__("Menu position", "cocoblocks")}
                  </>
                }
                value={element.directionMenu}
                onChange={(value) =>
                  updateDirectionMenu(slide.id, elementIndex, value)
                }
                options={(() => {
                  switch (element.direction) {
                    case "left":
                      return [
                        { label: __("Left", "cocoblocks"), value: "menu-left" },
                        { label: __("Top", "cocoblocks"), value: "menu-top" },
                        { label: __("Right", "cocoblocks"), value: "menu-right" },
                        { label: __("Bottom", "cocoblocks"), value: "menu-bottom" },
                      ];
                    case "top":
                      return [
                        { label: __("Top", "cocoblocks"), value: "menu-top" },
                        { label: __("Bottom", "cocoblocks"), value: "menu-bottom" },
                      ];
                    case "right":
                      return [
                        { label: __("Right", "cocoblocks"), value: "menu-right" },
                        { label: __("Top", "cocoblocks"), value: "menu-top" },
                        { label: __("Bottom", "cocoblocks"), value: "menu-bottom" },
                        { label: __("Left", "cocoblocks"), value: "menu-left" },
                      ];
                    default:
                      return [];
                  }
                })()}
              />
            </div>
            {(element.direction !== "top" && !(
          (element.direction === "left" && (element.directionMenu === "menu-top" || element.directionMenu === "menu-bottom")) ||
          (element.direction === "right" && (element.directionMenu === "menu-top" || element.directionMenu === "menu-bottom"))
        )) && (
  
            <div className="custom-select select-control-label-right">
              <SelectControl
                label={
                  <>
                   <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm280-80h280v-560H480v560Z"/></svg>
                    {__("Menu width", "cocoblocks")}
                  </>
                }
                value={element.widthMenu}
                onChange={(value) =>
                  updateWidthMenu(slide.id, elementIndex, value)
                }
                options={[
                  {
                    label: __("50%", "cocoblocks"),
                    value: "half",
                  },
                  {
                    label: __("100%", "cocoblocks"),
                    value: "full",
                  },
                  {
                    label: __("Auto", "cocoblocks"),
                    value: "auto",
                  },
                ]}
              />
            </div>
            )}
              <div className="custom-select select-control-label-right">
              <SelectControl
                label={
                  <>
                   <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm280-80h280v-560H480v560Z"/></svg>
                    {__("Menu height", "cocoblocks")}
                  </>
                }
                value={element.heightMenu}
                onChange={(value) =>
                  updateHeightMenu(slide.id, elementIndex, value)
                }
                options={[
                  {
                    label: __("50%", "cocoblocks"),
                    value: "50%",
                  },
                  {
                    label: __("100%", "cocoblocks"),
                    value: "100%",
                  },
                  {
                    label: __("Auto", "cocoblocks"),
                    value: "auto",
                  },
                ]}
              />
            </div>
            <div className="custom-select">
              <AlignmentControlFour
                value={element.textAlign}
                onChange={(align) =>
                  updateTextAlign(slide.id, elementIndex, align)
                }
              />
            </div>
            <div className="custom-select">
              <AlignmentControlFive
                value={element.textAlignItems}
                onChange={(align) =>
                  updateTextAlignItems(slide.id, elementIndex, align)
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
                  value={element.fontSize}
                  onChange={(newSize) =>
                    updateFontSize(slide.id, elementIndex, newSize)
                  }
                  min={4}
                  max={300}
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
                  value={element.fontSizeTablet}
                  onChange={(newSizeTablet) =>
                    updateFontSizeTablet(slide.id, elementIndex, newSizeTablet)
                  }
                  min={4}
                  max={300}
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
                  value={element.fontSizeMobile}
                  onChange={(newSizeMobile) =>
                    updateFontSizeMobile(slide.id, elementIndex, newSizeMobile)
                  }
                  min={4}
                  max={300}
                  step={1}
                />
              )}
            </div>
            <div className="custom-select">
              <FontStyle
                value={element.fontStyle || {}} // Inizializza con un oggetto vuoto se undefined
                onChange={(styleType, value) =>
                  updateFontStyle(slide.id, elementIndex, styleType, value)
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
                value={element.fontFamily}
                options={fontOptions}
                onChange={(family) =>
                  updateTextFamily(slide.id, elementIndex, family)
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
                value={element.fontWeight}
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
                  updateTextWeight(slide.id, elementIndex, weight)
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
                value={element.lineHeight}
                onChange={(newLineHeight) =>
                  updateLineHeight(slide.id, elementIndex, newLineHeight)
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
                value={element.letterSpacing}
                onChange={(newLetterSpacing) =>
                  updateLetterSpacing(slide.id, elementIndex, newLetterSpacing)
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
                colorNormal={menuDiv.textColor}
                setColorNormal={(color) =>
                  updateSlideTextColor(slide.id, elementIndex, menuIndex, color)
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
            <div className="custom-select color">
              <ColorOptionsPanel
                colorNormal={element.backgroundColor}
                setColorNormal={(color) =>
                  updateSlideBackgroundColor(slide.id, elementIndex, color)
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
            <div className="custom-select color">
              <ColorOptionsPanel
                colorNormal={element.toggleColor}
                setColorNormal={(color) =>
                  updateSlideToggleColor(slide.id, elementIndex, color)
                }
                buttonTitle={__("Toggle Color", "cocoblocks")}
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
                colorNormal={element.backgroundColorToggle}
                setColorNormal={(color) =>
                  updateSlideBackgroundColorToggle(slide.id, elementIndex, color)
                }
                buttonTitle={__("Background Toggle Color", "cocoblocks")}
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
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                    {__("Toggle size", "cocoblocks")}
                  </>
                }
                value={element.sizeToggle}
                onChange={(value) =>
                  updateSizeToggle(slide.id, elementIndex, value)
                }
                options={[
                  {
                    label: __("Small", "cocoblocks"),
                    value: "toggle-small",
                  },
                  {
                    label: __("Medium", "cocoblocks"),
                    value: "toggle-medium",
                  },
                  {
                    label: __("Large", "cocoblocks"),
                    value: "toggle-large",
                  },
                ]}
              />
            </div>
            <div className="custom-select">
              <RangeControl
                label={
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-160 80-320l56-56 64 62v-332l-64 62-56-56 160-160 160 160-56 56-64-62v332l64-62 56 56-160 160Zm240-40v-80h400v80H480Zm0-240v-80h400v80H480Zm0-240v-80h400v80H480Z"/></svg>
                    {__("Border radius Toggle", "cocoblocks")}
                  </>
                }
                value={element.radiusToggle}
                onChange={(value) =>
                  updateRadiusToggle(slide.id, elementIndex, value)
                }
                min={0}
                max={100}
                step={1}
              />
            </div>
          </div>
          <div className="content-title-custom-panel intermedy">
            <h2 className="title-custom-panel">
              {__("Spacings Toggle", "cocoblocks")}
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
                      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Zm120 160q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm160 0q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm160 0q17 0 28.5-11.5T680-640q0-17-11.5-28.5T640-680q-17 0-28.5 11.5T600-640q0 17 11.5 28.5T640-600Zm0 160q17 0 28.5-11.5T680-480q0-17-11.5-28.5T640-520q-17 0-28.5 11.5T600-480q0 17 11.5 28.5T640-440Zm-160 0q17 0 28.5-11.5T520-480q0-17-11.5-28.5T480-520q-17 0-28.5 11.5T440-480q0 17 11.5 28.5T480-440Zm-160 0q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Z" />
                    </svg>
                    {__("Margin", "cocoblocks")}
                  </>
                }
                values={element.marginTitle}
                units={{}}
                onChange={(newMargintitle) =>
                  updatenewMargintitle(slide.id, elementIndex, newMargintitle)
                }
              />
            </div>
            </div>
          <div className="content-title-custom-panel intermedy">
            <h2 className="title-custom-panel">
              {__("Spacings Menu", "cocoblocks")}
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
                values={element.paddingTitle}
                units={{}}
                onChange={(newPaddingtitle) =>
                  updatenewPaddingtitle(slide.id, elementIndex, newPaddingtitle)
                }
              />
            </div>
            <div className="custom-select">
              <RangeControl
                label={
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-160 80-320l56-56 64 62v-332l-64 62-56-56 160-160 160 160-56 56-64-62v332l64-62 56 56-160 160Zm240-40v-80h400v80H480Zm0-240v-80h400v80H480Zm0-240v-80h400v80H480Z"/></svg>
                    {__("Gap", "cocoblocks")}
                  </>
                }
                value={element.gapMenu}
                onChange={(value) =>
                  updateGapMenu(slide.id, elementIndex, value)
                }
                min={0}
                max={50}
                step={1}
              />
            </div>
          </div>
        </>
      )}
      {activeSection === "adv-style" && (
        <>
          <BoxShadowControlMenu
            slide={slide}
            slides={slides}
            element={element}
            elementIndex={elementIndex}
            setAttributes={setAttributes}
          />
        </>
      )}
      {activeSection === "hover" && (
        <>
          <MenuControlsHover
            slide={slide}
            slides={slides}
            element={element}
            elementIndex={elementIndex}
            setAttributes={setAttributes}
          />
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
                checked={element.enableDesktopTitle}
                onChange={(value) =>
                  updateEnableDesktopTitle(slide.id, elementIndex, value)
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
                checked={element.enableTabletTitle}
                onChange={(value) =>
                  updateEnableTabletTitle(slide.id, elementIndex, value)
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
                checked={element.enableMobileTitle}
                onChange={(value) =>
                  updateEnableMobileTitle(slide.id, elementIndex, value)
                }
              />
            </div>
          </div>
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

export default MenuInnerControls;
