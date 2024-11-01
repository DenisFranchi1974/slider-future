import React, { useEffect, useRef, useState } from "react";
import { animationsIn, getAnimationProps} from '../animate';
import {handleMouseEnter, handleMouseLeave, animateBar} from '../animate/animationIn'

import InnerTextDivComponent from "./innerTextDivComponent";
import InnerImageDivComponent from "./innerImageDivComponent";
import InnerButtonDivComponent from "./innerButtonDivComponent";
import IconComponentInner from "./iconComponentInner";
import MenuInnerComponent from "./menuInnerComponent";

const DivComponent = ({ element, index, onPlay }) => {
  const DivBlock = element.elementDiv || "div";

  const [innerElements, setInnerElements] = useState(element.innerElements || []);

  const groupRef = useRef(null); // Ref per il contenitore del testo
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
        // Animazione del testo
        effectIn(groupRef.current, animationProps);
      
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
    if (groupRef.current && !hasPlayed) {
      groupRef.current.style.opacity = 1;
    }
  }, [hasPlayed]);

  // Aggiungi un useEffect per osservare i cambiamenti di effectIn ed easing
  useEffect(() => {
    playAnimation();
  }, [element.effectIn, element.easing, element.direction]);


  useEffect(() => {
    setInnerElements(element.innerElements || []);
  }, [element.innerElements]);

  const stylesDiv = {
    backgroundColor: element.backgroundColor || "transparent",
    display: "flex",
    flexWrap: element.layoutWrap,
    '--justify-content-responsive-div': element.justifyContentResponsiveDiv || 'center',
    flexDirection: element.layoutDiv === "horizontal" ? "row" : "column",
    rotate: element.rotateDiv + "deg",
    position: "relative",
    visibility: "visible",
    gap: element.gapItemsDiv + "px",
    borderRadius: element.backgroundBorderRadiusDiv + "px",
    paddingTop: element.backgroundVerticalPaddingDiv + "px",
    paddingBottom: element.backgroundVerticalPaddingDiv + "px",
    paddingLeft: element.backgroundHorizontalPaddingDiv + "px",
    paddingRight: element.backgroundHorizontalPaddingDiv + "px",
    borderStyle: element.borderStyleDiv || "none",
    borderColor: element.backgroundBorderColorDiv,
    borderWidth: `${element.backgroundBorderSizeDiv}px` || 0,
    height:
      element.contentHeightDiv === "custom"
        ? `${element.customContentHeightDiv}%`
        : element.contentHeightDiv,
    margin: `${element.marginDiv?.top} ${element.marginDiv?.right} ${element.marginDiv?.bottom} ${element.marginDiv?.left}`,
    ...(element.enableBoxShadow && {
      boxShadow: `${element.boxShadowX}px ${element.boxShadowY}px ${element.boxShadowBlur}px ${element.boxShadowSpread}px ${element.colorShadow}`,
      }),
    transform: `rotate(${element.rotateDiv}deg)`,
  };


  return (
    <div
      className={"content-inner-div " + element.hideDiv}
      style={{
        opacity: element.opacityDiv,
        zIndex: element.zIndexDiv,
        width:
      element.contentWidthDiv === "custom"
        ? `${element.customContentWidthDiv}%`
        : element.contentWidthDiv,
      }}
    >
      <DivBlock
        className={
          "div-slide " +
          element.positionDiv +
          " " +
          element.layoutDiv +
          "-layout " 
        }
        key={index}
        style={stylesDiv}
        ref={groupRef}
        onMouseEnter={(e) => handleMouseEnter(e, { 
          durationHover: element.durationHover ?? 800,
          backgroundColorImageHover:element.backgroundColorImageHover,
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
          backgroundColorImage:element.backgroundColor,
          easingHover:element.easingHover ?? 'linear',

        })} // Passa element.duration
      >
        {innerElements &&
          innerElements.map((innerElement, innerIndex) => {
            return (
              <div key={innerIndex}>
                {innerElement.type === "text" ? (
                  <InnerTextDivComponent
                    textDiv={innerElement}
                    textIndex={innerIndex}
                  />
                ) : innerElement.type === "button" ? (
                  <InnerButtonDivComponent
                    buttonDiv={innerElement}
                    buttonIndex={innerIndex}
                  />
                ) : innerElement.type === "icon" ? (
                  <IconComponentInner
                    iconDiv={innerElement}
                    iconIndex={innerIndex}
                  />
                ) : innerElement.type === "image" ? (
                  <InnerImageDivComponent
                    imageDiv={innerElement}
                    imageIndex={innerIndex}
                  />
                ) : innerElement.type === "menu" ? (
                  <MenuInnerComponent
                    menuDiv={innerElement}
                    menuIndex={innerIndex}
                    menuItems={element.menuItems || [{ text: "Home", link: "" }]}
                  />
                ) : null}
                 
              </div>
            );
          })}
      </DivBlock>
    </div>
  );
};

export default DivComponent;