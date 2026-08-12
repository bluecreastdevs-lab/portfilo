import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ShieldCheck, Code2, Building2 } from 'lucide-react';
import { internshipsData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-900/60 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-blue-400 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>INTERNSHIPS & PRACTICAL EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Industry Training & Freelance Milestones
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Hands-on internships in cybersecurity pentesting and full-stack development, alongside real client projects delivered through Bluecrest.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="max-w-4xl mx-auto relative space-y-8">
          {/* Vertical Connecting Line */}
          <div className="hidden md:block absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-0.5 bg-slate-800"></div>

          {internshipsData.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Node Badge */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-950 border-2 border-blue-500 items-center justify-center text-blue-400 shadow-lg shadow-blue-500/20 z-10">
                  {item.type === 'Cybersecurity Pentesting' ? (
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  ) : item.type === 'Freelance Agency' ? (
                    <Building2 className="w-5 h-5 text-cyan-400" />
                  ) : (
                    <Code2 className="w-5 h-5 text-blue-400" />
                  )}
                </div>

                {/* Card Container */}
                <div className="w-full md:w-[45%]">
                  <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-blue-500/40 shadow-xl space-y-4">
                    
                    {/* Header */}
                    <div>
                      <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                        <span className="px-2.5 py-0.5 text-[10px] font-mono font-bold rounded-full bg-blue-950 border border-blue-800/80 text-blue-400">
                          {item.type}
                        </span>
                        <div className="flex items-center gap-1 text-xs font-mono text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-blue-400" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-white">{item.role}</h3>
                      <div className="text-xs font-semibold text-blue-300 flex items-center gap-1.5 mt-0.5">
                        <Building2 className="w-3.5 h-3.5" />
                        {item.company}
                        {item.internshipId && (
                          <span className="text-slate-400 font-mono text-[11px] ml-1">
                            (ID: {item.internshipId})
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-1.5 pt-1">
                      {item.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-[10px] font-mono rounded bg-slate-900 border border-slate-800 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
