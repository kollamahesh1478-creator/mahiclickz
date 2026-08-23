import React from 'react';
import { Camera, Mail, Phone, MessageSquare, Heart, ArrowUp, Instagram, Youtube, Film } from 'lucide-react';
import { MahiClickzLogo } from './MahiClickzLogo';

interface FooterProps {
  darkMode: boolean;
  onOpenEnquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ darkMode, onOpenEnquiry }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t relative z-10 ${darkMode ? 'border-amber-500/20 bg-[#08090A]/95 text-slate-400' : 'border-amber-500/20 bg-slate-950 text-slate-300'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
          
          {/* Col 1 & 2: Brand Info & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-col gap-2">
              <MahiClickzLogo size="md" />
              <span className="font-rich font-bold text-sm text-slate-400 uppercase tracking-widest">
                Creative Studio &amp; Video Editing
              </span>
            </div>

            <p className="text-xs leading-relaxed max-w-sm text-slate-400">
              Where every frame tells a captivating story. Professional photography, DaVinci Resolve color grading, viral Shorts/Reels video editing, marriage photobook designs, and high-CTR social graphics.
            </p>

            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="mailto:kollamahesh1478@gmail.com"
                className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-amber-500 hover:text-slate-950 transition-colors flex items-center justify-center text-slate-300 cursor-pointer"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919550658734"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-emerald-500 hover:text-white transition-colors flex items-center justify-center text-slate-300 cursor-pointer"
                title="WhatsApp Direct (+91 95506 58734)"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/mahi__clicks_?igsi=MXFubmx2czJwc3d2cQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 hover:text-white transition-all flex items-center justify-center text-slate-300 cursor-pointer"
                title="Instagram: @mahi__clicks_"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-red-600 hover:text-white transition-colors flex items-center justify-center text-slate-300 cursor-pointer"
                title="YouTube Channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-[10px] font-bold text-amber-400 uppercase tracking-widest mb-4 font-rich">
              Creative Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Freelance Video Editing</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">YouTube Shorts &amp; IG Reels</a></li>
              <li><a href="#color-lab" className="hover:text-amber-400 transition-colors">DaVinci Resolve Color Grading</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Marriage Album Design</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Professional Photography</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">YouTube Thumbnails &amp; Graphics</a></li>
            </ul>
          </div>

          {/* Col 4: Toolchain */}
          <div>
            <h4 className="text-[10px] font-bold text-amber-400 uppercase tracking-widest mb-4 font-rich">
              Software Toolchain
            </h4>
            <ul className="space-y-2 text-xs">
              <li><span className="text-slate-400">DaVinci Resolve Studio 19</span></li>
              <li><span className="text-slate-400">Adobe Premiere Pro 2025</span></li>
              <li><span className="text-slate-400">CapCut Pro Studio</span></li>
              <li><span className="text-slate-400">Adobe Photoshop &amp; Lightroom</span></li>
              <li><span className="text-slate-400">Dehancer Pro Film Emulation</span></li>
              <li><span className="text-slate-400">After Effects Motion Graphics</span></li>
            </ul>
          </div>

          {/* Col 5: Direct Contact */}
          <div>
            <h4 className="text-[10px] font-bold text-amber-400 uppercase tracking-widest mb-4 font-rich">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-slate-500 block text-[10px] uppercase font-semibold">Email Forwarding</span>
                <a href="mailto:kollamahesh1478@gmail.com" className="text-amber-400 font-semibold hover:underline break-all">
                  kollamahesh1478@gmail.com
                </a>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px] uppercase font-semibold">WhatsApp Official</span>
                <a href="https://wa.me/919550658734" target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-bold hover:underline">
                  +91 95506 58734
                </a>
              </div>
              <button
                onClick={onOpenEnquiry}
                className="w-full mt-2 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-black text-xs uppercase tracking-wider hover:from-amber-400 hover:to-yellow-400 transition-colors cursor-pointer shadow-md shadow-amber-500/20"
              >
                Send Direct Brief
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            &copy; {new Date().getFullYear()} <strong className="gold-text-gradient font-rich font-bold">MAHI CLICKZ &amp; CREATIVES</strong>. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Where every frame tells a captivating story.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-white transition-colors cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

