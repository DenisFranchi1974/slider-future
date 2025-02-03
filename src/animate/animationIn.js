import anime from 'animejs';

const getAnimationProps = (props, target) => {
  const {
    duration = 800,
    delay = 0,
    endDelay = 0,
    easing = 'linear',
    loop = '1',
    direction = 'normal',
    startXFrom: startXFrom, 
    startXTo: startXTo, 
    startYFrom: startYFrom, 
    startYTo: startYTo,
    scaleFrom: scaleFrom,
    scaleTo: scaleTo,
    stagger,
    textSplitEffect="translateSplit",
    opacityFrom : opacityFrom,
    opacityTo : opacityTo,
    rotateFrom: rotateFrom,
    rotateTo: rotateTo,
    rotateXFrom: rotateXFrom,
    rotateXTo: rotateXTo,
    rotateYFrom: rotateYFrom,
    rotateYTo: rotateYTo,
    skewXFrom: skewXFrom,
    skewXTo: skewXTo,
    skewYFrom: skewYFrom,
    skewYTo: skewYTo,
    directionBlock: directionBlock,
    colorBlockEffect: colorBlockEffect,
    filterFrom: filterFrom,
    filterTo: filterTo,
    scaleType: scaleType,
    effectHover: effectHover,
    opacityHover: opacityHover,
    filterHover: filterHover,
    rotateHover: rotateHover,
    rotateXHover: rotateXHover,
    rotateYHover: rotateYHover,
    skewXHover: skewXHover,
    skewYHover: skewYHover,
    scaleHover: scaleHover,
    startXHover: startXHover,
    startYHover: startYHover,
    scaleTypeHover: scaleTypeHover,
    durationHover = 800,
    easingHover = 'linear',
    heightFrom: heightFrom,
    heightTo: heightTo,
  
  } = props;

    const loopCount = (typeof loop === 'string' && loop.toLowerCase() === 'true') ? Infinity : Number(loop);

    if (target) {
      target.classList.add('no-pointer-events');
    }

  return {
    duration,
    delay: delay,
    endDelay, 
    easing,
    loop:loopCount,
    direction,
    startXFrom,
    startXTo,
    startYFrom,
    startYTo,
    stagger,
    textSplitEffect,
    opacityFrom,
    opacityTo,
    scaleFrom,
    scaleTo,
    rotateFrom,
    rotateTo,
    rotateXFrom,
    rotateXTo,
    rotateYFrom,
    rotateYTo,
    skewXFrom,
    skewXTo,
    skewYFrom,
    skewYTo,
    directionBlock,
    colorBlockEffect,
    filterFrom,
    filterTo,
    scaleType,
    effectHover,
    opacityHover,
    filterHover,
    rotateHover,
    rotateXHover,
    rotateYHover,
    skewXHover,
    skewYHover,
    scaleHover,
    startXHover,
    startYHover,
    scaleTypeHover,
    durationHover,
    easingHover,
    heightFrom,
    heightTo,
    complete: function(anim) {
      if (target) {
        target.classList.remove('no-pointer-events');
      }
      if (props.complete) {
        props.complete(anim);
      }
    }
  };
};

