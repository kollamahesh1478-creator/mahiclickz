import React, { useState } from 'react';
import { Sparkles, Sliders, Layers, Eye, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import { colorGradingComparison } from '../data/portfolioData';

interface ColorGradingLabProps {
  darkMode: boolean;
  onEnquireColorGrade: () => void;
}

export const ColorGradingLab: React.FC<ColorGradingLabProps> = ({ darkMode, onEnquireColorGrade }) => {
  const [selectedSceneIndex, setSelectedSceneIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 to 100)

  const currentScene = colorGradingComparison[selectedSceneIndex];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section id="color-lab" className={`py-6 sm:py-8 border-t relative overflow-hidden ${darkMode ? 'border-amber-500/20 bg-[#08090A]/90' : 'border-amber-200 bg-slate-50/70'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-4 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>DaVinci Resolve Studio 19 Color Suite</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight uppercase font-rich ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Interactive <span className="gold-text-gradient">Color Grading Lab</span>
          </h2>
          <p className={`text-xs sm:text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Drag the slider to compare raw un-graded flat log camera footage with our customized cinematic Hollywood color pass.
          </p>
        </div>

        {/* Scene Selection Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
          {colorGradingComparison.map((scene, idx) => (
            <button
              key={scene.id}
              id={`color-preset-tab-${scene.id}`}
              onClick={() => {
                setSelectedSceneIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                selectedSceneIndex === idx
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-500 border-amber-400 text-slate-950 shadow-md font-black'
                  : darkMode
                  ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-amber-300 hover:bg-slate-800'
                  : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {scene.title.split('(')[0].trim()}
            </button>
          ))}
        </div>

        {/* The Interactive Comparison Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
          
          {/* Main Visual Comparison Slider */}
          <div className="lg:col-span-8">
            <div className={`relative rounded-3xl overflow-hidden border shadow-2xl select-none ${
              darkMode ? 'border-slate-800 bg-[#0F1012]' : 'border-slate-200 bg-white'
            }`}>
              
              {/* Image Canvas Container */}
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                {/* AFTER IMAGE (Graded) - Full width in back */}
                <img
                  src={currentScene.afterImage}
                  alt="Graded Result"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* BEFORE IMAGE (Raw Flat Log) - Clipped to slider width */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={currentScene.beforeImage}
                    alt="Raw Flat Log Footage"
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                    style={{ width: '100%' }} // ensure same scale
                  />
                  {/* Subtle raw desaturation filter layer to ensure accurate log appearance */}
                  <div className="absolute inset-0 bg-neutral-500/10 backdrop-grayscale-[0.6] pointer-events-none" />
                </div>

                {/* Divider Line & Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-amber-400 shadow-[0_0_12px_rgba(212,175,55,0.9)] cursor-ew-resize flex items-center justify-center pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="w-8 h-8 -ml-3.5 rounded-full bg-slate-950 text-amber-400 shadow-xl flex items-center justify-center border-2 border-amber-400">
                    <Sliders className="w-4 h-4 text-amber-400" />
                  </div>
                </div>

                {/* Badges on left and right */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-black/80 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm border border-slate-700 pointer-events-none">
                  RAW / Flat LOG
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow-lg backdrop-blur-sm pointer-events-none">
                  DaVinci Graded
                </div>

                {/* Bottom interactive hint */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/75 text-slate-200 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm pointer-events-none">
                  ↔ Drag slider left or right
                </div>
              </div>

              {/* Slider Range Input for Accessibility & Touch */}
              <div className={`p-4 border-t flex items-center gap-4 ${
                darkMode ? 'border-slate-800 bg-slate-900/90' : 'border-slate-200 bg-slate-50'
              }`}>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Raw LOG</span>
                <input
                  id="color-grade-split-slider"
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={handleSliderChange}
                  className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-700 rounded-lg"
                  aria-label="Color grade comparison slider"
                />
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Graded Look</span>
              </div>

            </div>
          </div>

          {/* Right Column: Node Pipeline & Technical Details Bento Card */}
          <div className="lg:col-span-4 space-y-4">
            <div className={`p-6 rounded-3xl border ${
              darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              
              <div className="flex items-center gap-2 text-amber-400 text-[10px] font-black uppercase tracking-widest mb-2">
                <Layers className="w-4 h-4 text-amber-400" />
                <span>Grading Breakdown</span>
              </div>

              <h3 className={`text-xl font-black mb-2 tracking-tight font-rich ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {currentScene.title}
              </h3>

              <div className="space-y-2.5 text-xs mb-6">
                <div className={`p-3 rounded-2xl border ${
                  darkMode ? 'bg-[#08090A] border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}>
                  <span className="font-bold text-amber-400 block text-[10px] uppercase tracking-wider mb-0.5">Input Camera Profile</span>
                  {currentScene.camera}
                </div>

                <div className={`p-3 rounded-2xl border ${
                  darkMode ? 'bg-[#08090A] border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}>
                  <span className="font-bold text-yellow-400 block text-[10px] uppercase tracking-wider mb-0.5">Color Science Engine</span>
                  {currentScene.gradedWith}
                </div>

                <div className={`p-3 rounded-2xl border ${
                  darkMode ? 'bg-[#08090A] border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}>
                  <span className="font-bold text-emerald-400 block text-[10px] uppercase tracking-wider mb-0.5">Colorist Highlights</span>
                  {currentScene.highlight}
                </div>
              </div>

              {/* Benefits list */}
              <div className="space-y-2 mb-6 text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>Color Space Transform (CST)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>Natural Skin-Tone Balancing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>Kodak 2383 / Fuji Film Grain LUTs</span>
                </div>
              </div>

              <button
                id="color-grade-enquiry-btn"
                onClick={onEnquireColorGrade}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Get Color Grading (in ₹)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

