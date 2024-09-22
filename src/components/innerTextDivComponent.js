import React from "react";
import { useState, useEffect, useRef } from "react";

const InnerTextDivComponent = ({ textDiv, textIndex}) => {

    const isBold = textDiv.fontStyle?.fontWeight === "bold";

    const getStylesTitleBlock =  {
        
      
          fontSize: textDiv.fontSize ? `${textDiv.fontSize}px` : "16px",
          "--font-size-block-tablet": textDiv.fontSizeTablet
            ? `${textDiv.fontSizeTablet}px`
            : "14px",
          "--font-size-block-mobile": textDiv.fontSizeMobile
            ? `${textDiv.fontSizeMobile}px`
            : "12px",
          color: textDiv.textColor || "#000000",
          textAlign: textDiv.textAlign || "left",
          letterSpacing: textDiv.letterSpacingTitleBlock + "px",
          fontStyle: textDiv.fontStyle?.fontStyle || "normal",
          fontWeight: isBold ? "bold" : textDiv.fontWeightTitleBlock || "normal",
          textDecoration: textDiv.fontStyle?.textDecoration || "none",
          lineHeight: textDiv.lineHeight ? `${textDiv.lineHeight}` : "1.5",
          width: "100%", // Mantiene la larghezza al 100%
          fontFamily: textDiv.fontFamilyTitleBlock || "inherit", // Inherit se non specificato
          margin: textDiv.marginTitle
            ? `${textDiv.marginTitle.top} ${textDiv.marginTitle.right} ${textDiv.marginTitle.bottom} ${textDiv.marginTitle.left}`
            : "0",
          padding: `${textDiv.paddingTitleBlock?.top} ${textDiv.paddingTitleBlock?.right} ${textDiv.paddingTitleBlock?.bottom} ${textDiv.paddingTitleBlock?.left}`, // Usa i valori aggi
          borderStyle: textDiv.borderStyle || "none",
          borderWidth: `${textDiv.backgroundBorderSize}px` || 0,
          borderColor: textDiv.backgroundBorderColor || "#000000",
          borderRadius: `${textDiv.backgroundBorderRadius}px` || 0,
          boxShadow:
            `${textDiv.boxShadowX}px ${textDiv.boxShadowY}px ${textDiv.boxShadowBlur}px ${textDiv.boxShadowSpread}px ${textDiv.colorShadow}` ||
            "0 0 0 0 #000000",
          writingMode: textDiv.textWriteMode || "initial",
          textOrientation: textDiv.textOrientation || "initial",
          opacity: textDiv.opacity,
          "--delay-effect-title-block": textDiv.delayEffect + "s",
          "--duration-effect-odd-title-block": textDiv.durationEffectOdd + "s",
          "--duration-effect-even-title-block": textDiv.durationEffectEven + "s",
          "--color-gradient-one-title-div": textDiv.gradinetColorOne,
          "--color-gradient-two-title-div": textDiv.gradinetColorTwo,
          "--color-gradient-three-title-div": textDiv.gradinetColorThree,
          "--color-gradient-four-title-div": textDiv.gradinetColorFour,
          "--border-style-hover-title-div": textDiv.borderStyleHover || "none",
          "--transition-hover-title-div":
            textDiv.durationEffectHover + "s" || "0.3",
          "--translate-hover-title-div":
            textDiv.translateEffectHover + "px" || "-10",
          "--color-effect-hover-title-div":
            textDiv.effectHoverColorHover || "#000000",
          "--border-color-hover-title-div":
            textDiv.backgroundBorderColorHover || "#000000",
          "--border-width-hover-title-div": `${textDiv.backgroundBorderSizeHover}px` || 0,
          "--opacity-hover-title-div": textDiv.opacityHover || 1,
          "--color-hover-title-div": textDiv.textColorHover,
          position:textDiv.positionInnerText,
          top: textDiv.verticalPositionInnerText + 'px',
          left: textDiv.horizontalPositionInnerText + 'px',
      };
    

                // Definisci il tag dinamico
                const TagBlock = textDiv.elementTitle || "h3";

                const stylesSpan = {
                  "--width-cursor-title-block": textDiv.widthCursor + "px" || "2px",
                  "--color-cursor-title-block": textDiv.cursorColor || "#000000",
                  "--animation-cursor-title-block":
                    textDiv.animationCursor + "s" || "0.75s",
                };
    
                const splitTextIntoLettersTitleDiv = (
                  text = "",
                  animation = "",
                  explosionDelay = textDiv.delayEffect || 0,
                  explosionDuration = textDiv.durationEffect || 2,
                  delay = textDiv.delayEffect || 0,
                  duration = textDiv.durationEffect || 2,
                  explosionInteration = textDiv.animationCount || 1,
                  implosionInteration = textDiv.animationCount || 1
                ) => {
                  // Se l'animazione è "bounce", suddividi il testo in lettere
                  if (animation === "bounce-title-div") {
                    return text.split("").map((letter, index) => (
                      <span key={index} className={`letter ${animation}`}>
                        {letter}
                      </span>
                    ));
                  }
    
                  if (animation === "explode-title-div") {
                    return text.split("").map((letter, index) => (
                      <span
                        key={index}
                        className="explode-title-div"
                        style={{
                          "--x-title-div": `${Math.random() * 200 - 100}px`, // Posizione X casuale
                          "--y-title-div": `${Math.random() * 200 - 100}px`, // Posizione Y casuale
                          "--rotation-title-div": `${Math.random() * 360}deg`, // Rotazione casuale
                          "--explosion-delay-title-div": `${explosionDelay}s`, // Ritardo prima dell'esplosione
                          "--explosion-duration-title-div": `${explosionDuration}s`, // Durata dell'esplosione
                          "--explosion-interaction-count-title-div": `${explosionInteration}`,
                        }}
                      >
                        {letter}
                      </span>
                    ));
                  }
    
                  if (animation === "implode-title-div") {
                    return text.split("").map((letter, index) => (
                      <span
                        key={index}
                        className="implode-title-div"
                        style={{
                          "--x-title-div": `${Math.random() * 200 - 100}px`, // Posizione X casuale
                          "--y-title-div": `${Math.random() * 200 - 100}px`, // Posizione Y casuale
                          "--rotation-title-div": `${Math.random() * 360}deg`, // Rotazione casuale
                          "--implosion-delay-title-div": `${delay}s`,
                          "--implosion-duration-title-div": `${duration}s`,
                          "--implosion-interaction-count-title-div": `${implosionInteration}`,
                        }}
                      >
                        {letter}
                      </span>
                    ));
                  }
    
                  // Se l'animazione è "typing-effect", usa il componente TypewriterEffect
                  if (animation === "typing-effect") {
                    return <TypewriterEffect text={text} />;
                  }
                  // Letter fly in from left
                  if (animation === "letters-fly-in-from-left-div") {
                    return text.split("").map((letter, index) => (
                      <span
                        key={index}
                        className="letters-fly-in-from-left-div"
                        style={{
                          "--letter-index-div": index + 1,
                        }}
                      >
                        {letter}
                      </span>
                    ));
                  }
    
                  // Letters fly in from right
                  if (animation === "letters-fly-in-from-right-div") {
                    return text.split("").map((letter, index) => (
                      <span
                        key={index}
                        className="letters-fly-in-from-right-div"
                        style={{
                          "--letter-index-div": index + 1,
                        }}
                      >
                        {letter}
                      </span>
                    ));
                  }
    
                  // Letters fly in from top
                  if (animation === "letters-fly-in-from-top-div") {
                    return text.split("").map((letter, index) => (
                      <span
                        key={index}
                        className="letters-fly-in-from-top-div"
                        style={{
                          "--letter-index-div": index + 1,
                        }}
                      >
                        {letter}
                      </span>
                    ));
                  }
    
                  // Letters fly in from bottom
                  if (animation === "letters-fly-in-from-bottom-div") {
                    return text.split("").map((letter, index) => (
                      <span
                        key={index}
                        className="letters-fly-in-from-bottom-div"
                        style={{
                          "--letter-index-div": index + 1,
                        }}
                      >
                        {letter}
                      </span>
                    ));
                  }
    
                  // Letter flip from top
                  if (animation === "letter-flip-from-top-div") {
                    return text.split("").map((letter, index) => (
                      <span
                        key={index}
                        className="letter-flip-from-top-div"
                        style={{
                          "--letter-index-div": index + 1,
                        }}
                      >
                        {letter}
                      </span>
                    ));
                  }
    
                  // Letter flip from bottom
                  if (animation === "letter-flip-from-bottom-div") {
                    return text.split("").map((letter, index) => (
                      <span
                        key={index}
                        className="letter-flip-from-bottom-div"
                        style={{
                          "--letter-index-div": index + 1,
                        }}
                      >
                        {letter}
                      </span>
                    ));
                  }
    
                  // Letter flip cycle
                  if (animation === "letter-flip-cycle-div") {
                    return text.split("").map((letter, index) => (
                      <span
                        key={index}
                        className="letter-flip-cycle-div"
                        style={{
                          "--letter-index-div": index + 1,
                        }}
                      >
                        {letter}
                      </span>
                    ));
                  }
                  // Se l'animazione non è "bounce" o "typing-effect", restituisci il testo intero
                  return text;
                };
    
                const TypewriterEffect = ({
                  text,
                  speed = textDiv.speedEffect,
                  pauseDuration = textDiv.pauseEffect,
                }) => {
                  const [displayedText, setDisplayedText] = useState("");
                  const [index, setIndex] = useState(0);
    
                  useEffect(() => {
                    const typeWriter = () => {
                      if (index < text.length) {
                        setDisplayedText((prev) => prev + text.charAt(index));
                        setIndex(index + 1);
                      } else {
                        setTimeout(() => {
                          setDisplayedText(""); // Resetta il testo visualizzato
                          setIndex(0); // Resetta l'indice per riavviare l'effetto
                        }, pauseDuration); // Pausa prima di riavviare
                      }
                    };
    
                    const timeoutId = setTimeout(typeWriter, speed);
                    return () => clearTimeout(timeoutId); // Pulizia del timeout
                  }, [index, text, speed, pauseDuration]);
    
                  return (
                    <span className="typewriter-container-title-div">
                      <span className="typewriter-title-div">{displayedText}</span>
                      <span
                        className="typewriter-cursor-title-div"
                        style={stylesSpan}
                      ></span>
                    </span>
                  );
                };

                // Nascondi l'elemento dopo un tot di tempo
                const bannerRef = useRef(null); // Crea un ref per l'elemento
                const [hideEnabled, setHideEnabled] = useState(textDiv.delayHide); // Stato per abilitare/disabilitare la funzione
                const [hideAfter, setHideAfter] = useState(textDiv.delaySeconds); // Tempo in secondi per nascondere
              
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
                  setHideEnabled(textDiv.delayHide);
                }, [textDiv.delayHide]);
                useEffect(() => {
                  setHideAfter(textDiv.delaySeconds); 
                }, [textDiv.delaySeconds]);

                return (
                 
                  <div
                    ref={bannerRef}
                    style={{
                      transform: `rotate(${textDiv.rotate}deg)`,
                      "--color-decoration-title-div":
                        textDiv.underlineColor || "#000000",
                      "--padding-decoration-title-div":
                        textDiv.underlinePadding + "px" || "0",
                      "--width-decoration-title-div":
                        textDiv.underlineWidth + "%" || "100%",
                      "--vertical-decoration-title-div":
                        textDiv.underlineVertical + "px" || "0",
                      "--horizontal-decoration-title-div":
                        textDiv.underlineHorizontal + "px" || "0",
                      "--height-decoration-title-div":
                        textDiv.underlineHeight + "px" || "1",
                      "--animation-decoration-title-div":
                        textDiv.underlineAnimation || "none",
                      "--animation-decoration-from-title-div":
                        textDiv.underlineAnimationFrom + "%" || "0",
                      "--animation-decoration-to-title-div":
                        textDiv.underlineAnimationTo + "%" || "-5",
                      "--animation-decoration-from-size-title-div":
                        textDiv.underlineFromSizeNew + "%" || "0",
                      "--animation-decoration-to-size-title-div":
                        textDiv.underlineToSizeNew + "%" || "0",
                      "--animation-decoration-transition-title-div":
                        textDiv.underlineAnimationTransition + "s" || "0.5",
                      "--rotate-hover-title-div":
                        textDiv.rotateHover + "deg" || "0",
                      "--interation-title-block": textDiv.iteration || "forwards",
                      "--duration-effect-title-block": textDiv.durationEffect + "s",
                      "--delay-effect-title-block": textDiv.delayEffect + "s",
                      "--delay-hide-seconds-title-block": textDiv.delayTransition + "s",
                      zIndex: textDiv.zIndexTitle,
                      width:
                        textDiv.widthTitleBlock === "custom"
                          ? `${textDiv.widthCustomTitleBlock}%`
                          : textDiv.widthTitleBlock,
                    }}
                    className={
                      "content-title-div letter " +
                      textDiv.decoration +
                      " " +
                      textDiv.animation +
                      textDiv.playState +
                      " " + textDiv.hideTitle 
                      
                    }
                    data-animation-title-div={textDiv.animation}
                  >
                    <TagBlock
                      key={textIndex}
                      className={`title-slide-div title-slide-div-${textIndex} ${textDiv.animationHover}`}
                      style={getStylesTitleBlock}
                      data-swiper-parallax-x={textDiv.parallaxTitle}
                      data-swiper-parallax-y={textDiv.parallaxTitleY}
                      data-swiper-parallax-scale={textDiv.parallaxTitleScale}
                      data-swiper-parallax-duration={textDiv.parallaxTitleDuration}
                      data-swiper-parallax-opacity={textDiv.parallaxTitleOpacity}
                    >
                      {splitTextIntoLettersTitleDiv(
                        textDiv.content,
                        textDiv.animation
                      )}
                    </TagBlock>
                  </div>
                 
                );
};

export default InnerTextDivComponent;