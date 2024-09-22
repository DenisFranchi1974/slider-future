import React from "react";
import { useState, useEffect, useRef } from "react";

const TextComponent = ({ element, index }) => {

  const isBold = element.fontStyle?.fontWeight === "bold";
  // Styles Title
  const stylesTitle = {
    fontSize: element.fontSize + "px",
    "--font-size-tablet": element.fontSizeTablet + "px", 
    "--font-size-mobile": element.fontSizeMobile + "px",
    color: element.textColor,
    "--color-hover": element.textColorHover,
    textAlign: element.textAlign,
    letterSpacing: element.letterSpacing + "px",
    fontStyle: element.fontStyle?.fontStyle || "normal", // Valore di default
    fontWeight: isBold ? "bold" : element.fontWeight || "normal",
    textDecoration: element.fontStyle?.textDecoration || "none", // Valore di default
    lineHeight: element.lineHeight,
    fontFamily: element.fontFamily,
    margin: `${element.marginTitle?.top} ${element.marginTitle?.right} ${element.marginTitle?.bottom} ${element.marginTitle?.left}`, // Usa i valori aggi
    "--duration-effect-odd": element.durationEffectOdd + "s",
    "--duration-effect-even": element.durationEffectEven + "s",
    "--delay-effect": element.delayEffect + "s",
    "--color-gradient-one": element.gradinetColorOne,
    "--color-gradient-two": element.gradinetColorTwo,
    "--color-gradient-three": element.gradinetColorThree,
    "--color-gradient-four": element.gradinetColorFour,
    padding: `${element.paddingTitle?.top} ${element.paddingTitle?.right} ${element.paddingTitle?.bottom} ${element.paddingTitle?.left}`, // Usa i valori aggi
    borderWidth: `${element.backgroundBorderSize}px` || 0,
    borderColor: element.backgroundBorderColor || "#000000",
    borderRadius: `${element.backgroundBorderRadius}px` || 0,
    "--border-color-hover": element.backgroundBorderColorHover || "#000000",
    "--opacity-hover": element.opacityHover || 1,
    borderStyle: element.borderStyle || "none",
    "--border-style-hover": element.borderStyleHover || "none",
    "--border-width-hover": `${element.backgroundBorderSizeHover}px` || 0,
    "--transition-hover": element.durationEffectHover + "s" || "0.3",
    "--translate-hover": element.translateEffectHover + "px" || "-10",
    "--color-effect-hover": element.effectHoverColorHover || "#000000",
    "--box-shadow-x": element.boxShadowX + "px" || "0",
    "--box-shadow-y": element.boxShadowY + "px" || "0",
    "--box-shadow-blur": element.boxShadowBlur + "px" || "0",
    "--box-shadow-color": element.colorShadow || "#000000",
    "--box-shadow-spread": element.boxShadowSpread + "px" || "0",
    writingMode: element.textWriteMode || "initial",
    textOrientation: element.textOrientation || "initial",
    position:"relative",
    opacity: element.opacity,
    transform: `rotate(${element.rotate}deg)`,
    "--rotate-hover": element.rotateHover + "deg" || "0",
  };
  const Tag = element.elementTitle || "h3";
  const stylesSpan = {
    "--width-cursor": element.widthCursor + "px" || "2px",
    "--color-cursor": element.cursorColor || "#000000",
    "--animation-cursor": element.animationCursor + "s" || "0.75s",
  };

  const splitTextIntoLetters = (
    text = "",
    animation = "",
    explosionDelay = element.delayEffect || 0,
    explosionDuration = element.durationEffect || 2,
    delay = element.delayEffect || 0,
    duration = element.durationEffect || 2,
    explosionInteration = element.animationCount || 1,
    implosionInteration = element.animationCount || 1
  ) => {
    // Se l'animazione è "bounce", suddividi il testo in lettere
    if (animation === "bounce") {
      return text.split("").map((letter, index) => (
        <span key={index} className={`letter ${animation}`}>
          {letter}
        </span>
      ));
    }

    if (animation === "explode") {
      return text.split("").map((letter, index) => (
        <span
          key={index}
          className="explode"
          style={{
            "--x": `${Math.random() * 200 - 100}px`, // Posizione X casuale
            "--y": `${Math.random() * 200 - 100}px`, // Posizione Y casuale
            "--rotation": `${Math.random() * 360}deg`, // Rotazione casuale
            "--explosion-delay": `${explosionDelay}s`, // Ritardo prima dell'esplosione
            "--explosion-duration": `${explosionDuration}s`, // Durata dell'esplosione
            "--explosion-interaction-count": `${explosionInteration}`,
          }}
        >
          {letter}
        </span>
      ));
    }

    if (animation === "implode") {
      return text.split("").map((letter, index) => (
        <span
          key={index}
          className="implode"
          style={{
            "--x": `${Math.random() * 200 - 100}px`, // Posizione X casuale
            "--y": `${Math.random() * 200 - 100}px`, // Posizione Y casuale
            "--rotation": `${Math.random() * 360}deg`, // Rotazione casuale
            "--implosion-delay": `${delay}s`,
            "--implosion-duration": `${duration}s`,
            "--implosion-interaction-count": `${implosionInteration}`,
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
    if (animation === "letters-fly-in-from-left") {
      return text.split("").map((letter, index) => (
        <span
          key={index}
          className="letters-fly-in-from-left"
          style={{
            "--letter-index": index + 1,
          }}
        >
          {letter}
        </span>
      ));
    }

    // Letters fly in from right
    if (animation === "letters-fly-in-from-right") {
      return text.split("").map((letter, index) => (
        <span
          key={index}
          className="letters-fly-in-from-right"
          style={{
            "--letter-index": index + 1,
          }}
        >
          {letter}
        </span>
      ));
    }

    // Letters fly in from top
    if (animation === "letters-fly-in-from-top") {
      return text.split("").map((letter, index) => (
        <span
          key={index}
          className="letters-fly-in-from-top"
          style={{
            "--letter-index": index + 1,
          }}
        >
          {letter}
        </span>
      ));
    }

    // Letters fly in from bottom
    if (animation === "letters-fly-in-from-bottom") {
      return text.split("").map((letter, index) => (
        <span
          key={index}
          className="letters-fly-in-from-bottom"
          style={{
            "--letter-index": index + 1,
          }}
        >
          {letter}
        </span>
      ));
    }

    // Letter flip from top
    if (animation === "letter-flip-from-top") {
      return text.split("").map((letter, index) => (
        <span
          key={index}
          className="letter-flip-from-top"
          style={{
            "--letter-index": index + 1,
          }}
        >
          {letter}
        </span>
      ));
    }

    // Letter flip from bottom
    if (animation === "letter-flip-from-bottom") {
      return text.split("").map((letter, index) => (
        <span
          key={index}
          className="letter-flip-from-bottom"
          style={{
            "--letter-index": index + 1,
          }}
        >
          {letter}
        </span>
      ));
    }

    // Letter flip cycle
    if (animation === "letter-flip-cycle") {
      return text.split("").map((letter, index) => (
        <span
          key={index}
          className="letter-flip-cycle"
          style={{
            "--letter-index": index + 1,
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
    speed = element.speedEffect,
    pauseDuration = element.pauseEffect,
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
      <span className="typewriter-container">
        <span className="typewriter">{displayedText}</span>
        <span className="typewriter-cursor" style={stylesSpan}></span>
      </span>
    );
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

  return (
    <div
      style={{
        "--duration-effect": element.durationEffect + "s",
        "--delay-effect": element.delayEffect + "s",
        "--color-decoration": element.underlineColor || "#000000",
        "--padding-decoration": element.underlinePadding + "px" || "0",
        "--width-decoration": element.underlineWidth + "%" || "100%",
        "--vertical-decoration": element.underlineVertical + "px" || "0",
        "--horizontal-decoration": element.underlineHorizontal + "px" || "0",
        "--height-decoration": element.underlineHeight + "px" || "1",
        "--animation-decoration": element.underlineAnimation || "none",
        "--animation-decoration-from":
          element.underlineAnimationFrom + "%" || "0",
        "--animation-decoration-to": element.underlineAnimationTo + "%" || "-5",
        "--animation-decoration-from-size":
          element.underlineFromSizeNew + "%" || "0",
        "--animation-decoration-to-size":
          element.underlineToSizeNew + "%" || "0",
        "--animation-decoration-transition":
          element.underlineAnimationTransition + "s" || "0.5",
        width:
          element.widthTitle === "custom"
            ? `${element.widthCustomTitle}%`
            : element.widthTitle,
        "--interation": element.interation || "forwards",
        "--delay-hide-seconds-title": element.delayTransition + "s",
      }}
      className={
        "content-title-slide letter " +
        element.decoration +
        " " +
        element.animation +
        element.playState +
        " " + element.hideTitle
      }
      data-animation={element.animation}
      ref={bannerRef}
    >
      <Tag
        key={index}
        className={`title-slide  ${element.animationHover}`}
        style={stylesTitle}
        data-swiper-parallax-x={element.parallaxTitle}
        data-swiper-parallax-y={element.parallaxTitleY}
        data-swiper-parallax-scale={element.parallaxTitleScale}
        data-swiper-parallax-duration={element.parallaxTitleDuration}
        data-swiper-parallax-opacity={element.parallaxTitleOpacity}
        data-font-family={element.fontFamily}
        onClick={() => {
          if (element.textLink === "scroll-below") {
            // Scroll down logic
            window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
          } else if (element.textLink === "scroll-to-id") {
            // Scroll to specific ID logic
            const targetElement = document.getElementById(element.scrollToId);
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: "smooth" });
            }
          }
        }}
        href={element.textLink === "link" ? element.linkUrl : undefined}
      >
        {splitTextIntoLetters(element.text, element.animation)}
      </Tag>
    </div>
  );
};

export default TextComponent;
