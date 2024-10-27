import React, { useRef } from "react";
import {
  Button,
  ButtonGroup,
  Tooltip,
  __experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import { useState } from "react";
import { __ } from "@wordpress/i18n";
import { trash } from "@wordpress/icons";
import ColorOptionsPanel from "../colorPanel";
import FontStyle from "../font-style";
import SectionSelector from "../sectionSelector";
import CustomRangeControl from "../../controls/range"
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
import {selectOptionsEase} from '../../assets/options';
import {selectOptionsDirection} from '../../assets/options';
import {selectOptionsEffectSplit} from '../../assets/options';
import {selectOptionsDirectionBlock} from '../../assets/options';
import {selectOptionsScaleIn} from '../../assets/options';
import {selectOptionsEffectHover} from '../../assets/options';
import CustomShadowControl from "../../controls/shadow/ShadowControl";
import CustomStrokeControl from "../../controls/stroke/StrokeControl";
import CustomTextControl from "../../controls/text/TextControl";
import CustomAlignControl from "../../controls/align/AlignControl";
import CustomTextAreaControl from "../../controls/text-area/TextAreaControl";
import RotateRightIcon from '@mui/icons-material/RotateRight'; 
import WidthWideIcon from '@mui/icons-material/WidthWide';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import HeightIcon from '@mui/icons-material/Height';
import FormatLineSpacingIcon from '@mui/icons-material/FormatLineSpacing';
import CustomSelectControl from "../../controls/select/SelectControl";
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import CustomToggleControl from "../../controls/toggle/ToggleControl";
import DescriptionIcon from '@mui/icons-material/Description';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
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
import BorderLeftIcon from '@mui/icons-material/BorderLeft';
import BorderInnerIcon from '@mui/icons-material/BorderInner';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import DatasetLinkedIcon from '@mui/icons-material/DatasetLinked';
import PhishingIcon from '@mui/icons-material/Phishing';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import LoginIcon from '@mui/icons-material/Login';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import LoopIcon from '@mui/icons-material/Loop';
import SwapCallsIcon from '@mui/icons-material/SwapCalls';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import RefreshIcon from '@mui/icons-material/Refresh';
import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty';
import DeblurIcon from '@mui/icons-material/Deblur';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import GrainIcon from '@mui/icons-material/Grain';

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

   // Update Text color
   const updateSlideTextColorHover = (slideId, index, color) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "title" && i === index
                ? { ...element, textColorHover: color }
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
                    {__("Width content", "cocoblocks")}
                  </>
                }
                value={element.widthTitle || "100%"}
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
                value={element.widthCustomTitle || 100}
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
                value={element.textAlign || "center"}
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
                value={element.elementTitle || "h3"}
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
                  value={element.fontSize || 22}
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
                value={element.fontSizeTablet || 16}
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
                value={element.fontSizeMobile || 16}
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
                value={element.fontFamily || "Arial, sans-serif"}
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
                value={element.fontWeight || "400"}
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
                  value={element.lineHeight || 1.5}
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
                  value={element.letterSpacing || 0}
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
                value={element.borderStyle || "none"}
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
                  value={element.backgroundBorderSize || 1}
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
                  value={element.backgroundBorderSize || 0}
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
                value={element.rotate || 0}
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
                value={element.textWriteMode || "initial"}
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
                value={element.textOrientation || "initial"}
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
              value={element.opacity || 1}
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
              value={element.zIndexTitle || 1}
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
                valueRangeShadowX={element.textShadowX || 0}
                valueRangeShadowY={element.textShadowY || 0}
                valueRangeShadowBlur={element.textShadowBlur || 0}
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
            valueRangeShadowX={element.boxShadowX || 0}
            valueRangeShadowY={element.boxShadowY || 0}
            valueRangeShadowBlur={element.boxShadowBlur || 0}
            valueRangeShadowSpread={element.boxShadowSpread || 0}
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
            valueRangeStroke={element.stroke || 0}
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
                value={element.blendMode || "normal"}
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
              {__("Animations", "cocoblocks")}
            </h2>
            {(element.effectIn !== 'none') && (
          <div className="button-reply-effect" style={{borderRadius:'50%'}}>
            <Tooltip text={__('Play','cocoblock')}>
            <Button onClick={onAnimatedText} style={{padding:'5px 8px'}}><SlowMotionVideoIcon/></Button> 
            </Tooltip>
          </div>
          )}
          </div>
          <div className="content-section-panel" style={{ padding: "0" }}>
            <CustomSelectControl
              label={
                <>
                  <LoginIcon />
                  {__("Effects", "cocoblocks")}
                </>
              }
              value={element.effectIn || 'none'}
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
              {element.effectIn === "splitText" && (
                <>
                 <CustomSelectControl
              label={
                <>
                  <ScatterPlotIcon />
                  {__("Effect Split", "cocoblocks")}
                </>
              }
              value={element.textSplitEffect || 'fadeSplit'}
              slides={slides}
              setAttributes={setAttributes}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="title"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'textSplitEffect')
              }
              showTooltip={false} // Mostra il tooltip
              selectOptions={selectOptionsEffectSplit} // Passa le opzioni dinamiche
            />
              <CustomRangeControl
              label={
                <>
                  <HourglassBottomIcon />
                  {__("Stagger", "cocoblocks")}
                </>
              }
              value={element.stagger || 50}
              slides={slides}
              setAttributes={setAttributes}
              min={0}
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
              value={element.opacityInFrom || 0}
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
              value={element.opacityInTo || 1}
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
              value={element.filterInFrom || 0}
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
              value={element.filterInTo || 0}
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
         {(['translateXYIn', 'customEffectIn'].includes(element.effectIn) || 
            (element.effectIn === 'splitText' && 
            ['translateSplit', 'customSplit'].includes(element.textSplitEffect))) && (
              <>
             <CustomRangeControl
              label={
                <>
                  <SyncAltIcon />
                  {__("Translate X From", "cocoblocks")}
                </>
              }
              value={element.startXFrom || 0}
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
              value={element.startXTo || 0}
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
              value={element.startYFrom || 0}
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
              value={element.startYTo || 0}
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
             {['customEffectIn'].includes(element.effectIn) && (
             <CustomSelectControl
              label={
                <>
                  <LinearScaleIcon />
                  {__("Choose the scale", "cocoblocks")}
                </>
              }
              value={element.scaleType || 'scale'}
              slides={slides}
              setAttributes={setAttributes}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="title"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'scaleType')
              }
              showTooltip={false} // Mostra il tooltip
              selectOptions={selectOptionsScaleIn} // Passa le opzioni dinamiche
            />
            )}
            {(['scaleIn', 'scaleInX', 'scaleInY','customEffectIn'].includes(element.effectIn)  || ['scaleSplit', 'scaleXSplit', 'scaleYSplit','explosion','gather'].includes(element.textSplitEffect)) && (
            <>
            <CustomRangeControl
              label={
                <>
                  <ZoomOutMapIcon />
                  {__("Scale From", "cocoblocks")}
                </>
              }
              value={element.scaleFrom || 0}
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
              value={element.scaleTo || 1}
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
            {(['rotateIn','customEffectIn'].includes(element.effectIn) ||  (element.effectIn === 'splitText' && 
            ['translateSplit', 'customSplit'].includes(element.textSplitEffect))) && (
            <>
              <CustomRangeControl
                label={
                  <>
                    <RefreshIcon />
                    {__("Rotate From", "cocoblocks")}
                  </>
                }
                value={element.rotateInFrom || 0} 
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
                value={element.rotateInTo || 0}
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
                value={element.rotateInXFrom || 0}
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
                value={element.rotateInXTo || 0}
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
                value={element.rotateInYFrom || 0}
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
                value={element.rotateInYTo || 0}
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
          {(['skewInX','customEffectIn'].includes(element.effectIn) || (element.effectIn === 'splitText' && 
            ['translateSplit', 'customSplit'].includes(element.textSplitEffect))) && (
            <>
              <CustomRangeControl
                label={
                  <>
                    <RefreshIcon />
                    {__("Skew X From", "cocoblocks")}
                  </>
                }
                value={element.skewXFrom || 0}
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
                value={element.skewXTo || 0}
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
                value={element.skewYFrom || 0}
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
                value={element.skewYTo || 0}
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
              value={element.directionBlock || 'left'}
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
              value={element.duration || 1000}
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
              value={element.delayIn || 0}
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
              value={element.endDelay || 0}
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
              value={element.easing || 'linear'}
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
              value={element.direction || 'normal'}
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
              value={element.loop || '1'}
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
            {(element.effectIn !== 'none' ) && (
          <div className="button-reply-effect">
            <Tooltip text={__('Play','cocoblock')}>
            <Button onClick={onAnimatedText}><SlowMotionVideoIcon/></Button> 
            </Tooltip>
          </div>
          )}
          </div>
        </>
      )}

      {activeSection === "hover" && (
        <>
         <div className="custom-block-added">
      <div
        className="content-title-custom-panel intermedy"
        style={{
          marginTop: "-18px",
        }}
      >
        <h2 className="title-custom-panel">{__("Animations", "cocoblocks")}</h2>
      </div>
          <div className="content-section-panel" style={{ padding: "0" }}>
          <CustomSelectControl
              label={
                <>
                  <GrainIcon />
                  {__("Effects", "cocoblocks")}
                </>
              }
              value={element.effectHover || 'none'}
              slides={slides}
              setAttributes={setAttributes}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="title"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'effectHover')
              }
              showTooltip={false} // Mostra il tooltip
              selectOptions={selectOptionsEffectHover} // Passa le opzioni dinamiche
            />
            {element.effectHover !== "none" && (
              <>
               <div className="custom-select color">
          <ColorOptionsPanel
            colorNormal={element.textColorHover}
            setColorNormal={(color) =>
              updateSlideTextColorHover(slide.id, elementIndex, color)
            }
            buttonTitle={__("Text Color", "cocoblocks")}
            buttonIcon={
              <FormatColorTextIcon style={{marginBottom:'-3px'}} />
            }
          />
        </div>
            <CustomRangeControl
              label={
                <>
                  <OpacityIcon />
                  {__("Opacity", "cocoblocks")}
                </>
              }
              value={element.opacityHover || 1}
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
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'opacityHover')
              }
              showTooltip={false} // Mostra il tooltip
            />
            <CustomRangeControl
              label={
                <>
                  <DeblurIcon />
                  {__("Blur", "cocoblocks")}
                </>
              }
              value={element.filterHover || 0}
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
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'filterHover')
              }
              showTooltip={false} // Mostra il tooltip
            />
              {['translateHover','customHover'].includes(element.effectHover) && (
                <>
            <CustomRangeControl
              label={
                <>
                  <SyncAltIcon />
                  {__("Translate X", "cocoblocks")}
                </>
              }
              value={element.startXHover || 0}
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
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'startXHover')
              }
              showTooltip={false} // Mostra il tooltip
            />
            <CustomRangeControl
              label={
                <>
                  <SyncAltIcon style={{transform:'rotate(90deg)'}} />
                  {__("Translate Y", "cocoblocks")}
                </>
              }
              value={element.startYHover || 0}
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
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'startYHover')
              }
              showTooltip={false} // Mostra il tooltip
            />
            </>
            )}
            {['customHover'].includes(element.effectHover) && (
             <CustomSelectControl
              label={
                <>
                  <LinearScaleIcon />
                  {__("Choose the scale", "cocoblocks")}
                </>
              }
              value={element.scaleTypeHover || 'scale'}
              slides={slides}
              setAttributes={setAttributes}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="title"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'scaleTypeHover')
              }
              showTooltip={false} // Mostra il tooltip
              selectOptions={selectOptionsScaleIn} // Passa le opzioni dinamiche
            />
            )}
            {['scaleHover','scaleXHover','scaleYHover','customHover'].includes(element.effectHover) && (
            <>
            <CustomRangeControl
              label={
                <>
                  <ZoomOutMapIcon />
                  {__("Scale", "cocoblocks")}
                </>
              }
              value={element.scaleHover || 1}
              slides={slides}
              setAttributes={setAttributes}
              min={.1}
              max={20}
              step={.1}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="title"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'scaleHover')
              }
              showTooltip={false} // Mostra il tooltip
            />
            </>
            )}
              {['rotateHover','customHover'].includes(element.effectHover) && (
                <>
              <CustomRangeControl
                label={
                  <>
                    <RefreshIcon />
                    {__("Rotate", "cocoblocks")}
                  </>
                }
                value={element.rotateHover || 0}
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
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'rotateHover')
                }
                showTooltip={false}
              />
               <CustomRangeControl
                label={
                  <>
                    <ThreeSixtyIcon />
                    {__("Rotate X", "cocoblocks")}
                  </>
                }
                value={element.rotateXHover || 0}
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
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'rotateXHover')
                }
                showTooltip={false}
              />
              <CustomRangeControl
                label={
                  <>
                    <ThreeSixtyIcon style={{transform:'rotate(90deg)'}} />
                    {__("Rotate Y", "cocoblocks")}
                  </>
                }
                value={element.rotateYHover || 0}
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
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'rotateYHover')
                }
                showTooltip={false}
              />
              </>
            )}
              {['skewHover','customHover'].includes(element.effectHover) && (
                <>
              <CustomRangeControl
                label={
                  <>
                    <RefreshIcon />
                    {__("Skew X", "cocoblocks")}
                  </>
                }
                value={element.skewXHover || 0}
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
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'skewXHover')
                }
                showTooltip={false}
              />
              <CustomRangeControl
                label={
                  <>
                    <RefreshIcon />
                    {__("Skew Y", "cocoblocks")}
                  </>
                }
                value={element.skewYHover || 0}
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
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'skewYHover')
                }
                showTooltip={false}
              />
              </>
            )}
             <CustomRangeControl
              label={
                <>
                  <HourglassBottomIcon />
                  {__("Duration", "cocoblocks")}
                </>
              }
              value={element.durationHover || 1000}
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
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'durationHover')
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
              value={element.easingHover || 'linear'}
              slides={slides}
              setAttributes={setAttributes}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="title"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'easingHover')
              }
              tooltipText={__('Easing refers to the gradual acceleration or deceleration of an animation, allowing for smoother transitions. It controls how an object\'s speed changes over time, creating a more natural feel.','cocoblock')} // Testo del tooltip personalizzato
              showTooltip={true} // Mostra il tooltip
              tooltipTop = '8px' // Posizione 'top' del tooltip (di default 5px)
              selectOptions={selectOptionsEase} // Passa le opzioni dinamiche
            />
              </>
            )}
          </div>
          </div>
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
                value={element.textLink || 'none'}
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
                  value={element.linkRel || 'follow'}
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
              value={element.enableDesktopTitle !== undefined ? element.enableDesktopTitle : true}
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
              value={element.enableTabletTitle !== undefined ? element.enableTabletTitle : true}
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
                  {__("Mobile", "cocoblocks")}
                </>
              }
              value={element.enableMobileTitle !== undefined ? element.enableMobileTitle : true}
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

export default TextEdit;
