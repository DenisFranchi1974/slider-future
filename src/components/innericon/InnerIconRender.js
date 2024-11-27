import React from "react";
import { useState, useEffect, useRef } from "react";
import materialIcons from '../../icons/materialIcons'; 
import { animationsIn, getAnimationProps} from '../../animate';

const InnerIconRender = ({ iconDiv, iconIndex, element, index, onPlay }) => {

  const iconRef = useRef(null); // Ref per il contenitore del testo
  //const barRef = useRef(null); // Ref per il div che vuoi animare
  const [hasPlayed, setHasPlayed] = useState(false); // Stato per tracciare se l'animazione è stata attivata

  // Funzione per attivare l'animazione
  const playAnimation = () => {
    const effectIn = animationsIn[iconDiv.effectIn];
   
    // Converti il valore di loop in un numero
    const loopCount = (typeof iconDiv.loop === 'string' && iconDiv.loop.toLowerCase() === 'true') 
    
    ? 5
    : (parseInt(iconDiv.loop) >= 1 && parseInt(iconDiv.loop) <= 10) 
    ? parseInt(iconDiv.loop) 
    : 1; // Imposta un valore di default se non è in un intervallo valido

    if (effectIn ) {
     // textRef.current.style.opacity = 0; // Reset
      const animationProps = getAnimationProps({
        duration: iconDiv.duration ?? 800,
        delay: iconDiv.delay ?? 0, 
        endDelay: iconDiv.endDelay ?? 0,
        easing: iconDiv.easing ?? 'linear', 
        direction: iconDiv.direction ?? 'normal',
        loop: loopCount,
        startXFrom: iconDiv.startXFrom ?? 100, 
        startXTo: iconDiv.startXTo ?? 0, 
        startYFrom: iconDiv.startYFrom ?? 0,
        startYTo: iconDiv.startYTo ?? 0,
        stagger: iconDiv.stagger ?? 80,
        textSplitEffect: iconDiv.textSplitEffect,
        opacityFrom: iconDiv.opacityFrom ?? 0,
        opacityTo: iconDiv.opacityTo ?? 1,
        scaleFrom: iconDiv.scaleFrom ?? 0,
        scaleTo: iconDiv.scaleTo ?? 1,
        rotateFrom: iconDiv.rotateFrom ?? 0,
        rotateTo: iconDiv.rotateTo ?? 0,
        rotateXFrom: iconDiv.rotateXFrom ?? 0, 
        rotateXTo: iconDiv.rotateXTo ?? 0,
        rotateYFrom: iconDiv.rotateYFrom ?? 0,
        rotateYTo: iconDiv.rotateYTo ?? 0,
        skewXFrom: iconDiv.skewXFrom ?? 0,
        skewXTo: iconDiv.skewXTo ?? 0,
        skewYFrom: iconDiv.skewYFrom ?? 0,
        skewYTo: iconDiv.skewYTo ?? 0,
        directionBlock: iconDiv.directionBlock ?? 'right',
        filterFrom: iconDiv.filterFrom ?? 0,
        filterTo: iconDiv.filterTo ?? 0,
        colorBlockEffect: iconDiv.colorBlockEffect,
        scaleType: iconDiv.scaleType ?? 'scale',
      });
  
      setTimeout(() => {
        // Animazione del button
        effectIn(iconRef.current, animationProps);
      }, iconDiv.delay);
      
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
  }, [iconDiv.effectIn, iconDiv.easing, iconDiv.direction,iconDiv.text]);

  const IconComponent = materialIcons[iconDiv.icon];

  // Styles Icon
  const stylesIcon = {
    width: 'clamp(' + iconDiv.fontSize + 'px,' + iconDiv.fontSizeTablet + 'vw, ' + iconDiv.fontSizeMobile + 'px)',
    height: 'clamp(' + iconDiv.fontSize + 'px,' + iconDiv.fontSizeTablet + 'vw, ' + iconDiv.fontSizeMobile + 'px)',
    fill: iconDiv.color,
    backgroundColor: iconDiv.backgroundColorIcon,
    "--color-hover-icon-inner": iconDiv.colorHover,
    margin: `${iconDiv.margin?.top} ${iconDiv.margin?.right} ${iconDiv.margin?.bottom} ${iconDiv.margin?.left}`, 
    padding: `${iconDiv.padding?.top} ${iconDiv.padding?.right} ${iconDiv.padding?.bottom} ${iconDiv.padding?.left}`, 
    borderWidth: `${iconDiv.backgroundBorderSize?.top} ${iconDiv.backgroundBorderSize?.right} ${iconDiv.backgroundBorderSize?.bottom} ${iconDiv.backgroundBorderSize?.left}`, 
    borderColor: iconDiv.backgroundBorderColor || "#000000",
    borderRadius:  `${iconDiv.backgroundBorderRadius?.top} ${iconDiv.backgroundBorderRadius?.right} ${iconDiv.backgroundBorderRadius?.bottom} ${iconDiv.backgroundBorderRadius?.left}`, 
    "--border-color-hover-icon-inner": iconDiv.backgroundBorderColorHover || "#000000",
    borderStyle: iconDiv.borderStyle || "none",
    "--border-style-hover-icon-inner": iconDiv.borderStyleHover || "none",
    "--border-width-hover-icon-inner": `${iconDiv.backgroundBorderSizeHover?.top} ${iconDiv.backgroundBorderSizeHover?.right} ${iconDiv.backgroundBorderSizeHover?.bottom} ${iconDiv.backgroundBorderSizeHover?.left}`,
    opacity: iconDiv.opacity,
    zIndex: iconDiv.zIndexIcon,
    ...(iconDiv.enableBoxShadow && {
      boxShadow: `${iconDiv.boxShadowX}px ${iconDiv.boxShadowY}px ${iconDiv.boxShadowBlur}px ${iconDiv.boxShadowSpread}px ${iconDiv.colorBoxShadow}`,
      }),
    position:"relative",
    transform: `rotate(${iconDiv.rotate}deg)`,
    "--rotate-hover-icon-inner": iconDiv.rotateHover + "deg" || "0",
    '--fa-animation-duration': iconDiv.iconAnimationDuration + 's',
    "--transition-hover-icon-inner": iconDiv.durationEffectHover + "s" ?? "0.3",
    "--translate-hover-icon-inner": iconDiv.translateEffectHover + "px" || "0",
    "--scale-hover-icon-inner": iconDiv.scaleEffectHover ?? "1",
    "--blur-hover-icon-inner": iconDiv.blurEffectHover + "px" || "0",
    "--opacity-hover-icon-inner": iconDiv.opacityHover ?? 1
  };

  return (
    <div
      style={{
        width:
          iconDiv.width === "custom"
            ? `${iconDiv.widthCustom}%`
            : iconDiv.width,
        justifyContent: iconDiv.align,
          display:'flex'
      }}
      className={
        "content-icon-inner " + iconDiv.hideTitle
      }
      ref={iconRef}
    > 
      
       {IconComponent && (
        <>
        <IconComponent
          key={index}
          className={"slide-icon-inner" + " " + iconDiv.iconAnimation +  " " + iconDiv.animationHover} 
          style={stylesIcon}
        />
        </>
      )}
      
    </div>
  );
};

export default InnerIconRender;