import Lenis from 'lenis';

// smooth scroll - extracted to avoid circular dependency with main.ts
const lenis = new Lenis({
  duration: 0.8,
});

function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

export { raf, lenis };
