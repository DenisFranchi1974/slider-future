import { __ } from '@wordpress/i18n';

// Opzioni Animajs

// Opzioni per il controllo degli effetti In
export const selectOptionsEffectIn = [
  { value: "none", label: __("None", "cocoblocks") },
  { value: "fadeIn", label: __("Fade", "cocoblocks") },
  { value: "translateXYIn", label: __("Translate", "cocoblocks") },
  { value: "scaleIn", label: __("Scale", "cocoblocks") },
  { value: "scaleInX", label: __("Scale X", "cocoblocks") },
  { value: "scaleInY", label: __("Scale Y", "cocoblocks") },
  { value: "rotateIn", label: __("Rotate", "cocoblocks") },
  {value: "skewInX", label: __("Skew", "cocoblocks") },
  { value: "BlockFromIn", label: __("Block", "cocoblocks") },
  { value: "customEffectIn", label: __("Custom", "cocoblocks") },
  {value: "splitText", label: __("Split Text", "cocoblocks") },
];

// Opzioni per il controllo degli effetti In image
export const selectOptionsEffectElement = [
  { value: "none", label: __("None", "cocoblocks") },
  { value: "fadeIn", label: __("Fade", "cocoblocks") },
  { value: "translateXYIn", label: __("Translate", "cocoblocks") },
  { value: "scaleIn", label: __("Scale", "cocoblocks") },
  { value: "scaleInX", label: __("Scale X", "cocoblocks") },
  { value: "scaleInY", label: __("Scale Y", "cocoblocks") },
  { value: "rotateIn", label: __("Rotate", "cocoblocks") },
  {value: "skewInX", label: __("Skew", "cocoblocks") },
  { value: "customEffectIn", label: __("Custom", "cocoblocks") },
];
  
// Opzioni effetti hover
export const selectOptionsEffectHover = [
  { value: "none", label: __("None", "cocoblocks") },
  { value: "opacityHover", label: __("Fade", "cocoblocks") },
  { value: "translateHover", label: __("Translate", "cocoblocks") },
  { value: "scaleHover", label: __("Scale", "cocoblocks") },
  { value: "scaleXHover", label: __("Scale X", "cocoblocks") },
  { value: "scaleYHover", label: __("Scale Y", "cocoblocks") },
  { value: "rotateHover", label: __("Rotate", "cocoblocks") },
  {value: "skewHover", label: __("Skew", "cocoblocks") },
  { value: "customHover", label: __("Custom", "cocoblocks") },
];
  
  // Opzioni per il controllo Ease 
