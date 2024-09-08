import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { TabPanel } from "@wordpress/components";
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
import "./editor.scss";
import "../components/editor.scss";
import { select } from "@wordpress/data";
import SliderControls from "../components/SliderControls";
import React, { useRef, useEffect } from "react";
import { useState } from "@wordpress/element";
import SliderControlsNavigation from "../components/SliderControlsNavigation";
import SliderControlsOptions from "../components/SliderControlsOptions";
import NavigationButtons from "../components/NavigationButtons";
import ImageComponent from "../components/ImageComponent";
import TextComponent from "../components/textComponent";
import DivComponent from "../components/divComponent";
import SlideControls from "../components/slideControls";
import ButtonComponent from "../components/buttonComponent";
import DraggableTest from "../components/dragable";


export default function Edit({ attributes, setAttributes, slide }) {
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
      const advancedPanel = document.querySelector(
        ".cocoblocks-custom-advanced-panel"
      );

      // Lista dei tab che devono nascondere il pannello avanzato
      const tabsToHideAdvancedPanel = [
        "tab-panel-0-tab2",
        "tab-panel-0-tab3",
        "tab-panel-0-tab4",
      ];

      if (tabsToHideAdvancedPanel.includes(tabId)) {
        // Nascondi il pannello avanzato
        if (advancedPanel) {
          advancedPanel.classList.add("hidden");
        }
      } else {
        // Mostra il pannello avanzato
        if (advancedPanel) {
          advancedPanel.classList.remove("hidden");
        }
      }
    };

    const initializeButtonListener = () => {
      // Trova tutti i bottoni delle schede
      const tabButtons = document.querySelectorAll('[role="tab"]');
      tabButtons.forEach((button) => {
        button.addEventListener("click", handleTabClick);
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
      tabButtons.forEach((button) => {
        button.removeEventListener("click", handleTabClick);
      });
    };
  }, []);

  // Tab Panel

  // General Tab
  const onSelect = (tabName) => {};

  const blockProps = useBlockProps();

  useEffect(() => {
    // Identificatore specifico del blocco, ad esempio un data-attribute
    const blockContainer = document.querySelector(
      '[data-type="slider-builder/slider"]'
    );

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

  // Rif Swiper for circle color panel
  const swiperRef = useRef(null);

  // Definisci lo stato per il dispositivo attivo
const [activeDevice, setActiveDevice] = useState('desktop');

// Funzione per cambiare dispositivo
const handleDeviceChange = (device) => {
  setActiveDevice(device);
  updateEditorView(device); // Aggiorna la vista
  updateElementPositions(device); // Ricalcola le posizioni
};

// Funzione per gestire il drag e aggiornare le posizioni
const handleDragElement = (slideId, index, x, y) => {
  const updatedSlides = slides.map((slide) =>
    slide.id === slideId
      ? {
          ...slide,
          elements: slide.elements.map((element, i) =>
            i === index
              ? {
                  ...element,
                  [activeDevice]: { x, y }, // Salva solo le coordinate per il dispositivo attivo
                }
              : element
          ),
        }
      : slide
  );
  setAttributes({ slides: updatedSlides });
};

// Funzione per aggiornare la classe del container in base al dispositivo
const updateEditorView = (device) => {
  const container = document.querySelector('.editor-visual-editor'); // Cambia con il selettore giusto
  if (container) {
    container.classList.remove('desktop-view', 'tablet-view', 'mobile-view');
    container.classList.add(`${device}-view`);
  }
};

useEffect(() => {
  const updatedSlides = slides.map((slide) => ({
    ...slide,
    elements: slide.elements.map((element) => ({
      ...element,
      desktop: element.desktop || { x: 0, y: 0 },
      tablet: element.tablet || { x: 0, y: 0 },
      mobile: element.mobile || { x: 0, y: 0 },
    })),
  }));

  setAttributes({ slides: updatedSlides });
  updateElementPositions(activeDevice); // Inizializza le posizioni
}, [activeDevice]);

const updateElementPositions = (device) => {
  const editor = document.querySelector('.editor-visual-editor');

  if (editor) {
    const elements = document.querySelectorAll('.draggable');

    elements.forEach(element => {
      let x = 0, y = 0;

      // Leggi le coordinate corrette in base al tipo di dispositivo
      if (device === 'mobile') {
        x = parseFloat(element.getAttribute('data-mobile-x')) || 0;
        y = parseFloat(element.getAttribute('data-mobile-y')) || 0;
      } else if (device === 'tablet') {
        x = parseFloat(element.getAttribute('data-tablet-x')) || 0;
        y = parseFloat(element.getAttribute('data-tablet-y')) || 0;
      } else {
        x = parseFloat(element.getAttribute('data-desktop-x')) || 0;
        y = parseFloat(element.getAttribute('data-desktop-y')) || 0;
      }

      console.log(`Applying position for ${device}: x=${x}, y=${y}`);
      
      // Applica la posizione
      element.style.transform = `translate(${x}px, ${y}px)`;
    });
  }
};


// Chiama questa funzione ogni volta che cambia il dispositivo o ridimensioni l'iframe
window.addEventListener('resize', updateElementPositions);


const getDeviceType = () => {
  const editor = document.querySelector('.editor-visual-editor');
  const width = editor ? editor.clientWidth : window.innerWidth;

  if (width <= 768) {
    return 'mobile';
  } else if (width <= 1024) {
    return 'tablet';
  } else {
    return 'desktop';
  }
};



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
                <SlideControls
                  attributes={attributes}
                  setAttributes={setAttributes}
                  slides={slides}
                  swiperRef={swiperRef}
                  parallax={parallax}
                  slide={slide}
                />
              </div>
            </>
          )}
        </TabPanel>
        <button onClick={() => handleDeviceChange('desktop')}>Desktop</button>
