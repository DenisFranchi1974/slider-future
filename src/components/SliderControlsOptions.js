// SliderControls.js
import {
  SelectControl,
  Icon,
  Tooltip,
  Notice,
  RangeControl,
  Button,
  ToggleControl,
  Modal,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { EffectCreative, Autoplay } from "swiper/modules";
import { info } from "@wordpress/icons";
import SectionSliderSelectorOptions from "./sectionSliderSelectorOptions";
import ColorOptionsPanel from "./colorPanel";

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
    parallax,
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
              {__("Animation", "cocoblocks")}
            </h2>
          </div>
          <div className="cocoblocks-panel content-section-custom-panel">
            <div className="content-section-panel">
              <div className="custom-select select-control-label-right">
                <SelectControl
                  label={
                    <>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2L13.09 8.26L19.5 8.54L14.25 12.14L16.36 18.48L12 14.8L7.64 18.48L9.75 12.14L4.5 8.54L10.91 8.26L12 2Z"
                          fill="currentColor"
                        />
                        <path
                          d="M2 5L2.5 7.5L4 8L2.5 8.5L2 11L1.5 8.5L0 8L1.5 7.5L2 5Z"
                          fill="currentColor"
                        />
                        <path
                          d="M6 9L6.5 11.5L8 12L6.5 12.5L6 15L5.5 12.5L4 12L5.5 11.5L6 9Z"
                          fill="currentColor"
                        />
                      </svg>
                      {__("Effect", "cocoblocks")}
                    </>
                  }
                  value={effect}
                  onChange={(val) => setAttributes({ effect: val })}
                  options={[
                    { label: __("Slide", "cocoblocks"), value: "slide" },
                    { label: __("Fade", "cocoblocks"), value: "fade" },
                    { label: __("Cube", "cocoblocks"), value: "cube" },
                    { label: __("Flip", "cocoblocks"), value: "flip" },
                    {
                      label: __("Coverflow", "cocoblocks"),
                      value: "coverflow",
                    },
                    { label: __("Cards", "cocoblocks"), value: "cards" },
                    { label: __("Creative", "cocoblocks"), value: "creative" },
                  ]}
                />
              </div>
              {effect == "flip" && (
                <>
                  <p
                    className="notice components-base-control__help"
                    style={{ borderRadius: "0" }}
                  >
                    {__(
                      'Warning: Make sure you have set "Space Between" to 0 for this effect to work properly!',
                      "cocoblocks"
                    )}
                  </p>
                </>
              )}
              {effect == "cube" && (
                <>
                  <div className="custom-select">
                    <ToggleControl
                      label={__("Shadow", "cocoblocks")}
                      checked={shadow}
                      onChange={(value) => setAttributes({ shadow: value })}
                    />
                    <Tooltip
                      placement="top"
                      style={{
                        padding: "10px",
                        maxWidth: "300px",
                        borderRadius: "4px",
                      }}
                      text={__(
                        "An overall shadow that appears behind the cube is added. This shadow gives an overall depth to the cube animation, making it more three-dimensional. The shadow is static relative to the cube and does not change with each slide.",
                        "cocoblocks"
                      )}
                    >
                      <Icon icon={info} className="tooltip-icon" />
                    </Tooltip>
                  </div>
                  <div className="custom-select">
                    <ToggleControl
                      label={__("Slideshadow", "cocoblocks")}
                      checked={slideShadows}
                      onChange={(value) =>
                        setAttributes({ slideShadows: value })
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
                        "Every single slide will have a shadow cast on it. These shadows change dynamically as the slides rotate, giving a more detailed and realistic depth effect to transitions between slides. The shadows of the slides make the movement and rotation of the individual faces of the cube visible.",
                        "cocoblocks"
                      )}
                    >
                      <Icon icon={info} className="tooltip-icon" />
                    </Tooltip>
                  </div>

                  {(shadow || slideShadows) && (
                    <>
                      <div className="custom-select">
                        <RangeControl
                          label={__("Shadow offset (px)", "cocoblocks")}
                          value={shadowOffset}
                          onChange={(val) =>
                            setAttributes({ shadowOffset: val })
                          }
                          min={0}
                          max={100}
                          step={1}
                        />
                      </div>
                      <div className="custom-select">
                        <RangeControl
                          label={__("Shadow scale (ratio)", "cocoblocks")}
                          value={shadowScale}
                          onChange={(val) =>
                            setAttributes({ shadowScale: val })
                          }
                          min={0}
                          max={2}
                          step={0.1}
                        />
                      </div>
                    </>
                  )}
                </>
              )}
              {effect == "coverflow" && (
                <>
                  <div className="custom-select">
                    <ToggleControl
                      label={__("Slideshadow", "cocoblocks")}
                      checked={slideShadows}
                      onChange={(value) =>
                        setAttributes({ slideShadows: value })
                      }
                    />
                    <Tooltip
                      placement="top"
                      style={{
                        padding: "10px",
                        maxWidth: "300px",
                        borderRadius: "4px",
                      }}
                      text={__("Enables slides shadows.", "cocoblocks")}
                    >
                      <Icon icon={info} className="tooltip-icon" />
                    </Tooltip>
                  </div>
                  <div className="custom-select">
                    <RangeControl
                      label={__("Depth", "cocoblocks")}
                      value={depth}
                      onChange={(val) => setAttributes({ depth: val })}
                      min={0}
                      max={1000}
                      step={1}
                    />
                    <Tooltip
                      placement="top"
                      style={{
                        padding: "10px",
                        maxWidth: "300px",
                        borderRadius: "4px",
                      }}
                      text={__(
                        "Depth offset in px(slides translate in Z axis)",
                        "cocoblocks"
                      )}
                    >
                      <Icon
                        icon={info}
                        className="tooltip-icon"
                        style={{ top: "8px" }}
                      />
                    </Tooltip>
                  </div>
                  <div className="custom-select">
                    <RangeControl
                      label={__("Rotate", "cocoblocks")}
                      value={rotate}
                      onChange={(val) => setAttributes({ rotate: val })}
                      min={0}
                      max={360}
                      step={1}
                    />
                    <Tooltip
                      placement="top"
                      style={{
                        padding: "10px",
                        maxWidth: "300px",
                        borderRadius: "4px",
                      }}
                      text={__("Slide rotate in degrees", "cocoblocks")}
                    >
                      <Icon
                        icon={info}
                        className="tooltip-icon"
                        style={{ top: "8px" }}
                      />
                    </Tooltip>
                  </div>
                  <div className="custom-select">
                    <RangeControl
                      label={__("Stretch", "cocoblocks")}
                      value={stretch}
                      onChange={(val) => setAttributes({ stretch: val })}
                      min={-100}
                      max={100}
                      step={1}
                    />
                    <Tooltip
                      placement="top"
                      style={{
                        padding: "10px",
                        maxWidth: "300px",
                        borderRadius: "4px",
                      }}
                      text={__(
                        "Stretch space between slides (in px)",
                        "cocoblocks"
                      )}
                    >
                      <Icon
                        icon={info}
                        className="tooltip-icon"
                        style={{ top: "8px" }}
                      />
                    </Tooltip>
                  </div>
                  <div className="custom-select">
                    <RangeControl
                      label={__("Effect multiplier", "cocoblocks")}
                      value={modifier}
                      onChange={(val) => setAttributes({ modifier: val })}
                      min={0}
                      max={3}
                      step={0.1}
                    />
                  </div>
                </>
              )}
              {effect == "cards" && (
                <>
                  <div className="custom-select">
                    <ToggleControl
                      label={__("Slideshadow", "cocoblocks")}
                      checked={slideShadows}
                      onChange={(value) =>
                        setAttributes({ slideShadows: value })
                      }
                    />
                    <Tooltip
                      placement="top"
                      style={{
                        padding: "10px",
                        maxWidth: "300px",
                        borderRadius: "4px",
                      }}
                      text={__("Enables slides shadows.", "cocoblocks")}
                    >
                      <Icon icon={info} className="tooltip-icon" />
                    </Tooltip>
                  </div>
                  <div className="custom-select">
                    <ToggleControl
                      label={__("Rotate", "cocoblocks")}
                      checked={rotateCards}
                      onChange={(value) =>
                        setAttributes({ rotateCards: value })
                      }
                    />
                    <Tooltip
                      placement="top"
                      style={{
                        padding: "10px",
                        maxWidth: "300px",
                        borderRadius: "4px",
                      }}
                      text={__("Enables cards rotation", "cocoblocks")}
                    >
                      <Icon icon={info} className="tooltip-icon" />
                    </Tooltip>
                  </div>
                </>
              )}
              {effect == "creative" && (
                <Button onClick={openModal} className="button-creative">
                  {__("Creative effect configuration", "cocoblocks")}
                  <svg
                    height="16px"
                    viewBox="0 -960 960 960"
                    width="16px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                  </svg>
                </Button>
              )}
              {effect == "fade" && (
                <div className="custom-select">
                  <ToggleControl
                    label={__("Crossfade", "cocoblocks")}
                    checked={crossFade}
                    onChange={(value) => setAttributes({ crossFade: value })}
                  />
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
                        "cocoblocks"
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
                        "cocoblocks"
                      )}
                    >
                      <Icon icon={info} className="tooltip-icon" />
                    </Tooltip>
                  )}
                </div>
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
                        fill="#e8eaed"
                      >
                        <path d="M320-160h320v-120q0-66-47-113t-113-47q-66 0-113 47t-47 113v120ZM160-80v-80h80v-120q0-61 28.5-114.5T348-480q-51-32-79.5-85.5T240-680v-120h-80v-80h640v80h-80v120q0 61-28.5 114.5T612-480q51 32 79.5 85.5T720-280v120h80v80H160Z" />
                      </svg>
                      {__("Transition duration", "cocoblocks")}
                    </>
                  }
                  value={speed}
                  onChange={(val) => setAttributes({ speed: val })}
                  min={0}
                  max={10000}
                />
                <Tooltip
                  placement="top"
                  style={{
                    padding: "10px",
                    maxWidth: "300px",
                    borderRadius: "4px",
                  }}
                  text={__(
                    "Duration of transition between slides (in ms).",
                    "cocoblocks"
                  )}
                >
                  <Icon
                    icon={info}
                    className="tooltip-icon"
                    style={{ left: "66%", top: "4px" }}
                  />
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
                        fill="#e8eaed"
                      >
                        <path d="m680-320-56-56 63-64H440v-80h247l-63-64 56-56 160 160-160 160ZM200-200h80v-560h-80v560Zm-80 80v-720h240v720H120Zm320 0v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80ZM200-200h80-80Z" />
                      </svg>
                      {__("Parallax", "cocoblocks")}
                    </>
                  }
                  checked={parallax}
                  onChange={(value) => setAttributes({ parallax: value })}
                />
                <Tooltip
                  placement="top"
                  style={{
                    padding: "10px",
                    maxWidth: "300px",
                    borderRadius: "4px",
                  }}
                  text={__("Enables parallax transition effects", "cocoblocks")}
                >
                  <Icon
                    icon={info}
                    className="tooltip-icon"
                    style={{ left: "65%", top: "13px" }}
                  />
                </Tooltip>
              </div>
              {parallax == true && (
                <p
                  className="notice components-base-control__help"
                  style={{ borderRadius: 0, marginTop: 0 }}
                >
                  {__(
                    "By enabling this effect you will have additional controls available for the various elements of the Slides to adjust the Parallax effect!",
                    "cocoblocks"
                  )}
                </p>
              )}
            </div>
          </div>
        </>
      )}
      {activeSectionOptions === "filter" && (
        <>
          <div className="content-title-custom-panel">
            <h2 className="title-custom-panel">
              {__("Filters", "cocoblocks")}
            </h2>
          </div>
          <div className="cocoblocks-panel content-section-custom-panel">
            <div className="content-section-panel">
              <div className="custom-select select-control-label-right">
                <SelectControl
                  label={
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e8eaed"
                      >
                        <path d="M120-380q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm0-160q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm120 340q-17 0-28.5-11.5T200-240q0-17 11.5-28.5T240-280q17 0 28.5 11.5T280-240q0 17-11.5 28.5T240-200Zm0-160q-17 0-28.5-11.5T200-400q0-17 11.5-28.5T240-440q17 0 28.5 11.5T280-400q0 17-11.5 28.5T240-360Zm0-160q-17 0-28.5-11.5T200-560q0-17 11.5-28.5T240-600q17 0 28.5 11.5T280-560q0 17-11.5 28.5T240-520Zm0-160q-17 0-28.5-11.5T200-720q0-17 11.5-28.5T240-760q17 0 28.5 11.5T280-720q0 17-11.5 28.5T240-680Zm160 340q-25 0-42.5-17.5T340-400q0-25 17.5-42.5T400-460q25 0 42.5 17.5T460-400q0 25-17.5 42.5T400-340Zm0-160q-25 0-42.5-17.5T340-560q0-25 17.5-42.5T400-620q25 0 42.5 17.5T460-560q0 25-17.5 42.5T400-500Zm0 300q-17 0-28.5-11.5T360-240q0-17 11.5-28.5T400-280q17 0 28.5 11.5T440-240q0 17-11.5 28.5T400-200Zm0-480q-17 0-28.5-11.5T360-720q0-17 11.5-28.5T400-760q17 0 28.5 11.5T440-720q0 17-11.5 28.5T400-680Zm0 580q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm0-720q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm160 480q-25 0-42.5-17.5T500-400q0-25 17.5-42.5T560-460q25 0 42.5 17.5T620-400q0 25-17.5 42.5T560-340Zm0-160q-25 0-42.5-17.5T500-560q0-25 17.5-42.5T560-620q25 0 42.5 17.5T620-560q0 25-17.5 42.5T560-500Zm0 300q-17 0-28.5-11.5T520-240q0-17 11.5-28.5T560-280q17 0 28.5 11.5T600-240q0 17-11.5 28.5T560-200Zm0-480q-17 0-28.5-11.5T520-720q0-17 11.5-28.5T560-760q17 0 28.5 11.5T600-720q0 17-11.5 28.5T560-680Zm0 580q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm0-720q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm160 620q-17 0-28.5-11.5T680-240q0-17 11.5-28.5T720-280q17 0 28.5 11.5T760-240q0 17-11.5 28.5T720-200Zm0-160q-17 0-28.5-11.5T680-400q0-17 11.5-28.5T720-440q17 0 28.5 11.5T760-400q0 17-11.5 28.5T720-360Zm0-160q-17 0-28.5-11.5T680-560q0-17 11.5-28.5T720-600q17 0 28.5 11.5T760-560q0 17-11.5 28.5T720-520Zm0-160q-17 0-28.5-11.5T680-720q0-17 11.5-28.5T720-760q17 0 28.5 11.5T760-720q0 17-11.5 28.5T720-680Zm120 300q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm0-160q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Z" />
                      </svg>
                      {__("Bg Filter", "cocoblocks")}
                    </>
                  }
                  value={filter}
                  onChange={(val) => {
                    setAttributes({ filter: val });
                  }}
                  options={[
                    {
                      label: __("None", "cocoblocks"),
                      value: " ",
                    },
                    {
                      label: __("Lateral", "cocoblocks"),
                      value: "filter-lateral",
                    },
                    {
                      label: __("Central circle", "cocoblocks"),
                      value: "filter-central-circle",
                    },
                    {
                      label: __("Border fade", "cocoblocks"),
                      value: "filter-border-fade",
                    },
                    {
                      label: __("Vignette", "cocoblocks"),
                      value: "filter-vignette",
                    },
                    {
                      label: __("Spotlight", "cocoblocks"),
                      value: "filter-spotlight",
                    },
                    {
                      label: __("Diagonal", "cocoblocks"),
                      value: "filter-diagonal",
                    },
                    {
                      label: __("Nebula", "cocoblocks"),
                      value: "filter-nebula",
                    },
                    {
                      label: __("Glitch", "cocoblocks"),
                      value: "filter-glitch",
                    },
                    {
                      label: __("Prism", "cocoblocks"),
                      value: "filter-prism",
                    },
                    {
                      label: __("Inverse", "cocoblocks"),
                      value: "filter-inverse",
                    },
                  ]}
                />
              </div>
              {showColors && (
                <>
                  <div className="custom-select color">
                    <ColorOptionsPanel
                      colorNormal={colorOneEffect}
                      setColorNormal={(color) =>
                        setAttributes({ colorOneEffect: color })
                      }
                      buttonTitle={__("First Color", "cocoblocks")}
                      buttonIcon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 -960 960 960"
                          width="24px"
                          fill="#e8eaed"
                          style={{
                            marginRight: "3px",
                            height: "16px",
                            width: "16px",
                            position: "relative",
                            top: "3px",
                          }}
                        >
                          <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm40-83q119-15 199.5-104.5T800-480q0-123-80.5-212.5T520-797v634Z" />
                        </svg>
                      }
                    />
                  </div>
                  <div className="custom-select color">
                    <ColorOptionsPanel
                      colorNormal={colorTwoEffect}
                      setColorNormal={(color) =>
                        setAttributes({ colorTwoEffect: color })
                      }
                      buttonTitle={__("Second Color", "cocoblocks")}
                      buttonIcon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 -960 960 960"
                          width="24px"
                          fill="#e8eaed"
                          style={{
                            marginRight: "3px",
                            height: "16px",
                            width: "16px",
                            position: "relative",
                            top: "3px",
                          }}
                        >
                          <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm40-83q119-15 199.5-104.5T800-480q0-123-80.5-212.5T520-797v634Z" />
                        </svg>
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
                        buttonTitle={__("Third Color", "cocoblocks")}
                        buttonIcon={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#e8eaed"
                            style={{
                              marginRight: "3px",
                              height: "16px",
                              width: "16px",
                              position: "relative",
                              top: "3px",
                            }}
                          >
                            <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm40-83q119-15 199.5-104.5T800-480q0-123-80.5-212.5T520-797v634Z" />
                          </svg>
                        }
                      />
                    </div>
                  )}
                  <Button onClick={resetEffect} className="button-reset">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#5f6368"
                    >
                      <path d="M440-122q-121-15-200.5-105.5T160-440q0-66 26-126.5T260-672l57 57q-38 34-57.5 79T240-440q0 88 56 155.5T440-202v80Zm80 0v-80q87-16 143.5-83T720-440q0-100-70-170t-170-70h-3l44 44-56 56-140-140 140-140 56 56-44 44h3q134 0 227 93t93 227q0 121-79.5 211.5T520-122Z" />
                    </svg>
                    {__("Reset Effect Color", "cocoblocks")}
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
              {__("Loop Layers", "cocoblocks")}
            </h2>
          </div>
          <div className="cocoblocks-panel content-section-custom-panel">
            <div className="content-section-panel">
              <div className="custom-select select-control-label-right">
                <SelectControl
                  label={
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e8eaed"
                      >
                        <path d="M280-80 120-240l160-160 56 58-62 62h406v-160h80v240H274l62 62-56 58Zm-80-440v-240h486l-62-62 56-58 160 160-160 160-56-58 62-62H280v160h-80Z" />
                      </svg>
                      {__("Loop Mode", "cocoblocks")}
                    </>
                  }
                  value={loopMode}
                  onChange={(val) => {
                    setAttributes({ loopMode: val });
                  }}
                  options={[
                    {
                      label: __("Disable", "cocoblocks"),
                      value: "disable",
                    },
                    {
                      label: __("Enable", "cocoblocks"),
                      value: "enable",
                    },
                    {
                      label: __("Rewind", "cocoblocks"),
                      value: "rewind",
                    },
                  ]}
                />
                <Tooltip
                  placement="top"
                  style={{
                    padding: "10px",
                    maxWidth: "300px",
                    borderRadius: "4px",
                  }}
                  text={__("Enables continuous loop mode", "cocoblocks")}
                >
                  <Icon icon={info} className="tooltip-icon" />
                </Tooltip>
              </div>
              {showLoopNotice && (
                <Notice status="warning" isDismissible={false}>
                  {__(
                    'Loop mode is not compatible with grid.fill = "row".  ',
                    "cocoblocks"
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
              {__("Language", "cocoblocks")}
            </h2>
          </div>
          <div className="cocoblocks-panel content-section-custom-panel">
            <div className="content-section-panel">
              <div className="custom-select select-control-label-right">
                <SelectControl
                  label={
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e8eaed"
                      >
                        <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z" />
                      </svg>
                      {__("Language direction", "cocoblocks")}
                    </>
                  }
                  value={languageSlider}
                  onChange={(val) => setAttributes({ languageSlider: val })}
                  options={[
                    { label: __("LTR", "slide"), value: "ltr" },
                    { label: __("RTL", "cocoblocks"), value: "rtl" },
                  ]}
                />
              </div>
            </div>
          </div>
        </>
      )}
      {activeSectionOptions === "direction" && (
        <>
          <div className="content-title-custom-panel">
            <h2 className="title-custom-panel">
              {__("Direction", "cocoblocks")}
            </h2>
          </div>
          <div className="cocoblocks-panel content-section-custom-panel">
            <div className="content-section-panel">
              <div className="custom-select select-control-label-right">
                <SelectControl
                  label={
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e8eaed"
                      >
                        <path d="M480-80 310-250l57-57 73 73v-166h80v165l72-73 58 58L480-80ZM250-310 80-480l169-169 57 57-72 72h166v80H235l73 72-58 58Zm460 0-57-57 73-73H560v-80h165l-73-72 58-58 170 170-170 170ZM440-560v-166l-73 73-57-57 170-170 170 170-57 57-73-73v166h-80Z" />
                      </svg>
                      {__("Slider direction", "cocoblocks")}
                    </>
                  }
                  value={directionSlider}
                  onChange={(val) => setAttributes({ directionSlider: val })}
                  options={[
                    { label: __("Horizontal", "slide"), value: "horizontal" },
                    { label: __("Vertical", "cocoblocks"), value: "vertical" },
                  ]}
                />
              </div>
              {directionSlider === "vertical" && (
                <p className="notice components-base-control__help">
                  {__(
                    "You have to adjust a maximum height of the Slider!",
                    "cocoblocks"
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
              {__("Design tools", "cocoblocks")}
            </h2>
          </div>
          <div className="cocoblocks-panel content-section-custom-panel">
            <div className="content-section-panel">
            <div className="custom-select">
                  <ToggleControl
                    label={
                      <>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M160-240q-33 0-56.5-23.5T80-320v-320q0-33 23.5-56.5T160-720h640q33 0 56.5 23.5T880-640v320q0 33-23.5 56.5T800-240H160Zm0-80h640v-320H680v160h-80v-160h-80v160h-80v-160h-80v160h-80v-160H160v320Zm120-160h80-80Zm160 0h80-80Zm160 0h80-80Zm-120 0Z"/></svg>
                        {__("Enable rulers", "cocoblocks")}
                      </>
                    }
                    checked={enableRuler}
                    onChange={(val) => setAttributes({ enableRuler: val })}
                  />
                </div>
                {enableRuler && (
                <div className="custom-select select-modal">
                    <RangeControl
                      label={__("Opacity", "cocoblocks")}
                      value={opacityRuler}
                      onChange={(val) => setAttributes({ opacityRuler: val })}
                      min={.1}
                      max={1}
                      step={0.1}
                    />
                  </div>
                )}
                <div className="custom-select">
                  <ToggleControl
                    label={
                      <>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-200h80v-80h-80v80Zm160 0h80v-80h-80v80Zm160 0h80v-80h-80v80Zm160 0h80v-80h-80v80ZM200-680h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160h80v-80h-80v80Zm160-320h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160h80v-80h-80v80Zm160-320h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160h80v-80h-80v80Zm160-320h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160h80v-80h-80v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"/></svg>
                        {__("Enable grid", "cocoblocks")}
                      </>
                    }
                    checked={enableGrid}
                    onChange={(val) => setAttributes({ enableGrid: val })}
                  />
                </div>
                {enableGrid && (
                <>
                <div className="custom-select select-modal">
                    <RangeControl
                      label={__("Opacity", "cocoblocks")}
                      value={opacityGrid}
                      onChange={(val) => setAttributes({ opacityGrid: val })}
                      min={.1}
                      max={1}
                      step={0.1}
                    />
                  </div>
                  <div className="custom-select color">
                      <ColorOptionsPanel
                        colorNormal={colorGrid}
                        setColorNormal={(color) =>
                          setAttributes({ colorGrid: color })
                        }
                        buttonTitle={__("Color", "cocoblocks")}
                        buttonIcon={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#e8eaed"
                            style={{
                              marginRight: "3px",
                              height: "16px",
                              width: "16px",
                              position: "relative",
                              top: "3px",
                            }}
                          >
                            <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm40-83q119-15 199.5-104.5T800-480q0-123-80.5-212.5T520-797v634Z" />
                          </svg>
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
          title={__("Creative effect configuration", "cocoblocks")}
          onRequestClose={closeModal}
          className="cocoblocks-modal"
        >
          <div className="modal-content">
            <div className="row">
              <div className="column left">
                <div className="preview-slider">
                  {/* Anteprima Slider */}
                  <p>{__("PREVIEW", "cocoblocks")}</p>
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
                    <SwiperSlide>{__("Slide 1", "cocoblocks")}</SwiperSlide>
                    <SwiperSlide>{__("Slide 2", "cocoblocks")}</SwiperSlide>
                    <SwiperSlide>{__("Slide 3", "cocoblocks")}</SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className="column right">
                {/* Preset Buttons */}
                <p>{__("PRESETS", "cocoblocks")}</p>
                <div className="content-preset">
                  <Button variant="primary" onClick={applyPreset1}>
                    {__("Preset 1", "cocoblocks")}
                  </Button>
                  <Button variant="primary" onClick={applyPreset2}>
                    {__("Preset 2", "cocoblocks")}
                  </Button>
                  <Button variant="primary" onClick={applyPreset3}>
                    {__("Preset 3", "cocoblocks")}
                  </Button>
                  <Button variant="primary" onClick={applyPreset4}>
                    {__("Preset 4", "cocoblocks")}
                  </Button>
                  <Button variant="primary" onClick={applyPreset5}>
                    {__("Preset 5", "cocoblocks")}
                  </Button>
                  <Button variant="primary" onClick={applyPreset6}>
                    {__("Preset 6", "cocoblocks")}
                  </Button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="column left">
                {/* Previous Slide Controls */}
                <p>{__("PREVIOUS SLIDE", "cocoblocks")}</p>
                <div className="content-select-modal">
                  <div className="custom-select select-modal">
                    <RangeControl
                      label={
                        <>
                          <svg
                            fill="currentcolor"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 56 56"
                          >
                            <path d="M 4.9140 28.0000 C 4.9140 28.5860 5.1484 29.1250 5.6171 29.5703 L 19.2811 42.9766 C 19.6796 43.3750 20.2889 43.6094 20.7811 43.6094 C 22.0233 43.6094 22.8671 42.7656 22.8671 41.5469 C 22.8671 40.9375 22.6562 40.4922 22.2811 40.1172 L 15.6718 33.6484 L 11.2889 29.8750 L 16.7264 30.1094 L 39.2968 30.1094 L 44.7343 29.8750 L 40.3515 33.6484 L 33.7186 40.1172 C 33.3436 40.4922 33.1562 40.9375 33.1562 41.5469 C 33.1562 42.7656 33.9764 43.6094 35.2186 43.6094 C 35.7343 43.6094 36.3436 43.3750 36.7421 42.9766 L 50.4064 29.5703 C 50.8748 29.1250 51.0860 28.5860 51.0860 28.0000 C 51.0860 27.4375 50.8748 26.8984 50.4064 26.4297 L 36.7421 13.0469 C 36.3436 12.6484 35.7343 12.3906 35.2186 12.3906 C 33.9764 12.3906 33.1562 13.2578 33.1562 14.4766 C 33.1562 15.0625 33.3436 15.5313 33.7186 15.9062 L 40.3515 22.3516 L 44.7343 26.1484 L 39.2968 25.9141 L 16.7264 25.9141 L 11.2889 26.1484 L 15.6718 22.3516 L 22.3046 15.9062 C 22.6562 15.5313 22.8671 15.0625 22.8671 14.4766 C 22.8671 13.2578 22.0233 12.3906 20.7811 12.3906 C 20.2889 12.3906 19.6796 12.6484 19.2811 13.0469 L 5.6171 26.4297 C 5.1484 26.8984 4.9140 27.4375 4.9140 28.0000 Z"></path>
                          </svg>
                          {__("Translate X (%)", "cocoblocks")}
                        </>
                      }
                      value={translateX}
                      onChange={(val) => setAttributes({ translateX: val })}
                      min={-200}
                      max={200}
                      step={1}
                    />
                  </div>
                  <div className="custom-select select-modal">
                    <RangeControl
                      label={
                        <>
                          <svg
                            fill="currentcolor"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 56 56"
                          >
                            <path d="M 28 51.0742 C 28.5859 51.0742 29.1250 50.8633 29.5703 50.3945 L 42.9766 36.7305 C 43.3750 36.3320 43.6094 35.7227 43.6094 35.2071 C 43.6094 33.9649 42.7656 33.1445 41.5469 33.1445 C 40.9375 33.1445 40.4922 33.3555 40.1172 33.7071 L 33.6484 40.3398 L 29.8750 44.7227 L 30.1094 39.2851 L 30.1094 16.7149 L 29.8750 11.2773 L 33.6484 15.6602 L 40.1172 22.2930 C 40.4922 22.6445 40.9375 22.8555 41.5469 22.8555 C 42.7656 22.8555 43.6094 22.0352 43.6094 20.7930 C 43.6094 20.2773 43.3750 19.6680 42.9766 19.2695 L 29.5703 5.6055 C 29.1250 5.1367 28.5859 4.9258 28 4.9258 C 27.4375 4.9258 26.8984 5.1367 26.4297 5.6055 L 13.0469 19.2695 C 12.6484 19.6680 12.3906 20.2773 12.3906 20.7930 C 12.3906 22.0352 13.2578 22.8555 14.4531 22.8555 C 15.0625 22.8555 15.5312 22.6445 15.9063 22.2930 L 22.3516 15.6602 L 26.1484 11.2773 L 25.9141 16.7149 L 25.9141 39.2851 L 26.1484 44.7227 L 22.3516 40.3398 L 15.9063 33.7071 C 15.5312 33.3555 15.0625 33.1445 14.4531 33.1445 C 13.2578 33.1445 12.3906 33.9649 12.3906 35.2071 C 12.3906 35.7227 12.6484 36.3320 13.0469 36.7305 L 26.4297 50.3945 C 26.8984 50.8633 27.4375 51.0742 28 51.0742 Z"></path>
                          </svg>
                          {__("Translate Y (%)", "cocoblocks")}
                        </>
                      }
                      value={translateY}
                      onChange={(val) => setAttributes({ translateY: val })}
                      min={-200}
                      max={200}
                      step={1}
                    />
                  </div>
                  <div className="custom-select select-modal">
                    <RangeControl
                      label={
                        <>
                          <svg
                            fill="currentcolor"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 56 56"
                          >
                            <path d="M 7.8436 24.6016 C 9.0624 24.6016 9.9764 23.6641 9.9764 22.4219 L 9.9764 20.4531 L 9.4843 12.2734 L 15.6718 18.7656 L 22.8671 26.0312 C 23.2655 26.4531 23.7811 26.6406 24.3671 26.6406 C 25.6796 26.6406 26.6874 25.7734 26.6874 24.4609 C 26.6874 23.8281 26.4530 23.2656 26.0311 22.8437 L 18.8124 15.6250 L 12.2968 9.4609 L 20.4999 9.9297 L 22.4686 9.9297 C 23.7108 9.9297 24.6718 9.0625 24.6718 7.7968 C 24.6718 6.5312 23.7108 5.6406 22.4686 5.6406 L 9.4374 5.6406 C 7.0468 5.6406 5.6640 7.0234 5.6640 9.4141 L 5.6640 22.4219 C 5.6640 23.6406 6.5780 24.6016 7.8436 24.6016 Z M 33.5311 50.3594 L 46.5624 50.3594 C 48.9532 50.3594 50.3360 48.9766 50.3360 46.5859 L 50.3360 33.5781 C 50.3360 32.3594 49.4216 31.3984 48.1564 31.3984 C 46.9374 31.3984 46.0468 32.3359 46.0468 33.5781 L 46.0468 35.5469 L 46.5155 43.7266 L 40.3280 37.2344 L 33.1327 29.9688 C 32.7343 29.5469 32.2186 29.3594 31.6327 29.3594 C 30.3202 29.3594 29.3358 30.2266 29.3358 31.5390 C 29.3358 32.1719 29.5468 32.7344 29.9686 33.1563 L 37.2108 40.3750 L 43.7030 46.5391 L 35.4999 46.0703 L 33.5311 46.0703 C 32.2889 46.0703 31.3515 46.9375 31.3280 48.2031 C 31.3280 49.4687 32.2889 50.3594 33.5311 50.3594 Z"></path>
                          </svg>
                          {__("Translate Z (px)", "cocoblocks")}
                        </>
                      }
                      value={translateZ}
                      onChange={(val) => setAttributes({ translateZ: val })}
                      min={-1000}
                      max={1000}
                      step={1}
                    />
                  </div>
                </div>
                <div className="content-select-modal">
                  <div className="custom-select select-modal">
                    <RangeControl
                      label={
                        <>
                          <svg
                            className="svg-rotate"
                            fill="currentcolor"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 56 56"
                          >
                            <path d="M 53.9490 26.3032 L 50.8619 26.3032 C 49.6223 14.8328 39.7520 5.7061 27.9886 5.7061 C 21.1380 5.7061 14.9183 8.8159 10.6817 13.7061 C 9.8253 14.6751 9.9605 15.8694 10.8394 16.5004 C 11.7408 17.1314 12.7999 16.9286 13.5436 16.0948 C 17.0365 12.0836 22.2196 9.5371 27.9886 9.5371 C 37.8140 9.5371 45.8138 16.8159 46.9856 26.3032 L 43.6280 26.3032 C 42.0280 26.3032 41.5999 27.3849 42.4787 28.6243 L 47.5039 35.8130 C 48.2252 36.8497 49.3070 36.8722 50.0506 35.8130 L 55.0982 28.6468 C 56 27.3849 55.5717 26.3032 53.9490 26.3032 Z M 2.0507 31.1032 L 5.1380 31.1032 C 6.3774 42.5736 16.2479 51.6778 27.9886 51.6778 C 34.8844 51.6778 41.1041 48.5454 45.3407 43.6778 C 46.1521 42.7088 46.0395 41.4919 45.1829 40.8609 C 44.2816 40.2299 43.2224 40.4553 42.4787 41.2891 C 39.0083 45.3229 33.8252 47.8468 27.9886 47.8468 C 18.1859 47.8468 10.1859 40.5905 9.0140 31.1032 L 12.3718 31.1032 C 13.9718 31.1032 14.3999 29.9990 13.5211 28.7821 L 8.4732 21.5933 C 7.7521 20.5567 6.6929 20.5342 5.9493 21.5933 L .9014 28.7595 C 0 29.9990 .4282 31.1032 2.0507 31.1032 Z"></path>
                          </svg>
                          {__("Rotate X (deg)", "cocoblocks")}
                        </>
                      }
                      value={rotateX}
                      onChange={(val) => setAttributes({ rotateX: val })}
                      min={-180}
                      max={180}
                      step={1}
                    />
                  </div>
                  <div className="custom-select select-modal">
                    <RangeControl
                      label={
                        <>
                          <svg
                            className="svg-rotate-two"
                            fill="currentcolor"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 56 56"
                          >
                            <path d="M 53.9490 26.3032 L 50.8619 26.3032 C 49.6223 14.8328 39.7520 5.7061 27.9886 5.7061 C 21.1380 5.7061 14.9183 8.8159 10.6817 13.7061 C 9.8253 14.6751 9.9605 15.8694 10.8394 16.5004 C 11.7408 17.1314 12.7999 16.9286 13.5436 16.0948 C 17.0365 12.0836 22.2196 9.5371 27.9886 9.5371 C 37.8140 9.5371 45.8138 16.8159 46.9856 26.3032 L 43.6280 26.3032 C 42.0280 26.3032 41.5999 27.3849 42.4787 28.6243 L 47.5039 35.8130 C 48.2252 36.8497 49.3070 36.8722 50.0506 35.8130 L 55.0982 28.6468 C 56 27.3849 55.5717 26.3032 53.9490 26.3032 Z M 2.0507 31.1032 L 5.1380 31.1032 C 6.3774 42.5736 16.2479 51.6778 27.9886 51.6778 C 34.8844 51.6778 41.1041 48.5454 45.3407 43.6778 C 46.1521 42.7088 46.0395 41.4919 45.1829 40.8609 C 44.2816 40.2299 43.2224 40.4553 42.4787 41.2891 C 39.0083 45.3229 33.8252 47.8468 27.9886 47.8468 C 18.1859 47.8468 10.1859 40.5905 9.0140 31.1032 L 12.3718 31.1032 C 13.9718 31.1032 14.3999 29.9990 13.5211 28.7821 L 8.4732 21.5933 C 7.7521 20.5567 6.6929 20.5342 5.9493 21.5933 L .9014 28.7595 C 0 29.9990 .4282 31.1032 2.0507 31.1032 Z"></path>
                          </svg>
                          {__("Rotate Y (deg)", "cocoblocks")}
                        </>
                      }
                      value={rotateY}
                      onChange={(val) => setAttributes({ rotateY: val })}
                      min={-180}
                      max={180}
                      step={1}
                    />
                  </div>
                  <div className="custom-select select-modal">
                    <RangeControl
                      label={
                        <>
                          <svg
                            fill="currentcolor"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 56 56"
                          >
                            <path d="M 53.9490 26.3032 L 50.8619 26.3032 C 49.6223 14.8328 39.7520 5.7061 27.9886 5.7061 C 21.1380 5.7061 14.9183 8.8159 10.6817 13.7061 C 9.8253 14.6751 9.9605 15.8694 10.8394 16.5004 C 11.7408 17.1314 12.7999 16.9286 13.5436 16.0948 C 17.0365 12.0836 22.2196 9.5371 27.9886 9.5371 C 37.8140 9.5371 45.8138 16.8159 46.9856 26.3032 L 43.6280 26.3032 C 42.0280 26.3032 41.5999 27.3849 42.4787 28.6243 L 47.5039 35.8130 C 48.2252 36.8497 49.3070 36.8722 50.0506 35.8130 L 55.0982 28.6468 C 56 27.3849 55.5717 26.3032 53.9490 26.3032 Z M 2.0507 31.1032 L 5.1380 31.1032 C 6.3774 42.5736 16.2479 51.6778 27.9886 51.6778 C 34.8844 51.6778 41.1041 48.5454 45.3407 43.6778 C 46.1521 42.7088 46.0395 41.4919 45.1829 40.8609 C 44.2816 40.2299 43.2224 40.4553 42.4787 41.2891 C 39.0083 45.3229 33.8252 47.8468 27.9886 47.8468 C 18.1859 47.8468 10.1859 40.5905 9.0140 31.1032 L 12.3718 31.1032 C 13.9718 31.1032 14.3999 29.9990 13.5211 28.7821 L 8.4732 21.5933 C 7.7521 20.5567 6.6929 20.5342 5.9493 21.5933 L .9014 28.7595 C 0 29.9990 .4282 31.1032 2.0507 31.1032 Z"></path>
                          </svg>
                          {__("Rotate Z (deg)", "cocoblocks")}
                        </>
                      }
                      value={rotateZ}
                      onChange={(val) => setAttributes({ rotateZ: val })}
                      min={-180}
                      max={180}
                      step={1}
                    />
                  </div>
                </div>
                <div className="content-select-modal">
                  <div className="custom-select select-modal">
                    <RangeControl
                      label={__("Scale", "cocoblocks")}
                      value={scale}
                      onChange={(val) => setAttributes({ scale: val })}
                      min={0}
                      max={2}
                      step={0.1}
                    />
                  </div>
                  <div className="custom-select select-modal">
                    <RangeControl
                      label={__("Opacity", "cocoblocks")}
                      value={opacity}
                      onChange={(val) => setAttributes({ opacity: val })}
                      min={0.1}
                      max={1}
                      step={0.1}
                    />
                  </div>
                </div>
              </div>
              <div className="column right">
                {/* Next Slide Controls */}
                <p>{__("NEXT SLIDE", "cocoblocks")}</p>
                <div className="content-select-modal">
                  <div className="custom-select select-modal">
                    <RangeControl
                      label={
                        <>
                          <svg
                            fill="currentcolor"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 56 56"
                          >
                            <path d="M 4.9140 28.0000 C 4.9140 28.5860 5.1484 29.1250 5.6171 29.5703 L 19.2811 42.9766 C 19.6796 43.3750 20.2889 43.6094 20.7811 43.6094 C 22.0233 43.6094 22.8671 42.7656 22.8671 41.5469 C 22.8671 40.9375 22.6562 40.4922 22.2811 40.1172 L 15.6718 33.6484 L 11.2889 29.8750 L 16.7264 30.1094 L 39.2968 30.1094 L 44.7343 29.8750 L 40.3515 33.6484 L 33.7186 40.1172 C 33.3436 40.4922 33.1562 40.9375 33.1562 41.5469 C 33.1562 42.7656 33.9764 43.6094 35.2186 43.6094 C 35.7343 43.6094 36.3436 43.3750 36.7421 42.9766 L 50.4064 29.5703 C 50.8748 29.1250 51.0860 28.5860 51.0860 28.0000 C 51.0860 27.4375 50.8748 26.8984 50.4064 26.4297 L 36.7421 13.0469 C 36.3436 12.6484 35.7343 12.3906 35.2186 12.3906 C 33.9764 12.3906 33.1562 13.2578 33.1562 14.4766 C 33.1562 15.0625 33.3436 15.5313 33.7186 15.9062 L 40.3515 22.3516 L 44.7343 26.1484 L 39.2968 25.9141 L 16.7264 25.9141 L 11.2889 26.1484 L 15.6718 22.3516 L 22.3046 15.9062 C 22.6562 15.5313 22.8671 15.0625 22.8671 14.4766 C 22.8671 13.2578 22.0233 12.3906 20.7811 12.3906 C 20.2889 12.3906 19.6796 12.6484 19.2811 13.0469 L 5.6171 26.4297 C 5.1484 26.8984 4.9140 27.4375 4.9140 28.0000 Z"></path>
                          </svg>
                          {__("Translate X (%)", "cocoblocks")}
                        </>
                      }
                      value={nextTranslateX}
                      onChange={(val) => setAttributes({ nextTranslateX: val })}
                      min={-200}
                      max={200}
                      step={1}
                    />
                  </div>
                  <div className="custom-select select-modal">
                    <RangeControl
                      label={
                        <>
                          <svg
                            fill="currentcolor"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 56 56"
                          >
                            <path d="M 28 51.0742 C 28.5859 51.0742 29.1250 50.8633 29.5703 50.3945 L 42.9766 36.7305 C 43.3750 36.3320 43.6094 35.7227 43.6094 35.2071 C 43.6094 33.9649 42.7656 33.1445 41.5469 33.1445 C 40.9375 33.1445 40.4922 33.3555 40.1172 33.7071 L 33.6484 40.3398 L 29.8750 44.7227 L 30.1094 39.2851 L 30.1094 16.7149 L 29.8750 11.2773 L 33.6484 15.6602 L 40.1172 22.2930 C 40.4922 22.6445 40.9375 22.8555 41.5469 22.8555 C 42.7656 22.8555 43.6094 22.0352 43.6094 20.7930 C 43.6094 20.2773 43.3750 19.6680 42.9766 19.2695 L 29.5703 5.6055 C 29.1250 5.1367 28.5859 4.9258 28 4.9258 C 27.4375 4.9258 26.8984 5.1367 26.4297 5.6055 L 13.0469 19.2695 C 12.6484 19.6680 12.3906 20.2773 12.3906 20.7930 C 12.3906 22.0352 13.2578 22.8555 14.4531 22.8555 C 15.0625 22.8555 15.5312 22.6445 15.9063 22.2930 L 22.3516 15.6602 L 26.1484 11.2773 L 25.9141 16.7149 L 25.9141 39.2851 L 26.1484 44.7227 L 22.3516 40.3398 L 15.9063 33.7071 C 15.5312 33.3555 15.0625 33.1445 14.4531 33.1445 C 13.2578 33.1445 12.3906 33.9649 12.3906 35.2071 C 12.3906 35.7227 12.6484 36.3320 13.0469 36.7305 L 26.4297 50.3945 C 26.8984 50.8633 27.4375 51.0742 28 51.0742 Z"></path>
                          </svg>
                          {__("Translate Y (%)", "cocoblocks")}
                        </>
                      }
                      value={nextTranslateY}
                      onChange={(val) => setAttributes({ nextTranslateY: val })}
                      min={-200}
                      max={200}
                      step={1}
                    />
                  </div>
                  <div className="custom-select select-modal">
                    <RangeControl
                      label={
                        <>
                          <svg
                            fill="currentcolor"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 56 56"
                          >
                            <path d="M 7.8436 24.6016 C 9.0624 24.6016 9.9764 23.6641 9.9764 22.4219 L 9.9764 20.4531 L 9.4843 12.2734 L 15.6718 18.7656 L 22.8671 26.0312 C 23.2655 26.4531 23.7811 26.6406 24.3671 26.6406 C 25.6796 26.6406 26.6874 25.7734 26.6874 24.4609 C 26.6874 23.8281 26.4530 23.2656 26.0311 22.8437 L 18.8124 15.6250 L 12.2968 9.4609 L 20.4999 9.9297 L 22.4686 9.9297 C 23.7108 9.9297 24.6718 9.0625 24.6718 7.7968 C 24.6718 6.5312 23.7108 5.6406 22.4686 5.6406 L 9.4374 5.6406 C 7.0468 5.6406 5.6640 7.0234 5.6640 9.4141 L 5.6640 22.4219 C 5.6640 23.6406 6.5780 24.6016 7.8436 24.6016 Z M 33.5311 50.3594 L 46.5624 50.3594 C 48.9532 50.3594 50.3360 48.9766 50.3360 46.5859 L 50.3360 33.5781 C 50.3360 32.3594 49.4216 31.3984 48.1564 31.3984 C 46.9374 31.3984 46.0468 32.3359 46.0468 33.5781 L 46.0468 35.5469 L 46.5155 43.7266 L 40.3280 37.2344 L 33.1327 29.9688 C 32.7343 29.5469 32.2186 29.3594 31.6327 29.3594 C 30.3202 29.3594 29.3358 30.2266 29.3358 31.5390 C 29.3358 32.1719 29.5468 32.7344 29.9686 33.1563 L 37.2108 40.3750 L 43.7030 46.5391 L 35.4999 46.0703 L 33.5311 46.0703 C 32.2889 46.0703 31.3515 46.9375 31.3280 48.2031 C 31.3280 49.4687 32.2889 50.3594 33.5311 50.3594 Z"></path>
                          </svg>
                          {__("Translate Z (px)", "cocoblocks")}
                        </>
                      }
                      value={nextTranslateZ}
                      onChange={(val) => setAttributes({ nextTranslateZ: val })}
                      min={-1000}
                      max={1000}
                      step={1}
                    />
                  </div>
                </div>
                <div className="content-select-modal">
                  <div className="custom-select select-modal">
                    <RangeControl
                      label={
                        <>
                          <svg
                            className="svg-rotate"
                            fill="currentcolor"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 56 56"
                          >
                            <path d="M 53.9490 26.3032 L 50.8619 26.3032 C 49.6223 14.8328 39.7520 5.7061 27.9886 5.7061 C 21.1380 5.7061 14.9183 8.8159 10.6817 13.7061 C 9.8253 14.6751 9.9605 15.8694 10.8394 16.5004 C 11.7408 17.1314 12.7999 16.9286 13.5436 16.0948 C 17.0365 12.0836 22.2196 9.5371 27.9886 9.5371 C 37.8140 9.5371 45.8138 16.8159 46.9856 26.3032 L 43.6280 26.3032 C 42.0280 26.3032 41.5999 27.3849 42.4787 28.6243 L 47.5039 35.8130 C 48.2252 36.8497 49.3070 36.8722 50.0506 35.8130 L 55.0982 28.6468 C 56 27.3849 55.5717 26.3032 53.9490 26.3032 Z M 2.0507 31.1032 L 5.1380 31.1032 C 6.3774 42.5736 16.2479 51.6778 27.9886 51.6778 C 34.8844 51.6778 41.1041 48.5454 45.3407 43.6778 C 46.1521 42.7088 46.0395 41.4919 45.1829 40.8609 C 44.2816 40.2299 43.2224 40.4553 42.4787 41.2891 C 39.0083 45.3229 33.8252 47.8468 27.9886 47.8468 C 18.1859 47.8468 10.1859 40.5905 9.0140 31.1032 L 12.3718 31.1032 C 13.9718 31.1032 14.3999 29.9990 13.5211 28.7821 L 8.4732 21.5933 C 7.7521 20.5567 6.6929 20.5342 5.9493 21.5933 L .9014 28.7595 C 0 29.9990 .4282 31.1032 2.0507 31.1032 Z"></path>
                          </svg>
                          {__("Rotate X (deg)", "cocoblocks")}
                        </>
                      }
                      value={nextRotateX}
                      onChange={(val) => setAttributes({ nextRotateX: val })}
                      min={-180}
                      max={180}
                      step={1}
                    />
                  </div>
                  <div className="custom-select select-modal">
                    <RangeControl
                      label={
                        <>
                          <svg
                            className="svg-rotate-two"
                            fill="currentcolor"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 56 56"
                          >
                            <path d="M 53.9490 26.3032 L 50.8619 26.3032 C 49.6223 14.8328 39.7520 5.7061 27.9886 5.7061 C 21.1380 5.7061 14.9183 8.8159 10.6817 13.7061 C 9.8253 14.6751 9.9605 15.8694 10.8394 16.5004 C 11.7408 17.1314 12.7999 16.9286 13.5436 16.0948 C 17.0365 12.0836 22.2196 9.5371 27.9886 9.5371 C 37.8140 9.5371 45.8138 16.8159 46.9856 26.3032 L 43.6280 26.3032 C 42.0280 26.3032 41.5999 27.3849 42.4787 28.6243 L 47.5039 35.8130 C 48.2252 36.8497 49.3070 36.8722 50.0506 35.8130 L 55.0982 28.6468 C 56 27.3849 55.5717 26.3032 53.9490 26.3032 Z M 2.0507 31.1032 L 5.1380 31.1032 C 6.3774 42.5736 16.2479 51.6778 27.9886 51.6778 C 34.8844 51.6778 41.1041 48.5454 45.3407 43.6778 C 46.1521 42.7088 46.0395 41.4919 45.1829 40.8609 C 44.2816 40.2299 43.2224 40.4553 42.4787 41.2891 C 39.0083 45.3229 33.8252 47.8468 27.9886 47.8468 C 18.1859 47.8468 10.1859 40.5905 9.0140 31.1032 L 12.3718 31.1032 C 13.9718 31.1032 14.3999 29.9990 13.5211 28.7821 L 8.4732 21.5933 C 7.7521 20.5567 6.6929 20.5342 5.9493 21.5933 L .9014 28.7595 C 0 29.9990 .4282 31.1032 2.0507 31.1032 Z"></path>
                          </svg>
                          {__("Rotate Y (deg)", "cocoblocks")}
                        </>
                      }
                      value={nextRotateY}
                      onChange={(val) => setAttributes({ nextRotateY: val })}
                      min={-180}
                      max={180}
                      step={1}
                    />
                  </div>
                  <div className="custom-select select-modal">
                    <RangeControl
                      label={
                        <>
                          <svg
                            fill="currentcolor"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 56 56"
                          >
                            <path d="M 53.9490 26.3032 L 50.8619 26.3032 C 49.6223 14.8328 39.7520 5.7061 27.9886 5.7061 C 21.1380 5.7061 14.9183 8.8159 10.6817 13.7061 C 9.8253 14.6751 9.9605 15.8694 10.8394 16.5004 C 11.7408 17.1314 12.7999 16.9286 13.5436 16.0948 C 17.0365 12.0836 22.2196 9.5371 27.9886 9.5371 C 37.8140 9.5371 45.8138 16.8159 46.9856 26.3032 L 43.6280 26.3032 C 42.0280 26.3032 41.5999 27.3849 42.4787 28.6243 L 47.5039 35.8130 C 48.2252 36.8497 49.3070 36.8722 50.0506 35.8130 L 55.0982 28.6468 C 56 27.3849 55.5717 26.3032 53.9490 26.3032 Z M 2.0507 31.1032 L 5.1380 31.1032 C 6.3774 42.5736 16.2479 51.6778 27.9886 51.6778 C 34.8844 51.6778 41.1041 48.5454 45.3407 43.6778 C 46.1521 42.7088 46.0395 41.4919 45.1829 40.8609 C 44.2816 40.2299 43.2224 40.4553 42.4787 41.2891 C 39.0083 45.3229 33.8252 47.8468 27.9886 47.8468 C 18.1859 47.8468 10.1859 40.5905 9.0140 31.1032 L 12.3718 31.1032 C 13.9718 31.1032 14.3999 29.9990 13.5211 28.7821 L 8.4732 21.5933 C 7.7521 20.5567 6.6929 20.5342 5.9493 21.5933 L .9014 28.7595 C 0 29.9990 .4282 31.1032 2.0507 31.1032 Z"></path>
                          </svg>
                          {__("Rotate Z (deg)", "cocoblocks")}
                        </>
                      }
                      value={nextRotateZ}
                      onChange={(val) => setAttributes({ nextRotateZ: val })}
                      min={-180}
                      max={180}
                      step={1}
                    />
                  </div>
                </div>
                <div className="content-select-modal">
                  <div className="custom-select select-modal">
                    <RangeControl
                      label={__("Scale", "cocoblocks")}
                      value={nextScale}
                      onChange={(val) => setAttributes({ nextScale: val })}
                      min={0}
                      max={2}
                      step={0.1}
                    />
                  </div>
                  <div className="custom-select select-modal">
                    <RangeControl
                      label={__("Opacity", "cocoblocks")}
                      value={nextOpacity}
                      onChange={(val) => setAttributes({ nextOpacity: val })}
                      min={0.1}
                      max={1}
                      step={0.1}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-bottmo-modal"></div>
          <Button className="button-save-modal" onClick={closeModal}>
            {__("Save", "cocoblocks")}
          </Button>
        </Modal>
      )}
    </>
  );
};

export default SliderControlsOptions;