const blockTransition = (element, direction, animationProps = {}) => {
  
  const block = document.createElement("div");
  block.className = "block-transition";
  const colorBlock = animationProps.colorBlockEffect || '#000';

  block.style.position = "absolute";
  block.style.top = 0;
  block.style.left = 0;
  block.style.width = "100%";
  block.style.height = "100%";
  block.style.backgroundColor = colorBlock; 
  element.style.position = "relative"; 
  element.appendChild(block);

  const container = element.closest(".title-slide,.title-slide-div");
  if (container) {
    container.style.opacity = "1"; 
  }

  let fromVars, toVars, exitVars;

  switch (direction) {
    case "left":
      fromVars = { width: '0%', left: '0%' }; 
      toVars = { width: '100%', left: '0%' }; 
      exitVars = { width: '0%', left: '100%' }; 
      break;
    case "right":
      fromVars = { width: '0%', left: '100%' }; 
      toVars = { width: '100%', left: '0%' }; 
      exitVars = { width: '0%', left: '0%' }; 
      break;
    case "top":
      fromVars = { height: '0%', top: '0%' }; 
      toVars = { height: '100%', top: '0%' }; 
      exitVars = { height: '0%', top: '100%' }; 
      break;
    case "bottom":
      fromVars = { height: '0%', top: '100%' }; 
      toVars = { height: '100%', top: '0%' }; 
      exitVars = { height: '0%', top: '0%' }; 
      break;
    default:
      fromVars = { width: '0%', left: '0%' };
      toVars = { width: '100%', left: '0%' };
      exitVars = { width: '0%', left: '100%' };
  }

  const halfDuration = animationProps.duration ? animationProps.duration / 2 : 500;

    Object.assign(block.style, fromVars);

  anime({
    targets: block,
    ...toVars,
    duration: halfDuration,
    easing: animationProps.easing || 'easeInOutQuad',
    complete: () => {
      anime({
        targets: block,
        ...exitVars,
        duration: halfDuration,
        easing: animationProps.easing || 'easeInOutQuad',
        delay: animationProps.delay || 0,
        complete: () => {
          element.removeChild(block); 
          if (container) {
            container.style.opacity = ''; 
          }
        }
      });
    },
  
  });
};

export const fadeIn = (target, props = {}) => {
  const animationProps = getAnimationProps(props, target);
  const opacityFrom = props.opacityFrom ?? 0;
  const opacityTo = props.opacityTo ?? 1;
  const filterFrom = props.filterFrom + 'px';
  const filterTo = props.filterTo + 'px';
  anime({
    targets: target,
    filter: ['blur('+filterFrom+')', 'blur('+filterTo+')'],
    ...animationProps,
    opacity: [opacityFrom, opacityTo],
  });
};

export const translateXYIn = (target, props = {}) => {

  const animationProps = getAnimationProps(props, target);
  const startXFrom = props.startXFrom ?? 100;
  const startXTo = props.startXTo ?? 0;
  const startYFrom = props.startYFrom ?? 0;
  const startYTo = props.startYTo ?? 0;
  const opacityFrom = props.opacityFrom ?? 0;
  const opacityTo = props.opacityTo ?? 1;
  const filterFrom = props.filterFrom + 'px';
  const filterTo = props.filterTo + 'px';
  anime({
    targets: target,
    translateX: [startXFrom, startXTo],
    translateY: [startYFrom, startYTo],
    filter: ['blur('+filterFrom+')', 'blur('+filterTo+')'],
    ...animationProps,
    opacity: [opacityFrom, opacityTo],
  });
};

export const scaleIn = (target, props = {}) => {
  const animationProps = getAnimationProps(props, target);
  const opacityFrom = props.opacityFrom ?? 0;
  const opacityTo = props.opacityTo ?? 1;
  const scaleFrom = props.scaleFrom ?? 0;
  const scaleTo = props.scaleTo ?? 1 ;
  const filterFrom = props.filterFrom + 'px';
  const filterTo = props.filterTo + 'px';
  anime({
    targets: target,
    filter: ['blur('+filterFrom+')', 'blur('+filterTo+')'],
    opacity: [opacityFrom, opacityTo],
    scale: [scaleFrom, scaleTo],
    ...animationProps,
   
  });
};

export const scaleInX= (target, props = {}) => {
  const animationProps = getAnimationProps(props, target);
  const opacityFrom = props.opacityFrom ?? 0; ;
  const opacityTo = props.opacityTo ?? 1;
  const scaleFrom = props.scaleFrom ?? 0;
  const scaleTo = props.scaleTo ?? 1;
  const filterFrom = props.filterFrom + 'px';
  const filterTo = props.filterTo + 'px';
  anime({
    targets: target,
    filter: ['blur('+filterFrom+')', 'blur('+filterTo+')'],
    opacity: [opacityFrom, opacityTo],
    scaleX: [scaleFrom, scaleTo],
    ...animationProps,
   
  });
};

