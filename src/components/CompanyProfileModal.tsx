import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Shield, Download, Printer, CheckCircle2, GraduationCap, Award, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { companyData, certificationsData, servicesData } from '../data/portfolioData';

interface CompanyProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CompanyProfileModal: React.FC<CompanyProfileModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const textContent = `
=====================================================
BLUECREST DIGITAL SOLUTIONS - OFFICIAL COMPANY PROFILE
=====================================================
Tagline: ${companyData.tagline}
Location: ${companyData.location}
Founded By: Computer Science Engineering (Cyber Security) Team
Institution: ${companyData.college} (${companyData.batch})
Phone / WhatsApp: ${companyData.contact.whatsappFormatted}
Email: ${companyData.contact.email}

ABOUT US:
${companyData.aboutText}

CORE SERVICES:
${servicesData.map(s => `- ${s.title}: ${s.description}`).join('\n')}

CERTIFICATIONS & CREDENTIALS:
${certificationsData.map(c => `- ${c.title} (Issuer: ${c.issuer}, Date: ${c.issueDate})`).join('\n')}

CONTACT BLUECREST:
Email: ${companyData.contact.email}
WhatsApp: +91 ${companyData.contact.whatsapp}
Address: ${companyData.contact.address}
=====================================================
    `.trim();

    const blob = new Blob([textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Bluecrest_Company_Profile.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white font-sans">Bluecrest Company Brief</h3>
                <p className="text-[11px] font-mono text-slate-400">Official Profile Summary · Namakkal, TN</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="p-1.5 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                title="Print Profile Brief"
              >
                <Printer className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Printable Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-300 text-sm font-sans print:bg-white print:text-black">
            
            {/* Top Brand Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-950 via-blue-950/40 to-slate-950 border border-blue-900/40 space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-xl font-bold text-white tracking-wider flex items-center gap-2">
                  BLUECREST
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                </span>
                <span className="text-xs font-mono text-blue-300 bg-blue-950 px-2.5 py-1 rounded-md border border-blue-800">
                  EST. 2024 · CSE (CYBER SECURITY)
                </span>
              </div>
              <p className="text-base font-semibold text-slate-200">
                "{companyData.tagline}"
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                {companyData.aboutText}
              </p>
            </div>

            {/* Academic & Security Foundation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                <div className="text-xs font-mono text-blue-400 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4" />
                  Academic Foundation
                </div>
                <div className="text-xs font-bold text-white">K.S.R College of Engineering</div>
                <div className="text-[11px] text-slate-400">Batch 2024–2028 · Cyber Security B.E.</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                <div className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  Primary Credentials
                </div>
                <div className="text-xs font-bold text-white">AWS Cloud Practitioner & Pentest Interns</div>
                <div className="text-[11px] text-slate-400">Verified AWS, Imagecon & Pargavan IDs</div>
              </div>
            </div>

            {/* Services Brief */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Core Capabilities</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {servicesData.map((s) => (
                  <div key={s.id} className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1">
                    <div className="font-bold text-white flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                      {s.title}
                    </div>
                    <div className="text-slate-400 text-[11px] line-clamp-2">{s.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Regions & Contact */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 text-xs">
              <div className="text-slate-400 font-mono">DIRECT CONTACT & LOCATIONS</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Namakkal, Salem, Kadayanallur (Tamil Nadu)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>WhatsApp: {companyData.contact.whatsappFormatted}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{companyData.contact.email}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Footer Bar */}
          <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between shrink-0">
            <span className="text-xs font-mono text-slate-400">
              © 2026 Bluecrest Digital Solutions
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleDownloadText}
                className="px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                Download Profile Text
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
