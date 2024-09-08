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
                freeMode:{
                    enabled: swiperConfig.freeMode,
                    sticky: swiperConfig.stickyFreeMode,
                    momentum: swiperConfig.momentumFreeMode,
                    momentumBounce: swiperConfig.momentumBounceFreeMode,
                    momentumBounceRatio: swiperConfig.momentumBounceRatioFreeMode,
                    momentumRatio: swiperConfig.momentumRatioFreeMode,
                    momentumVelocityRatio: swiperConfig.momentumVelocityRatioFreeMode,
                },
                mousewheel:{
                    enabled: swiperConfig.mousewheel,
                    forceToAxis: swiperConfig.forceToAxis,
                    invert: swiperConfig.invert,
                    releaseOnEdges: swiperConfig.releaseOnEdges,
                    sensitivity: swiperConfig.sensitivity,
                },
                keyboard:{
                    enabled: swiperConfig.keyboard,
                    onlyInViewport: swiperConfig.viewPortKeyboard,
                    pageUpDown:swiperConfig.upKeyboard,
                },
                parallax: swiperConfig.parallax,
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
                    autoplayTimeLeft: swiperConfig.autoplayProgress ? (s, time, progress) => {
                        // Calcola l'offset del cerchio in base al progresso
                        const totalLength = 126; // Dovrebbe corrispondere a stroke-dasharray nel CSS
                        const offset = totalLength * progress; // Invertire il progresso
                        if (progressCircle && progressContent) {
                            progressCircle.style.strokeDashoffset = offset;
                            progressContent.textContent = `${Math.ceil(time / 1000)}s`;
                        }
                    } : undefined
                },
            });
        }
    });
});

