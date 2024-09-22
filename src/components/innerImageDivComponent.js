import React from "react";
import { useState, useEffect,useRef  } from "react";

const InnerImageDivComponent = ({ imageDiv, imageIndex}) => {

    // Definizione della funzione getImageStyleBlock
  const getImageStyleBlock = (imageDiv) => {
    if (!imageDiv) return {}; // Aggiungi un controllo per imageDiv
    let style = {
      maxWidth: "100%",
      minWidth: "0",
      maxHeight: "100%",
      minHeight: "0",
      borderStyle: imageDiv.borderStyleImage || "none",
      borderColor: imageDiv.backgroundBorderColorImage || "#000000",
      boxShadow:
        `${imageDiv.boxShadowXImage}px ${imageDiv.boxShadowYImage}px ${imageDiv.boxShadowBlurImage}px ${imageDiv.boxShadowSpreadImage}px ${imageDiv.colorShadowImage}` ||
        "0 0 0 0 #000000",
      borderWidth: imageDiv.backgroundBorderSizeImage + "px",
      borderRadius: imageDiv.backgroundBorderRadiusImage + "px",
      padding: imageDiv.paddingImage + "px",
      backgroundColor: imageDiv.backgroundColorImage,
      margin: `${imageDiv.marginImage?.top} ${imageDiv.marginImage?.right} ${imageDiv.marginImage?.bottom} ${imageDiv.marginImage?.left}`,
      "--interation-image-inner": imageDiv.interationImage || "forwards",
      "--spike-width-inner": imageDiv.spikeLeftWidth + "%" || "0",
      "--spike-width-right-inner": imageDiv.spikeRightWidth + "%" || "0",
      "--duration-effect-image-inner": imageDiv.durationEffectImage + "s",
      "--color-hover-image-inner": imageDiv.imageColorHover,
      "--border-color-hover-image-inner":
        imageDiv.backgroundBorderColorHoverImage || "#000000",
      "--opacity-hover-image-inner": imageDiv.opacityHoverImage || 1,
      "--border-style-hover-image-inner":
        imageDiv.borderStyleHoverImage || "none",
      "--border-width-hover-image-inner": imageDiv.backgroundBorderSizeImageHover + "px",
      "--transition-hover-image-inner":
        imageDiv.durationEffectHoverImage + "s" || "0.3",
      "--translate-hover-image-inner":
        imageDiv.translateEffectHoverImage + "px" || "-10",
      "--color-effect-hover-image-inner":
        imageDiv.effectHoverColorHoverImage || "#000000",
        "--delay-effect-image-inner": imageDiv.delayEffectImage + "s",
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

  if (!imageDiv) return null; // Aggiungi un controllo per imageDiv


                // Nascondi l'elemento dopo un tot di tempo
                const bannerRef = useRef(null); // Crea un ref per l'elemento
                const [hideEnabled, setHideEnabled] = useState(imageDiv.delayHide); // Stato per abilitare/disabilitare la funzione
                const [hideAfter, setHideAfter] = useState(imageDiv.delaySeconds); // Tempo in secondi per nascondere
              
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
                  setHideEnabled(imageDiv.delayHide);
                }, [imageDiv.delayHide]);
                useEffect(() => {
                  setHideAfter(imageDiv.delaySeconds); 
                }, [imageDiv.delaySeconds]);


    return (
        <div 
        style={{
          transform: `rotate(${imageDiv.rotateImage}deg)`,
          opacity: imageDiv.opacityImage,
          "--duration-effect-moving-image-inner":
            imageDiv.durationEffectImageMoving + "s",
          "--translate-effect-moving-image-inner":
            imageDiv.translateEffectImageMoving + "px",
          "--rotate-hover-image-inner":
            imageDiv.rotateHoverImage + "deg" || "0",
          "--transition-hover-image-inner":
            imageDiv.durationEffectHoverImage + "s" || "0.3",
          width: imageDiv.widthImageContent, 
          zIndex: imageDiv.zIndexImage,
          position: imageDiv.positionInnerImage,
          top: imageDiv.verticalPositionInnerImage,
          left: imageDiv.horizontalPositionInnerImage,
          "--delay-hide-seconds-image-block": imageDiv.delayTransition + "s",
        }}
        className={
          "content-img-inner " +
          imageDiv.animationImageMoving +
          " " + imageDiv.hideImage
        }
        ref={bannerRef}
      >
        <img
          key={imageIndex}
          src={imageDiv.imageUrl}
          alt={imageDiv.alt}
          style={getImageStyleBlock(imageDiv)}
          className={`img-inner image-with-mask ${imageDiv.blobMask}  ${imageDiv.spikeMask} ${imageDiv.spikeMaskRight} ${imageDiv.animationImage}${imageDiv.playStateImage} ${imageDiv.imageFilter} ${imageDiv.animationHoverImage}`}
          data-swiper-parallax-x={imageDiv.parallaxImage}
          data-swiper-parallax-y={imageDiv.parallaxImageY}
          data-swiper-parallax-scale={imageDiv.parallaxImageScale}
          data-swiper-parallax-duration={imageDiv.parallaxImageDuration}
          data-swiper-parallax-opacity={imageDiv.parallaxImageOpacity}
        />
      </div>
    )

};

export default InnerImageDivComponent;