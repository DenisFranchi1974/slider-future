import React, { useState } from "react";
import { Button, ButtonGroup, Icon } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

const SectionSliderSelector = ({ onSectionChange }) => {
  const [activeSectionSlider, setActiveSectionSlider] = useState("layout");

  const handleSectionChange = (section) => {
    setActiveSectionSlider(section);
    onSectionChange(section);
  };

  return (
    <ButtonGroup className="section-selector">
      <Button
        className="section-selector-button"
        variant={activeSectionSlider === "layout" ? "primary" : "secondary"}
        onClick={() => handleSectionChange("layout")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
        >
          <path d="M80-160v-120h80v-440q0-33 23.5-56.5T240-800h600v80H240v440h240v120H80Zm520 0q-17 0-28.5-11.5T560-200v-400q0-17 11.5-28.5T600-640h240q17 0 28.5 11.5T880-600v400q0 17-11.5 28.5T840-160H600Zm40-120h160v-280H640v280Zm0 0h160-160Z" />
        </svg>
        {__("Layout", "cocoblocks")}
      </Button>
      <Button
        className="section-selector-button"
        variant={activeSectionSlider === "general" ? "primary" : "secondary"}
        onClick={() => handleSectionChange("general")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
        >
          <path d="M686-132 444-376q-20 8-40.5 12t-43.5 4q-100 0-170-70t-70-170q0-36 10-68.5t28-61.5l146 146 72-72-146-146q29-18 61.5-28t68.5-10q100 0 170 70t70 170q0 23-4 43.5T584-516l244 242q12 12 12 29t-12 29l-84 84q-12 12-29 12t-29-12Zm29-85 27-27-256-256q18-20 26-46.5t8-53.5q0-60-38.5-104.5T386-758l74 74q12 12 12 28t-12 28L332-500q-12 12-28 12t-28-12l-74-74q9 57 53.5 95.5T360-440q26 0 52-8t47-25l256 256ZM472-488Z" />
        </svg>
        {__("General", "cocoblocks")}
      </Button>
      <Button
        className="section-selector-button"
        style={{ padding: "6px 12px" }}
        variant={activeSectionSlider=== "style" ? "primary" : "secondary"}
        onClick={() => handleSectionChange("style")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "20px", height: "20px" }}
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
        >
          <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 32.5-156t88-127Q256-817 330-848.5T488-880q80 0 151 27.5t124.5 76q53.5 48.5 85 115T880-518q0 115-70 176.5T640-280h-74q-9 0-12.5 5t-3.5 11q0 12 15 34.5t15 51.5q0 50-27.5 74T480-80Zm0-400Zm-220 40q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm120-160q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm200 0q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm120 160q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17ZM480-160q9 0 14.5-5t5.5-13q0-14-15-33t-15-57q0-42 29-67t71-25h70q66 0 113-38.5T800-518q0-121-92.5-201.5T488-800q-136 0-232 93t-96 227q0 133 93.5 226.5T480-160Z" />
        </svg>
        {__("Style", "cocoblocks")}
      </Button>
      <Button
        className="section-selector-button"
        variant={activeSectionSlider === "content" ? "primary" : "secondary"}
        onClick={() => handleSectionChange("content")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
        >
          <path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" />
        </svg>
        {__("Content", "cocoblocks")}
      </Button>
      <Button
        className="section-selector-button"
        variant={activeSectionSlider === "skin" ? "primary" : "secondary"}
        onClick={() => handleSectionChange("skin")}
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M600-40H440q-17 0-28.5-11.5T400-80v-240q0-17 11.5-28.5T440-360h40v-120H160q-33 0-56.5-23.5T80-560v-160q0-33 23.5-56.5T160-800h80v-40q0-17 11.5-28.5T280-880h480q17 0 28.5 11.5T800-840v160q0 17-11.5 28.5T760-640H280q-17 0-28.5-11.5T240-680v-40h-80v160h320q33 0 56.5 23.5T560-480v120h40q17 0 28.5 11.5T640-320v240q0 17-11.5 28.5T600-40Zm-120-80h80v-160h-80v160ZM320-720h400v-80H320v80Zm160 600h80-80ZM320-720v-80 80Z"/></svg>
        {__("Skin", "cocoblocks")}
      </Button>
      <Button
        className="section-selector-button"
       
      >
        
      </Button>
    </ButtonGroup>
  );
};

export default SectionSliderSelector;
