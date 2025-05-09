import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { TabPanel, Button, Tooltip} from "@wordpress/components";
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
} from "swiper/modules";
import "./editor.scss";
import "./components/editor.scss";
import { select } from "@wordpress/data";
import SliderControls from "./components/SliderControls";
import React, { useRef, useEffect } from "react";
import { useState } from "@wordpress/element";
import SliderControlsNavigation from "./components/SliderControlsNavigation";
import SliderControlsOptions from "./components/SliderControlsOptions";
import NavigationButtons from "./assets/NavigationButtons";
import ImageRender from "./components/image/ImageRender";
import TextRender from "./components/text/TextRender";
import GroupRender from "./components/group/GroupRender";
import SlideEdit from "./components/slide/SlideEdit";
import DraggableLayout from "./assets/dragable";
import Ruler from "./assets/ruler";
import IconRender from "./components/icon/IconRender";
import PostsEdit from "./components/post/PostsEdit";
import SettingsIcon from "@mui/icons-material/Settings";
import BurstModeIcon from "@mui/icons-material/BurstMode";
import GamepadIcon from "@mui/icons-material/Gamepad";
import LayersIcon from "@mui/icons-material/Layers";
import ArticleIcon from "@mui/icons-material/Article";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import ButtonRender from "./components/button/ButtonRender";
import apiFetch from "@wordpress/api-fetch";
import SliderTemplateModal from "./components/modalTemplate";
import StyleIcon from '@mui/icons-material/Style';
import PostImageRender from "./components/post/image/PostImageRender";
import PostTitleRender from "./components/post/title/PostTitleRender";
import PostExcerptRender from "./components/post/excerpt/PostExcerptRender";
import PostLinkRender from "./components/post/link/PostLinkRender";
import PostAuthorRender from "./components/post/author/PostAuthorRender";
import PostDateRender from "./components/post/date/PostDateRender";
import PostCategoriesRender from "./components/post/categories/PostCategoriesRender";
import PostTagsRender from "./components/post/tags/PostTagsRender";

