import React from 'react';
import { Film, Camera, Sparkles, BookOpen, Image, Check, ArrowRight, Clock } from 'lucide-react';
import { servicesData } from '../data/portfolioData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  darkMode: boolean;
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ darkMode, onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Film':
        return <Film className="w-5 h-5 text-amber-400" />;
      case 'Camera':
        return <Camera className="w-5 h-5 text-amber-300" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-yellow-400" />;
      case 'Image':
        return <Image className="w-5 h-5 text-amber-400" />;
      default:
        return <Film className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="services" className={`py-6 sm:py-8 border-t relative ${darkMode ? 'border-amber-500/20 bg-[#08090A]/90' : 'border-amber-200 bg-slate-100/70'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-5 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30">
            <span>Specialized Creative Services (in ₹)</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight uppercase font-rich ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Professional Post-Production &amp; <span className="gold-text-gradient">Creative Solutions</span>
          </h2>
          <p className={`text-xs sm:text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Crafted for content creators, wedding couples, and filmmakers across India. Top-tier quality with flexible low-budget pricing and rapid delivery.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicesData.map((service: ServiceItem) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className={`rounded-3xl border p-6 flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] ${
                darkMode
                  ? 'bg-slate-900/90 border-slate-800/90 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-black/70'
                  : 'bg-white border-slate-200 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/5'
              }`}
            >
              <div>
                {/* Header Row with Icon & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-2xl ${darkMode ? 'bg-amber-500/10 border border-amber-500/20' : 'bg-amber-50 border border-amber-200'}`}>
                    {getIcon(service.iconName)}
                  </div>
                  {service.badge && (
                    <span className="text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider bg-amber-500/15 text-amber-300 border border-amber-500/30">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h3 className={`text-xl font-black mb-1 tracking-tight font-rich ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {service.title}
                </h3>
                <p className="text-xs font-semibold text-amber-400 mb-3">
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className={`text-xs leading-relaxed mb-5 font-normal ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {service.description}
                </p>

                {/* Software Pills */}
                <div className="mb-5">
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">
                    Tools &amp; Pipeline
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {service.software.map((tool) => (
                      <span
                        key={tool}
                        className={`text-[10px] px-2 py-0.5 rounded-md font-bold border ${
                          darkMode ? 'bg-slate-800 text-slate-300 border-slate-700' : 'bg-slate-100 text-slate-700 border-slate-200'
                        }`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Feature Bullet points */}
                <div className="space-y-2 mb-6">
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">
                    Key Highlights
                  </div>
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span className={`font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Meta & Action */}
              <div className={`pt-4 border-t ${darkMode ? 'border-slate-800' : 'border-slate-100'}`}>
                <div className="flex items-center justify-between text-xs mb-3">
                  <div className="flex items-center gap-1 text-emerald-400 font-bold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{service.turnaround}</span>
                  </div>
                  <div className="text-slate-400 font-semibold text-xs">
                    From <span className={`font-black text-amber-400 font-rich text-sm`}>{service.startingPrice}</span>
                  </div>
                </div>

                <button
                  id={`book-service-${service.id}`}
                  onClick={() => onSelectService(service.title)}
                  className={`w-full py-2.5 rounded-xl text-xs font-black uppercase tracking-wider border transition-all flex items-center justify-center gap-1.5 cursor-pointer group ${
                    darkMode
                      ? 'bg-slate-800 hover:bg-gradient-to-r hover:from-amber-500 hover:to-yellow-500 hover:text-slate-950 text-slate-200 border-slate-700 hover:border-amber-400'
                      : 'bg-slate-100 hover:bg-gradient-to-r hover:from-amber-500 hover:to-yellow-500 hover:text-slate-950 text-slate-800 border-slate-200 hover:border-amber-400'
                  }`}
                >
                  <span>Enquire for {service.title.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};


