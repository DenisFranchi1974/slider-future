import React, { useEffect, useRef, useState } from "react";
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

const PostDateEdit = ({ setAttributes, attributes, onPlayAnimationPostDate}) => {

    const {
        datePostColor,
        datePostAlign,
        datePostPadding,
        datePostMargin,
        datePostBorderStyle,
        datePostBorderSize,
        datePostBorderColor,
        datePostBorderRadius,
        datePostRotate,
        datePostOpacity,
        datePostBoxShadow,
        datePostBoxShadowColor,
        datePostBoxShadowHOffset,
        datePostBoxShadowVOffset,
        datePostBoxShadowBlur,
        datePostBoxShadowSpread,
        datePostEffect,
        datePostOpacityFrom,
        datePostOpacityTo,
        datePostBlurFrom,
        datePostBlurTo,
        datePostTranslateXFrom,
        datePostTranslateXTo,
        datePostTranslateYFrom,
        datePostTranslateYTo,
        datePostScaleType,
        datePostScaleFrom,
        datePostScaleTo,
        datePostRotateFrom,
        datePostRotateTo,
        datePostRotateXFrom,
        datePostRotateXTo,
        datePostRotateYFrom,
        datePostRotateYTo,
        datePostSkewXFrom,
        datePostSkewXTo,
        datePostSkewYFrom,
        datePostSkewYTo,
        datePostDuration,
        datePostDelay,
        datePostEndDelay,
        datePostEasing,
        datePostDirection,
        datePostLoop,
        datePostEffectHover,
        datePostOpacityHover,
        datePostBlurHover,
        datePostTranslateXHover,
        datePostTranslateYHover,
        datePostScaleTypeHover,
        datePostScaleHover,
        datePostRotateHover,
        datePostRotateXHover,
        datePostRotateYHover,
        datePostSkewXHover,
        datePostSkewYHover,
        datePostDurationHover,
        datePostEasingHover,
        datePostDesktop,
        datePostTablet,
        datePostMobile,
        hideDate,
        datePostFontSizeMobile,
        datePostFontSizeTablet,
        datePostFontSize,
        datePostFontStyle,
        datePostFontFamily,
        datePostFontWeight,
        datePostLineHeight,
        datePostLetterSpacing,
        datePostColorIn,
        datePostEffectSplit,
        datePostStagger,
        datePostDirectionBlock,
        datePostBlockColor,
    } = attributes;

  // Stato per nascondere l'immagine
  const [localHideImage, setHideImage] = useState(hideDate || "");

  const toggleHideImage = () => {
    const newState = localHideImage === "hide" ? "" : "hide";
    setHideImage(newState);
    setAttributes({ hideDate: newState });
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
        title={__("Date", "slider-future")}
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
                value={datePostAlign}
                setAttributes={setAttributes}
                onChange={(val) => setAttributes({datePostAlign: val })}
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
          value={datePostFontSizeMobile}
          onChange={(val) => setAttributes({datePostFontSizeMobile: val })}
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
          value={datePostFontSizeTablet}
          onChange={(val) => setAttributes({datePostFontSizeTablet: val })}
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
          value={datePostFontSize}
          onChange={(val) => setAttributes({datePostFontSize: val })}
          min={4}
          max={500}
          tooltipText= {__("Sets the maximum text size for large screens (e.g., desktop monitors). The text won’t exceed this value.", "slider-future")}
          showTooltip = {true}
        />
              
              <div className="custom-select">
              <FontStyle
                value={datePostFontStyle } 
                onChange={(styleType, value) =>
                  setAttributes({
                    datePostFontStyle: {
                      ...datePostFontStyle, // Mantieni gli stili esistenti
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
     value={datePostFontFamily}
     onChange={(val) => setAttributes({datePostFontFamily: val })}
     options={fontOptions}
     />
       <CustomSelectControl
     label={
         <>
           <FitnessCenterIcon />
           {__("Font weight", "slider-future")}
         </>
     }
     value={datePostFontWeight}
     onChange={(val) => setAttributes({datePostFontWeight: val })}
     options={fontWeightOptions}
     />
               <CustomRangeControl
          label={
            <>
                   <HeightIcon />
                   {__("Line height", "slider-future")}
            </>
          }
          value={datePostLineHeight}
          onChange={(val) => setAttributes({datePostLineHeight: val })}
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
          value={datePostLetterSpacing}
          onChange={(val) => setAttributes({datePostLetterSpacing: val })}
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
            colorNormal={datePostColorIn}
            setColorNormal={(color) => setAttributes({ datePostColorIn: color })}
            buttonTitle={__("Color", "slider-future")}
            buttonIcon={
                <FormatColorTextIcon />
            }
            />
            </div>
              <div className="custom-select color">
            <ColorOptionsPanel
            colorNormal={datePostColor}
            setColorNormal={(color) => setAttributes({ datePostColor: color })}
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
                values={datePostPadding }
                onChange={(val) => setAttributes({datePostPadding: val })}
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
                values={datePostMargin}
                onChange={(val) => setAttributes({datePostMargin: val })}
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
            value={datePostBorderStyle}
            onChange={(val) => setAttributes({datePostBorderStyle: val })}
            options={borderStyleOptions}
            />
            {datePostBorderStyle !== "none" && (
                <>
                <div className="custom-select color">
                <ColorOptionsPanel
            colorNormal={datePostBorderColor}
            setColorNormal={(color) => setAttributes({ datePostBorderColor: color })}
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
                 values={datePostBorderSize}
                 onChange={(val) => setAttributes({datePostBorderSize: val })}
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
                 values={datePostBorderRadius}
                 onChange={(val) => setAttributes({datePostBorderRadius: val })}
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
                    value={datePostRotate}
                    onChange={(val) => setAttributes({datePostRotate: val })}
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
                        value={datePostOpacity}
                        onChange={(val) => setAttributes({datePostOpacity: val })}
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
            checked={datePostBoxShadow}
            onChange={(val) => setAttributes({datePostBoxShadow: val })}
            disabled= {isProFeature}
            />
             {isProFeature && (
                        <ProTooltip
                        tooltipProTop={'14px'}
                          tooltipProRight={'45px'}
                          />
                       )}
                       </div>
            {datePostBoxShadow && (
            <>
             <div className="custom-select color">
                  <ColorOptionsPanel
                    colorNormal={datePostBoxShadowColor}
                    setColorNormal={(color) => setAttributes({ datePostBoxShadowColor: color })}
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
                    value={datePostBoxShadowHOffset}
                    onChange={(val) => setAttributes({datePostBoxShadowHOffset: val })}
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
                    value={datePostBoxShadowVOffset}
                    onChange={(val) => setAttributes({datePostBoxShadowVOffset: val })}
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
                    value={datePostBoxShadowBlur}
                    onChange={(val) => setAttributes({datePostBoxShadowBlur: val })}
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
                    value={datePostBoxShadowSpread}
                    onChange={(val) => setAttributes({datePostBoxShadowSpread: val })}
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
        {(datePostEffect !== 'none' && datePostEffect !== 'animation-pro') && (
          <div className="button-reply-effect" style={{borderRadius:'50%'}}>
            <Tooltip text={__('Play',"slider-future")}>
            <Button onClick={onPlayAnimationPostDate} style={{padding:'5px 8px'}}><SlowMotionVideoIcon/></Button> 
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
            value={datePostEffect}
            onChange={(val) => setAttributes({datePostEffect: val })}
            options={isProFeature ? selectOptionsEffectIn : selectOptionsEffectInFree}
            />
            {datePostEffect === 'splitText' && (
              <>
          <CustomSelectControl
            label={
                <>
                 <ScatterPlotIcon />
                 {__("Effect Split", "slider-future")}
                </>
            }
            value={datePostEffectSplit}
            onChange={(val) => setAttributes({datePostEffectSplit: val })}
            options={selectOptionsEffectSplit}
            />
             <CustomRangeControl
          label={
            <>
                <HourglassBottomIcon />
                {__("Stagger", "slider-future")}
            </>
          }
          value={datePostStagger}
          onChange={(val) => setAttributes({datePostStagger: val })}
          min={0}
          max={3000}
          step={10}
        />
              </>
              )}
           {(datePostEffect !== 'none' && datePostEffect !== 'animation-pro') && (
              <>
             <CustomRangeControl
          label={
            <>
              <OpacityIcon />
              {__("Opacity From", "slider-future")}
            </>
          }
          value={datePostOpacityFrom }
          onChange={(val) => setAttributes({datePostOpacityFrom: val })}
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
          value={datePostOpacityTo }
          onChange={(val) => setAttributes({datePostOpacityTo: val })}
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
          value={datePostBlurFrom}
          onChange={(val) => setAttributes({datePostBlurFrom: val })}
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
          value={datePostBlurTo}
          onChange={(val) => setAttributes({datePostBlurTo: val })}
          min={0}
          max={20}
          step={1}
        />
    {(['translateXYIn', 'customEffectIn'].includes(datePostEffect) || 
            (datePostEffect === 'splitText' && 
            ['translateSplit', 'customSplit'].includes(datePostEffectSplit))) && (
              <>
        <CustomRangeControl
          label={
            <>
              <SyncAltIcon />
              {__("Translate X From", "slider-future")}
            </>
          }
          value={datePostTranslateXFrom}
          onChange={(val) => setAttributes({datePostTranslateXFrom: val })}
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
          value={datePostTranslateXTo}
          onChange={(val) => setAttributes({datePostTranslateXTo: val })}
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
          value={datePostTranslateYFrom}
          onChange={(val) => setAttributes({datePostTranslateYFrom: val })}
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
          value={datePostTranslateYTo}
          onChange={(val) => setAttributes({datePostTranslateYTo: val })}
          min={-500}
          max={500}
          step={1}
        />
     </>
    )}
{['customEffectIn'].includes(datePostEffect) && (
     <CustomSelectControl
     label={
         <>
           <LinearScaleIcon />
            {__("Choose the scale", "slider-future")}
         </>
     }
     value={datePostScaleType}
     onChange={(val) => setAttributes({datePostScaleType: val })}
     options={selectOptionsScaleIn}
     />
    )}
      {(['scaleIn', 'scaleInX', 'scaleInY','customEffectIn'].includes(datePostEffect)  || ['scaleSplit', 'scaleXSplit', 'scaleYSplit','explosion','gather','customSplit'].includes(datePostEffectSplit)) && (
            <>
        <CustomRangeControl
          label={
            <>
                <ZoomOutMapIcon />
                {__("Scale From", "slider-future")}
            </>
          }
          value={datePostScaleFrom}
          onChange={(val) => setAttributes({datePostScaleFrom: val })}
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
          value={datePostScaleTo}
          onChange={(val) => setAttributes({datePostScaleTo: val })}
          min={.1}
          max={20}
          step={.1}
        />
     </>
    )}
        {(['rotateIn','customEffectIn'].includes(datePostEffect) ||  (datePostEffect === 'splitText' && 
            ['rotateSplit', 'customSplit'].includes(datePostEffectSplit))) && (
            <>
        <CustomRangeControl
          label={
            <>
                <RefreshIcon />
                {__("Rotate From", "slider-future")}
            </>
          }
          value={datePostRotateFrom}
          onChange={(val) => setAttributes({datePostRotateFrom: val })}
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
          value={datePostRotateTo}
          onChange={(val) => setAttributes({datePostRotateTo: val })}
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
          value={datePostRotateXFrom}
          onChange={(val) => setAttributes({datePostRotateXFrom: val })}
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
          value={datePostRotateXTo}
          onChange={(val) => setAttributes({datePostRotateXTo: val })}
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
          value={datePostRotateYFrom}
          onChange={(val) => setAttributes({datePostRotateYFrom: val })}
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
          value={datePostRotateYTo}
          onChange={(val) => setAttributes({datePostRotateYTo: val })}
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
    {(['skewInX','customEffectIn'].includes(datePostEffect) || (datePostEffect === 'splitText' && 
            ['skewSplit', 'customSplit'].includes(datePostEffectSplit))) && (
            <>
        <CustomRangeControl
          label={
            <>
                <RefreshIcon />
                {__("Skew X From", "slider-future")}
            </>
          }
          value={datePostSkewXFrom}
          onChange={(val) => setAttributes({datePostSkewXFrom: val })}
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
          value={datePostSkewXTo}
          onChange={(val) => setAttributes({datePostSkewXTo: val })}
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
          value={datePostSkewYFrom}
          onChange={(val) => setAttributes({datePostSkewYFrom: val })}
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
          value={datePostSkewYTo}
          onChange={(val) => setAttributes({datePostSkewYTo: val })}
          min={-90}
          max={90}
          step={1}
        />
     </>
    )}
     {['BlockFromIn'].includes(datePostEffect) && (
              <>
                  <CustomSelectControl
                  label={
                      <>
                       <OpenInBrowserIcon />
                       {__("Block Direction", "slider-future")}
                      </>
                  }
                  value={datePostDirectionBlock}
                  onChange={(val) => setAttributes({datePostDirectionBlock: val })}
                  options={selectOptionsDirectionBlock}
                  />
        <div className="custom-select color">
        <ColorOptionsPanel
            colorNormal={datePostBlockColor}
            setColorNormal={(color) => setAttributes({ datePostBlockColor: color })}
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
          value={datePostDuration}
          onChange={(val) => setAttributes({datePostDuration: val })}
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
          value={datePostDelay}
          onChange={(val) => setAttributes({datePostDelay: val })}
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
          value={datePostEndDelay}
          onChange={(val) => setAttributes({datePostEndDelay: val })}
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
     value={datePostEasing}
     onChange={(val) => setAttributes({datePostEasing: val })}
       options={isProFeature ? selectOptionsEase : selectOptionsEaseFree}
     />
     {datePostEasing === "more-pro" && (
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
     value={datePostDirection}
     onChange={(val) => setAttributes({datePostDirection: val })}
     options={selectOptionsDirection}
     />
     <CustomSelectControl
     label={
         <>
          <LoopIcon />
            {__("Loop", "slider-future")}
         </>
     }
     value={datePostLoop}
     onChange={(val) => setAttributes({datePostLoop: val })}
     options={selectOptionsRepeat}
     />
        <div className="custom-select">
            {/* Mostra la nota se valueLoop è maggiore di 1 */}
            {(datePostLoop > 1 || datePostLoop === "true") && (
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
            {datePostLoop === 'true' && (
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
   
            {(datePostEffect!== 'none' ) && (
          <div className="button-reply-effect">
            <Tooltip text={__('Play',"slider-future")}>
            <Button onClick={onPlayAnimationPostDate}><SlowMotionVideoIcon/></Button> 
            </Tooltip>
          </div>
          )}
          </>
        )}
          </div>
          {datePostEffect === "animation-pro" && (
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
            value={datePostEffectHover}
            onChange={(val) => setAttributes({datePostEffectHover: val })}
             options={isProFeature ? selectOptionsEffectHover : selectOptionsEffectHoverFree}
          />
           {(datePostEffectHover !== 'none' && datePostEffectHover !== 'animation-pro') && (
        <>
        <CustomRangeControl
          label={
            <>
              <OpacityIcon />
              {__("Opacity", "slider-future")}
            </>
          }
          value={datePostOpacityHover ?? 1}
          onChange={(val) => setAttributes({datePostOpacityHover : val })}
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
          value={datePostBlurHover ?? 0}
          onChange={(val) => setAttributes({datePostBlurHover : val })}
          min={0}
          max={20}
          step={1}
        />
    {['translateHover','customHover'].includes(datePostEffectHover) && (
    <>
        <CustomRangeControl
          label={
            <>
              <SyncAltIcon />
              {__("Translate X", "slider-future")}
            </>
          }
          value={datePostTranslateXHover ?? 100}
          onChange={(val) => setAttributes({datePostTranslateXHover : val })}
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
          value={datePostTranslateYHover ?? 0}
          onChange={(val) => setAttributes({datePostTranslateYHover: val })}
          min={-500}
          max={500}
          step={1}
        />
     </>
    )}
    {['customHover'].includes(datePostEffectHover) && (
          <CustomSelectControl
            label={
              <>
                <LinearScaleIcon />
                {__("Choose the scale", "slider-future")}
              </>
            }
            value={datePostScaleTypeHover ?? 'scale'}
            onChange={(val) => setAttributes({datePostScaleTypeHover: val })}
            options={selectOptionsScaleIn}
          />
    )}
     {['scaleHover','scaleXHover','scaleYHover','customHover'].includes(datePostEffectHover) && (
            <>
        <CustomRangeControl
          label={
            <>
                <ZoomOutMapIcon />
                {__("Scale", "slider-future")}
            </>
          }
          value={datePostScaleHover ?? 1}
          onChange={(val) => setAttributes({datePostScaleHover: val })}
          min={.1}
          max={20}
          step={.1}
        />
     </>
    )}
        {['rotateHover','customHover'].includes(datePostEffectHover) && (
        <>
        <CustomRangeControl
          label={
            <>
                <RefreshIcon />
                {__("Rotate", "slider-future")}
            </>
          }
          value={datePostRotateHover ?? 0}
          onChange={(val) => setAttributes({datePostRotateHover: val })}
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
          value={datePostRotateXHover ?? 0}
          onChange={(val) => setAttributes({datePostRotateXHover: val })}
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
          value={datePostRotateYHover ?? 0}
          onChange={(val) => setAttributes({datePostRotateYHover: val })}
          min={-360}
          max={360}
          step={1}
        />
        </div>
     </>
    )}
    {['skewHover','customHover'].includes(datePostEffectHover) && (
    <>
        <CustomRangeControl
          label={
            <>
                <RefreshIcon />
                {__("Skew X", "slider-future")}
            </>
          }
          value={datePostSkewXHover ?? 0}
          onChange={(val) => setAttributes({datePostSkewXHover: val })}
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
          value={datePostSkewYHover ?? 0}
          onChange={(val) => setAttributes({datePostSkewYHover: val })}
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
          value={datePostDurationHover ?? 800}
          onChange={(val) => setAttributes({datePostDurationHover: val })}
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
            value={datePostEasingHover ?? 'linear'}
            onChange={(val) => setAttributes({datePostEasingHover: val })}
              options={isProFeature ? selectOptionsEase : selectOptionsEaseFree}
          />
           {datePostEasingHover === "more-pro" && (
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
            checked={datePostDesktop}
            onChange={(val) => setAttributes({datePostDesktop: val })}
        />
        <CustomToggleControl
            label={<>
                <TabletMacIcon />
                {__("Tablet", "slider-future")}
              </>}
            checked={datePostTablet}
            onChange={(val) => setAttributes({datePostTablet: val })}
        />
        <CustomToggleControl
            label={<>
                <SmartphoneIcon />
                {__("Mobile", "slider-future")}
              </>}
            checked={datePostMobile}
            onChange={(val) => setAttributes({datePostMobile: val })}
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

export default PostDateEdit;