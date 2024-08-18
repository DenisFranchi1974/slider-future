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
  ButtonGroup,
  PanelBody,
  Icon,
  TabPanel,
  DropdownMenu,
  TextareaControl,
  ColorPicker,
  __experimentalAlignmentMatrixControl as AlignmentMatrixControl,
  RangeControl,
  FocalPointPicker,
  Tooltip,
  TextControl,
  __experimentalBoxControl as BoxControl,
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
import {
  trash,
  replace,
  addTemplate,
  textColor,
  color,
} from "@wordpress/icons";
import { select } from "@wordpress/data";
import AlignmentControl from "../components/aligncontrol";
import SliderControls from "../components/SliderControls";
import ColorOptionsPanelGradient from "../components/colorPanelGradient";
import React, { useRef, useEffect } from "react";
import AlignmentControlThree from "../components/aligncontrol-three";
import FontStyle from "../components/font-style";
import SectionSelector from "../components/sectionSelector";
import SectionSelectorImage from "../components/sectionSelectorImage";
import SliderControlsNavigation from "../components/SliderControlsNavigation";
import SliderControlsOptions from "../components/SliderControlsOptions";
import SectionSelectorSlide from "../components/sectionSelectorSlide";

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
  } = attributes;

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

  // General Tab
  const onSelect = (tabName) => {};

  const blockProps = useBlockProps();

  // Background Slide
  const [backgroundType, setBackgroundType] = useState("");

  // Add Slide
  const addSlide = () => {
    const newSlide = {
      id: slides.length + 1,
      elements: [], // Inizializza elements come un array vuoto
      layout: "vertical",
      gapItems: 5,
      position: "center-center",
      backgroundBorderColor: "#000000",
      backgroundBorderSize: 0,
      backgroundBorderRadius: 0,
      backgroundVerticalPadding: 0,
      backgroundHorizontalPadding: 0,
    };
    const updatedSlides = [...slides, newSlide];
    setAttributes({ slides: updatedSlides });
  };

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
                backgroundColor: "",
                imageUrl: "",
                innerDivs: [],
              },
            ],
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Layout
  const updateSlideLayoutDiv = (slideId, newLayoutDiv) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId ? { ...slide, layoutDiv: newLayoutDiv } : slide
    );
    setAttributes({ slides: updatedSlides });
  };
  // Update Position
  const updateSlidePositionDiv = (slideId, newPositionDiv) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId ? { ...slide, positionDiv: newPositionDiv } : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Gap Items
  const updateSlideGapItemsDiv = (slideId, newGapItemsDiv) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId ? { ...slide, gapItemsDiv: newGapItemsDiv } : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Border Color
  const updateSlideBackgroundBorderColorDiv = (id, colorDiv) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === id ? { ...slide, backgroundBorderColorDiv: colorDiv } : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update border size
  const updateSlideBackgroundBorderSizeDiv = (slideId, newSizeDiv) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? { ...slide, backgroundBorderSizeDiv: newSizeDiv }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update border radius
  const updateSlideBackgroundBorderRadiusDiv = (slideId, newRadiusDiv) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? { ...slide, backgroundBorderRadiusDiv: newRadiusDiv }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update vertical padding
  const updateSlideBackgroundVerticalPaddingDiv = (
    slideId,
    newVerticalPaddingDiv
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? { ...slide, backgroundVerticalPaddingDiv: newVerticalPaddingDiv }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update horizontal padding
  const updateSlideBackgroundHorizontalPaddingDiv = (
    slideId,
    newHorizontalPaddingDiv
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? { ...slide, backgroundHorizontalPaddingDiv: newHorizontalPaddingDiv }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Content
  const updateSlideDiv = (slideId, index, newContent) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements
              ? slide.elements.map((element, i) =>
                  element.type === "div" && i === index
                    ? { ...element, content: newContent }
                    : element
                )
              : [], // Se elements non è definito, inizializzalo come array vuoto
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Text color
  const updateSlideTextColorDiv = (slideId, index, colorDiv) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === index
                ? { ...element, textColorDiv: colorDiv }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Text align
  const updateTextAlignDiv = (slideId, index, alignDiv) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === index
                ? { ...element, textAlignDiv: alignDiv }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Font Style
  const updateFontStyleDiv = (slideId, index, styleTypeDiv, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) => {
              if (element.type === "div" && i === index) {
                const updatedFontStyleDiv = {
                  ...element.fontStyleDiv,
                  [styleTypeDiv]: value,
                };
                return {
                  ...element,
                  fontStyleDiv: updatedFontStyleDiv,
                };
              }
              return element;
            }),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Element
  const updateElementTitleDiv = (slideId, index, newElementTitleDiv) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === index
                ? { ...element, elementTitleDiv: newElementTitleDiv }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Size
  const updateFontSizeDiv = (slideId, index, newSizeDiv) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === index
                ? { ...element, fontSizeDiv: newSizeDiv }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };
  // Size Tablet
  const updateFontSizeTabletDiv = (slideId, index, newSizeTabletDiv) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === index
                ? { ...element, fontSizeTabletDiv: newSizeTabletDiv }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };
  // Size Mobile
  const updateFontSizeMobileDiv = (slideId, index, newSizeMobileDiv) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === index
                ? { ...element, fontSizeMobileDiv: newSizeMobileDiv }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Line height
  const updateLineHeightDiv = (slideId, index, newLineHeightDiv) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === index
                ? { ...element, lineHeightDiv: newLineHeightDiv }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Margin title
  const updatenewMargintitleDiv = (slideId, index, newMargintitleDiv) => {
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
              if (element.type === "div" && i === index) {
                return {
                  ...element,
                  marginTitleDiv: {
                    top: addUnit(
                      newMargintitleDiv.top || "0",
                      newMargintitleDiv.unit || "px"
                    ),
                    right: addUnit(
                      newMargintitleDiv.right || "0",
                      newMargintitleDiv.unit || "px"
                    ),
                    bottom: addUnit(
                      newMargintitleDiv.bottom || "0",
                      newMargintitleDiv.unit || "px"
                    ),
                    left: addUnit(
                      newMargintitleDiv.left || "0",
                      newMargintitleDiv.unit || "px"
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

  // Background color Content
  const updateDivBackgroundColor = (slideId, index, newColor) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements
              ? slide.elements.map((element, i) =>
                  element.type === "div" && i === index
                    ? { ...element, backgroundColor: newColor }
                    : element
                )
              : [], // Se elements non è definito, inizializzalo come array vuoto
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Image Content
  const updateDivImage = (slideId, index, imageUrl) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements
              ? slide.elements.map((element, i) =>
                  element.type === "div" && i === index
                    ? { ...element, imageUrl }
                    : element
                )
              : [], // Se elements non è definito, inizializzalo come array vuoto
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Remove image content
  const removeDivImage = (slideId, divIndex) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, index) =>
              element.type === "div" && index === divIndex
                ? {
                    ...element,
                    imageUrl: null, // Rimuove solo l'immagine
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Remove image inner content
  const removeInnerDivImage = (slideId, divIndex, innerIndex) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, index) =>
              element.type === "div" && index === divIndex
                ? {
                    ...element,
                    innerDivs: element.innerDivs.map((innerDiv, innerIdx) =>
                      innerIdx === innerIndex
                        ? {
                            ...innerDiv,
                            imageUrl: null, // Rimuove solo l'immagine dall'innerDiv
                          }
                        : innerDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Remove Content
  const removeSlideDiv = (slideId, index) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.filter(
              (element, i) => element.type !== "div" || i !== index
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Add Inner Content
  const addInnerDiv = (slideId, divIndex) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, index) =>
              element.type === "div" && index === divIndex
                ? {
                    ...element,
                    innerDivs: [
                      ...(element.innerDivs || []),
                      { content: "", backgroundColor: "", imageUrl: "" },
                    ],
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Innder Div
  const updateInnerDivContent = (slideId, divIndex, innerIndex, newContent) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, index) =>
              element.type === "div" && index === divIndex
                ? {
                    ...element,
                    innerDivs: element.innerDivs.map((innerDiv, i) =>
                      i === innerIndex
                        ? { ...innerDiv, content: newContent }
                        : innerDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Background
  const updateInnerDivBackgroundColor = (
    slideId,
    divIndex,
    innerIndex,
    newColor
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, index) =>
              element.type === "div" && index === divIndex
                ? {
                    ...element,
                    innerDivs: element.innerDivs.map((innerDiv, i) =>
                      i === innerIndex
                        ? { ...innerDiv, backgroundColor: newColor }
                        : innerDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Image Inner Content
  const updateInnerDivImage = (slideId, divIndex, innerIndex, imageUrl) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, index) =>
              element.type === "div" && index === divIndex
                ? {
                    ...element,
                    innerDivs: element.innerDivs.map((innerDiv, i) =>
                      i === innerIndex ? { ...innerDiv, imageUrl } : innerDiv
                    ),
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Remove Inner Content
  const removeInnerDiv = (slideId, divIndex, innerIndex) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, index) =>
              element.type === "div" && index === divIndex
                ? {
                    ...element,
                    innerDivs: element.innerDivs.filter(
                      (_, i) => i !== innerIndex
                    ),
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
                text: "",
                textAlign: "center",
                fontStyle: {
                  italic: false,
                  underline: false,
                  bold: false,
                },
                fontSize: 22,
                fontSizeTablet: 16,
                fontSizeMobile: 16,
                lineHeight: 1.5,
                textColor: "#000000",
                marginTitle: {
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                },
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
              },
            ],
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Text
  const updateSlideTitle = (slideId, index, newTitle) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "title" && i === index
                ? { ...element, text: newTitle }
                : element
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

  // Update Text align
  const updateTextAlign = (slideId, index, align) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "title" && i === index
                ? { ...element, textAlign: align }
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

  // Update Font Family
  const updateTextFamily = (slideId, index, family) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "title" && i === index
                ? { ...element, fontFamily: family }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Rotate
  const updateRotate = (slideId, index, rotate) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "title" && i === index
                ? { ...element, rotate: rotate }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Opacity
  const updateOpacity = (slideId, index, opacity) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "title" && i === index
                ? { ...element, opacity: opacity }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Element
  const updateElementTitle = (slideId, index, newElementTitle) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "title" && i === index
                ? { ...element, elementTitle: newElementTitle }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Size
  const updateFontSize = (slideId, index, newSize) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "title" && i === index
                ? { ...element, fontSize: newSize }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };
  // Size Tablet
  const updateFontSizeTablet = (slideId, index, newSizeTablet) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "title" && i === index
                ? { ...element, fontSizeTablet: newSizeTablet }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };
  // Size Mobile
  const updateFontSizeMobile = (slideId, index, newSizeMobile) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "title" && i === index
                ? { ...element, fontSizeMobile: newSizeMobile }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Line height
  const updateLineHeight = (slideId, index, newLineHeight) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "title" && i === index
                ? { ...element, lineHeight: newLineHeight }
                : element
            ),
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

  // Parallax text x
  const updateParallaxTitle = (slideId, index, newParallaxTitle) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "title" && i === index
                ? { ...element, parallaxTitle: newParallaxTitle }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Parallax text y
  const updateParallaxTitleY = (slideId, index, newParallaxTitleY) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "title" && i === index
                ? { ...element, parallaxTitleY: newParallaxTitleY }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Parallax text scale
  const updateParallaxTitleScale = (slideId, index, newParallaxTitleScale) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "title" && i === index
                ? { ...element, parallaxTitleScale: newParallaxTitleScale }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Parallax text opacity
  const updateParallaxTitleOpacity = (
    slideId,
    index,
    newParallaxTitleOpacity
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "title" && i === index
                ? { ...element, parallaxTitleOpacity: newParallaxTitleOpacity }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Parallax text duration
  const updateParallaxTitleDuration = (
    slideId,
    index,
    newParallaxTitleDuration
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "title" && i === index
                ? {
                    ...element,
                    parallaxTitleDuration: newParallaxTitleDuration,
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
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
                customWidthImagePx: 200,
                heightImage: "fixed",
                customHeightImage: false,
                customHeightImagePx: 200,
                backgroundBorderColorImage: "",
                backgroundBorderSizeImage: 0,
                backgroundBorderRadiusImage: 0,
                backgroundColorImage: "",
                paddingImage: 0,
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
              },
            ],
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

  // Image
  const updateSlideBackgroundImage = (id, newImage) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === id ? { ...slide, backgroundImage: newImage } : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Remove image
  const removeSlideBackgroundImage = (id) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === id ? { ...slide, backgroundImage: null } : slide
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
  // Remove video
  const removeSlideBackgroundVideo = (id) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === id ? { ...slide, backgroundVideo: null } : slide
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
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        const popovers = document.querySelectorAll(
          ".components-dropdown-menu__popover .components-popover__content"
        );
        popovers.forEach((popover) => {
          // Aggiungi la tua classe personalizzata
          if (!popover.classList.contains("slide-popover-class")) {
            popover.classList.add("slide-popover-class");
          }
        });
      });
    });

    // Osserva il body per aggiungere la classe personalizzata ai nuovi popover
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

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

  // Pagination
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

  // Font Family
  const fontOptions = [
    { label: __("Arial", "cocoblock"), value: "Arial" },
    { label: __("Georgia", "cocoblock"), value: "Georgia" },
    { label: __("Courier New", "cocoblock"), value: "Courier New" },
    { label: __("Roboto", "cocoblock"), value: "Roboto" },
    { label: __("Open Sans", "cocoblock"), value: "Open Sans" },
    // Aggiungi altri font se necessario
  ];
  useEffect(() => {
    slides.forEach((slide) => {
      slide.elements.forEach((element) => {
        if (
          element.type === "title" &&
          !["Arial", "Georgia", "Courier New", "Roboto", "Open Sans"].includes(
            element.fontFamily
          )
        ) {
          loadGoogleFont(element.fontFamily);
        }
      });
    });
  }, [slides]);

  const loadGoogleFont = (fontFamily) => {
    if (!fontFamily) return;

    // Verifica se il font è già caricato
    if (
      document.querySelector(`link[href*="${fontFamily.replace(" ", "+")}"]`)
    ) {
      return;
    }

    const link = document.createElement("link");
    link.href = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(
      " ",
      "+"
    )}:wght@400;700&display=swap`;
    link.rel = "stylesheet";
    document.head.appendChild(link);
  };
  // Effect Text Split
  const updateTextAnimation = (slideId, index, animation) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "title" && i === index
                ? { ...element, animation: animation }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Section slide
  const [activeSection, setActiveSection] = useState("content");
  // Section slides
  const [activeSectionSlide, setActiveSectionSlide] = useState("background");
  // Section Image
  const [activeSectionImage, setActiveSectionImage] = useState("content");

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
                          className="content-section-panel"
                          style={{ paddingTop: "0", paddingBottom: "0" }}
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
                                                    color:' var(--light-color)',
                                                    padding: '3px',
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
                                                        fill:' var(--light-color)',
                                                        width: '18px',
                                                        height: '18px',
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
                                                      color:' var(--light-color)',
                                                      padding: '3px',
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
                                                    justifyContent:
                                                      "space-between",
                                                    paddingLeft: "1px",
                                                    paddingRight: "0px",
                                                    color:' var(--light-color)',
                                                    padding: '3px',
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
                                                        fill:' var(--light-color)',
                                                        width: '18px',
                                                        height: '18px',
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
                                                      color:' var(--light-color)',
                                                      padding: '3px',
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
                            {__("Style", "cocoblocks")}
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

                    <div
                      className="content-section-panel"
                      style={{ paddingTop: "0" }}
                    >
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
                            <div
                              className="button-move"
                              style={{
                                marginTop: "2px",
                                marginBottom: "10px",
                              }}
                            >
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
                              <div className="custom-block-added">
                                <div
                                  className="divider-controls"
                                  style={{ marginTop: "0" }}
                                ></div>
                                <div
                                  className="custom-select"
                                  style={{ paddingTop: "8px" }}
                                >
                                  <div className="title-element">
                                    <Button
                                      isDestructive
                                      onClick={() =>
                                        removeSlideTitle(slide.id, elementIndex)
                                      }
                                      className="button-remove-element"
                                      style={{
                                        position: "absolute",
                                        right: "70px",
                                        top: "-2px",
                                      }}
                                      label={__("Remove Text", "cocoblocks")}
                                      icon={trash}
                                    ></Button>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      height="24px"
                                      viewBox="0 -960 960 960"
                                      width="24px"
                                      fill="#e8eaed"
                                    >
                                      <path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
                                    </svg>
                                    <h2>{__("Text", "cocoblocks")}</h2>
                                  </div>
                                </div>
                                <SectionSelector
                                  onSectionChange={setActiveSection}
                                />
                                {activeSection === "content" && (
                                  <>
                                    <div
                                      className="content-title-custom-panel intermedy"
                                      style={{
                                        marginTop: "-18px",
                                        backgroundColor:
                                          "var(--dark-intermedy)",
                                        marginBottom: "10px",
                                      }}
                                    >
                                      <h2 className="title-custom-panel">
                                        {__("Content", "cocoblocks")}
                                      </h2>
                                    </div>

                                    <div className="custom-select">
                                      <TextareaControl
                                        value={element.text}
                                        onChange={(newTitle) =>
                                          updateSlideTitle(
                                            slide.id,
                                            elementIndex,
                                            newTitle
                                          )
                                        }
                                        placeholder={__(
                                          "Add text content...",
                                          "cocoblocks"
                                        )}
                                      />
                                    </div>
                                    <div className="custom-select">
                                      <AlignmentControlThree
                                        value={element.textAlign}
                                        onChange={(align) =>
                                          updateTextAlign(
                                            slide.id,
                                            elementIndex,
                                            align
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
                                              <path d="M360-160v-240q-83 0-141.5-58.5T160-600q0-83 58.5-141.5T360-800h360v80h-80v560h-80v-560H440v560h-80Z" />
                                            </svg>
                                            {__("Element html", "cocoblocks")}
                                          </>
                                        }
                                        value={element.elementTitle}
                                        onChange={(newElementTitle) =>
                                          updateElementTitle(
                                            slide.id,
                                            elementIndex,
                                            newElementTitle
                                          )
                                        }
                                        options={[
                                          {
                                            label: __("P", "cocoblocks"),
                                            value: "p",
                                          },
                                          {
                                            label: __("H6", "cocoblocks"),
                                            value: "h6",
                                          },
                                          {
                                            label: __("H5", "cocoblocks"),
                                            value: "h5",
                                          },
                                          {
                                            label: __("H4", "cocoblocks"),
                                            value: "h4",
                                          },
                                          {
                                            label: __("H3", "cocoblocks"),
                                            value: "h3",
                                          },
                                          {
                                            label: __("H2", "cocoblocks"),
                                            value: "h2",
                                          },
                                          {
                                            label: __("H1", "cocoblocks"),
                                            value: "h1",
                                          },
                                        ]}
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
                                        backgroundColor:
                                          "var(--dark-intermedy)",
                                        marginBottom: "10px",
                                      }}
                                    >
                                      <h2 className="title-custom-panel">
                                        {__("Font", "cocoblocks")}
                                      </h2>
                                    </div>
                                    <div className="custom-select">
                                      <ButtonGroup className="device-switcher">
                                        <Button
                                          size="small"
                                          isPressed={device === "desktop"}
                                          onClick={handleDesktopClick}
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="24px"
                                            viewBox="0 -960 960 960"
                                            width="24px"
                                            fill="#e8eaed"
                                            style={{
                                              width: "16px",
                                              height: "16px",
                                            }}
                                          >
                                            <path d="M320-120v-80h80v-80H160q-33 0-56.5-23.5T80-360v-400q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v400q0 33-23.5 56.5T800-280H560v80h80v80H320ZM160-360h640v-400H160v400Zm0 0v-400 400Z" />
                                          </svg>
                                        </Button>
                                        {showOtherButtons && (
                                          <>
                                            <Button
                                              size="small"
                                              isPressed={device === "tablet"}
                                              onClick={() =>
                                                setAttributes({
                                                  device: "tablet",
                                                })
                                              }
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="24px"
                                                viewBox="0 -960 960 960"
                                                width="24px"
                                                fill="#e8eaed"
                                                style={{
                                                  width: "16px",
                                                  height: "16px",
                                                }}
                                              >
                                                <path d="M120-160q-33 0-56.5-23.5T40-240v-480q0-33 23.5-56.5T120-800h720q33 0 56.5 23.5T920-720v480q0 33-23.5 56.5T840-160H120Zm40-560h-40v480h40v-480Zm80 480h480v-480H240v480Zm560-480v480h40v-480h-40Zm0 0h40-40Zm-640 0h-40 40Z" />
                                              </svg>
                                            </Button>
                                            <Button
                                              size="small"
                                              isPressed={device === "mobile"}
                                              onClick={() =>
                                                setAttributes({
                                                  device: "mobile",
                                                })
                                              }
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="24px"
                                                viewBox="0 -960 960 960"
                                                width="24px"
                                                fill="#e8eaed"
                                                style={{
                                                  width: "16px",
                                                  height: "16px",
                                                }}
                                              >
                                                <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-120v40h400v-40H280Zm0-80h400v-480H280v480Zm0-560h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Z" />
                                              </svg>
                                            </Button>
                                          </>
                                        )}
                                      </ButtonGroup>
                                      {device === "desktop" && (
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
                                                <path d="M560-160v-520H360v-120h520v120H680v520H560Zm-360 0v-320H80v-120h360v120H320v320H200Z" />
                                              </svg>
                                              {__("Font Size", "cocoblocks")}
                                            </>
                                          }
                                          beforeIcon={
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              height="24px"
                                              viewBox="0 -960 960 960"
                                              width="24px"
                                              fill="#e8eaed"
                                              style={{
                                                width: "16px",
                                                height: "16px",
                                              }}
                                            >
                                              <path d="M320-120v-80h80v-80H160q-33 0-56.5-23.5T80-360v-400q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v400q0 33-23.5 56.5T800-280H560v80h80v80H320ZM160-360h640v-400H160v400Zm0 0v-400 400Z" />
                                            </svg>
                                          }
                                          value={element.fontSize}
                                          onChange={(newSize) =>
                                            updateFontSize(
                                              slide.id,
                                              elementIndex,
                                              newSize
                                            )
                                          }
                                          min={4}
                                          max={500}
                                          step={1}
                                        />
                                      )}
                                      {device === "tablet" && (
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
                                                <path d="M560-160v-520H360v-120h520v120H680v520H560Zm-360 0v-320H80v-120h360v120H320v320H200Z" />
                                              </svg>
                                              {__("Font Size", "cocoblocks")}
                                            </>
                                          }
                                          beforeIcon={
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              height="24px"
                                              viewBox="0 -960 960 960"
                                              width="24px"
                                              fill="#e8eaed"
                                              style={{
                                                width: "16px",
                                                height: "16px",
                                              }}
                                            >
                                              <path d="M120-160q-33 0-56.5-23.5T40-240v-480q0-33 23.5-56.5T120-800h720q33 0 56.5 23.5T920-720v480q0 33-23.5 56.5T840-160H120Zm40-560h-40v480h40v-480Zm80 480h480v-480H240v480Zm560-480v480h40v-480h-40Zm0 0h40-40Zm-640 0h-40 40Z" />
                                            </svg>
                                          }
                                          value={element.fontSizeTablet}
                                          onChange={(newSizeTablet) =>
                                            updateFontSizeTablet(
                                              slide.id,
                                              elementIndex,
                                              newSizeTablet
                                            )
                                          }
                                          min={4}
                                          max={500}
                                          step={1}
                                        />
                                      )}
                                      {device === "mobile" && (
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
                                                <path d="M560-160v-520H360v-120h520v120H680v520H560Zm-360 0v-320H80v-120h360v120H320v320H200Z" />
                                              </svg>
                                              {__("Font Size", "cocoblocks")}
                                            </>
                                          }
                                          beforeIcon={
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              height="24px"
                                              viewBox="0 -960 960 960"
                                              width="24px"
                                              fill="#e8eaed"
                                              style={{
                                                width: "16px",
                                                height: "16px",
                                              }}
                                            >
                                              <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-120v40h400v-40H280Zm0-80h400v-480H280v480Zm0-560h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Z" />
                                            </svg>
                                          }
                                          value={element.fontSizeMobile}
                                          onChange={(newSizeMobile) =>
                                            updateFontSizeMobile(
                                              slide.id,
                                              elementIndex,
                                              newSizeMobile
                                            )
                                          }
                                          min={4}
                                          max={500}
                                          step={1}
                                        />
                                      )}
                                    </div>
                                    <div className="custom-select">
                                      <FontStyle
                                        value={element.fontStyle || {}} // Inizializza con un oggetto vuoto se undefined
                                        onChange={(styleType, value) =>
                                          updateFontStyle(
                                            slide.id,
                                            elementIndex,
                                            styleType,
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
                                              <path d="M186-80q-54 0-80-22t-26-66q0-58 49-74t116-16h21v-56q0-34-1-55.5t-6-35.5q-5-14-11.5-19.5T230-430q-9 0-16.5 3t-12.5 8q-4 5-5 10.5t1 11.5q6 11 14 21.5t8 24.5q0 25-17.5 42.5T159-291q-25 0-42.5-17.5T99-351q0-27 12-44t32.5-27q20.5-10 47.5-14t58-4q85 0 118 30.5T400-302v147q0 19 4.5 28t15.5 9q12 0 19.5-18t9.5-56h11q-3 62-23.5 87T368-80q-43 0-67.5-13.5T269-134q-10 29-29.5 41.5T186-80Zm373 0q-20 0-32.5-16.5T522-132l102-269q7-17 22-28t34-11q19 0 34 11t22 28l102 269q8 19-4.5 35.5T801-80q-12 0-22-7t-15-19l-20-58H616l-20 58q-4 11-14 18.5T559-80Zm-324-29q13 0 22-20.5t9-49.5v-67q-26 0-38 15.5T216-180v11q0 36 4 48t15 12Zm407-125h77l-39-114-38 114Zm-37-285q-48 0-76.5-33.5T500-643q0-104 66-170.5T735-880q42 0 68 9.5t26 24.5q0 6-2 12t-7 11q-5 7-12.5 10t-15.5 1q-14-4-32-7t-33-3q-71 0-114 48t-43 127q0 22 8 46t36 24q11 0 21.5-5t18.5-14q17-18 31.5-60T712-758q2-13 10.5-18.5T746-782q18 0 27.5 9.5T779-749q-12 43-17.5 75t-5.5 58q0 20 5.5 29t16.5 9q11 0 21.5-8t29.5-30q2-3 15-7 8 0 12 6t4 17q0 28-32 54t-67 26q-26 0-44.5-14T691-574q-15 26-37 40.5T605-519Zm-485-1v-220q0-58 41-99t99-41q58 0 99 41t41 99v220h-80v-80H200v80h-80Zm80-160h120v-60q0-25-17.5-42.5T260-800q-25 0-42.5 17.5T200-740v60Z" />
                                            </svg>
                                            {__("Font family", "cocoblocks")}
                                          </>
                                        }
                                        value={element.fontFamily}
                                        options={fontOptions}
                                        onChange={(family) =>
                                          updateTextFamily(
                                            slide.id,
                                            elementIndex,
                                            family
                                          )
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
                                              <path d="M240-160 80-320l56-56 64 62v-332l-64 62-56-56 160-160 160 160-56 56-64-62v332l64-62 56 56-160 160Zm240-40v-80h400v80H480Zm0-240v-80h400v80H480Zm0-240v-80h400v80H480Z" />
                                            </svg>
                                            {__("Line height", "cocoblocks")}
                                          </>
                                        }
                                        value={element.lineHeight}
                                        onChange={(newLineHeight) =>
                                          updateLineHeight(
                                            slide.id,
                                            elementIndex,
                                            newLineHeight
                                          )
                                        }
                                        min={0.5}
                                        max={2.5}
                                        step={0.1}
                                      />
                                    </div>
                                    <div className="custom-select color">
                                      <ColorOptionsPanel
                                        colorNormal={element.textColor}
                                        setColorNormal={(color) =>
                                          updateSlideTextColor(
                                            slide.id,
                                            elementIndex,
                                            color
                                          )
                                        }
                                        buttonTitle={__(
                                          "Text Color",
                                          "cocoblocks"
                                        )}
                                        buttonIcon={
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 -960 960 960"
                                            fill="#e8eaed"
                                            style={{
                                              marginBottom: "-9px",
                                              height: "24px",
                                              width: "24px",
                                              marginLeft: "-4px",
                                              marginRight: "-4px",
                                            }}
                                          >
                                            <path d="M192-396v-72h288v72H192Zm0-150v-72h432v72H192Zm0-150v-72h432v72H192Zm336 504v-113l210-209q7.26-7.41 16.13-10.71Q763-528 771.76-528q9.55 0 18.31 3.5Q798.83-521 806-514l44 45q6.59 7.26 10.29 16.13Q864-444 864-435.24t-3.29 17.92q-3.3 9.15-10.71 16.32L641-192H528Zm288-243-45-45 45 45ZM576-240h45l115-115-22-23-22-22-116 115v45Zm138-138-22-22 44 45-22-23Z" />
                                          </svg>
                                        }
                                      />
                                    </div>
                                    <div
                                      className="content-title-custom-panel intermedy"
                                      style={{
                                        marginTop: "0px",
                                        backgroundColor:
                                          "var(--dark-intermedy)",
                                        marginBottom: "10px",
                                      }}
                                    >
                                      <h2 className="title-custom-panel">
                                        {__("Spacings", "cocoblocks")}
                                      </h2>
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
                                        values={element.marginTitle}
                                        units={{}}
                                        onChange={(newMargintitle) =>
                                          updatenewMargintitle(
                                            slide.id,
                                            elementIndex,
                                            newMargintitle
                                          )
                                        }
                                      />
                                    </div>
                                  </>
                                )}
                                {activeSection === "adv-style" && (
                                  <>
                                    <div
                                      className="content-title-custom-panel intermedy"
                                      style={{
                                        marginTop: "-18px",
                                        backgroundColor:
                                          "var(--dark-intermedy)",
                                        marginBottom: "10px",
                                      }}
                                    >
                                      <h2 className="title-custom-panel">
                                        {__("Basic Transforms", "cocoblocks")}
                                      </h2>
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
                                              <path d="m360-160-56-56 70-72q-128-17-211-70T80-480q0-83 115.5-141.5T480-680q169 0 284.5 58.5T880-480q0 62-66.5 111T640-296v-82q77-20 118.5-49.5T800-480q0-32-85.5-76T480-600q-149 0-234.5 44T160-480q0 24 51 57.5T356-372l-52-52 56-56 160 160-160 160Z" />
                                            </svg>
                                            {__("Rotate", "cocoblocks")}
                                          </>
                                        }
                                        value={element.rotate}
                                        onChange={(rotate) =>
                                          updateRotate(
                                            slide.id,
                                            elementIndex,
                                            rotate
                                          )
                                        }
                                        min={0}
                                        max={360}
                                        step={1}
                                      />
                                    </div>
                                    <div
                                      className="content-title-custom-panel intermedy"
                                      style={{
                                        marginTop: "0px",
                                        backgroundColor:
                                          "var(--dark-intermedy)",
                                        marginBottom: "10px",
                                      }}
                                    >
                                      <h2 className="title-custom-panel">
                                        {__(
                                          "Transparency Setting",
                                          "cocoblocks"
                                        )}
                                      </h2>
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
                                              <path d="M480-120q-133 0-226.5-92T160-436q0-65 25-121.5T254-658l226-222 226 222q44 44 69 100.5T800-436q0 132-93.5 224T480-120ZM242-400h474q12-72-13.5-123T650-600L480-768 310-600q-27 26-53 77t-15 123Z" />
                                            </svg>
                                            {__("Opacity", "cocoblocks")}
                                          </>
                                        }
                                        value={element.opacity}
                                        onChange={(opacity) =>
                                          updateOpacity(
                                            slide.id,
                                            elementIndex,
                                            opacity
                                          )
                                        }
                                        min={0}
                                        max={1}
                                        step={0.1}
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
                                        backgroundColor:
                                          "var(--dark-intermedy)",
                                        marginBottom: "10px",
                                      }}
                                    >
                                      <h2 className="title-custom-panel">
                                        {__("Effects", "cocoblocks")}
                                      </h2>
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
                                              <path d="M360-80q-58 0-109-22t-89-60q-38-38-60-89T80-360q0-81 42-148t110-102q20-39 49.5-68.5T350-728q33-68 101-110t149-42q58 0 109 22t89 60q38 38 60 89t22 109q0 85-42 150T728-350q-20 39-49.5 68.5T610-232q-35 68-102 110T360-80Zm0-80q33 0 63.5-10t56.5-30q-58 0-109-22t-89-60q-38-38-60-89t-22-109q-20 26-30 56.5T160-360q0 42 16 78t43 63q27 27 63 43t78 16Zm120-120q33 0 64.5-10t57.5-30q-59 0-110-22.5T403-403q-38-38-60.5-89T320-602q-20 26-30 57.5T280-480q0 42 15.5 78t43.5 63q27 28 63 43.5t78 15.5Zm120-120q18 0 34.5-3t33.5-9q22-60 6.5-115.5T621-621q-38-38-93.5-53.5T412-668q-6 17-9 33.5t-3 34.5q0 42 15.5 78t43.5 63q27 28 63 43.5t78 15.5Zm160-78q20-26 30-57.5t10-64.5q0-42-15.5-78T741-741q-27-28-63-43.5T600-800q-35 0-65.5 10T478-760q59 0 110 22.5t89 60.5q38 38 60.5 89T760-478Z" />
                                            </svg>
                                            {__("Animation", "cocoblocks")}
                                          </>
                                        }
                                        value={element.animation}
                                        options={[
                                          { label: "None", value: "" },
                                          {
                                            label: "Letter Bounce",
                                            value: "bounce",
                                          },
                                          {
                                            label: "Stretch",
                                            value: "stretch",
                                          },
                                          { label: "Focus", value: "focus" },
                                        ]}
                                        onChange={(animation) =>
                                          updateTextAnimation(
                                            slide.id,
                                            elementIndex,
                                            animation
                                          )
                                        }
                                      />
                                    </div>
                                  </>
                                )}
                                {activeSection === "parallax" && (
                                  <>
                                    {parallax && (
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
                                                  <path d="m680-320-56-56 63-64H440v-80h247l-63-64 56-56 160 160-160 160ZM200-200h80v-560h-80v560Zm-80 80v-720h240v720H120Zm320 0v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80ZM200-200h80-80Z" />
                                                </svg>
                                                {__(
                                                  "Parallax offset X",
                                                  "cocoblocks"
                                                )}
                                              </>
                                            }
                                            value={element.parallaxTitle}
                                            onChange={(newParallaxTitle) =>
                                              updateParallaxTitle(
                                                slide.id,
                                                elementIndex,
                                                newParallaxTitle
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
                                                {__(
                                                  "Parallax offset Y",
                                                  "cocoblocks"
                                                )}
                                              </>
                                            }
                                            value={element.parallaxTitleY}
                                            onChange={(newParallaxTitleY) =>
                                              updateParallaxTitleY(
                                                slide.id,
                                                elementIndex,
                                                newParallaxTitleY
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
                                                {__(
                                                  "Parallax scale",
                                                  "cocoblocks"
                                                )}
                                              </>
                                            }
                                            value={element.parallaxTitleScale}
                                            onChange={(newParallaxTitleScale) =>
                                              updateParallaxTitleScale(
                                                slide.id,
                                                elementIndex,
                                                newParallaxTitleScale
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
                                                {__(
                                                  "Parallax opacity",
                                                  "cocoblocks"
                                                )}
                                              </>
                                            }
                                            value={element.parallaxTitleOpacity}
                                            onChange={(
                                              newParallaxTitleOpacity
                                            ) =>
                                              updateParallaxTitleOpacity(
                                                slide.id,
                                                elementIndex,
                                                newParallaxTitleOpacity
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
                                                {__(
                                                  "Parallax duration",
                                                  "cocoblocks"
                                                )}
                                              </>
                                            }
                                            value={
                                              element.parallaxTitleDuration
                                            }
                                            onChange={(
                                              newParallaxTitleDuration
                                            ) =>
                                              updateParallaxTitleDuration(
                                                slide.id,
                                                elementIndex,
                                                newParallaxTitleDuration
                                              )
                                            }
                                            min={100}
                                            max={2000}
                                            step={10}
                                          />
                                        </div>
                                      </>
                                    )}
                                    <div
                                      className="content-title-custom-panel intermedy"
                                      style={{
                                        marginTop: "-18px",
                                        backgroundColor:
                                          "var(--dark-intermedy)",
                                        marginBottom: "10px",
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
                                          borderRadius: 0,
                                          marginTop: "18px",
                                        }}
                                      >
                                        {__(
                                          'For these effects, you need to enable "Parallax" from the Slider options under the Animation section!',
                                          "cocoblocks"
                                        )}
                                      </p>
                                    )}
                                  </>
                                )}
                              </div>
                            )}
                            {element.type === "div" && (
                              <>
                                <div className="divider-controls"></div>
                                <div className="custom-select">
                                  <div className="label-image-element">
                                    <div className="content-label-image">
                                      <span
                                        className="dashicons dashicons-format-image"
                                        style={{
                                          fontSize: "16px",
                                          width: "16px",
                                          marginRight: "10px",
                                          color: "var(--light-color)",
                                        }}
                                      ></span>
                                      <h2>{__("Block", "slider")}</h2>
                                    </div>
                                    <Button
                                      onClick={() =>
                                        removeSlideDiv(slide.id, elementIndex)
                                      }
                                      isDestructive
                                      icon={trash}
                                      label={__("Remove block", "cocoblocks")}
                                      className="button-remove-element"
                                    />
                                  </div>
                                  <div className="custom-select color">
                                    <ColorOptionsPanel
                                      colorNormal={element.backgroundColor}
                                      setColorNormal={(newColor) =>
                                        updateDivBackgroundColor(
                                          slide.id,
                                          elementIndex,
                                          newColor
                                        )
                                      }
                                      buttonTitle={__(
                                        "Background Color",
                                        "cocoblocks"
                                      )}
                                      buttonIcon="admin-customizer"
                                    />
                                  </div>
                                  <div className="custom-select">
                                    <SelectControl
                                      label={
                                        <>
                                          <Icon
                                            icon="screenoptions"
                                            style={{
                                              marginRight: "5px",
                                              width: "16px",
                                              height: "16px",
                                              fontSize: "16px",
                                            }}
                                          />
                                          {__(
                                            "Content direction",
                                            "cocoblocks"
                                          )}
                                        </>
                                      }
                                      value={slide.layoutDiv}
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
                                      onChange={(newLayoutDiv) =>
                                        updateSlideLayoutDiv(
                                          slide.id,
                                          newLayoutDiv
                                        )
                                      }
                                    />
                                  </div>
                                  <div className="custom-select">
                                    <RangeControl
                                      label={
                                        <>
                                          <Icon
                                            icon="image-flip-horizontal"
                                            style={{
                                              marginRight: "5px",
                                              width: "16px",
                                              height: "16px",
                                              fontSize: "16px",
                                            }}
                                          />
                                          {__(
                                            "Gap between items",
                                            "cocoblocks"
                                          )}
                                        </>
                                      }
                                      value={slide.gapItemsDiv}
                                      onChange={(newGapItemsDiv) =>
                                        updateSlideGapItemsDiv(
                                          slide.id,
                                          newGapItemsDiv
                                        )
                                      }
                                      min={0}
                                      max={256}
                                      step={1}
                                    />
                                  </div>
                                  <div className="custom-select">
                                    <AlignmentControl
                                      value={slide.positionDiv}
                                      onChange={(newPositionDiv) =>
                                        updateSlidePositionDiv(
                                          slide.id,
                                          newPositionDiv
                                        )
                                      }
                                    />
                                  </div>
                                  <div className="custom-select color">
                                    <ColorOptionsPanel
                                      colorNormal={
                                        slide.backgroundBorderColorDiv
                                      }
                                      setColorNormal={(colorDiv) =>
                                        updateSlideBackgroundBorderColorDiv(
                                          slide.id,
                                          colorDiv
                                        )
                                      }
                                      buttonTitle={__(
                                        "Border Color",
                                        "cocoblocks"
                                      )}
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
                                            style={{
                                              marginRight: "4px",
                                              marginLeft: "-2px",
                                              marginBottom: "-4px",
                                            }}
                                          >
                                            <path d="M144-144v-672h72v672h-72Zm150 0v-72h72v72h-72Zm0-300v-72h72v72h-72Zm0-300v-72h72v72h-72Zm150 600v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm150 600v-72h72v72h-72Zm0-300v-72h72v72h-72Zm0-300v-72h72v72h-72Zm150 600v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Z" />
                                          </svg>
                                          {__("Border width", "cocoblocks")}
                                        </>
                                      }
                                      value={slide.backgroundBorderSizeDiv}
                                      onChange={(newSizeDiv) =>
                                        updateSlideBackgroundBorderSizeDiv(
                                          slide.id,
                                          newSizeDiv
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
                                            style={{
                                              marginRight: "4px",
                                              marginLeft: "-2px",
                                              marginBottom: "-4px",
                                            }}
                                          >
                                            <path d="M216-216h528v-528H216v528Zm-72 72v-672h672v672H144Zm150-300v-72h72v72h-72Zm150 150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm150 150v-72h72v72h-72Z" />
                                          </svg>
                                          {__("Border radius", "cocoblocks")}
                                        </>
                                      }
                                      value={slide.backgroundBorderRadiusDiv}
                                      onChange={(newRadiusDiv) =>
                                        updateSlideBackgroundBorderRadiusDiv(
                                          slide.id,
                                          newRadiusDiv
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
                                              marginRight: "4px",
                                              marginLeft: "-2px",
                                              marginBottom: "-4px",
                                            }}
                                          >
                                            <path d="M192-744v-72h576v72H192Zm252 600v-390L339-429l-51-51 192-192 192 192-51 51-105-105v390h-72Z" />
                                          </svg>
                                          {__(
                                            "Content vertical padding",
                                            "cocoblocks"
                                          )}
                                        </>
                                      }
                                      value={slide.backgroundVerticalPaddingDiv}
                                      onChange={(newVerticalPaddingDiv) =>
                                        updateSlideBackgroundVerticalPaddingDiv(
                                          slide.id,
                                          newVerticalPaddingDiv
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
                                              marginRight: "4px",
                                              marginLeft: "-2px",
                                              marginBottom: "-4px",
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
                                      value={
                                        slide.backgroundHorizontalPaddingDiv
                                      }
                                      onChange={(newHorizontalPaddingDiv) =>
                                        updateSlideBackgroundHorizontalPaddingDiv(
                                          slide.id,
                                          newHorizontalPaddingDiv
                                        )
                                      }
                                      min={0}
                                      max={256}
                                      step={1}
                                    />
                                  </div>
                                  <div className="divider-controls-inner"></div>
                                  <TextareaControl
                                    label={__("Text", "cocoblocks")}
                                    value={element.content}
                                    onChange={(newContent) =>
                                      updateSlideDiv(
                                        slide.id,
                                        elementIndex,
                                        newContent
                                      )
                                    }
                                    placeholder={__(
                                      "Add text block...",
                                      "cocoblocks"
                                    )}
                                  />
                                  <div className="custom-select color">
                                    <ColorOptionsPanel
                                      colorNormal={element.textColorDiv}
                                      setColorNormal={(colorDiv) =>
                                        updateSlideTextColorDiv(
                                          slide.id,
                                          elementIndex,
                                          colorDiv
                                        )
                                      }
                                      buttonTitle={__(
                                        "Text Color",
                                        "cocoblocks"
                                      )}
                                      buttonIcon={
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 -960 960 960"
                                          fill="#e8eaed"
                                          style={{
                                            marginBottom: "-10px",
                                            height: "24px",
                                            width: "24px",
                                            marginLeft: "-3px",
                                            marginRight: "-5px",
                                          }}
                                        >
                                          <path d="M192-396v-72h288v72H192Zm0-150v-72h432v72H192Zm0-150v-72h432v72H192Zm336 504v-113l210-209q7.26-7.41 16.13-10.71Q763-528 771.76-528q9.55 0 18.31 3.5Q798.83-521 806-514l44 45q6.59 7.26 10.29 16.13Q864-444 864-435.24t-3.29 17.92q-3.3 9.15-10.71 16.32L641-192H528Zm288-243-45-45 45 45ZM576-240h45l115-115-22-23-22-22-116 115v45Zm138-138-22-22 44 45-22-23Z" />
                                        </svg>
                                      }
                                    />
                                  </div>
                                  <div className="custom-select">
                                    <AlignmentControlThree
                                      value={element.textAlignDiv}
                                      onChange={(alignDiv) =>
                                        updateTextAlignDiv(
                                          slide.id,
                                          elementIndex,
                                          alignDiv
                                        )
                                      }
                                    />
                                  </div>
                                  <div className="custom-select">
                                    <FontStyle
                                      value={element.fontStyleDiv || {}} // Inizializza con un oggetto vuoto se undefined
                                      onChange={(styleTypeDiv, value) =>
                                        updateFontStyleDiv(
                                          slide.id,
                                          elementIndex,
                                          styleTypeDiv,
                                          value
                                        )
                                      }
                                    />
                                  </div>
                                  <div className="custom-select">
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
                                            <path d="M360-160v-240q-83 0-141.5-58.5T160-600q0-83 58.5-141.5T360-800h360v80h-80v560h-80v-560H440v560h-80Z" />
                                          </svg>
                                          {__("Element html", "cocoblocks")}
                                        </>
                                      }
                                      value={element.elementTitleDiv}
                                      onChange={(newElementTitleDiv) =>
                                        updateElementTitleDiv(
                                          slide.id,
                                          elementIndex,
                                          newElementTitleDiv
                                        )
                                      }
                                      options={[
                                        {
                                          label: __("P", "cocoblocks"),
                                          value: "p",
                                        },
                                        {
                                          label: __("H6", "cocoblocks"),
                                          value: "h6",
                                        },
                                        {
                                          label: __("H5", "cocoblocks"),
                                          value: "h5",
                                        },
                                        {
                                          label: __("H4", "cocoblocks"),
                                          value: "h4",
                                        },
                                        {
                                          label: __("H3", "cocoblocks"),
                                          value: "h3",
                                        },
                                        {
                                          label: __("H2", "cocoblocks"),
                                          value: "h2",
                                        },
                                        {
                                          label: __("H1", "cocoblocks"),
                                          value: "h1",
                                        },
                                      ]}
                                    />
                                  </div>
                                  <ButtonGroup className="device-switcher">
                                    <Button
                                      size="small"
                                      isPressed={device === "desktop"}
                                      onClick={handleDesktopClick}
                                    >
                                      <span
                                        className="dashicons dashicons-desktop"
                                        style={{
                                          height: "16px",
                                          width: "16px",
                                          fontSize: "16px",
                                        }}
                                      ></span>
                                    </Button>
                                    {showOtherButtons && (
                                      <>
                                        <Button
                                          size="small"
                                          isPressed={device === "tablet"}
                                          onClick={() =>
                                            setAttributes({ device: "tablet" })
                                          }
                                        >
                                          <span
                                            className="dashicons dashicons-tablet"
                                            style={{
                                              height: "16px",
                                              width: "16px",
                                              fontSize: "16px",
                                            }}
                                          ></span>
                                        </Button>
                                        <Button
                                          size="small"
                                          isPressed={device === "mobile"}
                                          onClick={() =>
                                            setAttributes({ device: "mobile" })
                                          }
                                        >
                                          <span
                                            className="dashicons dashicons-smartphone"
                                            style={{
                                              height: "16px",
                                              width: "16px",
                                              fontSize: "16px",
                                            }}
                                          ></span>
                                        </Button>
                                      </>
                                    )}
                                  </ButtonGroup>
                                  {device === "desktop" && (
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
                                              marginBottom: "-5px",
                                              marginRight: "5px",
                                            }}
                                          >
                                            <path d="m40-200 210-560h100l210 560h-96l-51-143H187l-51 143H40Zm176-224h168l-82-232h-4l-82 232Zm504 104v-120H600v-80h120v-120h80v120h120v80H800v120h-80Z" />
                                          </svg>
                                          {__("Font Size", "cocoblocks")}
                                        </>
                                      }
                                      beforeIcon="desktop"
                                      value={element.fontSizeDiv}
                                      onChange={(newSizeDiv) =>
                                        updateFontSizeDiv(
                                          slide.id,
                                          elementIndex,
                                          newSizeDiv
                                        )
                                      }
                                      min={4}
                                      max={500}
                                      step={1}
                                    />
                                  )}
                                  {device === "tablet" && (
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
                                              marginBottom: "-5px",
                                              marginRight: "5px",
                                            }}
                                          >
                                            <path d="m40-200 210-560h100l210 560h-96l-51-143H187l-51 143H40Zm176-224h168l-82-232h-4l-82 232Zm504 104v-120H600v-80h120v-120h80v120h120v80H800v120h-80Z" />
                                          </svg>
                                          {__("Font Size", "cocoblocks")}
                                        </>
                                      }
                                      beforeIcon="tablet"
                                      value={element.fontSizeTabletDiv}
                                      onChange={(newSizeTabletDiv) =>
                                        updateFontSizeTabletDiv(
                                          slide.id,
                                          elementIndex,
                                          newSizeTabletDiv
                                        )
                                      }
                                      min={4}
                                      max={500}
                                      step={1}
                                    />
                                  )}
                                  {device === "mobile" && (
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
                                              marginBottom: "-5px",
                                              marginRight: "5px",
                                            }}
                                          >
                                            <path d="m40-200 210-560h100l210 560h-96l-51-143H187l-51 143H40Zm176-224h168l-82-232h-4l-82 232Zm504 104v-120H600v-80h120v-120h80v120h120v80H800v120h-80Z" />
                                          </svg>
                                          {__("Font Size", "cocoblocks")}
                                        </>
                                      }
                                      beforeIcon="smartphone"
                                      value={element.fontSizeMobileDiv}
                                      onChange={(newSizeMobileDiv) =>
                                        updateFontSizeMobileDiv(
                                          slide.id,
                                          elementIndex,
                                          newSizeMobileDiv
                                        )
                                      }
                                      min={4}
                                      max={500}
                                      step={1}
                                    />
                                  )}
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
                                              marginRight: "4px",
                                              marginLeft: "-2px",
                                              marginBottom: "-4px",
                                            }}
                                          >
                                            <path d="M240-160 80-320l56-56 64 62v-332l-64 62-56-56 160-160 160 160-56 56-64-62v332l64-62 56 56-160 160Zm240-40v-80h400v80H480Zm0-240v-80h400v80H480Zm0-240v-80h400v80H480Z" />
                                          </svg>
                                          {__("Line height", "cocoblocks")}
                                        </>
                                      }
                                      value={element.lineHeightDiv}
                                      onChange={(newLineHeightDiv) =>
                                        updateLineHeightDiv(
                                          slide.id,
                                          elementIndex,
                                          newLineHeightDiv
                                        )
                                      }
                                      min={0.5}
                                      max={2.5}
                                      step={0.1}
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
                                      values={element.marginTitleDiv}
                                      units={{}}
                                      onChange={(newMargintitleDiv) =>
                                        updatenewMargintitleDiv(
                                          slide.id,
                                          elementIndex,
                                          newMargintitleDiv
                                        )
                                      }
                                    />
                                  </div>
                                  <div className="divider-controls-inner"></div>
                                  <div className="content-img-upload">
                                    <MediaUploadCheck>
                                      <MediaUpload
                                        onSelect={(media) =>
                                          updateDivImage(
                                            slide.id,
                                            elementIndex,
                                            media.url,
                                            media.alt
                                          )
                                        }
                                        allowedTypes={["image"]}
                                        render={({ open }) => (
                                          <>
                                            {!slide.elements[elementIndex]
                                              .imageUrl ? (
                                              <Button
                                                onClick={open}
                                                style={{
                                                  width: "100%",
                                                  display: "flex",
                                                  alignItems: "center",
                                                  justifyContent:
                                                    "space-between",
                                                    color:' var(--light-color)',
                                                    padding: '3px',
                                                }}
                                              >
                                                <div>
                                                  <span
                                                    className="dashicons dashicons-format-image"
                                                    style={{
                                                      fontSize: "16px",
                                                      width: "16px",
                                                      height: "16px",
                                                      marginLeft: "-2px",
                                                      marginRight: "5px",
                                                    }}
                                                  ></span>
                                                  {__(
                                                    "Add Image",
                                                    "cocoblocks"
                                                  )}
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
                                                    src={
                                                      slide.elements[
                                                        elementIndex
                                                      ].imageUrl
                                                    }
                                                    alt={
                                                      slide.elements[
                                                        elementIndex
                                                      ].alt ||
                                                      __(
                                                        "Uploaded Image",
                                                        "cocoblocks"
                                                      )
                                                    }
                                                    style={{
                                                      width: "100%",
                                                      borderRadius: "8px",
                                                    }}
                                                  />
                                                </div>
                                                <Button
                                                  onClick={open}
                                                  style={{ marginLeft: "2px" }}
                                                  icon={replace}
                                                  label={__(
                                                    "Change Image",
                                                    "cocoblocks"
                                                  )}
                                                ></Button>
                                              </>
                                            )}
                                          </>
                                        )}
                                      />
                                    </MediaUploadCheck>
                                    {slide.elements[elementIndex].imageUrl && (
                                      <Button
                                        onClick={() =>
                                          removeDivImage(slide.id, elementIndex)
                                        }
                                        isDestructive
                                        icon={trash}
                                        label={__("Remove Image", "cocoblocks")}
                                        style={{ marginTop: "10px", color:' var(--light-color)',
                                          padding: '3px', }}
                                      ></Button>
                                    )}
                                  </div>
                                  <div
                                    className="button-add-element"
                                    style={{ paddingBottom: "12px" }}
                                  >
                                    <Button
                                      onClick={() =>
                                        addInnerDiv(slide.id, elementIndex)
                                      }
                                      label={__("Add inner block", "slide")}
                                    >
                                      <Icon icon={addTemplate} />
                                    </Button>
                                  </div>

                                  {element.innerDivs &&
                                    element.innerDivs.map(
                                      (innerDiv, innerIndex) => (
                                        <div key={innerIndex}>
                                          <div
                                            className="divider-controls"
                                            style={{ height: "2px" }}
                                          ></div>
                                          <div className="label-image-element">
                                            <div className="content-label-image">
                                              <span
                                                className="dashicons dashicons-format-image"
                                                style={{
                                                  fontSize: "16px",
                                                  width: "16px",
                                                  marginRight: "10px",
                                                  color: "var(--light-color)",
                                                }}
                                              ></span>
                                              <h2>
                                                {__("Inner block", "slider")}
                                              </h2>
                                            </div>
                                            <Button
                                              onClick={() =>
                                                removeInnerDiv(
                                                  slide.id,
                                                  elementIndex,
                                                  innerIndex
                                                )
                                              }
                                              isDestructive
                                              icon={trash}
                                              label={__(
                                                "Remove inner block",
                                                "cocoblocks"
                                              )}
                                              className="button-remove-element"
                                            />
                                          </div>
                                          <TextareaControl
                                            label={__("Text", "cocoblocks")}
                                            value={innerDiv.content}
                                            onChange={(newContent) =>
                                              updateInnerDivContent(
                                                slide.id,
                                                elementIndex,
                                                innerIndex,
                                                newContent
                                              )
                                            }
                                            placeholder={__(
                                              "Add inner block content...",
                                              "cocoblocks"
                                            )}
                                          />
                                          <div className="custom-select color">
                                            <ColorOptionsPanel
                                              colorNormal={
                                                innerDiv.backgroundColor
                                              }
                                              setColorNormal={(newColor) =>
                                                updateInnerDivBackgroundColor(
                                                  slide.id,
                                                  elementIndex,
                                                  innerIndex,
                                                  newColor
                                                )
                                              }
                                              buttonTitle={__(
                                                "Background Color",
                                                "cocoblocks"
                                              )}
                                              buttonIcon="admin-customizer"
                                            />
                                          </div>
                                          <div className="content-img-upload">
                                            <MediaUploadCheck>
                                              <MediaUpload
                                                onSelect={(media) =>
                                                  updateInnerDivImage(
                                                    slide.id,
                                                    elementIndex,
                                                    innerIndex,
                                                    media.url,
                                                    media.alt
                                                  )
                                                }
                                                allowedTypes={["image"]}
                                                render={({ open }) => (
                                                  <>
                                                    {!innerDiv.imageUrl ? (
                                                      <Button
                                                        onClick={open}
                                                        style={{
                                                          width: "100%",
                                                          display: "flex",
                                                          alignItems: "center",
                                                          justifyContent:
                                                            "space-between",
                                                            color:' var(--light-color)',
                                                            padding: '3px',
                                                        }}
                                                      >
                                                        <div>
                                                          <span
                                                            className="dashicons dashicons-format-image"
                                                            style={{
                                                              fontSize: "16px",
                                                              width: "16px",
                                                              height: "16px",
                                                              marginLeft:
                                                                "-2px",
                                                              marginRight:
                                                                "5px",
                                                            }}
                                                          ></span>
                                                          {__(
                                                            "Add Image",
                                                            "cocoblocks"
                                                          )}
                                                        </div>
                                                        <span
                                                          className="dashicons dashicons-arrow-down-alt2"
                                                          style={{
                                                            position:
                                                              "relative",
                                                            right: "2px",
                                                            top: "6px",
                                                            fontSize: "12px",
                                                          }}
                                                        ></span>
                                                      </Button>
                                                    ) : (
                                                      <>
                                                        <div
                                                          style={{
                                                            position:
                                                              "relative",
                                                            padding: "0px 10px",
                                                            marginTop: "12px",
                                                          }}
                                                        >
                                                          <img
                                                            src={
                                                              innerDiv.imageUrl
                                                            }
                                                            alt={
                                                              innerDiv.alt ||
                                                              __(
                                                                "Uploaded Image",
                                                                "cocoblocks"
                                                              )
                                                            }
                                                            style={{
                                                              width: "100%",
                                                              borderRadius:
                                                                "8px",
                                                            }}
                                                          />
                                                        </div>
                                                        <Button
                                                          onClick={open}
                                                          style={{
                                                            marginLeft: "2px",
                                                          }}
                                                          icon={replace}
                                                          label={__(
                                                            "Change Image",
                                                            "cocoblocks"
                                                          )}
                                                        ></Button>
                                                      </>
                                                    )}
                                                  </>
                                                )}
                                              />
                                            </MediaUploadCheck>
                                            {innerDiv.imageUrl && (
                                              <Button
                                                onClick={() =>
                                                  removeInnerDivImage(
                                                    slide.id,
                                                    elementIndex,
                                                    innerIndex
                                                  )
                                                }
                                                isDestructive
                                                icon={trash}
                                                label={__(
                                                  "Remove Image",
                                                  "cocoblocks"
                                                )}
                                                style={{ marginTop: "10px" }}
                                              ></Button>
                                            )}
                                          </div>
                                        </div>
                                      )
                                    )}
                                </div>
                              </>
                            )}
                            {element.type === "image" && (
                              <>
                                <div className="divider-controls"></div>
                                <div className="custom-block-added">
                                  <div
                                    className="custom-select"
                                    style={{
                                      paddingTop: "15px",
                                      marginTop: "-20px",
                                    }}
                                  >
                                    <div className="content-img-upload">
                                      <div className="label-image-element">
                                        <div className="content-label-image">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="24px"
                                            viewBox="0 -960 960 960"
                                            width="24px"
                                            fill="#e8eaed"
                                            style={{
                                              marginTop: "-5px",
                                              marginRight: "5px",
                                              fill:' var(--light-color)',
                                              width: '18px',
                                              height: '18px',
                                            }}
                                          >
                                            <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z" />
                                          </svg>
                                          <h2>{__("Image", "slider")}</h2>
                                        </div>
                                        <Button
                                          onClick={() =>
                                            removeSlideImage(
                                              slide.id,
                                              elementIndex
                                            )
                                          }
                                          isDestructive
                                          icon={trash}
                                          label={__(
                                            "Remove Image",
                                            "cocoblocks"
                                          )}
                                          className="button-remove-element"
                                          style={{ marginTop: "-1px", color:' var(--light-color)',
                                            padding: '3px', }}
                                        />
                                      </div>
                                <SectionSelectorImage
                                  onSectionChange={setActiveSectionImage}
                                />
                                {activeSectionImage === "content" && (
                                  <>
                                   <div
                                      className="content-title-custom-panel intermedy"
                                      style={{
                                        marginTop: "-18px",
                                        backgroundColor:
                                          "var(--dark-intermedy)",
                                        marginBottom: "10px",
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
                                                <Button
                                                  onClick={open}
                                                  style={{
                                                    width: "100%",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent:
                                                      "space-between",
                                                      color:' var(--light-color)',
                                                  }}
                                                >
                                                  <div>
                                                    {__(
                                                      "Upload Image",
                                                      "cocoblocks"
                                                    )}
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
                                                        __(
                                                          "Uploaded Image",
                                                          "cocoblocks"
                                                        )
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
                                                      "Change Image",
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
                                  {element.url && (
                                    <>
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
                                          placeholder={__(
                                            "Add alt text...",
                                            "cocoblocks"
                                          )}
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
                                        marginTop: "-24px",
                                        backgroundColor:
                                          "var(--dark-intermedy)",
                                        marginBottom: "10px",
                                      }}
                                    >
                                    <h2 className="title-custom-panel">
                                      {__("Background", "cocoblocks")}
                                    </h2>
                                  </div>
                                    {element.url && (
                                    <>
                                      <div className="custom-select">
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
                                            updateSlideImageFit(
                                              slide.id,
                                              elementIndex,
                                              newFit
                                            )
                                          }
                                        />
                                      </div>
                                      {element.paddingImage > 0 && (
                                        <div className="custom-select color">
                                          <ColorOptionsPanel
                                            colorNormal={
                                              element.backgroundColorImage
                                            }
                                            setColorNormal={(
                                              backgroundColorImage
                                            ) =>
                                              updateSlideBackgroundColorImage(
                                                slide.id,
                                                elementIndex,
                                                backgroundColorImage
                                              )
                                            }
                                            buttonTitle={__(
                                              "Background Color",
                                              "cocoblocks"
                                            )}
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
                                      <div
                                        className="content-title-custom-panel intermedy"
                                        style={{
                                          marginTop: "12px",
                                          backgroundColor:
                                            "var(--dark-intermedy)",
                                          marginBottom: "10px",
                                        }}
                                      >
                                      <h2 className="title-custom-panel">
                                        {__("Width & Height", "cocoblocks")}
                                      </h2>
                                      </div>
                                      <div className="custom-select">
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
                                            updateWidthImage(
                                              slide.id,
                                              elementIndex,
                                              newWidthImage
                                            )
                                          }
                                          options={[
                                            {
                                              label: __("Auto", "slide"),
                                              value: "auto",
                                            },
                                            {
                                              label: __(
                                                "Relative",
                                                "cocoblocks"
                                              ),
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
                                            label={__(
                                              "Custom width (%)",
                                              "cocoblocks"
                                            )}
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
                                            label={__(
                                              "Custom width (px)",
                                              "cocoblocks"
                                            )}
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
                                      <div className="custom-select">
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
                                            updateHeightImage(
                                              slide.id,
                                              elementIndex,
                                              newHeightImage
                                            )
                                          }
                                          options={[
                                            {
                                              label: __("Auto", "slide"),
                                              value: "auto",
                                            },
                                            {
                                              label: __(
                                                "Relative",
                                                "cocoblocks"
                                              ),
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
                                            label={__(
                                              "Custom height (%)",
                                              "cocoblocks"
                                            )}
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
                                            label={__(
                                              "Custom height (px)",
                                              "cocoblocks"
                                            )}
                                            value={element.customHeightImagePx}
                                            onChange={(
                                              newCustomHeightImagePx
                                            ) =>
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
                                      </>
                                    )}
                                     <div
                                        className="content-title-custom-panel intermedy"
                                        style={{
                                          marginTop: "12px",
                                          backgroundColor:
                                            "var(--dark-intermedy)",
                                          marginBottom: "10px",
                                        }}
                                      >
                                      <h2 className="title-custom-panel">
                                        {__("Spacings", "cocoblocks")}
                                      </h2>
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
                                                <path d="M320-600q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm160 0q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm160 0q17 0 28.5-11.5T680-640q0-17-11.5-28.5T640-680q-17 0-28.5 11.5T600-640q0 17 11.5 28.5T640-600ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
                                              </svg>
                                              {__("Padding", "cocoblocks")}
                                            </>
                                          }
                                          value={element.paddingImage}
                                          onChange={(newPaddingImage) =>
                                            updatePaddingImage(
                                              slide.id,
                                              elementIndex,
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
                                          values={element.marginImage}
                                          units={{}}
                                          onChange={(newMarginImage) =>
                                            updatenewMarginImage(
                                              slide.id,
                                              elementIndex,
                                              newMarginImage
                                            )
                                          }
                                        />
                                      </div>
                                      <div
                                        className="content-title-custom-panel intermedy"
                                        style={{
                                          marginTop: "12px",
                                          backgroundColor:
                                            "var(--dark-intermedy)",
                                          marginBottom: "10px",
                                        }}
                                      >
                                      <h2 className="title-custom-panel">
                                        {__("Border", "cocoblocks")}
                                      </h2>
                                      </div>
                                      <div className="custom-select color">
                                        <ColorOptionsPanel
                                          colorNormal={
                                            element.backgroundBorderColorImage
                                          }
                                          setColorNormal={(borderColor) =>
                                            updateSlideBackgroundBorderColorImage(
                                              slide.id,
                                              elementIndex,
                                              borderColor
                                            )
                                          }
                                          buttonTitle={__(
                                            "Border Color",
                                            "cocoblocks"
                                          )}
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
                                          value={
                                            element.backgroundBorderSizeImage
                                          }
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
                                              {__(
                                                "Border radius",
                                                "cocoblocks"
                                              )}
                                            </>
                                          }
                                          value={
                                            element.backgroundBorderRadiusImage
                                          }
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
                                   </>
                                  )}
                                  {activeSectionImage === "adv-style" && (
                                  <>
                                   <div
                                      className="content-title-custom-panel intermedy"
                                      style={{
                                        marginTop: "-24px",
                                        backgroundColor:
                                          "var(--dark-intermedy)",
                                        marginBottom: "10px",
                                      }}
                                    >
                                    <h2 className="title-custom-panel">
                                      {__("Basic Transforms", "cocoblocks")}
                                    </h2>
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
                                                <path d="m360-160-56-56 70-72q-128-17-211-70T80-480q0-83 115.5-141.5T480-680q169 0 284.5 58.5T880-480q0 62-66.5 111T640-296v-82q77-20 118.5-49.5T800-480q0-32-85.5-76T480-600q-149 0-234.5 44T160-480q0 24 51 57.5T356-372l-52-52 56-56 160 160-160 160Z" />
                                              </svg>
                                              {__("Rotate", "cocoblocks")}
                                            </>
                                          }
                                          value={element.rotateImage}
                                          onChange={(rotateImage) =>
                                            updateRotateImage(
                                              slide.id,
                                              elementIndex,
                                              rotateImage
                                            )
                                          }
                                          min={0}
                                          max={360}
                                          step={1}
                                        />
                                      </div>
                                      <div
                                      className="content-title-custom-panel intermedy"
                                      style={{
                                        marginTop: "12px",
                                        backgroundColor:
                                          "var(--dark-intermedy)",
                                        marginBottom: "10px",
                                      }}
                                    >
                                    <h2 className="title-custom-panel">
                                      {__("TRANSPARENCY SETTING", "cocoblocks")}
                                    </h2>
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
                                                <path d="M480-120q-133 0-226.5-92T160-436q0-65 25-121.5T254-658l226-222 226 222q44 44 69 100.5T800-436q0 132-93.5 224T480-120ZM242-400h474q12-72-13.5-123T650-600L480-768 310-600q-27 26-53 77t-15 123Z" />
                                              </svg>
                                              {__("Opacity", "cocoblocks")}
                                            </>
                                          }
                                          value={element.opacityImage}
                                          onChange={(opacityImage) =>
                                            updateOpacityImage(
                                              slide.id,
                                              elementIndex,
                                              opacityImage
                                            )
                                          }
                                          min={0}
                                          max={1}
                                          step={0.1}
                                        />
                                      </div>

                                  </>
                                  )}
                                      
                                  {activeSectionImage === "animation" && (
                                  <>
                                   <div
                                      className="content-title-custom-panel intermedy"
                                      style={{
                                        marginTop: "-24px",
                                        backgroundColor:
                                          "var(--dark-intermedy)",
                                        marginBottom: "10px",
                                      }}
                                    >
                                    <h2 className="title-custom-panel">
                                      {__("Effects", "cocoblocks")}
                                    </h2>
                                  </div>
                                  <div className="custom-select">
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
                                            updateBlobMask(
                                              slide.id,
                                              elementIndex,
                                              newBlobMask
                                            )
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

                                  </>
                                  )}
                            
                                    {activeSectionImage === "parallax" && (
                                      <>
                                      <div
                                          className="content-title-custom-panel intermedy"
                                          style={{
                                            marginTop: "-24px",
                                            backgroundColor:
                                              "var(--dark-intermedy)",
                                            marginBottom: "10px",
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
                                          borderRadius: 0,
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
                                                  {__(
                                                    "Parallax offset X",
                                                    "cocoblocks"
                                                  )}
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
                                                  {__(
                                                    "Parallax offset Y",
                                                    "cocoblocks"
                                                  )}
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
                                                  {__(
                                                    "Parallax scale",
                                                    "cocoblocks"
                                                  )}
                                                </>
                                              }
                                              value={element.parallaxImageScale}
                                              onChange={(
                                                newParallaxImageScale
                                              ) =>
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
                                                  {__(
                                                    "Parallax opacity",
                                                    "cocoblocks"
                                                  )}
                                                </>
                                              }
                                              value={
                                                element.parallaxImageOpacity
                                              }
                                              onChange={(
                                                newParallaxImageOpacity
                                              ) =>
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
                                                  {__(
                                                    "Parallax duration",
                                                    "cocoblocks"
                                                  )}
                                                </>
                                              }
                                              value={
                                                element.parallaxImageDuration
                                              }
                                              onChange={(
                                                newParallaxImageDuration
                                              ) =>
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
                                        </>
                                      )}
                                      </>
                                    )}
                                    
                                </div>
                              </>
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
          className="slider-builder"
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
                    {slide.backgroundType === "video" &&
                      slide.backgroundVideo && (
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
                    {slide.elements.map((element, index) => {
                      // Styles Title
                      const stylesTitle = {
                        fontSize: element.fontSize + "px",
                        "--font-size-tablet": element.fontSizeTablet + "px",
                        "--font-size-mobile": element.fontSizeMobile + "px",
                        color: element.textColor,
                        textAlign: element.textAlign,
                        fontStyle: element.fontStyle?.fontStyle || "normal", // Valore di default
                        fontWeight: element.fontStyle?.fontWeight || "normal", // Valore di default
                        textDecoration:
                          element.fontStyle?.textDecoration || "none", // Valore di default
                        lineHeight: element.lineHeight,
                        width: "100%",
                        fontFamily: element.fontFamily,
                        margin: `${element.marginTitle?.top} ${element.marginTitle?.right} ${element.marginTitle?.bottom} ${element.marginTitle?.left}`, // Usa i valori aggi
                      };
                      const Tag = element.elementTitle || "h3";

                      // Styles Title div
                      const stylesTitleDiv = {
                        fontSize: element.fontSizeDiv + "px",
                        "--font-size-tablet": element.fontSizeTabletDiv + "px",
                        "--font-size-mobile": element.fontSizeMobileDiv + "px",
                        color: element.textColorDiv,
                        textAlign: element.textAlignDiv,
                        fontStyle: element.fontStyleDiv?.fontStyle || "normal", // Valore di default
                        fontWeight:
                          element.fontStyleDiv?.fontWeight || "normal", // Valore di default
                        textDecoration:
                          element.fontStyleDiv?.textDecoration || "none", // Valore di default
                        lineHeight: element.lineHeightDiv,
                        width: "100%",
                        margin: `${element.marginTitleDiv?.top} ${element.marginTitleDiv?.right} ${element.marginTitleDiv?.bottom} ${element.marginTitleDiv?.left}`, // Usa i valori aggi
                      };
                      const TagDiv = element.elementTitleDiv || "h3";

                      const splitTextIntoLetters = (
                        text = "",
                        animation = ""
                      ) => {
                        // Se l'animazione è "bounce", suddividi il testo in lettere
                        if (animation === "bounce") {
                          return text.split("").map((letter, index) => (
                            <span key={index} className={`letter ${animation}`}>
                              {letter}
                            </span>
                          ));
                        }

                        // Se l'animazione non è "bounce", restituisci il testo intero
                        return text;
                      };

                      switch (element.type) {
                        case "title":
                          return (
                            <div
                              style={{
                                transform: `rotate(${element.rotate}deg)`,
                                opacity: element.opacity,
                              }}
                              className="underline-effect"
                            >
                              <Tag
                                key={index}
                                className={`title-slide letter ${element.animation}`}
                                style={stylesTitle}
                                data-swiper-parallax-x={element.parallaxTitle}
                                data-swiper-parallax-y={element.parallaxTitleY}
                                data-swiper-parallax-scale={
                                  element.parallaxTitleScale
                                }
                                data-swiper-parallax-duration={
                                  element.parallaxTitleDuration
                                }
                                data-swiper-parallax-opacity={
                                  element.parallaxTitleOpacity
                                }
                              >
                                {splitTextIntoLetters(
                                  element.text,
                                  element.animation
                                )}
                              </Tag>
                            </div>
                          );
                        case "div":
                          return (
                            <div
                              className={
                                "div-slide " +
                                slide.positionDiv +
                                " " +
                                slide.layoutDiv +
                                "-layout"
                              }
                              key={index}
                              style={{
                                backgroundColor:
                                  element.backgroundColor || "transparent",
                                width: "100%",
                                display: "flex",
                                flexDirection:
                                  slide.layoutDiv === "horizontal"
                                    ? "row"
                                    : "column",
                                textAlign: "center",
                                width: "100%",
                                position: "relative",
                                visibility: "visible",
                                gap: slide.gapItemsDiv + "px",
                                borderRadius:
                                  slide.backgroundBorderRadiusDiv + "px",
                                paddingTop:
                                  slide.backgroundVerticalPaddingDiv + "px",
                                paddingBottom:
                                  slide.backgroundVerticalPaddingDiv + "px",
                                paddingLeft:
                                  slide.backgroundHorizontalPaddingDiv + "px",
                                paddingRight:
                                  slide.backgroundHorizontalPaddingDiv + "px",
                                border: slide.backgroundBorderColorDiv
                                  ? `${slide.backgroundBorderSizeDiv}px solid ${slide.backgroundBorderColorDiv}`
                                  : "none",
                              }}
                            >
                              {element.content ? (
                                <TagDiv style={stylesTitleDiv}>
                                  {element.content}
                                </TagDiv>
                              ) : null}
                              {element.imageUrl && (
                                <img
                                  src={element.imageUrl}
                                  alt=""
                                  style={{ width: "150px" }}
                                />
                              )}
                              {element.innerDivs && element.innerDivs.length > 0
                                ? element.innerDivs.map(
                                    (innerDiv, innerIndex) => (
                                      <div
                                        key={innerIndex}
                                        style={{
                                          backgroundColor:
                                            innerDiv.backgroundColor ||
                                            "transparent",
                                          maxWidth: "100%",
                                        }}
                                      >
                                        {innerDiv.content ? (
                                          <div>{innerDiv.content}</div>
                                        ) : null}
                                        {innerDiv.imageUrl && (
                                          <img src={innerDiv.imageUrl} alt="" />
                                        )}
                                      </div>
                                    )
                                  )
                                : null}
                            </div>
                          );
                        case "image":
                          const getImageStyle = () => {
                            let style = {
                              maxWidth: "100%",
                              minWidth: "0",
                              maxHeight: "100%",
                              minHeight: "0",
                              border:
                                element.backgroundBorderSizeImage +
                                "px solid" +
                                element.backgroundBorderColorImage,
                              borderRadius:
                                element.backgroundBorderRadiusImage + "px",
                              padding: element.paddingImage + "px",
                              backgroundColor: element.backgroundColorImage,
                              margin: `${element.marginImage?.top} ${element.marginImage?.right} ${element.marginImage?.bottom} ${element.marginImage?.left}`, // Usa i valori aggi
                            };

                            if (element.widthImage === "relative") {
                              style.width = `${element.customWidthImage}%`;
                            } else if (element.widthImage === "fixed") {
                              style.width = `${element.customWidthImagePx}px`;
                            }

                            if (element.heightImage === "relative") {
                              style.height = `${element.customHeightImage}%`;
                            } else if (element.heightImage === "fixed") {
                              style.height = `${element.customHeightImagePx}px`;
                            }

                            // Applica object-fit solo se width o height sono relative o fixed
                            if (
                              element.widthImage !== "auto" ||
                              element.heightImage !== "auto"
                            ) {
                              style.objectFit = element.fit;
                            }

                            return style;
                          };
                          return (
                            <div
                              style={{
                                transform: `rotate(${element.rotateImage}deg)`,
                                opacity: element.opacityImage,
                              }}
                              className="moving-background"
                            >
                              <img
                                key={index}
                                src={element.url}
                                alt={element.alt}
                                style={getImageStyle()}
                                className={`image-with-mask ${element.blobMask}`}
                                data-swiper-parallax-x={element.parallaxImage}
                                data-swiper-parallax-y={element.parallaxImageY}
                                data-swiper-parallax-scale={
                                  element.parallaxImageScale
                                }
                                data-swiper-parallax-duration={
                                  element.parallaxImageDuration
                                }
                                data-swiper-parallax-opacity={
                                  element.parallaxImageOpacity
                                }
                              />
                            </div>
                          );
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
        </Swiper>

        {navigation && (
          <>
            {/* Pulsante Avanti */}
            <div
              ref={nextRef}
              className={swiperButtonNextClasses}
              style={stylesNavigation}
            >
              {navigationIcons === "default" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={sizeNav + "px"}
                  height={sizeNav + "px"}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <mask
                    id="a"
                    width={sizeNav + "px"}
                    height={sizeNav + "px"}
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                  >
                    <path fill={navColor} d="M0 0h24v24H0z" />
                  </mask>
                  <g mask="url(#a)">
                    <path
                      fill={navColor}
                      d="M9.4 17.654 8.346 16.6l4.6-4.6-4.6-4.6L9.4 6.346 15.054 12 9.4 17.654Z"
                    />
                  </g>
                </svg>
              )}
              {navigationIcons === "one" && (
                <svg
                  width={sizeNav + "px"}
                  height={sizeNav + "px"}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_7_1879"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width={sizeNav + "px"}
                    height={sizeNav + "px"}
                  >
                    <rect
                      width={sizeNav + "px"}
                      height={sizeNav + "px"}
                      fill={navColor}
                    />
                  </mask>
                  <g mask="url(#mask0_7_1879)">
                    <path
                      d="M14.05 17.65L13 16.575L16.825 12.75H4.29999V11.25H16.825L13 7.42501L14.05 6.35001L19.7 12L14.05 17.65Z"
                      fill={navColor}
                    />
                  </g>
                </svg>
              )}
              {navigationIcons === "two" && (
                <svg
                  width={sizeNav + "px"}
                  height={sizeNav + "px"}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_315_300"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width={sizeNav + "px"}
                    height={sizeNav + "px"}
                  >
                    <rect
                      width={sizeNav + "px"}
                      height={sizeNav + "px"}
                      fill={navColor}
                    />
                  </mask>
                  <g mask="url(#mask0_315_300)">
                    <path
                      d="M17.5 16.1538L16.4308 15.1L18.7808 12.75H3.25003V11.25H18.7808L16.4462 8.89999L17.5154 7.84616L21.6538 12L17.5 16.1538Z"
                      fill={navColor}
                    />
                  </g>
                </svg>
              )}
              {navigationIcons === "three" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={sizeNav + "px"}
                  viewBox="0 -960 960 960"
                  width={sizeNav + "px"}
                  fill={navColor}
                >
                  <path d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z" />
                </svg>
              )}
              {navigationIcons === "four" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={sizeNav + "px"}
                  viewBox="0 -960 960 960"
                  width={sizeNav + "px"}
                  fill={navColor}
                >
                  <path d="M400-280v-400l200 200-200 200Z" />
                </svg>
              )}
              {navigationIcons === "five" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={sizeNav + "px"}
                  viewBox="0 -960 960 960"
                  width={sizeNav + "px"}
                  fill={navColor}
                >
                  <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                </svg>
              )}
              {navigationIcons === "text" && (
                <span style={{ color: navColor, fontSize: sizeNav + "px" }}>
                  {__("Next", "cocoblocks")}
                </span>
              )}
            </div>

            {/* Pulsante Precedente */}
            <div
              ref={prevRef}
              className={swiperButtonPrevClasses}
              style={stylesNavigation}
            >
              {navigationIcons === "default" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={sizeNav + "px"}
                  height={sizeNav + "px"}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <mask
                    id="mask0_7_1873"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width={sizeNav + "px"}
                    height={sizeNav + "px"}
                  >
                    <rect
                      width={sizeNav + "px"}
                      height={sizeNav + "px"}
                      fill={navColor}
                    />
                  </mask>
                  <g mask="url(#mask0_7_1873)">
                    <path
                      d="M14 17.6538L8.34619 12L14 6.34616L15.0538 7.39999L10.4538 12L15.0538 16.6L14 17.6538Z"
                      fill={navColor}
                    />
                  </g>
                </svg>
              )}
              {navigationIcons === "one" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={sizeNav + "px"}
                  viewBox="0 -960 960 960"
                  width={sizeNav + "px"}
                  fill={navColor}
                >
                  <path d="M400-240 160-480l240-240 56 58-142 142h486v80H314l142 142-56 58Z" />
                </svg>
              )}
              {navigationIcons === "two" && (
                <svg
                  width={sizeNav + "px"}
                  height={sizeNav + "px"}
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_433_1472"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width={sizeNav + "px"}
                    height={sizeNav + "px"}
                  >
                    <path
                      d="M0.97765 24.9757L24.9776 25.0244L25.0263 1.02446L1.02632 0.975799L0.97765 24.9757Z"
                      fill={navColor}
                    />
                  </mask>
                  <g mask="url(#mask0_433_1472)">
                    <path
                      d="M7.51041 8.83536L8.57747 9.89132L6.22271 12.2366L21.7534 12.268L21.7504 13.768L6.21966 13.7365L8.5495 16.0913L7.47816 17.1429L3.34819 12.9807L7.51041 8.83536Z"
                      fill={navColor}
                    />
                  </g>
                </svg>
              )}
              {navigationIcons === "three" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={sizeNav + "px"}
                  viewBox="0 -960 960 960"
                  width={sizeNav + "px"}
                  fill={navColor}
                >
                  <path d="M440-240 200-480l240-240 56 56-183 184 183 184-56 56Zm264 0L464-480l240-240 56 56-183 184 183 184-56 56Z" />
                </svg>
              )}
              {navigationIcons === "four" && (
                <svg
                  width={sizeNav + "px"}
                  height={sizeNav + "px"}
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.9723 7.98892L15.0277 17.9888L10.0001 13.0166L14.9723 7.98892Z"
                    fill={navColor}
                  />
                </svg>
              )}
              {navigationIcons === "five" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={sizeNav + "px"}
                  viewBox="0 -960 960 960"
                  width={sizeNav + "px"}
                  fill={navColor}
                >
                  <path d="M200-440v-80h560v80H200Z" />
                </svg>
              )}
              {navigationIcons === "text" && (
                <span style={{ color: navColor, fontSize: sizeNav + "px" }}>
                  {__("Prev", "cocoblocks")}
                </span>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}
