import React, { useState } from "react";
import { Button, ButtonGroup } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import ColorLensIcon from '@mui/icons-material/ColorLens';
import TuneIcon from '@mui/icons-material/Tune';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import MouseIcon from '@mui/icons-material/Mouse';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const SectionSelectorElementPostAut = ({ onSectionChange }) => {
  const [activeSection, setActiveSection] = useState("style");

  const handleSectionChange = (section) => {
    setActiveSection(section);
    onSectionChange(section);
  };

  return (
    <div className="content-section-selector">
    <ButtonGroup
      className="section-selector"
      style={{
        marginBottom: "18px",
      }}
    >
      <Button
        className="section-selector-button"
        variant={activeSection === "style" ? "primary" : "secondary"} 
        onClick={() => handleSectionChange("style")}
      >
        <ColorLensIcon />
        {__("Style", "cocoblocks")}
      </Button>
      <Button
        className="section-selector-button"
        variant={activeSection === "adv-style" ? "primary" : "secondary"}
        onClick={() => handleSectionChange("adv-style")}
      >
        <TuneIcon />
        {__("Adv.Style", "cocoblocks")}
      </Button>
      <Button
        className="section-selector-button"
        variant={activeSection === "animation" ? "primary" : "secondary"}
        onClick={() => handleSectionChange("animation")}
      >
        <SlowMotionVideoIcon />
        {__("Animation", "cocoblocks")}
      </Button>
      <Button
        className="section-selector-button"
        variant={activeSection === "hover" ? "primary" : "secondary"}
        onClick={() => handleSectionChange("hover")}
      >
        <MouseIcon />
        {__("Hover", "cocoblocks")}
      </Button>
      <Button
        className="section-selector-button"
        variant={activeSection === "visibility" ? "primary" : "secondary"}
        onClick={() => handleSectionChange("visibility")}
      >
        <DevicesOtherIcon />
        {__("Visibility", "cocoblocks")}
      </Button>
      <Button
        className="section-selector-button"
        variant={activeSection === "hide-title-editor" ? "primary" : "secondary"}
        onClick={() => handleSectionChange("hide-title-editor")}
      >
         <VisibilityOffIcon />
        {__("Hide in editor", "cocoblocks")}
      </Button>
    </ButtonGroup>
    </div>
  );
};

export default SectionSelectorElementPostAut;
