import React, { useEffect, useState } from "react";
import { __ } from '@wordpress/i18n';
import { PanelBody,   __experimentalBoxControl as BoxControl,Tooltip, Button } from '@wordpress/components';
import SectionSelectorElementPost from "../../multitab/sectionSelectorElementPost";
import CustomSelectControl  from "../../../controls/select/CustomSelectControl";
import CustomToggleControl  from "../../../controls/toggle/CustomToggleControl";
import CustomRangeControl  from "../../../controls/range/CustomRangeControl"; 
import CustomAlignControl from "../../../controls/align/AlignControl";
import ColorOptionsPanel from "../../colorPanel";
import ColorLensIcon from '@mui/icons-material/ColorLens';
import HeightIcon from '@mui/icons-material/Height';
import PaddingIcon from '@mui/icons-material/Padding';
import MarginIcon from '@mui/icons-material/Margin';
import {borderStyleOptions} from '../../../assets/options';
import {selectOptionsEffectIn} from '../../../assets/options';
import { selectOptionsEffectInFree } from "../../../assets/options";
import {selectOptionsEase} from '../../../assets/options';
import { selectOptionsEaseFree } from "../../../assets/options";
import {selectOptionsDirection} from '../../../assets/options';
import {selectOptionsRepeat} from '../../../assets/options';
import {selectOptionsEffectHover} from '../../../assets/options';
import { selectOptionsEffectHoverFree } from "../../../assets/options";
import {selectOptionsScaleIn} from '../../../assets/options';
import {fontOptions} from '../../../assets/options';
import {fontWeightOptions} from '../../../assets/options';
import {selectOptionsEffectSplit} from '../../../assets/options';
import {selectOptionsDirectionBlock} from '../../../assets/options';
import FontStyle from "../../font-style";
import BorderStyleIcon from '@mui/icons-material/BorderStyle';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import BorderLeftIcon from '@mui/icons-material/BorderLeft';
import BorderInnerIcon from '@mui/icons-material/BorderInner';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import OpacityIcon from '@mui/icons-material/Opacity';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import ExpandIcon from '@mui/icons-material/Expand';
import FitbitIcon from '@mui/icons-material/Fitbit';
import GrainIcon from '@mui/icons-material/Grain';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import RefreshIcon from '@mui/icons-material/Refresh';
import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import SwapCallsIcon from '@mui/icons-material/SwapCalls';
import LoopIcon from '@mui/icons-material/Loop';
import DeblurIcon from '@mui/icons-material/Deblur';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import TouchAppIcon from "@mui/icons-material/TouchApp";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import TuneIcon from '@mui/icons-material/Tune';
import FontDownloadIcon from '@mui/icons-material/FontDownload';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import FormatLineSpacingIcon from '@mui/icons-material/FormatLineSpacing';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import ProTooltip from '../../ProTooltip';
import ProNotice from '../../ProNotice';

