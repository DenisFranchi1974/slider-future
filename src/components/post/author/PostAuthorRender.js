import React from "react";
import { useState, useEffect, useRef } from "react";
import { animationsIn, getAnimationProps} from '../../../animate';
import {handleMouseEnter, handleMouseLeave} from '../../../animate/animationIn'

const PostTitleRender = ({ post, attributes, onPlay }) => {
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

  const authorPostRef = useRef(null); // Ref per il contenitore del testo
  //const barRef = useRef(null); // Ref per il div che vuoi animare
  const [hasPlayed, setHasPlayed] = useState(false); // Stato per tracciare se l'animazione è stata attivata

  // Funzione per attivare l'animazione
  const playAnimation = () => {
    const effectIn = animationsIn[authorPostEffect];
   
    // Converti il valore di loop in un numero
    const loopCount = (typeof authorPostLoop === 'string' && authorPostLoop.toLowerCase() === 'true') 
    
    ? 5
    : (parseInt(authorPostLoop) >= 1 && parseInt(authorPostLoop) <= 10) 
    ? parseInt(authorPostLoop) 
    : 1; // Imposta un valore di default se non è in un intervallo valido

    if (effectIn ) {
     // textRef.current.style.opacity = 0; // Reset
      const animationProps = getAnimationProps({
        duration: authorPostDuration ?? 800,
        delay: authorPostDelay ?? 0, 
        endDelay: authorPostEndDelay ?? 0,
        easing: authorPostEasing ?? 'linear', 
        direction: authorPostDirection ?? 'normal',
        loop: loopCount,
        startXFrom: authorPostTranslateXFrom ?? 100, 
        startXTo: authorPostTranslateXTo ?? 0, 
        startYFrom: authorPostTranslateYFrom ?? 0,
        startYTo: authorPostTranslateYTo ?? 0,
        opacityFrom: authorPostOpacityFrom ?? 0,
        opacityTo: authorPostOpacityTo ?? 1,
        scaleFrom: authorPostScaleFrom ?? 0,
        scaleTo: authorPostScaleTo ?? 1,
        rotateFrom: authorPostRotateFrom ?? 0,
        rotateTo: authorPostRotateTo ?? 0,
        rotateXFrom: authorPostRotateXFrom ?? 0, 
        rotateXTo: authorPostRotateXTo ?? 0,
        rotateYFrom: authorPostRotateYFrom ?? 0,
        rotateYTo: authorPostRotateYTo ?? 0,
        skewXFrom: authorPostSkewXFrom ?? 0,
        skewXTo: authorPostSkewXTo ?? 0,
        skewYFrom: authorPostSkewYFrom ?? 0,
        skewYTo: authorPostSkewYTo ?? 0,
        filterFrom: authorPostBlurFrom ?? 0,
        filterTo: authorPostBlurTo ?? 0,
        directionBlock: authorPostDirectionBlock,
        colorBlockEffect: authorPostBlockColor,
        scaleType: authorPostScaleType ?? 'scale',
        stagger: authorPostStagger,
        textSplitEffect: authorPostEffectSplit,
      });
  
      setTimeout(() => {
        // Animazione del testo
        effectIn(authorPostRef.current, animationProps);
      
      }, authorPostDelay);
      
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
    if (authorPostRef.current && !hasPlayed) {
      authorPostRef.current.style.opacity = 1;
    }
  }, [hasPlayed]);

  // Aggiungi un useEffect per osservare i cambiamenti di effectIn ed easing
  useEffect(() => {
    playAnimation();
  }, [authorPostEffect, authorPostEasing, authorPostDirection]);

  const isBold = authorPostFontStyle?.fontWeight === "bold";

  return (
    post.author && (
      <div className={'content-author-post ' + hideAuthor} style={{ justifyContent: authorPostAlign, display:'flex' }}>
        <p
        className="author-post"
         ref={authorPostRef}
         onMouseEnter={(e) => handleMouseEnter(e, { 
          durationHover: authorPostDurationHover ?? 800,
          effectHover:authorPostEffectHover,
          easingHover:authorPostEasingHover ?? 'linear',
          opacityHover:authorPostOpacityHover ?? 1,
          filterHover:authorPostBlurHover ?? 0,
          startXHover:authorPostTranslateXHover ?? 100,
          startYHover:authorPostTranslateYHover ?? 0,
          scaleHover:authorPostScaleHover ?? 1,
          rotateHover:authorPostRotateHover ?? 0,
          rotateXHover:authorPostRotateXHover ?? 0,
          rotateYHover:authorPostRotateYHover ?? 0,
          skewXHover: authorPostSkewXHover ?? 0,
          skewYHover:authorPostSkewYHover ?? 0,
          scaleTypeHover:authorPostScaleTypeHover ?? 'scale',
        })} // Passa element.duration
        onMouseLeave={(e) => handleMouseLeave(e, { 
          durationHover: authorPostDurationHover ?? 800,
          easingHover:authorPostEasingHover ?? 'linear',
        })} // Passa element.duration
          style={{
            fontSize: 'clamp(' + authorPostFontSizeMobile + 'px,' + authorPostFontSizeTablet + 'vw, ' + authorPostFontSize + 'px)',
            paddingTop: authorPostPadding.top,
            letterSpacing: authorPostLetterSpacing + "px",
            fontStyle: authorPostFontStyle?.fontStyle ?? "normal", // Valore di default
            fontWeight: isBold ? "bold" : authorPostFontWeight ?? "normal",
            textDecoration: authorPostFontStyle?.textDecoration ?? "none", // Valore di default
            lineHeight: authorPostLineHeight,
            fontFamily: authorPostFontFamily,
            paddingBottom: authorPostPadding.bottom,
            paddingLeft: authorPostPadding.left,
            paddingRight: authorPostPadding.right,
            marginTop: authorPostMargin.top,
            marginBottom: authorPostMargin.bottom,
            marginLeft: authorPostMargin.left,
            marginRight: authorPostMargin.right,
            borderTopLeftRadius: authorPostBorderRadius.top,
            borderTopRightRadius: authorPostBorderRadius.right,
            borderBottomRightRadius: authorPostBorderRadius.bottom,
            borderBottomLeftRadius: authorPostBorderRadius.left,
            borderStyle: authorPostBorderStyle,
            borderWidth: `${authorPostBorderSize?.top} ${authorPostBorderSize?.right} ${authorPostBorderSize?.bottom} ${authorPostBorderSize?.left}`,
            borderColor: authorPostBorderColor,
            transform: 'rotate(' + authorPostRotate + 'deg)',
            opacity: authorPostOpacity,
            maxWidth: 'max-content',
            ...(authorPostBoxShadow && {
              boxShadow: `${authorPostBoxShadowHOffset}px ${authorPostBoxShadowVOffset}px ${authorPostBoxShadowBlur}px ${authorPostBoxShadowSpread}px ${authorPostBoxShadowColor}`,
            }),
            backgroundColor: authorPostColor,
            color: authorPostColorIn,
          }}
        >
        {post.author}
        </p>
      </div>
    )
  );
};

export default PostTitleRender;