import React, { useState } from "react";
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

const PostCategoriesEdit = ({ setAttributes, attributes, onPlayAnimationPostCategories}) => {

    const {
        categoriesPostColor,
        categoriesPostAlign,
        categoriesPostPadding,
        categoriesPostMargin,
        categoriesPostBorderStyle,
        categoriesPostBorderSize,
        categoriesPostBorderColor,
        categoriesPostBorderRadius,
        categoriesPostRotate,
        categoriesPostOpacity,
        categoriesPostBoxShadow,
        categoriesPostBoxShadowColor,
        categoriesPostBoxShadowHOffset,
        categoriesPostBoxShadowVOffset,
        categoriesPostBoxShadowBlur,
        categoriesPostBoxShadowSpread,
        categoriesPostEffect,
        categoriesPostOpacityFrom,
        categoriesPostOpacityTo,
        categoriesPostBlurFrom,
        categoriesPostBlurTo,
        categoriesPostTranslateXFrom,
        categoriesPostTranslateXTo,
        categoriesPostTranslateYFrom,
        categoriesPostTranslateYTo,
        categoriesPostScaleType,
        categoriesPostScaleFrom,
        categoriesPostScaleTo,
        categoriesPostRotateFrom,
        categoriesPostRotateTo,
        categoriesPostRotateXFrom,
        categoriesPostRotateXTo,
        categoriesPostRotateYFrom,
        categoriesPostRotateYTo,
        categoriesPostSkewXFrom,
        categoriesPostSkewXTo,
        categoriesPostSkewYFrom,
        categoriesPostSkewYTo,
        categoriesPostDuration,
        categoriesPostDelay,
        categoriesPostEndDelay,
        categoriesPostEasing,
        categoriesPostDirection,
        categoriesPostLoop,
        categoriesPostEffectHover,
        categoriesPostOpacityHover,
        categoriesPostBlurHover,
        categoriesPostTranslateXHover,
        categoriesPostTranslateYHover,
        categoriesPostScaleTypeHover,
        categoriesPostScaleHover,
        categoriesPostRotateHover,
        categoriesPostRotateXHover,
        categoriesPostRotateYHover,
        categoriesPostSkewXHover,
        categoriesPostSkewYHover,
        categoriesPostDurationHover,
        categoriesPostEasingHover,
        categoriesPostDesktop,
        categoriesPostTablet,
        categoriesPostMobile,
        hideCategories,
        categoriesPostFontSizeMobile,
        categoriesPostFontSizeTablet,
        categoriesPostFontSize,
        categoriesPostFontStyle,
        categoriesPostFontFamily,
        categoriesPostFontWeight,
        categoriesPostLineHeight,
        categoriesPostLetterSpacing,
        categoriesPostColorIn,
        categoriesPostEffectSplit,
        categoriesPostStagger,
        categoriesPostDirectionBlock,
        categoriesPostBlockColor,
    } = attributes;

  // Stato per nascondere l'immagine
  const [localHideImage, setHideImage] = useState(hideCategories || "");

  const toggleHideImage = () => {
    const newState = localHideImage === "hide" ? "" : "hide";
    setHideImage(newState);
    setAttributes({ hideCategories: newState });
  };
      // Section Image
  const [activeSectionImage, setActiveSectionImage] = useState("style");
  return (
    <PanelBody
        className="slider-future-panel panel-slide"
        title={__("Categories", "slider-future")}
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
                value={categoriesPostAlign}
                setAttributes={setAttributes}
                onChange={(val) => setAttributes({categoriesPostAlign: val })}
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
          value={categoriesPostFontSizeMobile}
          onChange={(val) => setAttributes({categoriesPostFontSizeMobile: val })}
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
          value={categoriesPostFontSizeTablet}
          onChange={(val) => setAttributes({categoriesPostFontSizeTablet: val })}
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
          value={categoriesPostFontSize}
          onChange={(val) => setAttributes({categoriesPostFontSize: val })}
          min={4}
          max={500}
          tooltipText= {__("Sets the maximum text size for large screens (e.g., desktop monitors). The text won’t exceed this value.", "slider-future")}
          showTooltip = {true}
        />
              
              <div className="custom-select">
              <FontStyle
                value={categoriesPostFontStyle } 
                onChange={(styleType, value) =>
                  setAttributes({
                    categoriesPostFontStyle: {
                      ...categoriesPostFontStyle, // Mantieni gli stili esistenti
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
     value={categoriesPostFontFamily}
     onChange={(val) => setAttributes({categoriesPostFontFamily: val })}
     options={fontOptions}
     />
       <CustomSelectControl
     label={
         <>
           <FitnessCenterIcon />
           {__("Font weight", "slider-future")}
         </>
     }
     value={categoriesPostFontWeight}
     onChange={(val) => setAttributes({categoriesPostFontWeight: val })}
     options={fontWeightOptions}
     />
               <CustomRangeControl
          label={
            <>
                   <HeightIcon />
                   {__("Line height", "slider-future")}
            </>
          }
          value={categoriesPostLineHeight}
          onChange={(val) => setAttributes({categoriesPostLineHeight: val })}
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
          value={categoriesPostLetterSpacing}
          onChange={(val) => setAttributes({categoriesPostLetterSpacing: val })}
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
            colorNormal={categoriesPostColorIn}
            setColorNormal={(color) => setAttributes({ categoriesPostColorIn: color })}
            buttonTitle={__("Color", "slider-future")}
            buttonIcon={
                <FormatColorTextIcon />
            }
            />
            </div>
              <div className="custom-select color">
            <ColorOptionsPanel
            colorNormal={categoriesPostColor}
            setColorNormal={(color) => setAttributes({ categoriesPostColor: color })}
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
                values={categoriesPostPadding }
                onChange={(val) => setAttributes({categoriesPostPadding: val })}
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
                values={categoriesPostMargin}
                onChange={(val) => setAttributes({categoriesPostMargin: val })}
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
            value={categoriesPostBorderStyle}
            onChange={(val) => setAttributes({categoriesPostBorderStyle: val })}
            options={borderStyleOptions}
            />
            {categoriesPostBorderStyle !== "none" && (
                <>
                <div className="custom-select color">
                <ColorOptionsPanel
            colorNormal={categoriesPostBorderColor}
            setColorNormal={(color) => setAttributes({ categoriesPostBorderColor: color })}
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
                 values={categoriesPostBorderSize}
                 onChange={(val) => setAttributes({categoriesPostBorderSize: val })}
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
                 values={categoriesPostBorderRadius}
                 onChange={(val) => setAttributes({categoriesPostBorderRadius: val })}
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
                    value={categoriesPostRotate}
                    onChange={(val) => setAttributes({categoriesPostRotate: val })}
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
                        value={categoriesPostOpacity}
                        onChange={(val) => setAttributes({categoriesPostOpacity: val })}
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
        <CustomToggleControl
            label={
                <>
               <FitbitIcon />
                {__("Effect", "slider-future")}
                </>
            }
            checked={categoriesPostBoxShadow}
            onChange={(val) => setAttributes({categoriesPostBoxShadow: val })}
            />
            {categoriesPostBoxShadow && (
            <>
             <div className="custom-select color">
                  <ColorOptionsPanel
                    colorNormal={categoriesPostBoxShadowColor}
                    setColorNormal={(color) => setAttributes({ categoriesPostBoxShadowColor: color })}
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
                    value={categoriesPostBoxShadowHOffset}
                    onChange={(val) => setAttributes({categoriesPostBoxShadowHOffset: val })}
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
                    value={categoriesPostBoxShadowVOffset}
                    onChange={(val) => setAttributes({categoriesPostBoxShadowVOffset: val })}
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
                    value={categoriesPostBoxShadowBlur}
                    onChange={(val) => setAttributes({categoriesPostBoxShadowBlur: val })}
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
                    value={categoriesPostBoxShadowSpread}
                    onChange={(val) => setAttributes({categoriesPostBoxShadowSpread: val })}
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
        {(categoriesPostEffect !== 'none') && (
          <div className="button-reply-effect" style={{borderRadius:'50%'}}>
            <Tooltip text={__('Play',"slider-future")}>
            <Button onClick={onPlayAnimationPostCategories} style={{padding:'5px 8px'}}><SlowMotionVideoIcon/></Button> 
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
            value={categoriesPostEffect}
            onChange={(val) => setAttributes({categoriesPostEffect: val })}
            options={selectOptionsEffectIn}
            />
            {categoriesPostEffect === 'splitText' && (
              <>
          <CustomSelectControl
            label={
                <>
                 <ScatterPlotIcon />
                 {__("Effect Split", "slider-future")}
                </>
            }
            value={categoriesPostEffectSplit}
            onChange={(val) => setAttributes({categoriesPostEffectSplit: val })}
            options={selectOptionsEffectSplit}
            />
             <CustomRangeControl
          label={
            <>
                <HourglassBottomIcon />
                {__("Stagger", "slider-future")}
            </>
          }
          value={categoriesPostStagger}
          onChange={(val) => setAttributes({categoriesPostStagger: val })}
          min={0}
          max={3000}
          step={10}
        />
              </>
              )}
            {categoriesPostEffect !== 'none' && (
              <>
             <CustomRangeControl
          label={
            <>
              <OpacityIcon />
              {__("Opacity From", "slider-future")}
            </>
          }
          value={categoriesPostOpacityFrom }
          onChange={(val) => setAttributes({categoriesPostOpacityFrom: val })}
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
          value={categoriesPostOpacityTo }
          onChange={(val) => setAttributes({categoriesPostOpacityTo: val })}
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
          value={categoriesPostBlurFrom}
          onChange={(val) => setAttributes({categoriesPostBlurFrom: val })}
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
          value={categoriesPostBlurTo}
          onChange={(val) => setAttributes({categoriesPostBlurTo: val })}
          min={0}
          max={20}
          step={1}
        />
    {(['translateXYIn', 'customEffectIn'].includes(categoriesPostEffect) || 
            (categoriesPostEffect === 'splitText' && 
            ['translateSplit', 'customSplit'].includes(categoriesPostEffectSplit))) && (
              <>
        <CustomRangeControl
          label={
            <>
              <SyncAltIcon />
              {__("Translate X From", "slider-future")}
            </>
          }
          value={categoriesPostTranslateXFrom}
          onChange={(val) => setAttributes({categoriesPostTranslateXFrom: val })}
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
          value={categoriesPostTranslateXTo}
          onChange={(val) => setAttributes({categoriesPostTranslateXTo: val })}
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
          value={categoriesPostTranslateYFrom}
          onChange={(val) => setAttributes({categoriesPostTranslateYFrom: val })}
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
          value={categoriesPostTranslateYTo}
          onChange={(val) => setAttributes({categoriesPostTranslateYTo: val })}
          min={-500}
          max={500}
          step={1}
        />
     </>
    )}
{['customEffectIn'].includes(categoriesPostEffect) && (
     <CustomSelectControl
     label={
         <>
           <LinearScaleIcon />
            {__("Choose the scale", "slider-future")}
         </>
     }
     value={categoriesPostScaleType}
     onChange={(val) => setAttributes({categoriesPostScaleType: val })}
     options={selectOptionsEffectElement}
     />
    )}
      {(['scaleIn', 'scaleInX', 'scaleInY','customEffectIn'].includes(categoriesPostEffect)  || ['scaleSplit', 'scaleXSplit', 'scaleYSplit','explosion','gather','customSplit'].includes(categoriesPostEffectSplit)) && (
            <>
        <CustomRangeControl
          label={
            <>
                <ZoomOutMapIcon />
                {__("Scale From", "slider-future")}
            </>
          }
          value={categoriesPostScaleFrom}
          onChange={(val) => setAttributes({categoriesPostScaleFrom: val })}
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
          value={categoriesPostScaleTo}
          onChange={(val) => setAttributes({categoriesPostScaleTo: val })}
          min={.1}
          max={20}
          step={.1}
        />
     </>
    )}
        {(['rotateIn','customEffectIn'].includes(categoriesPostEffect) ||  (categoriesPostEffect === 'splitText' && 
            ['rotateSplit', 'customSplit'].includes(categoriesPostEffectSplit))) && (
            <>
        <CustomRangeControl
          label={
            <>
                <RefreshIcon />
                {__("Rotate From", "slider-future")}
            </>
          }
          value={categoriesPostRotateFrom}
          onChange={(val) => setAttributes({categoriesPostRotateFrom: val })}
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
          value={categoriesPostRotateTo}
          onChange={(val) => setAttributes({categoriesPostRotateTo: val })}
          min={-360}
          max={360}
          step={1}
        />
        <CustomRangeControl
          label={
            <>
                <ThreeSixtyIcon />
                {__("Rotate X From", "slider-future")}
            </>
          }
          value={categoriesPostRotateXFrom}
          onChange={(val) => setAttributes({categoriesPostRotateXFrom: val })}
          min={-360}
          max={360}
          step={1}
        />
        <CustomRangeControl
          label={
            <>
                <ThreeSixtyIcon />
                {__("Rotate X To", "slider-future")}
            </>
          }
          value={categoriesPostRotateXTo}
          onChange={(val) => setAttributes({categoriesPostRotateXTo: val })}
          min={-360}
          max={360}
          step={1}
        />
        <CustomRangeControl
          label={
            <>
               <ThreeSixtyIcon style={{transform:'rotate(90deg)'}} />
               {__("Rotate Y From", "slider-future")}
            </>
          }
          value={categoriesPostRotateYFrom}
          onChange={(val) => setAttributes({categoriesPostRotateYFrom: val })}
          min={-360}
          max={360}
          step={1}
        />
        <CustomRangeControl
          label={
            <>
               <ThreeSixtyIcon style={{transform:'rotate(90deg)'}} />
               {__("Rotate Y To", "slider-future")}
            </>
          }
          value={categoriesPostRotateYTo}
          onChange={(val) => setAttributes({categoriesPostRotateYTo: val })}
          min={-360}
          max={360}
          step={1}
        />
     </>
    )}
    {(['skewInX','customEffectIn'].includes(categoriesPostEffect) || (categoriesPostEffect === 'splitText' && 
            ['skewSplit', 'customSplit'].includes(categoriesPostEffectSplit))) && (
            <>
        <CustomRangeControl
          label={
            <>
                <RefreshIcon />
                {__("Skew X From", "slider-future")}
            </>
          }
          value={categoriesPostSkewXFrom}
          onChange={(val) => setAttributes({categoriesPostSkewXFrom: val })}
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
          value={categoriesPostSkewXTo}
          onChange={(val) => setAttributes({categoriesPostSkewXTo: val })}
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
          value={categoriesPostSkewYFrom}
          onChange={(val) => setAttributes({categoriesPostSkewYFrom: val })}
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
          value={categoriesPostSkewYTo}
          onChange={(val) => setAttributes({categoriesPostSkewYTo: val })}
          min={-90}
          max={90}
          step={1}
        />
     </>
    )}
     {['BlockFromIn'].includes(categoriesPostEffect) && (
              <>
                  <CustomSelectControl
                  label={
                      <>
                       <OpenInBrowserIcon />
                       {__("Block Direction", "slider-future")}
                      </>
                  }
                  value={categoriesPostDirectionBlock}
                  onChange={(val) => setAttributes({categoriesPostDirectionBlock: val })}
                  options={selectOptionsDirectionBlock}
                  />
        <div className="custom-select color">
        <ColorOptionsPanel
            colorNormal={categoriesPostBlockColor}
            setColorNormal={(color) => setAttributes({ categoriesPostBlockColor: color })}
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
          value={categoriesPostDuration}
          onChange={(val) => setAttributes({categoriesPostDuration: val })}
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
          value={categoriesPostDelay}
          onChange={(val) => setAttributes({categoriesPostDelay: val })}
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
          value={categoriesPostEndDelay}
          onChange={(val) => setAttributes({categoriesPostEndDelay: val })}
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
     value={categoriesPostEasing}
     onChange={(val) => setAttributes({categoriesPostEasing: val })}
     options={selectOptionsEase}
     />
    <CustomSelectControl
     label={
         <>
          <SyncAltIcon />
            {__("Direction", "slider-future")}
         </>
     }
     value={categoriesPostDirection}
     onChange={(val) => setAttributes({categoriesPostDirection: val })}
     options={selectOptionsDirection}
     />
     <CustomSelectControl
     label={
         <>
          <LoopIcon />
            {__("Loop", "slider-future")}
         </>
     }
     value={categoriesPostLoop}
     onChange={(val) => setAttributes({categoriesPostLoop: val })}
     options={selectOptionsRepeat}
     />
        <div className="custom-select">
            {/* Mostra la nota se valueLoop è maggiore di 1 */}
            {(categoriesPostLoop > 1 || categoriesPostLoop === "true") && (
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
            {categoriesPostLoop === 'true' && (
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
   
            {(categoriesPostEffect!== 'none' ) && (
          <div className="button-reply-effect">
            <Tooltip text={__('Play',"slider-future")}>
            <Button onClick={onPlayAnimationPostCategories}><SlowMotionVideoIcon/></Button> 
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
            value={categoriesPostEffectHover}
            onChange={(val) => setAttributes({categoriesPostEffectHover: val })}
            options={selectOptionsEffectHover}
          />
        {categoriesPostEffectHover !== "none" && (
        <>
        <CustomRangeControl
          label={
            <>
              <OpacityIcon />
              {__("Opacity", "slider-future")}
            </>
          }
          value={categoriesPostOpacityHover ?? 1}
          onChange={(val) => setAttributes({categoriesPostOpacityHover : val })}
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
          value={categoriesPostBlurHover ?? 0}
          onChange={(val) => setAttributes({categoriesPostBlurHover : val })}
          min={0}
          max={20}
          step={1}
        />
    {['translateHover','customHover'].includes(categoriesPostEffectHover) && (
    <>
        <CustomRangeControl
          label={
            <>
              <SyncAltIcon />
              {__("Translate X", "slider-future")}
            </>
          }
          value={categoriesPostTranslateXHover ?? 100}
          onChange={(val) => setAttributes({categoriesPostTranslateXHover : val })}
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
          value={categoriesPostTranslateYHover ?? 0}
          onChange={(val) => setAttributes({categoriesPostTranslateYHover: val })}
          min={-500}
          max={500}
          step={1}
        />
     </>
    )}
    {['customHover'].includes(categoriesPostEffectHover) && (
          <CustomSelectControl
            label={
              <>
                <LinearScaleIcon />
                {__("Choose the scale", "slider-future")}
              </>
            }
            value={categoriesPostScaleTypeHover ?? 'scale'}
            onChange={(val) => setAttributes({categoriesPostScaleTypeHover: val })}
            options={selectOptionsScaleIn}
          />
    )}
     {['scaleHover','scaleXHover','scaleYHover','customHover'].includes(categoriesPostEffectHover) && (
            <>
        <CustomRangeControl
          label={
            <>
                <ZoomOutMapIcon />
                {__("Scale", "slider-future")}
            </>
          }
          value={categoriesPostScaleHover ?? 1}
          onChange={(val) => setAttributes({categoriesPostScaleHover: val })}
          min={.1}
          max={20}
          step={.1}
        />
     </>
    )}
        {['rotateHover','customHover'].includes(categoriesPostEffectHover) && (
        <>
        <CustomRangeControl
          label={
            <>
                <RefreshIcon />
                {__("Rotate", "slider-future")}
            </>
          }
          value={categoriesPostRotateHover ?? 0}
          onChange={(val) => setAttributes({categoriesPostRotateHover: val })}
          min={-360}
          max={360}
          step={1}
        />
        <CustomRangeControl
          label={
            <>
                <ThreeSixtyIcon />
                {__("Rotate X", "slider-future")}
            </>
          }
          value={categoriesPostRotateXHover ?? 0}
          onChange={(val) => setAttributes({categoriesPostRotateXHover: val })}
          min={-360}
          max={360}
          step={1}
        />
        <CustomRangeControl
          label={
            <>
               <ThreeSixtyIcon style={{transform:'rotate(90deg)'}} />
               {__("Rotate Y", "slider-future")}
            </>
          }
          value={categoriesPostRotateYHover ?? 0}
          onChange={(val) => setAttributes({categoriesPostRotateYHover: val })}
          min={-360}
          max={360}
          step={1}
        />
     </>
    )}
    {['skewHover','customHover'].includes(categoriesPostEffectHover) && (
    <>
        <CustomRangeControl
          label={
            <>
                <RefreshIcon />
                {__("Skew X", "slider-future")}
            </>
          }
          value={categoriesPostSkewXHover ?? 0}
          onChange={(val) => setAttributes({categoriesPostSkewXHover: val })}
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
          value={categoriesPostSkewYHover ?? 0}
          onChange={(val) => setAttributes({categoriesPostSkewYHover: val })}
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
          value={categoriesPostDurationHover ?? 800}
          onChange={(val) => setAttributes({categoriesPostDurationHover: val })}
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
            value={categoriesPostEasingHover ?? 'linear'}
            onChange={(val) => setAttributes({categoriesPostEasingHover: val })}
            options={selectOptionsEase}
          />
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
            checked={categoriesPostDesktop}
            onChange={(val) => setAttributes({categoriesPostDesktop: val })}
        />
        <CustomToggleControl
            label={<>
                <TabletMacIcon />
                {__("Tablet", "slider-future")}
              </>}
            checked={categoriesPostTablet}
            onChange={(val) => setAttributes({categoriesPostTablet: val })}
        />
        <CustomToggleControl
            label={<>
                <SmartphoneIcon />
                {__("Mobile", "slider-future")}
              </>}
            checked={categoriesPostMobile}
            onChange={(val) => setAttributes({categoriesPostMobile: val })}
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

export default PostCategoriesEdit;