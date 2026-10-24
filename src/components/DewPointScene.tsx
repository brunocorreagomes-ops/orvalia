import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import '../hero.css';
import { orvaliaSymbol } from './brand-symbol';

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
  return <figure ref={ref} className="dew-scene" data-paused={motionStopped || !visible} data-allow-motion={allowMotion} aria-label="Símbolo da Orvalia com volume e movimento suave: arco aberto e ponto em ciano.">
    <svg className="dew-art" viewBox="0 0 720 720" fill="none" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="orvalia-symbol-face" x1="24" y1="10" x2="86" y2="102" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7e9182"/><stop offset=".18" stopColor="#344d3e"/><stop offset=".52" stopColor="#14291f"/><stop offset=".78" stopColor="#3c5647"/><stop offset="1" stopColor="#10231b"/>
        </linearGradient>
        <radialGradient id="orvalia-symbol-point" cx=".33" cy=".25" r=".8">
          <stop stopColor="#a6f2e9"/><stop offset=".4" stopColor="#17c8bf"/><stop offset="1" stopColor="#006d67"/>
        </radialGradient>
        <radialGradient id="orvalia-symbol-shadow"><stop stopColor="#203f2d" stopOpacity=".15"/><stop offset="1" stopColor="#203f2d" stopOpacity="0"/></radialGradient>
      </defs>
      <ellipse cx="360" cy="650" rx="200" ry="26" fill="url(#orvalia-symbol-shadow)"/>
      <g className="dew-symbol">
        <g transform="translate(48 48) scale(5.5)">
          <path d={orvaliaSymbol.arc} transform="translate(1.4 2.8)" stroke="#516857" strokeWidth={orvaliaSymbol.strokeWidth + .25}/>
          <path d={orvaliaSymbol.arc} transform="translate(.7 1.4)" stroke="#263e30" strokeWidth={orvaliaSymbol.strokeWidth + .15}/>
          <path d={orvaliaSymbol.arc} stroke="url(#orvalia-symbol-face)" strokeWidth={orvaliaSymbol.strokeWidth}/>
          <circle cx={orvaliaSymbol.point.x + 1.4} cy={orvaliaSymbol.point.y + 2.8} r={orvaliaSymbol.point.radius} fill="#41695a"/>
          <circle cx={orvaliaSymbol.point.x} cy={orvaliaSymbol.point.y} r={orvaliaSymbol.point.radius} fill="url(#orvalia-symbol-point)"/>
        </g>
      </g>
    </svg>
    <figcaption className="dew-caption"><button type="button" onClick={toggleMotion} aria-label={motionStopped ? 'Ativar animação da abertura' : 'Pausar animação da abertura'} aria-pressed={!motionStopped}>{motionStopped ? <Play size={16} aria-hidden="true"/> : <Pause size={16} aria-hidden="true"/>}<span>{motionStopped ? 'Ativar animação' : 'Pausar animação'}</span></button></figcaption>
  </figure>;
}
