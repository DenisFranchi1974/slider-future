import { __ } from '@wordpress/i18n';

export const selectOptionsEffectInFree = [
  { value: "none", label: __("None", "slider-future") },
  { value: "fadeIn", label: __("Fade", "slider-future") },
  { value: "translateXYIn", label: __("Translate", "slider-future") },
  { value: "scaleIn", label: __("Scale", "slider-future") },
  { value: "scaleInX", label: __("Scale X", "slider-future") },
  { value: "scaleInY", label: __("Scale Y", "slider-future") },
  { value: "skewInX", label: __("Skew", "slider-future") },
  { value: "BlockFromIn", label: __("Block", "slider-future") },
  { value: "customEffectIn", label: __("Custom", "slider-future") },
  { value: "splitText", label: __("Split Text", "slider-future") },
  { value: "rotateIn", label: __("Rotate", "slider-future") },
];

export const selectOptionsEffectIn = [
  { value: "none", label: __("None", "slider-future") },
  { value: "fadeIn", label: __("Fade", "slider-future") },
  { value: "translateXYIn", label: __("Translate", "slider-future") },
  { value: "scaleIn", label: __("Scale", "slider-future") },
  { value: "animation-pro", label: <span className="pro-label">{__("Scale X (Pro)", "slider-future")}</span> },
  { value: "animation-pro", label: <span className="pro-label">{__("Scale Y (Pro)", "slider-future")}</span> },
  { value: "animation-pro", label: <span className="pro-label">{__("Skew (Pro)", "slider-future")}</span> },
  { value: "animation-pro", label: <span className="pro-label">{__("Block (Pro)", "slider-future")}</span> },
  { value: "animation-pro", label: <span className="pro-label">{__("Custom (Pro)", "slider-future")}</span> },
  { value: "animation-pro", label: <span className="pro-label">{__("Split Text (Pro)", "slider-future")}</span> },
  { value: "rotateIn", label: __("Rotate", "slider-future") },
];

export const selectOptionsEffectElementFree = [
  { value: "none", label: __("None", "slider-future") },
  { value: "fadeIn", label: __("Fade", "slider-future") },
  { value: "translateXYIn", label: __("Translate", "slider-future") },
  { value: "scaleIn", label: __("Scale", "slider-future") },
  { value: "scaleInX", label: __("Scale X", "slider-future") },
  { value: "scaleInY", label: __("Scale Y", "slider-future") },
  { value: "rotateIn", label: __("Rotate", "slider-future") },
  { value: "skewInX", label: __("Skew", "slider-future") },
  { value: "customEffectIn", label: __("Custom", "slider-future") },
];

export const selectOptionsEffectElement = [
  { value: "none", label: __("None", "slider-future") },
  { value: "fadeIn", label: __("Fade", "slider-future") },
  { value: "translateXYIn", label: __("Translate", "slider-future") },
  { value: "scaleIn", label: __("Scale", "slider-future") },
  { value: "animation-pro", label: <span className="pro-label">{__("Scale X (Pro)", "slider-future")}</span> },
  { value: "animation-pro", label: <span className="pro-label">{__("Scale Y (Pro)", "slider-future")}</span> },
  { value: "rotateIn", label: __("Rotate", "slider-future") },
  { value: "animation-pro", label: <span className="pro-label">{__("Skew (Pro)", "slider-future")}</span> },
  { value: "animation-pro", label: <span className="pro-label">{__("Custom (Pro)", "slider-future")}</span> },
];

export const selectOptionsEffectHoverFree = [
  { value: "none", label: __("None", "slider-future") },
  { value: "opacityHover", label: __("Fade", "slider-future") },
  { value: "translateHover", label: __("Translate", "slider-future") },
  { value: "scaleHover", label: __("Scale", "slider-future") },
  { value: "scaleXHover", label: __("Scale X", "slider-future") },
  { value: "scaleYHover", label: __("Scale Y", "slider-future") },
  { value: "rotateHover", label: __("Rotate", "slider-future") },
  { value: "skewHover", label: __("Skew", "slider-future") },
  { value: "customHover", label: __("Custom", "slider-future") },
];

