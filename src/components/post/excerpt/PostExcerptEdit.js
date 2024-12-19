import React, { useState } from "react";
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
import {selectOptionsEffectElement} from '../../../assets/options';
import {selectOptionsEase} from '../../../assets/options';
import {selectOptionsDirection} from '../../../assets/options';
import {selectOptionsRepeat} from '../../../assets/options';
import {selectOptionsEffectHover} from '../../../assets/options';
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
      // Section Image
  const [activeSectionImage, setActiveSectionImage] = useState("style");
  return (
    <PanelBody
        className="cocoblocks-panel panel-slide"
        title={__("Excerpt", "cocoblocks")}
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
              {__("Background", "cocoblocks")}
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
                  {__("Font", "cocoblocks")}
                </h2>
              </div>
              <div className="content-section-panel" style={{ padding: "0" }}>
              <CustomRangeControl
          label={
            <>
                <TextFieldsIcon/>
                {__("Min", "cocoblocks")}
            </>
          }
          value={excerptPostFontSizeMobile}
          onChange={(val) => setAttributes({excerptPostFontSizeMobile: val })}
          min={4}
          max={100}
          step={1}
          tooltipText= {__("Sets the minimum text size for small screens (e.g., mobile devices). The text won’t go below this value.", "cocoblocks")}
          showTooltip = {true}
        />
        <CustomRangeControl
          label={
            <>
                <TuneIcon />
                {__("Mid", "cocoblocks")}
            </>
          }
          value={excerptPostFontSizeTablet}
          onChange={(val) => setAttributes({excerptPostFontSizeTablet: val })}
          min={4}
          max={200}
          step={.5}
          tooltipText= {__("Defines the fluid text size, measured in viewport width (vw), that adapts to screen width. This is ideal for medium-sized screens, like tablets, creating a smooth transition between the minimum and maximum sizes.", "cocoblocks")}
          showTooltip = {true}
        />
              
              <CustomRangeControl
          label={
            <>
                   <FullscreenIcon />
                {__("Max", "cocoblocks")}
            </>
          }
          value={excerptPostFontSize}
          onChange={(val) => setAttributes({excerptPostFontSize: val })}
          min={4}
          max={500}
          tooltipText= {__("Sets the maximum text size for large screens (e.g., desktop monitors). The text won’t exceed this value.", "cocoblocks")}
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
           {__("Font family", "cocoblocks")}
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
           {__("Font weight", "cocoblocks")}
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
                   {__("Line height", "cocoblocks")}
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
                  {__("Letter spacing", "cocoblocks")}
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
                "cocoblocks"
              )}
            </p>
            <div className="custom-select color">
            <ColorOptionsPanel
            colorNormal={excerptPostColorIn}
            setColorNormal={(color) => setAttributes({ excerptPostColorIn: color })}
            buttonTitle={__("Color", "cocoblocks")}
            buttonIcon={
                <FormatColorTextIcon />
            }
            />
            </div>
              <div className="custom-select color">
            <ColorOptionsPanel
            colorNormal={excerptPostColor}
            setColorNormal={(color) => setAttributes({ excerptPostColor: color })}
            buttonTitle={__("Background Color", "cocoblocks")}
            buttonIcon={
                <ColorLensIcon />
            }
            />
            </div>
                </div>
                <div className="content-title-custom-panel intermedy">
            <h2 className="title-custom-panel">
              {__("Spacings", "cocoblocks")}
            </h2>
          </div>
          <div className="content-section-panel" style={{ padding: "0" }}>
          <div className="custom-select box-control">
              <BoxControl
                label={
                  <>
                    <PaddingIcon/>
                    {__("Padding", "cocoblocks")}
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
                    {__("Margin", "cocoblocks")}
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
            <h2 className="title-custom-panel">{__("Border", "cocoblocks")}</h2>
          </div>
          <div className="content-section-panel" style={{ padding: "0" }}>
          <CustomSelectControl
            label={
                <>
                   <BorderStyleIcon />
                   {__("Border style", "cocoblocks")}
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
            buttonTitle={__("Border Color", "cocoblocks")}
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
                    {__("Border width", "cocoblocks")}
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
                     {__("Border Radius", "cocoblocks")}
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
              {__("Basic Transforms", "cocoblocks")}
            </h2>
          </div>
          <div className="content-section-panel" style={{ padding: "0" }}>
          <CustomRangeControl
                    label={
                      <>
                       <RotateRightIcon />
                       {__("Rotate", "cocoblocks")}
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
              {__("TRANSPARENCY SETTING", "cocoblocks")}
            </h2>
          </div>
          <div className="content-section-panel" style={{ padding: "0" }}>
            <CustomRangeControl
                        label={
                        <>
                         <OpacityIcon />
                         {__("Opacity", "cocoblocks")}
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
                  {__("Box Shadow", "cocoblocks")}
                </h2>
            </div>
        <div className="content-section-panel" style={{ padding: "0" }}>
        <CustomToggleControl
            label={
                <>
               <FitbitIcon />
                {__("Effect", "cocoblocks")}
                </>
            }
            checked={excerptPostBoxShadow}
            onChange={(val) => setAttributes({excerptPostBoxShadow: val })}
            />
            {excerptPostBoxShadow && (
            <>
             <div className="custom-select color">
                  <ColorOptionsPanel
                    colorNormal={excerptPostBoxShadowColor}
                    setColorNormal={(color) => setAttributes({ excerptPostBoxShadowColor: color })}
                    buttonTitle={__("Shadow Color", "cocoblocks")}
                    buttonIcon={
                        <ColorLensIcon />
                    }
                    />
                    </div>
            <CustomRangeControl
                    label={
                      <>
                        <SwapHorizIcon />
                        {__("Offset X", "cocoblocks")}
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
                        {__("Offset Y", "cocoblocks")}
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
                        {__("Blur", "cocoblocks")}
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
                        {__("Spread", "cocoblocks")}
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
        <h2 className="title-custom-panel">{__("Animations", "cocoblocks")}</h2>
        {(excerptPostEffect !== 'none') && (
          <div className="button-reply-effect" style={{borderRadius:'50%'}}>
            <Tooltip text={__('Play','cocoblock')}>
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
                   {__("Effect", "cocoblocks")}
                </>
            }
            value={excerptPostEffect}
            onChange={(val) => setAttributes({excerptPostEffect: val })}
            options={selectOptionsEffectIn}
            />
            {excerptPostEffect === 'splitText' && (
              <>
          <CustomSelectControl
            label={
                <>
                 <ScatterPlotIcon />
                 {__("Effect Split", "cocoblocks")}
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
                {__("Stagger", "cocoblocks")}
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
            {excerptPostEffect !== 'none' && (
              <>
             <CustomRangeControl
          label={
            <>
              <OpacityIcon />
              {__("Opacity From", "cocoblocks")}
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
              {__("Opacity To", "cocoblocks")}
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
              {__("Blur From", "cocoblocks")}
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
              {__("Blur To", "cocoblocks")}
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
              {__("Translate X From", "cocoblocks")}
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
              {__("Translate X To", "cocoblocks")}
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
               {__("Translate Y From", "cocoblocks")}
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
               {__("Translate Y To", "cocoblocks")}
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
            {__("Choose the scale", "cocoblocks")}
         </>
     }
     value={excerptPostScaleType}
     onChange={(val) => setAttributes({excerptPostScaleType: val })}
     options={selectOptionsEffectElement}
     />
    )}
      {(['scaleIn', 'scaleInX', 'scaleInY','customEffectIn'].includes(excerptPostEffect)  || ['scaleSplit', 'scaleXSplit', 'scaleYSplit','explosion','gather','customSplit'].includes(excerptPostEffectSplit)) && (
            <>
        <CustomRangeControl
          label={
            <>
                <ZoomOutMapIcon />
                {__("Scale From", "cocoblocks")}
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
                {__("Scale To", "cocoblocks")}
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
                {__("Rotate From", "cocoblocks")}
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
                {__("Rotate To", "cocoblocks")}
            </>
          }
          value={excerptPostRotateTo}
          onChange={(val) => setAttributes({excerptPostRotateTo: val })}
          min={-360}
          max={360}
          step={1}
        />
        <CustomRangeControl
          label={
            <>
                <ThreeSixtyIcon />
                {__("Rotate X From", "cocoblocks")}
            </>
          }
          value={excerptPostRotateXFrom}
          onChange={(val) => setAttributes({excerptPostRotateXFrom: val })}
          min={-360}
          max={360}
          step={1}
        />
        <CustomRangeControl
          label={
            <>
                <ThreeSixtyIcon />
                {__("Rotate X To", "cocoblocks")}
            </>
          }
          value={excerptPostRotateXTo}
          onChange={(val) => setAttributes({excerptPostRotateXTo: val })}
          min={-360}
          max={360}
          step={1}
        />
        <CustomRangeControl
          label={
            <>
               <ThreeSixtyIcon style={{transform:'rotate(90deg)'}} />
               {__("Rotate Y From", "cocoblocks")}
            </>
          }
          value={excerptPostRotateYFrom}
          onChange={(val) => setAttributes({excerptPostRotateYFrom: val })}
          min={-360}
          max={360}
          step={1}
        />
        <CustomRangeControl
          label={
            <>
               <ThreeSixtyIcon style={{transform:'rotate(90deg)'}} />
               {__("Rotate Y To", "cocoblocks")}
            </>
          }
          value={excerptPostRotateYTo}
          onChange={(val) => setAttributes({excerptPostRotateYTo: val })}
          min={-360}
          max={360}
          step={1}
        />
     </>
    )}
    {(['skewInX','customEffectIn'].includes(excerptPostEffect) || (excerptPostEffect === 'splitText' && 
            ['skewSplit', 'customSplit'].includes(excerptPostEffectSplit))) && (
            <>
        <CustomRangeControl
          label={
            <>
                <RefreshIcon />
                {__("Skew X From", "cocoblocks")}
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
                {__("Skew X To", "cocoblocks")}
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
                 {__("Skew Y From", "cocoblocks")}
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
                 {__("Skew Y To", "cocoblocks")}
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
                       {__("Block Direction", "cocoblocks")}
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
            buttonTitle={__("Block Color", "cocoblocks")}
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
                 {__("Duration", "cocoblocks")}
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
                  {__("Delay", "cocoblocks")}
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
                  {__("End Delay", "cocoblocks")}
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
            {__("Easing", "cocoblocks")}
         </>
     }
     value={excerptPostEasing}
     onChange={(val) => setAttributes({excerptPostEasing: val })}
     options={selectOptionsEase}
     />
    <CustomSelectControl
     label={
         <>
          <SyncAltIcon />
            {__("Direction", "cocoblocks")}
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
            {__("Loop", "cocoblocks")}
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
                {__('The loop must complete the set cycle before it can be changed.','cocoblock')}
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
                {__('The loop is limited to 5 repetitions in the editor for performance reasons.','cocoblock')}
              </p>
            )}
            </div>
   
            {(excerptPostEffect!== 'none' ) && (
          <div className="button-reply-effect">
            <Tooltip text={__('Play','cocoblock')}>
            <Button onClick={onPlayAnimationPostExcerpt}><SlowMotionVideoIcon/></Button> 
            </Tooltip>
          </div>
          )}
          </>
        )}
          </div>
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
        <h2 className="title-custom-panel">{__("Animations", "cocoblocks")}</h2>
      </div>
      <div className="content-section-panel" style={{ padding: "0" }}>
          <CustomSelectControl
            label={
              <>
                <GrainIcon />
                {__("Effects", "cocoblocks")}
              </>
            }
            value={excerptPostEffectHover}
            onChange={(val) => setAttributes({excerptPostEffectHover: val })}
            options={selectOptionsEffectHover}
          />
        {excerptPostEffectHover !== "none" && (
        <>
        <CustomRangeControl
          label={
            <>
              <OpacityIcon />
              {__("Opacity", "cocoblocks")}
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
              {__("Blur", "cocoblocks")}
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
              {__("Translate X", "cocoblocks")}
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
               {__("Translate Y", "cocoblocks")}
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
                {__("Choose the scale", "cocoblocks")}
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
                {__("Scale", "cocoblocks")}
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
                {__("Rotate", "cocoblocks")}
            </>
          }
          value={excerptPostRotateHover ?? 0}
          onChange={(val) => setAttributes({excerptPostRotateHover: val })}
          min={-360}
          max={360}
          step={1}
        />
        <CustomRangeControl
          label={
            <>
                <ThreeSixtyIcon />
                {__("Rotate X", "cocoblocks")}
            </>
          }
          value={excerptPostRotateXHover ?? 0}
          onChange={(val) => setAttributes({excerptPostRotateXHover: val })}
          min={-360}
          max={360}
          step={1}
        />
        <CustomRangeControl
          label={
            <>
               <ThreeSixtyIcon style={{transform:'rotate(90deg)'}} />
               {__("Rotate Y", "cocoblocks")}
            </>
          }
          value={excerptPostRotateYHover ?? 0}
          onChange={(val) => setAttributes({excerptPostRotateYHover: val })}
          min={-360}
          max={360}
          step={1}
        />
     </>
    )}
    {['skewHover','customHover'].includes(excerptPostEffectHover) && (
    <>
        <CustomRangeControl
          label={
            <>
                <RefreshIcon />
                {__("Skew X", "cocoblocks")}
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
                 {__("Skew Y", "cocoblocks")}
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
                 {__("Duration", "cocoblocks")}
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
                {__("Easing", "cocoblocks")}
              </>
            }
            value={excerptPostEasingHover ?? 'linear'}
            onChange={(val) => setAttributes({excerptPostEasingHover: val })}
            options={selectOptionsEase}
          />
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
                {__("Actions", "cocoblocks")}
              </h2>
            </div>
            <div className="content-section-panel" style={{ padding: "0" }}>

            <CustomSelectControl
          label={
            <>
              <TouchAppIcon />
              {__("Link actions", "cocoblocks")}
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
                  {__("Target", "cocoblocks")}
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
            {__("Visibility", "cocoblocks")}
            </h2>
        </div>
        <div className="content-section-panel" style={{ padding: "0" }}>
        <CustomToggleControl
            label={<>
                <PersonalVideoIcon />
                {__("Desktop", "cocoblocks")}
              </>}
            checked={excerptPostDesktop}
            onChange={(val) => setAttributes({excerptPostDesktop: val })}
        />
        <CustomToggleControl
            label={<>
                <TabletMacIcon />
                {__("Tablet", "cocoblocks")}
              </>}
            checked={excerptPostTablet}
            onChange={(val) => setAttributes({excerptPostTablet: val })}
        />
        <CustomToggleControl
            label={<>
                <SmartphoneIcon />
                {__("Mobile", "cocoblocks")}
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
            {__("Hide in editor", "cocoblocks")}
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