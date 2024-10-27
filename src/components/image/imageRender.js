import React from "react";
import { useState, useEffect, useRef } from "react";
import { animationsIn, getAnimationProps} from '../../animate';
import {handleMouseEnter, handleMouseLeave, animateBar} from '../../animate/animationIn'

const ImageRender = ({ element, index, onPlay  }) => {

  const imageRef = useRef(null); // Ref per il contenitore del testo
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
        filterInFrom: element.filterInFrom,
        filterInTo: element.filterInTo,
        scaleType: element.scaleType,
      });
  
      setTimeout(() => {
        // Animazione del testo
        effectIn(imageRef.current, animationProps);
      
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
    if (imageRef.current && !hasPlayed) {
      imageRef.current.style.opacity = 1;
    }
  }, [hasPlayed]);

  // Aggiungi un useEffect per osservare i cambiamenti di effectIn ed easing
  useEffect(() => {
    playAnimation();
    {/*if (barRef.current) {
      animateBar(barRef); // Chiama animateBar passando barRef
    }*/}
  }, [element.effectIn, element.easing, element.direction,element.text]);

  const getImageStyle = () => {
    let style = {
      borderStyle: element.borderStyleImage || "none",
      borderColor: element.backgroundBorderColorImage || "#000000",
      borderWidth: element.backgroundBorderSizeImage + "px",
      borderRadius: element.backgroundBorderRadiusImage + "px",
      padding: element.paddingImage + "px",
      backgroundColor: element.backgroundColorImage,
      ...(element.enableBoxShadowImage && {
        boxShadow: `${element.boxShadowXImage}px ${element.boxShadowYImage}px ${element.boxShadowBlurImage}px ${element.boxShadowSpreadImage}px ${element.colorShadowImage}`,
      }),
      "--spike-width": element.spikeLeftWidth + "%" || "0",
      "--spike-width-right": element.spikeRightWidth + "%" || "0",
      margin: `${element.marginImage?.top} ${element.marginImage?.right} ${element.marginImage?.bottom} ${element.marginImage?.left}`, // Usa i valori aggi
      position:"relative",
    };

    if (element.widthImage === "relative") {
      style.width = `${element.customWidthImage}%`;
    } else if (element.widthImage === "fixed") {
      style.width = `${element.customWidthImagePx}px`;
    }

    if (element.heightImage === "relative") {
      style.height = `${element.customHeightImage}%`;
    } else if (element.heightImage === "fixed") {
      style.height = `${element.customHeightImagePx}px`;
    }

    // Applica object-fit solo se width o height sono relative o fixed
    if (element.widthImage !== "auto" || element.heightImage !== "auto") {
      style.objectFit = element.fit;
    }

    return style;
  }; 

  return (
    <div
      style={{
        transform: `rotate(${element.rotateImage}deg)`,
        opacity: element.opacityImage,
        width: element.widthImageContent,
        zIndex: element.zIndexImage,
        textAlign: element.imageAlign,
      }}
      className={
        "content-img-first " +
        " " + element.hideImage
      }
    >
      <img
       ref={imageRef}
       onMouseEnter={(e) => handleMouseEnter(e, { 
         durationHover: element.durationHover,
         backgroundColorImageHover:element.backgroundColorImageHover,
         effectHover:element.effectHover,
         easingHover:element.easingHover,
         opacityHover:element.opacityHover,
         filterHover:element.filterHover,
         startXHover:element.startXHover,
         startYHover:element.startYHover,
         scaleHover:element.scaleHover,
         rotateHover:element.rotateHover,
         rotateXHover:element.rotateXHover,
         rotateYHover:element.rotateYHover,
         skewXHover:element.skewXHover,
         skewYHover:element.skewYHover,
         scaleTypeHover:element.scaleTypeHover,
       })} // Passa element.duration
       onMouseLeave={(e) => handleMouseLeave(e, { 
         durationHover: element.durationHover,
         backgroundColorImage:element.backgroundColorImage,
         easingHover:element.easingHover,
       })} // Passa element.duration
        key={index}
        src={element.url}
        alt={element.alt}
        style={getImageStyle()}
        className={`image-first-slide image-with-mask ${element.blobMask} ${element.spikeMask} ${element.spikeMaskRight}  ${element.imageFilter} `}
      />
    </div>
  );
};

export default ImageRender;
