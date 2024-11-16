import React from "react";
import {
  Button,
  Tooltip,
  __experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import { useState } from "react";
import { __ } from "@wordpress/i18n";
import CustomColorOptionsPanel from "../../controls/color/ColorOptionsPanel";
import CustomSelectControl from "../../controls/select/SelectControl";
import CustomRangeControl from "../../controls/range/RangeControl";
import InnerTextEdit from "../innertext/InnerTextEdit";
import InnerImageEdit from "../innerimage/InnerImageEdit";
import SectionSelector from "../multitab/sectionSelector";
import CustomTextControl from "../../controls/text/TextControl";
import AlignmentControl from "../align/aligncontrol";
import CustomShadowControl from "../../controls/shadow/ShadowControl";
import CustomActionControls from "../../multiControls/action";
import CustomVisibilityControls from "../../multiControls/visibility";
import CustomHoverControls from "../../multiControls/hover";
import ButtonControlsBlock from "../ButtonControlsBlock";
import CustomEffectControls from "../../multiControls/effect";
import {elementHtmlOptions} from '../../assets/options';
import {borderStyleOptions} from '../../assets/options';
import { selectOptionsEffectElement } from '../../assets/options';
import ButtonTypeInnerSelectionModal from "../buttonInnerModal";
import IconControlsInner from "../IconControlsInner";
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import SmartButtonOutlinedIcon from '@mui/icons-material/SmartButtonOutlined';
import WbCloudyOutlinedIcon from '@mui/icons-material/WbCloudyOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import PaletteIcon from '@mui/icons-material/Palette';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import SettingsEthernetOutlinedIcon from '@mui/icons-material/SettingsEthernetOutlined';
import WrapTextOutlinedIcon from '@mui/icons-material/WrapTextOutlined';
import AlignHorizontalLeftOutlinedIcon from '@mui/icons-material/AlignHorizontalLeftOutlined';
import WidthWideOutlinedIcon from '@mui/icons-material/WidthWideOutlined';
import HeightOutlinedIcon from '@mui/icons-material/HeightOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import VerticalAlignTopOutlinedIcon from '@mui/icons-material/VerticalAlignTopOutlined';
import StartOutlinedIcon from '@mui/icons-material/StartOutlined';
import MarginIcon from '@mui/icons-material/Margin';
import OpacityIcon from '@mui/icons-material/Opacity';
import LayersClearIcon from '@mui/icons-material/LayersClear';
import RotateRightIcon from '@mui/icons-material/RotateRight'; 
import BorderStyleIcon from '@mui/icons-material/BorderStyle';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import BorderLeftIcon from '@mui/icons-material/BorderLeft';
import BorderInnerIcon from '@mui/icons-material/BorderInner';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const GroupEdit = ({
  slide,
  element,
  elementIndex,
  slides,
  setAttributes,
  setActiveSectionBlock,
  activeSectionBlock,
  parallax,
  device,
  handleDesktopClick,
  handleTabletClick,
  handleMobileClick,
  showOtherButtons,
  attributes,
  onAnimatedGroup,
  handlePlayInnerText,
  handlePlayInnerImage

  
}) => {
  // Inizializza lo stato locale utilizzando element.playStateDiv
  const [playStateDiv, setPlayState] = useState(element.playStateDiv || "");
  const [selectedIcon, setSelectedIcon] = useState(null); // Stato locale per l'icona selezionata


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

  // nascondi il div in editor
  const [hideDiv, setHideDiv] = useState(element.hideDiv || "");

  const toggleHideDiv = () => {
    const newState = hideDiv === "hide" ? "" : "hide";
    setHideDiv(newState);
  
    element.hideDiv = newState;
    setAttributes({ elements: [...slides] }); // Oppure aggiorna la struttura dati appropriata
  };

  const { innerTextColorDefault } = attributes;

  // Update Position
  const updateSlidePositionDiv = (slideId, index, newPositionDiv) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "div" && i === index
                ? { ...element, positionDiv: newPositionDiv }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Margin div
  const updatenewMarginDiv = (slideId, index, newMarginDiv) => {
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
                  marginDiv: {
                    top: addUnit(
                      newMarginDiv.top || "0",
                      newMarginDiv.unit || "px"
                    ),
                    right: addUnit(
                      newMarginDiv.right || "0",
                      newMarginDiv.unit || "px"
                    ),
                    bottom: addUnit(
                      newMarginDiv.bottom || "0",
                      newMarginDiv.unit || "px"
                    ),
                    left: addUnit(
                      newMarginDiv.left || "0",
                      newMarginDiv.unit || "px"
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

  // Border Size
  const updatenewBackgroundBorderSizeDiv = (slideId, index, newBorderSize) => {
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
                  backgroundBorderSizeDiv: {
                    top: addUnit(
                      newBorderSize.top || "0",
                      newBorderSize.unit || "px"
                    ),
                    right: addUnit(
                      newBorderSize.right || "0",
                      newBorderSize.unit || "px"
                    ),
                    bottom: addUnit(
                      newBorderSize.bottom || "0",
                      newBorderSize.unit || "px"
                    ),
                    left: addUnit(
                      newBorderSize.left || "0",
                      newBorderSize.unit || "px"
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

   // Border Radius
   const updatenewBackgroundBorderRadiusDiv = (slideId, index, newBorderRadius) => {
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
                  backgroundBorderRadiusDiv: {
                    top: addUnit(
                      newBorderRadius.top || "0",
                      newBorderRadius.unit || "px"
                    ),
                    right: addUnit(
                      newBorderRadius.right || "0",
                      newBorderRadius.unit || "px"
                    ),
                    bottom: addUnit(
                      newBorderRadius.bottom || "0",
                      newBorderRadius.unit || "px"
                    ),
                    left: addUnit(
                      newBorderRadius.left || "0",
                      newBorderRadius.unit || "px"
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

  

  // Remove Div
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

  // Add Text inside block
  const addSlideTitleDiv = (slideId, divIndex) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, index) =>
              index === divIndex
                ? {
                    ...element,
                    innerElements: [
                      ...(element.innerElements || []),
                      {
                        type: "text", 
                        content: "",
                        widthTitleBlock: "auto",
                        widthCustomTitleBlock: 100,
                        textAlign: "center",
                        elementTitle: "h4",
                        fontSize: 16,
                        fontSizeTablet: 16,
                        fontSizeMobile: 16,
                        fontStyle: "",
                        fontFamilyTitleBlock: "",
                        fontWeightTitleBlock: "",
                        lineHeight: 1.2,
                        letterSpacingTitleBlock: 0,
                        textColor: innerTextColorDefault,
                        paddingTitleBlock: {
                          top: "0",
                          right: "0",
                          bottom: "0",
                          left: "0",
                        },
                        marginTitle: {
                          top: "0",
                          right: "0",
                          bottom: "0",
                          left: "0",
                        },
                        borderStyle: "none",
                        backgroundBorderSize: 0,
                        backgroundBorderRadius: 0,
                        backgroundBorderColor: "",
                        rotate: 0,
                        opacity: 1,
                        textWriteMode: "horizontal-tb",
                        textOrientation: "initial",
                        animation: "none",
                        durationEffect: 1,
                        delayEffect: 0,
                        durationEffectOdd: 1,
                        durationEffectEven: 1,
                        interation: 1,
                        speedEffect: 100,
                        pauseEffect: 0,
                        animationCount: "1",
                        widthCursor: 2,
                        animationCursor: 1,
                        cursorColor: innerTextColorDefault,
                        gradinetColorOne: "",
                        gradinetColorTwo: "",
                        gradinetColorThree: "",
                        gradinetColorFour: "",
                        decoration: "none",
                        underlineColor: innerTextColorDefault,
                        underlinePadding: 0,
                        underlineVertical: 0,
                        underlineHorizontal: 0,
                        underlineWidth: 20,
                        underlineHeight: 3,
                        underlineAnimation: "none",
                        underlineAnimationFrom: 5,
                        underlineAnimationTo: 50,
                        underlineFromSizeNew: 5,
                        underlineToSizeNew: 5,
                        underlineAnimationTransition: 0.5,
                        textColorHover: innerTextColorDefault,
                        borderStyleHover: "none",
                        backgroundBorderColorHover: "",
                        backgroundBorderSizeHover: 0,
                        opacityHover: 1,
                        rotateHover: 0,
                        animationHover: "none",
                        durationEffectHover: 1,
                        effectHoverColorHover: innerTextColorDefault,
                        translateEffectHover: 0,
                        parallaxTitle: 0,
                        parallaxTitleY: 0,
                        parallaxTitleScale: 1,
                        parallaxTitleOpacity: 1,
                        parallaxTitleDuration: 100,
                        textLink: "none",
                        linkUrl: "",
                        linkTarget: "_self",
                        linkRel: "",
                        scrollToId: "",
                        enableDesktop: true,
                        enableTablet: true,
                        enableMobile: true,
                        iteration: "forwards",
                        positionInnerText:"static",
                        verticalPositionInnerText: 0,
                        horizontalPositionInnerText: 0,
                        delayHide: false,
                        delaySeconds: 1,
                        delayTransition: 0,
                        zIndexTitle: 1,
                      },
                    ],
                  }
                : element
            ),
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
                    innerElements: [
                      ...(element.innerElements || []),
                      {
                        imageUrl: "",
                        type: "image", 
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
                        backgroundBorderSizeImageHover: 0,
                        opacityHoverImage: 1,
                        rotateHoverImage: 0,
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
                        zIndexImage: 1,
                        positionInnerImage: "static",
                        verticalPositionInnerImage: 0,
                        horizontalPositionInnerImage: 0,
                        delayEffectImage: 0,
                        delayHide:false,
                        delaySeconds:2,
                        delayTransition: 0.5,
                      },
                    ],
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Add Button inside block
  const addSlideButtonDiv = (slideId,  elementIndex,buttonType) => {
    const defaultValues = {
      type1: {
        buttonColor: '#FFFFFF',
        backgroundBorderColorButton: '#FFFFFF',
        borderStyleButton: 'solid',
        backgroundBorderRadiusButton: 30,
        backgroundBorderSizeButton: 3,
        buttonBackgroundColor: '#18191c',
        buttonColorHover: '#FFFFFF',
        rotateButton: 0,
        widthCustomButton: 35,
        heightCustomButton: 55,
        marginButton: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
        opacityButton: 1,
        colorShadow: "",
        boxShadowX: 0,
        boxShadowY: 0,
        boxShadowBlur: 0,
        boxShadowSpread: 0,
        animationButton: "none",
        durationEffectButton: 1,
        delayEffect: 0,
        interationButton: "forwards",
        buttonColorHover: "",
        borderStyleHover: "none",
        backgroundBorderColorHover: "",
        backgoroundBorderSizeHover: 0,
        opacityHover: 1,
        rotateHover: 0,
      },
      type2: {
        buttonColor: '#18191c',
        backgroundBorderColorButton: '#18191c',
        borderStyleButton: 'solid',
        backgroundBorderRadiusButton: 30,
        backgroundBorderSizeButton: 3,
        buttonBackgroundColor: '#FFFFFF',
        buttonColorHover: '#18191c',
        rotateButton: 0,
        widthCustomButton: 35,
        heightCustomButton: 55,
        marginButton: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
        opacityButton: 1,
        colorShadow: "",
        boxShadowX: 0,
        boxShadowY: 0,
        boxShadowBlur: 0,
        boxShadowSpread: 0,
        animationButton: "none",
        durationEffectButton: 1,
        delayEffect: 0,
        interationButton: "forwards",
        buttonColorHover: "",
        borderStyleHover: "none",
        backgroundBorderColorHover: "",
        backgoroundBorderSizeHover: 0,
        opacityHover: 1,
        rotateHover: 0,
      },
      type3: {
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
        backgroundBorderSizeHover: 1,
        buttonBackgroundColorHover: "#FFFFFF",
      },
      type4: {
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
        backgroundBorderSizeHover: 1,
        buttonBackgroundColorHover: "#18191c",
      },
      type5: {
        buttonColor: '#FFFFFF',
        backgroundBorderColorButton: '#FFFFFF',
        borderStyleButton: 'solid',
        borderRadiusButton:{
          top: 0,
          right: 0,
          bottom:0,
          left: 0,
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
        backgroundBorderSizeHover: 1,
        buttonBackgroundColorHover: "#FFFFFF",
      },
      type6: {
        buttonColor: '#18191c',
        backgroundBorderColorButton: '#18191c',
        borderStyleButton: 'solid',
        borderRadiusButton:{
          top: 0,
          right: 0,
          bottom:0,
          left: 0,
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
        backgroundBorderSizeHover: 1,
        buttonBackgroundColorHover: "#18191c",
      },
      type7: {
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
        backgroundBorderSizeHover: 1,
        buttonBackgroundColorHover: "#FFFFFF",
      },
      type8: {
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
        backgroundBorderSizeHover: 1,
        buttonBackgroundColorHover: "#18191c",
      },
     
      // Aggiungi altri tipi di bottoni se necessario
    };
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, index) =>
              index ===  elementIndex
                ? {
                    ...element,
                    innerElements: [
                      ...(element.innerElements || []),
                      {
                        type: 'button',
                        button:__(' Click Here', 'cocoblocks'),
                        buttonType: buttonType,
                        desktop: { x: 0, y: 0 },
                        tablet: { x: 0, y: 0 },
                        mobile: { x: 0, y: 0 },
                        ...defaultValues[buttonType], 
                        enableDesktopButton: true,
                        enableTabletButton: true,
                        enableMobileButton: true,
                        buttonLink: "none",
                        linkUrlButton: "",
                        linkTargetButton: "_self",
                        linkRelButton: "",
                        scrollToIdButton: "",
                        parallaxButton: 0,
                        parallaxButtonY: 0,
                        parallaxButtonScale: 1,
                        parallaxButtonOpacity: 1,
                        parallaxButtonDuration: 100,
                        widthButton:"auto",
                        zIndexButton: 1,
                        delayHide:false,
                        delaySeconds:2,
                        delayTransition: 0.5,
                        fontFamilyButton: "Arial",
                        fontSizeButton: 16,
                        fontSizeButtonTablet: 16,
                        fontSizeButtonMobile: 16,
                        lineHeightButton: 1.5,
                        letterSpacingButton: 0,
                        widthCustomButton:35,
                        marginButton: {
                          top: 0,
                          right: 0,
                          bottom: 0,
                          left: 0,
                        },
                        opacityButton: 1,
                        colorShadow: "",
                        boxShadowX: 0,
                        boxShadowY: 0,
                        boxShadowBlur: 0,
                        boxShadowSpread: 0,
                        animationButton: "none",
                        durationEffectButton: 1,
                        delayEffect: 0,
                        interationButton: "forwards",
                        opacityHover: 1,
                        rotateHover: 0,
                        durationEffectHover:.2,
                        rotateButton: 0,
                        icoPositionButton: "after",
                        iconColor: "#000000",
                        sizeIcon: 16,
                        icoAligItemButton: "center",
                        gapIcon: 5,
                        rotateIcon: 0,
                        iconAnimationDuration:0.5,
                        iconAnimation: "none",
                        rotateIconHover: 0,
                        iconColorHover: "#000000",
                        iconShowHover:"icon-show-always-inner",
                        iconHideShowHover:"icon-hide-opacity-inner",
                        delayHide:false,
                        delaySeconds:2,
                        delayTransition: 0.5,
                        animationHoverIcon: "none",
                        durationEffectHoverIcon: 0.6,
                        translateEffectHoverIcon: 15,
                      },
                    ],
                  }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Add Icon inside block
  const addSlideIconDiv = (slideId, divIndex) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, index) =>
              index === divIndex
                ? {
                    ...element,
                    innerElements: [
                      ...(element.innerElements || []),
                      {
                        type: "icon", 
                        icon: "fas fa-star",
                        widthTitleBlock: "auto",
                        widthCustomTitleBlock: 100,
                        textAlign: "center",
                        elementTitle: "h4",
                        fontSize: 16,
                        fontSizeTablet: 16,
                        fontSizeMobile: 16,
                        fontStyle: "",
                        textColor: innerTextColorDefault,
                        paddingTitle: {
                          top: "0",
                          right: "0",
                          bottom: "0",
                          left: "0",
                        },
                        marginTitle: {
                          top: "0",
                          right: "0",
                          bottom: "0",
                          left: "0",
                        },
                        borderStyle: "none",
                        backgroundBorderSize: 0,
                        backgroundBorderRadius: 0,
                        backgroundBorderColor: "",
                        rotate: 0,
                        opacity: 1,
                        textWriteMode: "horizontal-tb",
                        textOrientation: "initial",
                        animation: "none",
                        durationEffect: 1,
                        delayEffect: 0,
                        durationEffectOdd: 1,
                        durationEffectEven: 1,
                        interation: 1,
                        speedEffect: 100,
                        pauseEffect: 0,
                        animationCount: "1",
                        widthTitle: 100,
                        textColorHover: innerTextColorDefault,
                        borderStyleHover: "none",
                        backgroundBorderColorHover: "",
                        backgroundBorderSizeHover: 0,
                        opacityHover: 1,
                        rotateHover: 0,
                        animationHover: "none",
                        durationEffectHover: 1,
                        effectHoverColorHover: innerTextColorDefault,
                        translateEffectHover: 0,
                        parallaxTitle: 0,
                        parallaxTitleY: 0,
                        parallaxTitleScale: 1,
                        parallaxTitleOpacity: 1,
                        parallaxTitleDuration: 100,
                        textLink: "none",
                        linkUrl: "",
                        linkTarget: "_self",
                        linkRel: "",
                        scrollToId: "",
                        enableDesktop: true,
                        enableTablet: true,
                        enableMobile: true,
                        iteration: "forwards",
                        positionInnerText:"static",
                        verticalPositionInnerText: 0,
                        horizontalPositionInnerText: 0,
                        delayHide: false,
                        delaySeconds: 1,
                        delayTransition: 0,
                        zIndexIcon: 1, 
                        colorShadow: "",
                        boxShadowX: 0,
                        boxShadowY: 0,
                        boxShadowBlur: 0,
                        boxShadowSpread: 0,
                        iconAnimationDuration:0.5,
                        iconAnimation: "none",
                        backgroundColor:'#ffffff00',
                      },
                    ],
                  }
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

    const truncateText = (text, maxLength) => {
      if (text.length <= maxLength) {
        return text;
      }
      return text.substring(0, maxLength) + ' ...';
    };

  const [activeSection, setActiveSection] = useState("content");
  const [activeSectionImage, setActiveSectionImage] = useState("content");
  
  const moveInnerElementUp = (slideIndex, elementIndex, innerIndex, slides, setAttributes) => {
    console.log(`Moving up: slideIndex=${slideIndex}, elementIndex=${elementIndex}, innerIndex=${innerIndex}`);
    const element = slides[slideIndex].elements[elementIndex];
    if (!element.innerElements || innerIndex === 0) return; // Non può spostare il primo elemento su
    const newInnerElements = [...element.innerElements];
    [newInnerElements[innerIndex - 1], newInnerElements[innerIndex]] = [newInnerElements[innerIndex], newInnerElements[innerIndex - 1]];
    element.innerElements = newInnerElements;
    console.log('Updated inner elements:', newInnerElements);
    setAttributes({ slides: [...slides] });
  };
  
  const moveInnerElementDown = (slideIndex, elementIndex, innerIndex, slides, setAttributes) => {
    console.log(`Moving down: slideIndex=${slideIndex}, elementIndex=${elementIndex}, innerIndex=${innerIndex}`);
    const element = slides[slideIndex].elements[elementIndex];
    if (!element.innerElements || innerIndex === element.innerElements.length - 1) return; // Non può spostare l'ultimo elemento giù
    const newInnerElements = [...element.innerElements];
    [newInnerElements[innerIndex + 1], newInnerElements[innerIndex]] = [newInnerElements[innerIndex], newInnerElements[innerIndex + 1]];
    element.innerElements = newInnerElements;
    console.log('Updated inner elements:', newInnerElements);
    setAttributes({ slides: [...slides] });
  };

  const isSingleInnerElement = element.innerElements.length === 1;

  const [isModalOpenButton, setIsModalOpenButton] = useState(false);
  const [selectedSlideId, setSelectedSlideId] = useState(null);
  const [selectedElementIndex, setSelectedElementIndex] = useState(null);
  
  const openModalButton = (slideId, elementIndex) => {
    setSelectedSlideId(slideId);
    setSelectedElementIndex(elementIndex);
    setIsModalOpenButton(true);
  };
  
  const closeModalButton = () => {
    setIsModalOpenButton(false);
    setSelectedSlideId(null);
    setSelectedElementIndex(null);
  };
  
  const handleButtonTypeSelect = (slideId, elementIndex, type) => {
    addSlideButtonDiv(slideId, elementIndex, type); // Passa slideId, elementIndex e il tipo selezionato
    closeModalButton();
  };

  return (
    <>
      <div className="custom-block-added">
        <div className="divider-controls"></div>
        <div className="title-block-added">
          <div className="title-element">
            <AutoAwesomeMosaicIcon />
            <h2>{element.nameGroup ? truncateText(element.nameGroup, 10) : __("Group", "slider")}</h2>
          </div>
          <div className="title-element">
          <Button
              onClick={() => removeSlideDiv(slide.id, elementIndex)}
              isDestructive
              icon={<DeleteOutlineIcon />}
              label={__("Remove group", "cocoblocks")}
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
        {isOpen && ( 
        <>
        <SectionSelector onSectionChange={setActiveSectionBlock} />
        {activeSectionBlock === "content" && (
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
            <div className="content-section-panel" style={{ padding: "0" }}>
            <CustomTextControl
                 label={
                  <>
                    <LibraryAddOutlinedIcon />
                    {__("Add name group", "cocoblocks")}
                  </>
                }
                  value={element.nameGroup}
                  slides={slides}
                  setAttributes={setAttributes}
                  updateType="primary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  elementType="div"
                  showTooltip={true}
                  tooltipText={__("Useful if you have many groups inside the slide!", "cocoblocks")}
                  placeholder={__("Add name group...", "cocoblocks")}
                  updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                    updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'nameGroup')
                  }
                />
            </div>
            <div
              className="button-add-element"
              style={{ paddingBottom: "18px" }}
            >
              <Button
                onClick={() => addSlideTitleDiv(slide.id, elementIndex)}
                label={__("Add inner text", "slide")}
              >
                <PostAddOutlinedIcon />
              </Button>
              <Button
                onClick={() => addSlideImageDiv(slide.id, elementIndex)} // Assicurati di passare elementIndex o divIndex
                label={__("Add inner image", "slide")}
              >
                <AddPhotoAlternateOutlinedIcon />
              </Button>
              <Button
                onClick={() => openModalButton(slide.id, elementIndex)} // Passa slide.id e elementIndex
                label={__("Add inner button", "slide")}
              >
                <SmartButtonOutlinedIcon />
              </Button>
              {isModalOpenButton && (
              <ButtonTypeInnerSelectionModal
                slideId={slide.id} 
                elementIndex={selectedElementIndex}
                onClose={closeModalButton}
                onSelect={handleButtonTypeSelect} 
              />
            )}
             <Button
                onClick={() => addSlideIconDiv(slide.id, elementIndex)}
                label={__("Add inner icon", "slide")}
              >
                 <WbCloudyOutlinedIcon />
              </Button>
              <Button
              onClick={() => addSlideMenuDiv(slide.id,elementIndex)}
              label={__("Add menu", "slide")}
            >
             <MenuOutlinedIcon />
            </Button>
            </div>
          </>
        )}
        {activeSectionBlock === "style" && (
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
            <div className="content-section-panel" style={{ padding: "0" }}>
            <CustomColorOptionsPanel
                  colorNormal={element.backgroundColor }
                  setColorNormal={(color) => updateElement(slides, setAttributes, slide.id, elementIndex, null, color, 'primary', 'div', 'backgroundColor')}
                  buttonTitle={__("Background Color", "cocoblocks")}
                  buttonIcon={<PaletteIcon style={{
                    marginBottom: "-5px",
                    width: "20px",
                    height: "20px",
                  }}/>}
                  slides={slides}
                  setAttributes={setAttributes}
                  updateType="primary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  elementType="div"
                  updateElement={updateElement}
                  property="backgroundColor"
                />
            </div>
            <div className="content-title-custom-panel intermedy">
              <h2 className="title-custom-panel">
                {__("Layout", "cocoblocks")}
              </h2>
            </div>
            <div className="content-section-panel" style={{ padding: "0" }}>
            <CustomSelectControl
              label={
                <>
                  <DashboardOutlinedIcon />
                  {__("Content direction", "cocoblocks")}
                </>
              }
              value={element.layoutDiv}
              slides={slides}
              setAttributes={setAttributes}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="div"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'layoutDiv')
              }
              selectOptions={[
                {
                  label: __("Column", "slider"),
                  value: "vertical",
                },
                {
                  label: __("Row", "slider"),
                  value: "horizontal",
                },
              ]} // Passa le opzioni dinamiche
            />
            <CustomRangeControl
              label={
                <>
                  <SettingsEthernetOutlinedIcon />
                  {__("Gap between items", "cocoblocks")}
                </>
              }
              value={element.gapItemsDiv}
              slides={slides}
              setAttributes={setAttributes}
              min={0}
              max={256}
              step={1}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="div"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'gapItemsDiv')
              }
              showTooltip={false} // Mostra il tooltip
            />
              <div className="custom-select">
                <AlignmentControl
                  value={element.positionDiv}
                  onChange={(newPositionDiv) =>
                    updateSlidePositionDiv(
                      slide.id,
                      elementIndex,
                      newPositionDiv
                    )
                  }
                />
              </div>
              <CustomSelectControl
              label={
                <>
                  <WrapTextOutlinedIcon />
                  {__("Flex wrap", "cocoblocks")}
                </>
              }
              value={element.layoutWrap}
              slides={slides}
              setAttributes={setAttributes}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="div"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'layoutWrap')
              }
              selectOptions={[
                {
                  label: __("Wrap", "slider"),
                  value: "wrap",
                },
                {
                  label: __("No Wrap", "slider"),
                  value: "nowrap",
                },
              ]} // Passa le opzioni dinamiche
            />
              {element.layoutWrap === "wrap" && (
                 <CustomSelectControl
                 label={
                   <>
                     <AlignHorizontalLeftOutlinedIcon />
                     {__("Justify in responsive", "cocoblocks")}
                   </>
                 }
                 value={element.justifyContentResponsiveDiv}
                 slides={slides}
                 setAttributes={setAttributes}
                 updateType="primary"
                 slideId={slide.id}
                 elementIndex={elementIndex}
                 elementType="div"
                 updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                   updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'justifyContentResponsiveDiv')
                 }
                 selectOptions={[
                  { label: "Left", value: "left" },
                  { label: "Center", value: "center" },
                  { label: "Right", value: "right" },
                ]} // Passa le opzioni dinamiche
               />
              )}
                 <CustomSelectControl
                 label={
                   <>
                     <WidthWideOutlinedIcon />
                     {__("Content width", "cocoblocks")}
                   </>
                 }
                 value={element.contentWidthDiv}
                 slides={slides}
                 setAttributes={setAttributes}
                 updateType="primary"
                 slideId={slide.id}
                 elementIndex={elementIndex}
                 elementType="div"
                 updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                   updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'contentWidthDiv')
                 }
                 selectOptions={[
                  { label: "Auto", value: "auto" },
                  { label: "100%", value: "100%" },
                  { label: "Custom", value: "custom" },
                ]} // Passa le opzioni dinamiche
               />
              {element.contentWidthDiv === "custom" && (
                 <CustomRangeControl
                 label={
                   <>
                     <HeightOutlinedIcon style={{transform:'rotate(90deg)'}} />
                     {__("Custom width", "cocoblocks")}
                   </>
                 }
                 value={element.customContentWidthDiv}
                 slides={slides}
                 setAttributes={setAttributes}
                 min={0}
                 max={100}
                 step={1}
                 updateType="primary"
                 slideId={slide.id}
                 elementIndex={elementIndex}
                 elementType="div"
                 updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                   updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'customContentWidthDiv')
                 }
                 showTooltip={false} // Mostra il tooltip
               />
              )}
               <CustomSelectControl
                 label={
                   <>
                     <WidthWideOutlinedIcon style={{transform:'rotate(90deg)'}} />
                     {__("Content height", "cocoblocks")}
                   </>
                 }
                 value={element.contentHeightDiv}
                 slides={slides}
                 setAttributes={setAttributes}
                 updateType="primary"
                 slideId={slide.id}
                 elementIndex={elementIndex}
                 elementType="div"
                 updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                   updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'contentHeightDiv')
                 }
                 selectOptions={[
                  { label: "Auto", value: "auto" },
                  { label: "100%", value: "100%" },
                  { label: "Custom", value: "custom" },
                ]} // Passa le opzioni dinamiche
               />
              {element.contentHeightDiv === "custom" && (
                <CustomRangeControl
                label={
                  <>
                    <HeightOutlinedIcon />
                    {__("Custom height", "cocoblocks")}
                  </>
                }
                value={element.customContentHeightDiv}
                slides={slides}
                setAttributes={setAttributes}
                min={0}
                max={100}
                step={1}
                updateType="primary"
                slideId={slide.id}
                elementIndex={elementIndex}
                elementType="div"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'customContentHeightDiv')
                }
                showTooltip={false} // Mostra il tooltip
              />
              )}
               <CustomSelectControl
                 label={
                   <>
                     <CodeOutlinedIcon />
                     {__("Element html", "cocoblocks")}
                   </>
                 }
                 value={element.elementDiv}
                 slides={slides}
                 setAttributes={setAttributes}
                 updateType="primary"
                 slideId={slide.id}
                 elementIndex={elementIndex}
                 elementType="div"
                 updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                   updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'elementDiv')
                 }
                 selectOptions={elementHtmlOptions} // Passa le opzioni dinamiche
               />
              </div>
            <div className="content-title-custom-panel intermedy">
              <h2 className="title-custom-panel">
                {__("Spacings", "cocoblocks")}
              </h2>
            </div>
            <div className="content-section-panel" style={{ padding: "0" }}>
            <CustomRangeControl
                label={
                  <>
                    <VerticalAlignTopOutlinedIcon />
                    {__("Content vertical padding", "cocoblocks")}
                  </>
                }
                value={element.backgroundVerticalPaddingDiv}
                slides={slides}
                setAttributes={setAttributes}
                min={0}
                max={256}
                step={1}
                updateType="primary"
                slideId={slide.id}
                elementIndex={elementIndex}
                elementType="div"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'backgroundVerticalPaddingDiv')
                }
                showTooltip={false} // Mostra il tooltip
              />
           <CustomRangeControl
                label={
                  <>
                    <StartOutlinedIcon />
                    {__("Content horizontal padding", "cocoblocks")}
                  </>
                }
                value={element.backgroundHorizontalPaddingDiv}
                slides={slides}
                setAttributes={setAttributes}
                min={0}
                max={256}
                step={1}
                updateType="primary"
                slideId={slide.id}
                elementIndex={elementIndex}
                elementType="div"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'backgroundHorizontalPaddingDiv')
                }
                showTooltip={false} // Mostra il tooltip
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
                  values={element.marginDiv}
                  units={{}}
                  onChange={(newMarginDiv) =>
                    updatenewMarginDiv(slide.id, elementIndex, newMarginDiv)
                  }
                />
              </div>
            </div>
            <div className="content-title-custom-panel intermedy">
              <h2 className="title-custom-panel">
                {__("Border", "cocoblocks")}
              </h2>
            </div>
            <div className="content-section-panel" style={{ padding: "0" }}>
            <CustomSelectControl
                label={
                  <>
                    <BorderStyleIcon />
                    {__("Border style", "cocoblocks")}
                  </>
                }
                value={element.borderStyleDiv}
                slides={slides}
                setAttributes={setAttributes}
                updateType="primary"
                slideId={slide.id}
                elementIndex={elementIndex}
                elementType="div"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'borderStyleDiv')
                }
                selectOptions={borderStyleOptions} // Passa le opzioni dinamiche
              />
              {element.borderStyleDiv !== "none" && (
                <>
                 <CustomColorOptionsPanel
                  colorNormal={element.backgroundBorderColorDiv }
                  setColorNormal={(color) => updateElement(slides, setAttributes, slide.id, elementIndex, null, color, 'primary', 'div', 'backgroundBorderColorDiv')}
                  buttonTitle={__("Border Color", "cocoblocks")}
                  buttonIcon={<BorderColorIcon/>}
                  slides={slides}
                  setAttributes={setAttributes}
                  updateType="primary"
                  slideId={slide.id}
                  elementIndex={elementIndex}
                  elementType="div"
                  updateElement={updateElement}
                  property="backgroundBorderColorDiv"
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
                  values={element.backgroundBorderSizeDiv}
                  units={{}}
                  onChange={(newBorderSize) =>
                    updatenewBackgroundBorderSizeDiv(slide.id, elementIndex, newBorderSize)
                  }
                />
              </div>
              <div className="custom-select box-control">
                <BoxControl
                  id="custom-margin-control"
                  label={
                    <>
                      <BorderInnerIcon />
                      {__("Border radius", "cocoblocks")}
                    </>
                  }
                  values={element.backgroundBorderRadiusDiv}
                  units={{}}
                  onChange={(newBorderRadius) =>
                    updatenewBackgroundBorderRadiusDiv(slide.id, elementIndex, newBorderRadius)
                  }
                />
              </div>
                </>
              )}
            </div>
          </>
        )}
        {activeSectionBlock === "adv-style" && (
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
                value={element.rotateDiv || 0}
                slides={slides}
                setAttributes={setAttributes}
                min={0}
                max={360}
                step={1}
                updateType="primary"
                slideId={slide.id}
                elementIndex={elementIndex}
                elementType="div"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'rotateDiv')
                }
              />

            </div>
            <div className="content-title-custom-panel intermedy">
              <h2 className="title-custom-panel">
                {__("Transparency Setting", "cocoblocks")}
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
              value={element.opacityDiv || 1}
              slides={slides}
              setAttributes={setAttributes}
              min={0}
              max={1}
              step={0.1}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="div"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'opacityDiv')
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
              value={element.zIndexDiv || 1}
              slides={slides}
              setAttributes={setAttributes}
              min={0}
              max={999}
              step={1}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="div"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'zIndexDiv')
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
            valueEnableShadow={element.enableBoxShadow}
            valueRangeShadowX={element.boxShadowX || 0}
            valueRangeShadowY={element.boxShadowY || 0}
            valueRangeShadowBlur={element.boxShadowBlur || 0}
            valueRangeShadowSpread={element.boxShadowSpread || 0}
            valueRangeShadowColor={element.colorShadow}
            slides={slides}
            showSpread={true}
            setAttributes={setAttributes}
            updateType="primary"
            slideId={slide.id}
            elementIndex={elementIndex}
            elementType="div"
            updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, property) =>
              updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, property)
            }
            enablePropertyShadow="enableBoxShadow"
            rangePropertyX="boxShadowX"
            rangePropertyY="boxShadowY"
            rangePropertyBlur="boxShadowBlur"
            rangePropertySpread="boxShadowSpread"
            rangePropertyColor="colorShadow"
          />
       </div>
          </>
        )}
        {activeSectionBlock === "animation" && (
<CustomEffectControls
           valueEffect={element.effectIn}
           valueOpacityFrom={element.opacityFrom}
            valueOpacityTo={element.opacityTo}
            valueBlurFrom={element.filterFrom}
            valueBlurTo={element.filterTo}
              valueTranslateXFrom={element.startXFrom}
              valueTranslateXTo={element.startXTo}
              valueTranslateYFrom={element.startYFrom}
              valueTranslateYTo={element.startYTo}
              valueScaleType={element.scaleType}
              valueScaleFrom={element.scaleFrom}
              valueScaleTo={element.scaleTo}
              valueRotateFrom={element.rotateFrom}
              valueRotateTo={element.rotateTo}
              valueRotateXFrom={element.rotateXFrom}
              valueRotateXTo={element.rotateXTo}
              valueRotateYFrom={element.rotateYFrom}
              valueRotateYTo={element.rotateYTo}
              valueSkewXFrom={element.skewXFrom}
              valueSkewXTo={element.skewXTo}
              valueSkewYFrom={element.skewYFrom}
              valueSkewYTo={element.skewYTo}
              valueDuration={element.duration}
              valueEasing={element.easing}
              valueDirection={element.direction}
              valueLoop={element.loop}
              valueDelay={element.delay}
              valueEndDelay={element.endDelay }
              onAnimated={onAnimatedGroup}
              selectOptions={selectOptionsEffectElement}
           slides={slides}
           setAttributes={setAttributes}
           updateType="primary"
           slideId={slide.id}
           elementIndex={elementIndex}
           elementType="div"
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
      )}
        {activeSectionBlock === "hover" && (
           <CustomHoverControls
           valueEffectHover={element.effectHover}
           colorNormal={element.backgroundColorImageHover } 
           setColorNormal={(color) => updateElement(slides, setAttributes, slide.id, elementIndex, null, color, 'primary', 'div', 'backgroundColorHover')}
           buttonTitle={__("Background Color", "cocoblocks")}    
           buttonIcon={ <PaletteIcon style={{marginBottom:'-3px'}} />}  
           valueOpacityHover={element.opacityHover}
            valueBlurHover={element.filterHover}
            valueTranslateXHover={element.startXHover}
            valueTranslateYHover={element.startYHover}
            valueScaleTypeHover={element.scaleTypeHover}
            valueScaleHover={element.scaleHover}
            valueRotateHover={element.rotateHover}
            valueRotateXHover={element.rotateXHover}
            valueRotateYHover={element.rotateYHover}
            valueSkewXHover={element.skewXHover}
            valueSkewYHover={element.skewYHover}
            valueDurationHover={element.durationHover}  
            valueEasingHover={element.easingHover}
           slides={slides}
           setAttributes={setAttributes}
           updateType="primary"
           slideId={slide.id}
           elementIndex={elementIndex}
           elementType="div"
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
        {activeSectionBlock === "actions" && (
          <CustomActionControls
            valueSelectLink={element.textLink}
            valueUrl={element.linkUrl}
            valueSelectTarget={element.linkTarget}
            valueSelectRel={element.linkRel}
            valueScrollId={element.scrollToId}
            slides={slides}
            setAttributes={setAttributes}
            updateType="primary"
            slideId={slide.id}
            elementIndex={elementIndex}
            elementType="div"
            updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, property) =>
              updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, property)
            }
            linkProperty="textLink"
            urlProperty="linkUrl"
            targetProperty="linkTarget"
            relProperty="linkRel"
            scrollIdProperty="scrollToId"
          />
        )}
        {activeSectionBlock === "visibility" && (
          <CustomVisibilityControls
            valueDesktop={element.enableDesktop}
            valueTablet={element.enableTablet}
            valueMobile={element.enableMobile}
            slides={slides}
            setAttributes={setAttributes}
            updateType="primary"
            slideId={slide.id}
            elementIndex={elementIndex}
            elementType="div"
            updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, property) =>
              updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, property)
            }
            desktopProperty="enableDesktop"
            tabletProperty="enableTablet"
            mobileProperty="enableMobile"
          />
        )}
        {activeSectionBlock === "hide-div-editor" && (
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
          variant={hideDiv === "hide"}
          onClick={toggleHideDiv}
          icon={
            hideDiv === "hide" ? (
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

{element.innerElements &&
  element.innerElements.map((innerElement, innerIndex) => {
    if (innerElement.type === "text") {
      return (
        <div key={innerIndex}>
           <div className={"button-move-element-div"}>
                  <Tooltip text={__("Move before", "cocoblocks")}>
                    <Button
                      onClick={() => moveInnerElementUp(slides.indexOf(slide), elementIndex, innerIndex, slides, setAttributes)}
                      size="small"
                      disabled={innerIndex === 0 || isSingleInnerElement}
                      label={__("Move before", "cocoblocks")}
                    >
                      ↑
                    </Button>
                  </Tooltip>
                  <Tooltip text={__("Move after", "cocoblocks")}>
                    <Button
                      onClick={() => moveInnerElementDown(slides.indexOf(slide), elementIndex, innerIndex, slides, setAttributes)}
                      size="small"
                      disabled={innerIndex === element.innerElements.length - 1 || isSingleInnerElement}
                      label={__("Move after", "cocoblocks")}
                    >
                      ↓
                    </Button>
                  </Tooltip>
                </div>
          <InnerTextEdit
            slide={slide}
            slides={slides}
            textDiv={innerElement} 
            element={element}
            textIndex={innerIndex}
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
            handlePlayInnerText={handlePlayInnerText}
          />
          
              </div>
      );
    }
    return null;
  })}
         {element.innerElements &&
        element.innerElements.map((innerElement, imageIndex) => {
            if (innerElement.type === "image") {
              return (
            <div key={imageIndex}>
               <div className={"button-move-element-div"}>
                  <Tooltip text={__("Move before", "cocoblocks")}>
                    <Button
                      onClick={() => moveInnerElementUp(slides.indexOf(slide), elementIndex, imageIndex, slides, setAttributes)}
                      size="small"
                      disabled={imageIndex === 0 || isSingleInnerElement}
                      label={__("Move before", "cocoblocks")}
                    >
                      ↑
                    </Button>
                  </Tooltip>
                  <Tooltip text={__("Move after", "cocoblocks")}>
                    <Button
                      onClick={() => moveInnerElementDown(slides.indexOf(slide), elementIndex, imageIndex, slides, setAttributes)}
                      size="small"
                      disabled={imageIndex === element.innerElements.length - 1 || isSingleInnerElement}
                      label={__("Move after", "cocoblocks")}
                    >
                      ↓
                    </Button>
                  </Tooltip>
                </div>
              <InnerImageEdit
                slide={slide}
                slides={slides}
                element={element}
                divIndex={elementIndex} 
                elementIndex={elementIndex}
                imageDiv={innerElement}
                imageIndex={imageIndex}
                setAttributes={setAttributes}
                setActiveSectionImage={setActiveSectionImage}
                activeSectionImage={activeSectionImage}
                handlePlayInnerImage={handlePlayInnerImage}
              />
            </div>
          );
        }
        return null;
      })}

{element.innerElements &&
        element.innerElements.map((innerElement, innerIndex) => {
            if (innerElement.type === "button") {
              return (
            <div key={innerIndex}>
               <div className={"button-move-element-div"}>
                  <Tooltip text={__("Move before", "cocoblocks")}>
                    <Button
                      onClick={() => moveInnerElementUp(slides.indexOf(slide), elementIndex, innerIndex, slides, setAttributes)}
                      size="small"
                      disabled={innerIndex === 0 || isSingleInnerElement}
                      label={__("Move before", "cocoblocks")}
                    >
                      ↑
                    </Button>
                  </Tooltip>
                  <Tooltip text={__("Move after", "cocoblocks")}>
                    <Button
                      onClick={() => moveInnerElementDown(slides.indexOf(slide), elementIndex, innerIndex, slides, setAttributes)}
                      size="small"
                      disabled={innerIndex === element.innerElements.length - 1 || isSingleInnerElement}
                      label={__("Move after", "cocoblocks")}
                    >
                      ↓
                    </Button>
                  </Tooltip>
                </div>
                <ButtonControlsBlock
                  slide={slide}
                  slides={slides}
                  element={element}
                  divIndex={elementIndex} 
                  elementIndex={elementIndex}
                  buttonDiv={innerElement}
                  setAttributes={setAttributes}
                  buttonIndex={innerIndex}
                  setActiveSection={setActiveSection}
                  activeSection={activeSection}
                  parallax={parallax}
                  setSelectedIcon={setSelectedIcon}
                />
            </div>
          );
        }
        return null;
      })}

{element.innerElements &&
        element.innerElements.map((innerElement, innerIndex) => {
            if (innerElement.type === "icon") {
              return (
            <div key={innerIndex}>
               <div className={"button-move-element-div"}>
                  <Tooltip text={__("Move before", "cocoblocks")}>
                    <Button
                      onClick={() => moveInnerElementUp(slides.indexOf(slide), elementIndex, innerIndex, slides, setAttributes)}
                      size="small"
                      disabled={innerIndex === 0 || isSingleInnerElement}
                      label={__("Move before", "cocoblocks")}
                    >
                      ↑
                    </Button>
                  </Tooltip>
                  <Tooltip text={__("Move after", "cocoblocks")}>
                    <Button
                      onClick={() => moveInnerElementDown(slides.indexOf(slide), elementIndex, innerIndex, slides, setAttributes)}
                      size="small"
                      disabled={innerIndex === element.innerElements.length - 1 || isSingleInnerElement}
                      label={__("Move after", "cocoblocks")}
                    >
                      ↓
                    </Button>
                  </Tooltip>
                </div>
                <IconControlsInner
                  slide={slide}
                  slides={slides}
                  element={element}
                  divIndex={elementIndex} 
                  elementIndex={elementIndex}
                  iconDiv={innerElement}
                  setAttributes={setAttributes}
                  iconIndex={innerIndex}
                  setActiveSection={setActiveSection}
                  activeSection={activeSection}
                  parallax={parallax}
                  setSelectedIcon={setSelectedIcon}
                  device={device}
                  handleDesktopClick={handleDesktopClick}
                  handleTabletClick={handleTabletClick}
                  handleMobileClick={handleMobileClick}
                  showOtherButtons={showOtherButtons}
                />
            </div>
          );
        }
        return null;
      })}


           </>
      )}
      </div>

    </>
  );
};

export default GroupEdit;
