import {
  SelectControl,
  Icon,
  Tooltip,
  Notice,
  RangeControl,
  ToggleControl,
  Button,
  CheckboxControl, 
  ButtonGroup,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";
import { info } from "@wordpress/icons";
import SectionSliderSelector from "./multitab/sectionSliderSelector";
import ColorOptionsPanel from "./colorPanel";
import PatternSelectionModal from "./modalPattern";

const SliderControls = ({ attributes, setAttributes }) => {
  const {
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
    loopMode,
    centeredSlides,
    initialSlide,
    autoHeight,
    slideHeight,
    freeMode,
    stickyFreeMode,
    momentumFreeMode,
    momentumBounceFreeMode,
    momentumBounceRatioFreeMode,
    momentumRatioFreeMode,
    momentumVelocityRatioFreeMode,
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
    device,
    sliderMarginTop,
    sliderMarginBottom,
    includeCategories = [],
    excludeCategories = [],
  } = attributes;

   // Funzione per gestire il cambiamento del checkbox "Select all"
   const handleSelectAllChange = (isChecked) => {
    setAttributes({
        imgSelected: isChecked,
        h1Selected: isChecked,
        h2Selected: isChecked,
        h3Selected: isChecked,
        h4Selected: isChecked,
        h5Selected: isChecked,
        h6Selected: isChecked,
        buttonSelected: isChecked,
        spanSelected: isChecked,
        pSelected: isChecked,
    });
};

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

  const [showLoopNotice, setShowLoopNotice] = useState(false);
  const [showGridNotice, setShowGridNotice] = useState(false);

  useEffect(() => {
    if (loopMode === "enable" && slidesPerRow > 1) {
      setShowLoopNotice(true);
      setShowGridNotice(true);
    } else {
      setShowLoopNotice(false);
      setShowGridNotice(false);
    }
  }, [loopMode, slidesPerRow]);

  const optionsPerView = [
    {
      label: __("1", "slide"),
      value: "1",
    },
    {
      label: __("2", "cocoblocks"),
      value: "2",
    },
    {
      label: __("3", "cocoblocks"),
      value: "3",
    },
    {
      label: __("4", "cocoblocks"),
      value: "4",
    },
    {
      label: __("5", "cocoblocks"),
      value: "5",
    },
    {
      label: __("6", "cocoblocks"),
      value: "6",
    },
    {
      label: __("7", "cocoblocks"),
      value: "7",
    },
    {
      label: __("8", "cocoblocks"),
      value: "8",
    },
    {
      label: __("9", "cocoblocks"),
      value: "9",
    },
    {
      label: __("10", "cocoblocks"),
      value: "10",
    },
    {
      label: __("Auto", "cocoblocks"),
      value: "auto",
    },
  ];

  const optionsPerGroup = [
    {
      label: __("1", "slide"),
      value: "1",
    },
    {
      label: __("2", "cocoblocks"),
      value: "2",
    },
    {
      label: __("3", "cocoblocks"),
      value: "3",
    },
    {
      label: __("4", "cocoblocks"),
      value: "4",
    },
    {
      label: __("5", "cocoblocks"),
      value: "5",
    },
    {
      label: __("6", "cocoblocks"),
      value: "6",
    },
    {
      label: __("7", "cocoblocks"),
      value: "7",
    },
    {
      label: __("8", "cocoblocks"),
      value: "8",
    },
    {
      label: __("9", "cocoblocks"),
      value: "9",
    },
    {
      label: __("10", "cocoblocks"),
      value: "10",
    },
  ];

  // Initial slide options
  const optionsInitialSlide = [
    {
      label: __("0", "slide"),
      value: "0",
    },
    {
      label: __("1", "slide"),
      value: "1",
    },
    {
      label: __("2", "cocoblocks"),
      value: "2",
    },
    {
      label: __("3", "cocoblocks"),
      value: "3",
    },
    {
      label: __("4", "cocoblocks"),
      value: "4",
    },
    {
      label: __("5", "cocoblocks"),
      value: "5",
    },
    {
      label: __("6", "cocoblocks"),
      value: "6",
    },
    {
      label: __("7", "cocoblocks"),
      value: "7",
    },
    {
      label: __("8", "cocoblocks"),
      value: "8",
    },
    {
      label: __("9", "cocoblocks"),
      value: "9",
    },
  ];

  useEffect(() => {
    // Resetta la notifica e i post all'inizio quando cambia il contentType
    setAttributes({ notice: null, posts: [] });

    if (attributes.contentType !== "custom") {
      const apiUrl =
        attributes.contentType === "woocommerce-based"
          ? `${window.wpApiSettings.root}cocoblocks/v1/get-products/`
          : `${window.wpApiSettings.root}cocoblocks/v1/get-posts/`;

      console.log("Fetching from API:", apiUrl);

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          if (Array.isArray(data) && data.length > 0) {
            setAttributes({ posts: data, notice: null });
          } else {
            // Mostra un avviso se non ci sono contenuti
            const message =
              attributes.contentType === "woocommerce-based"
                ? "Devi avere installato il plugin WooCommerce e avere creato dei prodotti per utilizzare questa funzione."
                : "Nessun contenuto trovato.";

            setAttributes({ posts: [], notice: message });
          }
        })
        .catch((error) => {
          console.error("Errore nel recuperare i dati:", error);
          const message =
            attributes.contentType === "woocommerce-based"
              ? "Errore nel recuperare i prodotti. Assicurati che WooCommerce sia installato e attivo."
              : "Errore nel recuperare i post.";

          setAttributes({ posts: [], notice: message }); 
        });
    }
  }, [attributes.contentType]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Section slider
  const [activeSection, setActiveSectionSlider] = useState("layout");

  return (
    <>
      <Button isSecondary onClick={() => setIsModalOpen(true)}>
              {__("Open Pattern Modal", "text-domain")}
            </Button>
            {isModalOpen && (
              <PatternSelectionModal onClose={() => setIsModalOpen(false)} />
            )}
      <div className="content-subdescription-section-slider">
        <h2>{__("General Options")}</h2>
      </div>
      <SectionSliderSelector onSectionChange={setActiveSectionSlider} />
      {activeSection === "layout" && (
        <>
          <div className="content-title-custom-panel" style={{justifyContent:'space-between'}}>
            <h2 className="title-custom-panel">
              {__("Layout Area", "cocoblocks")}
            </h2>
            <ButtonGroup className="device-switcher-slider">
                <Button
                  size="small"
                  isPressed={device === "desktop"}
                  onClick={handleDesktopClick}
                  className={device !== "desktop" ? "inactive" : ""}
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

                <>
                  <Button
                    size="small"
                    isPressed={device === "tablet"}
                    onClick={handleTabletClick}
                    className={device !== "tablet" ? "inactive" : ""}
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
                    onClick={handleMobileClick}
                    className={device !== "mobile" ? "inactive" : ""}
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
              </ButtonGroup>
          </div>
          <div className="cocoblocks-panel content-section-custom-panel">
          


            {device === "desktop" && (
              <>
            <div className="content-section-panel">
              <div className="custom-select select-button-device-slider" style={{textAlign:'right'}}>
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
                  </div>
              <div className="custom-select select-control-label-right">
                <SelectControl
                 __nextHasNoMarginBottom
                  label={
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="var(--light-color)"
                      >
                        <path d="M520-320h200v-320H520v320Zm-280 0h200v-320H240v320Zm-80 160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm640-560H160v480h640v-480Zm-640 0v480-480Z" />
                      </svg>
                      {__("Slides per view", "cocoblocks")}
                    </>
                  }
                  value={perViewSlider}
                  onChange={(val) => {
                    setAttributes({ perViewSlider: val });
                  }}
                  options={optionsPerView}
                />
                <Tooltip
                  placement="top"
                  style={{
                    padding: "10px",
                    maxWidth: "300px",
                    borderRadius: "4px",
                  }}
                  text={__(
                    "Number of slides per view in Desktop (1024px). Slides visible at the same time on slider's container.",
                    "cocoblocks"
                  )}
                >
                  <Icon icon={info} className="tooltip-icon" />
                </Tooltip>
              </div>
              {perViewSlider == "auto" && (
                <p
                  className="notice components-base-control__help"
                  style={{ borderRadius: 0, margin: "0" }}
                >
                  {__(
                    "The width of the slides is dynamic and adapts to the content. This is useful when slides have variable widths or when you want slides to dynamically adapt to available space.",
                    "cocoblocks"
                  )}
                </p>
              )}
              <div className="custom-select">
                <RangeControl
                  label={
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="var(--light-color)"
                      >
                        <path d="M800-80v-200H680v-400h120v-200h80v800h-80ZM80-80v-800h80v200h120v400H160v200H80Z" />
                      </svg>
                      {__("Space Between Slides", "cocoblocks")}
                    </>
                  }
                  value={spaceBetween}
                  onChange={(val) => setAttributes({ spaceBetween: val })}
                  min={0}
                  max={100}
                />
              </div>
              <div className="custom-select select-control-label-right">
                <SelectControl
                 __nextHasNoMarginBottom
                  label={
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="var(--light-color)"
                      >
                        <path d="M160-240h160v-480H160v480Zm240 0h160v-480H400v480Zm240 0h160v-480H640v480Zm-480 80q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z" />
                      </svg>
                      {__("Slides per group", "cocoblocks")}
                    </>
                  }
                  value={slidesPerGroupDesktop}
                  onChange={(val) =>
                    setAttributes({ slidesPerGroupDesktop: val })
                  }
                  options={optionsPerGroup}
                />
                <Tooltip
                  placement="top"
                  style={{
                    padding: "10px",
                    maxWidth: "300px",
                    borderRadius: "4px",
                  }}
                  text={__(
                    "The number of slides that should be grouped together for navigation.(Desktop)",
                    "cocoblocks"
                  )}
                >
                  <Icon icon={info} className="tooltip-icon" />
                </Tooltip>
              </div>
              <div
                className="custom-select select-control-label-right"
                style={{
                  borderBottomLeftRadius: "8px",
                  borderBottomRightRadius: "8px",
                }}
              >
                <SelectControl
                 __nextHasNoMarginBottom
                  label={
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="var(--light-color)"
                      >
                        <path d="M760-200v-120H200v120h560Zm0-200v-160H200v160h560Zm0-240v-120H200v120h560ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z" />
                      </svg>
                      {__("Slides rows", "cocoblocks")}
                    </>
                  }
                  value={slidesPerRow}
                  onChange={(val) => setAttributes({ slidesPerRow: val })}
                  options={optionsPerGroup}
                />
                <Tooltip
                  placement="top"
                  style={{
                    padding: "10px",
                    maxWidth: "300px",
                    borderRadius: "4px",
                  }}
                  text={__(
                    "Number of slider rows, for multirow layout.",
                    "cocoblocks"
                  )}
                >
                  <Icon icon={info} className="tooltip-icon" />
                </Tooltip>
              </div>
              {slidesPerRow !== "1" && (
                <p className="notice components-base-control__help">
                  {__(
                    'Please note that this choice influences how the slider is displayed in responsive mode. Specifically, it may impact the functionality of "per view" controls on responsive devices. Due to the nature of the row layout, some responsive "per view" settings may not have the expected effect. It\'s recommended to test your slider across different screen sizes to ensure the desired display and functionality.',
                    "cocoblocks"
                  )}
                </p>
              )}
              {showGridNotice && (
                <Notice
                  status="warning"
                  isDismissible={false}
                  className="notice-warning-margin-top"
                >
                  {__(
                    "Grid mode with more than 1 row is not compatible with loop mode.Please disable loop mode or set Slides per Row to 1.",
                    "cocoblocks"
                  )}
                </Notice>
              )}
            </div>
            </>
            )}
    
            {device === "tablet" && (
              <>
            <div className="content-section-panel">
            <div className="custom-select select-button-device-slider" style={{textAlign:'right'}}>
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
                  </div>
              <div className="custom-select select-control-label-right">
                <SelectControl
                 __nextHasNoMarginBottom
                  label={
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="var(--light-color)"
                      >
                        <path d="M520-320h200v-320H520v320Zm-280 0h200v-320H240v320Zm-80 160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm640-560H160v480h640v-480Zm-640 0v480-480Z" />
                      </svg>
                      {__("Slide per view", "cocoblocks")}
                    </>
                  }
                  value={perViewSliderTablet}
                  onChange={(val) => {
                    setAttributes({ perViewSliderTablet: val });
                  }}
                  options={optionsPerView}
                />
                <Tooltip
                  placement="top"
                  style={{
                    padding: "10px",
                    maxWidth: "300px",
                    borderRadius: "4px",
                  }}
                  text={__(
                    "Number of slides per view in Tablet (768px). Slides visible at the same time on slider's container.",
                    "cocoblocks"
                  )}
                >
                  <Icon icon={info} className="tooltip-icon" />
                </Tooltip>
              </div>
              {perViewSliderTablet == "auto" && (
                <p className="notice components-base-control__help">
                  {__(
                    "The width of the slides is dynamic and adapts to the content. This is useful when slides have variable widths or when you want slides to dynamically adapt to available space.",
                    "cocoblocks"
                  )}
                </p>
              )}
              <div className="custom-select">
                <RangeControl
                  label={
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="var(--light-color)"
                      >
                        <path d="M800-80v-200H680v-400h120v-200h80v800h-80ZM80-80v-800h80v200h120v400H160v200H80Z" />
                      </svg>
                      {__("Space Between Slides", "cocoblocks")}
                    </>
                  }
                  value={spaceBetweenTablet}
                  onChange={(val) => setAttributes({ spaceBetweenTablet: val })}
                  min={0}
                  max={100}
                />
              </div>
              <div className="custom-select select-control-label-right">
                <SelectControl
                 __nextHasNoMarginBottom
                  label={
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="var(--light-color)"
                      >
                        <path d="M160-240h160v-480H160v480Zm240 0h160v-480H400v480Zm240 0h160v-480H640v480Zm-480 80q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z" />
                      </svg>
                      {__("Slides per group", "cocoblocks")}
                    </>
                  }
                  value={slidesPerGroupTablet}
                  onChange={(val) =>
                    setAttributes({ slidesPerGroupTablet: val })
                  }
                  options={optionsPerGroup}
                />
                <Tooltip
                  placement="top"
                  style={{
                    padding: "10px",
                    maxWidth: "300px",
                    borderRadius: "4px",
                  }}
                  text={__(
                    "The number of slides that should be grouped together for navigation.(Tablet)",
                    "cocoblocks"
                  )}
                >
                  <Icon icon={info} className="tooltip-icon" />
                </Tooltip>
              </div>
            </div>
            </>
            )}
          
            {device === "mobile" && (
              <>
            <div className="content-section-panel">
            <div className="custom-select select-button-device-slider" style={{textAlign:'right'}}>
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
                  </div>
              <div className="custom-select select-control-label-right">
                <SelectControl
                 __nextHasNoMarginBottom
                  label={
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="var(--light-color)"
                      >
                        <path d="M520-320h200v-320H520v320Zm-280 0h200v-320H240v320Zm-80 160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm640-560H160v480h640v-480Zm-640 0v480-480Z" />
                      </svg>
                      {__("Slides per view", "cocoblocks")}
                    </>
                  }
                  value={perViewSliderMobile}
                  onChange={(val) => {
                    setAttributes({ perViewSliderMobile: val });
                  }}
                  options={optionsPerView}
                />
                <Tooltip
                  placement="top"
                  style={{
                    padding: "10px",
                    maxWidth: "300px",
                    borderRadius: "4px",
                  }}
                  text={__(
                    "Number of slides per view in Mobile (640px). Slides visible at the same time on slider's container.",
                    "cocoblocks"
                  )}
                >
                  <Icon icon={info} className="tooltip-icon" />
                </Tooltip>
              </div>
              {perViewSliderMobile == "auto" && (
                <p className="notice components-base-control__help">
                  {__(
                    "The width of the slides is dynamic and adapts to the content. This is useful when slides have variable widths or when you want slides to dynamically adapt to available space.",
                    "cocoblocks"
                  )}
                </p>
              )}
              <div className="custom-select">
                <RangeControl
                  label={
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="var(--light-color)"
                      >
                        <path d="M800-80v-200H680v-400h120v-200h80v800h-80ZM80-80v-800h80v200h120v400H160v200H80Z" />
                      </svg>
                      {__("Space Between Slides", "cocoblocks")}
                    </>
                  }
                  value={spaceBetweenMobile}
                  onChange={(val) => setAttributes({ spaceBetweenMobile: val })}
                  min={0}
                  max={100}
                />
              </div>
              <div className="custom-select select-control-label-right">
                <SelectControl
                 __nextHasNoMarginBottom
                  label={
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="var(--light-color)"
                      >
                        <path d="M160-240h160v-480H160v480Zm240 0h160v-480H400v480Zm240 0h160v-480H640v480Zm-480 80q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z" />
                      </svg>
                      {__("Slides per group", "cocoblocks")}
                    </>
                  }
                  value={slidesPerGroupMobile}
                  onChange={(val) =>
                    setAttributes({ slidesPerGroupMobile: val })
                  }
                  options={optionsPerGroup}
                />
                <Tooltip
                  placement="top"
                  style={{
                    padding: "10px",
                    maxWidth: "300px",
                    borderRadius: "4px",
                  }}
                  text={__(
                    "The number of slides that should be grouped together for navigation.(Mobile)",
                    "cocoblocks"
                  )}
                >
                  <Icon icon={info} className="tooltip-icon" />
                </Tooltip>
              </div>
            </div>
            </>
            )}
            <div className="content-title-custom-panel intermedy">
              <h2 className="title-custom-panel">
                {__("Layout Size", "cocoblocks")}
              </h2>
            </div>
            <div className="content-section-panel">
              <div className="custom-select">
                <ToggleControl
                  label={
                    <>
                      <svg
                        fill="currentcolor"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        viewBox="0 0 56 56"
                      >
                        <path d="M 28 51.0742 C 28.5859 51.0742 29.1250 50.8633 29.5703 50.3945 L 42.9766 36.7305 C 43.3750 36.3320 43.6094 35.7227 43.6094 35.2071 C 43.6094 33.9649 42.7656 33.1445 41.5469 33.1445 C 40.9375 33.1445 40.4922 33.3555 40.1172 33.7071 L 33.6484 40.3398 L 29.8750 44.7227 L 30.1094 39.2851 L 30.1094 16.7149 L 29.8750 11.2773 L 33.6484 15.6602 L 40.1172 22.2930 C 40.4922 22.6445 40.9375 22.8555 41.5469 22.8555 C 42.7656 22.8555 43.6094 22.0352 43.6094 20.7930 C 43.6094 20.2773 43.3750 19.6680 42.9766 19.2695 L 29.5703 5.6055 C 29.1250 5.1367 28.5859 4.9258 28 4.9258 C 27.4375 4.9258 26.8984 5.1367 26.4297 5.6055 L 13.0469 19.2695 C 12.6484 19.6680 12.3906 20.2773 12.3906 20.7930 C 12.3906 22.0352 13.2578 22.8555 14.4531 22.8555 C 15.0625 22.8555 15.5312 22.6445 15.9063 22.2930 L 22.3516 15.6602 L 26.1484 11.2773 L 25.9141 16.7149 L 25.9141 39.2851 L 26.1484 44.7227 L 22.3516 40.3398 L 15.9063 33.7071 C 15.5312 33.3555 15.0625 33.1445 14.4531 33.1445 C 13.2578 33.1445 12.3906 33.9649 12.3906 35.2071 C 12.3906 35.7227 12.6484 36.3320 13.0469 36.7305 L 26.4297 50.3945 C 26.8984 50.8633 27.4375 51.0742 28 51.0742 Z"></path>
                      </svg>
                      {__("Auto height", "cocoblocks")}
                    </>
                  }
                  checked={autoHeight}
                  onChange={(value) => setAttributes({ autoHeight: value })}
                />
                <Tooltip
                  placement="top"
                  style={{
                    padding: "10px",
                    maxWidth: "300px",
                    borderRadius: "4px",
                  }}
                  text={__(
                    "Enable and slider wrapper will adapt its height to the height of the currently active slide",
                    "cocoblocks"
                  )}
                >
                  <Icon
                    icon={info}
                    className="tooltip-icon"
                    style={{ top: "12px" }}
                  />
                </Tooltip>
              </div>
              {!autoHeight && (
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
                            fill="currentColor"
                          >
                            <path d="M160-80v-80h640v80H160Zm320-120L320-360l56-56 64 62v-252l-64 62-56-56 160-160 160 160-56 56-64-62v252l64-62 56 56-160 160ZM160-800v-80h640v80H160Z" />
                          </svg>
                          {__("Custom Height", "cocoblocks")}
                        </>
                      }
                      value={slideHeight}
                      onChange={(val) => setAttributes({ slideHeight: val })}
                      min={10}
                      max={1200}
                      step={1}
                    />
                  </div>
                </>
              )}
            </div>
            <div className="content-title-custom-panel intermedy">
              <h2 className="title-custom-panel">
                {__("Advanced Settings", "cocoblocks")}
              </h2>
            </div>
            <div className="content-section-panel">
              <div className="custom-select">
                <ToggleControl
                  label={
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="var(--light-color)"
                      >
                        <path d="M440-80v-800h80v800h-80Zm160-200v-400h120v400H600Zm-360 0v-400h120v400H240Z" />
                      </svg>
                      {__("Centered slides", "cocoblocks")}
                    </>
                  }
                  checked={centeredSlides}
                  onChange={(value) => setAttributes({ centeredSlides: value })}
                />
                <Tooltip
                  placement="top"
                  style={{
                    padding: "10px",
                    maxWidth: "300px",
                    borderRadius: "4px",
                  }}
                  text={__(
                    "If enabled, then active slide will be centered, not always on the left side.",
                    "cocoblocks"
                  )}
                >
                  <Icon
                    icon={info}
                    className="tooltip-icon"
                    style={{ top: "12px" }}
                  />
                </Tooltip>
              </div>
            </div>
          </div>
        </>
      )}

      {activeSection === "general" && (
        <>
          <div className="content-title-custom-panel">
            <h2 className="title-custom-panel">
              {__("General", "cocoblocks")}
            </h2>
          </div>
          <div className="cocoblocks-panel content-section-custom-panel">
            <div className="content-section-panel">
              <div className="custom-select select-control-label-right">
                <SelectControl
                 __nextHasNoMarginBottom
                  label={
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="var(--light-color)"
                      >
                        <path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" />
                      </svg>
                      {__("Initial slide", "cocoblocks")}
                    </>
                  }
                  value={initialSlide}
                  onChange={(val) => setAttributes({ initialSlide: val })}
                  options={optionsInitialSlide}
                />
                <Tooltip
                  placement="top"
                  style={{
                    padding: "10px",
                    maxWidth: "300px",
                    borderRadius: "4px",
                  }}
                  text={__(
                    "Index number of initial slide.(Starts from 0)",
                    "cocoblocks"
                  )}
                >
                  <Icon icon={info} className="tooltip-icon" />
                </Tooltip>
              </div>
            </div>

            <div className="content-section-panel">
              <div className="custom-select">
                <ToggleControl
                  label={
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="var(--light-color)"
                      >
                        <path d="M280-240v-480h80v480h-80ZM440-80v-800h80v800h-80ZM120-400v-160h80v160h-80Zm480 160v-480h80v480h-80Zm160-160v-160h80v160h-80Z" />
                      </svg>
                      {__("Free mode", "cocoblocks")}
                    </>
                  }
                  checked={freeMode}
                  onChange={(value) => setAttributes({ freeMode: value })}
                />
                <Tooltip
                  placement="top"
                  style={{
                    padding: "10px",
                    maxWidth: "300px",
                    borderRadius: "4px",
                  }}
                  text={__("Doesn't work in the editor!", "cocoblocks")}
                >
                  <Icon
                    icon={info}
                    className="tooltip-icon"
                    style={{ top: "12px" }}
                  />
                </Tooltip>
              </div>
              {freeMode == true && (
                <>
                  <div className="content-section-panel">
                    <div className="custom-select">
                      <ToggleControl
                        label={__("Sticky", "cocoblocks")}
                        checked={stickyFreeMode}
                        onChange={(value) =>
                          setAttributes({ stickyFreeMode: value })
                        }
                      />
                      <Tooltip
                        placement="top"
                        style={{
                          padding: "10px",
                          maxWidth: "300px",
                          borderRadius: "4px",
                        }}
                        text={__(
                          "Enables Snap to slides positions in free mode",
                          "cocoblocks"
                        )}
                      >
                        <Icon icon={info} className="tooltip-icon" />
                      </Tooltip>
                    </div>
                    <div className="custom-select">
                      <ToggleControl
                        label={__("Momentum", "cocoblocks")}
                        checked={momentumFreeMode}
                        onChange={(value) =>
                          setAttributes({ momentumFreeMode: value })
                        }
                      />
                      <Tooltip
                        placement="top"
                        style={{
                          padding: "10px",
                          maxWidth: "300px",
                          borderRadius: "4px",
                        }}
                        text={__(
                          "If enabled, then slide will keep moving for a while you release it after",
                          "cocoblocks"
                        )}
                      >
                        <Icon icon={info} className="tooltip-icon" />
                      </Tooltip>
                    </div>
                    <div className="custom-select">
                      <ToggleControl
                        label={__("Momentum bounce", "cocoblocks")}
                        checked={momentumBounceFreeMode}
                        onChange={(value) =>
                          setAttributes({ momentumBounceFreeMode: value })
                        }
                      />
                      <Tooltip
                        placement="top"
                        style={{
                          padding: "10px",
                          maxWidth: "300px",
                          borderRadius: "4px",
                        }}
                        text={__(
                          "Enables momentum bounce in free mode",
                          "cocoblocks"
                        )}
                      >
                        <Icon icon={info} className="tooltip-icon" />
                      </Tooltip>
                    </div>
                    <div className="custom-select">
                      <RangeControl
                        label={__("Momentum bounce ratio", "cocobocks")}
                        value={momentumBounceRatioFreeMode}
                        onChange={(value) =>
                          setAttributes({ momentumBounceRatioFreeMode: value })
                        }
                        min={0.1}
                        max={3}
                        step={0.1}
                      />
                      <Tooltip
                        placement="top"
                        style={{
                          padding: "10px",
                          maxWidth: "300px",
                          borderRadius: "4px",
                        }}
                        text={__(
                          "Higher value produces larger momentum bounce effect",
                          "cocoblocks"
                        )}
                      >
                        <Icon
                          icon={info}
                          className="tooltip-icon"
                          style={{ left: "75%", top: "2px" }}
                        />
                      </Tooltip>
                    </div>
                    <div className="custom-select">
                      <RangeControl
                        label={__("Momentum ratio", "cocobocks")}
                        value={momentumRatioFreeMode}
                        onChange={(value) =>
                          setAttributes({ momentumRatioFreeMode: value })
                        }
                        min={0.1}
                        max={3}
                        step={0.1}
                      />
                      <Tooltip
                        placement="top"
                        style={{
                          padding: "10px",
                          maxWidth: "300px",
                          borderRadius: "4px",
                        }}
                        text={__(
                          "Higher value produces larger momentum distance after you release sldier",
                          "cocoblocks"
                        )}
                      >
                        <Icon
                          icon={info}
                          className="tooltip-icon"
                          style={{ left: "75%", top: "2px" }}
                        />
                      </Tooltip>
                    </div>
                    <div className="custom-select">
                      <RangeControl
                        label={__("Momentum velocity ratio", "cocobocks")}
                        value={momentumVelocityRatioFreeMode}
                        onChange={(value) =>
                          setAttributes({
                            momentumVelocityRatioFreeMode: value,
                          })
                        }
                        min={0.1}
                        max={3}
                        step={0.1}
                      />
                      <Tooltip
                        placement="top"
                        style={{
                          padding: "10px",
                          maxWidth: "300px",
                          borderRadius: "4px",
                        }}
                        text={__(
                          "Higher value produces larger momentum velocity after you release sldier",
                          "cocoblocks"
                        )}
                      >
                        <Icon
                          icon={info}
                          className="tooltip-icon"
                          style={{ left: "75%", top: "2px" }}
                        />
                      </Tooltip>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}

      {activeSection === "style" && (
        <>
          <div className="content-title-custom-panel">
            <h2 className="title-custom-panel">
              {__("Background", "cocoblocks")}
            </h2>
          </div>
          <div className="cocoblocks-panel content-section-custom-panel">
            <div className="content-section-panel">
              <div className="custom-select color">
                <ColorOptionsPanel
                  colorNormal={backgroundColor}
                  setColorNormal={(color) =>
                    setAttributes({ backgroundColor: color })
                  }
                  buttonTitle={__("Background Color", "cocoblocks")}
                  buttonIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="var(--light-color)"
                    >
                      <path d="M346-140 100-386q-10-10-15-22t-5-25q0-13 5-25t15-22l230-229-106-106 62-65 400 400q10 10 14.5 22t4.5 25q0 13-4.5 25T686-386L440-140q-10 10-22 15t-25 5q-13 0-25-5t-22-15Zm47-506L179-432h428L393-646Zm399 526q-36 0-61-25.5T706-208q0-27 13.5-51t30.5-47l42-54 44 54q16 23 30 47t14 51q0 37-26 62.5T792-120Z" />
                    </svg>
                  }
                />
              </div>
              <div className="custom-select select-control-label-right">
                <SelectControl
                 __nextHasNoMarginBottom
                  label={
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="var(--light-color)"
                      >
                        <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z" />
                      </svg>
                      {__("Overflow", "cocoblocks")}
                    </>
                  }
                  value={overflow}
                  onChange={(val) => setAttributes({ overflow: val })}
                  options={[
                    {
                      label: __("Visible", "cocoblock"),
                      value: "visible",
                    },
                    {
                      label: __("Hidden", "slider"),
                      value: "hidden",
                    },
                  ]}
                />
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
              <div className="custom-select color">
                <ColorOptionsPanel
                  colorNormal={backgroundBorderColor}
                  setColorNormal={(color) =>
                    setAttributes({ backgroundBorderColor: color })
                  }
                  buttonTitle={__("Border Color", "cocoblocks")}
                  buttonIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -960 960 960"
                      fill="var(--light-color)"
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
                        fill="var(--light-color)"
                        style={{ marginRight: "2px" }}
                      >
                        <path d="M144-144v-672h72v672h-72Zm150 0v-72h72v72h-72Zm0-300v-72h72v72h-72Zm0-300v-72h72v72h-72Zm150 600v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm150 600v-72h72v72h-72Zm0-300v-72h72v72h-72Zm0-300v-72h72v72h-72Zm150 600v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Z" />
                      </svg>
                      {__("Border width", "cocoblocks")}
                    </>
                  }
                  value={backgroundBorderSize}
                  onChange={(value) =>
                    setAttributes({
                      backgroundBorderSize: value,
                    })
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
                        fill="var(--light-color)"
                        style={{ marginRight: "2px" }}
                      >
                        <path d="M216-216h528v-528H216v528Zm-72 72v-672h672v672H144Zm150-300v-72h72v72h-72Zm150 150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm150 150v-72h72v72h-72Z" />
                      </svg>
                      {__("Border radius", "cocoblocks")}
                    </>
                  }
                  value={backgroundBorderRadius}
                  onChange={(value) =>
                    setAttributes({
                      backgroundBorderRadius: value,
                    })
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
                        fill="var(--light-color)"
                        style={{ marginRight: "2px" }}
                      >
                        <path d="M192-744v-72h576v72H192Zm252 600v-390L339-429l-51-51 192-192 192 192-51 51-105-105v390h-72Z" />
                      </svg>
                      {__("Content vertical padding", "cocoblocks")}
                    </>
                  }
                  value={backgroundVerticalPadding}
                  onChange={(value) =>
                    setAttributes({
                      backgroundVerticalPadding: value,
                    })
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
                        fill="var(--light-color)"
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
                  value={backgroundHorizontalPadding}
                  onChange={(value) =>
                    setAttributes({
                      backgroundHorizontalPadding: value,
                    })
                  }
                  min={0}
                  max={256}
                  step={1}
                />
                </div>
                {backgroundHorizontalPadding > 0 && (
                  <p
                    className="notice components-base-control__help"
                    style={{ margin: "0" }}
                  >
                    {__(
                      'Warning: if you set space here you also need to adjust "Space between slides"!',
                      "cocoblocks"
                    )}
                  </p>
                )}
              
            </div>
            <div className="content-section-panel" style={{ padding: "0" }}>
              <div className="custom-select">
                <RangeControl
                  label={
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Zm120 160q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm160 0q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm160 0q17 0 28.5-11.5T680-640q0-17-11.5-28.5T640-680q-17 0-28.5 11.5T600-640q0 17 11.5 28.5T640-600Zm0 160q17 0 28.5-11.5T680-480q0-17-11.5-28.5T640-520q-17 0-28.5 11.5T600-480q0 17 11.5 28.5T640-440Zm-160 0q17 0 28.5-11.5T520-480q0-17-11.5-28.5T480-520q-17 0-28.5 11.5T440-480q0 17 11.5 28.5T480-440Zm-160 0q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Z"/></svg>
                      {__("Margin Top", "cocoblocks")}
                    </>
                  }
                  value={sliderMarginTop}
                  onChange={(value) =>
                    setAttributes({
                      sliderMarginTop: value,
                    })
                  }
                  min={-200}
                  max={200}
                  step={1}
                />
              </div>
              <div className="custom-select">
                <RangeControl
                  label={
                    <>
                     <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Zm120 160q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm160 0q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm160 0q17 0 28.5-11.5T680-640q0-17-11.5-28.5T640-680q-17 0-28.5 11.5T600-640q0 17 11.5 28.5T640-600Zm0 160q17 0 28.5-11.5T680-480q0-17-11.5-28.5T640-520q-17 0-28.5 11.5T600-480q0 17 11.5 28.5T640-440Zm-160 0q17 0 28.5-11.5T520-480q0-17-11.5-28.5T480-520q-17 0-28.5 11.5T440-480q0 17 11.5 28.5T480-440Zm-160 0q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Z"/></svg>
                      {__("Margin Bottom", "cocoblocks")}
                    </>
                  }
                  value={sliderMarginBottom}
                  onChange={(value) =>
                    setAttributes({
                      sliderMarginBottom: value,
                    })
                  }
                  min={-200}
                  max={200}
                  step={1}
                />
              </div>
              </div>
          </div>
        </>
      )}

      {activeSection === "skin" && (
        <>
          <div className="content-title-custom-panel">
            <h2 className="title-custom-panel">
              {__("Global color skin", "cocoblocks")}
            </h2>
          </div>
          <div className="cocoblocks-panel content-section-custom-panel">
            <div className="content-section-panel">
              <div className="custom-select color">
                <ColorOptionsPanel
                  colorNormal={backgroundColorSlideDefault}
                  setColorNormal={(color) =>
                    setAttributes({ backgroundColorSlideDefault: color })
                  }
                  buttonTitle={__("Background Color Slide", "cocoblocks")}
                  buttonIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="var(--light-color)"
                      style={{
                        marginRight: "3px",
                        height: "16px",
                        width: "16px",
                        position: "relative",
                        top: "3px",
                      }}
                    >
                      <path d="M120-120v-190l358-358-58-56 58-56 76 76 124-124q5-5 12.5-8t15.5-3q8 0 15 3t13 8l94 94q5 6 8 13t3 15q0 8-3 15.5t-8 12.5L705-555l76 78-57 57-56-58-358 358H120Zm80-80h78l332-334-76-76-334 332v78Zm447-410 96-96-37-37-96 96 37 37Zm0 0-37-37 37 37Z" />
                    </svg>
                  }
                />
              </div>
              <div className="custom-select color">
                <ColorOptionsPanel
                  colorNormal={backgroundColorBlockDefault}
                  setColorNormal={(color) =>
                    setAttributes({ backgroundColorBlockDefault: color })
                  }
                  buttonTitle={__("Background Color Block", "cocoblocks")}
                  buttonIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="var(--light-color)"
                      style={{
                        marginRight: "3px",
                        height: "16px",
                        width: "16px",
                        position: "relative",
                        top: "3px",
                      }}
                    >
                      <path d="M120-120v-190l358-358-58-56 58-56 76 76 124-124q5-5 12.5-8t15.5-3q8 0 15 3t13 8l94 94q5 6 8 13t3 15q0 8-3 15.5t-8 12.5L705-555l76 78-57 57-56-58-358 358H120Zm80-80h78l332-334-76-76-334 332v78Zm447-410 96-96-37-37-96 96 37 37Zm0 0-37-37 37 37Z" />
                    </svg>
                  }
                />
              </div>
              <div className="custom-select color">
                <ColorOptionsPanel
                  colorNormal={textColorDefault}
                  setColorNormal={(color) =>
                    setAttributes({ textColorDefault: color })
                  }
                  buttonTitle={__("Text Color", "cocoblocks")}
                  buttonIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="var(--light-color)"
                      style={{
                        marginRight: "3px",
                        height: "16px",
                        width: "16px",
                        position: "relative",
                        top: "3px",
                      }}
                    >
                      <path d="M120-120v-190l358-358-58-56 58-56 76 76 124-124q5-5 12.5-8t15.5-3q8 0 15 3t13 8l94 94q5 6 8 13t3 15q0 8-3 15.5t-8 12.5L705-555l76 78-57 57-56-58-358 358H120Zm80-80h78l332-334-76-76-334 332v78Zm447-410 96-96-37-37-96 96 37 37Zm0 0-37-37 37 37Z" />
                    </svg>
                  }
                />
              </div>
              <div className="custom-select color">
                <ColorOptionsPanel
                  colorNormal={innerTextColorDefault}
                  setColorNormal={(color) =>
                    setAttributes({ innerTextColorDefault: color })
                  }
                  buttonTitle={__("Inner Text Color", "cocoblocks")}
                  buttonIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="var(--light-color)"
                      style={{
                        marginRight: "3px",
                        height: "16px",
                        width: "16px",
                        position: "relative",
                        top: "3px",
                      }}
                    >
                      <path d="M120-120v-190l358-358-58-56 58-56 76 76 124-124q5-5 12.5-8t15.5-3q8 0 15 3t13 8l94 94q5 6 8 13t3 15q0 8-3 15.5t-8 12.5L705-555l76 78-57 57-56-58-358 358H120Zm80-80h78l332-334-76-76-334 332v78Zm447-410 96-96-37-37-96 96 37 37Zm0 0-37-37 37 37Z" />
                    </svg>
                  }
                />
              </div>
            </div>
          </div>
        </>
      )}

      {activeSection === "content" && (
        <>
          <div className="content-title-custom-panel">
            <h2 className="title-custom-panel">
              {__("Content", "cocoblocks")}
            </h2>
          </div>
          <div className="cocoblocks-panel content-section-custom-panel">
            <div className="content-section-panel">
              <div className="custom-select select-control-label-right">
                <SelectControl
                 __nextHasNoMarginBottom
                  label={
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="var(--light-color)"
                      >
                        <path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" />
                      </svg>
                      {__("Content Type", "cocoblocks")}
                    </>
                  }
                  value={attributes.contentType}
                  onChange={(value) => setAttributes({ contentType: value })}
                  options={[
                    { label: __("Custom", "cocoblocks"), value: "custom" },
                    {
                      label: __("Post Based", "cocoblocks"),
                      value: "post-based",
                    },
                    {
                      label: __("WooComemrce", "cocoblocks"),
                      value: "woocommerce-based",
                    },
                  ]}
                />
                </div>
                {attributes.notice && (
                  <div className="notice components-base-control__help" style={{ margin: 0 }}>
                    <p>{attributes.notice}</p>
                  </div>
                )}
                {attributes.contentType === "custom" && (
                 
                  <p
                    className="notice components-base-control__help"
                    style={{ margin: 0 }}
                  >
                    {__(
                      "No further source settings needed. Content is created manually.",
                      "cocoblocks"
                    )}
                  </p>
                
                )}
              
            </div>
          </div>
        </>
      )}
       {activeSection === "mouse-effect" && (
        <>
          <div className="content-title-custom-panel">
            <h2 className="title-custom-panel">
              {__("Mouse Effect", "cocoblocks")}
            </h2>
          </div>
          <div className="cocoblocks-panel content-section-custom-panel">
            <div className="content-section-panel">
              <div className="custom-select select-control-label-right">
                <SelectControl
                 __nextHasNoMarginBottom
                  label={
                    <>
                     <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--light-color)"><path d="M480-80q-116 0-198-82t-82-198v-240q0-116 82-198t198-82q116 0 198 82t82 198v240q0 116-82 198T480-80Zm40-520h160q0-72-45.5-127T520-796v196Zm-240 0h160v-196q-69 14-114.5 69T280-600Zm200 440q83 0 141.5-58.5T680-360v-160H280v160q0 83 58.5 141.5T480-160Zm0-360Zm40-80Zm-80 0Zm40 80Z"/></svg>
                      {__("Choose the effect", "cocoblocks")}
                    </>
                  }
                  value={mouseEffect}
                  onChange={(value) => setAttributes({ mouseEffect: value })}
                  options={[
                    { label: __("None", "cocoblocks"), value: "none" },
                    { label: __("Particle", "cocoblocks"), value: "particle" },
                    {
                      label: __("Smoke", "cocoblocks"),
                      value: "smoke",
                    },
                    {
                      label: __("Parallax", "cocoblocks"),
                      value: "parallax",
                    },
                    {
                      label: __("Liquid", "cocoblocks"),
                      value: "liquid",
                    },
                  ]}
                />
                </div>
                {mouseEffect !== "none" && (
                <p
                    className="notice components-base-control__help"
                    style={{
                      borderRadius: "0",
                      margin: "0",
                    }}
                  >
                    {__(
                      "This effect is only visible in the frontend!",
                      "cocoblocks"
                    )}
                  </p>
                )}
                {(mouseEffect === "particle" || mouseEffect === "smoke") && ( 
                  <>
                 <div className="custom-select color">
                <ColorOptionsPanel
                  colorNormal={colorEffectStart}
                  setColorNormal={(color) =>
                    setAttributes({ colorEffectStart: color })
                  }
                  buttonTitle={__("Color Effect Start", "cocoblocks")}
                  buttonIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="var(--light-color)"
                      style={{
                        marginRight: "3px",
                        height: "16px",
                        width: "16px",
                        position: "relative",
                        top: "3px",
                      }}
                    >
                      <path d="M120-120v-190l358-358-58-56 58-56 76 76 124-124q5-5 12.5-8t15.5-3q8 0 15 3t13 8l94 94q5 6 8 13t3 15q0 8-3 15.5t-8 12.5L705-555l76 78-57 57-56-58-358 358H120Zm80-80h78l332-334-76-76-334 332v78Zm447-410 96-96-37-37-96 96 37 37Zm0 0-37-37 37 37Z" />
                    </svg>
                  }
                />
              </div>
              </>
                )}
              {mouseEffect === "particle"  && ( 
              <>
              <div className="custom-select color">
                <ColorOptionsPanel
                  colorNormal={colorEffectMiddle}
                  setColorNormal={(color) =>
                    setAttributes({ colorEffectMiddle: color })
                  }
                  buttonTitle={__("Color Effect Middle", "cocoblocks")}
                  buttonIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="var(--light-color)"
                      style={{
                        marginRight: "3px",
                        height: "16px",
                        width: "16px",
                        position: "relative",
                        top: "3px",
                      }}
                    >
                      <path d="M120-120v-190l358-358-58-56 58-56 76 76 124-124q5-5 12.5-8t15.5-3q8 0 15 3t13 8l94 94q5 6 8 13t3 15q0 8-3 15.5t-8 12.5L705-555l76 78-57 57-56-58-358 358H120Zm80-80h78l332-334-76-76-334 332v78Zm447-410 96-96-37-37-96 96 37 37Zm0 0-37-37 37 37Z" />
                    </svg>
                  }
                />
              </div>
              <div className="custom-select color">
                <ColorOptionsPanel
                  colorNormal={colorEffectEnd}
                  setColorNormal={(color) =>
                    setAttributes({ colorEffectEnd: color })
                  }
                  buttonTitle={__("Color Effect End", "cocoblocks")}
                  buttonIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="var(--light-color)"
                      style={{
                        marginRight: "3px",
                        height: "16px",
                        width: "16px",
                        position: "relative",
                        top: "3px",
                      }}
                    >
                      <path d="M120-120v-190l358-358-58-56 58-56 76 76 124-124q5-5 12.5-8t15.5-3q8 0 15 3t13 8l94 94q5 6 8 13t3 15q0 8-3 15.5t-8 12.5L705-555l76 78-57 57-56-58-358 358H120Zm80-80h78l332-334-76-76-334 332v78Zm447-410 96-96-37-37-96 96 37 37Zm0 0-37-37 37 37Z" />
                    </svg>
                  }
                />
              </div>
              </>
              )}
              {mouseEffect === "liquid" && (
                <>
                 <div className="custom-select">
                <RangeControl
                  label={
                    <>
                     <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-120v-190l358-358-58-56 58-56 76 76 124-124q5-5 12.5-8t15.5-3q8 0 15 3t13 8l94 94q5 6 8 13t3 15q0 8-3 15.5t-8 12.5L705-555l76 78-57 57-56-58-358 358H120Zm80-80h78l332-334-76-76-334 332v78Zm447-410 96-96-37-37-96 96 37 37Zm0 0-37-37 37 37Z"/></svg>
                      {__("Adjust Hue (H)", "cocoblocks")}
                    </>
                  }
                  value={firstColorLiquid}
                  onChange={(value) =>
                    setAttributes({
                      firstColorLiquid: value,
                    })
                  }
                  min={0}
                  max={1}
                  step={0.01}
                />
              </div>
              <div className="custom-select">
                <RangeControl
                  label={
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-760v-160h80v160h-80Zm266 110-55-55 112-115 56 57-113 113Zm54 210v-80h160v80H760ZM440-40v-160h80v160h-80ZM254-652 140-763l57-56 113 113-56 54Zm508 512L651-255l54-54 114 110-57 59ZM40-440v-80h160v80H40Zm157 300-56-57 112-112 29 27 29 28-114 114Zm283-100q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-80q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-160Z"/></svg>
                      {__("Adjust Saturation (S)", "cocoblocks")}
                    </>
                  }
                  value={secondColorLiquid}
                  onChange={(value) =>
                    setAttributes({
                      secondColorLiquid: value,
                    })
                  }
                  min={0}
                  max={1}
                  step={0.01}
                />
              </div>
              <div className="custom-select">
                <RangeControl
                  label={
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm40-83q119-15 199.5-104.5T800-480q0-123-80.5-212.5T520-797v634Z"/></svg>
                      {__("Adjust Value (V)", "cocoblocks")}
                    </>
                  }
                  value={thirdColorLiquid}
                  onChange={(value) =>
                    setAttributes({
                      thirdColorLiquid: value,
                    })
                  }
                  min={0.01}
                  max={1}
                  step={0.01}
                />
              </div>
              <p
                    className="notice components-base-control__help"
                    style={{
                      borderRadius: "0",
                      margin: "0",
                    }}
                  >
                    {__(
                      "Due to the nature of the liquid effect, we use HSV (Hue, Saturation, Value) color model to provide more precise control over the colors. Please use the sliders to adjust the hue, saturation, and value for the effect.",
                      "cocoblocks"
                    )}
                  </p>
                  <div className="custom-select" style={{paddingBottom:'12px'}}>
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      color: "var(--light-color)",
                    }}
                    className="table-hsv"
                  >
  <thead className="thead-hsv">
    <tr>
      <th style={{  padding: "5px" }}>
        {__("Hue", "cocoblocks")}
      </th>
      <th style={{  padding: "5px" }}>
        {__("Sat.", "cocoblocks")}
      </th>
      <th style={{ padding: "5px" }}>
        {__("Value", "cocoblocks")}
      </th>
      <th style={{  padding: "5px" }}>
        {__("Color", "cocoblocks")}
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: "1px solid var(--light-color)", padding: "5px" }}>  {__("0", "cocoblocks")}</td>
      <td style={{ border: "1px solid var(--light-color)", padding: "5px" }}>  {__("1", "cocoblocks")}</td>
      <td style={{ border: "1px solid var(--light-color)", padding: "5px" }}>  {__("1", "cocoblocks")}</td>
      <td style={{ border: "1px solid var(--light-color)", padding: "5px", display: "flex", alignItems:"center",justifyContent:"space-between",gap:"3px",borderLeft:'none' }}>  {__("Red", "cocoblocks")}<div style={{backgroundColor: "hsl(0, 100%, 50%)",width:'15px',height:'15px',borderRadius:'50%'}}></div></td>
    </tr>
    <tr>
      <td style={{ border: "1px solid var(--light-color)", padding: "5px" }}>{__("0.083", "cocoblocks")}</td>
      <td style={{ border: "1px solid var(--light-color)", padding: "5px" }}>{__("1", "cocoblocks")}</td>
      <td style={{ border: "1px solid var(--light-color)", padding: "5px" }}>{__("1", "cocoblocks")}</td>
      <td style={{ border: "1px solid var(--light-color)", padding: "5px", display: "flex", alignItems:"center",justifyContent:"space-between",gap:"3px",borderLeft:'none',borderTopColor:'transparent' }}>  {__("Orange", "cocoblocks")}<div style={{backgroundColor: "hsl(30, 100%, 50%)",width:'15px',height:'15px',borderRadius:'50%'}}></div></td>
   
    </tr>
    <tr>
      <td style={{ border: "1px solid var(--light-color)", padding: "5px" }}>{__("0.17", "cocoblocks")}</td>
      <td style={{ border: "1px solid var(--light-color)", padding: "5px" }}>{__("1", "cocoblocks")}</td>
      <td style={{ border: "1px solid var(--light-color)", padding: "5px" }}>{__("1", "cocoblocks")}</td>
      <td style={{ border: "1px solid var(--light-color)", padding: "5px", display: "flex", alignItems:"center",justifyContent:"space-between",gap:"3px" ,borderLeft:'none',borderTopColor:'transparent'}}>  {__("Yellow", "cocoblocks")}<div style={{backgroundColor: "hsl(60, 100%, 50%)",width:'15px',height:'15px',borderRadius:'50%'}}></div></td>
    </tr>
    <tr>
      <td style={{ border: "1px solid var(--light-color)", padding: "5px" }}>{__("0.33", "cocoblocks")}</td>
      <td style={{ border: "1px solid var(--light-color)", padding: "5px" }}>{__("1", "cocoblocks")}</td>
      <td style={{ border: "1px solid var(--light-color)", padding: "5px" }}>{__("1", "cocoblocks")}</td>
      <td style={{ border: "1px solid var(--light-color)", padding: "5px", display: "flex", alignItems:"center",justifyContent:"space-between",gap:"3px",borderLeft:'none',borderTopColor:'transparent' }}>  {__("Green", "cocoblocks")}<div style={{backgroundColor: "hsl(120, 100%, 50%)",width:'15px',height:'15px',borderRadius:'50%'}}></div></td>
    </tr>
    <tr>
      <td style={{ border: "1px solid var(--light-color)", padding: "5px" }}>{__("0.5", "cocoblocks")}</td>
      <td style={{ border: "1px solid var(--light-color)", padding: "5px" }}>{__("1", "cocoblocks")}</td>
      <td style={{ border: "1px solid var(--light-color)", padding: "5px" }}>{__("1", "cocoblocks")}</td>
      <td style={{ border: "1px solid var(--light-color)", padding: "5px", display: "flex", alignItems:"center",justifyContent:"space-between",gap:"3px",borderLeft:'none',borderTopColor:'transparent' }}>  {__("Cyan", "cocoblocks")}<div style={{backgroundColor: "hsl(180, 100%, 50%)",width:'15px',height:'15px',borderRadius:'50%'}}></div></td>
    </tr>
    <tr>
      <td style={{ border: "1px solid var(--light-color)", padding: "5px" }}>{__("0.67", "cocoblocks")}</td>
      <td style={{ border: "1px solid var(--light-color)", padding: "5px" }}>{__("1", "cocoblocks")}</td>
      <td style={{ border: "1px solid var(--light-color)", padding: "5px" }}>{__("1", "cocoblocks")}</td>
      <td style={{ border: "1px solid var(--light-color)", padding: "5px", display: "flex", alignItems:"center",justifyContent:"space-between",gap:"3px",borderLeft:'none',borderTopColor:'transparent' }}>  {__("Blue", "cocoblocks")}<div style={{backgroundColor: "hsl(240, 100%, 50%)",width:'15px',height:'15px',borderRadius:'50%'}}></div></td>
    </tr>
    <tr className="last-border-table-hsv">
      <td style={{ border: "1px solid var(--light-color)", padding: "5px" }}>{__("0.83", "cocoblocks")}</td>
      <td style={{ border: "1px solid var(--light-color)", padding: "5px" }}>{__("1", "cocoblocks")}</td>
      <td style={{ border: "1px solid var(--light-color)", padding: "5px" }}>{__("1", "cocoblocks")}</td>
      <td style={{ border: "1px solid var(--light-color)", padding: "5px", display: "flex", alignItems:"center",justifyContent:"space-between",gap:"3px",borderLeft:'none',borderTopColor:'transparent'}}>  {__("Magenta", "cocoblocks")}<div style={{backgroundColor: "hsl(300, 100%, 50%)",width:'15px',height:'15px',borderRadius:'50%'}}></div></td>
    </tr>
  </tbody>
