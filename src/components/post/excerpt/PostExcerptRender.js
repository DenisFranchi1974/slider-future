import React from "react";
import { useState, useEffect, useRef } from "react";
import { animationsIn, getAnimationProps} from '../../../animate';
import {handleMouseEnter, handleMouseLeave} from '../../../animate/animationIn'

const PostTitleRender = ({ post, attributes, onPlay }) => {
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

  const excerptPostRef = useRef(null); // Ref per il contenitore del testo
  //const barRef = useRef(null); // Ref per il div che vuoi animare
  const [hasPlayed, setHasPlayed] = useState(false); // Stato per tracciare se l'animazione è stata attivata

  // Funzione per attivare l'animazione
  const playAnimation = () => {
    const effectIn = animationsIn[excerptPostEffect];
   
    // Converti il valore di loop in un numero
    const loopCount = (typeof excerptPostLoop === 'string' && excerptPostLoop.toLowerCase() === 'true') 
    
    ? 5
    : (parseInt(excerptPostLoop) >= 1 && parseInt(excerptPostLoop) <= 10) 
    ? parseInt(excerptPostLoop) 
    : 1; // Imposta un valore di default se non è in un intervallo valido

    if (effectIn ) {
     // textRef.current.style.opacity = 0; // Reset
      const animationProps = getAnimationProps({
        duration: excerptPostDuration ?? 800,
        delay: excerptPostDelay ?? 0, 
        endDelay: excerptPostEndDelay ?? 0,
        easing: excerptPostEasing ?? 'linear', 
        direction: excerptPostDirection ?? 'normal',
        loop: loopCount,
        startXFrom: excerptPostTranslateXFrom ?? 100, 
        startXTo: excerptPostTranslateXTo ?? 0, 
        startYFrom: excerptPostTranslateYFrom ?? 0,
        startYTo: excerptPostTranslateYTo ?? 0,
        opacityFrom: excerptPostOpacityFrom ?? 0,
        opacityTo: excerptPostOpacityTo ?? 1,
        scaleFrom: excerptPostScaleFrom ?? 0,
        scaleTo: excerptPostScaleTo ?? 1,
        rotateFrom: excerptPostRotateFrom ?? 0,
        rotateTo: excerptPostRotateTo ?? 0,
        rotateXFrom: excerptPostRotateXFrom ?? 0, 
        rotateXTo: excerptPostRotateXTo ?? 0,
        rotateYFrom: excerptPostRotateYFrom ?? 0,
        rotateYTo: excerptPostRotateYTo ?? 0,
        skewXFrom: excerptPostSkewXFrom ?? 0,
        skewXTo: excerptPostSkewXTo ?? 0,
        skewYFrom: excerptPostSkewYFrom ?? 0,
        skewYTo: excerptPostSkewYTo ?? 0,
        filterFrom: excerptPostBlurFrom ?? 0,
        filterTo: excerptPostBlurTo ?? 0,
        directionBlock: excerptPostDirectionBlock,
        colorBlockEffect: excerptPostBlockColor,
        scaleType: excerptPostScaleType ?? 'scale',
        stagger: excerptPostStagger,
        textSplitEffect: excerptPostEffectSplit,
      });
  
      setTimeout(() => {
        // Animazione del testo
        effectIn(excerptPostRef.current, animationProps);
      
      }, excerptPostDelay);
      
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
    if (excerptPostRef.current && !hasPlayed) {
      excerptPostRef.current.style.opacity = 1;
    }
  }, [hasPlayed]);

  // Aggiungi un useEffect per osservare i cambiamenti di effectIn ed easing
  useEffect(() => {
    playAnimation();
  }, [excerptPostEffect, excerptPostEasing, excerptPostDirection]);

  const isBold = excerptPostFontStyle?.fontWeight === "bold";

  return (
    post.title && (
      <div className={'content-excerpt-post ' + hideExcerpt} style={{ justifyContent: excerptPostAlign, display:'flex' }}>
        <p
        className="excerpt-post"
         ref={excerptPostRef}
         onMouseEnter={(e) => handleMouseEnter(e, { 
          durationHover: excerptPostDurationHover ?? 800,
          effectHover:excerptPostEffectHover,
          easingHover:excerptPostEasingHover ?? 'linear',
          opacityHover:excerptPostOpacityHover ?? 1,
          filterHover:excerptPostBlurHover ?? 0,
          startXHover:excerptPostTranslateXHover ?? 100,
          startYHover:excerptPostTranslateYHover ?? 0,
          scaleHover:excerptPostScaleHover ?? 1,
          rotateHover:excerptPostRotateHover ?? 0,
          rotateXHover:excerptPostRotateXHover ?? 0,
          rotateYHover:excerptPostRotateYHover ?? 0,
          skewXHover: excerptPostSkewXHover ?? 0,
          skewYHover:excerptPostSkewYHover ?? 0,
          scaleTypeHover:excerptPostScaleTypeHover ?? 'scale',
        })} // Passa element.duration
        onMouseLeave={(e) => handleMouseLeave(e, { 
          durationHover: excerptPostDurationHover ?? 800,
          easingHover:excerptPostEasingHover ?? 'linear',
        })} // Passa element.duration
          style={{
            fontSize: 'clamp(' + excerptPostFontSizeMobile + 'px,' + excerptPostFontSizeTablet + 'vw, ' + excerptPostFontSize + 'px)',
            paddingTop: excerptPostPadding.top,
            letterSpacing: excerptPostLetterSpacing + "px",
            fontStyle: excerptPostFontStyle?.fontStyle ?? "normal", // Valore di default
            fontWeight: isBold ? "bold" : excerptPostFontWeight ?? "normal",
            textDecoration: excerptPostFontStyle?.textDecoration ?? "none", // Valore di default
            lineHeight: excerptPostLineHeight,
            fontFamily: excerptPostFontFamily,
            paddingBottom: excerptPostPadding.bottom,
            paddingLeft: excerptPostPadding.left,
            paddingRight: excerptPostPadding.right,
            marginTop: excerptPostMargin.top,
            marginBottom: excerptPostMargin.bottom,
            marginLeft: excerptPostMargin.left,
            marginRight: excerptPostMargin.right,
            borderTopLeftRadius: excerptPostBorderRadius.top,
            borderTopRightRadius: excerptPostBorderRadius.right,
            borderBottomRightRadius: excerptPostBorderRadius.bottom,
            borderBottomLeftRadius: excerptPostBorderRadius.left,
            borderStyle: excerptPostBorderStyle,
            borderWidth: `${excerptPostBorderSize?.top} ${excerptPostBorderSize?.right} ${excerptPostBorderSize?.bottom} ${excerptPostBorderSize?.left}`,
            borderColor: excerptPostBorderColor,
            transform: 'rotate(' + excerptPostRotate + 'deg)',
            opacity: excerptPostOpacity,
            maxWidth: 'max-content',
            ...(excerptPostBoxShadow && {
              boxShadow: `${excerptPostBoxShadowHOffset}px ${excerptPostBoxShadowVOffset}px ${excerptPostBoxShadowBlur}px ${excerptPostBoxShadowSpread}px ${excerptPostBoxShadowColor}`,
            }),
            backgroundColor: excerptPostColor,
            color: excerptPostColorIn,
          }}
        >
        {post.excerpt}
        </p>
      </div>
    )
  );
};

export default PostTitleRender;