export const selectOptionsEffectHover = [
  { value: "none", label: __("None", "slider-future") },
  { value: "opacityHover", label: __("Fade", "slider-future") },
  { value: "translateHover", label: __("Translate", "slider-future") },
  { value: "scaleHover", label: __("Scale", "slider-future") },
  { value: "animation-pro", label: <span className="pro-label">{__("Scale X (Pro)", "slider-future")}</span> },
  { value: "animation-pro", label: <span className="pro-label">{__("Scale Y (Pro)", "slider-future")}</span> },
  { value: "rotateHover", label: __("Rotate", "slider-future") },
  { value: "animation-pro", label: <span className="pro-label">{__("Skew (Pro)", "slider-future")}</span> },
  { value: "animation-pro", label: <span className="pro-label">{__("Custom (Pro)", "slider-future")}</span> },
];
  
export const selectOptionsEase = [
  { value: 'linear', label: __('linear', "slider-future") },
      { value: 'easeInQuad', label: __('easeInQuad', "slider-future") },
      { value: 'easeOutQuad', label: __('easeOutQuad', "slider-future") },
      { value: 'easeInOutQuad', label: __('easeInOutQuad', "slider-future") },
      { value: 'easeOutInQuad', label: __('easeOutInQuad', "slider-future") },
       { value: 'easeInQuint', label: __('easeInQuint', "slider-future") },
      { value: 'easeOutQuint', label: __('easeOutQuint', "slider-future") },
      { value: 'easeInOutQuint', label: __('easeInOutQuint', "slider-future") },
      { value: 'easeOutInQuint', label: __('easeOutInQuint', "slider-future") },
      { value: 'more-pro', label: <span className='pro-label'>{__("More (Pro)", "slider-future")}</span> }
];

export const selectOptionsEaseFree =  [
      { value: 'linear', label: __('linear', "slider-future") },
      { value: 'easeInQuad', label: __('easeInQuad', "slider-future") },
      { value: 'easeOutQuad', label: __('easeOutQuad', "slider-future") },
      { value: 'easeInOutQuad', label: __('easeInOutQuad', "slider-future") },
      { value: 'easeOutInQuad', label: __('easeOutInQuad', "slider-future") },
      { value: 'easeInCubic', label: __('easeInCubic', "slider-future") },
      { value: 'easeOutCubic', label: __('easeOutCubic', "slider-future") },
      { value: 'easeInOutCubic', label: __('easeInOutCubic', "slider-future") },
      { value: 'easeOutInCubic', label: __('easeOutInCubic', "slider-future") },
      { value: 'easeInQuart', label: __('easeInQuart', "slider-future") },
      { value: 'easeOutQuart', label: __('easeOutQuart', "slider-future") },
      { value: 'easeInOutQuart', label: __('easeInOutQuart', "slider-future") },
      { value: 'easeOutInQuart', label: __('easeOutInQuart', "slider-future") },
      { value: 'easeInQuint', label: __('easeInQuint', "slider-future") },
      { value: 'easeOutQuint', label: __('easeOutQuint', "slider-future") },
      { value: 'easeInOutQuint', label: __('easeInOutQuint', "slider-future") },
      { value: 'easeOutInQuint', label: __('easeOutInQuint', "slider-future") },
      { value: 'easeInSine', label: __('easeInSine', "slider-future") },
      { value: 'easeOutSine', label: __('easeOutSine', "slider-future") },
      { value: 'easeInOutSine', label: __('easeInOutSine', "slider-future") },
      { value: 'easeOutInSine', label: __('easeOutInSine', "slider-future") },
      { value: 'easeInExpo', label: __('easeInExpo', "slider-future") },
      { value: 'easeOutExpo', label: __('easeOutExpo', "slider-future") },
      { value: 'easeInOutExpo', label: __('easeInOutExpo', "slider-future") },
      { value: 'easeOutInExpo', label: __('easeOutInExpo', "slider-future") },
      { value: 'easeInCirc', label: __('easeInCirc', "slider-future") },
      { value: 'easeOutCirc', label: __('easeOutCirc', "slider-future") },
      { value: 'easeInOutCirc', label: __('easeInOutCirc', "slider-future") },
      { value: 'easeOutInCirc', label: __('easeOutInCirc', "slider-future") },
      { value: 'easeInBack', label: __('easeInBack', "slider-future") },
      { value: 'easeOutBack', label: __('easeOutBack', "slider-future") },
      { value: 'easeInOutBack', label: __('easeInOutBack', "slider-future") },
      { value: 'easeOutInBack', label: __('easeOutInBack', "slider-future") },
      { value: 'easeInElastic', label: __('easeInElastic', "slider-future") },
      { value: 'easeOutElastic', label: __('easeOutElastic', "slider-future") },
      { value: 'easeInOutElastic', label: __('easeInOutElastic', "slider-future") },
      { value: 'easeOutInElastic', label: __('easeOutInElastic', "slider-future") },
      { value: 'easeInBounce', label: __('easeInBounce', "slider-future") },
      { value: 'easeOutBounce', label: __('easeOutBounce', "slider-future") },
      { value: 'easeInOutBounce', label: __('easeInOutBounce', "slider-future") },
      { value: 'easeOutInBounce', label: __('easeOutInBounce', "slider-future") },
      { value: 'cubicBezier(.5, .05, .1, .3)', label: __('cubicBezier','slider-future') },
      { value: 'spring(1, 80, 10, 0)', label: __('spring','slider-future') },
    ];

