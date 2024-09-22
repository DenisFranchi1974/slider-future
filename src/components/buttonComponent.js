import { button } from "@wordpress/icons";
import React from "react";
import { useState, useEffect, useRef } from "react";
// index.js o App.js
import '@fortawesome/fontawesome-free/css/all.min.css';


const ButtonComponent = ({ element, selectedIcon }) => {
  const { buttonType } = element;

  const stylesIcon = {
    color: element.iconColor,
    fontSize: element.sizeIcon + 'px',
    '--fa-animation-duration': element.iconAnimationDuration + 's',
    '--color-icon-button-hover': element.iconColorHover,
    "--translate-hover-icon-button": element.translateEffectHoverIcon + "px" || "-10",
    "--transition-hover-icon-button": element.durationEffectHoverIcon + "s" || "0.3",
  };

  const renderIcon = () => {
    if (!selectedIcon) return null;
  
    // Usa direttamente il nome della classe per rendere l'icona.
    return <div className="content-icon-button" style={{ transform: `rotate(${element.rotateIcon}deg)`,'--rotate-icon-button-hover':element.rotateIconHover+'deg'}}><i className={selectedIcon + " " + element.iconAnimation + " " + element.animationHoverIcon} style={stylesIcon}></i></div>;
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


  // Style button 1
  const buttonStyle1 = {
    '--color-button': element.buttonColor,
    '--border-color-button': element.backgroundBorderColorButton,
    '--border-style-button': element.borderStyleButton,
    '--border-radius-button': element.backgroundBorderRadiusButton + 'px',
    '--border-width-button': element.backgroundBorderSizeButton + 'px',
    '--background-color-button': element.buttonBackgroundColor,
    '--color-button-hover': element.buttonColorHover,
    transform:'rotate('+element.rotateButton+'deg)',
    '--buttonWidth': element. widthCustomButton+'px',
    '--buttonHeight': element.heightCustomButton+'px',
    margin: `${element.marginButton?.top} ${element.marginButton?.right} ${element.marginButton?.bottom} ${element.marginButton?.left}`,
    "--box-shadow-x-button": element.boxShadowX + "px" || "0",
    "--box-shadow-y-button": element.boxShadowY + "px" || "0",
    "--box-shadow-blur-button": element.boxShadowBlur + "px" || "0",
    "--box-shadow-color-button": element.colorShadow || "#000000",
    "--box-shadow-spread-button": element.boxShadowSpread + "px" || "0",
    "--duration-effect-button": element.durationEffectButton + "s",
    "--delay-effect-button": element.delayEffectButton + "s",
    "--interation-button": element.interationButton || "forwards",
    "--border-color-button-hover": element.backgroundBorderColorHover ,
    "--border-style-button-hover": element.borderStyleHover || "none",
    "--border-width-button-hover": `${element.backgroundBorderSizeHover}px` || "0",
    "--rotate-button-hover": `${element.rotateHover}deg` || "0",
    "--delay-hide-seconds-button": element.delayTransition + "s",
  };

  const isBold = element.fontStyle?.fontWeight === "bold";

   // Style button 3
   const buttonStyle3 = {
    color: element.buttonColor,
    borderColor: element.backgroundBorderColorButton,
    borderStyle: element.borderStyleButton,
    borderWidth: element.backgroundBorderSizeButton + 'px',
    backgroundColor: element.buttonBackgroundColor,
    fontSize: element.fontSizeButton + 'px',
    '--font-size-button-tablet': element.fontSizeButtonTablet + 'px',
    '--font-size-button-mobile': element.fontSizeButtonMobile + 'px',
    fontWeight: isBold ? "bold" : element.fontWeightButton || "normal",
    fontStyle: element.fontStyle?.fontStyle || "normal", // Valore di default
    textDecoration: element.fontStyle?.textDecoration || "none", // Valore di default
    lineHeight: element.lineHeightButton,
    fontFamily: element.fontFamilyButton,
    letterSpacing: element.letterSpacingButton + 'px',
    '--buttonWidth': element. widthCustomButton+'px',
    '--buttonHeight': element.heightCustomButton+'px',
    borderTopLeftRadius: element.borderRadiusButton?.top,
    borderTopRightRadius: element.borderRadiusButton?.right,
    borderBottomRightRadius: element.borderRadiusButton?.bottom,
    borderBottomLeftRadius: element.borderRadiusButton?.left,
    padding: `${element.paddingButton?.top} ${element.paddingButton?.right} ${element.paddingButton?.bottom} ${element.paddingButton?.left}`,
    "--border-color-button-hover": element.backgroundBorderColorHover ,
    "--border-style-button-hover": element.borderStyleHover || "none",
    "--border-width-button-hover": `${element.backgroundBorderSizeHover}px` || "0",
    "--background-color-button-hover": element.buttonBackgroundColorHover,
    "--color-button-hover": element.buttonColorHover,
    opacity: element.opacityButton,
    boxShadow:
    `${element.boxShadowX}px ${element.boxShadowY}px ${element.boxShadowBlur}px ${element.boxShadowSpread}px ${element.colorShadow}` ||
    "0 0 0 0 #000000",
    "--opacity-button-hover": element.opacityHover,
    transition: 'transform ' + element.durationEffectHover + 's ease, ' +
    'opacity ' + element.durationEffectHover + 's ease, ' +
    'color ' + element.durationEffectHover + 's ease',
    ...(element.icon && {
      display: 'flex',
      alignItems: element.icoAligItemButton,
      gap: element.gapIcon + 'px',
    }),
   };

   const buttonContentStyle3 = {
    textAlign: element.buttonAlign, 
    width:
          element.widthButton === "custom"
            ? `${element.widthCustomButton}%`
            : element.widthButton,
    transform:'rotate('+element.rotateButton+'deg)',
    "--duration-effect-button": element.durationEffectButton + "s",
    "--delay-effect-button": element.delayEffectButton + "s",
    "--interation-button": element.interationButton || "forwards",
    "--rotate-button-hover": `${element.rotateHover}deg` || "0",
    transition: 'transform ' + element.durationEffectHover + 's ease, ' +
            'opacity ' + element.durationEffectHover + 's ease, ' +
            'color ' + element.durationEffectHover + 's ease',
    margin: `${element.marginButton?.top} ${element.marginButton?.right} ${element.marginButton?.bottom} ${element.marginButton?.left}`,
    "--delay-hide-seconds-button": element.delayTransition + "s",
   };

  let buttonHTML;
  switch (buttonType) {
    case "type1":
      buttonHTML = (
        <span 
            className={"content-button-slide scroll-btn " + element.animationButton  + element.playState + " " + element.hideButton} 
            style={buttonStyle1}
            data-swiper-parallax-x={element.parallaxButton}
            data-swiper-parallax-y={element.parallaxButtonY}
            data-swiper-parallax-scale={element.parallaxButtonScale}
            data-swiper-parallax-duration={element.parallaxButtonDuration}
            data-swiper-parallax-opacity={element.parallaxButtonOpacity}
            ref={bannerRef}
        >
          <a href="#">
            <span className="mouse" style={{opacity: element.opacityButton,'--opacity-button-hover':element.opacityHover,transition: element.durationEffectHover + 's' }}>
              <span></span>
            </span>
          </a>
        </span>
      );
      break;
    case "type2":
      buttonHTML = (
        <span 
        className={"content-button-slide scroll-btn " + element.animationButton  + element.playState + " " + element.hideButton} 
        style={buttonStyle1}
        data-swiper-parallax-x={element.parallaxButton}
        data-swiper-parallax-y={element.parallaxButtonY}
        data-swiper-parallax-scale={element.parallaxButtonScale}
        data-swiper-parallax-duration={element.parallaxButtonDuration}
        data-swiper-parallax-opacity={element.parallaxButtonOpacity}
        ref={bannerRef}
    >
      <a href="#">
        <span className="mouse" style={{opacity: element.opacityButton,'--opacity-button-hover':element.opacityHover,transition: element.durationEffectHover + 's' }}>
          <span></span>
        </span>
      </a>
    </span>
      );
      break;
    case "type3":
    case "type4":
    case "type5":
    case "type6":
    case "type7":
    case "type8":
      buttonHTML = (
        <div className={'content-button-slide button-slider '+ element.animationButton +
          element.playState +  " " + element.hideButton + " " + element.iconShowHover + " " + element.iconHideShowHover} 
          style={buttonContentStyle3}
          data-swiper-parallax-x={element.parallaxButton}
          data-swiper-parallax-y={element.parallaxButtonY}
          data-swiper-parallax-scale={element.parallaxButtonScale}
          data-swiper-parallax-duration={element.parallaxButtonDuration}
          data-swiper-parallax-opacity={element.parallaxButtonOpacity}
          ref={bannerRef}
        >
          <a href="#" 
            style={buttonStyle3}
          >
             {element.icoPositionButton === 'before' && renderIcon()}
            {element.button}
            {element.icoPositionButton === 'after' && renderIcon()}
          </a>
        </div>
      );
      break;
    default:
      buttonHTML = null;
  }

  return buttonHTML;
};

export default ButtonComponent;


