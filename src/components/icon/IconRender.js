import React from "react";
import { useState, useEffect, useRef } from "react";
import materialIcons from '../../icons/materialIcons'; 
import { animationsIn, getAnimationProps} from '../../animate';

const IconRender = ({ element, index, onPlay }) => {

  const iconRef = useRef(null); // Ref per il contenitore del testo
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
        // Animazione del button
        effectIn(iconRef.current, animationProps);
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
    if (iconRef.current && !hasPlayed) {
      iconRef.current.style.opacity = 1;
    }
  }, [hasPlayed]);

  // Aggiungi un useEffect per osservare i cambiamenti di effectIn ed easing
  useEffect(() => {
    playAnimation();
  }, [element.effectIn, element.easing, element.direction,element.text]);

  const IconComponent = materialIcons[element.icon];

  // Styles Icon
  const stylesIcon = {
    width: 'clamp(' + element.fontSize + 'px,' + element.fontSizeTablet + 'vw, ' + element.fontSizeMobile + 'px)',
    height: 'clamp(' + element.fontSize + 'px,' + element.fontSizeTablet + 'vw, ' + element.fontSizeMobile + 'px)',
    fill: element.color,
    backgroundColor: element.backgroundColorIcon,
    "--color-hover-icon": element.colorHover,
    margin: `${element.margin?.top} ${element.margin?.right} ${element.margin?.bottom} ${element.margin?.left}`, 
    padding: `${element.padding?.top} ${element.padding?.right} ${element.padding?.bottom} ${element.padding?.left}`, 
    borderWidth: `${element.backgroundBorderSize?.top} ${element.backgroundBorderSize?.right} ${element.backgroundBorderSize?.bottom} ${element.backgroundBorderSize?.left}`, 
    borderColor: element.backgroundBorderColor || "#000000",
    borderRadius:  `${element.backgroundBorderRadius?.top} ${element.backgroundBorderRadius?.right} ${element.backgroundBorderRadius?.bottom} ${element.backgroundBorderRadius?.left}`, 
    "--border-color-hover-icon": element.backgroundBorderColorHover || "#000000",
    borderStyle: element.borderStyle || "none",
    "--border-style-hover-icon": element.borderStyleHover || "none",
    "--border-width-hover-icon": `${element.backgroundBorderSizeHover?.top} ${element.backgroundBorderSizeHover?.right} ${element.backgroundBorderSizeHover?.bottom} ${element.backgroundBorderSizeHover?.left}`,
    opacity: element.opacity,
    zIndex: element.zIndexIcon,
    ...(element.enableBoxShadow && {
      boxShadow: `${element.boxShadowX}px ${element.boxShadowY}px ${element.boxShadowBlur}px ${element.boxShadowSpread}px ${element.colorBoxShadow}`,
      }),
    position:"relative",
    transform: `rotate(${element.rotate}deg)`,
    "--rotate-hover-icon": element.rotateHover + "deg" || "0",
    '--fa-animation-duration': element.iconAnimationDuration + 's',
    "--transition-hover-icon": element.durationEffectHover + "s" ?? "0.3",
    "--translate-hover-icon": element.translateEffectHover + "px" || "0",
    "--scale-hover-icon": element.scaleEffectHover ?? "1",
    "--blur-hover-icon": element.blurEffectHover + "px" || "0",
    "--opacity-hover-icon": element.opacityHover ?? 1
  };

  return (
    <div
      style={{
        width:
          element.width === "custom"
            ? `${element.widthCustom}px`
            : element.width,
        justifyContent: element.align,
          display:'flex'
      }}
      className={
        "content-icon " + element.hideTitle
      }
      ref={iconRef}
    >
      
       {IconComponent && (
        <>
        <IconComponent
          key={index}
          className={"slide-icon" + " " + element.iconAnimation +  " " + element.animationHover} 
          style={stylesIcon}
        />
        </>
      )}
      
    </div>
  );
};

export default IconRender;