const PostExcerptEdit = ({ setAttributes, attributes, onPlayAnimationPostExcerpt}) => {

    const {
        excerptPostColor,
        excerptPostAlign,
        excerptPostPadding,
        excerptPostMargin,
        excerptPostBorderStyle,
        excerptPostBorderSize,
        excerptPostBorderColor,
        excerptPostBorderRadius,
        excerptPostRotate,
        excerptPostOpacity,
        excerptPostBoxShadow,
        excerptPostBoxShadowColor,
        excerptPostBoxShadowHOffset,
        excerptPostBoxShadowVOffset,
        excerptPostBoxShadowBlur,
        excerptPostBoxShadowSpread,
        excerptPostEffect,
        excerptPostOpacityFrom,
        excerptPostOpacityTo,
        excerptPostBlurFrom,
        excerptPostBlurTo,
        excerptPostTranslateXFrom,
        excerptPostTranslateXTo,
        excerptPostTranslateYFrom,
        excerptPostTranslateYTo,
        excerptPostScaleType,
        excerptPostScaleFrom,
        excerptPostScaleTo,
        excerptPostRotateFrom,
        excerptPostRotateTo,
        excerptPostRotateXFrom,
        excerptPostRotateXTo,
        excerptPostRotateYFrom,
        excerptPostRotateYTo,
        excerptPostSkewXFrom,
        excerptPostSkewXTo,
        excerptPostSkewYFrom,
        excerptPostSkewYTo,
        excerptPostDuration,
        excerptPostDelay,
        excerptPostEndDelay,
        excerptPostEasing,
        excerptPostDirection,
        excerptPostLoop,
        excerptPostEffectHover,
        excerptPostOpacityHover,
        excerptPostBlurHover,
        excerptPostTranslateXHover,
        excerptPostTranslateYHover,
        excerptPostScaleTypeHover,
        excerptPostScaleHover,
        excerptPostRotateHover,
        excerptPostRotateXHover,
        excerptPostRotateYHover,
        excerptPostSkewXHover,
        excerptPostSkewYHover,
        excerptPostDurationHover,
        excerptPostEasingHover,
        excerptPostLink,
        excerptPostTarget,
        excerptPostDesktop,
        excerptPostTablet,
        excerptPostMobile,
        hideExcerpt,
        excerptPostFontSizeMobile,
        excerptPostFontSizeTablet,
        excerptPostFontSize,
        excerptPostFontStyle,
        excerptPostFontFamily,
        excerptPostFontWeight,
        excerptPostLineHeight,
        excerptPostLetterSpacing,
        excerptPostColorIn,
        excerptPostEffectSplit,
        excerptPostStagger,
        excerptPostDirectionBlock,
        excerptPostBlockColor,
    } = attributes;

  // Stato per nascondere l'immagine
  const [localHideImage, setHideImage] = useState(hideExcerpt || "");

  const toggleHideImage = () => {
    const newState = localHideImage === "hide" ? "" : "hide";
    setHideImage(newState);
    setAttributes({ hideExcerpt: newState });
  };
   const [isProFeature, setIsProFeature] = useState(true);

  useEffect(() => {
      if (typeof window.isProFeature !== 'undefined') {
          setIsProFeature(window.isProFeature);
      }
  }, []);
      // Section Image
  const [activeSectionImage, setActiveSectionImage] = useState("style");
  return (
    <PanelBody
        className="slider-future-panel panel-slide"
        title={__("Excerpt", "slider-future")}
        initialOpen={false}
    >
        <SectionSelectorElementPost onSectionChange={setActiveSectionImage} />
           {activeSectionImage === "style" && (
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
            <CustomAlignControl
                value={excerptPostAlign}
                setAttributes={setAttributes}
                onChange={(val) => setAttributes({excerptPostAlign: val })}
            />
            </div>
            <div className="content-title-custom-panel intermedy">
                <h2 className="title-custom-panel">
                  {__("Font", "slider-future")}
                </h2>
              </div>
              <div className="content-section-panel" style={{ padding: "0" }}>
              <CustomRangeControl
          label={
            <>
                <TextFieldsIcon/>
                {__("Min", "slider-future")}
            </>
          }
          value={excerptPostFontSizeMobile}
          onChange={(val) => setAttributes({excerptPostFontSizeMobile: val })}
          min={4}
          max={100}
          step={1}
          tooltipText= {__("Sets the minimum text size for small screens (e.g., mobile devices). The text won’t go below this value.", "slider-future")}
          showTooltip = {true}
        />
        <CustomRangeControl
          label={
            <>
                <TuneIcon />
                {__("Mid", "slider-future")}
            </>
          }
          value={excerptPostFontSizeTablet}
          onChange={(val) => setAttributes({excerptPostFontSizeTablet: val })}
          min={4}
          max={200}
          step={.5}
          tooltipText= {__("Defines the fluid text size, measured in viewport width (vw), that adapts to screen width. This is ideal for medium-sized screens, like tablets, creating a smooth transition between the minimum and maximum sizes.", "slider-future")}
          showTooltip = {true}
        />
              
              <CustomRangeControl
          label={
            <>
                   <FullscreenIcon />
                {__("Max", "slider-future")}
            </>
          }
          value={excerptPostFontSize}
          onChange={(val) => setAttributes({excerptPostFontSize: val })}
          min={4}
          max={500}
          tooltipText= {__("Sets the maximum text size for large screens (e.g., desktop monitors). The text won’t exceed this value.", "slider-future")}
          showTooltip = {true}
        />
              
              <div className="custom-select">
              <FontStyle
                value={excerptPostFontStyle } 
                onChange={(styleType, value) =>
                  setAttributes({
                    excerptPostFontStyle: {
                      ...excerptPostFontStyle, // Mantieni gli stili esistenti
                      [styleType]: value, // Aggiorna solo la proprietà modificata
                    },
                  })
                }
              />
              </div>
              <CustomSelectControl
     label={
         <>
           <FontDownloadIcon />
           {__("Font family", "slider-future")}
         </>
     }
     value={excerptPostFontFamily}
     onChange={(val) => setAttributes({excerptPostFontFamily: val })}
     options={fontOptions}
     />
       <CustomSelectControl
     label={
         <>
           <FitnessCenterIcon />
           {__("Font weight", "slider-future")}
         </>
     }
     value={excerptPostFontWeight}
     onChange={(val) => setAttributes({excerptPostFontWeight: val })}
     options={fontWeightOptions}
     />
               <CustomRangeControl
          label={
            <>
                   <HeightIcon />
                   {__("Line height", "slider-future")}
            </>
          }
          value={excerptPostLineHeight}
          onChange={(val) => setAttributes({excerptPostLineHeight: val })}
          min={.5}
          max={2.5}
          step={.1}
        />
         <CustomRangeControl
          label={
            <>
                  <FormatLineSpacingIcon style={{transform:'rotate(90deg)'}} />
                  {__("Letter spacing", "slider-future")}
            </>
          }
          value={excerptPostLetterSpacing}
          onChange={(val) => setAttributes({excerptPostLetterSpacing: val })}
          min={0}
          max={100}
          step={.5}
        />
            <p
              className="notice components-base-control__help"
              style={{
                borderRadius: "0",
                marginTop: "6px",
                marginBottom: "6px",
              }}
            >
              {__(
                "Attention: Not all browsers may support every listed font family, and not all font families support the full range of font weights!",
                "slider-future"
              )}
            </p>
            <div className="custom-select color">
            <ColorOptionsPanel
            colorNormal={excerptPostColorIn}
            setColorNormal={(color) => setAttributes({ excerptPostColorIn: color })}
            buttonTitle={__("Color", "slider-future")}
            buttonIcon={
                <FormatColorTextIcon />
            }
            />
            </div>
              <div className="custom-select color">
            <ColorOptionsPanel
            colorNormal={excerptPostColor}
            setColorNormal={(color) => setAttributes({ excerptPostColor: color })}
            buttonTitle={__("Background Color", "slider-future")}
            buttonIcon={
                <ColorLensIcon />
            }
            />
            </div>
                </div>
                <div className="content-title-custom-panel intermedy">
            <h2 className="title-custom-panel">
              {__("Spacings", "slider-future")}
            </h2>
          </div>
          <div className="content-section-panel" style={{ padding: "0" }}>
          <div className="custom-select box-control">
              <BoxControl
                label={
                  <>
                    <PaddingIcon/>
                    {__("Padding", "slider-future")}
                  </>
                }
                values={excerptPostPadding }
                onChange={(val) => setAttributes({excerptPostPadding: val })}
                units={{
                  px: true,
                  em: false,
                  rem: false,
                  '%': false,
                }}
              />
            </div>
            <div className="custom-select box-control">
              <BoxControl
                id="custom-margin-control"
                label={
                  <>
                    <MarginIcon/>
                    {__("Margin", "slider-future")}
                  </>
                }
                values={excerptPostMargin}
                onChange={(val) => setAttributes({excerptPostMargin: val })}
                units={{
                    px: true,
                    em: false,
                    rem: false,
                    '%': false,
                  }}
              />
            </div>
            </div>
            <div className="content-title-custom-panel intermedy">
            <h2 className="title-custom-panel">{__("Border", "slider-future")}</h2>
          </div>
          <div className="content-section-panel" style={{ padding: "0" }}>
          <CustomSelectControl
            label={
                <>
                   <BorderStyleIcon />
                   {__("Border style", "slider-future")}
                </>
            }
            value={excerptPostBorderStyle}
            onChange={(val) => setAttributes({excerptPostBorderStyle: val })}
            options={borderStyleOptions}
            />
            {excerptPostBorderStyle !== "none" && (
                <>
                <div className="custom-select color">
                <ColorOptionsPanel
            colorNormal={excerptPostBorderColor}
            setColorNormal={(color) => setAttributes({ excerptPostBorderColor: color })}
            buttonTitle={__("Border Color", "slider-future")}
            buttonIcon={
                <BorderColorIcon/>
            }
            />
            </div>
            <div className="custom-select box-control">
                 <BoxControl
                 id="custom-margin-control"
                 label={
                   <>
                    <BorderLeftIcon />
                    {__("Border width", "slider-future")}
                   </>
                 }
                 values={excerptPostBorderSize}
                 onChange={(val) => setAttributes({excerptPostBorderSize: val })}
                 units={{
                     px: true,
                     em: false,
                     rem: false,
                     '%': false,
                   }}
               />
               </div>
            </>
            )}
             <div className="custom-select box-control">
             <BoxControl
                 id="custom-margin-control"
                 label={
                   <>
                     <BorderInnerIcon />
                     {__("Border Radius", "slider-future")}
                   </>
                 }
                 values={excerptPostBorderRadius}
                 onChange={(val) => setAttributes({excerptPostBorderRadius: val })}
                 units={{
                     px: true,
                     em: false,
                     rem: false,
                     '%': false,
                   }}
               />
               </div>
            </div>
      </>
        )}
         {activeSectionImage === "adv-style" && (
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
                    value={excerptPostRotate}
                    onChange={(val) => setAttributes({excerptPostRotate: val })}
                    min={0}
                    max={360}
                    step={1}
                  />
          </div>
          <div className="content-title-custom-panel intermedy">
            <h2 className="title-custom-panel">
              {__("TRANSPARENCY SETTING", "slider-future")}
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
                        value={excerptPostOpacity}
                        onChange={(val) => setAttributes({excerptPostOpacity: val })}
                        min={0}
                        max={1}
                        step={.1}
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
        <div className={` ${isProFeature ? 'hover-pro' : ''}`}  style={{position:'relative' }}>
        <CustomToggleControl
            label={
                <>
               <FitbitIcon />
                {__("Effect", "slider-future")}
                </>
            }
            checked={excerptPostBoxShadow}
            onChange={(val) => setAttributes({excerptPostBoxShadow: val })}
            disabled= {isProFeature}
            />
             {isProFeature && (
                        <ProTooltip
                        tooltipProTop={'14px'}
                          tooltipProRight={'45px'}
                          />
                       )}
                       </div>
            {excerptPostBoxShadow && (
            <>
             <div className="custom-select color">
                  <ColorOptionsPanel
                    colorNormal={excerptPostBoxShadowColor}
                    setColorNormal={(color) => setAttributes({ excerptPostBoxShadowColor: color })}
                    buttonTitle={__("Shadow Color", "slider-future")}
                    buttonIcon={
                        <ColorLensIcon />
                    }
                    />
                    </div>
            <CustomRangeControl
                    label={
                      <>
                        <SwapHorizIcon />
                        {__("Offset X", "slider-future")}
                      </>
                    }
                    value={excerptPostBoxShadowHOffset}
                    onChange={(val) => setAttributes({excerptPostBoxShadowHOffset: val })}
                    min={-100}
                    max={100}
                    step={1}
                  />
                  <CustomRangeControl
                    label={
                      <>
                        <SwapVertIcon />
                        {__("Offset Y", "slider-future")}
                      </>
                    }
                    value={excerptPostBoxShadowVOffset}
                    onChange={(val) => setAttributes({excerptPostBoxShadowVOffset: val })}
                    min={-100}
                    max={100}
                    step={1}
                  />
                  <CustomRangeControl
                    label={
                      <>
                       <BlurOnIcon />
                        {__("Blur", "slider-future")}
                      </>
                    }
                    value={excerptPostBoxShadowBlur}
                    onChange={(val) => setAttributes({excerptPostBoxShadowBlur: val })}
                    min={0}
                    max={100}
                    step={1}
                  />
                  <CustomRangeControl
                    label={
                      <>
                       <ExpandIcon />
                        {__("Spread", "slider-future")}
                      </>
                    }
                    value={excerptPostBoxShadowSpread}
                    onChange={(val) => setAttributes({excerptPostBoxShadowSpread: val })}
                    min={-100}
                    max={100}
                    step={1}
                  />
            </>
            )}
             </div>
          </>
            )}
             {activeSectionImage === "animation" && (
            <>
            <div
        className="content-title-custom-panel intermedy"
        style={{
          marginTop: "-18px",
          display: "flex",
          gap: "30px",
        }}
      >
        <h2 className="title-custom-panel">{__("Animations", "slider-future")}</h2>
        {(excerptPostEffect !== 'none' && excerptPostEffect !== 'animation-pro') && (
          <div className="button-reply-effect" style={{borderRadius:'50%'}}>
            <Tooltip text={__('Play',"slider-future")}>
            <Button onClick={onPlayAnimationPostExcerpt} style={{padding:'5px 8px'}}><SlowMotionVideoIcon/></Button> 
            </Tooltip>
          </div>
          )}
      </div>
          <div className="content-section-panel" style={{ padding: "0" }}>
          <CustomSelectControl
            label={
                <>
                   <GrainIcon />
                   {__("Effect", "slider-future")}
                </>
            }
            value={excerptPostEffect}
            onChange={(val) => setAttributes({excerptPostEffect: val })}
            options={isProFeature ? selectOptionsEffectIn : selectOptionsEffectInFree}
            />
            {excerptPostEffect === 'splitText' && (
              <>
          <CustomSelectControl
            label={
                <>
                 <ScatterPlotIcon />
                 {__("Effect Split", "slider-future")}
                </>
            }
            value={excerptPostEffectSplit}
            onChange={(val) => setAttributes({excerptPostEffectSplit: val })}
            options={selectOptionsEffectSplit}
            />
             <CustomRangeControl
          label={
            <>
                <HourglassBottomIcon />
                {__("Stagger", "slider-future")}
            </>
          }
          value={excerptPostStagger}
          onChange={(val) => setAttributes({excerptPostStagger: val })}
          min={0}
          max={3000}
          step={10}
        />
              </>
              )}
           {(excerptPostEffect !== 'none' && excerptPostEffect !== 'animation-pro') && (
              <>
             <CustomRangeControl
          label={
            <>
              <OpacityIcon />
              {__("Opacity From", "slider-future")}
            </>
          }
          value={excerptPostOpacityFrom }
          onChange={(val) => setAttributes({excerptPostOpacityFrom: val })}
          min={0}
          max={1}
          step={.1}
        />
        <CustomRangeControl
          label={
            <>
              <OpacityIcon />
              {__("Opacity To", "slider-future")}
            </>
          }
          value={excerptPostOpacityTo }
          onChange={(val) => setAttributes({excerptPostOpacityTo: val })}
          min={0}
          max={1}
          step={.1}
        />
        <CustomRangeControl
          label={
            <>
              <DeblurIcon />
              {__("Blur From", "slider-future")}
            </>
          }
          value={excerptPostBlurFrom}
          onChange={(val) => setAttributes({excerptPostBlurFrom: val })}
          min={0}
          max={20}
          step={1}
        />
        <CustomRangeControl
          label={
            <>
              <DeblurIcon />
              {__("Blur To", "slider-future")}
            </>
          }
          value={excerptPostBlurTo}
          onChange={(val) => setAttributes({excerptPostBlurTo: val })}
          min={0}
          max={20}
          step={1}
        />
    {(['translateXYIn', 'customEffectIn'].includes(excerptPostEffect) || 
            (excerptPostEffect === 'splitText' && 
            ['translateSplit', 'customSplit'].includes(excerptPostEffectSplit))) && (
              <>
        <CustomRangeControl
          label={
            <>
              <SyncAltIcon />
              {__("Translate X From", "slider-future")}
            </>
          }
          value={excerptPostTranslateXFrom}
          onChange={(val) => setAttributes({excerptPostTranslateXFrom: val })}
          min={-500}
          max={500}
          step={1}
        />
        <CustomRangeControl
          label={
            <>
              <SyncAltIcon />
              {__("Translate X To", "slider-future")}
            </>
          }
          value={excerptPostTranslateXTo}
          onChange={(val) => setAttributes({excerptPostTranslateXTo: val })}
          min={-500}
          max={500}
          step={1}
        />
        <CustomRangeControl
          label={
            <>
               <SyncAltIcon style={{transform:'rotate(90deg)'}} />
               {__("Translate Y From", "slider-future")}
            </>
          }
          value={excerptPostTranslateYFrom}
          onChange={(val) => setAttributes({excerptPostTranslateYFrom: val })}
          min={-500}
          max={500}
          step={1}
        />
        <CustomRangeControl
          label={
            <>
               <SyncAltIcon style={{transform:'rotate(90deg)'}} />
               {__("Translate Y To", "slider-future")}
            </>
          }
          value={excerptPostTranslateYTo}
          onChange={(val) => setAttributes({excerptPostTranslateYTo: val })}
          min={-500}
          max={500}
          step={1}
        />
     </>
    )}
{['customEffectIn'].includes(excerptPostEffect) && (
     <CustomSelectControl
     label={
         <>
           <LinearScaleIcon />
            {__("Choose the scale", "slider-future")}
         </>
     }
     value={excerptPostScaleType}
     onChange={(val) => setAttributes({excerptPostScaleType: val })}
     options={selectOptionsScaleIn}
     />
    )}
      {(['scaleIn', 'scaleInX', 'scaleInY','customEffectIn'].includes(excerptPostEffect)  || ['scaleSplit', 'scaleXSplit', 'scaleYSplit','explosion','gather','customSplit'].includes(excerptPostEffectSplit)) && (
            <>
        <CustomRangeControl
          label={
            <>
                <ZoomOutMapIcon />
                {__("Scale From", "slider-future")}
            </>
          }
          value={excerptPostScaleFrom}
          onChange={(val) => setAttributes({excerptPostScaleFrom: val })}
          min={.1}
          max={20}
          step={.1}
        />
        <CustomRangeControl
          label={
            <>
                <ZoomOutMapIcon />
                {__("Scale To", "slider-future")}
            </>
          }
          value={excerptPostScaleTo}
          onChange={(val) => setAttributes({excerptPostScaleTo: val })}
          min={.1}
          max={20}
          step={.1}
        />
     </>
    )}
        {(['rotateIn','customEffectIn'].includes(excerptPostEffect) ||  (excerptPostEffect === 'splitText' && 
            ['rotateSplit', 'customSplit'].includes(excerptPostEffectSplit))) && (
            <>
        <CustomRangeControl
          label={
            <>
                <RefreshIcon />
                {__("Rotate From", "slider-future")}
            </>
          }
          value={excerptPostRotateFrom}
          onChange={(val) => setAttributes({excerptPostRotateFrom: val })}
          min={-360}
          max={360}
          step={1}
        />
        <CustomRangeControl
          label={
            <>
                <RefreshIcon />
                {__("Rotate To", "slider-future")}
            </>
          }
          value={excerptPostRotateTo}
          onChange={(val) => setAttributes({excerptPostRotateTo: val })}
          min={-360}
          max={360}
          step={1}
        />
          <div className={` ${isProFeature ? 'hover-pro' : ''}`} style={{position:'relative'}}>
        <CustomRangeControl
          label={
            <>
                <ThreeSixtyIcon />
                {__("Rotate X From", "slider-future")}
            </>
          }
          value={excerptPostRotateXFrom}
          onChange={(val) => setAttributes({excerptPostRotateXFrom: val })}
          min={-360}
          max={360}
          step={1}
          disabled={isProFeature}
          />
           {isProFeature && (
                    <ProTooltip
                    tooltipProTop={'6px'}
                      tooltipProRight={'74px'}
                      />
                    )}
        </div>
        <div className={` ${isProFeature ? 'hover-pro' : ''}`} style={{position:'relative'}}>
        <CustomRangeControl
          label={
            <>
                <ThreeSixtyIcon />
                {__("Rotate X To", "slider-future")}
            </>
          }
          value={excerptPostRotateXTo}
          onChange={(val) => setAttributes({excerptPostRotateXTo: val })}
          min={-360}
          max={360}
          step={1}
          disabled={isProFeature}
          />
           {isProFeature && (
                    <ProTooltip
                    tooltipProTop={'6px'}
                      tooltipProRight={'74px'}
                      />
                    )}
                     </div>
                     <div className={` ${isProFeature ? 'hover-pro' : ''}`} style={{position:'relative'}}>
        <CustomRangeControl
          label={
            <>
               <ThreeSixtyIcon style={{transform:'rotate(90deg)'}} />
               {__("Rotate Y From", "slider-future")}
            </>
          }
          value={excerptPostRotateYFrom}
          onChange={(val) => setAttributes({excerptPostRotateYFrom: val })}
          min={-360}
          max={360}
          step={1}
          disabled={isProFeature}
          />
           {isProFeature && (
                    <ProTooltip
                    tooltipProTop={'6px'}
                      tooltipProRight={'74px'}
                      />
                    )}
                    </div>
                    <div className={` ${isProFeature ? 'hover-pro' : ''}`} style={{position:'relative'}}>
        <CustomRangeControl
          label={
            <>
               <ThreeSixtyIcon style={{transform:'rotate(90deg)'}} />
               {__("Rotate Y To", "slider-future")}
            </>
          }
          value={excerptPostRotateYTo}
          onChange={(val) => setAttributes({excerptPostRotateYTo: val })}
          min={-360}
          max={360}
          step={1}
          disabled={isProFeature}
          />
           {isProFeature && (
                    <ProTooltip
                    tooltipProTop={'6px'}
                      tooltipProRight={'74px'}
                      />
                    )}
                    </div>
     </>
    )}
    {(['skewInX','customEffectIn'].includes(excerptPostEffect) || (excerptPostEffect === 'splitText' && 
            ['skewSplit', 'customSplit'].includes(excerptPostEffectSplit))) && (
            <>
        <CustomRangeControl
          label={
            <>
                <RefreshIcon />
                {__("Skew X From", "slider-future")}
            </>
          }
          value={excerptPostSkewXFrom}
          onChange={(val) => setAttributes({excerptPostSkewXFrom: val })}
          min={-90}
          max={90}
          step={1}
        />
        <CustomRangeControl
          label={
            <>
                <RefreshIcon />
                {__("Skew X To", "slider-future")}
            </>
          }
          value={excerptPostSkewXTo}
          onChange={(val) => setAttributes({excerptPostSkewXTo: val })}
          min={-90}
          max={90}
          step={1}
        />
        <CustomRangeControl
          label={
            <>
                 <RefreshIcon />
                 {__("Skew Y From", "slider-future")}
            </>
          }
          value={excerptPostSkewYFrom}
          onChange={(val) => setAttributes({excerptPostSkewYFrom: val })}
          min={-90}
          max={90}
          step={1}
        />
        <CustomRangeControl
          label={
            <>
                 <RefreshIcon />
                 {__("Skew Y To", "slider-future")}
            </>
          }
          value={excerptPostSkewYTo}
          onChange={(val) => setAttributes({excerptPostSkewYTo: val })}
          min={-90}
          max={90}
          step={1}
        />
     </>
    )}
     {['BlockFromIn'].includes(excerptPostEffect) && (
              <>
                  <CustomSelectControl
                  label={
                      <>
                       <OpenInBrowserIcon />
                       {__("Block Direction", "slider-future")}
                      </>
                  }
                  value={excerptPostDirectionBlock}
                  onChange={(val) => setAttributes({excerptPostDirectionBlock: val })}
                  options={selectOptionsDirectionBlock}
                  />
        <div className="custom-select color">
        <ColorOptionsPanel
            colorNormal={excerptPostBlockColor}
            setColorNormal={(color) => setAttributes({ excerptPostBlockColor: color })}
            buttonTitle={__("Block Color", "slider-future")}
            buttonIcon={
                <ColorLensIcon />
            }
            />
            </div>
    </>
     )}
        <CustomRangeControl
          label={
            <>
                 <HourglassBottomIcon />
                 {__("Duration", "slider-future")}
            </>
          }
          value={excerptPostDuration}
          onChange={(val) => setAttributes({excerptPostDuration: val })}
          min={100}
          max={15000}
          step={100}
        />
        <CustomRangeControl
          label={
            <>
                  <HistoryToggleOffIcon />
                  {__("Delay", "slider-future")}
            </>
          }
          value={excerptPostDelay}
          onChange={(val) => setAttributes({excerptPostDelay: val })}
          min={0}
          max={5000}
          step={100}
        />
        <CustomRangeControl
          label={
            <>
                  <HistoryToggleOffIcon />
                  {__("End Delay", "slider-future")}
            </>
          }
          value={excerptPostEndDelay}
          onChange={(val) => setAttributes({excerptPostEndDelay: val })}
          min={0}
          max={5000}
          step={100}
        />
         <CustomSelectControl
     label={
         <>
          <SwapCallsIcon />
            {__("Easing", "slider-future")}
         </>
     }
     value={excerptPostEasing}
     onChange={(val) => setAttributes({excerptPostEasing: val })}
       options={isProFeature ? selectOptionsEase : selectOptionsEaseFree}
     />
     {excerptPostEasing === "more-pro" && (
      <ProNotice 
        radiusOneProNotice = '0'
        radiusTwoProNotice = '0'
      />
    )}
    <CustomSelectControl
     label={
         <>
          <SyncAltIcon />
            {__("Direction", "slider-future")}
         </>
     }
     value={excerptPostDirection}
     onChange={(val) => setAttributes({excerptPostDirection: val })}
     options={selectOptionsDirection}
     />
     <CustomSelectControl
     label={
         <>
          <LoopIcon />
            {__("Loop", "slider-future")}
         </>
     }
     value={excerptPostLoop}
     onChange={(val) => setAttributes({excerptPostLoop: val })}
     options={selectOptionsRepeat}
     />
        <div className="custom-select">
            {/* Mostra la nota se valueLoop è maggiore di 1 */}
            {(excerptPostLoop > 1 || excerptPostLoop === "true") && (
             <p
             className="notice components-base-control__help"
             style={{
               borderRadius: "0",
               marginTop: "6px",
               marginBottom: "6px",
             }}
           >
                {__('The loop must complete the set cycle before it can be changed.',"slider-future")}
              </p>
            )}

            {/* Mostra la nota se valueLoop è uguale a true */}
            {excerptPostLoop === 'true' && (
             <p
             className="notice components-base-control__help"
             style={{
               borderRadius: "0",
               marginTop: "6px",
               marginBottom: "6px",
             }}
           >
                {__('The loop is limited to 5 repetitions in the editor for performance reasons.',"slider-future")}
              </p>
            )}
            </div>
   
            {(excerptPostEffect!== 'none' ) && (
          <div className="button-reply-effect">
            <Tooltip text={__('Play',"slider-future")}>
            <Button onClick={onPlayAnimationPostExcerpt}><SlowMotionVideoIcon/></Button> 
            </Tooltip>
          </div>
          )}
          </>
        )}
          </div>
          {excerptPostEffect === "animation-pro" && (
          <ProNotice />
    )}
          </>
        )}

{activeSectionImage === "hover" && (
<>
<div
        className="content-title-custom-panel intermedy"
        style={{
          marginTop: "-18px",
        }}
      >
        <h2 className="title-custom-panel">{__("Animations", "slider-future")}</h2>
      </div>
      <div className="content-section-panel" style={{ padding: "0" }}>
          <CustomSelectControl
            label={
              <>
                <GrainIcon />
                {__("Effects", "slider-future")}
              </>
            }
            value={excerptPostEffectHover}
            onChange={(val) => setAttributes({excerptPostEffectHover: val })}
             options={isProFeature ? selectOptionsEffectHover : selectOptionsEffectHoverFree}
          />
            {excerptPostEffectHover === "animation-pro" && (
      <ProNotice 
        radiusOneProNotice = '0'
        radiusTwoProNotice = '0'
      />
          )}
           {(excerptPostEffectHover !== 'none' && excerptPostEffectHover !== 'animation-pro') && (
        <>
        <CustomRangeControl
          label={
            <>
              <OpacityIcon />
              {__("Opacity", "slider-future")}
            </>
          }
          value={excerptPostOpacityHover ?? 1}
          onChange={(val) => setAttributes({excerptPostOpacityHover : val })}
          min={0}
          max={1}
          step={.1}
        />
        <CustomRangeControl
          label={
            <>
              <DeblurIcon />
              {__("Blur", "slider-future")}
            </>
          }
          value={excerptPostBlurHover ?? 0}
          onChange={(val) => setAttributes({excerptPostBlurHover : val })}
          min={0}
          max={20}
          step={1}
        />
    {['translateHover','customHover'].includes(excerptPostEffectHover) && (
    <>
        <CustomRangeControl
          label={
            <>
              <SyncAltIcon />
              {__("Translate X", "slider-future")}
            </>
          }
          value={excerptPostTranslateXHover ?? 100}
          onChange={(val) => setAttributes({excerptPostTranslateXHover : val })}
          min={-500}
          max={500}
          step={1}
        />
        <CustomRangeControl
          label={
            <>
               <SyncAltIcon style={{transform:'rotate(90deg)'}} />
               {__("Translate Y", "slider-future")}
            </>
          }
          value={excerptPostTranslateYHover ?? 0}
          onChange={(val) => setAttributes({excerptPostTranslateYHover: val })}
          min={-500}
          max={500}
          step={1}
        />
     </>
    )}
    {['customHover'].includes(excerptPostEffectHover) && (
          <CustomSelectControl
            label={
              <>
                <LinearScaleIcon />
                {__("Choose the scale", "slider-future")}
              </>
            }
            value={excerptPostScaleTypeHover ?? 'scale'}
            onChange={(val) => setAttributes({excerptPostScaleTypeHover: val })}
            options={selectOptionsScaleIn}
          />
    )}
     {['scaleHover','scaleXHover','scaleYHover','customHover'].includes(excerptPostEffectHover) && (
            <>
        <CustomRangeControl
          label={
            <>
                <ZoomOutMapIcon />
                {__("Scale", "slider-future")}
            </>
          }
          value={excerptPostScaleHover ?? 1}
          onChange={(val) => setAttributes({excerptPostScaleHover: val })}
          min={.1}
          max={20}
          step={.1}
        />
     </>
    )}
        {['rotateHover','customHover'].includes(excerptPostEffectHover) && (
        <>
        <CustomRangeControl
          label={
            <>
                <RefreshIcon />
                {__("Rotate", "slider-future")}
            </>
          }
          value={excerptPostRotateHover ?? 0}
          onChange={(val) => setAttributes({excerptPostRotateHover: val })}
          min={-360}
          max={360}
          step={1}
        />
        <div className={` ${isProFeature ? 'hover-pro' : ''}`}  style={{ position:'relative' }}>
        <CustomRangeControl
          label={
            <>
                <ThreeSixtyIcon />
                {__("Rotate X", "slider-future")}
            </>
          }
          value={excerptPostRotateXHover ?? 0}
          onChange={(val) => setAttributes({excerptPostRotateXHover: val })}
          min={-360}
          max={360}
          step={1}
          disabled={isProFeature}
          />
           {isProFeature && (
                    <ProTooltip
                    tooltipProTop={'6px'}
                      tooltipProRight={'74px'}
                      />
                    )}
                    </div>
                    <div className={` ${isProFeature ? 'hover-pro' : ''}`}  style={{ position:'relative' }}>
        <CustomRangeControl
          label={
            <>
               <ThreeSixtyIcon style={{transform:'rotate(90deg)'}} />
               {__("Rotate Y", "slider-future")}
            </>
          }
          value={excerptPostRotateYHover ?? 0}
          onChange={(val) => setAttributes({excerptPostRotateYHover: val })}
          min={-360}
          max={360}
          step={1}
          disabled={isProFeature}
          />
           {isProFeature && (
                    <ProTooltip
                    tooltipProTop={'6px'}
                      tooltipProRight={'74px'}
                      />
                    )}
                    </div>
     </>
    )}
    {['skewHover','customHover'].includes(excerptPostEffectHover) && (
    <>
        <CustomRangeControl
          label={
            <>
                <RefreshIcon />
                {__("Skew X", "slider-future")}
            </>
          }
          value={excerptPostSkewXHover ?? 0}
          onChange={(val) => setAttributes({excerptPostSkewXHover: val })}
          min={-90}
          max={90}
          step={1}
        />
        <CustomRangeControl
          label={
            <>
                 <RefreshIcon />
                 {__("Skew Y", "slider-future")}
            </>
          }
          value={excerptPostSkewYHover ?? 0}
          onChange={(val) => setAttributes({excerptPostSkewYHover: val })}
          min={-90}
          max={90}
          step={1}
        />
     </>
    )}
        <CustomRangeControl
          label={
            <>
                 <HourglassBottomIcon />
                 {__("Duration", "slider-future")}
            </>
          }
          value={excerptPostDurationHover ?? 800}
          onChange={(val) => setAttributes({excerptPostDurationHover: val })}
          min={100}
          max={15000}
          step={100}
        />
          <CustomSelectControl
            label={
              <>
                <SwapCallsIcon />
                {__("Easing", "slider-future")}
              </>
            }
            value={excerptPostEasingHover ?? 'linear'}
            onChange={(val) => setAttributes({excerptPostEasingHover: val })}
              options={isProFeature ? selectOptionsEase : selectOptionsEaseFree}
          />
          {excerptPostEasingHover === "more-pro" && (
      <ProNotice 
        radiusOneProNotice = '0'
        radiusTwoProNotice = '0'
      />
    )}
      </>
    )}
      </div>
    </>
)}

{activeSectionImage === "actions" && (
  <>
  <div
              className="content-title-custom-panel intermedy"
              style={{
                marginTop: "-18px",
              }}
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
          value={excerptPostLink}
          onChange={(val) => setAttributes({excerptPostLink: val })}
          options={[
            { label: "None", value: "none" },
            { label: "Link", value: "link" },
          ]}
        />
        {excerptPostLink === "link" && (
         <CustomSelectControl
              label={
                <>
                  <OpenInNewIcon />
                  {__("Target", "slider-future")}
                </>
              }
              value={excerptPostTarget}
              onChange={(val) => setAttributes({excerptPostTarget: val })}
              options={[
                { label: "Same Window", value: "_self" },
                { label: "New Window", value: "_blank" },
              ]}
            />
        )}

            </div>

  </>
)}
{activeSectionImage === "visibility" && (
  <>
   <div
            className="content-title-custom-panel intermedy"
            style={{
            marginTop: "-18px",
            }}
        >
            <h2 className="title-custom-panel">
            {__("Visibility", "slider-future")}
            </h2>
        </div>
        <div className="content-section-panel" style={{ padding: "0" }}>
        <CustomToggleControl
            label={<>
                <PersonalVideoIcon />
                {__("Desktop", "slider-future")}
              </>}
            checked={excerptPostDesktop}
            onChange={(val) => setAttributes({excerptPostDesktop: val })}
        />
        <CustomToggleControl
            label={<>
                <TabletMacIcon />
                {__("Tablet", "slider-future")}
              </>}
            checked={excerptPostTablet}
            onChange={(val) => setAttributes({excerptPostTablet: val })}
        />
        <CustomToggleControl
            label={<>
                <SmartphoneIcon />
                {__("Mobile", "slider-future")}
              </>}
            checked={excerptPostMobile}
            onChange={(val) => setAttributes({excerptPostMobile: val })}
        />
        </div>
  </>
)}
 {activeSectionImage === "hide-title-editor" && (
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
            variant={localHideImage === "hide"}
            onClick={toggleHideImage}
            icon={
              localHideImage === "hide" ? (
                <VisibilityIcon style={{ fill: 'var(--light-color)' }} />
              ) : (
                <VisibilityOffIcon style={{ fill: 'var(--light-color)' }} />
              )
            }
          />
        </div>
        </div>        
        </>
      )}
    </PanelBody>
  );
};

export default PostExcerptEdit;