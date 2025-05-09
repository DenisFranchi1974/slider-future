import {
  Button,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";
import ColorOptionsPanel from "./colorPanel";
import AlignmentControlTwo from "./align/aligncontrol-two";
import SectionSliderSelectorNavigation from "./multitab/sectionSliderSelectorNavigation";
import CustomSelectControl  from "../controls/select/CustomSelectControl";
import CustomRangeControl from "../controls/range/CustomRangeControl";
import CustomToggleControl from "../controls/toggle/CustomToggleControl";
import SwitchLeftIcon from '@mui/icons-material/SwitchLeft';
import {optionsNavigation} from "../assets/options";
import {optionsNavigationPosition} from "../assets/options";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import MouseIcon from '@mui/icons-material/Mouse';
import SwipeIcon from '@mui/icons-material/Swipe';
import ProTooltip from './ProTooltip';

const SliderControlsNaqvigation = ({ attributes, setAttributes }) => {
  const {
    grabCursor,
    hideNavigation,
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
    navigationPosition,
    navigationGap,
  } = attributes;

  // Navigation Default
  const defaultAttributes = {
    sizeNav: 32,
    sizeBorderNav: 1,
    radiusBorderNav: 100,
    navigationIcons: "default",
    navColor: "#FFFFFF",
    navBackgroundColor: "#ffffff00",
    navBorderColor: "#FFFFFF",
    navColorHover: "#333333",
    navBackgroundColorHover: "#FFFFFF",
    navBorderColorHover: "#FFFFFF",
    paddingNav: 8,
    paddingNavLeft: 8,
    offSetTopNav: 50,
    offSetSidesNav: 10,
    navigationTablet: true,
    navigationMobile: false,
    hideNavigation: false,
  };

  const resetAllAttributes = () => {
    setAttributes({
      sizeNav: defaultAttributes.sizeNav,
      sizeBorderNav: defaultAttributes.sizeBorderNav,
      radiusBorderNav: defaultAttributes.radiusBorderNav,
      navigationIcons: defaultAttributes.navigationIcons,
      navColor: defaultAttributes.navColor,
      navBackgroundColor: defaultAttributes.navBackgroundColor,
      navBorderColor: defaultAttributes.navBorderColor,
      navColorHover: defaultAttributes.navColorHover,
      navBackgroundColorHover: defaultAttributes.navBackgroundColorHover,
      navBorderColorHover: defaultAttributes.navBorderColorHover,
      paddingNav: defaultAttributes.paddingNav,
      paddingNavLeft: defaultAttributes.paddingNavLeft,
      offSetTopNav: defaultAttributes.offSetTopNav,
      offSetSidesNav: defaultAttributes.offSetSidesNav,
      navigationTablet: defaultAttributes.navigationTablet,
      navigationMobile: defaultAttributes.navigationMobile,
      hideNavigation: defaultAttributes.hideNavigation,
    });
  };

  // Pagination Default
  const defaultAttributesPagination = {
    bulletColor: "#FFFFFF",
    bulletInactivityColor: "#cccccc",
    positionPagination: "bottom",
    hidePagination: false,
    typePagination: "bullets",
    clickPagination: false,
    dynamicPagination: false,
    dynamicMainPagination: 1,
    opacityPagination: 1,
    opacityInactivePagination: 0.2,
    widthPagination: 8,
    heightPagination: 8,
    widthPaginationActive: 8,
    heightPaginationActive: 8,
    radiusPagination: 0,
    gapPagination: 3,
    fontSizePagination: 16,
    heightBarPagination: 4,
    progressbarOpposite: false,
  };

  const resetPaginationAttributes = () => {
    setAttributes({
      bulletColor: defaultAttributesPagination.bulletColor,
      bulletInactivityColor: defaultAttributesPagination.bulletInactivityColor,
      positionPagination: defaultAttributesPagination.positionPagination,
      hidePagination: defaultAttributesPagination.hidePagination,
      typePagination: defaultAttributesPagination.typePagination,
      clickPagination: defaultAttributesPagination.clickPagination,
      dynamicPagination: defaultAttributesPagination.dynamicPagination,
      dynamicMainPagination: defaultAttributesPagination.dynamicMainPagination,
      opacityPagination: defaultAttributesPagination.opacityPagination,
      opacityInactivePagination:
        defaultAttributesPagination.opacityInactivePagination,
      widthPagination: defaultAttributesPagination.widthPagination,
      heightPagination: defaultAttributesPagination.heightPagination,
      widthPaginationActive: defaultAttributesPagination.widthPaginationActive,
      heightPaginationActive:
        defaultAttributesPagination.heightPaginationActive,
      radiusPagination: defaultAttributesPagination.radiusPagination,
      gapPagination: defaultAttributesPagination.gapPagination,
      fontSizePagination: defaultAttributesPagination.fontSizePagination,
      heightBarPagination: defaultAttributesPagination.heightBarPagination,
      progressbarOpposite: defaultAttributesPagination.progressbarOpposite,
    });
  };

  const [isProFeature, setIsProFeature] = useState(true);
 
   useEffect(() => {
       if (typeof window.isProFeature !== 'undefined') {
           setIsProFeature(window.isProFeature);
       }
   }, []);

  const [activeSectionNavigation, setActiveSectionSliderNavigation] =
    useState("progress");

  return (
    <>
      <div className="content-subdescription-section-slider">
        <h2>{__("Navigation Options")}</h2>
      </div>
      <SectionSliderSelectorNavigation
        onSectionChange={setActiveSectionSliderNavigation}
      />
      {activeSectionNavigation === "progress" && (
        <>
          <div className="content-title-custom-panel">
            <h2 className="title-custom-panel">
              {__("Progress", "slider-future")}
            </h2>
          </div>
          <div className="slider-future-panel content-section-custom-panel">
          <div className={`content-section-panel ${isProFeature ? 'hover-pro' : ''}`} style={{position:'relative'}}>
                <CustomToggleControl
                  label={
                    <>
                      <svg
                        width="57"
                        height="26"
                        viewBox="0 0 57 26"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                      >
                        <path
                          d="M43.0735759,0 C45.4678234,0 47.6419651,0.52506869 49.5960012,1.57520607 C51.5500372,2.62534345 53.1058794,4.09782356 54.2635276,5.99264641 C55.4211759,7.88746926 56,10.0810497 56,12.5733877 C56,15.0848653 55.4211759,17.2880156 54.2635276,19.1828384 C53.1058794,21.0776613 51.5500372,22.5501414 49.5960012,23.6002788 C47.7640924,24.5847826 45.7387313,25.1078002 43.519918,25.1693317 L43.0735759,25.1754848 L12.9546849,25.1754848 C10.5589422,25.1754848 8.38016507,24.6504161 6.41835353,23.6002788 C4.456542,22.5501414 2.89636352,21.0776613 1.73781811,19.1828384 C0.579272705,17.2880156 0,15.0848653 0,12.5733877 C0,10.0810497 0.579272705,7.88746926 1.73781811,5.99264641 C2.89636352,4.09782356 4.456542,2.62534345 6.41835353,1.57520607 C8.25755185,0.590702276 10.2874426,0.0676846358 12.5080257,0.00615314871 L12.9546849,0 L43.0735759,0 Z M43.0735759,4.52128776 L12.9546849,4.52128776 C11.4477385,4.52128776 10.0548822,4.85795077 8.77611606,5.53127678 C7.49734988,6.2046028 6.46852028,7.14715456 5.68962727,8.35893205 C4.91073426,9.57070954 4.52128776,10.9755281 4.52128776,12.5733877 C4.52128776,14.1730416 4.91073426,15.5787574 5.68962727,16.7905349 C6.46852028,18.0023123 7.49734988,18.9492004 8.77611606,19.6311991 C9.94831838,20.2563645 11.2163881,20.5949958 12.5803252,20.6470929 L12.9546849,20.6541971 L43.0735759,20.6541971 C44.5634761,20.6541971 45.9473607,20.3131977 47.2252297,19.6311991 C48.5030987,18.9492004 49.5314797,18.0023123 50.3103727,16.7905349 C51.0892657,15.5787574 51.4787122,14.1730416 51.4787122,12.5733877 C51.4787122,10.9755281 51.0892657,9.57070954 50.3103727,8.35893205 C49.5314797,7.14715456 48.5030987,6.2046028 47.2252297,5.53127678 C46.0538498,4.91406127 44.7933873,4.5797362 43.4438423,4.52830157 L43.0735759,4.52128776 Z M30.8525391,5.87597656 C34.4423899,5.87597656 37.3525391,8.78612569 37.3525391,12.3759766 C37.3525391,15.9658274 34.4423899,18.8759766 30.8525391,18.8759766 L12.8525391,18.8759766 C9.26268819,18.8759766 6.35253906,15.9658274 6.35253906,12.3759766 C6.35253906,8.78612569 9.26268819,5.87597656 12.8525391,5.87597656 L30.8525391,5.87597656 Z"
                          transform="translate(.647 .124)"
                        ></path>
                      </svg>
                      {__("Scrollbar", "slider-future")}
                    </>
                  }
                  checked={scrollbar}
                  onChange={(value) => setAttributes({ scrollbar: value })}
                  disabled={isProFeature}
                />
                 {isProFeature && (
                  <ProTooltip
                  tooltipProTop={'14px'}
                    tooltipProRight={'38px'}
                    />
                  )}
              {scrollbar == true && (
                <>
                  <div className="custom-select color">
                    <ColorOptionsPanel
                      buttonTitle={__("Track color", "slider-future")}
                      colorNormal={scrollBarColor}
                      setColorNormal={(color) =>
                        setAttributes({ scrollBarColor: color })
                      }
                    />
                  </div>
                  <div className="custom-select color">
                    <ColorOptionsPanel
                      buttonTitle={__("Thumb color", "slider-future")}
                      colorNormal={thumbColor}
                      setColorNormal={(color) =>
                        setAttributes({ thumbColor: color })
                      }
                    />
                  </div>
                    <CustomSelectControl
                      label={__("Position", "slider-future")}
                      value={positionScrollbar}
                      onChange={(val) => {
                        setAttributes({ positionScrollbar: val });
                      }}
                      options={[
                        {
                          label: __("Top", "slider-future"),
                          value: "top",
                        },
                        {
                          label: __("Bottom", "slider-future"),
                          value: "bottom",
                        },
                      ]}
                    />
                    <CustomToggleControl
                      label={__("Draggable", "slider-future")}
                      checked={dragScrollbar}
                      onChange={(value) =>
                        setAttributes({ dragScrollbar: value })
                      }
                      showTooltip={true}
                      tooltipText={__("Makes scrollbar draggable that allowyou to control slider position", "slider-future")}
                      tooltipTop = {'11px'}
                      tooltipLeft = {'40%'}
                    />
                    <CustomToggleControl
                      label={__("Hide after interaction", "slider-future")}
                      checked={hideScrollbar}
                      onChange={(value) =>
                        setAttributes({ hideScrollbar: value })
                      }
                      showTooltip={true}
                      tooltipText={__("Hide scrollbar automatically after user interaction", "slider-future")}
                      tooltipTop = {'11px'}
                      tooltipLeft = {'60%'}
                    />
                    <CustomToggleControl
                      label={__("Snap on release", "slider-future")}
                      checked={releaseScrollbar}
                      onChange={(value) =>
                        setAttributes({ releaseScrollbar: value })
                      }
                      showTooltip={true}
                      tooltipText={__("Snap slider position to slides when you release scrollbar", "slider-future")}
                      tooltipTop = {'11px'}
                      tooltipLeft = {'50%'}
                    />
                    <CustomRangeControl
                      label={__("Height", "cocobocks")}
                      value={heightScrollbar}
                      onChange={(value) =>
                        setAttributes({ heightScrollbar: value })
                      }
                      min={1}
                      max={50}
                      step={1}
                    />
                    <CustomRangeControl
                      label={__("Border Radius", "cocobocks")}
                      value={radiusScrollbar}
                      onChange={(value) =>
                        setAttributes({ radiusScrollbar: value })
                      }
                      min={0}
                      max={25}
                      step={1}
                    />
                </>
              )}
            </div>
            <div className="content-section-panel">
                <CustomToggleControl
                  label={
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e8eaed"
                      >
                        <path d="M380-300v-360l280 180-280 180ZM480-40q-108 0-202.5-49.5T120-228v108H40v-240h240v80h-98q51 75 129.5 117.5T480-120q115 0 208.5-66T820-361l78 18q-45 136-160 219.5T480-40ZM42-520q7-67 32-128.5T143-762l57 57q-32 41-52 87.5T123-520H42Zm214-241-57-57q53-44 114-69.5T440-918v80q-51 5-97 25t-87 52Zm449 0q-41-32-87.5-52T520-838v-80q67 6 128.5 31T762-818l-57 57Zm133 241q-5-51-25-97.5T761-705l57-57q44 52 69 113.5T918-520h-80Z" />
                      </svg>
                      {__("Autoplay", "slider-future")}
                    </>
                  }
                  checked={autoplay}
                  onChange={(value) => setAttributes({ autoplay: value })}
                  showTooltip={true}
                  tooltipText={__("Will automatically advance the slides. Note: this is intentionally disabled in the editor, but will affect the front end.", "slider-future")}
                  tooltipTop = {'11px'}
                  tooltipLeft = {'50%'}
                />
              {autoplay === true && (
                <>
                    <CustomRangeControl
                      label={__("Delay", "cocobocks")}
                      value={autoplaySpeed}
                      onChange={(value) =>
                        setAttributes({ autoplaySpeed: value })
                      }
                      min={0}
                      max={10000}
                      step={10}
                      marks={[
                        {
                          label: "0s",
                          value: 0,
                        },
                        {
                          label: "2.5s",
                          value: 2500,
                        },
                        {
                          label: "5s",
                          value: 5000,
                        },
                        {
                          label: "7.5s",
                          value: 7500,
                        },
                        {
                          label: "10s",
                          value: 10000,
                        },
                      ]}
                      showTooltip={true}
                      tooltipText={__("Sets the delay time in milliseconds between each slide transition.", "slider-future")}
                      tooltipTop = {'2px'}
                      tooltipLeft = {'50%'}
                    />
                    <CustomToggleControl
                      label={__("Disable on interaction", "slider-future")}
                      checked={disableOnInteraction}
                      onChange={(value) =>
                        setAttributes({ disableOnInteraction: value })
                      }
                      showTooltip={true}
                      tooltipText={__("Disabled and autoplay will not be disabled after user interactions (swipes), it will be restarted every time after interaction", "slider-future")}
                      tooltipTop = {'11px'}
                      tooltipLeft = {'65%'}
                    />
                    <CustomToggleControl
                      label={__("Pause on pointer enter", "slider-future")}
                      checked={pauseOnMouseEnter}
                      onChange={(value) =>
                        setAttributes({ pauseOnMouseEnter: value })
                      }
                      showTooltip={true}
                      tooltipText={__("When enabled autoplay will be paused on mouse enter over Swiper container. If 'Disabled on interaction' is also enabled, it will stop autoplay instead of pause", "slider-future")}
                      tooltipTop = {'11px'}
                      tooltipLeft = {'65%'}
                    />
                    <CustomToggleControl
                      label={__("Reverse direction", "slider-future")}
                      checked={reverseDirection}
                      onChange={(value) =>
                        setAttributes({ reverseDirection: value })
                      }
                      showTooltip={true}
                      tooltipText={__("Enables autoplay in reverse direction", "slider-future")}
                      tooltipTop = {'11px'}
                      tooltipLeft = {'60%'}
                    />
                    <CustomToggleControl
                      label={__("Stop on last slide", "slider-future")}
                      checked={stopOnLastSlide}
                      onChange={(value) =>
                        setAttributes({ stopOnLastSlide: value })
                      }
                      showTooltip={true}
                      tooltipText={__("When enabled autoplay will be stopped when it reaches last slide (has no effect in loop mode)", "slider-future")}
                      tooltipTop = {'11px'}
                      tooltipLeft = {'60%'}
                    />
                    <div className={`${isProFeature ? 'hover-pro' : ''}`} style={{position:'relative'}}>
                    <CustomToggleControl
                      label={__("Autoplay progress", "slider-future")}
                      checked={autoplayProgress}
                      onChange={(value) =>
                        setAttributes({ autoplayProgress: value })
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
                  {autoplayProgress == true && (
                    <>
                      <div className="custom-select color">
                        <ColorOptionsPanel
                          buttonTitle={__("Color", "slider-future")}
                          colorNormal={autoplayProgressColor}
                          setColorNormal={(color) =>
                            setAttributes({ autoplayProgressColor: color })
                          }
                        />
                      </div>
                      <div className="custom-select">
                        <AlignmentControlTwo
                          value={autoplayProgressPosition}
                          onChange={(newPosition) =>
                            setAttributes({
                              autoplayProgressPosition: newPosition,
                            })
                          }
                        />
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </>
      )}
      {activeSectionNavigation === "arrow" && (
        <>
          <div className="content-title-custom-panel">
            <h2 className="title-custom-panel">{__("Arrow", "slider-future")}</h2>
          </div>
          <div className="slider-future-panel content-section-custom-panel">
            <div className="content-section-panel">
                <CustomToggleControl
                  label={
                    <>
                      <SwitchLeftIcon />
                      {__("Navigation", "slider-future")}
                    </>
                  }
                  checked={navigation}
                  onChange={(value) => setAttributes({ navigation: value })}
                  showTooltip={true}
                  tooltipText={__("Will display arrows so user can navigate forward/backward. If you disable and re-enable it, if the Slider does not work it will allow you to change the navigation type with the control below!", "slider-future")}
                  tooltipTop = {'11px'}
                  tooltipLeft = {'60%'}
                />
              {navigation === true && (
                <>
                  <p
                    className="notice components-base-control__help"
                    style={{
                      borderRadius: "0",
                      margin: "0",
                    }}
                  >
                    {__(
                      "Warning: In order for the carousel navigation to work in the editor, you need to change the carousel type below! Just move it once and choose the type you want!",
                      "slider-future"
                    )}
                  </p>
                  <div className="custom-select select-control-label-right">
                    <CustomSelectControl
                      label={__("Type", "slider-future")}
                      value={navigationIcons}
                      onChange={(val) => {
                        setAttributes({ navigationIcons: val });
                      }}
                      options={optionsNavigation}
                    />
                  </div>
                  <div className="custom-select color">
                    <ColorOptionsPanel
                      buttonTitle={__("Color", "slider-future")}
                      colorNormal={navColor}
                      setColorNormal={(color) =>
                        setAttributes({ navColor: color })
                      }
                    />
                  </div>
                  <div className="custom-select color">
                    <ColorOptionsPanel
                      buttonTitle={__("Color Hover", "slider-future")}
                      colorNormal={navColorHover}
                      setColorNormal={(color) =>
                        setAttributes({ navColorHover: color })
                      }
                    />
                  </div>
                  <div className="custom-select color">
                    <ColorOptionsPanel
                      buttonTitle={__("Background Color", "slider-future")}
                      colorNormal={navBackgroundColor}
                      setColorNormal={(color) =>
                        setAttributes({ navBackgroundColor: color })
                      }
                    />
                  </div>
                  <div className="custom-select color">
                    <ColorOptionsPanel
                      buttonTitle={__("Background Color Hover", "slider-future")}
                      colorNormal={navBackgroundColorHover}
                      setColorNormal={(color) =>
                        setAttributes({ navBackgroundColorHover: color })
                      }
                    />
                  </div>
                  <div className="custom-select color">
                    <ColorOptionsPanel
                      buttonTitle={__("Border Color", "slider-future")}
                      colorNormal={navBorderColor}
                      setColorNormal={(color) =>
                        setAttributes({ navBorderColor: color })
                      }
                    />
                  </div>
                  <div className="custom-select color">
                    <ColorOptionsPanel
                      buttonTitle={__("Border Color Hover", "slider-future")}
                      colorNormal={navBorderColorHover}
                      setColorNormal={(color) =>
                        setAttributes({ navBorderColorHover: color })
                      }
                    />
                  </div>
                    <CustomRangeControl
                      label={__("Size (px)", "cocobocks")}
                      value={sizeNav}
                      onChange={(value) => setAttributes({ sizeNav: value })}
                      min={1}
                      max={60}
                      step={1}
                    />
                    <CustomRangeControl
                      label={__("Padding Top/Bottom (px)", "cocobocks")}
                      value={paddingNav}
                      onChange={(value) => setAttributes({ paddingNav: value })}
                      min={0}
                      max={50}
                      step={1}
                    />
                    <CustomRangeControl
                      label={__("Padding Left/Right (px)", "cocobocks")}
                      value={paddingNavLeft}
                      onChange={(value) =>
                        setAttributes({ paddingNavLeft: value })
                      }
                      min={0}
                      max={50}
                      step={1}
                    />
                    <CustomRangeControl
                      label={__("Border Size (px)", "cocobocks")}
                      value={sizeBorderNav}
                      onChange={(value) =>
                        setAttributes({ sizeBorderNav: value })
                      }
                      min={0}
                      max={10}
                      step={1}
                    />
                    <CustomRangeControl
                      label={__("Border Radius (%)", "cocobocks")}
                      value={radiusBorderNav}
                      onChange={(value) =>
                        setAttributes({ radiusBorderNav: value })
                      }
                      min={0}
                      max={100}
                      step={1}
                    />
                      <CustomSelectControl
                      label={__("Position", "slider-future")}
                      value={navigationPosition}
                      onChange={(val) => {
                        setAttributes({ navigationPosition: val });
                      }}
                      options={optionsNavigationPosition}
                    />
                    {navigationPosition !== "center-center" && (
                      <>
                     <CustomRangeControl
                      label={__("Gap", "cocobocks")}
                      value={navigationGap}
                      onChange={(value) =>
                        setAttributes({ navigationGap: value })
                      }
                      min={0}
                      max={100}
                      step={1}
                    />
                    <CustomRangeControl
                      label={__("Vertical Offset", "cocobocks")}
                      value={offSetTopNav}
                      onChange={(value) =>
                        setAttributes({ offSetTopNav: value })
                      }
                      min={0}
                      max={100}
                      step={1}
                    />
                    </>
                    )}
                    <CustomRangeControl
                      label={__("Sides Offset (px)", "cocobocks")}
                      value={offSetSidesNav}
                      onChange={(value) =>
                        setAttributes({ offSetSidesNav: value })
                      }
                      min={-20}
                      max={100}
                      step={1}
                    />
                      <div className={`${isProFeature ? 'hover-pro' : ''}`} style={{position:'relative'}}>
                    <CustomToggleControl
                      label={__("Hide on click", "slider-future")}
                      checked={hideNavigation}
                      onChange={(value) =>
                        setAttributes({ hideNavigation: value })
                      }
                      showTooltip={true}
                      tooltipText={__("Toggle navigation buttons visibility after click on Slider's container.It is intentionally disabled in the editor!", "slider-future")}
                      tooltipTop = {'11px'}
                      tooltipLeft = {'60%'}
                      disabled={isProFeature}
                      />
                       {isProFeature && (
                        <ProTooltip
                        tooltipProTop={'14px'}
                          tooltipProRight={'38px'}
                          />
                        )}
                        </div>
                    <CustomToggleControl
                      label={
                        <>
                           <TabletMacIcon sx={{ fontSize: 16 }} />
                          {__("Enable in Tablet", "slider-future")}
                        </>
                      }
                      checked={navigationTablet}
                      onChange={(value) =>
                        setAttributes({ navigationTablet: value })
                      }
                    />
                    <CustomToggleControl
                      label={
                        <>
                           <SmartphoneIcon sx={{ fontSize: 16 }} />
                          {__("Enable in Mobile", "slider-future")}
                        </>
                      }
                      checked={navigationMobile}
                      onChange={(value) =>
                        setAttributes({ navigationMobile: value })
                      }
                    />
                  <Button onClick={resetAllAttributes} className="button-reset">
                    <RestartAltIcon />
                    {__("Reset Navigation", "slider-future")}
                  </Button>
                </>
              )}
            </div>
          </div>
        </>
      )}
      {activeSectionNavigation === "bullet" && (
        <>
          <div className="content-title-custom-panel">
            <h2 className="title-custom-panel">
              {__("Bullets", "slider-future")}
            </h2>
          </div>
          <div className="slider-future-panel content-section-custom-panel">
            <div className="content-section-panel">
                <CustomToggleControl
                  label={
                    <>
                      <MoreHorizIcon />
                      {__("Pagination", "slider-future")}
                    </>
                  }
                  checked={paginationEnable}
                  onChange={(value) =>
                    setAttributes({ paginationEnable: value })
                  }
                />
              {paginationEnable == true && (
                <>
                    <CustomSelectControl
                      label={__("Type", "slider-future")}
                      value={typePagination}
                      onChange={(val) => {
                        setAttributes({ typePagination: val });
                      }}
                      options={[
                        {
                          label: __("Bullets", "slider-future"),
                          value: "bullets",
                        },
                        {
                          label: __("Fraction", "slider-future"),
                          value: "fraction",
                        },
                        {
                          label: __("Progressbar", "slider-future"),
                          value: "progressbar",
                        },
                      ]}
                    />
                  <div className="custom-select color">
                    <ColorOptionsPanel
                      buttonTitle={__("Color", "slider-future")}
                      colorNormal={bulletColor}
                      setColorNormal={(color) =>
                        setAttributes({ bulletColor: color })
                      }
                    />
                  </div>
                  {(typePagination == "bullets" ||
                    typePagination == "progressbar") && (
                    <div className="custom-select color">
                      <ColorOptionsPanel
                        buttonTitle={__("Color Inactivity", "slider-future")}
                        colorNormal={bulletInactivityColor}
                        setColorNormal={(color) =>
                          setAttributes({ bulletInactivityColor: color })
                        }
                      />
                    </div>
                  )}
                  {typePagination !== "progressbar" && (
                      <CustomSelectControl
                        label={__("Position", "slider-future")}
                        value={positionPagination}
                        onChange={(val) => {
                          setAttributes({ positionPagination: val });
                        }}
                        options={[
                          {
                            label: __("Top", "slider-future"),
                            value: "top",
                          },
                          {
                            label: __("Bottom", "slider-future"),
                            value: "bottom",
                          },
                        ]}
                      />
                  )}
                   <div className={`content-section-panel ${isProFeature ? 'hover-pro' : ''}`} style={{position:'relative'}}>
                    <CustomToggleControl
                      label={__("Hide on click", "slider-future")}
                      checked={hidePagination}
                      onChange={(value) =>
                        setAttributes({ hidePagination: value })
                      }
                      showTooltip={true}
                      tooltipText={__("Toggle (hide/show) pagination container visibility after click on Slider's container.It is intentionally disabled in the editor!", "slider-future")}
                      tooltipTop = {'11px'}
                      tooltipLeft = {'60%'}
                      disabled={isProFeature}
                      />
                       {isProFeature && (
                        <ProTooltip
                        tooltipProTop={'14px'}
                          tooltipProRight={'38px'}
                          />
                        )}
                        </div>
                  {typePagination == "fraction" && (
                      <CustomRangeControl
                        label={__("Font size", "cocobocks")}
                        value={fontSizePagination}
                        onChange={(value) =>
                          setAttributes({ fontSizePagination: value })
                        }
                        min={1}
                        max={50}
                        step={1}
                      />
                  )}
                  {typePagination == "progressbar" && (
                    <>
                        <CustomRangeControl
                          label={__("Height", "cocobocks")}
                          value={heightBarPagination}
                          onChange={(value) =>
                            setAttributes({ heightBarPagination: value })
                          }
                          min={1}
                          max={50}
                          step={1}
                        />
                        <CustomToggleControl
                          label={__("Progressbar opposite", "slider-future")}
                          checked={progressbarOpposite}
                          onChange={(value) =>
                            setAttributes({ progressbarOpposite: value })
                          }
                          showTooltip={true}
                          tooltipText={__("Makes pagination progressbar opposite to Swiper's direction parameter, means vertical progressbar for horizontal Swiper direction and horizontal progressbar for vertical Swiper direction", "slider-future")}
                          tooltipTop = {'11px'}
                          tooltipLeft = {'60%'}
                        />
                    </>
                  )}
                  {typePagination == "bullets" && (
                    <>
                      <div className={`content-section-panel ${isProFeature ? 'hover-pro' : ''}`} style={{position:'relative'}}>
                        <CustomToggleControl
                          label={__("Clickable", "slider-future")}
                          checked={clickPagination}
                          onChange={(value) =>
                            setAttributes({ clickPagination: value })
                          }
                          showTooltip={true}
                          tooltipText={__("If enable then clicking on pagination button will cause transition to appropriate slide. Only for 'bullets' pagination type", "slider-future")}
                          tooltipTop = {'11px'}
                          tooltipLeft = {'60%'}
                          disabled={isProFeature}
                          />
                           {isProFeature && (
                            <ProTooltip
                            tooltipProTop={'14px'}
                              tooltipProRight={'38px'}
                              />
                            )}
                            </div>
                        <CustomToggleControl
                          label={__("Dynamic bullets", "slider-future")}
                          checked={dynamicPagination}
                          onChange={(value) =>
                            setAttributes({ dynamicPagination: value })
                          }
                          showTooltip={true}
                          tooltipText={__("Good to enable if you use bullets pagination whit a lot of slides. So it will keep only few bullets visible at the same time", "slider-future")}
                          tooltipTop = {'11px'}
                          tooltipLeft = {'60%'}
                        />
                      {dynamicPagination == true && (
                          <CustomRangeControl
                            label={__("Dynamic main bullets", "cocobocks")}
                            value={dynamicMainPagination}
                            onChange={(value) =>
                              setAttributes({ dynamicMainPagination: value })
                            }
                            min={1}
                            max={10}
                            step={1}
                          />
                      )}
                        <CustomRangeControl
                          label={__("Active Opacity", "cocobocks")}
                          value={opacityPagination}
                          onChange={(value) =>
                            setAttributes({ opacityPagination: value })
                          }
                          min={0.1}
                          max={1}
                          step={0.1}
                        />
                        <CustomRangeControl
                          label={__("Inactive Opacity", "cocobocks")}
                          value={opacityInactivePagination}
                          onChange={(value) =>
                            setAttributes({ opacityInactivePagination: value })
                          }
                          min={0.1}
                          max={1}
                          step={0.1}
                        />
                        <CustomRangeControl
                          label={__("Width", "cocobocks")}
                          value={widthPagination}
                          onChange={(value) =>
                            setAttributes({ widthPagination: value })
                          }
                          min={1}
                          max={50}
                          step={1}
                        />
                        <CustomRangeControl
                          label={__("Height", "cocobocks")}
                          value={heightPagination}
                          onChange={(value) =>
                            setAttributes({ heightPagination: value })
                          }
                          min={1}
                          max={50}
                          step={1}
                        />
                        <CustomRangeControl
                          label={__("Active Width", "cocobocks")}
                          value={widthPaginationActive}
                          onChange={(value) =>
                            setAttributes({ widthPaginationActive: value })
                          }
                          min={1}
                          max={50}
                          step={1}
                        />
                        <CustomRangeControl
                          label={__("Active Height", "cocobocks")}
                          value={heightPaginationActive}
                          onChange={(value) =>
                            setAttributes({ heightPaginationActive: value })
                          }
                          min={1}
                          max={50}
                          step={1}
                        />
                        <CustomRangeControl
                          label={__("Border Radius", "cocobocks")}
                          value={radiusPagination}
                          onChange={(value) =>
                            setAttributes({ radiusPagination: value })
                          }
                          min={0}
                          max={100}
                          step={1}
                        />
                        <CustomRangeControl
                          label={__("Gap", "cocobocks")}
                          value={gapPagination}
                          onChange={(value) =>
                            setAttributes({ gapPagination: value })
                          }
                          min={1}
                          max={20}
                          step={1}
                        />
                    </>
                  )}
                  <Button
                    onClick={resetPaginationAttributes}
                    className="button-reset"
                  >
                    <RestartAltIcon />
                    {__("Reset Pagination", "slider-future")}
                  </Button>
                </>
              )}
            </div>
          </div>
        </>
      )}
      {activeSectionNavigation === "keyboard" && (
        <>
          <div className="content-title-custom-panel">
            <h2 className="title-custom-panel">
              {__("Keyboard", "slider-future")}
            </h2>
          </div>
          <div className="slider-future-panel content-section-custom-panel">
            <div className="content-section-panel">
                <CustomToggleControl
                  label={
                    <>
                      <KeyboardIcon />
                      {__("Keyboard control", "slider-future")}
                    </>
                  }
                  checked={keyboard}
                  onChange={(value) => setAttributes({ keyboard: value })}
                  showTooltip={true}
                  tooltipText={__("Enable keyboard control. Doesn't work in the editor!", "slider-future")}
                  tooltipTop = {'11px'}
                  tooltipLeft = {'60%'}
                />
              {keyboard == true && (
                <>
                    <CustomToggleControl
                      label={__("Only in viewport", "slider-future")}
                      checked={viewPortKeyboard}
                      onChange={(value) =>
                        setAttributes({ viewPortKeyboard: value })
                      }
                      showTooltip={true}
                      tooltipText={__("When enabled it will control sliders that are currently in viewport", "slider-future")}
                      tooltipTop = {'11px'}
                      tooltipLeft = {'60%'}
                    />
                    <CustomToggleControl
                      label={__("Page Up/Down keys", "slider-future")}
                      checked={upKeyboard}
                      onChange={(value) => setAttributes({ upKeyboard: value })}
                      showTooltip={true}
                      tooltipText={__("When enabled it will enabled keyword navigation by Page Up and Page Down keys", "slider-future")}
                      tooltipTop = {'11px'}
                      tooltipLeft = {'60%'}
                    />
                </>
              )}
            </div>
          </div>
        </>
      )}
      {activeSectionNavigation === "mouse" && (
        <>
          <div className="content-title-custom-panel">
            <h2 className="title-custom-panel">{__("Mouse", "slider-future")}</h2>
          </div>
          <div className="slider-future-panel content-section-custom-panel">
            <div className="content-section-panel">
                <CustomToggleControl
                  label={
                    <>
                      <MouseIcon />
                      {__("Mousewheel control", "slider-future")}
                    </>
                  }
                  checked={mousewheel}
                  onChange={(value) => setAttributes({ mousewheel: value })}
                  showTooltip={true}
                      tooltipText={__("Enable or disable mouse wheel control for swiping.", "slider-future")}
                      tooltipTop = {'11px'}
                      tooltipLeft = {'65%'}
                />
              {mousewheel == true && (
                <>
                    <CustomToggleControl
                      label={__("Force to axis", "slider-future")}
                      checked={forceToAxis}
                      onChange={(value) =>
                        setAttributes({ forceToAxis: value })
                      }
                      showTooltip={true}
                      tooltipText={__("Set to true to force mousewheel swipes to axis. So in horizontal mode mousewheel will work only with horizontal mousewheel scrolling, and only with vertical scrolling in vertical mode.", "slider-future")}
                      tooltipTop = {'11px'}
                      tooltipLeft = {'60%'}
                    />
                    <CustomToggleControl
                      label={__("Invert scrolling", "slider-future")}
                      checked={invert}
                      onChange={(value) => setAttributes({ invert: value })}
                      showTooltip={true}
                      tooltipText={__("Set to true to invert sliding direction", "slider-future")}
                      tooltipTop = {'11px'}
                      tooltipLeft = {'60%'}
                    />
                    <CustomToggleControl
                      label={__("Release on edges", "slider-future")}
                      checked={releaseOnEdges}
                      onChange={(value) =>
                        setAttributes({ releaseOnEdges: value })
                      }
                      showTooltip={true}
                      tooltipText={__("Set to true and swiper will release mousewheel event and allow page scrolling when swiper is on edge positions (in the beginning or in the end)", "slider-future")}
                      tooltipTop = {'11px'}
                      tooltipLeft = {'60%'}
                    />
                    <CustomRangeControl
                      label={__("Sensitivity", "cocobocks")}
                      value={sensitivity}
                      onChange={(value) =>
                        setAttributes({ sensitivity: value })
                      }
                      min={0.1}
                      max={3}
                      step={0.1}
                      showTooltip={true}
                      tooltipText={__("Multiplier of mousewheel data, allows to tweak mouse wheel sensitivity", "slider-future")}
                      tooltipTop = {'3px'}
                      tooltipLeft = {'60%'}
                    />
                </>
              )}
            </div>
          </div>
        </>
      )}
      {activeSectionNavigation === "grap" && (
        <>
          <div className="content-title-custom-panel">
            <h2 className="title-custom-panel">{__("Grab", "slider-future")}</h2>
          </div>
          <div className="slider-future-panel content-section-custom-panel">
            <div className="content-section-panel">
                <CustomToggleControl
                  label={
                    <>
                      <SwipeIcon />
                      {__("Grab Cursor", "slider-future")}
                    </>
                  }
                  checked={grabCursor}
                  onChange={(value) => setAttributes({ grabCursor: value })}
                  showTooltip={true}
                  tooltipText={__("Activates a hand cursor that allows users to click and drag to navigate through slides, providing a more intuitive and interactive experience. It is intentionally disabled in the editor!", "slider-future")}
                  tooltipTop = {'11px'}
                  tooltipLeft = {'60%'}
                />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SliderControlsNaqvigation;