export const selectOptionsDirectionBlock = [
  { value: "top", label: __("Top", "slider-future") },
  { value: "right", label: __("Right", "slider-future") },
  { value: "bottom", label: __("Bottom", "slider-future") },
  { value: "left", label: __("Left", "slider-future") },
];

export const selectOptionsScaleIn = [
  { value: "scale", label: __("Scale", "slider-future") },
  { value: "scaleX", label: __("Scale X", "slider-future") },
  { value: "scaleY", label: __("Scale Y", "slider-future") },
];

export const selectOptionsEffectSplit = [  
  { value: 'fadeSplit', label: __('Fade','slider-future') },
  { value: 'translateSplit', label: __('Translate','slider-future') },
  { value: 'scaleSplit', label: __('Scale','slider-future')},
  { value: 'scaleXSplit', label: __('Scale X','slider-future')},
  { value: 'scaleYSplit', label: __('Scale Y','slider-future')},
  { value: 'rotateSplit', label: __('Rotate','slider-future')},
  { value: 'skewSplit', label: __('Skew','slider-future')},
  { value: "explosion", label: __("Explosion", "slider-future") },
  { value: "gather", label: __("Gather", "slider-future") },
  { value: "customSplit", label: __("Custom", "slider-future") },  
];

export const selectOptionsRepeat = [
  { value: "1", label: __("One", "slider-future") },
  { value: "2", label: __("Two", "slider-future") },
  { value: "3", label: __("Three", "slider-future") },
  { value: "4", label: __("Four", "slider-future") },
  { value: "5", label: __("Five", "slider-future") },
  { value: "true", label: __("Infinite", "slider-future") },
];

export const selectOptionsDirection = [
  { value: "normal", label: __("Normal", "slider-future") },
  { value: "reverse", label: __("Reverse", "slider-future") },
  { value: "alternate", label: __("Alternate", "slider-future") },
];

