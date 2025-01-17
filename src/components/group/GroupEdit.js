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
import CustomShadowControl from "../../controls/shadow/ShadowControl";
import CustomActionControls from "../../multiControls/action";
import CustomVisibilityControls from "../../multiControls/visibility";
import CustomHoverControls from "../../multiControls/hover";
import InnerButtonEdit from "../innerbutton/InnerButtonEdit";
import CustomEffectControls from "../../multiControls/effect";
import {elementHtmlOptions} from '../../assets/options';
import {borderStyleOptions} from '../../assets/options';
import { selectOptionsEffectElement } from '../../assets/options';
import ButtonTypeInnerSelectionModal from "../buttonInnerModal";
import InnerIconEdit from "../innericon/InnerIconEdit";
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import SmartButtonOutlinedIcon from '@mui/icons-material/SmartButtonOutlined';
import WbCloudyOutlinedIcon from '@mui/icons-material/WbCloudyOutlined';
import PaletteIcon from '@mui/icons-material/Palette';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import SettingsEthernetOutlinedIcon from '@mui/icons-material/SettingsEthernetOutlined';
import WrapTextOutlinedIcon from '@mui/icons-material/WrapTextOutlined';
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
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import AlignHorizontalCenterIcon from '@mui/icons-material/AlignHorizontalCenter';
import AlignVerticalCenterIcon from '@mui/icons-material/AlignVerticalCenter';
import AppsIcon from '@mui/icons-material/Apps';

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
  handlePlayInnerImage,
  handlePlayInnerButton,
  handlePlayInnerIcon
}) => {

  const {
    textColorDefault,
  } = attributes;

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
                        content: __("Text Inner Group", "slider-future"),
                        fontSize: 24,
                        fontSizeTablet: 16,
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
                        type: "image",
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
            elements: slide.elements.map((element, index) =>
              index ===  elementIndex
                ? {
                    ...element,
                    innerElements: [
                      ...(element.innerElements || []),
                      {
                        type: 'button',
                button:__(' Click Here', 'slider-future'),
                buttonType: buttonType,
                ...defaultValues[buttonType], 
                enableDesktopButton: true,
                enableTabletButton: true,
                enableMobileButton: true,
                buttonLink: "none",
                widthButton:"auto",
                fontFamilyButton: "Arial",
                fontSizeButton: 16,
                fontSizeButtonTablet: 16,
                fontSizeButtonMobile: 16,
                widthCustomButton:35,
                effectIn: "none",
                effectHover: "none",
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
                        icon: "StarIcon",
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
        <div className="content-title-block-added">
        <div className="title-block-added">
          <div className="title-element">
            <AutoAwesomeMosaicIcon />
            <h2>{element.nameGroup ? truncateText(element.nameGroup, 10) : __("Group", "slider-future")}</h2>
          </div>
          <div className="title-element">
          <Button
              onClick={() => removeSlideDiv(slide.id, elementIndex)}
              isDestructive
              icon={<DeleteOutlineIcon />}
              label={__("Remove group", "slider-future")}
              className="button-remove-element"
            />
          <Tooltip  placement="top" text={isOpen ? __('Close Controls','slider-future') : __('Open Controls','slider-future')}>
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
                {__("Content", "slider-future")}
              </h2>
            </div>
            <div className="content-section-panel" style={{ padding: "0" }}>
            <CustomTextControl
                 label={
                  <>
                    <LibraryAddOutlinedIcon />
                    {__("Add name group", "slider-future")}
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
                  tooltipText={__("Useful if you have many groups inside the slide!", "slider-future")}
                  placeholder={__("Add name group...", "slider-future")}
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
                label={__("Add inner text", "slider-future")}
              >
                <PostAddOutlinedIcon />
              </Button>
              <Button
                onClick={() => addSlideImageDiv(slide.id, elementIndex)} // Assicurati di passare elementIndex o divIndex
                label={__("Add inner image", "slider-future")}
              >
                <AddPhotoAlternateOutlinedIcon />
              </Button>
              <Button
                onClick={() => openModalButton(slide.id, elementIndex)} // Passa slide.id e elementIndex
                label={__("Add inner button", "slider-future")}
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
                label={__("Add inner icon", "slider-future")}
              >
                 <WbCloudyOutlinedIcon />
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
                {__("Background", "slider-future")}
              </h2>
            </div>
            <div className="content-section-panel" style={{ padding: "0" }}>
            <CustomColorOptionsPanel
                  colorNormal={element.backgroundColor }
                  setColorNormal={(color) => updateElement(slides, setAttributes, slide.id, elementIndex, null, color, 'primary', 'div', 'backgroundColor')}
                  buttonTitle={__("Background Color", "slider-future")}
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
                {__("Layout", "slider-future")}
              </h2>
            </div>
            <div className="content-section-panel" style={{ padding: "0" }}>
            <CustomSelectControl
              label={
                <>
                  <DashboardOutlinedIcon />
                  {__("Display", "slider-future")}
                </>
              }
              value={element.displayDiv}
              slides={slides}
              setAttributes={setAttributes}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="div"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'displayDiv')
              }
              selectOptions={[
                {
                  label: __("Flex", "slider-future"),
                  value: "flex",
                },
                {
                  label: __("Grid", "slider-future"),
                  value: "grid",
                },
              ]} // Passa le opzioni dinamiche
            />
             {element.displayDiv === "grid" && (
              <>
              <CustomSelectControl
              label={
                <>
                  <AppsIcon />
                  {__("Grid item position", "slider-future")}
                </>
              }
              value={element.itemGridPositionDiv}
              slides={slides}
              setAttributes={setAttributes}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="div"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'itemGridPositionDiv')
              }
              selectOptions={[
                {
                  label: __("Auto", "slider-future"),
                  value: "auto",
                },
                {
                  label: __("Manual", "slider-future"),
                  value: "manual",
                },
              ]} // Passa le opzioni dinamiche
            />
            {element.itemGridPositionDiv === "auto" && (
                <CustomRangeControl
                label={
                  <>
                    <SettingsEthernetOutlinedIcon />
                    {__("Minimum column width", "slider-future")}
                  </>
                }
                value={element.itemGridWidthDiv ?? 150}
                slides={slides}
                setAttributes={setAttributes}
                min={0}
                max={600}
                step={1}
                updateType="primary"
                slideId={slide.id}
                elementIndex={elementIndex}
                elementType="div"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'itemGridWidthDiv')
                }
                showTooltip={false} // Mostra il tooltip
              />
            )}
             {element.itemGridPositionDiv === "manual" && (
                <CustomRangeControl
                label={
                  <>
                    <ViewColumnIcon />
                    {__("Columns", "slider-future")}
                  </>
                }
                value={element.itemGridColumnDiv ?? 5}
                slides={slides}
                setAttributes={setAttributes}
                min={1}
                max={16}
                step={1}
                updateType="primary"
                slideId={slide.id}
                elementIndex={elementIndex}
                elementType="div"
                updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                  updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'itemGridColumnDiv')
                }
                showTooltip={false} // Mostra il tooltip
              />
            )}
            </>
            )}
            {element.displayDiv === "flex" && (
              <>
            <CustomSelectControl
              label={
                <>
                  <ViewColumnIcon />
                  {__("Content direction", "slider-future")}
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
                  label: __("Column", "slider-future"),
                  value: "column",
                },
                {
                  label: __("Row", "slider-future"),
                  value: "row",
                },
              ]} // Passa le opzioni dinamiche
            />
            {element.layoutDiv === "row" && (
              <>
              <CustomSelectControl
              label={
                <>
                  <AlignHorizontalCenterIcon />
                  {__("Justification", "slider-future")}
                </>
              }
              value={element.layoutJustifyDiv}
              slides={slides}
              setAttributes={setAttributes}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="div"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'layoutJustifyDiv')
              }
              selectOptions={[
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
              ]} // Passa le opzioni dinamiche
            />
              <CustomSelectControl
              label={
                <>
                  <AlignVerticalCenterIcon />
                  {__("Vertical alignment", "slider-future")}
                </>
              }
              value={element.layoutVerticalAlignDivRow}
              slides={slides}
              setAttributes={setAttributes}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="div"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'layoutVerticalAlignDivRow')
              }
              selectOptions={[
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
              ]} // Passa le opzioni dinamiche
            />
            </>
            )}
            {element.layoutDiv === "column" && (
              <>
            <CustomSelectControl
              label={
                <>
                  <AlignHorizontalCenterIcon />
                  {__("Justification", "slider-future")}
                </>
              }
              value={element.layoutJustifyDivColumn}
              slides={slides}
              setAttributes={setAttributes}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="div"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'layoutJustifyDivColumn')
              }
              selectOptions={[
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
              ]} // Passa le opzioni dinamiche
            />
             <CustomSelectControl
              label={
                <>
                  <AlignVerticalCenterIcon />
                  {__("Vertical alignment", "slider-future")}
                </>
              }
              value={element.layoutVerticalAlignDivColumn}
              slides={slides}
              setAttributes={setAttributes}
              updateType="primary"
              slideId={slide.id}
              elementIndex={elementIndex}
              elementType="div"
              updateElement={(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType) =>
                updateElement(slides, setAttributes, slideId, elementIndex, innerIndex, newValue, updateType, elementType, 'layoutVerticalAlignDivColumn')
              }
              selectOptions={[
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
              ]} // Passa le opzioni dinamiche
            />
            </>
            )}
             <CustomSelectControl
              label={
                <>
                  <WrapTextOutlinedIcon />
                  {__("Flex wrap", "slider-future")}
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
                  label: __("Wrap", "slider-future"),
                  value: "wrap",
                },
                {
                  label: __("No Wrap", "slider-future"),
                  value: "nowrap",
                },
              ]} // Passa le opzioni dinamiche
            />
            </>
            )}
            <CustomRangeControl
              label={
                <>
                  <SettingsEthernetOutlinedIcon />
                  {__("Gap between items", "slider-future")}
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
                 <CustomSelectControl
                 label={
                   <>
                     <WidthWideOutlinedIcon />
                     {__("Content width", "slider-future")}
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
                     {__("Custom width", "slider-future")}
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
                     {__("Content height", "slider-future")}
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
                    {__("Custom height", "slider-future")}
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
                     {__("Element html", "slider-future")}
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
                {__("Spacings", "slider-future")}
              </h2>
            </div>
            <div className="content-section-panel" style={{ padding: "0" }}>
            <CustomRangeControl
                label={
                  <>
                    <VerticalAlignTopOutlinedIcon />
                    {__("Content vertical padding", "slider-future")}
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
                    {__("Content horizontal padding", "slider-future")}
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
                      {__("Margin", "slider-future")}
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
                {__("Border", "slider-future")}
              </h2>
            </div>
            <div className="content-section-panel" style={{ padding: "0" }}>
            <CustomSelectControl
                label={
                  <>
                    <BorderStyleIcon />
                    {__("Border style", "slider-future")}
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
                  buttonTitle={__("Border Color", "slider-future")}
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
                      {__("Border width", "slider-future")}
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
                      {__("Border radius", "slider-future")}
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
                {__("Basic Transforms", "slider-future")}
              </h2>
            </div>
            <div className="content-section-panel" style={{ padding: "0" }}>
            <CustomRangeControl
                label={
                  <>
                    <RotateRightIcon />
                    {__("Rotate", "slider-future")}
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
                {__("Transparency Setting", "slider-future")}
              </h2>
            </div>
            <div className="content-section-panel" style={{ padding: "0" }}>
            <CustomRangeControl
              label={
                <>
                  <OpacityIcon />
                  {__("Opacity", "slider-future")}
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
              {__("LEVEL", "slider-future")}
            </h2>
          </div>
          <div className="content-section-panel" style={{ padding: "0" }}>
          <CustomRangeControl
              label={
                <>
                  <LayersClearIcon />
                  {__("Z-index", "slider-future")}
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
                  {__("Box Shadow", "slider-future")}
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
           buttonTitle={__("Background Color", "slider-future")}    
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
        {activeSectionBlock === "hide-title-editor" && (
        <>
        <div
          className="content-title-custom-panel intermedy"
          style={{
            marginTop: "-18px",
          }}
        >
          <h2 className="title-custom-panel">
            {__("Hide in editor", "slider-future")}
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
                  <Tooltip text={__("Move before", "slider-future")}>
                    <Button
                      onClick={() => moveInnerElementUp(slides.indexOf(slide), elementIndex, innerIndex, slides, setAttributes)}
                      size="small"
                      disabled={innerIndex === 0 || isSingleInnerElement}
                      label={__("Move before", "slider-future")}
                    >
                      ↑
                    </Button>
                  </Tooltip>
                  <Tooltip text={__("Move after", "slider-future")}>
                    <Button
                      onClick={() => moveInnerElementDown(slides.indexOf(slide), elementIndex, innerIndex, slides, setAttributes)}
                      size="small"
                      disabled={innerIndex === element.innerElements.length - 1 || isSingleInnerElement}
                      label={__("Move after", "slider-future")}
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
                  <Tooltip text={__("Move before", "slider-future")}>
                    <Button
                      onClick={() => moveInnerElementUp(slides.indexOf(slide), elementIndex, imageIndex, slides, setAttributes)}
                      size="small"
                      disabled={imageIndex === 0 || isSingleInnerElement}
                      label={__("Move before", "slider-future")}
                    >
                      ↑
                    </Button>
                  </Tooltip>
                  <Tooltip text={__("Move after", "slider-future")}>
                    <Button
                      onClick={() => moveInnerElementDown(slides.indexOf(slide), elementIndex, imageIndex, slides, setAttributes)}
                      size="small"
                      disabled={imageIndex === element.innerElements.length - 1 || isSingleInnerElement}
                      label={__("Move after", "slider-future")}
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
                  <Tooltip text={__("Move before", "slider-future")}>
                    <Button
                      onClick={() => moveInnerElementUp(slides.indexOf(slide), elementIndex, innerIndex, slides, setAttributes)}
                      size="small"
                      disabled={innerIndex === 0 || isSingleInnerElement}
                      label={__("Move before", "slider-future")}
                    >
                      ↑
                    </Button>
                  </Tooltip>
                  <Tooltip text={__("Move after", "slider-future")}>
                    <Button
                      onClick={() => moveInnerElementDown(slides.indexOf(slide), elementIndex, innerIndex, slides, setAttributes)}
                      size="small"
                      disabled={innerIndex === element.innerElements.length - 1 || isSingleInnerElement}
                      label={__("Move after", "slider-future")}
                    >
                      ↓
                    </Button>
                  </Tooltip>
                </div>
                <InnerButtonEdit
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
                  setSelectedIcon={setSelectedIcon}
                  handlePlayInnerButton={handlePlayInnerButton}
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
                  <Tooltip text={__("Move before", "slider-future")}>
                    <Button
                      onClick={() => moveInnerElementUp(slides.indexOf(slide), elementIndex, innerIndex, slides, setAttributes)}
                      size="small"
                      disabled={innerIndex === 0 || isSingleInnerElement}
                      label={__("Move before", "slider-future")}
                    >
                      ↑
                    </Button>
                  </Tooltip>
                  <Tooltip text={__("Move after", "slider-future")}>
                    <Button
                      onClick={() => moveInnerElementDown(slides.indexOf(slide), elementIndex, innerIndex, slides, setAttributes)}
                      size="small"
                      disabled={innerIndex === element.innerElements.length - 1 || isSingleInnerElement}
                      label={__("Move after", "slider-future")}
                    >
                      ↓
                    </Button>
                  </Tooltip>
                </div>
                <InnerIconEdit
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
                  device={device}
                  showOtherButtons={showOtherButtons}
                  handlePlayInnerIcon={handlePlayInnerIcon}
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
