import React, { useRef } from "react";
import {
  Button,
  ButtonGroup,
  RangeControl,
  ToggleControl,
  Tooltip,
  __experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import { useState } from "react";
import { __ } from "@wordpress/i18n";
import { trash } from "@wordpress/icons";
import ColorOptionsPanel from "../colorPanel";
import FontStyle from "../font-style";
import SectionSelector from "../sectionSelector";
import TextControlsHover from "../TextControlsHover";
import CustomRangeControl from "../../controls/range"
import RotateRightIcon from '@mui/icons-material/RotateRight'; // Importa l'icona RotateRight
import WidthWideIcon from '@mui/icons-material/WidthWide';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import HeightIcon from '@mui/icons-material/Height';
import FormatLineSpacingIcon from '@mui/icons-material/FormatLineSpacing';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import CustomSelectControl from "../../controls/select/SelectControl";
import TimelineIcon from '@mui/icons-material/Timeline';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import CustomToggleControl from "../../controls/toggle/ToggleControl";
import DescriptionIcon from '@mui/icons-material/Description';
import CustomTextAreaControl from "../../controls/text-area/TextAreaControl";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CustomAlignControl from "../../controls/align/AlignControl";
import FormatTextdirectionLToRIcon from '@mui/icons-material/FormatTextdirectionLToR';
import {elementOptions} from '../../assets/options';
import {fontOptions} from '../../assets/options';
import {alignOptions} from '../../assets/options';
import {blendModeOptions} from '../../assets/options';
import {fontWeightOptions} from '../../assets/options';
import {writeModeOptions} from '../../assets/options';
import {borderStyleOptions} from '../../assets/options';
import {linkOptions} from '../../assets/options';
import {selectOptionsRepeat} from '../../assets/options';
import { selectOptionsEffectIn } from "../../assets/options";
import { selectOptionsEffectOut } from "../../assets/options";
import {selectOptionsEase} from '../../assets/options';
import {selectOptionsDirection} from '../../assets/options';
import {selectOptionsEffectSplit} from '../../assets/options';
import {selectOptionsDirectionBlock} from '../../assets/options';
import FontDownloadIcon from '@mui/icons-material/FontDownload';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PaddingIcon from '@mui/icons-material/Padding';
import MarginIcon from '@mui/icons-material/Margin';
import CustomShadowControl from "../../controls/shadow/ShadowControl";
import CustomStrokeControl from "../../controls/stroke/StrokeControl";
import FilterTiltShiftIcon from '@mui/icons-material/FilterTiltShift';
import DirectionsIcon from '@mui/icons-material/Directions';
import OpacityIcon from '@mui/icons-material/Opacity';
import LayersClearIcon from '@mui/icons-material/LayersClear';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import BorderStyleIcon from '@mui/icons-material/BorderStyle';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import BorderLeftIcon from '@mui/icons-material/BorderLeft';
import BorderInnerIcon from '@mui/icons-material/BorderInner';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import CustomTextControl from "../../controls/text/TextControl";
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import DatasetLinkedIcon from '@mui/icons-material/DatasetLinked';
import PhishingIcon from '@mui/icons-material/Phishing';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import RepeatIcon from '@mui/icons-material/Repeat';
import LoginIcon from '@mui/icons-material/Login';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import LogoutIcon from '@mui/icons-material/Logout';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import LoopIcon from '@mui/icons-material/Loop';
import StartIcon from '@mui/icons-material/Start';
import SwapCallsIcon from '@mui/icons-material/SwapCalls';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import RefreshIcon from '@mui/icons-material/Refresh';
import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty';
import DeblurIcon from '@mui/icons-material/Deblur';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import ColorLensIcon from '@mui/icons-material/ColorLens';


// Funzione di verifica per effetti incompatibili
const isEffectIncompatible = (effectIn) => {
  return [
    "blockFromLeft", 
    "blockFromRight", 
    "blockFromTop", 
    "blockFromBottom",
    "skewIn",
    "waveEffect",
    "blurIn",
    "twistIn",
    "flipIn3D",

  ].includes(effectIn);
};

const TextEdit = ({
  slide,
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
  onAnimatedText

}) => {


  const showIncompatibilityNotice = element.enableSplitText && isEffectIncompatible(element.effectIn);


  const initialEffectIn = element.effectIn || 'fadeInTop'; // Sostituisci 'defaultEffect' con l'effetto predefinito desiderato.



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

    // nascondi il titolo in editor
    const [hideTitle, setHideTitle] = useState(element.hideTitle || "");

    const toggleHideTitle = () => {
      const newState = hideTitle === "hide" ? "" : "hide";
      setHideTitle(newState);
    
      element.hideTitle = newState;
      setAttributes({ elements: [...slides] }); // Oppure aggiorna la struttura dati appropriata
    };

  // Remove Text
  const removeSlideTitle = (slideId, index) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.filter(
              (element, i) => !(element.type === "title" && i === index)
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Text color
  const updateSlideTextColor = (slideId, index, color) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "title" && i === index
                ? { ...element, textColor: color }
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
              if (element.type === "title" && i === index) {
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

  // Update Border color
  const updateTitleBackgroundBorderColor = (slideId, index, color) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "title" && i === index
                ? { ...element, backgroundBorderColor: color }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

    // Update Block Effect In
    const updateColorBlockEffectIn = (slideId, index, color) => {
      const updatedSlides = slides.map((slide) =>
        slide.id === slideId
          ? {
              ...slide,
              elements: slide.elements.map((element, i) =>
                element.type === "title" && i === index
                  ? { ...element, colorBlockEffectIn: color }
                  : element
              ),
            }
          : slide
      );
      setAttributes({ slides: updatedSlides });
    };


  // Padding title
  const updatenewPaddingtitle = (slideId, index, newPaddingtitle) => {
   
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
              if (element.type === "title" && i === index) {
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
              if (element.type === "title" && i === index) {
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
  const truncatedText = truncateText(element.text, 7);

  return (
    <div className="custom-block-added">
      <div className="divider-controls"></div>
      <div className="title-block-added">
        <div className="title-element">
          <DescriptionIcon/>
        <h2>{truncatedText}</h2>
        </div>
        <div className="title-element">
        <Button
            isDestructive
            onClick={() => removeSlideTitle(slide.id, elementIndex)}
            className="button-remove-element"
            label={__("Remove Text", "cocoblocks")}
            icon={trash}
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
                value={element.text}
                slides={slides}
                setAttributes={setAttributes}
                updateType="primary"
                slideId={slide.id}
                elementIndex={elementIndex}
                elementType="title"
                placeholder={__("Add text content...", "cocoblocks")}
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'text')
                }
              />
              <CustomSelectControl
                label={
                  <>
                    <WidthWideIcon />
                    {__("Width", "cocoblocks")}
                  </>
                }
                value={element.widthTitle}
                slides={slides}
                setAttributes={setAttributes}
                updateType="primary"
                slideId={slide.id}
                elementIndex={elementIndex}
                elementType="title"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'widthTitle')
                }
                selectOptions={alignOptions} // Passa le opzioni dinamiche
              />
            {element.widthTitle !== "auto" && (
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
            {element.widthTitle === "custom" && (
              <>
              <CustomRangeControl
                label={
                  <>
                    <WidthWideIcon />
                    {__("Custom Width (%)", "cocoblocks")}
                  </>
                }
                value={element.widthCustomTitle}
                slides={slides}
                setAttributes={setAttributes}
                min={1}
                max={100}
                step={1}
                updateType="primary"
                slideId={slide.id}
                elementIndex={elementIndex}
                elementType="title"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'widthCustomTitle')
                }
              />
              </>
            )}
             <CustomAlignControl
                value={element.textAlign}
                slides={slides}
                setAttributes={setAttributes}
                updateType="primary"
                slideId={slide.id}
                elementIndex={elementIndex}
                elementType="title"
                onChange={(newValue) =>
                  updateElement(slides, setAttributes, slide.id, elementIndex, null, newValue, "primary", "title", 'textAlign')
                }
              />
              <CustomSelectControl
                label={
                  <>
                    <FormatTextdirectionLToRIcon />
                    {__("Element html", "cocoblocks")}
                  </>
                }
                value={element.elementTitle}
                slides={slides}
                setAttributes={setAttributes}
                updateType="primary"
                slideId={slide.id}
                elementIndex={elementIndex}
                elementType="title"
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
              <ButtonGroup className="device-switcher">
                <Button
                  size="small"
                  isPressed={device === "desktop"}
                  onClick={handleDesktopClick}
                  className={device !== "desktop" ? "inactive" : ""}
                >
                  <PersonalVideoIcon />
                </Button>

                <>
                  <Button
                    size="small"
                    isPressed={device === "tablet"}
                    onClick={handleTabletClick}
                    className={device !== "tablet" ? "inactive" : ""}
                  >
                    <TabletMacIcon />
                  </Button>
                  <Button
                    size="small"
                    isPressed={device === "mobile"}
                    onClick={handleMobileClick}
                    className={device !== "mobile" ? "inactive" : ""}
                  >
                    <SmartphoneIcon />
                  </Button>
                </>
              </ButtonGroup>
              {device === "desktop" && (
                <CustomRangeControl
                  label={
                    <>
                      <PersonalVideoIcon />
                      {__("Font size", "cocoblocks")}
                    </>
                  }
                  value={element.fontSize}
                  slides={slides}
                  setAttributes={setAttributes}
                  min={4}
                  max={500}
                  step={1}
                  updateType="primary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  elementType="title"
                  updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'fontSize')
                  }
                />
              )}
              {device === "tablet" && (
              <CustomRangeControl
                label={
                  <>
                    <TabletMacIcon />
                    {__("Font size", "cocoblocks")}
                  </>
                }
                value={element.fontSizeTablet}
                slides={slides}
                setAttributes={setAttributes}
                min={4}
                max={500}
                step={1}
                updateType="primary"
                slideId={slide.id}
                elementIndex={elementIndex}
                elementType="title"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'fontSizeTablet')
                }
              />      
              )}
              {device === "mobile" && (
              <CustomRangeControl
                label={
                  <>
                    <SmartphoneIcon />
                    {__("Font size", "cocoblocks")}
                  </>
                }
                value={element.fontSizeMobile}
                slides={slides}
                setAttributes={setAttributes}
                min={4}
                max={500}
                step={1}
                updateType="primary"
                slideId={slide.id}
                elementIndex={elementIndex}
                elementType="title"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'fontSizeMobile')
                }
              />
              )}
              <div className="custom-select">
               <FontStyle
                value={element.fontStyle || {}} // Inizializza con un oggetto vuoto se undefined
                onChange={(styleType, value) =>
                  updateFontStyle(slide.id, elementIndex, styleType, value)
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
                value={element.fontFamily}
                slides={slides}
                setAttributes={setAttributes}
                updateType="primary"
                slideId={slide.id}
                elementIndex={elementIndex}
                elementType="title"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'fontFamily')
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
                value={element.fontWeight}
                slides={slides}
                setAttributes={setAttributes}
                updateType="primary"
                slideId={slide.id}
                elementIndex={elementIndex}
                elementType="title"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'fontWeight')
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
                  value={element.lineHeight}
                  slides={slides}
                  setAttributes={setAttributes}
                  min={.5}
                  max={2.5}
                  step={.1}
                  updateType="primary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  elementType="title"
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
                  value={element.letterSpacing}
                  slides={slides}
                  setAttributes={setAttributes}
                  min={0}
                  max={100}
                  step={.5}
                  updateType="primary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  elementType="title"
                  updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'letterSpacing')
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
            <div className="custom-select color">
              <ColorOptionsPanel
                colorNormal={element.textColor}
                setColorNormal={(color) =>
                  updateSlideTextColor(slide.id, elementIndex, color)
                }
                buttonTitle={__("Text Color", "cocoblocks")}
                buttonIcon={<FormatColorTextIcon />}
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
                    <PaddingIcon />
                    {__("Padding", "cocoblocks")}
                  </>
                }
                values={element.paddingTitle}
                units={{}}
                onChange={(newMargintitle) =>
                  updatenewPaddingtitle(slide.id, elementIndex, newMargintitle)
                }
              />
          </div>
            <div className="custom-select box-control">
              <BoxControl
                id="custom-margin-control"
                label={
                  <>
                    <MarginIcon />
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
                value={element.borderStyle}
                slides={slides}
                setAttributes={setAttributes}
                updateType="primary"
                slideId={slide.id}
                elementIndex={elementIndex}
                elementType="title"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'borderStyle')
                }
                selectOptions={borderStyleOptions} // Passa le opzioni dinamiche
              />
            {element.borderStyle !== "none" && (
              <>
                <div className="custom-select color">
                  <ColorOptionsPanel
                    colorNormal={element.backgroundBorderColor}
                    setColorNormal={(color) =>
                      updateTitleBackgroundBorderColor(
                        slide.id,
                        elementIndex,
                        color
                      )
                    }
                    buttonTitle={__("Border Color", "cocoblocks")}
                    buttonIcon={
                      <BorderColorIcon/>
                    }
                  />
                </div>
                <CustomRangeControl
                  label={
                    <>
                      <BorderLeftIcon />
                      {__("Border width", "cocoblocks")}
                    </>
                  }
                  value={element.backgroundBorderSize}
                  slides={slides}
                  setAttributes={setAttributes}
                  min={0}
                  max={20}
                  step={1}
                  updateType="primary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  elementType="title"
                  updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'backgroundBorderSize')
                  }
                />
                 <CustomRangeControl
                  label={
                    <>
                      <BorderInnerIcon />
                      {__("Border radius", "cocoblocks")}
                    </>
                  }
                  value={element.backgroundBorderSize}
                  slides={slides}
                  setAttributes={setAttributes}
                  min={0}
                  max={256}
                  step={1}
                  updateType="primary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  elementType="title"
                  updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'backgroundBorderSize')
                  }
                />
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
            <CustomRangeControl
                label={
                  <>
                    <RotateRightIcon />
                    {__("Rotate", "cocoblocks")}
                  </>
                }
                value={element.rotate}
                slides={slides}
                setAttributes={setAttributes}
                min={0}
                max={360}
                step={1}
                updateType="primary"
                slideId={slide.id}
                elementIndex={elementIndex}
                elementType="title"
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
                value={element.textWriteMode}
                slides={slides}
                setAttributes={setAttributes}
                updateType="primary"
                slideId={slide.id}
                elementIndex={elementIndex}
                elementType="title"
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
                value={element.textOrientation}
                slides={slides}
                setAttributes={setAttributes}
                updateType="primary"
                slideId={slide.id}
                elementIndex={elementIndex}
                elementType="title"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'textOrientation')
                }
                selectOptions={[
                  { label: "Initial", value: "initial" },
                  { label: "Upright", value: "upright" },
                ]} // Passa le opzioni dinamiche
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
              value={element.opacity}
              slides={slides}
              setAttributes={setAttributes}
              min={0}
              max={1}
              step={0.1}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="title"
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
              value={element.zIndexTitle}
              slides={slides}
              setAttributes={setAttributes}
              min={0}
              max={999}
              step={1}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="title"
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
                valueEnableShadow={element.enableTextShadow}
                valueRangeShadowX={element.textShadowX}
                valueRangeShadowY={element.textShadowY}
                valueRangeShadowBlur={element.textShadowBlur}
                valueRangeShadowColor={element.colorTextShadow}
                slides={slides}
                setAttributes={setAttributes}
                updateType="primary"
                slideId={slide.id}
                elementIndex={elementIndex}
                elementType="title"
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
            valueEnableShadow={element.enableBoxShadow}
            valueRangeShadowX={element.boxShadowX}
            valueRangeShadowY={element.boxShadowY}
            valueRangeShadowBlur={element.boxShadowBlur}
            valueRangeShadowSpread={element.boxShadowSpread}
            valueRangeShadowColor={element.colorBoxShadow}
            slides={slides}
            showSpread={true}
            setAttributes={setAttributes}
            updateType="primary"
            slideId={slide.id}
            elementIndex={elementIndex}
            elementType="title"
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
            valueEnableStroke={element.enableStroke}
            valueRangeStroke={element.stroke}
            valueRangeStrokeColor={element.colorStroke}
            slides={slides}
            setAttributes={setAttributes}
            min={0}
            max={100}
            step={1}
            updateType="primary"
            slideId={slide.id}
            elementIndex={elementIndex}
            elementType="title"
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
                value={element.blendMode}
                slides={slides}
                setAttributes={setAttributes}
                updateType="primary"
                slideId={slide.id}
                elementIndex={elementIndex}
                elementType="title"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'blendMode')
                }
                selectOptions={blendModeOptions} // Passa le opzioni dinamiche
              />
         </div>
          
        </>
      )}
      {activeSection === "animation" && (
        <>
          <div
            className="content-title-custom-panel intermedy"
            style={{
              marginTop: "-18px",
              display: "flex",
              gap: "30px",
            }}
          >
            <h2 className="title-custom-panel">
              {__("Animation: In & Out", "cocoblocks")}
            </h2>
            {(element.effectIn !== 'none' || element.effectOut !== 'none') && (
          <div className="button-reply-effect" style={{borderRadius:'50%'}}>
            <Tooltip text={__('Play','cocoblock')}>
            <Button onClick={onAnimatedText} style={{padding:'5px 8px'}}><SlowMotionVideoIcon/></Button> 
            </Tooltip>
          </div>
          )}
          </div>
          <div className="content-section-panel" style={{ padding: "0" }}>
            {!element.split && (
            <CustomSelectControl
              label={
                <>
                  <LoginIcon />
                  {__("Animations In", "cocoblocks")}
                </>
              }
              value={element.effectIn || ''}
              slides={slides}
              setAttributes={setAttributes}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="title"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'effectIn')
              }
              tooltipText={__('Entry animations control how elements appear on the slide, to create visually engaging and smooth introductions.','cocoblock')} // Testo del tooltip personalizzato
              showTooltip={true} // Mostra il tooltip
              tooltipTop = '8px' // Posizione 'top' del tooltip (di default 5px)
              tooltipLeft = '45%' // Posizione 'left' del tooltip (di default 35%)
              selectOptions={selectOptionsEffectIn} // Passa le opzioni dinamiche
            />
           )}
              {element.effectIn === "splitText" && (
                <>
                 <CustomSelectControl
              label={
                <>
                  <LoginIcon />
                  {__("Effect Split", "cocoblocks")}
                </>
              }
              value={element.textSplitEffect || ''}
              slides={slides}
              setAttributes={setAttributes}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="title"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'textSplitEffect')
              }
              tooltipText={__('Entry animations control how elements appear on the slide, to create visually engaging and smooth introductions.','cocoblock')} // Testo del tooltip personalizzato
              showTooltip={true} // Mostra il tooltip
              tooltipTop = '8px' // Posizione 'top' del tooltip (di default 5px)
              tooltipLeft = '45%' // Posizione 'left' del tooltip (di default 35%)
              selectOptions={selectOptionsEffectSplit} // Passa le opzioni dinamiche
            />
              <CustomRangeControl
              label={
                <>
                  <HourglassBottomIcon />
                  {__("Stagger", "cocoblocks")}
                </>
              }
              value={element.stagger}
              slides={slides}
              setAttributes={setAttributes}
              min={50}
              max={3000}
              step={10}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="title"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'stagger')
              }
              showTooltip={true} // Mostra il tooltip
              tooltipText={__('Increase delay for each elements.','cocoblock')} 
            />
            </>
            )}
            {showIncompatibilityNotice && (
              <>
              <p
                className="notice components-base-control__help"
                style={{
                  borderRadius: "0",
                  marginTop: "6px",
                  marginBottom: "6px",
                }}
              >
              {__(
                "The selected effect is not compatible with Split Text. The animation will not be applied!",
                "cocoblocks"
              )}
              </p>
              </>
            )}
            {element.effectIn !== "none" && (
            <>
            {element.effectIn !== "BlockFromIn" && (
              <>
            <CustomRangeControl
              label={
                <>
                  <OpacityIcon />
                  {__("Opacity From", "cocoblocks")}
                </>
              }
              value={element.opacityInFrom}
              slides={slides}
              setAttributes={setAttributes}
              min={0}
              max={1}
              step={.1}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="title"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'opacityInFrom')
              }
              showTooltip={false} // Mostra il tooltip
            />
             <CustomRangeControl
              label={
                <>
                  <OpacityIcon />
                  {__("Opacity To", "cocoblocks")}
                </>
              }
              value={element.opacityInTo}
              slides={slides}
              setAttributes={setAttributes}
              min={0}
              max={1}
              step={.1}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="title"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'opacityInTo')
              }
              showTooltip={false} // Mostra il tooltip
            />
            <CustomRangeControl
              label={
                <>
                  <DeblurIcon />
                  {__("Blur From", "cocoblocks")}
                </>
              }
              value={element.filterInFrom}
              slides={slides}
              setAttributes={setAttributes}
              min={0}
              max={20}
              step={1}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="title"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'filterInFrom')
              }
              showTooltip={false} // Mostra il tooltip
            />
             <CustomRangeControl
              label={
                <>
                  <DeblurIcon style={{transform:'rotate(180deg)'}}/>
                  {__("Blur To", "cocoblocks")}
                </>
              }
              value={element.filterInTo}
              slides={slides}
              setAttributes={setAttributes}
              min={0}
              max={20}
              step={1}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="title"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'filterInTo')
              }
              showTooltip={false} // Mostra il tooltip
            />
            </>
            )}
             {element.effectIn === "translateXYIn" && (
              <>
             <CustomRangeControl
              label={
                <>
                  <SyncAltIcon />
                  {__("Translate X From", "cocoblocks")}
                </>
              }
              value={element.startXFrom}
              slides={slides}
              setAttributes={setAttributes}
              min={-500}
              max={500}
              step={1}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="title"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'startXFrom')
              }
              showTooltip={false} // Mostra il tooltip
            />
             <CustomRangeControl
              label={
                <>
                  <SyncAltIcon />
                  {__("Translate X To", "cocoblocks")}
                </>
              }
              value={element.startXTo}
              slides={slides}
              setAttributes={setAttributes}
              min={-500}
              max={500}
              step={1}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="title"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'startXTo')
              }
              showTooltip={false} // Mostra il tooltip
            />
            <CustomRangeControl
              label={
                <>
                  <SyncAltIcon style={{transform:'rotate(90deg)'}} />
                  {__("Translate Y From", "cocoblocks")}
                </>
              }
              value={element.startYFrom}
              slides={slides}
              setAttributes={setAttributes}
              min={-500}
              max={500}
              step={1}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="title"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'startYFrom')
              }
              showTooltip={false} // Mostra il tooltip
            />
            <CustomRangeControl
              label={
                <>
                  <SyncAltIcon style={{transform:'rotate(90deg)'}} />
                  {__("Translate Y To", "cocoblocks")}
                </>
              }
              value={element.startYTo}
              slides={slides}
              setAttributes={setAttributes}
              min={-500}
              max={500}
              step={1}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="title"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'startYTo')
              }
              showTooltip={false} // Mostra il tooltip
            />
            </>
            )}
            {['scaleIn', 'scaleInX', 'scaleInY'].includes(element.effectIn) && (
            <>
            <CustomRangeControl
              label={
                <>
                  <ZoomOutMapIcon />
                  {__("Scale From", "cocoblocks")}
                </>
              }
              value={element.scaleFrom}
              slides={slides}
              setAttributes={setAttributes}
              min={0}
              max={20}
              step={.1}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="title"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'scaleFrom')
              }
              showTooltip={false} // Mostra il tooltip
            />
             <CustomRangeControl
              label={
                <>
                  <ZoomOutMapIcon />
                  {__("Scale To", "cocoblocks")}
                </>
              }
              value={element.scaleTo}
              slides={slides}
              setAttributes={setAttributes}
              min={0}
              max={20}
              step={.1}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="title"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'scaleTo')
              }
              showTooltip={false} // Mostra il tooltip
            />
            </>
            )}
            {['rotateIn'].includes(element.effectIn) && (
            <>
              <CustomRangeControl
                label={
                  <>
                    <RefreshIcon />
                    {__("Rotate From", "cocoblocks")}
                  </>
                }
                value={element.rotateInFrom}
                slides={slides}
                setAttributes={setAttributes}
                min={-360}
                max={360}
                step={1}
                updateType="primary"
                slideId={slide.id}
                elementIndex={elementIndex}
                elementType="title"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'rotateInFrom')
                }
                showTooltip={false}
              />
              <CustomRangeControl
                label={
                  <>
                    <RefreshIcon />
                    {__("Rotate To", "cocoblocks")}
                  </>
                }
                value={element.rotateInTo}
                slides={slides}
                setAttributes={setAttributes}
                min={-360}
                max={360}
                step={1}
                updateType="primary"
                slideId={slide.id}
                elementIndex={elementIndex}
                elementType="title"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'rotateInTo')
                }
                showTooltip={false}
              />
               <CustomRangeControl
                label={
                  <>
                    <ThreeSixtyIcon />
                    {__("Rotate X From", "cocoblocks")}
                  </>
                }
                value={element.rotateInXFrom}
                slides={slides}
                setAttributes={setAttributes}
                min={-360}
                max={360}
                step={1}
                updateType="primary"
                slideId={slide.id}
                elementIndex={elementIndex}
                elementType="title"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'rotateInXFrom')
                }
                showTooltip={false}
              />
              <CustomRangeControl
                label={
                  <>
                    <ThreeSixtyIcon />
                    {__("Rotate X To", "cocoblocks")}
                  </>
                }
                value={element.rotateInXTo}
                slides={slides}
                setAttributes={setAttributes}
                min={-360}
                max={360}
                step={1}
                updateType="primary"
                slideId={slide.id}
                elementIndex={elementIndex}
                elementType="title"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'rotateInXTo')
                }
                showTooltip={false}
              />
              <CustomRangeControl
                label={
                  <>
                    <ThreeSixtyIcon style={{transform:'rotate(90deg)'}} />
                    {__("Rotate Y From", "cocoblocks")}
                  </>
                }
                value={element.rotateInYFrom}
                slides={slides}
                setAttributes={setAttributes}
                min={-360}
                max={360}
                step={1}
                updateType="primary"
                slideId={slide.id}
                elementIndex={elementIndex}
                elementType="title"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'rotateInYFrom')
                }
                showTooltip={false}
              />
              <CustomRangeControl
                label={
                  <>
                      <ThreeSixtyIcon style={{transform:'rotate(90deg)'}} />
                    {__("Rotate Y To", "cocoblocks")}
                  </>
                }
                value={element.rotateInYTo}
                slides={slides}
                setAttributes={setAttributes}
                min={-360}
                max={360}
                step={1}
                updateType="primary"
                slideId={slide.id}
                elementIndex={elementIndex}
                elementType="title"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'rotateInYTo')
                }
                showTooltip={false}
              />
            </>
          )}
          {['skewInX'].includes(element.effectIn) && (
            <>
              <CustomRangeControl
                label={
                  <>
                    <RefreshIcon />
                    {__("Skew X From", "cocoblocks")}
                  </>
                }
                value={element.skewXFrom}
                slides={slides}
                setAttributes={setAttributes}
                min={-90}
                max={90}
                step={1}
                updateType="primary"
                slideId={slide.id}
                elementIndex={elementIndex}
                elementType="title"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'skewXFrom')
                }
                showTooltip={false}
              />
              <CustomRangeControl
                label={
                  <>
                    <RefreshIcon />
                    {__("Skew X To", "cocoblocks")}
                  </>
                }
                value={element.skewXTo}
                slides={slides}
                setAttributes={setAttributes}
                min={-90}
                max={90}
                step={1}
                updateType="primary"
                slideId={slide.id}
                elementIndex={elementIndex}
                elementType="title"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'skewXTo')
                }
                showTooltip={false}
              />
              <CustomRangeControl
                label={
                  <>
                    <RefreshIcon />
                    {__("Skew Y From", "cocoblocks")}
                  </>
                }
                value={element.skewYFrom}
                slides={slides}
                setAttributes={setAttributes}
                min={-10}
                max={10}
                step={1}
                updateType="primary"
                slideId={slide.id}
                elementIndex={elementIndex}
                elementType="title"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'skewYFrom')
                }
                showTooltip={false}
              />
              <CustomRangeControl
                label={
                  <>
                    <RefreshIcon />
                    {__("Skew Y To", "cocoblocks")}
                  </>
                }
                value={element.skewYTo}
                slides={slides}
                setAttributes={setAttributes}
                min={-10}
                max={10}
                step={1}
                updateType="primary"
                slideId={slide.id}
                elementIndex={elementIndex}
                elementType="title"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'skewYTo')
                }
                showTooltip={false}
              />
              </>
            )}
            {['BlockFromIn'].includes(element.effectIn) && (
              <>
             <CustomSelectControl
              label={
                <>
                  <OpenInBrowserIcon />
                  {__("Block Direction", "cocoblocks")}
                </>
              }
              value={element.directionBlock || ''}
              slides={slides}
              setAttributes={setAttributes}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="title"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'directionBlock')
              }
              showTooltip={false} // Mostra il tooltip
              selectOptions={selectOptionsDirectionBlock} // Passa le opzioni dinamiche
            />
            <div className="custom-select color">
              <ColorOptionsPanel
                colorNormal={element.colorBlockEffectIn}
                setColorNormal={(color) =>
                  updateColorBlockEffectIn(
                    slide.id,
                    elementIndex,
                    color
                  )
                }
                buttonTitle={__("Block Color", "cocoblocks")}
                buttonIcon={
                  <ColorLensIcon style={{marginBottom:'-5px'}} />
                }
              />
            </div>
            </>
            )}
            <CustomRangeControl
              label={
                <>
                  <HourglassBottomIcon />
                  {__("Duration", "cocoblocks")}
                </>
              }
              value={element.duration}
              slides={slides}
              setAttributes={setAttributes}
              min={100}
              max={5000}
              step={100}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="title"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'duration')
              }
              showTooltip={false} // Mostra il tooltip
            />
            <CustomRangeControl
              label={
                <>
                  <HistoryToggleOffIcon />
                  {__("Delay", "cocoblocks")}
                </>
              }
              value={element.delayIn}
              slides={slides}
              setAttributes={setAttributes}
              min={0}
              max={5000}
              step={100}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="title"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'delayIn')
              }
              showTooltip={false} // Mostra il tooltip
            />
             <CustomRangeControl
              label={
                <>
                  <HistoryToggleOffIcon />
                  {__("End Delay", "cocoblocks")}
                </>
              }
              value={element.endDelay}
              slides={slides}
              setAttributes={setAttributes}
              min={0}
              max={5000}
              step={100}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="title"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'endDelay')
              }
              showTooltip={false} // Mostra il tooltip
            />
            <CustomSelectControl
              label={
                <>
                  <SwapCallsIcon />
                  {__("Easing", "cocoblocks")}
                </>
              }
              value={element.easing || ''}
              slides={slides}
              setAttributes={setAttributes}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="title"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'easing')
              }
              tooltipText={__('Easing refers to the gradual acceleration or deceleration of an animation, allowing for smoother transitions. It controls how an object\'s speed changes over time, creating a more natural feel.','cocoblock')} // Testo del tooltip personalizzato
              showTooltip={true} // Mostra il tooltip
              tooltipTop = '8px' // Posizione 'top' del tooltip (di default 5px)
              selectOptions={selectOptionsEase} // Passa le opzioni dinamiche
            />
            <CustomSelectControl
              label={
                <>
                  <SyncAltIcon />
                  {__("Direction", "cocoblocks")}
                </>
              }
              value={element.direction || ''}
              slides={slides}
              setAttributes={setAttributes}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="title"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'direction')
              }
              tooltipText={__('Defines the direction of the animation.','cocoblock')} // Testo del tooltip personalizzato
              showTooltip={true} // Mostra il tooltip
              tooltipTop = '8px' // Posizione 'top' del tooltip (di default 5px)
              selectOptions={selectOptionsDirection} // Passa le opzioni dinamiche
            />
            <CustomSelectControl
              label={
                <>
                  <LoopIcon />
                  {__("Loop", "cocoblocks")}
                </>
              }
              value={element.loop || ''}
              slides={slides}
              setAttributes={setAttributes}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="title"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'loop')
              }
              tooltipText={__('Controls the number of repetitions for the animation loop. Set it to "Infinite" for continuous playback or choose a specific number for a limited loop.','cocoblock')} // Testo del tooltip personalizzato
              showTooltip={true} // Mostra il tooltip
              tooltipTop = '8px' // Posizione 'top' del tooltip (di default 5px)
              selectOptions={selectOptionsRepeat} // Passa le opzioni dinamiche
            />
            <div className="custom-select">
            {/* Mostra la nota se element.loop è maggiore di 1 */}
            {(element.loop > 1 || element.loop === "true") && (
             <p
             className="notice components-base-control__help"
             style={{
               borderRadius: "0",
               marginTop: "6px",
               marginBottom: "6px",
             }}
           >
                {__('The loop must complete the set cycle before it can be changed.','cocoblock')}
              </p>
            )}

            {/* Mostra la nota se element.loop è uguale a true */}
            {element.loop === 'true' && (
             <p
             className="notice components-base-control__help"
             style={{
               borderRadius: "0",
               marginTop: "6px",
               marginBottom: "6px",
             }}
           >
                {__('The loop is limited to 5 repetitions in the editor for performance reasons.','cocoblock')}
              </p>
            )}
            </div>
            </>      
            )}
            <div className="intern-divider-editor"></div>
            <CustomSelectControl
              label={
                <>
                  <LogoutIcon />
                  {__("Animations Out", "cocoblocks")}
                </>
              }
              value={element.effectOut}
              slides={slides}
              setAttributes={setAttributes}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="title"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'effectOut')
              }
              tooltipText={__('Exit animations control how elements leave the slide, adding smooth transitions that enhance the visual flow and create a polished ending to the presentation.','cocoblock')} // Testo del tooltip personalizzato
              showTooltip={true} // Mostra il tooltip
              tooltipTop = '8px' // Posizione 'top' del tooltip (di default 5px)
              tooltipLeft = '46%' // Posizione 'left' del tooltip (di default 35%)
              selectOptions={selectOptionsEffectOut} // Passa le opzioni dinamiche
            />
            {element.effectOut !== "none" && (
            <>
            <CustomRangeControl
              label={
                <>
                  <HourglassBottomIcon />
                  {__("Duration Out", "cocoblocks")}
                </>
              }
              value={element.durationOut}
              slides={slides}
              setAttributes={setAttributes}
              min={0.1}
              max={5}
              step={0.1}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="title"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'durationOut')
              }
              showTooltip={false} // Mostra il tooltip
            />
            <CustomSelectControl
              label={
                <>
                  <TimelineIcon />
                  {__("Easing Out", "cocoblocks")}
                </>
              }
              value={element.easeOut}
              slides={slides}
              setAttributes={setAttributes}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="title"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'easeOut')
              }
              tooltipText={__('Easing refers to the gradual acceleration or deceleration of an animation, allowing for smoother transitions. It controls how an object\'s speed changes over time, creating a more natural feel.','cocoblock')} // Testo del tooltip personalizzato
              showTooltip={true} // Mostra il tooltip
              tooltipTop = '7px' // Posizione 'top' del tooltip (di default 5px)
              tooltipLeft = '40%' // Posizione 'left' del tooltip (di default 35%)
              selectOptions={selectOptionsEase} // Passa le opzioni dinamiche
            />
            <CustomRangeControl
              label={
                <>
                  <HistoryToggleOffIcon />
                  {__("Delay Out", "cocoblocks")}
                </>
              }
              value={element.delayOut}
              slides={slides}
              setAttributes={setAttributes}
              min={0.1}
              max={10}
              step={0.1}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="title"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'delayOut')
              }
              showTooltip={false} // Mostra il tooltip
            />
            <CustomToggleControl
                label={
                  <>
                    <VisibilityOffIcon />
                    {__("Hide after out", "cocoblocks")}
                  </>
                }
                value={element.hideAfterOut}
                slides={slides}
                setAttributes={setAttributes}
                updateType="primary"
                slideId={slide.id}
                elementIndex={elementIndex}
                elementType="title"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'hideAfterOut')
                }
                tooltipText={__('The toggle hides the element after an exit effect is set; otherwise, it enables the original element to appear.','cocoblock')} // Testo del tooltip personalizzato
                showTooltip={true} // Mostra il tooltip
                tooltipTop = '10px' // Posizione 'top' del tooltip (di default 5px)
              />
            </>
            )}
            {(element.effectIn !== 'none' || element.effectOut !== 'none') && (
            <>
            <div className="intern-divider-editor"></div>
            <CustomToggleControl
              label={
                <>
                  <ScatterPlotIcon />
                  {__("Split Words", "cocoblocks")}
                </>
              }
              value={element.enableSplitText}
              slides={slides}
              setAttributes={setAttributes}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="title"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'enableSplitText')
              }
              showTooltip={false} // Mostra il tooltip
            />
            </>
            )}
            
            {element.effectOut !== "none" && element.enableSplitText && (
            <CustomRangeControl
              label={
                <>
                  <StackedLineChartIcon />
                  {__("Stagger out", "cocoblocks")}
                </>
              }
              value={element.staggerOut}
              slides={slides}
              setAttributes={setAttributes}
              min={0}
              max={2}
              step={0.01}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="title"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'staggerOut')
              }
              tooltipText={__('Set the delay between character animations. Higher values create a longer pause between each character\'s entrance.','cocoblock')} // Testo del tooltip personalizzato
              showTooltip={true} // Mostra il tooltip
            />
            )}
            {(element.effectIn !== 'none' || element.effectOut !== 'none') && (
          <div className="button-reply-effect">
            <Tooltip text={__('Play','cocoblock')}>
            <Button onClick={onAnimatedText}><SlowMotionVideoIcon/></Button> 
            </Tooltip>
          </div>
          )}
          </div>
          <div
            className="content-title-custom-panel intermedy"
          >
            <h2 className="title-custom-panel">
              {__("Special Effects", "cocoblocks")}
            </h2>
          </div>
          <div className="content-section-panel" style={{ padding: "0" }}>

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
            <CustomSelectControl
                label={
                  <>
                    <TouchAppIcon />
                    {__("Link actions", "cocoblocks")}
                  </>
                }
                value={element.textLink}
                slides={slides}
                setAttributes={setAttributes}
                updateType="primary"
                slideId={slide.id}
                elementIndex={elementIndex}
                elementType="title"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'textLink')
                }
                selectOptions={linkOptions} // Passa le opzioni dinamiche
              />
            {element.textLink === "link" && (
              <>
               <CustomTextControl
                 label={
                  <>
                    <InsertLinkIcon />
                    {__("Enter Url", "cocoblocks")}
                  </>
                }
                  value={element.linkUrl}
                  slides={slides}
                  setAttributes={setAttributes}
                  updateType="primary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  elementType="title"
                  placeholder={__("Enter url...", "cocoblocks")}
                  updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'linkUrl')
                  }
                />
                 <CustomSelectControl
                  label={
                    <>
                      <OpenInNewIcon />
                      {__("Target", "cocoblocks")}
                    </>
                  }
                  value={element.linkTarget}
                  slides={slides}
                  setAttributes={setAttributes}
                  updateType="primary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  elementType="title"
                  updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'linkTarget')
                  }
                  selectOptions={[
                    { label: "Same Window", value: "_self" },
                    { label: "New Window", value: "_blank" },
                  ]} // Passa le opzioni dinamiche
                />
                <CustomSelectControl
                  label={
                    <>
                      <DatasetLinkedIcon />
                      {__("Link Behavior", "cocoblocks")}
                    </>
                  }
                  value={element.linkRel}
                  slides={slides}
                  setAttributes={setAttributes}
                  updateType="primary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  elementType="title"
                  updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'linkRel')
                  }
                  selectOptions={[
                    { label: "Follow Link", value: "follow" },
                    { label: "No Follow", value: "nofollow" },
                  ]} // Passa le opzioni dinamiche
                />
              </>
            )}
            {element.textLink === "scroll-to-id" && (
            <CustomTextControl
              label={
               <>
                 <PhishingIcon />
                 {__("Enter ID", "cocoblocks")}
               </>
             }
               value={element.scrollToId}
               slides={slides}
               setAttributes={setAttributes}
               updateType="primary"
               slideId={slide.id}
               elementIndex={elementIndex}
               elementType="title"
               placeholder={__("Enter id...", "cocoblocks")}
               updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                 updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'scrollToId')
               }
             />
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
            <CustomToggleControl
              label={
                <>
                  <PersonalVideoIcon />
                  {__("Desktop", "cocoblocks")}
                </>
              }
              value={element.enableDesktopTitle}
              slides={slides}
              setAttributes={setAttributes}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="title"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'enableDesktopTitle')
              }
            />
            <CustomToggleControl
              label={
                <>
                  <TabletMacIcon />
                  {__("Tablet", "cocoblocks")}
                </>
              }
              value={element.enableTabletTitle}
              slides={slides}
              setAttributes={setAttributes}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="title"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'enableTabletTitle')
              }
            />
            <CustomToggleControl
              label={
                <>
                  <SmartphoneIcon />
                  {__("Tablet", "cocoblocks")}
                </>
              }
              value={element.enableMobileTitle}
              slides={slides}
              setAttributes={setAttributes}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="title"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'enableMobileTitle')
              }
            />
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
              <VisibilityIcon/>
            ) : (
              <VisibilityOffIcon/>
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

export default TextEdit;