export const fontOptions = [
  { label: __("Inherit", "slider-future"), value: "inherit" },
  { label: __("Anton", "slider-future"), value: "Anton, sans-serif" },
  {
    label: __("Baskervville SC", "slider-future"),
    value: "Baskervville SC, serif",
  },
  {
    label: __("Bodoni Moda SC", "slider-future"),
    value: "Bodoni Moda SC, serif",
  },
  { label: __("Book Antiqua", "slider-future"), value: "Book Antiqua, serif" },
  {
    label: __("Brush Script MT", "slider-future"),
    value: "Brush Script MT, cursive",
  },
  { label: __("Bungee Tint", "slider-future"), value: "Bungee Tint, sans-serif" },
  { label: __("Comic Sans MS", "slider-future"), value: "Comic Sans MS, cursive" },
  { label: __("Consolas", "slider-future"), value: "Consolas, monospace" },
  { label: __("Courier New", "slider-future"), value: "Courier New, monospace" },
  { label: __("Fira Sans", "slider-future"), value: "Fira Sans, serif" },
  { label: __("Ga Maamli", "slider-future"), value: "Ga Maamli, sans-serif" },
  { label: __("Georgia", "slider-future"), value: "Georgia, serif" },
  { label: __("Gill Sans", "slider-future"), value: "Gill Sans, sans-serif" },
  { label: __("Goldman", "slider-future"), value: "Goldman, sans-serif" },
  { label: __("Helvetica", "slider-future"), value: "Helvetica, sans-serif" },
  { label: __("Impact", "slider-future"), value: "Impact, fantasy" },
  { label: __("Inconsolata", "slider-future"), value: "Inconsolata, monospace" },
  { label: __("Kanit", "slider-future"), value: "Kanit, sans-serif" },
  { label: __("Knewave", "slider-future"), value: "Knewave, cursive" },
  { label: __("Londrina Outline", "slider-future"), value: "Londrina Outline, sans-serif" },
  {
    label: __("Lucida Console", "slider-future"),
    value: "Lucida Console, monospace",
  },
  { label: __("Macondo", "slider-future"), value: "Macondo, cursive" },
  { label: __("Matemasie", "slider-future"), value: "Matemasie, sans-serif" },
  { label: __("Monaco", "slider-future"), value: "Monaco, monospace" },
  { label: __("Montserrat", "slider-future"), value: "Montserrat, serif" },
  { label: __("Nunito Sans", "slider-future"), value: "Nunito Sans, sans-serif" },
  { label: __("Open Sans", "slider-future"), value: "Open Sans, sans-serif" },
  {
    label: __("Palatino Linotype", "slider-future"),
    value: "Palatino Linotype, serif",
  },
  { label: __("Poppins", "slider-future"), value: "Poppins, sans-serif" },
  { label: __("Rampart One", "slider-future"), value: "Rampart One, sans-serif" },
  { label: __("Raleway", "slider-future"), value: "Raleway, sans-serif" },
  { label: __("Roboto", "slider-future"), value: "Roboto, sans-serif" },
  {
    label: __("Rubik Wet Paint", "slider-future"),
    value: "Rubik Wet Paint, cursive",
  },
  {
    label: __("Ruslan Display", "slider-future"),
    value: "Ruslan Display, display",
  },
  { label: __("Tahoma", "slider-future"), value: "Tahoma, sans-serif" },
  { label: __("Times New Roman", "slider-future"), value: "Times New Roman, serif" },
  { label: __("Titan One", "slider-future"), value: "Titan One, sans-serif" },
  {
    label: __("Trebuchet MS", "slider-future"),
    value: "Trebuchet MS, sans-serif",
  },
  { label: __("Ubuntu Mono", "slider-future"), value: "Ubuntu Mono, monospace" },
  { label: __("Unbounded", "slider-future"), value: "Unbounded, serif" },
  {
    label: __("Vujahday Script", "slider-future"),
    value: "Vujahday Script, cursive",
  },
  { label: __("Verdana", "slider-future"), value: "Verdana, sans-serif" },
  { label: __("Wallpoet", "slider-future"), value: "Wallpoet, cursive" },

];

export const fontWeightOptions = [
    {
        label: __("100 Thin", "slider-future"),
        value: "100",
    },
    {
        label: __("300 Light", "slider-future"),
        value: "300",
    },
    {
        label: __("400 Regular", "slider-future"),
        value: "400",
    },
    {
        label: __("500 Medium", "slider-future"),
        value: "500",
    },
    {
        label: __("700 Bold", "slider-future"),
        value: "700",
    },
    {
        label: __("900 Black", "slider-future"),
        value: "900",
    }, 
];

export const alignOptions = [
  {
    label: __("Auto", "slider-future"),
    value: "auto",
  },
  {
    label: __("100%", "slider-future"),
    value: "100%",
  },
  {
    label: __("Custom", "slider-future"),
    value: "custom",
  },
];

export const elementOptions = [
  {
    label: __("P", "slider-future"),
    value: "p",
  },
  {
    label: __("H6", "slider-future"),
    value: "h6",
  },
  {
    label: __("H5", "slider-future"),
    value: "h5",
  },
  {
    label: __("H4", "slider-future"),
    value: "h4",
  },
  {
    label: __("H3", "slider-future"),
    value: "h3",
  },
  {
    label: __("H2", "slider-future"),
    value: "h2",
  },
  {
    label: __("H1", "slider-future"),
    value: "h1",
  },
];
  