export const selectOptionsEase = [
  {value: 'linear', label: __('linear', 'cocoblock') },
  { value: 'easeInQuad', label: __('easeInQuad', 'cocoblock') },
  { value: 'easeOutQuad', label: __('easeOutQuad', 'cocoblock') },
  { value: 'easeInOutQuad', label: __('easeInOutQuad', 'cocoblock') },
  { value: 'easeOutInQuad', label: __('easeOutInQuad', 'cocoblock') },
  { value: 'easeInCubic', label: __('easeInCubic', 'cocoblock') },
  { value: 'easeOutCubic', label: __('easeOutCubic', 'cocoblock') },
  { value: 'easeInOutCubic', label: __('easeInOutCubic', 'cocoblock') },
  { value: 'easeOutInCubic', label: __('easeOutInCubic', 'cocoblock') },
  { value: 'easeInQuart', label: __('easeInQuart', 'cocoblock') },
  { value: 'easeOutQuart', label: __('easeOutQuart', 'cocoblock') },
  { value: 'easeInOutQuart', label: __('easeInOutQuart', 'cocoblock') },
  { value: 'easeOutInQuart', label: __('easeOutInQuart', 'cocoblock') },
  { value: 'easeInQuint', label: __('easeInQuint', 'cocoblock') },
  { value: 'easeOutQuint', label: __('easeOutQuint', 'cocoblock') },
  { value: 'easeInOutQuint', label: __('easeInOutQuint', 'cocoblock') },
  { value: 'easeOutInQuint', label: __('easeOutInQuint', 'cocoblock') },
  { value: 'easeInSine', label: __('easeInSine', 'cocoblock') },
  { value: 'easeOutSine', label: __('easeOutSine', 'cocoblock') },
  { value: 'easeInOutSine', label: __('easeInOutSine', 'cocoblock') },
  { value: 'easeOutInSine', label: __('easeOutInSine', 'cocoblock') },
  { value: 'easeInExpo', label: __('easeInExpo', 'cocoblock') },
  { value: 'easeOutExpo', label: __('easeOutExpo', 'cocoblock') },
  { value: 'easeInOutExpo', label: __('easeInOutExpo', 'cocoblock') },
  { value: 'easeOutInExpo', label: __('easeOutInExpo', 'cocoblock') },
  { value: 'easeInCirc', label: __('easeInCirc', 'cocoblock') },
  { value: 'easeOutCirc', label: __('easeOutCirc', 'cocoblock') },
  { value: 'easeInOutCirc', label: __('easeInOutCirc', 'cocoblock') },
  { value: 'easeOutInCirc', label: __('easeOutInCirc', 'cocoblock') },
  { value: 'easeInBack', label: __('easeInBack', 'cocoblock') },
  { value: 'easeOutBack', label: __('easeOutBack', 'cocoblock') },
  { value: 'easeInOutBack', label: __('easeInOutBack', 'cocoblock') },
  { value: 'easeOutInBack', label: __('easeOutInBack', 'cocoblock') },
  { value: 'easeInElastic', label: __('easeInElastic', 'cocoblock') },
  { value: 'easeOutElastic', label: __('easeOutElastic', 'cocoblock') },
  { value: 'easeInOutElastic', label: __('easeInOutElastic', 'cocoblock') },
  { value: 'easeOutInElastic', label: __('easeOutInElastic', 'cocoblock') },
  { value: 'easeInBounce', label: __('easeInBounce', 'cocoblock') },
  { value: 'easeOutBounce', label: __('easeOutBounce', 'cocoblock') },
  { value: 'easeInOutBounce', label: __('easeInOutBounce', 'cocoblock') },
  { value: 'easeOutInBounce', label: __('easeOutInBounce', 'cocoblock') },
  { value: 'cubicBezier(.5, .05, .1, .3)', label: 'cubicBezier' },
  {value: 'spring(1, 80, 10, 0)', label: 'spring'},
];

////////////////////////////
// Opzioni per la direzione del blocco
export const selectOptionsDirectionBlock = [
  { value: "top", label: __("Top", "cocoblocks") },
  { value: "right", label: __("Right", "cocoblocks") },
  { value: "bottom", label: __("Bottom", "cocoblocks") },
  { value: "left", label: __("Left", "cocoblocks") },
];

////////////////////////////

// Opzioni per il tipo di scala
export const selectOptionsScaleIn = [
  { value: "scale", label: __("Scale", "cocoblocks") },
  { value: "scaleX", label: __("Scale X", "cocoblocks") },
  { value: "scaleY", label: __("Scale Y", "cocoblocks") },
];

////////////////////////////

