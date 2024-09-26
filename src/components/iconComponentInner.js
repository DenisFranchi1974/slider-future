import React from "react";
import { useState, useEffect, useRef } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { box } from "@wordpress/icons";

const IconComponentInner = ({ iconDiv, iconIndex }) => {

  // Styles Icon
  const stylesIcon = {
    fontSize: iconDiv.fontSize + "px",
    "--font-size-tablet-icon-inner": iconDiv.fontSizeTablet + "px", 
    "--font-size-mobile-icon-inner": iconDiv.fontSizeMobile + "px",
    color: iconDiv.textColor,
    backgroundColor: iconDiv.backgroundColor,
    "--color-hover-icon-inner": iconDiv.textColorHover,
    margin: `${iconDiv.marginTitle?.top} ${iconDiv.marginTitle?.right} ${iconDiv.marginTitle?.bottom} ${iconDiv.marginTitle?.left}`, // Usa i valori aggi
    "--delay-effect-icon-inner": iconDiv.delayEffect + "s",
    padding: `${iconDiv.paddingTitle?.top} ${iconDiv.paddingTitle?.right} ${iconDiv.paddingTitle?.bottom} ${iconDiv.paddingTitle?.left}`, // Usa i valori aggi
    borderWidth: `${iconDiv.backgroundBorderSize}px` || 0,
    borderColor: iconDiv.backgroundBorderColor || "#000000",
    borderRadius: `${iconDiv.backgroundBorderRadius}px` || 0,
    "--border-color-hover-icon-inner": iconDiv.backgroundBorderColorHover || "#000000",
    "--opacity-hover-icon-inner": iconDiv.opacityHover || 1,
    borderStyle: iconDiv.borderStyle || "none",
    "--border-style-hover-icon-inner": iconDiv.borderStyleHover || "none",
    "--border-width-hover-icon-inner": `${iconDiv.backgroundBorderSizeHover}px` || 0,
    "--translate-hover-icon-inner": iconDiv.translateEffectHover + "px" || "-10",
    "--color-effect-hover-icon-inner": iconDiv.effectHoverColorHover || "#000000",
    boxShadow: `${iconDiv.boxShadowX}px ${iconDiv.boxShadowY}px ${iconDiv.boxShadowBlur}px ${iconDiv.boxShadowSpread}px ${iconDiv.colorShadow}` || "0 0 0 0 #000000",
    position:"relative",
    opacity: iconDiv.opacity,
    transform: `rotate(${iconDiv.rotate}deg)`,
    "--rotate-hover-icon-inner": iconDiv.rotateHover + "deg" || "0",
    '--fa-animation-duration': iconDiv.iconAnimationDuration + 's',
    "--transition-hover-icon-inner": iconDiv.durationEffectHover + "s" || "0.3",
  };

  // Nascondi l'elemento dopo un tot di tempo
  const bannerRef = useRef(null); // Crea un ref per l'elemento
  const [hideEnabled, setHideEnabled] = useState(iconDiv.delayHide); // Stato per abilitare/disabilitare la funzione
  const [hideAfter, setHideAfter] = useState(iconDiv.delaySeconds); // Tempo in secondi per nascondere

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
    setHideEnabled(iconDiv.delayHide);
  }, [iconDiv.delayHide]);
  useEffect(() => {
    setHideAfter(iconDiv.delaySeconds);
  }, [iconDiv.delaySeconds]);

  return (
    <div
      style={{
        "--duration-effect-icon-inner": iconDiv.durationEffect + "s",
        "--delay-effect-icon-inner": iconDiv.delayEffect + "s",
      
        width:
          iconDiv.widthTitle === "custom"
            ? `${iconDiv.widthCustomTitle}%`
            : iconDiv.widthTitle,
        "--interation-icon-inner": iconDiv.interation || "forwards",
        "--delay-hide-seconds-icon-inner": iconDiv.delayTransition + "s",
        textAlign: iconDiv.textAlign,
      }}
      className={
        "content-icon-inner " +
        " " +
        iconDiv.animation +
        iconDiv.playState +
        " " + iconDiv.hideTitle
      }
      data-animation={iconDiv.animation}
      ref={bannerRef}
    >
        <i 
          key={iconIndex}
          className={"slide-icon-inner " + iconDiv.icon + " " + iconDiv.iconAnimation + " " + iconDiv.animationHover} 
          style={stylesIcon}
          data-swiper-parallax-x={iconDiv.parallaxTitle}
          data-swiper-parallax-y={iconDiv.parallaxTitleY}
          data-swiper-parallax-scale={iconDiv.parallaxTitleScale}
          data-swiper-parallax-duration={iconDiv.parallaxTitleDuration}
          data-swiper-parallax-opacity={iconDiv.parallaxTitleOpacity}
        >
        </i>
    </div>
  );
};

export default IconComponentInner;