export const blendModeOptions = [
  {
    label: __("Normal", "slider-future"),
    value: "normal",
  },
  {
    label: __("Multiply", "slider-future"),
    value: "multiply",
  },
  {
    label: __("Screen", "slider-future"),
    value: "screen",
  },
  {
    label: __("Overlay", "slider-future"),
    value: "overlay",
  },
  {
    label: __("Darken", "slider-future"),
    value: "darken",
  },
  {
    label: __("Lighten", "slider-future"),
    value: "lighten",
  },
  {
    label: __("Color Dodge", "slider-future"),
    value: "color-dodge",
  },
  {
    label: __("Color Burn", "slider-future"),
    value: "color-burn",
  },
  {
    label: __("Hard Light", "slider-future"),
    value: "hard-light",
  },
  {
    label: __("Soft Light", "slider-future"),
    value: "soft-light",
  },
  {
    label: __("Difference", "slider-future"),
    value: "difference",
  },
  {
    label: __("Exclusion", "slider-future"),
    value: "exclusion",
  },
  {
    label: __("Hue", "slider-future"),
    value: "hue",
  },
  {
    label: __("Saturation", "slider-future"),
    value: "saturation",
  },
  {
    label: __("Color", "slider-future"),
    value: "color",
  },
  {
    label: __("Luminosity", "slider-future"),
    value: "luminosity",
  },
];

export const writeModeOptions = [
  { label: __("Horizontal",'slider-future'), value: "initial" },
  { label: __("Vertical",'slider-future'), value: "vertical-lr" },
];

export const borderStyleOptions = [
  {
    label: __("None", "slider-future"),
    value: "none",
  },
  {
    label: __("Solid", "slider-future"),
    value: "solid",
  },
  {
    label: __("Dashed", "slider-future"),
    value: "dashed",
  },
  {
    label: __("Dotted", "slider-future"),
    value: "dotted",
  },
  {
    label: __("Double", "slider-future"),
    value: "double",
  },
];

export const linkOptions = [
  { label: __("None",'slider-future'), value: "none" },
  { label: __("Link",'slider-future'), value: "link" },
  { label: __("Scroll Below Slider",'slider-future'), value: "scroll-below" },
  { label: __("Scroll to ID Element",'slider-future'), value: "scroll-to-id" },
];

export const blobOptions = [
  {
    label: __("None", "slider-future"),
    value: "none",
  },
  {
    label: __("Blob 1", "slider-future"),
    value: "blob1",
  },
  {
    label: __("Blob 2", "slider-future"),
    value: "blob2",
  },
  {
    label: __("Blob 3", "slider-future"),
    value: "blob3",
  },
  {
    label: __("Blob 4", "slider-future"),
    value: "blob4",
  },
];

export const spikeOptions = [
  {
    label: __("None", "slider-future"),
    value: "none",
  },
  {
    label: __("1 Spike Top", "slider-future"),
    value: "left-spike-1-top",
  },
  {
    label: __("1 Spike Middle", "slider-future"),
    value: "left-spike-1-middle",
  },
  {
    label: __("1 Spike Bottom", "slider-future"),
    value: "left-spike-1-bottom",
  },
  {
    label: __("2 Spikes", "slider-future"),
    value: "left-spike-2",
  },
  {
    label: __("3 Spikes", "slider-future"),
    value: "left-spike-3",
  },
  {
    label: __("4 Spikes", "slider-future"),
    value: "left-spike-4",
  },
  {
    label: __("5 Spikes", "slider-future"),
    value: "left-spike-5",
  },
];

export const spikeRightOptions = [
  {
    label: __("None", "slider-future"),
    value: "none",
  },
  {
    label: __("1 Spike Top", "slider-future"),
    value: "right-spike-1-top",
  },
  {
    label: __("1 Spike Middle", "slider-future"),
    value: "right-spike-1-middle",
  },
  {
    label: __("1 Spike Bottom", "slider-future"),
    value: "right-spike-1-bottom",
  },
  {
    label: __("2 Spikes", "slider-future"),
    value: "right-spike-2",
  },
  {
    label: __("3 Spikes", "slider-future"),
    value: "right-spike-3",
  },
  {
    label: __("4 Spikes", "slider-future"),
    value: "right-spike-4",
  },
  {
    label: __("5 Spikes", "slider-future"),
    value: "right-spike-5",
  },
];

