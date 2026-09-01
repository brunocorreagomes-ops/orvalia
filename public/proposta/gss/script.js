/*
 * Só ativamos a animação de entrada (.reveal fica opaco:0 até aparecer)
 * depois que confirmamos que este script rodou até aqui. Se o script.js
 * falhar em carregar (erro 404 por diferença de maiúscula/minúscula no
 * GitHub Pages, adblocker, falha de rede etc.), a classe "js" nunca é
 * adicionada e o CSS mantém todo o conteúdo visível por padrão.
 */
document.documentElement.classList.add('js');

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

// Rede de segurança: se por algum motivo um elemento nunca cruzar o
// threshold do observer (ex: viewport atípico, elemento fora de fluxo),
// garante que nada fique invisível para sempre.
window.setTimeout(() => {
  reveals.forEach((el) => el.classList.add('visible'));
}, 2500);

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


/* Perspectiva Orvalia — custom audio players */
const orvaliaPlayers = [...document.querySelectorAll('[data-orvalia-player]')];
const formatAudioTime = (seconds) => {
  if (!Number.isFinite(seconds) || seconds < 0) return '00:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
};
const stopOtherPlayers = (current) => {
  orvaliaPlayers.forEach((player) => {
    if (player === current) return;
    const otherAudio = player.querySelector('audio');
    if (otherAudio && !otherAudio.paused) otherAudio.pause();
  });
};
orvaliaPlayers.forEach((player) => {
  const audio = player.querySelector('audio');
  const play = player.querySelector('.audio-play');
  const seek = player.querySelector('.audio-seek');
  const elapsed = player.querySelector('.audio-elapsed');
  const total = player.querySelector('.audio-total');
  const transcriptToggle = player.querySelector('.audio-transcript-toggle');
  const transcript = player.querySelector('.audio-transcript');
  if (!audio || !play || !seek) return;
  const updateDuration = () => {
    if (Number.isFinite(audio.duration)) total.textContent = formatAudioTime(audio.duration);
  };
  const updatePlayer = () => {
    const ratio = audio.duration ? audio.currentTime / audio.duration : 0;
    seek.value = String(Math.round(ratio * 1000));
    seek.style.setProperty('--audio-progress', `${ratio * 100}%`);
    elapsed.textContent = formatAudioTime(audio.currentTime);
  };
  play.addEventListener('click', async () => {
    if (audio.paused) {
      stopOtherPlayers(player);
      try { await audio.play(); } catch (_) {}
    } else audio.pause();
  });
  audio.addEventListener('play', () => {
    player.classList.add('is-playing');
    play.setAttribute('aria-label','Pausar áudio');
  });
  audio.addEventListener('pause', () => {
    player.classList.remove('is-playing');
    play.setAttribute('aria-label','Reproduzir áudio');
  });
  audio.addEventListener('ended', () => {
    player.classList.remove('is-playing');
    audio.currentTime = 0;
    updatePlayer();
  });
  audio.addEventListener('loadedmetadata', updateDuration);
  audio.addEventListener('durationchange', updateDuration);
  audio.addEventListener('timeupdate', updatePlayer);
  seek.addEventListener('input', () => {
    if (!audio.duration) return;
    audio.currentTime = (Number(seek.value) / 1000) * audio.duration;
    updatePlayer();
  });
  transcriptToggle?.addEventListener('click', () => {
    const open = transcriptToggle.getAttribute('aria-expanded') === 'true';
    transcriptToggle.setAttribute('aria-expanded', String(!open));
    transcriptToggle.textContent = open ? 'Ver transcrição' : 'Ocultar transcrição';
    if (transcript) transcript.hidden = open;
  });
  updatePlayer();
});


/* V14 mobile hardening */
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    document.querySelectorAll('[data-orvalia-player] audio').forEach((audio) => {
      if (!audio.paused) audio.pause();
    });
  }
});
