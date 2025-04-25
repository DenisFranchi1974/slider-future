import {
  Notice,
  Button,
  CheckboxControl,
  ButtonGroup,
  TabPanel,
  FocalPointPicker,
} from "@wordpress/components";
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";
import SectionSliderSelector from "./multitab/sectionSliderSelector";
import ColorOptionsPanel from "./colorPanel";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import TabletMacIcon from "@mui/icons-material/TabletMac";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import CustomSelectControl from "../controls/select/CustomSelectControl";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import CustomRangeControl from "../controls/range/CustomRangeControl";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import CalendarViewWeekIcon from "@mui/icons-material/CalendarViewWeek";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import CustomToggleControl from "../controls/toggle/CustomToggleControl";
import HeightIcon from "@mui/icons-material/Height";
import CompressIcon from "@mui/icons-material/Compress";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import VibrationIcon from "@mui/icons-material/Vibration";
import PaletteIcon from "@mui/icons-material/Palette";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import BorderInnerIcon from "@mui/icons-material/BorderInner";
import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop";
import MarginIcon from "@mui/icons-material/Margin";
import ColorizeIcon from "@mui/icons-material/Colorize";
import CommentIcon from "@mui/icons-material/Comment";
import MouseIcon from "@mui/icons-material/Mouse";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import TonalityIcon from "@mui/icons-material/Tonality";
import AnimationIcon from "@mui/icons-material/Animation";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import { optionsPerView } from "../assets/options";
import { optionsPerGroup } from "../assets/options";
import { optionsInitialSlide } from "../assets/options";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import ChangeCircleOutlinedIcon from "@mui/icons-material/ChangeCircleOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ImageSelectionModal from "./ImageSelectionModal";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import ProTooltip from "./ProTooltip";
import ProNotice from "./ProNotice";

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
    slideHeightTablet,
    slideHeightMobile,
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
    fitImage,
    rangeVapore,
  } = attributes;

  const [selectedTab, setSelectedTab] = useState("color");

  const updateBackgroundImage = (url) => {
    setAttributes({ backgroundImage: url });
  };

  const removeBackgroundImage = () => {
    setAttributes({ backgroundImage: null });
  };

  const handleFocalPointChange = (newFocalPoint) => {
    setAttributes({ focalPoint: newFocalPoint });
  };

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

  // Responsive height
  const [deviceHeight, setDeviceHeight] = useState("desktop");
  const [showOtherButtonsHeight, setShowOtherButtonsHeight] = useState(false);
  const handleDesktopClickHeight = () => {
    setAttributes({ deviceHeight: "desktop" });
    setDeviceHeight("desktop");
    setShowOtherButtonsHeight(!showOtherButtonsHeight); // Toggle the visibility of other buttons
  };

  const handleTabletClickHeight = () => {
    setAttributes({ deviceHeight: "tablet" });
    setDeviceHeight("tablet");
    setShowOtherButtonsHeight(!showOtherButtonsHeight); // Toggle the visibility of other buttons
  };

  const handleMobileClickHeight = () => {
    setAttributes({ deviceHeight: "mobile" });
    setDeviceHeight("mobile");
    setShowOtherButtonsHeight(!showOtherButtonsHeight); // Toggle the visibility of other buttons
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

  useEffect(() => {
    if (attributes.contentType !== "custom") {
      const apiUrl =
        attributes.contentType === "woocommerce-based"
          ? `${window.wpApiSettings.root}slider_future/v1/get-products/`
          : `${window.wpApiSettings.root}slider_future/v1/get-posts/`;

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          if (Array.isArray(data) && data.length > 0) {
            setAttributes({ notice: null });
          } else {
            if (attributes.contentType === "woocommerce-based") {
              setAttributes({
                notice:
                  "This feature will be available soon; we are working on it!",
              });
            } else {
              setAttributes({ notice: null });
            }
          }
        })
        .catch((error) => {
          if (attributes.contentType === "woocommerce-based") {
            setAttributes({
              notice:
                "Error retrieving products. Make sure WooCommerce is installed and active.",
            });
          } else {
            setAttributes({ notice: null });
          }
        });
    }
  }, [attributes.contentType]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageSelect = async (image) => {
    if (!image || !image.url) {
      console.error("Nessuna immagine selezionata o URL mancante.");
      return;
    }

    setIsLoading(true);

    try {
      // Effettua la chiamata all'endpoint REST API per caricare l'immagine
      const response = await fetch("/wp-json/slider-future/v1/upload-image/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image_url: image.url }),
      });

      // Controlla lo stato della risposta
      if (!response.ok) {
        throw new Error(`Error API: ${response.statusText}`);
      }
      const data = await response.json();

      // Verifica se l'immagine è stata caricata con successo
      if (data?.url) {
        // Aggiorna lo sfondo della slider con l'immagine caricata
        updateBackgroundImage(data.url);
      } else {
        console.error("Error loading image. Invalid response:", data);
      }
    } catch (error) {
      console.error("Error while calling API:", error);
    } finally {
      setIsLoading(false);
      setIsModalOpen(false);
    }
  };

  const [isProFeature, setIsProFeature] = useState(true);

  useEffect(() => {
    if (typeof window.isProFeature !== "undefined") {
      setIsProFeature(window.isProFeature);
    }
  }, []);

  const filteredOptionsPerView = isProFeature
    ? optionsPerView.slice(0, 5)
    : optionsPerView;

  const filteredOptionsPerRow = isProFeature
    ? optionsPerGroup.slice(0, 5)
    : optionsPerGroup;

  // Section slider
  const [activeSection, setActiveSectionSlider] = useState("layout");

  return (
    <>
      <div className="content-subdescription-section-slider">
        <h2>{__("General Options")}</h2>
      </div>
      <SectionSliderSelector onSectionChange={setActiveSectionSlider} />
      {activeSection === "layout" && (
        <>
          <div
            className="content-title-custom-panel"
            style={{ justifyContent: "space-between" }}
          >
            <h2 className="title-custom-panel">
              {__("Layout Area", "slider-future")}
            </h2>
            <ButtonGroup className="device-switcher-slider">
              <Button
                size="small"
                isPressed={device === "desktop"}
                onClick={handleDesktopClick}
                className={device !== "desktop" ? "inactive" : ""}
              >
                <PersonalVideoIcon />
              </Button>

              <>
                <Button
                  size="small"
                  isPressed={device === "tablet"}
                  onClick={handleTabletClick}
                  className={device !== "tablet" ? "inactive" : ""}
                >
                  <TabletMacIcon />
                </Button>
                <Button
                  size="small"
                  isPressed={device === "mobile"}
                  onClick={handleMobileClick}
                  className={device !== "mobile" ? "inactive" : ""}
                >
                  <SmartphoneIcon />
                </Button>
              </>
            </ButtonGroup>
          </div>
          <div className="slider-future-panel content-section-custom-panel">
            {device === "desktop" && (
              <>
                <div className="content-section-panel">
                  <div
                    className="custom-select select-button-device-slider"
                    style={{ textAlign: "right" }}
                  >
                    <PersonalVideoIcon sx={{ fontSize: 16 }} />
                  </div>
                  <CustomSelectControl
                    label={
                      <>
                        <ViewColumnIcon />
                        {__("Slides per view", "slider-future")}
                      </>
                    }
                    value={perViewSlider}
                    options={filteredOptionsPerView}
                    showTooltip={true}
                    tooltipTop={"10px"}
                    tooltipLeft={"50%"}
                    tooltipText={__(
                      "Number of slides per view in Desktop (1024px). Slides visible at the same time on slider's container.",
                      "slider-future"
                    )}
                    onChange={(val) => {
                      setAttributes({ perViewSlider: val });
                    }}
                  />
                  {perViewSlider == "auto" && (
                    <p
                      className="notice components-base-control__help"
                      style={{ borderRadius: 0, margin: "0" }}
                    >
                      {__(
                        "The width of the slides is dynamic and adapts to the content. This is useful when slides have variable widths or when you want slides to dynamically adapt to available space.",
                        "slider-future"
                      )}
                    </p>
                  )}
                  <CustomRangeControl
                    label={
                      <>
                        <SettingsEthernetIcon />
                        {__("Space Between Slides", "slider-future")}
                      </>
                    }
                    value={spaceBetween}
                    onChange={(val) => setAttributes({ spaceBetween: val })}
                    min={0}
                    max={100}
                    step={1}
                  />
                  <CustomSelectControl
                    label={
                      <>
                        <CalendarViewWeekIcon />
                        {__("Slides per group", "slider-future")}
                      </>
                    }
                    value={slidesPerGroupDesktop}
                    options={filteredOptionsPerRow}
                    showTooltip={true}
                    tooltipTop={"10px"}
                    tooltipLeft={"50%"}
                    tooltipText={__(
                      "The number of slides that should be grouped together for navigation.(Desktop)",
                      "slider-future"
                    )}
                    onChange={(val) => {
                      setAttributes({ slidesPerGroupDesktop: val });
                    }}
                  />
                  <CustomSelectControl
                    label={
                      <>
                        <ViewModuleIcon />
                        {__("Slides rows", "slider-future")}
                      </>
                    }
                    value={slidesPerRow}
                    options={filteredOptionsPerRow}
                    showTooltip={true}
                    tooltipTop={"10px"}
                    tooltipLeft={"50%"}
                    tooltipText={__(
                      "Number of slider rows, for multirow layout.",
                      "slider-future"
                    )}
                    onChange={(val) => {
                      setAttributes({ slidesPerRow: val });
                    }}
                  />
                  {slidesPerRow !== "1" && (
                    <p className="notice components-base-control__help">
                      {__(
                        'Please note that this choice influences how the slider is displayed in responsive mode. Specifically, it may impact the functionality of "per view" controls on responsive devices. Due to the nature of the row layout, some responsive "per view" settings may not have the expected effect. It\'s recommended to test your slider across different screen sizes to ensure the desired display and functionality.',
                        "slider-future"
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
                        "slider-future"
                      )}
                    </Notice>
                  )}
                </div>
              </>
            )}

            {device === "tablet" && (
              <>
                <div className="content-section-panel">
                  <div
                    className="custom-select select-button-device-slider"
                    style={{ textAlign: "right" }}
                  >
                    <TabletMacIcon sx={{ fontSize: 16 }} />
                  </div>
                  <CustomSelectControl
                    label={
                      <>
                        <ViewColumnIcon />
                        {__("Slides per view", "slider-future")}
                      </>
                    }
                    value={perViewSliderTablet}
                    options={filteredOptionsPerView}
                    showTooltip={true}
                    tooltipTop={"10px"}
                    tooltipLeft={"50%"}
                    tooltipText={__(
                      "Number of slides per view in Tablet (768px). Slides visible at the same time on slider's container.",
                      "slider-future"
                    )}
                    onChange={(val) => {
                      setAttributes({ perViewSliderTablet: val });
                    }}
                  />
                  {perViewSliderTablet == "auto" && (
                    <p className="notice components-base-control__help">
                      {__(
                        "The width of the slides is dynamic and adapts to the content. This is useful when slides have variable widths or when you want slides to dynamically adapt to available space.",
                        "slider-future"
                      )}
                    </p>
                  )}
                  <CustomRangeControl
                    label={
                      <>
                        <SettingsEthernetIcon />
                        {__("Space Between Slides", "slider-future")}
                      </>
                    }
                    value={spaceBetweenTablet}
                    onChange={(val) =>
                      setAttributes({ spaceBetweenTablet: val })
                    }
                    min={0}
                    max={100}
                    step={1}
                  />
                  <CustomSelectControl
                    label={
                      <>
                        <CalendarViewWeekIcon />
                        {__("Slides per group", "slider-future")}
                      </>
                    }
                    value={slidesPerGroupTablet}
                    options={filteredOptionsPerRow}
                    showTooltip={true}
                    tooltipTop={"10px"}
                    tooltipLeft={"50%"}
                    tooltipText={__(
                      "The number of slides that should be grouped together for navigation.(Tablet)",
                      "slider-future"
                    )}
                    onChange={(val) => {
                      setAttributes({ slidesPerGroupTablet: val });
                    }}
                  />
                </div>
              </>
            )}

            {device === "mobile" && (
              <>
                <div className="content-section-panel">
                  <div
                    className="custom-select select-button-device-slider"
                    style={{ textAlign: "right" }}
                  >
                    <SmartphoneIcon sx={{ fontSize: 16 }} />
                  </div>
                  <CustomSelectControl
                    label={
                      <>
                        <ViewColumnIcon />
                        {__("Slides per view", "slider-future")}
                      </>
                    }
                    value={perViewSliderMobile}
                    options={filteredOptionsPerView}
                    showTooltip={true}
                    tooltipTop={"10px"}
                    tooltipLeft={"50%"}
                    tooltipText={__(
                      "Number of slides per view in Mobile (640px). Slides visible at the same time on slider's container.",
                      "slider-future"
                    )}
                    onChange={(val) => {
                      setAttributes({ perViewSliderMobile: val });
                    }}
                  />
                  {perViewSliderMobile == "auto" && (
                    <p className="notice components-base-control__help">
                      {__(
                        "The width of the slides is dynamic and adapts to the content. This is useful when slides have variable widths or when you want slides to dynamically adapt to available space.",
                        "slider-future"
                      )}
                    </p>
                  )}
                  <CustomRangeControl
                    label={
                      <>
                        <SettingsEthernetIcon />
                        {__("Space Between Slides", "slider-future")}
                      </>
                    }
                    value={spaceBetweenMobile}
                    onChange={(val) =>
                      setAttributes({ spaceBetweenMobile: val })
                    }
                    min={0}
                    max={100}
                    step={1}
                  />
                  <CustomSelectControl
                    label={
                      <>
                        <CalendarViewWeekIcon />
                        {__("Slides per group", "slider-future")}
                      </>
                    }
                    value={slidesPerGroupMobile}
                    options={filteredOptionsPerRow}
                    showTooltip={true}
                    tooltipTop={"10px"}
                    tooltipLeft={"50%"}
                    tooltipText={__(
                      "The number of slides that should be grouped together for navigation.(Mobile)",
                      "slider-future"
                    )}
                    onChange={(val) => {
                      setAttributes({ slidesPerGroupMobile: val });
                    }}
                  />
                </div>
              </>
            )}
            <div className="content-title-custom-panel intermedy">
              <h2 className="title-custom-panel">
                {__("Layout Size", "slider-future")}
              </h2>
            </div>
            <div className="content-section-panel">
              <CustomToggleControl
                label={
                  <>
                    <HeightIcon />
                    {__("Auto height", "slider-future")}
                  </>
                }
                checked={autoHeight}
                onChange={(value) => setAttributes({ autoHeight: value })}
                showTooltip={true}
                tooltipText={__(
                  "Enable and slider wrapper will adapt its height to the height of the currently active slide",
                  "slider-future"
                )}
                tooltipTop={"11px"}
                tooltipLeft={"40%"}
              />
              {!autoHeight && (
                <>
                  <ButtonGroup className="device-switcher-slider">
                    <Button
                      size="small"
                      isPressed={deviceHeight === "desktop"}
                      onClick={handleDesktopClickHeight}
                      className={deviceHeight !== "desktop" ? "inactive" : ""}
                    >
                      <PersonalVideoIcon />
                    </Button>

                    <>
                      <Button
                        size="small"
                        isPressed={deviceHeight === "tablet"}
                        onClick={handleTabletClickHeight}
                        className={deviceHeight !== "tablet" ? "inactive" : ""}
                      >
                        <TabletMacIcon />
                      </Button>
                      <Button
                        size="small"
                        isPressed={deviceHeight === "mobile"}
                        onClick={handleMobileClickHeight}
                        className={deviceHeight !== "mobile" ? "inactive" : ""}
                      >
                        <SmartphoneIcon />
                      </Button>
                    </>
                  </ButtonGroup>
                  {deviceHeight === "desktop" && (
                    <CustomRangeControl
                      label={
                        <>
                          <PersonalVideoIcon />
                          {__("Custom Height", "slider-future")}
                        </>
                      }
                      value={slideHeight}
                      onChange={(val) => setAttributes({ slideHeight: val })}
                      min={10}
                      max={1200}
                      step={1}
                    />
                  )}
                  {deviceHeight === "tablet" && (
                    <CustomRangeControl
                      label={
                        <>
                          <TabletMacIcon />
                          {__("Custom Height", "slider-future")}
                        </>
                      }
                      value={slideHeightTablet}
                      onChange={(val) =>
                        setAttributes({ slideHeightTablet: val })
                      }
                      min={10}
                      max={1200}
                      step={1}
                    />
                  )}
                  {deviceHeight === "mobile" && (
                    <CustomRangeControl
                      label={
                        <>
                          <SmartphoneIcon />
                          {__("Custom Height", "slider-future")}
                        </>
                      }
                      value={slideHeightMobile}
                      onChange={(val) =>
                        setAttributes({ slideHeightMobile: val })
                      }
                      min={10}
                      max={1200}
                      step={1}
                    />
                  )}
                </>
              )}
            </div>
            <div className="content-title-custom-panel intermedy">
              <h2 className="title-custom-panel">
                {__("Advanced Settings", "slider-future")}
              </h2>
            </div>
            <div
              className={`content-section-panel ${
                isProFeature ? "hover-pro" : ""
              }`}
              style={{ position: "relative" }}
            >
              <CustomToggleControl
                label={
                  <>
                    <CompressIcon sx={{ transform: "rotate(90deg)" }} />
                    {__("Centered slides", "slider-future")}
                  </>
                }
                checked={centeredSlides}
                onChange={(value) => setAttributes({ centeredSlides: value })}
                showTooltip={true}
                tooltipText={__(
                  "If enabled, then active slide will be centered, not always on the left side.",
                  "slider-future"
                )}
                tooltipTop={"11px"}
                tooltipLeft={"60%"}
                disabled={isProFeature}
              />
              {isProFeature && (
                <ProTooltip tooltipProTop={"14px"} tooltipProRight={"38px"} />
              )}
            </div>
          </div>
        </>
      )}

      {activeSection === "general" && (
        <>
          <div className="content-title-custom-panel">
            <h2 className="title-custom-panel">
              {__("General", "slider-future")}
            </h2>
          </div>
          <div className="slider-future-panel content-section-custom-panel">
            <div className="content-section-panel">
              <CustomSelectControl
                label={
                  <>
                    <LinearScaleIcon />
                    {__("Initial slide", "slider-future")}
                  </>
                }
                value={initialSlide}
                options={optionsInitialSlide}
                showTooltip={true}
                tooltipTop={"10px"}
                tooltipLeft={"50%"}
                tooltipText={__(
                  "Index number of initial slide.(Starts from 0)",
                  "slider-future"
                )}
                onChange={(val) => {
                  setAttributes({ initialSlide: val });
                }}
              />
            </div>

            <div
              className={`content-section-panel ${
                isProFeature ? "hover-pro" : ""
              }`}
              style={{ position: "relative" }}
            >
              <CustomToggleControl
                label={
                  <>
                    <VibrationIcon />
                    {__("Free mode", "slider-future")}
                  </>
                }
                checked={freeMode}
                onChange={(value) => setAttributes({ freeMode: value })}
                showTooltip={true}
                tooltipText={__("Doesn't work in the editor!", "slider-future")}
                tooltipTop={"11px"}
                tooltipLeft={"40%"}
                disabled={isProFeature}
              />
              {isProFeature && (
                <ProTooltip tooltipProTop={"14px"} tooltipProRight={"38px"} />
              )}
              {freeMode == true && (
                <>
                  <div className="content-section-panel">
                    <CustomToggleControl
                      label={__("Sticky", "slider-future")}
                      checked={stickyFreeMode}
                      onChange={(value) =>
                        setAttributes({ stickyFreeMode: value })
                      }
                      showTooltip={true}
                      tooltipText={__(
                        "Enables Snap to slides positions in free mode",
                        "slider-future"
                      )}
                      tooltipTop={"11px"}
                      tooltipLeft={"40%"}
                    />
                    <CustomToggleControl
                      label={__("Momentum", "slider-future")}
                      checked={momentumFreeMode}
                      onChange={(value) =>
                        setAttributes({ momentumFreeMode: value })
                      }
                      showTooltip={true}
                      tooltipText={__(
                        "If enabled, then slide will keep moving for a while you release it after",
                        "slider-future"
                      )}
                      tooltipTop={"11px"}
                      tooltipLeft={"40%"}
                    />
                    <CustomToggleControl
                      label={__("Momentum bounce", "slider-future")}
                      checked={momentumBounceFreeMode}
                      onChange={(value) =>
                        setAttributes({ momentumBounceFreeMode: value })
                      }
                      showTooltip={true}
                      tooltipText={__(
                        "Enables momentum bounce in free mode",
                        "slider-future"
                      )}
                      tooltipTop={"11px"}
                      tooltipLeft={"60%"}
                    />
                    <CustomRangeControl
                      label={__("Momentum bounce ratio", "slider-future")}
                      value={momentumBounceRatioFreeMode}
                      onChange={(val) =>
                        setAttributes({ momentumBounceRatioFreeMode: val })
                      }
                      min={0.1}
                      max={3}
                      step={0.1}
                      showTooltip={true}
                      tooltipText={__(
                        "Higher value produces larger momentum bounce effect",
                        "slider-future"
                      )}
                      tooltipTop={"2px"}
                      tooltipLeft={"64%"}
                    />
                    <CustomRangeControl
                      label={__("Momentum ratio", "slider-future")}
                      value={momentumRatioFreeMode}
                      onChange={(val) =>
                        setAttributes({ momentumRatioFreeMode: val })
                      }
                      min={0.1}
                      max={3}
                      step={0.1}
                      showTooltip={true}
                      tooltipText={__(
                        "Higher value produces larger momentum distance after you release sldier",
                        "slider-future"
                      )}
                      tooltipTop={"2px"}
                      tooltipLeft={"50%"}
                    />
                    <CustomRangeControl
                      label={__("Momentum velocity ratio", "slider-future")}
                      value={momentumVelocityRatioFreeMode}
                      onChange={(val) =>
                        setAttributes({ momentumVelocityRatioFreeMode: val })
                      }
                      min={0.1}
                      max={3}
                      step={0.1}
                      showTooltip={true}
                      tooltipText={__(
                        "Higher value produces larger momentum velocity after you release sldier",
                        "slider-future"
                      )}
                      tooltipTop={"2px"}
                      tooltipLeft={"64%"}
                    />
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
              {__("Background", "slider-future")}
            </h2>
          </div>
          <div className="slider-future-panel content-section-custom-panel">
            <div
              className="content-section-panel"
              style={{ position: "relative" }}
            >
              {isProFeature && <ProTooltip />}
              <TabPanel
                className="background-selector"
                activeClass="active-tab"
                initialTabName="color"
                onSelect={(tabName) => setSelectedTab(tabName)}
                tabs={[
                  {
                    name: "color",
                    title: <span>{__("Color", "slider-future")}</span>,
                    className: "tab-color",
                  },
                  {
                    name: "image",
                    title: (
                      <span
                        onMouseEnter={() => {
                          const icon =
                            document.querySelector(".tooltip-icon-pro");
                          icon.classList.add("shake");
                        }}
                        onMouseLeave={() => {
                          const icon =
                            document.querySelector(".tooltip-icon-pro");
                          icon.classList.remove("shake");
                        }}
                      >
                        {__("Image", "slider-future")}
                      </span>
                    ),
                    className: `tab-image ${isProFeature ? "no-color" : ""}`,
                    disabled: isProFeature,
                  },
                ]}
              >
                {(tab) => (
                  <div>
                    {tab.name === "color" && (
                      <>
                        <div className="custom-select color">
                          <ColorOptionsPanel
                            colorNormal={backgroundColor}
                            setColorNormal={(color) =>
                              setAttributes({ backgroundColor: color })
                            }
                            buttonTitle={__(
                              "Background Color",
                              "slider-future"
                            )}
                            buttonIcon={
                              <PaletteIcon
                                style={{
                                  marginBottom: "-5px",
                                  width: "20px",
                                  height: "20px",
                                }}
                              />
                            }
                          />
                        </div>
                      </>
                    )}
                    {tab.name === "image" && (
                      <div
                        className="content-img-upload"
                        style={{ marginTop: "6px" }}
                      >
                        <MediaUploadCheck>
                          <MediaUpload
                            onSelect={(media) =>
                              updateBackgroundImage(media.url)
                            }
                            allowedTypes={["image"]}
                            render={({ open }) => (
                              <>
                                {!backgroundImage && (
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
                                          <PhotoSizeSelectActualIcon
                                            style={{ width: "18px" }}
                                          />
                                          {__("Media Library", "slider-future")}
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
                                          <PhotoLibraryIcon
                                            style={{ width: "18px" }}
                                          />
                                          {__(
                                            "Object Library",
                                            "slider-future"
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
                                    </div>
                                  </>
                                )}
                                {backgroundImage && (
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
                                        value={focalPoint || { x: 0.5, y: 0.5 }}
                                        onChange={handleFocalPointChange}
                                        url={backgroundImage}
                                      />
                                    </div>
                                    <CustomSelectControl
                                      label={
                                        <>
                                          <FitScreenIcon />
                                          {__("Image fit", "slider-future")}
                                        </>
                                      }
                                      value={fitImage}
                                      options={[
                                        {
                                          label: __("Cover", "slider-future"),
                                          value: "cover",
                                        },
                                        {
                                          label: __("Auto", "slider-future"),
                                          value: "auto",
                                        },
                                        {
                                          label: __("Contain", "slider-future"),
                                          value: "contain",
                                        },
                                      ]}
                                      onChange={(val) =>
                                        setAttributes({ fitImage: val })
                                      }
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
                                        color: " var(--light-color)",
                                      }}
                                      className="button-replace"
                                      icon={<ChangeCircleOutlinedIcon />}
                                      label={__(
                                        "Change Image from Object Library",
                                        "slider-future"
                                      )}
                                    />
                                  </>
                                )}
                              </>
                            )}
                          />
                        </MediaUploadCheck>
                        {backgroundImage && (
                          <Button
                            onClick={removeBackgroundImage}
                            isDestructive
                            className="button-delete"
                            icon={<DeleteOutlineIcon />}
                            label={__("Delete Image", "slider-future")}
                          ></Button>
                        )}
                      </div>
                    )}
                    {isModalOpen && (
                      <ImageSelectionModal
                        onClose={closeModal}
                        onSelect={handleImageSelect}
                      />
                    )}
                  </div>
                )}
              </TabPanel>

              <CustomSelectControl
                label={
                  <>
                    <VisibilityOffIcon />
                    {__("Overflow", "slider-future")}
                  </>
                }
                value={overflow}
                options={[
                  {
                    label: __("Visible", "slider-future"),
                    value: "visible",
                  },
                  {
                    label: __("Hidden", "slider-future"),
                    value: "hidden",
                  },
                ]}
                onChange={(val) => {
                  setAttributes({ overflow: val });
                }}
              />
            </div>
            <div className="content-title-custom-panel intermedy">
              <h2 className="title-custom-panel">
                {__("Border", "slider-future")}
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
                  buttonTitle={__("Border Color", "slider-future")}
                  buttonIcon={<BorderColorIcon />}
                />
              </div>
              <CustomRangeControl
                label={
                  <>
                    {" "}
                    <MarginIcon />
                    {__("Border width", "slider-future")}
                  </>
                }
                value={backgroundBorderSize}
                onChange={(val) => setAttributes({ backgroundBorderSize: val })}
                min={0}
                max={20}
                step={1}
              />
              <CustomRangeControl
                label={
                  <>
                    {" "}
                    <BorderInnerIcon />
                    {__("Border radius", "slider-future")}
                  </>
                }
                value={backgroundBorderRadius}
                onChange={(val) =>
                  setAttributes({ backgroundBorderRadius: val })
                }
                min={0}
                max={256}
                step={1}
              />
            </div>
            <div className="content-title-custom-panel intermedy">
              <h2 className="title-custom-panel">
                {__("Spacing", "slider-future")}
              </h2>
            </div>
            <div className="content-section-panel" style={{ padding: "0" }}>
              <ButtonGroup
                className="device-switcher-slider"
                style={{
                  marginBottom: "6px",
                  paddingTop: "12px",
                  marginRight: "0",
                }}
              >
                <Button
                  size="small"
                  isPressed={device === "desktop"}
                  onClick={handleDesktopClick}
                  className={device !== "desktop" ? "inactive" : ""}
                >
                  <PersonalVideoIcon />
                </Button>

                <>
                  <Button
                    size="small"
                    isPressed={device === "tablet"}
                    onClick={handleTabletClick}
                    className={device !== "tablet" ? "inactive" : ""}
                  >
                    <TabletMacIcon />
                  </Button>
                  <Button
                    size="small"
                    isPressed={device === "mobile"}
                    onClick={handleMobileClick}
                    className={device !== "mobile" ? "inactive" : ""}
                  >
                    <SmartphoneIcon />
                  </Button>
                </>
              </ButtonGroup>
              {device === "desktop" && (
                <>
                  <CustomRangeControl
                    label={
                      <>
                        {" "}
                        <VerticalAlignTopIcon />
                        {__("Vertical padding", "slider-future")}
                      </>
                    }
                    value={backgroundVerticalPadding}
                    onChange={(val) =>
                      setAttributes({ backgroundVerticalPadding: val })
                    }
                    min={0}
                    max={256}
                    step={1}
                  />
                  <CustomRangeControl
                    label={
                      <>
                        {" "}
                        <VerticalAlignTopIcon
                          style={{
                            transform: "rotate(90deg)",
                          }}
                        />
                        {__("Horizontal padding", "slider-future")}
                      </>
                    }
                    value={backgroundHorizontalPadding}
                    onChange={(val) =>
                      setAttributes({ backgroundHorizontalPadding: val })
                    }
                    min={0}
                    max={256}
                    step={1}
                  />
                </>
              )}
              {device === "tablet" && (
                <>
                  <CustomRangeControl
                    label={
                      <>
                        {" "}
                        <VerticalAlignTopIcon />
                        {__("Vertical padding Tablet", "slider-future")}
                      </>
                    }
                    value={backgroundVerticalPaddingTablet}
                    onChange={(val) =>
                      setAttributes({ backgroundVerticalPaddingTablet: val })
                    }
                    min={0}
                    max={256}
                    step={1}
                  />
                  <CustomRangeControl
                    label={
                      <>
                        {" "}
                        <VerticalAlignTopIcon
                          style={{
                            transform: "rotate(90deg)",
                          }}
                        />
                        {__("Horizontal padding Tablet", "slider-future")}
                      </>
                    }
                    value={backgroundHorizontalPaddingTablet}
                    onChange={(val) =>
                      setAttributes({ backgroundHorizontalPaddingTablet: val })
                    }
                    min={0}
                    max={256}
                    step={1}
                  />
                </>
              )}
              {device === "mobile" && (
                <>
                  <CustomRangeControl
                    label={
                      <>
                        {" "}
                        <VerticalAlignTopIcon />
                        {__("Vertical padding Mobile", "slider-future")}
                      </>
                    }
                    value={backgroundVerticalPaddingMobile}
                    onChange={(val) =>
                      setAttributes({ backgroundVerticalPaddingMobile: val })
                    }
                    min={0}
                    max={256}
                    step={1}
                  />
                  <CustomRangeControl
                    label={
                      <>
                        {" "}
                        <VerticalAlignTopIcon
                          style={{
                            transform: "rotate(90deg)",
                          }}
                        />
                        {__("Horizontal padding Mobile", "slider-future")}
                      </>
                    }
                    value={backgroundHorizontalPaddingMobile}
                    onChange={(val) =>
                      setAttributes({ backgroundHorizontalPaddingMobile: val })
                    }
                    min={0}
                    max={256}
                    step={1}
                  />
                </>
              )}
              {(backgroundHorizontalPadding > 0 ||
                backgroundHorizontalPaddingTablet > 0 ||
                backgroundHorizontalPaddingMobile > 0) && (
                <p
                  className="notice components-base-control__help"
                  style={{ margin: "0" }}
                >
                  {__(
                    'Warning: if you set space here you also need to adjust "Space between slides"!',
                    "slider-future"
                  )}
                </p>
              )}
            </div>
            <div className="content-section-panel" style={{ padding: "0" }}>
              <CustomRangeControl
                label={
                  <>
                    {" "}
                    <VerticalAlignTopIcon />
                    {__("Margin Top", "slider-future")}
                  </>
                }
                value={sliderMarginTop}
                onChange={(val) => setAttributes({ sliderMarginTop: val })}
                min={-200}
                max={200}
                step={1}
              />
              <CustomRangeControl
                label={
                  <>
                    <VerticalAlignTopIcon
                      style={{
                        transform: "rotate(180deg)",
                      }}
                    />
                    {__("Margin Bottom", "slider-future")}
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
        </>
      )}
      {activeSection === "content" && (
        <>
          <div className="content-title-custom-panel">
            <h2 className="title-custom-panel">
              {__("Content", "slider-future")}
            </h2>
          </div>
          <div className="slider-future-panel content-section-custom-panel">
            <div className="content-section-panel">
              <CustomSelectControl
                label={
                  <>
                    <CommentIcon />
                    {__("Content Type", "slider-future")}
                  </>
                }
                value={attributes.contentType}
                options={[
                  { label: __("Custom", "slider-future"), value: "custom" },
                  {
                    label: __("Post Based", "slider-future"),
                    value: "post-based",
                  },
                  ...(!isProFeature
                    ? [
                        {
                          label: __("WooCommerce", "slider-future"),
                          value: "woocommerce-based",
                        },
                      ]
                    : []),
                  ...(isProFeature
                    ? [
                        {
                          label: __("WooCommerce", "slider-future"),
                          value: "woocommerce-pro",
                        },
                      ]
                    : []),
                ]}
                onChange={(value) => setAttributes({ contentType: value })}
              />
              {attributes.contentType === "woocommerce-based" &&
                attributes.notice && (
                  <div
                    className="notice components-base-control__help"
                    style={{ margin: 0 }}
                  >
                    <p>{attributes.notice}</p>
                  </div>
                )}
              {attributes.contentType === "woocommerce-pro" && <ProNotice />}
              {attributes.contentType === "custom" && (
                <p
                  className="notice components-base-control__help"
                  style={{ margin: 0 }}
                >
                  {__(
                    "No further source settings needed. Content is created manually.",
                    "slider-future"
                  )}
                </p>
              )}
            </div>
          </div>
        </>
      )}
      {activeSection === "skin" && (
        <>
          <div className="content-title-custom-panel">
            <h2 className="title-custom-panel">
              {__("Global color skin", "slider-future")}
            </h2>
          </div>
          <div className="slider-future-panel content-section-custom-panel">
            <div className="content-section-panel">
              <div className="custom-select color">
                <ColorOptionsPanel
                  colorNormal={backgroundColorSlideDefault}
                  setColorNormal={(color) =>
                    setAttributes({ backgroundColorSlideDefault: color })
                  }
                  buttonTitle={__("Background Color Slide", "slider-future")}
                  buttonIcon={<ColorizeIcon />}
                />
              </div>
              <div className="custom-select color">
                <ColorOptionsPanel
                  colorNormal={backgroundColorBlockDefault}
                  setColorNormal={(color) =>
                    setAttributes({ backgroundColorBlockDefault: color })
                  }
                  buttonTitle={__("Background Color Block", "slider-future")}
                  buttonIcon={<ColorizeIcon />}
                />
              </div>
              <div className="custom-select color">
                <ColorOptionsPanel
                  colorNormal={textColorDefault}
                  setColorNormal={(color) =>
                    setAttributes({ textColorDefault: color })
                  }
                  buttonTitle={__("Text Color", "slider-future")}
                  buttonIcon={<ColorizeIcon />}
                />
              </div>
              <div className="custom-select color">
                <ColorOptionsPanel
                  colorNormal={innerTextColorDefault}
                  setColorNormal={(color) =>
                    setAttributes({ innerTextColorDefault: color })
                  }
                  buttonTitle={__("Inner Text Color", "slider-future")}
                  buttonIcon={<ColorizeIcon />}
                />
              </div>
            </div>
          </div>
        </>
      )}
      {activeSection === "mouse-effect" && (
        <>
          <div className="content-title-custom-panel">
            <h2 className="title-custom-panel">
              {__("Mouse Effect", "slider-future")}
            </h2>
          </div>
          <div className="slider-future-panel content-section-custom-panel">
            <div
              className={`content-section-panel ${
                isProFeature ? "hover-pro" : ""
              }`}
              style={{ position: "relative" }}
            >
              <CustomSelectControl
                label={
                  <>
                    <MouseIcon />
                    {__("Choose the effect", "slider-future")}
                  </>
                }
                value={mouseEffect}
                onChange={(value) => setAttributes({ mouseEffect: value })}
                options={[
                  { label: __("None", "slider-future"), value: "none" },
                  { label: __("Particle", "slider-future"), value: "particle" },
                  {
                    label: __("Smoke", "slider-future"),
                    value: "smoke",
                  },
                  {
                    label: __("Parallax", "slider-future"),
                    value: "parallax",
                  },
                  {
                    label: __("Liquid", "slider-future"),
                    value: "liquid",
                  },
                ]}
                disabled={isProFeature}
              />
              {isProFeature && (
                <ProTooltip tooltipProTop={"13px"} tooltipProRight={"92px"} />
              )}
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
                    "slider-future"
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
                      buttonTitle={__("Color Effect Start", "slider-future")}
                      buttonIcon={<ColorizeIcon />}
                    />
                  </div>
                </>
              )}
              {mouseEffect === "particle" && (
                <>
                  <div className="custom-select color">
                    <ColorOptionsPanel
                      colorNormal={colorEffectMiddle}
                      setColorNormal={(color) =>
                        setAttributes({ colorEffectMiddle: color })
                      }
                      buttonTitle={__("Color Effect Middle", "slider-future")}
                      buttonIcon={<ColorizeIcon />}
                    />
                  </div>
                  <div className="custom-select color">
                    <ColorOptionsPanel
                      colorNormal={colorEffectEnd}
                      setColorNormal={(color) =>
                        setAttributes({ colorEffectEnd: color })
                      }
                      buttonTitle={__("Color Effect End", "slider-future")}
                      buttonIcon={<ColorizeIcon />}
                    />
                  </div>
                </>
              )}
              {mouseEffect === "liquid" && (
                <>
                  <CustomRangeControl
                    label={
                      <>
                        <ZoomOutMapIcon />
                        {__("Liquid size", "slider-future")}
                      </>
                    }
                    value={rangeVapore}
                    onChange={(value) =>
                      setAttributes({
                        rangeVapore: value,
                      })
                    }
                    min={100}
                    max={2500}
                    step={10}
                    showTooltip={true}
                    tooltipText={__(
                      "Set a smaller number to make bigger liquid!",
                      "slider-future"
                    )}
                    tooltipTop={"3px"}
                    tooltipLeft={"50%"}
                  />
                  <CustomRangeControl
                    label={
                      <>
                        <ColorizeIcon />
                        {__("Adjust Hue (H)", "slider-future")}
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
                  <CustomRangeControl
                    label={
                      <>
                        <WbSunnyIcon />
                        {__("Adjust Saturation (S)", "slider-future")}
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
                  <CustomRangeControl
                    label={
                      <>
                        <TonalityIcon />
                        {__("Adjust Value (V)", "slider-future")}
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
                  <p
                    className="notice components-base-control__help"
                    style={{
                      borderRadius: "0",
                      margin: "0",
                    }}
                  >
                    {__(
                      "Due to the nature of the liquid effect, we use HSV (Hue, Saturation, Value) color model to provide more precise control over the colors. Please use the sliders to adjust the hue, saturation, and value for the effect.",
                      "slider-future"
                    )}
                  </p>
                  <div
                    className="custom-select"
                    style={{ paddingBottom: "12px" }}
                  >
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
                          <th style={{ padding: "5px" }}>
                            {__("Hue", "slider-future")}
                          </th>
                          <th style={{ padding: "5px" }}>
                            {__("Sat.", "slider-future")}
                          </th>
                          <th style={{ padding: "5px" }}>
                            {__("Value", "slider-future")}
                          </th>
                          <th style={{ padding: "5px" }}>
                            {__("Color", "slider-future")}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td
                            style={{
                              border: "1px solid var(--light-color)",
                              padding: "5px",
                            }}
                          >
                            {" "}
                            {__("0", "slider-future")}
                          </td>
                          <td
                            style={{
                              border: "1px solid var(--light-color)",
                              padding: "5px",
                            }}
                          >
                            {" "}
                            {__("1", "slider-future")}
                          </td>
                          <td
                            style={{
                              border: "1px solid var(--light-color)",
                              padding: "5px",
                            }}
                          >
                            {" "}
                            {__("1", "slider-future")}
                          </td>
                          <td
                            style={{
                              border: "1px solid var(--light-color)",
                              padding: "5px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: "3px",
                              borderLeft: "none",
                            }}
                          >
                            {" "}
                            {__("Red", "slider-future")}
                            <div
                              style={{
                                backgroundColor: "hsl(0, 100%, 50%)",
                                width: "15px",
                                height: "15px",
                                borderRadius: "50%",
                              }}
                            ></div>
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              border: "1px solid var(--light-color)",
                              padding: "5px",
                            }}
                          >
                            {__("0.083", "slider-future")}
                          </td>
                          <td
                            style={{
                              border: "1px solid var(--light-color)",
                              padding: "5px",
                            }}
                          >
                            {__("1", "slider-future")}
                          </td>
                          <td
                            style={{
                              border: "1px solid var(--light-color)",
                              padding: "5px",
                            }}
                          >
                            {__("1", "slider-future")}
                          </td>
                          <td
                            style={{
                              border: "1px solid var(--light-color)",
                              padding: "5px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: "3px",
                              borderLeft: "none",
                              borderTopColor: "transparent",
                            }}
                          >
                            {" "}
                            {__("Orange", "slider-future")}
                            <div
                              style={{
                                backgroundColor: "hsl(30, 100%, 50%)",
                                width: "15px",
                                height: "15px",
                                borderRadius: "50%",
                              }}
                            ></div>
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              border: "1px solid var(--light-color)",
                              padding: "5px",
                            }}
                          >
                            {__("0.17", "slider-future")}
                          </td>
                          <td
                            style={{
                              border: "1px solid var(--light-color)",
                              padding: "5px",
                            }}
                          >
                            {__("1", "slider-future")}
                          </td>
                          <td
                            style={{
                              border: "1px solid var(--light-color)",
                              padding: "5px",
                            }}
                          >
                            {__("1", "slider-future")}
                          </td>
                          <td
                            style={{
                              border: "1px solid var(--light-color)",
                              padding: "5px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: "3px",
                              borderLeft: "none",
                              borderTopColor: "transparent",
                            }}
                          >
                            {" "}
                            {__("Yellow", "slider-future")}
                            <div
                              style={{
                                backgroundColor: "hsl(60, 100%, 50%)",
                                width: "15px",
                                height: "15px",
                                borderRadius: "50%",
                              }}
                            ></div>
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              border: "1px solid var(--light-color)",
                              padding: "5px",
                            }}
                          >
                            {__("0.33", "slider-future")}
                          </td>
                          <td
                            style={{
                              border: "1px solid var(--light-color)",
                              padding: "5px",
                            }}
                          >
                            {__("1", "slider-future")}
                          </td>
                          <td
                            style={{
                              border: "1px solid var(--light-color)",
                              padding: "5px",
                            }}
                          >
                            {__("1", "slider-future")}
                          </td>
                          <td
                            style={{
                              border: "1px solid var(--light-color)",
                              padding: "5px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: "3px",
                              borderLeft: "none",
                              borderTopColor: "transparent",
                            }}
                          >
                            {" "}
                            {__("Green", "slider-future")}
                            <div
                              style={{
                                backgroundColor: "hsl(120, 100%, 50%)",
                                width: "15px",
                                height: "15px",
                                borderRadius: "50%",
                              }}
                            ></div>
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              border: "1px solid var(--light-color)",
                              padding: "5px",
                            }}
                          >
                            {__("0.5", "slider-future")}
                          </td>
                          <td
                            style={{
                              border: "1px solid var(--light-color)",
                              padding: "5px",
                            }}
                          >
                            {__("1", "slider-future")}
                          </td>
                          <td
                            style={{
                              border: "1px solid var(--light-color)",
                              padding: "5px",
                            }}
                          >
                            {__("1", "slider-future")}
                          </td>
                          <td
                            style={{
                              border: "1px solid var(--light-color)",
                              padding: "5px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: "3px",
                              borderLeft: "none",
                              borderTopColor: "transparent",
                            }}
                          >
                            {" "}
                            {__("Cyan", "slider-future")}
                            <div
                              style={{
                                backgroundColor: "hsl(180, 100%, 50%)",
                                width: "15px",
                                height: "15px",
                                borderRadius: "50%",
                              }}
                            ></div>
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              border: "1px solid var(--light-color)",
                              padding: "5px",
                            }}
                          >
                            {__("0.67", "slider-future")}
                          </td>
                          <td
                            style={{
                              border: "1px solid var(--light-color)",
                              padding: "5px",
                            }}
                          >
                            {__("1", "slider-future")}
                          </td>
                          <td
                            style={{
                              border: "1px solid var(--light-color)",
                              padding: "5px",
                            }}
                          >
                            {__("1", "slider-future")}
                          </td>
                          <td
                            style={{
                              border: "1px solid var(--light-color)",
                              padding: "5px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: "3px",
                              borderLeft: "none",
                              borderTopColor: "transparent",
                            }}
                          >
                            {" "}
                            {__("Blue", "slider-future")}
                            <div
                              style={{
                                backgroundColor: "hsl(240, 100%, 50%)",
                                width: "15px",
                                height: "15px",
                                borderRadius: "50%",
                              }}
                            ></div>
                          </td>
                        </tr>
                        <tr className="last-border-table-hsv">
                          <td
                            style={{
                              border: "1px solid var(--light-color)",
                              padding: "5px",
                            }}
                          >
                            {__("0.83", "slider-future")}
                          </td>
                          <td
                            style={{
                              border: "1px solid var(--light-color)",
                              padding: "5px",
                            }}
                          >
                            {__("1", "slider-future")}
                          </td>
                          <td
                            style={{
                              border: "1px solid var(--light-color)",
                              padding: "5px",
                            }}
                          >
                            {__("1", "slider-future")}
                          </td>
                          <td
                            style={{
                              border: "1px solid var(--light-color)",
                              padding: "5px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: "3px",
                              borderLeft: "none",
                              borderTopColor: "transparent",
                            }}
                          >
                            {" "}
                            {__("Magenta", "slider-future")}
                            <div
                              style={{
                                backgroundColor: "hsl(300, 100%, 50%)",
                                width: "15px",
                                height: "15px",
                                borderRadius: "50%",
                              }}
                            ></div>
                          </td>
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
                      <AnimationIcon />
                      <h2>
                        {__("Select elements to apply effect", "slider-future")}
                      </h2>
                    </div>
                    <CheckboxControl
                      __nextHasNoMarginBottom
                      label={__("Select all", "slider-future")}
                      checked={
                        imgSelected &&
                        h3Selected &&
                        h4Selected &&
                        buttonSelected &&
                        spanSelected &&
                        pSelected
                      }
                      onChange={handleSelectAllChange}
                    />
                    <CheckboxControl
                      __nextHasNoMarginBottom
                      label={__("Image", "slider-future")}
                      checked={imgSelected}
                      onChange={(isChecked) =>
                        setAttributes({ imgSelected: isChecked })
                      }
                    />
                    <CheckboxControl
                      __nextHasNoMarginBottom
                      label={__("H1", "slider-future")}
                      checked={h1Selected}
                      onChange={(isChecked) =>
                        setAttributes({ h1Selected: isChecked })
                      }
                    />
                    <CheckboxControl
                      __nextHasNoMarginBottom
                      label={__("H2", "slider-future")}
                      checked={h2Selected}
                      onChange={(isChecked) =>
                        setAttributes({ h2Selected: isChecked })
                      }
                    />
                    <CheckboxControl
                      __nextHasNoMarginBottom
                      label={__("H3", "slider-future")}
                      checked={h3Selected}
                      onChange={(isChecked) =>
                        setAttributes({ h3Selected: isChecked })
                      }
                    />
                    <CheckboxControl
                      __nextHasNoMarginBottom
                      label={__("H4", "slider-future")}
                      checked={h4Selected}
                      onChange={(isChecked) =>
                        setAttributes({ h4Selected: isChecked })
                      }
                    />
                    <CheckboxControl
                      __nextHasNoMarginBottom
                      label={__("H5", "slider-future")}
                      checked={h5Selected}
                      onChange={(isChecked) =>
                        setAttributes({ h5Selected: isChecked })
                      }
                    />
                    <CheckboxControl
                      __nextHasNoMarginBottom
                      label={__("H6", "slider-future")}
                      checked={h6Selected}
                      onChange={(isChecked) =>
                        setAttributes({ h6Selected: isChecked })
                      }
                    />
                    <CheckboxControl
                      __nextHasNoMarginBottom
                      label={__("Button", "slider-future")}
                      checked={buttonSelected}
                      onChange={(isChecked) =>
                        setAttributes({ buttonSelected: isChecked })
                      }
                    />
                    <CheckboxControl
                      __nextHasNoMarginBottom
                      label={__("Span", "slider-future")}
                      checked={spanSelected}
                      onChange={(isChecked) =>
                        setAttributes({ spanSelected: isChecked })
                      }
                    />
                    <CheckboxControl
                      __nextHasNoMarginBottom
                      label={__("Paragraph", "slider-future")}
                      checked={pSelected}
                      onChange={(isChecked) =>
                        setAttributes({ pSelected: isChecked })
                      }
                    />
                  </div>
                  <div className="custom-select">
                    <CustomRangeControl
                      label={
                        <>
                          <HourglassBottomIcon />
                          {__("Motion Transition", "slider-future")}
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
