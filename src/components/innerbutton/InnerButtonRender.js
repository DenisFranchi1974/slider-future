import React from "react";
import { useState, useEffect, useRef } from "react";
import { animationsIn, getAnimationProps} from '../../animate';
import {handleMouseEnter, handleMouseLeave} from '../../animate/animationIn'
import materialIcons from '../../icons/materialIcons';

const InnerButtonRender = ({ buttonDiv, selectedIcon, onPlay  }) => {

    const buttonRef = useRef(null); // Ref per il contenitore del testo
    const [hasPlayed, setHasPlayed] = useState(false); // Stato per tracciare se l'animazione è stata attivata
  
    // Funzione per attivare l'animazione
    const playAnimation = () => {
      const effectIn = animationsIn[buttonDiv.effectIn];
     
      // Converti il valore di loop in un numero
      const loopCount = (typeof buttonDiv.loop === 'string' && buttonDiv.loop.toLowerCase() === 'true') 
      
      ? 5
      : (parseInt(buttonDiv.loop) >= 1 && parseInt(buttonDiv.loop) <= 10) 
      ? parseInt(buttonDiv.loop) 
      : 1; // Imposta un valore di default se non è in un intervallo valido
  
      if (effectIn ) {
       // textRef.current.style.opacity = 0; // Reset
        const animationProps = getAnimationProps({
          duration: buttonDiv.duration ?? 800,
          delay: buttonDiv.delay ?? 0, 
          endDelay: buttonDiv.endDelay ?? 0,
          easing: buttonDiv.easing ?? 'linear', 
          direction: buttonDiv.direction ?? 'normal',
          loop: loopCount,
          startXFrom: buttonDiv.startXFrom ?? 100, 
          startXTo: buttonDiv.startXTo ?? 0, 
          startYFrom: buttonDiv.startYFrom ?? 0,
          startYTo: buttonDiv.startYTo ?? 0,
          opacityFrom: buttonDiv.opacityFrom ?? 0,
          opacityTo: buttonDiv.opacityTo ?? 1,
          scaleFrom: buttonDiv.scaleFrom ?? 0,
          scaleTo: buttonDiv.scaleTo ?? 1,
          rotateFrom: buttonDiv.rotateFrom ?? 0,
          rotateTo: buttonDiv.rotateTo ?? 0,
          rotateXFrom: buttonDiv.rotateXFrom ?? 0, 
          rotateXTo: buttonDiv.rotateXTo ?? 0,
          rotateYFrom: buttonDiv.rotateYFrom ?? 0,
          rotateYTo: buttonDiv.rotateYTo ?? 0,
          skewXFrom: buttonDiv.skewXFrom ?? 0,
          skewXTo: buttonDiv.skewXTo ?? 0,
          skewYFrom: buttonDiv.skewYFrom ?? 0,
          skewYTo: buttonDiv.skewYTo ?? 0,
          filterFrom: buttonDiv.filterFrom ?? 0,
          filterTo: buttonDiv.filterTo ?? 0,
          scaleType: buttonDiv.scaleType ?? 'scale',
        });
    
        setTimeout(() => {
          // Animazione del button
          effectIn(buttonRef.current, animationProps);
        }, buttonDiv.delay);
        
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
    }, [buttonDiv.effectIn, buttonDiv.easing, buttonDiv.direction,buttonDiv.text]);

    
  const { buttonType } = buttonDiv;

  const stylesIcon = {
    fill: buttonDiv.iconColor,
    width: buttonDiv.sizeIcon + 'px',
    height: buttonDiv.sizeIcon + 'px',
  };

  const stylesContentIcon = {
    transform: `rotate(${buttonDiv.rotateIcon}deg)`,
    '--rotate-icon-button-inner-hover': buttonDiv.rotateIconHover + 'deg',
    display:'flex',
    '--fa-animation-duration': buttonDiv.iconAnimationDuration + 's',
    '--color-icon-button-inner-hover': buttonDiv.iconColorHover,
    "--translate-hover-icon-button-inner": buttonDiv.translateEffectHoverIcon + "px" ?? "-10",
    "--transition-hover-icon-button-inner": buttonDiv.durationEffectHoverIcon + "s" ?? "0.3",
  }

  const renderIcon = () => {
    if (!selectedIcon) return null;
  
    const IconComponent = materialIcons[selectedIcon];
    if (!IconComponent) return null;
  
    return (
      <div
      className={`content-icon-button-inner ${buttonDiv.iconAnimation} ${buttonDiv.animationHoverIcon}`}
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
    '--color-button-inner': buttonDiv.buttonColor,
    '--border-color-button-inner': buttonDiv.backgroundBorderColorButton,
    '--border-style-button-inner': buttonDiv.borderStyleButton,
    '--border-radius-button-inner': buttonDiv.backgroundBorderRadiusButton + 'px',
    "--border-width-button-top-inner": `${buttonDiv.backgroundBorderSizeButton?.top}` || "0",
    "--border-width-button-right-inner": `${buttonDiv.backgroundBorderSizeButton?.right}` || "0",
    "--border-width-button-bottom-inner": `${buttonDiv.backgroundBorderSizeButton?.bottom}` || "0",
    "--border-width-button-left-inner": `${buttonDiv.backgroundBorderSizeButton?.left}` || "0",
    '--background-color-button-inner': buttonDiv.buttonBackgroundColor,
    '--color-button-hover-inner': buttonDiv.buttonColorHover,
    transform:'rotate('+buttonDiv.rotateButton+'deg)',
    '--buttonWidth-inner': buttonDiv. widthCustomButton+'px',
    '--buttonHeight-inner': buttonDiv.heightCustomButton+'px',
    margin: `${buttonDiv.marginButton?.top} ${buttonDiv.marginButton?.right} ${buttonDiv.marginButton?.bottom} ${buttonDiv.marginButton?.left}`,
    "--border-width-button-hover-top-inner": `${buttonDiv.backgroundBorderSizeHover?.top}` || "0",
    "--border-width-button-hover-right-inner": `${buttonDiv.backgroundBorderSizeHover?.right}` || "0",
    "--border-width-button-hover-bottom-inner": `${buttonDiv.backgroundBorderSizeHover?.bottom}` || "0",
    "--border-width-button-hover-left-inner": `${buttonDiv.backgroundBorderSizeHover?.left}` || "0",
    "--border-color-button-hover-inner": buttonDiv.backgroundBorderColorHover ,
    "--border-style-button-hover-inner": buttonDiv.borderStyleHover || "none",
    zIndex: buttonDiv.zIndexButton,
  };

  const isBold = buttonDiv.fontStyle?.fontWeight === "bold";

   // Style button 3
   const buttonStyle3 = {
    color: buttonDiv.buttonColor,
    borderColor: buttonDiv.backgroundBorderColorButton,
    borderStyle: buttonDiv.borderStyleButton,
    borderWidth: `${buttonDiv.backgroundBorderSizeButton?.top} ${buttonDiv.backgroundBorderSizeButton?.right} ${buttonDiv.backgroundBorderSizeButton?.bottom} ${buttonDiv.backgroundBorderSizeButton?.left}`,
    backgroundColor: buttonDiv.buttonBackgroundColor,
    fontSize: 'clamp(' + buttonDiv.fontSizeButtonMobile + 'px,' + buttonDiv.fontSizeButtonTablet + 'vw, ' + buttonDiv.fontSizeButton + 'px)',
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
    "--border-width-button-hover-top-inner": `${buttonDiv.backgroundBorderSizeHover?.top}` || "0",
    "--border-width-button-hover-right-inner": `${buttonDiv.backgroundBorderSizeHover?.right}` || "0",
    "--border-width-button-hover-bottom-inner": `${buttonDiv.backgroundBorderSizeHover?.bottom}` || "0",
    "--border-width-button-hover-left-inner": `${buttonDiv.backgroundBorderSizeHover?.left}` || "0",
    "--background-color-button-hover-inner": buttonDiv.buttonBackgroundColorHover,
    "--color-button-hover-inner": buttonDiv.buttonColorHover,
    opacity: buttonDiv.opacityButton,
    justifyContent: buttonDiv.buttonAlign,
    display: 'flex',
    ...(buttonDiv.enableBoxShadow && {
        boxShadow: `${buttonDiv.boxShadowX}px ${buttonDiv.boxShadowY}px ${buttonDiv.boxShadowBlur}px ${buttonDiv.boxShadowSpread}px ${buttonDiv.colorBoxShadow}`,
        }),
    ...(buttonDiv.icon && {
      alignItems: buttonDiv.icoAligItemButton,
      gap: buttonDiv.gapIcon + 'px',
      zIndex: buttonDiv.zIndexButton
    }),
   };

   const buttonContentStyle3 = {
    width:
          buttonDiv.widthButton === "custom"
            ? `${buttonDiv.widthCustomButton}px`
            : buttonDiv.widthButton,
    transform:'rotate('+buttonDiv.rotateButton+'deg)',
    margin: `${buttonDiv.marginButton?.top} ${buttonDiv.marginButton?.right} ${buttonDiv.marginButton?.bottom} ${buttonDiv.marginButton?.left}`,
    zIndex: buttonDiv.zIndexButton,
   };

  let buttonHTML;
  switch (buttonType) {
    case "type1":
      buttonHTML = (
        <span 
            className={"content-button-slide-inner scroll-btn-inner" + " " + buttonDiv.hideButton} 
            style={buttonStyle1}
            ref={buttonRef}
            onMouseEnter={(e) => handleMouseEnter(e, { 
              durationHover: buttonDiv.durationHover ?? 800,
              effectHover:buttonDiv.effectHover,
              easingHover:buttonDiv.easingHover ?? 'linear',
              opacityHover:buttonDiv.opacityHover ?? 1,
              filterHover:buttonDiv.filterHover ?? 0,
              startXHover:buttonDiv.startXHover ?? 100,
              startYHover:buttonDiv.startYHover ?? 0,
              scaleHover:buttonDiv.scaleHover ?? 1,
              rotateHover:buttonDiv.rotateHover ?? 0,
              rotateXHover:buttonDiv.rotateXHover ?? 0,
              rotateYHover:buttonDiv.rotateYHover ?? 0,
              skewXHover:buttonDiv.skewXHover ?? 0,
              skewYHover:buttonDiv.skewYHover ?? 0,
              scaleTypeHover:buttonDiv.scaleTypeHover ?? 'scale',
            })} // Passa element.duration
            onMouseLeave={(e) => handleMouseLeave(e, { 
              durationHover: buttonDiv.durationHover ?? 800,
              easingHover:buttonDiv.easingHover ?? 'linear',
            })} // Passa element.duration
        >
            <span className="mouse-inner" style={{opacity: buttonDiv.opacityButton,...(buttonDiv.enableBoxShadow && {
      boxShadow: `${buttonDiv.boxShadowX}px ${buttonDiv.boxShadowY}px ${buttonDiv.boxShadowBlur}px ${buttonDiv.boxShadowSpread}px ${buttonDiv.colorBoxShadow}`,
      }) }}>
              <span></span>
            </span>
        </span>
      );
      break;
    case "type2":
      buttonHTML = (
        <span 
        className={"content-button-slide-inner scroll-btn-inner" + " " + buttonDiv.hideButton} 
        style={buttonStyle1}
        ref={buttonRef}
        onMouseEnter={(e) => handleMouseEnter(e, { 
          durationHover: buttonDiv.durationHover ?? 800,
          effectHover:buttonDiv.effectHover,
          easingHover:buttonDiv.easingHover ?? 'linear',
          opacityHover:buttonDiv.opacityHover ?? 1,
          filterHover:buttonDiv.filterHover ?? 0,
          startXHover:buttonDiv.startXHover ?? 100,
          startYHover:buttonDiv.startYHover ?? 0,
          scaleHover:buttonDiv.scaleHover ?? 1,
          rotateHover:buttonDiv.rotateHover ?? 0,
          rotateXHover:buttonDiv.rotateXHover ?? 0,
          rotateYHover:buttonDiv.rotateYHover ?? 0,
          skewXHover:buttonDiv.skewXHover ?? 0,
          skewYHover:buttonDiv.skewYHover ?? 0,
          scaleTypeHover:buttonDiv.scaleTypeHover ?? 'scale',
        })} // Passa element.duration
        onMouseLeave={(e) => handleMouseLeave(e, { 
          durationHover: buttonDiv.durationHover ?? 800,
          easingHover:buttonDiv.easingHover ?? 'linear',
        })} // Passa element.duration
    >
        <span className="mouse-inner" style={{opacity: buttonDiv.opacityButton,...(buttonDiv.enableBoxShadow && {
      boxShadow: `${buttonDiv.boxShadowX}px ${buttonDiv.boxShadowY}px ${buttonDiv.boxShadowBlur}px ${buttonDiv.boxShadowSpread}px ${buttonDiv.colorBoxShadow}`,
      }) }}>
          <span></span>
        </span>
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
        <div className={'button-slider-inner ' +  buttonDiv.hideButton} 
          style={buttonContentStyle3}
          ref={buttonRef}
          onMouseEnter={(e) => handleMouseEnter(e, { 
            durationHover: buttonDiv.durationHover ?? 800,
            effectHover:buttonDiv.effectHover,
            easingHover:buttonDiv.easingHover ?? 'linear',
            opacityHover:buttonDiv.opacityHover ?? 1,
            filterHover:buttonDiv.filterHover ?? 0,
            startXHover:buttonDiv.startXHover ?? 100,
            startYHover:buttonDiv.startYHover ?? 0,
            scaleHover:buttonDiv.scaleHover ?? 1,
            rotateHover:buttonDiv.rotateHover ?? 0,
            rotateXHover:buttonDiv.rotateXHover ?? 0,
            rotateYHover:buttonDiv.rotateYHover ?? 0,
            skewXHover:buttonDiv.skewXHover ?? 0,
            skewYHover:buttonDiv.skewYHover ?? 0,
            scaleTypeHover:buttonDiv.scaleTypeHover ?? 'scale',
          })} // Passa element.duration
          onMouseLeave={(e) => handleMouseLeave(e, { 
            durationHover: buttonDiv.durationHover ?? 800,
            easingHover:buttonDiv.easingHover ?? 'linear',
          })} // Passa element.duration
        >
          <a href="#" 
          className={'content-button-slide-inner ' + buttonDiv.iconShowHover + " " + buttonDiv.iconHideShowHover}
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

export default InnerButtonRender;

