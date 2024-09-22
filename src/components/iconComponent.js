import React from "react";
import { useState, useEffect, useRef } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { box } from "@wordpress/icons";

const IconComponent = ({ element, index }) => {

  // Styles Icon
  const stylesIcon = {
    fontSize: element.fontSize + "px",
    "--font-size-tablet-icon": element.fontSizeTablet + "px", 
    "--font-size-mobile-icon": element.fontSizeMobile + "px",
    color: element.textColor,
    backgroundColor: element.backgroundColor,
    "--color-hover-icon": element.textColorHover,
    margin: `${element.marginTitle?.top} ${element.marginTitle?.right} ${element.marginTitle?.bottom} ${element.marginTitle?.left}`, // Usa i valori aggi
    "--delay-effect-icon": element.delayEffect + "s",
    padding: `${element.paddingTitle?.top} ${element.paddingTitle?.right} ${element.paddingTitle?.bottom} ${element.paddingTitle?.left}`, // Usa i valori aggi
    borderWidth: `${element.backgroundBorderSize}px` || 0,
    borderColor: element.backgroundBorderColor || "#000000",
    borderRadius: `${element.backgroundBorderRadius}px` || 0,
    "--border-color-hover-icon": element.backgroundBorderColorHover || "#000000",
    "--opacity-hover-icon": element.opacityHover || 1,
    borderStyle: element.borderStyle || "none",
    "--border-style-hover-icon": element.borderStyleHover || "none",
    "--border-width-hover-icon": `${element.backgroundBorderSizeHover}px` || 0,
    "--translate-hover-icon": element.translateEffectHover + "px" || "-10",
    "--color-effect-hover-icon": element.effectHoverColorHover || "#000000",
    boxShadow: `${element.boxShadowX}px ${element.boxShadowY}px ${element.boxShadowBlur}px ${element.boxShadowSpread}px ${element.colorShadow}` || "0 0 0 0 #000000",
    position:"relative",
    opacity: element.opacity,
    transform: `rotate(${element.rotate}deg)`,
    "--rotate-hover-icon": element.rotateHover + "deg" || "0",
    '--fa-animation-duration': element.iconAnimationDuration + 's',
    "--transition-hover-icon": element.durationEffectHover + "s" || "0.3",
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
        "--duration-effect-icon": element.durationEffect + "s",
        "--delay-effect-icon": element.delayEffect + "s",
      
        width:
          element.widthTitle === "custom"
            ? `${element.widthCustomTitle}%`
            : element.widthTitle,
        "--interation-icon": element.interation || "forwards",
        "--delay-hide-seconds-icon": element.delayTransition + "s",
        textAlign: element.textAlign,
      }}
      className={
        "content-icon " +
        " " +
        element.animation +
        element.playState +
        " " + element.hideTitle
      }
      data-animation={element.animation}
      ref={bannerRef}
    >
        <i 
          key={index}
          className={"slide-icon " + element.icon + " " + element.iconAnimation + " " + element.animationHover} 
          style={stylesIcon}
          data-swiper-parallax-x={element.parallaxTitle}
          data-swiper-parallax-y={element.parallaxTitleY}
          data-swiper-parallax-scale={element.parallaxTitleScale}
          data-swiper-parallax-duration={element.parallaxTitleDuration}
          data-swiper-parallax-opacity={element.parallaxTitleOpacity}
        >
        </i>
    </div>
  );
};

export default IconComponent;
