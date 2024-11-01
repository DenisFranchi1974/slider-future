import React, { useState } from "react";
import {
  Button,
  Tooltip,
  __experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SectionSelectorImage from "../sectionSelectorImage";
import ImageSelectionModal from "../ImageSelectionModal";
import CustomTextAreaControl from "../../controls/text-area/TextAreaControl";
import CustomAlignControl from "../../controls/align/AlignControl";
import CustomSelectControl from "../../controls/select/SelectControl";
import CustomRangeControl from "../../controls/range"
import {borderStyleOptions} from '../../assets/options';
import CustomShadowControl from "../../controls/shadow/ShadowControl";
import CustomTextControl from "../../controls/text/TextControl";
import CustomToggleControl from "../../controls/toggle/ToggleControl";
import CustomColorOptionsPanel from "../../controls/color/ColorOptionsPanel";
import CustomEffectControls from "../../multiControls/effect";
import CustomHoverControls from "../../multiControls/hover";
import {linkOptions} from '../../assets/options';
import { selectOptionsEffectElement } from "../../assets/options";
import {spikeOptions} from '../../assets/options';
import {blobOptions} from '../../assets/options';
import {filterImageOptions} from '../../assets/options';
import {spikeRightOptions} from '../../assets/options';
import WidthWideIcon from '@mui/icons-material/WidthWide';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import PaletteIcon from '@mui/icons-material/Palette';
import HeightIcon from '@mui/icons-material/Height';
import BorderStyleIcon from '@mui/icons-material/BorderStyle';
import PaddingIcon from '@mui/icons-material/Padding';
import MarginIcon from '@mui/icons-material/Margin';
import BorderLeftIcon from '@mui/icons-material/BorderLeft';
import BorderInnerIcon from '@mui/icons-material/BorderInner';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import OpacityIcon from '@mui/icons-material/Opacity';
import LayersClearIcon from '@mui/icons-material/LayersClear';
import RotateRightIcon from '@mui/icons-material/RotateRight'; 
import TouchAppIcon from '@mui/icons-material/TouchApp';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import DatasetLinkedIcon from '@mui/icons-material/DatasetLinked';
import PhishingIcon from '@mui/icons-material/Phishing';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import CloudIcon from '@mui/icons-material/Cloud';
import PhotoSizeSelectSmallIcon from '@mui/icons-material/PhotoSizeSelectSmall';
import HideImageIcon from '@mui/icons-material/HideImage';
import PhotoFilterIcon from '@mui/icons-material/PhotoFilter';
import ImageIcon from '@mui/icons-material/Image';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';

const ImageEdit = ({
  slide,
  element,
  elementIndex,
  slides,
  setAttributes,
  setActiveSectionImage,
  activeSectionImage,
  onAnimatedImage
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

  // nascondi l'immagine in editor
  const [hideImage, setHideImage] = useState(element.hideImage || "");

  const toggleHideImage = () => {
    const newState = hideImage === "hide" ? "" : "hide";
    setHideImage(newState);
  
    element.hideImage = newState;
    setAttributes({ elements: [...slides] }); // Oppure aggiorna la struttura dati appropriata
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageSelect = async (image) => {
    setIsLoading(true);
    try {
      // Chiamata all'endpoint REST API per caricare l'immagine
      const response = await fetch("/wp-json/custom-plugin/v1/upload-image/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image_url: image.url }),
      });

      const data = await response.json();

      if (data.url) {
        // Aggiorna la slide con l'immagine appena caricata
        updateSlideImage(slide.id, elementIndex, image.url, image.alt);
      } else {
        console.error("Errore durante il caricamento dell'immagine.");
      }
    } catch (error) {
      console.error("Errore durante la chiamata all'API:", error);
    } finally {
      setIsLoading(false);
    }

    setIsModalOpen(false);
  };

  // Funzione per aprire il modale
  const openModal = () => setIsModalOpen(true);

  // Funzione per chiudere il modale
  const closeModal = () => setIsModalOpen(false);

  // Remove Image
  const removeSlideImage = (slideId, index) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.filter(
              (element, i) => !(element.type === "image" && i === index)
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Image
  const updateSlideImage = (slideId, index, newUrl, newAlt) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "image" && i === index
                ? { ...element, url: newUrl, alt: newAlt }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Margin image
  const updatenewMarginImage = (slideId, index, newMarginImage) => {
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
              if (element.type === "image" && i === index) {
                return {
                  ...element,
                  marginImage: {
                    top: addUnit(
                      newMarginImage.top || "0",
                      newMarginImage.unit || "px"
                    ),
                    right: addUnit(
                      newMarginImage.right || "0",
                      newMarginImage.unit || "px"
                    ),
                    bottom: addUnit(
                      newMarginImage.bottom || "0",
                      newMarginImage.unit || "px"
                    ),
                    left: addUnit(
                      newMarginImage.left || "0",
                      newMarginImage.unit || "px"
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
  
  return (
    <div className="custom-block-added">
      <div className="divider-controls"></div>
      <div className="title-block-added">
        <div className="title-element">
        {element.url ? (
        <img src={ element.url}  style={{width:'30px',height:'30px',objectFit:'cover',borderRadius:'8px',border:'1px solid var(--background-color)'}}/>
        ) : (
          <ImageIcon />
        )}
          <h2>{__("Image", "slider")}</h2>
        </div>
        <div className="title-element">
        <Button
            onClick={() => removeSlideImage(slide.id, elementIndex)}
            isDestructive
            icon={<DeleteOutlineIcon />}
            label={__("Remove Image", "cocoblocks")}
            className="button-remove-element"
          />
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
      <SectionSelectorImage onSectionChange={setActiveSectionImage} />
      <div className="content-img-upload">
        <div className="content-label-image">
          {activeSectionImage === "content" && (
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
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={(media) =>
                    updateSlideImage(
                      slide.id,
                      elementIndex,
                      media.url,
                      media.alt
                    )
                  }
                  allowedTypes={["image"]}
                  render={({ open }) => (
                    <>
                      {!element.url ? (
                        <div
                          className="content-section-panel"
                          style={{ padding: "0" }}
                        >
                          <div className="custom-select">
                            <Button
                              onClick={open}
                              style={{
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                color: " var(--light-color)",
                                padding: "0",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "5px",
                                }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="20px"
                                  viewBox="0 -960 960 960"
                                  width="20px"
                                  fill="#e8eaed"
                                >
                                  <path d="M360-400h400L622-580l-92 120-62-80-108 140Zm-40 160q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z" />
                                </svg>
                                {__("Media Library", "cocoblocks")}
                              </div>
                              <span
                                className="dashicons dashicons-arrow-down-alt2"
                                style={{
                                  position: "relative",
                                  right: "2px",
                                  top: "6px",
                                  fontSize: "12px",
                                }}
                              ></span>
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div
                            style={{
                              position: "relative",
                              padding: "0px 10px",
                              marginTop: "12px",
                            }}
                          >
                            <img
                              src={element.url}
                              alt={
                                element.alt ||
                                __("Uploaded Image", "cocoblocks")
                              }
                              style={{
                                width: "100%",
                                borderRadius: "8px",
                              }}
                            />
                          </div>
                          <Button
                            onClick={open}
                            style={{
                              marginLeft: "2px",
                              position: "relative",
                              top: "-2px",
                            }}
                            className="button-replace"
                            icon={<ChangeCircleOutlinedIcon />}
                            label={__(
                              "Change Image form Media Library",
                              "cocoblocks"
                            )}
                          />
                          <Button
                            onClick={openModal}
                            style={{
                              marginLeft: "2px",
                              position: "relative",
                              top: "-2px",
                            }}
                            className="button-replace"
                            icon={<ChangeCircleOutlinedIcon />}
                            label={__(
                              "Change Image from Object Library",
                              "cocoblocks"
                            )}
                          />
                        </>
                      )}
                    </>
                  )}
                />
              </MediaUploadCheck>
            </>
          )}
        </div>
      </div>
      {activeSectionImage === "content" && (
        <>
          {!element.url && (
            <div className="content-section-panel" style={{ padding: "0" }}>
              <div className="custom-select">
                <Button
                  onClick={openModal}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    color: " var(--light-color)",
                    padding: "0",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 -960 960 960"
                      width="20px"
                      fill="#e8eaed"
                    >
                      <path d="M440-440ZM120-120q-33 0-56.5-23.5T40-200v-480q0-33 23.5-56.5T120-760h126l74-80h240v80H355l-73 80H120v480h640v-360h80v360q0 33-23.5 56.5T760-120H120Zm640-560v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM440-260q75 0 127.5-52.5T620-440q0-75-52.5-127.5T440-620q-75 0-127.5 52.5T260-440q0 75 52.5 127.5T440-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Z" />
                    </svg>
                    {__("Object Library", "cocoblocks")}
                  </div>
                  <span
                    className="dashicons dashicons-arrow-down-alt2"
                    style={{
                      position: "relative",
                      right: "2px",
                      top: "6px",
                      fontSize: "12px",
                    }}
                  ></span>
                </Button>
              </div>
            </div>
          )}
          {isModalOpen && (
            <ImageSelectionModal
              onClose={closeModal}
              onSelect={handleImageSelect}
            />
          )}
          {element.url && (
            <>
              <div className="content-section-panel" style={{ padding: "0" }}>
                <CustomTextAreaControl
                  value={element.alt}
                  slides={slides}
                  setAttributes={setAttributes}
                  updateType="primary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  elementType="image"
                  placeholder={__("Add alt text...", "cocoblocks")}
                  updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'alt')
                  }
                />
                <CustomSelectControl
                  label={
                    <>
                      <WidthWideIcon />
                      {__("Width content", "cocoblocks")}
                    </>
                  }
                  value={element.widthImageContent}
                  slides={slides}
                  setAttributes={setAttributes}
                  updateType="primary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  elementType="image"
                  updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'widthImageContent')
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
                  ]} // Passa le opzioni dinamiche
                />
                <CustomAlignControl
                  value={element.imageAlign}
                  slides={slides}
                  setAttributes={setAttributes}
                  updateType="primary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  elementType="image"
                  onChange={(newValue) =>
                    updateElement(slides, setAttributes, slide.id, elementIndex, null, newValue, "primary", "image", 'imageAlign')
                  }
                />
              </div>
            </>
          )}
        </>
      )}
      {activeSectionImage === "style" && (
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
          {element.url && (
            <>
              <div className="content-section-panel" style={{ padding: "0" }}>
              <CustomSelectControl
                  label={
                    <>
                      <AspectRatioIcon />
                      {__("Image fit", "cocoblocks")}
                    </>
                  }
                  value={element.fit}
                  slides={slides}
                  setAttributes={setAttributes}
                  updateType="primary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  elementType="image"
                  updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'fit')
                  }
                  selectOptions={[
                    {
                      label: __("Cover", "slider"),
                      value: "cover",
                    },
                    {
                      label: __("Contain", "slider"),
                      value: "contain",
                    },
                  ]} // Passa le opzioni dinamiche
                />
                {element.paddingImage > 0 && (
                     <CustomColorOptionsPanel
                        colorNormal={element.backgroundColorImage }
                        setColorNormal={(color) => updateElement(slides, setAttributes, slide.id, elementIndex, null, color, 'primary', 'image', 'backgroundColorImage')}
                        buttonTitle={__("Background Color", "cocoblocks")}
                        buttonIcon={<PaletteIcon style={{
                          marginBottom: "-5px",
                          width: "20px",
                          height: "20px",
                        }}/>}
                        slides={slides}
                        setAttributes={setAttributes}
                        updateType="primary"
                        slideId={slide.id}
                        elementIndex={elementIndex}
                        elementType="image"
                        updateElement={updateElement}
                        property="backgroundColorImage"
                      />
                )}
              </div>
              <div className="content-title-custom-panel intermedy">
                <h2 className="title-custom-panel">
                  {__("Width & Height", "cocoblocks")}
                </h2>
              </div>
              <div className="content-section-panel" style={{ padding: "0" }}>
              <CustomSelectControl
                  label={
                    <>
                      <HeightIcon style={{transform:'rotate(90deg)'}} />
                      {__("Width", "cocoblocks")}
                    </>
                  }
                  value={element.widthImage}
                  slides={slides}
                  setAttributes={setAttributes}
                  updateType="primary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  elementType="image"
                  updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'widthImage')
                  }
                  selectOptions={[
                    {
                      label: __("Auto", "slide"),
                      value: "auto",
                    },
                    {
                      label: __("Relative", "cocoblocks"),
                      value: "relative",
                    },
                    {
                      label: __("Fixed", "cocoblocks"),
                      value: "fixed",
                    },
                  ]} // Passa le opzioni dinamiche
                />
                {element.widthImage === "relative" && (
                  <CustomRangeControl
                  label={
                    <>
                      {__("Custom width (%)", "cocoblocks")}
                    </>
                  }
                  value={element.customWidthImage}
                  slides={slides}
                  setAttributes={setAttributes}
                  min={0}
                  max={100}
                  step={1}
                  updateType="primary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  elementType="image"
                  updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'customWidthImage')
                  }
                />
                )}
                {element.widthImage === "fixed" && (
                  <CustomRangeControl
                  label={
                    <>
                      {__("Custom width (px)", "cocoblocks")}
                    </>
                  }
                  value={element.customWidthImagePx}
                  slides={slides}
                  setAttributes={setAttributes}
                  min={0}
                  max={1920}
                  step={1}
                  updateType="primary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  elementType="image"
                  updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'customWidthImagePx')
                  }
                />
                )}
                 <CustomSelectControl
                  label={
                    <>
                      <HeightIcon />
                      {__("Height", "cocoblocks")}
                    </>
                  }
                  value={element.heightImage}
                  slides={slides}
                  setAttributes={setAttributes}
                  updateType="primary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  elementType="image"
                  updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'heightImage')
                  }
                  selectOptions={[
                    {
                      label: __("Auto", "slide"),
                      value: "auto",
                    },
                    {
                      label: __("Relative", "cocoblocks"),
                      value: "relative",
                    },
                    {
                      label: __("Fixed", "cocoblocks"),
                      value: "fixed",
                    },
                  ]} // Passa le opzioni dinamiche
                />
                {element.heightImage === "relative" && (
                   <CustomRangeControl
                   label={
                     <>
                       {__("Custom height (%)", "cocoblocks")}
                     </>
                   }
                   value={element.customHeightImage}
                   slides={slides}
                   setAttributes={setAttributes}
                   min={0}
                   max={100}
                   step={1}
                   updateType="primary"
                   slideId={slide.id}
                   elementIndex={elementIndex}
                   elementType="image"
                   updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                     updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'customHeightImage')
                   }
                 />
                )}
                {element.heightImage === "fixed" && (
                  <CustomRangeControl
                  label={
                    <>
                      {__("Custom height (px)", "cocoblocks")}
                    </>
                  }
                  value={element.customHeightImagePx}
                  slides={slides}
                  setAttributes={setAttributes}
                  min={0}
                  max={1920}
                  step={1}
                  updateType="primary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  elementType="image"
                  updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'customHeightImagePx')
                  }
                />
                )}
                {element.fit == "contain" && (
                  <p
                    className="notice components-base-control__help"
                    style={{ borderRadius: 0 }}
                  >
                    {__(
                      'The border may not adhere tightly to the image when using "Contain" for object-fit due to potential extra space around the image.',
                      "cocoblocks"
                    )}
                  </p>
                )}
              </div>
            </>
          )}
          <div className="content-title-custom-panel intermedy">
            <h2 className="title-custom-panel">
              {__("Spacings", "cocoblocks")}
            </h2>
          </div>
          <div className="content-section-panel" style={{ padding: "0" }}>
            <CustomRangeControl
                  label={
                    <>
                    <PaddingIcon />
                      {__("Padding", "cocoblocks")}
                    </>
                  }
                  value={element.paddingImage || 0}
                  slides={slides}
                  setAttributes={setAttributes}
                  min={0}
                  max={50}
                  step={1}
                  updateType="primary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  elementType="image"
                  updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'paddingImage')
                  }
                />
            <div className="custom-select box-control">
              <BoxControl
                id="custom-margin-control"
                label={
                  <>
                    <MarginIcon/>
                    {__("Margin", "cocoblocks")}
                  </>
                }
                values={element.marginImage || { 0: "0", 1: "0", 2: "0", 3: "0" }}
                units={{}}
                onChange={(newMarginImage) =>
                  updatenewMarginImage(slide.id, elementIndex, newMarginImage)
                }
              />
            </div>
          </div>
          <div className="content-title-custom-panel intermedy">
            <h2 className="title-custom-panel">{__("Border", "cocoblocks")}</h2>
          </div>
          <div className="content-section-panel" style={{ padding: "0" }}>
          <CustomSelectControl
                  label={
                    <>
                         <BorderStyleIcon />
                      {__("Border style", "cocoblocks")}
                    </>
                  }
                  value={element.borderStyleImage}
                  slides={slides}
                  setAttributes={setAttributes}
                  updateType="primary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  elementType="image"
                  updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'borderStyleImage')
                  }
                  selectOptions={borderStyleOptions}
                />
            {element.borderStyleImage !== "none" && (
              <>
                <CustomColorOptionsPanel
                  colorNormal={element.backgroundBorderColorImage }
                  setColorNormal={(color) => updateElement(slides, setAttributes, slide.id, elementIndex, null, color, 'primary', 'image', 'backgroundBorderColorImage')}
                  buttonTitle={__("Border Color", "cocoblocks")}
                  buttonIcon={<BorderColorIcon/>}
                  slides={slides}
                  setAttributes={setAttributes}
                  updateType="primary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  elementType="image"
                  updateElement={updateElement}
                  property="backgroundBorderColorImage"
                />
                <CustomRangeControl
                  label={
                    <>
                     <BorderLeftIcon />
                      {__("Border width", "cocoblocks")}
                    </>
                  }
                  value={element.backgroundBorderSizeImage}
                  slides={slides}
                  setAttributes={setAttributes}
                  min={0}
                  max={20}
                  step={1}
                  updateType="primary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  elementType="image"
                  updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'backgroundBorderSizeImage')
                  }
                />
              </>
            )}
             <CustomRangeControl
                  label={
                    <>
                     <BorderInnerIcon />
                      {__("Border radius", "cocoblocks")}
                    </>
                  }
                  value={element.backgroundBorderRadiusImage || 0}
                  slides={slides}
                  setAttributes={setAttributes}
                  min={0}
                  max={256}
                  step={1}
                  updateType="primary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  elementType="image"
                  updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'backgroundBorderRadiusImage')
                  }
                />
          </div>
        </>
      )}
      {activeSectionImage === "adv-style" && (
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
                  value={element.rotateImage || 0}
                  slides={slides}
                  setAttributes={setAttributes}
                  min={0}
                  max={360}
                  step={1}
                  updateType="primary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  elementType="image"
                  updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'rotateImage')
                  }
                />
          </div>
          <div className="content-title-custom-panel intermedy">
            <h2 className="title-custom-panel">
              {__("TRANSPARENCY SETTING", "cocoblocks")}
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
                  value={element.opacityImage || 1}
                  slides={slides}
                  setAttributes={setAttributes}
                  min={0}
                  max={1}
                  step={0.1}
                  updateType="primary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  elementType="image"
                  updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'opacityImage')
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
                  value={element.zIndexImage || 1}
                  slides={slides}
                  setAttributes={setAttributes}
                  min={0}
                  max={999}
                  step={1}
                  updateType="primary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  elementType="image"
                  updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'zIndexImage')
                  }
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
            valueEnableShadow={element.enableBoxShadowImage}
            valueRangeShadowX={element.boxShadowXImage || 0}
            valueRangeShadowY={element.boxShadowYImage || 0}
            valueRangeShadowBlur={element.boxShadowBlurImage || 0}
            valueRangeShadowSpread={element.boxShadowSpreadImage || 0}
            valueRangeShadowColor={element.colorShadowImage}
            slides={slides}
            showSpread={true}
            setAttributes={setAttributes}
            updateType="primary"
            slideId={slide.id}
            elementIndex={elementIndex}
            elementType="image"
            updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, property) =>
              updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, property)
            }
            enablePropertyShadow="enableBoxShadowImage"
            rangePropertyX="boxShadowXImage"
            rangePropertyY="boxShadowYImage"
            rangePropertyBlur="boxShadowBlurImage"
            rangePropertySpread="boxShadowSpreadImage"
            rangePropertyColor="colorShadowImage"
          />
        </div>
        </>
      )}

      {activeSectionImage === "animation" && (
        <>
        <CustomEffectControls
           valueEffect={element.effectIn}
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
              onAnimated={onAnimatedImage}
              selectOptions={selectOptionsEffectElement}
           slides={slides}
           setAttributes={setAttributes}
           updateType="primary"
           slideId={slide.id}
           elementIndex={elementIndex}
           elementType="image"
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

          <div className="content-title-custom-panel intermedy">
            <h2 className="title-custom-panel">
              {__("Blob Mask", "cocoblocks")}
            </h2>
          </div>
          <div className="content-section-panel" style={{ padding: "0" }}>
           <CustomSelectControl
              label={
                <>
                  <CloudIcon />
                  {__("Blob Mask", "cocoblocks")}
                </>
              }
              value={element.blobMask || 'none'}
              slides={slides}
              setAttributes={setAttributes}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="image"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'blobMask')
              }
              selectOptions={blobOptions} // Passa le opzioni dinamiche
            />
            {element.blobMask !== "none" && (
              <>
                <p className="notice components-base-control__help">
                  {__(
                    "Warning: The box shadow will not work with this effect active!",
                    "cocoblocks"
                  )}
                </p>
              </>
            )}
          </div>
          <div className="content-title-custom-panel intermedy">
            <h2 className="title-custom-panel">
              {__("Spike Masks", "cocoblocks")}
            </h2>
          </div>
          <div className="content-section-panel" style={{ padding: "0" }}>
          <CustomSelectControl
              label={
                <>
                  <PhotoSizeSelectSmallIcon />
                  {__("Left Spike", "cocoblocks")}
                </>
              }
              value={element.spikeMask }
              slides={slides}
              setAttributes={setAttributes}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="image"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'spikeMask')
              }
              selectOptions={spikeOptions} // Passa le opzioni dinamiche
            />
            {element.spikeMask !== "none" && (
              <CustomRangeControl
              label={
                <>
                  <HideImageIcon />
                  {__("Spike Width", "cocoblocks")}
                </>
              }
              value={element.spikeLeftWidth}
              slides={slides}
              setAttributes={setAttributes}
              min={0}
              max={100}
              step={1}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="image"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'spikeLeftWidth')
              }
              showTooltip={false} // Mostra il tooltip
            />
            )}
             <CustomSelectControl
              label={
                <>
                  <PhotoSizeSelectSmallIcon />
                  {__("Left Spike", "cocoblocks")}
                </>
              }
              value={element.spikeMaskRight }
              slides={slides}
              setAttributes={setAttributes}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="image"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'spikeMaskRight')
              }
              selectOptions={spikeRightOptions} // Passa le opzioni dinamiche
            />
            {element.spikeMaskRight !== "none" && (
            <CustomRangeControl
              label={
                <>
                  <HideImageIcon />
                  {__("Spike Width", "cocoblocks")}
                </>
              }
              value={element.spikeRightWidth}
              slides={slides}
              setAttributes={setAttributes}
              min={0}
              max={100}
              step={1}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="image"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'spikeRightWidth')
              }
              showTooltip={false} // Mostra il tooltip
            />
            )}
            {(element.spikeMaskRight !== "none" ||
              element.spikeMask !== "none") && (
              <>
                <p className="notice components-base-control__help">
                  {__(
                    "Attention: Single Spikes do not work on both sides together! Warning: The box shadow will not work with this effect active!",
                    "cocoblocks"
                  )}
                </p>
              </>
            )}
          </div>
          <div className="content-title-custom-panel intermedy">
            <h2 className="title-custom-panel">{__("Filter", "cocoblocks")}</h2>
          </div>
          <div className="content-section-panel" style={{ padding: "0" }}>
          <CustomSelectControl
              label={
                <>
                  <PhotoFilterIcon />
                  {__("Image Effects", "cocoblocks")}
                </>
              }
              value={element.imageFilter }
              slides={slides}
              setAttributes={setAttributes}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="image"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'imageFilter')
              }
              selectOptions={filterImageOptions} // Passa le opzioni dinamiche
            />
          </div>
        </>
      )}
      {activeSectionImage === "hover" && (
                   <CustomHoverControls
           valueEffectHover={element.effectHover}
           colorNormal={element.backgroundColorImageHover } 
           setColorNormal={(color) => updateElement(slides, setAttributes, slide.id, elementIndex, null, color, 'primary', 'image', 'backgroundColorImageHover')}
           buttonTitle={__("Background Color", "cocoblocks")}    
           buttonIcon={ <FormatColorTextIcon style={{marginBottom:'-3px'}} />}
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
           elementType="image"
           updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, property) =>
             updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, property)
           }
            effectHoverProperty="effectHover"
            colorHoverProperty="backgroundColorImageHover"
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
      {activeSectionImage === "actions" && (
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
                  value={element.imageLink}
                  slides={slides}
                  setAttributes={setAttributes}
                  updateType="primary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  elementType="image"
                  updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'imageLink')
                  }
                  selectOptions={linkOptions} // Passa le opzioni dinamiche
                />
            {element.imageLink === "link" && (
              <>
              <CustomTextControl
                 label={
                  <>
                    <InsertLinkIcon />
                    {__("Enter Url", "cocoblocks")}
                  </>
                }
                  value={element.linkUrlImage}
                  slides={slides}
                  setAttributes={setAttributes}
                  updateType="primary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  elementType="image"
                  placeholder={__("Enter url...", "cocoblocks")}
                  updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'linkUrlImage')
                  }
                />
                 <CustomSelectControl
                  label={
                    <>
                      <OpenInNewIcon />
                      {__("Target", "cocoblocks")}
                    </>
                  }
                  value={element.linkTargetImage}
                  slides={slides}
                  setAttributes={setAttributes}
                  updateType="primary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  elementType="image"
                  updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'linkTargetImage')
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
                  value={element.linkRelImage || 'follow'}
                  slides={slides}
                  setAttributes={setAttributes}
                  updateType="primary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  elementType="image"
                  updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'linkRelImage')
                  }
                  selectOptions={[
                    { label: "Follow Link", value: "follow" },
                    { label: "No Follow", value: "nofollow" },
                  ]} // Passa le opzioni dinamiche
                />
              </>
            )}
            {element.imageLink === "scroll-to-id" && (
              <CustomTextControl
              label={
               <>
                 <PhishingIcon />
                 {__("Enter ID", "cocoblocks")}
               </>
             }
               value={element.scrollToIdImage}
               slides={slides}
               setAttributes={setAttributes}
               updateType="primary"
               slideId={slide.id}
               elementIndex={elementIndex}
               elementType="image"
               placeholder={__("Enter id...", "cocoblocks")}
               updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                 updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'scrollToIdImage')
               }
             />
            )}
          </div>
        </>
      )}

      {activeSectionImage === "visibility" && (
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
              value={element.enableDesktopImage !== undefined ? element.enableDesktopImage : true}
              slides={slides}
              setAttributes={setAttributes}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="image"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'enableDesktopImage')
              }
            />
            <CustomToggleControl
              label={
                <>
                  <TabletMacIcon />
                  {__("Tablet", "cocoblocks")}
                </>
              }
              value={element.enableTabletImage !== undefined ? element.enableTabletImage : true}
              slides={slides}
              setAttributes={setAttributes}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="image"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'enableTabletImage')
              }
            />
            <CustomToggleControl
              label={
                <>
                  <SmartphoneIcon />
                  {__("Mobile", "cocoblocks")}
                </>
              }
              value={element.enableMobileImage !== undefined ? element.enableMobileImage : true}
              slides={slides}
              setAttributes={setAttributes}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="image"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'enableMobileImage')
              }
            />
          </div>
        </>
      )}
        {activeSectionImage === "hide-image-editor" && (
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
          variant={hideImage === "hide"}
          onClick={toggleHideImage}
          icon={
            hideImage === "hide" ? (
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

export default ImageEdit;
