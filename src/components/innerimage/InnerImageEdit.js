import React, { useState } from "react";
import {
  Button,
  Tooltip,
  __experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import SectionSelector from "../multitab/sectionSelector";
import ImageSelectionModal from "../ImageSelectionModal";
import CustomTextAreaControl from "../../controls/text-area/TextAreaControl";
import CustomAlignControl from "../../controls/align/AlignControl";
import CustomSelectControl from "../../controls/select/SelectControl";
import CustomRangeControl from "../../controls/range"
import {borderStyleOptions} from '../../assets/options';
import CustomShadowControl from "../../controls/shadow/ShadowControl";
import CustomColorOptionsPanel from "../../controls/color/ColorOptionsPanel";
import CustomEffectControls from "../../multiControls/effect";
import CustomHoverControls from "../../multiControls/hover";
import { selectOptionsEffectElement } from "../../assets/options";
import {spikeOptionsInner} from '../../assets/options';
import {blobOptions} from '../../assets/options';
import {filterImageOptions} from '../../assets/options';
import {spikeRightOptionsInner} from '../../assets/options';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import WidthWideIcon from '@mui/icons-material/WidthWide';
import FitScreenIcon from '@mui/icons-material/FitScreen';
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
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import CloudIcon from '@mui/icons-material/Cloud';
import PhotoSizeSelectSmallIcon from '@mui/icons-material/PhotoSizeSelectSmall';
import HideImageIcon from '@mui/icons-material/HideImage';
import PhotoFilterIcon from '@mui/icons-material/PhotoFilter';
import ImageIcon from '@mui/icons-material/Image';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import CustomActionControls from "../../multiControls/action";
import CustomVisibilityControls from "../../multiControls/visibility"
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import ControlCameraIcon from '@mui/icons-material/ControlCamera';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import RefreshIcon from '@mui/icons-material/Refresh';
import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty';
import WifiProtectedSetupIcon from '@mui/icons-material/WifiProtectedSetup';

const InnerImageEdit= ({
  slide,
  elementIndex,
  slides,
  imageDiv,
  imageIndex,
  divIndex,
  setAttributes,
  setActiveSectionImage,
  activeSectionImage,
  handlePlayInnerImage
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
  

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // Funzione per aprire il modale
  const openModal = () => setIsModalOpen(true);

  // Funzione per chiudere il modale
  const closeModal = () => setIsModalOpen(false);

  const handleImageSelectForDiv = async (image) => {
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
        updateSlideImageBlock(
          slide.id,
          divIndex,
          imageIndex,
          image.url,
          image.alt
        );
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

// Remove Image
const removeSlideImageBlock = (slideId, divIndex, innerIndex) => {
  const updatedSlides = slides.map((slide) =>
    slide.id === slideId
      ? {
          ...slide,
          elements: slide.elements.map((element, i) =>
            element.type === "div" && i === divIndex
              ? {
                  ...element,
                  innerElements: element.innerElements.filter(
                    (innerElement, eIndex) => eIndex !== innerIndex || innerElement.type !== "image"
                  ),
                }
              : element
          ),
        }
      : slide
  );

  setAttributes({ slides: updatedSlides });
};

// Update Image inside block
const updateSlideImageBlock = (slideId, divIndex, innerIndex, newImageUrl, newAltText) => {
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
                      eIndex === innerIndex && innerElement.type === "image"
                        ? {
                            ...innerElement,
                            imageUrl: newImageUrl,
                            alt: newAltText,
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

// Margin image
const updatenewMarginImageBlock = (slideId, divIndex, innerIndex, newMarginImage) => {
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
          elements: slide.elements.map((element, i) => {
            if (element.type === "div" && i === divIndex) {
              return {
                ...element,
                innerElements: element.innerElements.map((innerElement, eIndex) => {
                  if (eIndex === innerIndex && innerElement.type === "image") {
                    return {
                      ...innerElement,
                      marginImage: {
                        top: addUnit(newMarginImage.top || "0", newMarginImage.unit || "px"),
                        right: addUnit(newMarginImage.right || "0", newMarginImage.unit || "px"),
                        bottom: addUnit(newMarginImage.bottom || "0", newMarginImage.unit || "px"),
                        left: addUnit(newMarginImage.left || "0", newMarginImage.unit || "px"),
                      },
                    };
                  }
                  return innerElement;
                }),
              };
            }
            return element;
          }),
        }
      : slide
  );
  setAttributes({ slides: updatedSlides });
};

// Padding image
const updatenewPaddingImage = (slideId, divIndex, innerIndex, newPaddingImage) => {
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
            elements: slide.elements.map((element, i) => {
              if (element.type === "div" && i === divIndex) {
                return {
                  ...element,
                  innerElements: element.innerElements.map((innerElement, eIndex) => {
                    if (eIndex === innerIndex && innerElement.type === "image") {
                      return {
                        ...innerElement,
                        paddingImage: {
                          top: addUnit(newPaddingImage.top || "0", newPaddingImage.unit || "px"),
                          right: addUnit(newPaddingImage.right || "0", newPaddingImage.unit || "px"),
                          bottom: addUnit(newPaddingImage.bottom || "0", newPaddingImage.unit || "px"),
                          left: addUnit(newPaddingImage.left || "0", newPaddingImage.unit || "px"),
                        },
                      };
                    }
                    return innerElement;
                  }),
                };
              }
              return element;
            }),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

// border Size
const updatenewBackgroundBorderSizeImage = (slideId, divIndex, innerIndex, newBorderSize) => {
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
            elements: slide.elements.map((element, i) => {
              if (element.type === "div" && i === divIndex) {
                return {
                  ...element,
                  innerElements: element.innerElements.map((innerElement, eIndex) => {
                    if (eIndex === innerIndex && innerElement.type === "image") {
                      return {
                        ...innerElement,
                        backgroundBorderSizeImage: {
                          top: addUnit(newBorderSize.top || "0", newBorderSize.unit || "px"),
                          right: addUnit(newBorderSize.right || "0", newBorderSize.unit || "px"),
                          bottom: addUnit(newBorderSize.bottom || "0", newBorderSize.unit || "px"),
                          left: addUnit(newBorderSize.left || "0", newBorderSize.unit || "px"),
                        },
                      };
                    }
                    return innerElement;
                  }),
                };
              }
              return element;
            }),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // border Size
const updatenewBackgroundBorderRadiusImage = (slideId, divIndex, innerIndex, newBorderRadius) => {
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
            elements: slide.elements.map((element, i) => {
              if (element.type === "div" && i === divIndex) {
                return {
                  ...element,
                  innerElements: element.innerElements.map((innerElement, eIndex) => {
                    if (eIndex === innerIndex && innerElement.type === "image") {
                      return {
                        ...innerElement,
                        backgroundBorderRadiusImage: {
                          top: addUnit(newBorderRadius.top || "0", newBorderRadius.unit || "px"),
                          right: addUnit(newBorderRadius.right || "0", newBorderRadius.unit || "px"),
                          bottom: addUnit(newBorderRadius.bottom || "0", newBorderRadius.unit || "px"),
                          left: addUnit(newBorderRadius.left || "0", newBorderRadius.unit || "px"),
                        },
                      };
                    }
                    return innerElement;
                  }),
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
    const [hideImage, setHideImage] = useState(imageDiv.hideImage || "");

    const toggleHideImage = () => {
      const newState = hideImage === "hide" ? "" : "hide";
      setHideImage(newState);
    
      imageDiv.hideImage = newState;
      setAttributes({ elements: [...slides] }); // Oppure aggiorna la struttura dati appropriata
    };
  
   // Open panel
   const [isOpen, setIsOpen] = useState(false);

   const handleToggle = () => {
     setIsOpen((prevIsOpen) => !prevIsOpen);
   };

  return (
    <div className="custom-block-added">
      <div className="divider-controls-inner"></div>
      <div className="content-title-block-added" style={{marginTop: "20px"}}>
      <div className="title-block-added">
      <div className="title-element">
        {imageDiv.imageUrl  ? (
        <img src={ imageDiv.imageUrl }  style={{width:'30px',height:'30px',objectFit:'cover',borderRadius:'8px',border:'1px solid var(--background-color)'}}/>
        ) : (
            <ImageIcon />
        )}
          <h2>{__("Image", "slider")}</h2>
        </div>
        <div className="title-element">
          <Button
            onClick={() =>
              removeSlideImageBlock(slide.id, divIndex, imageIndex)
            }
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
</div>
      {isOpen && (
        <>
      <SectionSelector onSectionChange={setActiveSectionImage} />
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
                    updateSlideImageBlock(
                      slide.id,
                      elementIndex,
                      imageIndex,
                      media.url,
                      media.alt
                    )
                  }
                  allowedTypes={["image"]}
                  render={({ open }) => (
                    <>
                      {!imageDiv.imageUrl ? (
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
                                <PhotoSizeSelectActualIcon/>
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
                              src={imageDiv.imageUrl}
                              alt={
                                imageDiv.alt ||
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
          {!imageDiv.imageUrl && (
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
                   <PhotoLibraryIcon/>
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
              onSelect={handleImageSelectForDiv}
            />
          )}
          {imageDiv.imageUrl && (
            <>
              <div className="content-section-panel" style={{ padding: "0" }}>
              <CustomTextAreaControl
                  value={imageDiv.alt}
                  slides={slides}
                  setAttributes={setAttributes}
                  updateType="secondary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  innerIndex={imageIndex}
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
                  value={imageDiv.widthImageContent}
                  slides={slides}
                  setAttributes={setAttributes}
                  updateType="secondary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  innerIndex={imageIndex}
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
                  value={imageDiv.imageAlign}
                  slides={slides}
                  setAttributes={setAttributes}
                  updateType="secondary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  innerIndex={imageIndex}
                  elementType="image"
                  onChange={(newValue) =>
                    updateElement(slides, setAttributes, slide.id, elementIndex, imageIndex, newValue, "secondary", "image", 'imageAlign')
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
          {imageDiv.imageUrl && (
            <>
              <div className="content-section-panel" style={{ padding: "0" }}>
              <CustomSelectControl
                  label={
                    <>
                      <FitScreenIcon />
                      {__("Image fit", "cocoblocks")}
                    </>
                  }
                  value={imageDiv.fit}
                  slides={slides}
                  setAttributes={setAttributes}
                  updateType="secondary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  innerIndex={imageIndex}
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
                 {Object.values(imageDiv.paddingImage || {}).some(value => parseInt(value) > 0) && (
                     <CustomColorOptionsPanel
                     colorNormal={imageDiv.backgroundColorImage }
                     setColorNormal={(color) => updateElement(slides, setAttributes, slide.id, elementIndex, null, color, 'secondary', 'image', 'backgroundColorImage')}
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
                     innerIndex={imageIndex}
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
                  value={imageDiv.widthImage}
                  slides={slides}
                  setAttributes={setAttributes}
                  updateType="secondary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  innerIndex={imageIndex}
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
                {imageDiv.widthImage === "relative" && (
                     <CustomRangeControl
                     label={
                       <>
                         {__("Custom width (%)", "cocoblocks")}
                       </>
                     }
                     value={imageDiv.customWidthImage}
                     slides={slides}
                     setAttributes={setAttributes}
                     min={0}
                     max={100}
                     step={1}
                     updateType="secondary"
                     slideId={slide.id}
                     elementIndex={elementIndex}
                     innerIndex={imageIndex}
                     elementType="image"
                     updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                       updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'customWidthImage')
                     }
                   />
                )}
                {imageDiv.widthImage === "fixed" && (
                    <CustomRangeControl
                    label={
                      <>
                        {__("Custom width (px)", "cocoblocks")}
                      </>
                    }
                    value={imageDiv.customWidthImagePx}
                    slides={slides}
                    setAttributes={setAttributes}
                    min={0}
                    max={1920}
                    step={1}
                    updateType="secondary"
                    slideId={slide.id}
                    elementIndex={elementIndex}
                    innerIndex={imageIndex}
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
                  value={imageDiv.heightImage}
                  slides={slides}
                  setAttributes={setAttributes}
                  updateType="secondary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  innerIndex={imageIndex}
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
                {imageDiv.heightImage === "relative" && (
                   <CustomRangeControl
                   label={
                     <>
                       {__("Custom height (%)", "cocoblocks")}
                     </>
                   }
                   value={imageDiv.customHeightImage}
                   slides={slides}
                   setAttributes={setAttributes}
                   min={0}
                   max={100}
                   step={1}
                   updateType="secondary"
                   slideId={slide.id}
                   elementIndex={elementIndex}
                   innerIndex={imageIndex}
                   elementType="image"
                   updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                     updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'customHeightImage')
                   }
                 />
                )}
                {imageDiv.heightImage === "fixed" && (
                   <CustomRangeControl
                   label={
                     <>
                       {__("Custom height (px)", "cocoblocks")}
                     </>
                   }
                   value={imageDiv.customHeightImagePx}
                   slides={slides}
                   setAttributes={setAttributes}
                   min={0}
                   max={1920}
                   step={1}
                   updateType="secondary"
                   slideId={slide.id}
                   elementIndex={elementIndex}
                   innerIndex={imageIndex}
                   elementType="image"
                   updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                     updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'customHeightImagePx')
                   }
                 />
                )}
                {imageDiv.fit == "contain" && (
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
              {__("Position", "cocoblocks")}
            </h2>
          </div>
          <div className="content-section-panel" style={{ padding: "0" }}>
          <CustomSelectControl
                  label={
                    <>
                      <ControlCameraIcon />
                      {__("Select Position", "cocoblocks")}
                    </>
                  }
                  value={imageDiv.positionInnerImage}
                  slides={slides}
                  setAttributes={setAttributes}
                  updateType="secondary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  innerIndex={imageIndex}
                  elementType="image"
                  updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'positionInnerImage')
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
                  ]} // Passa le opzioni dinamiche
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
                    <PaddingIcon/>
                    {__("Padding", "cocoblocks")}
                  </>
                }
                values={imageDiv.paddingImage|| { 0: "0", 1: "0", 2: "0", 3: "0" }}
                units={{}}
                onChange={(newPaddingImage) =>
                  updatenewPaddingImage(slide.id, elementIndex, imageIndex, newPaddingImage)
                }
              />
            </div>
            {imageDiv.positionInnerImage === "relative" && (
            <>
             <CustomRangeControl
                   label={
                     <>
                      <SwapVertIcon  />
                       {__("Vertical Position", "cocoblocks")}
                     </>
                   }
                   value={imageDiv.verticalPositionInnerImage}
                   slides={slides}
                   setAttributes={setAttributes}
                   min={-500}
                   max={500}
                   step={1}
                   updateType="secondary"
                   slideId={slide.id}
                   elementIndex={elementIndex}
                   innerIndex={imageIndex}
                   elementType="image"
                   updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                     updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'verticalPositionInnerImage')
                   }
                 />
                  <CustomRangeControl
                   label={
                     <>
                       <SwapVertIcon style={{transform:'rotate(90deg)'}} />
                       {__("Horizontal Position", "cocoblocks")}
                     </>
                   }
                   value={imageDiv.horizontalPositionInnerImage}
                   slides={slides}
                   setAttributes={setAttributes}
                   min={-500}
                   max={500}
                   step={1}
                   updateType="secondary"
                   slideId={slide.id}
                   elementIndex={elementIndex}
                   innerIndex={imageIndex}
                   elementType="image"
                   updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                     updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'horizontalPositionInnerImage')
                   }
                 />
                </>
            )}
            {imageDiv.positionInnerImage === "relative" && (
            <div className="custom-select box-control">
              <BoxControl
                id="custom-margin-control"
                label={
                  <>
                    <MarginIcon/>
                    {__("Margin", "cocoblocks")}
                  </>
                }
                values={imageDiv.marginImage}
                units={{}}
                onChange={(newMarginImage) =>
                  updatenewMarginImageBlock(
                    slide.id,
                    elementIndex,
                    imageIndex,
                    newMarginImage
                  )
                }
              />
            </div>
          )}
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
                  value={imageDiv.borderStyleImage}
                  slides={slides}
                  setAttributes={setAttributes}
                  updateType="secondary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  innerIndex={imageIndex}
                  elementType="image"
                  updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'borderStyleImage')
                  }
                  selectOptions={borderStyleOptions}
                />
            {imageDiv.borderStyleImage !== "none" && (
              <>
               <CustomColorOptionsPanel
                  colorNormal={imageDiv.backgroundBorderColorImage }
                  setColorNormal={(color) => updateElement(slides, setAttributes, slide.id, elementIndex, null, color, 'secondary', 'image', 'backgroundBorderColorImage')}
                  buttonTitle={__("Border Color", "cocoblocks")}
                  buttonIcon={<BorderColorIcon/>}
                  slides={slides}
                  setAttributes={setAttributes}
                  updateType="secondary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  innerIndex={imageIndex}
                  elementType="image"
                  updateElement={updateElement}
                  property="backgroundBorderColorImage"
                />
                <div className="custom-select box-control">
              <BoxControl
                id="custom-margin-control"
                label={
                  <>
                    <BorderLeftIcon />
                    {__("Border width", "cocoblocks")}
                  </>
                }
                values={imageDiv.backgroundBorderSizeImage || { 0: "0", 1: "0", 2: "0", 3: "0" }}
                units={{}}
                onChange={(newBorderSize) =>
                  updatenewBackgroundBorderSizeImage(slide.id, elementIndex,imageIndex, newBorderSize)
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
                values={imageDiv.backgroundBorderRadiusImage || { 0: "0", 1: "0", 2: "0", 3: "0" }}
                units={{}}
                onChange={(newBorderRadius) =>
                  updatenewBackgroundBorderRadiusImage(slide.id, elementIndex,imageIndex, newBorderRadius)
                }
              />
            </div>
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
                     <RefreshIcon />
                      {__("Rotate", "cocoblocks")}
                    </>
                  }
                  value={imageDiv.rotateImage || 0}
                  slides={slides}
                  setAttributes={setAttributes}
                  min={-360}
                  max={360}
                  step={1}
                  updateType="secondary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  innerIndex={imageIndex}
                  elementType="image"
                  updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'rotateImage')
                  }
                />
                 <CustomRangeControl
                  label={
                    <>
                      <ThreeSixtyIcon />
                      {__("Rotate X", "cocoblocks")}
                    </>
                  }
                  value={imageDiv.rotateImageX || 0}
                  slides={slides}
                  setAttributes={setAttributes}
                  min={-360}
                  max={360}
                  step={1}
                  updateType="secondary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  innerIndex={imageIndex}
                  elementType="image"
                  updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'rotateImageX')
                  }
                />
                 <CustomRangeControl
                  label={
                    <>
                     <ThreeSixtyIcon style={{transform:'rotate(90deg)'}} />
                      {__("Rotate Y", "cocoblocks")}
                    </>
                  }
                  value={imageDiv.rotateImageY || 0}
                  slides={slides}
                  setAttributes={setAttributes}
                  min={-360}
                  max={360}
                  step={1}
                  updateType="secondary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  innerIndex={imageIndex}
                  elementType="image"
                  updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'rotateImageY')
                  }
                />
                   <CustomRangeControl
                  label={
                    <>
                     <WifiProtectedSetupIcon />
                      {__("Perspective", "cocoblocks")}
                    </>
                  }
                  value={imageDiv.perspectiveImage || 1000}
                  slides={slides}
                  setAttributes={setAttributes}
                  min={500}
                  max={5000}
                  step={10}
                  updateType="secondary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  innerIndex={imageIndex}
                  elementType="image"
                  updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'perspectiveImage')
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
                  value={imageDiv.opacityImage || 1}
                  slides={slides}
                  setAttributes={setAttributes}
                  min={0}
                  max={1}
                  step={0.1}
                  updateType="secondary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  innerIndex={imageIndex}
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
                  value={imageDiv.zIndexImage || 1}
                  slides={slides}
                  setAttributes={setAttributes}
                  min={0}
                  max={999}
                  step={1}
                  updateType="secondary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  innerIndex={imageIndex}
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
            valueEnableShadow={imageDiv.enableBoxShadowImage}
            valueRangeShadowX={imageDiv.boxShadowXImage || 0}
            valueRangeShadowY={imageDiv.boxShadowYImage || 0}
            valueRangeShadowBlur={imageDiv.boxShadowBlurImage || 0}
            valueRangeShadowSpread={imageDiv.boxShadowSpreadImage || 0}
            valueRangeShadowColor={imageDiv.colorShadowImage}
            slides={slides}
            showSpread={true}
            setAttributes={setAttributes}
            updateType="secondary"
            slideId={slide.id}
            elementIndex={elementIndex}
            innerIndex={imageIndex}
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
           valueEffect={imageDiv.effectIn}
           valueOpacityFrom={imageDiv.opacityFrom}
            valueOpacityTo={imageDiv.opacityTo}
            valueBlurFrom={imageDiv.filterFrom}
            valueBlurTo={imageDiv.filterTo}
              valueTranslateXFrom={imageDiv.startXFrom}
              valueTranslateXTo={imageDiv.startXTo}
              valueTranslateYFrom={imageDiv.startYFrom}
              valueTranslateYTo={imageDiv.startYTo}
              valueScaleType={imageDiv.scaleType}
              valueScaleFrom={imageDiv.scaleFrom}
              valueScaleTo={imageDiv.scaleTo}
              valueRotateFrom={imageDiv.rotateFrom}
              valueRotateTo={imageDiv.rotateTo}
              valueRotateXFrom={imageDiv.rotateXFrom}
              valueRotateXTo={imageDiv.rotateXTo}
              valueRotateYFrom={imageDiv.rotateYFrom}
              valueRotateYTo={imageDiv.rotateYTo}
              valueSkewXFrom={imageDiv.skewXFrom}
              valueSkewXTo={imageDiv.skewXTo}
              valueSkewYFrom={imageDiv.skewYFrom}
              valueSkewYTo={imageDiv.skewYTo}
              valueDuration={imageDiv.duration}
              valueEasing={imageDiv.easing}
              valueDirection={imageDiv.direction}
              valueLoop={imageDiv.loop}
              valueDelay={imageDiv.delay}
              valueEndDelay={imageDiv.endDelay }
              onAnimated={handlePlayInnerImage}
              selectOptions={selectOptionsEffectElement}
           slides={slides}
           setAttributes={setAttributes}
           updateType="secondary"
           slideId={slide.id}
           elementIndex={elementIndex}
           innerIndex={imageIndex}
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
              value={imageDiv.blobMask || 'none'}
              slides={slides}
              setAttributes={setAttributes}
              updateType="secondary"
              slideId={slide.id}
              elementIndex={elementIndex}
              innerIndex={imageIndex}
              elementType="image"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'blobMask')
              }
              selectOptions={blobOptions} // Passa le opzioni dinamiche
            />
            {imageDiv.blobMask !== "none" && (
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
              value={imageDiv.spikeMask }
              slides={slides}
              setAttributes={setAttributes}
              updateType="secondary"
              slideId={slide.id}
              elementIndex={elementIndex}
              innerIndex={imageIndex}
              elementType="image"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'spikeMask')
              }
              selectOptions={spikeOptionsInner} // Passa le opzioni dinamiche
            />
            {imageDiv.spikeMask !== "none" && (
               <CustomRangeControl
               label={
                 <>
                   <HideImageIcon />
                   {__("Spike Width", "cocoblocks")}
                 </>
               }
               value={imageDiv.spikeLeftWidth}
               slides={slides}
               setAttributes={setAttributes}
               min={0}
               max={100}
               step={1}
               updateType="secondary"
               slideId={slide.id}
               elementIndex={elementIndex}
               innerIndex={imageIndex}
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
                  {__("Right Spike", "cocoblocks")}
                </>
              }
              value={imageDiv.spikeMaskRight }
              slides={slides}
              setAttributes={setAttributes}
              updateType="secondary"
              slideId={slide.id}
              elementIndex={elementIndex}
              innerIndex={imageIndex}
              elementType="image"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'spikeMaskRight')
              }
              selectOptions={spikeRightOptionsInner} // Passa le opzioni dinamiche
            />
            {imageDiv.spikeMaskRight !== "none" && (
              <CustomRangeControl
              label={
                <>
                  <HideImageIcon />
                  {__("Spike Width", "cocoblocks")}
                </>
              }
              value={imageDiv.spikeRightWidth}
              slides={slides}
              setAttributes={setAttributes}
              min={0}
              max={100}
              step={1}
              updateType="secondary"
              slideId={slide.id}
              elementIndex={elementIndex}
              innerIndex={imageIndex}
              elementType="image"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'spikeRightWidth')
              }
              showTooltip={false} // Mostra il tooltip
            />
            )}
            {(imageDiv.spikeMaskRight !== "none" ||
              imageDiv.spikeMask !== "none") && (
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
              value={imageDiv.imageFilter }
              slides={slides}
              setAttributes={setAttributes}
              updateType="secondary"
              slideId={slide.id}
              elementIndex={elementIndex}
              innerIndex={imageIndex}
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
         valueEffectHover={imageDiv.effectHover}
         colorNormal={imageDiv.backgroundColorImageHover } 
         setColorNormal={(color) => updateElement(slides, setAttributes, slide.id, elementIndex, null, color, 'secondary', 'image', 'backgroundColorImageHover')}
         buttonTitle={__("Background Color", "cocoblocks")}    
         buttonIcon={ <FormatColorTextIcon style={{marginBottom:'-3px'}} />}
         valueOpacityHover={imageDiv.opacityHover}
          valueBlurHover={imageDiv.filterHover}
          valueTranslateXHover={imageDiv.startXHover}
          valueTranslateYHover={imageDiv.startYHover}
          valueScaleTypeHover={imageDiv.scaleTypeHover}
          valueScaleHover={imageDiv.scaleHover}
          valueRotateHover={imageDiv.rotateHover}
          valueRotateXHover={imageDiv.rotateXHover}
          valueRotateYHover={imageDiv.rotateYHover}
          valueSkewXHover={imageDiv.skewXHover}
          valueSkewYHover={imageDiv.skewYHover}
          valueDurationHover={imageDiv.durationHover}  
          valueEasingHover={imageDiv.easingHover}
         slides={slides}
         setAttributes={setAttributes}
         updateType="secondary"
         slideId={slide.id}
         elementIndex={elementIndex}
         innerIndex={imageIndex}
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
     <CustomActionControls
     valueSelectLink={imageDiv.imageLink}
     valueUrl={imageDiv.linkUrlImage}
     valueSelectTarget={imageDiv.linkTargetImage}
     valueSelectRel={imageDiv.linkRelImage}
     valueScrollId={imageDiv.scrollToIdImage}
     slides={slides}
     setAttributes={setAttributes}
     updateType="secondary"
     slideId={slide.id}
     elementIndex={elementIndex}
     innerIndex={imageIndex}
     elementType="image"
     updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, property) =>
       updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, property)
     }
     linkProperty="imageLink"
     urlProperty="linkUrlImage"
     targetProperty="linkTargetImage"
     relProperty="linkRelImage"
     scrollIdProperty="scrollToIdImage"
   />
      )}
      {activeSectionImage === "visibility" && (
       <CustomVisibilityControls
       valueDesktop={imageDiv.enableDesktopImage}
       valueTablet={imageDiv.enableTabletImage}
       valueMobile={imageDiv.enableMobileImage}
       slides={slides}
       setAttributes={setAttributes}
       updateType="secondary"
       slideId={slide.id}
       elementIndex={elementIndex}
       innerIndex={imageIndex}
       elementType="image"
       updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, property) =>
         updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, property)
       }
       desktopProperty="enableDesktopImage"
       tabletProperty="enableTabletImage"
       mobileProperty="enableMobileImage"
     />
      )}
       {activeSectionImage === "hide-title-editor" && (
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

export default InnerImageEdit;
