import React from 'react';
import { packageTiers } from '../data/portfolioData';
import { Check, Sparkles, ArrowRight, Zap, Clock } from 'lucide-react';

interface PackagesSectionProps {
  darkMode: boolean;
  onSelectPackage: (packageName: string, price: string, turnaround: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ darkMode, onSelectPackage }) => {
  return (
    <section id="packages" className={`py-6 sm:py-8 border-t relative ${darkMode ? 'border-amber-500/20 bg-[#08090A]/90' : 'border-amber-200 bg-slate-50/70'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-5 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30">
            <Zap className="w-3.5 h-3.5" />
            <span>Curated Creative Bundles (in ₹)</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight uppercase font-rich ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Budget-Friendly <span className="gold-text-gradient">Production Packages</span>
          </h2>
          <p className={`text-xs sm:text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Transparent Indian Rupee pricing with zero hidden fees. Ready for individual creators, wedding agencies, and commercial brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {packageTiers.map((pkg, idx) => (
            <div
              key={idx}
              id={`package-tier-${idx}`}
              className={`rounded-3xl border p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-300 ${
                pkg.recommended
                  ? darkMode
                    ? 'bg-slate-900/95 border-amber-500 shadow-2xl shadow-amber-500/15 scale-[1.02]'
                    : 'bg-white border-amber-500 shadow-2xl shadow-amber-500/15 scale-[1.02]'
                  : darkMode
                  ? 'bg-slate-900/90 border-slate-800/90 hover:border-amber-500/40'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              {pkg.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow-lg flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Most Popular Choice</span>
                </div>
              )}

              <div>
                <div className="text-[10px] font-black uppercase tracking-widest text-amber-400 mb-1">
                  {pkg.target}
                </div>
                <h3 className={`text-xl font-black mb-2 tracking-tight font-rich ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {pkg.name}
                </h3>
                <p className={`text-xs leading-relaxed mb-6 font-normal ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {pkg.description}
                </p>

                <div className="mb-4">
                  <div className="text-3xl sm:text-4xl font-black text-amber-400 font-rich">{pkg.price}</div>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold mt-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{pkg.turnaround}</span>
                  </div>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-slate-800 mb-8">
                  {pkg.includes.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs">
                      <div className="w-4 h-4 rounded-md bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className={`font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                id={`select-package-btn-${idx}`}
                onClick={() => onSelectPackage(pkg.name, pkg.price, pkg.turnaround)}
                className={`w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all ${
                  pkg.recommended
                    ? 'bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-yellow-400 text-slate-950 shadow-lg shadow-amber-500/25 hover:scale-[1.01]'
                    : darkMode
                    ? 'bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-amber-300'
                    : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                }`}
              >
                <span>Select {pkg.name.split(' ')[0]} Pack (in ₹)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};


