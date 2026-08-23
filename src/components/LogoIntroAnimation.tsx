import React, { useState, useEffect } from 'react';
import { Sparkles, X, Play, Film, Aperture, CheckCircle2 } from 'lucide-react';
import { MahiClickzLogo } from './MahiClickzLogo';

interface LogoIntroAnimationProps {
  darkMode: boolean;
  isOpen: boolean;
  onClose: () => void;
}

export const LogoIntroAnimation: React.FC<LogoIntroAnimationProps> = ({
  darkMode,
  isOpen,
  onClose,
}) => {
  const [phase, setPhase] = useState<'opening' | 'streak' | 'reveal' | 'shine' | 'fadeout'>('opening');

  useEffect(() => {
    if (!isOpen) return;

    setPhase('opening');

    // Cinematic Movie Title Sequence Timeline (Total ~2.9s)
    const t1 = setTimeout(() => {
      setPhase('streak');
    }, 400);

    const t2 = setTimeout(() => {
      setPhase('reveal');
    }, 1100);

    const t3 = setTimeout(() => {
      setPhase('shine');
    }, 2000);

    const t4 = setTimeout(() => {
      setPhase('fadeout');
    }, 2800);

    const t5 = setTimeout(() => {
      onClose();
    }, 3200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="movie-title-intro-overlay"
      className={`fixed inset-0 z-[100] flex flex-col justify-between bg-black text-white select-none overflow-hidden transition-opacity duration-500 ${
        phase === 'fadeout' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Top Cinematic Anamorphic Letterbox Bar */}
      <div className="w-full h-12 sm:h-16 bg-black border-b border-amber-500/20 flex items-center justify-between px-6 sm:px-12 z-30">
        <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
          <Film className="w-3.5 h-3.5 animate-pulse text-amber-400" />
          <span>MAHI CREATIVES CINEMA SUITE</span>
        </div>
        <div className="flex items-center gap-3 text-[10px] sm:text-xs font-mono text-slate-400 tracking-wider">
          <span className="hidden sm:inline">2.39:1 ANAMORPHIC SCOPE</span>
          <span className="text-amber-500/60">•</span>
          <span className="text-emerald-400 font-bold">4K MASTER</span>
        </div>
      </div>

      {/* Center Cinematic Stage */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-4 overflow-hidden">
        
        {/* Background Deep Space & Golden Aurora Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-950/40 via-black to-black pointer-events-none" />
        
        {/* Subtle Atmospheric Light Cone */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-b from-amber-500/15 via-yellow-500/5 to-transparent rounded-full blur-3xl pointer-events-none transition-all duration-1000 ${
          phase === 'reveal' || phase === 'shine' ? 'scale-125 opacity-100' : 'scale-90 opacity-40'
        }`} />

        {/* Anamorphic Blue-Gold Lens Flare Sweep */}
        <div 
          className={`absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-300 via-amber-200 via-yellow-400 to-transparent shadow-[0_0_25px_rgba(56,189,248,0.8)] pointer-events-none transition-all duration-1000 ${
            phase === 'streak' || phase === 'reveal' || phase === 'shine'
              ? 'top-1/2 -translate-y-1/2 opacity-100 scale-x-100'
              : 'top-1/2 -translate-y-1/2 opacity-0 scale-x-0'
          }`}
        />

        {/* Studio Production Overhead Card */}
        <div className={`text-center mb-6 transition-all duration-700 ${
          phase === 'opening' ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
        }`}>
          <div className="text-[10px] sm:text-xs font-black uppercase tracking-[0.35em] text-amber-300/90 font-mono drop-shadow-[0_2px_10px_rgba(212,175,55,0.5)]">
            ★ A MAHI CREATIVES STUDIO PRODUCTION ★
          </div>
        </div>

        {/* Blockbuster 3D Logo & Camera Assembly with Cinematic Zoom & Gleam */}
        <div className={`relative transition-all duration-1000 transform ${
          phase === 'opening' 
            ? 'scale-75 opacity-0 blur-md' 
            : phase === 'streak'
            ? 'scale-95 opacity-90 blur-0'
            : phase === 'reveal'
            ? 'scale-105 opacity-100 drop-shadow-[0_0_40px_rgba(212,175,55,0.7)]'
            : 'scale-100 opacity-100 drop-shadow-[0_0_25px_rgba(212,175,55,0.5)]'
        }`}>
          <MahiClickzLogo size="xl" enablePhotoClickIntro={false} />

          {/* Diagonal Light Shimmer Sweep across the Logo */}
          {(phase === 'reveal' || phase === 'shine') && (
            <div className="absolute -inset-10 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-25 animate-[shimmer_1.5s_infinite] pointer-events-none blur-sm" />
          )}
        </div>

        {/* Blockbuster Title Presentation Typography */}
        <div className={`mt-8 text-center space-y-2.5 transition-all duration-1000 ${
          phase === 'reveal' || phase === 'shine'
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-6'
        }`}>
          <div className="text-base sm:text-xl md:text-2xl font-black uppercase tracking-[0.28em] font-rich gold-text-gradient drop-shadow-[0_4px_18px_rgba(212,175,55,0.6)]">
            WHERE EVERY FRAME TELLS A CAPTIVATING STORY
          </div>
          
          <div className="flex items-center justify-center gap-3 text-xs sm:text-sm font-bold tracking-[0.2em] text-slate-300 uppercase">
            <span className="text-amber-400">HIGH-RETENTION VIDEO</span>
            <span className="text-slate-600">•</span>
            <span className="text-amber-300">DAVINCI COLOR LAB</span>
            <span className="text-slate-600">•</span>
            <span className="text-amber-400">ROYAL PHOTOBOOKS</span>
          </div>
        </div>

        {/* Floating Particle Accents */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="w-full h-full max-w-4xl relative">
            <Sparkles className="absolute top-1/4 left-1/6 w-4 h-4 text-amber-300/40 animate-pulse" />
            <Sparkles className="absolute bottom-1/3 right-1/6 w-5 h-5 text-yellow-200/50 animate-bounce" />
            <Aperture className="absolute top-1/3 right-1/4 w-4 h-4 text-cyan-400/30 animate-spin" style={{ animationDuration: '12s' }} />
          </div>
        </div>

      </div>

      {/* Bottom Letterbox Bar with Direct Skip Button */}
      <div className="w-full h-14 sm:h-16 bg-black border-t border-amber-500/20 flex items-center justify-between px-6 sm:px-12 z-30">
        <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest hidden sm:block">
          MAHI CLICKZ • PROFESSIONAL VISUALS &amp; CREATIVES
        </div>

        <button
          id="movie-intro-skip-btn"
          onClick={onClose}
          className="ml-auto px-5 py-1.5 rounded-full bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider shadow-lg shadow-amber-500/30 transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
        >
          <span>Skip Intro</span>
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
