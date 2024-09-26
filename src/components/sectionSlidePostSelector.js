import React, { useState } from "react";
import { Button, ButtonGroup, Icon } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

const SectionSlidePostSelector = ({ onSectionChange }) => {
  const [activeSectionSlidePost, setActiveSectionSlidePost] = useState("content");

  const handleSectionChange = (section) => {
    setActiveSectionSlidePost(section);
    onSectionChange(section);
  };

  return (
    <ButtonGroup className="section-selector">
      <Button
        className="section-selector-button"
        variant={activeSectionSlidePost === "content" ? "primary" : "secondary"}
        onClick={() => handleSectionChange("content")}
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
        {__("Content", "cocoblocks")}
      </Button>
      <Button
        className="section-selector-button"
        variant={activeSectionSlidePost === "layout" ? "primary" : "secondary"}
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
        style={{ padding: "6px 12px" }}
        variant={activeSectionSlidePost=== "style" ? "primary" : "secondary"}
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
        variant={activeSectionSlidePost === "element" ? "primary" : "secondary"}
        onClick={() => handleSectionChange("element")}
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
        {__("Element", "cocoblocks")}
      </Button>
    </ButtonGroup>
  );
};

export default SectionSlidePostSelector;
