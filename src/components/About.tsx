import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, ShieldCheck, Code, MapPin, Users, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { companyData } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900/60 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-blue-400 text-xs font-mono">
            <Users className="w-3.5 h-3.5" />
            <span>WHO WE ARE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Driven by Engineering Rigor & Cybersecurity Security
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            We bridge the gap between high-performing full-stack web applications and robust cybersecurity defenses.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: About Details */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 shadow-xl space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-blue-400" />
                Third Year Student at K.S.R College of Engineering
              </h3>
              
              <p className="text-slate-300 text-sm leading-relaxed">
                Bluecrest was formed by a passionate group of <strong className="text-white font-semibold">Computer Science Engineering (Cyber Security)</strong> students at K.S.R College of Engineering (2024–2028 batch). As part of our 4-year engineering program, we combine advanced computer science foundations with practical penetration testing and web development experience.
              </p>

              <p className="text-slate-300 text-sm leading-relaxed">
                Unlike traditional developers who treat security as an afterthought, every line of code written by Bluecrest is crafted with data privacy, input sanitization, and OWASP compliance in mind.
              </p>

              {/* Tag Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">Cybersecurity Mindset</h4>
                    <p className="text-[11px] text-slate-400">Wireshark, Burp Suite, Nmap & vulnerability audits</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 flex items-start gap-2.5">
                  <Code className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">Full-Stack Expertise</h4>
                    <p className="text-[11px] text-slate-400">React, TypeScript, Node.js, Firebase, MySQL & Java</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Local Business Impact */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-950 to-indigo-950/40 border border-blue-900/40 space-y-3">
              <div className="flex items-center gap-2 text-cyan-300 text-sm font-semibold">
                <MapPin className="w-4 h-4 text-cyan-400" />
                Local Business Digitalization
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                We take immense pride in helping local shops, dairy farms, institutions, and startups across <strong className="text-white">Kadayanallur</strong>, <strong className="text-white">Namakkal</strong>, and <strong className="text-white">Salem</strong> establish a modern digital presence with seamless 1-click WhatsApp order integration.
              </p>
            </div>
          </motion.div>

          {/* Right: Stats Grid & Academic Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              {companyData.stats.map((stat, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-blue-500/40 transition-all text-center group"
                >
                  <div className="text-3xl font-extrabold text-blue-400 group-hover:scale-105 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-white mt-1">{stat.label}</div>
                  <div className="text-[11px] text-slate-400 mt-1">{stat.description}</div>
                </div>
              ))}
            </div>

            {/* College Badge Card */}
            <div className="p-5 rounded-2xl bg-slate-950/90 border border-slate-800 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-blue-600/10 border border-blue-500/30 text-blue-400 shrink-0">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <div className="text-xs font-mono text-blue-400">INSTITUTION ALIGNMENT</div>
                <div className="text-sm font-bold text-white">K.S.R College of Engineering</div>
                <div className="text-xs text-slate-400">Batch 2024–2028 · B.E. Cyber Security</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