// Opzioni Split text
export const selectOptionsEffectSplit = [  
  { value: 'fadeSplit', label: 'Fade' },
  { value: 'translateSplit', label: 'Translate' },
  { value: 'scaleSplit', label: 'Scale'},
  { value: 'scaleXSplit', label: 'Scale X'},
  { value: 'scaleYSplit', label: 'Scale Y'},
  { value: 'rotateSplit', label: 'Rotate'},
  { value: 'skewSplit', label: 'Skew'},
  { value: "explosion", label: __("Explosion", "cocoblocks") },
  { value: "gather", label: __("Gather", "cocoblocks") },
  { value: "customSplit", label: __("Custom", "cocoblocks") },  
];

  ////////////////////////////

  // Opzioni loop
  export const selectOptionsRepeat = [
    { value: "1", label: __("One", "cocoblocks") },
    { value: "2", label: __("Two", "cocoblocks") },
    { value: "3", label: __("Three", "cocoblocks") },
    { value: "4", label: __("Four", "cocoblocks") },
    { value: "5", label: __("Five", "cocoblocks") },
    { value: "true", label: __("Infinite", "cocoblocks") },
  ];

  ////////////////////////////

  // Opzioni direzione
  export const selectOptionsDirection = [
    { value: "normal", label: __("Normal", "cocoblocks") },
    { value: "reverse", label: __("Reverse", "cocoblocks") },
    { value: "alternate", label: __("Alternate", "cocoblocks") },
  ];

   ////////////////////////////

  // Font Family Options
  export const fontOptions = [
    { label: __("Arial", "cocoblock"), value: "Arial, sans-serif" },
    { label: __("Helvetica", "cocoblock"), value: "Helvetica, sans-serif" },
    { label: __("Georgia", "cocoblock"), value: "Georgia, serif" },
    {
      label: __("Times New Roman", "cocoblock"),
      value: "Times New Roman, serif",
    },
    { label: __("Verdana", "cocoblock"), value: "Verdana, sans-serif" },
    { label: __("Tahoma", "cocoblock"), value: "Tahoma, sans-serif" },
    {
      label: __("Trebuchet MS", "cocoblock"),
      value: "Trebuchet MS, sans-serif",
    },
    { label: __("Gill Sans", "cocoblock"), value: "Gill Sans, sans-serif" },
    { label: __("Courier New", "cocoblock"), value: "Courier New, monospace" },
    {
      label: __("Lucida Console", "cocoblock"),
      value: "Lucida Console, monospace",
    },
    { label: __("Consolas", "cocoblock"), value: "Consolas, monospace" },
    { label: __("Monaco", "cocoblock"), value: "Monaco, monospace" },
    {
      label: __("Comic Sans MS", "cocoblock"),
      value: "Comic Sans MS, cursive",
    },
    {
      label: __("Brush Script MT", "cocoblock"),
      value: "Brush Script MT, cursive",
    },
    { label: __("Impact", "cocoblock"), value: "Impact, fantasy" },
    {
      label: __("Palatino Linotype", "cocoblock"),
      value: "Palatino Linotype, serif",
    },
    { label: __("Book Antiqua", "cocoblock"), value: "Book Antiqua, serif" },
    { label: __("Roboto", "cocoblock"), value: "Roboto, sans-serif" },
    { label: __("Open Sans", "cocoblock"), value: "Open Sans, sans-serif" },
    { label: __("Ubuntu Mono", "cocoblock"), value: "Ubuntu Mono, monospace" },
    { label: __("Inconsolata", "cocoblock"), value: "Inconsolata, monospace" },
    { label: __("Bungee Tint", "cocoblock"), value: "Bungee Tint, sans-serif" },
    { label: __("Matemasie", "cocoblock"), value: "Matemasie, sans-serif" },
    { label: __("Anton", "cocoblock"), value: "Anton, sans-serif" },
    {
      label: __("Baskervville SC", "cocoblock"),
      value: "Baskervville SC, serif",
    },
    {
      label: __("Bodoni Moda SC", "cocoblock"),
      value: "Bodoni Moda SC, serif",
    },
    { label: __("Ga Maamli", "cocoblock"), value: "Ga Maamli, sans-serif" },
    { label: __("Goldman", "cocoblock"), value: "Goldman, sans-serif" },
    { label: __("Kanit", "cocoblock"), value: "Kanit, sans-serif" },
    { label: __("Knewave", "cocoblock"), value: "Knewave, cursive" },
    {
      label: __("Londrina Outline", "cocoblock"),
      value: "Londrina Outline, sans-serif",
    },
    { label: __("Macondo", "cocoblock"), value: "Macondo, cursive" },
    { label: __("Rampart One", "cocoblock"), value: "Rampart One, sans-serif" },
    {
      label: __("Rubik Wet Paint", "cocoblock"),
      value: "Rubik Wet Paint, cursive",
    },
    {
      label: __("Ruslan Display", "cocoblock"),
      value: "Ruslan Display, display",
    },
    { label: __("Titan One", "cocoblock"), value: "Titan One, sans-serif" },
    {
      label: __("Vujahday Script", "cocoblock"),
      value: "Vujahday Script, cursive",
    },
    { label: __("Wallpoet", "cocoblock"), value: "Wallpoet, cursive" },
  ];

  ////////////////////////////

