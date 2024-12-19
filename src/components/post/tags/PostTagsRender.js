import React from "react";
import { useState, useEffect, useRef } from "react";
import { animationsIn, getAnimationProps} from '../../../animate';
import {handleMouseEnter, handleMouseLeave} from '../../../animate/animationIn'

const PostTagsRender = ({ post, attributes, onPlay }) => {
  const {
    tagsPostColor,
    tagsPostAlign,
    tagsPostPadding,
    tagsPostMargin,
    tagsPostBorderStyle,
    tagsPostBorderSize,
    tagsPostBorderColor,
    tagsPostBorderRadius,
    tagsPostRotate,
    tagsPostOpacity,
    tagsPostBoxShadow,
    tagsPostBoxShadowColor,
    tagsPostBoxShadowHOffset,
    tagsPostBoxShadowVOffset,
    tagsPostBoxShadowBlur,
    tagsPostBoxShadowSpread,
    tagsPostEffect,
    tagsPostOpacityFrom,
    tagsPostOpacityTo,
    tagsPostBlurFrom,
    tagsPostBlurTo,
    tagsPostTranslateXFrom,
    tagsPostTranslateXTo,
    tagsPostTranslateYFrom,
    tagsPostTranslateYTo,
    tagsPostScaleType,
    tagsPostScaleFrom,
    tagsPostScaleTo,
    tagsPostRotateFrom,
    tagsPostRotateTo,
    tagsPostRotateXFrom,
    tagsPostRotateXTo,
    tagsPostRotateYFrom,
    tagsPostRotateYTo,
    tagsPostSkewXFrom,
    tagsPostSkewXTo,
    tagsPostSkewYFrom,
    tagsPostSkewYTo,
    tagsPostDuration,
    tagsPostDelay,
    tagsPostEndDelay,
    tagsPostEasing,
    tagsPostDirection,
    tagsPostLoop,
    tagsPostEffectHover,
    tagsPostOpacityHover,
    tagsPostBlurHover,
    tagsPostTranslateXHover,
    tagsPostTranslateYHover,
    tagsPostScaleTypeHover,
    tagsPostScaleHover,
    tagsPostRotateHover,
    tagsPostRotateXHover,
    tagsPostRotateYHover,
    tagsPostSkewXHover,
    tagsPostSkewYHover,
    tagsPostDurationHover,
    tagsPostEasingHover,
    hideTags,
    tagsPostFontSizeMobile,
    tagsPostFontSizeTablet,
    tagsPostFontSize,
    tagsPostFontStyle,
    tagsPostFontFamily,
    tagsPostFontWeight,
    tagsPostLineHeight,
    tagsPostLetterSpacing,
    tagsPostColorIn,
    tagsPostEffectSplit,
    tagsPostStagger,
    tagsPostDirectionBlock,
    tagsPostBlockColor,
  } = attributes;

  const tagsPostRefs = useRef([]); // Ref per ogni categoria
  //const barRef = useRef(null); // Ref per il div che vuoi animare
  const [hasPlayed, setHasPlayed] = useState(false); // Stato per tracciare se l'animazione è stata attivata

  // Funzione per attivare l'animazione
  const playAnimation = () => {
    const effectIn = animationsIn[tagsPostEffect];
   
    // Converti il valore di loop in un numero
    const loopCount = (typeof tagsPostLoop === 'string' && tagsPostLoop.toLowerCase() === 'true') 
    
    ? 5
    : (parseInt(tagsPostLoop) >= 1 && parseInt(tagsPostLoop) <= 10) 
    ? parseInt(tagsPostLoop) 
    : 1; // Imposta un valore di default se non è in un intervallo valido

    if (effectIn ) {
     // textRef.current.style.opacity = 0; // Reset
      const animationProps = getAnimationProps({
        duration: tagsPostDuration ?? 800,
        delay: tagsPostDelay ?? 0, 
        endDelay: tagsPostEndDelay ?? 0,
        easing: tagsPostEasing ?? 'linear', 
        direction: tagsPostDirection ?? 'normal',
        loop: loopCount,
        startXFrom: tagsPostTranslateXFrom ?? 100, 
        startXTo: tagsPostTranslateXTo ?? 0, 
        startYFrom: tagsPostTranslateYFrom ?? 0,
        startYTo: tagsPostTranslateYTo ?? 0,
        opacityFrom: tagsPostOpacityFrom ?? 0,
        opacityTo: tagsPostOpacityTo ?? 1,
        scaleFrom: tagsPostScaleFrom ?? 0,
        scaleTo: tagsPostScaleTo ?? 1,
        rotateFrom: tagsPostRotateFrom ?? 0,
        rotateTo: tagsPostRotateTo ?? 0,
        rotateXFrom: tagsPostRotateXFrom ?? 0, 
        rotateXTo: tagsPostRotateXTo ?? 0,
        rotateYFrom: tagsPostRotateYFrom ?? 0,
        rotateYTo: tagsPostRotateYTo ?? 0,
        skewXFrom: tagsPostSkewXFrom ?? 0,
        skewXTo: tagsPostSkewXTo ?? 0,
        skewYFrom: tagsPostSkewYFrom ?? 0,
        skewYTo: tagsPostSkewYTo ?? 0,
        filterFrom: tagsPostBlurFrom ?? 0,
        filterTo: tagsPostBlurTo ?? 0,
        directionBlock: tagsPostDirectionBlock,
        colorBlockEffect: tagsPostBlockColor,
        scaleType: tagsPostScaleType ?? 'scale',
        stagger: tagsPostStagger,
        textSplitEffect: tagsPostEffectSplit,
      });
  
      setTimeout(() => {
        // Animazione del testo
        tagsPostRefs.current.forEach((ref) => {
          if (ref) {
            effectIn(ref, animationProps);
          }
        });
      }, tagsPostDelay);
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
    if (tagsPostRefs.current && !hasPlayed) {
      tagsPostRefs.current.forEach((ref) => {
        if (ref) {
          ref.style.opacity = 1;
        }
      });
    }
  }, [hasPlayed]);

  // Aggiungi un useEffect per osservare i cambiamenti di effectIn ed easing
  useEffect(() => {
    playAnimation();
  }, [tagsPostEffect, tagsPostEasing, tagsPostDirection]);

  const isBold = tagsPostFontStyle?.fontWeight === "bold";

  return (
      <div className={'content-tags-post ' + hideTags} style={{ justifyContent: tagsPostAlign, display:'flex' }}>
         {post.tags && post.tags.map((tag, idx) => (
        <span
        key={idx}
        className="tags-post"
        ref={(el) => (tagsPostRefs.current[idx] = el)}
         onMouseEnter={(e) => handleMouseEnter(e, { 
          durationHover: tagsPostDurationHover ?? 800,
          effectHover:tagsPostEffectHover,
          easingHover:tagsPostEasingHover ?? 'linear',
          opacityHover:tagsPostOpacityHover ?? 1,
          filterHover:tagsPostBlurHover ?? 0,
          startXHover:tagsPostTranslateXHover ?? 100,
          startYHover:tagsPostTranslateYHover ?? 0,
          scaleHover:tagsPostScaleHover ?? 1,
          rotateHover:tagsPostRotateHover ?? 0,
          rotateXHover:tagsPostRotateXHover ?? 0,
          rotateYHover:tagsPostRotateYHover ?? 0,
          skewXHover: tagsPostSkewXHover ?? 0,
          skewYHover:tagsPostSkewYHover ?? 0,
          scaleTypeHover:tagsPostScaleTypeHover ?? 'scale',
        })} // Passa element.duration
        onMouseLeave={(e) => handleMouseLeave(e, { 
          durationHover: tagsPostDurationHover ?? 800,
          easingHover:tagsPostEasingHover ?? 'linear',
        })} // Passa element.duration
          style={{
            fontSize: 'clamp(' + tagsPostFontSizeMobile + 'px,' + tagsPostFontSizeTablet + 'vw, ' + tagsPostFontSize + 'px)',
            paddingTop: tagsPostPadding.top,
            letterSpacing: tagsPostLetterSpacing + "px",
            fontStyle: tagsPostFontStyle?.fontStyle ?? "normal", // Valore di default
            fontWeight: isBold ? "bold" : tagsPostFontWeight ?? "normal",
            textDecoration: tagsPostFontStyle?.textDecoration ?? "none", // Valore di default
            lineHeight: tagsPostLineHeight,
            fontFamily: tagsPostFontFamily,
            paddingBottom: tagsPostPadding.bottom,
            paddingLeft: tagsPostPadding.left,
            paddingRight: tagsPostPadding.right,
            marginTop: tagsPostMargin.top,
            marginBottom: tagsPostMargin.bottom,
            marginLeft: tagsPostMargin.left,
            marginRight: tagsPostMargin.right,
            borderTopLeftRadius: tagsPostBorderRadius.top,
            borderTopRightRadius: tagsPostBorderRadius.right,
            borderBottomRightRadius: tagsPostBorderRadius.bottom,
            borderBottomLeftRadius: tagsPostBorderRadius.left,
            borderStyle: tagsPostBorderStyle,
            borderWidth: `${tagsPostBorderSize?.top} ${tagsPostBorderSize?.right} ${tagsPostBorderSize?.bottom} ${tagsPostBorderSize?.left}`,
            borderColor: tagsPostBorderColor,
            transform: 'rotate(' + tagsPostRotate + 'deg)',
            opacity: tagsPostOpacity,
            maxWidth: 'max-content',
            ...(tagsPostBoxShadow && {
              boxShadow: `${tagsPostBoxShadowHOffset}px ${tagsPostBoxShadowVOffset}px ${tagsPostBoxShadowBlur}px ${tagsPostBoxShadowSpread}px ${tagsPostBoxShadowColor}`,
            }),
            backgroundColor: tagsPostColor,
            color: tagsPostColorIn,
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default PostTagsRender;