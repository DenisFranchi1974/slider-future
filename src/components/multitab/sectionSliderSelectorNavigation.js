import React, { useState } from "react";
import { Button, ButtonGroup, Icon } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import MouseIcon from '@mui/icons-material/Mouse';
import SwipeIcon from '@mui/icons-material/Swipe';

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
        <DonutLargeIcon />
        {__("Progress", "cocoblocks")}
      </Button>
      <Button
        className="section-selector-button"
        variant={
          activeSectionSliderNavigation === "arrow" ? "primary" : "secondary"
        }
        onClick={() => handleSectionChangeNavigation("arrow")}
      >
        <SwapVertIcon style={{transform:'rotate(90deg)'}} />
        {__("Arrow", "cocoblocks")}
      </Button>

      <Button
        className="section-selector-button"
        variant={
          activeSectionSliderNavigation === "bullet" ? "primary" : "secondary"
        }
        onClick={() => handleSectionChangeNavigation("bullet")}
      >
        <MoreHorizIcon />
        {__("Bullets", "cocoblocks")}
      </Button>
      <Button
        className="section-selector-button"
        variant={
          activeSectionSliderNavigation === "keyboard" ? "primary" : "secondary"
        }
        onClick={() => handleSectionChangeNavigation("keyboard")}
      >
        <KeyboardIcon />
        {__("Keyboard", "cocoblocks")}
      </Button>
      <Button
        className="section-selector-button"
        variant={
          activeSectionSliderNavigation === "mouse" ? "primary" : "secondary"
        }
        onClick={() => handleSectionChangeNavigation("mouse")}
      >
        <MouseIcon />
        {__("Mouse", "cocoblocks")}
      </Button>
      <Button
        className="section-selector-button"
        variant={
          activeSectionSliderNavigation === "grap" ? "primary" : "secondary"
        }
        onClick={() => handleSectionChangeNavigation("grap")}
      >
        <SwipeIcon />
        {__("Grab", "cocoblocks")}
      </Button>
    </ButtonGroup>
  );
};

export default SectionSliderSelectorNavigation;
