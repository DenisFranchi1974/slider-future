import { __ } from "@wordpress/i18n";
import {
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
import {
  SelectControl,
  Button,
  PanelBody,
  Icon,
  TabPanel,
  DropdownMenu,
  RangeControl,
  FocalPointPicker,
  Tooltip,
} from "@wordpress/components";
import { trash, replace, addTemplate, border } from "@wordpress/icons";
import React, { useRef, useEffect } from "react";
import { useState } from "@wordpress/element";
import "./editor.scss";
import '../slider/editor.scss';
import SectionSelectorSlide from "./sectionSelectorSlide";
import TextControls from "./TextControls";
import ImageControls from "./imageControls";
import DivControls from "./divControls";
import ColorOptionsPanel from "./colorPanel";
import ColorOptionsPanelGradient from "./colorPanelGradient";
import AlignmentControl from "./aligncontrol";

const SlideControls = ({
  slide,
  element,
  elementIndex,
  slides,
  setAttributes,
  setActiveSectionImage,
  activeSectionImage,
  parallax,
  attributes,
}) => {
  const { device, backgroundColorSlideDefault, textColorDefault, backgroundColorBlockDefault, } = attributes;

  // Panel Slide
  const [selectedPanel, setSelectedPanel] = useState(null);
  const [primaryColor, setPrimaryColor] = useState("");
  const swiperRef = useRef(null); // Riferimento a Swiper

  useEffect(() => {
    // Recupera il valore della variabile CSS --primary-color
    const root = document.querySelector(":root");
    const color = getComputedStyle(root).getPropertyValue("--primary-color");
    setPrimaryColor(color.trim());
  }, []);

  const handlePanelSelect = (panelId) => {
    setSelectedPanel((prevPanel) => (prevPanel === panelId ? null : panelId));
    // Trova l'indice della slide corrispondente
    const slideIndex = slides.findIndex((slide) => slide.id === panelId);
    if (swiperRef.current && slideIndex !== -1) {
      swiperRef.current.swiper.slideTo(slideIndex); // Naviga alla slide
    }
  };

  const renderCircle = (panelId) => {
    const isSelected = selectedPanel === panelId;
    const circleStyle = {
      display: "inline-block",
      width: "12px",
      height: "12px",
      borderRadius: "3px",
      border: `2px solid ${primaryColor}`,
      backgroundColor: isSelected ? primaryColor : "transparent",
      marginRight: "8px",
      transition: "transform 0.3s, background-color 0.3s",
      transform: isSelected ? "scale(1.2)" : "scale(1)",
    };

    return <span style={circleStyle}></span>;
  };

  // Section slide
  const [activeSection, setActiveSection] = useState("content");
  // Section slides
  const [activeSectionSlide, setActiveSectionSlide] = useState("background");

  // Section Block
  const [activeSectionBlock, setActiveSectionBlock] = useState("content");

  // Responsive
  const [showOtherButtons, setShowOtherButtons] = useState(false);

  const handleDesktopClick = () => {
    setAttributes({ device: "desktop" });
    setShowOtherButtons(!showOtherButtons); // Toggle the visibility of other buttons
  };

  const handleTabletClick = () => {
    setAttributes({ device: "tablet" });
    setShowOtherButtons(!showOtherButtons); // Toggle the visibility of other buttons
  };

  const handleMobileClick = () => {
    setAttributes({ device: "mobile" });
    setShowOtherButtons(!showOtherButtons); // Toggle the visibility of other buttons
  };

  // Stato per gestire la visibilità del dialogo di conferma
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState(null);

  // Funzione per aprire il dialogo di conferma
  const openConfirmationDialog = (slide) => {
    setSelectedSlide(slide);
    setIsDialogOpen(true);
  };

  // Funzione per confermare l'applicazione delle impostazioni
  const confirmApplySettings = () => {
    applySettingsToExistingSlides(selectedSlide);
    setIsDialogOpen(false);
  };

  // Funzione per annullare l'applicazione delle impostazioni
  const cancelApplySettings = () => {
    setIsDialogOpen(false);
  };

  // Default Slide

  // Stato per memorizzare le impostazioni correnti
  const [currentSettings, setCurrentSettings] = useState({
    layout: "vertical",
    gapItems: 5,
    position: "center",
    backgroundBorderColor: "#000000",
    backgroundBorderSize: 1,
    backgroundBorderRadius: 0,
    backgroundVerticalPadding: 0,
    backgroundHorizontalPadding: 0,
  });

  // Funzione per aggiornare le impostazioni correnti
  const updateSlideSettings = (key, value) => {
    setCurrentSettings((prev) => ({ ...prev, [key]: value }));
  };

  // Funzione per applicare le impostazioni a tutte le slide esistenti
  const applySettingsToExistingSlides = (slideSettings) => {
    // Aggiorna currentSettings con i valori della slide corrente
    setCurrentSettings(slideSettings);

    const updatedSlides = slides.map((slide) => ({
      ...slide,
      layout: slideSettings.layout,
      gapItems: slideSettings.gapItems,
      position: slideSettings.position,
      backgroundBorderColor: slideSettings.backgroundBorderColor,
      backgroundBorderSize: slideSettings.backgroundBorderSize,
      backgroundBorderRadius: slideSettings.backgroundBorderRadius,
      backgroundVerticalPadding: slideSettings.backgroundVerticalPadding,
      backgroundHorizontalPadding: slideSettings.backgroundHorizontalPadding,
    }));

    setAttributes({ slides: updatedSlides });
  };

  // Movimentazione elementi

  // Move Element Up
  const moveElementUp = (slideId, index) => {
    const updatedSlides = slides.map((slide) => {
      if (slide.id === slideId && index > 0) {
        const elements = [...slide.elements];
        const temp = elements[index - 1];
        elements[index - 1] = elements[index];
        elements[index] = temp;
        return { ...slide, elements };
      }
      return slide;
    });
    setAttributes({ slides: updatedSlides });
  };
  // Move Elemet Down
  const moveElementDown = (slideId, index) => {
    const updatedSlides = slides.map((slide) => {
      if (slide.id === slideId && index < slide.elements.length - 1) {
        const elements = [...slide.elements];
        const temp = elements[index + 1];
        elements[index + 1] = elements[index];
        elements[index] = temp;
        return { ...slide, elements };
      }
      return slide;
    });
    setAttributes({ slides: updatedSlides });
  };

  // Add Slide
  const addSlide = () => {
    const newSlide = {
      id: slides.length + 1,
      elements: [], // Inizializza elements come un array vuoto
      layout: "vertical",
      gapItems: 5,
      position: "center-center",
      backgroundType: "color",
      backgroundColor: backgroundColorSlideDefault,
      backgroundBorderColor: "#000000",
      backgroundBorderSize: 0,
      backgroundBorderRadius: 0,
      backgroundVerticalPadding: 0,
      backgroundHorizontalPadding: 0,
      borderStyleSlide: "none",
    };
    const updatedSlides = [...slides, newSlide];
    setAttributes({ slides: updatedSlides });
  };
  // Inizializza lo stato delle slide con una slide predefinita se non ci sono slide
  useEffect(() => {
    if (slides.length === 0) {
      addSlide();
    }
  }, []);

  // Remove Slide
  const removeSlide = (id) => {
    const updatedSlides = slides.filter((slide) => slide.id !== id);
    setAttributes({ slides: updatedSlides });
  };

  // Clone Slide
  const cloneSlide = (slideToClone) => {
    const newSlide = { ...slideToClone, id: slides.length + 1 };
    const updatedSlides = [...slides, newSlide];
    setAttributes({ slides: updatedSlides });
  };

  // Background Slide
  const [backgroundType, setBackgroundType] = useState("");

  // Update background type
  const updateSlideBackgroundType = (id, type) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === id ? { ...slide, backgroundType: type } : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Funzione per aggiornare il colore di sfondo
  const updateSlideBackgroundColor = (id, color) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === id
        ? { ...slide, backgroundColor: color, backgroundType: "color" }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Funzione per aggiornare il gradiente di sfondo
  const updateSlideBackgroundGradient = (id, gradient) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === id
        ? { ...slide, backgroundGradient: gradient, backgroundType: "gradient" }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Image
  const updateSlideBackgroundImage = (id, newImage) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === id ? { ...slide, backgroundImage: newImage } : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Video
  const updateSlideBackgroundVideo = (id, videoUrl) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === id ? { ...slide, backgroundVideo: videoUrl } : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Position image
  const handleFocalPointChange = (slideId, newFocalPoint) => {
    setAttributes({
      slides: slides.map((slide) =>
        slide.id === slideId ? { ...slide, focalPoint: newFocalPoint } : slide
      ),
    });
  };

  // Update Fit Image
  const updateSlideFit = (slideId, newFit) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId ? { ...slide, fit: newFit } : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Layout
  const updateSlideLayout = (slideId, newLayout) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId ? { ...slide, layout: newLayout } : slide
    );
    setAttributes({ slides: updatedSlides });
  };
  // Update Position
  const updateSlidePosition = (slideId, newPosition) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId ? { ...slide, position: newPosition } : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Gap Items
  const updateSlideGapItems = (slideId, newGapItems) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId ? { ...slide, gapItems: newGapItems } : slide
    );
    setAttributes({ slides: updatedSlides });
  };

