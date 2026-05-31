/* TEYA — main.js */

// ── NAV SCROLL ────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('stuck', window.scrollY > 50);
}, { passive: true });

// ── MOBILE MENU ───────────────────────────────
const burger = document.getElementById('burger');
const menu   = document.getElementById('menu');
burger.addEventListener('click', () => menu.classList.toggle('open'));
menu.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => menu.classList.remove('open'))
);

// ── SCROLL REVEAL ─────────────────────────────
// Mark elements to animate
const revealTargets = [
  '.mission__grid',
  '.phase-card',
  '.criterion',
  '.partners__notice',
  '.partner-type',
  '.impact__stat',
  '.apply__grid',
];
document.querySelectorAll(revealTargets.join(',')).forEach(el => {
  el.setAttribute('data-reveal', '');
});

const revealObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    // stagger siblings
    const parent = entry.target.parentElement;
    const siblings = [...parent.querySelectorAll('[data-reveal]')];
    const i = siblings.indexOf(entry.target);
    setTimeout(() => entry.target.classList.add('in'), i * 70);
    revealObs.unobserve(entry.target);
  });
}, { threshold: 0.12 });

document.querySelectorAll('[data-reveal]').forEach(el => revealObs.observe(el));

// ── COUNT-UP ANIMATION ────────────────────────
const countEls = document.querySelectorAll('.impact__num');

function countUp(el, target, duration = 1600) {
  let startTime = null;
  const step = ts => {
    if (!startTime) startTime = ts;
    const p = Math.min((ts - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(eased * target);
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = target;
  };
  requestAnimationFrame(step);
}

const countObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    countUp(el, parseInt(el.dataset.target, 10));
    countObs.unobserve(el);
  });
}, { threshold: 0.5 });

countEls.forEach(el => countObs.observe(el));

// ── APPLY FORM ────────────────────────────────
const form      = document.getElementById('applyForm');
const submitBtn = document.getElementById('submitBtn');
const successEl = document.getElementById('formSuccess');

form.addEventListener('submit', e => {
  e.preventDefault();
  submitBtn.textContent = 'Sending…';
  submitBtn.disabled = true;

  // Swap in real fetch() call to Formspree or similar here
  setTimeout(() => {
    successEl.classList.add('show');
    form.reset();
    submitBtn.textContent = 'Submit Application';
    submitBtn.disabled = false;
    successEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 1200);
});
