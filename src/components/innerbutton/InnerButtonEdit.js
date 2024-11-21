import React from "react";
import {
  Button,
  Tooltip,
  __experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import { useState } from "react";
import { __ } from "@wordpress/i18n";
import FontStyle from "../font-style";
import SectionSelector from "../multitab/sectionSelector";
import IconModal from "../../icons/IconModal";
import CustomTextAreaControl from "../../controls/text-area/TextAreaControl";
import SmartButtonIcon from '@mui/icons-material/SmartButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CustomSelectControl from "../../controls/select/SelectControl";
import CustomRangeControl from "../../controls/range"
import CustomAlignControl from "../../controls/align/AlignControl";
import WidthWideIcon from '@mui/icons-material/WidthWide';
import CloudIcon from '@mui/icons-material/Cloud';
import AddIcon from '@mui/icons-material/Add';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import VerticalAlignCenterIcon from '@mui/icons-material/VerticalAlignCenter';
import SpaceBarIcon from '@mui/icons-material/SpaceBar';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import TuneIcon from '@mui/icons-material/Tune';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import {fontWeightOptions} from '../../assets/options';
import CustomColorOptionsPanel from "../../controls/color/ColorOptionsPanel";
import FontDownloadIcon from '@mui/icons-material/FontDownload';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import {fontOptions} from '../../assets/options';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PaddingIcon from '@mui/icons-material/Padding';
import MarginIcon from '@mui/icons-material/Margin';
import HeightIcon from '@mui/icons-material/Height';
import FormatLineSpacingIcon from '@mui/icons-material/FormatLineSpacing';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import BorderStyleIcon from '@mui/icons-material/BorderStyle';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import {borderStyleOptions} from '../../assets/options';
import BorderInnerIcon from '@mui/icons-material/BorderInner';
import FormatSizeIcon from '@mui/icons-material/FormatSize';
import RotateRightIcon from '@mui/icons-material/RotateRight'; 
import OpacityIcon from '@mui/icons-material/Opacity';
import LayersClearIcon from '@mui/icons-material/LayersClear';
import CustomShadowControl from "../../controls/shadow/ShadowControl";
import CustomEffectControls from "../../multiControls/effect";
import CustomHoverControls from "../../multiControls/hover";
import { selectOptionsEffectElement } from "../../assets/options";
import {iconEffectOptions} from '../../assets/options';
import {iconEffectHoverOptionsInner} from '../../assets/options';
import GrainIcon from '@mui/icons-material/Grain';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import PaletteIcon from '@mui/icons-material/Palette';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import CustomActionControls from "../../multiControls/action";
import CustomVisibilityControls from "../../multiControls/visibility"

const InnerButtonEdit = ({
  slide,
  elementIndex,
  slides,
  setAttributes,
  setActiveSection,
  activeSection,
  setSelectedIcon,
  divIndex,
  buttonIndex,
  buttonDiv,
  handlePlayInnerButton
}) => {

  // Funzione generale per aggiornare i controlli
  const updateElement = (slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, property) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) => {
              if (updateType === "primary" && i === elementIndex && element.type === elementType) {
                return { ...element, [property]: newValue };
              } else if (updateType === "secondary" && i === elementIndex && element.type === "div") {
                return {
                  ...element,
                  innerElements: element.innerElements.map((innerElement, eIndex) =>
                    eIndex === innerIndex && innerElement.type === elementType
                      ? { ...innerElement, [property]: newValue }
                      : innerElement
                  ),
                };
              }
              return element;
            }),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Remove button
  const removeSlideButtonBlock  = (slideId, divIndex, innerIndex) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerElements: element.innerElements.filter(
                      (innerElement, eIndex) => eIndex !== innerIndex || innerElement.type !== "button"
                    ),
                  }
                : element
            ),
          }
        : slide
    );
  
    setAttributes({ slides: updatedSlides });
  };

    // Update button icon
    const updateSlideButtonIcon = (slideId, divIndex, buttonIndex, newIcon) => {
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
                          eIndex === buttonIndex && innerElement.type === "button"
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
 

// Remove icon
const removeSlideButtonIcon = (slideId, divIndex, buttonIndex) => {
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
                      eIndex === buttonIndex && innerElement.type === "button"
                        ? { ...innerElement, icon: null } // Imposta l'icona su null
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

// Update Font Style
const updateFontStyle = (slideId, divIndex, innerIndex, styleType, value) => {
  const updatedSlides = slides.map((slide) =>
    slide.id === slideId
      ? {
          ...slide,
          elements: slide.elements.map((element, i) =>
            element.type === "div" && i === divIndex
              ? {
                  ...element,
                  innerElements: element.innerElements.map((innerElement, eIndex) => {
                    if (eIndex === innerIndex && innerElement.type === "button") {
                      const updatedFontStyle = {
                        ...innerElement.fontStyle,
                        [styleType]: value,
                      };
                      return {
                        ...innerElement,
                        fontStyle: updatedFontStyle,
                      };
                    }
                    return innerElement;
                  }),
                }
              : element
          ),
        }
      : slide
  );
  setAttributes({ slides: updatedSlides });
};

// Width border
const updateButtonBackgroundBorderSize = (slideId, divIndex, innerIndex, newBorderSize) => {
   
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
              if (element.type === "div" && i === divIndex) {
                return {
                  ...element,
                  innerElements: element.innerElements.map(
                    (innerElement, eIndex) =>
                      eIndex === innerIndex && innerElement.type === "button"
                        ? {
                            ...innerElement,
                            backgroundBorderSizeButton: {
                              top: addUnit(
                                newBorderSize.top || "0",
                                newBorderSize.unit || "px"
                              ),
                              right: addUnit(
                                newBorderSize.right || "0",
                                newBorderSize.unit || "px"
                              ),
                              bottom: addUnit(
                                newBorderSize.bottom || "0",
                                newBorderSize.unit || "px"
                              ),
                              left: addUnit(
                                newBorderSize.left || "0",
                                newBorderSize.unit || "px"
                              ),
                            },
                          }
                        : innerElement
                  ),
                };
              }
              return element;
            }),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

// Padding title
const updatenewPaddingButton = (slideId, divIndex, innerIndex, newPaddingtitle) => {

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
            if (element.type === "div" && i === divIndex) {
              return {
                ...element,
                innerElements: element.innerElements.map(
                  (innerElement, eIndex) =>
                    eIndex === innerIndex && innerElement.type === "button"
                      ? {
                          ...innerElement,
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
                        }
                      : innerElement
                ),
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
const updatenewMarginButton = (slideId, divIndex, innerIndex, newMargintitle) => {
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
            if (element.type === "div" && i === divIndex) {
              return {
                ...element,
                innerElements: element.innerElements.map(
                  (innerElement, eIndex) =>
                    eIndex === innerIndex && innerElement.type === "button"
                      ? {
                          ...innerElement,
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
                        }
                      : innerElement
                ),
              };
            }
            return element;
          }),
        }
      : slide
  );
  setAttributes({ slides: updatedSlides });
};
  
  // Border radius two 
