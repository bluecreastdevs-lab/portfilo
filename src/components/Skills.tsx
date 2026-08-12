import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, Server, Terminal, ShieldAlert, Cpu, 
  Sparkles, CheckCircle, Search, Activity, Radar, 
  Flame, Database, Globe, Smartphone, GitBranch, Network,
  Layers, Palette, FileCode2, FileJson
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { Skill } from '../types';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(skillsData[0]);

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'languages', label: 'Languages' },
    { id: 'cybersecurity', label: 'Cybersecurity Tools' },
    { id: 'other', label: 'DevOps & Architecture' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Atom': return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'FileCode2': return <FileCode2 className="w-5 h-5 text-blue-400" />;
      case 'Palette': return <Palette className="w-5 h-5 text-sky-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-purple-400" />;
      case 'Server': return <Server className="w-5 h-5 text-emerald-400" />;
      case 'Flame': return <Flame className="w-5 h-5 text-amber-500" />;
      case 'Database': return <Database className="w-5 h-5 text-blue-500" />;
      case 'Code': return <Code2 className="w-5 h-5 text-orange-400" />;
      case 'FileJson': return <FileJson className="w-5 h-5 text-yellow-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-cyan-400" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-red-400" />;
      case 'Radar': return <Radar className="w-5 h-5 text-emerald-400" />;
      case 'Search': return <Search className="w-5 h-5 text-blue-400" />;
      case 'Globe2': return <Globe className="w-5 h-5 text-indigo-400" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-orange-400" />;
      case 'Network': return <Network className="w-5 h-5 text-indigo-400" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-emerald-400" />;
      default: return <Cpu className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-slate-950 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-blue-400 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>OUR TECHNICAL STACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Comprehensive Full-Stack & Security Tools
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            From modern frontend frameworks to deep network packet inspection, Bluecrest masters end-to-end web engineering.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-medium rounded-xl transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25 border border-blue-500/40'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid & Selected Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Skill Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredSkills.map((skill) => {
              const isSelected = selectedSkill?.name === skill.name;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedSkill(skill)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer relative group ${
                    isSelected
                      ? 'bg-slate-900 border-blue-500 shadow-lg shadow-blue-500/10'
                      : 'bg-slate-900/60 hover:bg-slate-900 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 group-hover:scale-105 transition-transform">
                      {getIcon(skill.icon)}
                    </div>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                      skill.category === 'cybersecurity'
                        ? 'bg-emerald-950/60 border-emerald-800/50 text-emerald-400'
                        : 'bg-blue-950/60 border-blue-800/50 text-blue-400'
                    }`}>
                      {skill.level}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                    {skill.description}
                  </p>

                  {isSelected && (
                    <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-blue-400 animate-ping" />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Selected Skill Detail Inspector */}
          <div className="lg:col-span-4 sticky top-28">
            {selectedSkill && (
              <motion.div
                key={selectedSkill.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 rounded-2xl bg-slate-900 border border-blue-500/40 shadow-xl space-y-4"
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                      {getIcon(selectedSkill.icon)}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">{selectedSkill.name}</h4>
                      <span className="text-xs font-mono text-blue-400 capitalize">
                        {selectedSkill.category} Domain
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase">Capability Overview</span>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      {selectedSkill.description}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 space-y-2">
                    <div className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5" />
                      Production Deployment Ready
                    </div>
                    <p className="text-[11px] text-slate-400 leading-normal">
                      Integrated into real-world projects such as ZenJournal, NutriTrack, Fresh Farm, and Alumni Management.
                    </p>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-slate-400 font-mono flex items-center justify-between border-t border-slate-800">
                  <span>Proficiency: {selectedSkill.level}</span>
                  <span className="text-blue-400">Bluecrest Core Stack</span>
                </div>
              </motion.div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
