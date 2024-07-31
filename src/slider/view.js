import { grid } from "@wordpress/icons";

document.addEventListener('DOMContentLoaded', () => {
    const swiperElement = document.querySelector('.swiper');

    if (swiperElement) {
        const swiperData = swiperElement.getAttribute('data-swiper');

        if (swiperData) {
            const swiperConfig = JSON.parse(swiperData);

            new Swiper('.swiper', {
                direction: swiperConfig.directionSlider,
                effect: swiperConfig.effect, // Aggiungi l'effetto qui
                pagination: {
                    el: '.swiper-pagination',
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
                grid: {
                    rows: swiperConfig.slidesPerRow,
                    fill: 'row',
                },
                breakpoints:{
                    640: {
                        slidesPerView: swiperConfig.perViewSliderMobile,
                        spaceBetween: swiperConfig.spaceBetweenMobile,
                        slidesPerGroup: swiperConfig.slidesPerGroupMobile,
                    },
                    768: {
                        slidesPerView: swiperConfig.perViewSliderTablet,
                        spaceBetween: swiperConfig.spaceBetweenTablet,
                        slidesPerGroup: swiperConfig.slidesPerGroupTablet,
                    },
                    1024: {
                        slidesPerView: swiperConfig.perViewSlider,
                        spaceBetween: swiperConfig.spaceBetween,
                        slidesPerGroup: swiperConfig.slidesPerGroupDesktop,
                    },
                },
            });
        }
    }
});
