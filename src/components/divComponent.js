import React from "react";

const DivComponent = ({ element, index }) => {


    const getStylesTitleBlock = (textDiv) => ({
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
        fontStyle: textDiv.fontStyle?.fontStyle || "normal",
        fontWeight: textDiv.fontStyle?.fontWeight || "normal",
        textDecoration:
          textDiv.fontStyle?.textDecoration || "none",
        lineHeight: textDiv.lineHeight
          ? `${textDiv.lineHeight}`
          : "1.5",
        width: "100%", // Mantiene la larghezza al 100%
        fontFamily: textDiv.fontFamily || "inherit", // Inherit se non specificato
        margin: textDiv.marginTitle
          ? `${textDiv.marginTitle.top} ${textDiv.marginTitle.right} ${textDiv.marginTitle.bottom} ${textDiv.marginTitle.left}`
          : "0",
        padding: textDiv.padding || "0", // Mantiene il padding come nell'originale
      });

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
          element.animationDiv + element.playStateDiv
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
        }}
      >
        {element.innerTextDivs &&
        element.innerTextDivs.length > 0
          ? element.innerTextDivs.map(
              (textDiv, textIndex) => {
                // Definisci il tag dinamico
                const TagBlock =
                  textDiv.elementTitle || "h3";

                return (
                  <div
                    style={{
                      transform: `rotate(${textDiv.rotate}deg)`,
                      opacity: textDiv.opacity,
                    }}
                    className={element.decoration}
                  >
                    <TagBlock
                      key={textIndex}
                      className={`title-slide letter ${textDiv.animation}`}
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
                      {splitTextIntoLetters(
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