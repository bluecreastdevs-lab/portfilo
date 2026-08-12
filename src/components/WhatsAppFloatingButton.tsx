import React from 'react';
import { MessageSquare } from 'lucide-react';
import { companyData } from '../data/portfolioData';

export const WhatsAppFloatingButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      {/* Hover Tooltip */}
      <div className="absolute right-14 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-slate-900 border border-emerald-500/40 text-emerald-300 text-xs font-medium font-sans whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none duration-200">
        Chat with Bluecrest (+91 {companyData.contact.whatsapp})
      </div>

      <a
        href={`https://wa.me/91${companyData.contact.whatsapp}?text=Hello%20Bluecrest%20Team%2C%20I%20would%20like%20to%20discuss%20a%20project.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center justify-center w-13 h-13 rounded-full bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/30 hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <MessageSquare className="w-6 h-6 fill-slate-950" />
      </a>
    </div>
  );
};
