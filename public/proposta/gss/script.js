const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach((el) => revealObserver.observe(el));

const progressBar = document.querySelector('.progress span');
const updateProgress = () => {
  const doc = document.documentElement;
  const max = doc.scrollHeight - doc.clientHeight;
  const p = max > 0 ? (doc.scrollTop / max) * 100 : 0;
  progressBar.style.width = `${p}%`;
};
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

const topbar = document.querySelector('.topbar');
const toggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const backdrop = document.querySelector('.mobile-nav-backdrop');

const setMenu = (open) => {
  if (!topbar || !toggle || !mobileNav) return;
  topbar.dataset.menuOpen = String(open);
  toggle.setAttribute('aria-expanded', String(open));
  mobileNav.setAttribute('aria-hidden', String(!open));
  document.body.style.overflow = open ? 'hidden' : '';
};

toggle?.addEventListener('click', () => setMenu(topbar.dataset.menuOpen !== 'true'));
backdrop?.addEventListener('click', () => setMenu(false));
document.querySelectorAll('.mobile-nav a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenu(false);
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 820) setMenu(false);
}, { passive: true });

/*
 * Fixed-header anchor control.
 * Instead of relying on scroll-margin / scroll-padding (which produced
 * inconsistent empty bands between browsers), calculate the exact header
 * height at click time and position each section immediately below it.
 */
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const href = link.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;

    event.preventDefault();
    setMenu(false);
    const headerHeight = topbar?.getBoundingClientRect().height || 0;
    const y = target.getBoundingClientRect().top + window.scrollY - headerHeight + 1;
    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    history.replaceState(null, '', href);
  });
});

const navLinks = [...document.querySelectorAll('.nav a[data-section]')];
const observedSections = [...document.querySelectorAll('[data-observe]')];
const sectionObserver = new IntersectionObserver((entries) => {
  const visible = entries
    .filter((entry) => entry.isIntersecting)
    .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  const key = visible.target.dataset.observe;
  navLinks.forEach((link) => link.classList.toggle('active', link.dataset.section === key));
}, { rootMargin: '-18% 0px -62% 0px', threshold: [0.01, 0.15, 0.35] });
observedSections.forEach((section) => sectionObserver.observe(section));
