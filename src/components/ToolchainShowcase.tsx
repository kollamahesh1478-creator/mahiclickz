import React from 'react';
import { Film, Monitor, Sliders, Cpu, Camera, CheckCircle2, Sparkles, Layers, Aperture, Video, Palette, Image } from 'lucide-react';

interface ToolchainShowcaseProps {
  darkMode: boolean;
}

export const ToolchainShowcase: React.FC<ToolchainShowcaseProps> = ({ darkMode }) => {
  const tools = [
    {
      name: 'DaVinci Resolve Studio 19',
      category: 'Color & Mastering',
      role: 'Cinematic Color Grading & Fairlight Audio',
      desc: '32-bit float color processing, ACES & S-Log/RAW Color Space Transforms, custom nodal pipelines, and Kodak 2383 film grain print emulation.',
      tag: 'Primary Grading Suite',
      badgeColor: 'from-amber-500 to-yellow-500 text-slate-950',
      icon: <Sliders className="w-5 h-5 text-amber-400" />,
      specs: ['32-Bit Float Processing', 'ACES & S-Log3 CST', 'Kodak 2383 Film Print'],
    },
    {
      name: 'Adobe Premiere Pro 2025',
      category: 'Timeline Assembly',
      role: 'Multi-Cam Sequencing, Vlogs & Pacing',
      desc: 'Seamless multi-track editing, dialogue sync, speech-to-text timing, dynamic link with After Effects, and high-bitrate 4K exports.',
      tag: 'Core Video Assembly',
      badgeColor: 'from-purple-500 to-indigo-600 text-white',
      icon: <Video className="w-5 h-5 text-purple-400" />,
      specs: ['Multi-Cam Live Switch', 'High Bitrate 4K UHD', 'Dynamic Link Pipeline'],
    },
    {
      name: 'Adobe After Effects 2025',
      category: 'Motion Design',
      role: 'Kinetic Typography, VFX & Transitions',
      desc: '3D camera tracking, custom kinetic text animations, lower thirds, seamless speed ramping, and motion graphics for creators.',
      tag: 'VFX & Kinetic Titles',
      badgeColor: 'from-indigo-500 to-blue-600 text-white',
      icon: <Layers className="w-5 h-5 text-indigo-400" />,
      specs: ['3D Camera Tracking', 'Kinetic Typography', 'Seamless Speed Ramps'],
    },
    {
      name: 'CapCut Pro (Desktop Studio)',
      category: 'Vertical Viral Pipeline',
      role: 'High-Retention Shorts & Reels Pacing',
      desc: 'Fast-turnaround vertical short edits, animated sound effect cues, pop-up typography, trendy zoom cuts, and auto-captions for Instagram & YouTube.',
      tag: 'Viral Short Form',
      badgeColor: 'from-cyan-500 to-teal-500 text-slate-950',
      icon: <Film className="w-5 h-5 text-cyan-400" />,
      specs: ['Animated SFX Cues', 'High-Retention Pacing', '9:16 Vertical Export'],
    },
    {
      name: 'Adobe Photoshop 2025',
      category: 'Photobooks & Design',
      role: 'Marriage Albums & High-CTR Thumbnails',
      desc: '12x36 spread layout design, frequency separation skin retouching, jewelry highlight shine, custom typography, and thumbnail graphics.',
      tag: 'Album & Graphics',
      badgeColor: 'from-blue-600 to-cyan-600 text-white',
      icon: <Image className="w-5 h-5 text-blue-400" />,
      specs: ['12x36 Spread Canvas', 'Frequency Separation', 'High-CTR Thumbnails'],
    },
    {
      name: 'Adobe Lightroom Classic',
      category: 'Batch Photo Curation',
      role: 'RAW Photo Color Tones & Skin Polish',
      desc: 'High-volume RAW event curation, tone curve balancing, selective mask brushes, film grain texture, and high-res print preparation.',
      tag: 'RAW Development',
      badgeColor: 'from-sky-500 to-blue-700 text-white',
      icon: <Camera className="w-5 h-5 text-sky-400" />,
      specs: ['16-Bit RAW Processing', 'Tone Curve Balancing', 'Batch Color Sync'],
    },
    {
      name: 'Dehancer Pro Film Suite',
      category: 'Analog Emulation',
      role: 'Real Film Grain, Halation & Bloom',
      desc: 'Photochemical analog film profile emulation, authentic gate weave, optical halation, film breathe, and organic 35mm texture.',
      tag: 'Film Look Emulation',
      badgeColor: 'from-amber-600 to-orange-600 text-white',
      icon: <Aperture className="w-5 h-5 text-amber-400" />,
      specs: ['Photochemical Halation', '35mm Film Grain', 'Optical Gate Weave'],
    },
    {
      name: 'Adobe InDesign & Illustrator',
      category: 'Vector & Print',
      role: 'Luxury Photobooks & Brand Typography',
      desc: 'Multi-page print-ready typography, luxury wedding monogram design, CMYK color profiles, and 300 DPI lab-ready PDF exports.',
      tag: 'Print & Layout',
      badgeColor: 'from-rose-500 to-pink-600 text-white',
      icon: <Palette className="w-5 h-5 text-rose-400" />,
      specs: ['300 DPI Lab Ready', 'CMYK Print Profiles', 'Monogram Design'],
    }
  ];

  return (
    <section id="software-engine" className={`py-4 sm:py-6 border-t relative ${darkMode ? 'border-amber-500/20 bg-[#08090A]/95' : 'border-amber-200 bg-slate-50/80'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-4 space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30">
            <Cpu className="w-3.5 h-3.5" />
            <span>Professional Software &amp; Hardware Engine</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight uppercase font-rich ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Mastered with <span className="gold-text-gradient">Industry-Standard Software</span>
          </h2>
          <p className={`text-xs sm:text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Every cut, color grade, and photobook spread is engineered using calibrated workstation suites. No generic automated presets.
          </p>
        </div>

        {/* Software Cards Grid - Always 100% Visible with Crystal Clear Software Names */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              id={`software-card-${idx}`}
              className={`p-5 rounded-3xl border flex flex-col justify-between transition-all duration-300 ${
                darkMode 
                  ? 'bg-slate-900/90 border-slate-800 hover:border-amber-500/50 shadow-lg shadow-black/40' 
                  : 'bg-white border-slate-200 shadow-sm hover:border-amber-400'
              }`}
            >
              <div>
                {/* Header with Software Icon & Tag */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className={`p-2 rounded-xl border ${darkMode ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-100 border-slate-200'}`}>
                    {tool.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/30">
                    {tool.tag}
                  </span>
                </div>

                {/* Software Name - Prominent, Bold & Visible at all times */}
                <h3 className={`text-base font-black mb-1 tracking-tight font-rich ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {tool.name}
                </h3>
                
                {/* Software Role / Specialty */}
                <div className="text-xs font-bold text-amber-400 mb-2.5">
                  {tool.role}
                </div>

                {/* Description */}
                <p className={`text-xs leading-relaxed mb-4 font-medium ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {tool.desc}
                </p>
              </div>

              {/* Specs Pills List - Always Visible */}
              <div className={`pt-3 border-t space-y-1.5 ${darkMode ? 'border-slate-800' : 'border-slate-100'}`}>
                <div className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-1">
                  Key Capabilities
                </div>
                <div className="flex flex-wrap gap-1">
                  {tool.specs.map((spec, sIdx) => (
                    <span
                      key={sIdx}
                      className={`text-[10px] px-2 py-0.5 rounded-md font-bold border ${
                        darkMode 
                          ? 'bg-[#08090A] text-slate-300 border-slate-800' 
                          : 'bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};


