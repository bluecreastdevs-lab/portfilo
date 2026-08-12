import React from 'react';
import { motion } from 'motion/react';
import { Award, ExternalLink, ShieldCheck, CheckCircle2, Calendar, FileCheck, Cloud, Code } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 bg-slate-950 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-blue-400 text-xs font-mono">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Industry Certifications & Qualifications
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Verified credentials in AWS cloud architecture, full-stack web development, and cybersecurity penetration testing.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 shadow-xl flex flex-col justify-between transition-all group"
            >
              <div className="space-y-4">
                {/* Header Icon & Badge */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 group-hover:scale-105 transition-transform">
                    {cert.badge === 'Cloud' ? (
                      <Cloud className="w-6 h-6 text-amber-400" />
                    ) : cert.badge === 'CyberSec' ? (
                      <ShieldCheck className="w-6 h-6 text-emerald-400" />
                    ) : (
                      <Code className="w-6 h-6 text-blue-400" />
                    )}
                  </div>
                  
                  <span className="px-2.5 py-1 text-[10px] font-mono font-bold rounded-full bg-emerald-950/80 border border-emerald-800/80 text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    VERIFIED
                  </span>
                </div>

                {/* Title & Issuer */}
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="text-xs font-medium text-slate-400 mt-1">
                    Issued by <strong className="text-slate-200">{cert.issuer}</strong>
                  </div>
                </div>

                {/* Dates & Validation Info */}
                <div className="space-y-1.5 p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs font-mono">
                  <div className="flex items-center justify-between text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      Issued:
                    </span>
                    <span className="text-slate-200">{cert.issueDate}</span>
                  </div>

                  {cert.expiryDate && (
                    <div className="flex items-center justify-between text-slate-400">
                      <span>Expires:</span>
                      <span className="text-slate-200">{cert.expiryDate}</span>
                    </div>
                  )}

                  {cert.validationNumber && (
                    <div className="pt-1.5 border-t border-slate-800 flex items-center justify-between text-[11px]">
                      <span className="text-slate-400">ID:</span>
                      <span className="text-blue-300 font-semibold truncate max-w-[150px]">
                        {cert.validationNumber}
                      </span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills Covered */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cert.skillsCovered.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-950 border border-slate-800 text-slate-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verify Link */}
              <div className="pt-6 mt-4 border-t border-slate-800/80">
                <a
                  href={cert.verifyUrl}
                  target={cert.verifyUrl.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-slate-950 hover:bg-blue-600 border border-slate-800 hover:border-blue-500 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer group/btn"
                >
                  <FileCheck className="w-3.5 h-3.5 text-emerald-400 group-hover/btn:text-white" />
                  Verify Credential
                  {cert.verifyUrl.startsWith('http') && (
                    <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                  )}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