export const spikeOptionsInner =[ 
  {
    label: __("None", "slider-future"),
    value: "none",
  },
  {
    label: __("1 Spike Top", "slider-future"),
    value: "left-spike-1-top-inner",
  },
  {
    label: __("1 Spike Middle", "slider-future"),
    value: "left-spike-1-middle-inner",
  },
  {
    label: __("1 Spike Bottom", "slider-future"),
    value: "left-spike-1-bottom-inner",
  },
  {
    label: __("2 Spikes", "slider-future"),
    value: "left-spike-2-inner",
  },
  {
    label: __("3 Spikes", "slider-future"),
    value: "left-spike-3-inner",
  },
  {
    label: __("4 Spikes", "slider-future"),
    value: "left-spike-4-inner",
  },
  {
    label: __("5 Spikes", "slider-future"),
    value: "left-spike-5-inner",
  },
];

export const spikeRightOptionsInner = [
  {
    label: __("None", "slider-future"),
    value: "none",
  },
  {
    label: __("1 Spike Top", "slider-future"),
    value: "right-spike-1-top-inner",
  },
  {
    label: __("1 Spike Middle", "slider-future"),
    value: "right-spike-1-middle-inner",
  },
  {
    label: __("1 Spike Bottom", "slider-future"),
    value: "right-spike-1-bottom-inner",
  },
  {
    label: __("2 Spikes", "slider-future"),
    value: "right-spike-2-inner",
  },
  {
    label: __("3 Spikes", "slider-future"),
    value: "right-spike-3-inner",
  },
  {
    label: __("4 Spikes", "slider-future"),
    value: "right-spike-4-inner",
  },
  {
    label: __("5 Spikes", "slider-future"),
    value: "right-spike-5-inner",
  },
];

export const filterImageOptions = [
  {
    label: __("None", "slider-future"),
    value: "none",
  },
  {
    label: __("Grayscale", "slider-future"),
    value: "grayscale",
  },
  {
    label: __("Blur", "slider-future"),
    value: "blur",
  },
  {
    label: __("Sepia", "slider-future"),
    value: "sepia",
  },
  {
    label: __("Contrast", "slider-future"),
    value: "contrast",
  },
  {
    label: __("Brightness", "slider-future"),
    value: "brightness",
  },
  {
    label: __("Invert", "slider-future"),
    value: "invert",
  },
  {
    label: __("Saturate", "slider-future"),
    value: "saturate",
  },
  {
    label: __("Opacity", "slider-future"),
    value: "opacity",
  },
  {
    label: __("Hue Rotate", "slider-future"),
    value: "hue-rotate",
  },
];

export const elementHtmlOptions = [
  {
    label: __("<div>", "slider-future"),
    value: "div",
  },
  {
    label: __("<section>", "slider-future"),
    value: "section",
  },
  {
    label: __("<main>", "slider-future"),
    value: "main",
  },
  {
    label: __("<article>", "slider-future"),
    value: "article",
  },
  {
    label: __("<aside>", "slider-future"),
    value: "aside",
  },
];

export const iconEffectOptionsFree = [
  {
    label: __("None", "slider-future"),
    value: "none",
  },
  {
    label: __("Beat", "slider-future"),
    value: "fa-beat",
  },
  {
    label: __("Fade", "slider-future"),
    value: "fa-fade",
  },
 {
    label: __("Beat-fade", "slider-future"),
    value: "fa-beat-fade",
  },
  {
    label: __("Bounce", "slider-future"),
    value: "fa-bounce",
  },
 {
    label: __("Flip", "slider-future"),
    value: "fa-flip",
  },
  {
    label: __("Shake", "slider-future"),
    value: "fa-shake",
  },
   {
    label: __("Pulse", "slider-future"),
    value: "fa-pulse",
  },
  {
    label: __("Spin", "slider-future"),
    value: "fa-spin",
  },
];

