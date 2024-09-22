import { Swiper } from 'swiper';
import { Autoplay, Keyboard, Navigation, Pagination, EffectCube, EffectFlip, EffectCards, EffectCreative, EffectFade, Grid, EffectCoverflow, Scrollbar, FreeMode, Mousewheel, Parallax } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
    // Seleziona tutti gli elementi con la classe 'swiper'
    const swiperElements = document.querySelectorAll('.swiper');

    // Funzione per animazioni
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

    function observeSlides(slide) {
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
                        handleAnimation(slide.querySelectorAll('.button-slider'), 'data-animation-button');
                        handleAnimation(slide.querySelectorAll('.content-button-slide'), 'data-animation-button');
                        handleAnimation(slide.querySelectorAll('.button-slider-inner'), 'data-animation-button-inner');
                        handleAnimation(slide.querySelectorAll('.content-button-slide-inner'), 'data-animation-button-inner');
                        handleAnimation(slide.querySelectorAll('.content-icon'), 'data-animation-icon');
                    }
                }
            });
        });

        observer.observe(slide, { attributes: true });
    }

    // Inizializza Swiper per ogni elemento
    swiperElements.forEach(swiperElement => {
        const swiperData = swiperElement.getAttribute('data-swiper');
        if (swiperData) {
            const swiperConfig = JSON.parse(swiperData);
            const loopMode = swiperConfig.loopMode ?? 'disable';
            const slidesPerRow = swiperConfig.slidesPerRow ?? 1;
            const gridEnabled = slidesPerRow > 1;

            if (loopMode === 'enable' && gridEnabled) {
                console.warn("Swiper Loop Warning: Loop mode is not compatible with grid.fill = 'row'.");
            }

            const autoplayConfig = swiperConfig.autoplay ? {
                delay: swiperConfig.autoplaySpeed,
                disableOnInteraction: swiperConfig.disableOnInteraction,
                pauseOnMouseEnter: swiperConfig.pauseOnMouseEnter,
                reverseDirection: swiperConfig.reverseDirection,
                stopOnLastSlide: swiperConfig.stopOnLastSlide,
            } : false;

            const swiperInstance = new Swiper(swiperElement, {
                direction: swiperConfig.directionSlider,
                effect: swiperConfig.effect,
                autoplay: autoplayConfig,
                modules: [Autoplay, Keyboard, Navigation, Pagination, EffectCube, EffectFlip, EffectCards, EffectCreative, EffectFade, Grid, EffectCoverflow, Scrollbar, FreeMode, Mousewheel, Parallax],
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
                fadeEffect: { crossFade: swiperConfig.crossFade },
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
                scrollbar: {
                    enabled: swiperConfig.scrollbar,
                    el: '.swiper-scrollbar',
                    draggable: swiperConfig.dragScrollbar,
                    hide: swiperConfig.hideScrollbar ,
                    snapOnRelease: swiperConfig.releaseScrollbar,
                },
                cardsEffect: { slideShadows: swiperConfig.slideShadows, rotate: swiperConfig.rotateCards },
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
                freeMode: {
                    enabled: swiperConfig.freeMode,
                    sticky: swiperConfig.stickyFreeMode,
                    momentum: swiperConfig.momentumFreeMode,
                    momentumBounce: swiperConfig.momentumBounceFreeMode,
                    momentumBounceRatio: swiperConfig.momentumBounceRatioFreeMode,
                    momentumRatio: swiperConfig.momentumRatioFreeMode,
                    momentumVelocityRatio: swiperConfig.momentumVelocityRatioFreeMode,
                },
                mousewheel: {
                    enabled: swiperConfig.mousewheel,
                    forceToAxis: swiperConfig.forceToAxis,
                    invert: swiperConfig.invert,
                    releaseOnEdges: swiperConfig.releaseOnEdges,
                    sensitivity: swiperConfig.sensitivity,
                },
                keyboard: {
                    enabled: swiperConfig.keyboard,
                    onlyInViewport: swiperConfig.viewPortKeyboard,
                    pageUpDown: swiperConfig.upKeyboard,
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
                    init: function () {
                        const slides = swiperElement.querySelectorAll('.swiper-slide');
                        slides.forEach(slide => observeSlides(slide));
                     //   applyZoomEffect(); // Applica l'effetto di zoom all'inizio
                    },
                    slideChange: function () {
                        const slides = swiperElement.querySelectorAll('.swiper-slide');
                        slides.forEach(slide => observeSlides(slide));
                     //   applyZoomEffect(); // Applica l'effetto di zoom su ogni slide
                    },
                    autoplayTimeLeft: swiperConfig.autoplayProgress ? (s, time, progress) => {
                        const progressCircle = document.querySelector('.progress-circle circle');
                        const progressContent = document.querySelector('.progress-content');
                        const totalLength = 126;
                        const offset = totalLength * progress;
                        if (progressCircle && progressContent) {
                            progressCircle.style.strokeDashoffset = offset;
                            progressContent.textContent = `${Math.ceil(time / 1000)}s`;
                        }
                    } : undefined,

                },

            });

         

            // Forza l'animazione per la slide iniziale
            setTimeout(() => {
                handleAnimation(document.querySelectorAll('.swiper-slide-active .content-title-slide'), 'data-animation');
                handleAnimation(document.querySelectorAll('.swiper-slide-active .image-first-slide'), 'data-animation-image');
                handleAnimation(document.querySelectorAll('.swiper-slide-active .img-inner'), 'data-animation-image-inner');
                handleAnimation(document.querySelectorAll('.swiper-slide-active .div-slide'), 'data-animation-div');
                handleAnimation(document.querySelectorAll('.swiper-slide-active .content-title-div.letter'), 'data-animation-title-div');
                handleAnimation(document.querySelectorAll('.swiper-slide-active .button-slider'), 'data-animation-button');
                handleAnimation(document.querySelectorAll('.swiper-slide-active .content-button-slide'), 'data-animation-button');
                handleAnimation(document.querySelectorAll('.swiper-slide-active .button-slider-inner'), 'data-animation-button-inner');
                handleAnimation(document.querySelectorAll('.swiper-slide-active .content-button-slide-inner'), 'data-animation-button-inner');
                handleAnimation(document.querySelectorAll('.swiper-slide-active .content-icon'), 'data-animation-icon');
            }, 100);
        }
       
    });
});