/*Text Effect */
document.addEventListener('DOMContentLoaded', function() {
    const typewriters = document.querySelectorAll('.typewriter');
    const typewritersDiv = document.querySelectorAll('.typewriter-title-div');

    typewriters.forEach(typewriter => {
        const text = typewriter.getAttribute('data-text');
        const speedEffect = parseInt(typewriter.getAttribute('data-speed-effect'), 10) || 100; // Velocità di digitazione (default: 100ms)
        const pauseEffect = parseInt(typewriter.getAttribute('data-pause-effect'), 10) || 2000; // Pausa prima di riavviare l'effetto (default: 2000ms)
        let index = 0;

        // Crea e aggiungi il cursore
        const cursor = document.createElement('span');
        cursor.classList.add('typewriter-cursor');

        // Copia gli stili dal cursore PHP
        const existingCursor = typewriter.nextElementSibling;
        if (existingCursor && existingCursor.classList.contains('typewriter-cursor')) {
            cursor.style.cssText = existingCursor.style.cssText;
        }

        typewriter.parentNode.insertBefore(cursor, typewriter.nextSibling);

        const typeWriter = () => {
            if (index < text.length) {
                typewriter.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, speedEffect); // Imposta la velocità della scrittura
            } else {
                setTimeout(() => {
                    typewriter.textContent = '';  // Resetta il testo
                    index = 0;                    // Resetta l'indice
                    typeWriter();                 // Riavvia l'effetto
                }, pauseEffect);                          // Pausa prima di riavviare l'effetto
            }
        };

        typeWriter();
    });

    typewritersDiv.forEach(typewriter => {
        const text = typewriter.getAttribute('data-text-title-div');
        const speedEffect = parseInt(typewriter.getAttribute('data-speed-effect-title-div'), 10) || 100; // Velocità di digitazione (default: 100ms)
        const pauseEffect = parseInt(typewriter.getAttribute('data-pause-effect-title-div'), 10) || 2000; // Pausa prima di riavviare l'effetto (default: 2000ms)
        let index = 0;

        // Crea e aggiungi il cursore
        const cursor = document.createElement('span');
        cursor.classList.add('typewriter-cursor-title-div');

        // Copia gli stili dal cursore PHP
        const existingCursor = typewriter.nextElementSibling;
        if (existingCursor && existingCursor.classList.contains('typewriter-cursor-title-div')) {
            cursor.style.cssText = existingCursor.style.cssText;
        }

        typewriter.parentNode.insertBefore(cursor, typewriter.nextSibling);

        const typeWriter = () => {
            if (index < text.length) {
                typewriter.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, speedEffect); // Imposta la velocità della scrittura
            } else {
                setTimeout(() => {
                    typewriter.textContent = '';  // Resetta il testo
                    index = 0;                    // Resetta l'indice
                    typeWriter();                 // Riavvia l'effetto
                }, pauseEffect);                          // Pausa prima di riavviare l'effetto
            }
        };

        typeWriter();
    });

    function restartAnimation(element, animation) {
        element.classList.remove(animation);
        void element.offsetWidth; // Forza il reflow
        element.classList.add(animation);
    }
    
    function handleAnimation(elements, dataAttr) {
        elements.forEach(element => {
            const animation = element.getAttribute(dataAttr);
            if (animation) {
                restartAnimation(element, animation);
            }
        });
    }
    
    function observeSlides() {
        const slides = document.querySelectorAll('.swiper-slide');
        slides.forEach(slide => {
            const observer = new MutationObserver(mutations => {
                mutations.forEach(mutation => {
                    if (mutation.attributeName === 'class') {
                        const isActive = slide.classList.contains('swiper-slide-active');
                        if (isActive) {
                            // Riavvia l'animazione per gli elementi della slide attiva
                            handleAnimation(slide.querySelectorAll('.content-title-slide'), 'data-animation');
                            handleAnimation(slide.querySelectorAll('.image-first-slide'), 'data-animation-image');
                            handleAnimation(slide.querySelectorAll('.img-inner'), 'data-animation-image-inner');
                            handleAnimation(slide.querySelectorAll('.div-slide'), 'data-animation-div');
                            handleAnimation(slide.querySelectorAll('.content-title-div.letter'), 'data-animation-title-div');
                        }
                    }
                });
            });
    
            observer.observe(slide, { attributes: true });
        });
    }
    
    // Configura Swiper con il listener per transitionEnd e chiama observeSlides
    const swiper = new Swiper('.swiper-container', {
        // Altre configurazioni di Swiper...
        on: {
            init: function () {
                observeSlides();
            },
            slideChange: function () {
                observeSlides();
            },
        }
    });
    
    // Forza l'animazione per la slide iniziale al caricamento della pagina
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            handleAnimation(document.querySelectorAll('.swiper-slide-active .content-title-slide'), 'data-animation');
            handleAnimation(document.querySelectorAll('.swiper-slide-active .image-first-slide'), 'data-animation-image');
            handleAnimation(document.querySelectorAll('.swiper-slide-active .img-inner'), 'data-animation-image-inner');
            handleAnimation(document.querySelectorAll('.swiper-slide-active .div-slide'), 'data-animation-div');
            handleAnimation(document.querySelectorAll('.swiper-slide-active .content-title-div.letter'), 'data-animation-title-div');
        }, 100); // Delay di 100ms per l'animazione iniziale
    });
    

});

/* Google Fonts */
document.addEventListener("DOMContentLoaded", function() {
    const elementsWithCustomFont = document.querySelectorAll('[data-font-family]');
  
    elementsWithCustomFont.forEach(element => {
        const fontFamily = element.getAttribute('data-font-family');
        loadGoogleFont(fontFamily);
    });
});

