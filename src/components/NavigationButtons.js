import React from "react";
import { __ } from "@wordpress/i18n";

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
}) => {
  if (!navigation) return null;

  if (window.Swiper) {
    const swiper = new window.Swiper(".swiper-container", {
      navigation: {
        nextEl: nextRef.current,
        prevEl: prevRef.current,
      },
      // Altre opzioni di configurazione di Swiper
    });
    swiper.update();
  }

  return (
    <>
      {/* Pulsante Avanti */}
      <div
        ref={nextRef}
        className={swiperButtonNextClasses}
        style={stylesNavigation}
      >
        {navigationIcons === "default" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={sizeNav + "px"}
            height={sizeNav + "px"}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <mask
              id="a"
              width={sizeNav + "px"}
              height={sizeNav + "px"}
              x="0"
              y="0"
              maskUnits="userSpaceOnUse"
            >
              <path fill={navColor} d="M0 0h24v24H0z" />
            </mask>
            <g mask="url(#a)">
              <path
                fill={navColor}
                d="M9.4 17.654 8.346 16.6l4.6-4.6-4.6-4.6L9.4 6.346 15.054 12 9.4 17.654Z"
              />
            </g>
          </svg>
        )}
        {navigationIcons === "one" && (
          <svg
            width={sizeNav + "px"}
            height={sizeNav + "px"}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_7_1879"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width={sizeNav + "px"}
              height={sizeNav + "px"}
            >
              <rect
                width={sizeNav + "px"}
                height={sizeNav + "px"}
                fill={navColor}
              />
            </mask>
            <g mask="url(#mask0_7_1879)">
              <path
                d="M14.05 17.65L13 16.575L16.825 12.75H4.29999V11.25H16.825L13 7.42501L14.05 6.35001L19.7 12L14.05 17.65Z"
                fill={navColor}
              />
            </g>
          </svg>
        )}
        {navigationIcons === "two" && (
          <svg
            width={sizeNav + "px"}
            height={sizeNav + "px"}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_315_300"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width={sizeNav + "px"}
              height={sizeNav + "px"}
            >
              <rect
                width={sizeNav + "px"}
                height={sizeNav + "px"}
                fill={navColor}
              />
            </mask>
            <g mask="url(#mask0_315_300)">
              <path
                d="M17.5 16.1538L16.4308 15.1L18.7808 12.75H3.25003V11.25H18.7808L16.4462 8.89999L17.5154 7.84616L21.6538 12L17.5 16.1538Z"
                fill={navColor}
              />
            </g>
          </svg>
        )}
        {navigationIcons === "three" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={sizeNav + "px"}
            viewBox="0 -960 960 960"
            width={sizeNav + "px"}
            fill={navColor}
          >
            <path d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z" />
          </svg>
        )}
        {navigationIcons === "four" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={sizeNav + "px"}
            viewBox="0 -960 960 960"
            width={sizeNav + "px"}
            fill={navColor}
          >
            <path d="M400-280v-400l200 200-200 200Z" />
          </svg>
        )}
        {navigationIcons === "five" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={sizeNav + "px"}
            viewBox="0 -960 960 960"
            width={sizeNav + "px"}
            fill={navColor}
          >
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
          </svg>
        )}
        {navigationIcons === "text" && (
          <span style={{ color: navColor, fontSize: sizeNav + "px" }}>
            {__("Next", "cocoblocks")}
          </span>
        )}
      </div>

      {/* Pulsante Precedente */}
      <div
        ref={prevRef}
        className={swiperButtonPrevClasses}
        style={stylesNavigation}
      >
        {navigationIcons === "default" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={sizeNav + "px"}
            height={sizeNav + "px"}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <mask
              id="mask0_7_1873"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width={sizeNav + "px"}
              height={sizeNav + "px"}
            >
              <rect
                width={sizeNav + "px"}
                height={sizeNav + "px"}
                fill={navColor}
              />
            </mask>
            <g mask="url(#mask0_7_1873)">
              <path
                d="M14 17.6538L8.34619 12L14 6.34616L15.0538 7.39999L10.4538 12L15.0538 16.6L14 17.6538Z"
                fill={navColor}
              />
            </g>
          </svg>
        )}
        {navigationIcons === "one" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={sizeNav + "px"}
            viewBox="0 -960 960 960"
            width={sizeNav + "px"}
            fill={navColor}
          >
            <path d="M400-240 160-480l240-240 56 58-142 142h486v80H314l142 142-56 58Z" />
          </svg>
        )}
        {navigationIcons === "two" && (
          <svg
            width={sizeNav + "px"}
            height={sizeNav + "px"}
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_433_1472"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width={sizeNav + "px"}
              height={sizeNav + "px"}
            >
              <path
                d="M0.97765 24.9757L24.9776 25.0244L25.0263 1.02446L1.02632 0.975799L0.97765 24.9757Z"
                fill={navColor}
              />
            </mask>
            <g mask="url(#mask0_433_1472)">
              <path
                d="M7.51041 8.83536L8.57747 9.89132L6.22271 12.2366L21.7534 12.268L21.7504 13.768L6.21966 13.7365L8.5495 16.0913L7.47816 17.1429L3.34819 12.9807L7.51041 8.83536Z"
                fill={navColor}
              />
            </g>
          </svg>
        )}
        {navigationIcons === "three" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={sizeNav + "px"}
            viewBox="0 -960 960 960"
            width={sizeNav + "px"}
            fill={navColor}
          >
            <path d="M440-240 200-480l240-240 56 56-183 184 183 184-56 56Zm264 0L464-480l240-240 56 56-183 184 183 184-56 56Z" />
          </svg>
        )}
        {navigationIcons === "four" && (
          <svg
            width={sizeNav + "px"}
            height={sizeNav + "px"}
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.9723 7.98892L15.0277 17.9888L10.0001 13.0166L14.9723 7.98892Z"
              fill={navColor}
            />
          </svg>
        )}
        {navigationIcons === "five" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={sizeNav + "px"}
            viewBox="0 -960 960 960"
            width={sizeNav + "px"}
            fill={navColor}
          >
            <path d="M200-440v-80h560v80H200Z" />
          </svg>
        )}
        {navigationIcons === "text" && (
          <span style={{ color: navColor, fontSize: sizeNav + "px" }}>
            {__("Prev", "cocoblocks")}
          </span>
        )}
      </div>
    </>
  );
};

export default NavigationButtons;
