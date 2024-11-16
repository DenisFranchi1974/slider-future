import React, { useState } from "react";
import { Button, ButtonGroup, Icon } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

const SectionSliderSelectorNavigation = ({ onSectionChange }) => {
  const [activeSectionSliderNavigation, setActiveSectionSliderNavigation] =
    useState("progress");

  const handleSectionChangeNavigation = (section) => {
    setActiveSectionSliderNavigation(section);
    onSectionChange(section);
  };

  return (
    <ButtonGroup className="section-selector">
      <Button
        className="section-selector-button"
        variant={
          activeSectionSliderNavigation === "progress" ? "primary" : "secondary"
        }
        onClick={() => handleSectionChangeNavigation("progress")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
        >
          <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80ZM253-253l227-227v-320q-134 0-227 93t-93 227q0 64 24 123t69 104Z" />
        </svg>
        {__("Progress", "cocoblocks")}
      </Button>
      <Button
        className="section-selector-button"
        variant={
          activeSectionSliderNavigation === "arrow" ? "primary" : "secondary"
        }
        onClick={() => handleSectionChangeNavigation("arrow")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
        >
          <path d="M280-160 80-360l200-200 56 57-103 103h287v80H233l103 103-56 57Zm400-240-56-57 103-103H440v-80h287L624-743l56-57 200 200-200 200Z" />
        </svg>
        {__("Arrow", "cocoblocks")}
      </Button>

      <Button
        className="section-selector-button"
        variant={
          activeSectionSliderNavigation === "bullet" ? "primary" : "secondary"
        }
        onClick={() => handleSectionChangeNavigation("bullet")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
        >
          <path d="M160-400q-33 0-56.5-23.5T80-480q0-33 23.5-56.5T160-560q33 0 56.5 23.5T240-480q0 33-23.5 56.5T160-400Zm0-54q11 0 18.5-7.5T186-480q0-11-7.5-18.5T160-506q-11 0-18.5 7.5T134-480q0 11 7.5 18.5T160-454Zm214 54q-33 0-56.5-23.5T294-480q0-33 23.5-56.5T374-560q33 0 56.5 23.5T454-480q0 33-23.5 56.5T374-400Zm0-54q11 0 18.5-7.5T400-480q0-11-7.5-18.5T374-506q-11 0-18.5 7.5T348-480q0 11 7.5 18.5T374-454Zm212 54q-33 0-56.5-23.5T506-480q0-33 23.5-56.5T586-560q33 0 56.5 23.5T666-480q0 33-23.5 56.5T586-400Zm0-54q11 0 18.5-7.5T612-480q0-11-7.5-18.5T586-506q-11 0-18.5 7.5T560-480q0 11 7.5 18.5T586-454Zm214 54q-33 0-56.5-23.5T720-480q0-33 23.5-56.5T800-560q33 0 56.5 23.5T880-480q0 33-23.5 56.5T800-400Z" />
        </svg>
        {__("Bullets", "cocoblocks")}
      </Button>
      <Button
        className="section-selector-button"
        variant={
          activeSectionSliderNavigation === "keyboard" ? "primary" : "secondary"
        }
        onClick={() => handleSectionChangeNavigation("keyboard")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
        >
          <path d="M160-200q-33 0-56.5-23.5T80-280v-400q0-33 23.5-56.5T160-760h640q33 0 56.5 23.5T880-680v400q0 33-23.5 56.5T800-200H160Zm0-80h640v-400H160v400Zm160-40h320v-80H320v80ZM200-440h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM200-560h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM160-280v-400 400Z" />
        </svg>
        {__("Keyboard", "cocoblocks")}
      </Button>
      <Button
        className="section-selector-button"
        variant={
          activeSectionSliderNavigation === "mouse" ? "primary" : "secondary"
        }
        onClick={() => handleSectionChangeNavigation("mouse")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
        >
          <path d="M480-80q-116 0-198-82t-82-198v-240q0-116 82-198t198-82q116 0 198 82t82 198v240q0 116-82 198T480-80Zm40-520h160q0-72-45.5-127T520-796v196Zm-240 0h160v-196q-69 14-114.5 69T280-600Zm200 440q83 0 141.5-58.5T680-360v-160H280v160q0 83 58.5 141.5T480-160Zm0-360Zm40-80Zm-80 0Zm40 80Z" />
        </svg>
        {__("Mouse", "cocoblocks")}
      </Button>
      <Button
        className="section-selector-button"
        variant={
          activeSectionSliderNavigation === "grap" ? "primary" : "secondary"
        }
        onClick={() => handleSectionChangeNavigation("grap")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
        >
          <path d="M402-40q-30 0-56-13.5T303-92L48-465l24-23q19-19 45-22t47 12l116 81v-383q0-17 11.5-28.5T320-840q17 0 28.5 11.5T360-800v537L212-367l157 229q5 8 14 13t19 5h278q33 0 56.5-23.5T760-200v-560q0-17 11.5-28.5T800-800q17 0 28.5 11.5T840-760v560q0 66-47 113T680-40H402Zm38-440v-400q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v400h-80Zm160 0v-360q0-17 11.5-28.5T640-880q17 0 28.5 11.5T680-840v360h-80ZM486-300Z" />
        </svg>
        {__("Grab", "cocoblocks")}
      </Button>
    </ButtonGroup>
  );
};

export default SectionSliderSelectorNavigation;
