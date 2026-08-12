import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Experience } from './components/Experience';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CompanyProfileModal } from './components/CompanyProfileModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

export default function App() {
  const [isCompanyProfileOpen, setIsCompanyProfileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white antialiased">
      {/* Navbar */}
      <Navbar onOpenCompanyProfile={() => setIsCompanyProfileOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenCompanyProfile={() => setIsCompanyProfileOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <Services />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Company Profile Modal */}
      <CompanyProfileModal
        isOpen={isCompanyProfileOpen}
        onClose={() => setIsCompanyProfileOpen(false)}
      />

      {/* Quick Floating WhatsApp Widget */}
      <WhatsAppFloatingButton />
    </div>
  );
}
