import React from "react";
import {
  Button,
  Tooltip,
  __experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useState, useEffect } from "react";
import FontStyle from "../font-style";
import SectionSelector from "../multitab/sectionSelector";
import CustomRangeControl from "../../controls/range"
import CustomTextAreaControl from "../../controls/text-area/TextAreaControl";
import CustomSelectControl from "../../controls/select/SelectControl";
import {alignOptions} from '../../assets/options';
import CustomColorOptionsPanel from "../../controls/color/ColorOptionsPanel";
import CustomHoverControls from "../../multiControls/hover";
import {elementOptions} from '../../assets/options';
import {fontOptions} from '../../assets/options';
import {blendModeOptions} from '../../assets/options';
import {fontWeightOptions} from '../../assets/options';
import {writeModeOptions} from '../../assets/options';
import {borderStyleOptions} from '../../assets/options';
import { selectOptionsEffectIn } from "../../assets/options";
import CustomShadowControl from "../../controls/shadow/ShadowControl";
import CustomStrokeControl from "../../controls/stroke/StrokeControl";
import CustomAlignControl from "../../controls/align/AlignControl";
import CustomVisibilityControls from "../../multiControls/visibility/VisibilityControls";
import CustomActionControls from "../../multiControls/action/ActionControls";
import CustomEffectControls from "../../multiControls/effect";
import RotateRightIcon from '@mui/icons-material/RotateRight'; // Importa l'icona RotateRight
import ControlCameraIcon from '@mui/icons-material/ControlCamera';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import WidthWideIcon from '@mui/icons-material/WidthWide';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DescriptionIcon from '@mui/icons-material/Description';
import HeightIcon from '@mui/icons-material/Height';
import FormatLineSpacingIcon from '@mui/icons-material/FormatLineSpacing';
import FormatTextdirectionLToRIcon from '@mui/icons-material/FormatTextdirectionLToR';
import FontDownloadIcon from '@mui/icons-material/FontDownload';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PaddingIcon from '@mui/icons-material/Padding';
import MarginIcon from '@mui/icons-material/Margin';
import FilterTiltShiftIcon from '@mui/icons-material/FilterTiltShift';
import DirectionsIcon from '@mui/icons-material/Directions';
import OpacityIcon from '@mui/icons-material/Opacity';
import LayersClearIcon from '@mui/icons-material/LayersClear';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import BorderStyleIcon from '@mui/icons-material/BorderStyle';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import BorderInnerIcon from '@mui/icons-material/BorderInner';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import TuneIcon from '@mui/icons-material/Tune';
import FullscreenIcon from '@mui/icons-material/Fullscreen';

