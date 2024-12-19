import React from "react";
import { useState, useEffect, useRef } from "react";
import { animationsIn, getAnimationProps} from '../../../animate';
import {handleMouseEnter, handleMouseLeave} from '../../../animate/animationIn'

const PostDateRender = ({ post, attributes, onPlay }) => {
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

  const datePostRef = useRef(null); // Ref per il contenitore del testo
  //const barRef = useRef(null); // Ref per il div che vuoi animare
  const [hasPlayed, setHasPlayed] = useState(false); // Stato per tracciare se l'animazione è stata attivata

  // Funzione per attivare l'animazione
  const playAnimation = () => {
    const effectIn = animationsIn[datePostEffect];
   
    // Converti il valore di loop in un numero
    const loopCount = (typeof datePostLoop === 'string' && datePostLoop.toLowerCase() === 'true') 
    
    ? 5
    : (parseInt(datePostLoop) >= 1 && parseInt(datePostLoop) <= 10) 
    ? parseInt(datePostLoop) 
    : 1; // Imposta un valore di default se non è in un intervallo valido

    if (effectIn ) {
     // textRef.current.style.opacity = 0; // Reset
      const animationProps = getAnimationProps({
        duration: datePostDuration ?? 800,
        delay: datePostDelay ?? 0, 
        endDelay: datePostEndDelay ?? 0,
        easing: datePostEasing ?? 'linear', 
        direction: datePostDirection ?? 'normal',
        loop: loopCount,
        startXFrom: datePostTranslateXFrom ?? 100, 
        startXTo: datePostTranslateXTo ?? 0, 
        startYFrom: datePostTranslateYFrom ?? 0,
        startYTo: datePostTranslateYTo ?? 0,
        opacityFrom: datePostOpacityFrom ?? 0,
        opacityTo: datePostOpacityTo ?? 1,
        scaleFrom: datePostScaleFrom ?? 0,
        scaleTo: datePostScaleTo ?? 1,
        rotateFrom: datePostRotateFrom ?? 0,
        rotateTo: datePostRotateTo ?? 0,
        rotateXFrom: datePostRotateXFrom ?? 0, 
        rotateXTo: datePostRotateXTo ?? 0,
        rotateYFrom: datePostRotateYFrom ?? 0,
        rotateYTo: datePostRotateYTo ?? 0,
        skewXFrom: datePostSkewXFrom ?? 0,
        skewXTo: datePostSkewXTo ?? 0,
        skewYFrom: datePostSkewYFrom ?? 0,
        skewYTo: datePostSkewYTo ?? 0,
        filterFrom: datePostBlurFrom ?? 0,
        filterTo: datePostBlurTo ?? 0,
        directionBlock: datePostDirectionBlock,
        colorBlockEffect: datePostBlockColor,
        scaleType: datePostScaleType ?? 'scale',
        stagger: datePostStagger,
        textSplitEffect: datePostEffectSplit,
      });
  
      setTimeout(() => {
        // Animazione del testo
        effectIn(datePostRef.current, animationProps);
      
      }, datePostDelay);
      
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
    if (datePostRef.current && !hasPlayed) {
      datePostRef.current.style.opacity = 1;
    }
  }, [hasPlayed]);

  // Aggiungi un useEffect per osservare i cambiamenti di effectIn ed easing
  useEffect(() => {
    playAnimation();
  }, [datePostEffect, datePostEasing, datePostDirection]);

  const isBold = datePostFontStyle?.fontWeight === "bold";

  return (
    post.date && (
      <div className={'content-date-post ' + hideDate} style={{ justifyContent: datePostAlign, display:'flex' }}>
        <p
        className="date-post"
         ref={datePostRef}
         onMouseEnter={(e) => handleMouseEnter(e, { 
          durationHover: datePostDurationHover ?? 800,
          effectHover:datePostEffectHover,
          easingHover:datePostEasingHover ?? 'linear',
          opacityHover:datePostOpacityHover ?? 1,
          filterHover:datePostBlurHover ?? 0,
          startXHover:datePostTranslateXHover ?? 100,
          startYHover:datePostTranslateYHover ?? 0,
          scaleHover:datePostScaleHover ?? 1,
          rotateHover:datePostRotateHover ?? 0,
          rotateXHover:datePostRotateXHover ?? 0,
          rotateYHover:datePostRotateYHover ?? 0,
          skewXHover: datePostSkewXHover ?? 0,
          skewYHover:datePostSkewYHover ?? 0,
          scaleTypeHover:datePostScaleTypeHover ?? 'scale',
        })} // Passa element.duration
        onMouseLeave={(e) => handleMouseLeave(e, { 
          durationHover: datePostDurationHover ?? 800,
          easingHover:datePostEasingHover ?? 'linear',
        })} // Passa element.duration
          style={{
            fontSize: 'clamp(' + datePostFontSizeMobile + 'px,' + datePostFontSizeTablet + 'vw, ' + datePostFontSize + 'px)',
            paddingTop: datePostPadding.top,
            letterSpacing: datePostLetterSpacing + "px",
            fontStyle: datePostFontStyle?.fontStyle ?? "normal", // Valore di default
            fontWeight: isBold ? "bold" : datePostFontWeight ?? "normal",
            textDecoration: datePostFontStyle?.textDecoration ?? "none", // Valore di default
            lineHeight: datePostLineHeight,
            fontFamily: datePostFontFamily,
            paddingBottom: datePostPadding.bottom,
            paddingLeft: datePostPadding.left,
            paddingRight: datePostPadding.right,
            marginTop: datePostMargin.top,
            marginBottom: datePostMargin.bottom,
            marginLeft: datePostMargin.left,
            marginRight: datePostMargin.right,
            borderTopLeftRadius: datePostBorderRadius.top,
            borderTopRightRadius: datePostBorderRadius.right,
            borderBottomRightRadius: datePostBorderRadius.bottom,
            borderBottomLeftRadius: datePostBorderRadius.left,
            borderStyle: datePostBorderStyle,
            borderWidth: `${datePostBorderSize?.top} ${datePostBorderSize?.right} ${datePostBorderSize?.bottom} ${datePostBorderSize?.left}`,
            borderColor: datePostBorderColor,
            transform: 'rotate(' + datePostRotate + 'deg)',
            opacity: datePostOpacity,
            maxWidth: 'max-content',
            ...(datePostBoxShadow && {
              boxShadow: `${datePostBoxShadowHOffset}px ${datePostBoxShadowVOffset}px ${datePostBoxShadowBlur}px ${datePostBoxShadowSpread}px ${datePostBoxShadowColor}`,
            }),
            backgroundColor: datePostColor,
            color: datePostColorIn,
          }}
        >
        {post.date}
        </p>
      </div>
    )
  );
};

export default PostDateRender;