import React, { useState } from "react";
import { __ } from '@wordpress/i18n';
import { PanelBody,   __experimentalBoxControl as BoxControl,Tooltip, Button } from '@wordpress/components';
import SectionSelectorElementPost from "../../multitab/sectionSelectorElementPost";
import CustomSelectControl  from "../../../controls/select/CustomSelectControl";
import CustomToggleControl  from "../../../controls/toggle/CustomToggleControl";
import CustomRangeControl  from "../../../controls/range/CustomRangeControl"; 
import CustomAlignControl from "../../../controls/align/AlignControl";
import ColorOptionsPanel from "../../colorPanel";
import FitScreenIcon from '@mui/icons-material/FitScreen';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import HeightIcon from '@mui/icons-material/Height';
import PaddingIcon from '@mui/icons-material/Padding';
import MarginIcon from '@mui/icons-material/Margin';
import {borderStyleOptions} from '../../../assets/options';
import {selectOptionsEffectElement} from '../../../assets/options';
import {selectOptionsEase} from '../../../assets/options';
import {selectOptionsDirection} from '../../../assets/options';
import {selectOptionsRepeat} from '../../../assets/options';
import {selectOptionsEffectHover} from '../../../assets/options';
import {selectOptionsScaleIn} from '../../../assets/options';
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

