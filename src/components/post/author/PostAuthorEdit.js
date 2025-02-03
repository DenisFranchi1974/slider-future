import React, { useEffect, useState } from "react";
import { __ } from '@wordpress/i18n';
import { PanelBody,   __experimentalBoxControl as BoxControl,Tooltip, Button } from '@wordpress/components';
import SectionSelectorElementPostAut from "../../multitab/sectionSelectorElementPostAut";
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

const PostAuthorEdit = ({ setAttributes, attributes, onPlayAnimationPostAuthor}) => {

    const {
        authorPostColor,
        authorPostAlign,
        authorPostPadding,
        authorPostMargin,
        authorPostBorderStyle,
        authorPostBorderSize,
        authorPostBorderColor,
        authorPostBorderRadius,
        authorPostRotate,
        authorPostOpacity,
        authorPostBoxShadow,
        authorPostBoxShadowColor,
        authorPostBoxShadowHOffset,
        authorPostBoxShadowVOffset,
        authorPostBoxShadowBlur,
        authorPostBoxShadowSpread,
        authorPostEffect,
        authorPostOpacityFrom,
        authorPostOpacityTo,
        authorPostBlurFrom,
        authorPostBlurTo,
        authorPostTranslateXFrom,
        authorPostTranslateXTo,
        authorPostTranslateYFrom,
        authorPostTranslateYTo,
        authorPostScaleType,
        authorPostScaleFrom,
        authorPostScaleTo,
        authorPostRotateFrom,
        authorPostRotateTo,
        authorPostRotateXFrom,
        authorPostRotateXTo,
        authorPostRotateYFrom,
        authorPostRotateYTo,
        authorPostSkewXFrom,
        authorPostSkewXTo,
        authorPostSkewYFrom,
        authorPostSkewYTo,
        authorPostDuration,
        authorPostDelay,
        authorPostEndDelay,
        authorPostEasing,
        authorPostDirection,
        authorPostLoop,
        authorPostEffectHover,
        authorPostOpacityHover,
        authorPostBlurHover,
        authorPostTranslateXHover,
        authorPostTranslateYHover,
        authorPostScaleTypeHover,
        authorPostScaleHover,
        authorPostRotateHover,
        authorPostRotateXHover,
        authorPostRotateYHover,
        authorPostSkewXHover,
        authorPostSkewYHover,
        authorPostDurationHover,
        authorPostEasingHover,
        authorPostDesktop,
        authorPostTablet,
        authorPostMobile,
        hideAuthor,
        authorPostFontSizeMobile,
        authorPostFontSizeTablet,
        authorPostFontSize,
        authorPostFontStyle,
        authorPostFontFamily,
        authorPostFontWeight,
        authorPostLineHeight,
        authorPostLetterSpacing,
        authorPostColorIn,
        authorPostEffectSplit,
        authorPostStagger,
        authorPostDirectionBlock,
        authorPostBlockColor,
    } = attributes;

  // Stato per nascondere l'immagine
  const [localHideImage, setHideImage] = useState(hideAuthor || "");

  const toggleHideImage = () => {
    const newState = localHideImage === "hide" ? "" : "hide";
    setHideImage(newState);
    setAttributes({ hideAuthor: newState });
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
        title={__("Author", "slider-future")}
        initialOpen={false}
    >
        <SectionSelectorElementPostAut onSectionChange={setActiveSectionImage} />
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
                value={authorPostAlign}
                setAttributes={setAttributes}
                onChange={(val) => setAttributes({authorPostAlign: val })}
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
          value={authorPostFontSizeMobile}
          onChange={(val) => setAttributes({authorPostFontSizeMobile: val })}
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
          value={authorPostFontSizeTablet}
          onChange={(val) => setAttributes({authorPostFontSizeTablet: val })}
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
          value={authorPostFontSize}
          onChange={(val) => setAttributes({authorPostFontSize: val })}
          min={4}
          max={500}
          tooltipText= {__("Sets the maximum text size for large screens (e.g., desktop monitors). The text won’t exceed this value.", "slider-future")}
          showTooltip = {true}
        />
              
              <div className="custom-select">
              <FontStyle
                value={authorPostFontStyle } 
                onChange={(styleType, value) =>
                  setAttributes({
                    authorPostFontStyle: {
                      ...authorPostFontStyle, // Mantieni gli stili esistenti
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
     value={authorPostFontFamily}
     onChange={(val) => setAttributes({authorPostFontFamily: val })}
     options={fontOptions}
     />
       <CustomSelectControl
     label={
         <>
           <FitnessCenterIcon />
           {__("Font weight", "slider-future")}
         </>
     }
     value={authorPostFontWeight}
     onChange={(val) => setAttributes({authorPostFontWeight: val })}
     options={fontWeightOptions}
     />
               <CustomRangeControl
          label={
            <>
                   <HeightIcon />
                   {__("Line height", "slider-future")}
            </>
          }
          value={authorPostLineHeight}
          onChange={(val) => setAttributes({authorPostLineHeight: val })}
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
          value={authorPostLetterSpacing}
          onChange={(val) => setAttributes({authorPostLetterSpacing: val })}
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
            colorNormal={authorPostColorIn}
            setColorNormal={(color) => setAttributes({ authorPostColorIn: color })}
            buttonTitle={__("Color", "slider-future")}
            buttonIcon={
                <FormatColorTextIcon />
            }
            />
            </div>
              <div className="custom-select color">
            <ColorOptionsPanel
            colorNormal={authorPostColor}
            setColorNormal={(color) => setAttributes({ authorPostColor: color })}
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
                values={authorPostPadding }
                onChange={(val) => setAttributes({authorPostPadding: val })}
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
                values={authorPostMargin}
                onChange={(val) => setAttributes({authorPostMargin: val })}
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
            value={authorPostBorderStyle}
            onChange={(val) => setAttributes({authorPostBorderStyle: val })}
            options={borderStyleOptions}
            />
            {authorPostBorderStyle !== "none" && (
                <>
                <div className="custom-select color">
                <ColorOptionsPanel
            colorNormal={authorPostBorderColor}
            setColorNormal={(color) => setAttributes({ authorPostBorderColor: color })}
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
                 values={authorPostBorderSize}
                 onChange={(val) => setAttributes({authorPostBorderSize: val })}
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
                 values={authorPostBorderRadius}
                 onChange={(val) => setAttributes({authorPostBorderRadius: val })}
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
                    value={authorPostRotate}
                    onChange={(val) => setAttributes({authorPostRotate: val })}
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
                        value={authorPostOpacity}
                        onChange={(val) => setAttributes({authorPostOpacity: val })}
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
            checked={authorPostBoxShadow}
            onChange={(val) => setAttributes({authorPostBoxShadow: val })}
            disabled= {isProFeature}
            />
             {isProFeature && (
                        <ProTooltip
                        tooltipProTop={'14px'}
                          tooltipProRight={'45px'}
                          />
                       )}
                       </div>
            {authorPostBoxShadow && (
            <>
             <div className="custom-select color">
                  <ColorOptionsPanel
                    colorNormal={authorPostBoxShadowColor}
                    setColorNormal={(color) => setAttributes({ authorPostBoxShadowColor: color })}
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
                    value={authorPostBoxShadowHOffset}
                    onChange={(val) => setAttributes({authorPostBoxShadowHOffset: val })}
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
                    value={authorPostBoxShadowVOffset}
                    onChange={(val) => setAttributes({authorPostBoxShadowVOffset: val })}
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
                    value={authorPostBoxShadowBlur}
                    onChange={(val) => setAttributes({authorPostBoxShadowBlur: val })}
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
                    value={authorPostBoxShadowSpread}
                    onChange={(val) => setAttributes({authorPostBoxShadowSpread: val })}
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
        {(authorPostEffect !== 'none' && authorPostEffect !== 'animation-pro') && (
          <div className="button-reply-effect" style={{borderRadius:'50%'}}>
            <Tooltip text={__('Play',"slider-future")}>
            <Button onClick={onPlayAnimationPostAuthor} style={{padding:'5px 8px'}}><SlowMotionVideoIcon/></Button> 
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
            value={authorPostEffect}
            onChange={(val) => setAttributes({authorPostEffect: val })}
            options={isProFeature ? selectOptionsEffectIn : selectOptionsEffectInFree}
            />
            {authorPostEffect === 'splitText' && (
              <>
          <CustomSelectControl
            label={
                <>
                 <ScatterPlotIcon />
                 {__("Effect Split", "slider-future")}
                </>
            }
            value={authorPostEffectSplit}
            onChange={(val) => setAttributes({authorPostEffectSplit: val })}
            options={selectOptionsEffectSplit}
            />
             <CustomRangeControl
          label={
            <>
                <HourglassBottomIcon />
                {__("Stagger", "slider-future")}
            </>
          }
          value={authorPostStagger}
          onChange={(val) => setAttributes({authorPostStagger: val })}
          min={0}
          max={3000}
          step={10}
        />
              </>
              )}
          {(authorPostEffect !== 'none' && authorPostEffect !== 'animation-pro') && (
              <>
             <CustomRangeControl
          label={
            <>
              <OpacityIcon />
              {__("Opacity From", "slider-future")}
            </>
          }
          value={authorPostOpacityFrom }
          onChange={(val) => setAttributes({authorPostOpacityFrom: val })}
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
          value={authorPostOpacityTo }
          onChange={(val) => setAttributes({authorPostOpacityTo: val })}
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
          value={authorPostBlurFrom}
          onChange={(val) => setAttributes({authorPostBlurFrom: val })}
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
          value={authorPostBlurTo}
          onChange={(val) => setAttributes({authorPostBlurTo: val })}
          min={0}
          max={20}
          step={1}
        />
    {(['translateXYIn', 'customEffectIn'].includes(authorPostEffect) || 
            (authorPostEffect === 'splitText' && 
            ['translateSplit', 'customSplit'].includes(authorPostEffectSplit))) && (
              <>
        <CustomRangeControl
          label={
            <>
              <SyncAltIcon />
              {__("Translate X From", "slider-future")}
            </>
          }
          value={authorPostTranslateXFrom}
          onChange={(val) => setAttributes({authorPostTranslateXFrom: val })}
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
          value={authorPostTranslateXTo}
          onChange={(val) => setAttributes({authorPostTranslateXTo: val })}
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
          value={authorPostTranslateYFrom}
          onChange={(val) => setAttributes({authorPostTranslateYFrom: val })}
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
          value={authorPostTranslateYTo}
          onChange={(val) => setAttributes({authorPostTranslateYTo: val })}
          min={-500}
          max={500}
          step={1}
        />
     </>
    )}
{['customEffectIn'].includes(authorPostEffect) && (
     <CustomSelectControl
     label={
         <>
           <LinearScaleIcon />
            {__("Choose the scale", "slider-future")}
         </>
     }
     value={authorPostScaleType}
     onChange={(val) => setAttributes({authorPostScaleType: val })}
     options={selectOptionsScaleIn}
     />
    )}
      {(['scaleIn', 'scaleInX', 'scaleInY','customEffectIn'].includes(authorPostEffect)  || ['scaleSplit', 'scaleXSplit', 'scaleYSplit','explosion','gather','customSplit'].includes(authorPostEffectSplit)) && (
            <>
        <CustomRangeControl
          label={
            <>
                <ZoomOutMapIcon />
                {__("Scale From", "slider-future")}
            </>
          }
          value={authorPostScaleFrom}
          onChange={(val) => setAttributes({authorPostScaleFrom: val })}
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
          value={authorPostScaleTo}
          onChange={(val) => setAttributes({authorPostScaleTo: val })}
          min={.1}
          max={20}
          step={.1}
        />
     </>
    )}
        {(['rotateIn','customEffectIn'].includes(authorPostEffect) ||  (authorPostEffect === 'splitText' && 
            ['rotateSplit', 'customSplit'].includes(authorPostEffectSplit))) && (
            <>
        <CustomRangeControl
          label={
            <>
                <RefreshIcon />
                {__("Rotate From", "slider-future")}
            </>
          }
          value={authorPostRotateFrom}
          onChange={(val) => setAttributes({authorPostRotateFrom: val })}
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
          value={authorPostRotateTo}
          onChange={(val) => setAttributes({authorPostRotateTo: val })}
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
          value={authorPostRotateXFrom}
          onChange={(val) => setAttributes({authorPostRotateXFrom: val })}
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
          value={authorPostRotateXTo}
          onChange={(val) => setAttributes({authorPostRotateXTo: val })}
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
          value={authorPostRotateYFrom}
          onChange={(val) => setAttributes({authorPostRotateYFrom: val })}
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
          value={authorPostRotateYTo}
          onChange={(val) => setAttributes({authorPostRotateYTo: val })}
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
    {(['skewInX','customEffectIn'].includes(authorPostEffect) || (authorPostEffect === 'splitText' && 
            ['skewSplit', 'customSplit'].includes(authorPostEffectSplit))) && (
            <>
        <CustomRangeControl
          label={
            <>
                <RefreshIcon />
                {__("Skew X From", "slider-future")}
            </>
          }
          value={authorPostSkewXFrom}
          onChange={(val) => setAttributes({authorPostSkewXFrom: val })}
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
          value={authorPostSkewXTo}
          onChange={(val) => setAttributes({authorPostSkewXTo: val })}
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
          value={authorPostSkewYFrom}
          onChange={(val) => setAttributes({authorPostSkewYFrom: val })}
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
          value={authorPostSkewYTo}
          onChange={(val) => setAttributes({authorPostSkewYTo: val })}
          min={-90}
          max={90}
          step={1}
        />
     </>
    )}
     {['BlockFromIn'].includes(authorPostEffect) && (
              <>
                  <CustomSelectControl
                  label={
                      <>
                       <OpenInBrowserIcon />
                       {__("Block Direction", "slider-future")}
                      </>
                  }
                  value={authorPostDirectionBlock}
                  onChange={(val) => setAttributes({authorPostDirectionBlock: val })}
                  options={selectOptionsDirectionBlock}
                  />
        <div className="custom-select color">
        <ColorOptionsPanel
            colorNormal={authorPostBlockColor}
            setColorNormal={(color) => setAttributes({ authorPostBlockColor: color })}
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
          value={authorPostDuration}
          onChange={(val) => setAttributes({authorPostDuration: val })}
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
          value={authorPostDelay}
          onChange={(val) => setAttributes({authorPostDelay: val })}
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
          value={authorPostEndDelay}
          onChange={(val) => setAttributes({authorPostEndDelay: val })}
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
     value={authorPostEasing}
     onChange={(val) => setAttributes({authorPostEasing: val })}
       options={isProFeature ? selectOptionsEase : selectOptionsEaseFree}
     />
     {authorPostEasing === "more-pro" && (
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
     value={authorPostDirection}
     onChange={(val) => setAttributes({authorPostDirection: val })}
     options={selectOptionsDirection}
     />
     <CustomSelectControl
     label={
         <>
          <LoopIcon />
            {__("Loop", "slider-future")}
         </>
     }
     value={authorPostLoop}
     onChange={(val) => setAttributes({authorPostLoop: val })}
     options={selectOptionsRepeat}
     />
        <div className="custom-select">
            {/* Mostra la nota se valueLoop è maggiore di 1 */}
            {(authorPostLoop > 1 || authorPostLoop === "true") && (
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
            {authorPostLoop === 'true' && (
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
   
            {(authorPostEffect!== 'none' ) && (
          <div className="button-reply-effect">
            <Tooltip text={__('Play',"slider-future")}>
            <Button onClick={onPlayAnimationPostAuthor}><SlowMotionVideoIcon/></Button> 
            </Tooltip>
          </div>
          )}
          </>
        )}
          </div>
          {authorPostEffect === "animation-pro" && (
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
            value={authorPostEffectHover}
            onChange={(val) => setAttributes({authorPostEffectHover: val })}
             options={isProFeature ? selectOptionsEffectHover : selectOptionsEffectHoverFree}
          />
           {authorPostEffectHover === "animation-pro" && (
      <ProNotice 
        radiusOneProNotice = '0'
        radiusTwoProNotice = '0'
      />
          )}
        {(authorPostEffectHover !== 'none' && authorPostEffectHover !== 'animation-pro') && (
        <>
        <CustomRangeControl
          label={
            <>
              <OpacityIcon />
              {__("Opacity", "slider-future")}
            </>
          }
          value={authorPostOpacityHover ?? 1}
          onChange={(val) => setAttributes({authorPostOpacityHover : val })}
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
          value={authorPostBlurHover ?? 0}
          onChange={(val) => setAttributes({authorPostBlurHover : val })}
          min={0}
          max={20}
          step={1}
        />
    {['translateHover','customHover'].includes(authorPostEffectHover) && (
    <>
        <CustomRangeControl
          label={
            <>
              <SyncAltIcon />
              {__("Translate X", "slider-future")}
            </>
          }
          value={authorPostTranslateXHover ?? 100}
          onChange={(val) => setAttributes({authorPostTranslateXHover : val })}
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
          value={authorPostTranslateYHover ?? 0}
          onChange={(val) => setAttributes({authorPostTranslateYHover: val })}
          min={-500}
          max={500}
          step={1}
        />
     </>
    )}
    {['customHover'].includes(authorPostEffectHover) && (
          <CustomSelectControl
            label={
              <>
                <LinearScaleIcon />
                {__("Choose the scale", "slider-future")}
              </>
            }
            value={authorPostScaleTypeHover ?? 'scale'}
            onChange={(val) => setAttributes({authorPostScaleTypeHover: val })}
            options={selectOptionsScaleIn}
          />
    )}
     {['scaleHover','scaleXHover','scaleYHover','customHover'].includes(authorPostEffectHover) && (
            <>
        <CustomRangeControl
          label={
            <>
                <ZoomOutMapIcon />
                {__("Scale", "slider-future")}
            </>
          }
          value={authorPostScaleHover ?? 1}
          onChange={(val) => setAttributes({authorPostScaleHover: val })}
          min={.1}
          max={20}
          step={.1}
        />
     </>
    )}
        {['rotateHover','customHover'].includes(authorPostEffectHover) && (
        <>
        <CustomRangeControl
          label={
            <>
                <RefreshIcon />
                {__("Rotate", "slider-future")}
            </>
          }
          value={authorPostRotateHover ?? 0}
          onChange={(val) => setAttributes({authorPostRotateHover: val })}
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
          value={authorPostRotateXHover ?? 0}
          onChange={(val) => setAttributes({authorPostRotateXHover: val })}
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
          value={authorPostRotateYHover ?? 0}
          onChange={(val) => setAttributes({authorPostRotateYHover: val })}
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
    {['skewHover','customHover'].includes(authorPostEffectHover) && (
    <>
        <CustomRangeControl
          label={
            <>
                <RefreshIcon />
                {__("Skew X", "slider-future")}
            </>
          }
          value={authorPostSkewXHover ?? 0}
          onChange={(val) => setAttributes({authorPostSkewXHover: val })}
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
          value={authorPostSkewYHover ?? 0}
          onChange={(val) => setAttributes({authorPostSkewYHover: val })}
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
          value={authorPostDurationHover ?? 800}
          onChange={(val) => setAttributes({authorPostDurationHover: val })}
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
            value={authorPostEasingHover ?? 'linear'}
            onChange={(val) => setAttributes({authorPostEasingHover: val })}
              options={isProFeature ? selectOptionsEase : selectOptionsEaseFree}
          />
          {authorPostEasingHover === "more-pro" && (
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
            checked={authorPostDesktop}
            onChange={(val) => setAttributes({authorPostDesktop: val })}
        />
        <CustomToggleControl
            label={<>
                <TabletMacIcon />
                {__("Tablet", "slider-future")}
              </>}
            checked={authorPostTablet}
            onChange={(val) => setAttributes({authorPostTablet: val })}
        />
        <CustomToggleControl
            label={<>
                <SmartphoneIcon />
                {__("Mobile", "slider-future")}
              </>}
            checked={authorPostMobile}
            onChange={(val) => setAttributes({authorPostMobile: val })}
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

export default PostAuthorEdit;