export default function Edit({ attributes, setAttributes, slide, element }) {
  const {
    content,
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
    slideHeightTablet,
    slideHeightMobile,
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
    overflow,
    backgroundBorderColor,
    backgroundBorderSize,
    backgroundBorderRadius,
    backgroundVerticalPadding,
    backgroundHorizontalPadding,
    backgroundHorizontalPaddingTablet,
    backgroundVerticalPaddingTablet,
    backgroundHorizontalPaddingMobile,
    backgroundVerticalPaddingMobile,
    backgroundColor,
    backgroundImage,
    focalPoint,
    backgroundColorSlideDefault,
    backgroundColorBlockDefault,
    textColorDefault,
    innerTextColorDefault,
    filter,
    colorOneEffect,
    colorTwoEffect,
    colorThreeEffect,
    enableGrid,
    enableRuler,
    opacityRuler,
    opacityGrid,
    colorGrid,
    mouseEffect,
    colorEffectStart,
    colorEffectEnd,
    colorEffectMiddle,
    firstColorLiquid,
    secondColorLiquid,
    thirdColorLiquid,
    imgSelected,
    h1Selected,
    h2Selected,
    h3Selected,
    h4Selected,
    h5Selected,
    h6Selected,
    buttonSelected,
    spanSelected,
    pSelected,
    transitionParalaxMouse,
    sliderMarginTop,
    sliderMarginBottom,
    postElementsOrder,
    posts,
    layoutPost,
    gapItemsPost,
    positionPost,
    enableContentWidthPost,
    contentWidthPost,
    enableContentWidthSlidePost,
    contentWidthSlidePost,
    justifyContentSlidePost,
    layoutWrapPost,
    includeCategories = [],
   excludeCategories = [],
   order,
   postsToShow,
    fitImage,
    visibleElements,
    backgroundHorizontalPaddingPost,
    backgroundVerticalPaddingPost,
    postId,
    divider,
    heightDivider,
    widthDivider,
    colorDivider,
    flipDivider,
    invertDivider,
    positionDivider,
    imageBgPost,
    imageBgPostSize,
    imageBgPostRepeat,
    imageBgPostPositionX,
    imageBgPostPositionY,
    specificPosts,
    latestPosts,
    navigationPosition,
    navigationGap,
    backgroundColorContentPost,
    contentPostPadding,
    contentPostBorderStyle,
    contentPostBorderSize,
    contentPostBorderColor,
    contentPostBorderRadius,
  } = attributes;

  useEffect(() => {
    const removeCustomClasses = () => {
      const panels = document.querySelectorAll(
        ".slider-future-custom-advanced-panel"
      );
      panels.forEach((panel) => {
        panel.classList.remove("slider-future-custom-advanced-panel");
      });

      const cards = document.querySelectorAll(".slider-future-custom-block-card");
      cards.forEach((card) => {
        card.classList.remove("slider-future-custom-block-card");
      });
    };

    const addCustomClassToAdvancedPanel = () => {
      const advancedPanels = document.querySelectorAll(
        ".block-editor-block-inspector__advanced"
      );
      advancedPanels.forEach((panel) => {
        const parentPanel = panel.closest(".components-panel__body");
        if (parentPanel) {
          const block = select("core/block-editor").getSelectedBlock();
          if (block && block.name === "slider-future/slider") {
            parentPanel.classList.add("slider-future-custom-advanced-panel");
          }
        }
      });
    };

    const addCustomClassToBlockCard = () => {
      const blockCards = document.querySelectorAll(".block-editor-block-card");
      blockCards.forEach((card) => {
        const block = select("core/block-editor").getSelectedBlock();
        if (block && block.name === "slider-future/slider") {
          card.classList.add("slider-future-custom-block-card");
        }
      });
    };

    removeCustomClasses();
    addCustomClassToAdvancedPanel();
    addCustomClassToBlockCard();

    const observer = new MutationObserver(() => {
      removeCustomClasses();
      addCustomClassToAdvancedPanel();
      addCustomClassToBlockCard();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleTabClick = (event) => {
      const tabId = event.currentTarget.id;
      const advancedPanel = document.querySelector(
        ".slider-future-custom-advanced-panel"
      );

      const tabsToHideAdvancedPanel = [
        "tab-panel-0-tab2",
        "tab-panel-0-tab3",
        "tab-panel-0-tab4",
      ];

      if (tabsToHideAdvancedPanel.includes(tabId)) {
        if (advancedPanel) {
          advancedPanel.classList.add("hidden");
        }
      } else {
        if (advancedPanel) {
          advancedPanel.classList.remove("hidden");
        }
      }
    };

    const initializeButtonListener = () => {
      const tabButtons = document.querySelectorAll('[role="tab"]');
      tabButtons.forEach((button) => {
        button.addEventListener("click", handleTabClick);
      });
    };

    const observer = new MutationObserver(() => {
      initializeButtonListener(); 
    });

    observer.observe(document.body, { childList: true, subtree: true });

    initializeButtonListener();

    return () => {
      observer.disconnect();
      const tabButtons = document.querySelectorAll('[role="tab"]');
      tabButtons.forEach((button) => {
        button.removeEventListener("click", handleTabClick);
      });
    };
  }, []);

  const onSelect = (tabName) => {};

  const blockProps = useBlockProps();

  useEffect(() => {
    const blockContainer = document.querySelector(
      '[data-type="slider-future/slider"]'
    );

    if (!blockContainer) return; 

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        const popovers = blockContainer.querySelectorAll(
          ".components-dropdown-menu__popover .components-popover__content"
        );
        popovers.forEach((popover) => {
          if (!popover.classList.contains("slide-popover-class")) {
            popover.classList.add("slide-popover-class");
          }
        });
      });
    });

    observer.observe(blockContainer, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const key = `${effect}-${languageSlider}-${perViewSlider}-${spaceBetween}-${slidesPerGroupDesktop}-${slidesPerRow}-${perViewSliderTablet}-${spaceBetweenTablet}-${slidesPerGroupTablet}-${perViewSliderMobile}-${spaceBetweenMobile}-${slidesPerGroupMobile}-${loopMode}-${centeredSlides}-${initialSlide}-${autoHeight}-${slideHeight}-${slideHeightTablet}-${slideHeightMobile}-${grabCursor}-${speed}-${crossFade}-${shadow}-${slideShadows}-${shadowOffset}-${shadowScale}-${depth}-${rotate}-${stretch}-${translateX}-${translateY}-${translateZ}-${rotateX}-${rotateY}-${rotateZ}-${scale}-${opacity}-${nextTranslateX}-${nextTranslateY}-${nextTranslateZ}-${nextRotateX}-${nextRotateY}-${nextRotateZ}-${nextScale}-${nextOpacity}-${modifier}-${rotateCards}-${hidePagination}-${clickPagination}-${dynamicPagination}-${dynamicMainPagination}-${typePagination}-${progressbarOpposite}-${autoplay}-${autoplaySpeed}-${disableOnInteraction}-${pauseOnMouseEnter}-${reverseDirection}-${stopOnLastSlide}-${navigation}-${navigationIcons}-${scrollbar}-${dragScrollbar}-${hideScrollbar}-${releaseScrollbar}-${mousewheel}-${forceToAxis}-${invert}-${releaseOnEdges}-${sensitivity}-${backgroundImage}-${focalPoint}-${backgroundColor}-${
    JSON.stringify(includeCategories) + JSON.stringify(excludeCategories)
  }`;
  const isGutenbergEditor =
    typeof wp !== "undefined" && wp.data && wp.data.select("core/editor");

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
    "--offset-sides-nav": offSetSidesNav + "px",
  };
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  useEffect(() => {
    const swiperContainer = document.querySelector(".slider-future");
    if (swiperContainer && swiperContainer.swiper) {
      swiperContainer.swiper.params.navigation.prevEl = prevRef.current;
      swiperContainer.swiper.params.navigation.nextEl = nextRef.current;
      swiperContainer.swiper.navigation.update();
    }
  }, []);
  const isNavigationEnabled = navigation;
  const navigationConfig = isNavigationEnabled
    ? {
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }
    : false;
  const swiperButtonNextClasses = `swiper-button-next ${
    !navigationTablet ? "nav-tablet" : ""
  } ${!navigationMobile ? "nav-mobile" : ""}`;
  const swiperButtonPrevClasses = `swiper-button-prev ${
    !navigationTablet ? "nav-tablet" : ""
  } ${!navigationMobile ? "nav-mobile" : ""}`;

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
    "--swiper-autoplay-progress-color": autoplayProgressColor,
    border: backgroundBorderSize + "px solid " + backgroundBorderColor,
    borderRadius: backgroundBorderRadius + "px",
    backgroundColor: backgroundImage ? undefined : backgroundColor,
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    backgroundSize: fitImage ? fitImage : "cover",
    backgroundPosition: backgroundImage ? `${focalPoint.x * 100}% ${focalPoint.y * 100}%` : undefined,
    "--color-one-effect": colorOneEffect,
    "--color-two-effect": colorTwoEffect,
    "--color-three-effect": colorThreeEffect,
    "--color-grid-editor": colorGrid,
    "--opacity-grid-editor": opacityGrid,
    height: autoHeight ? "auto" : `${slideHeight}px`,
    '--slide-height-tablet': autoHeight ? "auto" : `${slideHeightTablet}px`,
    '--slide-height-mobile': autoHeight ? "auto" : `${slideHeightMobile}px`,
    marginTop: `${sliderMarginTop}px`,
    marginBottom: `${sliderMarginBottom}px`,
    padding: `${backgroundVerticalPadding}px ${backgroundHorizontalPadding}px`,
    '--padding-tablet': `${backgroundVerticalPaddingTablet}px ${backgroundHorizontalPaddingTablet}px`,
    '--padding-mobile': `${backgroundVerticalPaddingMobile}px ${backgroundHorizontalPaddingMobile}px`,
  };

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
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const isScrollbarEnabled = scrollbar;
  const scrollbarConfig = isScrollbarEnabled
    ? {
        draggable: dragScrollbar,
        hide: hideScrollbar,
        snapOnRelease: releaseScrollbar,
      }
    : false;

  const swiperRef = useRef(null);
