import React from 'react';
import { Shield, MessageSquare, Instagram, Linkedin, Github, Heart, ArrowUp } from 'lucide-react';
import { companyData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Shield className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-white tracking-wider">
                BLUECREST
              </span>
            </div>

            <p className="text-slate-300 max-w-sm text-xs leading-relaxed">
              "{companyData.tagline}"
            </p>
            
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Third Year Student of Computer Science Engineering (Cyber Security) at K.S.R College of Engineering (2024-2028). Serving startups, students, and businesses across  Namakkal, and Salem.
            </p>

            <div className="pt-2 text-xs font-mono text-emerald-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              WhatsApp Hotline: +91 {companyData.contact.whatsapp}
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono text-white uppercase tracking-wider font-semibold">Quick Navigation</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#skills" className="hover:text-blue-400 transition-colors">Skills & Tech Stack</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">Featured Projects</a></li>
              <li><a href="#certifications" className="hover:text-blue-400 transition-colors">AWS & Pentest Certifications</a></li>
              <li><a href="#experience" className="hover:text-blue-400 transition-colors">Internships & Experience</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Featured Live Apps */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono text-white uppercase tracking-wider font-semibold">Deployed Applications</h4>
            <ul className="space-y-2 text-slate-300 text-xs">
              <li>
                <a href="https://zenjournalapp.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  ZenJournal — Private Journaling App ↗
                </a>
              </li>
              <li>
                <a href="https://nutri-track-5toytglnm-gopinathvarudharaj-5095s-projects.vercel.app/metrics" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  NutriTrack — Health Metrics Tracker ↗
                </a>
              </li>
              <li>
                <a href="https://freshfarmshop.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  Fresh Farm — Dairy & Poultry Shop ↗
                </a>
              </li>
              <li>
                <a href="https://alumni-lmanagement-system.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  Alumni Management Portal ↗
                </a>
              </li>
            </ul>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`https://wa.me/91${companyData.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 transition-colors"
                title="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={companyData.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-pink-400 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={companyData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-blue-400 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={companyData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs">
          <div>
            © 2026 <strong className="text-white">Bluecrest</strong>. All rights reserved. Namakkal, Tamil Nadu, India.
          </div>

          <div className="flex items-center gap-4">
            <span>Building Secure Digital Solutions</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