// Font Weight Options
export const fontWeightOptions = [
    {
        label: __("100 Thin", "cocoblocks"),
        value: "100",
    },
    {
        label: __("300 Light", "cocoblocks"),
        value: "300",
    },
    {
        label: __("400 Regular", "cocoblocks"),
        value: "400",
    },
    {
        label: __("500 Medium", "cocoblocks"),
        value: "500",
    },
    {
        label: __("700 Bold", "cocoblocks"),
        value: "700",
    },
    {
        label: __("900 Black", "cocoblocks"),
        value: "900",
    }, 
];

  // Larghezza options
  export const alignOptions = [
    {
      label: __("Auto", "cocoblocks"),
      value: "auto",
    },
    {
      label: __("100%", "cocoblocks"),
      value: "100%",
    },
    {
      label: __("Custom", "cocoblocks"),
      value: "custom",
    },
  ];

  ////////////////////////////

  // Opzioni elementi
  export const elementOptions = [
    {
      label: __("P", "cocoblocks"),
      value: "p",
    },
    {
      label: __("H6", "cocoblocks"),
      value: "h6",
    },
    {
      label: __("H5", "cocoblocks"),
      value: "h5",
    },
    {
      label: __("H4", "cocoblocks"),
      value: "h4",
    },
    {
      label: __("H3", "cocoblocks"),
      value: "h3",
    },
    {
      label: __("H2", "cocoblocks"),
      value: "h2",
    },
    {
      label: __("H1", "cocoblocks"),
      value: "h1",
    },
  ];
  
  ////////////////////////////

  // Opzioni Bland Mode
  export const blendModeOptions = [
    {
      label: __("Normal", "cocoblocks"),
      value: "normal",
    },
    {
      label: __("Multiply", "cocoblocks"),
      value: "multiply",
    },
    {
      label: __("Screen", "cocoblocks"),
      value: "screen",
    },
    {
      label: __("Overlay", "cocoblocks"),
      value: "overlay",
    },
    {
      label: __("Darken", "cocoblocks"),
      value: "darken",
    },
    {
      label: __("Lighten", "cocoblocks"),
      value: "lighten",
    },
    {
      label: __("Color Dodge", "cocoblocks"),
      value: "color-dodge",
    },
    {
      label: __("Color Burn", "cocoblocks"),
      value: "color-burn",
    },
    {
      label: __("Hard Light", "cocoblocks"),
      value: "hard-light",
    },
    {
      label: __("Soft Light", "cocoblocks"),
      value: "soft-light",
    },
    {
      label: __("Difference", "cocoblocks"),
      value: "difference",
    },
    {
      label: __("Exclusion", "cocoblocks"),
      value: "exclusion",
    },
    {
      label: __("Hue", "cocoblocks"),
      value: "hue",
    },
    {
      label: __("Saturation", "cocoblocks"),
      value: "saturation",
    },
    {
      label: __("Color", "cocoblocks"),
      value: "color",
    },
    {
      label: __("Luminosity", "cocoblocks"),
      value: "luminosity",
    },
  ];

  ////////////////////////////

  /* Opzioni Write Mode */
  export const writeModeOptions = [
    { label: "Horizontal", value: "initial" },
    { label: "Vertical", value: "vertical-lr" },
  ];

  ////////////////////////////

  /* Opzione Border Solide */
  export const borderStyleOptions = [
    {
      label: __("None", "cocoblocks"),
      value: "none",
    },
    {
      label: __("Solid", "cocoblocks"),
      value: "solid",
    },
    {
      label: __("Dashed", "cocoblocks"),
      value: "dashed",
    },
    {
      label: __("Dotted", "cocoblocks"),
      value: "dotted",
    },
    {
      label: __("Double", "cocoblocks"),
      value: "double",
    },
  ];

  ////////////////////////////

  /* Opzioni link */
  export const linkOptions = [
    { label: "None", value: "none" },
    { label: "Link", value: "link" },
    { label: "Scroll Below Slider", value: "scroll-below" },
    { label: "Scroll to ID Element", value: "scroll-to-id" },
  ];

////////////////////////////

/* Opzioni per blob immagine */
export const blobOptions = [
  {
    label: __("None", "cocoblocks"),
    value: "none",
  },
  {
    label: __("Blob 1", "cocoblocks"),
    value: "blob1",
  },
  {
    label: __("Blob 2", "cocoblocks"),
    value: "blob2",
  },
  {
    label: __("Blob 3", "cocoblocks"),
    value: "blob3",
  },
  {
    label: __("Blob 4", "cocoblocks"),
    value: "blob4",
  },
];

