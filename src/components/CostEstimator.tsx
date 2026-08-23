import React, { useState } from 'react';
import { Calculator, Sparkles, Clock, Check, ArrowRight, Zap } from 'lucide-react';

interface CostEstimatorProps {
  darkMode: boolean;
  onApplyEstimate: (data: {
    service: string;
    scope: string;
    budget: string;
    urgency: string;
  }) => void;
}

type ProjectType = 'shorts' | 'album' | 'vlog' | 'colorgrade' | 'thumbnails' | 'photography';

export const CostEstimator: React.FC<CostEstimatorProps> = ({ darkMode, onApplyEstimate }) => {
  const [projectType, setProjectType] = useState<ProjectType>('shorts');
  const [quantity, setQuantity] = useState<number>(5);
  const [urgency, setUrgency] = useState<'express' | 'fast' | 'standard'>('standard');
  const [includeSoundFx, setIncludeSoundFx] = useState<boolean>(true);
  const [includeThumbnail, setIncludeThumbnail] = useState<boolean>(true);

  // Price calculations in INR (₹)
  const calculatePrice = () => {
    let basePriceINR = 0;
    let scopeDescription = '';

    switch (projectType) {
      case 'shorts':
        basePriceINR = quantity * 900;
        scopeDescription = `${quantity} Viral Shorts/Reels with DaVinci Color Grade`;
        break;
      case 'album':
        basePriceINR = quantity * 300;
        scopeDescription = `${quantity} Marriage Album Spreads (12x36 Print Ready)`;
        break;
      case 'vlog':
        basePriceINR = 3500 + (quantity > 1 ? (quantity - 1) * 2800 : 0);
        scopeDescription = `${quantity} Full YouTube/Travel Vlog Edit (8-15 mins)`;
        break;
      case 'colorgrade':
        basePriceINR = quantity * 1200;
        scopeDescription = `${quantity} DaVinci Resolve S-Log/RAW Scene Grades`;
        break;
      case 'thumbnails':
        basePriceINR = quantity * 600;
        scopeDescription = `${quantity} High-CTR Custom Thumbnails`;
        break;
      case 'photography':
        basePriceINR = 4500 + (quantity > 1 ? (quantity - 1) * 3000 : 0);
        scopeDescription = `${quantity} Photography Session Hours + Retouched Raw Photos`;
        break;
    }

    if (includeSoundFx && (projectType === 'shorts' || projectType === 'vlog')) {
      basePriceINR += 800;
    }

    if (includeThumbnail && (projectType === 'shorts' || projectType === 'vlog')) {
      basePriceINR += 800;
    }

    // Urgency multiplier
    if (urgency === 'express') {
      basePriceINR = Math.round(basePriceINR * 1.25);
    } else if (urgency === 'fast') {
      basePriceINR = Math.round(basePriceINR * 1.1);
    }

    return {
      inr: basePriceINR,
      scope: scopeDescription,
    };
  };

  const currentEstimate = calculatePrice();

  const getServiceName = () => {
    switch (projectType) {
      case 'shorts': return 'Video Editing (Shorts & Reels)';
      case 'album': return 'Marriage Album & Photobook Design';
      case 'vlog': return 'Cinematic Vlog / Longform Video Editing';
      case 'colorgrade': return 'DaVinci Resolve Color Grading';
      case 'thumbnails': return 'YouTube Thumbnails & Creatives';
      case 'photography': return 'Professional Photography';
    }
  };

  const getUrgencyText = () => {
    switch (urgency) {
      case 'express': return 'Express 24-Hour Delivery';
      case 'fast': return 'Fast 48-Hour Delivery';
      case 'standard': return 'Standard 3-5 Days';
    }
  };

  const handleApply = () => {
    onApplyEstimate({
      service: getServiceName(),
      scope: `${currentEstimate.scope}${includeSoundFx ? ' + Pro Sound FX' : ''}${includeThumbnail ? ' + Custom Thumbnail' : ''}`,
      budget: `₹${currentEstimate.inr.toLocaleString()} (Estimated Package)`,
      urgency: getUrgencyText(),
    });
  };

  return (
    <section id="calculator" className={`py-6 sm:py-8 border-t relative ${darkMode ? 'border-amber-500/20 bg-[#08090A]/90' : 'border-amber-200 bg-slate-50/70'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-4 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30">
            <Calculator className="w-3.5 h-3.5" />
            <span>Low Budget &amp; Transparent Indian Rupee Pricing</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight uppercase font-rich ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Interactive <span className="gold-text-gradient">Cost Estimator</span>
          </h2>
          <p className={`text-xs sm:text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Calculate instant estimated prices for your project scope. Low budgets welcomed, fast 24-hour turnaround available.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          
          {/* Controls Bento Column */}
          <div className={`lg:col-span-7 p-6 sm:p-8 rounded-3xl border ${
            darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            
            {/* 1. Select Service Type */}
            <div className="mb-6">
              <label className="text-[10px] font-black uppercase tracking-widest text-amber-400 block mb-3">
                1. Select Service Category
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: 'shorts', label: 'Shorts & Reels' },
                  { id: 'album', label: 'Marriage Album' },
                  { id: 'vlog', label: 'Vlog / Video Edit' },
                  { id: 'colorgrade', label: 'Color Grading' },
                  { id: 'thumbnails', label: 'Thumbnails' },
                  { id: 'photography', label: 'Photography' },
                ].map(type => (
                  <button
                    key={type.id}
                    id={`calc-service-${type.id}`}
                    onClick={() => setProjectType(type.id as ProjectType)}
                    className={`px-3 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all duration-300 transform active:scale-95 cursor-pointer text-center ${
                      projectType === type.id
                        ? 'bg-gradient-to-r from-amber-500 to-yellow-500 border-amber-400 text-slate-950 font-black shadow-lg shadow-amber-500/20 scale-[1.03]'
                        : darkMode
                        ? 'bg-[#0F1012] border-slate-800 text-slate-300 hover:border-amber-500/40 hover:text-amber-300'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Quantity Slider */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-amber-400">
                  2. Project Volume / Quantity
                </label>
                <span className="text-sm font-black text-amber-400">
                  {quantity} {projectType === 'album' ? 'Spreads' : projectType === 'photography' ? 'Hours' : 'Units'}
                </span>
              </div>
              <input
                id="calc-quantity-slider"
                type="range"
                min={projectType === 'album' ? 10 : 1}
                max={projectType === 'album' ? 60 : 25}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-bold mt-1">
                <span>{projectType === 'album' ? '10 Spreads' : '1 Item'}</span>
                <span>{projectType === 'album' ? '60 Spreads' : '25 Items'}</span>
              </div>
            </div>

            {/* 3. Turnaround Urgency */}
            <div className="mb-6">
              <label className="text-[10px] font-black uppercase tracking-widest text-amber-400 block mb-3">
                3. Turnaround Delivery Speed
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'standard', label: 'Standard (3-5 Days)', badge: 'Best Value' },
                  { id: 'fast', label: 'Fast (48 Hours)', badge: '+10%' },
                  { id: 'express', label: 'Express (24 Hours)', badge: '+25%' },
                ].map(speed => (
                  <button
                    key={speed.id}
                    id={`calc-urgency-${speed.id}`}
                    onClick={() => setUrgency(speed.id as any)}
                    className={`p-3 rounded-xl border text-center transition-all duration-300 transform active:scale-95 cursor-pointer ${
                      urgency === speed.id
                        ? 'border-amber-400 bg-amber-500/15 text-amber-300 font-black shadow-md scale-[1.02]'
                        : darkMode
                        ? 'border-slate-800 bg-[#0F1012] text-slate-400 hover:border-slate-700'
                        : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <div className="text-xs font-bold uppercase tracking-wider">{speed.label.split('(')[0]}</div>
                    <div className="text-[10px] text-slate-400 font-semibold">({speed.label.split('(')[1]}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Add-on check boxes */}
            {(projectType === 'shorts' || projectType === 'vlog') && (
              <div className="space-y-2.5 pt-3 border-t border-slate-800">
                <label className="flex items-center gap-2.5 cursor-pointer text-xs">
                  <input
                    type="checkbox"
                    checked={includeSoundFx}
                    onChange={(e) => setIncludeSoundFx(e.target.checked)}
                    className="rounded accent-amber-500 w-4 h-4"
                  />
                  <span className={`font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    Include Bespoke Sound Design &amp; Sonic FX Pack (+ ₹800)
                  </span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer text-xs">
                  <input
                    type="checkbox"
                    checked={includeThumbnail}
                    onChange={(e) => setIncludeThumbnail(e.target.checked)}
                    className="rounded accent-amber-500 w-4 h-4"
                  />
                  <span className={`font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    Include High-CTR Custom YouTube Thumbnail (+ ₹800)
                  </span>
                </label>
              </div>
            )}

          </div>

          {/* Result Card Bento Column */}
          <div className="lg:col-span-5">
            <div className={`p-6 sm:p-8 rounded-3xl border shadow-xl relative overflow-hidden ${
              darkMode ? 'bg-slate-900/95 border-amber-500/30' : 'bg-white border-amber-200 shadow-amber-500/5'
            }`}>
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/30 mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Transparent Estimated Quote (in ₹)</span>
              </div>

              <div className="mb-4">
                <div className="text-3xl sm:text-4xl font-black text-amber-400 font-rich">
                  ₹{currentEstimate.inr.toLocaleString()}
                </div>
                <div className="text-xs text-slate-400 mt-1 font-medium">
                  *Transparent Indian Rupee pricing. Custom retainers available for long-term creators.
                </div>
              </div>

              <div className={`p-4 rounded-2xl border space-y-2.5 text-xs mb-6 ${
                darkMode ? 'bg-[#08090A] border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
              }`}>
                <div className="flex justify-between">
                  <span className="text-slate-400">Service:</span>
                  <span className="font-bold">{getServiceName()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Selected Scope:</span>
                  <span className="font-semibold text-right max-w-[200px]">{currentEstimate.scope}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Turnaround:</span>
                  <span className="font-bold text-emerald-400">{getUrgencyText()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Color Grading:</span>
                  <span className="font-bold text-amber-400">DaVinci Resolve Included</span>
                </div>
              </div>

              <button
                id="apply-estimator-to-enquiry-btn"
                onClick={handleApply}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Send This Scope in Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="mt-4 text-center text-xs text-slate-400">
                Forwarded straight to Mahi's inbox: <strong className="text-amber-400">kollamahesh1478@gmail.com</strong>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};


