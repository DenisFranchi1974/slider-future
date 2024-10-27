import anime from 'animejs';

// Funzione per ottenere gli attributi comuni delle animazioni
const getAnimationProps = (props, target) => {
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
    scaleFrom: scaleFrom,
    scaleTo: scaleTo,
    stagger,
    textSplitEffect="translateSplit",
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
    textColor: textColor,
    textColorHover: textColorHover,
    backgroundColorImage: backgroundColorImage,
    backgroundColorImageHover: backgroundColorImageHover,
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
    durationHover = 1000,
    easingHover = 'easeInQuad',
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
    delay: delayIn,
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
    textColor,
    textColorHover,
    backgroundColorImage,
    backgroundColorImageHover,
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


// In animationIn.js
export const animateBar = (barRef, props={}) => {
 
  const {
    duration = 500, // Imposta un valore di default se non è fornito
    heightFrom =  '10px', // Altri valori dinamici se necessario
    heightTo =  '25px',
    easing = 'easeInQuint',
    loop = true,
  } = props;

  if (barRef && barRef.current) { // Controlla che barRef e barRef.current siano definiti
     // Converti il valore di loop in un numero
  const loopCount = (typeof loop === 'string' && loop.toLowerCase() === 'true') ? Infinity : Number(loop);
    anime({
      targets: barRef.current,
      height: [heightFrom, heightTo], // Usa valori dinamici per l'altezza
      easing: easing,
      opacity: 1,
      duration: duration,
      direction: 'alternate',
      loop: loopCount,
    });
  } else {
    console.error('barRef is not defined');
  }
};




// Effect Block
const blockTransition = (element, direction, animationProps = {}) => {
  
  const block = document.createElement("div");
  block.className = "block-transition";
  const colorBlock = animationProps.colorBlockEffectIn || '#000';
  
  // Impostazioni iniziali del blocco
  block.style.position = "absolute";
  block.style.top = 0;
  block.style.left = 0;
  block.style.width = "100%";
  block.style.height = "100%";
  block.style.backgroundColor = colorBlock; // Colore del blocco
  element.style.position = "relative"; // Assicura che l'elemento sia relativo
  element.appendChild(block);

  const container = element.closest(".content-title-slide");
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
  const opacityInFrom = props.opacityInFrom || 0;
  const opacityInTo = props.opacityInTo || 1;
  const filterInFrom = props.filterInFrom + 'px';
  const filterInTo = props.filterInTo + 'px';
  anime({
    targets: target,
    filter: ['blur('+filterInFrom+')', 'blur('+filterInTo+')'],
    ...animationProps,
    opacity: [opacityInFrom, opacityInTo],
  });
};

 

export const translateXYIn = (target, props = {}) => {

  const animationProps = getAnimationProps(props, target);
  const startXFrom = props.startXFrom || 0;
  const startXTo = props.startXTo || 0;
  const startYFrom = props.startYFrom || 0;
  const startYTo = props.startYTo || 0;
  const opacityInFrom = props.opacityInFrom || 0;
  const opacityInTo = props.opacityInTo || 1;
  const filterInFrom = props.filterInFrom + 'px';
  const filterInTo = props.filterInTo + 'px';
  anime({
    targets: target,
    translateX: [startXFrom, startXTo],
    translateY: [startYFrom, startYTo],
    filter: ['blur('+filterInFrom+')', 'blur('+filterInTo+')'],
    ...animationProps,
    opacity: [opacityInFrom, opacityInTo],
  });
};

export const scaleIn = (target, props = {}) => {
  const animationProps = getAnimationProps(props, target);
  const opacityInFrom = props.opacityInFrom || 0;
  const opacityInTo = props.opacityInTo || 1;
  const scaleFrom = props.scaleFrom || 0;
  const scaleTo = props.scaleTo || 1;
  const filterInFrom = props.filterInFrom + 'px';
  const filterInTo = props.filterInTo + 'px';
  anime({
    targets: target,
    filter: ['blur('+filterInFrom+')', 'blur('+filterInTo+')'],
    opacity: [opacityInFrom, opacityInTo],
    scale: [scaleFrom, scaleTo],
    ...animationProps,
   
  });
};

export const scaleInX= (target, props = {}) => {
  const animationProps = getAnimationProps(props, target);
  const opacityInFrom = props.opacityInFrom || 0;
  const opacityInTo = props.opacityInTo || 1;
  const scaleFrom = props.scaleFrom || 0;
  const scaleTo = props.scaleTo || 1;
  const filterInFrom = props.filterInFrom + 'px';
  const filterInTo = props.filterInTo + 'px';
  anime({
    targets: target,
    filter: ['blur('+filterInFrom+')', 'blur('+filterInTo+')'],
    opacity: [opacityInFrom, opacityInTo],
    scaleX: [scaleFrom, scaleTo],
    ...animationProps,
   
  });
};

export const scaleInY= (target, props = {}) => {
  const animationProps = getAnimationProps(props, target);
  const opacityInFrom = props.opacityInFrom || 0;
  const opacityInTo = props.opacityInTo || 1;
  const scaleFrom = props.scaleFrom || 0;
  const scaleTo = props.scaleTo || 1;
  const filterInFrom = props.filterInFrom + 'px';
  const filterInTo = props.filterInTo + 'px';
  anime({
    targets: target,
    filter: ['blur('+filterInFrom+')', 'blur('+filterInTo+')'],
    opacity: [opacityInFrom, opacityInTo],
    scaleY: [scaleFrom, scaleTo],
    ...animationProps,
   
  });
};

export const rotateIn= (target, props = {}) => {
  const animationProps = getAnimationProps(props, target);
  const opacityInFrom = props.opacityInFrom || 0;
  const opacityInTo = props.opacityInTo || 1;
  const rotateInFrom = props.rotateInFrom;
  const rotateInTo = props.rotateInTo;
  const rotateInXFrom = props.rotateInXFrom;
  const rotateInXTo = props.rotateInXTo;
  const rotateInYFrom = props.rotateInYFrom;
  const rotateInYTo = props.rotateInYTo ;
  const filterInFrom = props.filterInFrom + 'px';
  const filterInTo = props.filterInTo + 'px';
  anime({
    targets: target,
    filter: ['blur('+filterInFrom+')', 'blur('+filterInTo+')'],
    opacity: [opacityInFrom, opacityInTo],
    rotate: [rotateInFrom, rotateInTo],
    rotateX: [rotateInXFrom, rotateInXTo],
    rotateY: [rotateInYFrom, rotateInYTo],
    ...animationProps,
  });
};


export const skewInX= (target, props = {}) => {
  const animationProps = getAnimationProps(props, target);
  const opacityInFrom = props.opacityInFrom || 0;
  const opacityInTo = props.opacityInTo || 1;
  const skewXFrom = props.skewXFrom;
  const skewXTo = props.skewXTo;
  const skewYFrom = props.skewYFrom;
  const skewYTo = props.skewYTo;
  const filterInFrom = props.filterInFrom + 'px';
  const filterInTo = props.filterInTo + 'px';
  anime({
    targets: target,
    filter: ['blur('+filterInFrom+')', 'blur('+filterInTo+')'],
    opacity: [opacityInFrom, opacityInTo],
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
  const startXFrom = props.startXFrom || 0;
  const startXTo = props.startXTo || 0;
  const startYFrom = props.startYFrom || 0;
  const startYTo = props.startYTo || 0;
  const opacityInFrom = props.opacityInFrom || 0;
  const opacityInTo = props.opacityInTo || 1;
  const filterInFrom = props.filterInFrom + 'px';
  const filterInTo = props.filterInTo + 'px';
  const scaleFrom = props.scaleFrom || 0;
  const scaleTo = props.scaleTo || 1;
  const rotateInFrom = props.rotateInFrom;
  const rotateInTo = props.rotateInTo;
  const rotateInXFrom = props.rotateInXFrom;
  const rotateInXTo = props.rotateInXTo;
  const rotateInYFrom = props.rotateInYFrom;
  const rotateInYTo = props.rotateInYTo ;
  const skewXFrom = props.skewXFrom;
  const skewXTo = props.skewXTo;
  const skewYFrom = props.skewYFrom;
  const skewYTo = props.skewYTo;
  const scaleType = props.scaleType || 'scale'; // Default to 'scale'
  const animationTargets = {
    targets: target,
    translateX: [startXFrom, startXTo],
    translateY: [startYFrom, startYTo],
    filter: ['blur(' + filterInFrom + ')', 'blur(' + filterInTo + ')'],
    ...animationProps,
    opacity: [opacityInFrom, opacityInTo],
    rotate: [rotateInFrom, rotateInTo],
    rotateX: [rotateInXFrom, rotateInXTo],
    rotateY: [rotateInYFrom, rotateInYTo],
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
const getAnimationEffect = (effectName, container,  props = {}) => {

  const animationProps = getAnimationProps(props); // Usa getAnimationProps per ottenere le proprietà comuni

  switch (effectName) {
    case 'fadeSplit':
      return {
        opacity: [animationProps.opacityInFrom, animationProps.opacityInTo],
        filter: ['blur('+animationProps.filterInFrom+'px)', 'blur('+animationProps.filterInTo+'px)'],
      };
    case 'translateSplit':
      return {
        opacity: [animationProps.opacityInFrom, animationProps.opacityInTo],
        filter: ['blur('+animationProps.filterInFrom+'px)', 'blur('+animationProps.filterInTo+'px)'],
        translateX: [animationProps.startXFrom, animationProps.startXTo],
        translateY: [animationProps.startYFrom, animationProps.startYTo],
      };
    case 'scaleSplit':
      return {
        opacity: [animationProps.opacityInFrom, animationProps.opacityInTo],
        filter: ['blur('+animationProps.filterInFrom+'px)', 'blur('+animationProps.filterInTo+'px)'],
        scale: [animationProps.scaleFrom, animationProps.scaleTo],
      };
    case 'scaleXSplit':
        return {
          opacity: [animationProps.opacityInFrom, animationProps.opacityInTo],
          filter: ['blur('+animationProps.filterInFrom+'px)', 'blur('+animationProps.filterInTo+'px)'],
          scaleX: [animationProps.scaleFrom, animationProps.scaleTo],
        };
      case 'scaleYSplit':
          return {
            opacity: [animationProps.opacityInFrom, animationProps.opacityInTo],
            filter: ['blur('+animationProps.filterInFrom+'px)', 'blur('+animationProps.filterInTo+'px)'],
            scaleY: [animationProps.scaleFrom, animationProps.scaleTo],
          };
        case 'rotateSplit':
            return {
              opacity: [animationProps.opacityInFrom, animationProps.opacityInTo],
              filter: ['blur('+animationProps.filterInFrom+'px)', 'blur('+animationProps.filterInTo+'px)'],
              rotate: [animationProps.rotateInFrom, animationProps.rotateInTo],
              rotateX: [animationProps.rotateInXFrom, animationProps.rotateInXTo],
              rotateY: [animationProps.rotateInYFrom, animationProps.rotateInYTo],
            };
            case 'skewSplit':
              return {
                opacity: [animationProps.opacityInFrom, animationProps.opacityInTo],
                filter: ['blur('+animationProps.filterInFrom+'px)', 'blur('+animationProps.filterInTo+'px)'],
                skewX: [animationProps.skewXFrom, animationProps.skewXTo],
                skewY: [animationProps.skewYFrom, animationProps.skewYTo],
              };
    case 'explosion':
        return {
          translateX: () => anime.random(-1000, 1000), // Movimento casuale sull'asse X
          translateY: () => anime.random(-1000, 1000), // Movimento casuale sull'asse Y
          rotate: () => anime.random(-360, 360), // Rotazione casuale
          scale: [animationProps.scaleTo,animationProps.scaleFrom],
          filter: ['blur('+animationProps.filterInTo+'px)', 'blur('+animationProps.filterInFrom+'px)'],
          opacity: [animationProps.opacityInTo,animationProps.opacityInFrom],
        };
        case 'gather':
          return {
            translateX: [() => anime.random(-1000, 1000), 0], // Movimento casuale sull'asse X verso il centro
            translateY: [() => anime.random(-1000, 1000), 0], // Movimento casuale sull'asse Y verso il centro
            rotate: [() => anime.random(-360, 360), 0], // Rotazione casuale verso 0
            scale: [animationProps.scaleFrom,animationProps.scaleTo],
            filter: ['blur('+animationProps.filterInFrom+'px)', 'blur('+animationProps.filterInTo+'px)'],
            opacity: [animationProps.opacityInFrom,animationProps.opacityInTo],
          };
          case 'customSplit':
            return {
              opacity: [animationProps.opacityInFrom, animationProps.opacityInTo],
              filter: ['blur('+animationProps.filterInFrom+'px)', 'blur('+animationProps.filterInTo+'px)'],
              rotate: [animationProps.rotateInFrom, animationProps.rotateInTo],
              rotateX: [animationProps.rotateInXFrom, animationProps.rotateInXTo],
              rotateY: [animationProps.rotateInYFrom, animationProps.rotateInYTo],
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
 
    translateZ: 0,
    ...animationEffect, // Applica l'effetto dinamico
    easing: animationProps.easing || 'linear', // Applica l'easing
    duration: animationProps.duration, // Durata dell'animazione
    delay: anime.stagger(animationProps.stagger || 200), // Stagger tra le lettere
  });
};

// Definisci gli effetti hover
const hoverEffects = {
  scaleHover: (element, animationProps) => {
    anime({
      opacity: animationProps.opacityHover,
      filter: 'blur('+animationProps.filterHover+'px)',
      targets: element,
      scale: animationProps.scaleHover,
      easing: animationProps.easingHover,
      color: animationProps.textColorHover,
      duration: animationProps.durationHover,
    });
  },
  scaleXHover: (element, animationProps) => {
    anime({
      opacity: animationProps.opacityHover,
      filter: 'blur('+animationProps.filterHover+'px)',
      targets: element,
      scaleX: animationProps.scaleHover,
      easing: animationProps.easingHover,
      color: animationProps.textColorHover,
      backgroundColor: animationProps.backgroundColorImageHover,
      duration: animationProps.durationHover,
    });
  },
  scaleYHover: (element, animationProps) => {
    anime({
      opacity: animationProps.opacityHover,
      filter: 'blur('+animationProps.filterHover+'px)',
      targets: element,
      scaleY: animationProps.scaleHover,
      easing: animationProps.easingHover,
      color: animationProps.textColorHover,
      backgroundColor: animationProps.backgroundColorImageHover,
      duration: animationProps.durationHover,
    });
  },
  rotateHover: (element, animationProps) => {
    anime({
      opacity: animationProps.opacityHover,
      filter: 'blur('+animationProps.filterHover+'px)',
      targets: element,
      rotate: animationProps.rotateHover ,
      rotateX: animationProps.rotateXHover ,
      rotateY: animationProps.rotateYHover ,
      easing: animationProps.easingHover,
      color: animationProps.textColorHover,
      backgroundColor: animationProps.backgroundColorImageHover,
      duration: animationProps.durationHover,
    });
  },
  translateHover: (element, animationProps) => {
    anime({
      opacity: animationProps.opacityHover,
      filter: 'blur('+animationProps.filterHover+'px)',
      targets: element,
      translateX: animationProps.startXHover,
      translateY: animationProps.startYHover,
      easing: animationProps.easingHover,
      color: animationProps.textColorHover,
      backgroundColor: animationProps.backgroundColorImageHover,
      duration: animationProps.durationHover,
    });
  },
  opacityHover: (element, animationProps) => {
    anime({
      opacity: animationProps.opacityHover,
      filter: 'blur('+animationProps.filterHover+'px)',
      targets: element,
      easing: animationProps.easingHover,
      color: animationProps.textColorHover,
      backgroundColor: animationProps.backgroundColorImageHover,
      duration: animationProps.durationHover,
    });
  },
  skewHover: (element, animationProps) => {
    anime({
      opacity: animationProps.opacityHover,
      filter: 'blur('+animationProps.filterHover+'px)',
      targets: element,
      skewX:animationProps.skewXHover ,
      skewY:animationProps.skewYHover,
      easing: animationProps.easingHover,
      color: animationProps.textColorHover,
      backgroundColor: animationProps.backgroundColorImageHover,
      duration: animationProps.durationHover,
    });
  },
  customHover: (element, animationProps) => {
    const scaleTypeHover = animationProps.scaleTypeHover || 'scale'; // Default to 'scale'
  const animationTargetsHover = {
    opacity: animationProps.opacityHover,
    filter: 'blur('+animationProps.filterHover+'px)',
    targets: element,
    rotate: animationProps.rotateHover ,
    rotateX: animationProps.rotateXHover,
    rotateY: animationProps.rotateYHover,
    translateX: animationProps.startXHover,
    translateY: animationProps.startYHover,
    skewX: animationProps.skewXHover,
    skewY: animationProps.skewYHover0,
    easing: animationProps.easingHover,
    duration: animationProps.durationHover,
    backgroundColor: animationProps.backgroundColorImageHover,
    color: animationProps.textColorHover,
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
    color: animationProps.textColor,
    backgroundColor: animationProps.backgroundColorImage,
    duration: animationProps.durationHover,
  });
};