////////////////////////////

/* Opzioni per spike immagine */
export const spikeOptions = [
  {
    label: __("None", "cocoblocks"),
    value: "none",
  },
  {
    label: __("1 Spike Top", "cocoblocks"),
    value: "left-spike-1-top",
  },
  {
    label: __("1 Spike Middle", "cocoblocks"),
    value: "left-spike-1-middle",
  },
  {
    label: __("1 Spike Bottom", "cocoblocks"),
    value: "left-spike-1-bottom",
  },
  {
    label: __("2 Spikes", "cocoblocks"),
    value: "left-spike-2",
  },
  {
    label: __("3 Spikes", "cocoblocks"),
    value: "left-spike-3",
  },
  {
    label: __("4 Spikes", "cocoblocks"),
    value: "left-spike-4",
  },
  {
    label: __("5 Spikes", "cocoblocks"),
    value: "left-spike-5",
  },
];

////////////////////////////

/* Opzioni per spike right immagine */
export const spikeRightOptions = [
  {
    label: __("None", "cocoblocks"),
    value: "none",
  },
  {
    label: __("1 Spike Top", "cocoblocks"),
    value: "right-spike-1-top",
  },
  {
    label: __("1 Spike Middle", "cocoblocks"),
    value: "right-spike-1-middle",
  },
  {
    label: __("1 Spike Bottom", "cocoblocks"),
    value: "right-spike-1-bottom",
  },
  {
    label: __("2 Spikes", "cocoblocks"),
    value: "right-spike-2",
  },
  {
    label: __("3 Spikes", "cocoblocks"),
    value: "right-spike-3",
  },
  {
    label: __("4 Spikes", "cocoblocks"),
    value: "right-spike-4",
  },
  {
    label: __("5 Spikes", "cocoblocks"),
    value: "right-spike-5",
  },
];

////////////////////////////

/* Opzioni per spike immagine inner */
export const spikeOptionsInner =[ 
  {
    label: __("None", "cocoblocks"),
    value: "none",
  },
  {
    label: __("1 Spike Top", "cocoblocks"),
    value: "left-spike-1-top-inner",
  },
  {
    label: __("1 Spike Middle", "cocoblocks"),
    value: "left-spike-1-middle-inner",
  },
  {
    label: __("1 Spike Bottom", "cocoblocks"),
    value: "left-spike-1-bottom-inner",
  },
  {
    label: __("2 Spikes", "cocoblocks"),
    value: "left-spike-2-inner",
  },
  {
    label: __("3 Spikes", "cocoblocks"),
    value: "left-spike-3-inner",
  },
  {
    label: __("4 Spikes", "cocoblocks"),
    value: "left-spike-4-inner",
  },
  {
    label: __("5 Spikes", "cocoblocks"),
    value: "left-spike-5-inner",
  },
];

////////////////////////////

/* Opzioni per spike right immagine */
export const spikeRightOptionsInner = [
  {
    label: __("None", "cocoblocks"),
    value: "none",
  },
  {
    label: __("1 Spike Top", "cocoblocks"),
    value: "right-spike-1-top-inner",
  },
  {
    label: __("1 Spike Middle", "cocoblocks"),
    value: "right-spike-1-middle-inner",
  },
  {
    label: __("1 Spike Bottom", "cocoblocks"),
    value: "right-spike-1-bottom-inner",
  },
  {
    label: __("2 Spikes", "cocoblocks"),
    value: "right-spike-2-inner",
  },
  {
    label: __("3 Spikes", "cocoblocks"),
    value: "right-spike-3-inner",
  },
  {
    label: __("4 Spikes", "cocoblocks"),
    value: "right-spike-4-inner",
  },
  {
    label: __("5 Spikes", "cocoblocks"),
    value: "right-spike-5-inner",
  },
];

////////////////////////////

