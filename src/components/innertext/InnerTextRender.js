import React, { useEffect, useRef, useState } from "react";
import { animationsIn, getAnimationProps} from '../../animate';
import {handleMouseEnter, handleMouseLeave} from '../../animate/animationIn'

const InnerTextRender = ({ textDiv, textIndex, onPlay }) => {

  const textRef = useRef(null); // Ref per il contenitore del testo
  const [hasPlayed, setHasPlayed] = useState(false); // Stato per tracciare se l'animazione è stata attivata
  const typewriteRef = useRef(null);

  const [typewriterTexts, setTypewriterTexts] = useState([
    textDiv.textTypeWriterOne,
    textDiv.textTypeWriterTwo,
    textDiv.textTypeWriterThree,
    textDiv.textTypeWriterFour
  ]);

  useEffect(() => {
    setTypewriterTexts([
      textDiv.textTypeWriterOne,
      textDiv.textTypeWriterTwo,
      textDiv.textTypeWriterThree,
      textDiv.textTypeWriterFour
    ]);
  }, [
    textDiv.textTypeWriterOne,
    textDiv.textTypeWriterTwo,
    textDiv.textTypeWriterThree,
    textDiv.textTypeWriterFour
  ]);

  useEffect(() => {
    if (textDiv.enableTypeWriter === true) {
      class TxtType {
        constructor(el, toRotate, period) {
          // Rimuove i testi vuoti o assegna un array vuoto se `toRotate` non è valido
          this.toRotate = Array.isArray(toRotate)
            ? toRotate.filter(txt => txt.trim() !== "")
            : [];
          this.el = el;
          this.loopNum = 0;
          this.period = textDiv.breakCursor || 2000;
          this.txt = "";
          this.isDeleting = false;
          this.tick();
        }
        tick() {
          const i = this.loopNum % this.toRotate.length;
          const fullTxt = this.toRotate[i];
  
          if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
          } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
          }
  
          this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;
  
          let delta = textDiv.speedCursor - Math.random() * 100;
  
          if (this.isDeleting) {
            delta /= 2;
          }
  
          if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
          } else if (this.isDeleting && this.txt === "") {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
          }
  
          setTimeout(() => this.tick(), delta);
        }
      }
  
      // Avvia l'effetto macchina da scrivere
      if (typewriteRef.current) {
        const toRotateAttr = typewriteRef.current.getAttribute("data-type");
        const period = typewriteRef.current.getAttribute("data-period");
  
        // Controlla che `toRotateAttr` sia una stringa valida JSON
        let toRotate = [];
        try {
          toRotate = JSON.parse(toRotateAttr) || [];
        } catch (error) {
          console.warn("data-type attribute is not valid JSON:", error);
        }
  
        if (Array.isArray(toRotate) && toRotate.length > 0) {
          new TxtType(typewriteRef.current, toRotate, period);
        }
      }
    }
  }, [textDiv.enableTypeWriter]);
  

  // Funzione per attivare l'animazione
  const playAnimation = () => {
    const effectIn = animationsIn[textDiv.effectIn];
   
    // Converti il valore di loop in un numero
    const loopCount = (typeof textDiv.loop === 'string' && textDiv.loop.toLowerCase() === 'true') 
    
    ? 5
    : (parseInt(textDiv.loop) >= 1 && parseInt(textDiv.loop) <= 10) 
    ? parseInt(textDiv.loop) 
    : 1; // Imposta un valore di default se non è in un intervallo valido

    if (effectIn ) {
     // textRef.current.style.opacity = 0; // Reset
      const animationProps = getAnimationProps({
        duration: textDiv.duration ?? 800,
        delay: textDiv.delay ?? 0, 
        endDelay: textDiv.endDelay ?? 0,
        easing: textDiv.easing ?? 'linear', 
        direction: textDiv.direction ?? 'normal',
        loop: loopCount,
        startXFrom: textDiv.startXFrom ?? 100, 
        startXTo: textDiv.startXTo ?? 0, 
        startYFrom: textDiv.startYFrom ?? 0,
        startYTo: textDiv.startYTo ?? 0,
        stagger: textDiv.stagger ?? 80,
        textSplitEffect: textDiv.textSplitEffect,
        opacityFrom: textDiv.opacityFrom ?? 0,
        opacityTo: textDiv.opacityTo ?? 1,
        scaleFrom: textDiv.scaleFrom ?? 0,
        scaleTo: textDiv.scaleTo ?? 1,
        rotateFrom: textDiv.rotateFrom ?? 0,
        rotateTo: textDiv.rotateTo ?? 0,
        rotateXFrom: textDiv.rotateXFrom ?? 0, 
        rotateXTo: textDiv.rotateXTo ?? 0,
        rotateYFrom: textDiv.rotateYFrom ?? 0,
        rotateYTo: textDiv.rotateYTo ?? 0,
        skewXFrom: textDiv.skewXFrom ?? 0,
        skewXTo: textDiv.skewXTo ?? 0,
        skewYFrom: textDiv.skewYFrom ?? 0,
        skewYTo: textDiv.skewYTo ?? 0,
        directionBlock: textDiv.directionBlock ?? 'right',
        filterFrom: textDiv.filterFrom ?? 0,
        filterTo: textDiv.filterTo ?? 0,
        colorBlockEffect: textDiv.colorBlockEffect,
        scaleType: textDiv.scaleType ?? 'scale',
      });
  
      setTimeout(() => {
        // Animazione del testo
        effectIn(textRef.current, animationProps);
      }, textDiv.delay);
      
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
    if (textRef.current && !hasPlayed) {
      textRef.current.style.opacity = 1;
    }
  }, [hasPlayed]);

  // Aggiungi un useEffect per osservare i cambiamenti di effectIn ed easing
  useEffect(() => {
    playAnimation();
  }, [textDiv.effectIn, textDiv.easing, textDiv.direction,textDiv.content]);

    const isBold = textDiv.fontStyle?.fontWeight === "bold";

    const getStylesTitleBlock =  {
          fontSize: 'clamp(' + textDiv.fontSizeMobile + 'px,' + textDiv.fontSizeTablet + 'vw, ' + textDiv.fontSize + 'px)',
          color: textDiv.textColor || "#000000",
          '--color-hover-inner': textDiv.textColorHover,
          '--color-cursor-inner': textDiv.textColor,
          '--cursor-width-inner': textDiv.widthCursor + "px",
          backgroundColor: textDiv.backgroundColor,
          textAlign: textDiv.textAlign || "left",
          letterSpacing: textDiv.letterSpacingTitleBlock + "px",
          fontStyle: textDiv.fontStyle?.fontStyle || "normal",
          fontWeight: isBold ? "bold" : textDiv.fontWeightTitleBlock || "normal",
          textDecoration: textDiv.fontStyle?.textDecoration || "none",
          lineHeight: textDiv.lineHeight ? `${textDiv.lineHeight}` : "1.5",
          fontFamily: textDiv.fontFamilyTitleBlock || "inherit", // Inherit se non specificato
          margin: textDiv.marginTitle
            ? `${textDiv.marginTitle.top} ${textDiv.marginTitle.right} ${textDiv.marginTitle.bottom} ${textDiv.marginTitle.left}`
            : "0",
          padding: `${textDiv.paddingTitleBlock?.top} ${textDiv.paddingTitleBlock?.right} ${textDiv.paddingTitleBlock?.bottom} ${textDiv.paddingTitleBlock?.left}`, // Usa i valori aggi
          borderStyle: textDiv.borderStyle || "none",
          borderWidth: `${textDiv.backgroundBorderSize?.top} ${textDiv.backgroundBorderSize?.right} ${textDiv.backgroundBorderSize?.bottom} ${textDiv.backgroundBorderSize?.left}`,
          borderColor: textDiv.backgroundBorderColor || "#000000",
          borderRadius: `${textDiv.backgroundBorderRadius?.top} ${textDiv.backgroundBorderRadius?.right} ${textDiv.backgroundBorderRadius?.bottom} ${textDiv.backgroundBorderRadius?.left}`,
          borderStyle: textDiv.borderStyle ?? "none",
          ...(textDiv.enableTextShadow && {
            textShadow: `${textDiv.textShadowX}px ${textDiv.textShadowY}px ${textDiv.textShadowBlur}px ${textDiv.colorTextShadow}`,
            }),
            ...(textDiv.enableBoxShadow && {
            boxShadow: `${textDiv.boxShadowX}px ${textDiv.boxShadowY}px ${textDiv.boxShadowBlur}px ${textDiv.boxShadowSpread}px ${textDiv.colorBoxShadow}`,
            }),
            ...(textDiv.enableStroke && {
            '-webkit-text-stroke-width': textDiv.stroke + "px",
            '-webkit-text-stroke-color': textDiv.colorStroke,
            }),
            transform: `rotate(${textDiv.rotate}deg)`,
            mixBlendMode: textDiv.blendMode,
          writingMode: textDiv.textWriteMode || "initial",
          textOrientation: textDiv.textOrientation || "initial",
          position:textDiv.positionInnerText,
          top: textDiv.verticalPositionInnerText + 'px',
          left: textDiv.horizontalPositionInnerText + 'px',
          zIndex: textDiv.zIndexTitle,
      };
    
                // Definisci il tag dinamico
                const TagBlock = textDiv.elementTitle || "h3";

                return (
                  <div
                    style={{
                      opacity: textDiv.opacity,
                      width:
                        textDiv.widthTitleBlock === "custom"
                          ? `${textDiv.widthCustomTitleBlock}%`
                          : textDiv.widthTitleBlock,
                    }}
                    className={
                      "content-title-div " +
                      " " + textDiv.hideTitle 
                    }
                  >
                    <TagBlock
                      key={textIndex}
                      className={"title-slide-div"}
                      style={getStylesTitleBlock}
                      ref={textRef}
                      onMouseEnter={(e) => handleMouseEnter(e, { 
                        durationHover: textDiv.durationHover ?? 800,
                        effectHover:textDiv.effectHover,
                        easingHover:textDiv.easingHover ?? 'linear',
                        opacityHover:textDiv.opacityHover ?? 1,
                        filterHover:textDiv.filterHover ?? 0,
                        startXHover:textDiv.startXHover ?? 100,
                        startYHover:textDiv.startYHover ?? 0,
                        scaleHover:textDiv.scaleHover ?? 1,
                        rotateHover:textDiv.rotateHover ?? 0,
                        rotateXHover:textDiv.rotateXHover ?? 0,
                        rotateYHover:textDiv.rotateYHover ?? 0,
                        skewXHover:textDiv.skewXHover ?? 0,
                        skewYHover:textDiv.skewYHover ?? 0,
                        scaleTypeHover:textDiv.scaleTypeHover ?? 'scale',
                      })} // Passa element.duration
                      onMouseLeave={(e) => handleMouseLeave(e, { 
                        durationHover: textDiv.durationHover ?? 800,
                        easingHover:textDiv.easingHover ?? 'linear',
                      })} // Passa element.duration
                    >
                      { textDiv.content}
                       {textDiv.enableTypeWriter && (
                        <>
                          <span
                            ref={typewriteRef}
                            data-period="2000"
                            data-type={JSON.stringify(typewriterTexts)}
                          ></span>
                          <span className="wrap"></span>
                        </>
                      )}
                    </TagBlock>
                  </div>
                 
                );
};

export default InnerTextRender;