</table>
</div>
</>
              )}

{mouseEffect === "parallax" && (
  <>
<div className="custom-select checkbox">
              <div className="content-title-checkbox">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M360-80q-58 0-109-22t-89-60q-38-38-60-89T80-360q0-81 42-148t110-102q20-39 49.5-68.5T350-728q33-68 101-110t149-42q58 0 109 22t89 60q38 38 60 89t22 109q0 85-42 150T728-350q-20 39-49.5 68.5T610-232q-35 68-102 110T360-80Zm0-80q33 0 63.5-10t56.5-30q-58 0-109-22t-89-60q-38-38-60-89t-22-109q-20 26-30 56.5T160-360q0 42 16 78t43 63q27 27 63 43t78 16Zm120-120q33 0 64.5-10t57.5-30q-59 0-110-22.5T403-403q-38-38-60.5-89T320-602q-20 26-30 57.5T280-480q0 42 15.5 78t43.5 63q27 28 63 43.5t78 15.5Zm120-120q18 0 34.5-3t33.5-9q22-60 6.5-115.5T621-621q-38-38-93.5-53.5T412-668q-6 17-9 33.5t-3 34.5q0 42 15.5 78t43.5 63q27 28 63 43.5t78 15.5Zm160-78q20-26 30-57.5t10-64.5q0-42-15.5-78T741-741q-27-28-63-43.5T600-800q-35 0-65.5 10T478-760q59 0 110 22.5t89 60.5q38 38 60.5 89T760-478Z"/></svg>
                <h2>
                  {__("Select elements to apply effect", "cocoblocks")}
                  </h2>
              </div>
                              <CheckboxControl
                    __nextHasNoMarginBottom
                    label={__('Select all','cocoblock')}
                    checked={imgSelected && h3Selected && h4Selected && buttonSelected && spanSelected && pSelected}
                    onChange={handleSelectAllChange}
                />
                <CheckboxControl
                    __nextHasNoMarginBottom
                    label={__('Image','cocoblock')}
                    checked={imgSelected}
                    onChange={(isChecked) => setAttributes({ imgSelected: isChecked })}
                />
                <CheckboxControl
                    __nextHasNoMarginBottom
                    label={__('H1','cocoblock')}
                    checked={h1Selected}
                    onChange={(isChecked) => setAttributes({ h1Selected: isChecked })}
                />
                <CheckboxControl
                    __nextHasNoMarginBottom
                    label={__('H2','cocoblock')}
                    checked={h2Selected}
                    onChange={(isChecked) => setAttributes({ h2Selected: isChecked })}
                />
                <CheckboxControl
                    __nextHasNoMarginBottom
                    label={__('H3','cocoblock')}
                    checked={h3Selected}
                    onChange={(isChecked) => setAttributes({ h3Selected: isChecked })}
                />
                <CheckboxControl
                    __nextHasNoMarginBottom
                    label={__('H4','cocoblock')}
                    checked={h4Selected}
                    onChange={(isChecked) => setAttributes({ h4Selected: isChecked })}
                />
                  <CheckboxControl
                    __nextHasNoMarginBottom
                    label={__('H5','cocoblock')}
                    checked={h5Selected}
                    onChange={(isChecked) => setAttributes({ h5Selected: isChecked })}
                />
                  <CheckboxControl
                    __nextHasNoMarginBottom
                    label={__('H6','cocoblock')}
                    checked={h6Selected}
                    onChange={(isChecked) => setAttributes({ h6Selected: isChecked })}
                />
                <CheckboxControl
                    __nextHasNoMarginBottom
                    label={__('Button','cocoblock')}
                    checked={buttonSelected}
                    onChange={(isChecked) => setAttributes({ buttonSelected: isChecked })}
                />
                <CheckboxControl
                    __nextHasNoMarginBottom
                    label={__('Span','cocoblock')}
                    checked={spanSelected}
                    onChange={(isChecked) => setAttributes({ spanSelected: isChecked })}
                />
                <CheckboxControl
                    __nextHasNoMarginBottom
                    label={__('Paragraph','cocoblock')}
                    checked={pSelected}
                    onChange={(isChecked) => setAttributes({ pSelected: isChecked })}
                />
            
</div>
<div className="custom-select">
                <RangeControl
                  label={
                    <>
                     <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z"/></svg>
                      {__("Motion Transition", "cocoblocks")}
                    </>
                  }
                  value={transitionParalaxMouse}
                  onChange={(value) =>
                    setAttributes({
                      transitionParalaxMouse: value,
                    })
                  }
                  min={0}
                  max={4}
                  step={0.1}
                />
              </div>
              </>
              )}
            </div>
          </div>
          </>
      )}
    </>
  );
};

export default SliderControls;
