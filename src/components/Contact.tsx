import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MessageSquare, MapPin, Send, CheckCircle2, Clock, Instagram, Linkedin, Github, ShieldAlert } from 'lucide-react';
import { companyData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    service: 'Full-Stack Web Development',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formattedMessage = `*New Inquiry for Bluecrest*%0A%0A*Name:* ${encodeURIComponent(formState.name)}%0A*Email:* ${encodeURIComponent(formState.email)}%0A*Service:* ${encodeURIComponent(formState.service)}%0A*Subject/Title:* ${encodeURIComponent(formState.subject)}%0A*Requirements & Timeline:* ${encodeURIComponent(formState.message)}`;
    
    const whatsappUrl = `https://wa.me/91${companyData.contact.whatsapp}?text=${formattedMessage}`;

    // Directly launch WhatsApp with message payload
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/60 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-blue-400 text-xs font-mono">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let's Build Something Together.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Open to freelance projects, partnerships, and full-stack development work for startups and local businesses across Namakkal & Salem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details & Info Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white">Direct Channels</h3>
              
              <div className="space-y-4 text-xs font-mono">
                {/* Email */}
                <a 
                  href={`mailto:${companyData.contact.email}`}
                  className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 flex items-center gap-3.5 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-blue-950 text-blue-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-[10px]">EMAIL US</div>
                    <div className="text-white font-sans font-semibold text-sm">{companyData.contact.email}</div>
                  </div>
                </a>

                {/* WhatsApp & Phone */}
                <a 
                  href={`https://wa.me/91${companyData.contact.whatsapp}?text=Hello%20Bluecrest%20Team%2C%20I%20would%20like%20to%20discuss%20a%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-800/50 hover:border-emerald-500 flex items-center justify-between gap-3.5 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-lg bg-emerald-500 text-slate-950 group-hover:scale-110 transition-transform font-bold">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-emerald-400 text-[10px] font-bold">WHATSAPP QUICK CHAT</div>
                      <div className="text-white font-sans font-bold text-sm">{companyData.contact.whatsappFormatted}</div>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-[10px] rounded-md border border-emerald-500/30">
                    Online
                  </span>
                </a>

                {/* Location */}
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-cyan-950 text-cyan-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-[10px]">LOCATION</div>
                    <div className="text-white font-sans font-semibold text-xs">{companyData.contact.location}</div>
                    <div className="text-[11px] text-slate-400 font-sans mt-0.5">{companyData.contact.address}</div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-purple-950 text-purple-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-[10px]">WORKING HOURS</div>
                    <div className="text-white font-sans font-medium text-xs">{companyData.contact.workingHours}</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-slate-800">
                <div className="text-xs font-mono text-slate-400 mb-3">FOLLOW BLUECREST</div>
                <div className="flex items-center gap-2">
                  <a
                    href={`https://wa.me/91${companyData.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                  <a
                    href={companyData.contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-pink-400 hover:border-pink-500/50 transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={companyData.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/50 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={companyData.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white">Send Us a Direct Inquiry</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Fill out the form below or reach us directly on WhatsApp (+91 63825 99927).
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Inquiry Received!</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Thank you, <strong className="text-emerald-300">{formState.name}</strong>. The Bluecrest team has received your message and will reply within 2–4 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormState({ name: '', email: '', subject: '', service: 'Full-Stack Web Development', message: '' });
                    }}
                    className="mt-2 px-4 py-2 text-xs font-semibold text-emerald-300 bg-emerald-950 border border-emerald-800 rounded-lg hover:bg-emerald-900"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Anand Kumar"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="e.g. anand@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Service Required</label>
                      <select
                        value={formState.service}
                        onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500 transition-colors"
                      >
                        <option value="Full-Stack Web Development">Full-Stack Web Development</option>
                        <option value="Local Shop / WhatsApp E-Commerce">Local Shop / WhatsApp E-Commerce</option>
                        <option value="Cybersecurity Audit & Pentesting">Cybersecurity Audit & Pentesting</option>
                        <option value="College / Student Portal">College / Student Portal</option>
                        <option value="Other / General Freelance">Other / General Freelance</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Subject / Project Title</label>
                      <input
                        type="text"
                        required
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        placeholder="e.g. Website for Salem Dairy Farm"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Project Requirements & Timeline *</label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Describe your project goals, features needed, or questions for Bluecrest..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 text-xs font-bold text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 hover:from-emerald-500 hover:to-blue-500 rounded-xl shadow-lg shadow-emerald-950/40 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <MessageSquare className="w-4 h-4" />
                    {isSubmitting ? 'Opening WhatsApp...' : 'Submit Inquiry via WhatsApp (+91 63825 99927)'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
