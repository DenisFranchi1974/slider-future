import React from "react";
import { useState, useEffect, useRef } from "react";

const ImageComponent = ({ element, index }) => {
  const getImageStyle = () => {
    let style = {
      borderStyle: element.borderStyleImage || "none",
      borderColor: element.backgroundBorderColorImage || "#000000",
      borderWidth: element.backgroundBorderSizeImage + "px",
      borderRadius: element.backgroundBorderRadiusImage + "px",
      padding: element.paddingImage + "px",
      backgroundColor: element.backgroundColorImage,
      "--box-shadow-x-image": element.boxShadowXImage + "px" || "0",
      "--box-shadow-y-image": element.boxShadowYImage + "px" || "0",
      "--box-shadow-blur-image": element.boxShadowBlurImage + "px" || "0",
      "--box-shadow-color-image": element.colorShadowImage || "#000000",
      "--box-shadow-spread-image": element.boxShadowSpreadImage + "px" || "0",
      "--spike-width": element.spikeLeftWidth + "%" || "0",
      "--spike-width-right": element.spikeRightWidth + "%" || "0",
      "--duration-effect-image": element.durationEffectImage + "s",
      "--color-hover-image": element.imageColorHover,
      "--border-width-hover-image": element.backgroundBorderSizeImageHover + "px",
      "--border-color-hover-image":
        element.backgroundBorderColorHoverImage || "#000000",
      "--opacity-hover-image": element.opacityHoverImage || 1,
      "--border-style-hover-image": element.borderStyleHoverImage || "none",
      "--transition-hover-image":
        element.durationEffectHoverImage + "s" || "0.3",
      "--translate-hover-image":
        element.translateEffectHoverImage + "px" || "-10",
      "--color-effect-hover-image":
        element.effectHoverColorHoverImage || "#000000",
      margin: `${element.marginImage?.top} ${element.marginImage?.right} ${element.marginImage?.bottom} ${element.marginImage?.left}`, // Usa i valori aggi
      "--interation-image": element.interationImage || "forwards",
      position:"relative",
      "--delay-effect-image": element.delayEffectImage + "s",
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

   // Nascondi l'elemento dopo un tot di tempo
   const bannerRef = useRef(null); // Crea un ref per l'elemento
   const [hideEnabled, setHideEnabled] = useState(element.delayHide); // Stato per abilitare/disabilitare la funzione
   const [hideAfter, setHideAfter] = useState(element.delaySeconds); // Tempo in secondi per nascondere
 
   useEffect(() => {
     // Funzione per nascondere l'elemento
     const hideBanner = () => {
       if (bannerRef.current) {
         bannerRef.current.classList.add('hidden'); // Aggiunge la classe 'hidden'
       }
     };
 
     // Se la funzionalità è abilitata, imposta il timeout
     if (hideEnabled) {
       const timeout = setTimeout(hideBanner, hideAfter * 1000); // Nascondi dopo `hideAfter` secondi
       return () => clearTimeout(timeout); // Pulisci il timeout quando il componente viene smontato o `hideEnabled` cambia
     } else {
       // Se disabilitato, rimuovi la classe 'hidden'
       if (bannerRef.current) {
         bannerRef.current.classList.remove('hidden');
       }
     }
   }, [hideEnabled, hideAfter]); // Rerun l'effetto quando `hideEnabled` o `hideAfter` cambiano
 
   // Forza un aggiornamento del componente quando `textDiv.delayHide` cambia
   useEffect(() => {
     setHideEnabled(element.delayHide);
   }, [element.delayHide]);
   useEffect(() => {
     setHideAfter(element.delaySeconds);
   }, [element.delaySeconds]);


  return (
    <div
      style={{
        transform: `rotate(${element.rotateImage}deg)`,
        opacity: element.opacityImage,
        "--duration-effect-moving-image":
          element.durationEffectImageMoving + "s",
        "--translate-effect-moving-image":
          element.translateEffectImageMoving + "px",
        "--rotate-hover-image": element.rotateHoverImage + "deg" || "0",
        "--transition-hover-image":
          element.durationEffectHoverImage + "s" || "0.3",
        width: element.widthImageContent,
        "--delay-hide-seconds-image": element.delayTransition + "s",
      }}
      className={
        "content-img-first " +
        element.animationImageMoving +
        " " + element.hideImage
      }
      ref={bannerRef}
    >
      <img
        key={index}
        src={element.url}
        alt={element.alt}
        style={getImageStyle()}
        className={`image-first-slide image-with-mask ${element.blobMask} ${element.spikeMask} ${element.spikeMaskRight} ${element.animationImage}${element.playStateImage} ${element.imageFilter} ${element.animationHoverImage}`}
        data-swiper-parallax-x={element.parallaxImage}
        data-swiper-parallax-y={element.parallaxImageY}
        data-swiper-parallax-scale={element.parallaxImageScale}
        data-swiper-parallax-duration={element.parallaxImageDuration}
        data-swiper-parallax-opacity={element.parallaxImageOpacity}
      />
    </div>
  );
};

export default ImageComponent;
