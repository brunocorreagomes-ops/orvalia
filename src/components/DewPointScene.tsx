import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import '../hero.css';

/** A seamless, native illustration: no video download or autoplay permission. */
export default function DewPointScene() {
  const ref = useRef<HTMLElement>(null);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [allowMotion, setAllowMotion] = useState(false);
  const motionStopped = paused || (reducedMotion && !allowMotion);
  const toggleMotion = () => {
    if (reducedMotion && !allowMotion) { setAllowMotion(true); setPaused(false); }
    else setPaused(value => !value);
  };
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener('change', update);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0 });
    if (ref.current) observer.observe(ref.current);
    const onVisibility = () => setVisible(!document.hidden && Boolean(ref.current && ref.current.getBoundingClientRect().bottom > 0 && ref.current.getBoundingClientRect().top < innerHeight));
    document.addEventListener('visibilitychange', onVisibility);
    return () => { query.removeEventListener('change', update); observer.disconnect(); document.removeEventListener('visibilitychange', onVisibility); };
  }, []);
  return <figure ref={ref} className="dew-scene" data-paused={motionStopped || !visible} data-allow-motion={allowMotion} aria-label="Animação da Orvalia: um ponto de luz percorre um círculo fino.">
    <svg className="dew-art" viewBox="0 0 720 720" fill="none" aria-hidden="true" focusable="false">
      <path d="M596 208a280 280 0 1 0 0 304" stroke="#477b6c" strokeOpacity=".7" strokeWidth="2.4" strokeLinecap="round"/>
      <g className="dew-orbit"><path d="M626 273a280 280 0 0 1 14 87" stroke="#008a86" strokeWidth="3.5" strokeLinecap="round"/><circle cx="640" cy="360" r="20" fill="#008a86" opacity=".1"/><circle cx="640" cy="360" r="8" fill="#007d77"/></g>
    </svg>
    <figcaption className="dew-caption"><button type="button" onClick={toggleMotion} aria-label={motionStopped ? 'Ativar animação da abertura' : 'Pausar animação da abertura'} aria-pressed={!motionStopped}>{motionStopped ? <Play size={16} aria-hidden="true"/> : <Pause size={16} aria-hidden="true"/>}<span>{motionStopped ? 'Ativar animação' : 'Pausar animação'}</span></button></figcaption>
  </figure>;
}