export const iconEffectOptions = [
  {
    label: __("None", "slider-future"),
    value: "none",
  },
  {
    label: __("Beat", "slider-future"),
    value: "fa-beat",
  },
  { value: "animation-pro", label: <span className='pro-label'>{__("Fade (Pro)", "slider-future")}</span> },
  { value: "animation-pro", label: <span className='pro-label'>{__("Beat-fade (Pro)", "slider-future")}</span> },
  { value: "animation-pro", label: <span className='pro-label'>{__("Bounce (Pro)", "slider-future")}</span> },
  { value: "animation-pro", label: <span className='pro-label'>{__("Flip (Pro)", "slider-future")}</span> },
  { value: "animation-pro", label: <span className='pro-label'>{__("Shake (Pro)", "slider-future")}</span> },
  { value: "animation-pro", label: <span className='pro-label'>{__("Pulse (Pro)", "slider-future")}</span> },
  {
    label: __("Spin", "slider-future"),
    value: "fa-spin",
  },
];


export const iconEffectHoverOptions = [
  { label: __("None",'slider-future'), value: "none" },
  { label: __("Scale",'slider-future'), value: "hover-effect-1-icon-button" },
  { label: __("Translate Y",'slider-future'), value: "hover-effect-2-icon-button" },
  { label: __("Translate X",'slider-future'), value: "hover-effect-5-icon-button" },
];

export const iconEffectHoverOptionsInner = [
  { label: __("None",'slider-future'), value: "none" },
  { label: __("Scale",'slider-future'), value: "hover-effect-1-icon-button-inner" },
  { label: __("Translate Y",'slider-future'), value: "hover-effect-2-icon-button-inner" },
  { label: __("Translate X",'slider-future'), value: "hover-effect-5-icon-button-inner" },
];

export const filterBackgroundOptions = [
  {
    label: __("None", "slider-future"),
    value: "none",
  },
  {
    label: __("Classic", "slider-future"),
    value: "filter-classic",
  },
  { value: 'more-pro-filter', label: <span className='pro-label'>{__("More (Pro)", "slider-future")}</span> }
  
];

export const filterBackgroundOptionsFree = [
  {
    label: __("None", "slider-future"),
    value: "none",
  },
  {
    label: __("Classic", "slider-future"),
    value: "filter-classic",
  },
  {
    label: __("Lateral", "slider-future"),
    value: "filter-lateral",
  },
  {
    label: __("Central circle", "slider-future"),
    value: "filter-central-circle",
  },
  {
    label: __("Border fade", "slider-future"),
    value: "filter-border-fade",
  },
  {
    label: __("Vignette", "slider-future"),
    value: "filter-vignette",
  },
  {
    label: __("Spotlight", "slider-future"),
    value: "filter-spotlight",
  },
  {
    label: __("Diagonal", "slider-future"),
    value: "filter-diagonal",
  },
  {
    label: __("Nebula", "slider-future"),
    value: "filter-nebula",
  },
  {
    label: __("Glitch", "slider-future"),
    value: "filter-glitch",
  },
  {
    label: __("Prism", "slider-future"),
    value: "filter-prism",
  },
  {
    label: __("Inverse", "slider-future"),
    value: "filter-inverse",
  },
];

export const optionsPerView = [
  {
    label: __("1", "slider-future"),
    value: "1",
  },
  {
    label: __("2", "slider-future"),
    value: "2",
  },
  {
    label: __("3", "slider-future"),
    value: "3",
  },
  {
    label: __("4", "slider-future"),
    value: "4",
  },
  {
    label: __("5", "slider-future"),
    value: "5",
  },
  {
    label: __("6", "slider-future"),
    value: "6",
  },
  {
    label: __("7", "slider-future"),
    value: "7",
  },
  {
    label: __("8", "slider-future"),
    value: "8",
  },
  {
    label: __("9", "slider-future"),
    value: "9",
  },
  {
    label: __("10", "slider-future"),
    value: "10",
  },
  {
    label: __("Auto", "slider-future"),
    value: "auto",
  },
];

export const optionsPerGroup = [
  {
    label: __("1", "slider-future"),
    value: 1,
  },
  {
    label: __("2", "slider-future"),
    value: 2,
  },
  {
    label: __("3", "slider-future"),
    value: 3,
  },
  {
    label: __("4", "slider-future"),
    value: 4,
  },
  {
    label: __("5", "slider-future"),
    value: 5,
  },
  {
    label: __("6", "slider-future"),
    value: 6,
  },
  {
    label: __("7", "slider-future"),
    value: 7,
  },
  {
    label: __("8", "slider-future"),
    value: 8,
  },
  {
    label: __("9", "slider-future"),
    value: 9,
  },
  {
    label: __("10", "slider-future"),
    value: 10,
  },
];

