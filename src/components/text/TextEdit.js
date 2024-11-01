import React from "react";
import {
  Button,
  ButtonGroup,
  Tooltip,
  __experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import { useState } from "react";
import { __ } from "@wordpress/i18n";
import CustomColorOptionsPanel from "../../controls/color/ColorOptionsPanel";
import CustomHoverControls from "../../multiControls/hover";
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
import { selectOptionsEffectIn } from "../../assets/options";;
import CustomShadowControl from "../../controls/shadow/ShadowControl";
import CustomStrokeControl from "../../controls/stroke/StrokeControl";
import CustomAlignControl from "../../controls/align/AlignControl";
import CustomVisibilityControls from "../../multiControls/visibility/VisibilityControls";
import CustomActionControls from "../../multiControls/action/ActionControls";
import CustomTextAreaControl from "../../controls/text-area/TextAreaControl";
import CustomEffectControls from "../../multiControls/effect";
import RotateRightIcon from '@mui/icons-material/RotateRight'; 
import WidthWideIcon from '@mui/icons-material/WidthWide';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import HeightIcon from '@mui/icons-material/Height';
import FormatLineSpacingIcon from '@mui/icons-material/FormatLineSpacing';
import CustomSelectControl from "../../controls/select/SelectControl";;
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
import ColorLensIcon from '@mui/icons-material/ColorLens';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

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
  onAnimatedText
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
                value={element.widthTitle || "auto"}
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
            <CustomColorOptionsPanel
                  colorNormal={element.textColor }
                  setColorNormal={(color) => updateElement(slides, setAttributes, slide.id, elementIndex, null, color, 'primary', 'title', 'textColor')}
                  buttonTitle={__("Text Color", "cocoblocks")}
                  buttonIcon={<FormatColorTextIcon style={{marginBottom:'-4px'}} />}
                  slides={slides}
                  setAttributes={setAttributes}
                  updateType="primary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  elementType="title"
                  updateElement={updateElement}
                  property="textColor"
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
                value={element.borderStyle }
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
              <CustomColorOptionsPanel
                  colorNormal={element.backgroundBorderColor }
                  setColorNormal={(color) => updateElement(slides, setAttributes, slide.id, elementIndex, null, color, 'primary', 'title', 'backgroundBorderColor')}
                  buttonTitle={__("Border Color", "cocoblocks")}
                  buttonIcon={<BorderColorIcon/>}
                  slides={slides}
                  setAttributes={setAttributes}
                  updateType="primary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  elementType="title"
                  updateElement={updateElement}
                  property="backgroundBorderColor"
                />
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
                  value={element.backgroundBorderRadius || 0}
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
                    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'backgroundBorderRadius')
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
              value={element.opacity ?? 1}
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
          <CustomEffectControls
           valueEffect={element.effectIn}
           colorNormal={element.colorBlockEffect } 
           setColorNormal={(color) => updateElement(slides, setAttributes, slide.id, elementIndex, null, color, 'primary', 'title', 'colorBlockEffect')}
           buttonTitle={__("Background Color", "cocoblocks")}    
           buttonIcon={ <ColorLensIcon style={{marginBottom:'-5px'}} />}  
           valueOpacityFrom={element.opacityFrom}
            valueOpacityTo={element.opacityTo}
            valueBlurFrom={element.filterFrom}
            valueBlurTo={element.filterTo}
              valueTranslateXFrom={element.startXFrom}
              valueTranslateXTo={element.startXTo}
              valueTranslateYFrom={element.startYFrom}
              valueTranslateYTo={element.startYTo}
              valueScaleType={element.scaleType}
              valueScaleFrom={element.scaleFrom}
              valueScaleTo={element.scaleTo}
              valueRotateFrom={element.rotateFrom}
              valueRotateTo={element.rotateTo}
              valueRotateXFrom={element.rotateXFrom}
              valueRotateXTo={element.rotateXTo}
              valueRotateYFrom={element.rotateYFrom}
              valueRotateYTo={element.rotateYTo}
              valueSkewXFrom={element.skewXFrom}
              valueSkewXTo={element.skewXTo}
              valueSkewYFrom={element.skewYFrom}
              valueSkewYTo={element.skewYTo}
              valueDuration={element.duration}
              valueEasing={element.easing}
              valueDirection={element.direction}
              valueLoop={element.loop}
              valueDelay={element.delay}
              valueEndDelay={element.endDelay }
              valueEffectSplit={element.textSplitEffect}
              valueStagger={element.stagger}
              valueDirectionBlock={element.directionBlock}
              onAnimated={onAnimatedText}
              selectOptions={selectOptionsEffectIn}
           slides={slides}
           setAttributes={setAttributes}
           updateType="primary"
           slideId={slide.id}
           elementIndex={elementIndex}
           elementType="title"
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
           valueEffectHover={element.effectHover}
           colorNormal={element.textColorHover } 
           setColorNormal={(color) => updateElement(slides, setAttributes, slide.id, elementIndex, null, color, 'primary', 'title', 'textColorHover')}
           buttonTitle={__("Text Color", "cocoblocks")}    
           buttonIcon={ <FormatColorTextIcon style={{marginBottom:'-4px'}} />}
           valueOpacityHover={element.opacityHover}
            valueBlurHover={element.filterHover}
            valueTranslateXHover={element.startXHover}
            valueTranslateYHover={element.startYHover}
            valueScaleTypeHover={element.scaleTypeHover}
            valueScaleHover={element.scaleHover}
            valueRotateHover={element.rotateHover}
            valueRotateXHover={element.rotateXHover}
            valueRotateYHover={element.rotateYHover}
            valueSkewXHover={element.skewXHover}
            valueSkewYHover={element.skewYHover}
            valueDurationHover={element.durationHover}  
            valueEasingHover={element.easingHover}
           slides={slides}
           setAttributes={setAttributes}
           updateType="primary"
           slideId={slide.id}
           elementIndex={elementIndex}
           elementType="title"
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
        valueSelectLink={element.textLink}
        valueUrl={element.linkUrl}
        valueSelectTarget={element.linkTarget}
        valueSelectRel={element.linkRel}
        valueScrollId={element.scrollToId}
        slides={slides}
        setAttributes={setAttributes}
        updateType="primary"
        slideId={slide.id}
        elementIndex={elementIndex}
        elementType="title"
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
       valueDesktop={element.enableDesktop}
       valueTablet={element.enableTablet}
       valueMobile={element.enableMobile}
       slides={slides}
       setAttributes={setAttributes}
       updateType="primary"
       slideId={slide.id}
       elementIndex={elementIndex}
       elementType="title"
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

export default TextEdit;
