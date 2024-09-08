import { box } from "@wordpress/icons";
import React from "react";
import { useState, useEffect } from "react";

const DivComponent = ({ element, index }) => {
  const getStylesTitleBlock = (textDiv) => {
    const isBold = textDiv.fontStyle?.fontWeight === "bold";
    return {
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
    };
  };

  // Definizione della funzione getImageStyleBlock
  const getImageStyleBlock = (imageDiv) => {
    let style = {
      maxWidth: "100%",
      minWidth: "0",
      maxHeight: "100%",
      minHeight: "0",
      borderStyle: imageDiv.borderStyleImage || "none",
      borderColor: imageDiv.backgroundBorderColorImage || "#000000",
      boxShadow:
        `${imageDiv.boxShadowXImage}px ${imageDiv.boxShadowYImage}px ${imageDiv.boxShadowBlurImage}px ${imageDiv.boxShadowSpreadImage}px ${imageDiv.colorShadowImage}` ||
        "0 0 0 0 #000000",
      borderWidth: imageDiv.backgroundBorderSizeImage + "px",
      borderRadius: imageDiv.backgroundBorderRadiusImage + "px",
      padding: imageDiv.paddingImage + "px",
      backgroundColor: imageDiv.backgroundColorImage,
      margin: `${imageDiv.marginImage?.top} ${imageDiv.marginImage?.right} ${imageDiv.marginImage?.bottom} ${imageDiv.marginImage?.left}`,
      "--interation-image-inner": imageDiv.interationImage || "forwards",
      "--spike-width-inner": imageDiv.spikeLeftWidth + "%" || "0",
      "--spike-width-right-inner": imageDiv.spikeRightWidth + "%" || "0",
      "--duration-effect-image-inner": imageDiv.durationEffectImage + "s",
      "--color-hover-image-inner": imageDiv.imageColorHover,
      "--border-color-hover-image-inner":
        imageDiv.backgroundBorderColorHoverImage || "#000000",
      "--opacity-hover-image-inner": imageDiv.opacityHoverImage || 1,
      "--border-style-hover-image-inner":
        imageDiv.borderStyleHoverImage || "none",
      "--border-width-hover-image-inner": imageDiv.backgroundBorderSizeImageHover + "px",
      "--transition-hover-image-inner":
        imageDiv.durationEffectHoverImage + "s" || "0.3",
      "--translate-hover-image-inner":
        imageDiv.translateEffectHoverImage + "px" || "-10",
      "--color-effect-hover-image-inner":
        imageDiv.effectHoverColorHoverImage || "#000000",
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

    if (imageDiv.widthImage !== "auto" || imageDiv.heightImage !== "auto") {
      style.objectFit = imageDiv.fit;
    }

    return style;
  };

  const DivBlock = element.elementDiv || "div";
  return (
    <DivBlock
      className={
        "div-slide " +
        element.positionDiv +
        " " +
        element.layoutDiv +
        "-layout " +
        element.animationDiv +
        element.playStateDiv +
        " " +
        element.animationHoverDiv
      }
      data-swiper-parallax-x={element.parallaxDiv}
      data-swiper-parallax-y={element.parallaxDivY}
      data-swiper-parallax-scale={element.parallaxDivScale}
      data-swiper-parallax-duration={element.parallaxDivDuration}
      data-swiper-parallax-opacity={element.parallaxDivOpacity}
      key={index}
      style={{
        backgroundColor: element.backgroundColor || "transparent",
        width: "100%",
        display: "flex",
        flexDirection: element.layoutDiv === "horizontal" ? "row" : "column",
        textAlign: "center",
        width: "100%",
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
        width:
          element.contentWidthDiv === "custom"
            ? `${element.customContentWidthDiv}%`
            : element.contentWidthDiv,
        height:
          element.contentHeightDiv === "custom"
            ? `${element.customContentHeightDiv}%`
            : element.contentHeightDiv,
        margin: `${element.marginDiv?.top} ${element.marginDiv?.right} ${element.marginDiv?.bottom} ${element.marginDiv?.left}`,
        "--box-shadow-x-div": element.boxShadowX + "px" || "0",
        "--box-shadow-y-div": element.boxShadowY + "px" || "0",
        "--box-shadow-blur-div": element.boxShadowBlur + "px" || "0",
        "--box-shadow-color-div": element.colorShadow || "#000000",
        "--box-shadow-spread-div": element.boxShadowSpread + "px" || "0",
        opacity: element.opacityDiv,
        transform: `rotate(${element.rotateDiv}deg)`,
        "--duration-effect-div": element.durationEffectDiv + "s",
        "--interation-div": element.interationDiv || "forwards",
        "--color-hover-div": element.divColorHover,
        "--border-color-hover-div":
          element.backgroundBorderColorHoverDiv || "#000000",
        "--border-width-hover-div": `${element.backgroundBorderSizeDivHover}px` || 0,
        "--opacity-hover-div": element.opacityHoverDiv || 1,
        "--border-style-hover-div": element.borderStyleHoverDiv || "none",
        "--transition-hover-div": element.durationEffectHoverDiv + "s" || "0.3",
        "--translate-hover-div":
          element.translateEffectHoverDiv + "px" || "-10",
        "--color-effect-hover-div":
          element.effectHoverColorHoverDiv || "#000000",
        "--rotate-hover-div": element.rotateHoverDiv + "deg" || "0",
        "--transition-hover-div": element.durationEffectHoverDiv + "s" || "0.3",
      }}
    >
      {element.innerTextDivs && element.innerTextDivs.length > 0
        ? element.innerTextDivs.map((textDiv, textIndex) => {
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

            return (
              <div
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
                  textDiv.playState
                }
                data-animation-title-div={textDiv.animation}
              >
                <TagBlock
                  key={textIndex}
                  className={`title-slide-div  ${textDiv.animationHover}`}
                  style={getStylesTitleBlock(textDiv)}
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
          })
        : null}

      {element.innerImageDivs && element.innerImageDivs.length > 0
        ? element.innerImageDivs.map((imageDiv, imageIndex) => (
            <div
              style={{
                transform: `rotate(${imageDiv.rotateImage}deg)`,
                opacity: imageDiv.opacityImage,
                "--duration-effect-moving-image-inner":
                  imageDiv.durationEffectImageMoving + "s",
                "--translate-effect-moving-image-inner":
                  imageDiv.translateEffectImageMoving + "px",
                "--duration-effect-moving-image-hover-inner":
                  imageDiv.durationEffectImageMovingHover + "s",
                "--translate-effect-moving-image-hover-inner":
                  imageDiv.translateEffectImageMovingHover + "px",
                "--rotate-hover-image-inner":
                  imageDiv.rotateHoverImage + "deg" || "0",
                "--transition-hover-image-inner":
                  imageDiv.durationEffectHoverImage + "s" || "0.3",
                width: imageDiv.widthImageContent,
              }}
              className={
                "content-img-inner " +
                imageDiv.animationImageMoving +
                " " +
                imageDiv.animationImageMovingHover
              }
            >
              <img
                key={imageIndex}
                src={imageDiv.imageUrl}
                alt={imageDiv.alt}
                style={getImageStyleBlock(imageDiv)}
                className={`img-inner image-with-mask ${imageDiv.blobMask}  ${imageDiv.spikeMask} ${imageDiv.spikeMaskRight} ${imageDiv.animationImage}${imageDiv.playStateImage} ${imageDiv.imageFilter} ${imageDiv.animationHoverImage}`}
                data-swiper-parallax-x={imageDiv.parallaxImage}
                data-swiper-parallax-y={imageDiv.parallaxImageY}
                data-swiper-parallax-scale={imageDiv.parallaxImageScale}
                data-swiper-parallax-duration={imageDiv.parallaxImageDuration}
                data-swiper-parallax-opacity={imageDiv.parallaxImageOpacity}
              />
            </div>
          ))
        : null}
    </DivBlock>
  );
};

export default DivComponent;
