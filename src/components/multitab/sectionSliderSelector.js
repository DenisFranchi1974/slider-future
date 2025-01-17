import React, { useState } from "react";
import { Button, ButtonGroup } from "@wordpress/components";
import DevicesIcon from '@mui/icons-material/Devices';
import { __ } from "@wordpress/i18n";
import BuildIcon from '@mui/icons-material/Build';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import GrainIcon from '@mui/icons-material/Grain';

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
        <DevicesIcon />
        {__("Layout", "slider-future")}
      </Button>
      <Button
        className="section-selector-button"
        variant={activeSectionSlider === "general" ? "primary" : "secondary"}
        onClick={() => handleSectionChange("general")}
      >
        <BuildIcon />
        {__("General", "slider-future")}
      </Button>
      <Button
        className="section-selector-button"
        style={{ padding: "6px 12px" }}
        variant={activeSectionSlider=== "style" ? "primary" : "secondary"}
        onClick={() => handleSectionChange("style")}
      >
        <ColorLensIcon />
        {__("Style", "slider-future")}
      </Button>
      <Button
        className="section-selector-button"
        variant={activeSectionSlider === "content" ? "primary" : "secondary"}
        onClick={() => handleSectionChange("content")}
      >
        <InsertCommentIcon />
        {__("Content", "slider-future")}
      </Button>
      <Button
        className="section-selector-button"
        variant={activeSectionSlider === "skin" ? "primary" : "secondary"}
        onClick={() => handleSectionChange("skin")}
      >
        <FormatPaintIcon />
        {__("Skin", "slider-future")}
      </Button>
      <Button
        className="section-selector-button"
        variant={activeSectionSlider === "mouse-effect" ? "primary" : "secondary"}
        onClick={() => handleSectionChange("mouse-effect")}
      >
      <GrainIcon />
        {__("Mouse Effect", "slider-future")}
      </Button>
    </ButtonGroup>
  );
};

export default SectionSliderSelector;
