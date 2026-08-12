import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, ShieldCheck, Cpu, Play, CheckCircle2, AlertTriangle, RefreshCw, Layers } from 'lucide-react';

export const CyberTerminalVisualizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'terminal' | 'security' | 'tech'>('terminal');
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [scanProgress, setScanProgress] = useState<number>(100);
  const [isScanning, setIsScanning] = useState<boolean>(false);

  const terminalLogs = [
    "$ bluecrest-cli init --mode=production",
    "✔ Loading Full-Stack Modules (React 19, TypeScript, Node.js)",
    "✔ Initializing Security Engines (Burp Suite Protocol Checks)",
    "$ nmap -sV -T4 bluecrest-app.local",
    "✔ Port 443/TCP: HTTPS (TLS v1.3 - Strong Cipher Suites)",
    "✔ OWASP Top 10 Audit: 0 High Vulnerabilities Detected",
    "✔ Database Security: Firebase & MySQL Prepared Statements Enabled",
    "--------------------------------------------------",
    "⚡ STATUS: Secure, Scalable & Production-Ready",
    "🚀 Bluecrest Digital Product Engine Active in Namakkal & Salem"
  ];

  useEffect(() => {
    let currentLine = 0;
    setTerminalOutput([]);
    setIsTyping(true);

    const interval = setInterval(() => {
      if (currentLine < terminalLogs.length) {
        const nextLine = terminalLogs[currentLine];
        setTerminalOutput(prev => [...prev, nextLine]);
        currentLine++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 600);

    return () => clearInterval(interval);
  }, []);

  const handleRunSecurityScan = () => {
    setIsScanning(true);
    setScanProgress(0);
    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          return 100;
        }
        return prev + 25;
      });
    }, 300);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-slate-950/90 border border-slate-800 rounded-2xl shadow-2xl shadow-blue-950/30 overflow-hidden backdrop-blur-xl">
      {/* Top Window Bar */}
      <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800/80 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-600/40"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600/40"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/40"></div>
          <span className="ml-3 text-xs font-mono text-slate-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            bluecrest-terminal ~ v2.4.0
          </span>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center space-x-1 bg-slate-950/80 p-1 rounded-lg border border-slate-800">
          <button
            onClick={() => setActiveTab('terminal')}
            className={`px-2.5 py-1 text-xs font-mono rounded-md transition-all flex items-center gap-1.5 ${
              activeTab === 'terminal' 
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' 
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            CLI
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`px-2.5 py-1 text-xs font-mono rounded-md transition-all flex items-center gap-1.5 ${
              activeTab === 'security' 
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' 
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            Security Audit
          </button>
          <button
            onClick={() => setActiveTab('tech')}
            className={`px-2.5 py-1 text-xs font-mono rounded-md transition-all flex items-center gap-1.5 ${
              activeTab === 'tech' 
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' 
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            Stack
          </button>
        </div>
      </div>

      {/* Window Body */}
      <div className="p-5 font-mono text-xs sm:text-sm min-h-[280px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {activeTab === 'terminal' && (
            <motion.div 
              key="terminal"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="space-y-2 text-slate-300"
            >
              {terminalOutput.map((line, idx) => (
                <div key={idx} className="flex items-start gap-2 leading-relaxed">
                  {line.startsWith('$') ? (
                    <span className="text-cyan-400 font-semibold">{line}</span>
                  ) : line.startsWith('✔') ? (
                    <span className="text-emerald-400 flex items-center gap-1">
                      {line}
                    </span>
                  ) : line.startsWith('⚡') || line.startsWith('🚀') ? (
                    <span className="text-amber-300 font-bold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      {line}
                    </span>
                  ) : (
                    <span className="text-slate-400">{line}</span>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="flex items-center gap-1 text-cyan-400">
                  <span>Processing security packet</span>
                  <span className="animate-ping font-bold">_</span>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === 'security' && (
            <motion.div
              key="security"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div>
                  <h4 className="text-sm font-sans font-semibold text-white flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Bluecrest Security Hardening Protocol
                  </h4>
                  <p className="text-xs text-slate-400 font-sans">
                    Practical cybersecurity principles built into every application
                  </p>
                </div>
                <button
                  onClick={handleRunSecurityScan}
                  disabled={isScanning}
                  className="px-3 py-1.5 text-xs font-sans font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-lg hover:bg-emerald-500/20 transition-all flex items-center gap-1.5 disabled:opacity-50 cursor-pointer"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isScanning ? 'animate-spin' : ''}`} />
                  {isScanning ? 'Scanning...' : 'Re-Audit Code'}
                </button>
              </div>

              {/* Progress bar */}
              {isScanning && (
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Checking OWASP & Vulnerabilities...</span>
                    <span>{scanProgress}%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-emerald-400 h-full transition-all duration-300"
                      style={{ width: `${scanProgress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Check items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans">
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-white font-medium">Input Sanitization (XSS)</div>
                    <div className="text-slate-400 text-[11px]">Strict HTML escaping & validation</div>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-white font-medium">SQL Injection Prevention</div>
                    <div className="text-slate-400 text-[11px]">Parameterized queries & ORM guards</div>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-white font-medium">Network Protocol Analysis</div>
                    <div className="text-slate-400 text-[11px]">Wireshark & Nmap traffic auditing</div>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-white font-medium">Pentesting Methodology</div>
                    <div className="text-slate-400 text-[11px]">Burp Suite endpoint inspection</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'tech' && (
            <motion.div
              key="tech"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="space-y-3 font-sans"
            >
              <div className="text-xs text-slate-400">
                Core engineering stack deployed across Bluecrest web apps:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                <div className="p-2.5 rounded-lg bg-blue-950/30 border border-blue-800/40 text-center">
                  <div className="text-xs font-semibold text-blue-300">React & TypeScript</div>
                  <div className="text-[10px] text-slate-400">Frontend Engine</div>
                </div>
                <div className="p-2.5 rounded-lg bg-cyan-950/30 border border-cyan-800/40 text-center">
                  <div className="text-xs font-semibold text-cyan-300">Node.js & Express</div>
                  <div className="text-[10px] text-slate-400">Backend Services</div>
                </div>
                <div className="p-2.5 rounded-lg bg-amber-950/30 border border-amber-800/40 text-center">
                  <div className="text-xs font-semibold text-amber-300">Firebase & MySQL</div>
                  <div className="text-[10px] text-slate-400">Database Layer</div>
                </div>
                <div className="p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-800/40 text-center">
                  <div className="text-xs font-semibold text-emerald-300">Wireshark & Burp</div>
                  <div className="text-[10px] text-slate-400">Cybersecurity Tools</div>
                </div>
                <div className="p-2.5 rounded-lg bg-purple-950/30 border border-purple-800/40 text-center">
                  <div className="text-xs font-semibold text-purple-300">AWS Cloud</div>
                  <div className="text-[10px] text-slate-400">Certified Hosting</div>
                </div>
                <div className="p-2.5 rounded-lg bg-sky-950/30 border border-sky-800/40 text-center">
                  <div className="text-xs font-semibold text-sky-300">Tailwind & Motion</div>
                  <div className="text-[10px] text-slate-400">UI & Micro-Interactions</div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom bar */}
        <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-sans">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>K.S.R College of Engineering (2024–2028)</span>
          </div>
          <span className="text-slate-400">Namakkal & Salem Region</span>
        </div>
      </div>
    </div>
  );
};
