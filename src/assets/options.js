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
  {value: "splitText", label: __("Split Text", "cocoblocks") },

];
  
  // Opzioni per il controllo degli effetti Out
  export const selectOptionsEffectOut = [
    { value: "none", label: __("None", "cocoblocks") },
    { value: "fadeOut", label: __("Fade Out", "cocoblocks") },
    { value: "slideOutLeft", label: __("Slide Out Left", "cocoblocks") },
    { value: "slideOutRight", label: __("Slide Out Right", "cocoblocks") },
    { value: "slideOutUp", label: __("Slide Out Up", "cocoblocks") },
    { value: "slideOutDown", label: __("Slide Out Down", "cocoblocks") },
    { value: "scaleOut", label: __("Scale Out", "cocoblocks") },
    { value: "bounceOut", label: __("Bounce Out", "cocoblocks") },
    { value: "flipOutX", label: __("Flip Out X", "cocoblocks") },
    { value: "flipOutY", label: __("Flip Out Y", "cocoblocks") },
    { value: "zoomOut", label: __("Zoom Out", "cocoblocks") },
    { value: "rollOut", label: __("Roll Out", "cocoblocks") },
    { value: "rotateOut", label: __("Rotate Out", "cocoblocks") },
    { value: "lightSpeedOut", label: __("Light Speed Out", "cocoblocks") },
    { value: "hingeOut", label: __("Hinge Out", "cocoblocks") },
    { value: "backOut", label: __("Back Out", "cocoblocks") },
    { value: "explodeOut", label: __("Explode Out", "cocoblocks") },
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

// Opzioni Split text

export const selectOptionsEffectSplit = [
  { value: 'getAnimationEffectSplit', label: 'uno' },
  { value: 'getAnimationEffectSplitTwo', label: 'two' },
  { value: "explosion", label: __("Explosion", "cocoblocks") },
  { value: "gather", label: __("Gather", "cocoblocks") },
  { value: "explosionAndGather", label: __("Explosion and Gather", "cocoblocks") },

  {value: 'typewriter', label: 'typewriter'},

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

  /* OpzioniWrite Mo de*/

  export const writeModeOptions = [
    { label: "Horizontal", value: "initial" },
    { label: "Vertical lr", value: "vertical-lr" },
    { label: "Vertical rl", value: "vertical-rl" },
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


