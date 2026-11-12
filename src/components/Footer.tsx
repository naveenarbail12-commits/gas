import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Flame, Phone, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenRegisterModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onToggleLang,
  onOpenRegisterModal,
}) => {
  const t = translations[lang];

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-white">
              <span className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
                <Flame className="w-4 h-4 text-amber-300 fill-amber-300" />
              </span>
              <span className="text-lg font-extrabold tracking-tight">
                GramaLPG · ಗ್ರಾಮೀಣ ಗ್ಯಾಸ್
              </span>
            </div>
            
            <p className="text-slate-400 text-xs max-w-sm leading-relaxed">
              {lang === 'kn' 
                ? 'ಗ್ರಾಮೀಣ ಭಾಗದ ಕುಟುಂಬಗಳಿಗೆ ಸಕಾಲಿಕ ಅಡುಗೆ ಅನಿಲ ತಲುಪಿಸಲು ನಿರ್ಮಿಸಲಾದ ಸುಧಾರಿತ ವಾಹನ ಟ್ರ್ಯಾಕಿಂಗ್ ಮತ್ತು ಎಚ್ಚರಿಕೆ ವೇದಿಕೆ.'
                : 'Advanced real-time LPG vehicle tracking and automated siren alert system built specifically for rural villages and Gram Panchayats.'}
            </p>

            <div className="flex items-center gap-2 text-[11px] text-emerald-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{t.footer.disclaimer}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="text-slate-200 font-bold text-xs uppercase tracking-wider">
              {lang === 'kn' ? 'ಮುಖ್ಯ ಲಿಂಕ್‌ಗಳು' : 'Quick Access'}
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#tracker" className="hover:text-white transition-colors">
                  {t.nav.track}
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  {t.nav.features}
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  {t.nav.howItWorks}
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-white transition-colors">
                  {t.nav.benefits}
                </a>
              </li>
              <li>
                <a href="#agencies" className="hover:text-white transition-colors">
                  {t.nav.agencies}
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Emergency */}
          <div className="space-y-2">
            <h4 className="text-slate-200 font-bold text-xs uppercase tracking-wider">
              {lang === 'kn' ? 'ತುರ್ತು ಸಹಾಯವಾಣಿ' : 'Helplines'}
            </h4>
            <div className="space-y-1 text-xs">
              <div className="text-white font-mono font-bold">1800-425-7890 (Toll-Free)</div>
              <div className="text-amber-400 font-mono font-bold">1906 (24x7 Gas Emergency)</div>
              <div className="text-slate-500 pt-1">
                Mon - Sat: 7:00 AM - 8:00 PM
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onToggleLang}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 text-xs font-semibold cursor-pointer"
              >
                <span>{lang === 'en' ? 'ಕನ್ನಡ ಆವೃತ್ತಿ' : 'English Version'}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Quiet Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {t.footer.rights}
          </div>
          <div className="flex items-center gap-4">
            <a href="#contact" className="hover:text-slate-300 transition-colors">
              {lang === 'kn' ? 'ಗ್ರಾಮ ನೋಂದಣಿ' : 'Village Registration'}
            </a>
            <span>·</span>
            <a href="#agencies" className="hover:text-slate-300 transition-colors">
              {lang === 'kn' ? 'ಏಜೆನ್ಸಿ ಪೋರ್ಟಲ್' : 'Distributor Portal'}
            </a>
            <span>·</span>
            <a href="#contact" className="hover:text-slate-300 transition-colors">
              {lang === 'kn' ? 'ಗ್ರಾಮೀಣ ಸಹಾಯವಾಣಿ' : 'Rural Desk'}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
