import React from 'react';
import { testimonials } from '../data/portfolioData';
import { Star, MessageSquare, HelpCircle, ShieldCheck, Quote, CheckCircle2 } from 'lucide-react';

interface TestimonialsSectionProps {
  darkMode: boolean;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ darkMode }) => {
  const faqs = [
    {
      q: 'How do I send my raw video footage or wedding photos?',
      a: 'You can upload your raw files to Google Drive, WeTransfer, Dropbox, or OneDrive and share the link in the enquiry form or via email. We accept any camera format (Sony S-Log3, Canon C-Log, iPhone ProRes, BRAW, Nikon RAW).'
    },
    {
      q: 'Can you work with very tight / low budgets?',
      a: 'Absolutely! We offer low-budget friendly rates starting in Indian Rupees (₹) for emerging creators, YouTubers, small businesses, and budget weddings without cutting corners on DaVinci Resolve color grading or sound design quality.'
    },
    {
      q: 'What is the standard turnaround time?',
      a: 'For YouTube Shorts and Instagram Reels, turnaround is typically 24-48 hours. Marriage album photobook spreads and full cinematic travel vlogs take 3-4 business days. Express 24-hour delivery is also available.'
    },
    {
      q: 'How are revisions handled if I want adjustments?',
      a: 'Every project comes with 2 to 3 rounds of revisions. We work collaboratively using time-stamped notes to tweak pacing, color tone, text captions, or music selection until you are 100% satisfied.'
    },
    {
      q: 'What final file formats will I receive?',
      a: 'You will receive ultra-crisp 4K 60fps MP4/MOV files optimized for YouTube & Instagram, 300 DPI print-ready PDFs/TIFFs for marriage photobooks, and full-resolution PNG/JPEGs for thumbnails.'
    },
    {
      q: 'Do you provide raw project files (DRP / PRPROJ)?',
      a: 'Yes, DaVinci Resolve project archives (.drp) with embedded node trees and Premiere Pro project files (.prproj) can be provided upon request for an archival fee.'
    }
  ];

  return (
    <section id="testimonials" className={`py-4 sm:py-6 border-t relative ${darkMode ? 'border-amber-500/25 bg-[#08090C]' : 'border-amber-200 bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-4 space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/15 text-amber-400 border border-amber-500/40 shadow-sm">
            <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
            <span>Client Feedback &amp; Reviews</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight uppercase font-rich ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            What Creators &amp; <span className="gold-text-gradient">Couples Say</span>
          </h2>
          <p className={`text-xs sm:text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            100% verified reviews from creators, filmmakers, and bridal couples who partner with Mahi Clickz.
          </p>
        </div>

        {/* Testimonials 6-Card Grid - Always 100% Visible & High-Contrast */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-6">
          {testimonials.map(item => (
            <div
              key={item.id}
              id={`review-card-${item.id}`}
              className={`p-5 rounded-2xl border flex flex-col justify-between transition-all duration-300 shadow-md ${
                darkMode
                  ? 'bg-[#12141A] border-amber-500/30 hover:border-amber-400 shadow-black/60'
                  : 'bg-white border-amber-200/80 hover:border-amber-400 shadow-slate-200/60'
              }`}
            >
              <div>
                {/* Rating Stars & Verified Client Tag */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="ml-1 text-xs font-black text-amber-400">5.0</span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-400 border border-emerald-500/40">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    <span>Verified Client</span>
                  </span>
                </div>

                {/* Review Text */}
                <div className="relative mb-4">
                  <Quote className="w-4 h-4 text-amber-500/30 absolute -top-1 -left-1 pointer-events-none" />
                  <p className={`text-xs sm:text-sm leading-relaxed pl-3 font-normal ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    "{item.content}"
                  </p>
                </div>
              </div>

              {/* Client Info & Project Tag */}
              <div className={`pt-3 border-t ${darkMode ? 'border-slate-800/90 bg-slate-950/40 -mx-5 -mb-5 px-5 pb-4 rounded-b-2xl' : 'border-slate-100 bg-slate-50 -mx-5 -mb-5 px-5 pb-4 rounded-b-2xl'}`}>
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.clientName}
                    className="w-10 h-10 rounded-full object-cover border-2 border-amber-500/50 shrink-0 shadow-sm"
                  />
                  <div className="min-w-0 flex-1">
                    <div className={`text-xs font-black font-rich truncate ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {item.clientName}
                    </div>
                    <div className="text-[10px] text-amber-400 font-bold truncate">{item.role}</div>
                    <div className={`text-[10px] font-medium truncate ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      {item.project}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Grid - Always 100% Visible & Filled with Matter */}
        <div className="pt-2">
          <div className="text-center mb-4 space-y-1">
            <div className="inline-flex items-center gap-1.5 text-[10px] font-black text-amber-400 uppercase tracking-widest px-3 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Frequently Asked Questions</span>
            </div>
            <h3 className={`text-xl sm:text-2xl font-black uppercase tracking-tight font-rich ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Quick Answers &amp; Workflow Clarity
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-2xl border transition-colors ${
                  darkMode 
                    ? 'border-slate-800 bg-[#12141A] hover:border-amber-500/30' 
                    : 'border-slate-200 bg-white hover:border-amber-400 shadow-xs'
                }`}
              >
                <div className="flex items-start gap-2 mb-2 font-bold text-xs sm:text-sm font-rich">
                  <span className="text-amber-400 font-black shrink-0">Q:</span>
                  <span className={darkMode ? 'text-white' : 'text-slate-900'}>{faq.q}</span>
                </div>
                <div className={`text-xs leading-relaxed pl-4 ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};