export const scaleInY= (target, props = {}) => {
  const animationProps = getAnimationProps(props, target);
  const opacityFrom = props.opacityFrom ?? 0;
  const opacityTo = props.opacityTo?? 1;
  const scaleFrom = props.scaleFrom ?? 0;
  const scaleTo = props.scaleTo ?? 1;
  const filterFrom = props.filterFrom + 'px';
  const filterTo = props.filterTo + 'px';
  anime({
    targets: target,
    filter: ['blur('+filterFrom+')', 'blur('+filterTo+')'],
    opacity: [opacityFrom, opacityTo],
    scaleY: [scaleFrom, scaleTo],
    ...animationProps,
   
  });
};

export const rotateIn= (target, props = {}) => {
  const animationProps = getAnimationProps(props, target);
  const opacityFrom = props.opacityFrom ?? 0;
  const opacityTo = props.opacityTo ?? 1;
  const rotateFrom = props.rotateFrom ?? 0;
  const rotateTo = props.rotateTo ?? 0;
  const rotateXFrom = props.rotateXFrom ?? 0;
  const rotateXTo = props.rotateXTo ?? 0;
  const rotateYFrom = props.rotateYFrom ?? 0;
  const rotateYTo = props.rotateYTo ?? 0;
  const filterFrom = props.filterFrom + 'px';
  const filterTo = props.filterTo + 'px';
  anime({
    targets: target,
    filter: ['blur('+filterFrom+')', 'blur('+filterTo+')'],
    opacity: [opacityFrom, opacityTo],
    rotate: [rotateFrom, rotateTo],
    rotateX: [rotateXFrom, rotateXTo],
    rotateY: [rotateYFrom, rotateYTo],
    ...animationProps,
  });
};

export const skewInX= (target, props = {}) => {
  const animationProps = getAnimationProps(props, target);
  const opacityFrom = props.opacityFrom ?? 0;
  const opacityTo = props.opacityTo ?? 1;
  const skewXFrom = props.skewXFrom ?? 0;
  const skewXTo = props.skewXTo ?? 0;
  const skewYFrom = props.skewYFrom ?? 0;
  const skewYTo = props.skewYTo ?? 0;
  const filterFrom = props.filterFrom + 'px';
  const filterTo = props.filterTo + 'px';
  anime({
    targets: target,
    filter: ['blur('+filterFrom+')', 'blur('+filterTo+')'],
    opacity: [opacityFrom, opacityTo],
    skewX: [skewXFrom, skewXTo],
    skewY: [skewYFrom, skewYTo],
    ...animationProps,
  });
};

export const BlockFromIn = (target, props = {}) => {
  const animationProps = getAnimationProps(props, target);
  const directionBlock = props.directionBlock || 'left';
  anime({
    targets: target,
    ...animationProps,
  });
  blockTransition(target, directionBlock, animationProps);
};

export const customEffectIn = (target, props = {}) => {
  const animationProps = getAnimationProps(props, target);
  const startXFrom = props.startXFrom ?? 0;
  const startXTo = props.startXTo ?? 100;
  const startYFrom = props.startYFrom ?? 0;
  const startYTo = props.startYTo ?? 0;
  const opacityFrom = props.opacityFrom ?? 0;
  const opacityTo = props.opacityTo ?? 1;
  const filterFrom = props.filterFrom + 'px';
  const filterTo = props.filterTo + 'px';
  const scaleFrom = props.scaleFrom ?? 0;
  const scaleTo = props.scaleTo ?? 1;
  const rotateFrom = props.rotateFrom ?? 0;
  const rotateTo = props.rotateTo ?? 0;
  const rotateXFrom = props.rotateXFrom ?? 0;
  const rotateXTo = props.rotateXTo ?? 0;
  const rotateYFrom = props.rotateYFrom ?? 0;
  const rotateYTo = props.rotateYTo ?? 0;
  const skewXFrom = props.skewXFrom ?? 0;
  const skewXTo = props.skewXTo ?? 0;
  const skewYFrom = props.skewYFrom ?? 0;
  const skewYTo = props.skewYTo ?? 0;
  const scaleType = props.scaleType ?? 'scale';
  const animationTargets = {
    targets: target,
    translateX: [startXFrom, startXTo],
    translateY: [startYFrom, startYTo],
    filter: ['blur(' + filterFrom + ')', 'blur(' + filterTo + ')'],
    ...animationProps,
    opacity: [opacityFrom, opacityTo],
    rotate: [rotateFrom, rotateTo],
    rotateX: [rotateXFrom, rotateXTo],
    rotateY: [rotateYFrom, rotateYTo],
    skewX: [skewXFrom, skewXTo],
    skewY: [skewYFrom, skewYTo],
  };

  if (scaleType === 'scale') {
    animationTargets.scale = [scaleFrom, scaleTo];
  } else if (scaleType === 'scaleX') {
    animationTargets.scaleX = [scaleFrom, scaleTo];
  } else if (scaleType === 'scaleY') {
    animationTargets.scaleY = [scaleFrom, scaleTo];
  }

  anime(animationTargets);
};