export const optionsInitialSlide = [
  {
    label: __("0", "slider-future"),
    value: "0",
  },
  {
    label: __("1", "slider-future"),
    value: "1",
  },
  {
    label: __("2", "slider-future"),
    value: "2",
  },
  {
    label: __("3", "slider-future"),
    value: "3",
  },
  {
    label: __("4", "slider-future"),
    value: "4",
  },
  {
    label: __("5", "slider-future"),
    value: "5",
  },
  {
    label: __("6", "slider-future"),
    value: "6",
  },
  {
    label: __("7", "slider-future"),
    value: "7",
  },
  {
    label: __("8", "slider-future"),
    value: "8",
  },
  {
    label: __("9", "slider-future"),
    value: "9",
  },
];

export const optionsNavigation = [
  {
    label: __("Classic", "slider-future"),
    value: "default",
  },
  {
    label: __("Sleek", "slider-future"),
    value: "one",
  },
  {
    label: __("Minimal", "slider-future"),
    value: "two",
  },
  {
    label: __("Bold", "slider-future"),
    value: "three",
  },
  {
    label: __("Elegant", "slider-future"),
    value: "four",
  },
  {
    label: __("Toggle", "slider-future"),
    value: "five",
  },
  {
    label: __("Text", "slider-future"),
    value: "text",
  },
];

export const optionsFilterSlider = [
  {
    label: __("None", "slider-future"),
    value: " ",
  },
  {
    label: __("Classic", "slider-future"),
    value: "filter-classic",
  },
  {
    label: __("Lateral", "slider-future"),
    value: "filter-lateral",
  },
  {
    label: __("Central circle", "slider-future"),
    value: "filter-central-circle",
  },
  {
    label: __("Border fade", "slider-future"),
    value: "filter-border-fade",
  },
  {
    label: __("Vignette", "slider-future"),
    value: "filter-vignette",
  },
  {
    label: __("Spotlight", "slider-future"),
    value: "filter-spotlight",
  },
  {
    label: __("Diagonal", "slider-future"),
    value: "filter-diagonal",
  },
  {
    label: __("Nebula", "slider-future"),
    value: "filter-nebula",
  },
  {
    label: __("Glitch", "slider-future"),
    value: "filter-glitch",
  },
  {
    label: __("Prism", "slider-future"),
    value: "filter-prism",
  },
  {
    label: __("Inverse", "slider-future"),
    value: "filter-inverse",
  },
];

export const dividerBackgroundOptions = [
  {
    label: __("None", "slider-future"),
    value: "none",
  },
  {
    label: __("Wawes", "slider-future"),
    value: "divider-wawes",
  },
  {
    label: __("Curve", "slider-future"),
    value: "divider-curve",
  },
  {
    label: __("Curve Asymmetrical", "slider-future"),
    value: "divider-curve-asymmetrical",
  },
  {
    label: __("Triangle", "slider-future"),
    value: "divider-triangle",
  },
  {
    label: __("Triangle Asymmetrical", "slider-future"),
    value: "divider-triangle-asymmetrical",
  },
  {
    label: __("Tilt", "slider-future"),
    value: "divider-tilt",
  },
  {
    label: __("Arrow", "slider-future"),
    value: "divider-arrow",
  },
  {
    label: __("Split", "slider-future"),
    value: "divider-split",
  },
  {
    label: __("Book", "slider-future"),
    value: "divider-book",
  }
];


export const optionsNavigationPosition = [
  {
    label: __("Top Left", "slider-future"),
    value: "top-left",
  },
  {
    label: __("Top Center", "slider-future"),
    value: "top-center",
  },
  {
    label: __("Top Right", "slider-future"),
    value: "top-right",
  },
  {
    label: __("Top Space Between", "slider-future"),
    value: "top-space-between",
  },
  {
    label: __("Center", "slider-future"),
    value: "center-center",
  },
  {
    label: __("Bottom Left", "slider-future"),
    value: "bottom-left",
  },
  {
    label: __("Bottom Center", "slider-future"),
    value: "bottom-center",
  },
  {
    label: __("Bottom Right", "slider-future"),
    value: "bottom-right",
  },
  {
    label: __("Bottom Space Between", "slider-future"),
    value: "bottom-space-between",
  },
];