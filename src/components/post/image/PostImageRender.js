import React from "react";
import { useState, useEffect, useRef } from "react";
import { animationsIn, getAnimationProps} from '../../../animate';
import {handleMouseEnter, handleMouseLeave} from '../../../animate/animationIn'

const PostImageRender = ({ post, attributes, onPlay }) => {
  const {
    imagePostAlign,
    imagePostSize,
    imagePostWidth,
    imagePostWidthPx,
    imagePostWidthPercent,
    imagePostHeight,
    imagePostHeightPx,
    imagePostHeightPercent,
    imagePostColor,
    imagePostPadding,
    imagePostMargin,
    imagePostBorderRadius,
    imagePostBorderStyle,
    imagePostBorderSize,
    imagePostBorderColor,
    imagePostRotate,
    imagePostOpacity,
    imagePostBoxShadow,
    imagePostBoxShadowHOffset,
    imagePostBoxShadowVOffset,
    imagePostBoxShadowBlur,
    imagePostBoxShadowSpread,
    imagePostBoxShadowColor,
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
    hideImage
  } = attributes;

  const imageRef = useRef(null); // Ref per il contenitore del testo
  //const barRef = useRef(null); // Ref per il div che vuoi animare
  const [hasPlayed, setHasPlayed] = useState(false); // Stato per tracciare se l'animazione è stata attivata

  // Funzione per attivare l'animazione
  const playAnimation = () => {
    const effectIn = animationsIn[imagePostEffect];
   
    // Converti il valore di loop in un numero
    const loopCount = (typeof imagePostLoop === 'string' && imagePostLoop.toLowerCase() === 'true') 
    
    ? 5
    : (parseInt(imagePostLoop) >= 1 && parseInt(imagePostLoop) <= 10) 
    ? parseInt(imagePostLoop) 
    : 1; // Imposta un valore di default se non è in un intervallo valido

    if (effectIn ) {
     // textRef.current.style.opacity = 0; // Reset
      const animationProps = getAnimationProps({
        duration: imagePostDuration ?? 800,
        delay: imagePostDelay ?? 0, 
        endDelay: imagePostEndDelay ?? 0,
        easing: imagePostEasing ?? 'linear', 
        direction: imagePostDirection ?? 'normal',
        loop: loopCount,
        startXFrom: imagePostTranslateXFrom ?? 100, 
        startXTo: imagePostTranslateXTo ?? 0, 
        startYFrom: imagePostTranslateYFrom ?? 0,
        startYTo: imagePostTranslateYTo ?? 0,
        opacityFrom: imagePostOpacityFrom ?? 0,
        opacityTo: imagePostOpacityTo ?? 1,
        scaleFrom: imagePostScaleFrom ?? 0,
        scaleTo: imagePostScaleTo ?? 1,
        rotateFrom: imagePostRotateFrom ?? 0,
        rotateTo: imagePostRotateTo ?? 0,
        rotateXFrom: imagePostRotateXFrom ?? 0, 
        rotateXTo: imagePostRotateXTo ?? 0,
        rotateYFrom: imagePostRotateYFrom ?? 0,
        rotateYTo: imagePostRotateYTo ?? 0,
        skewXFrom: imagePostSkewXFrom ?? 0,
        skewXTo: imagePostSkewXTo ?? 0,
        skewYFrom: imagePostSkewYFrom ?? 0,
        skewYTo: imagePostSkewYTo ?? 0,
        filterFrom: imagePostBlurFrom ?? 0,
        filterTo: imagePostBlurTo ?? 0,
        scaleType: imagePostScaleType ?? 'scale',
      });
  
      setTimeout(() => {
        // Animazione del testo
        effectIn(imageRef.current, animationProps);
      
      }, imagePostDelay);
      
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
    if (imageRef.current && !hasPlayed) {
      imageRef.current.style.opacity = 1;
    }
  }, [hasPlayed]);

  // Aggiungi un useEffect per osservare i cambiamenti di effectIn ed easing
  useEffect(() => {
    playAnimation();
  }, [imagePostEffect, imagePostEasing, imagePostDirection]);

  return (
    post.image && (
      <div className={'featured-image-post ' + hideImage} style={{ textAlign: imagePostAlign }}>
        <img
         ref={imageRef}
         onMouseEnter={(e) => handleMouseEnter(e, { 
          durationHover: imagePostDurationHover ?? 800,
          effectHover:imagePostEffectHover,
          easingHover:imagePostEasingHover ?? 'linear',
          opacityHover:imagePostOpacityHover ?? 1,
          filterHover:imagePostBlurHover ?? 0,
          startXHover:imagePostTranslateXHover ?? 100,
          startYHover:imagePostTranslateYHover ?? 0,
          scaleHover:imagePostScaleHover ?? 1,
          rotateHover:imagePostRotateHover ?? 0,
          rotateXHover:imagePostRotateXHover ?? 0,
          rotateYHover:imagePostRotateYHover ?? 0,
          skewXHover: imagePostSkewXHover ?? 0,
          skewYHover:imagePostSkewYHover ?? 0,
          scaleTypeHover:imagePostScaleTypeHover ?? 'scale',
        })} // Passa element.duration
        onMouseLeave={(e) => handleMouseLeave(e, { 
          durationHover: imagePostDurationHover ?? 800,
          easingHover:imagePostEasingHover ?? 'linear',
        })} // Passa element.duration
          src={post.image}
          alt={post.title}
          style={{
            objectFit: imagePostSize,
            width: imagePostWidth === "fixed" ? `${imagePostWidthPx}px` : `${imagePostWidthPercent}%`,
            height: imagePostHeight === "fixed" ? `${imagePostHeightPx}px` : `${imagePostHeightPercent}%`,
            paddingTop: imagePostPadding.top,
            paddingBottom: imagePostPadding.bottom,
            paddingLeft: imagePostPadding.left,
            paddingRight: imagePostPadding.right,
            marginTop: imagePostMargin.top,
            marginBottom: imagePostMargin.bottom,
            marginLeft: imagePostMargin.left,
            marginRight: imagePostMargin.right,
            borderTopLeftRadius: imagePostBorderRadius.top,
            borderTopRightRadius: imagePostBorderRadius.right,
            borderBottomRightRadius: imagePostBorderRadius.bottom,
            borderBottomLeftRadius: imagePostBorderRadius.left,
            borderStyle: imagePostBorderStyle,
            borderWidth: `${imagePostBorderSize?.top} ${imagePostBorderSize?.right} ${imagePostBorderSize?.bottom} ${imagePostBorderSize?.left}`,
            borderColor: imagePostBorderColor,
            transform: 'rotate(' + imagePostRotate + 'deg)',
            opacity: imagePostOpacity,
            ...(imagePostBoxShadow && {
              boxShadow: `${imagePostBoxShadowHOffset}px ${imagePostBoxShadowVOffset}px ${imagePostBoxShadowBlur}px ${imagePostBoxShadowSpread}px ${imagePostBoxShadowColor}`,
            }),
            backgroundColor: imagePostColor,
          }}
        />
      </div>
    )
  );
};

export default PostImageRender;