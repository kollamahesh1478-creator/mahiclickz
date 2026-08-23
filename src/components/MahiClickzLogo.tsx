import React, { useState } from 'react';
import { Camera } from 'lucide-react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'badge';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  enablePhotoClickIntro?: boolean;
}

export const MahiClickzLogo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
  enablePhotoClickIntro = false,
}) => {
  const [isClicking, setIsClicking] = useState(false);
  const [showFlash, setShowFlash] = useState(false);
  const [shutterBladeState, setShutterBladeState] = useState<'open' | 'closing' | 'closed' | 'reopening'>('open');
  const [focusLocked, setFocusLocked] = useState(false);

  const sizeMap = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-20 sm:h-24 md:h-28',
  };

  // Trigger Camera Shutter Visual Animation (100% Silent)
  const triggerPhotoClick = () => {
    if (isClicking) return;
    setIsClicking(true);
    setFocusLocked(true);

    setTimeout(() => {
      setShutterBladeState('closing');
    }, 150);

    setTimeout(() => {
      setShowFlash(true);
      setShutterBladeState('closed');
    }, 220);

    setTimeout(() => {
      setShowFlash(false);
      setShutterBladeState('reopening');
    }, 380);

    setTimeout(() => {
      setShutterBladeState('open');
      setIsClicking(false);
      setFocusLocked(false);
    }, 600);
  };

  if (variant === 'icon') {
    return (
      <div 
        onClick={triggerPhotoClick}
        title="Click to snap photo"
        className={`relative inline-flex items-center justify-center cursor-pointer group select-none ${className}`}
      >
        {/* Flash Flare */}
        {showFlash && (
          <div className="absolute inset-0 rounded-full bg-amber-200/90 blur-md z-30 animate-ping pointer-events-none" />
        )}

        <svg
          viewBox="540 80 320 230"
          className="w-10 h-10 drop-shadow-[0_4px_12px_rgba(212,175,55,0.4)] transition-transform group-hover:scale-110 group-active:scale-95 duration-200"
        >
          <defs>
            <linearGradient id="iconGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFE885" />
              <stop offset="35%" stopColor="#D4AF37" />
              <stop offset="70%" stopColor="#FFF2A8" />
              <stop offset="100%" stopColor="#996515" />
            </linearGradient>
            <radialGradient id="iconLensGrad" cx="45%" cy="45%" r="60%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="50%" stopColor="#0284C7" />
              <stop offset="85%" stopColor="#4338CA" />
              <stop offset="100%" stopColor="#030712" />
            </radialGradient>
          </defs>
          <path d="M 585 95 L 635 95 L 640 105 L 580 105 Z" fill="url(#iconGoldGrad)" />
          <path
            d="M 560 140 Q 560 120 580 120 L 645 120 Q 660 120 670 100 Q 675 90 690 90 L 770 90 Q 785 90 790 100 Q 800 120 815 120 L 820 120 Q 840 120 840 140 L 840 270 Q 840 290 820 290 L 760 290 M 640 290 L 580 290 Q 560 290 560 270 Z"
            fill="none"
            stroke="url(#iconGoldGrad)"
            strokeWidth="11"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="700" cy="205" r="88" fill="#0B0D10" stroke="url(#iconGoldGrad)" strokeWidth="10" />
          <circle cx="700" cy="205" r="62" fill="url(#iconLensGrad)" />
          <circle cx="700" cy="205" r="30" fill="#020617" stroke="#38BDF8" strokeWidth="3" />
          <circle cx="700" cy="205" r="12" fill="#0284C7" />
          <circle cx="700" cy="205" r="4" fill="#FFFFFF" />
        </svg>
      </div>
    );
  }

  return (
    <div className={`relative inline-flex flex-col items-center select-none ${className}`}>
      
      {/* Interactive Camera Shutter Trigger Container */}
      <div 
        id="camera-photo-click-wrapper"
        onClick={triggerPhotoClick}
        title="Click to Trigger Photo Shutter Snapshot!"
        className="relative inline-flex items-center justify-center cursor-pointer group px-4 py-2 rounded-2xl transition-all duration-300 hover:scale-[1.01] active:scale-[0.98]"
      >
        
        {/* Full-Frame Cinematic Studio Flash Overlay */}
        {showFlash && (
          <div className="absolute -inset-8 bg-gradient-to-r from-amber-200/90 via-white to-amber-100/90 rounded-3xl blur-xl z-50 pointer-events-none transition-opacity duration-150 animate-in fade-in zoom-in-95" />
        )}

        {/* Viewfinder Corner Framing Brackets */}
        <div className="absolute inset-0 pointer-events-none transition-opacity duration-300">
          {/* Top-Left Bracket */}
          <div className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 transition-colors duration-200 ${
            focusLocked ? 'border-emerald-400' : 'border-amber-500/50 group-hover:border-amber-400'
          }`} />
          {/* Top-Right Bracket */}
          <div className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 transition-colors duration-200 ${
            focusLocked ? 'border-emerald-400' : 'border-amber-500/50 group-hover:border-amber-400'
          }`} />
          {/* Bottom-Left Bracket */}
          <div className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 transition-colors duration-200 ${
            focusLocked ? 'border-emerald-400' : 'border-amber-500/50 group-hover:border-amber-400'
          }`} />
          {/* Bottom-Right Bracket */}
          <div className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 transition-colors duration-200 ${
            focusLocked ? 'border-emerald-400' : 'border-amber-500/50 group-hover:border-amber-400'
          }`} />
        </div>

        {/* Camera Reticle Target / Focus Box on the Lens */}
        <div 
          className={`absolute right-6 sm:right-9 top-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-dashed transition-all duration-300 pointer-events-none flex items-center justify-center ${
            focusLocked 
              ? 'border-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8)] scale-95 rotate-45' 
              : 'border-amber-500/40 group-hover:border-amber-400 group-hover:rotate-12 scale-100'
          }`}
        >
          <div className={`w-2 h-2 rounded-full transition-colors ${focusLocked ? 'bg-emerald-400 animate-ping' : 'bg-amber-400/70'}`} />
        </div>

        {/* Master 3D Vector SVG Logo & Camera */}
        <svg
          viewBox="0 0 850 400"
          className={`${sizeMap[size]} w-auto drop-shadow-[0_4px_22px_rgba(212,175,55,0.4)] transition-all duration-300 ${
            isClicking ? 'scale-[0.98] brightness-125' : 'scale-100'
          }`}
        >
          <defs>
            <linearGradient id="compGoldBevel" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFE885" />
              <stop offset="25%" stopColor="#E2B13C" />
              <stop offset="50%" stopColor="#FFF2A8" />
              <stop offset="75%" stopColor="#B28228" />
              <stop offset="100%" stopColor="#E5BA4B" />
            </linearGradient>

            <linearGradient id="compGoldBorder" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFE57F" />
              <stop offset="35%" stopColor="#D4AF37" />
              <stop offset="70%" stopColor="#FFF0A0" />
              <stop offset="100%" stopColor="#996515" />
            </linearGradient>

            <linearGradient id="compChromeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="25%" stopColor="#E2E8F0" />
              <stop offset="55%" stopColor="#94A3B8" />
              <stop offset="80%" stopColor="#CBD5E1" />
              <stop offset="100%" stopColor="#64748B" />
            </linearGradient>

            <radialGradient id="compLensGlass" cx="45%" cy="45%" r="60%">
              <stop offset="0%" stopColor="#0284C7" />
              <stop offset="35%" stopColor="#0369A1" />
              <stop offset="65%" stopColor="#38BDF8" />
              <stop offset="80%" stopColor="#4F46E5" />
              <stop offset="95%" stopColor="#1E1B4B" />
              <stop offset="100%" stopColor="#030712" />
            </radialGradient>

            <radialGradient id="compLensCore" cx="50%" cy="50%" r="45%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.9" />
              <stop offset="25%" stopColor="#818CF8" stopOpacity="0.7" />
              <stop offset="60%" stopColor="#0F172A" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#020617" />
            </radialGradient>
          </defs>

          {/* MAHI (Gold 3D Bevel) */}
          <g id="brand-mahi" className="transition-all duration-300">
            {/* M */}
            <path
              d="M 50 200 L 50 90 L 75 90 L 105 155 L 135 90 L 160 90 L 160 200 L 135 200 L 135 130 L 115 175 L 95 175 L 75 130 L 75 200 Z"
              fill="url(#compGoldBevel)"
              stroke="#FFE885"
              strokeWidth="1.5"
            />
            {/* A */}
            <path
              d="M 195 200 L 245 90 L 270 90 L 320 200 L 290 200 L 257 122 L 225 200 Z"
              fill="url(#compGoldBevel)"
              stroke="#FFE885"
              strokeWidth="1.5"
            />
            {/* H */}
            <path
              d="M 345 90 L 372 90 L 372 133 L 438 133 L 438 90 L 465 90 L 465 200 L 438 200 L 438 157 L 372 157 L 372 200 L 345 200 Z"
              fill="url(#compGoldBevel)"
              stroke="#FFE885"
              strokeWidth="1.5"
            />
            {/* I */}
            <path
              d="M 495 90 L 522 90 L 522 200 L 495 200 Z"
              fill="url(#compGoldBevel)"
              stroke="#FFE885"
              strokeWidth="1.5"
            />
          </g>

          {/* CLICKZ (Chrome Silver Bevel) */}
          <g id="brand-clickz" className="transition-all duration-300">
            {/* C */}
            <path
              d="M 105 235 L 75 235 Q 50 235 50 262 L 50 278 Q 50 305 75 305 L 105 305 L 105 285 L 75 285 Q 70 285 70 278 L 70 262 Q 70 255 75 255 L 105 255 Z"
              fill="url(#compChromeGrad)"
              stroke="#FFFFFF"
              strokeWidth="1.2"
            />
            {/* L */}
            <path
              d="M 130 235 L 150 235 L 150 285 L 180 285 L 180 305 L 130 305 Z"
              fill="url(#compChromeGrad)"
              stroke="#FFFFFF"
              strokeWidth="1.2"
            />
            {/* I */}
            <path
              d="M 205 235 L 225 235 L 225 305 L 205 305 Z"
              fill="url(#compChromeGrad)"
              stroke="#FFFFFF"
              strokeWidth="1.2"
            />
            {/* C */}
            <path
              d="M 290 235 L 260 235 Q 235 235 235 262 L 235 278 Q 235 305 260 305 L 290 305 L 290 285 L 260 285 Q 255 285 255 278 L 255 262 Q 255 255 260 255 L 290 255 Z"
              fill="url(#compChromeGrad)"
              stroke="#FFFFFF"
              strokeWidth="1.2"
            />
            {/* K */}
            <path
              d="M 315 235 L 335 235 L 335 262 L 360 235 L 385 235 L 350 270 L 385 305 L 360 305 L 335 278 L 335 305 L 315 305 Z"
              fill="url(#compChromeGrad)"
              stroke="#FFFFFF"
              strokeWidth="1.2"
            />
            {/* Z */}
            <path
              d="M 405 235 L 455 235 L 455 255 L 428 285 L 455 285 L 455 305 L 405 305 L 405 285 L 432 255 L 405 255 Z"
              fill="url(#compChromeGrad)"
              stroke="#FFFFFF"
              strokeWidth="1.2"
            />
          </g>

          {/* Gold Camera Body & Real Optical Lens Assembly */}
          <g id="camera-assembly" className="transition-all duration-300">
            {/* Camera Shutter Button on Top */}
            <path 
              d="M 585 95 L 635 95 L 640 105 L 580 105 Z" 
              fill="url(#compGoldBevel)" 
              className={`transition-transform duration-100 ${isClicking ? 'translate-y-1' : 'translate-y-0'}`}
            />
            
            {/* Camera Body Outer Shell */}
            <path
              d="M 560 140 Q 560 120 580 120 L 645 120 Q 660 120 670 100 Q 675 90 690 90 L 770 90 Q 785 90 790 100 Q 800 120 815 120 L 820 120 Q 840 120 840 140 L 840 270 Q 840 290 820 290 L 760 290 M 640 290 L 580 290 Q 560 290 560 270 Z"
              fill="none"
              stroke="url(#compGoldBorder)"
              strokeWidth="11"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            
            {/* Lens Outer Rings */}
            <circle cx="700" cy="205" r="88" fill="#0A0D12" stroke="url(#compGoldBorder)" strokeWidth="10" />
            <circle cx="700" cy="205" r="76" fill="#111827" stroke="url(#compGoldBevel)" strokeWidth="3" />
            <circle cx="700" cy="205" r="67" fill="#020617" stroke="#1E293B" strokeWidth="2.5" />
            <circle cx="700" cy="205" r="60" fill="url(#compLensGlass)" />
            <circle cx="700" cy="205" r="46" fill="url(#compLensCore)" />
            
            {/* Mechanical Shutter Aperture Blades Overlay */}
            <g id="aperture-blades">
              <circle 
                cx="700" 
                cy="205" 
                r={shutterBladeState === 'closed' ? '56' : shutterBladeState === 'closing' ? '42' : '28'} 
                fill="#030712" 
                stroke="#38BDF8" 
                strokeWidth="2" 
                opacity={shutterBladeState === 'closed' ? '0.98' : '0.8'}
                className="transition-all duration-150"
              />
              {/* Internal Aperture Blade Geometry */}
              <path 
                d="M 680 185 L 720 185 L 710 225 L 670 225 Z" 
                fill="#0F172A" 
                stroke="#64748B" 
                strokeWidth="1" 
                opacity={shutterBladeState === 'closed' ? '0.9' : '0.3'}
                className={`transition-transform duration-200 ${shutterBladeState === 'closing' || shutterBladeState === 'closed' ? 'rotate-90 scale-125' : 'rotate-0 scale-100'}`}
                style={{ transformOrigin: '700px 205px' }}
              />
            </g>

            {/* Lens Center Elements */}
            <circle cx="700" cy="205" r="12" fill="#0284C7" />
            <circle cx="700" cy="205" r="4" fill="#FFFFFF" />
            
            {/* Glass Specular Glare Arc */}
            <path d="M 645 175 A 65 65 0 0 1 735 150" fill="none" stroke="#E0F2FE" strokeWidth="3" strokeLinecap="round" opacity="0.75" />
            <path d="M 660 250 A 60 60 0 0 0 745 240" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
          </g>
        </svg>

      </div>

      {/* Interactive Camera Shutter HUD Bar */}
      {enablePhotoClickIntro && size === 'xl' && (
        <div className="flex items-center gap-3 mt-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-amber-500/30 text-[10px] font-bold text-slate-300 backdrop-blur-md shadow-md">
          <button
            type="button"
            onClick={triggerPhotoClick}
            className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-black uppercase tracking-wider cursor-pointer"
          >
            <Camera className="w-3.5 h-3.5 animate-pulse" />
            <span>Click Shutter (📸 Snap Look)</span>
          </button>
          
          <span className="text-slate-600">|</span>

          <div className="flex items-center gap-1 text-[9px] text-slate-400 uppercase tracking-widest font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping"></span>
            <span>4K RAW 60FPS</span>
          </div>
        </div>
      )}

    </div>
  );
};