const updateBorderRadiusButton = (slideId, divIndex, innerIndex, newBorderRadius) => {
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
            if (element.type === "div" && i === divIndex) {
              return {
                ...element,
                innerElements: element.innerElements.map(
                  (innerElement, eIndex) =>
                    eIndex === innerIndex && innerElement.type === "button"
                      ? {
                          ...innerElement,
                          borderRadiusButton: {
                            top: addUnit(
                              newBorderRadius.top || "0",
                              newBorderRadius.unit || "px"
                            ),
                            right: addUnit(
                              newBorderRadius.right || "0",
                              newBorderRadius.unit || "px"
                            ),
                            bottom: addUnit(
                              newBorderRadius.bottom || "0",
                              newBorderRadius.unit || "px"
                            ),
                            left: addUnit(
                              newBorderRadius.left || "0",
                              newBorderRadius.unit || "px"
                            ),
                          },
                        }
                      : innerElement
                ),
              };
            }
            return element;
          }),
        }
      : slide
  );
  setAttributes({ slides: updatedSlides });
};

  // Border size hover
  const updatenewBackgroundBorderSizeHover = (slideId, divIndex, innerIndex, newBorderSize) => {
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
              if (element.type === "div" && i === divIndex) {
                return {
                  ...element,
                  innerElements: element.innerElements.map(
                    (innerElement, eIndex) =>
                      eIndex === innerIndex && innerElement.type === "button"
                        ? {
                            ...innerElement,
                            backgroundBorderSizeHover: {
                              top: addUnit(
                                newBorderSize.top || "0",
                                newBorderSize.unit || "px"
                              ),
                              right: addUnit(
                                newBorderSize.right || "0",
                                newBorderSize.unit || "px"
                              ),
                              bottom: addUnit(
                                newBorderSize.bottom || "0",
                                newBorderSize.unit || "px"
                              ),
                              left: addUnit(
                                newBorderSize.left || "0",
                                newBorderSize.unit || "px"
                              ),
                            },
                          }
                        : innerElement
                  ),
                };
              }
              return element;
            }),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

   // nascondi il bottone in editor
   const [hideButton, setHideButton] = useState(buttonDiv.hideButton || "");

   const toggleHideButton = () => {
     const newState = hideButton === "hide" ? "" : "hide";
     setHideButton(newState);
   
     buttonDiv.hideButton = newState;
     setAttributes({ elements: [...slides] }); // Oppure aggiorna la struttura dati appropriata
   };

    // Open panel
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
      setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    const [isIconModalOpen, setIsIconModalOpen] = useState(false);
   
    const handleOpenIconModal = () => {
      setIsIconModalOpen(true);
    };
  
    const handleCloseIconModal = () => {
      setIsIconModalOpen(false);
    };
  
    const handleSelectIcon = (iconName) => {
      setSelectedIcon(buttonIndex, iconName);
      updateSlideButtonIcon(slide.id, divIndex, buttonIndex, iconName);
      setIsIconModalOpen(false);
    };

  return (
    <div className="custom-block-added">
      <div className="divider-controls"></div>
      <div className="title-block-added">
        <div className="title-element">
        <SmartButtonIcon />
          <h2>{__("Button", "cocoblocks")}</h2>
        </div>
        <div className="title-element">
        <Button
            isDestructive
            onClick={() => removeSlideButtonBlock(slide.id, divIndex, buttonIndex)}
            className="button-remove-element"
            label={__("Remove Button", "cocoblocks")}
            icon={<DeleteOutlineIcon />}
          ></Button>
           <Tooltip  placement="top" text={isOpen ? __('Close Controls','slider') : __('Open Controls','slider')}>
        <button onClick={handleToggle} className="button-open-control-element">
          {isOpen ? (
            <KeyboardArrowUpIcon/>
          ) : (
            <KeyboardArrowDownIcon/>
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
          {buttonDiv.buttonType !== 'type1' && buttonDiv.buttonType !== 'type2' && (
            <CustomTextAreaControl
            value={buttonDiv.button}
            slides={slides}
            setAttributes={setAttributes}
            updateType="secondary"
            slideId={slide.id}
            elementIndex={elementIndex}
            innerIndex={buttonIndex}
            elementType="button"
            placeholder={__("Add text button...", "cocoblocks")}
            updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
              updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'button')
            }
          />
          )}
          
            {buttonDiv.buttonType === 'type1' && buttonDiv.buttonType === 'type2' && (
              <>
               <CustomRangeControl
                label={
                  <>
                    <WidthWideIcon />
                    {__("Width (px)", "cocoblocks")}
                  </>
                }
                value={buttonDiv.widthCustomButton ?? 100}
                slides={slides}
                setAttributes={setAttributes}
                min={1}
                max={500}
                step={1}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={buttonIndex}
                elementType="button"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'widthCustomButton')
                }
              />
                 <CustomRangeControl
                label={
                  <>
                    <WidthWideIcon />
                    {__("Width (px)", "cocoblocks")}
                  </>
                }
                value={buttonDiv.heightCustomButton ?? 100}
                slides={slides}
                setAttributes={setAttributes}
                min={1}
                max={500}
                step={1}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={buttonIndex}
                elementType="button"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'heightCustomButton')
                }
              />
                </>
            )}
             {buttonDiv.buttonType !== 'type1' && buttonDiv.buttonType !== 'type2' && (
              <>
              <CustomSelectControl
                label={
                  <>
                    <WidthWideIcon />
                    {__("Width content", "cocoblocks")}
                  </>
                }
                value={buttonDiv.widthButton || "auto"}
                slides={slides}
                setAttributes={setAttributes}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={buttonIndex}
                elementType="button"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'widthButton')
                }
                selectOptions={[
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
                ]} // Passa le opzioni dinamiche
              />
            {buttonDiv.widthButton !== "auto" && (
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
            {buttonDiv.widthButton === "custom" && (
              <>
                <CustomRangeControl
                label={
                  <>
                    <WidthWideIcon />
                    {__("Custom Width (%)", "cocoblocks")}
                  </>
                }
                value={buttonDiv.widthCustomButton || 100}
                slides={slides}
                setAttributes={setAttributes}
                min={1}
                max={100}
                step={1}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={buttonIndex}
                elementType="button"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'widthCustomButton')
                }
              />
              </>
            )}
          <CustomAlignControl
                value={buttonDiv.buttonAlign || "center"}
                slides={slides}
                setAttributes={setAttributes}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={buttonIndex}
                elementType="button"
                onChange={(newValue) =>
                  updateElement(slides, setAttributes, slide.id, elementIndex, buttonIndex, newValue, "secondary", "button", 'buttonAlign')
                }
              />
            <div className="custom-select">
              <div className="add-icon-button-select">
                <div className="title-add-icon-button">
                <CloudIcon />
                <h2>{__('Add Icon','cocoblock')}</h2>
                </div>
                <div className="add-icon-button">
                {buttonDiv.icon && (
                <Button
            isDestructive
            onClick={() => {
              removeSlideButtonIcon(slide.id, elementIndex, buttonIndex);
            }}
            className="button-remove-element"
            label={__("Remove Icon", "cocoblocks")}
            icon={<DeleteOutlineIcon />}
          ></Button>
                )}
            <button onClick={handleOpenIconModal}><AddIcon /></button>
            </div>
            </div>
            </div>
              {isIconModalOpen && (
                <IconModal
                isOpen={isIconModalOpen}
                onClose={handleCloseIconModal}
                onSelectIcon={(iconName) => {
                  handleSelectIcon(iconName);
                  updateSlideButtonIcon(slide.id, elementIndex,buttonIndex, iconName); 
                }}
              />
              )}
               
              {buttonDiv.icon && (
                <>
                 <CustomSelectControl
                label={
                  <>
                    <MultipleStopIcon />
                    {__("Icon position", "cocoblocks")}
                  </>
                }
                value={buttonDiv.icoPositionButton || "before"}
                slides={slides}
                setAttributes={setAttributes}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={buttonIndex}
                elementType="button"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'icoPositionButton')
                }
                selectOptions={[
                  {
                    label: __("Before", "cocoblocks"),
                    value: "before",
                  },
                  {
                    label: __("After", "cocoblocks"),
                    value: "after",
                  },
                ]} // Passa le opzioni dinamiche
              />
            <CustomSelectControl
                label={
                  <>
                    <VerticalAlignCenterIcon />
                    {__("Icon align", "cocoblocks")}
                  </>
                }
                value={buttonDiv.icoAligItemButton || "before"}
                slides={slides}
                setAttributes={setAttributes}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={buttonIndex}
                elementType="button"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'icoAligItemButton')
                }
                selectOptions={[
                  {
                    label: __("Baseline", "cocoblocks"),
                    value: "baseline",
                  },
                  {
                    label: __("Center", "cocoblocks"),
                    value: "center",
                  },
                  {
                    label: __("End", "cocoblocks"),
                    value: "end",
                  },
                  {
                    label: __("Start", "cocoblocks"),
                    value: "flex-start",
                  },
                ]} // Passa le opzioni dinamiche
              />
            <CustomRangeControl
                label={
                  <>
                    <SpaceBarIcon />
                    {__("Gap", "cocoblocks")}
                  </>
                }
                value={buttonDiv.gapIcon ?? 5}
                slides={slides}
                setAttributes={setAttributes}
                min={0}
                max={50}
                step={1}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={buttonIndex}
                elementType="button"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'gapIcon')
                }
              />
            </>
              )}
            </>
          )}
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
          {buttonDiv.buttonType !== 'type1' && buttonDiv.buttonType !== 'type2' && (
            <>
           <CustomRangeControl
                label={
                  <>
                    <TextFieldsIcon/>
                    {__("Min", "cocoblocks")}
                  </>
                }
                value={buttonDiv.fontSizeButtonMobile || 16}
                slides={slides}
                setAttributes={setAttributes}
                min={4}
                max={100}
                step={1}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={buttonIndex}
                elementType="button"
                tooltipText= {__("Sets the minimum text size for small screens (e.g., mobile devices). The text won’t go below this value.", "cocoblocks")}
                showTooltip = {true}
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'fontSizeButtonMobile')
                }
              />
              <CustomRangeControl
                label={
                  <>
                    <TuneIcon />
                    {__("Mid", "cocoblocks")}
                  </>
                }
                value={buttonDiv.fontSizeButtonTablet || 16}
                slides={slides}
                setAttributes={setAttributes}
                min={4}
                max={200}
                step={.5}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={buttonIndex}
                elementType="button"
                tooltipText= {__("Defines the fluid text size, measured in viewport width (vw), that adapts to screen width. This is ideal for medium-sized screens, like tablets, creating a smooth transition between the minimum and maximum sizes.", "cocoblocks")}
                showTooltip = {true}
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'fontSizeButtonTablet')
                }
              />      
              <CustomRangeControl
                  label={
                    <>
                      <FullscreenIcon />
                      {__("Max", "cocoblocks")}
                    </>
                  }
                  value={buttonDiv.fontSizeButton || 22}
                  slides={slides}
                  setAttributes={setAttributes}
                  min={4}
                  max={500}
                  step={1}
                  updateType="secondary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                   innerIndex={buttonIndex}
                  elementType="button"
                  tooltipText= {__("Sets the maximum text size for large screens (e.g., desktop monitors). The text won’t exceed this value.", "cocoblocks")}
                  showTooltip = {true}
                  updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'fontSizeButton')
                  }
                />
            <div className="custom-select">
              <FontStyle
                value={buttonDiv.fontStyle || {}} // Inizializza con un oggetto vuoto se undefined
                onChange={(styleType, value) =>
                  updateFontStyle(slide.id, elementIndex, buttonIndex, styleType, value)
                }
              />
            </div>
            <CustomSelectControl
                label={
                  <>
                    <FontDownloadIcon />
                    {__("Font family", "cocoblocks")}
                  </>
                }
                value={buttonDiv.fontFamilyButton || "Arial, sans-serif"}
                slides={slides}
                setAttributes={setAttributes}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={buttonIndex}
                elementType="button"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'fontFamilyButton')
                }
                selectOptions={fontOptions} // Passa le opzioni dinamiche
              />
           <CustomSelectControl
                label={
                  <>
                    <FitnessCenterIcon />
                    {__("Font weight", "cocoblocks")}
                  </>
                }
                value={buttonDiv.fontWeightButton || "400"}
                slides={slides}
                setAttributes={setAttributes}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={buttonIndex}
                elementType="button"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'fontWeightButton')
                }
                selectOptions={fontWeightOptions} // Passa le opzioni dinamiche
              />
             <CustomRangeControl
                  label={
                    <>
                      <HeightIcon />
                      {__("Line height", "cocoblocks")}
                    </>
                  }
                  value={buttonDiv.lineHeightButton || 1.5}
                  slides={slides}
                  setAttributes={setAttributes}
                  min={.5}
                  max={2.5}
                  step={.1}
                  updateType="secondary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                    innerIndex={buttonIndex}
                  elementType="button"
                  updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'lineHeightButton')
                  }
                />
                 <CustomRangeControl
                  label={
                    <>
                      <FormatLineSpacingIcon style={{transform:'rotate(90deg)'}} />
                      {__("Letter spacing", "cocoblocks")}
                    </>
                  }
                  value={buttonDiv.letterSpacingButton || 0}
                  slides={slides}
                  setAttributes={setAttributes}
                  min={0}
                  max={100}
                  step={.5}
                  updateType="secondary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                    innerIndex={buttonIndex}
                  elementType="button"
                  updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'letterSpacingButton')
                  }
                />
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
          </>
          )}
             <CustomColorOptionsPanel
                  colorNormal={buttonDiv.buttonColor }
                  setColorNormal={(color) => updateElement(slides, setAttributes, slide.id, elementIndex, null, color, 'secondary', 'button', 'buttonColor')}
                  buttonTitle={__("Color", "cocoblocks")}
                  buttonIcon={<FormatColorTextIcon style={{marginBottom:'-4px'}} />}
                  slides={slides}
                  setAttributes={setAttributes}
                  updateType="secondary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  innerIndex={buttonIndex}
                  elementType="button"
                  updateElement={updateElement}
                  property="buttonColor"
                />
                 <CustomColorOptionsPanel
                  colorNormal={buttonDiv.buttonBackgroundColor }
                  setColorNormal={(color) => updateElement(slides, setAttributes, slide.id, elementIndex, null, color, 'secondary', 'button', 'buttonBackgroundColor')}
                  buttonTitle={__("Background Color", "cocoblocks")}
                  buttonIcon={<ColorLensIcon style={{marginBottom:'-5px'}} />}
                  slides={slides}
                  setAttributes={setAttributes}
                  updateType="secondary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                    innerIndex={buttonIndex}
                  elementType="button"
                  updateElement={updateElement}
                  property="buttonBackgroundColor"
                />
          </div>
          <div className="content-title-custom-panel intermedy">
            <h2 className="title-custom-panel">
              {__("Spacings", "cocoblocks")}
            </h2>
          </div>
          <div className="content-section-panel" style={{ padding: "0" }}>
          {buttonDiv.buttonType !== 'type1' && buttonDiv.buttonType !== 'type2' && (
            <div className="custom-select box-control">
              <BoxControl
                id="custom-margin-control"
                label={
                  <>
                     <PaddingIcon />
                    {__("Padding", "cocoblocks")}
                  </>
                }
                values={buttonDiv.paddingButton}
                units={{}}
                onChange={(newPaddingtitle) =>
                  updatenewPaddingButton(slide.id, elementIndex, buttonIndex, newPaddingtitle)
                }
              />
            </div>
          )}
            <div className="custom-select box-control">
              <BoxControl
                id="custom-margin-control"
                label={
                  <>
                    <MarginIcon />
                    {__("Margin", "cocoblocks")}
                  </>
                }
                values={buttonDiv.marginButton}
                units={{}}
                onChange={(newMargintitle) =>
                  updatenewMarginButton(slide.id, elementIndex, buttonIndex, newMargintitle)
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
           <CustomSelectControl
                label={
                  <>
                    <BorderStyleIcon />
                    {__("Border style", "cocoblocks")}
                  </>
                }
                value={buttonDiv.borderStyleButton }
                slides={slides}
                setAttributes={setAttributes}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={buttonIndex}
                elementType="button"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'borderStyleButton')
                }
                selectOptions={borderStyleOptions} // Passa le opzioni dinamiche
              />
            {buttonDiv.borderStyleButton !== "none" && (
              <>
                 <CustomColorOptionsPanel
                  colorNormal={buttonDiv.backgroundBorderColorButton }
                  setColorNormal={(color) => updateElement(slides, setAttributes, slide.id, elementIndex, null, color, 'secondary', 'button', 'backgroundBorderColorButton')}
                  buttonTitle={__("Border Color", "cocoblocks")}
                  buttonIcon={<BorderColorIcon/>}
                  slides={slides}
                  setAttributes={setAttributes}
                  updateType="secondary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                    innerIndex={buttonIndex}
                  elementType="button"
                  updateElement={updateElement}
                  property="backgroundBorderColorButton"
                />
                 <div className="custom-select box-control">
              <BoxControl
                id="custom-margin-control"
                label={
                  <>
                    <MarginIcon />
                    {__("Border width", "cocoblocks")}
                  </>
                }
                values={buttonDiv.backgroundBorderSizeButton}
                units={{}}
                onChange={(newBorderSize) =>
                    updateButtonBackgroundBorderSize(slide.id, elementIndex, buttonIndex, newBorderSize)
                }
              />
            </div>
                {buttonDiv.buttonType !== 'type1' && buttonDiv.buttonType !== 'type2' && (
                <div className="custom-select box-control">
              <BoxControl
                id="custom-margin-control"
                label={
                  <>
                     <BorderInnerIcon />
                    {__("Border radius", "cocoblocks")}
                  </>
                }
                values={buttonDiv.borderRadiusButton}
                units={{}}
                onChange={(newBorderRadius) =>
                  updateBorderRadiusButton(slide.id, elementIndex, buttonIndex, newBorderRadius)
                }
              />
            </div>
                )}
            {(buttonDiv.buttonType === 'type1' || buttonDiv.buttonType === 'type2') && (
              <>
                 <CustomRangeControl
                  label={
                    <>
                      <BorderInnerIcon />
                      {__("Border radius", "cocoblocks")}
                    </>
                  }
                  value={buttonDiv.backgroundBorderRadiusButton ?? 0}
                  slides={slides}
                  setAttributes={setAttributes}
                  min={0}
                  max={256}
                  step={1}
                  updateType="secondary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                    innerIndex={buttonIndex}
                  elementType="button"
                  updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'backgroundBorderRadiusButton')
                  }
                />
                </>
            )}
              </>
            )}
          </div>
          {buttonDiv.buttonType !== 'type1' && buttonDiv.buttonType !== 'type2' && (
            <>
            {buttonDiv.icon && (
              <>
          <div className="content-title-custom-panel intermedy">
            <h2 className="title-custom-panel">{__("Font Icon", "cocoblocks")}</h2>
          </div>
          <div
            className="content-section-panel"
            style={{ paddingTop: "0", paddingBottom: "0" }}
          >
            <CustomRangeControl
                  label={
                    <>
                      <FormatSizeIcon />
                      {__("Size", "cocoblocks")}
                    </>
                  }
                  value={buttonDiv.sizeIcon ?? 22}
                  slides={slides}
                  setAttributes={setAttributes}
                  min={1}
                  max={256}
                  step={1}
                  updateType="secondary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                    innerIndex={buttonIndex}
                  elementType="button"
                  showTooltip = {false}
                  updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'sizeIcon')
                  }
                />
                <div className="custom-select color">
                <CustomColorOptionsPanel
                  colorNormal={buttonDiv.iconColor }
                  setColorNormal={(color) => updateElement(slides, setAttributes, slide.id, elementIndex, null, color, 'secondary', 'button', 'iconColor')}
                  buttonTitle={__("Color", "cocoblocks")}
                  buttonIcon={<FormatColorTextIcon style={{marginBottom:'-4px'}} />}
                  slides={slides}
                  setAttributes={setAttributes}
                  updateType="secondary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                    innerIndex={buttonIndex}
                  elementType="button"
                  updateElement={updateElement}
                  property="iconColor"
                />
            </div>
          </div>
          </>
          )}
          </>
          )}
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
          <CustomRangeControl
                label={
                  <>
                    <RotateRightIcon />
                    {__("Rotate", "cocoblocks")}
                  </>
                }
                value={buttonDiv.rotateButton || 0}
                slides={slides}
                setAttributes={setAttributes}
                min={0}
                max={360}
                step={1}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={buttonIndex}
                elementType="button"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'rotateButton')
                }
              />
          </div>
          <div className="content-title-custom-panel intermedy">
            <h2 className="title-custom-panel">
              {__("Transparency Setting", "cocoblocks")}
            </h2>
          </div>
          <div className="content-section-panel" style={{ padding: "0" }}>
          <CustomRangeControl
              label={
                <>
                  <OpacityIcon />
                  {__("Opacity", "cocoblocks")}
                </>
              }
              value={buttonDiv.opacityButton ?? 1}
              slides={slides}
              setAttributes={setAttributes}
              min={0}
              max={1}
              step={0.1}
              updateType="secondary"
              slideId={slide.id}
              elementIndex={elementIndex}
                innerIndex={buttonIndex}
              elementType="button"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'opacityButton')
              }
            />
          </div>
          <div className="content-title-custom-panel intermedy">
            <h2 className="title-custom-panel">
              {__("LEVEL", "cocoblocks")}
            </h2>
          </div>
          <div className="content-section-panel" style={{ padding: "0" }}>
          <CustomRangeControl
              label={
                <>
                  <LayersClearIcon />
                  {__("Z-index", "cocoblocks")}
                </>
              }
              value={buttonDiv.zIndexButton || 1}
              slides={slides}
              setAttributes={setAttributes}
              min={0}
              max={999}
              step={1}
              updateType="secondary"
              slideId={slide.id}
              elementIndex={elementIndex}
                innerIndex={buttonIndex}
              elementType="button"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'zIndexButton')
              }
            />
          </div>
          <CustomShadowControl
            valueEnableShadow={buttonDiv.enableBoxShadow}
            valueRangeShadowX={buttonDiv.boxShadowX || 0}
            valueRangeShadowY={buttonDiv.boxShadowY || 0}
            valueRangeShadowBlur={buttonDiv.boxShadowBlur || 0}
            valueRangeShadowSpread={buttonDiv.boxShadowSpread || 0}
            valueRangeShadowColor={buttonDiv.colorBoxShadow}
            slides={slides}
            showSpread={true}
            setAttributes={setAttributes}
            updateType="secondary"
            slideId={slide.id}
            elementIndex={elementIndex}
            innerIndex={buttonIndex}
            elementType="button"
            updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, property) =>
              updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, property)
            }
            enablePropertyShadow="enableBoxShadow"
            rangePropertyX="boxShadowX"
            rangePropertyY="boxShadowY"
            rangePropertyBlur="boxShadowBlur"
            rangePropertySpread="boxShadowSpread"
            rangePropertyColor="colorBoxShadow"
          />
            {buttonDiv.buttonType !== 'type1' && buttonDiv.buttonType !== 'type2' && (
            <>
            {buttonDiv.icon && (
              <>
          <div className="content-title-custom-panel intermedy">
            <h2 className="title-custom-panel">{__("Basic Transforms Icon", "cocoblocks")}</h2>
          </div>
          <div
            className="content-section-panel"
            style={{ paddingTop: "0", paddingBottom: "0" }}
          >
<CustomRangeControl
                label={
                  <>
                    <RotateRightIcon />
                    {__("Rotate", "cocoblocks")}
                  </>
                }
                value={buttonDiv.rotateIcon || 0}
                slides={slides}
                setAttributes={setAttributes}
                min={0}
                max={360}
                step={1}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={buttonIndex}
                elementType="button"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'rotateIcon')
                }
              />
          </div>
          </>
          )}
          </>
          )}
        </>
      )}
      {activeSection === "animation" && (
        <>
        <CustomEffectControls
           valueEffect={buttonDiv.effectIn}
           valueOpacityFrom={buttonDiv.opacityFrom}
            valueOpacityTo={buttonDiv.opacityTo}
            valueBlurFrom={buttonDiv.filterFrom}
            valueBlurTo={buttonDiv.filterTo}
              valueTranslateXFrom={buttonDiv.startXFrom}
              valueTranslateXTo={buttonDiv.startXTo}
              valueTranslateYFrom={buttonDiv.startYFrom}
              valueTranslateYTo={buttonDiv.startYTo}
              valueScaleType={buttonDiv.scaleType}
              valueScaleFrom={buttonDiv.scaleFrom}
              valueScaleTo={buttonDiv.scaleTo}
              valueRotateFrom={buttonDiv.rotateFrom}
              valueRotateTo={buttonDiv.rotateTo}
              valueRotateXFrom={buttonDiv.rotateXFrom}
              valueRotateXTo={buttonDiv.rotateXTo}
              valueRotateYFrom={buttonDiv.rotateYFrom}
              valueRotateYTo={buttonDiv.rotateYTo}
              valueSkewXFrom={buttonDiv.skewXFrom}
              valueSkewXTo={buttonDiv.skewXTo}
              valueSkewYFrom={buttonDiv.skewYFrom}
              valueSkewYTo={buttonDiv.skewYTo}
              valueDuration={buttonDiv.duration}
              valueEasing={buttonDiv.easing}
              valueDirection={buttonDiv.direction}
              valueLoop={buttonDiv.loop}
              valueDelay={buttonDiv.delay}
              valueEndDelay={buttonDiv.endDelay }
              onAnimated={handlePlayInnerButton}
              selectOptions={selectOptionsEffectElement}
           slides={slides}
           setAttributes={setAttributes}
           updateType="secondary"
           slideId={slide.id}
           elementIndex={elementIndex}
            innerIndex={buttonIndex}
           elementType="button"
           updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, property) =>
             updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, property)
           }
            effectProperty="effectIn"
            opacityPropertyFrom="opacityFrom"
            opacityPropertyTo="opacityTo"
            blurPropertyFrom="filterFrom"
            blurPropertyTo="filterTo"
            translateXFromProperty="startXFrom"
            translateXToProperty="startXTo"
            translateYFromProperty="startYFrom"
            translateYToProperty="startYTo"
            scaleTypeProperty="scaleType"
            scaleFromProperty="scaleFrom"
            scaleToProperty="scaleTo"
            rotateFromProperty="rotateFrom"
            rotateToProperty="rotateTo"
            rotateXFromProperty="rotateXFrom"
            rotateXToProperty="rotateXTo"
            rotateYFromProperty="rotateYFrom"
            rotateYToProperty="rotateYTo"
            skewXFromProperty="skewXFrom"
            skewXToProperty="skewXTo"
            skewYFromProperty="skewYFrom"
            skewYToProperty="skewYTo"
            durationProperty="duration"
            easingProperty="easing"
            directionProperty="direction"
            loopProperty="loop"
            delayProperty="delay"
            endDelayProperty="endDelay"
         />
            {buttonDiv.buttonType !== 'type1' && buttonDiv.buttonType !== 'type2' && (
            <>
            {buttonDiv.icon && (
              <>
            <div className="content-title-custom-panel intermedy">
            <h2 className="title-custom-panel">
              {__("Animation Icon", "cocoblocks")}
            </h2>
          </div>
          <div className="content-section-panel" style={{ padding: "0" }}>
          <CustomSelectControl
                label={
                  <>
                    <GrainIcon /> 
                    {__("Effects", "cocoblocks")}
                  </>
                }
                value={buttonDiv.iconAnimation }
                slides={slides}
                setAttributes={setAttributes}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={buttonIndex}
                elementType="button"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'iconAnimation')
                }
                selectOptions={iconEffectOptions} 
              />
            {buttonDiv.iconAnimation !== "none" && (
            <CustomRangeControl
            label={
              <>
                 <HourglassBottomIcon />
                {__("Duration", "cocoblocks")}
              </>
            }
            value={buttonDiv.iconAnimationDuration ?? 0}
            slides={slides}
            setAttributes={setAttributes}
            min={.1}
            max={20}
            step={.1}
            updateType="secondary"
            slideId={slide.id}
            elementIndex={elementIndex}
            innerIndex={buttonIndex}
            elementType="button"
            updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
              updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'iconAnimationDuration')
            }
          />
            )}
          </div>
          </>
          )}
          </>
          )}
        </>
      )}
      {activeSection === "hover" && (
        <>
          <CustomHoverControls
           valueEffectHover={buttonDiv.effectHover}
           valueOpacityHover={buttonDiv.opacityHover}
            valueBlurHover={buttonDiv.filterHover}
            valueTranslateXHover={buttonDiv.startXHover}
            valueTranslateYHover={buttonDiv.startYHover}
            valueScaleTypeHover={buttonDiv.scaleTypeHover}
            valueScaleHover={buttonDiv.scaleHover}
            valueRotateHover={buttonDiv.rotateHover}
            valueRotateXHover={buttonDiv.rotateXHover}
            valueRotateYHover={buttonDiv.rotateYHover}
            valueSkewXHover={buttonDiv.skewXHover}
            valueSkewYHover={buttonDiv.skewYHover}
            valueDurationHover={buttonDiv.durationHover}  
            valueEasingHover={buttonDiv.easingHover}
            showColorControl={false}
           slides={slides}
           setAttributes={setAttributes}
           updateType="secondary"
           slideId={slide.id}
           elementIndex={elementIndex}
            innerIndex={buttonIndex}
           elementType="button"
           updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, property) =>
             updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, property)
           }
            effectHoverProperty="effectHover"
            opacityHoverProperty="opacityHover"
            blurHoverProperty="filterHover"
            translateXHoverProperty="startXHover"
            translateYHoverProperty="startYHover"
            scaleTypeHoverProperty="scaleTypeHover"
            scaleHoverProperty="scaleHover"
            rotateHoverProperty="rotateHover"
            rotateXHoverProperty="rotateXHover"
            rotateYHoverProperty="rotateYHover"
            skewXHoverProperty="skewXHover"
            skewYHoverProperty="skewYHover"
            durationHoverProperty="durationHover"
            easingHoverProperty="easingHover"
         />
                   <div
        className="content-title-custom-panel intermedy"
      >
        <h2 className="title-custom-panel">{__("Style", "cocoblocks")}</h2>
      </div>
                <CustomColorOptionsPanel
                  colorNormal={buttonDiv.buttonColorHover }
                  setColorNormal={(color) => updateElement(slides, setAttributes, slide.id, elementIndex, null, color, 'secondary', 'button', 'buttonColorHover')}
                  buttonTitle={__("Color", "cocoblocks")}
                  buttonIcon={<FormatColorTextIcon style={{marginBottom:'-4px'}} />}
                  slides={slides}
                  setAttributes={setAttributes}
                  updateType="secondary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                    innerIndex={buttonIndex}
                  elementType="button"
                  updateElement={updateElement}
                  property="buttonColorHover"
                />
                 <CustomColorOptionsPanel
                  colorNormal={buttonDiv.buttonBackgroundColorHover }
                  setColorNormal={(color) => updateElement(slides, setAttributes, slide.id, elementIndex, null, color, 'secondary', 'button', 'buttonBackgroundColorHover')}
                  buttonTitle={__("Background Color", "cocoblocks")}
                  buttonIcon={<PaletteIcon style={{
                    marginBottom: "-5px",
                    width: "20px",
                    height: "20px",
                  }}/>}
                  slides={slides}
                  setAttributes={setAttributes}
                  updateType="secondary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                    innerIndex={buttonIndex}
                  elementType="button"
                  updateElement={updateElement}
                  property="buttonBackgroundColorHover"
                />