const getAnimationEffect = (effectName,container,  props = {}) => {

  container.style.opacity = 1; 
 
  const animationProps = getAnimationProps(props); 

  switch (effectName) {
    case 'fadeSplit':
      return {
        opacity: [animationProps.opacityFrom, animationProps.opacityTo],
        filter: ['blur('+animationProps.filterFrom+'px)', 'blur('+animationProps.filterTo+'px)'],
      };
    case 'translateSplit':
      return {
        opacity: [animationProps.opacityFrom, animationProps.opacityTo],
        filter: ['blur('+animationProps.filterFrom+'px)', 'blur('+animationProps.filterTo+'px)'],
        translateX: [animationProps.startXFrom, animationProps.startXTo],
        translateY: [animationProps.startYFrom, animationProps.startYTo],
      };
    case 'scaleSplit':
      return {
        opacity: [animationProps.opacityFrom, animationProps.opacityTo],
        filter: ['blur('+animationProps.filterFrom+'px)', 'blur('+animationProps.filterTo+'px)'],
        scale: [animationProps.scaleFrom, animationProps.scaleTo],
      };
    case 'scaleXSplit':
        return {
          opacity: [animationProps.opacityFrom, animationProps.opacityTo],
          filter: ['blur('+animationProps.filterFrom+'px)', 'blur('+animationProps.filterTo+'px)'],
          scaleX: [animationProps.scaleFrom, animationProps.scaleTo],
        };
      case 'scaleYSplit':
          return {
            opacity: [animationProps.opacityFrom, animationProps.opacityTo],
            filter: ['blur('+animationProps.filterFrom+'px)', 'blur('+animationProps.filterTo+'px)'],
            scaleY: [animationProps.scaleFrom, animationProps.scaleTo],
          };
        case 'rotateSplit':
            return {
              opacity: [animationProps.opacityFrom, animationProps.opacityTo],
              filter: ['blur('+animationProps.filterFrom+'px)', 'blur('+animationProps.filterTo+'px)'],
              rotate: [animationProps.rotateFrom, animationProps.rotateTo],
              rotateX: [animationProps.rotateXFrom, animationProps.rotateXTo],
              rotateY: [animationProps.rotateYFrom, animationProps.rotateYTo],
            };

            case 'skewSplit':
              return {
                opacity: [animationProps.opacityFrom, animationProps.opacityTo],
                filter: ['blur('+animationProps.filterFrom+'px)', 'blur('+animationProps.filterTo+'px)'],
                skewX: [animationProps.skewXFrom, animationProps.skewXTo],
                skewY: [animationProps.skewYFrom, animationProps.skewYTo],
              };
    case 'explosion':
        return {
          translateX: () => anime.random(-1000, 1000), // Movimento casuale sull'asse X
          translateY: () => anime.random(-1000, 1000), // Movimento casuale sull'asse Y
          rotate: () => anime.random(-360, 360), // Rotazione casuale
          scale: [animationProps.scaleTo,animationProps.scaleFrom],
          filter: ['blur('+animationProps.filterTo+'px)', 'blur('+animationProps.filterFrom+'px)'],
          opacity: [animationProps.opacityTo,animationProps.opacityFrom],
        };
        case 'gather':
          return {
            translateX: [() => anime.random(-1000, 1000), 0], // Movimento casuale sull'asse X verso il centro
            translateY: [() => anime.random(-1000, 1000), 0], // Movimento casuale sull'asse Y verso il centro
            rotate: [() => anime.random(-360, 360), 0], // Rotazione casuale verso 0
            scale: [animationProps.scaleFrom,animationProps.scaleTo],
            filter: ['blur('+animationProps.filterFrom+'px)', 'blur('+animationProps.filterTo+'px)'],
            opacity: [animationProps.opacityFrom,animationProps.opacityTo],
          };
          case 'customSplit':
            return {
              opacity: [animationProps.opacityFrom, animationProps.opacityTo],
              filter: ['blur('+animationProps.filterFrom+'px)', 'blur('+animationProps.filterTo+'px)'],
              rotate: [animationProps.rotateFrom, animationProps.rotateTo],
              rotateX: [animationProps.rotateXFrom, animationProps.rotateXTo],
              rotateY: [animationProps.rotateYFrom, animationProps.rotateYTo],
              scale: [animationProps.scaleFrom, animationProps.scaleTo],
              translateX: [animationProps.startXFrom, animationProps.startXTo],
              translateY: [animationProps.startYFrom, animationProps.startYTo],
              skewX: [animationProps.skewXFrom, animationProps.skewXTo],
              skewY: [animationProps.skewYFrom, animationProps.skewYTo],
            };
    default:
      return {
        translateY: [100, 0], 
      };
  }
};

