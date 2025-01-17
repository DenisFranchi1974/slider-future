import React from "react";
import {
  Button,
  Tooltip,
  __experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import { useState } from "react";
import { __ } from "@wordpress/i18n";
import SectionSelector from "../multitab/sectionSelector";
import IconModal from "../../icons/IconModal";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CloudIcon from '@mui/icons-material/Cloud';
import AddIcon from '@mui/icons-material/Add';
import materialIcons from '../../icons/materialIcons';
import CustomSelectControl from "../../controls/select/SelectControl";
import CustomRangeControl from "../../controls/range"
import WidthWideIcon from '@mui/icons-material/WidthWide';
import CustomAlignControl from "../../controls/align/AlignControl";
import TextFieldsIcon from '@mui/icons-material/TextFields';
import TuneIcon from '@mui/icons-material/Tune';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import CustomColorOptionsPanel from "../../controls/color/ColorOptionsPanel";
import ColorLensIcon from '@mui/icons-material/ColorLens'
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import PaddingIcon from '@mui/icons-material/Padding';
import MarginIcon from '@mui/icons-material/Margin';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import BorderInnerIcon from '@mui/icons-material/BorderInner';
import {borderStyleOptions} from '../../assets/options';
import BorderStyleIcon from '@mui/icons-material/BorderStyle';
import RotateRightIcon from '@mui/icons-material/RotateRight'; 
import OpacityIcon from '@mui/icons-material/Opacity';
import LayersClearIcon from '@mui/icons-material/LayersClear';
import CustomShadowControl from "../../controls/shadow/ShadowControl";
import CustomEffectControls from "../../multiControls/effect";
import { selectOptionsEffectElement } from "../../assets/options";
import {iconEffectOptions} from '../../assets/options';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import AnimationIcon from '@mui/icons-material/Animation';
import GrainIcon from '@mui/icons-material/Grain';
import CustomActionControls from "../../multiControls/action";
import CustomVisibilityControls from "../../multiControls/visibility"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import DeblurIcon from '@mui/icons-material/Deblur';

const InnerIconEdit = ({
  slide,
  iconDiv,
  iconIndex,
  element,
  elementIndex,
  slides,
  setAttributes,
  setActiveSection,
  activeSection,
  handlePlayInnerIcon
}) => {

  // Funzione generale per aggiornare i controlli
  const updateElement = (slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, property) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) => {
              if (updateType === "secondary" && i === elementIndex && element.type === elementType) {
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

  // Padding 
  const updatenewPadding = (slideId, divIndex, innerIndex, newPadding) => {
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
                              padding: {
                                top: addUnit(newPadding.top || "0", "px"),
                                right: addUnit(newPadding.right || "0", "px"),
                                bottom: addUnit(newPadding.bottom || "0", "px"),
                                left: addUnit(newPadding.left || "0", "px"),
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

  // Margin 
  const updatenewMargin = (slideId, divIndex, innerIndex, newMargin) => {
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
                              margin: {
                                top: addUnit(newMargin.top || "0", "px"),
                                right: addUnit(newMargin.right || "0", "px"),
                                bottom: addUnit(newMargin.bottom || "0", "px"),
                                left: addUnit(newMargin.left || "0", "px"),
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
  // Border size
  const updateBackgroundBorderSize = (slideId, divIndex, innerIndex, newBorderSize) => {
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
    // Border size hover
    const updateBackgroundBorderSizeHover = (slideId, divIndex, innerIndex, newBorderSize) => {
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
                                backgroundBorderSizeHover: {
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

    // Border radius
    const updateBackgroundBorderRadius = (slideId, divIndex, innerIndex, newBorderRadius) => {
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

 const IconComponent = materialIcons[iconDiv.icon];

  return (
    <div className="custom-block-added">
      <div className="divider-controls"></div>
      <div className="content-title-block-added" style={{marginTop: "20px"}}>
      <div className="title-block-added">
        <div className="title-element">
        {iconDiv.icon && IconComponent && (
          <IconComponent style={{ fontSize: '18px', color: 'var(--light-color)', marginRight: '3px' }} />
        )}
        <h2>{__('Icon',"slider-future")}</h2>
        </div>
        <div className="title-element">
        <Button
            isDestructive
            onClick={() => removeSlideTitle(slide.id, elementIndex,iconIndex)}
            className="button-remove-element"
            label={__("Remove Icon", "slider-future")}
            icon={<DeleteOutlineIcon />}
          ></Button>
        <Tooltip  placement="top" text={isOpen ? __('Close Controls','slider-future') : __('Open Controls','slider-future')}>
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
              {__("Content", "slider-future")}
            </h2>
          </div>
          <div className="content-section-panel" style={{ padding: "0" }}>
          <div className="custom-select">
              <div className="add-icon-button-select">
                <div className="title-add-icon-button">
                <CloudIcon />
                <h2>{__('Select Icon',"slider-future")}</h2>
                </div>
                <div className="add-icon-button">
          <Button onClick={openIconModal}><AddIcon /></Button>
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
      <CustomSelectControl
                label={
                  <>
                    <WidthWideIcon />
                    {__("Width content", "slider-future")}
                  </>
                }
                value={iconDiv.width || "auto"}
                slides={slides}
                setAttributes={setAttributes}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={iconIndex}
                elementType="icon"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'width')
                }
                selectOptions={[
                  {
                    label: __("Auto", "slider-future"),
                    value: "auto",
                  },
                  {
                    label: __("100%", "slider-future"),
                    value: "100%",
                  },
                  {
                    label: __("Custom", "slider-future"),
                    value: "custom",
                  },
                ]} // Passa le opzioni dinamiche
              />
            {iconDiv.width !== "auto" && (
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
                  "slider-future"
                )}
              </p>
            )}
            {iconDiv.width === "custom" && (
              <CustomRangeControl
                label={
                  <>
                    <WidthWideIcon />
                    {__("Custom Width (px)", "slider-future")}
                  </>
                }
                value={iconDiv.widthCustom || 100}
                slides={slides}
                setAttributes={setAttributes}
                min={1}
                max={1000}
                step={1}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={iconIndex}
                elementType="icon"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'widthCustom')
                }
              />
            )}
              <CustomAlignControl
                value={iconDiv.align || "center"}
                slides={slides}
                setAttributes={setAttributes}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={iconIndex}
                elementType="icon"
                onChange={(newValue) =>
                  updateElement(slides, setAttributes, slide.id, elementIndex, iconIndex, newValue, "secondary", "icon", 'align')
                }
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
            <h2 className="title-custom-panel">{__("Font", "slider-future")}</h2>
          </div>
          <div className="content-section-panel" style={{ padding: "0" }}>
          <CustomRangeControl
                label={
                  <>
                    <TextFieldsIcon/>
                    {__("Min", "slider-future")}
                  </>
                }
                value={iconDiv.fontSizeMobile || 16}
                slides={slides}
                setAttributes={setAttributes}
                min={4}
                max={100}
                step={1}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={iconIndex}
                elementType="icon"
                tooltipText= {__("Sets the minimum text size for small screens (e.g., mobile devices). The text won’t go below this value.", "slider-future")}
                showTooltip = {true}
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'fontSizeMobile')
                }
              />
              <CustomRangeControl
                label={
                  <>
                    <TuneIcon />
                    {__("Mid", "slider-future")}
                  </>
                }
                value={iconDiv.fontSizeTablet || 16}
                slides={slides}
                setAttributes={setAttributes}
                min={4}
                max={200}
                step={.5}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={iconIndex}
                elementType="icon"
                tooltipText= {__("Defines the fluid text size, measured in viewport width (vw), that adapts to screen width. This is ideal for medium-sized screens, like tablets, creating a smooth transition between the minimum and maximum sizes.", "slider-future")}
                showTooltip = {true}
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'fontSizeTablet')
                }
              />      
              <CustomRangeControl
                  label={
                    <>
                      <FullscreenIcon />
                      {__("Max", "slider-future")}
                    </>
                  }
                  value={iconDiv.fontSize || 22}
                  slides={slides}
                  setAttributes={setAttributes}
                  min={4}
                  max={500}
                  step={1}
                  updateType="secondary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  innerIndex={iconIndex}
                  elementType="icon"
                  tooltipText= {__("Sets the maximum text size for large screens (e.g., desktop monitors). The text won’t exceed this value.", "slider-future")}
                  showTooltip = {true}
                  updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'fontSize')
                  }
                />
                 <CustomColorOptionsPanel
                  colorNormal={iconDiv.color }
                  setColorNormal={(color) => updateElement(slides, setAttributes, slide.id, elementIndex, null, color, 'secondary', 'icon', 'color')}
                  buttonTitle={__("Color", "slider-future")}
                  buttonIcon={<FormatColorTextIcon style={{marginBottom:'-4px'}} />}
                  slides={slides}
                  setAttributes={setAttributes}
                  updateType="secondary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  innerIndex={iconIndex}
                  elementType="icon"
                  updateElement={updateElement}
                  property="color"
                />
            <CustomColorOptionsPanel
                  colorNormal={iconDiv.backgroundColorIcon }
                  setColorNormal={(color) => updateElement(slides, setAttributes, slide.id, elementIndex, null, color, 'secondary', 'icon', 'backgroundColorIcon')}
                  buttonTitle={__("Background Color", "slider-future")}
                  buttonIcon={<ColorLensIcon style={{marginBottom:'-5px'}} />}
                  slides={slides}
                  setAttributes={setAttributes}
                  updateType="secondary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  innerIndex={iconIndex}
                  elementType="icon"
                  updateElement={updateElement}
                  property="backgroundColorIcon"
                />
          </div>
          <div className="content-title-custom-panel intermedy">
            <h2 className="title-custom-panel">
              {__("Spacings", "slider-future")}
            </h2>
          </div>
          <div className="content-section-panel" style={{ padding: "0" }}>
            <div className="custom-select box-control">
              <BoxControl
                id="custom-margin-control"
                label={
                  <>
                    <PaddingIcon />
                    {__("Padding", "slider-future")}
                  </>
                }
                values={iconDiv.padding}
                units={{}}
                onChange={(newPadding) =>
                  updatenewPadding(slide.id, elementIndex,iconIndex, newPadding)
                }
              />
            </div>
            <div className="custom-select box-control">
              <BoxControl
                id="custom-margin-control"
                label={
                  <>
                    <MarginIcon />
                    {__("Margin", "slider-future")}
                  </>
                }
                values={iconDiv.margin}
                units={{}}
                onChange={(newMargin) =>
                  updatenewMargin(slide.id, elementIndex,iconIndex, newMargin)
                }
              />
            </div>
          </div>
          <div className="content-title-custom-panel intermedy">
            <h2 className="title-custom-panel">{__("Border", "slider-future")}</h2>
          </div>
          <div
            className="content-section-panel"
            style={{ paddingTop: "0", paddingBottom: "0" }}
          >
            <CustomSelectControl
                label={
                  <>
                    <BorderStyleIcon />
                    {__("Border style", "slider-future")}
                  </>
                }
                value={iconDiv.borderStyle }
                slides={slides}
                setAttributes={setAttributes}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={iconIndex}
                elementType="icon"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'borderStyle')
                }
                selectOptions={borderStyleOptions} // Passa le opzioni dinamiche
              />
            {iconDiv.borderStyle !== "none" && (
              <>
               <CustomColorOptionsPanel
                  colorNormal={iconDiv.backgroundBorderColor }
                  setColorNormal={(color) => updateElement(slides, setAttributes, slide.id, elementIndex, null, color, 'secondary', 'icon', 'backgroundBorderColor')}
                  buttonTitle={__("Border Color", "slider-future")}
                  buttonIcon={<BorderColorIcon/>}
                  slides={slides}
                  setAttributes={setAttributes}
                  updateType="secondary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  innerIndex={iconIndex}
                  elementType="icon"
                  updateElement={updateElement}
                  property="backgroundBorderColor"
                />
                  <div className="custom-select box-control">
              <BoxControl
                id="custom-margin-control"
                label={
                  <>
                    <MarginIcon />
                    {__("Border width", "slider-future")}
                  </>
                }
                values={iconDiv.backgroundBorderSize}
                units={{}}
                onChange={(newBorderSize) =>
                  updateBackgroundBorderSize(slide.id, elementIndex, iconIndex, newBorderSize)
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
                    {__("Border radius", "slider-future")}
                  </>
                }
                values={iconDiv.backgroundBorderRadius}
                units={{}}
                onChange={(newBorderRadius) =>
                  updateBackgroundBorderRadius(slide.id, elementIndex,iconIndex, newBorderRadius)
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
              {__("Basic Transforms", "slider-future")}
            </h2>
          </div>
          <div className="content-section-panel" style={{ padding: "0" }}>
          <CustomRangeControl
                label={
                  <>
                    <RotateRightIcon />
                    {__("Rotate", "slider-future")}
                  </>
                }
                value={iconDiv.rotate || 0}
                slides={slides}
                setAttributes={setAttributes}
                min={0}
                max={360}
                step={1}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={iconIndex}
                elementType="icon"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'rotate')
                }
              />
          </div>
          <div className="content-title-custom-panel intermedy">
            <h2 className="title-custom-panel">
              {__("Transparency Setting", "slider-future")}
            </h2>
          </div>
          <div className="content-section-panel" style={{ padding: "0" }}>
          <CustomRangeControl
              label={
                <>
                  <OpacityIcon />
                  {__("Opacity", "slider-future")}
                </>
              }
              value={iconDiv.opacity ?? 1}
              slides={slides}
              setAttributes={setAttributes}
              min={0}
              max={1}
              step={0.1}
              updateType="secondary"
              slideId={slide.id}
              elementIndex={elementIndex}
              innerIndex={iconIndex}
              elementType="icon"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'opacity')
              }
            />
          </div>
          <div className="content-title-custom-panel intermedy">
            <h2 className="title-custom-panel">
              {__("LEVEL", "slider-future")}
            </h2>
          </div>
          <div className="content-section-panel" style={{ padding: "0" }}>
          <CustomRangeControl
              label={
                <>
                  <LayersClearIcon />
                  {__("Z-index", "slider-future")}
                </>
              }
              value={iconDiv.zIndexIcon || 1}
              slides={slides}
              setAttributes={setAttributes}
              min={0}
              max={999}
              step={1}
              updateType="secondary"
              slideId={slide.id}
              elementIndex={elementIndex}
              innerIndex={iconIndex}
              elementType="icon"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'zIndexIcon')
              }
            />
          </div>
          <CustomShadowControl
            valueEnableShadow={iconDiv.enableBoxShadow}
            valueRangeShadowX={iconDiv.boxShadowX || 0}
            valueRangeShadowY={iconDiv.boxShadowY || 0}
            valueRangeShadowBlur={iconDiv.boxShadowBlur || 0}
            valueRangeShadowSpread={iconDiv.boxShadowSpread || 0}
            valueRangeShadowColor={iconDiv.colorBoxShadow}
            slides={slides}
            showSpread={true}
            setAttributes={setAttributes}
            updateType="secondary"
            slideId={slide.id}
            elementIndex={elementIndex}
            innerIndex={iconIndex}
            elementType="icon"
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
        </>
      )}
      {activeSection === "animation" && (
        <>
<CustomEffectControls
           valueEffect={iconDiv.effectIn}
           valueOpacityFrom={iconDiv.opacityFrom}
            valueOpacityTo={iconDiv.opacityTo}
            valueBlurFrom={iconDiv.filterFrom}
            valueBlurTo={iconDiv.filterTo}
              valueTranslateXFrom={iconDiv.startXFrom}
              valueTranslateXTo={iconDiv.startXTo}
              valueTranslateYFrom={iconDiv.startYFrom}
              valueTranslateYTo={iconDiv.startYTo}
              valueScaleType={iconDiv.scaleType}
              valueScaleFrom={iconDiv.scaleFrom}
              valueScaleTo={iconDiv.scaleTo}
              valueRotateFrom={iconDiv.rotateFrom}
              valueRotateTo={iconDiv.rotateTo}
              valueRotateXFrom={iconDiv.rotateXFrom}
              valueRotateXTo={iconDiv.rotateXTo}
              valueRotateYFrom={iconDiv.rotateYFrom}
              valueRotateYTo={iconDiv.rotateYTo}
              valueSkewXFrom={iconDiv.skewXFrom}
              valueSkewXTo={iconDiv.skewXTo}
              valueSkewYFrom={iconDiv.skewYFrom}
              valueSkewYTo={iconDiv.skewYTo}
              valueDuration={iconDiv.duration}
              valueEasing={iconDiv.easing}
              valueDirection={iconDiv.direction}
              valueLoop={iconDiv.loop}
              valueDelay={iconDiv.delay}
              valueEndDelay={iconDiv.endDelay }
              onAnimated={handlePlayInnerIcon}
              selectOptions={selectOptionsEffectElement}
           slides={slides}
           setAttributes={setAttributes}
           updateType="secondary"
           slideId={slide.id}
           elementIndex={elementIndex}
            innerIndex={iconIndex}
           elementType="icon"
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
          <div className="content-section-panel" style={{ padding: "0" }}>
          <CustomSelectControl
                label={
                  <>
                    <AnimationIcon /> 
                    {__("Animations", "slider-future")}
                  </>
                }
                value={iconDiv.iconAnimation }
                slides={slides}
                setAttributes={setAttributes}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={iconIndex}
                elementType="icon"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'iconAnimation')
                }
                selectOptions={iconEffectOptions} 
              />
            {iconDiv.iconAnimation !== "none" && (
              <>
                <CustomRangeControl
                label={
                  <>
                     <HourglassBottomIcon />
                    {__("Duration", "slider-future")}
                  </>
                }
                value={iconDiv.iconAnimationDuration ?? 0}
                slides={slides}
                setAttributes={setAttributes}
                min={.1}
                max={20}
                step={.1}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={iconIndex}
                elementType="icon"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'iconAnimationDuration')
                }
              />
                <p
                    className="notice components-base-control__help"
                    style={{
                      borderRadius: "0",
                      margin: "0",
                    }}
                  >
                    {__(
                      "Warning: this animation will prevent a hover effect!",
                      "slider-future"
                    )}
                  </p>
              </>
            )}
          </div>
        </>
      )}
      {activeSection === "hover" && (
        <>
         <div
        className="content-title-custom-panel intermedy"
        style={{
          marginTop: "-18px",
        }}
      >
        <h2 className="title-custom-panel">{__("Animations", "slider-future")}</h2>
      </div>
      <div className="content-section-panel" style={{ padding: "0" }}>
      <CustomSelectControl
                label={
                  <>
                     <GrainIcon />
                    {__("Effects", "slider-future")}
                  </>
                }
                value={iconDiv.animationHover }
                slides={slides}
                setAttributes={setAttributes}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={iconIndex}
                elementType="icon"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'animationHover')
                }
                selectOptions={[
                  { label: "None", value: "none" },
                  { label: "Scale", value: "hover-effect-1-icon-inner" },
                  { label: "Translate Y", value: "hover-effect-2-icon-inner" },
                  { label: "Translate X", value: "hover-effect-5-icon-inner" },
                  { label: "Blur", value: "hover-effect-6-icon-inner" },
                ]} 
              />
              {['hover-effect-2-icon-inner','hover-effect-5-icon-inner'].includes(iconDiv.animationHover) && (
           <CustomRangeControl
                label={
                  <>
                     <SyncAltIcon />
                    {__("Translate", "slider-future")}
                  </>
                }
                value={iconDiv.translateEffectHover ?? 0}
                slides={slides}
                setAttributes={setAttributes}
                min={-100}
                max={100}
                step={1}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={iconIndex}
                elementType="icon"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'translateEffectHover')
                }
              />
        )}
         {['hover-effect-1-icon-inner'].includes(iconDiv.animationHover) && (
           <CustomRangeControl
                label={
                  <>
                       <ZoomOutMapIcon />
                    {__("Scale", "slider-future")}
                  </>
                }
                value={iconDiv.scaleEffectHover ?? 1}
                slides={slides}
                setAttributes={setAttributes}
                min={0}
                max={10}
                step={.1}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={iconIndex}
                elementType="icon"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'scaleEffectHover')
                }
              />
        )}
         {['hover-effect-6-icon-inner'].includes(iconDiv.animationHover) && (
           <CustomRangeControl
                label={
                  <>
                        <DeblurIcon />
                    {__("Set Blur", "slider-future")}
                  </>
                }
                value={iconDiv.blurEffectHover ?? 0}
                slides={slides}
                setAttributes={setAttributes}
                min={0}
                max={20}
                step={1}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={iconIndex}
                elementType="icon"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'blurEffectHover')
                }
              />
        )}
         <CustomRangeControl
                label={
                  <>
                     <HourglassBottomIcon />
                    {__("Duration", "slider-future")}
                  </>
                }
                value={iconDiv.durationEffectHover ?? 0}
                slides={slides}
                setAttributes={setAttributes}
                min={.1}
                max={20}
                step={.1}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={iconIndex}
                elementType="icon"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'durationEffectHover')
                }
              />

      </div>
      <div
        className="content-title-custom-panel intermedy"
      >
        <h2 className="title-custom-panel">{__("Style", "slider-future")}</h2>
      </div>

      <div className="content-section-panel" style={{ padding: "0" }}>
      <CustomRangeControl
                label={
                  <>
                    <OpacityIcon />
                    {__("Opacity", "slider-future")}
                  </>
                }
                value={iconDiv.opacityHover ?? 1}
                slides={slides}
                setAttributes={setAttributes}
                min={.1}
                max={1}
                step={.1}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={iconIndex}
                elementType="icon"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'opacityHover')
                }
              />
              {iconDiv.animationHover == "none" && (
               <CustomRangeControl
                label={
                  <>
                    <OpacityIcon />
                    {__("Rotate", "slider-future")}
                  </>
                }
                value={iconDiv.rotateHover ?? 0}
                slides={slides}
                setAttributes={setAttributes}
                min={0}
                max={360}
                step={1}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={iconIndex}
                elementType="icon"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'rotateHover')
                }
              />
              )}
      <CustomColorOptionsPanel
        colorNormal={iconDiv.colorHover }
        setColorNormal={(color) => updateElement(slides, setAttributes, slide.id, elementIndex, null, color, 'secondary', 'icon', 'colorHover')}
        buttonTitle={__("Color", "slider-future")}
        buttonIcon={<FormatColorTextIcon style={{marginBottom:'-4px'}} />}
        slides={slides}
        setAttributes={setAttributes}
        updateType="secondary"
        slideId={slide.id}
        elementIndex={elementIndex}
        innerIndex={iconIndex}
        elementType="icon"
        updateElement={updateElement}
        property="colorHover"
    />
    <CustomSelectControl
                label={
                  <>
                    <BorderStyleIcon />
                    {__("Border style", "slider-future")}
                  </>
                }
                value={iconDiv.borderStyleHover }
                slides={slides}
                setAttributes={setAttributes}
                updateType="secondary"
                slideId={slide.id}
                elementIndex={elementIndex}
                innerIndex={iconIndex}
                elementType="icon"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'borderStyleHover')
                }
                selectOptions={borderStyleOptions} // Passa le opzioni dinamiche
              />
            {iconDiv.borderStyleHover !== "none" && (
              <>
               <CustomColorOptionsPanel
                  colorNormal={iconDiv.backgroundBorderColorHover }
                  setColorNormal={(color) => updateElement(slides, setAttributes, slide.id, elementIndex, null, color, 'secondary', 'icon', 'backgroundBorderColorHover')}
                  buttonTitle={__("Border Color", "slider-future")}
                  buttonIcon={<BorderColorIcon/>}
                  slides={slides}
                  setAttributes={setAttributes}
                  updateType="secondary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  innerIndex={iconIndex}
                  elementType="icon"
                  updateElement={updateElement}
                  property="backgroundBorderColorHover"
                />
                  <div className="custom-select box-control">
              <BoxControl
                id="custom-margin-control"
                label={
                  <>
                    <MarginIcon />
                    {__("Border width", "slider-future")}
                  </>
                }
                values={iconDiv.backgroundBorderSizeHover}
                units={{}}
                onChange={(newBorderSize) =>
                  updateBackgroundBorderSizeHover(slide.id, elementIndex,iconIndex, newBorderSize)
                }
              />
            </div>
              </>
            )}

      </div>
        </>
      )}
      {activeSection === "actions" && (
         <CustomActionControls
        valueSelectLink={iconDiv.link}
        valueUrl={iconDiv.linkUrl}
        valueSelectTarget={iconDiv.linkTarget}
        valueSelectRel={iconDiv.linkRel}
        valueScrollId={iconDiv.scrollToId}
        slides={slides}
        setAttributes={setAttributes}
        updateType="secondary"
        slideId={slide.id}
        elementIndex={elementIndex}
        innerIndex={iconIndex}
        elementType="icon"
        updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, property) =>
          updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, property)
        }
        linkProperty="link"
        urlProperty="linkUrl"
        targetProperty="linkTarget"
        relProperty="linkRel"
        scrollIdProperty="scrollToId"
      />
      )}
      {activeSection === "visibility" && (
         <CustomVisibilityControls
       valueDesktop={iconDiv.enableDesktop}
       valueTablet={iconDiv.enableTablet}
       valueMobile={iconDiv.enableMobile}
       slides={slides}
       setAttributes={setAttributes}
       updateType="secondary"
       slideId={slide.id}
       elementIndex={elementIndex}
        innerIndex={iconIndex}
       elementType="icon"
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
            {__("Hide in editor", "slider-future")}
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

export default InnerIconEdit;