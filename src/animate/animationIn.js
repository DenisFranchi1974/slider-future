import anime from 'animejs';

// Funzione per ottenere gli attributi comuni delle animazioni
const getAnimationProps = (props) => {
  const {
    duration = 3000,
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
    textSplitEffect="getAnimationEffectSplit",
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
  };
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
  const animationProps = getAnimationProps(props);
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
  const animationProps = getAnimationProps(props);
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
  const animationProps = getAnimationProps(props);
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
  const animationProps = getAnimationProps(props);
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
  const animationProps = getAnimationProps(props);
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
  const animationProps = getAnimationProps(props);
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
  const animationProps = getAnimationProps(props);
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
  const animationProps = getAnimationProps(props);
  const directionBlock = props.directionBlock || 'left';
  anime({
    targets: target,
    ...animationProps,
  });
  // Aggiungi il blockTransition dopo l'animazione
  blockTransition(target, directionBlock, animationProps);
};

// Definisci gli effetti di animazione
const getAnimationEffect = (effectName, container) => {

  switch (effectName) {
    case 'getAnimationEffectSplit':
      return {
        translateY: [100, 0], // Esempio effetto Uno
      };
      case 'explosion':
        return {
          translateX: () => anime.random(-1000, 1000), // Movimento casuale sull'asse X
          translateY: () => anime.random(-1000, 1000), // Movimento casuale sull'asse Y
          rotate: () => anime.random(-360, 360), // Rotazione casuale
          scale: [1, 0], // Scala da 1 a 0
          opacity: [1, 0], // Cambia l'opacità da 1 a 0
        };
        case 'gather':
          return {
            translateX: [() => anime.random(-1000, 1000), 0], // Movimento casuale sull'asse X verso il centro
            translateY: [() => anime.random(-1000, 1000), 0], // Movimento casuale sull'asse Y verso il centro
            rotate: [() => anime.random(-360, 360), 0], // Rotazione casuale verso 0
            scale: [0, 1], // Scala da 0 a 1
            opacity: [0, 1], // Cambia l'opacità da 0 a 1
          };
          case 'explosionAndGather':
            return {
              translateX: [
                { value: () => anime.random(-1000, 1000), duration: 1000 }, // Esplosione
                { value: 0, duration: 1000, delay: 500 } // Raccolta con pausa
              ],
              translateY: [
                { value: () => anime.random(-1000, 1000), duration: 1000 }, // Esplosione
                { value: 0, duration: 1000, delay: 500 } // Raccolta con pausa
              ],
              rotate: [
                { value: () => anime.random(-360, 360), duration: 1000 }, // Esplosione
                { value: 0, duration: 1000, delay: 500 } // Raccolta con pausa
              ],
              scale: [
                { value: 1, duration: 1000 }, // Esplosione
                { value: 1, duration: 0 }, // Mantieni la scala durante la transizione
                { value: 1, duration: 1000, delay: 500 }, // Raccolta
              ],
              opacity: [
                { value: 1, duration: 1000 }, // Esplosione
                { value: 1, duration: 0 }, // Mantieni l'opacità durante la transizione
                { value: 1, duration: 1000, delay: 500 }, // Raccolta
              ],
            };
    case 'getAnimationEffectSplitTwo':
      return {
        translateX: [100, 0], // Esempio effetto Due
      };
      case 'typewriter':
  return {
    opacity: [0, 1],
    duration: 1000, // Durata breve per ogni lettera
    easing: 'linear',
    delay: anime.stagger(100), // Ritardo tra le lettere
    update: function(anim) {
      const lettersRef = anim.animatables;

      // Trova o crea un unico cursore
      let cursor = container.querySelector('.cursor');
      if (!cursor) {
        cursor = document.createElement('span');
        cursor.className = 'cursor';
        cursor.textContent = '|';
        cursor.style.position = 'absolute';
        cursor.style.color = '#000'; // Imposta il colore del cursore a nero
        container.appendChild(cursor);

        // Anima il cursore con anime.js per il lampeggiamento
        anime({
          targets: cursor,
          opacity: [0, 1], // Cambia opacità da 0 a 1
          easing: 'linear', // Funzione di easing più dolce
          duration: 1000, // Durata di ogni ciclo di lampeggio
          loop: true, // Ripeti all'infinito
          direction: 'alternate' // Alterna tra 0 e 1 per creare l'effetto di lampeggio
        });
      }

      // Ottieni la lettera corrente
      const currentLetterIndex = Math.floor(anim.progress / 100 * lettersRef.length);
      const currentLetter = lettersRef[currentLetterIndex]?.target;

      if (currentLetter) {
        cursor.style.left = currentLetter.offsetLeft + currentLetter.offsetWidth + 10 + 'px';
        cursor.style.top = currentLetter.offsetTop + 'px';
      }
    },
    complete: function() {
      // Rimuovi il cursore alla fine dell'animazione
      const cursor = container.querySelector('.cursor');
      if (cursor) {
        cursor.remove();
      }
    }
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
  const animationEffect = getAnimationEffect(animationProps.textSplitEffect,container);

  // Creare una timeline per l'animazione
  anime.timeline({
    loop: loopCount,
    direction: animationProps.direction,
  })
  .add({
    targets: lettersRef.current, // Anima tutte le lettere via ref
    //scale: [4, 1], // Scala le lettere da 4 a 1
    opacity: [0, 1], // Cambia l'opacità da 0 a 1
    //rotateX: [360, 0], // Ruota le lettere da
 
    translateZ: 0,
    ...animationEffect, // Applica l'effetto dinamico
    easing: animationProps.easing, // Applica l'easing
    duration: animationProps.duration, // Durata dell'animazione
    delay: anime.stagger(animationProps.stagger || 200), // Stagger tra le lettere
  });
};
