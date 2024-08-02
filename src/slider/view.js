import { Swiper} from 'swiper';
import { Autoplay, Keyboard, Navigation, Pagination, EffectCube, EffectFlip, EffectCards, EffectCreative, EffectFade, Grid , EffectCoverflow, Scrollbar, FreeMode, Mousewheel, Parallax} from 'swiper/modules';
document.addEventListener('DOMContentLoaded', () => {
    // Seleziona tutti gli elementi con la classe 'swiper'
    const swiperElements = document.querySelectorAll('.swiper');
   

    swiperElements.forEach(swiperElement => {
        // Ottieni la configurazione specifica per questo slider
        const swiperData = swiperElement.getAttribute('data-swiper');
        
        if (swiperData) {
            const swiperConfig = JSON.parse(swiperData);

            // Aggiungi il controllo per la compatibilità
            const loopMode = swiperConfig.loopMode ?? 'disable';
            const slidesPerRow = swiperConfig.slidesPerRow ?? 1;
            const gridEnabled = slidesPerRow > 1;

            if (loopMode === 'enable' && gridEnabled) {
                console.warn("Swiper Loop Warning: Loop mode is not compatible with grid.fill = 'row'.");
            }

             // Configura l'autoplay
             const autoplayConfig = swiperConfig.autoplay ? {
                delay: swiperConfig.autoplaySpeed,  // Imposta un valore predefinito se autoplaySpeed non è specificato
                disableOnInteraction: swiperConfig.disableOnInteraction,
                pauseOnMouseEnter: swiperConfig.pauseOnMouseEnter,
                reverseDirection: swiperConfig.reverseDirection,
                stopOnLastSlide: swiperConfig.stopOnLastSlide,
            } : false;
            // Progress Circle
            const progressCircle = document.querySelector('.progress-circle circle');
            const progressContent = document.querySelector('.progress-content');
            // Inizializza Swiper per ogni elemento
            new Swiper(swiperElement, {
                direction: swiperConfig.directionSlider,
                effect: swiperConfig.effect,
                autoplay: autoplayConfig,
                scrollbar: {
                    enabled: swiperConfig.scrollbar,
                    el: '.swiper-scrollbar',
                    draggable: swiperConfig.dragScrollbar,
                    hide: swiperConfig.hideScrollbar ,
                    snapOnRelease: swiperConfig.releaseScrollbar,
                  },
                modules: [ Autoplay, Keyboard, Navigation, Pagination, EffectCube, EffectFlip, EffectCards, EffectCreative, EffectFade, Grid,  EffectCoverflow, Scrollbar, FreeMode, Mousewheel, Parallax],
                pagination: {
                    enabled: swiperConfig.paginationEnable,
                    hideOnClick: swiperConfig.hidePagination,
                    type: swiperConfig.typePagination,
                    clickable: swiperConfig.clickPagination,
                    dynamicBullets: swiperConfig.dynamicPagination,
                    dynamicMainBullets: swiperConfig.dynamicMainPagination,
                    progressbarOpposite: swiperConfig.progressbarOpposite,
                    el: ".swiper-pagination"
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    hideOnClick: swiperConfig.hideNavigation,
                },
                grid: {
                    rows: swiperConfig.slidesPerRow,
                    fill: 'row',
                },
                centeredSlides: swiperConfig.centeredSlides,
                initialSlide: swiperConfig.initialSlide,
                autoHeight: swiperConfig.autoHeight,
                grabCursor: swiperConfig.grabCursor,
                loop: swiperConfig.loopMode === 'enable',
                rewind: swiperConfig.loopMode === 'rewind',
                speed: swiperConfig.speed,
                fadeEffect: {
                    crossFade: swiperConfig.crossFade,
                },
                cubeEffect: {
                    slideShadows: swiperConfig.slideShadows,
                    shadow: swiperConfig.shadow,
                    shadowOffset: swiperConfig.shadowOffset,
                    shadowScale: swiperConfig.shadowScale,
                },
                coverflowEffect: {
                    rotate: swiperConfig.rotate,
                    stretch: swiperConfig.stretch,
                    depth: swiperConfig.depth,
                    modifier: swiperConfig.modifier,
                    slideShadows: swiperConfig.slideShadows,
                },
                cardsEffect: {
                    slideShadows: swiperConfig.slideShadows,
                    rotate: swiperConfig.rotateCards,
                },
                creativeEffect: {
                    prev: {
                        shadow: true,
                        translate: [swiperConfig.translateX + '%', swiperConfig.translateY + '%', swiperConfig.translateZ + 'px'],
                        rotate: [swiperConfig.rotateX, swiperConfig.rotateY, swiperConfig.rotateZ],
                        scale: swiperConfig.scale,
                        opacity: swiperConfig.opacity,
                    },
                    next: {
                        shadow: true,
                        translate: [swiperConfig.nextTranslateX + '%', swiperConfig.nextTranslateY + '%', swiperConfig.nextTranslateZ + 'px'],
                        rotate: [swiperConfig.nextRotateX, swiperConfig.nextRotateY, swiperConfig.nextRotateZ],
                        scale: swiperConfig.nextScale,
                        opacity: swiperConfig.nextOpacity,
                    },
                },
                breakpoints: {
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
                on: {
                    autoplayTimeLeft: (s, time, progress) => {
                        // Calcola l'offset del cerchio in base al progresso
                        const totalLength = 126; // Dovrebbe corrispondere a stroke-dasharray nel CSS
                        const offset = totalLength * progress; // Invertire il progresso
                        progressCircle.style.strokeDashoffset = offset;
                        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
                    }
                },
            });
        }
    });
});