export const splitText = (container, props = {}) => {

const splitTextContent = (text, lettersRef) => {
  // Verifica se il testo è vuoto o nullo
  if (!text || text.trim() === '') {
    console.warn("Nessun testo da splittare");
    return [];
  }

  if (lettersRef.current.length > 0) {
    console.warn("Il testo è già stato splittato");
    return lettersRef.current;
  }

  lettersRef.current.forEach(span => {
    if (span.parentNode) {
      span.parentNode.removeChild(span);
    }
  });
  lettersRef.current = []; 

  return text.split('').map((char, idx) => {
    const span = document.createElement('span'); 
    span.className = 'letter'; 
    span.textContent = char === ' ' ? '\u00A0' : char; 
    lettersRef.current[idx] = span; 
    return span;

  });
 
};

  const animationProps = getAnimationProps(props);

  const lettersRef = { current: [] }; 

  const loopCount = (typeof animationProps.loop === 'string' && animationProps.loop.toLowerCase() === 'true') ? Infinity : Number(animationProps.loop);

  const text = container.textContent.trim(); 
  if (!text) {
    console.warn("Contenitore senza testo. Nessuna animazione eseguita.");
    return;
  }

  container.innerHTML = ''; 

  const letters = splitTextContent(text, lettersRef);
  if (!letters.length) {
    console.warn("Nessuna lettera disponibile per l'animazione.");
    return;
  }
  
  letters.forEach(letter => container.appendChild(letter)); 

  const animationEffect = getAnimationEffect(animationProps.textSplitEffect,container,props);
  anime.timeline({
    loop: loopCount,
    direction: animationProps.direction,
  })
  .add({
    targets: lettersRef.current, 
    translateZ:0,
    ...animationEffect, 
    easing: animationProps.easing || 'linear', 
    duration: animationProps.duration, 
    delay: anime.stagger(animationProps.stagger ?? 200), 
    
  });

 
};

