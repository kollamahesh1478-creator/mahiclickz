import React, { useState, useRef } from 'react';
import { Film, Camera, BookOpen, Image, Sparkles, Play, Pause, Volume2, VolumeX, X, Clock, Monitor, Wrench, Send, ExternalLink, ArrowRight, Zap, CheckCircle } from 'lucide-react';
import { portfolioItems } from '../data/portfolioData';
import { PortfolioItem } from '../types';

interface PortfolioGalleryProps {
  darkMode: boolean;
  onEnquireItem: (itemTitle: string) => void;
}

type FilterCategory = 'all' | 'videos' | 'vlogs' | 'photography' | 'albums' | 'thumbnails';

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ darkMode, onEnquireItem }) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [hoveredVideoId, setHoveredVideoId] = useState<string | null>(null);
  const [mutedStates, setMutedStates] = useState<Record<string, boolean>>({});
  const [videoErrorMap, setVideoErrorMap] = useState<Record<string, boolean>>({});

  const filters: Array<{ id: FilterCategory; label: string; icon: React.ReactNode }> = [
    { id: 'all', label: 'All Creative Works', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { id: 'videos', label: 'Shorts & Reels', icon: <Film className="w-3.5 h-3.5" /> },
    { id: 'vlogs', label: 'Vlogs & Short Films', icon: <Play className="w-3.5 h-3.5" /> },
    { id: 'photography', label: 'Photography', icon: <Camera className="w-3.5 h-3.5" /> },
    { id: 'albums', label: 'Marriage Albums', icon: <BookOpen className="w-3.5 h-3.5" /> },
    { id: 'thumbnails', label: 'Thumbnails & Creatives', icon: <Image className="w-3.5 h-3.5" /> },
  ];

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  const toggleMute = (e: React.MouseEvent, itemId: string) => {
    e.stopPropagation();
    setMutedStates(prev => ({
      ...prev,
      [itemId]: prev[itemId] === undefined ? false : !prev[itemId]
    }));
  };

  return (
    <section id="portfolio" className={`py-6 sm:py-8 border-t relative ${darkMode ? 'border-amber-500/20 bg-[#08090A]/90' : 'border-amber-200 bg-slate-50/70'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Prominent Studio Headline */}
        <div className="text-center max-w-3xl mx-auto mb-4 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>4K 60FPS Production Showcase</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight uppercase font-rich ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Featured Works &amp; <span className="gold-text-gradient">Video Reel</span>
          </h2>
          <p className={`text-xs sm:text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            High-refresh rate video playback, DaVinci Resolve color grades, luxury marriage photobooks, and viral retention edits.
          </p>
        </div>

        {/* Filter Tabs */}
        {/* Category Filter Pills with Smooth Inner Tab Micro-Animations */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
          {filters.map(filter => (
            <button
              key={filter.id}
              id={`portfolio-filter-${filter.id}`}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 transform active:scale-95 cursor-pointer border ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-500 border-amber-400 text-slate-950 shadow-lg shadow-amber-500/20 font-black scale-105'
                  : darkMode
                  ? 'bg-slate-900/90 border-slate-800 text-slate-300 hover:text-amber-300 hover:border-amber-500/40 hover:bg-slate-800'
                  : 'bg-white border-slate-200 text-slate-700 hover:text-slate-950 hover:bg-slate-100 shadow-xs'
              }`}
            >
              {filter.icon}
              <span>{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Portfolio Bento Grid - Zero Empty Space Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {filteredItems.map(item => {
            const hasVideo = Boolean(item.videoUrl && !videoErrorMap[item.id]);
            const isHovered = hoveredVideoId === item.id;
            const isMuted = mutedStates[item.id] !== false; // default muted for autoplay safety

            return (
              <div
                key={item.id}
                id={`portfolio-card-${item.id}`}
                onClick={() => setSelectedItem(item)}
                onMouseEnter={() => setHoveredVideoId(item.id)}
                onMouseLeave={() => setHoveredVideoId(null)}
                className={`group rounded-3xl overflow-hidden border cursor-pointer flex flex-col justify-between transition-all duration-300 hover:scale-[1.015] ${
                  darkMode
                    ? 'bg-slate-900/90 border-slate-800/90 hover:border-amber-500/60 hover:shadow-2xl hover:shadow-amber-500/10'
                    : 'bg-white border-slate-200 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/10'
                }`}
              >
                <div>
                  {/* Media Preview Container with In-Card Video Player */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                    
                    {/* Live Video Preview on Hover/Focus or Video Tag */}
                    {hasVideo ? (
                      <div className="relative w-full h-full">
                        <video
                          src={item.videoUrl}
                          poster={item.imageUrl}
                          playsInline
                          autoPlay
                          muted={isMuted}
                          loop
                          preload="metadata"
                          onError={() => {
                            setVideoErrorMap(prev => ({ ...prev, [item.id]: true }));
                          }}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />

                        {/* Fast Resolution & FPS Badge */}
                        <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-slate-950/90 backdrop-blur-md text-[10px] font-black uppercase tracking-wider text-amber-400 border border-amber-500/40 flex items-center gap-1 shadow-md">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                          <span>60 FPS HD</span>
                        </div>

                        {/* Mute / Unmute Toggle Button on Card */}
                        <button
                          onClick={(e) => toggleMute(e, item.id)}
                          title={isMuted ? 'Click to unmute video audio' : 'Click to mute video'}
                          className="absolute bottom-3 left-3 p-1.5 rounded-lg bg-slate-950/85 backdrop-blur-md text-amber-400 border border-amber-500/30 hover:bg-amber-500 hover:text-slate-950 transition-colors z-20 cursor-pointer shadow-md"
                        >
                          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    ) : (
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    
                    {/* Category Pill */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/90 backdrop-blur-md text-[10px] font-black uppercase tracking-wider text-amber-400 border border-amber-500/30 shadow-md">
                      {item.categoryLabel}
                    </div>

                    {/* Quick turnaround tag */}
                    <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-slate-950/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-emerald-400 border border-emerald-500/30 flex items-center gap-1 shadow-md">
                      <Clock className="w-3 h-3" />
                      <span>{item.specs.turnaround}</span>
                    </div>

                    {/* Visible Theater View Indicator on Card */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                      <div className="px-3 py-1 rounded-xl bg-slate-950/85 text-amber-400 text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 border border-amber-500/40 shadow-xl backdrop-blur-md">
                        <Play className="w-3 h-3 fill-amber-400" />
                        <span>Theater View</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Info */}
                  <div className="p-5">
                    <h3 className={`text-base font-black tracking-tight font-rich mb-1 group-hover:text-amber-400 transition-colors ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      {item.title}
                    </h3>
                    <p className="text-xs font-bold text-amber-400 mb-2">
                      {item.subtitle}
                    </p>
                    <p className={`text-xs line-clamp-2 leading-relaxed mb-4 font-normal ${
                      darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {item.description}
                    </p>

                    {/* Software & Pipeline Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.software.map(sw => (
                        <span
                          key={sw}
                          className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${
                            darkMode ? 'bg-slate-800 text-slate-300 border-slate-700/80' : 'bg-slate-100 text-slate-700 border-slate-200'
                          }`}
                        >
                          {sw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className={`px-5 py-3.5 border-t flex items-center justify-between text-xs font-black uppercase tracking-wider text-amber-400 ${
                  darkMode ? 'border-slate-800/80 bg-slate-950/60' : 'border-slate-100 bg-slate-50'
                }`}>
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>View Specifications &amp; Reel</span>
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Item Detail Modal - Cinematic Studio Cinema Theater */}
      {selectedItem && (
        <div
          id="portfolio-detail-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className={`relative w-full max-w-4xl rounded-3xl overflow-hidden border shadow-2xl max-h-[92vh] flex flex-col ${
              darkMode ? 'bg-slate-900 border-amber-500/30 text-white' : 'bg-white border-slate-200 text-slate-900'
            }`}
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className={`p-4 border-b flex items-center justify-between ${
              darkMode ? 'border-slate-800 bg-[#08090A]' : 'border-slate-200 bg-slate-50'
            }`}>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-amber-500 text-slate-950">
                  {selectedItem.categoryLabel}
                </span>
                <span className="text-xs text-amber-400 font-bold hidden sm:inline">
                  Client: {selectedItem.specs.clientType}
                </span>
              </div>
              <button
                id="close-portfolio-modal-btn"
                onClick={() => setSelectedItem(null)}
                className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                  darkMode ? 'border-slate-800 hover:bg-slate-800 text-slate-300' : 'border-slate-200 hover:bg-slate-200 text-slate-700'
                }`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body with Smooth Scroll */}
            <div className="overflow-y-auto p-5 sm:p-6 space-y-6">
              
              {/* Media Section: High-Resolution HTML5 Video Player or Visual Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-black aspect-video flex items-center justify-center border border-slate-800 shadow-2xl">
                {selectedItem.videoUrl ? (
                  <video
                    src={selectedItem.videoUrl}
                    poster={selectedItem.imageUrl}
                    controls
                    autoPlay
                    playsInline
                    preload="auto"
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <img
                    src={selectedItem.imageUrl}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-black mb-1 font-rich">{selectedItem.title}</h3>
                <p className="text-xs sm:text-sm font-bold text-amber-400 mb-3">{selectedItem.subtitle}</p>
                <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  {selectedItem.description}
                </p>
              </div>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className={`p-3.5 rounded-2xl border ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="flex items-center gap-1.5 text-[10px] text-amber-400 font-black uppercase tracking-wider mb-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Turnaround</span>
                  </div>
                  <div className="text-xs font-bold">{selectedItem.specs.turnaround}</div>
                </div>

                <div className={`p-3.5 rounded-2xl border ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="flex items-center gap-1.5 text-[10px] text-indigo-400 font-black uppercase tracking-wider mb-1">
                    <Monitor className="w-3.5 h-3.5" />
                    <span>Aspect Ratio</span>
                  </div>
                  <div className="text-xs font-bold">{selectedItem.specs.aspectRatio}</div>
                </div>

                <div className={`p-3.5 rounded-2xl border ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-black uppercase tracking-wider mb-1">
                    <Wrench className="w-3.5 h-3.5" />
                    <span>Core Software</span>
                  </div>
                  <div className="text-xs font-bold">{selectedItem.software.join(', ')}</div>
                </div>

                <div className={`p-3.5 rounded-2xl border ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="flex items-center gap-1.5 text-[10px] text-amber-400 font-black uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Color Pipeline</span>
                  </div>
                  <div className="text-xs font-bold truncate">{selectedItem.specs.tools}</div>
                </div>
              </div>

              {/* Action Buttons inside Modal */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  id="modal-request-similar-btn"
                  onClick={() => {
                    const title = selectedItem.title;
                    setSelectedItem(null);
                    onEnquireItem(title);
                  }}
                  className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Enquire for Similar Project (in ₹)</span>
                </button>

                <a
                  href={`mailto:kollamahesh1478@gmail.com?subject=Enquiry%20Regarding%20${encodeURIComponent(selectedItem.title)}&body=Hi%20Mahi,%0A%0AI%20saw%20your%20portfolio%20project%20"${encodeURIComponent(selectedItem.title)}"%20and%20would%20like%20to%20hire%20you%20for%20a%20similar%20project.%0A%0AMy%20details:%0A- Name:%0A- Budget in INR (₹):%0A- Deadline:%0A`}
                  className={`px-5 py-3.5 rounded-xl border font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors ${
                    darkMode ? 'border-slate-800 bg-slate-950 hover:bg-slate-800 text-slate-300' : 'border-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-800'
                  }`}
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Direct Email</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};


