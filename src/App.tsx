/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language, VillageDeliveryInfo } from './types';
import { mockVillages } from './data/mockData';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturesSection } from './components/FeaturesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { BenefitsSection } from './components/BenefitsSection';
import { AgenciesSection } from './components/AgenciesSection';
import { ContactSection } from './components/ContactSection';
import { VillageRegisterModal } from './components/VillageRegisterModal';
import { DownloadAppModal } from './components/DownloadAppModal';
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<Language>('kn'); // Kannada-first support as requested!
  const [selectedVillage, setSelectedVillage] = useState<VillageDeliveryInfo>(mockVillages[0]);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'kn' ? 'en' : 'kn'));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-200 selection:text-emerald-900">
      
      {/* 1. Top Navigation Bar conforming to Top Bar Contract */}
      <Header
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenRegisterModal={() => setIsRegisterModalOpen(true)}
        onOpenDownloadModal={() => setIsDownloadModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Home Page / Hero Section with title, slogan, CTAs, and live tracking preview */}
        <Hero
          lang={lang}
          onOpenRegisterModal={() => setIsRegisterModalOpen(true)}
          onOpenDownloadModal={() => setIsDownloadModalOpen(true)}
          selectedVillage={selectedVillage}
          onSelectVillage={(v) => setSelectedVillage(v)}
        />

        {/* 2. Features Section (Schedule, Alerts, Driver Status, History, Kannada Support) */}
        <FeaturesSection lang={lang} />

        {/* 3. How It Works (Agency posts schedule, Driver updates status, Customers receive notifications) */}
        <HowItWorksSection lang={lang} />

        {/* 4. Benefits (Saves time, Reduces missed deliveries, Helps rural families, Low internet) */}
        <BenefitsSection lang={lang} />

        {/* 5. For Gas Agencies (Schedule management, Driver tracking, Delivery reports) */}
        <AgenciesSection lang={lang} />

        {/* 6. Contact Section (Name, phone, village, message, helpline) */}
        <ContactSection lang={lang} />
      </main>

      {/* Interactive Modals */}
      <VillageRegisterModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        lang={lang}
      />

      <DownloadAppModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
        lang={lang}
      />

      {/* Footer */}
      <Footer
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenRegisterModal={() => setIsRegisterModalOpen(true)}
      />

    </div>
  );
}
