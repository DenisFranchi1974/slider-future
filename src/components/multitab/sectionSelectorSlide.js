import React, { useState } from "react";
import { Button, ButtonGroup} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import TouchAppIcon from '@mui/icons-material/TouchApp';

const SectionSelectorSlide = ({ onSectionChange }) => {
  const [activeSectionSlide, setActiveSectionSlide] = useState("background");

  const handleSectionChangeSlide = (section) => {
    setActiveSectionSlide(section);
    onSectionChange(section);
  };

  return (
    <ButtonGroup
      className="section-selector"
      style={{
        marginLeft: "-16px",
        marginRight: "-16px",
        marginBottom: "-16px",
      }}
    >
      <Button
        className="section-selector-button"
        variant={activeSectionSlide === "background" ? "primary" : "secondary"}
        onClick={() => handleSectionChangeSlide("background")}
      >
        <WallpaperIcon />
        {__("Background", "cocoblocks")}
      </Button>
      <Button
        className="section-selector-button"
        variant={activeSectionSlide === "layout" ? "primary" : "secondary"}
        onClick={() => handleSectionChangeSlide("layout")}
      >
        <ViewQuiltIcon />
        {__("Layout", "cocoblocks")}
      </Button>
      <Button
        className="section-selector-button"
        variant={activeSectionSlide === "style" ? "primary" : "secondary"}
        onClick={() => handleSectionChangeSlide("style")}
      >
        <ColorLensIcon />
        {__("Style", "cocoblocks")}
      </Button>
      <Button
        className="section-selector-button"
        variant={activeSectionSlide === "filter" ? "primary" : "secondary"}
        onClick={() => handleSectionChangeSlide("filter")}
      >
        <BlurOnIcon />
        {__("Filters", "cocoblocks")}
      </Button>
      <Button
        className="section-selector-button"
        variant={activeSectionSlide === "actions" ? "primary" : "secondary"}
        onClick={() => handleSectionChangeSlide("actions")}
      >
        <TouchAppIcon />
        {__("Actions", "cocoblocks")}
      </Button>
      <Button
        className="section-selector-button"
      >
      </Button>
    </ButtonGroup>
  );
};

export default SectionSelectorSlide;
