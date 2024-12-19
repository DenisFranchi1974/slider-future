import React from "react";
import { useState, useEffect, useRef } from "react";
import { animationsIn, getAnimationProps} from '../../../animate';
import {handleMouseEnter, handleMouseLeave} from '../../../animate/animationIn'

const PostLinkRender = ({ post, attributes, onPlay }) => {
  const {
    linkPostColor,
    linkPostAlign,
    linkPostPadding,
    linkPostMargin,
    linkPostBorderStyle,
    linkPostBorderSize,
    linkPostBorderColor,
    linkPostBorderRadius,
    linkPostRotate,
    linkPostOpacity,
    linkPostBoxShadow,
    linkPostBoxShadowColor,
    linkPostBoxShadowHOffset,
    linkPostBoxShadowVOffset,
    linkPostBoxShadowBlur,
    linkPostBoxShadowSpread,
    linkPostEffect,
    linkPostOpacityFrom,
    linkPostOpacityTo,
    linkPostBlurFrom,
    linkPostBlurTo,
    linkPostTranslateXFrom,
    linkPostTranslateXTo,
    linkPostTranslateYFrom,
    linkPostTranslateYTo,
    linkPostScaleType,
    linkPostScaleFrom,
    linkPostScaleTo,
    linkPostRotateFrom,
    linkPostRotateTo,
    linkPostRotateXFrom,
    linkPostRotateXTo,
    linkPostRotateYFrom,
    linkPostRotateYTo,
    linkPostSkewXFrom,
    linkPostSkewXTo,
    linkPostSkewYFrom,
    linkPostSkewYTo,
    linkPostDuration,
    linkPostDelay,
    linkPostEndDelay,
    linkPostEasing,
    linkPostDirection,
    linkPostLoop,
    linkPostEffectHover,
    linkPostOpacityHover,
    linkPostBlurHover,
    linkPostTranslateXHover,
    linkPostTranslateYHover,
    linkPostScaleTypeHover,
    linkPostScaleHover,
    linkPostRotateHover,
    linkPostRotateXHover,
    linkPostRotateYHover,
    linkPostSkewXHover,
    linkPostSkewYHover,
    linkPostDurationHover,
    linkPostEasingHover,
    hideLink,
    linkPostFontSizeMobile,
    linkPostFontSizeTablet,
    linkPostFontSize,
    linkPostFontStyle,
    linkPostFontFamily,
    linkPostFontWeight,
    linkPostLineHeight,
    linkPostLetterSpacing,
    linkPostColorIn,
    linkPostEffectSplit,
    linkPostStagger,
    linkPostDirectionBlock,
    linkPostBlockColor,
    linkPostContent
  } = attributes;

  const linkPostRef = useRef(null); // Ref per il contenitore del testo
  //const barRef = useRef(null); // Ref per il div che vuoi animare
  const [hasPlayed, setHasPlayed] = useState(false); // Stato per tracciare se l'animazione è stata attivata

  // Funzione per attivare l'animazione
  const playAnimation = () => {
    const effectIn = animationsIn[linkPostEffect];
   
    // Converti il valore di loop in un numero
    const loopCount = (typeof linkPostLoop === 'string' && linkPostLoop.toLowerCase() === 'true') 
    
    ? 5
    : (parseInt(linkPostLoop) >= 1 && parseInt(linkPostLoop) <= 10) 
    ? parseInt(linkPostLoop) 
    : 1; // Imposta un valore di default se non è in un intervallo valido

    if (effectIn ) {
     // textRef.current.style.opacity = 0; // Reset
      const animationProps = getAnimationProps({
        duration: linkPostDuration ?? 800,
        delay: linkPostDelay ?? 0, 
        endDelay: linkPostEndDelay ?? 0,
        easing: linkPostEasing ?? 'linear', 
        direction: linkPostDirection ?? 'normal',
        loop: loopCount,
        startXFrom: linkPostTranslateXFrom ?? 100, 
        startXTo: linkPostTranslateXTo ?? 0, 
        startYFrom: linkPostTranslateYFrom ?? 0,
        startYTo: linkPostTranslateYTo ?? 0,
        opacityFrom: linkPostOpacityFrom ?? 0,
        opacityTo: linkPostOpacityTo ?? 1,
        scaleFrom: linkPostScaleFrom ?? 0,
        scaleTo: linkPostScaleTo ?? 1,
        rotateFrom: linkPostRotateFrom ?? 0,
        rotateTo: linkPostRotateTo ?? 0,
        rotateXFrom: linkPostRotateXFrom ?? 0, 
        rotateXTo: linkPostRotateXTo ?? 0,
        rotateYFrom: linkPostRotateYFrom ?? 0,
        rotateYTo: linkPostRotateYTo ?? 0,
        skewXFrom: linkPostSkewXFrom ?? 0,
        skewXTo: linkPostSkewXTo ?? 0,
        skewYFrom: linkPostSkewYFrom ?? 0,
        skewYTo: linkPostSkewYTo ?? 0,
        filterFrom: linkPostBlurFrom ?? 0,
        filterTo: linkPostBlurTo ?? 0,
        directionBlock: linkPostDirectionBlock,
        colorBlockEffect: linkPostBlockColor,
        scaleType: linkPostScaleType ?? 'scale',
        stagger: linkPostStagger,
        textSplitEffect: linkPostEffectSplit,
      });
  
      setTimeout(() => {
        // Animazione del testo
        effectIn(linkPostRef.current, animationProps);
      
      }, linkPostDelay);
      
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
    if (linkPostRef.current && !hasPlayed) {
      linkPostRef.current.style.opacity = 1;
    }
  }, [hasPlayed]);

  // Aggiungi un useEffect per osservare i cambiamenti di effectIn ed easing
  useEffect(() => {
    playAnimation();
  }, [linkPostEffect, linkPostEasing, linkPostDirection]);

  const isBold = linkPostFontStyle?.fontWeight === "bold";

  return (
    post.link && (
      <div className={'content-link-post ' + hideLink} style={{ justifyContent: linkPostAlign, display:'flex' }}>
        <a
        className="link-post"
         ref={linkPostRef}
         onMouseEnter={(e) => handleMouseEnter(e, { 
          durationHover: linkPostDurationHover ?? 800,
          effectHover:linkPostEffectHover,
          easingHover:linkPostEasingHover ?? 'linear',
          opacityHover:linkPostOpacityHover ?? 1,
          filterHover:linkPostBlurHover ?? 0,
          startXHover:linkPostTranslateXHover ?? 100,
          startYHover:linkPostTranslateYHover ?? 0,
          scaleHover:linkPostScaleHover ?? 1,
          rotateHover:linkPostRotateHover ?? 0,
          rotateXHover:linkPostRotateXHover ?? 0,
          rotateYHover:linkPostRotateYHover ?? 0,
          skewXHover: linkPostSkewXHover ?? 0,
          skewYHover:linkPostSkewYHover ?? 0,
          scaleTypeHover:linkPostScaleTypeHover ?? 'scale',
        })} // Passa element.duration
        onMouseLeave={(e) => handleMouseLeave(e, { 
          durationHover: linkPostDurationHover ?? 800,
          easingHover:linkPostEasingHover ?? 'linear',
        })} // Passa element.duration
          style={{
            fontSize: 'clamp(' + linkPostFontSizeMobile + 'px,' + linkPostFontSizeTablet + 'vw, ' + linkPostFontSize + 'px)',
            paddingTop: linkPostPadding.top,
            letterSpacing: linkPostLetterSpacing + "px",
            fontStyle: linkPostFontStyle?.fontStyle ?? "normal", // Valore di default
            fontWeight: isBold ? "bold" : linkPostFontWeight ?? "normal",
            textDecoration: linkPostFontStyle?.textDecoration ?? "none", // Valore di default
            lineHeight: linkPostLineHeight,
            fontFamily: linkPostFontFamily,
            paddingBottom: linkPostPadding.bottom,
            paddingLeft: linkPostPadding.left,
            paddingRight: linkPostPadding.right,
            marginTop: linkPostMargin.top,
            marginBottom: linkPostMargin.bottom,
            marginLeft: linkPostMargin.left,
            marginRight: linkPostMargin.right,
            borderTopLeftRadius: linkPostBorderRadius.top,
            borderTopRightRadius: linkPostBorderRadius.right,
            borderBottomRightRadius: linkPostBorderRadius.bottom,
            borderBottomLeftRadius: linkPostBorderRadius.left,
            borderStyle: linkPostBorderStyle,
            borderWidth: `${linkPostBorderSize?.top} ${linkPostBorderSize?.right} ${linkPostBorderSize?.bottom} ${linkPostBorderSize?.left}`,
            borderColor: linkPostBorderColor,
            transform: 'rotate(' + linkPostRotate + 'deg)',
            opacity: linkPostOpacity,
            maxWidth: 'max-content',
            ...(linkPostBoxShadow && {
              boxShadow: `${linkPostBoxShadowHOffset}px ${linkPostBoxShadowVOffset}px ${linkPostBoxShadowBlur}px ${linkPostBoxShadowSpread}px ${linkPostBoxShadowColor}`,
            }),
            backgroundColor: linkPostColor,
            color: linkPostColorIn,
          }}
        >
          {linkPostContent}
        </a>
      </div>
    )
  );
};

export default PostLinkRender;