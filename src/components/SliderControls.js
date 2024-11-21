import {
  Notice,
  Button,
  CheckboxControl, 
  ButtonGroup,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";
import SectionSliderSelector from "./multitab/sectionSliderSelector";
import ColorOptionsPanel from "./colorPanel";
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import CustomSelectControl  from "../controls/select/CustomSelectControl";
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import CustomRangeControl  from "../controls/range/CustomRangeControl";
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import CalendarViewWeekIcon from '@mui/icons-material/CalendarViewWeek';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import CustomToggleControl  from "../controls/toggle/CustomToggleControl";
import HeightIcon from '@mui/icons-material/Height';
import ExpandIcon from '@mui/icons-material/Expand';
import CompressIcon from '@mui/icons-material/Compress';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import VibrationIcon from '@mui/icons-material/Vibration';
import PaletteIcon from '@mui/icons-material/Palette';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import BorderInnerIcon from '@mui/icons-material/BorderInner';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import MarginIcon from '@mui/icons-material/Margin';
import ColorizeIcon from '@mui/icons-material/Colorize';
import CommentIcon from '@mui/icons-material/Comment';
import MouseIcon from '@mui/icons-material/Mouse';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import TonalityIcon from '@mui/icons-material/Tonality';
import AnimationIcon from '@mui/icons-material/Animation';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import {optionsPerView} from '../assets/options';
import {optionsPerGroup} from '../assets/options';
import {optionsInitialSlide} from '../assets/options';

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
                  <PersonalVideoIcon/>
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
          <div className="cocoblocks-panel content-section-custom-panel">
            {device === "desktop" && (
              <>
            <div className="content-section-panel">
              <div className="custom-select select-button-device-slider" style={{textAlign:'right'}}>
              <PersonalVideoIcon  sx={{ fontSize: 16 }} />
                  </div>
                     <CustomSelectControl
                          label={
                            <>
                              <ViewColumnIcon />
                              {__("Slides per view", "cocoblocks")}
                              </>
                          }
                          value={perViewSlider}
                          options={optionsPerView}
                          showTooltip={true}
                          tooltipTop = {'10px'}
                          tooltipLeft = {'50%'}
                          tooltipText={__("Number of slides per view in Desktop (1024px). Slides visible at the same time on slider's container.", "cocoblocks")}
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
                    "cocoblocks"
                  )}
                </p>
              )}
               <CustomRangeControl
                    label={
                      <>
                      <SettingsEthernetIcon />
                        {__("Space Between Slides", "cocoblocks")}
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
                              {__("Slides per group", "cocoblocks")}
                              </>
                          }
                          value={slidesPerGroupDesktop}
                          options={optionsPerGroup}
                          showTooltip={true}
                          tooltipTop = {'10px'}
                          tooltipLeft = {'50%'}
                          tooltipText={__("The number of slides that should be grouped together for navigation.(Desktop)", "cocoblocks")}
                          onChange={(val) => {
                            setAttributes({ slidesPerGroupDesktop: val });
                          }}
                        />
                         <CustomSelectControl
                          label={
                            <>
                              <ViewModuleIcon />
                              {__("Slides rows", "cocoblocks")}
                              </>
                          }
                          value={slidesPerRow}
                          options={optionsPerGroup}
                          showTooltip={true}
                          tooltipTop = {'10px'}
                          tooltipLeft = {'50%'}
                          tooltipText={__("Number of slider rows, for multirow layout.", "cocoblocks")}
                          onChange={(val) => {
                            setAttributes({ slidesPerRow: val });
                          }}
                        />
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
            <TabletMacIcon sx={{ fontSize: 16 }} />
                  </div>
                  <CustomSelectControl
                          label={
                            <>
                              <ViewColumnIcon />
                              {__("Slides per view", "cocoblocks")}
                              </>
                          }
                          value={perViewSliderTablet}
                          options={optionsPerView}
                          showTooltip={true}
                          tooltipTop = {'10px'}
                          tooltipLeft = {'50%'}
                          tooltipText={__("Number of slides per view in Tablet (768px). Slides visible at the same time on slider's container.", "cocoblocks")}
                          onChange={(val) => {
                            setAttributes({ perViewSliderTablet: val });
                          }}
                        />
              {perViewSliderTablet == "auto" && (
                <p className="notice components-base-control__help">
                  {__(
                    "The width of the slides is dynamic and adapts to the content. This is useful when slides have variable widths or when you want slides to dynamically adapt to available space.",
                    "cocoblocks"
                  )}
                </p>
              )}
              <CustomRangeControl
                    label={
                      <>
                      <SettingsEthernetIcon />
                        {__("Space Between Slides", "cocoblocks")}
                      </>
                    }
                    value={spaceBetweenTablet}
                    onChange={(val) => setAttributes({ spaceBetweenTablet: val })}
                    min={0}
                    max={100}
                    step={1}
                  />
                   <CustomSelectControl
                          label={
                            <>
                              <CalendarViewWeekIcon />
                              {__("Slides per group", "cocoblocks")}
                              </>
                          }
                          value={slidesPerGroupTablet}
                          options={optionsPerGroup}
                          showTooltip={true}
                          tooltipTop = {'10px'}
                          tooltipLeft = {'50%'}
                          tooltipText={__("The number of slides that should be grouped together for navigation.(Tablet)", "cocoblocks")}
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
            <div className="custom-select select-button-device-slider" style={{textAlign:'right'}}>
            <SmartphoneIcon sx={{ fontSize: 16 }} />
                  </div>
                  <CustomSelectControl
                          label={
                            <>
                              <ViewColumnIcon />
                              {__("Slides per view", "cocoblocks")}
                              </>
                          }
                          value={perViewSliderMobile}
                          options={optionsPerView}
                          showTooltip={true}
                          tooltipTop = {'10px'}
                          tooltipLeft = {'50%'}
                          tooltipText={__("Number of slides per view in Mobile (640px). Slides visible at the same time on slider's container.", "cocoblocks")}
                          onChange={(val) => {
                            setAttributes({ perViewSliderMobile: val });
                          }}
                        />
              {perViewSliderMobile == "auto" && (
                <p className="notice components-base-control__help">
                  {__(
                    "The width of the slides is dynamic and adapts to the content. This is useful when slides have variable widths or when you want slides to dynamically adapt to available space.",
                    "cocoblocks"
                  )}
                </p>
              )}
               <CustomRangeControl
                    label={
                      <>
                      <SettingsEthernetIcon />
                        {__("Space Between Slides", "cocoblocks")}
                      </>
                    }
                    value={spaceBetweenMobile}
                    onChange={(val) => setAttributes({ spaceBetweenMobile: val })}
                    min={0}
                    max={100}
                    step={1}
                  />
                   <CustomSelectControl
                          label={
                            <>
                              <CalendarViewWeekIcon />
                              {__("Slides per group", "cocoblocks")}
                              </>
                          }
                          value={slidesPerGroupMobile}
                          options={optionsPerGroup}
                          showTooltip={true}
                          tooltipTop = {'10px'}
                          tooltipLeft = {'50%'}
                          tooltipText={__("The number of slides that should be grouped together for navigation.(Mobile)", "cocoblocks")}
                          onChange={(val) => {
                            setAttributes({ slidesPerGroupMobile: val });
                          }}
                        />
            </div>
            </>
            )}
            <div className="content-title-custom-panel intermedy">
              <h2 className="title-custom-panel">
                {__("Layout Size", "cocoblocks")}
              </h2>
            </div>
            <div className="content-section-panel">
            <CustomToggleControl
                    label={
                      <>
                       <HeightIcon />
                        {__("Auto height", "cocoblocks")}
                      </>
                    }
                    checked={autoHeight}
                    onChange={(value) => setAttributes({ autoHeight: value })}
                    showTooltip={true}
                    tooltipText={__("Enable and slider wrapper will adapt its height to the height of the currently active slide", "cocoblocks")}
                    tooltipTop = {'11px'}
                    tooltipLeft = {'40%'}
                  />
              {!autoHeight && (
                <>
                 <CustomRangeControl
                    label={
                      <>
                      <ExpandIcon />
                        {__("Custom Height", "cocoblocks")}
                      </>
                    }
                    value={slideHeight}
                    onChange={(val) => setAttributes({slideHeight: val })}
                    min={10}
                    max={1200}
                    step={1}
                  />
                </>
              )}
            </div>
            <div className="content-title-custom-panel intermedy">
              <h2 className="title-custom-panel">
                {__("Advanced Settings", "cocoblocks")}
              </h2>
            </div>
            <div className="content-section-panel">
            <CustomToggleControl
                    label={
                      <>
                       <CompressIcon sx={{transform:'rotate(90deg)'}} />
                        {__("Centered slides", "cocoblocks")}
                      </>
                    }
                    checked={centeredSlides}
                    onChange={(value) => setAttributes({centeredSlides: value })}
                    showTooltip={true}
                    tooltipText={__("If enabled, then active slide will be centered, not always on the left side.", "cocoblocks")}
                    tooltipTop = {'11px'}
                    tooltipLeft = {'40%'}
                  />
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
            <CustomSelectControl
                          label={
                            <>
                              <LinearScaleIcon />
                              {__("Initial slide", "cocoblocks")}
                              </>
                          }
                          value={initialSlide}
                          options={optionsInitialSlide}
                          showTooltip={true}
                          tooltipTop = {'10px'}
                          tooltipLeft = {'50%'}
                          tooltipText={__("Index number of initial slide.(Starts from 0)", "cocoblocks")}
                          onChange={(val) => {
                            setAttributes({ initialSlide: val });
                          }}
                        />
            </div>

            <div className="content-section-panel">
            <CustomToggleControl
                    label={
                      <>
                       <VibrationIcon />
                        {__("Free mode", "cocoblocks")}
                      </>
                    }
                    checked={freeMode}
                    onChange={(value) => setAttributes({freeMode: value })}
                    showTooltip={true}
                    tooltipText={__("Doesn't work in the editor!", "cocoblocks")}
                    tooltipTop = {'11px'}
                    tooltipLeft = {'40%'}
                  />
              {freeMode == true && (
                <>
                  <div className="content-section-panel">
                  <CustomToggleControl
                    label={__("Sticky", "cocoblocks")}
                    checked={stickyFreeMode}
                    onChange={(value) => setAttributes({stickyFreeMode: value })}
                    showTooltip={true}
                    tooltipText={__("Enables Snap to slides positions in free mode", "cocoblocks")}
                    tooltipTop = {'11px'}
                    tooltipLeft = {'40%'}
                  />
                   <CustomToggleControl
                    label={__("Momentum", "cocoblocks")}
                    checked={momentumFreeMode}
                    onChange={(value) => setAttributes({momentumFreeMode: value })}
                    showTooltip={true}
                    tooltipText={__("If enabled, then slide will keep moving for a while you release it after", "cocoblocks")}
                    tooltipTop = {'11px'}
                    tooltipLeft = {'40%'}
                  />
                    <CustomToggleControl
                    label={__("Momentum bounce", "cocoblocks")}
                    checked={momentumBounceFreeMode}
                    onChange={(value) => setAttributes({momentumBounceFreeMode: value })}
                    showTooltip={true}
                    tooltipText={__("Enables momentum bounce in free mode", "cocoblocks")}
                    tooltipTop = {'11px'}
                    tooltipLeft = {'60%'}
                  />
                   <CustomRangeControl
                    label={__("Momentum bounce ratio", "cocoblocks")}
                    value={momentumBounceRatioFreeMode}
                    onChange={(val) => setAttributes({momentumBounceRatioFreeMode: val })}
                    min={0.1}
                    max={3}
                    step={0.1}
                    showTooltip={true}
                    tooltipText={__("Higher value produces larger momentum bounce effect", "cocoblocks")}
                    tooltipTop = {'2px'}
                    tooltipLeft = {'64%'}
                  />
                   <CustomRangeControl
                    label={__("Momentum ratio", "cocoblocks")}
                    value={momentumRatioFreeMode}
                    onChange={(val) => setAttributes({momentumRatioFreeMode: val })}
                    min={0.1}
                    max={3}
                    step={0.1}
                    showTooltip={true}
                    tooltipText={__("Higher value produces larger momentum distance after you release sldier", "cocoblocks")}
                    tooltipTop = {'2px'}
                    tooltipLeft = {'50%'}
                  />
                  <CustomRangeControl
                    label={__("Momentum velocity ratio", "cocoblocks")}
                    value={momentumVelocityRatioFreeMode}
                    onChange={(val) => setAttributes({momentumVelocityRatioFreeMode: val })}
                    min={0.1}
                    max={3}
                    step={0.1}
                    showTooltip={true}
                    tooltipText={__("Higher value produces larger momentum velocity after you release sldier", "cocoblocks")}
                    tooltipTop = {'2px'}
                    tooltipLeft = {'64%'}
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
                    <PaletteIcon style={{
                      marginBottom: "-5px",
                      width: "20px",
                      height: "20px",
                    }}/>
                  }
                />
              </div>
              <CustomSelectControl
                          label={
                            <>
                              <VisibilityOffIcon />
                              {__("Overflow", "cocoblocks")}
                              </>
                          }
                          value={overflow}
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
                          onChange={(val) => {
                            setAttributes({ overflow: val });
                          }}
                        />
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
                    <BorderColorIcon/>
                  }
                />
              </div>
              <CustomRangeControl
                    label={<> <MarginIcon />{__("Border width", "cocoblocks")}</>}
                    value={backgroundBorderSize}
                    onChange={(val) => setAttributes({backgroundBorderSize: val })}
                    min={0}
                    max={20}
                    step={1}
                  />
                   <CustomRangeControl
                    label={<>  <BorderInnerIcon />{__("Border radius", "cocoblocks")}</>}
                    value={backgroundBorderRadius}
                    onChange={(val) => setAttributes({backgroundBorderRadius: val })}
                    min={0}
                    max={256}
                    step={1}
                  />
            </div>
            <div className="content-title-custom-panel intermedy">
              <h2 className="title-custom-panel">
                {__("Spacing", "cocoblocks")}
              </h2>
            </div>
            <div className="content-section-panel" style={{ padding: "0" }}>
            <CustomRangeControl
                    label={<> <VerticalAlignTopIcon />{__("Content vertical padding", "cocoblocks")}</>}
                    value={backgroundVerticalPadding}
                    onChange={(val) => setAttributes({backgroundVerticalPadding: val })}
                    min={0}
                    max={256}
                    step={1}
                  />
           <CustomRangeControl
                    label={<> <VerticalAlignTopIcon  style={{
                      transform: "rotate(90deg)",
                    }} />{__("Content horizontal padding", "cocoblocks")}</>}
                    value={backgroundHorizontalPadding}
                    onChange={(val) => setAttributes({backgroundHorizontalPadding: val })}
                    min={0}
                    max={256}
                    step={1}
                  />
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
            <CustomRangeControl
                    label={<> <VerticalAlignTopIcon />{__("Margin Top", "cocoblocks")}</>}
                    value={sliderMarginTop}
                    onChange={(val) => setAttributes({sliderMarginTop: val })}
                    min={-200}
                    max={200}
                    step={1}
                  />
                <CustomRangeControl
                  label={
                    <>
                      <VerticalAlignTopIcon style={{
                      transform: "rotate(180deg)",
                    }} />
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
            <CustomSelectControl
                          label={
                            <>
                              <CommentIcon />
                              {__("Content Type", "cocoblocks")}
                              </>
                          }
                          value={attributes.contentType}
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
                          onChange={(value) => setAttributes({ contentType: value })}
                        />
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
                    <ColorizeIcon/>
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
                    <ColorizeIcon/>
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
                    <ColorizeIcon/>
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
                    <ColorizeIcon/>
                  }
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
              {__("Mouse Effect", "cocoblocks")}
            </h2>
          </div>
          <div className="cocoblocks-panel content-section-custom-panel">
            <div className="content-section-panel">
                <CustomSelectControl
                  label={
                    <>
                     <MouseIcon />
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
                    <ColorizeIcon/>
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
                    <ColorizeIcon/>
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
                    <ColorizeIcon/>
                  }
                />
              </div>
              </>
              )}
              {mouseEffect === "liquid" && (
                <>
                 <div className="custom-select">
                <CustomRangeControl
                  label={
                    <>
                     <ColorizeIcon/>
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
                <CustomRangeControl
                  label={
                    <>
                      <WbSunnyIcon />
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
                <CustomRangeControl
                  label={
                    <>
                      <TonalityIcon />
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
              <AnimationIcon />
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
                <CustomRangeControl
                  label={
                    <>
                     <HourglassBottomIcon />
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
