import React from "react";
import { __ } from "@wordpress/i18n";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const NavigationButtons = ({
  navigation,
  nextRef,
  prevRef,
  swiperButtonNextClasses,
  swiperButtonPrevClasses,
  stylesNavigation,
  navigationIcons,
  navColor,
  sizeNav,
  navigationPosition,
  navigationGap,
  navOffSet,
  offSetSidesNav
}) => {
  if (!navigation) return null;

  if (window.Swiper) {
    const swiper = new window.Swiper(".swiper-container", {
      navigation: {
        nextEl: nextRef.current,
        prevEl: prevRef.current,
      },
    });
    swiper.update();
  }

  return (
    <>
    <div class={"slider-future-nav nav-editor " + navigationPosition} style={{'--nav-gap': navigationGap + 'px','--nav-top':navOffSet + 'px','--nav-left': offSetSidesNav + 'px'}}>

      <div
        ref={prevRef}
        className={swiperButtonPrevClasses}
        style={stylesNavigation}
      >
        {navigationIcons === "default" && (
          <KeyboardArrowLeftIcon style={{width:sizeNav + 'px',height: sizeNav + 'px', fill:navColor}} />
        )}
        {navigationIcons === "one" && (
          <WestIcon style={{width:sizeNav + 'px',height: sizeNav + 'px', fill:navColor}} />
        )}
        {navigationIcons === "two" && (
          <ArrowRightAltIcon style={{width:sizeNav + 'px',height: sizeNav + 'px', fill:navColor, transform:'rotate(180deg)'}} />
        )}
        {navigationIcons === "three" && (
          <KeyboardDoubleArrowLeftIcon style={{width:sizeNav + 'px',height: sizeNav + 'px', fill:navColor}} />
        )}
        {navigationIcons === "four" && (
          <ArrowLeftIcon style={{width:sizeNav + 'px',height: sizeNav + 'px', fill:navColor}} />
        )}
        {navigationIcons === "five" && (
          <RemoveIcon style={{width:sizeNav + 'px',height: sizeNav + 'px', fill:navColor}} />
        )}
        {navigationIcons === "text" && (
          <span style={{ color: navColor, fontSize: sizeNav + "px" }}>
            {__("Prev", "slider-future")}
          </span>
        )}
      </div>
      <div
        ref={nextRef}
        className={swiperButtonNextClasses} 
        style={stylesNavigation}
      >
        {navigationIcons === "default" && (
          <KeyboardArrowRightIcon style={{width:sizeNav + 'px',height: sizeNav + 'px', fill:navColor}} />
        )}
        {navigationIcons === "one" && (
          <EastIcon style={{width:sizeNav + 'px',height: sizeNav + 'px', fill:navColor}} />
        )}
        {navigationIcons === "two" && (
          <ArrowRightAltIcon style={{width:sizeNav + 'px',height: sizeNav + 'px', fill:navColor}} />
        )}
        {navigationIcons === "three" && (
          <KeyboardDoubleArrowRightIcon style={{width:sizeNav + 'px',height: sizeNav + 'px', fill:navColor}} />
        )}
        {navigationIcons === "four" && (
          <ArrowRightIcon style={{width:sizeNav + 'px',height: sizeNav + 'px', fill:navColor}} />
        )}
        {navigationIcons === "five" && (
          <AddIcon style={{width:sizeNav + 'px',height: sizeNav + 'px', fill:navColor}} />
        )}
        {navigationIcons === "text" && (
          <span style={{ color: navColor, fontSize: sizeNav + "px" }}>
            {__("Next", "slider-future")}
          </span>
        )}
      </div>
      </div>
    </>
  );
};

export default NavigationButtons;
