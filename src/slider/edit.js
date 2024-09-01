import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  InspectorControls,
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
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectCards,
  EffectCube,
  EffectFade,
  EffectFlip,
  EffectCoverflow,
  EffectCreative,
  Grid,
  Autoplay,
  Scrollbar,
  FreeMode,
  Keyboard,
  Mousewheel,
  Parallax,
} from "swiper/modules";
import { useState } from "@wordpress/element";
import "./editor.scss";
import "../components/editor.scss";
import ColorOptionsPanel from "../components/colorPanel";
import { trash, replace, addTemplate } from "@wordpress/icons";
import { select } from "@wordpress/data";
import AlignmentControl from "../components/aligncontrol";
import SliderControls from "../components/SliderControls";
import ColorOptionsPanelGradient from "../components/colorPanelGradient";
import React, { useRef, useEffect } from "react";
import SliderControlsNavigation from "../components/SliderControlsNavigation";
import SliderControlsOptions from "../components/SliderControlsOptions";
import SectionSelectorSlide from "../components/sectionSelectorSlide";
import TextControls from "../components/TextControls";
import ImageControls from "../components/imageControls";
import DivControls from "../components/divControls";
import NavigationButtons from "../components/NavigationButtons"; 
import ImageComponent from "../components/ImageComponent";
import TextComponent from "../components/textComponent";
import DivComponent from "../components/divComponent";