const InnerTextEdit = ({
  slide,
  textDiv,
  textIndex,
  element,
  elementIndex,
  slides,
  setAttributes,
  setActiveSection,
  activeSection,
  handlePlayInnerText
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

  // Remove Text
  const removeSlideTitleBlock = (slideId, divIndex, innerIndex) => {
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
                  innerElements: element.innerElements.map(
                    (innerElement, eIndex) =>
                      eIndex === innerIndex && innerElement.type === "text"
                        ? {
                            ...innerElement,
                            fontStyle: {
                              ...innerElement.fontStyle,
                              [styleType]: value,
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

// Update padding Title
const updatenewPaddingtitleBlock = (slideId, divIndex, innerIndex, newPaddingtitle) => {
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
                      eIndex === innerIndex && innerElement.type === "text"
                        ? {
                            ...innerElement,
                            paddingTitleBlock: {
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
// Update Margin Title
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
                      eIndex === innerIndex && innerElement.type === "text"
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

// Update border size
const updatenewBackgroundBorderSize = (slideId, divIndex, innerIndex, newBorderSize) => {
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
                        eIndex === innerIndex && innerElement.type === "text"
                          ? {
                              ...innerElement,
                              backgroundBorderSize: {
                                top: addUnit(newBorderSize.top || "0", "px"),
                                right: addUnit(newBorderSize.right || "0", "px"),
                                bottom: addUnit(newBorderSize.bottom || "0", "px"),
                                left: addUnit(newBorderSize.left || "0", "px"),
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
  
  // Update border radius
const updatenewBackgroundBorderRadius = (slideId, divIndex, innerIndex, newBorderRadius) => {
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
                        eIndex === innerIndex && innerElement.type === "text"
                          ? {
                              ...innerElement,
                              backgroundBorderRadius: {
                                top: addUnit(newBorderRadius.top || "0", "px"),
                                right: addUnit(newBorderRadius.right || "0", "px"),
                                bottom: addUnit(newBorderRadius.bottom || "0", "px"),
                                left: addUnit(newBorderRadius.left || "0", "px"),
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

      // nascondi il titolo in editor
      const [hideTitle, setHideTitle] = useState(textDiv.hideTitle || "");

      const toggleHideTitle = () => {
        const newState = hideTitle === "hide" ? "" : "hide";
        setHideTitle(newState);
      
        textDiv.hideTitle = newState;
        setAttributes({ elements: [...slides] }); // Oppure aggiorna la struttura dati appropriata
      };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + ' ...';
  };
  const truncatedText = truncateText(textDiv.content, 9);

    // Open panel
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
      setIsOpen((prevIsOpen) => !prevIsOpen);
    };

  return (
    <div className="custom-block-added">
      <div className="divider-controls-inner"></div>
      <div className="title-block-added">
        <div className="title-element">
          <DescriptionIcon/>
          <h2>{truncatedText}</h2>
        </div>
        <div className="title-element">
        <Button
            isDestructive
            onClick={() =>
              removeSlideTitleBlock(slide.id, elementIndex, textIndex)
            }
            className="button-remove-element"
            label={__("Remove Inner Text", "cocoblocks")}
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
          <CustomTextAreaControl
                value={textDiv.content}
                slides={slides}
                setAttributes={setAttributes}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={textIndex}
                elementType="text"
                placeholder={__("Add text content...", "cocoblocks")}
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'content')
                }
              />
              <CustomSelectControl
                label={
                  <>
                    <WidthWideIcon />
                    {__("Width content", "cocoblocks")}
                  </>
                }
                value={textDiv.widthTitleBlock || "auto"}
                slides={slides}
                setAttributes={setAttributes}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={textIndex}
                elementType="text"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'widthTitleBlock')
                }
                selectOptions={alignOptions} 
              />
            {textDiv.widthTitleBlock !== "auto" && (
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
            {textDiv.widthTitleBlock === "custom" && (
              <>
                <CustomRangeControl
                label={
                  <>
                    <WidthWideIcon />
                    {__("Custom Width (%)", "cocoblocks")}
                  </>
                }
                value={textDiv.widthCustomTitleBlock ?? 100}
                slides={slides}
                setAttributes={setAttributes}
                min={1}
                max={100}
                step={1}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={textIndex}
                elementType="text"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'widthCustomTitleBlock')
                }
              />
              </>
            )}
             <CustomAlignControl
                value={textDiv.textAlign || "center"}
                slides={slides}
                setAttributes={setAttributes}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={textIndex}
                elementType="text"
                onChange={(newValue) =>
                  updateElement(slides, setAttributes, slide.id, elementIndex, textIndex, newValue, "secondary", "text", 'textAlign')
                }
              />
               <CustomSelectControl
                label={
                  <>
                    <FormatTextdirectionLToRIcon />
                    {__("Element html", "cocoblocks")}
                  </>
                }
                value={textDiv.elementTitle || "h3"}
                slides={slides}
                setAttributes={setAttributes}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={textIndex}
                elementType="text"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'elementTitle')
                }
                selectOptions={elementOptions} // Passa le opzioni dinamiche
              />
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
          <CustomRangeControl
                label={
                  <>
                    <TextFieldsIcon/>
                    {__("Min", "cocoblocks")}
                  </>
                }
                value={textDiv.fontSizeMobile || 16}
                slides={slides}
                setAttributes={setAttributes}
                min={4}
                max={100}
                step={1}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={textIndex}
                elementType="text"
                tooltipText= {__("Sets the minimum text size for small screens (e.g., mobile devices). The text won’t go below this value.", "cocoblocks")}
                showTooltip = {true}
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'fontSizeMobile')
                }
              />
               <CustomRangeControl
                label={
                  <>
                    <TuneIcon />
                    {__("Mid", "cocoblocks")}
                  </>
                }
                value={textDiv.fontSizeTablet || 16}
                slides={slides}
                setAttributes={setAttributes}
                min={4}
                max={200}
                step={.5}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={textIndex}
                elementType="text"
                tooltipText= {__("Defines the fluid text size, measured in viewport width (vw), that adapts to screen width. This is ideal for medium-sized screens, like tablets, creating a smooth transition between the minimum and maximum sizes.", "cocoblocks")}
                showTooltip = {true}
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'fontSizeTablet')
                }
              />      
              <CustomRangeControl
                  label={
                    <>
                      <FullscreenIcon />
                      {__("Max", "cocoblocks")}
                    </>
                  }
                  value={textDiv.fontSize || 22}
                  slides={slides}
                  setAttributes={setAttributes}
                  min={4}
                  max={500}
                  step={1}
                  updateType="secondary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  innerIndex={textIndex}
                  elementType="text"
                  tooltipText= {__("Sets the maximum text size for large screens (e.g., desktop monitors). The text won’t exceed this value.", "cocoblocks")}
                  showTooltip = {true}
                  updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'fontSize')
                  }
                />
            <div className="custom-select">
              <FontStyle
                value={textDiv.fontStyle || {}} 
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
            <CustomSelectControl
                label={
                  <>
                    <FontDownloadIcon />
                    {__("Font family", "cocoblocks")}
                  </>
                }
                value={textDiv.fontFamilyTitleBlock|| "Arial, sans-serif"}
                slides={slides}
                setAttributes={setAttributes}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={textIndex}
                elementType="text"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'fontFamilyTitleBlock')
                }
                selectOptions={fontOptions}
              />
                <CustomSelectControl
                label={
                  <>
                    <FitnessCenterIcon />
                    {__("Font weight", "cocoblocks")}
                  </>
                }
                value={textDiv.fontWeightTitleBlock || "400"}
                slides={slides}
                setAttributes={setAttributes}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={textIndex}
                elementType="text"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'fontWeightTitleBlock')
                }
                selectOptions={fontWeightOptions} 
              />
              <CustomRangeControl
                  label={
                    <>
                      <HeightIcon />
                      {__("Line height", "cocoblocks")}
                    </>
                  }
                  value={textDiv.lineHeight || 1.5}
                  slides={slides}
                  setAttributes={setAttributes}
                  min={.5}
                  max={2.5}
                  step={.1}
                  updateType="secondary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  innerIndex={textIndex}
                  elementType="text"
                  updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'lineHeight')
                  }
                />
                 <CustomRangeControl
                  label={
                    <>
                      <FormatLineSpacingIcon style={{transform:'rotate(90deg)'}} />
                      {__("Letter spacing", "cocoblocks")}
                    </>
                  }
                  value={textDiv.letterSpacingTitleBlock || 0}
                  slides={slides}
                  setAttributes={setAttributes}
                  min={0}
                  max={100}
                  step={.5}
                  updateType="secondary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  innerIndex={textIndex}
                  elementType="text"
                  updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'letterSpacingTitleBlock')
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
            <CustomColorOptionsPanel
                  colorNormal={textDiv.textColor }
                  setColorNormal={(color) => updateElement(slides, setAttributes, slide.id, elementIndex, null, color, 'secondary', 'text', 'textColor')}
                  buttonTitle={__("Text Color", "cocoblocks")}
                  buttonIcon={<FormatColorTextIcon style={{marginBottom:'-4px'}} />}
                  slides={slides}
                  setAttributes={setAttributes}
                  updateType="secondary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  innerIndex={textIndex}
                  elementType="text"
                  updateElement={updateElement}
                  property="textColor"
                />
                 <CustomColorOptionsPanel
                  colorNormal={textDiv.backgroundColor }
                  setColorNormal={(color) => updateElement(slides, setAttributes, slide.id, elementIndex, null, color, 'secondary', 'text', 'backgroundColor')}
                  buttonTitle={__("Background Color", "cocoblocks")}
                  buttonIcon={<ColorLensIcon style={{marginBottom:'-5px'}} />}
                  slides={slides}
                  setAttributes={setAttributes}
                  updateType="secondary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  innerIndex={textIndex}
                  elementType="text"
                  updateElement={updateElement}
                  property="backgroundColor"
                />
          </div>
          <div className="content-title-custom-panel intermedy">
            <h2 className="title-custom-panel">
              {__("Position", "cocoblocks")}
            </h2>
          </div>
          <div className="content-section-panel" style={{ padding: "0" }}>
          <CustomSelectControl
                label={
                  <>
                    <ControlCameraIcon />
                    {__("Select position", "cocoblocks")}
                  </>
                }
                value={textDiv.positionInnerText|| "Arial, sans-serif"}
                slides={slides}
                setAttributes={setAttributes}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={textIndex}
                elementType="text"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'positionInnerText')
                }
                selectOptions={[
                    {
                      label: __("Default", "cocoblocks"),
                      value: "static",
                    },
                    {
                      label: __("Relative", "cocoblocks"),
                      value: "relative",
                    },
                  ]}
              />
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
                      <PaddingIcon />
                    {__("Padding", "cocoblocks")}
                  </>
                }
                values={textDiv.paddingTitleBlock}
                units={{}}
                onChange={(newPaddingtitle) =>
                  updatenewPaddingtitleBlock(
                    slide.id,
                    elementIndex,
                    textIndex,
                    newPaddingtitle
                  )
                }
              />
            </div>
            {textDiv.positionInnerText === "relative" && (
            <>
            <CustomRangeControl
                  label={
                    <>
                      <SwapVertIcon  />
                      {__("Vertical Position", "cocoblocks")}
                    </>
                  }
                  value={textDiv.verticalPositionInnerText || 0}
                  slides={slides}
                  setAttributes={setAttributes}
                  min={-500}
                  max={500}
                  step={1}
                  updateType="secondary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  innerIndex={textIndex}
                  elementType="text"
                  updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'verticalPositionInnerText')
                  }
                />
               <CustomRangeControl
                  label={
                    <>
                      <SwapVertIcon style={{transform:'rotate(90deg)'}} />
                      {__("Horizontal Position", "cocoblocks")}
                    </>
                  }
                  value={textDiv.horizontalPositionInnerText || 0}
                  slides={slides}
                  setAttributes={setAttributes}
                  min={-500}
                  max={500}
                  step={1}
                  updateType="secondary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  innerIndex={textIndex}
                  elementType="text"
                  updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'horizontalPositionInnerText')
                  }
                />
                </>
            )}
            {textDiv.positionInnerText === "static" && (
            <div className="custom-select box-control">
              <BoxControl
                id="custom-margin-control"
                label={
                  <>
                    <MarginIcon />
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
            )}
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
                value={textDiv.borderStyle }
                slides={slides}
                setAttributes={setAttributes}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={textIndex}
                elementType="text"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'borderStyle')
                }
                selectOptions={borderStyleOptions} // Passa le opzioni dinamiche
              />
            {textDiv.borderStyle !== "none" && (
              <>
                <CustomColorOptionsPanel
                  colorNormal={textDiv.backgroundBorderColor }
                  setColorNormal={(color) => updateElement(slides, setAttributes, slide.id, elementIndex, null, color, 'secondary', 'text', 'backgroundBorderColor')}
                  buttonTitle={__("Border Color", "cocoblocks")}
                  buttonIcon={<BorderColorIcon/>}
                  slides={slides}
                  setAttributes={setAttributes}
                  updateType="secondary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  innerIndex={textIndex}
                  elementType="text"
                  updateElement={updateElement}
                  property="backgroundBorderColor"
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
                values={textDiv.backgroundBorderSize}
                units={{}}
                onChange={(newBorderSize) =>
                  updatenewBackgroundBorderSize(
                    slide.id, elementIndex, textIndex,newBorderSize
                )
                }
              />
            </div>
            </>
            )}
            <div className="custom-select box-control">
              <BoxControl
                id="custom-margin-control"
                label={
                  <>
                    <BorderInnerIcon />
                    {__("Border radius", "cocoblocks")}
                  </>
                }
                values={textDiv.backgroundBorderRadius}
                units={{}}
                onChange={(newBorderRadius) =>
                  updatenewBackgroundBorderRadius(
                    slide.id, elementIndex, textIndex,newBorderRadius
                )
                }
              />
              </div>
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
          <CustomRangeControl
            label={
              <>
                <RotateRightIcon />
                {__("Rotate", "cocoblocks")}
              </>
            }
            value={textDiv.rotate}
            slides={slides}
            setAttributes={setAttributes}
            min={0}
            max={360}
            step={1}
            updateType="secondary"
            slideId={slide.id}
            elementIndex={elementIndex}
            innerIndex={textIndex}
            elementType="text"
            updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
              updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'rotate')
            }
          />
           <CustomSelectControl
                label={
                  <>
                    <FormatTextdirectionLToRIcon />
                    {__("Writing mode", "cocoblocks")}
                  </>
                }
                value={textDiv.textWriteMode || "initial"}
                slides={slides}
                setAttributes={setAttributes}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={textIndex}
                elementType="text"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'textWriteMode')
                }
                selectOptions={writeModeOptions} // Passa le opzioni dinamiche
              />
               <CustomSelectControl
                label={
                  <>
                    <DirectionsIcon />
                    {__("Orientation", "cocoblocks")}
                  </>
                }
                value={textDiv.textOrientation || "initial"}
                slides={slides}
                setAttributes={setAttributes}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={textIndex}
                elementType="text"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'textOrientation')
                }
                selectOptions={[
                  { label: "Initial", value: "initial" },
                  { label: "Upright", value: "upright" },
                ]}
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
              value={textDiv.opacity ?? 1}
              slides={slides}
              setAttributes={setAttributes}
              min={0}
              max={1}
              step={0.1}
              updateType="secondary"
              slideId={slide.id}
              elementIndex={elementIndex}
              innerIndex={textIndex}
              elementType="text"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'opacity')
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
              value={textDiv.zIndexTitle || 1}
              slides={slides}
              setAttributes={setAttributes}
              min={0}
              max={999}
              step={1}
              updateType="secondary"
              slideId={slide.id}
              elementIndex={elementIndex}
              innerIndex={textIndex}
              elementType="text"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'zIndexTitle')
              }
            />
          </div>
          <div
            className="content-title-custom-panel intermedy"
          >
            <h2 className="title-custom-panel">
              {__("Text Shadow", "cocoblocks")}
            </h2>
            </div>
            <div className="content-section-panel" style={{ padding: "0" }}>
              <CustomShadowControl
                valueEnableShadow={textDiv.enableTextShadow}
                valueRangeShadowX={textDiv.textShadowX || 0}
                valueRangeShadowY={textDiv.textShadowY || 0}
                valueRangeShadowBlur={textDiv.textShadowBlur || 0}
                valueRangeShadowColor={textDiv.colorTextShadow}
                slides={slides}
                setAttributes={setAttributes}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={textIndex}
                elementType="text"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, property) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, property)
                }
                enablePropertyShadow="enableTextShadow"
                rangePropertyX="textShadowX"
                rangePropertyY="textShadowY"
                rangePropertyBlur="textShadowBlur"
                rangePropertyColor="colorTextShadow"
              />
          </div>
          <div
                className="content-title-custom-panel intermedy"
              >
                <h2 className="title-custom-panel">
                  {__("Box Shadow", "cocoblocks")}
                </h2>
            </div>
        <div className="content-section-panel" style={{ padding: "0" }}>
          <CustomShadowControl
            valueEnableShadow={textDiv.enableBoxShadow}
            valueRangeShadowX={textDiv.boxShadowX || 0}
            valueRangeShadowY={textDiv.boxShadowY || 0}
            valueRangeShadowBlur={textDiv.boxShadowBlur || 0}
            valueRangeShadowSpread={textDiv.boxShadowSpread || 0}
            valueRangeShadowColor={textDiv.colorBoxShadow}
            slides={slides}
            showSpread={true}
            setAttributes={setAttributes}
            updateType="secondary"
            slideId={slide.id}
            elementIndex={elementIndex}
            innerIndex={textIndex}
            elementType="text"
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
       </div>
       <div
            className="content-title-custom-panel intermedy"
          >
            <h2 className="title-custom-panel">
              {__("Text Stroke", "cocoblocks")}
            </h2>
        </div>
        <div className="content-section-panel" style={{ padding: "0" }}>
        <CustomStrokeControl
            valueEnableStroke={textDiv.enableStroke}
            valueRangeStroke={textDiv.stroke || 0}
            valueRangeStrokeColor={textDiv.colorStroke}
            slides={slides}
            setAttributes={setAttributes}
            min={0}
            max={100}
            step={1}
            updateType="secondary"
            slideId={slide.id}
            elementIndex={elementIndex}
            innerIndex={textIndex}
            elementType="text"
            updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, property) =>
              updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, property)
            }
            enablePropertyStroke="enableStroke"
            rangePropertyStroke="stroke"
            colorPropertyStroke="colorStroke"
          />
        </div>
        <div
            className="content-title-custom-panel intermedy"
          >
            <h2 className="title-custom-panel">
              {__("Blend Mode", "cocoblocks")}
            </h2>
        </div>
        <div className="content-section-panel" style={{ padding: "0" }}>
           <CustomSelectControl
                label={
                  <>
                    <FilterTiltShiftIcon />
                    {__("Effect", "cocoblocks")}
                  </>
                }
                value={textDiv.blendMode || "normal"}
                slides={slides}
                setAttributes={setAttributes}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={textIndex}
                elementType="text"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'blendMode')
                }
                selectOptions={blendModeOptions} // Passa le opzioni dinamiche
              />
         </div>
        </>
      )}
      {activeSection === "animation" && (
        <CustomEffectControls
        valueEffect={textDiv.effectIn}
        colorNormal={textDiv.colorBlockEffect } 
        setColorNormal={(color) => updateElement(slides, setAttributes, slide.id, elementIndex, null, color, 'secondary', 'text', 'colorBlockEffect')}
        buttonTitle={__("Background Color", "cocoblocks")}    
        buttonIcon={ <ColorLensIcon style={{marginBottom:'-5px'}} />}  
        valueOpacityFrom={textDiv.opacityFrom}
         valueOpacityTo={textDiv.opacityTo}
         valueBlurFrom={textDiv.filterFrom}
         valueBlurTo={textDiv.filterTo}
           valueTranslateXFrom={textDiv.startXFrom}
           valueTranslateXTo={textDiv.startXTo}
           valueTranslateYFrom={textDiv.startYFrom}
           valueTranslateYTo={textDiv.startYTo}
           valueScaleType={textDiv.scaleType}
           valueScaleFrom={textDiv.scaleFrom}
           valueScaleTo={textDiv.scaleTo}
           valueRotateFrom={textDiv.rotateFrom}
           valueRotateTo={textDiv.rotateTo}
           valueRotateXFrom={textDiv.rotateXFrom}
           valueRotateXTo={textDiv.rotateXTo}
           valueRotateYFrom={textDiv.rotateYFrom}
           valueRotateYTo={textDiv.rotateYTo}
           valueSkewXFrom={textDiv.skewXFrom}
           valueSkewXTo={textDiv.skewXTo}
           valueSkewYFrom={textDiv.skewYFrom}
           valueSkewYTo={textDiv.skewYTo}
           valueDuration={textDiv.duration}
           valueEasing={textDiv.easing}
           valueDirection={textDiv.direction}
           valueLoop={textDiv.loop}
           valueDelay={textDiv.delay}
           valueEndDelay={textDiv.endDelay }
           valueEffectSplit={textDiv.textSplitEffect}
           valueStagger={textDiv.stagger}
           valueDirectionBlock={textDiv.directionBlock}
           onAnimated={handlePlayInnerText}
           selectOptions={selectOptionsEffectIn}
        slides={slides}
        setAttributes={setAttributes}
        updateType="secondary"
        slideId={slide.id}
        elementIndex={elementIndex}
        innerIndex={textIndex}
        elementType="text"
        updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, property) =>
          updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, property)
        }
         effectProperty="effectIn"
         colorProperty="colorBlockEffect"
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
         effectSplitProperty="textSplitEffect"
         staggerProperty="stagger"
         directionBlockProperty="directionBlock"
      />
    )}
      {activeSection === "hover" && (
        <CustomHoverControls
        valueEffectHover={textDiv.effectHover}
        colorNormal={textDiv.textColorHover } 
        setColorNormal={(color) => updateElement(slides, setAttributes, slide.id, elementIndex, null, color, 'secondary', 'text', 'textColorHover')}
        buttonTitle={__("Text Color", "cocoblocks")}    
        buttonIcon={ <FormatColorTextIcon style={{marginBottom:'-4px'}} />}
        valueOpacityHover={textDiv.opacityHover}
         valueBlurHover={textDiv.filterHover}
         valueTranslateXHover={textDiv.startXHover}
         valueTranslateYHover={textDiv.startYHover}
         valueScaleTypeHover={textDiv.scaleTypeHover}
         valueScaleHover={textDiv.scaleHover}
         valueRotateHover={textDiv.rotateHover}
         valueRotateXHover={textDiv.rotateXHover}
         valueRotateYHover={textDiv.rotateYHover}
         valueSkewXHover={textDiv.skewXHover}
         valueSkewYHover={textDiv.skewYHover}
         valueDurationHover={textDiv.durationHover}  
         valueEasingHover={textDiv.easingHover}
        slides={slides}
        setAttributes={setAttributes}
        updateType="secondary"
        slideId={slide.id}
        elementIndex={elementIndex}
        innerIndex={textIndex}
        elementType="text"
        updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, property) =>
          updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, property)
        }
         effectHoverProperty="effectHover"
         colorHoverProperty="textColorHover"
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
      )}
      {activeSection === "actions" && (
        <CustomActionControls
        valueSelectLink={textDiv.textLink}
        valueUrl={textDiv.linkUrl}
        valueSelectTarget={textDiv.linkTarget}
        valueSelectRel={textDiv.linkRel}
        valueScrollId={textDiv.scrollToId}
        slides={slides}
        setAttributes={setAttributes}
        updateType="secondary"
        slideId={slide.id}
        elementIndex={elementIndex}
        innerIndex={textIndex}
        elementType="text"
        updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, property) =>
          updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, property)
        }
        linkProperty="textLink"
        urlProperty="linkUrl"
        targetProperty="linkTarget"
        relProperty="linkRel"
        scrollIdProperty="scrollToId"
      />
      )}
      {activeSection === "visibility" && (
        <CustomVisibilityControls
        valueDesktop={textDiv.enableDesktop}
        valueTablet={textDiv.enableTablet}
        valueMobile={textDiv.enableMobile}
        slides={slides}
        setAttributes={setAttributes}
        updateType="secondary"
        slideId={slide.id}
        elementIndex={elementIndex}
        innerIndex={textIndex}
        elementType="text"
        updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, property) =>
          updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, property)
        }
        desktopProperty="enableDesktop"
        tabletProperty="enableTablet"
        mobileProperty="enableMobile"
      />
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
      </>
      )}
    </div>
  );
};

export default InnerTextEdit;