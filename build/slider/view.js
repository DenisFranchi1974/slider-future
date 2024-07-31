/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!****************************!*\
  !*** ./src/slider/view.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);

document.addEventListener('DOMContentLoaded', () => {
  const swiperElement = document.querySelector('.swiper');
  if (swiperElement) {
    const swiperData = swiperElement.getAttribute('data-swiper');
    if (swiperData) {
      const swiperConfig = JSON.parse(swiperData);
      new Swiper('.swiper', {
        direction: swiperConfig.directionSlider,
        effect: swiperConfig.effect,
        // Aggiungi l'effetto qui
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        scrollbar: {
          el: '.swiper-scrollbar'
        },
        grid: {
          rows: swiperConfig.slidesPerRow,
          fill: 'row'
        },
        breakpoints: {
          640: {
            slidesPerView: swiperConfig.perViewSliderMobile,
            spaceBetween: swiperConfig.spaceBetweenMobile,
            slidesPerGroup: swiperConfig.slidesPerGroupMobile
          },
          768: {
            slidesPerView: swiperConfig.perViewSliderTablet,
            spaceBetween: swiperConfig.spaceBetweenTablet,
            slidesPerGroup: swiperConfig.slidesPerGroupTablet
          },
          1024: {
            slidesPerView: swiperConfig.perViewSlider,
            spaceBetween: swiperConfig.spaceBetween,
            slidesPerGroup: swiperConfig.slidesPerGroupDesktop
          }
        }
      });
    }
  }
});
/******/ })()
;
//# sourceMappingURL=view.js.map