import React from "react";
import { useState, useEffect, useRef } from "react";
import { animationsIn, getAnimationProps} from '../../animate';
import {handleMouseEnter, handleMouseLeave} from '../../animate/animationIn'
import './editor-image.scss';

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
        filterFrom: element.filterFrom ?? 0,
        filterTo: element.filterTo ?? 0,
        scaleType: element.scaleType ?? 'scale',
      });
  
      setTimeout(() => {
        // Animazione del testo
        effectIn(imageRef.current, animationProps);
      
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
    if (imageRef.current && !hasPlayed) {
      imageRef.current.style.opacity = 1;
    }
  }, [hasPlayed]);

  // Aggiungi un useEffect per osservare i cambiamenti di effectIn ed easing
  useEffect(() => {
    playAnimation();
  }, [element.effectIn, element.easing, element.direction,element.text]);

  const getImageStyle = () => {
    let style = {
      borderStyle: element.borderStyleImage || "none",
      borderColor: element.backgroundBorderColorImage || "#000000",
      borderWidth: `${element.backgroundBorderSizeImage?.top} ${element.backgroundBorderSizeImage?.right} ${element.backgroundBorderSizeImage?.bottom} ${element.backgroundBorderSizeImage?.left}`,
      borderRadius: `${element.backgroundBorderRadiusImage?.top} ${element.backgroundBorderRadiusImage?.right} ${element.backgroundBorderRadiusImage?.bottom} ${element.backgroundBorderRadiusImage?.left}`,
      padding: `${element.paddingImage?.top} ${element.paddingImage?.right} ${element.paddingImage?.bottom} ${element.paddingImage?.left}`,
      backgroundColor: element.backgroundColorImage,
      ...(element.enableBoxShadowImage && {
        boxShadow: `${element.boxShadowXImage}px ${element.boxShadowYImage}px ${element.boxShadowBlurImage}px ${element.boxShadowSpreadImage}px ${element.colorShadowImage}`,
      }),
      "--spike-width": element.spikeLeftWidth + "%" || "0",
      "--spike-width-right": element.spikeRightWidth + "%" || "0",
      margin: `${element.marginImage?.top} ${element.marginImage?.right} ${element.marginImage?.bottom} ${element.marginImage?.left}`,
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
        '--background-color-image-hover': element.backgroundColorImageHover,
      }}
      className={
        "content-img-first " + element.imageFilter +
        " " + element.hideImage
      }
    >
      <img
       ref={imageRef}
       onMouseEnter={(e) => handleMouseEnter(e, { 
         durationHover: element.durationHover ?? 800,
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
         easingHover:element.easingHover ?? 'linear',
       })} // Passa element.duration
        key={index}
        src={element.url}
        alt={element.alt}
        style={getImageStyle()}
        className={`image-first-slide image-with-mask ${element.blobMask} ${element.spikeMask} ${element.spikeMaskRight}`}
      />
    </div>
  );
};

export default ImageRender;
