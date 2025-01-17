import React, { useState } from "react";
import { Button, ButtonGroup} from "@wordpress/components";
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import { __ } from "@wordpress/i18n";
import DevicesIcon from '@mui/icons-material/Devices';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';

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
          <InsertCommentIcon />
        {__("Content", "slider-future")}
      </Button>
      <Button
        className="section-selector-button"
        variant={activeSectionSlidePost === "layout" ? "primary" : "secondary"}
        onClick={() => handleSectionChange("layout")}
      >
         <DevicesIcon />
        {__("Layout", "slider-future")}
      </Button>
      <Button
        className="section-selector-button"
        style={{ padding: "6px 12px" }}
        variant={activeSectionSlidePost=== "style" ? "primary" : "secondary"}
        onClick={() => handleSectionChange("style")}
      >
        <ColorLensIcon />
        {__("Style", "slider-future")}
      </Button>
      <Button
        className="section-selector-button"
        variant={activeSectionSlidePost === "effect" ? "primary" : "secondary"}
        onClick={() => handleSectionChange("effect")}
      >
       <BlurOnIcon />
        {__("Effect", "slider-future")}
      </Button>
      <Button
        className="section-selector-button"
        variant={activeSectionSlidePost === "query" ? "primary" : "secondary"}
        onClick={() => handleSectionChange("query")}
      >
        <SavedSearchIcon />
        {__("Query", "slider-future")}
      </Button>
      <Button
        className="section-selector-button"
        variant={activeSectionSlidePost === "element" ? "primary" : "secondary"}
        onClick={() => handleSectionChange("element")}
      >
        <ArtTrackIcon />
        {__("Element", "slider-future")}
      </Button>
    </ButtonGroup>
  );
};

export default SectionSlidePostSelector;