const loadGoogleFont = (fontFamily) => {
    if (!fontFamily) return;

    // Lista dei font che non devono essere caricati da Google Fonts
    const systemFonts = [
        "Arial",
        "Helvetica",
        "Georgia",
        "Times New Roman",
        "Verdana",
        "Tahoma",
        "Trebuchet MS",
        "Gill Sans",
        "Courier New",
        "Lucida Console",
        "Consolas",
        "Monaco",
        "Comic Sans MS",
        "Brush Script MT",
        "Impact",
        "Palatino Linotype",
        "Book Antiqua",
        // Aggiungi altri font di sistema se necessario
    ];

    // Estrai solo il nome principale del font senza il fallback
    const cleanFontFamily = fontFamily.split(",")[0].trim();

    // Se il font è un font di sistema, non tentare di caricarlo tramite Google Fonts
    if (systemFonts.includes(cleanFontFamily)) {
        return;
    }

    // Verifica se il font è già caricato
    if (
        document.querySelector(`link[href*="${cleanFontFamily.replace(" ", "+")}"]`)
    ) {
        return;
    }

    // Definisci i pesi desiderati da caricare
    const fontWeights = "100;300;400;500;700;900";

    // Carica il font con i pesi specificati
    const link = document.createElement("link");
    link.href = `https://fonts.googleapis.com/css2?family=${cleanFontFamily.replace(
        " ",
        "+"
    )}:wght@${fontWeights}&display=swap`;
    link.rel = "stylesheet";
    document.head.appendChild(link);
};

/* Animation */
document.addEventListener('DOMContentLoaded', () => {
    // Osservatore per gli elementi di testo con animazione delle lettere
    const elements = document.querySelectorAll('.title-slide.letter');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        const element = entry.target;
        const animationClass = element.getAttribute('data-animation');
  
        if (entry.isIntersecting) {
          if (animationClass && (animationClass.startsWith('letters-') || animationClass.startsWith('letter-'))) {
            // Verifica se l'elemento ha già l'animazione applicata
            if (!element.classList.contains(animationClass)) {
              // Aggiungi un ritardo minimo prima di applicare l'animazione
              setTimeout(() => {
                element.classList.remove(animationClass);
                void element.offsetWidth; // Trigger reflow
                element.classList.add(animationClass);
  
                // Gestisci l'animazione delle lettere
                const spans = element.querySelectorAll('span');
                spans.forEach((span, index) => {
                  // Rimuovi e riapplica la classe di animazione per ogni lettera
                  span.classList.remove(animationClass);
                  void span.offsetWidth; // Trigger reflow
                  span.classList.add(animationClass);
  
                  // Imposta il delay per ogni lettera in base all'animazione
                  if (animationClass === 'letters-fly-in-from-left' ||
                      animationClass === 'letters-fly-in-from-right' ||
                      animationClass === 'letters-fly-in-from-top' ||
                      animationClass === 'letters-fly-in-from-bottom') {
                    span.style.setProperty('--letter-index', index + 1);
                  } else if (animationClass === 'letter-flip-from-top' ||
                             animationClass === 'letter-flip-from-bottom' ||
                             animationClass === 'letter-flip-cycle') {
                    span.style.setProperty('--letter-index', index + 1);
                  }
                });
              }, 100); // Ritardo di 100ms
            }
          }
  
          // Smetti di osservare l'elemento una volta che l'animazione è stata applicata
          observer.unobserve(element);
        } else {
          // Riaggiungi l'osservatore quando l'elemento esce dall'area di visibilità
          observer.observe(element);
        }
      });
    }, {
      threshold: 0.1
    });
  
    elements.forEach(element => {
      observer.observe(element);
    });
  });


/* Effect Mouse */

document.addEventListener("DOMContentLoaded", () => {
    const particleElements = document.querySelectorAll('[data-effect="particle"]');
    const smokeElements = document.querySelectorAll('[data-effect="smoke"]');
    const parallaxElements = document.querySelectorAll('[data-effect="parallax"]');

    // Applicare effetto particelle a tutte le slide con data-effect="particle"
    particleElements.forEach(particleElement => {
        particleElement.addEventListener("mousemove", (e) => createParticle(e, particleElement));
    });

    // Applicare effetto fumo a tutte le slide con data-effect="smoke"
    smokeElements.forEach(smokeElement => {
        smokeElement.addEventListener("mousemove", (e) => createSmokeTrail(e, smokeElement));
    });

    // Applicare effetto parallax a tutte le slide con data-effect="parallax"
    parallaxElements.forEach(parallaxElement => {
        applyParallaxEffect(parallaxElement);
    });
});