// Update border style
  const updateBorderStyleSlide = (slideId, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId ? { ...slide, borderStyleSlide: value } : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Border Color
  const updateSlideBackgroundBorderColor = (id, color) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === id ? { ...slide, backgroundBorderColor: color } : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update border size
  const updateSlideBackgroundBorderSize = (slideId, newSize) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId ? { ...slide, backgroundBorderSize: newSize } : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update border radius
  const updateSlideBackgroundBorderRadius = (slideId, newRadius) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? { ...slide, backgroundBorderRadius: newRadius }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update vertical padding
  const updateSlideBackgroundVerticalPadding = (
    slideId,
    newVerticalPadding
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? { ...slide, backgroundVerticalPadding: newVerticalPadding }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update horizontal padding
  const updateSlideBackgroundHorizontalPadding = (
    slideId,
    newHorizontalPadding
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? { ...slide, backgroundHorizontalPadding: newHorizontalPadding }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Add Text
  const addSlideTitle = (slideId) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: [
              ...(slide.elements || []),
              {
                type: "title",
                text: __("Text Slide", "cocoblocks"),
                textAlign: "center",
                fontStyle: {
                  italic: false,
                  underline: false,
                  bold: false,
                },
                fontWeight: 400,
                letterSpacing: 0,
                widthTitle: "auto",
                widthCustomTitle: 100,
                fontSize: 22,
                fontSizeTablet: 16,
                fontSizeMobile: 16,
                lineHeight: 1.5,
                textColor: textColorDefault,
                marginTitle: {
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                },
                paddingTitle: {
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                },
                borderStyle: "none",
                fontFamily: "Arial",
                parallaxTitle: 0,
                parallaxTitleY: 0,
                parallaxTitleScale: 1,
                parallaxTitleOpacity: 1,
                parallaxTitleDuration: 100,
                elementTitle: "h3",
                opacity: 1,
                rotate: 0,
                animation: "none",
                width: "auto",
                widthCustomTitle: 100,
                backgroundBorderRadius: 0,
                backgroundBorderSize: 0,
                backgroundBorderColor: "",
                textWriteMode: "initial",
                textOrientation: "initial",
                durationEffect: 1,
                delayEffect: 0,
                durationEffectOdd: 1,
                durationEffectEven: 1,
                speedEffect: 1,
                pauseEffect: 0,
                animationCount: 1,
                widthCursor: 2,
                animationCursor: "none",
                colorCursor: "#000000",
                gradinetColorOne: "#000000",
                gradinetColorTwo: "#000000",
                gradinetColorThree: "#000000",
                gradinetColorFour: "#000000",
                gradinetColorFive: "#000000",
                decoration: "none",
                underlineColor: "#000000",
                underlinePadding: 0,
                underlineVertical: 0,
                underlineHorizontal: 0,
                underlineWidth: 1,
                underlineHeight: 1,
                underlineAnimation: "none",
                underlineAnimationFrom: 0,
                underlineAnimationTo: 0,
                underlineFromSizeNew: 0,
                underlineToSizeNew: 0,
                underlineAnimationTransition: 0,
                textLink: "none",
                linkUrl: "",
                linkTarget: "_self",
                linkRel: "",
                scrollToId: "",
                enableDesktopTitle: true,
                enableTabletTitle: true,
                enableMobileTitle: true,
                textColorHover: textColorDefault,
                borderStyleHover: "none",
                backgroundBorderColorHover: "",
                opacityHover: 1,
                rotateHover: 0,
                animationHover: "none",
                durationEffectHover: 1,
                effectHoverColorHover: textColorDefault,
                translateEffectHover: 0,
                colorShadow: "",
                boxShadowX: 0,
                boxShadowY: 0,
                boxShadowBlur: 0,
                boxShadowSpread: 0,
                interation: "forwards",
              },
            ],
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Add Image
  const addSlideImage = (slideId) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: [
              ...(slide.elements || []),
              {
                type: "image",
                url: "",
                alt: "",
                fit: "cover",
                widthImage: "fixed",
                customWidthImage: false,
                widthImageContent: "auto",
                customWidthImagePx: 200,
                heightImage: "fixed",
                customHeightImage: false,
                customHeightImagePx: 200,
                backgroundBorderColorImage: "",
                backgroundBorderSizeImage: 0,
                backgroundBorderRadiusImage: 0,
                backgroundColorImage: "",
                paddingImage: 0,
                borderStyleImage: "none",
                backgroundBorderColorImage: "",
                backgroundBorderSizeImage: 0,
                backgroundBorderRadiusImage: 0,
                rotateImage: 0,
                opacityImage: 1,
                parallaxImage: 0,
                parallaxImageY: 0,
                parallaxImageScale: 1,
                parallaxImageOpacity: 1,
                marginImage: {
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                },
                blobMask: false,
                animationImage: "none",
                durationEffectImage: 1,
                animationImageMoving: "none",
                durationEffectImageMoving: 1,
                translateEffectImageMoving: 0,
                spikeMask: 0,
                spikeLeftWidth: 0,
                spikeMaskRight: "none",
                spikeRightWidth: 0,
                imageFilter: "none",
                imageLink: "none",
                linkUrlImage: "",
                linkTargetImage: "_self",
                linkRelImage: "",
                scrollToIdImage: "",
                enableDesktopImage: true,
                enableTabletImage: true,
                enableMobileImage: true,
                imageColorHover: "",
                borderStyleHoverImage: "none",
                backgroundBorderColorHoverImage: "",
                opacityHoverImage: 1,
                rotateHoverImage: 0,
                animationImageMovingHover: "none",
                durationEffectImageMovingHover: 1,
                translateEffectImageMovingHover: 0,
                animationHoverImage: "none",
                durationEffectHoverImage: 1,
                effectHoverColorHoverImage: "",
                translateEffectHoverImage: 0,
                colorShadowImage: "",
                boxShadowXImage: 0,
                boxShadowYImage: 0,
                boxShadowBlurImage: 0,
                boxShadowSpreadImage: 0,
                parallaxImage: 0,
                parallaxImageY: 0,
                parallaxImageScale: 1,
                parallaxImageOpacity: 1,
                parallaxImageDuration: 100,
                interationImage: "forwards",
              },
            ],
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

    // Add Div
    const addSlideDiv = (slideId) => {
        const updatedSlides = slides.map((slide) =>
          slide.id === slideId
            ? {
                ...slide,
                elements: [
                  ...slide.elements,
                  {
                    type: "div",
                    content: "",
                    layoutDiv: "vertical",
                    gapItemsDiv: 5,
                    positionDiv: "center-center",
                    contentWidthDiv: "auto",
                    customContentWidthDiv: 100,
                    contentHeightDiv: "auto",
                    customContentHeightDiv: 100,
                    elementDiv: "div",
                    backgroundVerticalPaddingDiv: 0,
                    backgroundHorizontalPaddingDiv: 0,
                    marginDiv: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                      },
                    borderStyleDiv: "none",
                    backgroundBorderColorDiv: "",
                    backgroundBorderSizeDiv: 0,
                    backgroundBorderRadiusDiv: 0,
                    rotateDiv: 0,
                    opacityDiv: 1,
                    animationDiv: "none",
                    durationEffectDiv: 1,
                    interationDiv: "forwards",
                    boxShadowX: 0,
                    boxShadowY: 0,
                    boxShadowBlur: 0,
                    boxShadowSpread: 0,
                    colorShadow: "",
                    backgroundColor: backgroundColorBlockDefault,
                    imageUrl: "",
                    innerDivs: [],
                    divColorHover: "#ffffff",
                    borderStyleHoverDiv: "none",
                    backgroundBorderColorHoverDiv: "",
                    opacityHoverDiv: 1,
                    rotateHoverDiv: 0,
                    animationHoverDiv: "none",
                    durationEffectHoverDiv: 1,
                    effectHoverColorHoverDiv: "",
                    translateEffectHoverDiv: 0,
                    textLinkDiv: "none",
                    linkUrlDiv: "",
                    linkTargetDiv: "_self",
                    linkRelDiv: "",
                    scrollToIdDiv: "",
                    enableDesktopDiv: true,
                    enableTabletDiv: true,
                    enableMobileDiv: true,
                    parallaxDiv: 0,
                    parallaxDivY: 0,
                    parallaxDivScale: 1,
                    parallaxDivOpacity: 1,
                    parallaxDivDuration: 100,
                  },
                ],
              }
            : slide
        );
        setAttributes({ slides: updatedSlides });
      };
    

  return (
    <>
      <div className="content-subdescription-section-slider">
        <h2>{__("Content Options")}</h2>
      </div>
      {slides.map((slide, index) => (
        <PanelBody
          key={index}
          className="cocoblocks-panel panel-slide"
          title={
            <>
              {renderCircle(slide.id)} {__("Slide", "cocoblocks")} {index + 1}
              <div
                onClick={(event) => {
                  event.stopPropagation();
                }}
              >
                <DropdownMenu
                  icon="ellipsis"
                  label={__("Slide Options", "slider")}
                  className="menu-slide-content"
                  controls={[
                    {
                      icon: "trash",
                      title: __("Delete", "slider"),
                      onClick: () => removeSlide(slide.id),
                    },
                    {
                      icon: "admin-page",
                      title: __("Clone", "slider"),
                      onClick: () => cloneSlide(slide),
                    },
                  ]}
                />
              </div>
            </>
          }
          onToggle={() => handlePanelSelect(slide.id)}
          initialOpen={false}
        >
          <SectionSelectorSlide onSectionChange={setActiveSectionSlide} />
          {activeSectionSlide === "background" && (
            <>
              <div className="content-title-custom-panel intermedy">
                <h2 className="title-custom-panel">
                  {__("Background", "cocoblocks")}
                </h2>
              </div>
              <div
                className="content_slide"
                style={{ paddingTop: "0", paddingBottom: "0" }}
              >
                <div className="content-section-panel" style={{ padding: "0" }}>
                  <div className="custom-select">
                    <div className="title-tab-background">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e8eaed"
                      >
                        <path d="M680-640q-17 0-28.5-11.5T640-680q0-17 11.5-28.5T680-720q17 0 28.5 11.5T720-680q0 17-11.5 28.5T680-640ZM360-400l108-140 62 80 92-120 138 180H360ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm80-505v-215q0-33 23.5-56.5T320-880h200v80H320v215h-80Zm80 345q-33 0-56.5-23.5T240-320v-185h80v185h200v80H320Zm280 0v-80h200v-185h80v185q0 33-23.5 56.5T800-240H600Zm200-345v-215H600v-80h200q33 0 56.5 23.5T880-800v215h-80Z" />
                      </svg>
                      <h2
                        className="title-tab"
                        style={{ marginBottom: "12px" }}
                      >
                        {__("Choose the backgrounds", "slider")}
                      </h2>
                    </div>
                    <TabPanel
                      className="background-selector"
                      activeClass="active-tab"
                      initialTabName={slide.backgroundType}
                      onSelect={(tabName) => {
                        setBackgroundType(tabName);
                        updateSlideBackgroundType(slide.id, tabName);
                      }}
                      tabs={[
                        {
                          name: "color",
                          title: <span>{__("Color", "your-text-domain")}</span>,
                        },
                        {
                          name: "gradient",
                          title: (
                            <span>{__("Gradient", "your-text-domain")}</span>
                          ),
                        },
                        {
                          name: "image",
                          title: <span>{__("Image", "your-text-domain")}</span>,
                        },
                        {
                          name: "video",
                          title: <span>{__("Video", "your-text-domain")}</span>,
                        },
                      ]}
                    >
                      {(tab) => (
                        <>
                          {tab.name === "color" && (
                            <div
                              className="custom-select color"
                              style={{
                                marginTop: "6px",
                                paddingLeft: "6px",
                                marginRight: "-6px",
                              }}
                            >
                              <ColorOptionsPanel
                                colorNormal={slide.backgroundColor}
                                setColorNormal={(color) =>
                                  updateSlideBackgroundColor(slide.id, color)
                                }
                                buttonIcon={
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="24px"
                                    viewBox="0 -960 960 960"
                                    width="24px"
                                    fill="#e8eaed"
                                    style={{ marginBottom: "-4px" }}
                                  >
                                    <path d="M346-140 100-386q-10-10-15-22t-5-25q0-13 5-25t15-22l230-229-106-106 62-65 400 400q10 10 14.5 22t4.5 25q0 13-4.5 25T686-386L440-140q-10 10-22 15t-25 5q-13 0-25-5t-22-15Zm47-506L179-432h428L393-646Zm399 526q-36 0-61-25.5T706-208q0-27 13.5-51t30.5-47l42-54 44 54q16 23 30 47t14 51q0 37-26 62.5T792-120Z" />
                                  </svg>
                                }
                              />
                            </div>
                          )}
                          {tab.name === "gradient" && (
                            <div
                              className="custom-select color"
                              style={{
                                marginTop: "6px",
                                paddingLeft: "6px",
                                marginRight: "-6px",
                              }}
                            >
                              <ColorOptionsPanelGradient
                                gradient={slide.backgroundGradient}
                                setGradient={(gradient) =>
                                  updateSlideBackgroundGradient(
                                    slide.id,
                                    gradient
                                  )
                                }
                                buttonIcon={
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="24px"
                                    viewBox="0 -960 960 960"
                                    width="24px"
                                    fill="#e8eaed"
                                    style={{ marginBottom: "-4px" }}
                                  >
                                    <path d="M440-440v-80h80v80h-80Zm-80 80v-80h80v80h-80Zm160 0v-80h80v80h-80Zm80-80v-80h80v80h-80Zm-320 0v-80h80v80h-80Zm-80 320q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm80-80h80v-80h-80v80Zm160 0h80v-80h-80v80Zm320 0v-80 80Zm-560-80h80v-80h80v80h80v-80h80v80h80v-80h80v80h80v-80h-80v-80h80v-320H200v320h80v80h-80v80Zm0 80v-560 560Zm560-240v80-80ZM600-280v80h80v-80h-80Z" />
                                  </svg>
                                }
                              />
                            </div>
                          )}

                          {tab.name === "image" && (
                            <div
                              className="content-img-upload"
                              style={{ marginTop: "6px" }}
                            >
                              <MediaUploadCheck>
                                <MediaUpload
                                  onSelect={(media) =>
                                    updateSlideBackgroundImage(
                                      slide.id,
                                      media.url
                                    )
                                  }
                                  allowedTypes={["image"]}
                                  render={({ open }) => (
                                    <>
                                      {!slide.backgroundImage && (
                                        <Button
                                          onClick={open}
                                          style={{
                                            width: "100%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            paddingLeft: "1px",
                                            paddingRight: "0px",
                                            color: " var(--light-color)",
                                            padding: "3px",
                                          }}
                                        >
                                          <div
                                            style={{
                                              display: "flex",
                                              alignItems: "center",
                                            }}
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              height="24px"
                                              viewBox="0 -960 960 960"
                                              width="24px"
                                              fill="#e8eaed"
                                              style={{
                                                marginRight: "5px",
                                                fill: " var(--light-color)",
                                                width: "18px",
                                                height: "18px",
                                              }}
                                            >
                                              <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z" />
                                            </svg>
                                            {__(
                                              "Select Background Image",
                                              "cocoblocks"
                                            )}
                                          </div>
                                          <span
                                            class="dashicons dashicons-arrow-down-alt2"
                                            style={{
                                              position: "relative",
                                              right: "0px",
                                              top: "4px",
                                              fontSize: "12px",
                                            }}
                                          ></span>
                                        </Button>
                                      )}
                                      {slide.backgroundImage && (
                                        <>
                                          <div
                                            style={{
                                              position: "relative",
                                              padding: "0px 4px",
                                              marginTop: "12px",
                                            }}
                                          >
                                            <FocalPointPicker
                                              className="focal-point-picker"
                                              value={
                                                slide.focalPoint || {
                                                  x: 0.5,
                                                  y: 0.5,
                                                }
                                              }
                                              onChange={(newFocalPoint) =>
                                                handleFocalPointChange(
                                                  slide.id,
                                                  newFocalPoint
                                                )
                                              }
                                              url={slide.backgroundImage}
                                            />
                                          </div>
                                          <div className="custom-select select-control-label-right">
                                            <SelectControl
                                              label={__(
                                                "Image fit",
                                                "cocoblocks"
                                              )}
                                              value={slide.fit}
                                              options={[
                                                {
                                                  label: __("Cover", "slider"),
                                                  value: "cover",
                                                },
                                                {
                                                  label: __("Auto", "slider"),
                                                  value: "auto",
                                                },
                                              ]}
                                              onChange={(newFit) =>
                                                updateSlideFit(slide.id, newFit)
                                              }
                                            />
                                          </div>
                                          <Button
                                            onClick={open}
                                            style={{
                                              marginLeft: "2px",
                                              position: "relative",
                                              top: "-2px",
                                              color: " var(--light-color)",
                                              padding: "3px",
                                            }}
                                            className="button-replace"
                                            icon={replace}
                                            label={__(
                                              "Change Background Image",
                                              "cocoblocks"
                                            )}
                                          ></Button>
                                        </>
                                      )}
                                    </>
                                  )}
                                />
                              </MediaUploadCheck>
                              {slide.backgroundImage && (
                                <Button
                                  className="button-delete"
                                  onClick={() =>
                                    updateSlideBackgroundImage(slide.id, null)
                                  }
                                  isDestructive
                                  icon={trash}
                                  label={__("Delete Image", "wp-kube")}
                                ></Button>
                              )}
                            </div>
                          )}

                          {tab.name === "video" && (
                            <div
                              className="content-img-upload"
                              style={{ marginTop: "6px" }}
                            >
                              <MediaUploadCheck>
                                <MediaUpload
                                  onSelect={(media) =>
                                    updateSlideBackgroundVideo(
                                      slide.id,
                                      media.url
                                    )
                                  }
                                  allowedTypes={["video"]}
                                  render={({ open }) => (
                                    <>
                                      {!slide.backgroundVideo && (
                                        <Button
                                          onClick={open}
                                          style={{
                                            width: "100%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            paddingLeft: "1px",
                                            paddingRight: "0px",
                                            color: " var(--light-color)",
                                            padding: "3px",
                                          }}
                                        >
                                          <div
                                            style={{
                                              display: "flex",
                                              alignItems: "center",
                                            }}
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              height="24px"
                                              viewBox="0 -960 960 960"
                                              width="24px"
                                              fill="#e8eaed"
                                              style={{
                                                marginRight: "5px",
                                                fill: " var(--light-color)",
                                                width: "18px",
                                                height: "18px",
                                              }}
                                            >
                                              <path d="m380-300 280-180-280-180v360ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z" />
                                            </svg>
                                            {__(
                                              "Select Background Video",
                                              "cocoblocks"
                                            )}
                                          </div>
                                          <span
                                            class="dashicons dashicons-arrow-down-alt2"
                                            style={{
                                              position: "relative",
                                              right: "0px",
                                              top: "4px",
                                              fontSize: "12px",
                                            }}
                                          ></span>
                                        </Button>
                                      )}
                                      {slide.backgroundVideo && (
                                        <>
                                          <div
                                            style={{
                                              position: "relative",
                                              padding: "0px 4px",
                                              marginTop: "12px",
                                            }}
                                          >
                                            <FocalPointPicker
                                              className="focal-point-picker"
                                              value={
                                                slide.focalPoint || {
                                                  x: 0.5,
                                                  y: 0.5,
                                                }
                                              }
                                              onChange={(newFocalPoint) =>
                                                handleFocalPointChange(
                                                  slide.id,
                                                  newFocalPoint
                                                )
                                              }
                                              url={slide.backgroundVideo}
                                            />
                                          </div>
                                          <Button
                                            onClick={open}
                                            style={{
                                              marginLeft: "2px",
                                              color: " var(--light-color)",
                                              padding: "3px",
                                            }}
                                            icon={replace}
                                            label={__(
                                              "Change Background Video",
                                              "cocoblocks"
                                            )}
                                          ></Button>
                                        </>
                                      )}
                                    </>
                                  )}
                                />
                              </MediaUploadCheck>
                              {slide.backgroundVideo && (
                                <Button
                                  className="button-delete"
                                  onClick={() =>
                                    updateSlideBackgroundVideo(slide.id, null)
                                  }
                                  isDestructive
                                  icon={trash}
                                  label={__("Delete Video", "wp-kube")}
                                ></Button>
                              )}
                            </div>
                          )}
                        </>
                      )}
                    </TabPanel>
                  </div>
                </div>
              </div>
            </>
          )}
          {activeSectionSlide === "layout" && (
            <>
              <div className="content-title-custom-panel intermedy">
                <h2 className="title-custom-panel">
                  {__("Layout", "cocoblocks")}
                </h2>
              </div>
              <div
                className="content-section-panel"
                style={{ paddingTop: "0", paddingBottom: "0" }}
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
                          <path d="M120-520v-320h320v320H120Zm0 400v-320h320v320H120Zm400-400v-320h320v320H520Zm0 400v-320h320v320H520ZM200-600h160v-160H200v160Zm400 0h160v-160H600v160Zm0 400h160v-160H600v160Zm-400 0h160v-160H200v160Zm400-400Zm0 240Zm-240 0Zm0-240Z" />
                        </svg>
                        {__("Content direction", "cocoblocks")}
                      </>
                    }
                    value={slide.layout}
                    options={[
                      {
                        label: __("Column", "slider"),
                        value: "vertical",
                      },
                      {
                        label: __("Row", "slider"),
                        value: "horizontal",
                      },
                    ]}
                    onChange={(newLayout) =>
                      updateSlideLayout(slide.id, newLayout)
                    }
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
                          <path d="M800-80v-200H680v-400h120v-200h80v800h-80ZM80-80v-800h80v200h120v400H160v200H80Z" />
                        </svg>
                        {__("Gap between items", "cocoblocks")}
                      </>
                    }
                    value={slide.gapItems}
                    onChange={(newGapItems) =>
                      updateSlideGapItems(slide.id, newGapItems)
                    }
                    min={0}
                    max={256}
                    step={1}
                  />
                </div>
                <div className="custom-select">
                  <AlignmentControl
                    value={slide.position}
                    onChange={(newPosition) =>
                      updateSlidePosition(slide.id, newPosition)
                    }
                  />
                </div>
              </div>
            </>
          )}

          {activeSectionSlide === "style" && (
            <>
              <div className="content-title-custom-panel intermedy">
                <h2 className="title-custom-panel">
                  {__("Spacing", "cocoblocks")}
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
                          style={{ marginRight: "2px" }}
                        >
                          <path d="M192-744v-72h576v72H192Zm252 600v-390L339-429l-51-51 192-192 192 192-51 51-105-105v390h-72Z" />
                        </svg>
                        {__("Content vertical padding", "cocoblocks")}
                      </>
                    }
                    value={slide.backgroundVerticalPadding}
                    onChange={(newVerticalPadding) =>
                      updateSlideBackgroundVerticalPadding(
                        slide.id,
                        newVerticalPadding
                      )
                    }
                    min={0}
                    max={256}
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
                          style={{
                            marginRight: "2px",
                            transform: "rotate(90deg)",
                          }}
                        >
                          <path d="M192-744v-72h576v72H192Zm252 600v-390L339-429l-51-51 192-192 192 192-51 51-105-105v390h-72Z" />
                        </svg>
                        {__("Content horizontal padding", "cocoblocks")}
                      </>
                    }
                    value={slide.backgroundHorizontalPadding}
                    onChange={(newHorizontalPadding) =>
                      updateSlideBackgroundHorizontalPadding(
                        slide.id,
                        newHorizontalPadding
                      )
                    }
                    min={0}
                    max={256}
                    step={1}
                  />
                </div>
                <div className="custom-select">
                  <div className="button-apply-style">
                    <span class="dashicons dashicons-update"></span>
                    <p>
                      {" "}
                      {__("Apply same styles to all slides", "cocoblocks")}
                    </p>
                    <button onClick={() => openConfirmationDialog(slide)}>
                      {__("Apply", "cocoblocks")}
                    </button>
                  </div>
                  {/* Dialogo di conferma */}
                  {isDialogOpen && (
                    <div className="confirmation-dialog">
                      <p
                        className="notice components-base-control__help"
                        style={{ borderRadius: 0 }}
                      >
                        {__(
                          "Are you sure you want to apply same styles to all slides?",
                          "slider-builder"
                        )}
                      </p>
                      <div className="confirmation-buttons">
                        <button onClick={cancelApplySettings}>
                          {__("Cancel", "slider-builder")}
                        </button>
                        <button onClick={confirmApplySettings}>
                          {__("Confirm", "slider-builder")}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="content-title-custom-panel intermedy">
                <h2 className="title-custom-panel">
                  {__("Border", "cocoblocks")}
                </h2>
              </div>
              <div
                className="content-section-panel"
                style={{ paddingTop: "0", paddingBottom: "0" }}
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
                      <path d="M280-120v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80ZM120-120v-720h720v80H200v640h-80Z" />
                    </svg>
                    {__("Border style", "cocoblocks")}
                  </>
                }
                value={slide.borderStyleSlide}
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
                  updateBorderStyleSlide(slide.id, value)
                }
              />
            </div>
            {slide.borderStyleSlide !== "none" && (
                <>
                <div className="custom-select color">
                  <ColorOptionsPanel
                    colorNormal={slide.backgroundBorderColor}
                    setColorNormal={(color) =>
                      updateSlideBackgroundBorderColor(slide.id, color)
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
                          style={{ marginRight: "2px" }}
                        >
                          <path d="M144-144v-672h72v672h-72Zm150 0v-72h72v72h-72Zm0-300v-72h72v72h-72Zm0-300v-72h72v72h-72Zm150 600v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm150 600v-72h72v72h-72Zm0-300v-72h72v72h-72Zm0-300v-72h72v72h-72Zm150 600v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Z" />
                        </svg>
                        {__("Border width", "cocoblocks")}
                      </>
                    }
                    value={slide.backgroundBorderSize}
                    onChange={(newSize) =>
                      updateSlideBackgroundBorderSize(slide.id, newSize)
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
                          style={{ marginRight: "2px" }}
                        >
                          <path d="M216-216h528v-528H216v528Zm-72 72v-672h672v672H144Zm150-300v-72h72v72h-72Zm150 150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm150 150v-72h72v72h-72Z" />
                        </svg>
                        {__("Border radius", "cocoblocks")}
                      </>
                    }
                    value={slide.backgroundBorderRadius}
                    onChange={(newRadius) =>
                      updateSlideBackgroundBorderRadius(slide.id, newRadius)
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
          {/* Elements */}
          {slide.elements &&
            slide.elements.map((element, elementIndex) => (
              <div
                key={elementIndex}
                style={{
                  marginBottom: "10px",
                  alignItems: "center",
                }}
              >
                <div className="button-move">
                  <Tooltip text={__("Move before", "cocoblocks")}>
                    <Button
                      onClick={() => moveElementUp(slide.id, elementIndex)}
                      size="small"
                      disabled={elementIndex === 0}
                      label={__("Move before", "cocoblocks")}
                    >
                      ↑
                    </Button>
                  </Tooltip>
                  <Tooltip text={__("Move after", "cocoblocks")}>
                    <Button
                      onClick={() => moveElementDown(slide.id, elementIndex)}
                      size="small"
                      disabled={elementIndex === slide.elements.length - 1}
                      label={__("Move after", "cocoblocks")}
                    >
                      ↓
                    </Button>
                  </Tooltip>
                </div>
                {element.type === "title" && (
                  <>
                    <TextControls
                      slide={slide}
                      slides={slides}
                      element={element}
                      elementIndex={elementIndex}
                      setAttributes={setAttributes}
                      setActiveSection={setActiveSection}
                      activeSection={activeSection}
                      parallax={parallax}
                      device={device}
                      handleDesktopClick={handleDesktopClick}
                      handleTabletClick={handleTabletClick}
                      handleMobileClick={handleMobileClick}
                      showOtherButtons={showOtherButtons}
                      attributes={attributes}
                    />
                  </>
                )}
                {element.type === "div" && (
                  <DivControls
                    slide={slide}
                    slides={slides}
                    element={element}
                    elementIndex={elementIndex}
                    setAttributes={setAttributes}
                    setActiveSectionBlock={setActiveSectionBlock}
                    activeSectionBlock={activeSectionBlock}
                    parallax={parallax}
                    attributes={attributes}
                    device={device}
                    handleDesktopClick={handleDesktopClick}
                    handleTabletClick={handleTabletClick}
                    handleMobileClick={handleMobileClick}
                    showOtherButtons={showOtherButtons}
                  />
                )}
                {element.type === "image" && (
                  <ImageControls
                    slide={slide}
                    slides={slides}
                    element={element}
                    elementIndex={elementIndex}
                    setAttributes={setAttributes}
                    setActiveSectionImage={setActiveSectionImage}
                    activeSectionImage={activeSectionImage}
                    parallax={parallax}
                    attributes={attributes}
                  />
                )}
              </div>
            ))}
          <div className="divider-controls"></div>
          <div className="button-add-element">
            <Button
              onClick={() => addSlideTitle(slide.id)}
              label={__("Add text", "slide")}
            >
              <svg
                fill="currentcolor"
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 56 56"
              >
                <path d="M 16.2929 29.6406 C 22.7617 29.6406 28.1992 24.2266 28.1992 17.7109 C 28.1992 11.1953 22.8320 5.8047 16.2929 5.8047 C 9.7773 5.8047 4.3867 11.1953 4.3867 17.7109 C 4.3867 24.2734 9.7773 29.6406 16.2929 29.6406 Z M 33.8008 13.3750 L 49.8085 13.3750 C 50.8165 13.3750 51.6133 12.6015 51.6133 11.5937 C 51.6133 10.6094 50.8165 9.8359 49.8085 9.8359 L 33.8008 9.8359 C 32.7929 9.8359 32.0195 10.6094 32.0195 11.5937 C 32.0195 12.6015 32.7929 13.3750 33.8008 13.3750 Z M 16.3164 25.4453 C 15.4960 25.4453 14.7695 24.8828 14.7695 24.0156 L 14.7695 19.1406 L 10.2929 19.1406 C 9.4960 19.1406 8.8398 18.4844 8.8398 17.7109 C 8.8398 16.9375 9.4960 16.2812 10.2929 16.2812 L 14.7695 16.2812 L 14.7695 11.4297 C 14.7695 10.5390 15.4960 10.0000 16.3164 10.0000 C 17.1367 10.0000 17.8398 10.5390 17.8398 11.4297 L 17.8398 16.2812 L 22.3164 16.2812 C 23.1132 16.2812 23.7695 16.9375 23.7695 17.7109 C 23.7695 18.4844 23.1132 19.1406 22.3164 19.1406 L 17.8398 19.1406 L 17.8398 24.0156 C 17.8398 24.8828 17.1367 25.4453 16.3164 25.4453 Z M 33.8008 25.6563 L 49.8085 25.6563 C 50.8165 25.6563 51.6133 24.8828 51.6133 23.8750 C 51.6133 22.8906 50.8165 22.1172 49.8085 22.1172 L 33.8008 22.1172 C 32.7929 22.1172 32.0195 22.8906 32.0195 23.8750 C 32.0195 24.8828 32.7929 25.6563 33.8008 25.6563 Z M 6.1679 37.9375 L 49.8085 37.9375 C 50.8165 37.9375 51.6133 37.1406 51.6133 36.1563 C 51.6133 35.1719 50.8165 34.3984 49.8085 34.3984 L 6.1679 34.3984 C 5.1601 34.3984 4.3867 35.1719 4.3867 36.1563 C 4.3867 37.1406 5.1601 37.9375 6.1679 37.9375 Z M 6.1679 50.1953 L 49.8085 50.1953 C 50.8165 50.1953 51.6133 49.4219 51.6133 48.4375 C 51.6133 47.4531 50.8165 46.6562 49.8085 46.6562 L 6.1679 46.6562 C 5.1601 46.6562 4.3867 47.4531 4.3867 48.4375 C 4.3867 49.4219 5.1601 50.1953 6.1679 50.1953 Z"></path>
              </svg>
            </Button>
            <Button
              onClick={() => addSlideImage(slide.id)}
              label={__("Add image", "slide")}
            >
              <span class="dashicons dashicons-format-image"></span>
            </Button>
            <Button
              onClick={() => addSlideDiv(slide.id)}
              label={__("Add block", "slide")}
            >
              <Icon icon={addTemplate} />
            </Button>
          </div>
        </PanelBody>
      ))}
      <div id="controls" className="button-add-slide">
        <div className="content-button-slide">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5f6368"
          >
            <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
          </svg>
          <button onClick={addSlide}>{__("Add Slide", "slider")}</button>
        </div>
      </div>
    </>
  );
};

export default SlideControls;
