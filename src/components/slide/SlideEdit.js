import { __ } from "@wordpress/i18n";
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import {
  Button,
  PanelBody,
  TabPanel,
  RangeControl,
  FocalPointPicker,
  Tooltip,
  TextControl,
} from "@wordpress/components";
import React, { useEffect } from "react";
import { useState } from "@wordpress/element";
import "../editor.scss";
import "../../editor.scss";
import SectionSelectorSlide from "../multitab/sectionSelectorSlide";
import TextEdit from "../text/TextEdit";
import ImageEdit from "../image/ImageEdit";
import GroupEdit from "../group/GroupEdit";
import IconEdit from "../icon/IconEdit";
import ColorOptionsPanel from "../colorPanel";
import ColorOptionsPanelGradient from "../colorPanelGradient";
import ImageSelectionModal from "../ImageSelectionModal";
import ButtonTypeSelectionModal from "../buttonModal";
import ButtonEdit from "../button/ButtonEdit";
import DeviceSelector from "../../assets/devicesSelector";
import {borderStyleOptions} from '../../assets/options';
import {filterBackgroundOptions} from '../../assets/options';
import { filterBackgroundOptionsFree } from "../../assets/options";
import {dividerBackgroundOptions} from '../../assets/options';
import CustomSelectControl  from "../../controls/select/CustomSelectControl";
import CustomToggleControl  from "../../controls/toggle/CustomToggleControl";
import CustomRangeControl  from "../../controls/range/CustomRangeControl"; 
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import GradientIcon from '@mui/icons-material/Gradient';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import FitScreenIcon from '@mui/icons-material/FitScreen';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import WidgetsIcon from '@mui/icons-material/Widgets';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import WidthNormalIcon from '@mui/icons-material/WidthNormal';
import WrapTextIcon from '@mui/icons-material/WrapText';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import BorderStyleIcon from '@mui/icons-material/BorderStyle';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import MarginIcon from '@mui/icons-material/Margin';
import BorderInnerIcon from '@mui/icons-material/BorderInner';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import AddCardIcon from '@mui/icons-material/AddCard';
import WbCloudyOutlinedIcon from '@mui/icons-material/WbCloudyOutlined';
import SmartButtonOutlinedIcon from '@mui/icons-material/SmartButtonOutlined';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TouchAppIcon from "@mui/icons-material/TouchApp";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DatasetLinkedIcon from "@mui/icons-material/DatasetLinked";
import PhishingIcon from "@mui/icons-material/Phishing";
import TextureIcon from '@mui/icons-material/Texture';
import FlipIcon from '@mui/icons-material/Flip';
import ScreenRotationAltIcon from '@mui/icons-material/ScreenRotationAlt';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import AlignHorizontalCenterIcon from '@mui/icons-material/AlignHorizontalCenter';
import AlignVerticalCenterIcon from '@mui/icons-material/AlignVerticalCenter';
import AppsIcon from '@mui/icons-material/Apps';
import SettingsEthernetOutlinedIcon from '@mui/icons-material/SettingsEthernetOutlined';
import ProTooltip from "../ProTooltip";
import RepeatIcon from '@mui/icons-material/Repeat';
import ProNotice from '../ProNotice';

