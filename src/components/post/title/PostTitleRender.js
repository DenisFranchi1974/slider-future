import React from "react";
import { useState, useEffect, useRef } from "react";
import { animationsIn, getAnimationProps} from '../../../animate';
import {handleMouseEnter, handleMouseLeave} from '../../../animate/animationIn'

const PostTitleRender = ({ post, attributes, onPlay }) => {
  const {
    titlePostColor,
    titlePostAlign,
    titlePostPadding,
    titlePostMargin,
    titlePostBorderStyle,
    titlePostBorderSize,
    titlePostBorderColor,
    titlePostBorderRadius,
    titlePostRotate,
    titlePostOpacity,
    titlePostBoxShadow,
    titlePostBoxShadowColor,
    titlePostBoxShadowHOffset,
    titlePostBoxShadowVOffset,
    titlePostBoxShadowBlur,
    titlePostBoxShadowSpread,
    titlePostEffect,
    titlePostOpacityFrom,
    titlePostOpacityTo,
    titlePostBlurFrom,
    titlePostBlurTo,
    titlePostTranslateXFrom,
    titlePostTranslateXTo,
    titlePostTranslateYFrom,
    titlePostTranslateYTo,
    titlePostScaleType,
    titlePostScaleFrom,
    titlePostScaleTo,
    titlePostRotateFrom,
    titlePostRotateTo,
    titlePostRotateXFrom,
    titlePostRotateXTo,
    titlePostRotateYFrom,
    titlePostRotateYTo,
    titlePostSkewXFrom,
    titlePostSkewXTo,
    titlePostSkewYFrom,
    titlePostSkewYTo,
    titlePostDuration,
    titlePostDelay,
    titlePostEndDelay,
    titlePostEasing,
    titlePostDirection,
    titlePostLoop,
    titlePostEffectHover,
    titlePostOpacityHover,
    titlePostBlurHover,
    titlePostTranslateXHover,
    titlePostTranslateYHover,
    titlePostScaleTypeHover,
    titlePostScaleHover,
    titlePostRotateHover,
    titlePostRotateXHover,
    titlePostRotateYHover,
    titlePostSkewXHover,
    titlePostSkewYHover,
    titlePostDurationHover,
    titlePostEasingHover,
    hideTitle,
    titlePostFontSizeMobile,
    titlePostFontSizeTablet,
    titlePostFontSize,
    titlePostFontStyle,
    titlePostFontFamily,
    titlePostFontWeight,
    titlePostLineHeight,
    titlePostLetterSpacing,
    titlePostColorIn,
    titlePostEffectSplit,
    titlePostStagger,
    titlePostDirectionBlock,
    titlePostBlockColor,
  } = attributes;

  const titlePostRef = useRef(null); // Ref per il contenitore del testo
  //const barRef = useRef(null); // Ref per il div che vuoi animare
  const [hasPlayed, setHasPlayed] = useState(false); // Stato per tracciare se l'animazione è stata attivata

  // Funzione per attivare l'animazione
  const playAnimation = () => {
    const effectIn = animationsIn[titlePostEffect];
   
    // Converti il valore di loop in un numero
    const loopCount = (typeof titlePostLoop === 'string' && titlePostLoop.toLowerCase() === 'true') 
    
    ? 5
    : (parseInt(titlePostLoop) >= 1 && parseInt(titlePostLoop) <= 10) 
    ? parseInt(titlePostLoop) 
    : 1; // Imposta un valore di default se non è in un intervallo valido

    if (effectIn ) {
     // textRef.current.style.opacity = 0; // Reset
      const animationProps = getAnimationProps({
        duration: titlePostDuration ?? 800,
        delay: titlePostDelay ?? 0, 
        endDelay: titlePostEndDelay ?? 0,
        easing: titlePostEasing ?? 'linear', 
        direction: titlePostDirection ?? 'normal',
        loop: loopCount,
        startXFrom: titlePostTranslateXFrom ?? 100, 
        startXTo: titlePostTranslateXTo ?? 0, 
        startYFrom: titlePostTranslateYFrom ?? 0,
        startYTo: titlePostTranslateYTo ?? 0,
        opacityFrom: titlePostOpacityFrom ?? 0,
        opacityTo: titlePostOpacityTo ?? 1,
        scaleFrom: titlePostScaleFrom ?? 0,
        scaleTo: titlePostScaleTo ?? 1,
        rotateFrom: titlePostRotateFrom ?? 0,
        rotateTo: titlePostRotateTo ?? 0,
        rotateXFrom: titlePostRotateXFrom ?? 0, 
        rotateXTo: titlePostRotateXTo ?? 0,
        rotateYFrom: titlePostRotateYFrom ?? 0,
        rotateYTo: titlePostRotateYTo ?? 0,
        skewXFrom: titlePostSkewXFrom ?? 0,
        skewXTo: titlePostSkewXTo ?? 0,
        skewYFrom: titlePostSkewYFrom ?? 0,
        skewYTo: titlePostSkewYTo ?? 0,
        filterFrom: titlePostBlurFrom ?? 0,
        filterTo: titlePostBlurTo ?? 0,
        directionBlock: titlePostDirectionBlock,
        colorBlockEffect: titlePostBlockColor,
        scaleType: titlePostScaleType ?? 'scale',
        stagger: titlePostStagger,
        textSplitEffect: titlePostEffectSplit,
      });
  
      setTimeout(() => {
        // Animazione del testo
        effectIn(titlePostRef.current, animationProps);
      
      }, titlePostDelay);
      
    }
  };

  // Questo useEffect ora non avvia più l'animazione automaticamente
  useEffect(() => {
    // Passa la funzione playAnimation al genitore tramite onPlay
    if (onPlay) {
      onPlay(playAnimation); // Questa linea consente al genitore di controllare l'animazione
    }
  }, [onPlay]);

  useEffect(() => {
    // Imposta l'opacità iniziale a 1 solo se l'animazione non è stata avviata
    if (titlePostRef.current && !hasPlayed) {
      titlePostRef.current.style.opacity = 1;
    }
  }, [hasPlayed]);

  // Aggiungi un useEffect per osservare i cambiamenti di effectIn ed easing
  useEffect(() => {
    playAnimation();
  }, [titlePostEffect, titlePostEasing, titlePostDirection]);

  const isBold = titlePostFontStyle?.fontWeight === "bold";

  return (
    post.title && (
      <div className={'content-title-post ' + hideTitle} style={{ justifyContent: titlePostAlign, display:'flex' }}>
        <h3
        className="title-post"
         ref={titlePostRef}
         onMouseEnter={(e) => handleMouseEnter(e, { 
          durationHover: titlePostDurationHover ?? 800,
          effectHover:titlePostEffectHover,
          easingHover:titlePostEasingHover ?? 'linear',
          opacityHover:titlePostOpacityHover ?? 1,
          filterHover:titlePostBlurHover ?? 0,
          startXHover:titlePostTranslateXHover ?? 100,
          startYHover:titlePostTranslateYHover ?? 0,
          scaleHover:titlePostScaleHover ?? 1,
          rotateHover:titlePostRotateHover ?? 0,
          rotateXHover:titlePostRotateXHover ?? 0,
          rotateYHover:titlePostRotateYHover ?? 0,
          skewXHover: titlePostSkewXHover ?? 0,
          skewYHover:titlePostSkewYHover ?? 0,
          scaleTypeHover:titlePostScaleTypeHover ?? 'scale',
        })} // Passa element.duration
        onMouseLeave={(e) => handleMouseLeave(e, { 
          durationHover: titlePostDurationHover ?? 800,
          easingHover:titlePostEasingHover ?? 'linear',
        })} // Passa element.duration
          style={{
            fontSize: 'clamp(' + titlePostFontSizeMobile + 'px,' + titlePostFontSizeTablet + 'vw, ' + titlePostFontSize + 'px)',
            paddingTop: titlePostPadding.top,
            letterSpacing: titlePostLetterSpacing + "px",
            fontStyle: titlePostFontStyle?.fontStyle ?? "normal", // Valore di default
            fontWeight: isBold ? "bold" : titlePostFontWeight ?? "normal",
            textDecoration: titlePostFontStyle?.textDecoration ?? "none", // Valore di default
            lineHeight: titlePostLineHeight,
            fontFamily: titlePostFontFamily,
            paddingBottom: titlePostPadding.bottom,
            paddingLeft: titlePostPadding.left,
            paddingRight: titlePostPadding.right,
            marginTop: titlePostMargin.top,
            marginBottom: titlePostMargin.bottom,
            marginLeft: titlePostMargin.left,
            marginRight: titlePostMargin.right,
            borderTopLeftRadius: titlePostBorderRadius.top,
            borderTopRightRadius: titlePostBorderRadius.right,
            borderBottomRightRadius: titlePostBorderRadius.bottom,
            borderBottomLeftRadius: titlePostBorderRadius.left,
            borderStyle: titlePostBorderStyle,
            borderWidth: `${titlePostBorderSize?.top} ${titlePostBorderSize?.right} ${titlePostBorderSize?.bottom} ${titlePostBorderSize?.left}`,
            borderColor: titlePostBorderColor,
            transform: 'rotate(' + titlePostRotate + 'deg)',
            opacity: titlePostOpacity,
            maxWidth: 'max-content',
            ...(titlePostBoxShadow && {
              boxShadow: `${titlePostBoxShadowHOffset}px ${titlePostBoxShadowVOffset}px ${titlePostBoxShadowBlur}px ${titlePostBoxShadowSpread}px ${titlePostBoxShadowColor}`,
            }),
            backgroundColor: titlePostColor,
            color: titlePostColorIn,
          }}
        >
        {post.title}
        </h3>
      </div>
    )
  );
};

export default PostTitleRender;