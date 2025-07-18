import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

const sections = document.querySelectorAll('section');
sections.forEach((section) => {
  ScrollReveal().reveal(section, {
    ...defaultProps,
    origin: 'bottom',
    distance: '20px',
    duration: 500,
  });
});