o
  const [activeDevice, setActiveDevice] = useState("desktop");

  const handleDeviceChange = (device) => {
    setActiveDevice(device);
    setSelectedDevice(device);
    updateEditorView(device);
    updateElementPositions(device);
  };

  const handleDragElement = (slideId, index, x, y) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              i === index
                ? {
                    ...element,
                    [activeDevice]: { x, y }, 
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  const updateEditorView = (device) => {
    const container = document.querySelector(".editor-visual-editor"); 
    if (container) {
      container.classList.remove("desktop-view", "tablet-view", "mobile-view");
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
    updateElementPositions(activeDevice); 
  }, [activeDevice]);

  const updateElementPositions = (device) => {
    const editor = document.querySelector(".editor-visual-editor");

    if (editor) {
      const elements = document.querySelectorAll(".draggable");

      elements.forEach((element) => {
        let x = 0,
          y = 0;
        if (device === "mobile") {
          x = parseFloat(element.getAttribute("data-mobile-x")) || 0;
          y = parseFloat(element.getAttribute("data-mobile-y")) || 0;
        } else if (device === "tablet") {
          x = parseFloat(element.getAttribute("data-tablet-x")) || 0;
          y = parseFloat(element.getAttribute("data-tablet-y")) || 0;
        } else {
          x = parseFloat(element.getAttribute("data-desktop-x")) || 0;
          y = parseFloat(element.getAttribute("data-desktop-y")) || 0;
        }
        element.style.transform = `translate(${x}px, ${y}px)`;
      });
    }
  };

  window.addEventListener("resize", () => {
    const device = getDeviceType();
    setActiveDevice(device);
    updateEditorView(device);
    updateElementPositions(device);
  });

  const getDeviceType = () => {
    const editor = document.querySelector(".editor-visual-editor");
    const width = editor ? editor.clientWidth : window.innerWidth;

    if (width <= 768) {
      return "mobile";
    } else if (width <= 1024) {
      return "tablet";
    } else {
      return "desktop";
    }
  };

  const [selectedDevice, setSelectedDevice] = useState("desktop");
  const [selectedIcon, setSelectedIcon] = useState(null); 

const apiCache = {};

const debounce = (func, delay) => {
  let debounceTimer;
  return (...args) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func(...args), delay);
  };
};

