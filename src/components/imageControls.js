import React from "react";
import {
  Button,
  TextareaControl,
  SelectControl,
  RangeControl,
  __experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { trash, replace } from "@wordpress/icons";
import ColorOptionsPanel from "./colorPanel";
import SectionSelectorImage from "./sectionSelectorImage";

const ImageControls = ({
  slide,
  element,
  elementIndex,
  slides,
  setAttributes,
  setActiveSectionImage,
  activeSectionImage,
  parallax,
}) => {
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

  // Update fit image
  const updateSlideImageFit = (slideId, index, newFit) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "image" && i === index
                ? { ...element, fit: newFit }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update width image
  const updateWidthImage = (slideId, index, newWidthImage) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "image" && i === index
                ? { ...element, widthImage: newWidthImage }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update custom width image
  const updateCustomWidthImage = (slideId, index, newCustomWidthImage) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "image" && i === index
                ? { ...element, customWidthImage: newCustomWidthImage }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update custom width image px
  const updateCustomWidthImagePx = (slideId, index, newCustomWidthImagePx) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "image" && i === index
                ? { ...element, customWidthImagePx: newCustomWidthImagePx }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update height image
  const updateHeightImage = (slideId, index, newHeightImage) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "image" && i === index
                ? { ...element, heightImage: newHeightImage }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update custom height image
  const updateCustomHeightImage = (slideId, index, newCustomHeightImage) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "image" && i === index
                ? { ...element, customHeightImage: newCustomHeightImage }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update custom height image px
  const updateCustomHeightImagePx = (
    slideId,
    index,
    newCustomHeightImagePx
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "image" && i === index
                ? { ...element, customHeightImagePx: newCustomHeightImagePx }
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

  // Update border size image
  const updateSlideBackgroundBorderSizeImage = (
    slideId,
    index,
    newSizeBorderImage
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "image" && i === index
                ? { ...element, backgroundBorderSizeImage: newSizeBorderImage }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update border radius image
  const updateSlideBackgroundBorderRadiusImage = (
    slideId,
    index,
    newRadiusImage
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "image" && i === index
                ? { ...element, backgroundBorderRadiusImage: newRadiusImage }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update padding image
  const updatePaddingImage = (slideId, index, newPaddingImage) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "image" && i === index
                ? { ...element, paddingImage: newPaddingImage }
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

  // Update Rotate
  const updateRotateImage = (slideId, index, rotateImage) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "image" && i === index
                ? { ...element, rotateImage: rotateImage }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Opacity
  const updateOpacityImage = (slideId, index, opacityImage) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "image" && i === index
                ? { ...element, opacityImage: opacityImage }
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

  // Parallax image x
  const updateParallaxImage = (slideId, index, newParallaxImage) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "image" && i === index
                ? { ...element, parallaxImage: newParallaxImage }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Parallax image y
  const updateParallaxImageY = (slideId, index, newParallaxImageY) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "image" && i === index
                ? { ...element, parallaxImageY: newParallaxImageY }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Parallax image scale
  const updateParallaxImageScale = (slideId, index, newParallaxImageScale) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "image" && i === index
                ? { ...element, parallaxImageScale: newParallaxImageScale }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Parallax image opacity
  const updateParallaxImageOpacity = (
    slideId,
    index,
    newParallaxImageOpacity
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "image" && i === index
                ? { ...element, parallaxImageOpacity: newParallaxImageOpacity }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Parallax image duration
  const updateParallaxImageDuration = (
    slideId,
    index,
    newParallaxImageDuration
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "image" && i === index
                ? {
                    ...element,
                    parallaxImageDuration: newParallaxImageDuration,
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
      <div className="divider-controls"></div>
      <div className="title-block-added">
        <div className="title-element">
          <Button
            onClick={() => removeSlideImage(slide.id, elementIndex)}
            isDestructive
            icon={trash}
            label={__("Remove Image", "cocoblocks")}
            className="button-remove-element"
            style={{
              position: "absolute",
              right: "80px",
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
          <h2>{__("Image", "slider")}</h2>
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
                              <div>{__("Upload Image", "cocoblocks")}</div>
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
                            label={__("Change Image", "cocoblocks")}
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
          {element.url && (
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
                    value={element.alt || ""}
                    onChange={(newAlt) =>
                      updateSlideImage(
                        slide.id,
                        elementIndex,
                        element.url,
                        newAlt
                      )
                    }
                    placeholder={__("Add alt text...", "cocoblocks")}
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
          {element.url && (
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
                    value={element.fit}
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
                      updateSlideImageFit(slide.id, elementIndex, newFit)
                    }
                  />
                </div>
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
                    value={element.widthImage}
                    onChange={(newWidthImage) =>
                      updateWidthImage(slide.id, elementIndex, newWidthImage)
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
                {element.widthImage === "relative" && (
                  <div className="custom-select">
                    <RangeControl
                      label={__("Custom width (%)", "cocoblocks")}
                      value={element.customWidthImage}
                      onChange={(newCustomWidthImage) =>
                        updateCustomWidthImage(
                          slide.id,
                          elementIndex,
                          newCustomWidthImage
                        )
                      }
                      min={0}
                      max={100}
                      step={1}
                    />
                  </div>
                )}
                {element.widthImage === "fixed" && (
                  <div className="custom-select">
                    <RangeControl
                      label={__("Custom width (px)", "cocoblocks")}
                      value={element.customWidthImagePx}
                      onChange={(newCustomWidthImagePx) =>
                        updateCustomWidthImagePx(
                          slide.id,
                          elementIndex,
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
                    value={element.heightImage}
                    onChange={(newHeightImage) =>
                      updateHeightImage(slide.id, elementIndex, newHeightImage)
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
                {element.heightImage === "relative" && (
                  <div className="custom-select">
                    <RangeControl
                      label={__("Custom height (%)", "cocoblocks")}
                      value={element.customHeightImage}
                      onChange={(newCustomHeightImage) =>
                        updateCustomHeightImage(
                          slide.id,
                          elementIndex,
                          newCustomHeightImage
                        )
                      }
                      min={0}
                      max={100}
                      step={1}
                    />
                  </div>
                )}
                {element.heightImage === "fixed" && (
                  <div className="custom-select">
                    <RangeControl
                      label={__("Custom height (px)", "cocoblocks")}
                      value={element.customHeightImagePx}
                      onChange={(newCustomHeightImagePx) =>
                        updateCustomHeightImagePx(
                          slide.id,
                          elementIndex,
                          newCustomHeightImagePx
                        )
                      }
                      min={0}
                      max={1920}
                      step={1}
                    />
                  </div>
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
                value={element.paddingImage}
                onChange={(newPaddingImage) =>
                  updatePaddingImage(slide.id, elementIndex, newPaddingImage)
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
                values={element.marginImage}
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
                value={element.backgroundBorderSizeImage}
                onChange={(newSizeBorderImage) =>
                  updateSlideBackgroundBorderSizeImage(
                    slide.id,
                    elementIndex,
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
                value={element.backgroundBorderRadiusImage}
                onChange={(newRadiusImage) =>
                  updateSlideBackgroundBorderRadiusImage(
                    slide.id,
                    elementIndex,
                    newRadiusImage
                  )
                }
                min={0}
                max={256}
                step={1}
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
                value={element.rotateImage}
                onChange={(rotateImage) =>
                  updateRotateImage(slide.id, elementIndex, rotateImage)
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
                value={element.opacityImage}
                onChange={(opacityImage) =>
                  updateOpacityImage(slide.id, elementIndex, opacityImage)
                }
                min={0}
                max={1}
                step={0.1}
              />
            </div>
          </div>
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
                    value: "",
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
                    value={element.parallaxImage}
                    onChange={(newParallaxImage) =>
                      updateParallaxImage(
                        slide.id,
                        elementIndex,
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
                    value={element.parallaxImageY}
                    onChange={(newParallaxImageY) =>
                      updateParallaxImageY(
                        slide.id,
                        elementIndex,
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
                    value={element.parallaxImageScale}
                    onChange={(newParallaxImageScale) =>
                      updateParallaxImageScale(
                        slide.id,
                        elementIndex,
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
                    value={element.parallaxImageOpacity}
                    onChange={(newParallaxImageOpacity) =>
                      updateParallaxImageOpacity(
                        slide.id,
                        elementIndex,
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
                    value={element.parallaxImageDuration}
                    onChange={(newParallaxImageDuration) =>
                      updateParallaxImageDuration(
                        slide.id,
                        elementIndex,
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

export default ImageControls;