const SlideEdit = ({
  slides,
  setAttributes,
  attributes,
  swiperRef,
  selectedDevice,
  onDeviceChange,
  setSelectedIcon,
  handlePlayImage,
  handlePlayText,
  handlePlayGroup,
  handlePlayButton,
  handlePlayIcon,
  handlePlayInnerText,
  playAnimationInnerText,
  handlePlayInnerImage,
  playAnimationInnerImage,
  playAnimations,
  selectedClass,
  handlePlayInnerButton,
  playAnimationInnerButton,
  handlePlayInnerIcon,
  playAnimationInnerIcon,
  
}) => {
  const {
    device,
    backgroundColorSlideDefault,
    textColorDefault,
    backgroundColorBlockDefault,
  } = attributes;


  const [isModalOpenButton, setIsModalOpenButton] = useState(false);

  const openModalButton = () => setIsModalOpenButton(true);
  const closeModalButton = () => setIsModalOpenButton(false);

  const handleButtonTypeSelect = (slideId, type) => {
    addSlideButton(slideId, type); // Passa il tipo selezionato ("type1", "type2", "type3")
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
        updateSlideBackgroundImage(slides.length, image.url);
      } else {
        console.error("Errore durante il caricamento dell'immagine.");
      }
    } catch (error) {
      console.error("Errore durante la chiamata all'API:", error);
    } finally {
      setIsLoading(false);
      setIsModalOpen(false);
    }
  };
  
  // Funzione per aprire il modale
  const openModal = () => setIsModalOpen(true);

  // Funzione per chiudere il modale
  const closeModal = () => setIsModalOpen(false);

  // Panel Slide
  const [selectedPanel, setSelectedPanel] = useState(null);
  const [primaryColor, setPrimaryColor] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");

  //const swiperRef = useRef(null); // Riferimento a Swiper

  
  useEffect(() => {
    // Recupera il valore della variabile CSS --primary-color
    const root = document.querySelector(":root");
    const color = getComputedStyle(root).getPropertyValue("--primary-color");
    const colorBackground = getComputedStyle(root).getPropertyValue("--background-color");

    setPrimaryColor(color.trim());
    setBackgroundColor(colorBackground.trim());
  }, []);

  // Stato per tracciare quale pannello è aperto
  const [openPanelId, setOpenPanelId] = useState(null);


  const handlePanelSelect = (panelId) => {
    setOpenPanelId((currentId) => (currentId === panelId ? null : panelId)); // Aggiorna l'ID del pannello aperto
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
      borderRadius: "50px",
      border: `2px solid ${primaryColor}`,
      backgroundColor: isSelected ? primaryColor : "transparent",
      marginRight: "8px",
      transition: "transform 0.3s, background-color 0.3s",
      transform: isSelected ? "scale(1.2)" : "scale(1)",
    };

    return <span style={circleStyle}></span>;
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

  // Section slide
  const [activeSection, setActiveSection] = useState("content");
  // Section slides
  const [activeSectionSlide, setActiveSectionSlide] = useState("background");
  // Section Block
  const [activeSectionBlock, setActiveSectionBlock] = useState("content");
  // Section Image
  const [activeSectionImage, setActiveSectionImage] = useState("content");
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
    layout: "row",
    gapItems: 5,
    position: "center",
    borderStyleSlide: "none",
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
      borderStyleSlide: slideSettings.borderStyleSlide,
      backgroundBorderColor: slideSettings.backgroundBorderColor,
      backgroundBorderSize: slideSettings.backgroundBorderSize,
      backgroundBorderRadius: slideSettings.backgroundBorderRadius,
      backgroundVerticalPadding: slideSettings.backgroundVerticalPadding,
      backgroundHorizontalPadding: slideSettings.backgroundHorizontalPadding,
    }));

    setAttributes({ slides: updatedSlides });
  };

  // Add Slide
  const addSlide = () => {
    const newSlide = {
      id: slides.length + 1,
      elements: [], // Inizializza elements come un array vuoto
      layout: "row",
      position: "center-center",
      backgroundType: "color",
      backgroundColor: backgroundColorSlideDefault,
      developerMode: false,
      layoutAlignItems: "center",
      layoutAlignResponsive: "center",
      link: "none",
      borderStyleSlide: currentSettings.borderStyleSlide,
      backgroundBorderColor: currentSettings.backgroundBorderColor,
      backgroundBorderSize: currentSettings.backgroundBorderSize,
      backgroundBorderRadius: currentSettings.backgroundBorderRadius,
      backgroundVerticalPadding: currentSettings.backgroundVerticalPadding,
      backgroundHorizontalPadding: currentSettings.backgroundHorizontalPadding,
      backgroundRepeat: "no-repeat",
      filter: "none",
      divider: "none",
      positionDivider:"top",
      invertDivider: false,
      display: "flex",
      itemGridPosition: "auto",
      itemGridWidth: 150,
      itemGridColumn: 5,
      layoutJustify: "center",
      layoutVerticalAlignRow: "center",
      layoutJustifyColumn: "center",
      layoutVerticalAlignColumn: "center",
      layoutDisplay: "flex",
      layoutWrap: "wrap",
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

  // Funzione per aggiornare il colore di sfondo
  const updateSlideEffectRadialColorOne = (slideId,color) => {
    setAttributes({
      slides: slides.map((slide) =>
        slide.id === slideId ? { ...slide, effectRadialColorOne: color } : slide
      ),
    });
  };
    // Funzione per aggiornare il colore di sfondo
    const updateSlideEffectRadialColorTwo = (slideId,color) => {
      setAttributes({
        slides: slides.map((slide) =>
          slide.id === slideId ? { ...slide, effectRadialColorTwo: color } : slide
        ),
      });
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

   // Update Repeat Image
   const updateSlideRepeat = (slideId, newValue) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId ? { ...slide, repeat: newValue } : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update link
  const updateLink = (slideId, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId ? { ...slide, link: value } : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update text link
  const updateUrl = (slideId, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId ? { ...slide, url: value } : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update target
  const updateTarget = (slideId, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId ? { ...slide, target: value } : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update rel
  const updateRel = (slideId, value) => {
      const updatedSlides = slides.map((slide) =>
        slide.id === slideId ? { ...slide, rel: value } : slide
      );
      setAttributes({ slides: updatedSlides });
  };

   // Update scroll id
   const updateScrollId = (slideId, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId ? { ...slide, scrollId: value } : slide
    );
    setAttributes({ slides: updatedSlides });
};

  // Update Content width 
  const updateSlideContentWidth = (slideId, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId ? { ...slide, contentWidth: value } : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update enable content width
  const updateSlideEnableContentWidth = (slideId, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId ? { ...slide, enableContentWidth: value } : slide
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
  // Update layout wrap
  const updateSlideLayoutWrap = (slideId, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId ? { ...slide, layoutWrap: value } : slide
    );
    setAttributes({ slides: updatedSlides });
  };


  // Update Filter
  const updateSlideFilter = (slideId, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId ? { ...slide, filter: value } : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Update Divider
  const updateSlideDivider = (slideId, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId ? { ...slide, divider: value } : slide
    );
    setAttributes({ slides: updatedSlides });
  };

     // Update Color divider
     const  updateColorDivider = (id, color) => {
      const updatedSlides = slides.map((slide) =>
        slide.id === id ? { ...slide, colorDivider: color } : slide
      );
      setAttributes({ slides: updatedSlides });
    };

  // Update height divider 
  const updateSlideHeightDivider = (slideId, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId ? { ...slide, heightDivider: value } : slide
    );
    setAttributes({ slides: updatedSlides });
  };

    // Update width divider 
    const updateSlideWidthDivider = (slideId, value) => {
      const updatedSlides = slides.map((slide) =>
        slide.id === slideId ? { ...slide, widthDivider: value } : slide
      );
      setAttributes({ slides: updatedSlides });
    };

    // Update Flip Divider
    const updateFlipDivider = (slideId, value) => {
      const updatedSlides = slides.map((slide) =>
        slide.id === slideId ? { ...slide, flipDivider: value } : slide
      );
      setAttributes({ slides: updatedSlides });
    };

    // Update invert divider
    const updateInvertDivider = (slideId, value) => {
      const updatedSlides = slides.map((slide) =>
        slide.id === slideId ? { ...slide, invertDivider: value } : slide
      );
      setAttributes({ slides: updatedSlides });
    };
    
    // Update position divider
    const updateSlidePositionDivider = (slideId, value) => {
      const updatedSlides = slides.map((slide) =>
        slide.id === slideId ? { ...slide, positionDivider: value } : slide
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

  // Size effect
  const updateSlideRangeEffectRadial = (id, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === id ? { ...slide,  rangeEffectRadial: value } : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Enable radial effect
  const updateEnableRadialEffect = (id, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === id ? { ...slide,  enableRadialEffect: value } : slide
    );
    setAttributes({ slides: updatedSlides });
  };
  
  // Update Effect Color one
  const updateColorOneEffect = (id, color) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === id ? { ...slide, colorOneEffect: color } : slide
    );
    setAttributes({ slides: updatedSlides });
  };

     // Update display
     const updateSlideLayoutDisplay = (id, value) => {
      const updatedSlides = slides.map((slide) =>
        slide.id === id ? { ...slide, layoutDisplay: value } : slide
      );
      setAttributes({ slides: updatedSlides });
    };

     // Update grid display
     const updateSlideItemGridPosition = (id, value) => {
      const updatedSlides = slides.map((slide) =>
        slide.id === id ? { ...slide, itemGridPosition: value } : slide
      );
      setAttributes({ slides: updatedSlides });
    };

    // Update grid width display
    const updateSlideItemGridWidth = (id, value) => {
      const updatedSlides = slides.map((slide) =>
        slide.id === id ? { ...slide, itemGridWidth: value } : slide
      );
      setAttributes({ slides: updatedSlides });
    };

    // Update grid column display
    const updateSlideItemGridColumn = (id, value) => {
      const updatedSlides = slides.map((slide) =>
        slide.id === id ? { ...slide, itemGridColumn: value } : slide
      );
      setAttributes({ slides: updatedSlides });
    };
      // Update justyfy display
      const updateSlideLayoutJustify = (id, value) => {
        const updatedSlides = slides.map((slide) =>
          slide.id === id ? { ...slide, layoutJustify: value } : slide
        );
        setAttributes({ slides: updatedSlides });
      };

        // Update vertical align
        const updateSlideLayoutVerticalAlignRow = (id, value) => {
          const updatedSlides = slides.map((slide) =>
            slide.id === id ? { ...slide, layoutVerticalAlignRow: value } : slide
          );
          setAttributes({ slides: updatedSlides });
        };

          // Update justyfy column
          const updateSlideLayoutJustifyColumn = (id, value) => {
            const updatedSlides = slides.map((slide) =>
              slide.id === id ? { ...slide, layoutJustifyColumn: value } : slide
            );
            setAttributes({ slides: updatedSlides });
          };
           // Update justyfy column
           const updateSlideLayoutVerticalAlignColumn = (id, value) => {
            const updatedSlides = slides.map((slide) =>
              slide.id === id ? { ...slide, layoutVerticalAlignColumn: value } : slide
            );
            setAttributes({ slides: updatedSlides });
          };
  
   // Update Effect Color two
   const updateColorTwoEffect = (id, color) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === id ? { ...slide, colorTwoEffect: color } : slide
    );
    setAttributes({ slides: updatedSlides });
  };

   // Update Effect Color three
   const updateColorThreeEffect = (id, color) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === id ? { ...slide, colorThreeEffect: color } : slide
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

  // Update developer mode
  const updateDeveloperMode = (
    slideId,
    value
  ) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? { ...slide, developerMode: value }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Add Text
  const defaultTitleAttributes = {
    type: "title",
    desktop: { x: 0, y: 0 },
    tablet: { x: 0, y: 0 },
    mobile: { x: 0, y: 0 },
    text: __("Text Slide", "slider-future"),
    fontSize: 24,
    fontSizeTablet: 16,
    fontFamily: "inherit",
    fontSizeMobile: 16,
    textColor: textColorDefault,
    textLink: "none",
    effectIn: "none",
    effectHover: "none",
    widthTitle: "auto",
    borderStyle: "none",
    enableTypeWriter: false,
    textTypeWriterOne: "Hello",
    textTypeWriterTwo: "World",
    textTypeWriterThree: "!",
    textTypeWriterFour: "!",
    widthCursor:4,
    breakCursor: 2000,
    speedCursor: 200,
  };
  
  const addSlideTitle = (slideId) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: [
              ...(slide.elements || []),
              { ...defaultTitleAttributes },
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
                desktop: { x: 0, y: 0 },
                tablet: { x: 0, y: 0 },
                mobile: { x: 0, y: 0 },
                url: "",
                alt: "",
                fit: "cover",
                widthImage: "fixed",
                widthImageContent: "auto",
                customWidthImagePx: 200,
                heightImage: "auto",
                blobMask: false,
                imageFilter: "none",
                imageLink: "none",
                enableDesktopImage: true,
                enableTabletImage: true,
                enableMobileImage: true,
                borderStyleImage: "none",
                spikeMask: 'none',
                spikeMaskRight: 'none',
                effectIn: "none",
                effectHover: "none",
                rotateImage: 0,
                rotateImageX: 0,
                rotateImageY: 0,
                perspectiveImage: 1000,
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
                innerElements: [],
                type: "div",
                desktop: { x: 0, y: 0 },
                tablet: { x: 0, y: 0 },
                mobile: { x: 0, y: 0 },
                content: "",
                layoutDiv: "row",
                gapItemsDiv: 5,
                positionDiv: "center-center",
                contentWidthDiv: "auto",
                contentHeightDiv: "auto",
                elementDiv: "div",
                borderStyleDiv: "none",
                backgroundVerticalPaddingDiv: 15,
                backgroundHorizontalPaddingDiv: 15,
                backgroundColor: backgroundColorBlockDefault,
                imageUrl: "",
                innerDivs: [],
                enableDesktop: true,
                enableTablet: true,
                enableMobile: true,
                layoutWrap: "wrap",
                textLink: "none",
                effectIn: "none",
                effectHover: "none",
                displayDiv: "flex",
                itemGridPositionDiv: "auto",
                itemGridWidthDiv: 150,
                itemGridColumnDiv: 5,
                layoutJustifyDiv: "center",
                layoutVerticalAlignDivRow: "center",
                layoutJustifyDivColumn: "center",
                layoutVerticalAlignDivColumn: "center",
              },
            ],
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Funzione per aggiungere un bottone
  const addSlideButton = (slideId, buttonType) => {
    const defaultValues = {
      type1: {
        effectIn: "none",
        effectHover: "none",
        buttonColor: '#FFFFFF',
        backgroundBorderColorButton: '#FFFFFF',
        borderStyleButton: 'solid',
        backgroundBorderRadiusButton: 30,
        backgroundBorderSizeButton:  {
          top: '3px',
          right: '3px',
          bottom: '3px',
          left: '3px',
        },
        buttonBackgroundColor: '#18191c',
        buttonColorHover: '#FFFFFF',
        widthCustomButton: 35,
        heightCustomButton: 55,
        borderStyleHover: "solid",
        backgroundBorderSizeButtonHover:  {
          top: '3px',
          right: '3px',
          bottom: '3px',
          left: '3px',
        },
       backgroundBorderColorHover: '#ffffff',
      borderStyleHover: "solid",
      },
      type2: {
        effectIn: "none",
        effectHover: "none",
        buttonColor: '#18191c',
        backgroundBorderColorButton: '#18191c',
        borderStyleButton: 'solid',
        backgroundBorderRadiusButton: 30,
        backgroundBorderSizeButton: 3,
        buttonBackgroundColor: '#FFFFFF',
        buttonColorHover: '#ffffff',
        widthCustomButton: 35,
        heightCustomButton: 55,
        borderStyleHover: "solid",
        backgroundBorderSizeButtonHover:  {
          top: '3px',
          right: '3px',
          bottom: '3px',
          left: '3px',
        },
        backgroundBorderColorHover: '#ffffff',
        borderStyleHover: "solid",
      },
      type3: {
        effectIn: "none",
        effectHover: "none",
        buttonColor: '#FFFFFF',
        backgroundBorderColorButton: '#FFFFFF',
        borderStyleButton: 'solid',
        borderRadiusButton:{
          top: '50px',
          right: '50px',
          bottom:'50px',
          left: '50px',
        },
        backgroundBorderSizeButton: 1,
        buttonBackgroundColor: '#18191c',
        buttonColorHover: '#18191c',
        paddingButton: {
          top: '8px',
          right: '12px',
          bottom: '8px',
          left: '12px',
        },
        borderStyleHover: "solid",
        backgroundBorderColorHover: "#18191c",
        backgroundBorderSizeHover: {
          top: 1,
          right: 1,
          bottom: 1,
          left: 1,
        },
        buttonBackgroundColorHover: "#FFFFFF",
      },
      type4: {
        effectIn: "none",
        effectHover: "none",
        buttonColor: '#18191c',
        backgroundBorderColorButton: '#18191c',
        borderStyleButton: 'solid',
        borderRadiusButton:{
          top: '50px',
          right: '50px',
          bottom:'50px',
          left: '50px',
        },
        backgroundBorderSizeButton: 1,
        buttonBackgroundColor: '#FFFFFF',
        buttonColorHover: '#FFFFFF',
        paddingButton: {
          top: '8px',
          right: '12px',
          bottom: '8px',
          left: '12px',
        },
        borderStyleHover: "solid",
        backgroundBorderColorHover: "#FFFFFF",
        backgroundBorderSizeHover: {
          top: 1,
          right: 1,
          bottom: 1,
          left: 1,
        },
        buttonBackgroundColorHover: "#18191c",
      },
      type5: {
        effectIn: "none",
        effectHover: "none",
        buttonColor: '#FFFFFF',
        backgroundBorderColorButton: '#FFFFFF',
        borderStyleButton: 'solid',
        backgroundBorderSizeButton: 1,
        buttonBackgroundColor: '#18191c',
        buttonColorHover: '#18191c',
        paddingButton: {
          top: '8px',
          right: '12px',
          bottom: '8px',
          left: '12px',
        },
        borderStyleHover: "solid",
        backgroundBorderColorHover: "#18191c",
        backgroundBorderSizeHover: {
          top: 1,
          right: 1,
          bottom: 1,
          left: 1,
        },
        buttonBackgroundColorHover: "#FFFFFF",
      },
      type6: {
        effectIn: "none",
        effectHover: "none",
        buttonColor: '#18191c',
        backgroundBorderColorButton: '#18191c',
        borderStyleButton: 'solid',
        backgroundBorderSizeButton: 1,
        buttonBackgroundColor: '#FFFFFF',
        buttonColorHover: '#FFFFFF',
        paddingButton: {
          top: '8px',
          right: '12px',
          bottom: '8px',
          left: '12px',
        },
        borderStyleHover: "solid",
        backgroundBorderColorHover: "#FFFFFF",
        backgroundBorderSizeHover: {
          top: 1,
          right: 1,
          bottom: 1,
          left: 1,
        },
        buttonBackgroundColorHover: "#18191c",
      },
      type7: {
        effectIn: "none",
        effectHover: "none",
        buttonColor: '#FFFFFF',
        backgroundBorderColorButton: '#FFFFFF',
        borderStyleButton: 'solid',
        borderRadiusButton:{
          top: '35px',
          right: 0,
          bottom:'35px',
          left: 0,
        },
        backgroundBorderSizeButton: 1,
        buttonBackgroundColor: '#18191c',
        buttonColorHover: '#18191c',
        paddingButton: {
          top: '10px',
          right: '20px',
          bottom: '10px',
          left: '20px',
        },
        borderStyleHover: "solid",
        backgroundBorderColorHover: "#18191c",
        backgroundBorderSizeHover: {
          top: 1,
          right: 1,
          bottom: 1,
          left: 1,
        },
        buttonBackgroundColorHover: "#FFFFFF",
      },
      type8: {
        effectIn: "none",
        effectHover: "none",
        buttonColor: '#18191c',
        backgroundBorderColorButton: '#18191c',
        borderStyleButton: 'solid',
        borderRadiusButton:{
          top: '35px',
          right: 0,
          bottom:'35px',
          left: 0,
        },
        backgroundBorderSizeButton: 1,
        buttonBackgroundColor: '#FFFFFF',
        buttonColorHover: '#FFFFFF',
        paddingButton: {
          top: '10px',
          right: '20px',
          bottom: '10px',
          left: '20px',
        },
        borderStyleHover: "solid",
        backgroundBorderColorHover: "#FFFFFF",
        backgroundBorderSizeHover: {
          top: 1,
          right: 1,
          bottom: 1,
          left: 1,
        },
        buttonBackgroundColorHover: "#18191c",
      },
    };

    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: [
              ...(slide.elements || []),
              {
                type: 'button',
                button:__(' Click Here', 'slider-future'),
                buttonType: buttonType,
                desktop: { x: 0, y: 0 },
                tablet: { x: 0, y: 0 },
                mobile: { x: 0, y: 0 },
                ...defaultValues[buttonType], 
                enableDesktopButton: true,
                enableTabletButton: true,
                enableMobileButton: true,
                buttonLink: "none",
                widthButton:"auto",
                fontFamilyButton: "inherit",
                fontSizeButton: 16,
                fontSizeButtonTablet: 16,
                fontSizeButtonMobile: 16,
                widthCustomButton:35,
                effectIn: "none",
                effectHover: "none",
              },
            ],
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Add Icon
  const addSlideIcon = (slideId) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: [
              ...(slide.elements || []),
              {
                type: "icon",
                icon: "StarIcon",
                desktop: { x: 0, y: 0 },
                tablet: { x: 0, y: 0 },
                mobile: { x: 0, y: 0 },
                fontSize: 42,
                fontSizeTablet: 22,
                fontSizeMobile: 22,
                color: textColorDefault,
                enableDesktop: true,
                enableTablet: true,
                enableMobile: true,
                borderStyle:"none",
                effectIn: "none",
                iconAnimation: "none",
                animationHover: "none",
                borderStyleHover: "none", 
                width:"auto",
                link: "none",
              },
            ],
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

// Dichiara defaultAttributes all'inizio del componente
const defaultAttributes = {
  colorOneEffect: "rgba(243, 106, 188, 0.5)",
  colorTwoEffect: "rgba(243, 106, 188, 0)",
  colorThreeEffect: "rgba(243, 106, 188, 0.7)",
};

const resetEffect = (id) => {
  const updatedSlides = slides.map((slide) =>
    slide.id === id
      ? {
          ...slide,
          colorOneEffect: defaultAttributes.colorOneEffect,
          colorTwoEffect: defaultAttributes.colorTwoEffect,
          colorThreeEffect: defaultAttributes.colorThreeEffect,
        }
      : slide
  );
  setAttributes({ slides: updatedSlides });
};

// Array di filtri per cui mostrare il controllo colore
const filtersWithColorOptions = ["filter-glitch", "filter-prism", "filter-inverse"];
const filtersWithColorOptionsOne = ["filter-classic","filter-lateral","filter-central-circle","filter-border-fade","filter-vignette","filter-spotlight","filter-diagonal","filter-nebula","filter-glitch", "filter-prism", "filter-inverse"];
const filtersWithColorOptionsTwo = ["filter-lateral","filter-central-circle","filter-border-fade","filter-vignette","filter-spotlight","filter-diagonal","filter-nebula","filter-glitch", "filter-prism", "filter-inverse"];

const [anchorEl, setAnchorEl] = useState(null);

const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleClose = () => {
  setAnchorEl(null);
};

const open = Boolean(anchorEl);
const id = open ? 'custom-popover' : undefined;

 const [isProFeature, setIsProFeature] = useState(true);

  useEffect(() => {
      if (typeof window.isProFeature !== 'undefined') {
          setIsProFeature(window.isProFeature);
      }
  }, []);

  return (
    <>
      <div className="content-subdescription-section-slider" style={{borderBottom: '2px solid var(--label-color)'}}>
        <h2>{__("Custom Content","slider-future")}</h2>
      </div>
      {slides.map((slide, index) => (
        <PanelBody
          key={index}
          className="slider-future-panel panel-slide"
          title={
            <>
              {renderCircle(slide.id)} {__("Slide", "slider-future")} {index + 1}
              <div
                onClick={(event) => {
                  event.stopPropagation();
                }}
              >
        <MoreVertIcon className={`icon-slide-clone ${open ? 'active' : ''}`} aria-describedby={id} onClick={handleClick} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        slotProps={{
          paper: {
            style: { backgroundColor: 'var(--background-color)',color:'var(--light-color' }, // Personalizza il colore di sfondo
          },
        }}
         // Aggiungi un offset per spostare il popover più in basso
         style={{ marginTop: '20px' }} // Regola questo valore per spostare il popover più in basso
      >
        <MenuItem  style={{ fontSize: '13px'}} onClick={() => { removeSlide(slide.id); handleClose(); }}>
          <DeleteOutlineIcon  style={{ fontSize: '14px',marginRight:'8px'}} />
          {__("Delete", "slider-future")}
        </MenuItem>
        <MenuItem  style={{ fontSize: '13px'}} onClick={()  => { cloneSlide(slide); handleClose(); }}>
          <FileCopyIcon  style={{ fontSize: '14px', marginRight:'8px'}} />
          {__("Clone", "slider-future")}
        </MenuItem>
      </Popover>
              </div>
            </>
          }
          onToggle={() => handlePanelSelect(slide.id)}
          opened={openPanelId === slide.id} 
        >
          <SectionSelectorSlide onSectionChange={setActiveSectionSlide} />
          {activeSectionSlide === "background" && (
            <>
              <div className="content-title-custom-panel intermedy">
                <h2 className="title-custom-panel">
                  {__("Background", "slider-future")}
                </h2>
              </div>
              <div
                className="content_slide"
                style={{ paddingTop: "0", paddingBottom: "0" }}
              >
                <div className="content-section-panel hover-pro-video" style={{ padding: "0",position:'relative' }}>
                {isProFeature && (
                  <ProTooltip 
                  tooltipProTop={'4px'}
                  tooltipProRight={'-2px'}
                  />
                  )}
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
                          title: <span>{__("Color", "slider-future")}</span>,
                        },
                        {
                          name: "gradient",
                          title: (
                            <span>{__("Gradient", "slider-future")}</span>
                          ),
                        },
                        {
                          name: "image",
                          title: <span>{__("Image", "slider-future")}</span>,
                        },
                        {
                          name: "video",
                          title: <span>{__("Video", "slider-future")}</span>,
                        className: `tab-video ${isProFeature ? 'no-color' : ''}`,
                          disabled:isProFeature, 
                        },
                      ]}
                    >
                      {(tab) => (
                        <>
                          {tab.name === "color" && (
                            <>
                            <div
                              className="custom-select color"
                            >
                              <ColorOptionsPanel
                                colorNormal={slide.backgroundColor}
                                setColorNormal={(color) =>
                                  updateSlideBackgroundColor(slide.id, color)
                                }
                                buttonIcon={
                                  <ColorLensIcon />
                                }
                              />
                            </div>
                            <div className={`${isProFeature ? 'hover-pro' : ''}`} style={{position:'relative'}}>
                              <CustomToggleControl
                                label={
                                  <>
                                 <BlurOnIcon/>
                                    {__("Radial Effect", "slider-future")}
                                  </>
                                }
                                checked={slide.enableRadialEffect || false}
                                onChange={(value) =>
                                  updateEnableRadialEffect(slide.id, value)
                                }
                                disabled={isProFeature}
                              />
                                {isProFeature && (
                                <ProTooltip
                                tooltipProTop={'14px'}
                                  tooltipProRight={'38px'}
                                  />
                                )}
                                </div>
                            {slide.enableRadialEffect && (
                              <>
                            <div
                              className="custom-select color"
                            >
                              <ColorOptionsPanel
                                colorNormal={slide.effectRadialColorOne}
                                setColorNormal={(color) =>
                                  updateSlideEffectRadialColorOne(slide.id, color)
                                }
                                buttonIcon={
                                  <ColorLensIcon />
                                }
                              />
                            </div>
                            <div
                              className="custom-select color"
                            >
                              <ColorOptionsPanel
                                colorNormal={slide.effectRadialColorTwo}
                                setColorNormal={(color) =>
                                  updateSlideEffectRadialColorTwo(slide.id, color)
                                }
                                buttonIcon={
                                  <ColorLensIcon />
                                }
                              />
                            </div>
                                      <div className="custom-select">
                            <RangeControl
                              label={
                                <>
                                  <ViewCompactIcon/>
                                  {__("Size", "slider-future")}
                                </>
                              }
                              value={slide.rangeEffectRadial||1}
                              onChange={(value) =>
                                updateSlideRangeEffectRadial(slide.id, value)
                              }
                              min={1}
                              max={70}
                              step={1}
                            />
                          </div>
                          </>
                            )}
                            </>
                          )}
                          {tab.name === "gradient" && (
                            <div
                              className="custom-select color"
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
                                  <GradientIcon/>
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
                                        <>
                                         <div className="custom-select">
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
                                              gap: "5px",
                                            }}
                                          >
                                            <PhotoSizeSelectActualIcon style={{width:'18px'}}/>
                                            {__(
                                              "Media Library",
                                              "slider-future"
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
                                        </div>
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
                                          <PhotoLibraryIcon style={{width:'18px'}}/>
                                          {__("Object Library", "slider-future")}
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
                                      </>
                                      )}
                                      {slide.backgroundImage && (
                                        <>
                                          <div
                                            style={{
                                              position: "relative",
                                              padding: "0px 4px",
                                              marginTop: "12px",
                                              marginBottom: "12px",
                                            }}
                                          >
                                            <FocalPointPicker
                                             __nextHasNoMarginBottom
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
                                          <CustomSelectControl
                                            label={
                                              <>
                                                <FitScreenIcon />
                                                {__("Image fit", "slider-future")}
                                              </>
                                            }
                                            value={slide.fit}
                                            options={[
                                              { label: __("Cover", "slider-future"), value: "cover" },
                                              { label: __("Auto", "slider-future"), value: "auto" },
                                              { label: __("Contain", "slider-future"), value: "contain" },
                                            ]}
                                            onChange={(newFit) => updateSlideFit(slide.id, newFit)}
                                          />
                                           <CustomSelectControl
                                            label={
                                              <>
                                                <RepeatIcon />
                                                {__("Background Repeat", "slider-future")}
                                              </>
                                            }
                                            value={slide.repeat}
                                            options={[
                                              { label: __("Repeat", "slider-future"), value: "repeat" },
                                              { label: __("No Repeat", "slider-future"), value: "no-repeat" },
                                            ]}
                                            onChange={(newValue) => updateSlideRepeat(slide.id, newValue)}
                                          />
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
                                            icon={<ChangeCircleOutlinedIcon />}
                                            label={__(
                                              "Change Image form Media Library",
                                              "slider-future"
                                            )}
                                          ></Button>
                                          <Button
                                            onClick={openModal}
                                            style={{
                                              marginLeft: "2px",
                                              position: "relative",
                                              top: "-2px",
                                            }}
                                            className="button-replace"
                                            icon={<ChangeCircleOutlinedIcon />}
                                            label={__("Change Image from Object Library", "slider-future")}
                                          />
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
                                  icon={<DeleteOutlineIcon />}
                                  label={__("Delete Image", "slider-future")}
                                ></Button>
                              )}
                            {isModalOpen && (
                              <ImageSelectionModal
                                onClose={closeModal}
                                onSelect={handleImageSelect}
                              />
                            )}
                            </div>
                          )}

                          {tab.name === "video" && (
                            <div
                              className="custom-select"
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
                                              gap: "5px",
                                            }}
                                          >
                                            <SmartDisplayIcon/>
                                            {__(
                                              "Select Background Video",
                                              "slider-future"
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
                                             __nextHasNoMarginBottom
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
                                            icon={<ChangeCircleOutlinedIcon />}
                                            label={__(
                                              "Change Background Video",
                                              "slider-future"
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
                                  icon={<DeleteOutlineIcon />}
                                  label={__("Delete Video", "slider-future")}
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
                  {__("Layout", "slider-future")}
                </h2>
                <div className={`${isProFeature ? 'hover-pro' : ''}`} style={{position:'relative'}}>
                  <CustomToggleControl
                    customClassToggle={"drag-mode"}
                    label={
                      <>
                       <WidgetsIcon />
                        {__("Canvas Mode", "slider-future")}
                        {!isProFeature && (<span className="beta-mode">{__('Beta','slider-future')}</span>)}
                      </>
                    }
                    checked={slide.developerMode}
                    onChange={(value) =>
                      updateDeveloperMode(slide.id, value)
                    }
                    disabled={isProFeature}
                  />
                   {isProFeature && (
                   <ProTooltip
                        tooltipProTop={'14px'}
                          tooltipProRight={'52px'}
                          />
                        )}
                        </div>
              </div>
              <div
                className="content-section-panel"
                style={{ paddingTop: "0", paddingBottom: "0" }}
              >
              {slide.developerMode && (
              <>
              <p
                className="notice components-base-control__help"
                style={{
                  borderRadius: "0",
                  marginTop: "0px",
                }}
              >
                {__(
    "Warning: Enabling this mode activates the drag-and-drop functionality for elements within the slide using absolute positioning. You can place them wherever you like. Each element can be positioned for desktop, tablet, and mobile responsive views. Please proceed with caution! ",
    "slider-future"
)}
<strong>{__("The menu item cannot be dragged!", "slider-future")}</strong>

              </p>
              <div className="custom-select">
              <DeviceSelector
                selectedDevice={selectedDevice}
                onDeviceChange={onDeviceChange} 
              />
              </div>
              </>
            )}
               {!slide.developerMode && (
                <>
             <CustomSelectControl
                    label={
                      <>
                        <ViewQuiltIcon />
                        {__("Display", "slider-future")}
                      </>
                    }
                    value={slide.layoutDisplay}
                    options={[
                      {
                        label: __("Flex", "slider-future"),
                        value: "flex",
                      },
                      {
                        label: __("Grid", "slider-future"),
                        value: "grid",
                      },
                    ]}
                    onChange={(value) =>
                      updateSlideLayoutDisplay(slide.id, value)
                    }
                  />
             {slide.layoutDisplay === "grid" && (
              <>
               <CustomSelectControl
                    label={
                      <>
                        <AppsIcon />
                        {__("Grid item position", "slider-future")}
                      </>
                    }
                    value={slide.itemGridPosition}
                    options={[
                      {
                        label: __("Auto", "slider-future"),
                        value: "auto",
                      },
                      {
                        label: __("Manual", "slider-future"),
                        value: "manual",
                      },
                    ]}
                    onChange={(value) =>
                      updateSlideItemGridPosition(slide.id, value)
                    }
                  />
            {slide.itemGridPosition === "auto" && (
               <CustomRangeControl
               label={
                 <>
                   <SettingsEthernetOutlinedIcon />
                   {__("Minimum column width", "slider-future")}
                 </>
               }
               value={slide.itemGridWidth ?? 150}
               onChange={(value) =>
                 updateSlideItemGridWidth(
                   slide.id,
                   value
                 )
               }
               min={0}
                max={600}
                step={1}
             />
            )}
             {slide.itemGridPosition === "manual" && (
               <CustomRangeControl
               label={
                 <>
                   <ViewColumnIcon />
                   {__("Columns", "slider-future")}
                 </>
               }
               value={slide.itemGridColumn ?? 5}
               onChange={(value) =>
                 updateSlideItemGridColumn(
                   slide.id,
                   value
                 )
               }
               min={1}
               max={16}
               step={1}
             />
            )}
            </>
            )}
            {slide.layoutDisplay === "flex" && (
              <>
            <CustomSelectControl
                    label={
                      <>
                        <ViewQuiltIcon />
                        {__("Content direction", "slider-future")}
                      </>
                    }
                    value={slide.layout}
                    options={[
                      {
                        label: __("Column", "slider-future"),
                        value: "column",
                      },
                      {
                        label: __("Row", "slider-future"),
                        value: "row",
                      },
                    ]}
                    onChange={(newLayout) =>
                      updateSlideLayout(slide.id, newLayout)
                    }
                  />
            {slide.layout === "row" && (
              <>
               <CustomSelectControl
                    label={
                      <>
                        <AlignHorizontalCenterIcon />
                        {__("Justification", "slider-future")}
                      </>
                    }
                    value={slide.layoutJustify}
                    options={[
                      {
                        label: __("Left", "slider-future"),
                        value: "flex-start",
                      },
                      {
                        label: __("Center", "slider-future"),
                        value: "center",
                      },
                      {
                        label: __("Right", "slider-future"),
                        value: "flex-end",
                      },
                      {
                        label: __("Space between", "slider-future"),
                        value: "space-between",
                      },
                    ]}
                    onChange={(value) =>
                      updateSlideLayoutJustify(slide.id, value)
                    }
                  />
                   <CustomSelectControl
                    label={
                      <>
                         <AlignVerticalCenterIcon />
                         {__("Vertical alignment", "slider-future")}
                      </>
                    }
                    value={slide.layoutVerticalAlignRow}
                    options={[
                      {
                        label: __("Top", "slider-future"),
                        value: "flex-start",
                      },
                      {
                        label: __("Middle", "slider-future"),
                        value: "center",
                      },
                      {
                        label: __("Bottom", "slider-future"),
                        value: "flex-end",
                      },
                      {
                        label: __("Stretch to fill", "slider-future"),
                        value: "stretch",
                      },
                    ]}
                    onChange={(value) =>
                      updateSlideLayoutVerticalAlignRow(slide.id, value)
                    }
                  />
            </>
            )}
            {slide.layout === "column" && (
              <>
               <CustomSelectControl
                    label={
                      <>
                        <AlignHorizontalCenterIcon />
                        {__("Justification", "slider-future")}
                      </>
                    }
                    value={slide.layoutJustifyColumn}
                    options={[
                      {
                        label: __("Left", "slider-future"),
                        value: "flex-start",
                      },
                      {
                        label: __("Center", "slider-future"),
                        value: "center",
                      },
                      {
                        label: __("Right", "slider-future"),
                        value: "flex-end",
                      },
                      {
                        label: __("Stretch", "slider-future"),
                        value: "stretch",
                      },
                    ]}
                    onChange={(value) =>
                      updateSlideLayoutJustifyColumn(slide.id, value)
                    }
                  />
                   <CustomSelectControl
                    label={
                      <>
                         <AlignVerticalCenterIcon />
                         {__("Vertical alignment", "slider-future")}
                      </>
                    }
                    value={slide.layoutVerticalAlignColumn}
                    options={[
                      {
                        label: __("Top", "slider-future"),
                        value: "flex-start",
                      },
                      {
                        label: __("Middle", "slider-future"),
                        value: "center",
                      },
                      {
                        label: __("Bottom", "slider-future"),
                        value: "flex-end",
                      },
                      {
                        label: __("Space between", "slider-future"),
                        value: "space-between",
                      },
                    ]}
                    onChange={(value) =>
                      updateSlideLayoutVerticalAlignColumn(slide.id, value)
                    }
                  />
            </>
            )}
  <CustomSelectControl
                    label={
                      <>
                        <WrapTextIcon />
                        {__("Flex wrap", "slider-future")}
                      </>
                    }
                    value={slide.layoutWrap}
                    options={[
                      {
                        label: __("Wrap", "slider-future"),
                        value: "wrap",
                      },
                      {
                        label: __("No Wrap", "slider-future"),
                        value: "nowrap",
                      },
                    ]}
                    onChange={(value) =>
                      updateSlideLayoutWrap(slide.id, value)
                    }
                  />
<CustomRangeControl
                    label={
                      <>
                        <SettingsEthernetIcon/>
                        {__("Gap between items", "slider-future")}
                      </>
                    }
                    value={slide.gapItems || 0}
                    onChange={(newGapItems) =>
                      updateSlideGapItems(slide.id, newGapItems)
                    }
                    min={0}
                    max={256}
                    step={1}
                  />
              </>
            )}
                  <CustomToggleControl
                    label={
                      <>
                       <WidthNormalIcon />
                        {__("Use content width", "slider-future")}
                      </>
                    }
                    checked={slide.enableContentWidth || false}
                    onChange={(value) =>  updateSlideEnableContentWidth(slide.id, value)}
                    showTooltip={true}
                    tooltipText={__("Nested blocks will fill the width of this container. Toggle to constrain.", "slider-future")}
                    tooltipTop = {'11px'}
                    tooltipLeft = {'60%'}
                  />
              {slide.enableContentWidth && (
                <>
                 <CustomRangeControl
                    label={
                      <>
                        <SettingsEthernetIcon/>
                        {__("Content width", "slider-future")}
                      </>
                    }
                    value={slide.contentWidth || 900}
                    onChange={(value) =>
                      updateSlideContentWidth(slide.id, value)
                    }
                    min={100}
                    max={3200}
                    step={1}
                  />
                </>
              )}
                </>
               )}
              </div>
            </>
          )}
          {activeSectionSlide === "style" && (
            <>
            {!slide.developerMode && (
            <>
              <div className="content-title-custom-panel intermedy">
                <h2 className="title-custom-panel">
                  {__("Spacing", "slider-future")}
                </h2>
              </div>
              <div className="content-section-panel" style={{ padding: "0" }}>
              <CustomRangeControl
                    label={
                      <>
                        <VerticalAlignTopIcon/>
                        {__("Content vertical padding", "slider-future")}
                      </>
                    }
                    value={slide.backgroundVerticalPadding || 0}
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
                   <CustomRangeControl
                    label={
                      <>
                        <VerticalAlignTopIcon  style={{
                            transform: "rotate(90deg)",
                          }}/>
                        {__("Content horizontal padding", "slider-future")}
                      </>
                    }
                    value={slide.backgroundHorizontalPadding || 0}
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
              </>
          )}
              <div className="content-title-custom-panel intermedy">
                <h2 className="title-custom-panel">
                  {__("Border", "slider-future")}
                </h2>
              </div>
              <div
                className="content-section-panel"
                style={{ paddingTop: "0", paddingBottom: "0" }}
              >
                 <CustomSelectControl
                    label={
                      <>
                      <BorderStyleIcon />
                        {__("Border style", "slider-future")}
                      </>
                    }
                    value={slide.borderStyleSlide || "none"}
                    options={borderStyleOptions}
                    onChange={(value) =>
                      updateBorderStyleSlide(slide.id, value)
                    }
                  />
                {slide.borderStyleSlide !== "none" && (
                  <>
                    <div className="custom-select color">
                      <ColorOptionsPanel
                        colorNormal={slide.backgroundBorderColor}
                        setColorNormal={(color) =>
                          updateSlideBackgroundBorderColor(slide.id, color)
                        }
                        buttonTitle={__("Border Color", "slider-future")}
                        buttonIcon={
                          <BorderColorIcon/>
                        }
                      />
                    </div>
                    <CustomRangeControl
                    label={
                      <>
                         <MarginIcon />
                        {__("Border width", "slider-future")}
                      </>
                    }
                    value={slide.backgroundBorderSize || 0}
                    onChange={(newSize) =>
                      updateSlideBackgroundBorderSize(slide.id, newSize)
                    }
                    min={0}
                    max={20}
                    step={1}
                  />
                      <CustomRangeControl
                    label={
                      <>
                         <BorderInnerIcon />
                        {__("Border radius", "slider-future")}
                      </>
                    }
                    value={slide.backgroundBorderRadius || 0}
                        onChange={(newRadius) =>
                          updateSlideBackgroundBorderRadius(slide.id, newRadius)
                        }
                    min={0}
                    max={256}
                    step={1}
                  />
                  </>
                )}
              </div>
              <div
                className="content-section-panel"
                style={{ paddingTop: "0", paddingBottom: "0" }}
              >
              <div className="custom-select">
                  <div className="button-apply-style">
                    <p>
                      {__("Apply Styles and Layout to Existing and New Slides!", "slider-future")}
                    </p>
                    <button onClick={() => openConfirmationDialog(slide)}>
                      {__("Apply", "slider-future")}
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
                          "Are you sure you want to apply Styles and Layout to Existing and New Slides?",
                          "slider-future"
                        )}
                      </p>
                      <div className="confirmation-buttons">
                        <button onClick={cancelApplySettings}>
                          {__("Cancel", "slider-future")}
                        </button>
                        <button onClick={confirmApplySettings}>
                          {__("Confirm", "slider-future")}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                </div>
            
          </>
          )}
        {activeSectionSlide === "filter" && (
        <>
         <div className="content-title-custom-panel intermedy">
            <h2 className="title-custom-panel">
              {__("Filters", "slider-future")}
            </h2>
          </div>
            <div className="content-section-panel" style={{ padding: "0" }}>
            <div className={`${isProFeature ? 'hover-pro' : ''}`} style={{position:'relative'}}>
            <CustomSelectControl
                    label={
                      <>
                      <BlurOnIcon />
                        {__("Bg Filter", "slider-future")}
                      </>
                    }
                    value={slide.filter || 'none'}
                    onChange={(value) =>
                      updateSlideFilter(slide.id, value)
                    }
                    options={isProFeature ? filterBackgroundOptions : filterBackgroundOptionsFree}
                  />
                   {slide.filter=== "more-pro-filter" && (
                      <ProNotice 
                        radiusOneProNotice = '0'
                        radiusTwoProNotice = '0'
                      />
                    )}
                        </div>
            {slide.filter !== "none" && (
              <>
               {filtersWithColorOptionsOne.includes(slide.filter) && (
                  <div className="custom-select color">
                    <ColorOptionsPanel
                      colorNormal={slide.colorOneEffect}
                      setColorNormal={(color) =>
                        updateColorOneEffect(slide.id, color)
                      }
                      buttonTitle={__("First Color", "slider-future")}
                      buttonIcon={
                        <ColorLensIcon />
                      }
                    />
                  </div>
                 )}
                 {filtersWithColorOptionsTwo.includes(slide.filter) && (
                  <div className="custom-select color">
                    <ColorOptionsPanel
                      colorNormal={slide.colorTwoEffect}
                      setColorNormal={(color) =>
                        updateColorTwoEffect(slide.id, color)
                      }
                      buttonTitle={__("Second Color", "slider-future")}
                      buttonIcon={
                        <ColorLensIcon />
                      }
                    />
                  </div>
                 )}
                  {filtersWithColorOptions.includes(slide.filter) && (
                    <div className="custom-select color">
                      <ColorOptionsPanel
                        colorNormal={slide.colorThreeEffect}
                        setColorNormal={(color) =>
                          updateColorThreeEffect(slide.id, color)
                        }
                        buttonTitle={__("Third Color", "slider-future")}
                        buttonIcon={
                          <ColorLensIcon />
                        }
                      />
                    </div>
                  )}
                    <Button onClick={() => resetEffect(slide.id)} className="button-reset">
                    <RestartAltIcon />
                    {__("Reset Effect Color", "slider-future")}
                  </Button>
               </>
            )}
             <div className={`${isProFeature ? 'hover-pro' : ''}`} style={{position:'relative'}}>
                <CustomSelectControl
                    label={
                      <>
                      <TextureIcon />
                        {__("Divider", "slider-future")}
                      </>
                    }
                    value={slide.divider || 'none'}
                    onChange={(value) =>
                      updateSlideDivider(slide.id, value)
                    }
                    options={dividerBackgroundOptions}
                    disabled={isProFeature}
                  />
                   {isProFeature && (
                        <ProTooltip
                        tooltipProTop={'14px'}
                          tooltipProRight={'92px'}
                          />
                        )}
                  </div>
                    {slide.divider !== "none" && (
                      <>
                   <CustomRangeControl
                    label={
                      <>
                        <SettingsEthernetIcon style={{transform:'rotate(90deg'}} />
                        {__("Height", "slider-future")}
                      </>
                    }
                    value={slide.heightDivider || 200}
                    onChange={(value) =>
                      updateSlideHeightDivider(slide.id, value)
                    }
                    min={0}
                    max={500}
                    step={1}
                  />
                  <CustomRangeControl
                    label={
                      <>
                        <SettingsEthernetIcon />
                        {__("Width", "slider-future")}
                      </>
                    }
                    value={slide.widthDivider || 100}
                    onChange={(value) =>
                      updateSlideWidthDivider(slide.id, value)
                    }
                    min={100}
                    max={300}
                    step={1}
                  />
                  <div className="custom-select color">
                      <ColorOptionsPanel
                        colorNormal={slide.colorDivider}
                        setColorNormal={(color) =>
                          updateColorDivider(slide.id, color)
                        }
                        buttonTitle={__("Color", "slider-future")}
                        buttonIcon={
                          <ColorLensIcon />
                        }
                      />
                    </div>
                    {["divider-wawes", "divider-curve-asymmetrical", "divider-triangle-asymmetrical", "divider-tilt"].includes(slide.divider) && (
                    <CustomToggleControl
                      label={
                        <>
                        <FlipIcon/>
                          {__("Flip", "slider-future")}
                        </>
                      }
                      checked={slide.flipDivider || false}
                      onChange={(value) =>
                        updateFlipDivider(slide.id, value)
                      }
                    />
                  )}
                  {slide.divider !== 'divider-tilt' && (
                      <CustomToggleControl
                      label={
                        <>
                        <ScreenRotationAltIcon/>
                          {__("Invert", "slider-future")}
                        </>
                      }
                      checked={slide.invertDivider || false}
                      onChange={(value) =>
                        updateInvertDivider(slide.id, value)
                      }
                    />
                  )}
                     <CustomSelectControl
                    label={
                      <>
                      <MultipleStopIcon style={{transform:'rotate(90deg)'}} />
                        {__("Position", "slider-future")}
                      </>
                    }
                    value={slide.positionDivider || 'divider-top'}
                    onChange={(value) =>
                      updateSlidePositionDivider(slide.id, value)
                    }
                    options={[
                      {
                        label: __("Top", "slider-future"),
                        value: "divider-top",
                      },
                      {
                        label: __("Bottom", "slider-future"),
                        value: "divider-bottom",
                      },
                    ]}
                  />
                  </>
                )}
            </div>
        </>
      )}
       {activeSectionSlide === "actions" && (
        <>
              <div
              className="content-title-custom-panel intermedy"
            >
              <h2 className="title-custom-panel">
                {__("Actions", "slider-future")}
              </h2>
            </div>
            <div className="content-section-panel" style={{ padding: "0" }}>
        <CustomSelectControl
          label={
            <>
              <TouchAppIcon />
              {__("Link actions", "slider-future")}
            </>
          }
          value={slide.link || "none"}
          onChange={(value) =>
            updateLink(slide.id, value)
          }
          options={[
            { label:__("None",'slider-future'), value: "none" },
            { label: __("Link",'slider-future'), value: "link" },
            { label: __("Scroll Below Slider",'slider-future'), value: "scroll-below" },
            { label: __("Scroll to ID Element",'slider-future'), value: "scroll-to-id" },
          ]}
        />
      {slide.link === "link" && (
        <>
          <div className="custom-select select-text-control">
            <TextControl
              __nextHasNoMarginBottom
              value={slide.url}
              label={
                <>
                  <InsertLinkIcon />
                  {__("Enter Url", "slider-future")}
                </>
              }
              onChange={(value) =>
                updateUrl(slide.id, value)
              }
              placeholder={__("Enter url...", "slider-future")}
            />
          </div>
            <CustomSelectControl
              label={
                <>
                  <OpenInNewIcon />
                  {__("Target", "slider-future")}
                </>
              }
              value={slide.target || "_self"}
              onChange={(value) =>
                updateTarget(slide.id, value)
              }
              options={[
                { label: __("Same Window",'slider-future'), value: "_self" },
                { label: __("New Window",'slider-future'), value: "_blank" },
              ]}
            />
            <CustomSelectControl
              label={
                <>
                  <DatasetLinkedIcon />
                  {__("Link Behavior", "slider-future")}
                </>
              }
              value={slide.rel || "follow"}
              onChange={(value) =>
                updateRel(slide.id, value)
              }
              options={[
                { label: __("Follow Link",'slider-future'), value: "follow" },
                { label: __("No Follow",'slider-future'), value: "nofollow" },
              ]}
            />
        </>
      )}
      {slide.link === "scroll-to-id" && (
        <div className="custom-select select-text-control">
          <TextControl
            __nextHasNoMarginBottom
            value={slide.scrollId}
            label={
              <>
                <PhishingIcon />
                {__("Enter ID", "slider-future")}
              </>
            }
            onChange={(value) =>
              updateScrollId(slide.id, value)
            }
            placeholder={__("Enter id...", "slider-future")}
          />
        </div>
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
              >{!slide.developerMode && (
                <div className="button-move">
                  <Tooltip text={__("Move before", "slider-future")}>
                    <Button
                      onClick={() => moveElementUp(slide.id, elementIndex)}
                      size="small"
                      disabled={elementIndex === 0}
                      label={__("Move before", "slider-future")}
                    >
                      ↑
                    </Button>
                  </Tooltip>
                  <Tooltip text={__("Move after", "slider-future")}>
                    <Button
                      onClick={() => moveElementDown(slide.id, elementIndex)}
                      size="small"
                      disabled={elementIndex === slide.elements.length - 1}
                      label={__("Move after", "slider-future")}
                    >
                      ↓
                    </Button>
                  </Tooltip>
                </div>
              )}
                {element.type === "title" && (
                    <TextEdit
                      slide={slide}
                      slides={slides}
                      element={element}
                      elementIndex={elementIndex}
                      setAttributes={setAttributes}
                      setActiveSection={setActiveSection}
                      activeSection={activeSection}
                      device={device}
                      handleDesktopClick={handleDesktopClick}
                      handleTabletClick={handleTabletClick}
                      handleMobileClick={handleMobileClick}
                      showOtherButtons={showOtherButtons}
                      attributes={attributes}
                      onAnimatedText={handlePlayText} 
                      className={selectedClass}
                    />
                )}
                {element.type === "div" && (
                  <GroupEdit
                    slide={slide}
                    slides={slides}
                    element={element}
                    elementIndex={elementIndex}
                    setAttributes={setAttributes}
                    setActiveSectionBlock={setActiveSectionBlock}
                    activeSectionBlock={activeSectionBlock}
                    attributes={attributes}
                    device={device}
                    handleDesktopClick={handleDesktopClick}
                    handleTabletClick={handleTabletClick}
                    handleMobileClick={handleMobileClick}
                    showOtherButtons={showOtherButtons}
                    onAnimatedGroup={handlePlayGroup}
                    handlePlayInnerText={handlePlayInnerText}
                    playAnimationInnerText={playAnimationInnerText}
                    handlePlayInnerImage={handlePlayInnerImage}
                    playAnimationInnerImage={playAnimationInnerImage}
                    handlePlayInnerButton={handlePlayInnerButton}
                    playAnimationInnerButton={playAnimationInnerButton}
                    handlePlayInnerIcon={handlePlayInnerIcon}
                    playAnimationInnerIcon={playAnimationInnerIcon}
                    playAnimations={playAnimations}
                  />
                )}
                {element.type === "image" && (
                  <ImageEdit
                    slide={slide}
                    slides={slides}
                    element={element}
                    elementIndex={elementIndex}
                    setAttributes={setAttributes}
                    setActiveSectionImage={setActiveSectionImage}
                    activeSectionImage={activeSectionImage}
                    attributes={attributes}
                    onAnimatedImage={handlePlayImage}
                  />
                )}
                 {element.type === "button" && (
                    <ButtonEdit
                      slide={slide}
                      slides={slides}
                      element={element}
                      elementIndex={elementIndex}
                      setAttributes={setAttributes}
                      setActiveSection={setActiveSection}
                      activeSection={activeSection}
                      device={device}
                      handleDesktopClick={handleDesktopClick}
                      handleTabletClick={handleTabletClick}
                      handleMobileClick={handleMobileClick}
                      showOtherButtons={showOtherButtons}
                      attributes={attributes}
                      setSelectedIcon={setSelectedIcon}
                      onAnimatedButton={handlePlayButton}
                    />            
                  )}
                   {element.type === "icon" && (
                    <IconEdit
                      slide={slide}
                      slides={slides}
                      element={element}
                      elementIndex={elementIndex}
                      setAttributes={setAttributes}
                      setActiveSection={setActiveSection}
                      activeSection={activeSection}
                      device={device}
                      handleDesktopClick={handleDesktopClick}
                      handleTabletClick={handleTabletClick}
                      handleMobileClick={handleMobileClick}
                      showOtherButtons={showOtherButtons}
                      attributes={attributes}
                      onAnimatedIcon={handlePlayIcon}
                    />
                )}
              </div>
            ))}
          <div className="divider-controls"></div>
          <div className="button-add-element">
            <Button
              onClick={() => addSlideTitle(slide.id)}
              label={__("Add text", "slider-future")}
            >
               <PostAddOutlinedIcon />
            </Button>
            <Button
              onClick={() => addSlideImage(slide.id)}
              label={__("Add image", "slider-future")}
            >
               <AddPhotoAlternateOutlinedIcon />
            </Button>
            <Button onClick={openModalButton} label="Add Button">
            <SmartButtonOutlinedIcon />
            </Button>
            {isModalOpenButton && (
              <ButtonTypeSelectionModal
                slideId={slide.id} 
                onClose={closeModalButton}
                onSelect={handleButtonTypeSelect} 
              />
            )}
            <Button
              onClick={() => addSlideIcon(slide.id)}
              label={__("Add Icon", "slider-future")}
            >
              <WbCloudyOutlinedIcon />
            </Button>
            <Button
              onClick={() => addSlideDiv(slide.id)}
              label={__("Add group", "slider-future")}
            >
              <AddCardIcon />
            </Button>
          </div>
        </PanelBody>
      ))}
      <div id="controls" className="button-add-slide">
        <div className="content-button-slide">
          <AddCircleIcon />
          <button onClick={addSlide}>{__("Add Slide", "slider-future")}</button>
         
        </div>
      </div>
    </>
  );
};

export default SlideEdit;
