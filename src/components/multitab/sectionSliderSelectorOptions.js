import React, { useState } from "react";
import { Button, ButtonGroup } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import RepeatOneIcon from '@mui/icons-material/RepeatOne';
import LanguageIcon from '@mui/icons-material/Language';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

const SectionSliderSelectorOptions = ({ onSectionChange }) => {
  const [activeSectionSliderOptions, setActiveSectionSliderOptions] =
    useState("animation");

  const handleSectionChangeOptions = (section) => {
    setActiveSectionSliderOptions(section);
    onSectionChange(section);
  };

  return (
    <ButtonGroup className="section-selector">
      <Button
        className="section-selector-button"
        variant={
          activeSectionSliderOptions === "animation" ? "primary" : "secondary"
        }
        onClick={() => handleSectionChangeOptions("animation")}
      >
        < MovieFilterIcon />
        {__("Animation", "cocoblocks")}
      </Button>

      <Button
        className="section-selector-button"
        variant={
          activeSectionSliderOptions === "filter" ? "primary" : "secondary"
        }
        onClick={() => handleSectionChangeOptions("filter")}
      >
        <BlurOnIcon />
        {__("Filters", "cocoblocks")}
      </Button>
      <Button
        className="section-selector-button"
        variant={
          activeSectionSliderOptions === "loop" ? "primary" : "secondary"
        }
        onClick={() => handleSectionChangeOptions("loop")}
      >
        <RepeatOneIcon />
        {__("Loop Layers", "cocoblocks")}
      </Button>
      <Button
        className="section-selector-button"
        variant={
          activeSectionSliderOptions === "language" ? "primary" : "secondary"
        }
        onClick={() => handleSectionChangeOptions("language")}
      >
        <LanguageIcon />
        {__("Language", "cocoblocks")}
      </Button>
      <Button
        className="section-selector-button"
        variant={
          activeSectionSliderOptions === "direction" ? "primary" : "secondary"
        }
        onClick={() => handleSectionChangeOptions("direction")}
      >
        <OpenWithIcon />
        {__("Direction", "cocoblocks")}
      </Button>
      <Button
        className="section-selector-button"
        variant={
          activeSectionSliderOptions === "design" ? "primary" : "secondary"
        }
        onClick={() => handleSectionChangeOptions("design")}
      >
        <DesignServicesIcon />
        {__("Design Tools", "cocoblocks")}
      </Button>
    </ButtonGroup>
  );
};

export default SectionSliderSelectorOptions;
