import React, { useEffect, useState } from "react";
import { __ } from '@wordpress/i18n';
import { PanelBody,   __experimentalBoxControl as BoxControl,Tooltip, Button, TextareaControl } from '@wordpress/components';
import SectionSelectorElementPostNoLink from "../../multitab/sectionSelectorElementPostNoLink";
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

const PostLinkEdit = ({ setAttributes, attributes, onPlayAnimationPostLink}) => {

    const {
        linkPostColor,
        linkPostAlign,
        linkPostPadding,
        linkPostMargin,
        linkPostBorderStyle,
        linkPostBorderSize,
        linkPostBorderColor,
        linkPostBorderRadius,
        linkPostRotate,
        linkPostOpacity,
        linkPostBoxShadow,
        linkPostBoxShadowColor,
        linkPostBoxShadowHOffset,
        linkPostBoxShadowVOffset,
        linkPostBoxShadowBlur,
        linkPostBoxShadowSpread,
        linkPostEffect,
        linkPostOpacityFrom,
        linkPostOpacityTo,
        linkPostBlurFrom,
        linkPostBlurTo,
        linkPostTranslateXFrom,
        linkPostTranslateXTo,
        linkPostTranslateYFrom,
        linkPostTranslateYTo,
        linkPostScaleType,
        linkPostScaleFrom,
        linkPostScaleTo,
        linkPostRotateFrom,
        linkPostRotateTo,
        linkPostRotateXFrom,
        linkPostRotateXTo,
        linkPostRotateYFrom,
        linkPostRotateYTo,
        linkPostSkewXFrom,
        linkPostSkewXTo,
        linkPostSkewYFrom,
        linkPostSkewYTo,
        linkPostDuration,
        linkPostDelay,
        linkPostEndDelay,
        linkPostEasing,
        linkPostDirection,
        linkPostLoop,
        linkPostEffectHover,
        linkPostOpacityHover,
        linkPostBlurHover,
        linkPostTranslateXHover,
        linkPostTranslateYHover,
        linkPostScaleTypeHover,
        linkPostScaleHover,
        linkPostRotateHover,
        linkPostRotateXHover,
        linkPostRotateYHover,
        linkPostSkewXHover,
        linkPostSkewYHover,
        linkPostDurationHover,
        linkPostEasingHover,
        linkPostDesktop,
        linkPostTablet,
        linkPostMobile,
        hideLink,
        linkPostFontSizeMobile,
        linkPostFontSizeTablet,
        linkPostFontSize,
        linkPostFontStyle,
        linkPostFontFamily,
        linkPostFontWeight,
        linkPostLineHeight,
        linkPostLetterSpacing,
        linkPostColorIn,
        linkPostEffectSplit,
        linkPostStagger,
        linkPostDirectionBlock,
        linkPostBlockColor,
        linkPostContent
    } = attributes;

  // Stato per nascondere l'immagine
  const [localHideImage, setHideImage] = useState(hideLink || "");

  const toggleHideImage = () => {
    const newState = localHideImage === "hide" ? "" : "hide";
    setHideImage(newState);
    setAttributes({ hideLink: newState });
  };
   const [isProFeature, setIsProFeature] = useState(true);

  useEffect(() => {
      if (typeof window.isProFeature !== 'undefined') {
          setIsProFeature(window.isProFeature);
      }
  }, []);
      // Section Image
  const [activeSectionImage, setActiveSectionImage] = useState("content");
  return (
    <PanelBody
        className="slider-future-panel panel-slide"
        title={__("Link", "slider-future")}
        initialOpen={false}
    >
        <SectionSelectorElementPostNoLink onSectionChange={setActiveSectionImage} />
        {activeSectionImage === "content" && (
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
          <div className="custom-select">
          <TextareaControl
          __nextHasNoMarginBottom
          value={linkPostContent}
          onChange={(val) => setAttributes({linkPostContent: val })}
          placeholder={ __("Add text link...", "slider-future")} 
        />
        </div>
            </div>
            </>
            )}
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
                value={linkPostAlign}
                setAttributes={setAttributes}
                onChange={(val) => setAttributes({linkPostAlign: val })}
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
          value={linkPostFontSizeMobile}
          onChange={(val) => setAttributes({linkPostFontSizeMobile: val })}
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
          value={linkPostFontSizeTablet}
          onChange={(val) => setAttributes({linkPostFontSizeTablet: val })}
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
          value={linkPostFontSize}
          onChange={(val) => setAttributes({linkPostFontSize: val })}
          min={4}
          max={500}
          tooltipText= {__("Sets the maximum text size for large screens (e.g., desktop monitors). The text won’t exceed this value.", "slider-future")}
          showTooltip = {true}
        />
              
              <div className="custom-select">
              <FontStyle
                value={linkPostFontStyle } 
                onChange={(styleType, value) =>
                  setAttributes({
                    linkPostFontStyle: {
                      ...linkPostFontStyle, // Mantieni gli stili esistenti
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
     value={linkPostFontFamily}
     onChange={(val) => setAttributes({linkPostFontFamily: val })}
     options={fontOptions}
     />
       <CustomSelectControl
     label={
         <>
           <FitnessCenterIcon />
           {__("Font weight", "slider-future")}
         </>
     }
     value={linkPostFontWeight}
     onChange={(val) => setAttributes({linkPostFontWeight: val })}
     options={fontWeightOptions}
     />
               <CustomRangeControl
          label={
            <>
                   <HeightIcon />
                   {__("Line height", "slider-future")}
            </>
          }
          value={linkPostLineHeight}
          onChange={(val) => setAttributes({linkPostLineHeight: val })}
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
          value={linkPostLetterSpacing}
          onChange={(val) => setAttributes({linkPostLetterSpacing: val })}
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
            colorNormal={linkPostColorIn}
            setColorNormal={(color) => setAttributes({ linkPostColorIn: color })}
            buttonTitle={__("Color", "slider-future")}
            buttonIcon={
                <FormatColorTextIcon />
            }
            />
            </div>
              <div className="custom-select color">
            <ColorOptionsPanel
            colorNormal={linkPostColor}
            setColorNormal={(color) => setAttributes({ linkPostColor: color })}
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
                values={linkPostPadding }
                onChange={(val) => setAttributes({linkPostPadding: val })}
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
                values={linkPostMargin}
                onChange={(val) => setAttributes({linkPostMargin: val })}
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
            value={linkPostBorderStyle}
            onChange={(val) => setAttributes({linkPostBorderStyle: val })}
            options={borderStyleOptions}
            />
            {linkPostBorderStyle !== "none" && (
                <>
                <div className="custom-select color">
                <ColorOptionsPanel
            colorNormal={linkPostBorderColor}
            setColorNormal={(color) => setAttributes({ linkPostBorderColor: color })}
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
                 values={linkPostBorderSize}
                 onChange={(val) => setAttributes({linkPostBorderSize: val })}
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
                 values={linkPostBorderRadius}
                 onChange={(val) => setAttributes({linkPostBorderRadius: val })}
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
                    value={linkPostRotate}
                    onChange={(val) => setAttributes({linkPostRotate: val })}
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
                        value={linkPostOpacity}
                        onChange={(val) => setAttributes({linkPostOpacity: val })}
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
            checked={linkPostBoxShadow}
            onChange={(val) => setAttributes({linkPostBoxShadow: val })}
            disabled= {isProFeature}
            />
             {isProFeature && (
                        <ProTooltip
                        tooltipProTop={'14px'}
                          tooltipProRight={'45px'}
                          />
                       )}
                       </div>
            {linkPostBoxShadow && (
            <>
             <div className="custom-select color">
                  <ColorOptionsPanel
                    colorNormal={linkPostBoxShadowColor}
                    setColorNormal={(color) => setAttributes({ linkPostBoxShadowColor: color })}
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
                    value={linkPostBoxShadowHOffset}
                    onChange={(val) => setAttributes({linkPostBoxShadowHOffset: val })}
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
                    value={linkPostBoxShadowVOffset}
                    onChange={(val) => setAttributes({linkPostBoxShadowVOffset: val })}
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
                    value={linkPostBoxShadowBlur}
                    onChange={(val) => setAttributes({linkPostBoxShadowBlur: val })}
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
                    value={linkPostBoxShadowSpread}
                    onChange={(val) => setAttributes({linkPostBoxShadowSpread: val })}
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
           {(linkPostEffect !== 'none' && linkPostEffect !== 'animation-pro') && (
          <div className="button-reply-effect" style={{borderRadius:'50%'}}>
            <Tooltip text={__('Play',"slider-future")}>
            <Button onClick={onPlayAnimationPostLink} style={{padding:'5px 8px'}}><SlowMotionVideoIcon/></Button> 
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
            value={linkPostEffect}
            onChange={(val) => setAttributes({linkPostEffect: val })}
            options={isProFeature ? selectOptionsEffectIn : selectOptionsEffectInFree}
            />
            {linkPostEffect === 'splitText' && (
              <>
          <CustomSelectControl
            label={
                <>
                 <ScatterPlotIcon />
                 {__("Effect Split", "slider-future")}
                </>
            }
            value={linkPostEffectSplit}
            onChange={(val) => setAttributes({linkPostEffectSplit: val })}
            options={selectOptionsEffectSplit}
            />
             <CustomRangeControl
          label={
            <>
                <HourglassBottomIcon />
                {__("Stagger", "slider-future")}
            </>
          }
          value={linkPostStagger}
          onChange={(val) => setAttributes({linkPostStagger: val })}
          min={0}
          max={3000}
          step={10}
        />
              </>
              )}
               {(linkPostEffect !== 'none' && linkPostEffect !== 'animation-pro') && (
              <>
             <CustomRangeControl
          label={
            <>
              <OpacityIcon />
              {__("Opacity From", "slider-future")}
            </>
          }
          value={linkPostOpacityFrom }
          onChange={(val) => setAttributes({linkPostOpacityFrom: val })}
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
          value={linkPostOpacityTo }
          onChange={(val) => setAttributes({linkPostOpacityTo: val })}
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
          value={linkPostBlurFrom}
          onChange={(val) => setAttributes({linkPostBlurFrom: val })}
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
          value={linkPostBlurTo}
          onChange={(val) => setAttributes({linkPostBlurTo: val })}
          min={0}
          max={20}
          step={1}
        />
    {(['translateXYIn', 'customEffectIn'].includes(linkPostEffect) || 
            (linkPostEffect === 'splitText' && 
            ['translateSplit', 'customSplit'].includes(linkPostEffectSplit))) && (
              <>
        <CustomRangeControl
          label={
            <>
              <SyncAltIcon />
              {__("Translate X From", "slider-future")}
            </>
          }
          value={linkPostTranslateXFrom}
          onChange={(val) => setAttributes({linkPostTranslateXFrom: val })}
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
          value={linkPostTranslateXTo}
          onChange={(val) => setAttributes({linkPostTranslateXTo: val })}
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
          value={linkPostTranslateYFrom}
          onChange={(val) => setAttributes({linkPostTranslateYFrom: val })}
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
          value={linkPostTranslateYTo}
          onChange={(val) => setAttributes({linkPostTranslateYTo: val })}
          min={-500}
          max={500}
          step={1}
        />
     </>
    )}
{['customEffectIn'].includes(linkPostEffect) && (
     <CustomSelectControl
     label={
         <>
           <LinearScaleIcon />
            {__("Choose the scale", "slider-future")}
         </>
     }
     value={linkPostScaleType}
     onChange={(val) => setAttributes({linkPostScaleType: val })}
     options={selectOptionsScaleIn}
     />
    )}
      {(['scaleIn', 'scaleInX', 'scaleInY','customEffectIn'].includes(linkPostEffect)  || ['scaleSplit', 'scaleXSplit', 'scaleYSplit','explosion','gather','customSplit'].includes(linkPostEffectSplit)) && (
            <>
        <CustomRangeControl
          label={
            <>
                <ZoomOutMapIcon />
                {__("Scale From", "slider-future")}
            </>
          }
          value={linkPostScaleFrom}
          onChange={(val) => setAttributes({linkPostScaleFrom: val })}
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
          value={linkPostScaleTo}
          onChange={(val) => setAttributes({linkPostScaleTo: val })}
          min={.1}
          max={20}
          step={.1}
        />
     </>
    )}
        {(['rotateIn','customEffectIn'].includes(linkPostEffect) ||  (linkPostEffect === 'splitText' && 
            ['rotateSplit', 'customSplit'].includes(linkPostEffectSplit))) && (
            <>
        <CustomRangeControl
          label={
            <>
                <RefreshIcon />
                {__("Rotate From", "slider-future")}
            </>
          }
          value={linkPostRotateFrom}
          onChange={(val) => setAttributes({linkPostRotateFrom: val })}
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
          value={linkPostRotateTo}
          onChange={(val) => setAttributes({linkPostRotateTo: val })}
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
          value={linkPostRotateXFrom}
          onChange={(val) => setAttributes({linkPostRotateXFrom: val })}
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
          value={linkPostRotateXTo}
          onChange={(val) => setAttributes({linkPostRotateXTo: val })}
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
          value={linkPostRotateYFrom}
          onChange={(val) => setAttributes({linkPostRotateYFrom: val })}
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
          value={linkPostRotateYTo}
          onChange={(val) => setAttributes({linkPostRotateYTo: val })}
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
    {(['skewInX','customEffectIn'].includes(linkPostEffect) || (linkPostEffect === 'splitText' && 
            ['skewSplit', 'customSplit'].includes(linkPostEffectSplit))) && (
            <>
        <CustomRangeControl
          label={
            <>
                <RefreshIcon />
                {__("Skew X From", "slider-future")}
            </>
          }
          value={linkPostSkewXFrom}
          onChange={(val) => setAttributes({linkPostSkewXFrom: val })}
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
          value={linkPostSkewXTo}
          onChange={(val) => setAttributes({linkPostSkewXTo: val })}
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
          value={linkPostSkewYFrom}
          onChange={(val) => setAttributes({linkPostSkewYFrom: val })}
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
          value={linkPostSkewYTo}
          onChange={(val) => setAttributes({linkPostSkewYTo: val })}
          min={-90}
          max={90}
          step={1}
        />
     </>
    )}
     {['BlockFromIn'].includes(linkPostEffect) && (
              <>
                  <CustomSelectControl
                  label={
                      <>
                       <OpenInBrowserIcon />
                       {__("Block Direction", "slider-future")}
                      </>
                  }
                  value={linkPostDirectionBlock}
                  onChange={(val) => setAttributes({linkPostDirectionBlock: val })}
                  options={selectOptionsDirectionBlock}
                  />
        <div className="custom-select color">
        <ColorOptionsPanel
            colorNormal={linkPostBlockColor}
            setColorNormal={(color) => setAttributes({ linkPostBlockColor: color })}
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
          value={linkPostDuration}
          onChange={(val) => setAttributes({linkPostDuration: val })}
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
          value={linkPostDelay}
          onChange={(val) => setAttributes({linkPostDelay: val })}
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
          value={linkPostEndDelay}
          onChange={(val) => setAttributes({linkPostEndDelay: val })}
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
     value={linkPostEasing}
     onChange={(val) => setAttributes({linkPostEasing: val })}
       options={isProFeature ? selectOptionsEase : selectOptionsEaseFree}
     />
      {linkPostEasing === "more-pro" && (
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
     value={linkPostDirection}
     onChange={(val) => setAttributes({linkPostDirection: val })}
     options={selectOptionsDirection}
     />
     <CustomSelectControl
     label={
         <>
          <LoopIcon />
            {__("Loop", "slider-future")}
         </>
     }
     value={linkPostLoop}
     onChange={(val) => setAttributes({linkPostLoop: val })}
     options={selectOptionsRepeat}
     />
        <div className="custom-select">
            {/* Mostra la nota se valueLoop è maggiore di 1 */}
            {(linkPostLoop > 1 || linkPostLoop === "true") && (
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
            {linkPostLoop === 'true' && (
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
   
            {(linkPostEffect!== 'none' ) && (
          <div className="button-reply-effect">
            <Tooltip text={__('Play',"slider-future")}>
            <Button onClick={onPlayAnimationPostLink}><SlowMotionVideoIcon/></Button> 
            </Tooltip>
          </div>
          )}
          </>
        )}
          </div>
          {linkPostEffect === "animation-pro" && (
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
            value={linkPostEffectHover}
            onChange={(val) => setAttributes({linkPostEffectHover: val })}
             options={isProFeature ? selectOptionsEffectHover : selectOptionsEffectHoverFree}
          />
           {linkPostEffectHover === "animation-pro" && (
      <ProNotice 
        radiusOneProNotice = '0'
        radiusTwoProNotice = '0'
      />
          )}
           {(linkPostEffectHover !== 'none' && linkPostEffectHover !== 'animation-pro') && (
        <>
        <CustomRangeControl
          label={
            <>
              <OpacityIcon />
              {__("Opacity", "slider-future")}
            </>
          }
          value={linkPostOpacityHover ?? 1}
          onChange={(val) => setAttributes({linkPostOpacityHover : val })}
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
          value={linkPostBlurHover ?? 0}
          onChange={(val) => setAttributes({linkPostBlurHover : val })}
          min={0}
          max={20}
          step={1}
        />
    {['translateHover','customHover'].includes(linkPostEffectHover) && (
    <>
        <CustomRangeControl
          label={
            <>
              <SyncAltIcon />
              {__("Translate X", "slider-future")}
            </>
          }
          value={linkPostTranslateXHover ?? 100}
          onChange={(val) => setAttributes({linkPostTranslateXHover : val })}
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
          value={linkPostTranslateYHover ?? 0}
          onChange={(val) => setAttributes({linkPostTranslateYHover: val })}
          min={-500}
          max={500}
          step={1}
        />
     </>
    )}
    {['customHover'].includes(linkPostEffectHover) && (
          <CustomSelectControl
            label={
              <>
                <LinearScaleIcon />
                {__("Choose the scale", "slider-future")}
              </>
            }
            value={linkPostScaleTypeHover ?? 'scale'}
            onChange={(val) => setAttributes({linkPostScaleTypeHover: val })}
            options={selectOptionsScaleIn}
          />
    )}
     {['scaleHover','scaleXHover','scaleYHover','customHover'].includes(linkPostEffectHover) && (
            <>
        <CustomRangeControl
          label={
            <>
                <ZoomOutMapIcon />
                {__("Scale", "slider-future")}
            </>
          }
          value={linkPostScaleHover ?? 1}
          onChange={(val) => setAttributes({linkPostScaleHover: val })}
          min={.1}
          max={20}
          step={.1}
        />
     </>
    )}
        {['rotateHover','customHover'].includes(linkPostEffectHover) && (
        <>
        <CustomRangeControl
          label={
            <>
                <RefreshIcon />
                {__("Rotate", "slider-future")}
            </>
          }
          value={linkPostRotateHover ?? 0}
          onChange={(val) => setAttributes({linkPostRotateHover: val })}
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
          value={linkPostRotateXHover ?? 0}
          onChange={(val) => setAttributes({linkPostRotateXHover: val })}
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
          value={linkPostRotateYHover ?? 0}
          onChange={(val) => setAttributes({linkPostRotateYHover: val })}
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
    {['skewHover','customHover'].includes(linkPostEffectHover) && (
    <>
        <CustomRangeControl
          label={
            <>
                <RefreshIcon />
                {__("Skew X", "slider-future")}
            </>
          }
          value={linkPostSkewXHover ?? 0}
          onChange={(val) => setAttributes({linkPostSkewXHover: val })}
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
          value={linkPostSkewYHover ?? 0}
          onChange={(val) => setAttributes({linkPostSkewYHover: val })}
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
          value={linkPostDurationHover ?? 800}
          onChange={(val) => setAttributes({linkPostDurationHover: val })}
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
            value={linkPostEasingHover ?? 'linear'}
            onChange={(val) => setAttributes({linkPostEasingHover: val })}
              options={isProFeature ? selectOptionsEase : selectOptionsEaseFree}
          />
          {linkPostEasingHover === "more-pro" && (
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
            checked={linkPostDesktop}
            onChange={(val) => setAttributes({linkPostDesktop: val })}
        />
        <CustomToggleControl
            label={<>
                <TabletMacIcon />
                {__("Tablet", "slider-future")}
              </>}
            checked={linkPostTablet}
            onChange={(val) => setAttributes({linkPostTablet: val })}
        />
        <CustomToggleControl
            label={<>
                <SmartphoneIcon />
                {__("Mobile", "slider-future")}
              </>}
            checked={linkPostMobile}
            onChange={(val) => setAttributes({linkPostMobile: val })}
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

export default PostLinkEdit;