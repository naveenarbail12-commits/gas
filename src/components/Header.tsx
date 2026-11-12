import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Menu, X, Globe, Flame, BellRing } from 'lucide-react';

interface HeaderProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenRegisterModal: () => void;
  onOpenDownloadModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onToggleLang,
  onOpenRegisterModal,
  onOpenDownloadModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.track, href: "#tracker" },
    { label: t.nav.features, href: "#features" },
    { label: t.nav.howItWorks, href: "#how-it-works" },
    { label: t.nav.benefits, href: "#benefits" },
    { label: t.nav.agencies, href: "#agencies" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: Zone 1 (Wordmark) — Zone 2 (Nav links) — Zone 3 (1 Primary Action) */}
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Single text element wordmark */}
          <a href="#home" className="flex items-center gap-2.5 text-slate-900 group shrink-0">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-green-700 flex items-center justify-center text-white shadow-sm shadow-emerald-700/20">
              <Flame className="w-5 h-5 text-amber-300 fill-amber-300" />
            </span>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 whitespace-nowrap">
                GramaLPG <span className="text-emerald-700 font-bold">· ಗ್ರಾಮೀಣ ಗ್ಯಾಸ್</span>
              </span>
              <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                {lang === 'kn' ? 'ವಾಹನ ಎಚ್ಚರಿಕೆ ಮತ್ತು ಟ್ರ್ಯಾಕಿಂಗ್' : 'Rural Vehicle Alert & Tracking'}
              </span>
            </div>
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary action + Language Switch */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Toggle Button with Kannada and English */}
            <button
              onClick={onToggleLang}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-800 transition-colors cursor-pointer"
              aria-label="Toggle Kannada / English"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-700" />
              <span>{lang === 'en' ? 'ಕನ್ನಡ' : 'English'}</span>
            </button>

            {/* Primary Action Button */}
            <button
              onClick={onOpenRegisterModal}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm transition-all whitespace-nowrap cursor-pointer active:scale-95"
            >
              <BellRing className="w-3.5 h-3.5" />
              {t.hero.registerVillage}
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              aria-label="Open mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-3 rounded-lg text-base font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegisterModal();
                }}
                className="w-full py-3.5 px-4 text-center text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-sm"
              >
                {t.hero.registerVillage}
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDownloadModal();
                }}
                className="w-full py-3.5 px-4 text-center text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl"
              >
                {t.hero.downloadApp}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