export default function Edit({ attributes, setAttributes }) {

  const {
    directionSlider,
    effect,
    slides,
    languageSlider,
    device,
    perViewSlider,
    spaceBetween,
    slidesPerGroupDesktop,
    slidesPerRow,
    perViewSliderTablet,
    spaceBetweenTablet,
    slidesPerGroupTablet,
    perViewSliderMobile,
    spaceBetweenMobile,
    slidesPerGroupMobile,
    centeredSlides,
    loopMode,
    initialSlide,
    autoHeight,
    slideHeight,
    grabCursor,
    speed,
    crossFade,
    shadow,
    slideShadows,
    shadowOffset,
    shadowScale,
    depth,
    rotate,
    stretch,
    translateX,
    translateY,
    translateZ,
    rotateX,
    rotateY,
    rotateZ,
    scale,
    opacity,
    nextTranslateX,
    nextTranslateY,
    nextTranslateZ,
    nextRotateX,
    nextRotateY,
    nextRotateZ,
    nextScale,
    nextOpacity,
    modifier,
    rotateCards,
    navigation,
    navigationIcons,
    autoplay,
    autoplaySpeed,
    navColor,
    navBackgroundColor,
    navBorderColor,
    navColorHover,
    navBackgroundColorHover,
    navBorderColorHover,
    sizeNav,
    sizeBorderNav,
    radiusBorderNav,
    paddingNav,
    paddingNavLeft,
    offSetTopNav,
    offSetSidesNav,
    navigationTablet,
    navigationMobile,
    hideNavigation,
    bulletColor,
    bulletInactivityColor,
    positionPagination,
    hidePagination,
    typePagination,
    clickPagination,
    dynamicPagination,
    dynamicMainPagination,
    paginationEnable,
    opacityPagination,
    opacityInactivePagination,
    widthPagination,
    heightPagination,
    widthPaginationActive,
    heightPaginationActive,
    radiusPagination,
    gapPagination,
    fontSizePagination,
    heightBarPagination,
    progressbarOpposite,
    disableOnInteraction,
    pauseOnMouseEnter,
    reverseDirection,
    stopOnLastSlide,
    scrollbar,
    scrollBarColor,
    thumbColor,
    positionScrollbar,
    dragScrollbar,
    hideScrollbar,
    releaseScrollbar,
    heightScrollbar,
    radiusScrollbar,
    freeMode,
    stickyFreeMode,
    momentumFreeMode,
    momentumBounceFreeMode,
    momentumBounceRatioFreeMode,
    momentumRatioFreeMode,
    momentumVelocityRatioFreeMode,
    keyboard,
    viewPortKeyboard,
    upKeyboard,
    mousewheel,
    forceToAxis,
    invert,
    releaseOnEdges,
    sensitivity,
    autoplayProgress,
    autoplayProgressColor,
    autoplayProgressPosition,
    parallax,
    overflow,
    backgroundBorderColor,
    backgroundBorderSize,
    backgroundBorderRadius,
    backgroundVerticalPadding,
    backgroundHorizontalPadding,
    backgroundColor,
    backgroundColorSlideDefault,
    backgroundColorBlockDefault,
    textColorDefault,
    innerTextColorDefault,
    filter,
    colorOneEffect,
    colorTwoEffect,
    colorThreeEffect,
  } = attributes;

  /* Classi personalizzate per il blocco */
  useEffect(() => {
    // Funzione per rimuovere le classi personalizzate
    const removeCustomClasses = () => {
      const panels = document.querySelectorAll(
        ".cocoblocks-custom-advanced-panel"
      );
      panels.forEach((panel) => {
        panel.classList.remove("cocoblocks-custom-advanced-panel");
      });

      const cards = document.querySelectorAll(".cocoblocks-custom-block-card");
      cards.forEach((card) => {
        card.classList.remove("cocoblocks-custom-block-card");
      });
    };

    // Funzione per aggiungere una classe personalizzata al pannello "Advanced"
    const addCustomClassToAdvancedPanel = () => {
      const advancedPanels = document.querySelectorAll(
        ".block-editor-block-inspector__advanced"
      );
      advancedPanels.forEach((panel) => {
        const parentPanel = panel.closest(".components-panel__body");
        if (parentPanel) {
          const block = select("core/block-editor").getSelectedBlock();
          if (block && block.name === "slider-builder/slider") {
            parentPanel.classList.add("cocoblocks-custom-advanced-panel");
          }
        }
      });
    };

    // Funzione per aggiungere una classe personalizzata al block-editor-block-card
    const addCustomClassToBlockCard = () => {
      const blockCards = document.querySelectorAll(".block-editor-block-card");
      blockCards.forEach((card) => {
        const block = select("core/block-editor").getSelectedBlock();
        if (block && block.name === "slider-builder/slider") {
          card.classList.add("cocoblocks-custom-block-card");
        }
      });
    };

    // Aggiunge e rimuove le classi all'inizio
    removeCustomClasses();
    addCustomClassToAdvancedPanel();
    addCustomClassToBlockCard();

    // Osserva il DOM per i cambiamenti e gestisce le classi
    const observer = new MutationObserver(() => {
      removeCustomClasses();
      addCustomClassToAdvancedPanel();
      addCustomClassToBlockCard();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Pulisce l'observer quando il componente viene smontato
    return () => {
      observer.disconnect();
    };
  }, []);

  /* Nascondi il pannello Advanced */
useEffect(() => {
  const handleTabClick = (event) => {
    const tabId = event.currentTarget.id;
    const advancedPanel = document.querySelector('.cocoblocks-custom-advanced-panel');

    // Lista dei tab che devono nascondere il pannello avanzato
    const tabsToHideAdvancedPanel = [
      'tab-panel-0-tab2',
      'tab-panel-0-tab3',
      'tab-panel-0-tab4'
    ];

    if (tabsToHideAdvancedPanel.includes(tabId)) {
      // Nascondi il pannello avanzato
      if (advancedPanel) {
        advancedPanel.classList.add('hidden');
      }
    } else {
      // Mostra il pannello avanzato
      if (advancedPanel) {
        advancedPanel.classList.remove('hidden');
      }
    }
  };

  const initializeButtonListener = () => {
    // Trova tutti i bottoni delle schede
    const tabButtons = document.querySelectorAll('[role="tab"]');
    tabButtons.forEach(button => {
      button.addEventListener('click', handleTabClick);
    });
  };

  // Crea un osservatore per monitorare i cambiamenti nel DOM
  const observer = new MutationObserver(() => {
    initializeButtonListener(); // Prova a inizializzare l'ascoltatore ogni volta che il DOM cambia
  });

  // Inizia ad osservare il corpo del documento
  observer.observe(document.body, { childList: true, subtree: true });

  // Esegui inizializzazione e pulizia
  initializeButtonListener();

  return () => {
    // Pulizia: disattiva l'osservatore e rimuove gli ascoltatori
    observer.disconnect();
    const tabButtons = document.querySelectorAll('[role="tab"]');
    tabButtons.forEach(button => {
      button.removeEventListener('click', handleTabClick);
    });
  };
}, []);

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

  // Tab Panel

  // General Tab
  const onSelect = (tabName) => {};

  const blockProps = useBlockProps();

  // Background Slide
  const [backgroundType, setBackgroundType] = useState("");

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
  
    useEffect(() => {
      // Identificatore specifico del blocco, ad esempio un data-attribute
      const blockContainer = document.querySelector('[data-type="slider-builder/slider"]');
  
      if (!blockContainer) return; // Se il blocco non è presente, interrompi
  
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          // Cerca i popover solo all'interno del tuo blocco specifico
          const popovers = blockContainer.querySelectorAll(
            ".components-dropdown-menu__popover .components-popover__content"
          );
          popovers.forEach((popover) => {
            // Aggiungi la tua classe personalizzata solo ai popover del tuo blocco
            if (!popover.classList.contains("slide-popover-class")) {
              popover.classList.add("slide-popover-class");
            }
          });
        });
      });
  
      // Osserva solo il tuo blocco specifico
      observer.observe(blockContainer, {
        childList: true,
        subtree: true,
      });
  
      // Cleanup
      return () => {
        observer.disconnect();
      };
  }, []);

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

  // Stato per gestire la visibilità del dialogo di conferma
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState(null);

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

  // Update Fit Image
  const updateSlideFit = (slideId, newFit) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId ? { ...slide, fit: newFit } : slide
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

     // Inizializza lo stato delle slide con una slide predefinita se non ci sono slide
     useEffect(() => {
      if (slides.length === 0) {
        addSlide();
      }
    }, []);

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
    };
    const updatedSlides = [...slides, newSlide];
    setAttributes({ slides: updatedSlides });
  };

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

  // Add Content
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
                backgroundColor: backgroundColorBlockDefault,
                imageUrl: "",
                innerDivs: [],
              },
            ],
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Add Image inside block
  const addSlideImageDiv = (slideId, divIndex) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, index) =>
              index === divIndex
                ? {
                    ...element,
                    innerImageDivs: [
                      ...(element.innerImageDivs || []),
                      { imageUrl: "", alt: "" },
                    ],
                  }
                : element
            ),
          }
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
                text: __('Text Slide','cocoblocks'),
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
                durationEffect:1,
                delayEffect:0,
                durationEffectOdd:1,
                durationEffectEven:1,
                speedEffect:1,
                pauseEffect:0,
                animationCount:1,
                widthCursor:2,
                animationCursor:"none",
                colorCursor:"#000000",
                gradinetColorOne:"#000000",
                gradinetColorTwo:"#000000",
                gradinetColorThree:"#000000",
                gradinetColorFour:"#000000",
                gradinetColorFive:"#000000",
                decoration:"none",
                underlineColor:"#000000",
                underlinePadding:0,
                underlineVertical:0,
                underlineHorizontal:0,
                underlineWidth:1,
                underlineHeight:1,
                underlineAnimation:"none",
                underlineAnimationFrom:0,
                underlineAnimationTo:0,
                underlineFromSizeNew:0,
                underlineToSizeNew:0,
                underlineAnimationTransition:0,
                textLink:"none",
                linkUrl:"",
                linkTarget:"_self",
                linkRel:"",
                scrollToId:"",
                enableDesktopTitle:true,
                enableTabletTitle:true,
                enableMobileTitle:true,
                textColorHover:textColorDefault,
                borderStyleHover:"none",
                backgroundBorderColorHover:"",
                opacityHover:1,
                rotateHover:0,
                animationHover:"none", 
                durationEffectHover:1,
                effectHoverColorHover:textColorDefault,
                translateEffectHover:0,
                colorShadow:"",
                boxShadowX:0,
                boxShadowY:0,
                boxShadowBlur:0,
                boxShadowSpread:0,
                interation:"forwards"
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
                durationEffectImage:1,
                animationImageMoving:"none",
                durationEffectImageMoving:1,
                translateEffectImageMoving:0,
                spikeMask:0,
                spikeLeftWidth:0,
                spikeMaskRight:"none",
                spikeRightWidth:0,
                imageFilter:"none",
                imageLink:"none",
                linkUrlImage:"",
                linkTargetImage:"_self",
                linkRelImage:"",
                scrollToIdImage:"",
                enableDesktopImage:true,
                enableTabletImage:true,
                enableMobileImage:true,
                imageColorHover:"",
                borderStyleHoverImage:"none",
                backgroundBorderColorHoverImage:"",
                opacityHoverImage:1,
                rotateHoverImage:0,
                animationImageMovingHover:"none",
                durationEffectImageMovingHover:1,
                translateEffectImageMovingHover:0,
                animationHoverImage:"none",
                durationEffectHoverImage:1,
                effectHoverColorHoverImage:"",
                translateEffectHoverImage:0,
                colorShadowImage:"",
                boxShadowXImage:0,
                boxShadowYImage:0,
                boxShadowBlurImage:0,
                boxShadowSpreadImage:0,
                parallaxImage: 0,
                parallaxImageY: 0,
                parallaxImageScale: 1,
                parallaxImageOpacity: 1,
                parallaxImageDuration: 100,
                interationImage:"forwards"
              },
            ],
          }
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

  // Video
  const updateSlideBackgroundVideo = (id, videoUrl) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === id ? { ...slide, backgroundVideo: videoUrl } : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  const updateSlideBackgroundType = (id, type) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === id ? { ...slide, backgroundType: type } : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Effect
  const key = `${effect}-${languageSlider}-${perViewSlider}-${spaceBetween}-${slidesPerGroupDesktop}-${slidesPerRow}-${perViewSliderTablet}-${spaceBetweenTablet}-${slidesPerGroupTablet}-${perViewSliderMobile}-${spaceBetweenMobile}-${slidesPerGroupMobile}-${loopMode}-${centeredSlides}-${initialSlide}-${autoHeight}-${slideHeight}-${grabCursor}-${speed}-${crossFade}-${shadow}-${slideShadows}-${shadowOffset}-${shadowScale}-${depth}-${rotate}-${stretch}-${translateX}-${translateY}-${translateZ}-${rotateX}-${rotateY}-${rotateZ}-${scale}-${opacity}-${nextTranslateX}-${nextTranslateY}-${nextTranslateZ}-${nextRotateX}-${nextRotateY}-${nextRotateZ}-${nextScale}-${nextOpacity}-${modifier}-${rotateCards}-${hidePagination}-${clickPagination}-${dynamicPagination}-${dynamicMainPagination}-${typePagination}-${progressbarOpposite}-${autoplay}-${autoplaySpeed}-${disableOnInteraction}-${pauseOnMouseEnter}-${reverseDirection}-${stopOnLastSlide}-${navigation}-${navigationIcons}-${scrollbar}-${dragScrollbar}-${hideScrollbar}-${releaseScrollbar}-${mousewheel}-${forceToAxis}-${invert}-${releaseOnEdges}-${sensitivity}-${parallax}`;
  // Nessun movimento della slider
  const isGutenbergEditor =
    typeof wp !== "undefined" && wp.data && wp.data.select("core/editor");

  // Navigation
  const stylesNavigation = {
    "--background-color-nav": navBackgroundColor,
    "--border-color-nav": navBorderColor,
    "--color-nav-hover": navColorHover,
    "--background-color-nav-hover": navBackgroundColorHover,
    "--border-color-nav-hover": navBorderColorHover,
    "--border-size-nav": sizeBorderNav + "px",
    "--border-radius-nav": radiusBorderNav + "%",
    "--padding-nav": paddingNav + "px",
    "--padding-nav-left": paddingNavLeft + "px",
    "--offset-top-nav": offSetTopNav + "%",
    "--offset-sides-nav": offSetSidesNav + "px",
  };
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  useEffect(() => {
    const swiperContainer = document.querySelector(".mySwiper");
    if (swiperContainer && swiperContainer.swiper) {
      swiperContainer.swiper.params.navigation.prevEl = prevRef.current;
      swiperContainer.swiper.params.navigation.nextEl = nextRef.current;
      swiperContainer.swiper.navigation.update();
    }
  }, []);
  const isNavigationEnabled = navigation; // Sostituisci con il tuo controllo di attivazione della navigazione
  const navigationConfig = isNavigationEnabled
    ? {
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }
    : false;
  // Classi dinamiche
  const swiperButtonNextClasses = `swiper-button-next ${
    !navigationTablet ? "nav-tablet" : ""
  } ${!navigationMobile ? "nav-mobile" : ""}`;
  const swiperButtonPrevClasses = `swiper-button-prev ${
    !navigationTablet ? "nav-tablet" : ""
  } ${!navigationMobile ? "nav-mobile" : ""}`;

  // Pagination end other
  const stylesPagination = {
    "--swiper-pagination-color": bulletColor,
    "--swiper-pagination-fraction-color": bulletColor,
    "--swiper-pagination-bullet-inactive-color": bulletInactivityColor,
    "--swiper-pagination-progressbar-bg-color": bulletInactivityColor,
    "--swiper-pagination-top": positionPagination === "top" ? "8px" : "auto",
    "--swiper-pagination-bottom":
      positionPagination === "bottom" ? "8px" : "auto",
    "--swiper-pagination-bullet-opacity": opacityPagination,
    "--swiper-pagination-bullet-inactive-opacity": opacityInactivePagination,
    "--swiper-pagination-bullet-width": widthPagination + "px",
    "--swiper-pagination-bullet-height": heightPagination + "px",
    "--swiper-pagination-bullet-width-active": widthPaginationActive + "px",
    "--swiper-pagination-bullet-height-active": heightPaginationActive + "px",
    "--swiper-radius-bullet": radiusPagination + "%",
    "--swiper-pagination-bullet-horizontal-gap": gapPagination + "px",
    "--swiper-font-size-fraction": fontSizePagination + "px",
    "--swiper-pagination-progressbar-size": heightBarPagination + "px",
    "--swiper-scrollbar-bg-color": scrollBarColor,
    "--swiper-scrollbar-drag-bg-color": thumbColor,
    "--swiper-scrollbar-top": positionScrollbar === "top" ? "4px" : "auto",
    "--swiper-scrollbar-bottom":
      positionScrollbar === "bottom" ? "4px" : "auto",
    "--swiper-scrollbar-size": heightScrollbar + "px",
    "--swiper-scrollbar-border-radius": radiusScrollbar + "px",
    /* Autoplay Progress */
    "--swiper-autoplay-progress-color": autoplayProgressColor,
    border: backgroundBorderSize + "px solid " + backgroundBorderColor,
    borderRadius: backgroundBorderRadius + "px",
    padding: `${backgroundVerticalPadding}px ${backgroundHorizontalPadding}px`,
    backgroundColor: backgroundColor,
    "--color-one-effect": colorOneEffect,
    "--color-two-effect": colorTwoEffect,
    "--color-three-effect": colorThreeEffect,
  };

  // Autoplay
  const isAutoplayEnabled = autoplay;
  const autoplayConfig = isAutoplayEnabled
    ? {
        delay: autoplaySpeed,
        disableOnInteraction: disableOnInteraction,
        pauseOnMouseEnter: pauseOnMouseEnter,
        reverseDirection: reverseDirection,
        stopOnLastSlide: stopOnLastSlide,
      }
    : false;
  // Progress Circle
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  // Scrollbar
  const isScrollbarEnabled = scrollbar;
  const scrollbarConfig = isScrollbarEnabled
    ? {
        draggable: dragScrollbar,
        hide: hideScrollbar,
        snapOnRelease: releaseScrollbar,
      }
    : false;

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

  // Section slide
  const [activeSection, setActiveSection] = useState("content");
  // Section slides
  const [activeSectionSlide, setActiveSectionSlide] = useState("background");
  // Section Image
  const [activeSectionImage, setActiveSectionImage] = useState("content");
  // Section Block
  const [activeSectionBlock, setActiveSectionBlock] = useState("content");
  
  return (
    <>
      <InspectorControls>
        <TabPanel
          className="tab-general"
          activeClass="active-tab"
          initialTabName="tab1"
          onSelect={onSelect}
          tabs={[
            {
              name: "tab1",
              title: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" />
                </svg>
              ),
            },
            {
              name: "tab3",
              title: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path d="M480-654Zm174 174Zm-348 0Zm174 174Zm0-234L360-660v-220h240v220L480-540Zm180 180L540-480l120-120h220v240H660Zm-580 0v-240h220l120 120-120 120H80ZM360-80v-220l120-120 120 120v220H360Zm120-574 40-40v-106h-80v106l40 40ZM160-440h106l40-40-40-40H160v80Zm280 280h80v-106l-40-40-40 40v106Zm254-280h106v-80H694l-40 40 40 40Z" />
                </svg>
              ),
            },
            {
              name: "tab4",
              title: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path d="M40-200v-560h80v560H40Zm160 0v-560h80v560h-80Zm240 0q-33 0-56.5-23.5T360-280v-400q0-33 23.5-56.5T440-760h400q33 0 56.5 23.5T920-680v400q0 33-23.5 56.5T840-200H440Zm0-80h400v-400H440v400Zm40-80h320L696-500l-76 100-56-74-84 114Zm-40 80v-400 400Z" />
                </svg>
              ),
            },
            {
              name: "tab2",
              title: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path d="M480-118 120-398l66-50 294 228 294-228 66 50-360 280Zm0-202L120-600l360-280 360 280-360 280Zm0-280Zm0 178 230-178-230-178-230 178 230 178Z" />
                </svg>
              ),
            },
          ]}
        >
          {(tab) => (
            <>
              {/*TAB 1*/}
              <div className={"tab-1 " + tab.name}>
                <SliderControls
                  attributes={attributes}
                  setAttributes={setAttributes}
                />
              </div>
              {/*TAB 3*/}
              <div className={"tab-3 " + tab.name}>
                <SliderControlsNavigation
                  attributes={attributes}
                  setAttributes={setAttributes}
                />
              </div>
              {/*TAB 4*/}
              <div className={"tab-4 " + tab.name}>
                <SliderControlsOptions
                  attributes={attributes}
                  setAttributes={setAttributes}
                />
              </div>
              {/*TAB 2*/}
              <div className={"tab-2 " + tab.name}>
                <div className="content-subdescription-section-slider">
                  <h2>{__("Content Options")}</h2>
                </div>
                {slides.map((slide, index) => (
                  <PanelBody
                    key={index}
                    className="cocoblocks-panel panel-slide"
                    title={
                      <>
                        {renderCircle(slide.id)} {__("Slide", "cocoblocks")}{" "}
                        {index + 1}
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
                    <SectionSelectorSlide
                      onSectionChange={setActiveSectionSlide}
                    />
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
                          <div
                            className="content-section-panel"
                            style={{ padding: "0" }}
                          >
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
                                    title: (
                                      <span>
                                        {__("Color", "your-text-domain")}
                                      </span>
                                    ),
                                  },
                                  {
                                    name: "gradient",
                                    title: (
                                      <span>
                                        {__("Gradient", "your-text-domain")}
                                      </span>
                                    ),
                                  },
                                  {
                                    name: "image",
                                    title: (
                                      <span>
                                        {__("Image", "your-text-domain")}
                                      </span>
                                    ),
                                  },
                                  {
                                    name: "video",
                                    title: (
                                      <span>
                                        {__("Video", "your-text-domain")}
                                      </span>
                                    ),
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
                                            updateSlideBackgroundColor(
                                              slide.id,
                                              color
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
                                                      justifyContent:
                                                        "space-between",
                                                      paddingLeft: "1px",
                                                      paddingRight: "0px",
                                                      color:
                                                        " var(--light-color)",
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
                                                        onChange={(
                                                          newFocalPoint
                                                        ) =>
                                                          handleFocalPointChange(
                                                            slide.id,
                                                            newFocalPoint
                                                          )
                                                        }
                                                        url={
                                                          slide.backgroundImage
                                                        }
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
                                                            label: __(
                                                              "Cover",
                                                              "slider"
                                                            ),
                                                            value: "cover",
                                                          },
                                                          {
                                                            label: __(
                                                              "Auto",
                                                              "slider"
                                                            ),
                                                            value: "auto",
                                                          },
                                                        ]}
                                                        onChange={(newFit) =>
                                                          updateSlideFit(
                                                            slide.id,
                                                            newFit
                                                          )
                                                        }
                                                      />
                                                    </div>
                                                    <Button
                                                      onClick={open}
                                                      style={{
                                                        marginLeft: "2px",
                                                        position: "relative",
                                                        top: "-2px",
                                                        color:
                                                          " var(--light-color)",
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
                                              updateSlideBackgroundImage(
                                                slide.id,
                                                null
                                              )
                                            }
                                            isDestructive
                                            icon={trash}
                                            label={__(
                                              "Delete Image",
                                              "wp-kube"
                                            )}
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
                                                      justifyContent:
                                                        "space-between",
                                                      paddingLeft: "1px",
                                                      paddingRight: "0px",
                                                      color:
                                                        " var(--light-color)",
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
                                                        onChange={(
                                                          newFocalPoint
                                                        ) =>
                                                          handleFocalPointChange(
                                                            slide.id,
                                                            newFocalPoint
                                                          )
                                                        }
                                                        url={
                                                          slide.backgroundVideo
                                                        }
                                                      />
                                                    </div>
                                                    <Button
                                                      onClick={open}
                                                      style={{
                                                        marginLeft: "2px",
                                                        color:
                                                          " var(--light-color)",
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
                                              updateSlideBackgroundVideo(
                                                slide.id,
                                                null
                                              )
                                            }
                                            isDestructive
                                            icon={trash}
                                            label={__(
                                              "Delete Video",
                                              "wp-kube"
                                            )}
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
                            {__("Border", "cocoblocks")}
                          </h2>
                        </div>
                        <div
                          className="content-section-panel"
                          style={{ paddingTop: "0", paddingBottom: "0" }}
                        >
                          <div className="custom-select color">
                            <ColorOptionsPanel
                              colorNormal={slide.backgroundBorderColor}
                              setColorNormal={(color) =>
                                updateSlideBackgroundBorderColor(
                                  slide.id,
                                  color
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
                                    style={{ marginRight: "2px" }}
                                  >
                                    <path d="M144-144v-672h72v672h-72Zm150 0v-72h72v72h-72Zm0-300v-72h72v72h-72Zm0-300v-72h72v72h-72Zm150 600v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm150 600v-72h72v72h-72Zm0-300v-72h72v72h-72Zm0-300v-72h72v72h-72Zm150 600v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Z" />
                                  </svg>
                                  {__("Border width", "cocoblocks")}
                                </>
                              }
                              value={slide.backgroundBorderSize}
                              onChange={(newSize) =>
                                updateSlideBackgroundBorderSize(
                                  slide.id,
                                  newSize
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
                                    style={{ marginRight: "2px" }}
                                  >
                                    <path d="M216-216h528v-528H216v528Zm-72 72v-672h672v672H144Zm150-300v-72h72v72h-72Zm150 150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm150 150v-72h72v72h-72Z" />
                                  </svg>
                                  {__("Border radius", "cocoblocks")}
                                </>
                              }
                              value={slide.backgroundBorderRadius}
                              onChange={(newRadius) =>
                                updateSlideBackgroundBorderRadius(
                                  slide.id,
                                  newRadius
                                )
                              }
                              min={0}
                              max={256}
                              step={1}
                            />
                          </div>
                        </div>
                        <div className="content-title-custom-panel intermedy">
                          <h2 className="title-custom-panel">
                            {__("Spacing", "cocoblocks")}
                          </h2>
                        </div>
                        <div
                          className="content-section-panel"
                          style={{ padding: "0" }}
                        >
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
                                  {__(
                                    "Content horizontal padding",
                                    "cocoblocks"
                                  )}
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
                                {__(
                                  "Apply same styles to all slides",
                                  "cocoblocks"
                                )}
                              </p>
                              <button
                                onClick={() => openConfirmationDialog(slide)}
                              >
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
                                onClick={() =>
                                  moveElementUp(slide.id, elementIndex)
                                }
                                size="small"
                                disabled={elementIndex === 0}
                                label={__("Move before", "cocoblocks")}
                              >
                                ↑
                              </Button>
                            </Tooltip>
                            <Tooltip text={__("Move after", "cocoblocks")}>
                              <Button
                                onClick={() =>
                                  moveElementDown(slide.id, elementIndex)
                                }
                                size="small"
                                disabled={
                                  elementIndex === slide.elements.length - 1
                                }
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
                    <button onClick={addSlide}>
                      {__("Add Slide", "slider")}
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </TabPanel>
      </InspectorControls>

      <div {...blockProps}>
        <Swiper
          ref={swiperRef}
          key={key}
          modules={[
            Navigation,
            Pagination,
            EffectCards,
            EffectCube,
            EffectFade,
            EffectFlip,
            EffectCoverflow,
            EffectCreative,
            Grid,
            Autoplay,
            Scrollbar,
            FreeMode,
            Keyboard,
            Mousewheel,
            Parallax,
          ]}
          navigation={navigationConfig}
          pagination={{
            enabled: paginationEnable,
            hideOnClick: hidePagination,
            type: typePagination,
            clickable: clickPagination,
            dynamicBullets: dynamicPagination,
            dynamicMainBullets: dynamicMainPagination,
            progressbarOpposite: progressbarOpposite,
          }}
          keyboard={{
            enabled: keyboard,
            onlyInViewport: viewPortKeyboard,
            pageUpDown: upKeyboard,
          }}
          mousewheel={{
            enabled: mousewheel,
            forceToAxis: forceToAxis,
            invert: invert,
            releaseOnEdges: releaseOnEdges,
            sensitivity: sensitivity,
          }}
          autoplay={autoplayConfig}
          onAutoplayTimeLeft={autoplayProgress ? onAutoplayTimeLeft : undefined}
          className={"slider-builder "+filter}
          dir={languageSlider}
          direction={directionSlider}
          effect={effect}
          simulateTouch={!isGutenbergEditor}
          centeredSlides={centeredSlides}
          initialSlide={initialSlide}
          autoHeight={autoHeight}
          grabCursor={grabCursor}
          loop={loopMode === "enable"}
          rewind={loopMode === "rewind"}
          speed={speed}
          scrollbar={scrollbarConfig}
          grid={{
            rows: slidesPerRow,
            fill: "row",
          }}
          fadeEffect={{
            crossFade: crossFade,
          }}
          cubeEffect={{
            shadow: shadow,
            slideShadows: slideShadows,
            shadowOffset: shadowOffset,
            shadowScale: shadowScale,
          }}
          coverflowEffect={{
            rotate: rotate,
            stretch: stretch,
            depth: depth,
            modifier: modifier,
            slideShadows: slideShadows,
          }}
          cardsEffect={{
            rotate: rotateCards,
            slideShadows: slideShadows,
          }}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [
                translateX + "%",
                translateY + "%",
                translateZ + "px",
              ],
              rotate: [rotateX, rotateY, rotateZ],
              scale: scale,
              opacity: opacity,
            },
            next: {
              shadow: true,
              translate: [
                nextTranslateX + "%",
                nextTranslateY + "%",
                nextTranslateZ + "px",
              ],
              rotate: [nextRotateX, nextRotateY, nextRotateZ],
              scale: nextScale,
              opacity: nextOpacity,
            },
          }}
          freeMode={{
            enabled: freeMode,
            sticky: stickyFreeMode,
            momentum: momentumFreeMode,
            momentumBounce: momentumBounceFreeMode,
            momentumBounceRatio: momentumBounceRatioFreeMode,
            momentumRatio: momentumRatioFreeMode,
            momentumVelocityRatio: momentumVelocityRatioFreeMode,
          }}
          parallax={parallax}
          breakpoints={{
            640: {
              slidesPerView: perViewSliderMobile,
              spaceBetween: spaceBetweenMobile,
              slidesPerGroup: slidesPerGroupMobile,
            },
            768: {
              slidesPerView: perViewSliderTablet,
              spaceBetween: spaceBetweenTablet,
              slidesPerGroup: slidesPerGroupTablet,
            },
            1024: {
              slidesPerView: perViewSlider,
              spaceBetween: spaceBetween,
              slidesPerGroup: slidesPerGroupDesktop,
            },
          }}
          style={stylesPagination}
        >
          {attributes.contentType === "post-based" &&
          attributes.posts &&
          Array.isArray(attributes.posts) &&
          attributes.posts.length > 0
            ? attributes.posts.map((post, index) => (
                <SwiperSlide key={index}>
                  <div className="swiper-slide">
                    {post.image && <img src={post.image} alt={post.title} />}
                    {post.title && <h3>{post.title}</h3>}
                    {post.excerpt && <p>{post.excerpt}</p>}
                    {post.link && <a href={post.link}>Read More</a>}
                  </div>
                </SwiperSlide>
              ))
            : null}

          {attributes.contentType === "woocommerce-based" &&
          attributes.posts &&
          Array.isArray(attributes.posts) &&
          attributes.posts.length > 0
            ? attributes.posts.map((product, index) => (
                <SwiperSlide key={index}>
                  <div className="swiper-slide">
                    {product.image && (
                      <img src={product.image} alt={product.title} />
                    )}
                    {product.title && <h3>{product.title}</h3>}
                    {product.excerpt && <p>{product.excerpt}</p>}
                    {product.link && <a href={product.link}>View Product</a>}
                  </div>
                </SwiperSlide>
              ))
            : null}

          {attributes.contentType === "custom" &&
          Array.isArray(slides) &&
          slides.length > 0
            ? slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div
                    className={
                      "swiper-slide " +
                      slide.position +
                      " " +
                      overflow +
                      " " +
                      slide.layout +
                      "-layout"
                    }
                    style={{
                      // Gestione dell'immagine di sfondo
                      ...(slide.backgroundType === "image" &&
                      slide.backgroundImage
                        ? {
                            backgroundImage: `url(${slide.backgroundImage})`,
                            backgroundSize: slide.fit ? slide.fit : "cover",
                            backgroundPosition: slide.focalPoint
                              ? `${slide.focalPoint.x * 100}% ${
                                  slide.focalPoint.y * 100
                                }%`
                              : "center",
                          }
                        : {}),

                      // Gestione del colore di sfondo
                      ...(slide.backgroundType === "color"
                        ? {
                            backgroundColor: slide.backgroundColor,
                          }
                        : {}),

                      // Gestione del gradiente di sfondo
                      ...(slide.backgroundType === "gradient"
                        ? {
                            background: slide.backgroundGradient,
                          }
                        : {}),

                      // Gestione dello spazio e altre proprietà
                      height: autoHeight ? "auto" : `${slideHeight}px`,
                      display: "flex",
                      flexDirection:
                        slide.layout === "horizontal" ? "row" : "column",
                      textAlign: "center",
                      width: "100%",
                      position: "relative",
                      visibility: "visible",
                      gap: slide.gapItems + "px",
                      borderRadius: slide.backgroundBorderRadius + "px",
                      paddingTop: slide.backgroundVerticalPadding + "px",
                      paddingBottom: slide.backgroundVerticalPadding + "px",
                      paddingLeft: slide.backgroundHorizontalPadding + "px",
                      paddingRight: slide.backgroundHorizontalPadding + "px",
                      border: slide.backgroundBorderColor
                        ? `${slide.backgroundBorderSize}px solid ${slide.backgroundBorderColor}`
                        : "none",
                    }}
                  >
                    {slide.backgroundType === "video" && (
                    <>
                      {slide.backgroundVideo && (
                        <video
                          src={slide.backgroundVideo}
                          autoPlay
                          muted
                          loop
                          style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            objectPosition: slide.focalPoint
                              ? `${slide.focalPoint.x * 100}% ${
                                  slide.focalPoint.y * 100
                                }%`
                              : "center",
                            top: 0,
                            left: 0,
                            zIndex: 0,
                            objectFit: "cover",
                          }}
                        />
                      )}
                    </>
                    )}
                    
                    {slide.elements.map((element, index) => {
                 
                      switch (element.type) {
                        case "title":
                          return <TextComponent element={element} index={index} />;
                        case "image":
                          return <ImageComponent element={element} index={index} />;
                        case "div":
                          return <DivComponent element={element} index={index} />;
                        default:
                          return null;
                      }
                    })}
                  </div>
                </SwiperSlide>
              ))
            : null}

          {autoplayProgress && (
            <div
              className={"autoplay-progress " + autoplayProgressPosition}
              slot="container-end"
            >
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          )}
          <div className="filter-slider"></div>
        </Swiper>
        <NavigationButtons
            navigation={navigation}
            nextRef={nextRef}
            prevRef={prevRef}
            swiperButtonNextClasses={swiperButtonNextClasses}
            swiperButtonPrevClasses={swiperButtonPrevClasses}
            stylesNavigation={stylesNavigation}
            navigationIcons={navigationIcons}
            navColor={navColor}
            sizeNav={sizeNav}
          />
      </div>
    </>
  );
}