import React, { useState } from "react";
import {
  Button,
  SelectControl,
  RangeControl,
  Tooltip,
  __experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { trash, replace } from "@wordpress/icons";
import ColorOptionsPanel from "../colorPanel";
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
import {linkOptions} from '../../assets/options';
import {selectOptionsRepeat} from '../../assets/options';
import { selectOptionsEffectInImage } from "../../assets/options";
import {selectOptionsEase} from '../../assets/options';
import {selectOptionsDirection} from '../../assets/options';
import {selectOptionsScaleIn} from '../../assets/options';
import {selectOptionsEffectHover} from '../../assets/options';
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
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import LoginIcon from '@mui/icons-material/Login';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import LoopIcon from '@mui/icons-material/Loop';
import SwapCallsIcon from '@mui/icons-material/SwapCalls';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import RefreshIcon from '@mui/icons-material/Refresh';
import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty';
import DeblurIcon from '@mui/icons-material/Deblur';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import GrainIcon from '@mui/icons-material/Grain';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';

const ImageEdit = ({
  slide,
  element,
  elementIndex,
  slides,
  setAttributes,
  setActiveSectionImage,
  activeSectionImage,
  attributes,
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

  // Update border color image
  const updateSlideBackgroundBorderColorImage = (
    slideId,
    index,
    borderColor
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "image" && i === index
                ? { ...element, backgroundBorderColorImage: borderColor }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update background color image
  const updateSlideBackgroundColorImage = (
    slideId,
    index,
    backgroundColorImage
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "image" && i === index
                ? { ...element, backgroundColorImage: backgroundColorImage }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

    // Update background color image hover
    const updateSlideBackgroundColorImageHover = (
      slideId,
      index,
      color
    ) => {
      const updatedSlides = slides.map((slide) =>
        slide.id === slideId
          ? {
              ...slide,
              elements: slide.elements.map((element, i) =>
                element.type === "image" && i === index
                  ? { ...element, backgroundColorImageHover: color }
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

  // Update blob image
  const updateBlobMask = (slideId, index, newBlobMask) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "image" && i === index
                ? { ...element, blobMask: newBlobMask }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Skipe left image
  const updateSpikeMask = (slideId, index, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "image" && i === index
                ? { ...element, spikeMask: value }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Width spike left
  const updateSpikeLeftWidth = (slideId, index, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "image" && i === index
                ? { ...element, spikeLeftWidth: value }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Skipe right image
  const updateSpikeMaskRight = (slideId, index, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "image" && i === index
                ? { ...element, spikeMaskRight: value }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Width spike right
  const updateSpikeRightWidth = (slideId, index, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "image" && i === index
                ? { ...element, spikeRightWidth: value }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Effect Image Animation
  const updateImageFilter = (slideId, index, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "image" && i === index
                ? { ...element, imageFilter: value }
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

    // Funzione per ottenere il valore con il default
const getDefaultValue = (value, defaultValue) => {
  return value !== undefined && value !== null ? value : defaultValue;
};
  
  return (
    <div className="custom-block-added">
      <div className="divider-controls"></div>
      <div className="title-block-added">
        <div className="title-element">
        {element.url ? (
        <img src={ element.url}  style={{width:'30px',height:'30px',objectFit:'cover',borderRadius:'8px',border:'1px solid var(--background-color)'}}/>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-320v-326L336-542l-56-58 200-200 200 200-56 58-104-104v326h-80ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>
        )}
          <h2>{__("Image", "slider")}</h2>
        </div>
        <div className="title-element">
        <Button
            onClick={() => removeSlideImage(slide.id, elementIndex)}
            isDestructive
            icon={trash}
            label={__("Remove Image", "cocoblocks")}
            className="button-remove-element"
          />
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
                            icon={replace}
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
                            icon={replace}
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
                  <div className="custom-select color">
                    <ColorOptionsPanel
                      colorNormal={element.backgroundColorImage}
                      setColorNormal={(backgroundColorImage) =>
                        updateSlideBackgroundColorImage(
                          slide.id,
                          elementIndex,
                          backgroundColorImage
                        )
                      }
                      buttonTitle={__("Background Color", "cocoblocks")}
                      buttonIcon={
                        <PaletteIcon style={{
                          marginBottom: "-5px",
                          width: "20px",
                          height: "20px",
                        }}/>
                      }
                    />
                  </div>
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
                <div className="custom-select color">
                  <ColorOptionsPanel
                    colorNormal={element.backgroundBorderColorImage}
                    setColorNormal={(borderColor) =>
                      updateSlideBackgroundBorderColorImage(
                        slide.id,
                        elementIndex,
                        borderColor
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
          <div
            className="content-title-custom-panel intermedy"
            style={{
              marginTop: "-18px",
              display: "flex",
              gap: "30px",
            }}
          >
            <h2 className="title-custom-panel">
              {__("Animation", "cocoblocks")}
            </h2>
            {(element.effectIn !== 'none') && (
          <div className="button-reply-effect" style={{borderRadius:'50%'}}>
            <Tooltip text={__('Play','cocoblock')}>
            <Button onClick={onAnimatedImage} style={{padding:'5px 8px'}}><SlowMotionVideoIcon/></Button> 
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
              elementType="image"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'effectIn')
              }
              tooltipText={__('Entry animations control how elements appear on the slide, to create visually engaging and smooth introductions.','cocoblock')} // Testo del tooltip personalizzato
              showTooltip={true} // Mostra il tooltip
              tooltipTop = '8px' // Posizione 'top' del tooltip (di default 5px)
              tooltipLeft = '45%' // Posizione 'left' del tooltip (di default 35%)
              selectOptions={selectOptionsEffectInImage} // Passa le opzioni dinamiche
            />
            {element.effectIn !== "none" && (
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
              elementType="image"
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
              elementType="image"
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
              elementType="image"
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
              elementType="image"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'filterInTo')
              }
              showTooltip={false} // Mostra il tooltip
            />
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
              elementType="image"
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
              elementType="image"
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
              elementType="image"
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
              elementType="image"
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
              elementType="image"
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
              elementType="image"
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
              elementType="image"
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
                elementType="image"
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
                elementType="image"
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
                elementType="image"
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
                elementType="image"
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
                elementType="image"
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
                elementType="image"
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
                elementType="image"
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
                elementType="image"
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
                elementType="image"
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
                elementType="image"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'skewYTo')
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
              value={element.duration || 1000}
              slides={slides}
              setAttributes={setAttributes}
              min={100}
              max={5000}
              step={100}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="image"
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
              elementType="image"
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
              elementType="image"
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
              elementType="image"
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
              elementType="image"
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
              elementType="image"
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
            {(element.effectIn !== 'none') && (
          <div className="button-reply-effect">
            <Tooltip text={__('Play','cocoblock')}>
            <Button onClick={onAnimatedImage}><SlowMotionVideoIcon/></Button> 
            </Tooltip>
          </div>
          )}
          </div>
          <div className="content-title-custom-panel intermedy">
            <h2 className="title-custom-panel">
              {__("Blob Mask", "cocoblocks")}
            </h2>
          </div>
          <div className="content-section-panel" style={{ padding: "0" }}>
            <div className="custom-select select-control-label-right">
              <SelectControl
                label={
                  <>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C8.686 2 6 4.686 6 8C6 11.314 8.686 14 12 14C15.314 14 18 11.314 18 8C18 4.686 15.314 2 12 2Z"
                        fill="currentColor"
                      />
                      <path
                        d="M6 8C3.79 8 2 9.79 2 12C2 14.21 3.79 16 6 16C8.21 16 10 14.21 10 12C10 9.79 8.21 8 6 8Z"
                        fill="currentColor"
                      />
                      <path
                        d="M18 8C16.14 8 14.5 9.64 14.5 11.5C14.5 13.36 16.14 15 18 15C19.86 15 21.5 13.36 21.5 11.5C21.5 9.64 19.86 8 18 8Z"
                        fill="currentColor"
                      />
                    </svg>
                    {__("Blob Mask", "cocoblocks")}
                  </>
                }
                value={element.blobMask}
                onChange={(newBlobMask) =>
                  updateBlobMask(slide.id, elementIndex, newBlobMask)
                }
                options={[
                  {
                    label: __("None", "cocoblocks"),
                    value: "none",
                  },
                  {
                    label: __("Blob 1", "cocoblocks"),
                    value: "blob1",
                  },
                  {
                    label: __("Blob 2", "cocoblocks"),
                    value: "blob2",
                  },
                  {
                    label: __("Blob 3", "cocoblocks"),
                    value: "blob3",
                  },
                  {
                    label: __("Blob 4", "cocoblocks"),
                    value: "blob4",
                  },
                ]}
              />
            </div>
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
                      <path d="M120-120v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm0-160v-80h80v80h-80Zm80-160h-80v-200q0-50-35-85t-85-35H440v-80h200q83 0 141.5 58.5T840-640v200Z" />
                    </svg>
                    {__("Left Spike", "cocoblocks")}
                  </>
                }
                value={element.spikeMask}
                onChange={(value) =>
                  updateSpikeMask(slide.id, elementIndex, value)
                }
                options={[
                  {
                    label: __("None", "cocoblocks"),
                    value: "none",
                  },
                  {
                    label: __("1 Spike Top", "cocoblocks"),
                    value: "left-spike-1-top",
                  },
                  {
                    label: __("1 Spike Middle", "cocoblocks"),
                    value: "left-spike-1-middle",
                  },
                  {
                    label: __("1 Spike Bottom", "cocoblocks"),
                    value: "left-spike-1-bottom",
                  },
                  {
                    label: __("2 Spikes", "cocoblocks"),
                    value: "left-spike-2",
                  },
                  {
                    label: __("3 Spikes", "cocoblocks"),
                    value: "left-spike-3",
                  },
                  {
                    label: __("4 Spikes", "cocoblocks"),
                    value: "left-spike-4",
                  },
                  {
                    label: __("5 Spikes", "cocoblocks"),
                    value: "left-spike-5",
                  },
                ]}
              />
            </div>
            {element.spikeMask !== "none" && (
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
                        <path d="M680-40v-160H280q-33 0-56.5-23.5T200-280v-400H40v-80h160v-160h80v640h640v80H760v160h-80Zm0-320v-320H360v-80h320q33 0 56.5 23.5T760-680v320h-80Z" />
                      </svg>
                      {__("Spike Width", "cocoblocks")}
                    </>
                  }
                  value={element.spikeLeftWidth}
                  onChange={(newParallaxImage) =>
                    updateSpikeLeftWidth(
                      slide.id,
                      elementIndex,
                      newParallaxImage
                    )
                  }
                  min={0}
                  max={100}
                  step={1}
                />
              </div>
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
                      <path d="M120-120v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm0-160v-80h80v80h-80Zm80-160h-80v-200q0-50-35-85t-85-35H440v-80h200q83 0 141.5 58.5T840-640v200Z" />
                    </svg>
                    {__("Right Spike", "cocoblocks")}
                  </>
                }
                value={element.spikeMaskRight}
                onChange={(value) =>
                  updateSpikeMaskRight(slide.id, elementIndex, value)
                }
                options={[
                  {
                    label: __("None", "cocoblocks"),
                    value: "none",
                  },
                  {
                    label: __("1 Spike Top", "cocoblocks"),
                    value: "right-spike-1-top",
                  },
                  {
                    label: __("1 Spike Middle", "cocoblocks"),
                    value: "right-spike-1-middle",
                  },
                  {
                    label: __("1 Spike Bottom", "cocoblocks"),
                    value: "right-spike-1-bottom",
                  },
                  {
                    label: __("2 Spikes", "cocoblocks"),
                    value: "right-spike-2",
                  },
                  {
                    label: __("3 Spikes", "cocoblocks"),
                    value: "right-spike-3",
                  },
                  {
                    label: __("4 Spikes", "cocoblocks"),
                    value: "right-spike-4",
                  },
                  {
                    label: __("5 Spikes", "cocoblocks"),
                    value: "right-spike-5",
                  },
                ]}
              />
            </div>
            {element.spikeMaskRight !== "none" && (
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
                        <path d="M680-40v-160H280q-33 0-56.5-23.5T200-280v-400H40v-80h160v-160h80v640h640v80H760v160h-80Zm0-320v-320H360v-80h320q33 0 56.5 23.5T760-680v320h-80Z" />
                      </svg>
                      {__("Spike Width", "cocoblocks")}
                    </>
                  }
                  value={element.spikeRightWidth}
                  onChange={(newParallaxImage) =>
                    updateSpikeRightWidth(
                      slide.id,
                      elementIndex,
                      newParallaxImage
                    )
                  }
                  min={0}
                  max={100}
                  step={1}
                />
              </div>
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
                      <path d="M120-574v-85l181-181h85L120-574Zm0-196v-70h70l-70 70Zm527 67q-10-11-21.5-21.5T602-743l97-97h85L647-703ZM220-361l77-77q7 11 14.5 20t16.5 17q-28 7-56.5 17.5T220-361Zm480-197v-2q0-19-3-37t-9-35l152-152v86L700-558ZM436-776l65-64h85l-64 64q-11-2-21-3t-21-1q-11 0-22 1t-22 3ZM120-375v-85l144-144q-2 11-3 22t-1 22q0 11 1 21t3 20L120-375Zm709 83q-8-12-18.5-23T788-335l52-52v85l-11 10Zm-116-82q-7-3-14-5.5t-14-4.5q-9-3-17.5-6t-17.5-5l190-191v86L713-374Zm-233-26q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480ZM160-120v-71q0-34 17-63t47-44q51-26 115.5-44T480-360q76 0 140.5 18T736-298q30 15 47 44t17 63v71H160Zm81-80h478q-2-9-7-15.5T699-226q-36-18-91.5-36T480-280q-72 0-127.5 18T261-226q-8 4-13 11t-7 15Zm239 0Zm0-360Z" />
                    </svg>
                    {__("Image Effects", "cocoblocks")}
                  </>
                }
                value={element.imageFilter}
                onChange={(value) =>
                  updateImageFilter(slide.id, elementIndex, value)
                }
                options={[
                  {
                    label: __("None", "cocoblocks"),
                    value: "none",
                  },
                  {
                    label: __("Grayscale", "cocoblocks"),
                    value: "grayscale",
                  },
                  {
                    label: __("Blur", "cocoblocks"),
                    value: "blur",
                  },
                  {
                    label: __("Sepia", "cocoblocks"),
                    value: "sepia",
                  },
                  {
                    label: __("Contrast", "cocoblocks"),
                    value: "contrast",
                  },
                  {
                    label: __("Brightness", "cocoblocks"),
                    value: "brightness",
                  },
                  {
                    label: __("Invert", "cocoblocks"),
                    value: "invert",
                  },
                  {
                    label: __("Saturate", "cocoblocks"),
                    value: "saturate",
                  },
                  {
                    label: __("Opacity", "cocoblocks"),
                    value: "opacity",
                  },
                  {
                    label: __("Hue Rotate", "cocoblocks"),
                    value: "hue-rotate",
                  },
                ]}
              />
            </div>
          </div>
        </>
      )}
      {activeSectionImage === "hover" && (
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
              elementType="image"
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
            colorNormal={element.backgroundColorImageHover}
            setColorNormal={(color) =>
              updateSlideBackgroundColorImageHover(
                slide.id, elementIndex, color
              )
            }
            buttonTitle={__("Background Color", "cocoblocks")}
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
              elementType="image"
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
              elementType="image"
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
              elementType="image"
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
              elementType="image"
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
              elementType="image"
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
              elementType="image"
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
                elementType="image"
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
                elementType="image"
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
                elementType="image"
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
                elementType="image"
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
                elementType="image"
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
              elementType="image"
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
              elementType="image"
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
