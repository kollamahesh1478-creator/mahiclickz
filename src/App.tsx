import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ColorGradingLab } from './components/ColorGradingLab';
import { PortfolioGallery } from './components/PortfolioGallery';
import { CostEstimator } from './components/CostEstimator';
import { PackagesSection } from './components/PackagesSection';
import { ToolchainShowcase } from './components/ToolchainShowcase';
import { TestimonialsSection } from './components/TestimonialsSection';
import { EnquiryForm } from './components/EnquiryForm';
import { EnquiryAdminModal } from './components/EnquiryAdminModal';
import { LogoIntroAnimation } from './components/LogoIntroAnimation';
import { Footer } from './components/Footer';
import { ShiningBackground } from './components/ShiningBackground';
import { Mail, MessageSquare, ArrowUp, Sparkles, Send } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('mahi_portfolio_dark_mode');
    return saved !== null ? JSON.parse(saved) : true; // default dark mode for cinema aesthetic
  });

  const [inquiriesModalOpen, setInquiriesModalOpen] = useState(false);
  const [logoIntroOpen, setLogoIntroOpen] = useState(true); // Automatically plays movie title intro when opening website
  const [prefillData, setPrefillData] = useState<{
    service?: string;
    scope?: string;
    budget?: string;
    urgency?: string;
  }>({});

  useEffect(() => {
    localStorage.setItem('mahi_portfolio_dark_mode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const scrollToEnquiry = () => {
    const el = document.getElementById('enquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setPrefillData(prev => ({ ...prev, service: serviceTitle }));
    scrollToEnquiry();
  };

  const handleSelectPackage = (packageName: string, price: string, turnaround: string) => {
    setPrefillData({
      service: packageName,
      scope: `Package Bundle: ${packageName}`,
      budget: price,
      urgency: turnaround
    });
    scrollToEnquiry();
  };

  const handleApplyEstimate = (data: {
    service: string;
    scope: string;
    budget: string;
    urgency: string;
  }) => {
    setPrefillData({
      service: data.service,
      scope: data.scope,
      budget: data.budget,
      urgency: data.urgency,
    });
    scrollToEnquiry();
  };

  const handleEnquireColorGrade = () => {
    setPrefillData(prev => ({
      ...prev,
      service: 'DaVinci Resolve Color Grading',
      scope: 'Cinematic S-Log / RAW Footage Color Grade',
    }));
    scrollToEnquiry();
  };

  const handleEnquirePortfolioItem = (itemTitle: string) => {
    setPrefillData(prev => ({
      ...prev,
      scope: `Similar to portfolio item: ${itemTitle}`,
    }));
    scrollToEnquiry();
  };

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 relative selection:bg-amber-500 selection:text-slate-950 ${
        darkMode ? 'bg-[#08090A]/95 text-[#E2E8F0]' : 'bg-slate-50/95 text-slate-900'
      }`}
    >
      {/* Dynamic Animated Shining Background */}
      <ShiningBackground darkMode={darkMode} />

      {/* Top Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenEnquiry={() => scrollToEnquiry()}
        onOpenInquiriesLog={() => setInquiriesModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          darkMode={darkMode}
          onOpenEnquiry={() => scrollToEnquiry()}
          onExploreWork={scrollToPortfolio}
        />

        {/* 2. Core Creative Services */}
        <ServicesSection
          darkMode={darkMode}
          onSelectService={handleSelectService}
        />

        {/* 3. Interactive Color Grading Before/After Lab */}
        <ColorGradingLab
          darkMode={darkMode}
          onEnquireColorGrade={handleEnquireColorGrade}
        />

        {/* 4. Filterable Portfolio Gallery & Video Showcase */}
        <PortfolioGallery
          darkMode={darkMode}
          onEnquireItem={handleEnquirePortfolioItem}
        />

        {/* 5. Interactive Cost Estimator & Budget Calculator */}
        <CostEstimator
          darkMode={darkMode}
          onApplyEstimate={handleApplyEstimate}
        />

        {/* 6. Creative Bundles & Packages */}
        <PackagesSection
          darkMode={darkMode}
          onSelectPackage={handleSelectPackage}
        />

        {/* 7. Toolchain Showcase (DaVinci, Premiere, CapCut, etc.) */}
        <ToolchainShowcase
          darkMode={darkMode}
        />

        {/* 8. Testimonials & FAQs */}
        <TestimonialsSection
          darkMode={darkMode}
        />

        {/* 9. Direct Enquiry & Contact Form */}
        <EnquiryForm
          darkMode={darkMode}
          prefillService={prefillData.service}
          prefillScope={prefillData.scope}
          prefillBudget={prefillData.budget}
          prefillUrgency={prefillData.urgency}
          onEnquirySubmitted={() => {}}
        />
      </main>

      {/* Cinematic Logo Intro Animation */}
      <LogoIntroAnimation
        darkMode={darkMode}
        isOpen={logoIntroOpen}
        onClose={() => setLogoIntroOpen(false)}
      />

      {/* Inquiries Modal */}
      <EnquiryAdminModal
        darkMode={darkMode}
        isOpen={inquiriesModalOpen}
        onClose={() => setInquiriesModalOpen(false)}
      />

      {/* Footer */}
      <Footer
        darkMode={darkMode}
        onOpenEnquiry={scrollToEnquiry}
      />

      {/* Floating Quick Action Widget */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        <a
          id="floating-whatsapp-btn"
          href="https://wa.me/919550658734?text=Hi%20Mahi,%20I%20am%20interested%20in%20your%20photography%20and%20video%20editing%20services!"
          target="_blank"
          rel="noopener noreferrer"
          title="Chat on WhatsApp (+91 95506 58734)"
          className="w-13 h-13 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl shadow-emerald-950/60 flex items-center justify-center hover:scale-110 active:scale-95 transition-all border border-emerald-300/40 relative group cursor-pointer"
        >
          <MessageSquare className="w-6 h-6 fill-white/20" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 rounded-full border-2 border-emerald-700 animate-pulse"></span>
          
          {/* Tooltip on hover */}
          <span className="absolute right-15 bg-slate-900/95 text-white text-[11px] font-bold px-2.5 py-1 rounded-xl shadow-xl border border-emerald-500/30 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            WhatsApp +91 95506 58734
          </span>
        </a>

        <button
          id="floating-enquiry-btn"
          onClick={scrollToEnquiry}
          title="Send Instant Enquiry"
          className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-yellow-400 text-slate-950 text-xs font-black shadow-xl shadow-amber-950/40 flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-amber-300/40 uppercase tracking-wider"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Quick Quote</span>
        </button>
      </div>
    </div>
  );
}
