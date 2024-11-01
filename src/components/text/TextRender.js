import React, { useEffect, useRef, useState } from "react";
import { animationsIn, getAnimationProps} from '../../animate';
import {handleMouseEnter, handleMouseLeave, animateBar} from '../../animate/animationIn'

const TextRender = ({ element, index, onPlay  }) => {

  const textRef = useRef(null); // Ref per il contenitore del testo
  //const barRef = useRef(null); // Ref per il div che vuoi animare
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
        duration: element.duration ?? 800,
        delay: element.delay ?? 0, 
        endDelay: element.endDelay ?? 0,
        easing: element.easing ?? 'linear', 
        direction: element.direction ?? 'normal',
        loop: loopCount,
        startXFrom: element.startXFrom ?? 100, 
        startXTo: element.startXTo ?? 0, 
        startYFrom: element.startYFrom ?? 0,
        startYTo: element.startYTo ?? 0,
        stagger: element.stagger ?? 80,
        textSplitEffect: element.textSplitEffect,
        opacityFrom: element.opacityFrom ?? 0,
        opacityTo: element.opacityTo ?? 1,
        scaleFrom: element.scaleFrom ?? 0,
        scaleTo: element.scaleTo ?? 1,
        rotateFrom: element.rotateFrom ?? 0,
        rotateTo: element.rotateTo ?? 0,
        rotateXFrom: element.rotateXFrom ?? 0, 
        rotateXTo: element.rotateXTo ?? 0,
        rotateYFrom: element.rotateYFrom ?? 0,
        rotateYTo: element.rotateYTo ?? 0,
        skewXFrom: element.skewXFrom ?? 0,
        skewXTo: element.skewXTo ?? 0,
        skewYFrom: element.skewYFrom ?? 0,
        skewYTo: element.skewYTo ?? 0,
        directionBlock: element.directionBlock ?? 'right',
        filterFrom: element.filterFrom ?? 0,
        filterTo: element.filterTo ?? 0,
        colorBlockEffect: element.colorBlockEffect,
        scaleType: element.scaleType ?? 'scale',
      });
  
      setTimeout(() => {
        // Animazione del testo
        effectIn(textRef.current, animationProps);
      
        // Animazione del bar con valori dinamici
        {/*if (barRef.current) {
          animateBar(barRef, {
            duration: element.barDuration, // Assicurati che questo valore sia definito
            heightFrom: element.barHeightFrom || '5px', // Altri valori dinamici se necessario
            heightTo: element.barHeightTo || '15px',
            easing: element.barEasing || 'easeInQuint', // Esempio di easing dinamico
            loop: loopCount, // O impostalo su un valore dinamico
          });
        }*/}
      }, element.delay);
      
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
    {/*if (barRef.current) {
      animateBar(barRef); // Chiama animateBar passando barRef
    }*/}
  }, [element.effectIn, element.easing, element.direction,element.text]);

  const isBold = element.fontStyle?.fontWeight === "bold";
  // Styles Title
  const stylesTitle = {
    fontSize: element.fontSize + "px",
    "--font-size-tablet": element.fontSizeTablet + "px", 
    "--font-size-mobile": element.fontSizeMobile + "px",
    color: element.textColor,
    textAlign: element.textAlign,
    letterSpacing: element.letterSpacing + "px",
    fontStyle: element.fontStyle?.fontStyle ?? "normal", // Valore di default
    fontWeight: isBold ? "bold" : element.fontWeight ?? "normal",
    textDecoration: element.fontStyle?.textDecoration ?? "none", // Valore di default
    lineHeight: element.lineHeight,
    fontFamily: element.fontFamily,
    margin: `${element.marginTitle?.top} ${element.marginTitle?.right} ${element.marginTitle?.bottom} ${element.marginTitle?.left}`, // Usa i valori aggi
    padding: `${element.paddingTitle?.top} ${element.paddingTitle?.right} ${element.paddingTitle?.bottom} ${element.paddingTitle?.left}`, // Usa i valori aggi
    borderWidth: `${element.backgroundBorderSize}px` ?? 0,
    borderColor: element.backgroundBorderColor || "#000000",
    borderRadius: `${element.backgroundBorderRadius}px` ?? 0,
    borderStyle: element.borderStyle ?? "none",
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
  
    zIndex: element.zIndexTitle,
    
  };
  const Tag = element.elementTitle || "h3";

  return (
    <div
      style={{
        opacity: element.opacity,
        width:
          element.widthTitle === "custom"
            ? `${element.widthCustomTitle}%`
            : element.widthTitle,
      }}
      className={"content-title-slide " + element.hideTitle }
    >
      <Tag
        key={index}
        className={"title-slide"}
        style={stylesTitle}
        data-font-family={element.fontFamily}
        ref={textRef}
        onMouseEnter={(e) => handleMouseEnter(e, { 
          durationHover: element.durationHover ?? 800,
          textColorHover:element.textColorHover,
          effectHover:element.effectHover,
          easingHover:element.easingHover ?? 'linear',
          opacityHover:element.opacityHover ?? 1,
          filterHover:element.filterHover ?? 0,
          startXHover:element.startXHover ?? 100,
          startYHover:element.startYHover ?? 0,
          scaleHover:element.scaleHover ?? 1,
          rotateHover:element.rotateHover ?? 0,
          rotateXHover:element.rotateXHover ?? 0,
          rotateYHover:element.rotateYHover ?? 0,
          skewXHover:element.skewXHover ?? 0,
          skewYHover:element.skewYHover ?? 0,
          scaleTypeHover:element.scaleTypeHover ?? 'scale',
        })} // Passa element.duration
        onMouseLeave={(e) => handleMouseLeave(e, { 
          durationHover: element.durationHover ?? 800,
          textColor:element.textColor,
          easingHover:element.easingHover ?? 'linear',

        })} // Passa element.duration
      >
        {element.text}
      </Tag>
      
     {/* <div ref={barRef} style={{ width: '100%', height: '0px', backgroundColor: 'black' }}></div>*/}
    </div>
  );
};

export default TextRender;