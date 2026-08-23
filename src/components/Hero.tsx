import React from 'react';
import { Camera, Film, Sparkles, Zap, Clock, ShieldCheck, ArrowRight, Play, Award, CheckCircle2, Mail, MessageSquare, Flame } from 'lucide-react';
import { MahiClickzLogo } from './MahiClickzLogo';

interface HeroProps {
  darkMode: boolean;
  onOpenEnquiry: (servicePrefill?: string) => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ darkMode, onOpenEnquiry, onExploreWork }) => {
  return (
    <section id="hero" className="relative pt-20 pb-4 sm:pt-22 sm:pb-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Brand Showcase Banner */}
        <div className="flex flex-col items-center justify-center text-center mb-4 relative">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-500/10 via-yellow-500/20 to-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-black uppercase tracking-widest backdrop-blur-md shadow-lg shadow-amber-500/10 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Visual Studio &amp; Editing Suite</span>
          </div>

          {/* Master 3D Logo Lockup */}
          <div className="py-1">
            <MahiClickzLogo size="xl" />
          </div>

          <h2 className="text-xs sm:text-sm tracking-[0.2em] uppercase font-bold text-slate-400 mt-1 font-rich">
            Where Every Frame Tells A Captivating Story
          </h2>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1 (Span 2x2): Featured Hero Photography & Vision */}
          <div
            id="hero-bento-featured"
            className={`col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2 relative overflow-hidden rounded-3xl border group min-h-[420px] lg:min-h-[500px] flex flex-col justify-end p-6 sm:p-8 transition-all ${
              darkMode
                ? 'border-amber-500/30 bg-slate-900/90 shadow-2xl shadow-black/80'
                : 'border-amber-500/20 bg-white shadow-xl shadow-amber-500/5'
            }`}
          >
            {/* Background Image with Cinematic Gradient Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200")`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />

            {/* Content on top of Image */}
            <div className="relative z-10 space-y-3">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-yellow-500 text-[10px] font-black rounded-md uppercase tracking-wider text-slate-950 inline-block shadow-md shadow-amber-500/30">
                  Featured Film &amp; Photography
                </span>
                <span className="px-2.5 py-1 bg-slate-900/90 backdrop-blur-md text-[10px] font-bold rounded-md border border-amber-500/30 text-amber-300 uppercase tracking-wider">
                  DaVinci Resolve 19 Studio
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight uppercase font-rich">
                EVERY FRAME TELLS A CAPTIVATING STORY.
              </h1>

              <p className="text-slate-300 text-xs sm:text-sm max-w-lg leading-relaxed">
                Welcome to <strong className="gold-text-gradient font-rich font-bold">MAHI CLICKZ &amp; CREATIVES</strong>. High-retention video editing, viral YouTube Shorts &amp; Reels, bespoke marriage photobooks, and Hollywood-grade color grading tailored for any budget.
              </p>

              {/* CTAs inside Featured Bento */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <button
                  id="hero-enquiry-cta"
                  onClick={() => onOpenEnquiry()}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Book Project Brief</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  id="hero-whatsapp-cta"
                  href="https://wa.me/919550658734?text=Hi%20Mahi,%20I%20am%20interested%20in%20your%20creative%20photography%20and%20video%20editing%20services!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-900/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer border border-emerald-400/30"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp: +91 95506 58734</span>
                </a>

                <button
                  id="hero-explore-work-btn"
                  onClick={onExploreWork}
                  className="px-4 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white font-semibold text-xs border border-slate-700 backdrop-blur-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span>Portfolio</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 (Span 2x1): Video Production & Software Badges */}
          <div
            id="hero-bento-production"
            className={`col-span-1 md:col-span-2 lg:col-span-2 rounded-3xl border p-6 flex flex-col justify-between transition-all ${
              darkMode ? 'bg-slate-900/80 border-slate-800 backdrop-blur-md' : 'bg-white border-slate-200'
            }`}
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <Film className="w-4 h-4 text-amber-400" />
                  <h2 className={`text-xl font-bold tracking-tight font-rich ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Video Production &amp; Post-Suite
                  </h2>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-[10px] font-bold border border-amber-500/30 px-2 py-0.5 rounded-md text-amber-300 bg-amber-500/10">DAVINCI</span>
                  <span className="text-[10px] font-bold border border-slate-700 px-2 py-0.5 rounded-md text-slate-300 bg-slate-800/80">PREMIERE</span>
                  <span className="text-[10px] font-bold border border-slate-700 px-2 py-0.5 rounded-md text-slate-300 bg-slate-800/80">CAPCUT PRO</span>
                  <span className="text-[10px] font-bold border border-amber-500/30 px-2 py-0.5 rounded-md text-amber-300 bg-amber-500/10">DEHANCER</span>
                </div>
              </div>

              <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Specializing in viral YouTube shorts, high-retention Instagram reels, travel vlogs, wedding teasers, and short films with filmic pacing and studio color accuracy.
              </p>
            </div>

            {/* Interactive Module Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-4">
              <div
                onClick={() => onOpenEnquiry('Shorts & Reels')}
                className={`p-3 rounded-2xl border flex flex-col justify-center cursor-pointer transition-all hover:scale-[1.02] ${
                  darkMode ? 'bg-slate-800/70 border-slate-700/80 hover:border-amber-500/60' : 'bg-slate-50 border-slate-200 hover:border-amber-400'
                }`}
              >
                <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider mb-0.5">Short Form</span>
                <span className={`text-xs font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Viral Shorts &amp; Reels</span>
              </div>

              <div
                onClick={() => onOpenEnquiry('Vlog Editing')}
                className={`p-3 rounded-2xl border flex flex-col justify-center cursor-pointer transition-all hover:scale-[1.02] ${
                  darkMode ? 'bg-slate-800/70 border-slate-700/80 hover:border-amber-500/60' : 'bg-slate-50 border-slate-200 hover:border-amber-400'
                }`}
              >
                <span className="text-[10px] text-indigo-400 font-bold uppercase tracking-wider mb-0.5">Long Form</span>
                <span className={`text-xs font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Cinematic Vlogs</span>
              </div>

              <div
                onClick={() => onOpenEnquiry('DaVinci Resolve Color Grading')}
                className={`flex p-3 rounded-2xl border flex-col justify-center cursor-pointer transition-all hover:scale-[1.02] ${
                  darkMode ? 'bg-slate-800/70 border-slate-700/80 hover:border-amber-500/60' : 'bg-slate-50 border-slate-200 hover:border-amber-400'
                }`}
              >
                <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider mb-0.5">Color Grade</span>
                <span className={`text-xs font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>DaVinci Studio</span>
              </div>
            </div>
          </div>

          {/* Card 3 (Span 1x1): High-CTR Thumbnails */}
          <div
            id="hero-bento-thumbnails"
            className={`col-span-1 rounded-3xl border p-6 flex flex-col justify-between transition-all ${
              darkMode
                ? 'bg-gradient-to-br from-amber-950/40 via-slate-900 to-slate-950 border-amber-500/30'
                : 'bg-gradient-to-br from-amber-50 via-white to-slate-50 border-amber-200'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">Social Growth</span>
                <Sparkles className="w-4 h-4 text-amber-400" />
              </div>
              <h3 className={`text-lg font-bold tracking-tight font-rich mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Thumbnails &amp; Graphics
              </h3>
              <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                High-CTR click-worthy designs optimized for YouTube algorithms.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-amber-500/20 flex items-center justify-between text-xs">
              <span className="text-amber-400 font-semibold">12-18% Avg CTR</span>
              <span className={`font-black ${darkMode ? 'text-white' : 'text-slate-900'}`}>From ₹600</span>
            </div>
          </div>

          {/* Card 4 (Span 1x1): Marriage & Event Albums */}
          <div
            id="hero-bento-albums"
            className={`col-span-1 rounded-3xl border p-6 flex flex-col justify-between transition-all ${
              darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">Photobooks</span>
                <Camera className="w-4 h-4 text-amber-400" />
              </div>
              <h3 className={`text-lg font-bold tracking-tight font-rich mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Marriage Albums
              </h3>
              <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                12x36 spread designs with high-res skin retouching &amp; print-ready exports.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="text-emerald-400 font-semibold">Print Ready 300DPI</span>
              <span className={`font-black ${darkMode ? 'text-white' : 'text-slate-900'}`}>₹300 / Spread</span>
            </div>
          </div>

          {/* Card 5 (Span 1x1): Low Budget Guarantee Block */}
          <div
            id="hero-bento-guarantee"
            className="col-span-1 rounded-3xl bg-gradient-to-br from-amber-500 via-amber-600 to-yellow-600 p-6 text-slate-950 flex flex-col justify-between shadow-xl shadow-amber-500/20 border border-amber-300/40"
          >
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest opacity-90 mb-1">
                Affordable Indian Pricing
              </div>
              <div className="text-3xl sm:text-4xl font-black mb-1 font-rich">
                ₹800 <span className="text-sm font-bold opacity-90">Starting</span>
              </div>
              <p className="text-xs text-slate-900 font-bold">
                Low Budget Promise. Top-tier cinema quality for every Indian creator and wedding studio.
              </p>
            </div>

            <button
              onClick={() => onOpenEnquiry()}
              className="mt-4 w-full py-2.5 rounded-xl bg-slate-950 text-amber-300 text-xs font-black uppercase tracking-wider hover:bg-slate-900 transition-colors text-center cursor-pointer shadow-md"
            >
              Get Custom Quote (in ₹)
            </button>
          </div>

          {/* Card 6 (Span 1x1): 24H Quick Turnaround & Direct Contacts */}
          <div
            id="hero-bento-turnaround"
            className={`col-span-1 md:col-span-1 lg:col-span-1 rounded-3xl border p-6 flex flex-col justify-between transition-all ${
              darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'
            }`}
          >
            <div>
              <div className="text-3xl font-black text-amber-400 mb-1 font-rich">
                24H - 48H
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                Rapid Delivery Turnaround
              </div>
              <p className={`text-[11px] leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Fast review iterations and direct WhatsApp revisions.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 space-y-1.5 text-xs">
              <a
                href="https://wa.me/919550658734"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline flex items-center gap-1.5 text-[11px] font-bold"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: +91 95506 58734</span>
              </a>
              <a
                href="mailto:kollamahesh1478@gmail.com"
                className="text-amber-400 hover:underline flex items-center gap-1.5 text-[11px] font-medium"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>kollamahesh1478@gmail.com</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