<CustomSelectControl
                label={
                  <>
                    <BorderStyleIcon />
                    {__("Border style", "cocoblocks")}
                  </>
                }
                value={buttonDiv.borderStyleHover }
                slides={slides}
                setAttributes={setAttributes}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={buttonIndex}
                elementType="button"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'borderStyleHover')
                }
                selectOptions={borderStyleOptions} // Passa le opzioni dinamiche
              />
            {buttonDiv.borderStyleHover !== "none" && (
              <>
                <CustomColorOptionsPanel
                  colorNormal={buttonDiv.backgroundBorderColorHover }
                  setColorNormal={(color) => updateElement(slides, setAttributes, slide.id, elementIndex, null, color, 'secondary', 'button', 'backgroundBorderColorHover')}
                  buttonTitle={__("Border Color", "cocoblocks")}
                  buttonIcon={<BorderColorIcon/>}
                  slides={slides}
                  setAttributes={setAttributes}
                  updateType="secondary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                    innerIndex={buttonIndex}
                  elementType="button"
                  updateElement={updateElement}
                  property="backgroundBorderColorHover"
                />
                <div className="custom-select box-control">
              <BoxControl
                id="custom-margin-control"
                label={
                  <>
                    <MarginIcon />
                    {__("Border width", "cocoblocks")}
                  </>
                }
                values={buttonDiv.backgroundBorderSizeHover}
                units={{}}
                onChange={(newBorderSize) =>
                  updatenewBackgroundBorderSizeHover(slide.id, elementIndex,buttonIndex, newBorderSize)
                }
              />
            </div>
              </>
            )}
{buttonDiv.buttonType !== 'type1' && buttonDiv.buttonType !== 'type2' && (
            <>
            {buttonDiv.icon && (
              <>
            <div className="content-title-custom-panel intermedy">
        <h2 className="title-custom-panel">{__("Style Icon", "cocoblocks")}</h2>
      </div>
      <div className="content-section-panel" style={{ padding: "0" }}>
      <CustomColorOptionsPanel
                  colorNormal={buttonDiv.iconColorHover }
                  setColorNormal={(color) => updateElement(slides, setAttributes, slide.id, elementIndex, null, color, 'secondary', 'button', 'iconColorHover')}
                  buttonTitle={__("Color", "cocoblocks")}
                  buttonIcon={<FormatColorTextIcon style={{marginBottom:'-4px'}} />}
                  slides={slides}
                  setAttributes={setAttributes}
                  updateType="secondary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                    innerIndex={buttonIndex}
                  elementType="button"
                  updateElement={updateElement}
                  property="iconColorHover"
                />
      </div>
      <div className="content-title-custom-panel intermedy">
        <h2 className="title-custom-panel">{__("Animations Icon", "cocoblocks")}</h2>
      </div>
      <div className="content-section-panel" style={{ padding: "0" }}>
      <CustomRangeControl
                label={
                  <>
                    <RotateRightIcon />
                    {__("Rotate", "cocoblocks")}
                  </>
                }
                value={buttonDiv.rotateIconHover ?? 0}
                slides={slides}
                setAttributes={setAttributes}
                min={0}
                max={360}
                step={1}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={buttonIndex}
                elementType="button"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'rotateIconHover')
                }
              />
               <CustomSelectControl
                label={
                  <>
                    <GrainIcon /> 
                    {__("Effects", "cocoblocks")}
                  </>
                }
                value={buttonDiv.animationHoverIcon }
                slides={slides}
                setAttributes={setAttributes}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={buttonIndex}
                elementType="button"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'animationHoverIcon')
                }
                selectOptions={iconEffectHoverOptionsInner} 
              />
               <CustomRangeControl
                label={
                  <>
                     <HourglassBottomIcon />
                    {__("Duration", "cocoblocks")}
                  </>
                }
                value={buttonDiv.durationEffectHoverIcon ?? 0}
                slides={slides}
                setAttributes={setAttributes}
                min={.1}
                max={20}
                step={.1}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={buttonIndex}
                elementType="button"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'durationEffectHoverIcon')
                }
              />
        {buttonDiv.animationHoverIcon !== "none" && (
          <>
            {(buttonDiv.animationHoverIcon === "hover-effect-2-icon-button-inner" || buttonDiv.animationHoverIcon === "hover-effect-5-icon-button-inner") && (
              <>
               <CustomRangeControl
                label={
                  <>
                    <SyncAltIcon />
                    {__("Translate", "cocoblocks")}
                  </>
                }
                value={buttonDiv.translateEffectHoverIcon ?? 0}
                slides={slides}
                setAttributes={setAttributes}
                min={-70}
                max={70}
                step={1}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={buttonIndex}
                elementType="button"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'translateEffectHoverIcon')
                }
              />

              </>
            )}
          </>
          )}
           <CustomSelectControl
                label={
                  <>
                    <VisibilityIcon /> 
                    {__("Show icon", "cocoblocks")}
                  </>
                }
                value={buttonDiv.iconShowHover }
                slides={slides}
                setAttributes={setAttributes}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={buttonIndex}
                elementType="button"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'iconShowHover')
                }
                selectOptions={[
                  {
                    label: __("Always", "cocoblocks"),
                    value: "icon-show-always",
                  },
                  {
                    label: __("In Hover", "cocoblocks"),
                    value: "icon-show-hover",
                  },
                ]} 
              />
        {buttonDiv.iconShowHover === 'icon-show-hover' && (
           <CustomSelectControl
           label={
             <>
               <VisibilityOffIcon /> 
               {__("Hide option", "cocoblocks")}
             </>
           }
           value={buttonDiv.iconHideShowHover }
           slides={slides}
           setAttributes={setAttributes}
           updateType="secondary"
           slideId={slide.id}
           elementIndex={elementIndex}
              innerIndex={buttonIndex}
           elementType="button"
           updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
             updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'iconHideShowHover')
           }
           selectOptions={[
            {
              label: __("Opaciy", "cocoblocks"),
              value: "icon-hide-opacity",
            },
            {
              label: __("Display none", "cocoblocks"),
              value: "icon-hide-display-none",
            },
          ]} 
         />
          )}
        </div>
