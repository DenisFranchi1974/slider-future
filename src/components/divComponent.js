import { box } from "@wordpress/icons";
import React, { useState, useEffect, useRef  } from "react";
import InnerTextDivComponent from "./innerTextDivComponent";
import InnerImageDivComponent from "./innerImageDivComponent";
import InnerButtonDivComponent from "./innerButtonDivComponent";

const DivComponent = ({ element, index }) => {
  const DivBlock = element.elementDiv || "div";

  const [innerElements, setInnerElements] = useState(element.innerElements || []);


  useEffect(() => {
    setInnerElements(element.innerElements || []);
  }, [element.innerElements]);

  const stylesDiv = {
    backgroundColor: element.backgroundColor || "transparent",
    display: "flex",
    flexDirection: element.layoutDiv === "horizontal" ? "row" : "column",
    textAlign: "center",
    width: "100%",
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
    width:
      element.contentWidthDiv === "custom"
        ? `${element.customContentWidthDiv}%`
        : element.contentWidthDiv,
    height:
      element.contentHeightDiv === "custom"
        ? `${element.customContentHeightDiv}%`
        : element.contentHeightDiv,
    margin: `${element.marginDiv?.top} ${element.marginDiv?.right} ${element.marginDiv?.bottom} ${element.marginDiv?.left}`,
    boxShadow:
      `${element.boxShadowX}px ${element.boxShadowY}px ${element.boxShadowBlur}px ${element.boxShadowSpread}px ${element.colorShadow}` ||
      "0 0 0 0 #000000",
    transform: `rotate(${element.rotateDiv}deg)`,
    "--duration-effect-div": element.durationEffectDiv + "s",
    "--interation-div": element.interationDiv || "forwards",
    "--color-hover-div": element.divColorHover,
    "--border-color-hover-div":
      element.backgroundBorderColorHoverDiv || "#000000",
    "--border-width-hover-div":
      `${element.backgroundBorderSizeDivHover}px` || 0,
    "--opacity-hover-div": element.opacityHoverDiv || 1,
    "--border-style-hover-div": element.borderStyleHoverDiv || "none",
    "--transition-hover-div": element.durationEffectHoverDiv + "s" || "0.3",
    "--translate-hover-div": element.translateEffectHoverDiv + "px" || "-10",
    "--color-effect-hover-div": element.effectHoverColorHoverDiv || "#000000",
    "--rotate-hover-div": element.rotateHoverDiv + "deg" || "0",
    "--delay-effect-div": element.delayEffectDiv + "s",
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
      className={"content-inner-div " + element.hideDiv}
      style={{
        opacity: element.opacityDiv,
        "--delay-hide-seconds-div": element.delayTransition + "s",
      }}
      ref={bannerRef}
    >
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
        style={stylesDiv}
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
                ) : innerElement.type === "image" ? (
                  <InnerImageDivComponent
                    imageDiv={innerElement}
                    imageIndex={innerIndex}
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