/* Effetto zoom 
    const applyZoomEffect = () => {
      const slides = document.querySelectorAll('.swiper-slide');
      slides.forEach(slide => {
        slide.classList.add('zoom-active');
      });
    };

    */
/* Animation letter title */
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
    // Seleziona tutti gli elementi con data-effect
    const elementsWithEffect = document.querySelectorAll('[data-effect]');

    elementsWithEffect.forEach(element => {
        const effect = element.getAttribute('data-effect');

        if (effect === 'none') {
            return; // Non caricare nessun effetto
        }

        switch (effect) {
            case 'particle':
                element.addEventListener("mousemove", (e) => createParticle(e, element));
                break;
            case 'smoke':
                element.addEventListener("mousemove", (e) => createSmokeTrail(e, element));
                break;
            case 'parallax':
                applyParallaxEffect(element);
                break;
            case 'liquid':
                applyLiquidEffect(element);
              
                break;
            default:
                break;
        }
    });
});

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

     // Leggi il colore dall'attributo colorEffectMouse
     const colorStart = slide.getAttribute('colorEffectStart') ;
     const colorMiddle = slide.getAttribute('colorEffectMiddle');
     const colorEnd = slide.getAttribute('colorEffectEnd');

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.opacity = opacity;
    particle.style.transform = `rotate(${angle}deg)`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.setProperty('--offsetX', `${offsetX}px`);
    particle.style.setProperty('--offsetY', `${offsetY}px`);
    particle.style.backgroundColor = colorStart; // Applica il colore iniziale
    particle.style.setProperty('--color-start', colorStart);
    particle.style.setProperty('--color-middle', colorMiddle);
    particle.style.setProperty('--color-end', colorEnd);

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

    const colorStart = slide.getAttribute('colorEffectStart') ;
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
    smoke.style.backgroundColor = colorStart;

    slide.appendChild(smoke);

    setTimeout(() => {
        smoke.remove();
    }, duration * 1000);
}



// Funzione per creare effetto parallax
function applyParallaxEffect(slide) {

    // Leggi i valori degli attributi dal DOM
    const selectedElements = {
      imgSelected: slide.getAttribute('data-img-selected') === 'true',
      h1Selected: slide.getAttribute('data-h1-selected') === 'true',
      h2Selected: slide.getAttribute('data-h2-selected') === 'true',
      h3Selected: slide.getAttribute('data-h3-selected') === 'true',
      h4Selected: slide.getAttribute('data-h4-selected') === 'true',
      h5Selected: slide.getAttribute('data-h5-selected') === 'true',
      h6Selected: slide.getAttribute('data-h6-selected') === 'true',
      buttonSelected: slide.getAttribute('data-button-selected') === 'true',
      spanSelected: slide.getAttribute('data-span-selected') === 'true',
      pSelected: slide.getAttribute('data-p-selected') === 'true',
  };

  // Costruisci il selettore CSS in base agli elementi selezionati
  const selectors = [];
  if (selectedElements.imgSelected) selectors.push("img");
  if (selectedElements.h1Selected) selectors.push("h1");
  if (selectedElements.h2Selected) selectors.push("h2");
  if (selectedElements.h3Selected) selectors.push("h3");
  if (selectedElements.h4Selected) selectors.push("h4");
  if (selectedElements.h5Selected) selectors.push("h5");
  if (selectedElements.h6Selected) selectors.push("h6");
  if (selectedElements.buttonSelected) selectors.push("button");
  if (selectedElements.spanSelected) selectors.push("span");
  if (selectedElements.pSelected) selectors.push("p");

// Verifica che ci siano selettori validi
    if (selectors.length === 0) {
        console.warn("Nessun elemento selezionato per l'effetto parallax.");
        return;
    }

    // Seleziona gli elementi interni solo all'interno della slide specifica
    const elements = slide.querySelectorAll(selectors.join(','));

    // Recupera il valore della transizione dal data attribute
    const transitionDuration = parseFloat(slide.getAttribute('data-transition-paralax-mouse')) || 0.5; // Default to 0.5s

    // Applica la transizione a tutti gli elementi
    elements.forEach(element => {
        element.style.transition = `transform ${transitionDuration}s ease-out`;
    });

  
  // Variabili per tracciare il movimento del mouse e la posizione degli elementi
  let mouseX = 0, mouseY = 0;
  let targetX = 0, targetY = 0;
  const smoothness = 0.1; // Velocità di interpolazione (più vicino a 0 è più lento)

  // Genera un offset casuale per ogni elemento
  const elementOffsets = Array.from(elements).map(() => ({
      offsetX: Math.random() * 2 - 1, // Valore casuale tra -1 e 1
      offsetY: Math.random() * 2 - 1, // Valore casuale tra -1 e 1
      intensity: Math.random() * 10 + 5, // Intensità casuale tra 5 e 15
  }));

  function updateParallax() {
      // Interpolazione per rendere il movimento più fluido
      targetX += (mouseX - targetX) * smoothness;
      targetY += (mouseY - targetY) * smoothness;

      elements.forEach((element, index) => {
          const rect = slide.getBoundingClientRect();
          const x = (targetX - rect.left) / rect.width - 0.5;
          const y = (targetY - rect.top) / rect.height - 0.5;

          // Applica l'offset casuale a ogni elemento
          const offsetData = elementOffsets[index];
          const offsetX = x * offsetData.intensity * offsetData.offsetX;
          const offsetY = y * offsetData.intensity * offsetData.offsetY;

          // Applica la trasformazione di spostamento con casualità
          element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });

      requestAnimationFrame(updateParallax);
  }

  slide.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
  });

  // Avvia l'aggiornamento del parallax
  requestAnimationFrame(updateParallax);
}



