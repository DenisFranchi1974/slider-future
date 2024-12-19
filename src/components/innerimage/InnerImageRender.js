import React from "react";
import { useState, useEffect,useRef  } from "react";
import { animationsIn, getAnimationProps} from '../../animate';
import {handleMouseEnter, handleMouseLeave} from '../../animate/animationIn'

const InnerImageRender = ({ imageDiv, imageIndex, onPlay}) => {

    const imageRef = useRef(null); // Ref per il contenitore del testo
  //const barRef = useRef(null); // Ref per il div che vuoi animare
  const [hasPlayed, setHasPlayed] = useState(false); // Stato per tracciare se l'animazione è stata attivata

  // Funzione per attivare l'animazione
  const playAnimation = () => {
    const effectIn = animationsIn[imageDiv.effectIn];
   
    // Converti il valore di loop in un numero
    const loopCount = (typeof imageDiv.loop === 'string' && imageDiv.loop.toLowerCase() === 'true') 
    
    ? 5
    : (parseInt(imageDiv.loop) >= 1 && parseInt(imageDiv.loop) <= 10) 
    ? parseInt(imageDiv.loop) 
    : 1; // Imposta un valore di default se non è in un intervallo valido

    if (effectIn ) {
     // textRef.current.style.opacity = 0; // Reset 
      const animationProps = getAnimationProps({
        duration: imageDiv.duration ?? 800,
        delay: imageDiv.delay ?? 0, 
        endDelay: imageDiv.endDelay ?? 0,
        easing: imageDiv.easing ?? 'linear', 
        direction: imageDiv.direction ?? 'normal',
        loop: loopCount,
        startXFrom: imageDiv.startXFrom ?? 100, 
        startXTo: imageDiv.startXTo ?? 0, 
        startYFrom: imageDiv.startYFrom ?? 0,
        startYTo: imageDiv.startYTo ?? 0,
        opacityFrom: imageDiv.opacityFrom ?? 0,
        opacityTo: imageDiv.opacityTo ?? 1,
        scaleFrom: imageDiv.scaleFrom ?? 0,
        scaleTo: imageDiv.scaleTo ?? 1,
        rotateFrom: imageDiv.rotateFrom ?? 0,
        rotateTo: imageDiv.rotateTo ?? 0,
        rotateXFrom: imageDiv.rotateXFrom ?? 0, 
        rotateXTo: imageDiv.rotateXTo ?? 0,
        rotateYFrom: imageDiv.rotateYFrom ?? 0,
        rotateYTo: imageDiv.rotateYTo ?? 0,
        skewXFrom: imageDiv.skewXFrom ?? 0,
        skewXTo: imageDiv.skewXTo ?? 0,
        skewYFrom: imageDiv.skewYFrom ?? 0,
        skewYTo: imageDiv.skewYTo ?? 0,
        filterFrom: imageDiv.filterFrom ?? 0,
        filterTo: imageDiv.filterTo ?? 0,
        scaleType: imageDiv.scaleType ?? 'scale',
      });
  
      setTimeout(() => {
        // Animazione del testo
        effectIn(imageRef.current, animationProps);
      }, imageDiv.delay);
      
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
  }, [imageDiv.effectIn, imageDiv.easing, imageDiv.direction,imageDiv.text]);


    // Definizione della funzione getImageStyleBlock
  const getImageStyleBlock = (imageDiv) => {
    if (!imageDiv) return {}; // Aggiungi un controllo per imageDiv
    let style = {
      borderStyle: imageDiv.borderStyleImage || "none",
      borderColor: imageDiv.backgroundBorderColorImage || "#000000",
      ...(imageDiv.enableBoxShadowImage && {
        boxShadow: `${imageDiv.boxShadowXImage}px ${imageDiv.boxShadowYImage}px ${imageDiv.boxShadowBlurImage}px ${imageDiv.boxShadowSpreadImage}px ${imageDiv.colorShadowImage}`,
      }),
      borderWidth: `${imageDiv.backgroundBorderSizeImage?.top} ${imageDiv.backgroundBorderSizeImage?.right} ${imageDiv.backgroundBorderSizeImage?.bottom} ${imageDiv.backgroundBorderSizeImage?.left}`,
      borderRadius: `${imageDiv.backgroundBorderRadiusImage?.top} ${imageDiv.backgroundBorderRadiusImage?.right} ${imageDiv.backgroundBorderRadiusImage?.bottom} ${imageDiv.backgroundBorderRadiusImage?.left}`,
      padding: `${imageDiv.paddingImage?.top} ${imageDiv.paddingImage?.right} ${imageDiv.paddingImage?.bottom} ${imageDiv.paddingImage?.left}`,
      backgroundColor: imageDiv.backgroundColorImage,
      margin: `${imageDiv.marginImage?.top} ${imageDiv.marginImage?.right} ${imageDiv.marginImage?.bottom} ${imageDiv.marginImage?.left}`,
      "--spike-width-inner": imageDiv.spikeLeftWidth + "%" || "0",
      "--spike-width-right-inner": imageDiv.spikeRightWidth + "%" || "0",
    };

    if (imageDiv.widthImage === "relative") {
      style.width = `${imageDiv.customWidthImage}%`;
    } else if (imageDiv.widthImage === "fixed") {
      style.width = `${imageDiv.customWidthImagePx}px`;
    }

    if (imageDiv.heightImage === "relative") {
      style.height = `${imageDiv.customHeightImage}%`;
    } else if (imageDiv.heightImage === "fixed") {
      style.height = `${imageDiv.customHeightImagePx}px`;
    }

    if (imageDiv.widthImage !== "auto" || imageDiv.heightImage !== "auto") {
      style.objectFit = imageDiv.fit;
    }

    return style;
  };
   
    return (
        <div 
        style={{
          transform: `perspective(${imageDiv.perspectiveImage}px) rotateX(${imageDiv.rotateImageX}deg) rotateY(${imageDiv.rotateImageY}deg) rotate(${imageDiv.rotateImage}deg)`,
          opacity: imageDiv.opacityImage,
          width: imageDiv.widthImageContent, 
          zIndex: imageDiv.zIndexImage,
          position: imageDiv.positionInnerImage,
          top: imageDiv.verticalPositionInnerImage,
          left: imageDiv.horizontalPositionInnerImage,
          textAlign: imageDiv.imageAlign,
          '--background-color-image-inner-hover': imageDiv.backgroundColorImageHover,
        }}
        className={
          "content-img-inner " + imageDiv.imageFilter +
          " " + imageDiv.hideImage
        }
      >
        <img
         ref={imageRef}
         onMouseEnter={(e) => handleMouseEnter(e, { 
           durationHover: imageDiv.durationHover ?? 800,
           effectHover:imageDiv.effectHover,
           easingHover:imageDiv.easingHover ?? 'linear',
           opacityHover:imageDiv.opacityHover ?? 1,
           filterHover:imageDiv.filterHover ?? 0,
           startXHover:imageDiv.startXHover ?? 100,
           startYHover:imageDiv.startYHover ?? 0,
           scaleHover:imageDiv.scaleHover ?? 1,
           rotateHover:imageDiv.rotateHover ?? 0,
           rotateXHover:imageDiv.rotateXHover ?? 0,
           rotateYHover:imageDiv.rotateYHover ?? 0,
           skewXHover:imageDiv.skewXHover ?? 0,
           skewYHover:imageDiv.skewYHover ?? 0,
           scaleTypeHover:imageDiv.scaleTypeHover ?? 'scale',
         })} // Passa element.duration
         onMouseLeave={(e) => handleMouseLeave(e, { 
           durationHover: imageDiv.durationHover ?? 800,
           easingHover:imageDiv.easingHover ?? 'linear',
         })} // Passa element.duration
          key={imageIndex}
          src={imageDiv.imageUrl}
          alt={imageDiv.alt}
          style={getImageStyleBlock(imageDiv)}
          className={`img-inner image-with-mask ${imageDiv.blobMask}  ${imageDiv.spikeMask} ${imageDiv.spikeMaskRight}`}
        />
      </div>
    )

};

export default InnerImageRender;