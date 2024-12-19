import React from "react";
import { useState, useEffect, useRef } from "react";
import { animationsIn, getAnimationProps} from '../../../animate';
import {handleMouseEnter, handleMouseLeave} from '../../../animate/animationIn'

const PostCategoriesRender = ({ post, attributes, onPlay }) => {
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

  const categoriesPostRefs = useRef([]); // Ref per ogni categoria
  //const barRef = useRef(null); // Ref per il div che vuoi animare
  const [hasPlayed, setHasPlayed] = useState(false); // Stato per tracciare se l'animazione è stata attivata

  // Funzione per attivare l'animazione
  const playAnimation = () => {
    const effectIn = animationsIn[categoriesPostEffect];
   
    // Converti il valore di loop in un numero
    const loopCount = (typeof categoriesPostLoop === 'string' && categoriesPostLoop.toLowerCase() === 'true') 
    
    ? 5
    : (parseInt(categoriesPostLoop) >= 1 && parseInt(categoriesPostLoop) <= 10) 
    ? parseInt(categoriesPostLoop) 
    : 1; // Imposta un valore di default se non è in un intervallo valido

    if (effectIn ) {
     // textRef.current.style.opacity = 0; // Reset
      const animationProps = getAnimationProps({
        duration: categoriesPostDuration ?? 800,
        delay: categoriesPostDelay ?? 0, 
        endDelay: categoriesPostEndDelay ?? 0,
        easing: categoriesPostEasing ?? 'linear', 
        direction: categoriesPostDirection ?? 'normal',
        loop: loopCount,
        startXFrom: categoriesPostTranslateXFrom ?? 100, 
        startXTo: categoriesPostTranslateXTo ?? 0, 
        startYFrom: categoriesPostTranslateYFrom ?? 0,
        startYTo: categoriesPostTranslateYTo ?? 0,
        opacityFrom: categoriesPostOpacityFrom ?? 0,
        opacityTo: categoriesPostOpacityTo ?? 1,
        scaleFrom: categoriesPostScaleFrom ?? 0,
        scaleTo: categoriesPostScaleTo ?? 1,
        rotateFrom: categoriesPostRotateFrom ?? 0,
        rotateTo: categoriesPostRotateTo ?? 0,
        rotateXFrom: categoriesPostRotateXFrom ?? 0, 
        rotateXTo: categoriesPostRotateXTo ?? 0,
        rotateYFrom: categoriesPostRotateYFrom ?? 0,
        rotateYTo: categoriesPostRotateYTo ?? 0,
        skewXFrom: categoriesPostSkewXFrom ?? 0,
        skewXTo: categoriesPostSkewXTo ?? 0,
        skewYFrom: categoriesPostSkewYFrom ?? 0,
        skewYTo: categoriesPostSkewYTo ?? 0,
        filterFrom: categoriesPostBlurFrom ?? 0,
        filterTo: categoriesPostBlurTo ?? 0,
        directionBlock: categoriesPostDirectionBlock,
        colorBlockEffect: categoriesPostBlockColor,
        scaleType: categoriesPostScaleType ?? 'scale',
        stagger: categoriesPostStagger,
        textSplitEffect: categoriesPostEffectSplit,
      });
  
      setTimeout(() => {
        // Animazione del testo
        categoriesPostRefs.current.forEach((ref) => {
          if (ref) {
            effectIn(ref, animationProps);
          }
        });
      }, categoriesPostDelay);
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
    if (categoriesPostRefs.current && !hasPlayed) {
      categoriesPostRefs.current.forEach((ref) => {
        if (ref) {
          ref.style.opacity = 1;
        }
      });
    }
  }, [hasPlayed]);

  // Aggiungi un useEffect per osservare i cambiamenti di effectIn ed easing
  useEffect(() => {
    playAnimation();
  }, [categoriesPostEffect, categoriesPostEasing, categoriesPostDirection]);

  const isBold = categoriesPostFontStyle?.fontWeight === "bold";

  return (
      <div className={'content-categories-post ' + hideCategories} style={{ justifyContent: categoriesPostAlign, display:'flex' }}>
         {post.categories && post.categories.map((cat, idx) => (
        <span
        key={idx}
        className="categories-post"
        ref={(el) => (categoriesPostRefs.current[idx] = el)}
         onMouseEnter={(e) => handleMouseEnter(e, { 
          durationHover: categoriesPostDurationHover ?? 800,
          effectHover:categoriesPostEffectHover,
          easingHover:categoriesPostEasingHover ?? 'linear',
          opacityHover:categoriesPostOpacityHover ?? 1,
          filterHover:categoriesPostBlurHover ?? 0,
          startXHover:categoriesPostTranslateXHover ?? 100,
          startYHover:categoriesPostTranslateYHover ?? 0,
          scaleHover:categoriesPostScaleHover ?? 1,
          rotateHover:categoriesPostRotateHover ?? 0,
          rotateXHover:categoriesPostRotateXHover ?? 0,
          rotateYHover:categoriesPostRotateYHover ?? 0,
          skewXHover: categoriesPostSkewXHover ?? 0,
          skewYHover:categoriesPostSkewYHover ?? 0,
          scaleTypeHover:categoriesPostScaleTypeHover ?? 'scale',
        })} // Passa element.duration
        onMouseLeave={(e) => handleMouseLeave(e, { 
          durationHover: categoriesPostDurationHover ?? 800,
          easingHover:categoriesPostEasingHover ?? 'linear',
        })} // Passa element.duration
          style={{
            fontSize: 'clamp(' + categoriesPostFontSizeMobile + 'px,' + categoriesPostFontSizeTablet + 'vw, ' + categoriesPostFontSize + 'px)',
            paddingTop: categoriesPostPadding.top,
            letterSpacing: categoriesPostLetterSpacing + "px",
            fontStyle: categoriesPostFontStyle?.fontStyle ?? "normal", // Valore di default
            fontWeight: isBold ? "bold" : categoriesPostFontWeight ?? "normal",
            textDecoration: categoriesPostFontStyle?.textDecoration ?? "none", // Valore di default
            lineHeight: categoriesPostLineHeight,
            fontFamily: categoriesPostFontFamily,
            paddingBottom: categoriesPostPadding.bottom,
            paddingLeft: categoriesPostPadding.left,
            paddingRight: categoriesPostPadding.right,
            marginTop: categoriesPostMargin.top,
            marginBottom: categoriesPostMargin.bottom,
            marginLeft: categoriesPostMargin.left,
            marginRight: categoriesPostMargin.right,
            borderTopLeftRadius: categoriesPostBorderRadius.top,
            borderTopRightRadius: categoriesPostBorderRadius.right,
            borderBottomRightRadius: categoriesPostBorderRadius.bottom,
            borderBottomLeftRadius: categoriesPostBorderRadius.left,
            borderStyle: categoriesPostBorderStyle,
            borderWidth: `${categoriesPostBorderSize?.top} ${categoriesPostBorderSize?.right} ${categoriesPostBorderSize?.bottom} ${categoriesPostBorderSize?.left}`,
            borderColor: categoriesPostBorderColor,
            transform: 'rotate(' + categoriesPostRotate + 'deg)',
            opacity: categoriesPostOpacity,
            maxWidth: 'max-content',
            ...(categoriesPostBoxShadow && {
              boxShadow: `${categoriesPostBoxShadowHOffset}px ${categoriesPostBoxShadowVOffset}px ${categoriesPostBoxShadowBlur}px ${categoriesPostBoxShadowSpread}px ${categoriesPostBoxShadowColor}`,
            }),
            backgroundColor: categoriesPostColor,
            color: categoriesPostColorIn,
          }}
        >
          {cat}
        </span>
      ))}
    </div>
  );
};

export default PostCategoriesRender;