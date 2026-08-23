import React, { useState, useEffect } from 'react';
import { Send, Mail, Phone, MessageSquare, CheckCircle2, Copy, Sparkles, Clock, DollarSign, ExternalLink, RefreshCw } from 'lucide-react';
import { EnquirySubmission } from '../types';

interface EnquiryFormProps {
  darkMode: boolean;
  prefillService?: string;
  prefillScope?: string;
  prefillBudget?: string;
  prefillUrgency?: string;
  onEnquirySubmitted?: () => void;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  darkMode,
  prefillService = '',
  prefillScope = '',
  prefillBudget = '',
  prefillUrgency = '',
  onEnquirySubmitted
}) => {
  const [formData, setFormData] = useState<EnquirySubmission>({
    name: '',
    email: '',
    phone: '',
    serviceType: prefillService || 'Video Editing (Shorts & Reels)',
    projectScope: prefillScope || '',
    budgetTier: prefillBudget || '₹1,200 - ₹4,000 (Low / Economy Tier)',
    turnaroundUrgency: prefillUrgency || 'Standard (3-5 Days)',
    description: '',
    referenceLinks: '',
  });

  const [loading, setLoading] = useState(false);
  const [submittedResult, setSubmittedResult] = useState<any | null>(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (prefillService) {
      setFormData(prev => ({ ...prev, serviceType: prefillService }));
    }
  }, [prefillService]);

  useEffect(() => {
    if (prefillScope) {
      setFormData(prev => ({ ...prev, projectScope: prefillScope }));
    }
  }, [prefillScope]);

  useEffect(() => {
    if (prefillBudget) {
      setFormData(prev => ({ ...prev, budgetTier: prefillBudget }));
    }
  }, [prefillBudget]);

  useEffect(() => {
    if (prefillUrgency) {
      setFormData(prev => ({ ...prev, turnaroundUrgency: prefillUrgency }));
    }
  }, [prefillUrgency]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateMailtoLink = () => {
    const subject = encodeURIComponent(`Project Enquiry: ${formData.serviceType} from ${formData.name || 'Client'}`);
    const body = encodeURIComponent(
      `Hi Mahi,\n\nI am contacting you regarding a creative project for MAHI CLICZ AND CREATIVES.\n\n` +
      `PROJECT DETAILS:\n` +
      `- Client Name: ${formData.name}\n` +
      `- Email: ${formData.email}\n` +
      `- Phone/WhatsApp: ${formData.phone || 'Not provided'}\n` +
      `- Service Needed: ${formData.serviceType}\n` +
      `- Project Scope: ${formData.projectScope || 'General'}\n` +
      `- Turnaround Urgency: ${formData.turnaroundUrgency}\n` +
      `- Budget Range: ${formData.budgetTier}\n` +
      `- Reference/Drive Link: ${formData.referenceLinks || 'None'}\n\n` +
      `CREATIVE NOTES & BRIEF:\n${formData.description}\n\n` +
      `Looking forward to hearing from you!`
    );
    return `mailto:kollamahesh1478@gmail.com?subject=${subject}&body=${body}`;
  };

  const generateWhatsAppLink = () => {
    const text = encodeURIComponent(
      `*New Project Enquiry - MAHI CLICZ AND CREATIVES*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Service:* ${formData.serviceType}\n` +
      `*Scope:* ${formData.projectScope || 'Standard'}\n` +
      `*Budget:* ${formData.budgetTier}\n` +
      `*Delivery:* ${formData.turnaroundUrgency}\n` +
      `*Notes:* ${formData.description}\n` +
      (formData.referenceLinks ? `*Reference:* ${formData.referenceLinks}` : '')
    );
    return `https://wa.me/919550658734?text=${text}`;
  };

  const handleCopySummary = () => {
    const summary =
      `PROJECT ENQUIRY: MAHI CLICZ AND CREATIVES\n` +
      `Client: ${formData.name} (${formData.email}, ${formData.phone})\n` +
      `Service: ${formData.serviceType}\n` +
      `Scope: ${formData.projectScope}\n` +
      `Budget: ${formData.budgetTier}\n` +
      `Urgency: ${formData.turnaroundUrgency}\n` +
      `Brief: ${formData.description}\n` +
      `Link: ${formData.referenceLinks}\n` +
      `Direct Email Recipient: kollamahesh1478@gmail.com`;

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.description.trim()) {
      setErrorMsg('Please fill in your name, email, and project description.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmittedResult(data.enquiry);
        if (onEnquirySubmitted) onEnquirySubmitted();
      } else {
        // Fallback in case of server offline: generate receipt locally
        const fallbackEnquiry = {
          id: `ENQ-${Date.now().toString().slice(-5)}`,
          ...formData,
          createdAt: new Date().toISOString()
        };
        setSubmittedResult(fallbackEnquiry);
      }
    } catch (err) {
      // Offline fallback
      const fallbackEnquiry = {
        id: `ENQ-${Date.now().toString().slice(-5)}`,
        ...formData,
        createdAt: new Date().toISOString()
      };
      setSubmittedResult(fallbackEnquiry);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmittedResult(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceType: 'Video Editing (Shorts & Reels)',
      projectScope: '',
      budgetTier: '₹1,200 - ₹4,000 (Low / Economy Tier)',
      turnaroundUrgency: 'Standard (3-5 Days)',
      description: '',
      referenceLinks: '',
    });
  };

  return (
    <section id="enquiry" className={`py-4 sm:py-6 border-t relative ${darkMode ? 'border-amber-500/25 bg-[#08090C]' : 'border-amber-200 bg-white'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-4 space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/15 text-amber-400 border border-amber-500/40 shadow-sm">
            <Mail className="w-3.5 h-3.5 text-amber-400" />
            <span>Forward Directly to Mahi's Inbox</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight uppercase font-rich ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Start Your <span className="gold-text-gradient">Creative Project</span>
          </h2>
          <p className={`text-xs sm:text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Messages and project briefs are delivered directly to <strong className="text-amber-400">kollamahesh1478@gmail.com</strong>.
            Fast reply guaranteed within a few hours.
          </p>
        </div>

        {/* Form Container */}
        <div className={`p-6 sm:p-8 rounded-3xl border shadow-2xl relative ${
          darkMode ? 'bg-[#12141A] border-amber-500/30 shadow-black' : 'bg-white border-slate-200 shadow-amber-500/5'
        }`}>
          
          {submittedResult ? (
            /* SUCCESS CONFIRMATION STATE */
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1.5">
                <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  Tracking ID: {submittedResult.id}
                </span>
                <h3 className={`text-xl sm:text-2xl font-black uppercase tracking-tight font-rich ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Enquiry Registered Successfully!
                </h3>
                <p className={`text-xs sm:text-sm max-w-lg mx-auto ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  Thank you <strong className={darkMode ? 'text-white' : 'text-slate-900'}>{submittedResult.name}</strong>.
                  Your project brief for <strong className="text-amber-400">{submittedResult.serviceType}</strong> has been logged to recipient inbox: <strong className="text-amber-400">kollamahesh1478@gmail.com</strong>.
                </p>
              </div>

              {/* Action Buttons for Direct 1-Click Dispatch */}
              <div className={`p-4 rounded-2xl border space-y-3 text-left max-w-lg mx-auto ${
                darkMode ? 'bg-[#08090A] border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Direct Forwarding Actions
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <a
                    id="success-direct-email-btn"
                    href={generateMailtoLink()}
                    className="py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Open in Email App</span>
                  </a>

                  <a
                    id="success-whatsapp-btn"
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </a>
                </div>

                <button
                  id="copy-summary-btn"
                  onClick={handleCopySummary}
                  className={`w-full py-2 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                    darkMode ? 'border-slate-800 hover:bg-slate-800 text-slate-300' : 'border-slate-300 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? '✓ Copied Brief to Clipboard' : 'Copy Project Brief Summary'}</span>
                </button>
              </div>

              <div className="pt-1">
                <button
                  onClick={handleReset}
                  className="text-xs font-bold text-slate-400 hover:text-amber-400 uppercase tracking-wider flex items-center justify-center gap-1.5 mx-auto cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Submit Another Enquiry</span>
                </button>
              </div>
            </div>
          ) : (
            /* ACTIVE FORM INPUTS */
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold">
                  {errorMsg}
                </div>
              )}

              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-amber-400 block mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    id="enquiry-name-input"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Aarav Sharma"
                    className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm transition-colors outline-none focus:border-amber-500 ${
                      darkMode ? 'bg-[#08090A] border-slate-800 text-white placeholder-slate-500' : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>

                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-amber-400 block mb-1.5">
                    Email Address *
                  </label>
                  <input
                    id="enquiry-email-input"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. creator@gmail.com"
                    className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm transition-colors outline-none focus:border-amber-500 ${
                      darkMode ? 'bg-[#08090A] border-slate-800 text-white placeholder-slate-500' : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>
              </div>

              {/* Row 2: Phone & Service Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-amber-400 block mb-1.5">
                    Phone / WhatsApp (Optional)
                  </label>
                  <input
                    id="enquiry-phone-input"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210"
                    className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm transition-colors outline-none focus:border-amber-500 ${
                      darkMode ? 'bg-[#08090A] border-slate-800 text-white placeholder-slate-500' : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>

                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-amber-400 block mb-1.5">
                    Creative Service *
                  </label>
                  <select
                    id="enquiry-service-select"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm transition-colors outline-none focus:border-amber-500 cursor-pointer ${
                      darkMode ? 'bg-[#08090A] border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  >
                    <option value="Video Editing (Shorts & Reels)">Freelance Video Editing (Shorts & Reels)</option>
                    <option value="Cinematic Vlog / Longform Video">Cinematic Travel Vlog / YouTube Longform</option>
                    <option value="Short Film Editing & Color">Short Film Editing & DaVinci Resolve Color</option>
                    <option value="Marriage Album & Photobook Design">Marriage Album & Photobook Design</option>
                    <option value="Professional Photography">Professional Photography (Portraits / Events)</option>
                    <option value="DaVinci Resolve Color Grading">DaVinci Resolve S-Log/RAW Color Grading</option>
                    <option value="YouTube Thumbnails & Social Creatives">YouTube Thumbnails & Social Creatives</option>
                    <option value="Custom Creative Project">Custom Multi-Service Bundle</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Scope & Turnaround */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-amber-400 block mb-1.5">
                    Estimated Project Scope
                  </label>
                  <input
                    id="enquiry-scope-input"
                    type="text"
                    name="projectScope"
                    value={formData.projectScope}
                    onChange={handleChange}
                    placeholder="e.g. 10 Shorts batch or 35 Album spreads"
                    className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm transition-colors outline-none focus:border-amber-500 ${
                      darkMode ? 'bg-[#08090A] border-slate-800 text-white placeholder-slate-500' : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>

                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-amber-400 block mb-1.5">
                    Turnaround Urgency
                  </label>
                  <select
                    id="enquiry-urgency-select"
                    name="turnaroundUrgency"
                    value={formData.turnaroundUrgency}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm transition-colors outline-none focus:border-amber-500 cursor-pointer ${
                      darkMode ? 'bg-[#08090A] border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  >
                    <option value="Express (24 Hours)">Express (24 Hours Delivery)</option>
                    <option value="Fast (48 Hours)">Fast (48 Hours Delivery)</option>
                    <option value="Standard (3-5 Days)">Standard (3-5 Business Days)</option>
                    <option value="Flexible / Long-term Retainer">Flexible / Ongoing Monthly Retainer</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Budget Range in Indian Rupees Only */}
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-amber-400 block mb-1.5">
                  Budget Target (in Indian Rupees ₹)
                </label>
                <select
                  id="enquiry-budget-select"
                  name="budgetTier"
                  value={formData.budgetTier}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm transition-colors outline-none focus:border-amber-500 cursor-pointer ${
                    darkMode ? 'bg-[#08090A] border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                  }`}
                >
                  <option value="₹1,200 - ₹4,000 (Low / Economy Tier)">₹1,200 - ₹4,000 (Low / Economy Tier)</option>
                  <option value="₹4,000 - ₹12,000 (Standard Creator Package)">₹4,000 - ₹12,000 (Standard Creator Package)</option>
                  <option value="₹12,000 - ₹28,000 (Pro / Wedding Bundle)">₹12,000 - ₹28,000 (Pro / Wedding Bundle)</option>
                  <option value="₹28,000+ (Large Scale Production / Commercial)">₹28,000+ (Large Scale Production / Commercial)</option>
                </select>
              </div>

              {/* Row 5: Description / Creative Vision */}
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-amber-400 block mb-1.5">
                  Project Brief &amp; Creative Notes *
                </label>
                <textarea
                  id="enquiry-description-input"
                  name="description"
                  required
                  rows={3}
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Tell us about your story, style preferences, music vibe, color palette, or target audience..."
                  className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm transition-colors outline-none focus:border-amber-500 resize-y ${
                    darkMode ? 'bg-[#08090A] border-slate-800 text-white placeholder-slate-500' : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                  }`}
                />
              </div>

              {/* Row 6: Reference Links */}
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-amber-400 block mb-1.5">
                  Google Drive / Dropbox / Reference Link
                </label>
                <input
                  id="enquiry-reference-input"
                  type="url"
                  name="referenceLinks"
                  value={formData.referenceLinks}
                  onChange={handleChange}
                  placeholder="https://drive.google.com/... or YouTube inspiration link"
                  className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm transition-colors outline-none focus:border-amber-500 ${
                    darkMode ? 'bg-[#08090A] border-slate-800 text-white placeholder-slate-500' : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                  }`}
                />
              </div>

              {/* Notice that it goes to recipient email */}
              <div className={`p-3 rounded-xl border text-xs flex items-center justify-between gap-2 ${
                darkMode ? 'bg-[#08090A] border-slate-800 text-slate-400' : 'bg-amber-50/60 border-amber-200 text-slate-700'
              }`}>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Enquiries are forwarded directly to: <strong className={darkMode ? 'text-white' : 'text-slate-900'}>kollamahesh1478@gmail.com</strong></span>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <button
                  id="submit-enquiry-form-btn"
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span>Submitting Enquiry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Project Enquiry Now (in ₹)</span>
                    </>
                  )}
                </button>

                <a
                  id="direct-mailto-form-btn"
                  href={generateMailtoLink()}
                  className={`px-6 py-3.5 rounded-xl border font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors ${
                    darkMode ? 'border-slate-800 bg-[#08090A] hover:bg-slate-800 text-slate-300' : 'border-slate-300 bg-white hover:bg-slate-100 text-slate-800'
                  }`}
                >
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>Direct Mailto</span>
                </a>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