/* Opzioni filter immagine */
export const filterImageOptions = [
  {
    label: __("None", "cocoblocks"),
    value: "none",
  },
  {
    label: __("Grayscale", "cocoblocks"),
    value: "grayscale",
  },
  {
    label: __("Blur", "cocoblocks"),
    value: "blur",
  },
  {
    label: __("Sepia", "cocoblocks"),
    value: "sepia",
  },
  {
    label: __("Contrast", "cocoblocks"),
    value: "contrast",
  },
  {
    label: __("Brightness", "cocoblocks"),
    value: "brightness",
  },
  {
    label: __("Invert", "cocoblocks"),
    value: "invert",
  },
  {
    label: __("Saturate", "cocoblocks"),
    value: "saturate",
  },
  {
    label: __("Opacity", "cocoblocks"),
    value: "opacity",
  },
  {
    label: __("Hue Rotate", "cocoblocks"),
    value: "hue-rotate",
  },
];

////////////////////////////

/* Opzioni di elementi */
export const elementHtmlOptions = [
  {
    label: __("<div>", "cocoblocks"),
    value: "div",
  },
  {
    label: __("<section>", "cocoblocks"),
    value: "section",
  },
  {
    label: __("<main>", "cocoblocks"),
    value: "main",
  },
  {
    label: __("<article>", "cocoblocks"),
    value: "article",
  },
  {
    label: __("<aside>", "cocoblocks"),
    value: "aside",
  },
];

////////////////////////////

/* Opzioni effetti icona */
export const iconEffectOptions = [
  {
    label: __("None", "cocoblocks"),
    value: "none",
  },
  {
    label: __("Beat", "cocoblocks"),
    value: "fa-beat",
  },
  {
    label: __("Fade", "cocoblocks"),
    value: "fa-fade",
  },
  {
    label: __("Beat-fade", "cocoblocks"),
    value: "fa-beat-fade",
  },
  {
    label: __("Bounce", "cocoblocks"),
    value: "fa-bounce",
  },
  {
    label: __("Flip", "cocoblocks"),
    value: "fa-flip",
  },
  {
    label: __("Shake", "cocoblocks"),
    value: "fa-shake",
  },
  {
    label: __("Pulse", "cocoblocks"),
    value: "fa-pulse",
  },
  {
    label: __("Spin", "cocoblocks"),
    value: "fa-spin",
  },
];

////////////////////////////

/* Opzioni effetti icona hover */
export const iconEffectHoverOptions = [
  { label: "None", value: "none" },
  { label: "Scale", value: "hover-effect-1-icon-button" },
  { label: "Translate Y", value: "hover-effect-2-icon-button" },
  { label: "Translate X", value: "hover-effect-5-icon-button" },
];

////////////////////////////

/* Opzioni effetti icona inner hover */
export const iconEffectHoverOptionsInner = [
  { label: "None", value: "none" },
  { label: "Scale", value: "hover-effect-1-icon-button-inner" },
  { label: "Translate Y", value: "hover-effect-2-icon-button-inner" },
  { label: "Translate X", value: "hover-effect-5-icon-button-inner" },
];

////////////////////////////

/* Opzioni filter background slide */
export const filterBackgroundOptions = [
  {
    label: __("None", "cocoblocks"),
    value: "none",
  },
  {
    label: __("Classic", "cocoblocks"),
    value: "filter-classic",
  },
  {
    label: __("Lateral", "cocoblocks"),
    value: "filter-lateral",
  },
  {
    label: __("Central circle", "cocoblocks"),
    value: "filter-central-circle",
  },
  {
    label: __("Border fade", "cocoblocks"),
    value: "filter-border-fade",
  },
  {
    label: __("Vignette", "cocoblocks"),
    value: "filter-vignette",
  },
  {
    label: __("Spotlight", "cocoblocks"),
    value: "filter-spotlight",
  },
  {
    label: __("Diagonal", "cocoblocks"),
    value: "filter-diagonal",
  },
  {
    label: __("Nebula", "cocoblocks"),
    value: "filter-nebula",
  },
  {
    label: __("Glitch", "cocoblocks"),
    value: "filter-glitch",
  },
  {
    label: __("Prism", "cocoblocks"),
    value: "filter-prism",
  },
  {
    label: __("Inverse", "cocoblocks"),
    value: "filter-inverse",
  },
];

////////////////////////////

