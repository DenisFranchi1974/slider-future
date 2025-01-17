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
    <div className="content-section-selector">
    <ButtonGroup
      className="section-selector"
      style={{
        marginBottom: "-16px",
      }}
    >
      <Button
        className="section-selector-button"
        variant={activeSectionSlide === "background" ? "primary" : "secondary"}
        onClick={() => handleSectionChangeSlide("background")}
      >
        <WallpaperIcon />
        {__("Background", "slider-future")}
      </Button>
      <Button
        className="section-selector-button"
        variant={activeSectionSlide === "layout" ? "primary" : "secondary"}
        onClick={() => handleSectionChangeSlide("layout")}
      >
        <ViewQuiltIcon />
        {__("Layout", "slider-future")}
      </Button>
      <Button
        className="section-selector-button"
        variant={activeSectionSlide === "style" ? "primary" : "secondary"}
        onClick={() => handleSectionChangeSlide("style")}
      >
        <ColorLensIcon />
        {__("Style", "slider-future")}
      </Button>
      <Button
        className="section-selector-button"
        variant={activeSectionSlide === "filter" ? "primary" : "secondary"}
        onClick={() => handleSectionChangeSlide("filter")}
      >
        <BlurOnIcon />
        {__("Filters", "slider-future")}
      </Button>
      <Button
        className="section-selector-button"
        variant={activeSectionSlide === "actions" ? "primary" : "secondary"}
        onClick={() => handleSectionChangeSlide("actions")}
      >
        <TouchAppIcon />
        {__("Actions", "slider-future")}
      </Button>
      <Button
        className="section-selector-button"
      >
      </Button>
    </ButtonGroup>
    </div>
  );
};

export default SectionSelectorSlide;
