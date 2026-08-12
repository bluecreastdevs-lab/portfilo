import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, Download, Eye, Sparkles, MapPin, Terminal, CheckCircle } from 'lucide-react';
import { companyData } from '../data/portfolioData';
import { CyberTerminalVisualizer } from './CyberTerminalVisualizer';

interface HeroProps {
  onOpenCompanyProfile: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCompanyProfile }) => {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-950">
      {/* Background Cyber Mesh & Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.15),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `radial-gradient(#38bdf8 1px, transparent 1px)`, backgroundSize: '24px 24px' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Subtext */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-blue-500/30 backdrop-blur-md shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-xs font-mono font-medium text-blue-300">
                CSE (Cyber Security) Engineering Team · K.S.R.C.E
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Turning Ideas Into{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent underline decoration-blue-500/30 decoration-wavy decoration-2">
                Secure Digital Products.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
              We're <strong className="text-white font-semibold">Bluecrest</strong> — a full-stack development team building real-world web apps and helping local businesses grow online across Namakkal, Salem, and beyond.
            </p>

            {/* Feature Checkmarks Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs font-medium text-slate-300 pt-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>React & Node Full-Stack</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Penetration Tested Code</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>AWS & Cloud Ready</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
              <button
                onClick={() => handleScrollTo('#projects')}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2 group cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <Eye className="w-4 h-4" />
                View Our Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenCompanyProfile}
                className="px-5 py-3.5 text-sm font-medium text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all flex items-center gap-2 shadow-sm cursor-pointer hover:border-blue-500/40"
              >
                <Download className="w-4 h-4 text-blue-400" />
                Company Profile
              </button>

              <button
                onClick={() => handleScrollTo('#contact')}
                className="px-5 py-3.5 text-sm font-medium text-cyan-300 hover:text-cyan-200 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-800/50 rounded-xl transition-all cursor-pointer"
              >
                Let's Connect
              </button>
            </div>

            {/* Local Footprint Badge */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-400 font-mono">
              <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>Based in Namakkal, Tamil Nadu · Serving Salem & Kadayanallur</span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Cyber Terminal Visualizer */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Glow backdrop behind terminal */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
            
            <CyberTerminalVisualizer />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
