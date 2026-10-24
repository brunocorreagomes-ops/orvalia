import { useEffect, useId, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import '../hero.css';

/** A seamless, native illustration: no video download or autoplay permission. */
export default function DewPointScene() {
  const id = useId().replace(/:/g, '');
  const ref = useRef<HTMLElement>(null);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
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
  return <figure ref={ref} className="dew-scene" data-paused={paused || !visible || reducedMotion} aria-label="Animação da Orvalia: um ponto de luz percorre um círculo fino.">
    <svg className="dew-art" viewBox="0 0 600 720" fill="none" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id={`${id}-point`}><stop stopColor="#dffff5" stopOpacity=".42"/><stop offset="1" stopColor="#66e7e1" stopOpacity="0"/></radialGradient>
      </defs>
      <path d="M418 254a140 140 0 1 0 0 152" stroke="#b3c5ba" strokeOpacity=".5" strokeWidth="1.2" strokeLinecap="round"/>
      <g className="dew-orbit">
        <circle cx="440" cy="330" r="27" fill={`url(#${id}-point)`}/>
        <circle cx="440" cy="330" r="6" fill="#8be6d1"/>
      </g>
    </svg>
    <figcaption className="dew-caption"><span>O valor já existe.<br/><strong>A gente ajuda a revelar.</strong></span><button type="button" onClick={() => setPaused(value => !value)} disabled={reducedMotion} aria-label={paused ? 'Retomar animação da abertura' : 'Pausar animação da abertura'} aria-pressed={paused}>{paused ? <Play size={16} aria-hidden="true"/> : <Pause size={16} aria-hidden="true"/>}<span>{reducedMotion ? 'Movimento reduzido' : paused ? 'Retomar' : 'Pausar'}</span></button></figcaption>
  </figure>;
}