/* Opzioni per view */
export const optionsPerView = [
  {
    label: __("1", "slide"),
    value: "1",
  },
  {
    label: __("2", "cocoblocks"),
    value: "2",
  },
  {
    label: __("3", "cocoblocks"),
    value: "3",
  },
  {
    label: __("4", "cocoblocks"),
    value: "4",
  },
  {
    label: __("5", "cocoblocks"),
    value: "5",
  },
  {
    label: __("6", "cocoblocks"),
    value: "6",
  },
  {
    label: __("7", "cocoblocks"),
    value: "7",
  },
  {
    label: __("8", "cocoblocks"),
    value: "8",
  },
  {
    label: __("9", "cocoblocks"),
    value: "9",
  },
  {
    label: __("10", "cocoblocks"),
    value: "10",
  },
  {
    label: __("Auto", "cocoblocks"),
    value: "auto",
  },
];

////////////////////////////

/* Opzioni per group */
export const optionsPerGroup = [
  {
    label: __("1", "slide"),
    value: "1",
  },
  {
    label: __("2", "cocoblocks"),
    value: "2",
  },
  {
    label: __("3", "cocoblocks"),
    value: "3",
  },
  {
    label: __("4", "cocoblocks"),
    value: "4",
  },
  {
    label: __("5", "cocoblocks"),
    value: "5",
  },
  {
    label: __("6", "cocoblocks"),
    value: "6",
  },
  {
    label: __("7", "cocoblocks"),
    value: "7",
  },
  {
    label: __("8", "cocoblocks"),
    value: "8",
  },
  {
    label: __("9", "cocoblocks"),
    value: "9",
  },
  {
    label: __("10", "cocoblocks"),
    value: "10",
  },
];

////////////////////////////

/* Opzioni initial slider */
export const optionsInitialSlide = [
  {
    label: __("0", "slide"),
    value: "0",
  },
  {
    label: __("1", "slide"),
    value: "1",
  },
  {
    label: __("2", "cocoblocks"),
    value: "2",
  },
  {
    label: __("3", "cocoblocks"),
    value: "3",
  },
  {
    label: __("4", "cocoblocks"),
    value: "4",
  },
  {
    label: __("5", "cocoblocks"),
    value: "5",
  },
  {
    label: __("6", "cocoblocks"),
    value: "6",
  },
  {
    label: __("7", "cocoblocks"),
    value: "7",
  },
  {
    label: __("8", "cocoblocks"),
    value: "8",
  },
  {
    label: __("9", "cocoblocks"),
    value: "9",
  },
];

////////////////////////////

/* Opzioni per la navigazione */
export const optionsNavigation = [
  {
    label: __("Classic", "cocoblocks"),
    value: "default",
  },
  {
    label: __("Sleek", "cocoblocks"),
    value: "one",
  },
  {
    label: __("Minimal", "cocoblocks"),
    value: "two",
  },
  {
    label: __("Bold", "cocoblocks"),
    value: "three",
  },
  {
    label: __("Elegant", "cocoblocks"),
    value: "four",
  },
  {
    label: __("Toggle", "cocoblocks"),
    value: "five",
  },
  {
    label: __("Text", "cocoblocks"),
    value: "text",
  },
];

////////////////////////////

/* Opzioni filtri slider */
export const optionsFilterSlider = [
  {
    label: __("None", "cocoblocks"),
    value: " ",
  },
  {
    label: __("Classic", "cocoblocks"),
    value: "filter-classic",
  },
  {
    label: __("Lateral", "cocoblocks"),
    value: "filter-lateral",
  },
  {
    label: __("Central circle", "cocoblocks"),
    value: "filter-central-circle",
  },
  {
    label: __("Border fade", "cocoblocks"),
    value: "filter-border-fade",
  },
  {
    label: __("Vignette", "cocoblocks"),
    value: "filter-vignette",
  },
  {
    label: __("Spotlight", "cocoblocks"),
    value: "filter-spotlight",
  },
  {
    label: __("Diagonal", "cocoblocks"),
    value: "filter-diagonal",
  },
  {
    label: __("Nebula", "cocoblocks"),
    value: "filter-nebula",
  },
  {
    label: __("Glitch", "cocoblocks"),
    value: "filter-glitch",
  },
  {
    label: __("Prism", "cocoblocks"),
    value: "filter-prism",
  },
  {
    label: __("Inverse", "cocoblocks"),
    value: "filter-inverse",
  },
];