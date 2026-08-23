import React, { useState, useEffect } from 'react';
import { Mail, Phone, Calendar, Clock, DollarSign, ExternalLink, X, RefreshCw, CheckCircle, Search, Filter } from 'lucide-react';

interface EnquiryAdminModalProps {
  darkMode: boolean;
  isOpen: boolean;
  onClose: () => void;
}

export const EnquiryAdminModal: React.FC<EnquiryAdminModalProps> = ({ darkMode, isOpen, onClose }) => {
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/enquiries');
      const data = await res.json();
      if (data.success && data.enquiries) {
        setInquiries(data.enquiries);
      }
    } catch (err) {
      console.error('Failed to fetch inquiries:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchInquiries();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filtered = inquiries.filter(item =>
    item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.serviceType?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.id?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      id="inquiries-inbox-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-4xl rounded-3xl overflow-hidden border shadow-2xl max-h-[85vh] flex flex-col ${
          darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
        }`}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`p-4 sm:p-5 border-b flex items-center justify-between ${
          darkMode ? 'border-slate-800 bg-[#0F1012]' : 'border-slate-200 bg-slate-50'
        }`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm sm:text-base uppercase tracking-wider">Project Inquiries Log</h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-600 text-white font-bold">
                  {inquiries.length} Total
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Forwarded to destination: <strong className="text-blue-400">kollamahesh1478@gmail.com</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={fetchInquiries}
              title="Refresh Inquiries"
              className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                darkMode ? 'border-slate-800 hover:bg-slate-800 text-slate-300' : 'border-slate-200 hover:bg-slate-100 text-slate-700'
              }`}
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                darkMode ? 'border-slate-800 hover:bg-slate-800 text-slate-300' : 'border-slate-200 hover:bg-slate-100 text-slate-700'
              }`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Search Filter Bar */}
        <div className={`p-3 border-b flex items-center gap-3 ${
          darkMode ? 'border-slate-800 bg-[#0F1012]/60' : 'border-slate-200 bg-slate-100/50'
        }`}>
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by client name, email, service, or tracking ID..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className={`w-full pl-9 pr-4 py-2 rounded-xl text-xs border outline-none ${
                darkMode ? 'bg-[#0F1012] border-slate-800 text-white placeholder-slate-500' : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
              }`}
            />
          </div>
        </div>

        {/* List of Enquiries */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-3 flex-1">
          {loading ? (
            <div className="text-center py-12 text-xs text-slate-400">Loading incoming enquiries...</div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-12 text-xs text-slate-400">No matching inquiries found.</div>
          ) : (
            filtered.map((item, idx) => (
              <div
                key={item.id || idx}
                className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                  darkMode ? 'bg-[#0F1012] border-slate-800 hover:border-slate-700' : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                      {item.id}
                    </span>
                    <span className="font-bold text-xs sm:text-sm">{item.name}</span>
                    <span className="text-[11px] text-slate-400">({item.email})</span>
                  </div>
                  <div className="text-[10px] text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{new Date(item.createdAt).toLocaleDateString()} at {new Date(item.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3 text-xs">
                  <div className={`p-2 rounded-xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Service</span>
                    <span className="font-semibold text-xs">{item.serviceType}</span>
                  </div>
                  <div className={`p-2 rounded-xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Delivery</span>
                    <span className="font-semibold text-xs text-emerald-400">{item.turnaroundUrgency}</span>
                  </div>
                  <div className={`p-2 rounded-xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Budget</span>
                    <span className="font-semibold text-xs text-blue-400">{item.budgetTier}</span>
                  </div>
                  <div className={`p-2 rounded-xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Phone</span>
                    <span className="font-semibold text-xs">{item.phone || 'N/A'}</span>
                  </div>
                </div>

                <p className={`text-xs leading-relaxed mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  <strong>Brief:</strong> {item.description}
                </p>

                {item.referenceLinks && (
                  <div className="text-xs text-blue-400 mb-3 flex items-center gap-1">
                    <span>Reference:</span>
                    <a href={item.referenceLinks} target="_blank" rel="noopener noreferrer" className="underline truncate max-w-sm">
                      {item.referenceLinks}
                    </a>
                  </div>
                )}

                {/* Direct Action Reply */}
                <div className="flex items-center gap-2 pt-2 border-t border-slate-800">
                  <a
                    href={`mailto:${item.email}?subject=Regarding%20your%20project%20enquiry%20with%20Mahi%20Clicz&body=Hi%20${encodeURIComponent(item.name)},%0A%0AThank%20you%20for%20reaching%20out%20to%20MAHI%20CLICZ%20AND%20CREATIVES%20about%20your%20${encodeURIComponent(item.serviceType)}%20project.%0A%0A`}
                    className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <Mail className="w-3 h-3" />
                    <span>Reply to {item.email}</span>
                  </a>

                  {item.phone && (
                    <a
                      href={`https://wa.me/${item.phone.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>WhatsApp Client</span>
                    </a>
                  )}
                </div>

              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
