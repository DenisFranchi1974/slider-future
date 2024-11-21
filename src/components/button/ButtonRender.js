import React from "react";
import { useState, useEffect, useRef } from "react";
import { animationsIn, getAnimationProps} from '../../animate';
import {handleMouseEnter, handleMouseLeave} from '../../animate/animationIn'
import materialIcons from '../../icons/materialIcons';

const ButtonRender = ({ element, selectedIcon, onPlay}) => {

  const buttonRef = useRef(null); // Ref per il contenitore del testo
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
        // Animazione del button
        effectIn(buttonRef.current, animationProps);
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
    if (buttonRef.current && !hasPlayed) {
      buttonRef.current.style.opacity = 1;
    }
  }, [hasPlayed]);

  // Aggiungi un useEffect per osservare i cambiamenti di effectIn ed easing
  useEffect(() => {
    playAnimation();
  }, [element.effectIn, element.easing, element.direction,element.text]);

  const { buttonType } = element;

  const stylesIcon = {
    fill: element.iconColor,
    width: element.sizeIcon + 'px',
    height: element.sizeIcon + 'px',
  };

  const stylesContentIcon = {
    transform: `rotate(${element.rotateIcon}deg)`,
    '--rotate-icon-button-hover': element.rotateIconHover + 'deg',
    display:'flex',
    '--fa-animation-duration': element.iconAnimationDuration + 's',
    '--color-icon-button-hover': element.iconColorHover,
    "--translate-hover-icon-button": element.translateEffectHoverIcon + "px" ?? "-10",
    "--transition-hover-icon-button": element.durationEffectHoverIcon + "s" ?? "0.3",
  }

  const renderIcon = () => {
    if (!selectedIcon) return null;
  
    const IconComponent = materialIcons[selectedIcon];
    if (!IconComponent) return null;
  
    return (
      <div
      className={`content-icon-button ${element.iconAnimation} ${element.animationHoverIcon}`}
        style={stylesContentIcon}
      >
        <IconComponent
          style={stylesIcon}
        />
      </div>
    ); 
  };
  
  // Style button 1
  const buttonStyle1 = {
    '--color-button': element.buttonColor,
    '--border-color-button': element.backgroundBorderColorButton,
    '--border-style-button': element.borderStyleButton,
    '--border-radius-button': element.backgroundBorderRadiusButton + 'px',
    "--border-width-button-top": `${element.backgroundBorderSizeButton?.top}` || "0",
    "--border-width-button-right": `${element.backgroundBorderSizeButton?.right}` || "0",
    "--border-width-button-bottom": `${element.backgroundBorderSizeButton?.bottom}` || "0",
    "--border-width-button-left": `${element.backgroundBorderSizeButton?.left}` || "0",
    '--background-color-button': element.buttonBackgroundColor,
    '--color-button-hover': element.buttonColorHover,
    transform:'rotate('+element.rotateButton+'deg)',
    '--buttonWidth': element. widthCustomButton+'px',
    '--buttonHeight': element.heightCustomButton+'px',
    margin: `${element.marginButton?.top} ${element.marginButton?.right} ${element.marginButton?.bottom} ${element.marginButton?.left}`,
    "--border-color-button-hover": element.backgroundBorderColorHover ,
    "--border-style-button-hover": element.borderStyleHover || "none",
    "--border-width-button-hover-top": `${element.backgroundBorderSizeHover?.top}` || "0",
    "--border-width-button-hover-right": `${element.backgroundBorderSizeHover?.right}` || "0",
    "--border-width-button-hover-bottom": `${element.backgroundBorderSizeHover?.bottom}` || "0",
    "--border-width-button-hover-left": `${element.backgroundBorderSizeHover?.left}` || "0",
    "--rotate-button-hover": `${element.rotateHover}deg` || "0",
    zIndex: element.zIndexButton,
  };

  const isBold = element.fontStyle?.fontWeight === "bold";

   // Style button 3
   const buttonStyle3 = {
    color: element.buttonColor,
    borderColor: element.backgroundBorderColorButton,
    borderStyle: element.borderStyleButton,
    borderWidth: `${element.backgroundBorderSizeButton?.top} ${element.backgroundBorderSizeButton?.right} ${element.backgroundBorderSizeButton?.bottom} ${element.backgroundBorderSizeButton?.left}`,
    backgroundColor: element.buttonBackgroundColor,
    fontSize: 'clamp(' + element.fontSizeButtonMobile + 'px,' + element.fontSizeButtonTablet + 'vw, ' + element.fontSizeButton + 'px)',
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
    "--border-width-button-hover-top": `${element.backgroundBorderSizeHover?.top}` || "0",
    "--border-width-button-hover-right": `${element.backgroundBorderSizeHover?.right}` || "0",
    "--border-width-button-hover-bottom": `${element.backgroundBorderSizeHover?.bottom}` || "0",
    "--border-width-button-hover-left": `${element.backgroundBorderSizeHover?.left}` || "0",
    "--background-color-button-hover": element.buttonBackgroundColorHover,
    "--color-button-hover": element.buttonColorHover,
    opacity: element.opacityButton,
    display: 'flex',
    justifyContent: element.buttonAlign,
    ...(element.enableBoxShadow && {
      boxShadow: `${element.boxShadowX}px ${element.boxShadowY}px ${element.boxShadowBlur}px ${element.boxShadowSpread}px ${element.colorBoxShadow}`,
      }),
    ...(element.icon && {
      alignItems: element.icoAligItemButton,
      gap: element.gapIcon + 'px',
      zIndex: element.zIndexButton
    }),
   };

   const buttonContentStyle3 = {
    width:
          element.widthButton === "custom"
            ? `${element.widthCustomButton}%`
            : element.widthButton,
    transform:'rotate('+element.rotateButton+'deg)',
    margin: `${element.marginButton?.top} ${element.marginButton?.right} ${element.marginButton?.bottom} ${element.marginButton?.left}`,
    zIndex: element.zIndexButton,
   };

  let buttonHTML;
  switch (buttonType) {
    case "type1":
      buttonHTML = (
        <span 
            className={"content-button-slide scroll-btn" + " " + element.hideButton} 
            style={buttonStyle1}
            ref={buttonRef}
        >
          <a href="#">
            <span className="mouse" style={{opacity: element.opacityButton,'--opacity-button-hover':element.opacityHover,transition: element.durationEffectHover + 's',...(element.enableBoxShadow && {
      boxShadow: `${element.boxShadowX}px ${element.boxShadowY}px ${element.boxShadowBlur}px ${element.boxShadowSpread}px ${element.colorBoxShadow}`,
      }) }}>
              <span></span>
            </span>
          </a>
        </span>
      );
      break;
    case "type2":
      buttonHTML = (
        <span 
        className={"content-button-slide scroll-btn" + " " + element.hideButton} 
        style={buttonStyle1}
        ref={buttonRef}
    >
      <a href="#">
        <span className="mouse" style={{opacity: element.opacityButton,'--opacity-button-hover':element.opacityHover,transition: element.durationEffectHover + 's',...(element.enableBoxShadow && {
      boxShadow: `${element.boxShadowX}px ${element.boxShadowY}px ${element.boxShadowBlur}px ${element.boxShadowSpread}px ${element.colorBoxShadow}`,
      }) }}>
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
        <div className={'button-slider ' + element.hideButton} 
          style={buttonContentStyle3}
          ref={buttonRef}
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
        >
          <a href="#" 
          className={'content-button-slide ' + element.iconShowHover + " " + element.iconHideShowHover}
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

export default ButtonRender;