<button onClick={() => handleDeviceChange('tablet')}>Tablet</button>
<button onClick={() => handleDeviceChange('mobile')}>Mobile</button>

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
          className={"slider-builder editor-grid " + filter}
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
                      "swiper-slide"
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
                    }}
                  >
                    <div className={"content-slide-slider " +
                      slide.position +
                      " " +
                      overflow +
                      " " +
                      slide.layout +
                      "-layout"}
                      style={{
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
                          borderStyle: slide.borderStyleSlide,
                          borderWidth: slide.backgroundBorderSize + "px",
                          borderColor: slide.backgroundBorderColor,
                          margin: "0 auto",
                          maxWidth: slide.enableContentWidth ? `${slide.contentWidth}px` : false,
                          flexWrap: slide.layoutWrap,
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
      const handleDrag = (e, data) => {
        handleDragElement(slide.id, index, data.x, data.y);
      };
      


      switch (element.type) {
        case "title":
          return (
            <DraggableTest
              key={index}
              x={element[activeDevice]?.x || 0}
          y={element[activeDevice]?.y || 0}
          onDrag={handleDrag}
          activeDevice={activeDevice}
        
            >
              
              <TextComponent element={element} index={index} />
              
            </DraggableTest>
      );
    case "image":
      return (
        <DraggableTest
              key={index}
              x={element[activeDevice]?.x || 0}
          y={element[activeDevice]?.y || 0}
          onDrag={handleDrag}
          activeDevice={activeDevice}
        
            >
          <ImageComponent element={element} index={index} />
        </DraggableTest>
      );
    case "div":
      return (
        <DraggableTest
              key={index}
              x={element[activeDevice]?.x || 0}
          y={element[activeDevice]?.y || 0}
          onDrag={handleDrag}
          activeDevice={activeDevice}
        
            >
          <DivComponent element={element} index={index} />
        </DraggableTest>
      );
    case "button":
      return (
         <DraggableTest
              key={index}
              x={element[activeDevice]?.x || 0}
          y={element[activeDevice]?.y || 0}
          onDrag={handleDrag}
          activeDevice={activeDevice}
        
            >
          <ButtonComponent element={element} index={index} />
        </DraggableTest>
      );
    default:
      return null;
  }
})} 

</div>

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
