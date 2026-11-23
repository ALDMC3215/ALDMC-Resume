const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let engine;

async function play(elements, offset = 20) {
  if (reduced() || !elements.length) return;
  try {
    engine ??= import('./vendor/anime.es.js');
    const { default: anime } = await engine;
    const active = [...elements].filter(el => el.isConnected);
    if (active.length) anime({
      targets: active, opacity: [0.32, 1], translateY: [offset, 0], duration: 620,
      delay: anime.stagger(42, { start: 25 }), easing: 'easeOutCubic',
    });
  } catch {
    // The page and CSS interactions stay usable if the animation module fails.
  }
}

export function reveal(root) {
  if (reduced() || !window.IntersectionObserver) return () => {};
  play(root.querySelectorAll('[data-intro]'), 15);
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      observer.unobserve(entry.target);
      play(entry.target.querySelectorAll('[data-reveal]'));
    }
  }, { threshold: 0.16 });
  for (const section of root.querySelectorAll('[data-scene]')) observer.observe(section);
  return () => observer.disconnect();
}

