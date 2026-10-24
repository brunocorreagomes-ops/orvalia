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
  return <figure ref={ref} className="dew-scene" data-paused={paused || !visible || reducedMotion} aria-label="Escultura animada da Orvalia: uma lente de vidro em movimento revela um ponto de luz.">
    <div className="dew-scene-heading"><span>Um novo ponto de vista</span><span>Orvalia / 01</span></div>
    <svg className="dew-art" viewBox="0 0 600 720" fill="none" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`${id}-background`} x1="40" y1="0" x2="570" y2="720" gradientUnits="userSpaceOnUse"><stop stopColor="#233d3b"/><stop offset=".48" stopColor="#102624"/><stop offset="1" stopColor="#081715"/></linearGradient>
        <radialGradient id={`${id}-halo`}><stop stopColor="#85e3cd" stopOpacity=".36"/><stop offset=".52" stopColor="#57bea9" stopOpacity=".1"/><stop offset="1" stopColor="#57bea9" stopOpacity="0"/></radialGradient>
        <linearGradient id={`${id}-glass`} x1="128" y1="160" x2="466" y2="504" gradientUnits="userSpaceOnUse"><stop stopColor="#d5efe3" stopOpacity=".9"/><stop offset=".17" stopColor="#91bcb0" stopOpacity=".2"/><stop offset=".47" stopColor="#183f38" stopOpacity=".55"/><stop offset=".67" stopColor="#b7f2df" stopOpacity=".8"/><stop offset=".82" stopColor="#4b8c78" stopOpacity=".32"/><stop offset="1" stopColor="#e1f5e8" stopOpacity=".9"/></linearGradient>
        <linearGradient id={`${id}-edge`} x1="145" y1="135" x2="460" y2="520" gradientUnits="userSpaceOnUse"><stop stopColor="#f1fff7" stopOpacity=".94"/><stop offset=".35" stopColor="#d9f9e5" stopOpacity=".07"/><stop offset=".7" stopColor="#8ed5bd" stopOpacity=".7"/><stop offset="1" stopColor="#e4f6df" stopOpacity=".2"/></linearGradient>
        <linearGradient id={`${id}-stone`} x1="190" y1="520" x2="440" y2="653" gradientUnits="userSpaceOnUse"><stop stopColor="#d7d5bd"/><stop offset="1" stopColor="#747e6a"/></linearGradient>
        <linearGradient id={`${id}-beam`}><stop stopColor="#b0f5da" stopOpacity="0"/><stop offset=".5" stopColor="#d3ffec" stopOpacity=".55"/><stop offset="1" stopColor="#b0f5da" stopOpacity="0"/></linearGradient>
        <radialGradient id={`${id}-point`}><stop stopColor="#fffef2"/><stop offset=".22" stopColor="#c8ffe2"/><stop offset=".48" stopColor="#70e4c7" stopOpacity=".4"/><stop offset="1" stopColor="#70e4c7" stopOpacity="0"/></radialGradient>
        <filter id={`${id}-shadow`} x="-50%" y="-100%" width="200%" height="300%"><feGaussianBlur stdDeviation="15"/></filter>
      </defs>
      <path fill={`url(#${id}-background)`} d="M0 0h600v720H0z"/>
      <circle cx="307" cy="303" r="285" fill={`url(#${id}-halo)`}/>
      <path d="M0 558 600 496M0 612 600 550M92 720 400 485M418 720 529 472" stroke="#a5bca4" strokeOpacity=".08"/>
      <ellipse className="dew-shadow" cx="304" cy="578" rx="173" ry="27" fill="#000" opacity=".4" filter={`url(#${id}-shadow)`}/>
      <path d="m179 551 169-26 101 39-169 31z" fill="#c8cbb7"/>
      <path d="m179 551 101 44v44l-101-44z" fill="#6c7967"/>
      <path d="m280 595 169-31v44l-169 31z" fill={`url(#${id}-stone)`}/>
      <path d="m179 551 101 44 169-31" stroke="#eef2d9" strokeOpacity=".5"/>
      <g className="dew-sculpture">
        <g transform="rotate(-24 300 327)">
          <ellipse cx="310" cy="338" rx="174" ry="210" stroke="#65c5ab" strokeOpacity=".18" strokeWidth="12"/>
          <path d="M300 114a174 210 0 1 1 0 420 174 210 0 1 1 0-420Zm0 49a123 161 0 1 0 0 322 123 161 0 1 0 0-322Z" fill={`url(#${id}-glass)`} fillRule="evenodd"/>
          <ellipse cx="300" cy="324" rx="174" ry="210" stroke={`url(#${id}-edge)`} strokeWidth="1.6"/>
          <ellipse cx="300" cy="324" rx="123" ry="161" stroke={`url(#${id}-edge)`} strokeWidth="1.3"/>
          <ellipse cx="306" cy="331" rx="142" ry="182" stroke="#ccf7e2" strokeOpacity=".17" strokeWidth="1"/>
          <path className="dew-glint" d="M170 186C206 126 259 101 313 113M427 457C401 502 352 534 300 534" stroke="#edfff1" strokeWidth="3" strokeLinecap="round"/>
        </g>
        <g className="dew-inner-orbit"><ellipse cx="300" cy="324" rx="158" ry="64" transform="rotate(-34 300 324)" stroke="#98d7bf" strokeOpacity=".6" strokeWidth="1"/><ellipse cx="300" cy="324" rx="158" ry="64" transform="rotate(-34 300 324)" stroke="#e3ffe9" strokeWidth="2.5" strokeDasharray="48 900"/></g>
        <g className="dew-light"><path d="M88 324h424" stroke={`url(#${id}-beam)`} strokeWidth="1"/><circle cx="300" cy="324" r="42" fill={`url(#${id}-point)`}/><circle cx="300" cy="324" r="5" fill="#e1fff1"/><circle cx="300" cy="324" r="11" stroke="#b8ffe1" strokeOpacity=".35"/></g>
      </g>
      <g stroke="#bbd7c7" strokeOpacity=".36" strokeWidth="1"><path d="M41 112v-12h12M547 100h12v12M41 608v12h12M547 620h12v-12"/></g>
    </svg>
    <figcaption className="dew-caption"><span>O valor já existe.<br/><strong>A gente ajuda a revelar.</strong></span><button type="button" onClick={() => setPaused(value => !value)} disabled={reducedMotion} aria-label={paused ? 'Retomar animação da abertura' : 'Pausar animação da abertura'} aria-pressed={paused}>{paused ? <Play size={16} aria-hidden="true"/> : <Pause size={16} aria-hidden="true"/>}<span>{reducedMotion ? 'Movimento reduzido' : paused ? 'Retomar' : 'Pausar'}</span></button></figcaption>
  </figure>;
}