const hoverEffects = {
  scaleHover: (element, animationProps) => {
    anime({
      opacity: animationProps.opacityHover ?? 1,
      filter: 'blur('+animationProps.filterHover+'px)',
      targets: element,
      scale: animationProps.scaleHover ?? 1,
      easing: animationProps.easingHover ?? 'linear',
      duration: animationProps.durationHover ?? 800,
    });
  },
  scaleXHover: (element, animationProps) => {
    anime({
      opacity: animationProps.opacityHover ?? 1,
      filter: 'blur('+animationProps.filterHover+'px)',
      targets: element,
      scaleX: animationProps.scaleHover ?? 1,
      easing: animationProps.easingHover ?? 'linear',
      duration: animationProps.durationHover ?? 800,
    });
  },
  scaleYHover: (element, animationProps) => {
    anime({
      opacity: animationProps.opacityHover ?? 1,
      filter: 'blur('+animationProps.filterHover+'px)',
      targets: element,
      scaleY: animationProps.scaleHover ?? 1,
      easing: animationProps.easingHover ?? 'linear',
      duration: animationProps.durationHover ?? 800,
    });
  },
  rotateHover: (element, animationProps) => {
    anime({
      opacity: animationProps.opacityHover,
      filter: 'blur('+animationProps.filterHover+'px)',
      targets: element,
      rotate: animationProps.rotateHover ?? 0,
      rotateX: animationProps.rotateXHover ?? 0,
      rotateY: animationProps.rotateYHover  ?? 0,
      easing: animationProps.easingHover ?? 'linear',
      duration: animationProps.durationHover ?? 800,
    });
  },
  translateHover: (element, animationProps) => {
    anime({
      opacity: animationProps.opacityHover ?? 1,
      filter: 'blur('+animationProps.filterHover+'px)',
      targets: element,
      translateX: animationProps.startXHover ?? 0,
      translateY: animationProps.startYHover ?? 0,
      easing: animationProps.easingHover ?? 'linear',
      duration: animationProps.durationHover ?? 800,
    });
  },
  opacityHover: (element, animationProps) => {
    anime({
      opacity: animationProps.opacityHover ?? 1,
      filter: 'blur('+animationProps.filterHover+'px)',
      targets: element,
      easing: animationProps.easingHover ?? 'linear',
      duration: animationProps.durationHover ?? 800,
    });
  },
  skewHover: (element, animationProps) => {
    anime({
      opacity: animationProps.opacityHover ?? 1,
      filter: 'blur('+animationProps.filterHover+'px)',
      targets: element,
      skewX:animationProps.skewXHover ?? 0,
      skewY:animationProps.skewYHover ?? 0,
      easing: animationProps.easingHover ?? 'linear',
      duration: animationProps.durationHover ?? 800,
    });
  },
  customHover: (element, animationProps) => {
    const scaleTypeHover = animationProps.scaleTypeHover || 'scale'; 
  const animationTargetsHover = {
    opacity: animationProps.opacityHover ?? 1,
    filter: 'blur('+animationProps.filterHover+'px)',
    targets: element,
    rotate: animationProps.rotateHover ?? 0,
    rotateX: animationProps.rotateXHover ?? 0,
    rotateY: animationProps.rotateYHover ?? 0,
    translateX: animationProps.startXHover ?? 0,
    translateY: animationProps.startYHover ?? 0,
    skewX: animationProps.skewXHover ?? 0,
    skewY: animationProps.skewYHover ?? 0,
    easing: animationProps.easingHover || 'linear',
    duration: animationProps.durationHover || 800,
  };

  if (scaleTypeHover === 'scale') {
    animationTargetsHover.scale = animationProps.scaleHover;
  } else if (scaleTypeHover === 'scaleX') {
    animationTargetsHover.scaleX = animationProps.scaleHover;
  } else if (scaleTypeHover === 'scaleY') {
    animationTargetsHover.scaleY = animationProps.scaleHover;
  }

  anime(animationTargetsHover);
  },
};

export const handleMouseEnter = (e, props = {}) => {
  const animationProps = getAnimationProps(props);
  

  anime.remove(e.target); 

  if (hoverEffects[animationProps.effectHover]) {
    hoverEffects[animationProps.effectHover](e.target, animationProps);
  }
};

export const handleMouseLeave = (e, props = {}) => {
  const animationProps = getAnimationProps(props);
  anime.remove(e.target); 
  anime({
    targets: e.target,
    scale: 1, 
    scaleX: 1, 
    scaleY: 1, 
    rotate: 0, 
    rotateX: 0, 
    rotateY: 0, 
    translateX: 0, 
    translateY: 0, 
    opacity: 1, 
    filter: 'blur(0px)', 
    skewX: 0, 
    skewY: 0, 
    easing: animationProps.easingHover || 'linear',
    duration: animationProps.durationHover,
  });
};