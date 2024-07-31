/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!****************************!*\
  !*** ./src/slider/view.js ***!
  \****************************/
document.addEventListener('DOMContentLoaded', () => {
  const swiperElement = document.querySelector('.swiper');
  if (swiperElement) {
    const swiperData = swiperElement.getAttribute('data-swiper');
    if (swiperData) {
      var _swiperConfig$loopMod, _swiperConfig$slidesP;
      const swiperConfig = JSON.parse(swiperData);

      // Aggiungi il controllo per la compatibilità
      const loopMode = (_swiperConfig$loopMod = swiperConfig.loopMode) !== null && _swiperConfig$loopMod !== void 0 ? _swiperConfig$loopMod : 'disable';
      const slidesPerRow = (_swiperConfig$slidesP = swiperConfig.slidesPerRow) !== null && _swiperConfig$slidesP !== void 0 ? _swiperConfig$slidesP : 1;
      const gridEnabled = slidesPerRow > 1;
      if (loopMode === 'enable' && gridEnabled) {
        console.warn("Swiper Loop Warning: Loop mode is not compatible with grid.fill = 'row'.");
      }
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
        centeredSlides: swiperConfig.centeredSlides,
        initialSlide: swiperConfig.initialSlide,
        autoHeight: swiperConfig.autoHeight,
        grabCursor: swiperConfig.grabCursor,
        loop: swiperConfig.loopMode === 'enable',
        rewind: swiperConfig.loopMode === 'rewind',
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