</>
)}
</>
)}
        </>
      )}
      {activeSection === "actions" && (
      <CustomActionControls
      valueSelectLink={buttonDiv.buttonLink}
      valueUrl={buttonDiv.linkUrlButton}
      valueSelectTarget={buttonDiv.linkTargetButton}
      valueSelectRel={buttonDiv.linkRelButton}
      valueScrollId={buttonDiv.scrollToIdButton}
      slides={slides}
      setAttributes={setAttributes}
      updateType="secondary"
      slideId={slide.id}
      elementIndex={elementIndex}
        innerIndex={buttonIndex}
      elementType="button"
      updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, property) =>
        updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, property)
      }
      linkProperty="buttonLink"
      urlProperty="linkUrlButton"
      targetProperty="linkTargetButton"
      relProperty="linkRelButton"
      scrollIdProperty="scrollToIdButton"
    />
      )}
      {activeSection === "visibility" && (
       <CustomVisibilityControls
       valueDesktop={buttonDiv.enableDesktopButton}
       valueTablet={buttonDiv.enableTabletButton}
       valueMobile={buttonDiv.enableMobileButton}
       slides={slides}
       setAttributes={setAttributes}
       updateType="secondary"
       slideId={slide.id}
       elementIndex={elementIndex}
         innerIndex={buttonIndex}
       elementType="button"
       updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, property) =>
         updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, property)
       }
       desktopProperty="enableDesktopButton"
       tabletProperty="enableTabletButton"
       mobileProperty="enableMobileButton"
     />
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
          variant={hideButton === "hide"}
          onClick={toggleHideButton}
          icon={
            hideButton === "hide" ? (
                <VisibilityIcon  style={{fill:'var(--light-color)'}}/>
            ) : (
                <VisibilityOffIcon  style={{fill:'var(--light-color)'}}/>
            )
          }
        />
        </div>
        </div>        
        </>
      )}
    </div>
  );
};

export default InnerButtonEdit;
