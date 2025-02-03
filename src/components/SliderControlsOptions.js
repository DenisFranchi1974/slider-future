import {
  Icon,
  Tooltip,
  Notice,
  Button,
  ToggleControl,
  Modal,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Autoplay } from "swiper/modules";
import { info } from "@wordpress/icons";
import SectionSliderSelectorOptions from "./multitab/sectionSliderSelectorOptions";
import ColorOptionsPanel from "./colorPanel";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CustomSelectControl  from "../controls/select/CustomSelectControl";
import CustomRangeControl from "../controls/range/CustomRangeControl";
import CustomToggleControl from "../controls/toggle/CustomToggleControl";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import { optionsFilterSlider } from "../assets/options";
import ContrastIcon from '@mui/icons-material/Contrast';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import RepeatIcon from '@mui/icons-material/Repeat';
import LanguageIcon from '@mui/icons-material/Language';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import Grid4x4Icon from '@mui/icons-material/Grid4x4';
import OpacityIcon from '@mui/icons-material/Opacity';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import ProTooltip from './ProTooltip';
import ProNotice from './ProNotice';

const SliderControlsOptions = ({ attributes, setAttributes }) => {
  const {
    languageSlider,
    directionSlider,
    effect,
    slidesPerRow,
    loopMode,
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
    filter,
    colorOneEffect,
    colorTwoEffect,
    colorThreeEffect,
    enableGrid,
    enableRuler,
    opacityRuler,
    opacityGrid,
    colorGrid
  } = attributes;

  // Effect Color Default
  const defaultAttributes = {
    colorOneEffect: "rgba(243, 106, 188, 0.5)",
    colorTwoEffect: "rgba(243, 106, 188, 0)",
    colorThreeEffect: "rgba(243, 106, 188, 0.7)",
  };

  const resetEffect = () => {
    setAttributes({
     colorOneEffect: defaultAttributes.colorOneEffect,
      colorTwoEffect: defaultAttributes.colorTwoEffect,
      colorThreeEffect: defaultAttributes.colorThreeEffect,
    });
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

  // Creative Effect
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const applyPreset1 = () => {
    setAttributes({
      translateX: 0,
      translateY: 0,
      translateZ: -400,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      opacity: 1,
      nextTranslateX: 100,
      nextTranslateY: 0,
      nextTranslateZ: 0,
      nextRotateX: 0,
      nextRotateY: 0,
      nextRotateZ: 0,
      nextScale: 1,
      nextOpacity: 1,
    });
  };

  const applyPreset2 = () => {
    setAttributes({
      translateX: -120,
      translateY: 0,
      translateZ: -500,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      opacity: 1,
      nextTranslateX: 120,
      nextTranslateY: 0,
      nextTranslateZ: -500,
      nextRotateX: 0,
      nextRotateY: 0,
      nextRotateZ: 0,
      nextScale: 1,
      nextOpacity: 1,
    });
  };

  const applyPreset3 = () => {
    setAttributes({
      translateX: -20,
      translateY: 0,
      translateZ: -1,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      opacity: 1,
      nextTranslateX: 100,
      nextTranslateY: 0,
      nextTranslateZ: 0,
      nextRotateX: 0,
      nextRotateY: 0,
      nextRotateZ: 0,
      nextScale: 1,
      nextOpacity: 1,
    });
  };

  const applyPreset4 = () => {
    setAttributes({
      translateX: 0,
      translateY: 0,
      translateZ: -800,
      rotateX: 180,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      opacity: 1,
      nextTranslateX: 0,
      nextTranslateY: 0,
      nextTranslateZ: -800,
      nextRotateX: -180,
      nextRotateY: 0,
      nextRotateZ: 0,
      nextScale: 1,
      nextOpacity: 1,
    });
  };

  const applyPreset5 = () => {
    setAttributes({
      translateX: -120,
      translateY: 0,
      translateZ: -800,
      rotateX: 0,
      rotateY: 0,
      rotateZ: -90,
      scale: 1,
      opacity: 1,
      nextTranslateX: 120,
      nextTranslateY: 0,
      nextTranslateZ: -800,
      nextRotateX: 0,
      nextRotateY: 0,
      nextRotateZ: 90,
      nextScale: 1,
      nextOpacity: 1,
    });
  };

  const applyPreset6 = () => {
    setAttributes({
      translateX: -70,
      translateY: 0,
      translateZ: -400,
      rotateX: 0,
      rotateY: -100,
      rotateZ: 0,
      scale: 1,
      opacity: 1,
      nextTranslateX: 70,
      nextTranslateY: 0,
      nextTranslateZ: -400,
      nextRotateX: 0,
      nextRotateY: 100,
      nextRotateZ: 0,
      nextScale: 1,
      nextOpacity: 1,
    });
  };

  const [isProFeature, setIsProFeature] = useState(true);

  useEffect(() => {
      if (typeof window.isProFeature !== 'undefined') {
          setIsProFeature(window.isProFeature);
      }
  }, []);

  const key = `${translateX}-${translateY}-${translateZ}-${rotateX}-${rotateY}-${rotateZ}-${scale}-${opacity}-${nextTranslateX}-${nextTranslateY}-${nextTranslateZ}-${nextRotateX}-${nextRotateY}-${nextRotateZ}-${nextScale}-${nextOpacity}`;

  // Section slider
  const [activeSectionOptions, setActiveSectionSliderOptions] =
    useState("animation");

  const showThirdColor = [
    "filter-glitch",
    "filter-prism",
    "filter-inverse",
  ].includes(filter);

  // Determina se mostrare i colori
  const showColors = filter !== " ";

  return (
    <>
      <div className="content-subdescription-section-slider">
        <h2>{__("Slide Options")}</h2>
      </div>
      <SectionSliderSelectorOptions
        onSectionChange={setActiveSectionSliderOptions}
      />
      {activeSectionOptions === "animation" && (
        <>
          <div className="content-title-custom-panel">
            <h2 className="title-custom-panel">
              {__("Animation", "slider-future")}
            </h2>
          </div>
          <div className="slider-future-panel content-section-custom-panel">
            <div className="content-section-panel">
                <CustomSelectControl
                  label={
                    <>
                      <AutoAwesomeIcon />
                      {__("Effect", "slider-future")}
                    </>
                  }
                  value={effect}
                  onChange={(val) => setAttributes({ effect: val })}
                  options={[
                    { label: __("Slider", "slider-future"), value: "slider-future" },
                    { label: __("Fade", "slider-future"), value: "fade" },
                    !isProFeature
                    ? { label: __("Cube", "slider-future"), value: "cube" }
                    : { label: __("Cube (Pro)", "slider-future"), value: "cube-pro" },
                    { label: __("Flip", "slider-future"), value: "flip" },
                    {
                      label: __("Coverflow", "slider-future"),
                      value: "coverflow",
                    },
                    !isProFeature
                    ? { label: __("Cards", "slider-future"), value: "cards" }
                    : { label: __("Cards (Pro)", "slider-future"), value: "cards-pro" },
                    { label: __("Creative", "slider-future"), value: "creative" },
                  ]}
                />
                {effect === "cube-pro" && (
                      <ProNotice />
                )}
                {effect === "cards-pro" && (
                     <ProNotice />
                )}
              {effect == "flip" && (
                <>
                  <p
                    className="notice components-base-control__help"
                    style={{ borderRadius: "0" }}
                  >
                    {__(
                      'Warning: Make sure you have set "Space Between" to 0, and that there are no borders or border-radius applied, for this effect to work properly!',
                      "slider-future"
                    )}
                  </p>
                </>
              )}
              {effect == "cube" && (
                <>
                    <CustomToggleControl
                      label={__("Shadow", "slider-future")}
                      checked={shadow}
                      onChange={(value) => setAttributes({ shadow: value })}
                      showTooltip={true}
                      tooltipTop = {'10px'}
                      tooltipLeft = {'50%'}
                      tooltipText={__("An overall shadow that appears behind the cube is added. This shadow gives an overall depth to the cube animation, making it more three-dimensional. The shadow is static relative to the cube and does not change with each slide.", "slider-future")}
                    />
                    <CustomToggleControl
                      label={__("Slideshadow", "slider-future")}
                      checked={slideShadows}
                      onChange={(value) =>
                        setAttributes({ slideShadows: value })
                      }
                      showTooltip={true}
                      tooltipTop = {'10px'}
                      tooltipLeft = {'50%'}
                      tooltipText={__("Every single slide will have a shadow cast on it. These shadows change dynamically as the slides rotate, giving a more detailed and realistic depth effect to transitions between slides. The shadows of the slides make the movement and rotation of the individual faces of the cube visible.", "slider-future")}
                    />
                  {(shadow || slideShadows) && (
                    <>
                        <CustomRangeControl
                          label={__("Shadow offset (px)", "slider-future")}
                          value={shadowOffset}
                          onChange={(val) =>
                            setAttributes({ shadowOffset: val })
                          }
                          min={0}
                          max={100}
                          step={1}
                        />
                        <CustomRangeControl
                          label={__("Shadow scale (ratio)", "slider-future")}
                          value={shadowScale}
                          onChange={(val) =>
                            setAttributes({ shadowScale: val })
                          }
                          min={0}
                          max={2}
                          step={0.1}
                        />
                    </>
                  )}
                </>
              )}
              {effect == "coverflow" && (
                <>
                 <div className={`${isProFeature ? 'hover-pro' : ''}`} style={{position:'relative'}}>
                    <CustomToggleControl
                      label={__("Slideshadow", "slider-future")}
                      checked={slideShadows}
                      onChange={(value) =>
                        setAttributes({ slideShadows: value })
                      }
                      showTooltip={true}
                      tooltipTop = {'10px'}
                      tooltipLeft = {'50%'}
                      tooltipText={__("Enables slides shadows.", "slider-future")}
                      disabled= {isProFeature}
                    />
                    {isProFeature && (
                      <ProTooltip
                      tooltipProTop={'14px'}
                        tooltipProRight={'38px'}
                        />
                     )}
                    </div>
                    <div className={`${isProFeature ? 'hover-pro' : ''}`} style={{position:'relative'}}>
                    <CustomRangeControl
                      label={__("Depth", "slider-future")}
                      value={depth}
                      onChange={(val) => setAttributes({ depth: val })}
                      min={0}
                      max={1000}
                      step={1}
                      showTooltip={true}
                      tooltipTop = {'3px'}
                      tooltipLeft = {'50%'}
                      tooltipText={__("Depth offset in px(slides translate in Z axis)", "slider-future")}
                      disabled= {isProFeature}
                    />
                      {isProFeature && (
                      <ProTooltip
                      tooltipProTop={'6px'}
                        tooltipProRight={'75px'}
                        />
                     )}
                       </div>
                       <div className={`${isProFeature ? 'hover-pro' : ''}`} style={{position:'relative'}}>
                    <CustomRangeControl
                      label={__("Rotate", "slider-future")}
                      value={rotate}
                      onChange={(val) => setAttributes({ rotate: val })}
                      min={0}
                      max={360}
                      step={1}
                      showTooltip={true}
                      tooltipTop = {'3px'}
                      tooltipLeft = {'50%'}
                      tooltipText={__("Slide rotate in degrees", "slider-future")}
                      disabled= {isProFeature}
                    />
                     {isProFeature && (
                      <ProTooltip
                      tooltipProTop={'6px'}
                        tooltipProRight={'75px'}
                        />
                     )}
                     </div>
                      <div className={`${isProFeature ? 'hover-pro' : ''}`} style={{position:'relative'}}>
                    <CustomRangeControl
                      label={__("Stretch", "slider-future")}
                      value={stretch}
                      onChange={(val) => setAttributes({ stretch: val })}
                      min={-100}
                      max={100}
                      step={1}
                      showTooltip={true}
                      tooltipTop = {'3px'}
                      tooltipLeft = {'50%'}
                      tooltipText={__("Stretch space between slides (in px)", "slider-future")}
                      disabled= {isProFeature}
                    />
                     {isProFeature && (
                      <ProTooltip
                      tooltipProTop={'6px'}
                        tooltipProRight={'75px'}
                        />
                     )}
                     </div>
                      <div className={`${isProFeature ? 'hover-pro' : ''}`} style={{position:'relative'}}>
                    <CustomRangeControl
                      label={__("Effect multiplier", "slider-future")}
                      value={modifier}
                      onChange={(val) => setAttributes({ modifier: val })}
                      min={0}
                      max={3}
                      step={0.1}
                      disabled= {isProFeature}
                    />
                     {isProFeature && (
                      <ProTooltip
                      tooltipProTop={'6px'}
                        tooltipProRight={'75px'}
                        />
                     )}
                     </div>
                </>
              )}
              {effect == "cards" && (
                <>
                    <CustomToggleControl
                      label={__("Slideshadow", "slider-future")}
                      checked={slideShadows}
                      onChange={(value) =>
                        setAttributes({ slideShadows: value })
                      }
                      showTooltip={true}
                      tooltipTop = {'10px'}
                      tooltipLeft = {'50%'}
                      tooltipText={__("Enables slides shadows.", "slider-future")}
                    />
                    <CustomToggleControl
                      label={__("Rotate", "slider-future")}
                      checked={rotateCards}
                      onChange={(value) =>
                        setAttributes({ rotateCards: value })
                      }
                      showTooltip={true}
                      tooltipTop = {'10px'}
                      tooltipLeft = {'50%'}
                      tooltipText={__("Enables cards rotation", "slider-future")}
                    />
                </>
              )}
              {effect == "creative" && (
                <Button onClick={openModal} className="button-creative">
                  {__("Creative effect configuration", "slider-future")}
                 <NavigateNextIcon />
                </Button>
              )}
              {effect == "fade" && (
                <div className={`custom-select ${isProFeature ? 'hover-pro' : ''}`} style={{position:'relative'}}>
                  <CustomToggleControl
                     __nextHasNoMarginBottom
                    label={__("Crossfade", "slider-future")}
                    checked={crossFade}
                    onChange={(value) => setAttributes({ crossFade: value })}
                    disabled= {isProFeature}
                  />
                  {isProFeature && (
                  <ProTooltip
                  tooltipProTop={'20px'}
                    tooltipProRight={'50px'}
                    />
                  )}
                  {crossFade == true && (
                    <Tooltip
                      placement="top"
                      style={{
                        padding: "10px",
                        maxWidth: "300px",
                        borderRadius: "4px",
                      }}
                      text={__(
                        "The current slide fades out while the new slide appears simultaneously.",
                        "slider-future"
                      )}
                    >
                      <Icon icon={info} className="tooltip-icon" />
                    </Tooltip>
                  )}
                  {crossFade == false && (
                    <Tooltip
                      placement="top"
                      style={{
                        padding: "10px",
                        maxWidth: "300px",
                        borderRadius: "4px",
                      }}
                      text={__(
                        "The current slide completely disappears before the new slide starts to appear.",
                        "slider-future"
                      )}
                    >
                      <Icon icon={info} className="tooltip-icon" />
                    </Tooltip>
                  )}
                </div>
              )}
                {effect !== "cube-pro" && effect !== "cards-pro" && (
                <CustomRangeControl
                  label={
                    <>
                       <HourglassBottomIcon />
                      {__("Transition duration", "slider-future")}
                    </>
                  }
                  value={speed}
                  onChange={(val) => setAttributes({ speed: val })}
                  min={0}
                  max={10000}
                  showTooltip={true}
                  tooltipTop = {'2px'}
                  tooltipLeft = {'60%'}
                  tooltipText={__("Duration of transition between slides (in ms).", "slider-future")}
                />
                )}
            </div>
          </div>
        </>
      )}
      {activeSectionOptions === "filter" && (
        <>
          <div className="content-title-custom-panel">
            <h2 className="title-custom-panel">
              {__("Filters", "slider-future")}
            </h2>
          </div>
          <div className="slider-future-panel content-section-custom-panel">
            <div className={`content-section-panel ${isProFeature ? 'hover-pro' : ''}`} style={{position:'relative'}}>
                <CustomSelectControl
                  label={
                    <>
                      <BlurOnIcon />
                      {__("Bg Filter", "slider-future")}
                    </>
                  }
                  value={filter}
                  onChange={(val) => {
                    setAttributes({ filter: val });
                  }}
                  options={optionsFilterSlider}
                  disabled= {isProFeature}
                />
                 {isProFeature && (
                      <ProTooltip
                      tooltipProTop={'13px'}
                        tooltipProRight={'92px'}
                        />
                     )}
              {showColors && (
                <>
                  <div className="custom-select color">
                    <ColorOptionsPanel
                      colorNormal={colorOneEffect}
                      setColorNormal={(color) =>
                        setAttributes({ colorOneEffect: color })
                      }
                      buttonTitle={__("First Color", "slider-future")}
                      buttonIcon={
                        <ContrastIcon />
                      }
                    />
                  </div>
                  <div className="custom-select color">
                    <ColorOptionsPanel
                      colorNormal={colorTwoEffect}
                      setColorNormal={(color) =>
                        setAttributes({ colorTwoEffect: color })
                      }
                      buttonTitle={__("Second Color", "slider-future")}
                      buttonIcon={
                        <ContrastIcon />
                      }
                    />
                  </div>
                  {showThirdColor && (
                    <div className="custom-select color">
                      <ColorOptionsPanel
                        colorNormal={colorThreeEffect}
                        setColorNormal={(color) =>
                          setAttributes({ colorThreeEffect: color })
                        }
                        buttonTitle={__("Third Color", "slider-future")}
                        buttonIcon={
                          <ContrastIcon />
                        }
                      />
                    </div>
                  )}
                  <Button onClick={resetEffect} className="button-reset">
                  <RestartAltIcon />
                    {__("Reset Effect Color", "slider-future")}
                  </Button>
                </>
              )}
            </div>
          </div>
        </>
      )}
      {activeSectionOptions === "loop" && (
        <>
          <div className="content-title-custom-panel">
            <h2 className="title-custom-panel">
              {__("Loop Layers", "slider-future")}
            </h2>
          </div>
          <div className="slider-future-panel content-section-custom-panel">
            <div className="content-section-panel">
                <CustomSelectControl
                  label={
                    <>
                      <RepeatIcon />
                      {__("Loop Mode", "slider-future")}
                    </>
                  }
                  value={loopMode}
                  onChange={(val) => {
                    setAttributes({ loopMode: val });
                  }}
                  options={[
                    {
                      label: __("Disable", "slider-future"),
                      value: "disable",
                    },
                    {
                      label: __("Enable", "slider-future"),
                      value: "enable",
                    },
                    !isProFeature
                    ? { label: __("Rewind", "slider-future"), value: "rewind" }
                    : { label: __("Rewind (Pro)", "slider-future"), value: "rewind-pro" },
                  ]}
                  showTooltip={true}
                  tooltipTop = {'10px'}
                  tooltipLeft = {'45%'}
                  tooltipText={__("Enables continuous loop mode", "slider-future")}
                />
                 {loopMode === "rewind-pro" && (
                      <ProNotice />
                )}
              {showLoopNotice && (
                <Notice status="warning" isDismissible={false}>
                  {__(
                    'Loop mode is not compatible with grid.fill = "row".  ',
                    "slider-future"
                  )}
                </Notice>
              )}
            </div>
          </div>
        </>
      )}
      {activeSectionOptions === "language" && (
        <>
          <div className="content-title-custom-panel">
            <h2 className="title-custom-panel">
              {__("Language", "slider-future")}
            </h2>
          </div>
          <div className="slider-future-panel content-section-custom-panel">
          <div className={`content-section-panel" ${isProFeature ? 'hover-pro' : ''}`} style={{position:'relative'}}>
                <CustomSelectControl
                  label={
                    <>
                      <LanguageIcon />
                      {__("Language direction", "slider-future")}
                    </>
                  }
                  value={languageSlider}
                  onChange={(val) => setAttributes({ languageSlider: val })}
                  options={[
                    { label: __("LTR", "slider-future"), value: "ltr" },
                    { label: __("RTL", "slider-future"), value: "rtl" },
                  ]}
                  disabled= {isProFeature}
                />
                 {isProFeature && (
                      <ProTooltip
                      tooltipProTop={'13px'}
                        tooltipProRight={'92px'}
                        />
                     )}
            </div>
          </div>
        </>
      )}
      {activeSectionOptions === "direction" && (
        <>
          <div className="content-title-custom-panel">
            <h2 className="title-custom-panel">
              {__("Direction", "slider-future")}
            </h2>
          </div>
          <div className="slider-future-panel content-section-custom-panel">
          <div className={`content-section-panel" ${isProFeature ? 'hover-pro' : ''}`} style={{position:'relative'}}>
                <CustomSelectControl
                  label={
                    <>
                      <OpenWithIcon />
                      {__("Slider direction", "slider-future")}
                    </>
                  }
                  value={directionSlider}
                  onChange={(val) => setAttributes({ directionSlider: val })}
                  options={[
                    { label: __("Horizontal", "slider-future"), value: "horizontal" },
                    { label: __("Vertical", "slider-future"), value: "vertical" },
                  ]}
                  disabled= {isProFeature}
                />
                {isProFeature && (
                      <ProTooltip
                      tooltipProTop={'13px'}
                        tooltipProRight={'110px'}
                        />
                     )}
              {directionSlider === "vertical" && (
                <p className="notice components-base-control__help">
                  {__(
                    "You have to adjust a maximum height of the Slider!",
                    "slider-future"
                  )}
                </p>
              )}
            </div>
          </div>
        </>
      )}
      {activeSectionOptions === "design" && (
        <>
          <div className="content-title-custom-panel">
            <h2 className="title-custom-panel">
              {__("Design tools", "slider-future")}
            </h2>
          </div>
          <div className="slider-future-panel content-section-custom-panel">
            <div className="content-section-panel">
            <div className={`${isProFeature ? 'hover-pro' : ''}`} style={{position:'relative'}}>
                  <CustomToggleControl
                    label={
                      <>
                      <ArchitectureIcon />
                        {__("Enable rulers", "slider-future")}
                      </>
                    }
                    checked={enableRuler}
                    onChange={(val) => setAttributes({ enableRuler: val })}
                    disabled= {isProFeature}
                  />
                   {isProFeature && (
                  <ProTooltip
                  tooltipProTop={'14px'}
                    tooltipProRight={'38px'}
                    />
                  )}
                  </div>
                {enableRuler && (
                    <CustomRangeControl
                      label={__("Opacity", "slider-future")}
                      value={opacityRuler}
                      onChange={(val) => setAttributes({ opacityRuler: val })}
                      min={.1}
                      max={1}
                      step={0.1}
                    />
                )}
                <div className={`${isProFeature ? 'hover-pro' : ''}`} style={{position:'relative'}}>
                  <CustomToggleControl
                    label={
                      <>
                      <Grid4x4Icon />
                        {__("Enable grid", "slider-future")}
                      </>
                    }
                    checked={enableGrid}
                    onChange={(val) => setAttributes({ enableGrid: val })}
                    disabled= {isProFeature}
                  />
                   {isProFeature && (
                  <ProTooltip
                  tooltipProTop={'14px'}
                    tooltipProRight={'38px'}
                    />
                  )}
                  </div>
                {enableGrid && (
                <>
                    <CustomRangeControl
                      label={__("Opacity", "slider-future")}
                      value={opacityGrid}
                      onChange={(val) => setAttributes({ opacityGrid: val })}
                      min={.1}
                      max={1}
                      step={0.1}
                    />
                  <div className="custom-select color">
                      <ColorOptionsPanel
                        colorNormal={colorGrid}
                        setColorNormal={(color) =>
                          setAttributes({ colorGrid: color })
                        }
                        buttonTitle={__("Color", "slider-future")}
                        buttonIcon={
                          <OpacityIcon />
                        }
                      />
                    </div>
                  </>
                )}
            </div>
          </div>
        </>
      )}

      {/* Modal Creative Effect */}
      {isOpen && (
        <Modal
          title={__("Creative effect configuration", "slider-future")}
          onRequestClose={closeModal}
          className="slider-future-modal"
        >
          <div className="modal-content">
            <div className="row">
              <div className="column left">
                <div className="preview-slider">
                  {/* Anteprima Slider */}
                  <p>{__("PREVIEW", "slider-future")}</p>
                  <Swiper
                    key={key}
                    autoplay={{
                      delay: 1200,
                    }}
                    speed={"1000"}
                    loop={true}
                    effect={"creative"}
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
                    modules={[EffectCreative, Autoplay]}
                  >
                    <SwiperSlide style={{height:'160px'}}>{__("Slide 1", "slider-future")}</SwiperSlide>
                    <SwiperSlide style={{height:'160px'}}>{__("Slide 2", "slider-future")}</SwiperSlide>
                    <SwiperSlide style={{height:'160px'}}>{__("Slide 3", "slider-future")}</SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className="column right">
                {/* Preset Buttons */}
                <p>{__("PRESETS", "slider-future")}</p>
                <div className="content-preset">
                  <Button variant="primary" onClick={applyPreset1}>
                    {__("Preset 1", "slider-future")}
                  </Button>
                  <Button variant="primary" onClick={applyPreset2}>
                    {__("Preset 2", "slider-future")}
                  </Button>
                  <Button variant="primary" onClick={applyPreset3}>
                    {__("Preset 3", "slider-future")}
                  </Button>
                  <Button variant="primary" onClick={applyPreset4}>
                    {__("Preset 4", "slider-future")}
                  </Button>
                  <Button variant="primary" onClick={applyPreset5} disabled={isProFeature}>
                    {__("Preset 5", "slider-future")}
                  </Button>
                  <Button variant="primary" onClick={applyPreset6} disabled={isProFeature}>
                    {__("Preset 6", "slider-future")}
                  </Button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="column left">
                {/* Previous Slide Controls */}
                <p>{__("PREVIOUS SLIDE", "slider-future")}</p>
                <div className={`content-select-modal ${isProFeature ? 'hover-pro' : ''}`} style={{position:'relative'}}>
                <div className="custom-select select-modal">
                {isProFeature && (
                        <ProTooltip
                        tooltipProTop={'14px'}
                          tooltipProRight={'38px'}
                          />
                        )}
                    <CustomRangeControl
                      label={
                        <>
                          <ImportExportIcon style={{transform:'rotate(90deg)'}} />
                          {__("Translate X (%)", "slider-future")}
                        </>
                      }
                      value={translateX}
                      onChange={(val) => setAttributes({ translateX: val })}
                      min={-200}
                      max={200}
                      step={1}
                      disabled={isProFeature}
                    />
                    </div>
                    <div className="custom-select select-modal">
                    <CustomRangeControl
                      label={
                        <>
                          <ImportExportIcon />
                          {__("Translate Y (%)", "slider-future")}
                        </>
                      }
                      value={translateY}
                      onChange={(val) => setAttributes({ translateY: val })}
                      min={-200}
                      max={200}
                      step={1}
                      disabled={isProFeature}
                    />
                    </div>
                    <div className="custom-select select-modal">
                    <CustomRangeControl
                      label={
                        <>
                            <ImportExportIcon style={{transform:'rotate(45deg)'}} />
                          {__("Translate Z (px)", "slider-future")}
                        </>
                      }
                      value={translateZ}
                      onChange={(val) => setAttributes({ translateZ: val })}
                      min={-1000}
                      max={1000}
                      step={1}
                      disabled={isProFeature}
                    />
                    </div>
                </div>
                <div className={`content-select-modal ${isProFeature ? 'hover-pro' : ''}`} style={{position:'relative'}}>
                <div className="custom-select select-modal">
                {isProFeature && (
                        <ProTooltip
                        tooltipProTop={'14px'}
                          tooltipProRight={'38px'}
                          />
                        )}
                    <CustomRangeControl
                      label={
                        <>
                           <ThreeSixtyIcon style={{transform:'rotate(-90deg)'}} />
                          {__("Rotate X (deg)", "slider-future")}
                        </>
                      }
                      value={rotateX}
                      onChange={(val) => setAttributes({ rotateX: val })}
                      min={-180}
                      max={180}
                      step={1}
                      disabled={isProFeature}
                    />
                    </div>
                  <div className="custom-select select-modal">
                    <CustomRangeControl
                      label={
                        <>
                          <ThreeSixtyIcon />
                          {__("Rotate Y (deg)", "slider-future")}
                        </>
                      }
                      value={rotateY}
                      onChange={(val) => setAttributes({ rotateY: val })}
                      min={-180}
                      max={180}
                      step={1}
                      disabled={isProFeature}
                    />
                  </div>
                  <div className="custom-select select-modal">
                    <CustomRangeControl
                      label={
                        <>
                          <AutorenewIcon />
                          {__("Rotate Z (deg)", "slider-future")}
                        </>
                      }
                      value={rotateZ}
                      onChange={(val) => setAttributes({ rotateZ: val })}
                      min={-180}
                      max={180}
                      step={1}
                      disabled={isProFeature}
                    />
                  </div>
                </div>
                <div className={`content-select-modal ${isProFeature ? 'hover-pro' : ''}`} style={{position:'relative'}}>
                  <div className="custom-select select-modal">
                  {isProFeature && (
                        <ProTooltip
                        tooltipProTop={'14px'}
                          tooltipProRight={'38px'}
                          />
                        )}
                    <CustomRangeControl
                      label={<><AspectRatioIcon />{__("Scale", "slider-future")}</>}
                      value={scale}
                      onChange={(val) => setAttributes({ scale: val })}
                      min={0}
                      max={2}
                      step={0.1}
                      disabled={isProFeature}
                    />
                  </div>
                  <div className="custom-select select-modal">
                    <CustomRangeControl
                      label={<><OpacityIcon />{__("Opacity", "slider-future")}</>}
                      value={opacity}
                      onChange={(val) => setAttributes({ opacity: val })}
                      min={0.1}
                      max={1}
                      step={0.1}
                      disabled={isProFeature}
                    />
                  </div>
                </div>
              </div>
              <div className="column right">
                {/* Next Slide Controls */}
                <p>{__("NEXT SLIDE", "slider-future")}</p>
                <div className={`content-select-modal ${isProFeature ? 'hover-pro' : ''}`} style={{position:'relative'}}>
                  <div className="custom-select select-modal">
                  {isProFeature && (
                        <ProTooltip
                        tooltipProTop={'14px'}
                          tooltipProRight={'38px'}
                          />
                        )}
                    <CustomRangeControl
                      label={
                        <>
                            <ImportExportIcon style={{transform:'rotate(90deg)'}} />
                          {__("Translate X (%)", "slider-future")}
                        </>
                      }
                      value={nextTranslateX}
                      onChange={(val) => setAttributes({ nextTranslateX: val })}
                      min={-200}
                      max={200}
                      step={1}
                      disabled={isProFeature}
                    />
                  </div>
                  <div className="custom-select select-modal">
                    <CustomRangeControl
                      label={
                        <>
                            <ImportExportIcon />
                          {__("Translate Y (%)", "slider-future")}
                        </>
                      }
                      value={nextTranslateY}
                      onChange={(val) => setAttributes({ nextTranslateY: val })}
                      min={-200}
                      max={200}
                      step={1}
                      disabled={isProFeature}
                    />
                  </div>
                  <div className="custom-select select-modal">
                    <CustomRangeControl
                      label={
                        <>
                           <ImportExportIcon style={{transform:'rotate(45deg)'}} />
                          {__("Translate Z (px)", "slider-future")}
                        </>
                      }
                      value={nextTranslateZ}
                      onChange={(val) => setAttributes({ nextTranslateZ: val })}
                      min={-1000}
                      max={1000}
                      step={1}
                      disabled={isProFeature}
                    />
                  </div>
                </div>
                <div className={`content-select-modal ${isProFeature ? 'hover-pro' : ''}`} style={{position:'relative'}}>
                  <div className="custom-select select-modal">
                  {isProFeature && (
                        <ProTooltip
                        tooltipProTop={'14px'}
                          tooltipProRight={'38px'}
                          />
                        )}
                    <CustomRangeControl
                      label={
                        <>
                           <ThreeSixtyIcon style={{transform:'rotate(-90deg)'}} />
                          {__("Rotate X (deg)", "slider-future")}
                        </>
                      }
                      value={nextRotateX}
                      onChange={(val) => setAttributes({ nextRotateX: val })}
                      min={-180}
                      max={180}
                      step={1}
                      disabled={isProFeature}
                    />
                  </div>
                  <div className="custom-select select-modal">
                    <CustomRangeControl
                      label={
                        <>
                           <ThreeSixtyIcon />
                          {__("Rotate Y (deg)", "slider-future")}
                        </>
                      }
                      value={nextRotateY}
                      onChange={(val) => setAttributes({ nextRotateY: val })}
                      min={-180}
                      max={180}
                      step={1}
                      disabled={isProFeature}
                    />
                  </div>
                  <div className="custom-select select-modal">
                    <CustomRangeControl
                      label={
                        <>
                          <AutorenewIcon />
                          {__("Rotate Z (deg)", "slider-future")}
                        </>
                      }
                      value={nextRotateZ}
                      onChange={(val) => setAttributes({ nextRotateZ: val })}
                      min={-180}
                      max={180}
                      step={1}
                      disabled={isProFeature}
                    />
                  </div>
                </div>
                <div className={`content-select-modal ${isProFeature ? 'hover-pro' : ''}`} style={{position:'relative'}}>
                  <div className="custom-select select-modal">
                  {isProFeature && (
                        <ProTooltip
                        tooltipProTop={'14px'}
                          tooltipProRight={'38px'}
                          />
                        )}
                    <CustomRangeControl
                       label={<><AspectRatioIcon />{__("Scale", "slider-future")}</>}
                      value={nextScale}
                      onChange={(val) => setAttributes({ nextScale: val })}
                      min={0}
                      max={2}
                      step={0.1}
                      disabled={isProFeature}
                    />
                  </div>
                  <div className="custom-select select-modal">
                    <CustomRangeControl
                      label={<><OpacityIcon />{__("Opacity", "slider-future")}</>}
                      value={nextOpacity}
                      onChange={(val) => setAttributes({ nextOpacity: val })}
                      min={0.1}
                      max={1}
                      step={0.1}
                      disabled={isProFeature}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-bottmo-modal"></div>
          <Button className="button-save-modal" onClick={closeModal}>
            {__("Save", "slider-future")}
          </Button>
        </Modal>
      )}
    </>
  );
};

export default SliderControlsOptions;
