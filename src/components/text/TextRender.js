import React, { useEffect, useRef, useState } from "react";
import { animationsIn, animationsOut} from '../../animate';
import { getAnimationProps } from '../../animate';
import { rotateIn } from "../../animate/animationIn";
import { skeletonClasses } from "@mui/material";
import { textColor } from "@wordpress/icons";


const TextRender = ({ element, index,   onPlay  }) => {


  const textRef = useRef(null); // Ref per il contenitore del testo
  
  const [hasPlayed, setHasPlayed] = useState(false); // Stato per tracciare se l'animazione è stata attivata


  // Funzione per attivare l'animazione
  const playAnimation = () => {
    const effectIn = animationsIn[element.effectIn];

    // Converti il valore di loop in un numero
    const loopCount = (typeof element.loop === 'string' && element.loop.toLowerCase() === 'true') 
    ? 5
    : (parseInt(element.loop) >= 1 && parseInt(element.loop) <= 10) 
    ? parseInt(element.loop) 
    : 1; // Imposta un valore di default se non è in un intervallo valido

    if (effectIn ) {
   
     // textRef.current.style.opacity = 0; // Reset
      const animationProps = getAnimationProps({
        duration: element.duration,
        delayIn: element.delayIn, // Passa delayIn come delay
        endDelay: element.endDelay,
        easing: element.easing,
        direction: element.direction,
        loop: loopCount,
        startXFrom: element.startXFrom, 
        startXTo: element.startXTo, 
        startYFrom: element.startYFrom,
        startYTo: element.startYTo,
        stagger: element.stagger,
        textSplitEffect: element.textSplitEffect,
        opacityInFrom: element.opacityInFrom,
        opacityInTo: element.opacityInTo,
        scaleFrom: element.scaleFrom,
        scaleTo: element.scaleTo,
        rotateInFrom: element.rotateInFrom,
        rotateInTo: element.rotateInTo,
        rotateInXFrom: element.rotateInXFrom, 
        rotateInXTo: element.rotateInXTo,
        rotateInYFrom: element.rotateInYFrom,
        rotateInYTo: element.rotateInYTo,
        skewXFrom: element.skewXFrom,
        skewXTo: element.skewXTo,
        skewYFrom: element.skewYFrom,
        skewYTo: element.skewYTo,
        directionBlock: element.directionBlock,
        filterInFrom: element.filterInFrom,
        filterInTo: element.filterInTo,
        colorBlockEffectIn: element.colorBlockEffectIn,
      });
  
        setTimeout(() => {
          effectIn(textRef.current, animationProps);
        }, element.delayIn);
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
    if (textRef.current && !hasPlayed) {
      textRef.current.style.opacity = 1;
    }
  }, [hasPlayed]);

  

  // Aggiungi un useEffect per osservare i cambiamenti di effectIn ed easing
  useEffect(() => {
    playAnimation();
  }, [element.effectIn, element.easing, element.direction,element.text]);


  const isBold = element.fontStyle?.fontWeight === "bold";
  // Styles Title
  const stylesTitle = {
    fontSize: element.fontSize + "px",
    "--font-size-tablet": element.fontSizeTablet + "px", 
    "--font-size-mobile": element.fontSizeMobile + "px",
    color: element.textColor,
    "--color-hover": element.textColorHover,
    textAlign: element.textAlign,
    letterSpacing: element.letterSpacing + "px",
    fontStyle: element.fontStyle?.fontStyle || "normal", // Valore di default
    fontWeight: isBold ? "bold" : element.fontWeight || "normal",
    textDecoration: element.fontStyle?.textDecoration || "none", // Valore di default
    lineHeight: element.lineHeight,
    fontFamily: element.fontFamily,
    margin: `${element.marginTitle?.top} ${element.marginTitle?.right} ${element.marginTitle?.bottom} ${element.marginTitle?.left}`, // Usa i valori aggi
    padding: `${element.paddingTitle?.top} ${element.paddingTitle?.right} ${element.paddingTitle?.bottom} ${element.paddingTitle?.left}`, // Usa i valori aggi
    borderWidth: `${element.backgroundBorderSize}px` || 0,
    borderColor: element.backgroundBorderColor || "#000000",
    borderRadius: `${element.backgroundBorderRadius}px` || 0,
    "--border-color-hover": element.backgroundBorderColorHover || "#000000",
    "--opacity-hover": element.opacityHover || 1,
    borderStyle: element.borderStyle || "none",
    "--border-style-hover": element.borderStyleHover || "none",
    "--border-width-hover": `${element.backgroundBorderSizeHover}px` || 0,
    ...(element.enableTextShadow && {
    textShadow: `${element.textShadowX}px ${element.textShadowY}px ${element.textShadowBlur}px ${element.colorTextShadow}`,
    }),
    ...(element.enableBoxShadow && {
    boxShadow: `${element.boxShadowX}px ${element.boxShadowY}px ${element.boxShadowBlur}px ${element.boxShadowSpread}px ${element.colorBoxShadow}`,
    }),
    ...(element.enableStroke && {
    '-webkit-text-stroke-width': element.stroke + "px",
    '-webkit-text-stroke-color': element.colorStroke,
    }),
    mixBlendMode: element.blendMode,
    writingMode: element.textWriteMode || "initial",
    textOrientation: element.textOrientation || "initial",
    position:"relative",
    transform: `rotate(${element.rotate}deg)`,
    opacity: element.opacity,
    zIndex: element.zIndexTitle,
    
  };
  const Tag = element.elementTitle || "h3";

  return (
    <>
    <div
      style={{
        width:
          element.widthTitle === "custom"
            ? `${element.widthCustomTitle}%`
            : element.widthTitle,
            //opacity:0
      }}
      className={"content-title-slide"}
    
    >
      
      <Tag
        key={index}
        className={"title-slide"}
        style={stylesTitle}
        data-font-family={element.fontFamily}
        ref={textRef}
      >
        {element.text}
      </Tag>

    </div>
    </>
  );
};

export default TextRender;