import { button } from "@wordpress/icons";
import React from "react";
import { useState, useEffect, useRef } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';


const InnerButtonDivComponent = ({ buttonDiv, buttonIndex,selectedIcon  }) => {
  const { buttonType } = buttonDiv;

  const stylesIcon = {
    color: buttonDiv.iconColor,
    fontSize: buttonDiv.sizeIcon + 'px',
    '--fa-animation-duration': buttonDiv.iconAnimationDuration + 's',
    '--color-icon-button-hover-inner': buttonDiv.iconColorHover,
    "--translate-hover-icon-button-inner": buttonDiv.translateEffectHoverIcon + "px" || "-10",
    "--transition-hover-icon-button-inner": buttonDiv.durationEffectHoverIcon + "s" || "0.3",
  };


  const renderIcon = () => {
    if (!buttonDiv.icon) return null;
  
    // Usa direttamente il nome della classe per rendere l'icona.
    return <div className="content-icon-button-inner" style={{ transform: `rotate(${buttonDiv.rotateIcon}deg)`,'--rotate-icon-button-hover-inner':buttonDiv.rotateIconHover+'deg'}}><i className={buttonDiv.icon + " " + buttonDiv.iconAnimation + " " + buttonDiv.animationHoverIcon} style={stylesIcon}></i></div>;
  };
  


  // Nascondi l'elemento dopo un tot di tempo
  const bannerRef = useRef(null); // Crea un ref per l'elemento
  const [hideEnabled, setHideEnabled] = useState(buttonDiv.delayHide); // Stato per abilitare/disabilitare la funzione
  const [hideAfter, setHideAfter] = useState(buttonDiv.delaySeconds); // Tempo in secondi per nascondere

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
    setHideEnabled(buttonDiv.delayHide);
  }, [buttonDiv.delayHide]);
  useEffect(() => {
    setHideAfter(buttonDiv.delaySeconds);
  }, [buttonDiv.delaySeconds]);


  // Style button 1
  const buttonStyle1 = {
    '--color-button-inner': buttonDiv.buttonColor,
    '--border-color-button-inner': buttonDiv.backgroundBorderColorButton,
    '--border-style-button-inner': buttonDiv.borderStyleButton,
    '--border-radius-button-inner': buttonDiv.backgroundBorderRadiusButton + 'px',
    '--border-width-button-inner': buttonDiv.backgroundBorderSizeButton + 'px',
    '--background-color-button-inner': buttonDiv.buttonBackgroundColor,
    '--color-button-hover-inner': buttonDiv.buttonColorHover,
    transform:'rotate('+buttonDiv.rotateButton+'deg)',
    '--buttonWidth-inner': buttonDiv. widthCustomButton+'px',
    '--buttonHeight-inner': buttonDiv.heightCustomButton+'px',
    margin: `${buttonDiv.marginButton?.top} ${buttonDiv.marginButton?.right} ${buttonDiv.marginButton?.bottom} ${buttonDiv.marginButton?.left}`,
    "--box-shadow-x-button-inner": buttonDiv.boxShadowX + "px" || "0",
    "--box-shadow-y-button-inner": buttonDiv.boxShadowY + "px" || "0",
    "--box-shadow-blur-button-inner": buttonDiv.boxShadowBlur + "px" || "0",
    "--box-shadow-color-button-inner": buttonDiv.colorShadow || "#000000",
    "--box-shadow-spread-button-inner": buttonDiv.boxShadowSpread + "px" || "0",
    "--duration-effect-button-inner": buttonDiv.durationEffectButton + "s",
    "--delay-effect-button-inner": buttonDiv.delayEffectButton + "s",
    "--interation-button-inner": buttonDiv.interationButton || "forwards",
    "--border-color-button-hover-inner": buttonDiv.backgroundBorderColorHover ,
    "--border-style-button-hover-inner": buttonDiv.borderStyleHover || "none",
    "--border-width-button-hover-inner": `${buttonDiv.backgroundBorderSizeHover}px` || "0",
    "--rotate-button-hover-inner": `${buttonDiv.rotateHover}deg` || "0",
    "--delay-hide-seconds-button-inner": buttonDiv.delayTransition + "s",
  };

  const isBold = buttonDiv.fontStyle?.fontWeight === "bold";

   // Style button 3
   const buttonStyle3 = {
    color: buttonDiv.buttonColor,
    borderColor: buttonDiv.backgroundBorderColorButton,
    borderStyle: buttonDiv.borderStyleButton,
    borderWidth: buttonDiv.backgroundBorderSizeButton + 'px',
    backgroundColor: buttonDiv.buttonBackgroundColor,
    fontSize: buttonDiv.fontSizeButton + 'px',
    '--font-size-button-tablet-inner': buttonDiv.fontSizeButtonTablet + 'px',
    '--font-size-button-mobile-inner': buttonDiv.fontSizeButtonMobile + 'px',
    fontWeight: isBold ? "bold" : buttonDiv.fontWeightButton || "normal",
    fontStyle: buttonDiv.fontStyle?.fontStyle || "normal", // Valore di default
    textDecoration: buttonDiv.fontStyle?.textDecoration || "none", // Valore di default
    lineHeight: buttonDiv.lineHeightButton,
    fontFamily: buttonDiv.fontFamilyButton,
    letterSpacing: buttonDiv.letterSpacingButton + 'px',
    '--buttonWidth-inner': buttonDiv. widthCustomButton+'px',
    '--buttonHeight-inner': buttonDiv.heightCustomButton+'px',
    borderTopLeftRadius: buttonDiv.borderRadiusButton?.top,
    borderTopRightRadius: buttonDiv.borderRadiusButton?.right,
    borderBottomRightRadius: buttonDiv.borderRadiusButton?.bottom,
    borderBottomLeftRadius: buttonDiv.borderRadiusButton?.left,
    padding: `${buttonDiv.paddingButton?.top} ${buttonDiv.paddingButton?.right} ${buttonDiv.paddingButton?.bottom} ${buttonDiv.paddingButton?.left}`,
    "--border-color-button-hover-inner": buttonDiv.backgroundBorderColorHover ,
    "--border-style-button-hover-inner": buttonDiv.borderStyleHover || "none",
    "--border-width-button-hover-inner": `${buttonDiv.backgroundBorderSizeHover}px` || "0",
    "--background-color-button-hover-inner": buttonDiv.buttonBackgroundColorHover,
    "--color-button-hover-inner": buttonDiv.buttonColorHover,
    opacity: buttonDiv.opacityButton,
    boxShadow:
    `${buttonDiv.boxShadowX}px ${buttonDiv.boxShadowY}px ${buttonDiv.boxShadowBlur}px ${buttonDiv.boxShadowSpread}px ${buttonDiv.colorShadow}` ||
    "0 0 0 0 #000000",
    "--opacity-button-hover-inner": buttonDiv.opacityHover,
    transition: 'transform ' + buttonDiv.durationEffectHover + 's ease, ' +
    'opacity ' + buttonDiv.durationEffectHover + 's ease, ' +
    'color ' + buttonDiv.durationEffectHover + 's ease',
    ...(buttonDiv.icon && {
      display: 'flex',
      alignItems: buttonDiv.icoAligItemButton,
      gap: buttonDiv.gapIcon + 'px',
    }),
   };

   const buttonContentStyle3 = {
    textAlign: buttonDiv.buttonAlign, 
    width:
          buttonDiv.widthButton === "custom"
            ? `${buttonDiv.widthCustomButton}%`
            : buttonDiv.widthButton,
    transform:'rotate('+buttonDiv.rotateButton+'deg)',
    "--duration-effect-button-inner": buttonDiv.durationEffectButton + "s",
    "--delay-effect-button-inner": buttonDiv.delayEffectButton + "s",
    "--interation-button-inner": buttonDiv.interationButton || "forwards",
    "--rotate-button-hover-inner": `${buttonDiv.rotateHover}deg` || "0",
    transition: 'transform ' + buttonDiv.durationEffectHover + 's ease, ' +
            'opacity ' + buttonDiv.durationEffectHover + 's ease, ' +
            'color ' + buttonDiv.durationEffectHover + 's ease',
    margin: `${buttonDiv.marginButton?.top} ${buttonDiv.marginButton?.right} ${buttonDiv.marginButton?.bottom} ${buttonDiv.marginButton?.left}`,
    "--delay-hide-seconds-button-inner": buttonDiv.delayTransition + "s",
   };

  let buttonHTML;
  switch (buttonType) {
    case "type1":
      buttonHTML = (
        <span 
            className={"content-button-slide scroll-btn-inner " + buttonDiv.animationButton  + buttonDiv.playState + " " + buttonDiv.hideButton} 
            style={buttonStyle1}
            data-swiper-parallax-x={buttonDiv.parallaxButton}
            data-swiper-parallax-y={buttonDiv.parallaxButtonY}
            data-swiper-parallax-scale={buttonDiv.parallaxButtonScale}
            data-swiper-parallax-duration={buttonDiv.parallaxButtonDuration}
            data-swiper-parallax-opacity={buttonDiv.parallaxButtonOpacity}
            ref={bannerRef}
        >
          <a href="#">
            <span className="mouse-inner" style={{opacity: buttonDiv.opacityButton,'--opacity-button-hover':buttonDiv.opacityHover,transition: buttonDiv.durationEffectHover + 's' }}>
              <span></span>
            </span>
          </a>
        </span>
      );
      break;
    case "type2":
      buttonHTML = (
        <span 
        className={"content-button-slide scroll-btn-inner " + buttonDiv.animationButton  + buttonDiv.playState + " " + buttonDiv.hideButton} 
        style={buttonStyle1}
        data-swiper-parallax-x={buttonDiv.parallaxButton}
        data-swiper-parallax-y={buttonDiv.parallaxButtonY}
        data-swiper-parallax-scale={buttonDiv.parallaxButtonScale}
        data-swiper-parallax-duration={buttonDiv.parallaxButtonDuration}
        data-swiper-parallax-opacity={buttonDiv.parallaxButtonOpacity}
        ref={bannerRef}
    >
      <a href="#">
        <span className="mouse-inner" style={{opacity: buttonDiv.opacityButton,'--opacity-button-hover':buttonDiv.opacityHover,transition: buttonDiv.durationEffectHover + 's' }}>
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
        <div className={'content-button-slide-inner button-slider-inner '+ buttonDiv.animationButton +
          buttonDiv.playState +  " " + buttonDiv.hideButton + " " + buttonDiv.iconShowHover + " " + buttonDiv.iconHideShowHover} 
          style={buttonContentStyle3}
          data-swiper-parallax-x={buttonDiv.parallaxButton}
          data-swiper-parallax-y={buttonDiv.parallaxButtonY}
          data-swiper-parallax-scale={buttonDiv.parallaxButtonScale}
          data-swiper-parallax-duration={buttonDiv.parallaxButtonDuration}
          data-swiper-parallax-opacity={buttonDiv.parallaxButtonOpacity}
          ref={bannerRef}
        >
          <a href="#" 
            style={buttonStyle3}
          >
            {buttonDiv.icoPositionButton === 'before' && renderIcon()}
            {buttonDiv.button}
            {buttonDiv.icoPositionButton === 'after' && renderIcon()}
          </a>
        </div>
      );
      break;
    default:
      buttonHTML = null;
  }

  return buttonHTML;
};

export default InnerButtonDivComponent;


