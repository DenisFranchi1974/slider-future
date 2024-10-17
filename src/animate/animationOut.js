import anime from 'animejs';

export const fadeOut = (target) => {
  anime({
    targets: target,
    opacity: [1, 0],
    translateY: [0, 50],
    easing: 'easeInOutQuad',
    duration: 1000,
    delay: 100,
  });
};

export const slideOut = (target) => {
  anime({
    targets: target,
    opacity: [1, 0],
    translateX: [0, 100],
    easing: 'easeInOutQuad',
    duration: 1000,
    delay: 100,
  });
};