// Funzione per applicare l'effetto liquid
function applyLiquidEffect(slide) {


    "use strict";

    const canvas = slide.querySelector("canvas");
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    
    let config = {
      SIM_RESOLUTION: 128,
      DYE_RESOLUTION: 512,
      DENSITY_DISSIPATION: 0.97,
      VELOCITY_DISSIPATION: 0.98,
      PRESSURE_DISSIPATION: 0.8,
      PRESSURE_ITERATIONS: 20,
      CURL: 30,
      SPLAT_RADIUS: 0.5,
      SHADING: false,
      COLORFUL: false,
      PAUSED: false,
      BACK_COLOR: {
        r: 2,
        g: 3,
        b: 15
      },
      TRANSPARENT: false,
      BLOOM: true,
      BLOOM_ITERATIONS: 8,
      BLOOM_RESOLUTION: 256,
      BLOOM_INTENSITY: 0.8,
      BLOOM_THRESHOLD: 0.6,
      BLOOM_SOFT_KNEE: 0.7
    };
    
    function pointerPrototype() {
      this.id = -1;
      this.x = 0;
      this.y = 0;
      this.dx = 0;
      this.dy = 0;
      this.down = false;
      this.moved = false;
      this.color = [30, 0, 300];
    }
    
    let pointers = [];
    let splatStack = [];
    let bloomFramebuffers = [];
    pointers.push(new pointerPrototype());
    
    const { gl, ext } = getWebGLContext(canvas);
    
    if (isMobile()) config.SHADING = false;
    if (!ext.supportLinearFiltering) {
      config.SHADING = false;
      config.BLOOM = false;
    }
    
    //startGUI();
    
    function getWebGLContext(canvas) {
      const params = {
        alpha: true,
        depth: false,
        stencil: false,
        antialias: false,
        preserveDrawingBuffer: false
      };
    
      let gl = canvas.getContext("webgl2", params);
      const isWebGL2 = !!gl;
      if (!isWebGL2)
        gl =
          canvas.getContext("webgl", params) ||
          canvas.getContext("experimental-webgl", params);
    
      let halfFloat;
      let supportLinearFiltering;
      if (isWebGL2) {
        gl.getExtension("EXT_color_buffer_float");
        supportLinearFiltering = gl.getExtension("OES_texture_float_linear");
      } else {
        halfFloat = gl.getExtension("OES_texture_half_float");
        supportLinearFiltering = gl.getExtension("OES_texture_half_float_linear");
      }
    
    
      const halfFloatTexType = isWebGL2 ? gl.HALF_FLOAT : halfFloat.HALF_FLOAT_OES;
      let formatRGBA;
      let formatRG;
      let formatR;
    
      if (isWebGL2) {
        formatRGBA = getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, halfFloatTexType);
        formatRG = getSupportedFormat(gl, gl.RG16F, gl.RG, halfFloatTexType);
        formatR = getSupportedFormat(gl, gl.R16F, gl.RED, halfFloatTexType);
      } else {
        formatRGBA = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
        formatRG = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
        formatR = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
      }
    
      if (formatRGBA == null)
        ga("send", "event", isWebGL2 ? "webgl2" : "webgl", "not supported");
      else ga("send", "event", isWebGL2 ? "webgl2" : "webgl", "supported");
    
      return {
        gl,
        ext: {
          formatRGBA,
          formatRG,
          formatR,
          halfFloatTexType,
          supportLinearFiltering
        }
      };
    }
    
    function getSupportedFormat(gl, internalFormat, format, type) {
      if (!supportRenderTextureFormat(gl, internalFormat, format, type)) {
        switch (internalFormat) {
          case gl.R16F:
            return getSupportedFormat(gl, gl.RG16F, gl.RG, type);
          case gl.RG16F:
            return getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, type);
          default:
            return null;
        }
      }
    
      return {
        internalFormat,
        format
      };
    }
    
    function supportRenderTextureFormat(gl, internalFormat, format, type) {
      let texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, 4, 4, 0, format, type, null);
    
      let fbo = gl.createFramebuffer();
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
      gl.framebufferTexture2D(
        gl.FRAMEBUFFER,
        gl.COLOR_ATTACHMENT0,
        gl.TEXTURE_2D,
        texture,
        0
      );
    
      const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
      if (status != gl.FRAMEBUFFER_COMPLETE) return false;
      return true;
    }
    
    
    function isMobile() {
      return /Mobi|Android/i.test(navigator.userAgent);
    }
    
    class GLProgram {
      constructor(vertexShader, fragmentShader) {
        this.uniforms = {};
        this.program = gl.createProgram();
    
        gl.attachShader(this.program, vertexShader);
        gl.attachShader(this.program, fragmentShader);
        gl.linkProgram(this.program);
    
        if (!gl.getProgramParameter(this.program, gl.LINK_STATUS))
          throw gl.getProgramInfoLog(this.program);
    
        const uniformCount = gl.getProgramParameter(
          this.program,
          gl.ACTIVE_UNIFORMS
        );
        for (let i = 0; i < uniformCount; i++) {
          const uniformName = gl.getActiveUniform(this.program, i).name;
          this.uniforms[uniformName] = gl.getUniformLocation(
            this.program,
            uniformName
          );
        }
      }
    
      bind() {
        gl.useProgram(this.program);
      }
    }
    
    function compileShader(type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
    
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
        throw gl.getShaderInfoLog(shader);
    
      return shader;
    }
    
    const baseVertexShader = compileShader(
      gl.VERTEX_SHADER,
      `
        precision highp float;
    
        attribute vec2 aPosition;
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform vec2 texelSize;
    
        void main () {
            vUv = aPosition * 0.5 + 0.5;
            vL = vUv - vec2(texelSize.x, 0.0);
            vR = vUv + vec2(texelSize.x, 0.0);
            vT = vUv + vec2(0.0, texelSize.y);
            vB = vUv - vec2(0.0, texelSize.y);
            gl_Position = vec4(aPosition, 0.0, 1.0);
        }
    `
    );
    
    const clearShader = compileShader(
      gl.FRAGMENT_SHADER,
      `
        precision mediump float;
        precision mediump sampler2D;
    
        varying highp vec2 vUv;
        uniform sampler2D uTexture;
        uniform float value;
    
        void main () {
            gl_FragColor = value * texture2D(uTexture, vUv);
        }
    `
    );
    
    const colorShader = compileShader(
      gl.FRAGMENT_SHADER,
      `
        precision mediump float;
    
        uniform vec4 color;
    
        void main () {
            gl_FragColor = color;
        }
    `
    );
    
    const backgroundShader = compileShader(
      gl.FRAGMENT_SHADER,
      `
        precision highp float;
        precision highp sampler2D;
    
        varying vec2 vUv;
        uniform sampler2D uTexture;
        uniform float aspectRatio;
    
        #define SCALE 25.0
    
        void main () {
            vec2 uv = floor(vUv * SCALE * vec2(aspectRatio, 1.0));
            float v = mod(uv.x + uv.y, 2.0);
            v = v * 0.1 + 0.8;
            gl_FragColor = vec4(vec3(v), 1.0);
        }
    `
    );
    
    const displayShader = compileShader(
      gl.FRAGMENT_SHADER,
      `
        precision highp float;
        precision highp sampler2D;
    
        varying vec2 vUv;
        uniform sampler2D uTexture;
    
        void main () {
            vec3 C = texture2D(uTexture, vUv).rgb;
            float a = max(C.r, max(C.g, C.b));
            gl_FragColor = vec4(C, a);
        }
    `
    );
    
    const displayBloomShader = compileShader(
      gl.FRAGMENT_SHADER,
      `
        precision highp float;
        precision highp sampler2D;
    
        varying vec2 vUv;
        uniform sampler2D uTexture;
        uniform sampler2D uBloom;
        uniform sampler2D uDithering;
        uniform vec2 ditherScale;
    
        void main () {
            vec3 C = texture2D(uTexture, vUv).rgb;
            vec3 bloom = texture2D(uBloom, vUv).rgb;
            vec3 noise = texture2D(uDithering, vUv * ditherScale).rgb;
            noise = noise * 2.0 - 1.0;
            bloom += noise / 800.0;
            bloom = pow(bloom.rgb, vec3(1.0 / 2.2));
            C += bloom;
            float a = max(C.r, max(C.g, C.b));
            gl_FragColor = vec4(C, a);
        }
    `
    );
    
    const displayShadingShader = compileShader(
      gl.FRAGMENT_SHADER,
      `
        precision highp float;
        precision highp sampler2D;
    
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform sampler2D uTexture;
        uniform vec2 texelSize;
    
        void main () {
            vec3 L = texture2D(uTexture, vL).rgb;
            vec3 R = texture2D(uTexture, vR).rgb;
            vec3 T = texture2D(uTexture, vT).rgb;
            vec3 B = texture2D(uTexture, vB).rgb;
            vec3 C = texture2D(uTexture, vUv).rgb;
    
            float dx = length(R) - length(L);
            float dy = length(T) - length(B);
    
            vec3 n = normalize(vec3(dx, dy, length(texelSize)));
            vec3 l = vec3(0.0, 0.0, 1.0);
    
            float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
            C.rgb *= diffuse;
    
            float a = max(C.r, max(C.g, C.b));
            gl_FragColor = vec4(C, a);
        }
    `
    );
    
    const displayBloomShadingShader = compileShader(
      gl.FRAGMENT_SHADER,
      `
        precision highp float;
        precision highp sampler2D;
    
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform sampler2D uTexture;
        uniform sampler2D uBloom;
        uniform sampler2D uDithering;
        uniform vec2 ditherScale;
        uniform vec2 texelSize;
    
        void main () {
            vec3 L = texture2D(uTexture, vL).rgb;
            vec3 R = texture2D(uTexture, vR).rgb;
            vec3 T = texture2D(uTexture, vT).rgb;
            vec3 B = texture2D(uTexture, vB).rgb;
            vec3 C = texture2D(uTexture, vUv).rgb;
    
            float dx = length(R) - length(L);
            float dy = length(T) - length(B);
    
            vec3 n = normalize(vec3(dx, dy, length(texelSize)));
            vec3 l = vec3(0.0, 0.0, 1.0);
    
            float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
            C *= diffuse;
    
            vec3 bloom = texture2D(uBloom, vUv).rgb;
            vec3 noise = texture2D(uDithering, vUv * ditherScale).rgb;
            noise = noise * 2.0 - 1.0;
            bloom += noise / 800.0;
            bloom = pow(bloom.rgb, vec3(1.0 / 2.2));
            C += bloom;
    
            float a = max(C.r, max(C.g, C.b));
            gl_FragColor = vec4(C, a);
        }
    `
    );
    
    const bloomPrefilterShader = compileShader(
      gl.FRAGMENT_SHADER,
      `
        precision mediump float;
        precision mediump sampler2D;
    
        varying vec2 vUv;
        uniform sampler2D uTexture;
        uniform vec3 curve;
        uniform float threshold;
    
        void main () {
            vec3 c = texture2D(uTexture, vUv).rgb;
            float br = max(c.r, max(c.g, c.b));
            float rq = clamp(br - curve.x, 0.0, curve.y);
            rq = curve.z * rq * rq;
            c *= max(rq, br - threshold) / max(br, 0.0001);
            gl_FragColor = vec4(c, 0.0);
        }
    `
    );
    
    const bloomBlurShader = compileShader(
      gl.FRAGMENT_SHADER,
      `
        precision mediump float;
        precision mediump sampler2D;
    
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform sampler2D uTexture;
    
        void main () {
            vec4 sum = vec4(0.0);
            sum += texture2D(uTexture, vL);
            sum += texture2D(uTexture, vR);
            sum += texture2D(uTexture, vT);
            sum += texture2D(uTexture, vB);
            sum *= 0.25;
            gl_FragColor = sum;
        }
    `
    );
    
    const bloomFinalShader = compileShader(
      gl.FRAGMENT_SHADER,
      `
        precision mediump float;
        precision mediump sampler2D;
    
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform sampler2D uTexture;
        uniform float intensity;
    
        void main () {
            vec4 sum = vec4(0.0);
            sum += texture2D(uTexture, vL);
            sum += texture2D(uTexture, vR);
            sum += texture2D(uTexture, vT);
            sum += texture2D(uTexture, vB);
            sum *= 0.25;
            gl_FragColor = sum * intensity;
        }
    `
    );
    
    const splatShader = compileShader(
      gl.FRAGMENT_SHADER,
      `
        precision highp float;
        precision highp sampler2D;
    
        varying vec2 vUv;
        uniform sampler2D uTarget;
        uniform float aspectRatio;
        uniform vec3 color;
        uniform vec2 point;
        uniform float radius;
    
        void main () {
            vec2 p = vUv - point.xy;
            p.x *= aspectRatio;
            vec3 splat = exp(-dot(p, p) / radius) * color;
            vec3 base = texture2D(uTarget, vUv).xyz;
            gl_FragColor = vec4(base + splat, 1.0);
        }
    `
    );
    
    const advectionManualFilteringShader = compileShader(
      gl.FRAGMENT_SHADER,
      `
        precision highp float;
        precision highp sampler2D;
    
        varying vec2 vUv;
        uniform sampler2D uVelocity;
        uniform sampler2D uSource;
        uniform vec2 texelSize;
        uniform vec2 dyeTexelSize;
        uniform float dt;
        uniform float dissipation;
    
        vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
            vec2 st = uv / tsize - 0.5;
    
            vec2 iuv = floor(st);
            vec2 fuv = fract(st);
    
            vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
            vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
            vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
            vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);
    
            return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
        }
    
        void main () {
            vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
            gl_FragColor = dissipation * bilerp(uSource, coord, dyeTexelSize);
            gl_FragColor.a = 1.0;
        }
    `
    );
    
    const advectionShader = compileShader(
      gl.FRAGMENT_SHADER,
      `
        precision highp float;
        precision highp sampler2D;
    
        varying vec2 vUv;
        uniform sampler2D uVelocity;
        uniform sampler2D uSource;
        uniform vec2 texelSize;
        uniform float dt;
        uniform float dissipation;
    
        void main () {
            vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
            gl_FragColor = dissipation * texture2D(uSource, coord);
            gl_FragColor.a = 1.0;
        }
    `
    );
    
    const divergenceShader = compileShader(
      gl.FRAGMENT_SHADER,
      `
        precision mediump float;
        precision mediump sampler2D;
    
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uVelocity;
    
        void main () {
            float L = texture2D(uVelocity, vL).x;
            float R = texture2D(uVelocity, vR).x;
            float T = texture2D(uVelocity, vT).y;
            float B = texture2D(uVelocity, vB).y;
    
            vec2 C = texture2D(uVelocity, vUv).xy;
            if (vL.x < 0.0) { L = -C.x; }
            if (vR.x > 1.0) { R = -C.x; }
            if (vT.y > 1.0) { T = -C.y; }
            if (vB.y < 0.0) { B = -C.y; }
    
            float div = 0.5 * (R - L + T - B);
            gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
        }
    `
    );
    
    const curlShader = compileShader(
      gl.FRAGMENT_SHADER,
      `
        precision mediump float;
        precision mediump sampler2D;
    
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uVelocity;
    
        void main () {
            float L = texture2D(uVelocity, vL).y;
            float R = texture2D(uVelocity, vR).y;
            float T = texture2D(uVelocity, vT).x;
            float B = texture2D(uVelocity, vB).x;
            float vorticity = R - L - T + B;
            gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
        }
    `
    );
    
    const vorticityShader = compileShader(
      gl.FRAGMENT_SHADER,
      `
        precision highp float;
        precision highp sampler2D;
    
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform sampler2D uVelocity;
        uniform sampler2D uCurl;
        uniform float curl;
        uniform float dt;
    
        void main () {
            float L = texture2D(uCurl, vL).x;
            float R = texture2D(uCurl, vR).x;
            float T = texture2D(uCurl, vT).x;
            float B = texture2D(uCurl, vB).x;
            float C = texture2D(uCurl, vUv).x;
    
            vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
            force /= length(force) + 0.0001;
            force *= curl * C;
            force.y *= -1.0;
    
            vec2 vel = texture2D(uVelocity, vUv).xy;
            gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);
        }
    `
    );
    
    const pressureShader = compileShader(
      gl.FRAGMENT_SHADER,
      `
        precision mediump float;
        precision mediump sampler2D;
    
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uPressure;
        uniform sampler2D uDivergence;
    
        vec2 boundary (vec2 uv) {
            return uv;
            // uncomment if you use wrap or repeat texture mode
            // uv = min(max(uv, 0.0), 1.0);
            // return uv;
        }
    
        void main () {
            float L = texture2D(uPressure, boundary(vL)).x;
            float R = texture2D(uPressure, boundary(vR)).x;
            float T = texture2D(uPressure, boundary(vT)).x;
            float B = texture2D(uPressure, boundary(vB)).x;
            float C = texture2D(uPressure, vUv).x;
            float divergence = texture2D(uDivergence, vUv).x;
            float pressure = (L + R + B + T - divergence) * 0.25;
            gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
        }
    `
    );
    
    const gradientSubtractShader = compileShader(
      gl.FRAGMENT_SHADER,
      `
        precision mediump float;
        precision mediump sampler2D;
    
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uPressure;
        uniform sampler2D uVelocity;
    
        vec2 boundary (vec2 uv) {
            return uv;
            // uv = min(max(uv, 0.0), 1.0);
            // return uv;
        }
    
        void main () {
            float L = texture2D(uPressure, boundary(vL)).x;
            float R = texture2D(uPressure, boundary(vR)).x;
            float T = texture2D(uPressure, boundary(vT)).x;
            float B = texture2D(uPressure, boundary(vB)).x;
            vec2 velocity = texture2D(uVelocity, vUv).xy;
            velocity.xy -= vec2(R - L, T - B);
            gl_FragColor = vec4(velocity, 0.0, 1.0);
        }
    `
    );
    
    const blit = (() => {
      gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]),
        gl.STATIC_DRAW
      );
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
      gl.bufferData(
        gl.ELEMENT_ARRAY_BUFFER,
        new Uint16Array([0, 1, 2, 0, 2, 3]),
        gl.STATIC_DRAW
      );
      gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(0);
    
      return (destination) => {
        gl.bindFramebuffer(gl.FRAMEBUFFER, destination);
        gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
      };
    })();
    
    let simWidth;
    let simHeight;
    let dyeWidth;
    let dyeHeight;
    let density;
    let velocity;
    let divergence;
    let curl;
    let pressure;
    let bloom;
    
    const clearProgram = new GLProgram(baseVertexShader, clearShader);
    const colorProgram = new GLProgram(baseVertexShader, colorShader);
    const backgroundProgram = new GLProgram(baseVertexShader, backgroundShader);
    const displayProgram = new GLProgram(baseVertexShader, displayShader);
    const displayBloomProgram = new GLProgram(baseVertexShader, displayBloomShader);
    const displayShadingProgram = new GLProgram(
      baseVertexShader,
      displayShadingShader
    );
    const displayBloomShadingProgram = new GLProgram(
      baseVertexShader,
      displayBloomShadingShader
    );
    const bloomPrefilterProgram = new GLProgram(
      baseVertexShader,
      bloomPrefilterShader
    );
    const bloomBlurProgram = new GLProgram(baseVertexShader, bloomBlurShader);
    const bloomFinalProgram = new GLProgram(baseVertexShader, bloomFinalShader);
    const splatProgram = new GLProgram(baseVertexShader, splatShader);
    const advectionProgram = new GLProgram(
      baseVertexShader,
      ext.supportLinearFiltering ? advectionShader : advectionManualFilteringShader
    );
    const divergenceProgram = new GLProgram(baseVertexShader, divergenceShader);
    const curlProgram = new GLProgram(baseVertexShader, curlShader);
    const vorticityProgram = new GLProgram(baseVertexShader, vorticityShader);
    const pressureProgram = new GLProgram(baseVertexShader, pressureShader);
    const gradienSubtractProgram = new GLProgram(
      baseVertexShader,
      gradientSubtractShader
    );
    
    function initFramebuffers() {
      let simRes = getResolution(config.SIM_RESOLUTION);
      let dyeRes = getResolution(config.DYE_RESOLUTION);
    
      simWidth = simRes.width;
      simHeight = simRes.height;
      dyeWidth = dyeRes.width;
      dyeHeight = dyeRes.height;
    
      const texType = ext.halfFloatTexType;
      const rgba = ext.formatRGBA;
      const rg = ext.formatRG;
      const r = ext.formatR;
      const filtering = ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST;
    
      if (density == null)
        density = createDoubleFBO(
          dyeWidth,
          dyeHeight,
          rgba.internalFormat,
          rgba.format,
          texType,
          filtering
        );
      else
        density = resizeDoubleFBO(
          density,
          dyeWidth,
          dyeHeight,
          rgba.internalFormat,
          rgba.format,
          texType,
          filtering
        );
    
      if (velocity == null)
        velocity = createDoubleFBO(
          simWidth,
          simHeight,
          rg.internalFormat,
          rg.format,
          texType,
          filtering
        );
      else
        velocity = resizeDoubleFBO(
          velocity,
          simWidth,
          simHeight,
          rg.internalFormat,
          rg.format,
          texType,
          filtering
        );
    
      divergence = createFBO(
        simWidth,
        simHeight,
        r.internalFormat,
        r.format,
        texType,
        gl.NEAREST
      );
      curl = createFBO(
        simWidth,
        simHeight,
        r.internalFormat,
        r.format,
        texType,
        gl.NEAREST
      );
      pressure = createDoubleFBO(
        simWidth,
        simHeight,
        r.internalFormat,
        r.format,
        texType,
        gl.NEAREST
      );
    
      initBloomFramebuffers();
    }
    
    function initBloomFramebuffers() {
      let res = getResolution(config.BLOOM_RESOLUTION);
    
      const texType = ext.halfFloatTexType;
      const rgba = ext.formatRGBA;
      const filtering = ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST;
    
      bloom = createFBO(
        res.width,
        res.height,
        rgba.internalFormat,
        rgba.format,
        texType,
        filtering
      );
    
      bloomFramebuffers.length = 0;
      for (let i = 0; i < config.BLOOM_ITERATIONS; i++) {
        let width = res.width >> (i + 1);
        let height = res.height >> (i + 1);
    
        if (width < 2 || height < 2) break;
    
        let fbo = createFBO(
          width,
          height,
          rgba.internalFormat,
          rgba.format,
          texType,
          filtering
        );
        bloomFramebuffers.push(fbo);
      }
    }
    
    function createFBO(w, h, internalFormat, format, type, param) {
      gl.activeTexture(gl.TEXTURE0);
      let texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, param);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, param);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null);
    
      let fbo = gl.createFramebuffer();
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
      gl.framebufferTexture2D(
        gl.FRAMEBUFFER,
        gl.COLOR_ATTACHMENT0,
        gl.TEXTURE_2D,
        texture,
        0
      );
    
      return {
        texture,
        fbo,
        width: w,
        height: h,
        attach(id) {
          gl.activeTexture(gl.TEXTURE0 + id);
          gl.bindTexture(gl.TEXTURE_2D, texture);
          return id;
        }
      };
    }
    
    function createDoubleFBO(w, h, internalFormat, format, type, param) {
      let fbo1 = createFBO(w, h, internalFormat, format, type, param);
      let fbo2 = createFBO(w, h, internalFormat, format, type, param);
    
      return {
        get read() {
          return fbo1;
        },
        set read(value) {
          fbo1 = value;
        },
        get write() {
          return fbo2;
        },
        set write(value) {
          fbo2 = value;
        },
        swap() {
          let temp = fbo1;
          fbo1 = fbo2;
          fbo2 = temp;
        }
      };
    }
    
    function resizeFBO(target, w, h, internalFormat, format, type, param) {
      let newFBO = createFBO(w, h, internalFormat, format, type, param);
      clearProgram.bind();
      gl.uniform1i(clearProgram.uniforms.uTexture, target.attach(0));
      gl.uniform1f(clearProgram.uniforms.value, 1);
      blit(newFBO.fbo);
      return newFBO;
    }
    
    function resizeDoubleFBO(target, w, h, internalFormat, format, type, param) {
      target.read = resizeFBO(
        target.read,
        w,
        h,
        internalFormat,
        format,
        type,
        param
      );
      target.write = createFBO(w, h, internalFormat, format, type, param);
      return target;
    }
    
    
    
    initFramebuffers();
    
    
    let lastColorChangeTime = Date.now();
    
    update();
    
    function update() {
      resizeCanvas();
      input();
      if (!config.PAUSED) step(0.016);
      render(null);
      requestAnimationFrame(update);
    }
    
    function input() {
    
    
      for (let i = 0; i < pointers.length; i++) {
        const p = pointers[i];
        if (p.moved) {
          splat(p.x, p.y, p.dx, p.dy, p.color);
          p.moved = false;
        }
      }
    
      if (!config.COLORFUL) return;
    
      if (lastColorChangeTime + 100 < Date.now()) {
        lastColorChangeTime = Date.now();
        for (let i = 0; i < pointers.length; i++) {
          const p = pointers[i];
          p.color = generateColor();
        }
      }
    }
    
    function step(dt) {
      gl.disable(gl.BLEND);
      gl.viewport(0, 0, simWidth, simHeight);
    
      curlProgram.bind();
      gl.uniform2f(curlProgram.uniforms.texelSize, 1.0 / simWidth, 1.0 / simHeight);
      gl.uniform1i(curlProgram.uniforms.uVelocity, velocity.read.attach(0));
      blit(curl.fbo);
    
      vorticityProgram.bind();
      gl.uniform2f(
        vorticityProgram.uniforms.texelSize,
        1.0 / simWidth,
        1.0 / simHeight
      );
      gl.uniform1i(vorticityProgram.uniforms.uVelocity, velocity.read.attach(0));
      gl.uniform1i(vorticityProgram.uniforms.uCurl, curl.attach(1));
      gl.uniform1f(vorticityProgram.uniforms.curl, config.CURL);
      gl.uniform1f(vorticityProgram.uniforms.dt, dt);
      blit(velocity.write.fbo);
      velocity.swap();
    
      divergenceProgram.bind();
      gl.uniform2f(
        divergenceProgram.uniforms.texelSize,
        1.0 / simWidth,
        1.0 / simHeight
      );
      gl.uniform1i(divergenceProgram.uniforms.uVelocity, velocity.read.attach(0));
      blit(divergence.fbo);
    
      clearProgram.bind();
      gl.uniform1i(clearProgram.uniforms.uTexture, pressure.read.attach(0));
      gl.uniform1f(clearProgram.uniforms.value, config.PRESSURE_DISSIPATION);
      blit(pressure.write.fbo);
      pressure.swap();
    
      pressureProgram.bind();
      gl.uniform2f(
        pressureProgram.uniforms.texelSize,
        1.0 / simWidth,
        1.0 / simHeight
      );
      gl.uniform1i(pressureProgram.uniforms.uDivergence, divergence.attach(0));
      for (let i = 0; i < config.PRESSURE_ITERATIONS; i++) {
        gl.uniform1i(pressureProgram.uniforms.uPressure, pressure.read.attach(1));
        blit(pressure.write.fbo);
        pressure.swap();
      }
    
      gradienSubtractProgram.bind();
      gl.uniform2f(
        gradienSubtractProgram.uniforms.texelSize,
        1.0 / simWidth,
        1.0 / simHeight
      );
      gl.uniform1i(
        gradienSubtractProgram.uniforms.uPressure,
        pressure.read.attach(0)
      );
      gl.uniform1i(
        gradienSubtractProgram.uniforms.uVelocity,
        velocity.read.attach(1)
      );
      blit(velocity.write.fbo);
      velocity.swap();
    
      advectionProgram.bind();
      gl.uniform2f(
        advectionProgram.uniforms.texelSize,
        1.0 / simWidth,
        1.0 / simHeight
      );
      if (!ext.supportLinearFiltering)
        gl.uniform2f(
          advectionProgram.uniforms.dyeTexelSize,
          1.0 / simWidth,
          1.0 / simHeight
        );
      let velocityId = velocity.read.attach(0);
      gl.uniform1i(advectionProgram.uniforms.uVelocity, velocityId);
      gl.uniform1i(advectionProgram.uniforms.uSource, velocityId);
      gl.uniform1f(advectionProgram.uniforms.dt, dt);
      gl.uniform1f(
        advectionProgram.uniforms.dissipation,
        config.VELOCITY_DISSIPATION
      );
      blit(velocity.write.fbo);
      velocity.swap();
    
      gl.viewport(0, 0, dyeWidth, dyeHeight);
    
      if (!ext.supportLinearFiltering)
        gl.uniform2f(
          advectionProgram.uniforms.dyeTexelSize,
          1.0 / dyeWidth,
          1.0 / dyeHeight
        );
      gl.uniform1i(advectionProgram.uniforms.uVelocity, velocity.read.attach(0));
      gl.uniform1i(advectionProgram.uniforms.uSource, density.read.attach(1));
      gl.uniform1f(
        advectionProgram.uniforms.dissipation,
        config.DENSITY_DISSIPATION
      );
      blit(density.write.fbo);
      density.swap();
    }
    
    
    
    function render(target) {
    
      if (config.BLOOM) applyBloom(density.read, bloom);
    
      if (target == null || !config.TRANSPARENT) {
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        gl.enable(gl.BLEND);
      } else {
        gl.disable(gl.BLEND);
      }
    
      let width = target == null ? gl.drawingBufferWidth : dyeWidth;
      let height = target == null ? gl.drawingBufferHeight : dyeHeight;
    
      gl.viewport(0, 0, width, height);
    
    
      if (target == null && config.TRANSPARENT) {
        backgroundProgram.bind();
        gl.uniform1f(
          backgroundProgram.uniforms.aspectRatio,
          canvas.width / canvas.height
        );
        blit(null);
      }
    
      if (config.SHADING) {
        let program = config.BLOOM
          ? displayBloomShadingProgram
          : displayShadingProgram;
        program.bind();
        gl.uniform2f(program.uniforms.texelSize, 1.0 / width, 1.0 / height);
        gl.uniform1i(program.uniforms.uTexture, density.read.attach(0));
       
      } else {
        let program = config.BLOOM ? displayBloomProgram : displayProgram;
        program.bind();
        gl.uniform1i(program.uniforms.uTexture, density.read.attach(0));
       
      }
    
      blit(target);
    }
    
    function applyBloom(source, destination) {
      if (bloomFramebuffers.length < 2) return;
    
      let last = destination;
    
      gl.disable(gl.BLEND);
      bloomPrefilterProgram.bind();
      let knee = config.BLOOM_THRESHOLD * config.BLOOM_SOFT_KNEE + 0.0001;
      let curve0 = config.BLOOM_THRESHOLD - knee;
      let curve1 = knee * 2;
      let curve2 = 0.25 / knee;
      gl.uniform3f(bloomPrefilterProgram.uniforms.curve, curve0, curve1, curve2);
      gl.uniform1f(
        bloomPrefilterProgram.uniforms.threshold,
        config.BLOOM_THRESHOLD
      );
      gl.uniform1i(bloomPrefilterProgram.uniforms.uTexture, source.attach(0));
      gl.viewport(0, 0, last.width, last.height);
      blit(last.fbo);
    
      bloomBlurProgram.bind();
      for (let i = 0; i < bloomFramebuffers.length; i++) {
        let dest = bloomFramebuffers[i];
        gl.uniform2f(
          bloomBlurProgram.uniforms.texelSize,
          1.0 / last.width,
          1.0 / last.height
        );
        gl.uniform1i(bloomBlurProgram.uniforms.uTexture, last.attach(0));
        gl.viewport(0, 0, dest.width, dest.height);
        blit(dest.fbo);
        last = dest;
      }
    
      gl.blendFunc(gl.ONE, gl.ONE);
      gl.enable(gl.BLEND);
    
      for (let i = bloomFramebuffers.length - 2; i >= 0; i--) {
        let baseTex = bloomFramebuffers[i];
        gl.uniform2f(
          bloomBlurProgram.uniforms.texelSize,
          1.0 / last.width,
          1.0 / last.height
        );
        gl.uniform1i(bloomBlurProgram.uniforms.uTexture, last.attach(0));
        gl.viewport(0, 0, baseTex.width, baseTex.height);
        blit(baseTex.fbo);
        last = baseTex;
      }
    
      gl.disable(gl.BLEND);
      bloomFinalProgram.bind();
      gl.uniform2f(
        bloomFinalProgram.uniforms.texelSize,
        1.0 / last.width,
        1.0 / last.height
      );
      gl.uniform1i(bloomFinalProgram.uniforms.uTexture, last.attach(0));
      gl.uniform1f(bloomFinalProgram.uniforms.intensity, config.BLOOM_INTENSITY);
      gl.viewport(0, 0, destination.width, destination.height);
      blit(destination.fbo);
    }
    
    function splat(x, y, dx, dy, color) {
      gl.viewport(0, 0, simWidth, simHeight);
      splatProgram.bind();
      gl.uniform1i(splatProgram.uniforms.uTarget, velocity.read.attach(0));
      gl.uniform1f(splatProgram.uniforms.aspectRatio, canvas.width / canvas.height);
      gl.uniform2f(
        splatProgram.uniforms.point,
        x / canvas.width,
        1.0 - y / canvas.height
      );
      gl.uniform3f(splatProgram.uniforms.color, dx, -dy, 1.0);
      gl.uniform1f(splatProgram.uniforms.radius, config.SPLAT_RADIUS / 100.0);
      blit(velocity.write.fbo);
      velocity.swap();
    
      gl.viewport(0, 0, dyeWidth, dyeHeight);
      gl.uniform1i(splatProgram.uniforms.uTarget, density.read.attach(0));
      gl.uniform3f(splatProgram.uniforms.color, color.r, color.g, color.b);
      blit(density.write.fbo);
      density.swap();
    }
    
    
    
    function resizeCanvas() {
      if (
        canvas.width != canvas.clientWidth ||
        canvas.height != canvas.clientHeight
      ) {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        initFramebuffers();
      }
    }
    
    
    // Imposta pointers[0].down su true all'inizio
    pointers[0].down = true;
    
    canvas.addEventListener("mousemove", (e) => {
      pointers[0].moved = true;
      pointers[0].dx = (e.offsetX - pointers[0].x) * 5.0;
      pointers[0].dy = (e.offsetY - pointers[0].y) * 5.0;
      pointers[0].x = e.offsetX;
      pointers[0].y = e.offsetY;
      pointers[0].down = true;
      pointers[0].color = generateColor();
    });
    
    function generateColor() {
      const firstColor = slide.getAttribute('data-color-first-liquid');
      const secondColor = slide.getAttribute('data-color-second-liquid');
      const thirdColor = slide.getAttribute('data-color-third-liquid');
        // Imposta h a 0 per ottenere il rosso
        let c = HSVtoRGB(firstColor, secondColor, thirdColor); // per regolare il colore <input type="range" id="colorRange" min="0" max="1" step="0.01" value="0.67"> per il primo valore che adesso è a 0, gli altri 2 lasciarl ia 1
        c.r *= 0.15;
        c.g *= 0.15;
        c.b *= 0.15;
        return c;
      }
      
      function HSVtoRGB(h, s, v) {
        let r, g, b, i, f, p, q, t;
        i = Math.floor(h * 6);
        f = h * 6 - i;
        p = v * (1 - s);
        q = v * (1 - f * s);
        t = v * (1 - (1 - f) * s);
      
        switch (i % 6) {
          case 0:
            (r = v), (g = t), (b = p);
            break;
          case 1:
            (r = q), (g = v), (b = p);
            break;
          case 2:
            (r = p), (g = v), (b = t);
            break;
          case 3:
            (r = p), (g = q), (b = v);
            break;
          case 4:
            (r = t), (g = p), (b = v);
            break;
          case 5:
            (r = v), (g = p), (b = q);
            break;
        }
      
        return {
          r,
          g,
          b
        };
      }
    
    function getResolution(resolution) {
      let aspectRatio = gl.drawingBufferWidth / gl.drawingBufferHeight;
      if (aspectRatio < 1) aspectRatio = 1.0 / aspectRatio;
    
      let max = Math.round(resolution * aspectRatio);
      let min = Math.round(resolution);
    
      if (gl.drawingBufferWidth > gl.drawingBufferHeight)
        return {
          width: max,
          height: min
        };
      else
        return {
          width: min,
          height: max
        };
    }
    
}



