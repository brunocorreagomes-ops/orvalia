import { useState, useEffect, useRef } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  BookOpen, 
  Presentation, 
  MessageSquare, 
  Users, 
  CheckCircle2, 
  Target, 
  TrendingUp, 
  Calendar, 
  Smartphone, 
  Linkedin, 
  FileText, 
  Layers, 
  Clock, 
  Sparkles, 
  Menu, 
  X, 
  UserCheck, 
  Play, 
  Pause, 
  RefreshCw,
  Award,
  ChevronDown,
  Info,
  Check,
  Send,
  Lock,
  Volume2,
  VolumeX
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { slides, SlideData } from "./data";

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<"presentation" | "document">("presentation");
  const [showPresenterNotes, setShowPresenterNotes] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [autoplaySpeed, setAutoplaySpeed] = useState<number>(8000); // ms
  const [selectedChannelId, setSelectedChannelId] = useState<string>("instagram");
  const [selectedFunnelStageIndex, setSelectedFunnelStageIndex] = useState<number>(0);
  const [selectedRhythmWeek, setSelectedRhythmWeek] = useState<number>(0);
  const [activeProfileIndex, setActiveProfileIndex] = useState<number>(0);
  const [showIndexMenu, setShowIndexMenu] = useState<boolean>(false);
  const [spokenAudioEnabled, setSpokenAudioEnabled] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const playPremiumClickSound = () => {
    if (!soundEnabled) return;
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();
      
      // Gentle, tactile low bump (representing paper/wood premium structure)
      const oscBody = ctx.createOscillator();
      const gainBody = ctx.createGain();
      oscBody.type = "sine";
      oscBody.frequency.setValueAtTime(150, ctx.currentTime);
      oscBody.frequency.exponentialRampToValueAtTime(75, ctx.currentTime + 0.08);
      
      gainBody.gain.setValueAtTime(0.08, ctx.currentTime);
      gainBody.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
      
      // Extremely subtle crystalline click (metallic/tactile premium pen/card snap)
      const oscSnap = ctx.createOscillator();
      const gainSnap = ctx.createGain();
      oscSnap.type = "sine";
      oscSnap.frequency.setValueAtTime(2400, ctx.currentTime);
      
      gainSnap.gain.setValueAtTime(0.012, ctx.currentTime);
      gainSnap.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.03);
      
      oscBody.connect(gainBody);
      gainBody.connect(ctx.destination);
      
      oscSnap.connect(gainSnap);
      gainSnap.connect(ctx.destination);
      
      oscBody.start();
      oscBody.stop(ctx.currentTime + 0.09);
      
      oscSnap.start();
      oscSnap.stop(ctx.currentTime + 0.04);
    } catch (e) {
      console.warn("Audio Context playback failed", e);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (viewMode !== "presentation") return;
      
      switch (event.key) {
        case "ArrowRight":
        case "Space":
          event.preventDefault();
          nextSlide();
          break;
        case "ArrowLeft":
          event.preventDefault();
          prevSlide();
          break;
        case "Home":
          event.preventDefault();
          goToSlide(0);
          break;
        case "End":
          event.preventDefault();
          goToSlide(slides.length - 1);
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSlideIndex, viewMode]);

  // Autoplay handler
  useEffect(() => {
    if (isPlaying && viewMode === "presentation") {
      autoplayTimerRef.current = setInterval(() => {
        nextSlide();
      }, autoplaySpeed);
    } else {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    }

    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [isPlaying, currentSlideIndex, autoplaySpeed, viewMode]);

  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) => {
      if (prevIndex === slides.length - 1) {
        // Loop back to start or pause autoplay
        if (isPlaying) {
          playPremiumClickSound();
          return 0;
        }
        return prevIndex;
      }
      playPremiumClickSound();
      return prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prevIndex) => {
      if (prevIndex === 0) return prevIndex;
      playPremiumClickSound();
      return prevIndex - 1;
    });
  };

  const goToSlide = (index: number) => {
    if (index >= 0 && index < slides.length) {
      playPremiumClickSound();
      setCurrentSlideIndex(index);
      setShowIndexMenu(false);
    }
  };

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
  };

  // Text-To-Speech for presenter notes (optional convenience feature for review)
  const speakNotes = () => {
    if (!("speechSynthesis" in window)) {
      alert("A síntese de voz não é suportada neste navegador.");
      return;
    }
    
    window.speechSynthesis.cancel();
    
    if (spokenAudioEnabled) {
      setSpokenAudioEnabled(false);
      return;
    }

    const currentNotes = slides[currentSlideIndex].speakerNotes.join(" ");
    const utterance = new SpeechSynthesisUtterance(currentNotes);
    utterance.lang = "pt-BR";
    utterance.rate = 1.0;
    
    utterance.onend = () => {
      setSpokenAudioEnabled(false);
    };

    utterance.onerror = () => {
      setSpokenAudioEnabled(false);
    };

    setSpokenAudioEnabled(true);
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    // Cancel voice on slide change
    if (spokenAudioEnabled) {
      window.speechSynthesis.cancel();
      setSpokenAudioEnabled(false);
    }
  }, [currentSlideIndex]);

  const currentSlide = slides[currentSlideIndex];

  return (
    <div className="min-h-screen bg-brand-offwhite text-brand-black flex flex-col font-sans selection:bg-brand-gold selection:text-white">
      
      {/* HEADER CO-BRANDING */}
      <header className="px-6 py-4 border-b border-brand-beige/60 bg-brand-offwhite/90 backdrop-blur-md sticky top-0 z-40 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-green text-brand-offwhite font-serif font-bold text-sm tracking-widest">
            DB
          </div>
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-brand-green">DÉBORA BOLANGNO</div>
            <div className="text-[10px] text-brand-gold/90 uppercase tracking-widest">Posicionamento Premium</div>
          </div>
        </div>

        {/* CONTROLS BAR */}
        <div className="flex items-center gap-3">
          {/* Mode Switcher */}
          <div className="flex bg-brand-beige/50 p-1 rounded-lg text-xs font-medium">
            <button
              onClick={() => { setViewMode("presentation"); setIsPlaying(false); }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                viewMode === "presentation" 
                  ? "bg-brand-green text-brand-offwhite shadow-sm" 
                  : "text-brand-graphite hover:text-brand-green"
              }`}
              title="Modo Apresentação (Slide por Slide)"
              id="btn-mode-presentation"
            >
              <Presentation className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Apresentação</span>
            </button>
            <button
              onClick={() => { setViewMode("document"); setIsPlaying(false); }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                viewMode === "document" 
                  ? "bg-brand-green text-brand-offwhite shadow-sm" 
                  : "text-brand-graphite hover:text-brand-green"
              }`}
              title="Modo Leitura Contínua (Documento Unificado)"
              id="btn-mode-document"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Relatório</span>
            </button>
          </div>

          <div className="h-6 w-px bg-brand-beige"></div>

          {/* Quick Nav Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setShowIndexMenu(!showIndexMenu)}
              className="flex items-center gap-1 text-xs px-3 py-2 bg-brand-beige/40 hover:bg-brand-beige/70 border border-brand-beige rounded-lg font-medium text-brand-graphite transition-all"
              id="btn-toc"
            >
              <span>{currentSlide.id < 10 ? `0${currentSlide.id}` : currentSlide.id}. {currentSlide.title.substring(0, 15)}...</span>
              <ChevronDown className="w-3.5 h-3.5 text-brand-gold" />
            </button>

            {showIndexMenu && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setShowIndexMenu(false)}></div>
                <div className="absolute right-0 mt-2 w-72 bg-brand-offwhite border border-brand-beige shadow-xl rounded-xl z-50 max-h-[80vh] overflow-y-auto p-2">
                  <div className="text-xs font-bold px-3 py-2 border-b border-brand-beige/60 text-brand-green tracking-widest uppercase">
                    Sumário de Estratégia
                  </div>
                  {slides.map((s, idx) => (
                    <button
                      key={s.id}
                      onClick={() => goToSlide(idx)}
                      className={`w-full text-left px-3 py-2 text-xs rounded-lg transition-all flex items-center justify-between mt-1 ${
                        currentSlideIndex === idx 
                          ? "bg-brand-green/10 text-brand-green font-semibold" 
                          : "hover:bg-brand-beige/40 text-brand-graphite"
                      }`}
                    >
                      <span className="truncate">
                        <span className="font-mono text-[10px] text-brand-gold mr-1.5">
                          {s.id < 10 ? `0${s.id}` : s.id}
                        </span>
                        {s.title}
                      </span>
                      {currentSlideIndex === idx && <div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Presenter Notes Button */}
          {viewMode === "presentation" && (
            <button
              onClick={() => setShowPresenterNotes(!showPresenterNotes)}
              className={`p-2 rounded-lg border transition-all ${
                showPresenterNotes 
                  ? "bg-brand-gold/15 text-brand-gold border-brand-gold/50" 
                  : "bg-brand-beige/20 text-brand-graphite hover:text-brand-green border-brand-beige/40"
              }`}
              title="Notas do Diretor Criativo"
              id="btn-presenter-notes"
            >
              <MessageSquare className="w-4 h-4" />
            </button>
          )}

          {/* Sound Effect Toggle */}
          <button
            onClick={() => {
              const newSoundState = !soundEnabled;
              setSoundEnabled(newSoundState);
              if (newSoundState) {
                try {
                  const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
                  if (AudioContextClass) {
                    const ctx = new AudioContextClass();
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.type = "sine";
                    osc.frequency.setValueAtTime(300, ctx.currentTime);
                    gain.gain.setValueAtTime(0.04, ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.start();
                    osc.stop(ctx.currentTime + 0.06);
                  }
                } catch(e){}
              }
            }}
            className={`p-2 rounded-lg border transition-all ${
              soundEnabled 
                ? "bg-brand-gold/15 text-brand-gold border-brand-gold/50" 
                : "bg-brand-beige/20 text-brand-graphite/50 hover:text-brand-green border-brand-beige/40"
            }`}
            title={soundEnabled ? "Efeitos Sonoros Ativos" : "Efeitos Sonoros Mudos"}
            id="btn-toggle-sound"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Print/PDF Export Button in Header */}
          <button
            onClick={() => {
              playPremiumClickSound();
              window.print();
            }}
            className="p-2 rounded-lg border bg-brand-beige/20 text-brand-graphite/70 hover:text-brand-green hover:border-brand-green/40 border-brand-beige/40 transition-all flex items-center gap-1.5"
            title="Imprimir / Salvar em PDF"
            id="btn-header-print"
          >
            <FileText className="w-4 h-4" />
            <span className="text-xs font-semibold hidden md:inline">PDF</span>
          </button>
        </div>

        {/* STRATEGIC DISCREET BRAND SIGNATURE */}
        <div className="hidden md:flex items-center gap-1.5">
          <span className="text-[10px] uppercase tracking-widest text-brand-graphite/60">Estratégia assinada por</span>
          <span className="text-xs font-serif font-semibold tracking-wider text-brand-green">ORVALIA</span>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="flex-1 flex overflow-hidden relative print:overflow-visible print:block">

        {/* PRESENTATION MODE VIEWPORT */}
        <div className={`flex-1 flex flex-col justify-between p-4 md:p-8 lg:p-12 overflow-y-auto max-w-7xl mx-auto w-full print:hidden print-presentation-container ${viewMode === "presentation" ? "flex" : "hidden"}`}>
          
          {/* Top Info Indicator */}
          <div className="flex items-center justify-between text-[11px] font-mono tracking-widest text-brand-gold/80 mb-6 uppercase">
            <span>{currentSlide.chapter}</span>
            <span className="bg-brand-beige/40 px-2 py-0.5 rounded text-brand-green font-semibold">
              Slide {currentSlideIndex + 1} de {slides.length}
            </span>
          </div>

          {/* Slide Stage Container with transition animations */}
          <div className="flex-1 flex flex-col justify-center my-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlideIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                {/* SLIDE CONTENT RENDERING ROUTER */}
                {renderSlideContent(currentSlide)}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slide Navigation footer */}
          <div className="mt-8 pt-6 border-t border-brand-beige/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Autoplay controllers */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleAutoplay}
                className={`flex items-center gap-1 text-xs px-3 py-2 rounded-lg font-medium transition-all ${
                  isPlaying 
                    ? "bg-red-50 text-red-600 hover:bg-red-100" 
                    : "bg-brand-gold/10 text-brand-gold hover:bg-brand-gold/20"
                }`}
                id="btn-autoplay"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5" />
                    <span>Pausar Auto</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5" />
                    <span>Autoplay</span>
                  </>
                )}
              </button>

              {isPlaying && (
                <select
                  value={autoplaySpeed}
                  onChange={(e) => setAutoplaySpeed(Number(e.target.value))}
                  className="text-xs bg-brand-beige/40 border border-brand-beige rounded px-2 py-1 text-brand-graphite outline-none focus:border-brand-gold"
                  id="select-autoplay-speed"
                >
                  <option value={5000}>5s / slide</option>
                  <option value={8000}>8s / slide</option>
                  <option value={12000}>12s / slide</option>
                  <option value={18000}>18s / slide</option>
                </select>
              )}

              <div className="text-[10px] text-brand-graphite/40 font-mono hidden md:inline ml-2">
                Dica: Use as setas do teclado (◀ e ▶) para navegar.
              </div>
            </div>

            {/* Symmetrical indicator dots */}
            <div className="flex items-center gap-1.5">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`h-1.5 transition-all rounded-full ${
                    idx === currentSlideIndex 
                      ? "w-8 bg-brand-green" 
                      : "w-1.5 bg-brand-beige hover:bg-brand-gold/60"
                  }`}
                  title={`Ir para Slide ${idx + 1}`}
                ></button>
              ))}
            </div>

            {/* Back / Next Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                disabled={currentSlideIndex === 0}
                className={`flex items-center gap-1 text-xs font-semibold px-4 py-2.5 rounded-lg border border-brand-beige transition-all ${
                  currentSlideIndex === 0 
                    ? "opacity-30 cursor-not-allowed bg-brand-beige/20 text-brand-graphite/40" 
                    : "bg-brand-offwhite text-brand-green hover:bg-brand-beige/30 hover:border-brand-gold/50"
                }`}
                id="btn-prev-slide"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Anterior</span>
              </button>
              
              <button
                onClick={nextSlide}
                disabled={currentSlideIndex === slides.length - 1}
                className={`flex items-center gap-1 text-xs font-semibold px-5 py-2.5 rounded-lg bg-brand-green text-brand-offwhite ${
                  currentSlideIndex === slides.length - 1 
                    ? "opacity-30 cursor-not-allowed" 
                    : "hover:bg-brand-green/90 active:scale-[0.97] active:shadow-inner shadow-md shadow-brand-green/10"
                }`}
                id="btn-next-slide"
              >
                <span>Próximo</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* DOCUMENT DETAILED VIEW */}
        <div className={`flex-1 overflow-y-auto px-4 py-12 md:px-12 lg:px-24 bg-brand-offwhite max-w-5xl mx-auto print-document-container print:block ${viewMode === "document" ? "block" : "hidden"}`}>
          <div className="text-center max-w-2xl mx-auto mb-16 print:hidden">
            <span className="text-[11px] font-mono tracking-widest uppercase text-brand-gold bg-brand-gold/10 px-3 py-1 rounded">
              REPOSITÓRIO ESTRATÉGICO UNIFICADO
            </span>
            <h1 className="font-serif text-3xl md:text-4xl text-brand-green tracking-tight font-medium mt-4 mb-3">
              Apresentação Executiva de Comunicação
            </h1>
            <p className="text-sm text-brand-graphite/80 font-sans leading-relaxed">
              Desenvolvido especialmente para <strong>Débora Bolangno</strong> pela agência <strong>Orvalia</strong>. 
              Abaixo, todas as seções e diagnósticos estruturados de maneira unificada para uma leitura contínua, auditoria ou impressão.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <button
                onClick={() => window.print()}
                className="flex items-center gap-1.5 text-xs font-semibold text-brand-green border border-brand-beige bg-brand-beige/20 hover:bg-brand-beige/40 px-4 py-2 rounded-lg transition-all"
                id="btn-print"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Imprimir / Salvar em PDF</span>
              </button>
              <button
                onClick={() => { setViewMode("presentation"); goToSlide(0); }}
                className="flex items-center gap-1.5 text-xs font-semibold text-white bg-brand-green hover:bg-brand-green/95 px-4 py-2 rounded-lg transition-all"
                id="btn-switch-back-pres"
              >
                <Presentation className="w-3.5 h-3.5" />
                <span>Iniciar Apresentação</span>
              </button>
            </div>
          </div>

          {/* Render all slides in order */}
          <div className="space-y-24 print:space-y-0">
            {slides.map((slide, idx) => (
              <div key={slide.id} className="border-t border-brand-beige/60 pt-16 relative print-slide-break first:border-0 first:pt-0">
                
                {/* Floating Chapter Flag */}
                <div className="flex items-center justify-between text-[11px] font-mono tracking-widest text-brand-gold uppercase mb-6">
                  <span>{slide.chapter}</span>
                  <span>Sessão {idx + 1} de {slides.length}</span>
                </div>

                {/* Render exact slide layout */}
                <div className="my-6">
                  {renderSlideContent(slide, true)}
                </div>

                {/* Detailed Presenter Notes attached underneath each slide in document mode */}
                <div className="mt-8 p-6 bg-brand-beige/35 rounded-xl border border-brand-beige/55 print-avoid-break">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>
                    <span className="text-xs font-bold text-brand-green uppercase tracking-widest">
                      Contexto do Diretor de Estratégia (Foco Executivo)
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {slide.speakerNotes.map((note, nIdx) => (
                      <li key={nIdx} className="text-xs text-brand-graphite/90 leading-relaxed list-disc list-inside">
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Footer space */}
          <div className="mt-24 border-t border-brand-beige/60 pt-12 text-center text-xs text-brand-graphite/40 font-mono print-avoid-break">
            ORVALIA © 2026 · Todos os direitos estratégicos reservados a Débora Bolangno.
          </div>
        </div>

        {/* PRESENTER NOTES DRAWER (SIDEBAR) */}
        {viewMode === "presentation" && showPresenterNotes && (
          <aside className="w-80 border-l border-brand-beige/60 bg-brand-beige/25 p-6 flex flex-col justify-between overflow-y-auto h-full shadow-lg shrink-0">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-brand-beige/60">
                <div className="flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4 text-brand-gold" />
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-green">DIRETOR ESTRATÉGICO</span>
                </div>
                <button 
                  onClick={() => setShowPresenterNotes(false)}
                  className="p-1 hover:bg-brand-beige/60 rounded text-brand-graphite/60 hover:text-brand-black"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Guiding statement */}
              <div className="mb-6 p-3 bg-brand-offwhite rounded-lg border border-brand-beige text-[11px] text-brand-gold leading-relaxed italic">
                &ldquo;Use estas notas para se guiar durante a reunião ou para se aprofundar na lógica por trás de cada visual.&rdquo;
              </div>

              <div className="space-y-4">
                <div className="text-[10px] font-mono tracking-wider text-brand-graphite/50 uppercase">Roteiro de Fala</div>
                {currentSlide.speakerNotes.map((note, idx) => (
                  <p key={idx} className="text-xs text-brand-graphite/90 leading-relaxed bg-brand-offwhite/50 p-3 rounded border border-brand-beige/30">
                    {note}
                  </p>
                ))}
              </div>
            </div>

            {/* Text To Speech controls */}
            <div className="mt-8 pt-4 border-t border-brand-beige/60">
              <button
                onClick={speakNotes}
                className={`w-full flex items-center justify-center gap-2 text-xs py-2.5 px-4 rounded-lg font-medium transition-all ${
                  spokenAudioEnabled 
                    ? "bg-brand-gold text-brand-offwhite" 
                    : "bg-brand-green/10 text-brand-green hover:bg-brand-green/20"
                }`}
                id="btn-speak-notes"
              >
                <Volume2 className="w-4 h-4 animate-pulse" />
                <span>{spokenAudioEnabled ? "Parar Leitura de Voz" : "Ouvir Roteiro de Fala"}</span>
              </button>
              <div className="text-[10px] text-brand-graphite/40 text-center mt-1.5 font-mono">
                Sintetizador Neural de Apoio
              </div>
            </div>
          </aside>
        )}

      </main>

      {/* PERSISTENT BAR INDICATOR FOR LIVE MEETINGS */}
      <footer className="bg-brand-green px-6 py-2.5 text-brand-offwhite flex justify-between items-center text-[10px] tracking-widest uppercase shrink-0">
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-ping"></div>
          <span className="font-medium">PLANEJAMENTO DE REPUTAÇÃO DIGITAL</span>
        </div>
        <div className="font-mono hidden sm:block">DÉBORA BOLANGNO &times; ORVALIA · 2026</div>
        <div>CONFIDENCIAL DO CLIENTE</div>
      </footer>

    </div>
  );

  /**
   * RENDERS INDIVIDUAL SLIDE DESIGNS WITH EXACT VISUAL STORYTELLING INSTEAD OF TEXT DENSITY
   */
  function renderSlideContent(slide: SlideData, inDocMode = false) {
    const isCover = slide.id === 1;
    
    return (
      <div className={`mx-auto ${isCover ? "max-w-4xl" : "max-w-6xl"} w-full`}>
        
        {/* Generous layout title */}
        {!isCover && (
          <div className="mb-8 md:mb-10 text-left">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-green font-medium tracking-tight mb-3">
              {slide.title}
            </h2>
            <p className="text-sm md:text-base text-brand-graphite/80 leading-relaxed max-w-3xl">
              {slide.subtitle}
            </p>
          </div>
        )}

        {/* CUSTOM COMPONENTS ROUTER */}
        {slide.id === 1 && renderCoverSlide(slide.content)}
        {slide.id === 2 && renderStrategicContextSlide(slide.content)}
        {slide.id === 3 && renderCoreThesisSlide(slide.content)}
        {slide.id === 4 && renderAudiencePainsSlide(slide.content)}
        {slide.id === 5 && renderChannelEcosystemSlide(slide.content, inDocMode)}
        {slide.id === 6 && renderContentIntoConversationSlide(slide.content)}
        {slide.id === 7 && renderCampaignRhythmSlide(slide.content, inDocMode)}
        {slide.id === 8 && renderOrganicFunnelSlide(slide.content, inDocMode)}
        {slide.id === 9 && renderHowExecutionWorksSlide(slide.content)}
        {slide.id === 10 && renderMeasuringSuccessSlide(slide.content)}
        {slide.id === 11 && renderNextStepsSlide(slide.content)}
        {slide.id === 12 && renderClosingSlide(slide.content)}

      </div>
    );
  }

  /* SLIDE 1: COVER SCREEN */
  function renderCoverSlide(content: any) {
    return (
      <div className="text-center py-8 md:py-16 px-4 md:px-8 bg-brand-green text-brand-offwhite rounded-3xl shadow-xl relative overflow-hidden border border-brand-green/20">
        
        {/* Elegant geometric elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-gold/5 rounded-full filter blur-3xl -translate-x-12 -translate-y-12"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-gold/5 rounded-full filter blur-3xl translate-x-12 translate-y-12"></div>

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col justify-between min-h-[50vh]">
          
          {/* Top Label */}
          <div className="flex justify-center items-center gap-2 mb-10">
            <span className="text-xs tracking-[0.25em] font-medium uppercase text-brand-gold">{content.context}</span>
          </div>

          {/* Main Title Block */}
          <div className="my-auto">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-brand-offwhite leading-[1.1] mb-6">
              A Estratégia de Comunicação <br />
              <span className="italic font-light text-brand-gold">Orgânica de Alto Impacto</span>
            </h1>

            {/* Custom crafted golden divider line */}
            <div className="flex items-center justify-center gap-3 my-8">
              <div className="h-px w-16 bg-brand-gold/50"></div>
              <div className="w-1.5 h-1.5 rotate-45 bg-brand-gold"></div>
              <div className="h-px w-16 bg-brand-gold/50"></div>
            </div>

            <p className="text-sm md:text-base text-brand-beige/90 leading-relaxed font-sans max-w-2xl mx-auto">
              Desenvolvido sob medida para a consolidação de liderança de pensamento e conversão sutil de contratos de alta sênioridade.
            </p>
          </div>

          {/* Bottom Meta */}
          <div className="mt-12 pt-8 border-t border-brand-offwhite/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs tracking-wider">
            
            {/* Target Client info */}
            <div className="text-left sm:text-left">
              <div className="text-brand-gold text-[10px] uppercase font-mono tracking-widest">Apresentação para:</div>
              <div className="font-serif text-base font-semibold text-brand-offwhite mt-0.5">{content.client}</div>
            </div>

            {/* Creative quote */}
            <div className="max-w-xs text-center italic text-brand-beige/60 text-[11px] font-serif py-2 sm:py-0">
              &ldquo;{content.quote}&rdquo;
            </div>

            {/* Brand Signature and Date */}
            <div className="text-right sm:text-right">
              <div className="text-brand-gold text-[10px] uppercase font-mono tracking-widest">Estratégia & Direção:</div>
              <div className="font-serif text-base font-semibold text-brand-offwhite mt-0.5">{content.agency}</div>
            </div>

          </div>

        </div>
      </div>
    );
  }

  /* SLIDE 2: STRATEGIC CONTEXT PILLARS */
  function renderStrategicContextSlide(content: any) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-4">
        {content.pillars.map((pillar: any, index: number) => (
          <div 
            key={index}
            className="bg-brand-beige/25 hover:bg-brand-beige/40 border border-brand-beige/60 hover:border-brand-gold/50 p-6 md:p-8 rounded-2xl transition-all-custom group flex flex-col justify-between"
          >
            <div>
              <div className="font-mono text-xs text-brand-gold font-bold tracking-widest uppercase mb-4">
                PARADIGMA 0{index + 1}
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-brand-green font-medium mb-3 group-hover:text-brand-gold transition-colors">
                {pillar.title}
              </h3>
              <p className="text-xs md:text-sm text-brand-graphite/85 leading-relaxed">
                {pillar.description}
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-brand-beige/60 flex items-center justify-between text-[11px] font-mono uppercase text-brand-green font-medium">
              <span>{pillar.highlight}</span>
              <ArrowRight className="w-3.5 h-3.5 text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  /* SLIDE 3: CORE THESIS COMPARISON */
  function renderCoreThesisSlide(content: any) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
        
        {/* Traditional Model - Red tone / Saturated */}
        <div className="bg-white border border-brand-beige/50 rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-brand-graphite">
              {content.leftPanel.title}
            </h3>
          </div>
          
          <div className="space-y-4">
            {content.leftPanel.items.map((item: any, idx: number) => (
              <div key={idx} className="p-4 bg-red-50/40 rounded-xl border border-red-100/40">
                <div className="text-[10px] uppercase tracking-wider text-red-700/80 font-mono mb-1">{item.label}</div>
                <div className="text-xs md:text-sm text-brand-graphite/90 font-medium line-through decoration-red-500/30">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-[11px] text-center italic text-brand-graphite/40">
            Foca no volume cru de tráfego, ignorando os pilares de credibilidade do tomador de decisão.
          </div>
        </div>

        {/* Premium Model - Forest green & gold */}
        <div className="bg-brand-green text-brand-offwhite border border-brand-green/10 rounded-2xl p-6 md:p-8 shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 bg-brand-gold/10 text-brand-gold text-[10px] font-mono tracking-widest uppercase rounded-bl-xl font-bold">
            Assinatura Orvalia
          </div>
          
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-2.5 h-2.5 rounded-full bg-brand-gold"></div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-brand-gold">
              {content.rightPanel.title}
            </h3>
          </div>

          <div className="space-y-4">
            {content.rightPanel.items.map((item: any, idx: number) => (
              <div key={idx} className="p-4 bg-brand-offwhite/10 rounded-xl border border-brand-offwhite/5">
                <div className="text-[10px] uppercase tracking-wider text-brand-gold font-mono mb-1">{item.label}</div>
                <div className="text-xs md:text-sm text-brand-offwhite font-medium">
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-[11px] text-center italic text-brand-gold/80">
            Foca no valor de cada ponto de contato, transformando leitores em conexões qualificadas.
          </div>
        </div>

      </div>
    );
  }

  /* SLIDE 4: AUDIENCE AND MAIN PAINS */
  function renderAudiencePainsSlide(content: any) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4">
        
        {/* Left Side: Profiles (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="text-[11px] font-mono text-brand-gold uppercase tracking-widest">
            Filtros Ideais de Público
          </div>
          {content.profiles.map((profile: any, idx: number) => (
            <button
              key={idx}
              onClick={() => setActiveProfileIndex(idx)}
              className={`text-left p-5 rounded-xl border transition-all-custom ${
                activeProfileIndex === idx 
                  ? "bg-brand-green text-brand-offwhite border-brand-green shadow-md" 
                  : "bg-white text-brand-graphite border-brand-beige/70 hover:bg-brand-beige/25"
              }`}
            >
              <h4 className={`font-serif text-lg font-medium mb-2 ${activeProfileIndex === idx ? "text-brand-gold" : "text-brand-green"}`}>
                {profile.name}
              </h4>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {profile.tags.map((tag: string, tIdx: number) => (
                  <span 
                    key={tIdx} 
                    className={`text-[9px] font-mono px-2 py-0.5 rounded uppercase tracking-wider ${
                      activeProfileIndex === idx ? "bg-brand-offwhite/15 text-brand-beige" : "bg-brand-beige/50 text-brand-green"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className={`text-xs leading-relaxed ${activeProfileIndex === idx ? "text-brand-offwhite/85" : "text-brand-graphite/85"}`}>
                {profile.description}
              </p>
            </button>
          ))}
        </div>

        {/* Right Side: Activated Pains (7 cols) */}
        <div className="lg:col-span-7 bg-brand-beige/25 border border-brand-beige/60 rounded-2xl p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="text-[11px] font-mono text-brand-gold uppercase tracking-widest mb-6">
              Dores do Decisor que Nossa Narrativa Ativa
            </div>
            
            <div className="space-y-6">
              {content.pains.map((pain: any, idx: number) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-green/10 text-brand-green font-serif font-bold text-sm flex items-center justify-center">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-semibold text-brand-green mb-1">
                      {pain.title}
                    </h4>
                    <p className="text-xs text-brand-graphite/80 leading-relaxed">
                      {pain.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 p-4 bg-brand-offwhite rounded-xl border border-brand-beige text-xs text-brand-green italic">
            <strong>Direcionamento:</strong> Não escrevemos sobre tutoriais rasos ou conceitos genéricos. Formulamos posicionamentos para líderes que procuram profundidade intelectual e curadoria.
          </div>
        </div>

      </div>
    );
  }

  /* SLIDE 5: CHANNEL ECOSYSTEM (Highly Interactive) */
  function renderChannelEcosystemSlide(content: any, inDocMode = false) {
    
    const activeChannel = content.channels.find((c: any) => c.id === selectedChannelId) || content.channels[0];

    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4">
        
        {/* Channel Selector (Left 4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-2">
          <span className="text-[11px] font-mono text-brand-gold uppercase tracking-widest mb-2">
            Clique para Explorar o Papel
          </span>
          {content.channels.map((channel: any) => (
            <button
              key={channel.id}
              onClick={() => setSelectedChannelId(channel.id)}
              className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                selectedChannelId === channel.id 
                  ? "bg-brand-green text-brand-offwhite border-brand-green font-semibold shadow-md" 
                  : "bg-white text-brand-graphite border-brand-beige/80 hover:bg-brand-beige/30"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-2.5 h-2.5 rounded-full ${selectedChannelId === channel.id ? "bg-brand-gold" : "bg-brand-beige"}`} />
                <div>
                  <div className="text-xs font-bold tracking-wide uppercase">{channel.name}</div>
                  <div className={`text-[10px] ${selectedChannelId === channel.id ? "text-brand-beige" : "text-brand-graphite/60"}`}>
                    {channel.role.substring(0, 30)}...
                  </div>
                </div>
              </div>
              <ChevronRight className={`w-4 h-4 text-brand-gold ${selectedChannelId === channel.id ? "opacity-100" : "opacity-40"}`} />
            </button>
          ))}
        </div>

        {/* Detailed Panel (Right 8 cols) */}
        <div className="lg:col-span-8 bg-brand-beige/25 border border-brand-beige/60 rounded-2xl p-6 md:p-8 flex flex-col justify-between min-h-[300px]">
          <div>
            <div className="flex items-center justify-between border-b border-brand-beige/60 pb-3 mb-4">
              <span className="text-[11px] font-mono text-brand-gold uppercase tracking-widest">
                Papel Estrutural do Canal
              </span>
              <span className="text-[10px] font-mono bg-brand-green/10 text-brand-green px-2 py-0.5 rounded uppercase">
                {activeChannel.name}
              </span>
            </div>

            <h3 className="font-serif text-2xl text-brand-green font-medium mb-2">
              {activeChannel.role}
            </h3>
            <p className="text-xs md:text-sm text-brand-graphite/90 leading-relaxed mb-6">
              {activeChannel.purpose}
            </p>

            {/* Content Formats list */}
            <div className="mb-6">
              <div className="text-[10px] font-mono text-brand-gold uppercase tracking-widest mb-3">
                Formatos Editoriais Recomendados
              </div>
              <ul className="space-y-2">
                {activeChannel.formats.map((format: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-brand-graphite">
                    <Check className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" />
                    <span>{format}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* KPI bottom badge */}
          <div className="p-4 bg-brand-offwhite rounded-xl border border-brand-beige/80 flex items-center justify-between text-xs">
            <span className="font-mono text-[10px] text-brand-gold uppercase tracking-widest">
              Indicador Chave (KPI):
            </span>
            <span className="font-bold text-brand-green">
              {activeChannel.kpi}
            </span>
          </div>
        </div>

      </div>
    );
  }

  /* SLIDE 6: CONTENT INTO CONVERSATION */
  function renderContentIntoConversationSlide(content: any) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
        {content.steps.map((step: any, index: number) => (
          <div 
            key={index} 
            className="bg-white border border-brand-beige/60 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif text-3xl font-light text-brand-gold">
                  {step.number}
                </span>
                <span className="text-[9px] font-mono bg-brand-beige/60 text-brand-green px-2 py-0.5 rounded uppercase tracking-wider font-semibold">
                  {step.subtitle}
                </span>
              </div>
              <h4 className="font-serif text-base font-semibold text-brand-green mb-2">
                {step.title}
              </h4>
              <p className="text-[11px] md:text-xs text-brand-graphite/85 leading-relaxed">
                {step.description}
              </p>
            </div>

            {/* Connecting visual arrow inside grid */}
            {index < 3 && (
              <div className="hidden md:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 bg-brand-offwhite p-1 rounded-full border border-brand-beige">
                <ArrowRight className="w-4 h-4 text-brand-gold" />
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  /* SLIDE 7: CAMPAIGN RHYTHM TIMELINE */
  function renderCampaignRhythmSlide(content: any, inDocMode = false) {
    const selectedPhase = content.timeline[selectedRhythmWeek];

    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4">
        
        {/* Timeline controller tabs (Left 5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-2">
          <span className="text-[11px] font-mono text-brand-gold uppercase tracking-widest mb-2">
            Selecione a Semana de Trabalho
          </span>
          {content.timeline.map((item: any, idx: number) => (
            <button
              key={idx}
              onClick={() => setSelectedRhythmWeek(idx)}
              className={`w-full text-left p-4 rounded-xl border transition-all ${
                selectedRhythmWeek === idx 
                  ? "bg-brand-green text-brand-offwhite border-brand-green font-semibold shadow-md" 
                  : "bg-white text-brand-graphite border-brand-beige/80 hover:bg-brand-beige/30"
              }`}
            >
              <div className="text-[10px] font-mono text-brand-gold tracking-widest uppercase mb-1">
                {item.phase}
              </div>
              <h4 className={`font-serif text-base font-semibold ${selectedRhythmWeek === idx ? "text-white" : "text-brand-green"}`}>
                {item.title}
              </h4>
            </button>
          ))}
        </div>

        {/* Selected Phase Detail (Right 7 cols) */}
        <div className="lg:col-span-7 bg-brand-beige/25 border border-brand-beige/60 rounded-2xl p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-brand-beige/60 pb-3 mb-4">
              <span className="text-[11px] font-mono text-brand-gold uppercase tracking-widest">
                Entregas Operacionais Detalhadas
              </span>
              <span className="text-xs font-bold text-brand-green font-mono">
                {selectedPhase.focus}
              </span>
            </div>

            <h3 className="font-serif text-2xl text-brand-green font-semibold mb-6">
              {selectedPhase.title}
            </h3>

            <div className="space-y-4">
              <div className="text-[10px] font-mono text-brand-gold uppercase tracking-widest">
                Checklist Semanal da Orvalia
              </div>
              {selectedPhase.details.map((detail: string, dIdx: number) => (
                <div key={dIdx} className="flex items-start gap-2.5 text-xs text-brand-graphite leading-relaxed">
                  <div className="w-4 h-4 rounded-full bg-brand-green text-brand-offwhite text-[9px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {dIdx + 1}
                  </div>
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 p-3 bg-brand-offwhite rounded-lg border border-brand-beige/60 text-[11px] text-brand-graphite/70 text-center">
            *O cronograma de postagens será adaptado conforme a velocidade de aprovações da Débora.
          </div>
        </div>

      </div>
    );
  }

  /* SLIDE 8: ORGANIC FUNNEL GRAPHIC (Highly Visual & Custom Interactive SVG) */
  function renderOrganicFunnelSlide(content: any, inDocMode = false) {
    const activeStage = content.funnelStages[selectedFunnelStageIndex];

    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4">
        
        {/* Interactive Funnel Drawing (Left 6 cols) */}
        <div className="lg:col-span-6 bg-white border border-brand-beige/60 rounded-2xl p-6 flex flex-col justify-center items-center shadow-sm">
          <div className="text-[11px] font-mono text-brand-gold uppercase tracking-widest mb-6 self-start">
            Estrutura Geométrica do Funil
          </div>

          {/* SVG funnel container */}
          <div className="w-full max-w-[340px] flex flex-col gap-2">
            {content.funnelStages.map((stage: any, idx: number) => {
              // Custom polygon widths and colors for funnel shape
              const widthClass = idx === 0 ? "w-full" : idx === 1 ? "w-5/6" : idx === 2 ? "w-2/3" : "w-1/2";
              const colorBg = selectedFunnelStageIndex === idx ? "bg-brand-green text-brand-offwhite" : "bg-brand-beige/40 text-brand-graphite hover:bg-brand-beige/70";
              const borderClass = selectedFunnelStageIndex === idx ? "border-brand-gold shadow-md" : "border-brand-beige/40";

              return (
                <button
                  key={idx}
                  onClick={() => setSelectedFunnelStageIndex(idx)}
                  className={`mx-auto ${widthClass} py-3.5 px-4 text-center rounded-xl border font-sans font-medium text-xs tracking-wider uppercase transition-all duration-300 ${colorBg} ${borderClass}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-brand-gold font-bold">0{idx + 1}</span>
                    <span>{stage.name.split(" ")[0]}</span>
                    <span className="text-[9px] opacity-75 font-mono">{idx === 0 ? "Atração" : idx === 1 ? "Conexão" : idx === 2 ? "Diálogo" : "Fechamento"}</span>
                  </div>
                </button>
              );
            })}
          </div>

          <p className="text-[10px] text-brand-graphite/40 font-mono mt-6 text-center">
            *Clique nas faixas do funil para ver o detalhamento técnico estratégico à direita.
          </p>
        </div>

        {/* Funnel Stage Explainer (Right 6 cols) */}
        <div className="lg:col-span-6 bg-brand-beige/25 border border-brand-beige/60 rounded-2xl p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-brand-beige/60 pb-3 mb-4">
              <span className="text-[11px] font-mono text-brand-gold uppercase tracking-widest">
                Fase de Jornada de Decisão
              </span>
              <span className="text-xs font-bold text-brand-green font-mono">
                FAIXA 0{selectedFunnelStageIndex + 1}
              </span>
            </div>

            <h3 className="font-serif text-2xl text-brand-green font-semibold mb-2">
              {activeStage.name}
            </h3>
            <p className="text-xs font-semibold text-brand-gold uppercase tracking-wider mb-4">
              Objetivo: {activeStage.goal}
            </p>

            <p className="text-xs md:text-sm text-brand-graphite/85 leading-relaxed mb-6">
              {activeStage.description}
            </p>

            {/* Metrics tracked */}
            <div className="p-4 bg-brand-offwhite rounded-xl border border-brand-beige">
              <div className="text-[9px] font-mono text-brand-gold uppercase tracking-widest mb-1">
                Como Medimos Essa Faixa
              </div>
              <p className="text-xs font-medium text-brand-green">
                {activeStage.metric}
              </p>
            </div>
          </div>

          <div className="text-[10px] text-brand-graphite/50 italic mt-6">
            Estratégia pura sem desperdício: atraímos apenas decisores de negócios reais.
          </div>
        </div>

      </div>
    );
  }

  /* SLIDE 9: HOW EXECUTION WORKS */
  function renderHowExecutionWorksSlide(content: any) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        {content.workflow.map((item: any, idx: number) => (
          <div 
            key={idx} 
            className="bg-brand-beige/25 hover:bg-brand-beige/40 border border-brand-beige/50 rounded-xl p-5 md:p-6 transition-all-custom flex flex-col justify-between group"
          >
            <div>
              <div className="w-8 h-8 rounded-full bg-brand-green text-brand-offwhite flex items-center justify-center font-mono text-xs font-bold mb-4 group-hover:bg-brand-gold group-hover:scale-105 transition-all">
                0{idx + 1}
              </div>
              <h4 className="font-serif text-lg font-semibold text-brand-green mb-1 group-hover:text-brand-gold transition-colors">
                {item.title}
              </h4>
              <div className="text-[9px] font-mono text-brand-gold uppercase tracking-wider mb-3">
                {item.subtitle}
              </div>
              <p className="text-[11px] md:text-xs text-brand-graphite/80 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-brand-beige/40 text-[9px] text-brand-graphite/40 font-mono tracking-widest uppercase">
              Operação Premium
            </div>
          </div>
        ))}
      </div>
    );
  }

  /* SLIDE 10: MEASURING SUCCESS / METRIC CARDS */
  function renderMeasuringSuccessSlide(content: any) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        {content.metrics.map((metric: any, idx: number) => (
          <div 
            key={idx} 
            className="bg-white border border-brand-beige/60 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono text-brand-gold uppercase tracking-widest">
                  {metric.value}
                </span>
                <span className="text-[10px] font-mono bg-brand-green/10 text-brand-green px-2 py-0.5 rounded uppercase font-semibold">
                  {metric.trend}
                </span>
              </div>
              
              <h4 className="font-serif text-lg font-semibold text-brand-green mb-3">
                {metric.title}
              </h4>
              <p className="text-xs text-brand-graphite/85 leading-relaxed">
                {metric.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-brand-beige/40 text-[10px] text-brand-green/80 font-mono tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold" />
              <span>Sinal de Maturidade</span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  /* SLIDE 11: NEXT STEPS CHECKLIST */
  function renderNextStepsSlide(content: any) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4">
        
        {/* Left Side: Milestones list */}
        <div className="lg:col-span-7 space-y-4">
          {content.steps.map((step: any, idx: number) => (
            <div 
              key={idx} 
              className="bg-white border border-brand-beige/60 hover:border-brand-gold/40 rounded-xl p-5 flex items-start gap-4 transition-all"
            >
              <div className="w-8 h-8 rounded-full bg-brand-green/10 text-brand-green font-serif text-sm font-bold flex items-center justify-center shrink-0">
                {step.number}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-serif text-base font-semibold text-brand-green">
                    {step.title}
                  </h4>
                  <span className="text-[9px] font-mono bg-brand-gold/15 text-brand-gold px-2 py-0.5 rounded uppercase font-bold tracking-wider">
                    {step.time}
                  </span>
                </div>
                <p className="text-xs text-brand-graphite/85 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Reassurance card */}
        <div className="lg:col-span-5 bg-brand-green text-brand-offwhite rounded-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full filter blur-xl"></div>
          
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-brand-gold" />
              <span className="text-[11px] font-mono text-brand-gold uppercase tracking-widest font-bold">
                NOSSO COMPROMISSO
              </span>
            </div>

            <h3 className="font-serif text-xl md:text-2xl text-white font-medium mb-4">
              Prontos para Iniciar
            </h3>
            <p className="text-xs text-brand-beige/85 leading-relaxed space-y-2">
              <span>Este planejamento estratégico não é um roteiro engessado. Ele foi concebido para ser uma estrutura flexível que evolui à medida que colhemos as primeiras conversas qualificadas.</span>
              <br /><br />
              <span>A agência Orvalia está comprometida com o mais alto nível estético e editorial, protegendo a sua imagem profissional enquanto expande as suas fronteiras de impacto.</span>
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-brand-gold">
            <span>Foco no Longo Prazo</span>
            <span>Estabilidade de Marca</span>
          </div>
        </div>

      </div>
    );
  }

  /* SLIDE 12: CLOSING SCREEN */
  function renderClosingSlide(content: any) {
    return (
      <div className="text-center py-8 md:py-16 px-4 md:px-8 bg-brand-green text-brand-offwhite rounded-3xl shadow-xl relative overflow-hidden border border-brand-green/20">
        <div className="absolute inset-0 bg-brand-gold/2 opacity-[0.02] mix-blend-overlay"></div>
        
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col justify-between min-h-[45vh]">
          
          <div className="mb-4">
            <span className="text-xs tracking-[0.25em] font-medium uppercase text-brand-gold">FINAL DA APRESENTAÇÃO</span>
          </div>

          <div className="my-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-brand-offwhite leading-[1.2] mb-6">
              &ldquo;{content.finalWord}&rdquo;
            </h1>

            {/* Subtle graphic separator */}
            <div className="w-16 h-0.5 bg-brand-gold mx-auto my-6"></div>
          </div>

          {/* Core Signing details */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-12 pt-8 border-t border-white/10 text-xs">
            <div className="text-center">
              <div className="font-serif text-base font-semibold text-brand-gold">{content.deboraSignature}</div>
              <div className="text-[10px] text-brand-beige/60 uppercase tracking-widest mt-0.5">{content.deboraRole}</div>
            </div>

            <div className="text-brand-gold font-serif text-lg font-light hidden sm:block">&times;</div>

            <div className="text-center">
              <div className="font-serif text-base font-semibold text-brand-gold">{content.orvaliaSignature}</div>
              <div className="text-[10px] text-brand-beige/60 uppercase tracking-widest mt-0.5">{content.orvaliaRole}</div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
