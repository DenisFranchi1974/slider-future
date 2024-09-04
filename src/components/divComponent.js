import { box } from "@wordpress/icons";
import React from "react";
import { useState, useEffect } from 'react';

const DivComponent = ({ element, index}) => {

    const getStylesTitleBlock = (textDiv) => {
      const isBold = textDiv.fontStyle?.fontWeight === "bold";
      return {
        fontSize: textDiv.fontSize
          ? `${textDiv.fontSize}px`
          : "16px",
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
        textDecoration:
          textDiv.fontStyle?.textDecoration || "none",
        lineHeight: textDiv.lineHeight
          ? `${textDiv.lineHeight}`
          : "1.5",
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
          boxShadow: `${textDiv.boxShadowX}px ${textDiv.boxShadowY}px ${textDiv.boxShadowBlur}px ${textDiv.boxShadowSpread}px ${textDiv.colorShadow}` || "0 0 0 0 #000000",
          writingMode: textDiv.textWriteMode || "initial",
          textOrientation: textDiv.textOrientation || "initial",
          "--interation-title-block": textDiv.iteration || "forwards",
          "--duration-effect-title-block": textDiv.durationEffect + "s",
          "--delay-effect-title-block": textDiv.delayEffect + "s",
          "--duration-effect-odd-title-block": textDiv.durationEffectOdd + "s",
          "--duration-effect-even-title-block": textDiv.durationEffectEven + "s",
          "--color-gradient-one-title-div": textDiv.gradinetColorOne,
          "--color-gradient-two-title-div": textDiv.gradinetColorTwo,
          "--color-gradient-three-title-div": textDiv.gradinetColorThree,
          "--color-gradient-four-title-div": textDiv.gradinetColorFour,
          "--color-gradient-five-title-div": textDiv.gradinetColorFive,
      };
    };

      // Definizione della funzione getImageStyleBlock
      const getImageStyleBlock = (imageDiv) => {
        let style = {
          maxWidth: "100%",
          minWidth: "0",
          maxHeight: "100%",
          minHeight: "0",
          border:
            imageDiv.backgroundBorderSizeImage +
            "px solid" +
            imageDiv.backgroundBorderColorImage,
          borderRadius:
            imageDiv.backgroundBorderRadiusImage + "px",
          padding: imageDiv.paddingImage + "px",
          backgroundColor: imageDiv.backgroundColorImage,
          margin: `${imageDiv.marginImage?.top} ${imageDiv.marginImage?.right} ${imageDiv.marginImage?.bottom} ${imageDiv.marginImage?.left}`,
        };

        if (imageDiv.widthImage === "relative") {
          style.width = `${imageDiv.customWidthImage}%`;
        } else if (imageDiv.widthImage === "fixed") {
          style.width = `${imageDiv.customWidthImagePx}px`;
        }

        if (imageDiv.heightImage === "relative") {
          style.height = `${imageDiv.customHeightImage}%`;
        } else if (imageDiv.heightImage === "fixed") {
          style.height = `${imageDiv.customHeightImagePx}px`;
        }

        if (
          imageDiv.widthImage !== "auto" ||
          imageDiv.heightImage !== "auto"
        ) {
          style.objectFit = imageDiv.fit;
        }

        return style;
      };

  
    const DivBlock =
    element.elementDiv || "div";
    return (
      <DivBlock
        className={
          "div-slide " +
          element.positionDiv +
          " " +
          element.layoutDiv +
          "-layout " +
          element.animationDiv + element.playStateDiv +
          " " +
          element.animationHoverDiv 
        }
        data-swiper-parallax-x={element.parallaxDiv}
        data-swiper-parallax-y={element.parallaxDivY}
        data-swiper-parallax-scale={
            element.parallaxDivScale
        }
        data-swiper-parallax-duration={
            element.parallaxDivDuration
        }
        data-swiper-parallax-opacity={
            element.parallaxDivOpacity
        }
        key={index}
        style={{
          backgroundColor:
            element.backgroundColor || "transparent",
          width: "100%",
          display: "flex",
          flexDirection:
            element.layoutDiv === "horizontal"
              ? "row"
              : "column",
          textAlign: "center",
          width: "100%",
          position: "relative",
          visibility: "visible",
          gap: element.gapItemsDiv + "px",
          borderRadius:
            element.backgroundBorderRadiusDiv + "px",
          paddingTop:
            element.backgroundVerticalPaddingDiv + "px",
          paddingBottom:
            element.backgroundVerticalPaddingDiv + "px",
          paddingLeft:
            element.backgroundHorizontalPaddingDiv + "px",
          paddingRight:
            element.backgroundHorizontalPaddingDiv + "px",
          borderStyle: element.borderStyleDiv || "none",
          borderColor: element.backgroundBorderColorDiv,
            borderWidth: `${element.backgroundBorderSizeDiv}px` || 0,
            width: element.contentWidthDiv === 'custom' ? `${element.customContentWidthDiv}%` : element.contentWidthDiv,
            height: element.contentHeightDiv === 'custom' ? `${element.customContentHeightDiv}%` : element.contentHeightDiv,
            margin: `${element.marginDiv?.top} ${element.marginDiv?.right} ${element.marginDiv?.bottom} ${element.marginDiv?.left}`,
            "--box-shadow-x-div" : element.boxShadowX + "px" || "0",
            "--box-shadow-y-div" : element.boxShadowY + "px" || "0",
            "--box-shadow-blur-div" : element.boxShadowBlur + "px" || "0",
            "--box-shadow-color-div" : element.colorShadow || "#000000",
            "--box-shadow-spread-div" : element.boxShadowSpread + "px" || "0",
            opacity: element.opacityDiv,
            transform: `rotate(${element.rotateDiv}deg)`,
            "--duration-effect-div": element.durationEffectDiv + "s",
            "--interation-div": element.interationDiv || "forwards",
            "--color-hover-div": element.divColorHover,
            "--border-color-hover-div": element.backgroundBorderColorHoverDiv || "#000000",
            "--opacity-hover-div": element.opacityHoverDiv || 1,
            "--border-style-hover-div": element.borderStyleHoverDiv || "none",
            "--transition-hover-div": element.durationEffectHoverDiv + 's' || "0.3",
            "--translate-hover-div": element.translateEffectHoverDiv +'px' || "-10",
            "--color-effect-hover-div": element.effectHoverColorHoverDiv || "#000000",
            "--rotate-hover-div": element.rotateHoverDiv + "deg" || "0",
            "--transition-hover-div": element.durationEffectHoverDiv + 's' || "0.3",
        }}
      >
        {element.innerTextDivs &&
        element.innerTextDivs.length > 0
          ? element.innerTextDivs.map(
              (textDiv, textIndex) => {
                // Definisci il tag dinamico
                const TagBlock =
                  textDiv.elementTitle || "h3";


                  const stylesSpan = {
                    "--width-cursor-title-block": textDiv.widthCursor + "px"||"2px",
                    "--color-cursor-title-block": textDiv.cursorColor || "#000000",
                    "--animation-cursor-title-block": textDiv.animationCursor+"s" || "0.75s",
                  }
            
                  const splitTextIntoLettersTitleDiv = (
                    text = "",
                    animation = "",
                    explosionDelay = textDiv.delayEffect|| 0, 
                    explosionDuration = textDiv.durationEffect|| 2,
                    delay = textDiv.delayEffect||0,
                    duration = textDiv.durationEffect || 2,
                    explosionInteration = textDiv.animationCount || 1,
                    implosionInteration = textDiv.animationCount || 1,
                  ) => {
                    // Se l'animazione è "bounce", suddividi il testo in lettere
                    if (animation === "bounce-title-div") {
                      return text.split("").map((letter, index) => (
                        <span key={index} className={`letter ${animation}`} >
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
                            '--x-title-div': `${Math.random() * 200 - 100}px`,  // Posizione X casuale
                            '--y-title-div': `${Math.random() * 200 - 100}px`,  // Posizione Y casuale
                            '--rotation-title-div': `${Math.random() * 360}deg`,  // Rotazione casuale
                            '--explosion-delay-title-div': `${explosionDelay}s`, // Ritardo prima dell'esplosione
                            '--explosion-duration-title-div': `${explosionDuration}s`, // Durata dell'esplosione
                            '--explosion-interaction-count-title-div':`${explosionInteration}`
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
                            '--x-title-div': `${Math.random() * 200 - 100}px`,  // Posizione X casuale
                            '--y-title-div': `${Math.random() * 200 - 100}px`,  // Posizione Y casuale
                            '--rotation-title-div': `${Math.random() * 360}deg`,  // Rotazione casuale
                            '--implosion-delay-title-div': `${delay}s`,
                            '--implosion-duration-title-div': `${duration}s`,
                            '--implosion-interaction-count-title-div':`${implosionInteration}`
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
                            '--letter-index-div': index + 1
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
                            '--letter-index-div': index + 1
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
                            '--letter-index-div': index + 1
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
                            '--letter-index-div': index + 1
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
                            '--letter-index-div': index + 1
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
                            '--letter-index-div': index + 1
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
                            '--letter-index-div': index + 1
                          }}
                        >
                          {letter}
                        </span>
                      ));
                    }
            
            
                    // Se l'animazione non è "bounce" o "typing-effect", restituisci il testo intero
                    return text;
                  };

                  const TypewriterEffect = ({ text, speed = textDiv.speedEffect, pauseDuration = textDiv.pauseEffect }) => {
                    const [displayedText, setDisplayedText] = useState("");
                    const [index, setIndex] = useState(0);
                  
                    useEffect(() => {
                      const typeWriter = () => {
                        if (index < text.length) {
                          setDisplayedText((prev) => prev + text.charAt(index));
                          setIndex(index + 1);
                        } else {
                          setTimeout(() => {
                            setDisplayedText("");  // Resetta il testo visualizzato
                            setIndex(0);           // Resetta l'indice per riavviare l'effetto
                          }, pauseDuration);        // Pausa prima di riavviare
                        }
                      };
                  
                      const timeoutId = setTimeout(typeWriter, speed);
                      return () => clearTimeout(timeoutId);  // Pulizia del timeout
                    }, [index, text, speed, pauseDuration]);
                  
                    return (
                      <span className="typewriter-container-title-div">
                        <span className="typewriter-title-div">{displayedText}</span>
                        <span className="typewriter-cursor-title-div" style={stylesSpan}></span>
                      </span>
                    );
                  };
                  

                return (
                  <div
                    style={{
                      transform: `rotate(${textDiv.rotate}deg)`,
                      opacity: textDiv.opacity,
                      "--color-decoration-title-div" : textDiv.underlineColor || "#000000",
                      "--padding-decoration-title-div" : textDiv.underlinePadding + "px" || "0",
                      "--width-decoration-title-div" : textDiv.underlineWidth + "%" || "100%",
                      "--vertical-decoration-title-div" : textDiv.underlineVertical + "px" || "0",
                      "--horizontal-decoration-title-div" : textDiv.underlineHorizontal + "px" || "0",
                      "--height-decoration-title-div" : textDiv.underlineHeight + "px" || "1",
                      "--animation-decoration-title-div" : textDiv.underlineAnimation || "none",
                      "--animation-decoration-from-title-div" : textDiv.underlineAnimationFrom + "%" || "0",
                      "--animation-decoration-to-title-div" : textDiv.underlineAnimationTo +"%" || "-5",
                      "--animation-decoration-from-size-title-div" : textDiv.underlineFromSizeNew + "%" || "0",
                      "--animation-decoration-to-size-title-div" : textDiv.underlineToSizeNew + "%" || "0",
                      "--animation-decoration-transition-title-div" : textDiv.underlineAnimationTransition + "s" || "0.5",
                      width: textDiv.widthTitleBlock === 'custom' ? `${textDiv.widthCustomTitleBlock}%` : textDiv.widthTitleBlock,
                    }}
                    className={textDiv.decoration}
                  >
                    <TagBlock
                      key={textIndex}
                      className={`title-slide letter ${textDiv.animation}${textDiv.playState}`}
                      style={getStylesTitleBlock(textDiv)}
                      data-swiper-parallax-x={
                        textDiv.parallaxTitle
                      }
                      data-swiper-parallax-y={
                        textDiv.parallaxTitleY
                      }
                      data-swiper-parallax-scale={
                        textDiv.parallaxTitleScale
                      }
                      data-swiper-parallax-duration={
                        textDiv.parallaxTitleDuration
                      }
                      data-swiper-parallax-opacity={
                        textDiv.parallaxTitleOpacity
                      }
                    >
                      {splitTextIntoLettersTitleDiv(
                        textDiv.content,
                        textDiv.animation
                      )}
                    </TagBlock>
                  </div>
                );
              }
            )
          : null}

        {element.innerImageDivs &&
        element.innerImageDivs.length > 0
          ? element.innerImageDivs.map(
              (imageDiv, imageIndex) => (
                <div 
                  style={{
                    transform: `rotate(${imageDiv.rotateImage}deg)`,
                    opacity: imageDiv.opacityImage,
                  }}
                  className="moving-background"
                >
                  <img
                    key={imageIndex}
                    src={imageDiv.imageUrl}
                    alt={imageDiv.alt}
                    style={getImageStyleBlock(imageDiv)}
                    className={`image-with-mask ${imageDiv.blobMask}`}
                    data-swiper-parallax-x={
                      imageDiv.parallaxImage
                    }
                    data-swiper-parallax-y={
                      imageDiv.parallaxImageY
                    }
                    data-swiper-parallax-scale={
                      imageDiv.parallaxImageScale
                    }
                    data-swiper-parallax-duration={
                      imageDiv.parallaxImageDuration
                    }
                    data-swiper-parallax-opacity={
                      imageDiv.parallaxImageOpacity
                    }
                  />
                </div>
              )
            )
          : null}
      </DivBlock>
    );

};

export default DivComponent;