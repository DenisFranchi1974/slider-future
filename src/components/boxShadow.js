import React, { useState } from "react";
import { RangeControl} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import "./editor.scss"; // Assicurati di avere il file CSS per lo stile del componente
import ColorOptionsPanel from "./colorPanel";

const BoxShadowControl = ({ 
    slide,
    element, 
    elementIndex,
    slides,
    setAttributes,
}) => {

  const [shadowType, setShadowType] = useState("outside"); // "outside" or "inside"

  // Color Shadow
  const updateColorShadow = (slideId, index, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "title" && i === index
                ? { ...element, colorShadow: value }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };
  
  // Box ShadowX 
  const updateBoxShadowX = (slideId, index, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "title" && i === index
                ? { ...element, boxShadowX: value }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Box ShadowY 
  const updateBoxShadowY = (slideId, index, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "title" && i === index
                ? { ...element, boxShadowY: value }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Box Shadow Blur
  const updateBoxShadowBlur = (slideId, index, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "title" && i === index
                ? { ...element, boxShadowBlur: value }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  // Box Shadow Spread
  const updateBoxShadowSpread = (slideId, index, value) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === slideId
        ? {
            ...slide,
            elements: slide.elements.map((element, i) =>
              element.type === "title" && i === index
                ? { ...element, boxShadowSpread: value }
                : element
            ),
          }
        : slide
    );
    setAttributes({ slides: updatedSlides });
  };

  return (
        <>
        <div
            className="content-title-custom-panel intermedy"
          >
            <h2 className="title-custom-panel">
              {__("Box Shadow", "cocoblocks")}
            </h2>
        </div>
        <div className="content-section-panel" style={{ padding: "0" }}>
          <div className="custom-select color">
              <ColorOptionsPanel
                colorNormal={element.colorShadow}
                setColorNormal={(value) =>
                    updateColorShadow(slide.id, elementIndex, value)
                }
                buttonTitle={__("Color", "cocoblocks")}
                buttonIcon={
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    height="24px" 
                    viewBox="0 -960 960 960" 
                    width="24px" 
                    fill="#e8eaed"
                    style={{
                        marginBottom: "-5px",
                        width: "21px",
                        height: "21px",
                        marginLeft: "-4px",
                    }}
                    ><path d="m389-347 337-337q-11-12-22-23.5T680-729L367-415q4 18 9 34.5t13 33.5Zm338 70q29-35 47-76t23-86L547-189q8 3 16.5 7t16.5 6q44-14 81-40t66-61ZM160-480q0 122 79 211.5T436-163q-72-55-114-137.5T280-480q0-97 42-179.5T436-797q-118 16-197 105.5T160-480Zm317 247 315-314q-4-18-9-35t-13-33L432-278q11 13 21 23.5t24 21.5Zm3 153q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80ZM363-525l247-247q-8-3-14.5-6.5T581-784q-86 28-145.5 97.5T363-525Zm217 45Z"/></svg>
                }
              />
            </div>
          
            <div className="custom-select">
                <RangeControl
                    label={<>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M160-80q-33 0-56.5-23.5T80-160v-480q0-33 23.5-56.5T160-720h80v-80q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240h-80v80q0 33-23.5 56.5T640-80H160Zm160-240h480v-480H320v480Z"/></svg>
                    {__("X Position", "cocoblocks")}</>}
                    value={element.boxShadowX}
                    onChange={(value) =>
                        updateBoxShadowX(slide.id, elementIndex, value)
                    }
                    min={-100}
                    max={100}
                    step={1}
                />
            </div>
            <div className="custom-select">
                <RangeControl
                 label={<>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M160-80q-33 0-56.5-23.5T80-160v-480q0-33 23.5-56.5T160-720h80v-80q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240h-80v80q0 33-23.5 56.5T640-80H160Zm160-240h480v-480H320v480Z"/></svg>
                    {__("Y Position", "cocoblocks")}</>}
                value={element.boxShadowY}
                onChange={(value) =>
                    updateBoxShadowY(slide.id, elementIndex, value)
                }
                min={-100}
                max={100}
                step={1}
                />
           </div>
           <div className="custom-select">
                <RangeControl
                label={<><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M680-80v-120H560v-80h120v-120h80v120h120v80H760v120h-80Zm-97-427ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 15-1 29t-3 28q-30-26-67.5-40.5T728-480l64-67q-4-18-9-35t-13-33L432-278q11 13 22.5 25t25.5 23q2 42 17 79t41 67q-14 2-28.5 3T480-80Zm-91-267 337-337q-11-12-22-23.5T680-729L367-415q4 18 9 34.5t13 33.5Zm-26-178 247-247q-8-3-14.5-6.5T581-784q-86 28-145.5 97.5T363-525Zm-203 45q0 122 79 211.5T436-163q-72-55-114-137.5T280-480q0-97 42-179.5T436-797q-118 16-197 105.5T160-480Z"/></svg>{__("Blur", "cocoblocks")}</>}
                value={element.boxShadowBlur}
                onChange={(value) =>
                    updateBoxShadowBlur(slide.id, elementIndex, value)
                }
                min={0}
                max={100}
                step={1}
                />
                </div>
                <div className="custom-select">
                <RangeControl
                  label={<><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M680-80v-120H560v-80h120v-120h80v120h120v80H760v120h-80Zm-97-427ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 15-1 29t-3 28q-30-26-67.5-40.5T728-480l64-67q-4-18-9-35t-13-33L432-278q11 13 22.5 25t25.5 23q2 42 17 79t41 67q-14 2-28.5 3T480-80Zm-91-267 337-337q-11-12-22-23.5T680-729L367-415q4 18 9 34.5t13 33.5Zm-26-178 247-247q-8-3-14.5-6.5T581-784q-86 28-145.5 97.5T363-525Zm-203 45q0 122 79 211.5T436-163q-72-55-114-137.5T280-480q0-97 42-179.5T436-797q-118 16-197 105.5T160-480Z"/></svg>{__("Spread", "cocoblocks")}</>}
                value={element.boxShadowSpread}
                onChange={(value) =>
                    updateBoxShadowSpread(slide.id, elementIndex, value)
                }
                min={-100}
                max={100}
                step={1}
                />
            </div>
    </div>
    </>
  );
};

export default BoxShadowControl;