const PostImageEdit = ({ setAttributes, attributes, onPlayAnimation}) => {

    const {
        imagePostSize,
        imagePostColor,
        imagePostAlign,
        imagePostWidth,
        imagePostWidthPx,
        imagePostWidthPercent,
        imagePostHeight,
        imagePostHeightPx,
        imagePostHeightPercent,
        imagePostPadding,
        imagePostMargin,
        imagePostBorderStyle,
        imagePostBorderSize,
        imagePostBorderColor,
        imagePostBorderRadius,
        imagePostRotate,
        imagePostOpacity,
        imagePostBoxShadow,
        imagePostBoxShadowColor,
        imagePostBoxShadowHOffset,
        imagePostBoxShadowVOffset,
        imagePostBoxShadowBlur,
        imagePostBoxShadowSpread,
        imagePostEffect,
        imagePostOpacityFrom,
        imagePostOpacityTo,
        imagePostBlurFrom,
        imagePostBlurTo,
        imagePostTranslateXFrom,
        imagePostTranslateXTo,
        imagePostTranslateYFrom,
        imagePostTranslateYTo,
        imagePostScaleType,
        imagePostScaleFrom,
        imagePostScaleTo,
        imagePostRotateFrom,
        imagePostRotateTo,
        imagePostRotateXFrom,
        imagePostRotateXTo,
        imagePostRotateYFrom,
        imagePostRotateYTo,
        imagePostSkewXFrom,
        imagePostSkewXTo,
        imagePostSkewYFrom,
        imagePostSkewYTo,
        imagePostDuration,
        imagePostDelay,
        imagePostEndDelay,
        imagePostEasing,
        imagePostDirection,
        imagePostLoop,
        imagePostEffectHover,
        imagePostOpacityHover,
        imagePostBlurHover,
        imagePostTranslateXHover,
        imagePostTranslateYHover,
        imagePostScaleTypeHover,
        imagePostScaleHover,
        imagePostRotateHover,
        imagePostRotateXHover,
        imagePostRotateYHover,
        imagePostSkewXHover,
        imagePostSkewYHover,
        imagePostDurationHover,
        imagePostEasingHover,
        imagePostLink,
        imagePostTarget,
        imagePostDesktop,
        imagePostTablet,
        imagePostMobile,
        hideImage
    } = attributes;

  // Stato per nascondere l'immagine
  const [localHideImage, setHideImage] = useState(hideImage || "");

  const toggleHideImage = () => {
    const newState = localHideImage === "hide" ? "" : "hide";
    setHideImage(newState);
    setAttributes({ hideImage: newState });
  };
      // Section Image
  const [activeSectionImage, setActiveSectionImage] = useState("style");
  return (
    <PanelBody
        className="cocoblocks-panel panel-slide"
        title={__("Featured Image", "cocoblocks")}
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
          <CustomSelectControl
            label={
                <>
                <FitScreenIcon />
                {__("Image fit", "cocoblocks")}
                </>
            }
            value={imagePostSize || 'cover'}
            onChange={(val) => setAttributes({imagePostSize: val })}
            options={[  
                {
                label: __("Cover", "cocoblocks"),
                value: "cover",
                },
                {
                label: __("Contain", "cocoblocks"),
                value: "contain",
                },
            ]}
            />
              {Object.values(imagePostPadding || {}).some(value => parseInt(value) > 0) && (
              <div className="custom-select color">
            <ColorOptionsPanel
            colorNormal={imagePostColor}
            setColorNormal={(color) => setAttributes({ imagePostColor: color })}
            buttonTitle={__("Background Color", "cocoblocks")}
            buttonIcon={
                <ColorLensIcon />
            }
            />
            </div>
            )}
            <CustomAlignControl
                value={imagePostAlign}
                setAttributes={setAttributes}
                onChange={(val) => setAttributes({imagePostAlign: val })}
            />
            </div>
            <div className="content-title-custom-panel intermedy">
                <h2 className="title-custom-panel">
                  {__("Width & Height", "cocoblocks")}
                </h2>
              </div>
              <div className="content-section-panel" style={{ padding: "0" }}>
              <CustomSelectControl
            label={
                <>
                 <HeightIcon style={{transform:'rotate(90deg)'}} />
                {__("Width", "cocoblocks")}
                </>
            }
            value={imagePostWidth}
            onChange={(val) => setAttributes({imagePostWidth: val })}
            options={[  
                {
                    label: __("Relative", "cocoblocks"),
                    value: "relative",
                  },
                  {
                    label: __("Fixed", "cocoblocks"),
                    value: "fixed",
                  },
            ]}
            />
            {imagePostWidth === "fixed" && (
               <CustomRangeControl
                    label={
                      <>
                        {__("Custom width (px)", "cocoblocks")}
                      </>
                    }
                    value={imagePostWidthPx}
                    onChange={(val) => setAttributes({imagePostWidthPx: val })}
                    min={0}
                    max={500}
                    step={1}
                  />
            )}
            {imagePostWidth === "relative" && (
                <CustomRangeControl
                    label={
                      <>
                        {__("CustomWidth (%)", "cocoblocks")}
                      </>
                    }
                    value={imagePostWidthPercent}
                    onChange={(val) => setAttributes({imagePostWidthPercent: val })}
                    min={0}
                    max={100}
                    step={1}
                  />
                  
            )}
             <CustomSelectControl
            label={
                <>
                 <HeightIcon />
                {__("Height", "cocoblocks")}
                </>
            }
            value={imagePostHeight}
            onChange={(val) => setAttributes({imagePostHeight: val })}
            options={[  
                {
                    label: __("Relative", "cocoblocks"),
                    value: "relative",
                  },
                  {
                    label: __("Fixed", "cocoblocks"),
                    value: "fixed",
                  },
            ]}
            />
            {imagePostWidth === "fixed" && (
               <CustomRangeControl
                    label={
                      <>
                        {__("Custom width (px)", "cocoblocks")}
                      </>
                    }
                    value={imagePostHeightPx}
                    onChange={(val) => setAttributes({imagePostHeightPx: val })}
                    min={0}
                    max={500}
                    step={1}
                  />
            )}
            {imagePostWidth === "relative" && (
                <CustomRangeControl
                    label={
                      <>
                        {__("CustomWidth (%)", "cocoblocks")}
                      </>
                    }
                    value={imagePostHeightPercent}
                    onChange={(val) => setAttributes({imagePostHeightPercent: val })}
                    min={0}
                    max={100}
                    step={1}
                  />
            )}
            {imagePostSize == "contain" && (
                  <p
                    className="notice components-base-control__help"
                    style={{ borderRadius: 0 }}
                  >
                    {__(
                      'The border may not adhere tightly to the image when using "Contain" for object-fit due to potential extra space around the image.',
                      "cocoblocks"
                    )}
                  </p>
                )}
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
                values={imagePostPadding }
                onChange={(val) => setAttributes({imagePostPadding: val })}
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
                values={imagePostMargin}
                onChange={(val) => setAttributes({imagePostMargin: val })}
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
            value={imagePostBorderStyle}
            onChange={(val) => setAttributes({imagePostBorderStyle: val })}
            options={borderStyleOptions}
            />
            {imagePostBorderStyle !== "none" && (
                <>
                <div className="custom-select color">
                <ColorOptionsPanel
            colorNormal={imagePostBorderColor}
            setColorNormal={(color) => setAttributes({ imagePostBorderColor: color })}
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
                 values={imagePostBorderSize}
                 onChange={(val) => setAttributes({imagePostBorderSize: val })}
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
                 values={imagePostBorderRadius}
                 onChange={(val) => setAttributes({imagePostBorderRadius: val })}
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
                    value={imagePostRotate}
                    onChange={(val) => setAttributes({imagePostRotate: val })}
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
                        value={imagePostOpacity}
                        onChange={(val) => setAttributes({imagePostOpacity: val })}
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
            checked={imagePostBoxShadow}
            onChange={(val) => setAttributes({imagePostBoxShadow: val })}
            />
            {imagePostBoxShadow && (
            <>
             <div className="custom-select color">
                  <ColorOptionsPanel
                    colorNormal={imagePostBoxShadowColor}
                    setColorNormal={(color) => setAttributes({ imagePostBoxShadowColor: color })}
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
                    value={imagePostBoxShadowHOffset}
                    onChange={(val) => setAttributes({imagePostBoxShadowHOffset: val })}
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
                    value={imagePostBoxShadowVOffset}
                    onChange={(val) => setAttributes({imagePostBoxShadowVOffset: val })}
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
                    value={imagePostBoxShadowBlur}
                    onChange={(val) => setAttributes({imagePostBoxShadowBlur: val })}
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
                    value={imagePostBoxShadowSpread}
                    onChange={(val) => setAttributes({imagePostBoxShadowSpread: val })}
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
        {(imagePostEffect !== 'none') && (
          <div className="button-reply-effect" style={{borderRadius:'50%'}}>
            <Tooltip text={__('Play','cocoblock')}>
            <Button onClick={onPlayAnimation} style={{padding:'5px 8px'}}><SlowMotionVideoIcon/></Button> 
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
            value={imagePostEffect}
            onChange={(val) => setAttributes({imagePostEffect: val })}
            options={selectOptionsEffectElement}
            />
            {imagePostEffect !== 'none' && (
              <>
             <CustomRangeControl
          label={
            <>
              <OpacityIcon />
              {__("Opacity From", "cocoblocks")}
            </>
          }
          value={imagePostOpacityFrom }
          onChange={(val) => setAttributes({imagePostOpacityFrom: val })}
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
          value={imagePostOpacityTo }
          onChange={(val) => setAttributes({imagePostOpacityTo: val })}
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
          value={imagePostBlurFrom}
          onChange={(val) => setAttributes({imagePostBlurFrom: val })}
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
          value={imagePostBlurTo}
          onChange={(val) => setAttributes({imagePostBlurTo: val })}
          min={0}
          max={20}
          step={1}
        />
    {['translateXYIn', 'customEffectIn'].includes(imagePostEffect) && (
              <>
        <CustomRangeControl
          label={
            <>
              <SyncAltIcon />
              {__("Translate X From", "cocoblocks")}
            </>
          }
          value={imagePostTranslateXFrom}
          onChange={(val) => setAttributes({imagePostTranslateXFrom: val })}
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
          value={imagePostTranslateXTo}
          onChange={(val) => setAttributes({imagePostTranslateXTo: val })}
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
          value={imagePostTranslateYFrom}
          onChange={(val) => setAttributes({imagePostTranslateYFrom: val })}
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
          value={imagePostTranslateYTo}
          onChange={(val) => setAttributes({imagePostTranslateYTo: val })}
          min={-500}
          max={500}
          step={1}
        />
     </>
    )}
{['customEffectIn'].includes(imagePostEffect) && (
     <CustomSelectControl
     label={
         <>
           <LinearScaleIcon />
            {__("Choose the scale", "cocoblocks")}
         </>
     }
     value={imagePostScaleType}
     onChange={(val) => setAttributes({imagePostScaleType: val })}
     options={selectOptionsScaleIn}
     />
    )}
      {(['scaleIn', 'scaleInX', 'scaleInY','customEffectIn'].includes(imagePostEffect)  ) && (
            <>
        <CustomRangeControl
          label={
            <>
                <ZoomOutMapIcon />
                {__("Scale From", "cocoblocks")}
            </>
          }
          value={imagePostScaleFrom}
          onChange={(val) => setAttributes({imagePostScaleFrom: val })}
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
          value={imagePostScaleTo}
          onChange={(val) => setAttributes({imagePostScaleTo: val })}
          min={.1}
          max={20}
          step={.1}
        />
     </>
    )}
        {['rotateIn','customEffectIn'].includes(imagePostEffect)  &&  (
            <>
        <CustomRangeControl
          label={
            <>
                <RefreshIcon />
                {__("Rotate From", "cocoblocks")}
            </>
          }
          value={imagePostRotateFrom}
          onChange={(val) => setAttributes({imagePostRotateFrom: val })}
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
          value={imagePostRotateTo}
          onChange={(val) => setAttributes({imagePostRotateTo: val })}
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
          value={imagePostRotateXFrom}
          onChange={(val) => setAttributes({imagePostRotateXFrom: val })}
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
          value={imagePostRotateXTo}
          onChange={(val) => setAttributes({imagePostRotateXTo: val })}
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
          value={imagePostRotateYFrom}
          onChange={(val) => setAttributes({imagePostRotateYFrom: val })}
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
          value={imagePostRotateYTo}
          onChange={(val) => setAttributes({imagePostRotateYTo: val })}
          min={-360}
          max={360}
          step={1}
        />
     </>
    )}
    {['skewInX','customEffectIn'].includes(imagePostEffect) && (
            <>
        <CustomRangeControl
          label={
            <>
                <RefreshIcon />
                {__("Skew X From", "cocoblocks")}
            </>
          }
          value={imagePostSkewXFrom}
          onChange={(val) => setAttributes({imagePostSkewXFrom: val })}
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
          value={imagePostSkewXTo}
          onChange={(val) => setAttributes({imagePostSkewXTo: val })}
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
          value={imagePostSkewYFrom}
          onChange={(val) => setAttributes({imagePostSkewYFrom: val })}
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
          value={imagePostSkewYTo}
          onChange={(val) => setAttributes({imagePostSkewYTo: val })}
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
          value={imagePostDuration}
          onChange={(val) => setAttributes({imagePostDuration: val })}
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
          value={imagePostDelay}
          onChange={(val) => setAttributes({imagePostDelay: val })}
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
          value={imagePostEndDelay}
          onChange={(val) => setAttributes({imagePostEndDelay: val })}
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
     value={imagePostEasing}
     onChange={(val) => setAttributes({imagePostEasing: val })}
     options={selectOptionsEase}
     />
    <CustomSelectControl
     label={
         <>
          <SyncAltIcon />
            {__("Direction", "cocoblocks")}
         </>
     }
     value={imagePostDirection}
     onChange={(val) => setAttributes({imagePostDirection: val })}
     options={selectOptionsDirection}
     />
     <CustomSelectControl
     label={
         <>
          <LoopIcon />
            {__("Loop", "cocoblocks")}
         </>
     }
     value={imagePostLoop}
     onChange={(val) => setAttributes({imagePostLoop: val })}
     options={selectOptionsRepeat}
     />
        <div className="custom-select">
            {/* Mostra la nota se valueLoop è maggiore di 1 */}
            {(imagePostLoop > 1 || imagePostLoop === "true") && (
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
            {imagePostLoop === 'true' && (
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
   
            {(imagePostEffect!== 'none' ) && (
          <div className="button-reply-effect">
            <Tooltip text={__('Play','cocoblock')}>
            <Button onClick={onPlayAnimation}><SlowMotionVideoIcon/></Button> 
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
            value={imagePostEffectHover}
            onChange={(val) => setAttributes({imagePostEffectHover: val })}
            options={selectOptionsEffectHover}
          />
        {imagePostEffectHover !== "none" && (
        <>
        <CustomRangeControl
          label={
            <>
              <OpacityIcon />
              {__("Opacity", "cocoblocks")}
            </>
          }
          value={imagePostOpacityHover ?? 1}
          onChange={(val) => setAttributes({imagePostOpacityHover : val })}
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
          value={imagePostBlurHover ?? 0}
          onChange={(val) => setAttributes({imagePostBlurHover : val })}
          min={0}
          max={20}
          step={1}
        />
    {['translateHover','customHover'].includes(imagePostEffectHover) && (
    <>
        <CustomRangeControl
          label={
            <>
              <SyncAltIcon />
              {__("Translate X", "cocoblocks")}
            </>
          }
          value={imagePostTranslateXHover ?? 100}
          onChange={(val) => setAttributes({imagePostTranslateXHover : val })}
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
          value={imagePostTranslateYHover ?? 0}
          onChange={(val) => setAttributes({imagePostTranslateYHover: val })}
          min={-500}
          max={500}
          step={1}
        />
     </>
    )}
    {['customHover'].includes(imagePostEffectHover) && (
          <CustomSelectControl
            label={
              <>
                <LinearScaleIcon />
                {__("Choose the scale", "cocoblocks")}
              </>
            }
            value={imagePostScaleTypeHover ?? 'scale'}
            onChange={(val) => setAttributes({imagePostScaleTypeHover: val })}
            options={selectOptionsScaleIn}
          />
    )}
     {['scaleHover','scaleXHover','scaleYHover','customHover'].includes(imagePostEffectHover) && (
            <>
        <CustomRangeControl
          label={
            <>
                <ZoomOutMapIcon />
                {__("Scale", "cocoblocks")}
            </>
          }
          value={imagePostScaleHover ?? 1}
          onChange={(val) => setAttributes({imagePostScaleHover: val })}
          min={.1}
          max={20}
          step={.1}
        />
     </>
    )}
        {['rotateHover','customHover'].includes(imagePostEffectHover) && (
        <>
        <CustomRangeControl
          label={
            <>
                <RefreshIcon />
                {__("Rotate", "cocoblocks")}
            </>
          }
          value={imagePostRotateHover ?? 0}
          onChange={(val) => setAttributes({imagePostRotateHover: val })}
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
          value={imagePostRotateXHover ?? 0}
          onChange={(val) => setAttributes({imagePostRotateXHover: val })}
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
          value={imagePostRotateYHover ?? 0}
          onChange={(val) => setAttributes({imagePostRotateYHover: val })}
          min={-360}
          max={360}
          step={1}
        />
     </>
    )}
    {['skewHover','customHover'].includes(imagePostEffectHover) && (
    <>
        <CustomRangeControl
          label={
            <>
                <RefreshIcon />
                {__("Skew X", "cocoblocks")}
            </>
          }
          value={imagePostSkewXHover ?? 0}
          onChange={(val) => setAttributes({imagePostSkewXHover: val })}
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
          value={imagePostSkewYHover ?? 0}
          onChange={(val) => setAttributes({imagePostSkewYHover: val })}
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
          value={imagePostDurationHover ?? 800}
          onChange={(val) => setAttributes({imagePostDurationHover: val })}
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
            value={imagePostEasingHover ?? 'linear'}
            onChange={(val) => setAttributes({imagePostEasingHover: val })}
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
          value={imagePostLink}
          onChange={(val) => setAttributes({imagePostLink: val })}
          options={[
            { label: "None", value: "none" },
            { label: "Link", value: "link" },
          ]}
        />
        {imagePostLink === "link" && (
         <CustomSelectControl
              label={
                <>
                  <OpenInNewIcon />
                  {__("Target", "cocoblocks")}
                </>
              }
              value={imagePostTarget}
              onChange={(val) => setAttributes({imagePostTarget: val })}
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
            checked={imagePostDesktop}
            onChange={(val) => setAttributes({imagePostDesktop: val })}
        />
        <CustomToggleControl
            label={<>
                <TabletMacIcon />
                {__("Tablet", "cocoblocks")}
              </>}
            checked={imagePostTablet}
            onChange={(val) => setAttributes({imagePostTablet: val })}
        />
        <CustomToggleControl
            label={<>
                <SmartphoneIcon />
                {__("Mobile", "cocoblocks")}
              </>}
            checked={imagePostMobile}
            onChange={(val) => setAttributes({imagePostMobile: val })}
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

export default PostImageEdit;