useEffect(() => {
  const includeCategoriesParam = includeCategories.length ? includeCategories.join(',') : '';
  const excludeCategoriesParam = excludeCategories.length ? excludeCategories.join(',') : '';
  const specificPostsParam = specificPosts.length ? specificPosts.join(',') : '';
  const latestPostsParam = latestPosts ? 'true' : 'false';
  const excludePostIdParam = postId ? postId : '';
  const cacheKey = `${includeCategoriesParam}-${excludeCategoriesParam}-${order}-${postsToShow}-${excludePostIdParam}-${specificPostsParam}-${latestPostsParam}`;

   if (latestPosts) {
    delete apiCache[cacheKey];
  }

  if (apiCache[cacheKey]) {
      setAttributes({ posts: apiCache[cacheKey] });
      return;
  }

  const fetchPosts = debounce(() => {
      apiFetch({
          path: `/slider_future/v1/get-posts?include_categories=${includeCategoriesParam}&exclude_categories=${excludeCategoriesParam}&order=${order}&posts_per_page=${postsToShow}&exclude_post_id=${excludePostIdParam}&specific_posts=${specificPostsParam}&latest_posts=${latestPostsParam}`,
      })
          .then((data) => {
              console.log('Data ricevuti:', data);
              apiCache[cacheKey] = data;
              setAttributes({ posts: data });
          })
          .catch((error) => {
              console.error('Errore nel recupero dei post:', error);
          });
  }, 300);

  fetchPosts();
}, [includeCategories, excludeCategories, order, postsToShow, postId, specificPosts, latestPosts]);

  const stylesContentPosts = {
    gap: `${gapItemsPost}px`,
    flexWrap: layoutWrapPost,
    backgroundColor: backgroundColorContentPost,
    paddingTop: contentPostPadding.top,
    paddingBottom: contentPostPadding.bottom,
    paddingLeft: contentPostPadding.left,
    paddingRight: contentPostPadding.right,
    borderTopLeftRadius: contentPostBorderRadius.top,
    borderTopRightRadius: contentPostBorderRadius.right,
    borderBottomRightRadius: contentPostBorderRadius.bottom,
    borderBottomLeftRadius: contentPostBorderRadius.left,
    borderStyle: contentPostBorderStyle,
    borderWidth: `${contentPostBorderSize?.top} ${contentPostBorderSize?.right} ${contentPostBorderSize?.bottom} ${contentPostBorderSize?.left}`,
    borderColor: contentPostBorderColor,
    maxWidth: enableContentWidthPost
    ? `${contentWidthPost}px`
    : false,
  };

  const playAnimations = [];
  const handlePlayAll = () => {
    playAnimations.forEach((playAnimation) => {
      if (playAnimation) {
        playAnimation();
      }
    });
  };

  const playAnimationText = [];
  const handlePlayText = () => {
    playAnimationText.forEach((playAnimation) => {
      if (playAnimation) {
        playAnimation();
      }
    });
  };

  const playAnimationImg = [];
  const handlePlayImage = () => {
    playAnimationImg.forEach((playAnimation) => {
      if (playAnimation) {
        playAnimation();
      }
    });
  };

  const playAnimationGroup = [];
  const handlePlayGroup = () => {
    playAnimationGroup.forEach((playAnimation) => {
      if (playAnimation) {
        playAnimation();
      }
    });
  };

  const playAnimationButton = [];
  const handlePlayButton = () => {
    playAnimationButton.forEach((playAnimation) => {
      if (playAnimation) {
        playAnimation();
      }
    });
  };

  const playAnimationIcon = [];
  const handlePlayIcon = () => {
    playAnimationIcon.forEach((playAnimation) => {
      if (playAnimation) {
        playAnimation();
      }
    });
  };

  const playAnimationInnerText = [];
  const handlePlayInnerText = () => {
    playAnimationInnerText.forEach((playAnimation) => {
      if (playAnimation) {
        playAnimation();
      }
    });
  };

  const playAnimationInnerImage = [];
  const handlePlayInnerImage = () => {
    playAnimationInnerImage.forEach((playAnimation) => {
      if (playAnimation) {
        playAnimation();
      }
    });
  };

  const playAnimationInnerButton = [];
  const handlePlayInnerButton = () => {
    playAnimationInnerButton.forEach((playAnimation) => {
      if (playAnimation) {
        playAnimation();
      }
    });
  };

  const playAnimationInnerIcon = [];
  const handlePlayInnerIcon = () => {
    playAnimationInnerIcon.forEach((playAnimation) => {
      if (playAnimation) {
        playAnimation();
      }
    });
  };

  const playAnimationRef = useRef(null);
  const handlePlayAnimation = () => {
    if (playAnimationRef.current) {
      playAnimationRef.current(); 
    }
  };

  const playAnimationRefPostTitle = useRef(null);
  const handlePlayAnimationPostTitle = () => {
    if (playAnimationRefPostTitle.current) {
      playAnimationRefPostTitle.current(); 
    }
  };

  const playAnimationRefPostExcerpt = useRef(null);
  const handlePlayAnimationPostExcerpt = () => {
    if (playAnimationRefPostExcerpt.current) {
      playAnimationRefPostExcerpt.current(); 
    }
  };

  const playAnimationRefPostLink = useRef(null);
  const handlePlayAnimationPostLink = () => {
    if (playAnimationRefPostLink.current) {
      playAnimationRefPostLink.current(); 
    }
  };

  const playAnimationRefPostAuthor = useRef(null);
  const handlePlayAnimationPostAuthor = () => {
    if (playAnimationRefPostAuthor.current) {
      playAnimationRefPostAuthor.current(); 
    }
  };

  const playAnimationRefPostDate = useRef(null);
  const handlePlayAnimationPostDate = () => {
    if (playAnimationRefPostDate.current) {
      playAnimationRefPostDate.current(); 
    }
  };

  const playAnimationRefPostCategories = useRef(null);
  const handlePlayAnimationPostCategories = () => {
    if (playAnimationRefPostCategories.current) {
      playAnimationRefPostCategories.current(); 
    }
  };

  const playAnimationRefPostTags = useRef(null);
  const handlePlayAnimationPostTags = () => {
    if (playAnimationRefPostTags.current) {
      playAnimationRefPostTags.current(); 
    }
  };

  const hasAnimations = (slides) => {
    return slides.some(
      (slide) =>
        slide.elements &&
        slide.elements.some(
          (element) =>
            (element.effectIn && element.effectIn !== "none") ||
            (element.innerElements &&
              element.innerElements.some(
                (innerElement) =>
                  (innerElement.type === "text" &&
                    innerElement.effectIn &&
                    innerElement.effectIn !== "none") ||
                  (innerElement.type === "image" &&
                    innerElement.effectIn &&
                    innerElement.effectIn !== "none") ||
                  (innerElement.type === "button" &&
                    innerElement.effectIn &&
                    innerElement.effectIn !== "none") ||
                  (innerElement.type === "icon" &&
                    innerElement.effectIn &&
                    innerElement.effectIn !== "none")
              ))
        )
    );
  };

  const [selectedElement, setSelectedElement] = useState(null);

  const handleSelect = (index, type) => {
    setSelectedElement({ index, type });  // Salviamo un oggetto con index e tipo
  };


  const [settings, setSettings] = useState({
    autoplay: true,
    primaryColor: "#7A079A",
    backgroundColor: "#18191c",
    labelColor: '#535960',
    whiteColor: '#ffffff',
    blackColor: '#000000',
    darkColor: '#21242b',
    darkColorHover:'#2e323c',
    darkButton:  '#3c4556',
    lightColor:  '#c5c6d0',
    lightColorHover: '#d9dae1',
  });

  useEffect(() => {
    apiFetch({ path: "/wp/v2/slider-settings" }).then((data) => {
      setSettings(data);
      document.documentElement.style.setProperty(
        "--primary-color",
        data.primaryColor,
      );
      document.documentElement.style.setProperty(
        "--background-color",
        data.backgroundColor,
      );
      document.documentElement.style.setProperty(
        "--label-color",
        data.labelColor,
      );
      document.documentElement.style.setProperty(
        "--white-color",
        data.whiteColor,
      );
      document.documentElement.style.setProperty(
        "--black-color",
        data.blackColor,
      );
      document.documentElement.style.setProperty(
        "--dark-color",
        data.darkColor,
      );
      document.documentElement.style.setProperty(
        "--dark-color-hover",
        data.darkColorHover,
      );
      document.documentElement.style.setProperty(
        "--dark-button",
        data.darkButton,
      );
      document.documentElement.style.setProperty(
        "--light-color",
        data.lightColor,
      );
      document.documentElement.style.setProperty(
        "--light-color-hover",
        data.lightColorHover,
      );
      
    });
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <>
      <InspectorControls>
        <div className="button-pattern-slider">
          <Button variant="secondary" onClick={() => setIsModalOpen(true)}>
            <StyleIcon />{__("New Module for Template", "slider-future")}
          </Button>
        </div>
        {isModalOpen && (
          <SliderTemplateModal onClose={() => setIsModalOpen(false)} />
        )}
        <TabPanel
          className="tab-general"
          activeClass="active-tab"
          initialTabName="tab1"
          onSelect={onSelect}
          tabs={[
            {
              name: "tab1",
              title: <SettingsIcon />,
            },
            {
              name: "tab3",
              title: <GamepadIcon />,
            },
            {
              name: "tab4",
              title: <BurstModeIcon />,
            },
            ...(attributes.contentType === "custom"
              ? [
                  {
                    name: "tab2",
                    title: <LayersIcon />,
                  },
                ]
              : []),
            ...(attributes.contentType === "post-based"
              ? [
                  {
                    name: "tab5",
                    title: <ArticleIcon />,
                  },
                ]
              : []),
          ]}
        >
          {(tab) => (
            <>
              <div className={"tab-1 " + tab.name}>
                <SliderControls
                  attributes={attributes}
                  setAttributes={setAttributes}
                />
              </div>
              <div className={"tab-3 " + tab.name}>
                <SliderControlsNavigation
                  attributes={attributes}
                  setAttributes={setAttributes}
                />
              </div>
              <div className={"tab-4 " + tab.name}>
                <SliderControlsOptions
                  attributes={attributes}
                  setAttributes={setAttributes}
                />
              </div>
              {attributes.contentType === "custom" && (
                <div className={"tab-2 " + tab.name}>
                  {hasAnimations(slides) && (
                    <div
                      className="button-reply-effect"
                      style={{ backgroundColor: "var(--black-color)" }}
                    >
                      <Tooltip
                        placement="top"
                        text={__("Play All Animations", "slider-future")}
                      >
                        <Button
                          onClick={handlePlayAll}
                          style={{ padding: "5px 8px" }}
                        >
                          <SlowMotionVideoIcon />
                        </Button>
                      </Tooltip>
                    </div>
                  )}
                  <SlideEdit
                    attributes={attributes}
                    setAttributes={setAttributes}
                    slides={slides}
                    swiperRef={swiperRef}
                    slide={slide}
                    selectedDevice={selectedDevice}
                    onDeviceChange={handleDeviceChange}
                    setSelectedIcon={setSelectedIcon}
                    handlePlayAll={handlePlayAll}
                    handlePlayImage={handlePlayImage}
                    handlePlayText={handlePlayText}
                    handlePlayGroup={handlePlayGroup}
                    handlePlayButton={handlePlayButton}
                    handlePlayIcon={handlePlayIcon}
                    handlePlayInnerText={handlePlayInnerText}
                    playAnimationInnerText={playAnimationInnerText}
                    handlePlayInnerImage={handlePlayInnerImage}
                    playAnimationInnerImage={playAnimationInnerImage}
                    handlePlayInnerButton={handlePlayInnerButton}
                    playAnimationInnerButton={playAnimationInnerButton}
                    handlePlayInnerIcon={handlePlayInnerIcon}
                    playAnimationInnerIcon={playAnimationInnerIcon}
                    selectedElement={selectedElement}  // Passiamo l'elemento selezionato
                  />
                </div>
              )}
              {attributes.contentType === "post-based" && (
                <div className={"tab-5 " + tab.name}>
                  <PostsEdit
                    attributes={attributes}
                    setAttributes={setAttributes}
                    onPlayAnimation={handlePlayAnimation} 
                    onPlayAnimationPostTitle={handlePlayAnimationPostTitle}
                    onPlayAnimationPostExcerpt={handlePlayAnimationPostExcerpt}
                    onPlayAnimationPostLink={handlePlayAnimationPostLink}
                    onPlayAnimationPostAuthor={handlePlayAnimationPostAuthor}
                    onPlayAnimationPostDate={handlePlayAnimationPostDate}
                    onPlayAnimationPostCategories={handlePlayAnimationPostCategories}
                    onPlayAnimationPostTags={handlePlayAnimationPostTags}
                  />
                </div>
              )}
            </>
          )}
        </TabPanel>
       
      </InspectorControls>

      <div {...blockProps}>
        {slides &&
          slides.length > 0 &&
          slides.map((slide) => (
            <>
              {enableRuler && (
                <div className="editor-container">
                  <Ruler
                    height={10} 
                    unit={100} 
                    direction="horizontal" 
                    attributes={attributes}
                  />
                  <Ruler
                    width={10} 
                    unit={100} 
                    direction="vertical" 
                    attributes={attributes}
                  />
                </div>
              )}
            </>
          ))}

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
          className={`slider-future ${
            enableGrid ? "editor-grid" : ""
          } ${filter}`}
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
          posts &&
          Array.isArray(posts) &&
          posts.length > 0
            ? posts.map((post, index) => (
                <SwiperSlide key={index}>
                   {divider !== "none" && (
                      <div 
                        className="divider-container"
                        style={{
                          ...(invertDivider === true && divider !== 'divider-tilt' && positionDivider === 'divider-top'
                            ? {
                                transform: 'rotate(180deg)',
                              }
                            : {}),
                          ...(positionDivider === 'divider-top'
                            ? {
                                top: '0px',
                              }
                            : positionDivider === 'divider-bottom'
                            ? {
                                bottom: '0px',
                                ...(invertDivider === false
                                  ? {
                                      transform: 'rotate(180deg)',
                                    }
                                  : {}),
                              }
                            : {}),
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 1200 120"
                          preserveAspectRatio="none"
                          className={`custom-divider ${divider}`}
                          style={{
                            width: 'calc(' + widthDivider + '% + 1.3px)', 
                            height: heightDivider + 'px',
                            '--color-divider': colorDivider,
                            ...(flipDivider === true
                              ? {
                                transform: 'rotateY(180deg)',
                                }
                              : {}),
                          }}
                        >
                          {divider === "divider-wawes" && (
                            <path data-v-6da3ec0c="" d={
                              invertDivider
                              ? 
                              "M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
                              : 
                              "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            }
                            class="shape-fill"></path>
                          )}
                          {divider === "divider-curve" && (
                            <path data-v-6da3ec0c="" d={
                              invertDivider
                              ? 
                            "M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" 
                            : 
                            "M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
                            }
                            class="shape-fill"></path>
                          )}
                          {divider === "divider-curve-asymmetrical" && (
                         <path data-v-6da3ec0c="" d={
                          invertDivider
                          ? 
                          "M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z"
                          : 
                          "M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z"
                          }
                          class="shape-fill"></path>
                          )}
                          {divider === "divider-triangle" && (
                            <path data-v-6da3ec0c="" d={
                              invertDivider
                               ? 
                              "M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
                              : 
                             "M1200 0L0 0 598.97 114.72 1200 0z"
                            }
                              class="shape-fill"></path>
                          )}
                          {divider === "divider-triangle-asymmetrical" && (
                            <path data-v-6da3ec0c="" d={
                              invertDivider
                              ? 
                              "M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
                              : 
                              "M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
                            }
                            class="shape-fill" ></path>
                          )}
                          {divider === "divider-tilt" && (
                            <path data-v-6da3ec0c="" d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                          )}
                          {divider === "divider-arrow" && (
                            <path data-v-6da3ec0c="" d={
                              invertDivider
                              ? 
                              "M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z"
                              : 
                              "M649.97 0L550.03 0 599.91 54.12 649.97 0z"
                            }
                            class="shape-fill"></path>
                          )}
                          {divider === "divider-split" && (
                            <path data-v-6da3ec0c="" d={
                              invertDivider
                              ? 
                              "M600,16.8c0-8.11-8.88-13.2-19.92-13.2H0V120H1200V3.6H619.92C608.88,3.6,600,8.66,600,16.8Z"
                              : 
                              "M0,0V3.6H580.08c11,0,19.92,5.09,19.92,13.2,0-8.14,8.88-13.2,19.92-13.2H1200V0Z"
                            }
                            class="shape-fill" ></path>
                          )}
                          {divider === "divider-book" && (
                            <path data-v-6da3ec0c="" d={
                              invertDivider
                              ? 
                              "M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z"
                              : 
                               "M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
                            }
                               class="shape-fill" ></path>
                          )}
                        </svg>
                      </div>
                    )}
                    <div className="content-content-slide-post" style={{ 
                      padding: `${backgroundVerticalPaddingPost}px ${backgroundHorizontalPaddingPost}px`,
                      ...(imageBgPost && {
                        backgroundImage: `url(${post.image})`,
                        backgroundSize: imageBgPostSize,
                        backgroundRepeat: imageBgPostRepeat,
                        backgroundPositionX: imageBgPostPositionX + 'px',
                        backgroundPositionY: imageBgPostPositionY + 'px',
                        }),
                      }}>
                    <div className="max-content-post" style={{ maxWidth: enableContentWidthSlidePost
                        ? `${contentWidthSlidePost}px`
                        : false,justifyContent: justifyContentSlidePost}}>
                    <div
                      className={"content-slide-post " + layoutPost + " " + positionPost}
                      style={stylesContentPosts}
                    >
                      {postElementsOrder.map((element) => {
                         if (!visibleElements[element]) return null;
                        switch (element) {
                          case "image":
                            return <PostImageRender post={post} attributes={attributes} onPlay={(playAnimation) => {
                              playAnimationRef.current = playAnimation;
                            }}  />;
                          case "title":
                            return <PostTitleRender post={post} attributes={attributes} onPlay={(playAnimationPostTitle) => {
                              playAnimationRefPostTitle.current = playAnimationPostTitle;
                            }}  />;
                          case "excerpt":
                            return <PostExcerptRender post={post} attributes={attributes} onPlay={(playAnimationPostExcerpt) => {
                              playAnimationRefPostExcerpt.current = playAnimationPostExcerpt;
                            }}  />;
                          case "link":
                            return <PostLinkRender post={post} attributes={attributes} onPlay={(playAnimationPostLink) => {
                              playAnimationRefPostLink.current = playAnimationPostLink;
                            }}  />;
                          case "author":
                            return <PostAuthorRender post={post} attributes={attributes} onPlay={(playAnimationPostAuthor) => {
                              playAnimationRefPostAuthor.current = playAnimationPostAuthor;
                            }}  />;
                          case "date":
                            return <PostDateRender post={post} attributes={attributes} onPlay={(playAnimationPostDate) => {
                              playAnimationRefPostDate.current = playAnimationPostDate;
                            }}  />;
                          case "categories":
                            return <PostCategoriesRender post={post} attributes={attributes} onPlay={(playAnimationPostCategories) => {
                              playAnimationRefPostCategories.current = playAnimationPostCategories;
                            }}  />;
                          case "tags":
                            return <PostTagsRender post={post} attributes={attributes} onPlay={(playAnimationPostTags) => {
                              playAnimationRefPostTags.current = playAnimationPostTags;
                            }}  />;
                          default:
                            return null;
                        }
                      })}
                    </div>
                    </div>
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
                    {product.image && (
                      <img src={product.image} alt={product.title} />
                    )}
                    {product.title && <h3>{product.title}</h3>}
                    {product.excerpt && <p>{product.excerpt}</p>}
                    {product.link && <a href={product.link}>View Product</a>}
                </SwiperSlide>
              ))
            : null}

          {attributes.contentType === "custom" &&
          Array.isArray(slides) &&
          slides.length > 0
            ? slides.map((slide) => (
                  <SwiperSlide key={slide.id}
                  className={`swiper-slide ${slide.filter} ${slide.developerMode ? 'dev-mode-nooverflows' : ''}`}

                    style={{
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

                      ...(slide.backgroundType === "color"
                        ? {
                            backgroundColor: slide.backgroundColor,
                          }
                        : {}),

                      ...(slide.backgroundType === "gradient"
                        ? {
                            background: slide.backgroundGradient,
                          }
                        : {}),
                      "--color-one-effect-slide": slide.colorOneEffect,
                      "--color-two-effect-slide": slide.colorTwoEffect,
                      "--color-three-effect-slide": slide.colorThreeEffect,
                      ...(slide.enableRadialEffect
                        ? {
                            backgroundImage: `radial-gradient(circle, ${slide.effectRadialColorOne} 0.6px, ${slide.effectRadialColorTwo} 0)`,
                            backgroundSize: `${slide.rangeEffectRadial}px ${slide.rangeEffectRadial}px`,
                          }
                        : {}),
                        backgroundRepeat: slide.repeat,
                    }}
                  >
                    {slide.divider !== "none" && (
                      <div 
                        className="divider-container"
                        style={{
                          ...(slide.invertDivider === true && slide.divider !== 'divider-tilt' && slide.positionDivider === 'divider-top'
                            ? {
                                transform: 'rotate(180deg)',
                              }
                            : {}),
                          ...(slide.positionDivider === 'divider-top'
                            ? {
                                top: '0px',
                              }
                            : slide.positionDivider === 'divider-bottom'
                            ? {
                                bottom: '0px',
                                ...(slide.invertDivider === false
                                  ? {
                                      transform: 'rotate(180deg)',
                                    }
                                  : {}),
                              }
                            : {}),
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 1200 120"
                          preserveAspectRatio="none"
                          className={`custom-divider ${slide.divider}`}
                          style={{
                            width: 'calc(' + slide.widthDivider + '% + 1.3px)', 
                            height: slide.heightDivider + 'px',
                            '--color-divider': slide.colorDivider,
                            ...(slide.flipDivider === true
                              ? {
                                transform: 'rotateY(180deg)',
                                }
                              : {}),
                          }}
                        >
                          {slide.divider === "divider-wawes" && (
                            <path data-v-6da3ec0c="" d={
                              slide.invertDivider
                              ? 
                              "M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
                              : 
                              "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            }
                            class="shape-fill"></path>
                          )}
                          {slide.divider === "divider-curve" && (
                            <path data-v-6da3ec0c="" d={
                              slide.invertDivider
                              ? 
                            "M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" 
                            : 
                            "M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
                            }
                            class="shape-fill"></path>
                          )}
                          {slide.divider === "divider-curve-asymmetrical" && (
                         <path data-v-6da3ec0c="" d={
                          slide.invertDivider
                          ? 
                          "M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z"
                          : 
                          "M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z"
                          }
                          class="shape-fill"></path>
                          )}
                          {slide.divider === "divider-triangle" && (
                            <path data-v-6da3ec0c="" d={
                              slide.invertDivider
                               ? 
                              "M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
                              : 
                             "M1200 0L0 0 598.97 114.72 1200 0z"
                            }
                              class="shape-fill"></path>
                          )}
                          {slide.divider === "divider-triangle-asymmetrical" && (
                            <path data-v-6da3ec0c="" d={
                              slide.invertDivider
                              ? 
                              "M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
                              : 
                              "M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
                            }
                            class="shape-fill" ></path>
                          )}
                          {slide.divider === "divider-tilt" && (
                            <path data-v-6da3ec0c="" d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                          )}
                          {slide.divider === "divider-arrow" && (
                            <path data-v-6da3ec0c="" d={
                              slide.invertDivider
                              ? 
                              "M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z"
                              : 
                              "M649.97 0L550.03 0 599.91 54.12 649.97 0z"
                            }
                            class="shape-fill"></path>
                          )}
                          {slide.divider === "divider-split" && (
                            <path data-v-6da3ec0c="" d={
                              slide.invertDivider
                              ? 
                              "M600,16.8c0-8.11-8.88-13.2-19.92-13.2H0V120H1200V3.6H619.92C608.88,3.6,600,8.66,600,16.8Z"
                              : 
                              "M0,0V3.6H580.08c11,0,19.92,5.09,19.92,13.2,0-8.14,8.88-13.2,19.92-13.2H1200V0Z"
                            }
                            class="shape-fill" ></path>
                          )}
                          {slide.divider === "divider-book" && (
                            <path data-v-6da3ec0c="" d={
                              slide.invertDivider
                              ? 
                              "M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z"
                              : 
                               "M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
                            }
                               class="shape-fill" ></path>
                          )}
                        </svg>
                      </div>
                    )}
                    <div
                      className={
                        "content-slide-slider " +
                        (slide.developerMode
                          ? ""
                          : slide.position +
                            " " +
                            overflow )
                      }
                      style={{
                        height: autoHeight ? "auto" : `${slideHeight}px`,
                        width: "100%",
                        position: "relative",
                        visibility: "visible",
                        borderRadius: slide.backgroundBorderRadius + "px",
                        borderStyle: slide.borderStyleSlide,
                        borderWidth: slide.backgroundBorderSize + "px",
                        borderColor: slide.backgroundBorderColor,
                        margin: "0 auto",
                        ...(slide.developerMode
                          ? {}
                          : {
                              textAlign: "center",
                              paddingTop:
                                slide.backgroundVerticalPadding + "px",
                              paddingBottom:
                                slide.backgroundVerticalPadding + "px",
                              paddingLeft:
                                slide.backgroundHorizontalPadding + "px",
                              paddingRight:
                                slide.backgroundHorizontalPadding + "px",
                              maxWidth: slide.enableContentWidth
                                ? `${slide.contentWidth}px`
                                : false,
                            }),
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
                      <div
                        className={
                          "content-inner-for-slide " +
                          (slide.developerMode
                            ? ""
                            : slide.position )
                        }
                        style={
                          slide.developerMode
                            ? {}
                            : {
                                alignItems: slide.layoutAlignItems,
                                display: slide.layoutDisplay,
                                width: "100%",
                                height: "100%",
                                gap: slide.gapItems + "px",
                                ...(slide.layoutDisplay === "flex" && {
                                  flexWrap: slide.layoutWrap,
                                  flexDirection: slide.layout || "row",
                                ...(slide.layout === "row" && {
                                justifyContent: slide.layoutJustify || "center",
                                alignItems: slide.layoutVerticalAlignRow || "center",
                                }),
                                ...(slide.layout === "column" && {
                                justifyContent: slide.layoutVerticalAlignColumn || "center",
                                alignItems: slide.layoutJustifyColumn || "center",
                                }),
                                }),
                                ...(slide.layoutDisplay === "grid" && {
                                  ...(slide.itemGridPosition === "auto" && {
                                      gridTemplateColumns: 'repeat(auto-fill, minmax(min('+ slide.itemGridWidth +'px, 100%), 1fr))',
                                  }),
                                  ...(slide.itemGridPosition === "manual" && {
                                    gridTemplateColumns: 'repeat(' + slide.itemGridColumn + ', minmax(0, 1fr))',
                                }),
                                }),
                              }
                        }
                      >
                        {slide.elements.map((element, index, elementIndex) => {
                          const handleDrag = (e, data) => {
                            handleDragElement(slide.id, index, data.x, data.y);
                          };

                          switch (element.type) {
                            case "title":
                              return slide.developerMode ? (
                                <DraggableLayout
                                  key={index}
                                  x={element[activeDevice]?.x || 0}
                                  y={element[activeDevice]?.y || 0}
                                  onDrag={handleDrag}
                                  activeDevice={activeDevice}
                                  style={{ zIndex: element.zIndexTitle }}
                                >
                                  <TextRender
                                    element={element}
                                    index={index}
                                    onPlay={(playAnimation) => {
                                      playAnimations.push(playAnimation);
                                      playAnimationText.push(playAnimation);
                                    }}
                                  />
                                </DraggableLayout>
                              ) : (
                                <TextRender
                                  key={index}
                                  element={element}
                                  index={index}
                                  onPlay={(playAnimation) => {
                                    playAnimations.push(playAnimation);
                                    playAnimationText.push(playAnimation);
                                  }}
                                />
                              );
                            case "image":
                              return slide.developerMode ? (
                                <DraggableLayout
                                  key={index}
                                  x={element[activeDevice]?.x || 0}
                                  y={element[activeDevice]?.y || 0}
                                  onDrag={handleDrag}
                                  activeDevice={activeDevice}
                                  style={{ zIndex: element.zIndexImage }}
                                >
                                  <ImageRender
                                    element={element}
                                    index={index}
                                    onPlay={(playAnimation) => {
                                      playAnimations.push(playAnimation);
                                      playAnimationImg.push(playAnimation);
                                    }}
                                  />
                                </DraggableLayout>
                              ) : (
                                <ImageRender
                                  key={index}
                                  element={element}
                                  index={index}
                                  onPlay={(playAnimation) => {
                                    playAnimations.push(playAnimation);
                                    playAnimationImg.push(playAnimation);
                                  }}
                                />
                              );

                            case "div":
                              return slide.developerMode ? (
                                <DraggableLayout
                                  key={index}
                                  x={element[activeDevice]?.x || 0}
                                  y={element[activeDevice]?.y || 0}
                                  onDrag={handleDrag}
                                  activeDevice={activeDevice}
                                  style={{ zIndex: element.zIndexDiv }}
                                >
                                  <GroupRender
                                    element={element}
                                    index={index}
                                    onPlay={(playAnimation) => {
                                      playAnimations.push(playAnimation);
                                      playAnimationGroup.push(playAnimation);
                                      playAnimationInnerText.push(
                                        playAnimation
                                      );
                                      playAnimationInnerImage.push(
                                        playAnimation
                                      );
                                      playAnimationInnerButton.push(
                                        playAnimation
                                      );
                                      playAnimationInnerIcon.push(
                                        playAnimation
                                      );
                                    }}
                                    handlePlayInnerText={handlePlayInnerText}
                                    playAnimationInnerText={
                                      playAnimationInnerText
                                    }
                                    handlePlayInnerImage={handlePlayInnerImage}
                                    playAnimationInnerImage={
                                      playAnimationInnerImage
                                    }
                                    handlePlayInnerButton={
                                      handlePlayInnerButton
                                    }
                                    playAnimationInnerButton={
                                      playAnimationInnerButton
                                    }
                                    handlePlayInnerIcon={handlePlayInnerIcon}
                                    playAnimationInnerIcon={
                                      playAnimationInnerIcon
                                    }
                                    playAnimations={playAnimations}
                                  />
                                </DraggableLayout>
                              ) : (
                                <GroupRender
                                  key={index}
                                  element={element}
                                  index={index}
                                  onPlay={(playAnimation) => {
                                    playAnimations.push(playAnimation);
                                    playAnimationGroup.push(playAnimation);
                                    playAnimationInnerText.push(playAnimation);
                                    playAnimationInnerImage.push(playAnimation);
                                    playAnimationInnerButton.push(
                                      playAnimation
                                    );
                                    playAnimationInnerIcon.push(playAnimation);
                                  }}
                                  handlePlayInnerText={handlePlayInnerText}
                                  playAnimationInnerText={
                                    playAnimationInnerText
                                  }
                                  handlePlayInnerImage={handlePlayInnerImage}
                                  playAnimationInnerImage={
                                    playAnimationInnerImage
                                  }
                                  handlePlayInnerButton={handlePlayInnerButton}
                                  playAnimationInnerButton={
                                    playAnimationInnerButton
                                  }
                                  handlePlayInnerIcon={handlePlayInnerIcon}
                                  playAnimationInnerIcon={
                                    playAnimationInnerIcon
                                  }
                                  playAnimations={playAnimations}
                                />
                              );

                            case "button":
                              return slide.developerMode ? (
                                <DraggableLayout
                                  key={index}
                                  x={element[activeDevice]?.x || 0}
                                  y={element[activeDevice]?.y || 0}
                                  onDrag={handleDrag}
                                  activeDevice={activeDevice}
                                  style={{ zIndex: element.zIndexButton }}
                                >
                                  <ButtonRender
                                    element={element}
                                    index={index}
                                    selectedIcon={element.icon}
                                    onPlay={(playAnimation) => {
                                      playAnimations.push(playAnimation);
                                      playAnimationButton.push(playAnimation);
                                    }}
                                  />
                                </DraggableLayout>
                              ) : (
                                <ButtonRender
                                  key={index}
                                  element={element}
                                  index={index}
                                  selectedIcon={element.icon}
                                  onPlay={(playAnimation) => {
                                    playAnimations.push(playAnimation);
                                    playAnimationButton.push(playAnimation);
                                  }}
                                />
                              );
                            case "icon":
                              return slide.developerMode ? (
                                <DraggableLayout
                                  key={index}
                                  x={element[activeDevice]?.x || 0}
                                  y={element[activeDevice]?.y || 0}
                                  onDrag={handleDrag}
                                  activeDevice={activeDevice}
                                  style={{ zIndex: element.zIndexIcon }}
                                >
                                  <IconRender
                                    element={element}
                                    index={index}
                                    onPlay={(playAnimation) => {
                                      playAnimations.push(playAnimation);
                                      playAnimationIcon.push(playAnimation);
                                    }}
                                  />
                                </DraggableLayout>
                              ) : (
                                <IconRender
                                  key={index}
                                  element={element}
                                  index={index}
                                  onPlay={(playAnimation) => {
                                    playAnimations.push(playAnimation);
                                    playAnimationIcon.push(playAnimation);
                                  }}
                                />
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
          navigationPosition={navigationPosition}
          navigationGap={navigationGap}
          navOffSet={offSetTopNav}
          offSetSidesNav={offSetSidesNav}
        />
      </div>
    </>
  );
}