/* Position */
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
    const titleElements = document.querySelectorAll('.content-content-slide-absolute');
    const imageElements = document.querySelectorAll('.content-content-image-first-absolute');
    const divElements = document.querySelectorAll('.content-inner-div-absolute');
    const buttonElements = document.querySelectorAll('.content-button-absolute');
    const iconElements = document.querySelectorAll('.content-content-icon-absolute');

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
    divElements.forEach(updatePosition);
    buttonElements.forEach(updatePosition);
    iconElements.forEach(updatePosition);

  }
  window.addEventListener('resize', updateElementPositions);
  // Chiamata iniziale per impostare le posizioni corrette al caricamento della pagina
  updateElementPositions();

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

});


/* Delay Elements */
document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('.content-title-div, .content-button-slide,.content-button-slide-inner,.content-title-slide,.content-inner-div,.content-img-first,.content-img-inner');
  
  // Itera su tutti gli elementi selezionati
  elements.forEach((element) => {
      // Verifica se l'elemento esiste
      if (!element) {
          return; // Se l'elemento non esiste, passa al prossimo
      }

      const hideEnabled = element.getAttribute('data-delay-hide') === 'true';
      const hideAfter = parseInt(element.getAttribute('data-delay-seconds'), 10);

      if (hideEnabled) {
          setTimeout(() => {
              element.classList.add('hidden');
          }, hideAfter * 1000);
      } else {
          element.classList.remove('hidden');
      }
  });
});






