/*
// Funzione per creare particelle
function createParticle(e, slide) {
    const rect = slide.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const particle = document.createElement("div");
    particle.classList.add("particle");
    const size = Math.random() * 20 + 10;
    const opacity = Math.random() * 0.5 + 0.3;
    const duration = Math.random() * 1.5 + 0.5;
    const angle = Math.random() * 360;
    const offsetX = (Math.random() - 0.5) * 100;
    const offsetY = (Math.random() - 0.5) * 100;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.opacity = opacity;
    particle.style.transform = `rotate(${angle}deg)`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.setProperty('--offsetX', `${offsetX}px`);
    particle.style.setProperty('--offsetY', `${offsetY}px`);

    slide.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, duration * 1000);
}

// Funzione per creare scie di fumo
function createSmokeTrail(e, slide) {
    const rect = slide.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const smoke = document.createElement("div");
    smoke.classList.add("smoke");
    const size = Math.random() * 60 + 40;
    const opacity = Math.random() * 0.5 + 0.2;
    const duration = Math.random() * 3 + 2;
    const hue = Math.random() * 360;

    smoke.style.width = `${size}px`;
    smoke.style.height = `${size}px`;
    smoke.style.left = `${x}px`;
    smoke.style.top = `${y}px`;
    smoke.style.opacity = opacity;
    smoke.style.animationDuration = `${duration}s`;
    smoke.style.backgroundColor = `hsla(${hue}, 100%, 70%, 0.5)`;

    slide.appendChild(smoke);

    setTimeout(() => {
        smoke.remove();
    }, duration * 1000);
}

// Funzione per applicare l'effetto parallax
function applyParallaxEffect(slide) {
    const elements = slide.querySelectorAll("img,h3,h4");

    let mouseX = 0, mouseY = 0;

    function updateParallax() {
        elements.forEach((element) => {
            const rect = slide.getBoundingClientRect();
            const x = (mouseX - rect.left) / rect.width;
            const y = (mouseY - rect.top) / rect.height;
            const speed = 0.5;
            const offsetX = (x - 0.5) * 100 * speed;
            const offsetY = (y - 0.5) * 100 * speed;

            element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        });

        requestAnimationFrame(updateParallax);
    }

    slide.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    requestAnimationFrame(updateParallax);
}

*/


function getDeviceType() {
    const width = window.innerWidth;
  
    if (width <= 768) {
      return 'mobile';
    } else if (width <= 1024) {
      return 'tablet';
    } else {
      return 'desktop';
    }
  }
  
  function updateElementPositions() {
    const deviceType = getDeviceType();
    const titleElements = document.querySelectorAll('.content-title-slide');
    const imageElements = document.querySelectorAll('.content-img-first');
  
    const updatePosition = (element) => {
      let x = 0, y = 0;
  
      if (deviceType === 'mobile') {
        x = parseFloat(element.getAttribute('data-mobile-x')) || 0;
        y = parseFloat(element.getAttribute('data-mobile-y')) || 0;
      } else if (deviceType === 'tablet') {
        x = parseFloat(element.getAttribute('data-tablet-x')) || 0;
        y = parseFloat(element.getAttribute('data-tablet-y')) || 0;
      } else {
        x = parseFloat(element.getAttribute('data-desktop-x')) || 0;
        y = parseFloat(element.getAttribute('data-desktop-y')) || 0;
      }
  
      // Applica la nuova posizione
      element.style.transform = `translate(${x}px, ${y}px)`;
    };
  
    titleElements.forEach(updatePosition);
    imageElements.forEach(updatePosition);
  }
  
  window.addEventListener('resize', updateElementPositions);
  
  // Chiamata iniziale per impostare le posizioni corrette al caricamento della pagina
  updateElementPositions();
  