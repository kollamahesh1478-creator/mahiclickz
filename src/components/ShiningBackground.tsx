import React, { useMemo } from 'react';
import { Sparkles, Sun, Flame, Wand2, Eye } from 'lucide-react';

export type ShiningTheme = 'royal-gold' | 'cosmic-aurora' | 'cinematic-studio' | 'prism-crystal';

interface ShiningBackgroundProps {
  theme?: ShiningTheme;
  darkMode: boolean;
}

export const ShiningBackground: React.FC<ShiningBackgroundProps> = ({ theme = 'royal-gold', darkMode }) => {
  // Generate random stable particles for starlight / bokeh shimmer
  const particles = useMemo(() => {
    return Array.from({ length: 32 }).map((_, i) => ({
      id: i,
      x: Math.floor((i * 37 + 13) % 100),
      y: Math.floor((i * 61 + 29) % 100),
      size: (i % 3) + 2.5,
      duration: 6 + (i % 5) * 2,
      delay: (i % 6) * 0.7,
      opacity: 0.35 + ((i % 5) * 0.12),
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* 1. Base Gradient Canvas */}
      {darkMode ? (
        <div
          className={`absolute inset-0 transition-colors duration-1000 ${
            theme === 'royal-gold'
              ? 'bg-[#080705]'
              : theme === 'cosmic-aurora'
              ? 'bg-[#050811]'
              : theme === 'cinematic-studio'
              ? 'bg-[#060709]'
              : 'bg-[#09080E]'
          }`}
        />
      ) : (
        <div
          className={`absolute inset-0 transition-colors duration-1000 ${
            theme === 'royal-gold'
              ? 'bg-[#FCF9F2]'
              : theme === 'cosmic-aurora'
              ? 'bg-[#F2F6FC]'
              : theme === 'cinematic-studio'
              ? 'bg-[#F4F6F8]'
              : 'bg-[#FAF5FF]'
          }`}
        />
      )}

      {/* 2. Primary Animated Shining Aurora 1 */}
      <div
        className={`absolute -top-40 -left-40 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full blur-[140px] transition-all duration-1000 animate-pulse-glow ${
          darkMode
            ? theme === 'royal-gold'
              ? 'bg-gradient-to-tr from-amber-600/30 via-yellow-500/20 to-orange-600/15'
              : theme === 'cosmic-aurora'
              ? 'bg-gradient-to-tr from-cyan-500/25 via-blue-600/25 to-purple-600/20'
              : theme === 'cinematic-studio'
              ? 'bg-gradient-to-tr from-blue-600/30 via-indigo-500/20 to-slate-400/15'
              : 'bg-gradient-to-tr from-pink-500/20 via-purple-600/25 to-cyan-400/20'
            : theme === 'royal-gold'
            ? 'bg-gradient-to-tr from-amber-300/30 via-yellow-200/40 to-orange-300/20'
            : theme === 'cosmic-aurora'
            ? 'bg-gradient-to-tr from-cyan-200/40 via-blue-200/30 to-purple-200/20'
            : theme === 'cinematic-studio'
            ? 'bg-gradient-to-tr from-blue-200/40 via-indigo-100/40 to-slate-200/30'
            : 'bg-gradient-to-tr from-pink-200/30 via-purple-200/30 to-cyan-100/30'
        }`}
      />

      {/* 3. Secondary Animated Shining Aurora 2 (Opposite Corner) */}
      <div
        className={`absolute top-1/3 -right-40 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full blur-[150px] transition-all duration-1000 animate-pulse-glow ${
          darkMode
            ? theme === 'royal-gold'
              ? 'bg-gradient-to-bl from-yellow-500/25 via-amber-700/20 to-transparent'
              : theme === 'cosmic-aurora'
              ? 'bg-gradient-to-bl from-indigo-500/25 via-purple-700/20 to-transparent'
              : theme === 'cinematic-studio'
              ? 'bg-gradient-to-bl from-cyan-600/20 via-blue-800/20 to-transparent'
              : 'bg-gradient-to-bl from-fuchsia-600/20 via-rose-700/15 to-transparent'
            : theme === 'royal-gold'
            ? 'bg-gradient-to-bl from-amber-200/30 via-yellow-100/30 to-transparent'
            : theme === 'cosmic-aurora'
            ? 'bg-gradient-to-bl from-indigo-200/30 via-purple-100/30 to-transparent'
            : theme === 'cinematic-studio'
            ? 'bg-gradient-to-bl from-cyan-200/30 via-blue-100/30 to-transparent'
            : 'bg-gradient-to-bl from-fuchsia-200/25 via-rose-100/25 to-transparent'
        }`}
        style={{ animationDelay: '3s' }}
      />

      {/* 4. Bottom Ambient Studio Shimmer Beam */}
      <div
        className={`absolute -bottom-40 left-1/4 w-[700px] h-[500px] rounded-full blur-[160px] transition-all duration-1000 ${
          darkMode
            ? theme === 'royal-gold'
              ? 'bg-amber-500/15'
              : theme === 'cosmic-aurora'
              ? 'bg-blue-500/15'
              : theme === 'cinematic-studio'
              ? 'bg-indigo-500/15'
              : 'bg-purple-500/15'
            : theme === 'royal-gold'
            ? 'bg-amber-300/20'
            : theme === 'cosmic-aurora'
            ? 'bg-blue-300/20'
            : theme === 'cinematic-studio'
            ? 'bg-indigo-200/20'
            : 'bg-purple-200/20'
        }`}
      />

      {/* 5. Shimmering Moving Light Rays (Cinema Spotlight Sweep) */}
      <div
        className="absolute inset-0 opacity-40 mix-blend-screen"
        style={{
          background:
            theme === 'royal-gold'
              ? 'radial-gradient(ellipse at 50% 0%, rgba(255,230,128,0.12) 0%, rgba(212,175,55,0.05) 50%, transparent 80%)'
              : theme === 'cosmic-aurora'
              ? 'radial-gradient(ellipse at 50% 0%, rgba(56,189,248,0.12) 0%, rgba(99,102,241,0.05) 50%, transparent 80%)'
              : theme === 'cinematic-studio'
              ? 'radial-gradient(ellipse at 50% 0%, rgba(226,232,240,0.1) 0%, rgba(59,130,246,0.05) 50%, transparent 80%)'
              : 'radial-gradient(ellipse at 50% 0%, rgba(244,114,182,0.1) 0%, rgba(168,85,247,0.05) 50%, transparent 80%)',
        }}
      />

      {/* 6. Subtle Luxury Grid / Refraction Texture */}
      <div
        className={`absolute inset-0 opacity-[0.035] ${darkMode ? 'invert-0' : 'invert'}`}
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* 7. Animated Sparkling Dust / Bokeh Particles */}
      <div className="absolute inset-0">
        {particles.map((p) => (
          <div
            key={p.id}
            className={`absolute rounded-full animate-float-particle ${
              theme === 'royal-gold'
                ? 'bg-amber-300 shadow-[0_0_8px_rgba(255,230,128,0.9)]'
                : theme === 'cosmic-aurora'
                ? 'bg-cyan-300 shadow-[0_0_8px_rgba(56,189,248,0.9)]'
                : theme === 'cinematic-studio'
                ? 'bg-blue-200 shadow-[0_0_8px_rgba(191,219,254,0.9)]'
                : 'bg-fuchsia-300 shadow-[0_0_8px_rgba(240,171,252,0.9)]'
            }`}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>
    </div>
  );
};
