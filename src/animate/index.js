import { 
  fadeIn, 
  translateXYIn, 
  scaleIn,
  scaleInX,
  scaleInY,
  rotateIn,
  skewInX,
  BlockFromIn,
  customEffectIn,
  splitText,
} from './animationIn';

// Funzione per ottenere gli attributi comuni delle animazioni
export const getAnimationProps = (props) => {
    const {
      duration = 1000,
      delayIn = 0,
      endDelay = 0,
      easing = 'easeInQuad',
      loop= 1,
      direction= 'normal',
      startXFrom: startXFrom, 
      startXTo: startXTo, 
      startYFrom: startYFrom, 
      startYTo: startYTo, 
      startYBottom: startYBottom,
      scaleFrom: scaleFrom,
      scaleTo: scaleTo,
      stagger,
      textSplitEffect = "translateSplit",
      opacityInFrom : opacityInFrom,
      opacityInTo : opacityInTo,
      rotateInFrom: rotateInFrom,
      rotateInTo: rotateInTo,
      rotateInXFrom: rotateInXFrom,
      rotateInXTo: rotateInXTo,
      rotateInYFrom: rotateInYFrom,
      rotateInYTo: rotateInYTo,
      skewXFrom: skewXFrom,
      skewXTo: skewXTo,
      skewYFrom: skewYFrom,
      skewYTo: skewYTo,
      directionBlock: directionBlock,
      colorBlockEffectIn: colorBlockEffectIn,
      filterInFrom: filterInFrom,
      filterInTo: filterInTo,
      scaleType: scaleType,
      
    } = props;

    // Converti il valore di loop in un numero
    const loopCount = (typeof loop === 'string' && loop.toLowerCase() === 'true') ? Infinity : Number(loop);
  
    return {
      duration,
      delay: delayIn,
      endDelay,
      easing,
      loop:loopCount,
      direction,
      startXFrom,
      startXTo,
      startYFrom,
      startYTo,
      startYBottom,
      stagger,
      textSplitEffect,
      opacityInFrom,
      opacityInTo,
      scaleFrom,
      scaleTo,
      rotateInFrom,
      rotateInTo,
      rotateInXFrom,
      rotateInXTo,
      rotateInYFrom,
      rotateInYTo,
      skewXFrom,
      skewXTo,
      skewYFrom,
      skewYTo,
      directionBlock,
      colorBlockEffectIn,
      filterInFrom,
      filterInTo,
      scaleType,
    };
  };

const animationsIn = {
  fadeIn,
  translateXYIn,
  scaleIn,
  scaleInX,
  scaleInY,
  rotateIn,
  skewInX,
  BlockFromIn,
  customEffectIn,
  splitText,
};

export { animationsIn };
