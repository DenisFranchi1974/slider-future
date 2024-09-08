import React, { useState } from "react";
import {
  Button,
  TextareaControl,
  TextControl,
  SelectControl,
  RangeControl,
  ToggleControl,
  Tooltip,
  __experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { trash, replace } from "@wordpress/icons";
import ColorOptionsPanel from "./colorPanel";
import SectionSelectorImage from "./sectionSelectorImage";
import ImageSelectionModal from "./ImageSelectionModal";
import BoxShadowControlImageBlock from "./boxShadowImageBlock";
import ImageControlsBlockHover from "./ImageControlsBlockHover";

const ImageControlsBlock = ({
  slide,
  element,
  elementIndex,
  innerElement,
  slides,
  imageDiv,
  innerIndex,
  imageIndex,
  divIndex,
  setAttributes,
  setActiveSectionImage,
  activeSectionImage,
  parallax,
}) => {
  // Inizializza lo stato locale utilizzando element.playState
  const [playStateImage, setPlayState] = useState(
    imageDiv.playStateImage || ""
  );

  // Funzione per alternare il valore dello stato
  const togglePlayState = () => {
    const newState = playStateImage === "play" ? "" : "play";
    setPlayState(newState);
    // Aggiorna element.playState piuttosto che attributes.playState
    imageDiv.playStateImage = newState;
    setAttributes({ elements: [...slides] }); // Oppure aggiorna la struttura dati appropriata
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
  const removeSlideImageBlock = (slideId, divIndex, imageIndex) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerImageDivs: element.innerImageDivs.filter(
                      (imageDiv, imgIndex) => imgIndex !== imageIndex
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
  const updateSlideImageBlock = (
    slideId,
    divIndex,
    imageIndex,
    newImageUrl,
    newAltText
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerImageDivs: element.innerImageDivs.map(
                      (imageDiv, imgIndex) =>
                        imgIndex === imageIndex
                          ? {
                              ...imageDiv,
                              imageUrl: newImageUrl,
                              alt: newAltText,
                            }
                          : imageDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update fit image
  const updateSlideImageFitBlock = (slideId, divIndex, imageIndex, newFit) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerImageDivs: element.innerImageDivs.map(
                      (imageDiv, imgIndex) =>
                        imgIndex === imageIndex
                          ? { ...imageDiv, fit: newFit }
                          : imageDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update width image
  const updateWidthImageBlock = (
    slideId,
    divIndex,
    imageIndex,
    newWidthImage
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerImageDivs: element.innerImageDivs.map(
                      (imageDiv, imgIndex) =>
                        imgIndex === imageIndex
                          ? { ...imageDiv, widthImage: newWidthImage }
                          : imageDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update width content image
  const updateWidthImageContent = (slideId, divIndex, imageIndex, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerImageDivs: element.innerImageDivs.map(
                      (imageDiv, imgIndex) =>
                        imgIndex === imageIndex
                          ? { ...imageDiv, widthImageContent: value }
                          : imageDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update border style
  const updateBorderStyleImage = (slideId, divIndex, imageIndex, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerImageDivs: element.innerImageDivs.map(
                      (imageDiv, imgIndex) =>
                        imgIndex === imageIndex
                          ? { ...imageDiv, borderStyleImage: value }
                          : imageDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update custom width image
  const updateCustomWidthImageBlock = (
    slideId,
    divIndex,
    imageIndex,
    newCustomWidthImage
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerImageDivs: element.innerImageDivs.map(
                      (imageDiv, imgIndex) =>
                        imgIndex === imageIndex
                          ? {
                              ...imageDiv,
                              customWidthImage: newCustomWidthImage,
                            }
                          : imageDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update custom width image px
  const updateCustomWidthImagePxBlock = (
    slideId,
    divIndex,
    imageIndex,
    newCustomWidthImagePx
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerImageDivs: element.innerImageDivs.map(
                      (imageDiv, imgIndex) =>
                        imgIndex === imageIndex
                          ? {
                              ...imageDiv,
                              customWidthImagePx: newCustomWidthImagePx,
                            }
                          : imageDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update height image
  const updateHeightImageBlock = (
    slideId,
    divIndex,
    imageIndex,
    newHeightImage
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerImageDivs: element.innerImageDivs.map(
                      (imageDiv, imgIndex) =>
                        imgIndex === imageIndex
                          ? { ...imageDiv, heightImage: newHeightImage }
                          : imageDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update custom height image
  const updateCustomHeightImageBlock = (
    slideId,
    divIndex,
    imageIndex,
    newCustomHeightImage
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerImageDivs: element.innerImageDivs.map(
                      (imageDiv, imgIndex) =>
                        imgIndex === imageIndex
                          ? {
                              ...imageDiv,
                              customHeightImage: newCustomHeightImage,
                            }
                          : imageDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update custom height image px
  const updateCustomHeightImagePxBlock = (
    slideId,
    divIndex,
    imageIndex,
    newCustomHeightImagePx
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerImageDivs: element.innerImageDivs.map(
                      (imageDiv, imgIndex) =>
                        imgIndex === imageIndex
                          ? {
                              ...imageDiv,
                              customHeightImagePx: newCustomHeightImagePx,
                            }
                          : imageDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update border color image
  const updateSlideBackgroundBorderColorImageBlock = (
    slideId,
    divIndex,
    imageIndex,
    borderColor
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerImageDivs: element.innerImageDivs.map(
                      (imageDiv, imgIndex) =>
                        imgIndex === imageIndex
                          ? {
                              ...imageDiv,
                              backgroundBorderColorImage: borderColor,
                            }
                          : imageDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update border size image
  const updateSlideBackgroundBorderSizeImageBlock = (
    slideId,
    divIndex,
    imageIndex,
    newSizeBorderImage
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerImageDivs: element.innerImageDivs.map(
                      (imageDiv, imgIndex) =>
                        imgIndex === imageIndex
                          ? {
                              ...imageDiv,
                              backgroundBorderSizeImage: newSizeBorderImage,
                            }
                          : imageDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update border radius image
  const updateSlideBackgroundBorderRadiusImageBlock = (
    slideId,
    divIndex,
    imageIndex,
    newRadiusImage
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerImageDivs: element.innerImageDivs.map(
                      (imageDiv, imgIndex) =>
                        imgIndex === imageIndex
                          ? {
                              ...imageDiv,
                              backgroundBorderRadiusImage: newRadiusImage,
                            }
                          : imageDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update padding image
  const updatePaddingImageBlock = (
    slideId,
    divIndex,
    imageIndex,
    newPaddingImage
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerImageDivs: element.innerImageDivs.map(
                      (imageDiv, imgIndex) =>
                        imgIndex === imageIndex
                          ? { ...imageDiv, paddingImage: newPaddingImage }
                          : imageDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update background color image
  const updateSlideBackgroundColorImageBlock = (
    slideId,
    divIndex,
    imageIndex,
    backgroundColorImage
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerImageDivs: element.innerImageDivs.map(
                      (imageDiv, imgIndex) =>
                        imgIndex === imageIndex
                          ? {
                              ...imageDiv,
                              backgroundColorImage: backgroundColorImage,
                            }
                          : imageDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Rotate
  const updateRotateImageBlock = (
    slideId,
    divIndex,
    imageIndex,
    rotateImage
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerImageDivs: element.innerImageDivs.map(
                      (imageDiv, imgIndex) =>
                        imgIndex === imageIndex
                          ? { ...imageDiv, rotateImage: rotateImage }
                          : imageDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Opacity
  const updateOpacityImageBlock = (
    slideId,
    divIndex,
    imageIndex,
    opacityImage
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerImageDivs: element.innerImageDivs.map(
                      (imageDiv, imgIndex) =>
                        imgIndex === imageIndex
                          ? { ...imageDiv, opacityImage: opacityImage }
                          : imageDiv
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
  const updatenewMarginImageBlock = (
    slideId,
    divIndex,
    imageIndex,
    newMarginImage
  ) => {
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
                  innerImageDivs: element.innerImageDivs.map((imageDiv, j) => {
                    if (j === imageIndex) {
                      return {
                        ...imageDiv,
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
                    return imageDiv;
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

  // Update blob image
  const updateBlobMaskBlock = (slideId, divIndex, imageIndex, newBlobMask) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerImageDivs: element.innerImageDivs.map((imageDiv, j) =>
                      j === imageIndex
                        ? { ...imageDiv, blobMask: newBlobMask }
                        : imageDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update animation image
  const updateAnimationImage = (slideId, divIndex, imageIndex, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerImageDivs: element.innerImageDivs.map((imageDiv, j) =>
                      j === imageIndex
                        ? { ...imageDiv, animationImage: value }
                        : imageDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update duration animation image
  const updateDurationEffectImage = (slideId, divIndex, imageIndex, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerImageDivs: element.innerImageDivs.map((imageDiv, j) =>
                      j === imageIndex
                        ? { ...imageDiv, durationEffectImage: value }
                        : imageDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update iteration animation image
  const updateInterationImage = (slideId, divIndex, imageIndex, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerImageDivs: element.innerImageDivs.map((imageDiv, j) =>
                      j === imageIndex
                        ? { ...imageDiv, interationImage: value }
                        : imageDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update moving animation image
  const updateAnimationImageMoving = (slideId, divIndex, imageIndex, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerImageDivs: element.innerImageDivs.map((imageDiv, j) =>
                      j === imageIndex
                        ? { ...imageDiv, animationImageMoving: value }
                        : imageDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update duration animation image
  const updateDurationEffectImageMoving = (
    slideId,
    divIndex,
    imageIndex,
    value
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerImageDivs: element.innerImageDivs.map((imageDiv, j) =>
                      j === imageIndex
                        ? { ...imageDiv, durationEffectImageMoving: value }
                        : imageDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update translate animation image
  const updateTranslateEffectImageMoving = (
    slideId,
    divIndex,
    imageIndex,
    value
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerImageDivs: element.innerImageDivs.map((imageDiv, j) =>
                      j === imageIndex
                        ? { ...imageDiv, translateEffectImageMoving: value }
                        : imageDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update spike image
  const updateSpikeMask = (slideId, divIndex, imageIndex, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerImageDivs: element.innerImageDivs.map((imageDiv, j) =>
                      j === imageIndex
                        ? { ...imageDiv, spikeMask: value }
                        : imageDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update spike left image
  const updateSpikeLeftWidth = (slideId, divIndex, imageIndex, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerImageDivs: element.innerImageDivs.map((imageDiv, j) =>
                      j === imageIndex
                        ? { ...imageDiv, spikeLeftWidth: value }
                        : imageDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update spike right image
  const updateSpikeMaskRight = (slideId, divIndex, imageIndex, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerImageDivs: element.innerImageDivs.map((imageDiv, j) =>
                      j === imageIndex
                        ? { ...imageDiv, spikeMaskRight: value }
                        : imageDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update spike right width image
  const updateSpikeRightWidth = (slideId, divIndex, imageIndex, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerImageDivs: element.innerImageDivs.map((imageDiv, j) =>
                      j === imageIndex
                        ? { ...imageDiv, spikeRightWidth: value }
                        : imageDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update filter image
  const updateImageFilter = (slideId, divIndex, imageIndex, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerImageDivs: element.innerImageDivs.map((imageDiv, j) =>
                      j === imageIndex
                        ? { ...imageDiv, imageFilter: value }
                        : imageDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Selector link
  const updateImageLink = (slideId, divIndex, imageIndex, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerImageDivs: element.innerImageDivs.map((imageDiv, j) =>
                      j === imageIndex
                        ? { ...imageDiv, imageLink: value }
                        : imageDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Link Url
  const updateLinkUrlImage = (slideId, divIndex, imageIndex, url) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerImageDivs: element.innerImageDivs.map((imageDiv, j) =>
                      j === imageIndex
                        ? { ...imageDiv, linkUrlImage: url }
                        : imageDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Link Target
  const updateScrollToIdImage = (slideId, divIndex, imageIndex, id) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerImageDivs: element.innerImageDivs.map((imageDiv, j) =>
                      j === imageIndex
                        ? { ...imageDiv, scrollToIdImage: id }
                        : imageDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Link Target
  const updateLinkTargetImage = (slideId, divIndex, imageIndex, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerImageDivs: element.innerImageDivs.map((imageDiv, j) =>
                      j === imageIndex
                        ? { ...imageDiv, linkTargetImage: value }
                        : imageDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Link Rel
  const updateLinkRelImage = (slideId, divIndex, imageIndex, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerImageDivs: element.innerImageDivs.map((imageDiv, j) =>
                      j === imageIndex
                        ? { ...imageDiv, linkRelImage: value }
                        : imageDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Enable Desktop
  const updateEnableDesktopImage = (slideId, divIndex, imageIndex, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerImageDivs: element.innerImageDivs.map((imageDiv, j) =>
                      j === imageIndex
                        ? { ...imageDiv, enableDesktopImage: value }
                        : imageDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Enable Tablet
  const updateEnableTabletImage = (slideId, divIndex, imageIndex, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerImageDivs: element.innerImageDivs.map((imageDiv, j) =>
                      j === imageIndex
                        ? { ...imageDiv, enableTabletImage: value }
                        : imageDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Enable Mobile
  const updateEnableMobileImage = (slideId, divIndex, imageIndex, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerImageDivs: element.innerImageDivs.map((imageDiv, j) =>
                      j === imageIndex
                        ? { ...imageDiv, enableMobileImage: value }
                        : imageDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Parallax image x
  const updateParallaxImageBlock = (
    slideId,
    divIndex,
    imageIndex,
    newParallaxImage
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerImageDivs: element.innerImageDivs.map((imageDiv, j) =>
                      j === imageIndex
                        ? { ...imageDiv, parallaxImage: newParallaxImage }
                        : imageDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Parallax image y
  const updateParallaxImageYBlock = (
    slideId,
    divIndex,
    imageIndex,
    newParallaxImageY
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerImageDivs: element.innerImageDivs.map((imageDiv, j) =>
                      j === imageIndex
                        ? { ...imageDiv, parallaxImageY: newParallaxImageY }
                        : imageDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Parallax image scale
  const updateParallaxImageScaleBlock = (
    slideId,
    divIndex,
    imageIndex,
    newParallaxImageScale
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerImageDivs: element.innerImageDivs.map((imageDiv, j) =>
                      j === imageIndex
                        ? {
                            ...imageDiv,
                            parallaxImageScale: newParallaxImageScale,
                          }
                        : imageDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Parallax image opacity
  const updateParallaxImageOpacityBlock = (
    slideId,
    divIndex,
    imageIndex,
    newParallaxImageOpacity
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerImageDivs: element.innerImageDivs.map((imageDiv, j) =>
                      j === imageIndex
                        ? {
                            ...imageDiv,
                            parallaxImageOpacity: newParallaxImageOpacity,
                          }
                        : imageDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Parallax image duration
  const updateParallaxImageDurationBlock = (
    slideId,
    divIndex,
    imageIndex,
    newParallaxImageDuration
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === divIndex
                ? {
                    ...element,
                    innerImageDivs: element.innerImageDivs.map((imageDiv, j) =>
                      j === imageIndex
                        ? {
                            ...imageDiv,
                            parallaxImageDuration: newParallaxImageDuration,
                          }
                        : imageDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  return (
    <div className="custom-block-added">
      <div className="divider-controls-inner"></div>
      <div className="title-block-added">
        <div className="title-element">
          <Button
            onClick={() =>
              removeSlideImageBlock(slide.id, divIndex, imageIndex)
            }
            isDestructive
            icon={trash}
            label={__("Remove Image", "cocoblocks")}
            className="button-remove-element"
            style={{
              position: "absolute",
              right: "12px",
              top: "10px",
            }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z" />
          </svg>
          <h2>{__("Inner Image", "slider")}</h2>
        </div>
      </div>
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
              onSelect={handleImageSelectForDiv}
            />
          )}
          {imageDiv.imageUrl && (
            <>
              <div className="content-section-panel" style={{ padding: "0" }}>
                <div className="custom-select">
                  <TextareaControl
                    label={
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20px"
                          viewBox="0 -960 960 960"
                          width="20px"
                          fill="#e8eaed"
                        >
                          <path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
                        </svg>
                        {__("Alt Text", "cocoblocks")}
                      </>
                    }
                    value={imageDiv.alt || ""}
                    onChange={(newAlt) =>
                      updateSlideImageBlock(
                        slide.id,
                        elementIndex,
                        imageIndex,
                        imageDiv.imageUrl,
                        newAlt
                      )
                    }
                    placeholder={__("Add alt text...", "cocoblocks")}
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
                          <path d="M120-120v-720h80v720h-80Zm640 0v-720h80v720h-80ZM280-440v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Z" />
                        </svg>
                        {__("Width content", "cocoblocks")}
                      </>
                    }
                    value={imageDiv.widthImageContent}
                    onChange={(value) =>
                      updateWidthImageContent(
                        slide.id,
                        elementIndex,
                        imageIndex,
                        value
                      )
                    }
                    options={[
                      {
                        label: __("Auto", "cocoblocks"),
                        value: "auto",
                      },
                      {
                        label: __("100%", "cocoblocks"),
                        value: "100%",
                      },
                    ]}
                  />
                </div>
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
                <div className="custom-select select-control-label-right">
                  <SelectControl
                    label={
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20px"
                          viewBox="0 -960 960 960"
                          width="20px"
                          fill="#e8eaed"
                        >
                          <path d="M560-280h200v-200h-80v120H560v80ZM200-480h80v-120h120v-80H200v200Zm-40 320q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z" />
                        </svg>
                        {__("Image fit", "cocoblocks")}
                      </>
                    }
                    value={imageDiv.fit}
                    options={[
                      {
                        label: __("Cover", "slider"),
                        value: "cover",
                      },
                      {
                        label: __("Contain", "slider"),
                        value: "contain",
                      },
                    ]}
                    onChange={(newFit) =>
                      updateSlideImageFitBlock(
                        slide.id,
                        elementIndex,
                        imageIndex,
                        newFit
                      )
                    }
                  />
                </div>
                {imageDiv.paddingImage > 0 && (
                  <div className="custom-select color">
                    <ColorOptionsPanel
                      colorNormal={imageDiv.backgroundColorImage}
                      setColorNormal={(backgroundColorImage) =>
                        updateSlideBackgroundColorImageBlock(
                          slide.id,
                          elementIndex,
                          imageIndex,
                          backgroundColorImage
                        )
                      }
                      buttonTitle={__("Background Color", "cocoblocks")}
                      buttonIcon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="16px"
                          viewBox="0 -960 960 960"
                          width="16px"
                          fill="#e8eaed"
                          style={{
                            marginBottom: "-5px",
                            width: "20px",
                            height: "20px",
                          }}
                        >
                          <path d="M346-140 100-386q-10-10-15-22t-5-25q0-13 5-25t15-22l230-229-106-106 62-65 400 400q10 10 14.5 22t4.5 25q0 13-4.5 25T686-386L440-140q-10 10-22 15t-25 5q-13 0-25-5t-22-15Zm47-506L179-432h428L393-646Zm399 526q-36 0-61-25.5T706-208q0-27 13.5-51t30.5-47l42-54 44 54q16 23 30 47t14 51q0 37-26 62.5T792-120Z" />
                        </svg>
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
                <div className="custom-select select-control-label-right">
                  <SelectControl
                    label={
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20px"
                          viewBox="0 -960 960 960"
                          width="20px"
                          fill="#e8eaed"
                        >
                          <path d="M280-320 120-480l160-160 57 56-64 64h414l-63-64 56-56 160 160-160 160-56-56 63-64H273l63 64-56 56Z" />
                        </svg>
                        {__("Width", "cocoblocks")}
                      </>
                    }
                    value={imageDiv.widthImage}
                    onChange={(newWidthImage) =>
                      updateWidthImageBlock(
                        slide.id,
                        elementIndex,
                        imageIndex,
                        newWidthImage
                      )
                    }
                    options={[
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
                    ]}
                  />
                </div>
                {imageDiv.widthImage === "relative" && (
                  <div className="custom-select">
                    <RangeControl
                      label={__("Custom width (%)", "cocoblocks")}
                      value={imageDiv.customWidthImage}
                      onChange={(newCustomWidthImage) =>
                        updateCustomWidthImageBlock(
                          slide.id,
                          elementIndex,
                          imageIndex,
                          newCustomWidthImage
                        )
                      }
                      min={0}
                      max={100}
                      step={1}
                    />
                  </div>
                )}
                {imageDiv.widthImage === "fixed" && (
                  <div className="custom-select">
                    <RangeControl
                      label={__("Custom width (px)", "cocoblocks")}
                      value={imageDiv.customWidthImagePx}
                      onChange={(newCustomWidthImagePx) =>
                        updateCustomWidthImagePxBlock(
                          slide.id,
                          elementIndex,
                          imageIndex,
                          newCustomWidthImagePx
                        )
                      }
                      min={0}
                      max={1920}
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
                          height="20px"
                          viewBox="0 -960 960 960"
                          width="20px"
                          fill="#e8eaed"
                          style={{
                            transform: "rotate(90deg)",
                          }}
                        >
                          <path d="M280-320 120-480l160-160 57 56-64 64h414l-63-64 56-56 160 160-160 160-56-56 63-64H273l63 64-56 56Z" />
                        </svg>
                        {__("Height", "cocoblocks")}
                      </>
                    }
                    value={imageDiv.heightImage}
                    onChange={(newHeightImage) =>
                      updateHeightImageBlock(
                        slide.id,
                        elementIndex,
                        imageIndex,
                        newHeightImage
                      )
                    }
                    options={[
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
                    ]}
                  />
                </div>
                {imageDiv.heightImage === "relative" && (
                  <div className="custom-select">
                    <RangeControl
                      label={__("Custom height (%)", "cocoblocks")}
                      value={imageDiv.customHeightImage}
                      onChange={(newCustomHeightImage) =>
                        updateCustomHeightImageBlock(
                          slide.id,
                          elementIndex,
                          imageIndex,
                          newCustomHeightImage
                        )
                      }
                      min={0}
                      max={100}
                      step={1}
                    />
                  </div>
                )}
                {imageDiv.heightImage === "fixed" && (
                  <div className="custom-select">
                    <RangeControl
                      label={__("Custom height (px)", "cocoblocks")}
                      value={imageDiv.customHeightImagePx}
                      onChange={(newCustomHeightImagePx) =>
                        updateCustomHeightImagePxBlock(
                          slide.id,
                          elementIndex,
                          imageIndex,
                          newCustomHeightImagePx
                        )
                      }
                      min={0}
                      max={1920}
                      step={1}
                    />
                  </div>
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
              {__("Spacings", "cocoblocks")}
            </h2>
          </div>
          <div className="content-section-panel" style={{ padding: "0" }}>
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
                      <path d="M320-600q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm160 0q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm160 0q17 0 28.5-11.5T680-640q0-17-11.5-28.5T640-680q-17 0-28.5 11.5T600-640q0 17 11.5 28.5T640-600ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
                    </svg>
                    {__("Padding", "cocoblocks")}
                  </>
                }
                value={imageDiv.paddingImage}
                onChange={(newPaddingImage) =>
                  updatePaddingImageBlock(
                    slide.id,
                    elementIndex,
                    imageIndex,
                    newPaddingImage
                  )
                }
                min={0}
                max={50}
                step={1}
              />
            </div>
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
          </div>
          <div className="content-title-custom-panel intermedy">
            <h2 className="title-custom-panel">{__("Border", "cocoblocks")}</h2>
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
                      <path d="M280-120v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80ZM120-120v-720h720v80H200v640h-80Z" />
                    </svg>
                    {__("Border style", "cocoblocks")}
                  </>
                }
                value={imageDiv.borderStyleImage}
                options={[
                  {
                    label: __("None", "cocoblocks"),
                    value: "none",
                  },
                  {
                    label: __("Solid", "cocoblocks"),
                    value: "solid",
                  },
                  {
                    label: __("Dashed", "cocoblocks"),
                    value: "dashed",
                  },
                  {
                    label: __("Dotted", "cocoblocks"),
                    value: "dotted",
                  },
                  {
                    label: __("Double", "cocoblocks"),
                    value: "double",
                  },
                ]}
                onChange={(value) =>
                  updateBorderStyleImage(
                    slide.id,
                    elementIndex,
                    imageIndex,
                    value
                  )
                }
              />
            </div>
            {imageDiv.borderStyleImage !== "none" && (
              <>
                <div className="custom-select color">
                  <ColorOptionsPanel
                    colorNormal={imageDiv.backgroundBorderColorImage}
                    setColorNormal={(borderColor) =>
                      updateSlideBackgroundBorderColorImageBlock(
                        slide.id,
                        elementIndex,
                        imageIndex,
                        borderColor
                      )
                    }
                    buttonTitle={__("Border Color", "cocoblocks")}
                    buttonIcon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                        fill="#e8eaed"
                        style={{
                          marginRight: "3px",
                          height: "16px",
                          width: "16px",
                        }}
                      >
                        <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" />
                      </svg>
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
                          <path d="M144-144v-672h72v672h-72Zm150 0v-72h72v72h-72Zm0-300v-72h72v72h-72Zm0-300v-72h72v72h-72Zm150 600v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm150 600v-72h72v72h-72Zm0-300v-72h72v72h-72Zm0-300v-72h72v72h-72Zm150 600v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Z" />
                        </svg>
                        {__("Border width", "cocoblocks")}
                      </>
                    }
                    value={imageDiv.backgroundBorderSizeImage}
                    onChange={(newSizeBorderImage) =>
                      updateSlideBackgroundBorderSizeImageBlock(
                        slide.id,
                        elementIndex,
                        imageIndex,
                        newSizeBorderImage
                      )
                    }
                    min={0}
                    max={20}
                    step={1}
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
                          <path d="M216-216h528v-528H216v528Zm-72 72v-672h672v672H144Zm150-300v-72h72v72h-72Zm150 150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm150 150v-72h72v72h-72Z" />
                        </svg>
                        {__("Border radius", "cocoblocks")}
                      </>
                    }
                    value={imageDiv.backgroundBorderRadiusImage}
                    onChange={(newRadiusImage) =>
                      updateSlideBackgroundBorderRadiusImageBlock(
                        slide.id,
                        elementIndex,
                        imageIndex,
                        newRadiusImage
                      )
                    }
                    min={0}
                    max={256}
                    step={1}
                  />
                </div>
              </>
            )}
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
                      <path d="m360-160-56-56 70-72q-128-17-211-70T80-480q0-83 115.5-141.5T480-680q169 0 284.5 58.5T880-480q0 62-66.5 111T640-296v-82q77-20 118.5-49.5T800-480q0-32-85.5-76T480-600q-149 0-234.5 44T160-480q0 24 51 57.5T356-372l-52-52 56-56 160 160-160 160Z" />
                    </svg>
                    {__("Rotate", "cocoblocks")}
                  </>
                }
                value={imageDiv.rotateImage}
                onChange={(rotateImage) =>
                  updateRotateImageBlock(
                    slide.id,
                    elementIndex,
                    imageIndex,
                    rotateImage
                  )
                }
                min={0}
                max={360}
                step={1}
              />
            </div>
          </div>
          <div className="content-title-custom-panel intermedy">
            <h2 className="title-custom-panel">
              {__("TRANSPARENCY SETTING", "cocoblocks")}
            </h2>
          </div>
          <div className="content-section-panel" style={{ padding: "0" }}>
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
                      <path d="M480-120q-133 0-226.5-92T160-436q0-65 25-121.5T254-658l226-222 226 222q44 44 69 100.5T800-436q0 132-93.5 224T480-120ZM242-400h474q12-72-13.5-123T650-600L480-768 310-600q-27 26-53 77t-15 123Z" />
                    </svg>
                    {__("Opacity", "cocoblocks")}
                  </>
                }
                value={imageDiv.opacityImage}
                onChange={(opacityImage) =>
                  updateOpacityImageBlock(
                    slide.id,
                    elementIndex,
                    imageIndex,
                    opacityImage
                  )
                }
                min={0}
                max={1}
                step={0.1}
              />
            </div>
          </div>
          <BoxShadowControlImageBlock
            slide={slide}
            slides={slides}
            imageDiv={imageDiv}
            imageIndex={imageIndex}
            elementIndex={elementIndex}
            setAttributes={setAttributes}
          />
        </>
      )}

      {activeSectionImage === "animation" && (
        <>
          <div
            className="content-title-custom-panel intermedy"
            style={{
              marginTop: "-18px",
            }}
          >
            <h2 className="title-custom-panel">
              {__("Effects", "cocoblocks")}
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
                      <path d="M360-80q-58 0-109-22t-89-60q-38-38-60-89T80-360q0-81 42-148t110-102q20-39 49.5-68.5T350-728q33-68 101-110t149-42q58 0 109 22t89 60q38 38 60 89t22 109q0 85-42 150T728-350q-20 39-49.5 68.5T610-232q-35 68-102 110T360-80Zm0-80q33 0 63.5-10t56.5-30q-58 0-109-22t-89-60q-38-38-60-89t-22-109q-20 26-30 56.5T160-360q0 42 16 78t43 63q27 27 63 43t78 16Zm120-120q33 0 64.5-10t57.5-30q-59 0-110-22.5T403-403q-38-38-60.5-89T320-602q-20 26-30 57.5T280-480q0 42 15.5 78t43.5 63q27 28 63 43.5t78 15.5Zm120-120q18 0 34.5-3t33.5-9q22-60 6.5-115.5T621-621q-38-38-93.5-53.5T412-668q-6 17-9 33.5t-3 34.5q0 42 15.5 78t43.5 63q27 28 63 43.5t78 15.5Zm160-78q20-26 30-57.5t10-64.5q0-42-15.5-78T741-741q-27-28-63-43.5T600-800q-35 0-65.5 10T478-760q59 0 110 22.5t89 60.5q38 38 60.5 89T760-478Z" />
                    </svg>
                    {__("Animation", "cocoblocks")}
                  </>
                }
                value={imageDiv.animationImage}
                options={[
                  { label: "None", value: "none" },
                  { label: "Fade In", value: "fade-in-image-inner" },
                  { label: "Fade In Left", value: "fade-in-left-image-inner" },
                  {
                    label: "Fade In Right",
                    value: "fade-in-right-image-inner",
                  },
                  { label: "Fade In Top", value: "fade-in-top-image-inner" },
                  {
                    label: "Fade In Bottom",
                    value: "fade-in-bottom-image-inner",
                  },
                  {
                    label: "Slide In Left",
                    value: "slide-in-left-image-inner",
                  },
                  {
                    label: "Slide In Right",
                    value: "slide-in-right-image-inner",
                  },
                  { label: "Slide In Top", value: "slide-in-top-image-inner" },
                  {
                    label: "Slide In Bottom",
                    value: "slide-in-bottom-image-inner",
                  },
                  { label: "Zoom In", value: "zoom-in-image-inner" },
                  { label: "Zoom In Left", value: "zoom-in-left-image-inner" },
                  {
                    label: "Zoom In Right",
                    value: "zoom-in-right-image-inner",
                  },
                  { label: "Zoom In Top", value: "zoom-in-top-image-inner" },
                  {
                    label: "Zoom In Bottom",
                    value: "zoom-in-bottom-image-inner",
                  },
                  {
                    label: "Rotate In Left",
                    value: "rotate-in-left-image-inner",
                  },
                  {
                    label: "Rotate In Right",
                    value: "rotate-in-right-image-inner",
                  },
                  {
                    label: "Rotate In Top",
                    value: "rotate-in-top-image-inner",
                  },
                  {
                    label: "Rotate In Bottom",
                    value: "rotate-in-bottom-image-inner",
                  },
                  {
                    label: "Rotate Continuos",
                    value: "rotate-continuous-image-inner",
                  },
                  { label: "Bounce in", value: "bounce-effect-image-inner" },
                  {
                    label: "Bounce in Left",
                    value: "bounce-left-effect-image-inner",
                  },
                  {
                    label: "Bounce in Right",
                    value: "bounce-right-effect-image-inner",
                  },
                  {
                    label: "Bounce in Top",
                    value: "bounce-top-effect-image-inner",
                  },
                  {
                    label: "Bounce in Bottom",
                    value: "bounce-bottom-effect-image-inner",
                  },
                  { label: "Flip In", value: "flip-image-inner" },
                  { label: "Wiggle", value: "wiggle-image-inner" },
                  { label: "Swing", value: "swing-image-inner" },
                  { label: "Rubber band", value: "rubber-band-image-inner" },
                ]}
                onChange={(value) =>
                  updateAnimationImage(
                    slide.id,
                    elementIndex,
                    imageIndex,
                    value
                  )
                }
              />
            </div>
            {imageDiv.animationImage !== "none" && (
              <>
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
                          <path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z" />
                        </svg>
                        {__("Duration", "cocoblocks")}
                      </>
                    }
                    value={imageDiv.durationEffectImage}
                    onChange={(value) =>
                      updateDurationEffectImage(
                        slide.id,
                        elementIndex,
                        imageIndex,
                        value
                      )
                    }
                    min={0.1}
                    max={15}
                    step={0.1}
                  />
                </div>
              </>
            )}
            {[
              "bounce-effect-image-inner",
              "bounce-left-effect-image-inner",
              "bounce-right-effect-image-inner",
              "bounce-top-effect-image-inner",
              "bounce-bottom-effect-image-inner",
              "wiggle-image-inner",
              "flip-image-inner",
              "swing-image-inner",
              "rubber-band-image-inner",
            ].includes(imageDiv.animationImage) && (
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
                        <path d="M360-80q-58 0-109-22t-89-60q-38-38-60-89T80-360q0-81 42-148t110-102q20-39 49.5-68.5T350-728q33-68 101-110t149-42q58 0 109 22t89 60q38 38 60 89t22 109q0 85-42 150T728-350q-20 39-49.5 68.5T610-232q-35 68-102 110T360-80Zm0-80q33 0 63.5-10t56.5-30q-58 0-109-22t-89-60q-38-38-60-89t-22-109q-20 26-30 56.5T160-360q0 42 16 78t43 63q27 27 63 43t78 16Zm120-120q33 0 64.5-10t57.5-30q-59 0-110-22.5T403-403q-38-38-60.5-89T320-602q-20 26-30 57.5T280-480q0 42 15.5 78t43.5 63q27 28 63 43.5t78 15.5Zm120-120q18 0 34.5-3t33.5-9q22-60 6.5-115.5T621-621q-38-38-93.5-53.5T412-668q-6 17-9 33.5t-3 34.5q0 42 15.5 78t43.5 63q27 28 63 43.5t78 15.5Zm160-78q20-26 30-57.5t10-64.5q0-42-15.5-78T741-741q-27-28-63-43.5T600-800q-35 0-65.5 10T478-760q59 0 110 22.5t89 60.5q38 38 60.5 89T760-478Z" />
                      </svg>
                      {__("Iteration Mode", "cocoblocks")}
                    </>
                  }
                  value={imageDiv.interationImage}
                  options={[
                    { label: "Forwards", value: "forwards" },
                    { label: "Infinite", value: "infinite" },
                  ]}
                  onChange={(value) =>
                    updateInterationImage(
                      slide.id,
                      elementIndex,
                      imageIndex,
                      value
                    )
                  }
                />
              </div>
            )}
            {imageDiv.animationImage !== "none" && (
              <>
                <div className="button-reply-effect">
                  <Tooltip text={playStateImage === "play" ? "Play" : "Repeat"}>
                    <Button
                      variant={playStateImage === "play"}
                      onClick={togglePlayState}
                      icon={
                        playStateImage === "play" ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#e8eaed"
                          >
                            <path d="M170-228q-38-44-61-98T80-440h82q6 44 22 83.5t42 72.5l-56 56ZM80-520q8-60 30-114t60-98l56 56q-26 33-42 72.5T162-520H80ZM438-82q-60-6-113.5-29T226-170l56-58q35 26 73.5 43t82.5 23v80ZM284-732l-58-58q45-36 98.5-59T440-878v80q-45 6-84 23t-72 43Zm96 432v-360l280 180-280 180ZM520-82v-80q121-17 200.5-107T800-480q0-121-79.5-211T520-798v-80q154 17 257 130t103 268q0 155-103 268T520-82Z" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#e8eaed"
                          >
                            <path d="M480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440h80q0 117 81.5 198.5T480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720h-6l62 62-56 58-160-160 160-160 56 58-62 62h6q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80Z" />
                          </svg>
                        )
                      }
                    />
                  </Tooltip>
                </div>
              </>
            )}
          </div>
          <div
            className="content-section-panel"
            style={{ padding: "0", marginTop: "18px" }}
          >
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
                      <path d="M480-80 310-250l57-57 73 73v-166h80v165l72-73 58 58L480-80ZM250-310 80-480l169-169 57 57-72 72h166v80H235l73 72-58 58Zm460 0-57-57 73-73H560v-80h165l-73-72 58-58 170 170-170 170ZM440-560v-166l-73 73-57-57 170-170 170 170-57 57-73-73v166h-80Z" />
                    </svg>
                    {__("Movimentation", "cocoblocks")}
                  </>
                }
                value={imageDiv.animationImageMoving}
                options={[
                  { label: "None", value: "none" },
                  {
                    label: "Moving background X",
                    value: "moving-background-inner",
                  },
                  {
                    label: "Moving background Y",
                    value: "moving-background-y-inner",
                  },
                ]}
                onChange={(value) =>
                  updateAnimationImageMoving(
                    slide.id,
                    elementIndex,
                    imageIndex,
                    value
                  )
                }
              />
            </div>
            {imageDiv.animationImageMoving !== "none" && (
              <>
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
                          <path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z" />
                        </svg>
                        {__("Duration", "cocoblocks")}
                      </>
                    }
                    value={imageDiv.durationEffectImageMoving}
                    onChange={(value) =>
                      updateDurationEffectImageMoving(
                        slide.id,
                        elementIndex,
                        imageIndex,
                        value
                      )
                    }
                    min={0.1}
                    max={30}
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
                          <path d="M200-120q-33 0-56.5-23.5T120-200v-120h80v120h560v-480H200v120h-80v-200q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm260-140-56-56 83-84H120v-80h367l-83-84 56-56 180 180-180 180Z" />
                        </svg>
                        {__("Translate", "cocoblocks")}
                      </>
                    }
                    value={imageDiv.translateEffectImageMoving}
                    onChange={(value) =>
                      updateTranslateEffectImageMoving(
                        slide.id,
                        elementIndex,
                        imageIndex,
                        value
                      )
                    }
                    min={-300}
                    max={300}
                    step={1}
                  />
                </div>
              </>
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
                value={imageDiv.blobMask}
                onChange={(newBlobMask) =>
                  updateBlobMaskBlock(
                    slide.id,
                    elementIndex,
                    imageIndex,
                    newBlobMask
                  )
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
                value={imageDiv.spikeMask}
                onChange={(value) =>
                  updateSpikeMask(slide.id, elementIndex, imageIndex, value)
                }
                options={[
                  {
                    label: __("None", "cocoblocks"),
                    value: "none",
                  },
                  {
                    label: __("1 Spike Top", "cocoblocks"),
                    value: "left-spike-1-top-inner",
                  },
                  {
                    label: __("1 Spike Middle", "cocoblocks"),
                    value: "left-spike-1-middle-inner",
                  },
                  {
                    label: __("1 Spike Bottom", "cocoblocks"),
                    value: "left-spike-1-bottom-inner",
                  },
                  {
                    label: __("2 Spikes", "cocoblocks"),
                    value: "left-spike-2-inner",
                  },
                  {
                    label: __("3 Spikes", "cocoblocks"),
                    value: "left-spike-3-inner",
                  },
                  {
                    label: __("4 Spikes", "cocoblocks"),
                    value: "left-spike-4-inner",
                  },
                  {
                    label: __("5 Spikes", "cocoblocks"),
                    value: "left-spike-5-inner",
                  },
                ]}
              />
            </div>
            {imageDiv.spikeMask !== "none" && (
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
                  value={imageDiv.spikeLeftWidth}
                  onChange={(value) =>
                    updateSpikeLeftWidth(
                      slide.id,
                      elementIndex,
                      imageIndex,
                      value
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
                value={imageDiv.spikeMaskRight}
                onChange={(value) =>
                  updateSpikeMaskRight(
                    slide.id,
                    elementIndex,
                    imageIndex,
                    value
                  )
                }
                options={[
                  {
                    label: __("None", "cocoblocks"),
                    value: "none",
                  },
                  {
                    label: __("1 Spike Top", "cocoblocks"),
                    value: "right-spike-1-top-inner",
                  },
                  {
                    label: __("1 Spike Middle", "cocoblocks"),
                    value: "right-spike-1-middle-inner",
                  },
                  {
                    label: __("1 Spike Bottom", "cocoblocks"),
                    value: "right-spike-1-bottom-inner",
                  },
                  {
                    label: __("2 Spikes", "cocoblocks"),
                    value: "right-spike-2-inner",
                  },
                  {
                    label: __("3 Spikes", "cocoblocks"),
                    value: "right-spike-3-inner",
                  },
                  {
                    label: __("4 Spikes", "cocoblocks"),
                    value: "right-spike-4-inner",
                  },
                  {
                    label: __("5 Spikes", "cocoblocks"),
                    value: "right-spike-5-inner",
                  },
                ]}
              />
            </div>
            {imageDiv.spikeMaskRight !== "none" && (
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
                  value={imageDiv.spikeRightWidth}
                  onChange={(value) =>
                    updateSpikeRightWidth(
                      slide.id,
                      elementIndex,
                      imageIndex,
                      value
                    )
                  }
                  min={0}
                  max={100}
                  step={1}
                />
              </div>
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
                value={imageDiv.imageFilter}
                onChange={(value) =>
                  updateImageFilter(slide.id, elementIndex, imageIndex, value)
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
          <ImageControlsBlockHover
            slide={slide}
            slides={slides}
            imageDiv={imageDiv}
            imageIndex={imageIndex}
            element={element}
            elementIndex={elementIndex}
            setAttributes={setAttributes}
          />
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
                      <path d="M419-80q-28 0-52.5-12T325-126L107-403l19-20q20-21 48-25t52 11l74 45v-328q0-17 11.5-28.5T340-760q17 0 29 11.5t12 28.5v472l-97-60 104 133q6 7 14 11t17 4h221q33 0 56.5-23.5T720-240v-160q0-17-11.5-28.5T680-440H461v-80h219q50 0 85 35t35 85v160q0 66-47 113T640-80H419ZM167-620q-13-22-20-47.5t-7-52.5q0-83 58.5-141.5T340-920q83 0 141.5 58.5T540-720q0 27-7 52.5T513-620l-69-40q8-14 12-28.5t4-31.5q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 17 4 31.5t12 28.5l-69 40Zm335 280Z" />
                    </svg>
                    {__("Link actions", "cocoblocks")}
                  </>
                }
                value={imageDiv.imageLink}
                options={[
                  { label: "None", value: "none" },
                  { label: "Link", value: "link" },
                  { label: "Scroll Below Slider", value: "scroll-below" },
                  { label: "Scroll to ID Element", value: "scroll-to-id" },
                ]}
                onChange={(value) =>
                  updateImageLink(slide.id, elementIndex, imageIndex, value)
                }
              />
            </div>
            {imageDiv.imageLink === "link" && (
              <>
                <div className="custom-select select-text-control">
                  <TextControl
                    label={
                      <>
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 -960 960 960"
                          width="24px"
                          fill="#e8eaed"
                        >
                          <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" />
                        </svg>
                        {__("Enter URL", "cocoblocks")}
                      </>
                    }
                    value={imageDiv.linkUrlImage}
                    onChange={(value) =>
                      updateLinkUrlImage(
                        slide.id,
                        elementIndex,
                        imageIndex,
                        value
                      )
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
                          <path d="M200-120q-33 0-56.5-23.5T120-200v-160h80v160h560v-560H200v160h-80v-160q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm220-160-56-58 102-102H120v-80h346L364-622l56-58 200 200-200 200Z" />
                        </svg>
                        {__("Target", "cocoblocks")}
                      </>
                    }
                    value={imageDiv.linkTargetImage}
                    options={[
                      { label: "Same Window", value: "_self" },
                      { label: "New Window", value: "_blank" },
                    ]}
                    onChange={(value) =>
                      updateLinkTargetImage(
                        slide.id,
                        elementIndex,
                        imageIndex,
                        value
                      )
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
                          <path d="m791-55-91-91q-49 32-104.5 49T480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-60 17-115.5T146-700l-91-91 57-57 736 736-57 57ZM480-160q43 0 83.5-11t78.5-33L204-642q-22 38-33 78.5T160-480q0 133 93.5 226.5T480-160Zm334-100-58-58q22-38 33-78.5t11-83.5q0-133-93.5-226.5T480-800q-43 0-83.5 11T318-756l-58-58q49-32 104.5-49T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 60-17 115.5T814-260ZM537-537ZM423-423Z" />
                        </svg>
                        {__("Link Behavior", "cocoblocks")}
                      </>
                    }
                    value={imageDiv.linkRelImage}
                    options={[
                      { label: "Follow Link", value: "follow" },
                      { label: "No Follow", value: "nofollow" },
                    ]}
                    onChange={(value) =>
                      updateLinkRelImage(
                        slide.id,
                        elementIndex,
                        imageIndex,
                        value
                      )
                    }
                  />
                </div>
              </>
            )}
            {imageDiv.imageLink === "scroll-to-id" && (
              <div className="custom-select select-text-control">
                <TextControl
                  label={
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e8eaed"
                      >
                        <path d="M200-160q-33 0-56.5-23.5T120-240v-560q0-33 23.5-56.5T200-880h560q33 0 56.5 23.5T840-800v284q-10-2-19.5-3t-20.5-1h-40v-280H200v560h124q4 22 10.5 42t17.5 38H200Zm0-120v40-560 520Zm80-40h44q8-49 35-90.5t69-69.5H280v160Zm0-240h160v-160H280v160Zm280 440q-66 0-113-47t-47-113q0-66 47-113t113-47h80v80h-80q-33 0-56.5 23.5T480-280q0 33 23.5 56.5T560-200h80v80h-80Zm-40-440h160v-160H520v160Zm40 320v-80h240v80H560Zm160 120v-80h80q33 0 56.5-23.5T880-280q0-33-23.5-56.5T800-360h-80v-80h80q66 0 113 46.5T960-280q0 66-47 113t-113 47h-80Z" />
                      </svg>
                      {__("Enter ID", "cocoblocks")}
                    </>
                  }
                  value={imageDiv.scrollToIdImage}
                  onChange={(value) =>
                    updateScrollToIdImage(
                      slide.id,
                      elementIndex,
                      imageIndex,
                      value
                    )
                  }
                />
              </div>
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
                checked={imageDiv.enableDesktopImage}
                onChange={(value) =>
                  updateEnableDesktopImage(
                    slide.id,
                    elementIndex,
                    imageIndex,
                    value
                  )
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
                checked={imageDiv.enableTabletImage}
                onChange={(value) =>
                  updateEnableTabletImage(
                    slide.id,
                    elementIndex,
                    imageIndex,
                    value
                  )
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
                checked={imageDiv.enableMobileImage}
                onChange={(value) =>
                  updateEnableMobileImage(
                    slide.id,
                    elementIndex,
                    imageIndex,
                    value
                  )
                }
              />
            </div>
          </div>
        </>
      )}
      {activeSectionImage === "parallax" && (
        <>
          <div
            className="content-title-custom-panel intermedy"
            style={{
              marginTop: "-18px",
            }}
          >
            <h2 className="title-custom-panel">
              {__("Effects", "cocoblocks")}
            </h2>
          </div>
          {!parallax && (
            <p
              className="notice components-base-control__help"
              style={{
                borderRadius: "8px",
                marginTop: "18px",
              }}
            >
              {__(
                'For these effects, you need to enable "Parallax" from the Slider options under the Animation section!',
                "cocoblocks"
              )}
            </p>
          )}
          {parallax && (
            <>
              <div className="content-section-panel" style={{ padding: "0" }}>
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
                          <path d="m680-320-56-56 63-64H440v-80h247l-63-64 56-56 160 160-160 160ZM200-200h80v-560h-80v560Zm-80 80v-720h240v720H120Zm320 0v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80ZM200-200h80-80Z" />
                        </svg>
                        {__("Parallax offset X", "cocoblocks")}
                      </>
                    }
                    value={imageDiv.parallaxImage}
                    onChange={(newParallaxImage) =>
                      updateParallaxImageBlock(
                        slide.id,
                        elementIndex,
                        imageIndex,
                        newParallaxImage
                      )
                    }
                    min={-500}
                    max={500}
                    step={1}
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
                          <path d="m680-320-56-56 63-64H440v-80h247l-63-64 56-56 160 160-160 160ZM200-200h80v-560h-80v560Zm-80 80v-720h240v720H120Zm320 0v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80ZM200-200h80-80Z" />
                        </svg>
                        {__("Parallax offset Y", "cocoblocks")}
                      </>
                    }
                    value={imageDiv.parallaxImageY}
                    onChange={(newParallaxImageY) =>
                      updateParallaxImageYBlock(
                        slide.id,
                        elementIndex,
                        imageIndex,
                        newParallaxImageY
                      )
                    }
                    min={-500}
                    max={500}
                    step={1}
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
                          <path d="m680-320-56-56 63-64H440v-80h247l-63-64 56-56 160 160-160 160ZM200-200h80v-560h-80v560Zm-80 80v-720h240v720H120Zm320 0v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80ZM200-200h80-80Z" />
                        </svg>
                        {__("Parallax scale", "cocoblocks")}
                      </>
                    }
                    value={imageDiv.parallaxImageScale}
                    onChange={(newParallaxImageScale) =>
                      updateParallaxImageScaleBlock(
                        slide.id,
                        elementIndex,
                        imageIndex,
                        newParallaxImageScale
                      )
                    }
                    min={0}
                    max={2}
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
                          <path d="m680-320-56-56 63-64H440v-80h247l-63-64 56-56 160 160-160 160ZM200-200h80v-560h-80v560Zm-80 80v-720h240v720H120Zm320 0v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80ZM200-200h80-80Z" />
                        </svg>
                        {__("Parallax opacity", "cocoblocks")}
                      </>
                    }
                    value={imageDiv.parallaxImageOpacity}
                    onChange={(newParallaxImageOpacity) =>
                      updateParallaxImageOpacityBlock(
                        slide.id,
                        elementIndex,
                        imageIndex,
                        newParallaxImageOpacity
                      )
                    }
                    min={0}
                    max={1}
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
                          <path d="m680-320-56-56 63-64H440v-80h247l-63-64 56-56 160 160-160 160ZM200-200h80v-560h-80v560Zm-80 80v-720h240v720H120Zm320 0v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80ZM200-200h80-80Z" />
                        </svg>
                        {__("Parallax duration", "cocoblocks")}
                      </>
                    }
                    value={imageDiv.parallaxImageDuration}
                    onChange={(newParallaxImageDuration) =>
                      updateParallaxImageDurationBlock(
                        slide.id,
                        elementIndex,
                        imageIndex,
                        newParallaxImageDuration
                      )
                    }
                    min={100}
                    max={2000}
                    step={10}
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

export default ImageControlsBlock;
