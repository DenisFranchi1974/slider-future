import anime from 'animejs';

// Funzione per ottenere gli attributi comuni delle animazioni
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

    // Converti il valore di loop in un numero
    const loopCount = (typeof loop === 'string' && loop.toLowerCase() === 'true') ? Infinity : Number(loop);

    // Aggiungi la classe per disabilitare gli eventi del mouse
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
      // Rimuovi la classe per riabilitare gli eventi del mouse
      if (target) {
        target.classList.remove('no-pointer-events');
      }
      if (props.complete) {
        props.complete(anim);
      }
    }
  };
};

// Effect Block
const blockTransition = (element, direction, animationProps = {}) => {
  
  const block = document.createElement("div");
  block.className = "block-transition";
  const colorBlock = animationProps.colorBlockEffect || '#000';
  
  // Impostazioni iniziali del blocco
  block.style.position = "absolute";
  block.style.top = 0;
  block.style.left = 0;
  block.style.width = "100%";
  block.style.height = "100%";
  block.style.backgroundColor = colorBlock; // Colore del blocco
  element.style.position = "relative"; // Assicura che l'elemento sia relativo
  element.appendChild(block);

  const container = element.closest(".title-slide,.title-slide-div");
  if (container) {
    container.style.opacity = "1"; // Rendi il contenuto visibile
  }

  let fromVars, toVars, exitVars;

  switch (direction) {
    case "left":
      fromVars = { width: '0%', left: '0%' }; // Inizia da sinistra
      toVars = { width: '100%', left: '0%' }; // Copre il testo
      exitVars = { width: '0%', left: '100%' }; // Esce verso destra
      break;
    case "right":
      fromVars = { width: '0%', left: '100%' }; // Inizia da destra
      toVars = { width: '100%', left: '0%' }; // Copre il testo
      exitVars = { width: '0%', left: '0%' }; // Esce verso sinistra
      break;
    case "top":
      fromVars = { height: '0%', top: '0%' }; // Inizia dall'alto
      toVars = { height: '100%', top: '0%' }; // Copre il testo
      exitVars = { height: '0%', top: '100%' }; // Esce verso il basso
      break;
    case "bottom":
      fromVars = { height: '0%', top: '100%' }; // Inizia dal basso
      toVars = { height: '100%', top: '0%' }; // Copre il testo
      exitVars = { height: '0%', top: '0%' }; // Esce verso l'alto
      break;
    default:
      fromVars = { width: '0%', left: '0%' };
      toVars = { width: '100%', left: '0%' };
      exitVars = { width: '0%', left: '100%' };
  }

  const halfDuration = animationProps.duration ? animationProps.duration / 2 : 500;

    // Imposta i valori iniziali
    Object.assign(block.style, fromVars);

  // Primo step: il blocco cresce gradualmente e copre l'elemento
  anime({
    targets: block,
    ...toVars,
    duration: halfDuration,
    easing: animationProps.easing || 'easeInOutQuad',
    complete: () => {
      // Secondo step: il blocco decresce rivelando il testo
      anime({
        targets: block,
        ...exitVars,
        duration: halfDuration,
        easing: animationProps.easing || 'easeInOutQuad',
        delay: animationProps.delay || 0,
        complete: () => {
          element.removeChild(block); // Rimuovi il blocco al termine
          if (container) {
            container.style.opacity = ''; // Ripristina l'opacità
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
  // Aggiungi il blockTransition dopo l'animazione
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
  const scaleType = props.scaleType ?? 'scale'; // Default to 'scale'
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

  // Aggiungi la logica per scegliere tra scale, scaleX e scaleY
  if (scaleType === 'scale') {
    animationTargets.scale = [scaleFrom, scaleTo];
  } else if (scaleType === 'scaleX') {
    animationTargets.scaleX = [scaleFrom, scaleTo];
  } else if (scaleType === 'scaleY') {
    animationTargets.scaleY = [scaleFrom, scaleTo];
  }

  anime(animationTargets);
};


// Definisci gli effetti di animazione
const getAnimationEffect = (effectName,container,  props = {}) => {

  container.style.opacity = 1; // Imposta l'opacità a 0 per l'animazione di ingresso
 
  const animationProps = getAnimationProps(props); // Usa getAnimationProps per ottenere le proprietà comuni

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
        translateY: [100, 0], // Imposta un effetto di default
      };
  }
};

// Nuovo effetto di animazione per il testo splittato
export const splitText = (container, props = {}) => {

  // Funzione per splittare il testo
const splitTextContent = (text, lettersRef) => {
  // Verifica se il testo è vuoto o nullo
  if (!text || text.trim() === '') {
    console.warn("Nessun testo da splittare");
    return [];
  }

  // Verifica se il contenuto è già stato splittato (evita duplicazione)
  if (lettersRef.current.length > 0) {
    console.warn("Il testo è già stato splittato");
    return lettersRef.current;
  }

  // Rimuovi le span esistenti prima di splittare il nuovo testo
  lettersRef.current.forEach(span => {
    if (span.parentNode) {
      span.parentNode.removeChild(span);
    }
  });
  lettersRef.current = []; // Pulisci l'array di riferimenti

  // Splitta il testo e crea gli span per ogni carattere
  return text.split('').map((char, idx) => {
    const span = document.createElement('span'); // Crea un elemento span per ogni lettera
    span.className = 'letter'; // Assegna una classe per stile
    span.textContent = char === ' ' ? '\u00A0' : char; // Usa uno spazio non interrotto per gli spazi
    lettersRef.current[idx] = span; // Assegna il ref per l'animazione successiva
    return span;

  });
 
};

  const animationProps = getAnimationProps(props);

  const lettersRef = { current: [] }; // Crea un ref per contenere le lettere splittate


  // Converti il valore di loop in un numero
  const loopCount = (typeof animationProps.loop === 'string' && animationProps.loop.toLowerCase() === 'true') ? Infinity : Number(animationProps.loop);

  // Ottieni il testo dal contenitore e splittalo, assicurati che non sia già splittato
  const text = container.textContent.trim(); // Prendi il testo dal contenitore e rimuovi eventuali spazi esterni
  if (!text) {
    console.warn("Contenitore senza testo. Nessuna animazione eseguita.");
    return;
  }

  container.innerHTML = ''; // Pulisci il contenitore

  // Splitta il testo e aggiungi gli span (le lettere splittate) al contenitore
  const letters = splitTextContent(text, lettersRef);
  if (!letters.length) {
    console.warn("Nessuna lettera disponibile per l'animazione.");
    return;
  }
  
  letters.forEach(letter => container.appendChild(letter)); // Aggiungi ogni lettera (span) nel container

  // Ottieni l'effetto in base alla stringa dal selettore
  const animationEffect = getAnimationEffect(animationProps.textSplitEffect,container,props);
  // Creare una timeline per l'animazione
  anime.timeline({
    loop: loopCount,
    direction: animationProps.direction,
  })
  .add({
    targets: lettersRef.current, // Anima tutte le lettere via ref
    //scale: [4, 1], // Scala le lettere da 4 a 1
   // opacity: [0, 1],
    //rotateX: [360, 0], // Ruota le lettere da
    translateZ:0,
    ...animationEffect, // Applica l'effetto dinamico
    easing: animationProps.easing || 'linear', // Applica l'easing
    duration: animationProps.duration, // Durata dell'animazione
    delay: anime.stagger(animationProps.stagger ?? 200), // Stagger tra le lettere
    
  });

 
};

// Definisci gli effetti hover
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
    const scaleTypeHover = animationProps.scaleTypeHover || 'scale'; // Default to 'scale'
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

  // Aggiungi la logica per scegliere tra scale, scaleX e scaleY
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

// Funzione per gestire l'hover all'entrata
export const handleMouseEnter = (e, props = {}) => {
  const animationProps = getAnimationProps(props);
  

  anime.remove(e.target); // Rimuove eventuali animazioni in corso

  if (hoverEffects[animationProps.effectHover]) {
    hoverEffects[animationProps.effectHover](e.target, animationProps);
  }
};

// Funzione per gestire l'hover all'uscita
export const handleMouseLeave = (e, props = {}) => {
  const animationProps = getAnimationProps(props);
  anime.remove(e.target); // Rimuove eventuali animazioni in corso
  // Ripristina lo stato originale dell'elemento
  anime({
    targets: e.target,
    scale: 1, // Torna alla scala originale
    scaleX: 1, // Torna alla scala originale
    scaleY: 1, // Torna alla scala originale
    rotate: 0, // Torna alla rotazione originale
    rotateX: 0, // Torna alla rotazione originale
    rotateY: 0, // Torna alla rotazione originale
    translateX: 0, // Torna alla posizione originale
    translateY: 0, // Torna alla posizione originale
    opacity: 1, // Torna all'opacità originale
    filter: 'blur(0px)', // Rimuove l'effetto blur
    skewX: 0, // Torna allo skew originale
    skewY: 0, // Torna allo skew originale
    easing: animationProps.easingHover || 'linear',
    duration: animationProps.durationHover,
  });
};