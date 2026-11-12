import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Clock, ShieldCheck, HeartHandshake, Wifi, Sparkles, Check } from 'lucide-react';

interface BenefitsProps {
  lang: Language;
}

export const BenefitsSection: React.FC<BenefitsProps> = ({ lang }) => {
  const t = translations[lang];

  const icons = [Clock, ShieldCheck, HeartHandshake, Wifi];

  return (
    <section id="benefits" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.benefits.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
            {t.benefits.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.benefits.subtitle}
          </p>
        </div>

        {/* Benefits Split Grid: Left side image with authentic customer story + Right side benefit cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-12">
          
          {/* Authentic photography of rural homemaker receiving domestic LPG cylinder */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 group">
              <img
                src="/src/assets/images/rural_family_lpg_customer_1794497751733.jpg"
                alt="Rural Indian customer receiving LPG domestic cylinder delivery at village home"
                className="w-full h-80 sm:h-96 lg:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent flex flex-col justify-end p-6">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 mb-1">
                  <Check className="w-4 h-4" />
                  <span>{lang === 'kn' ? 'ಗ್ರಾಮೀಣ ಮಹಿಳೆಯರಿಗೆ ಮತ್ತು ಕುಟುಂಬಗಳಿಗೆ ಗೌರವ' : 'Real Customer Impact Story'}</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {lang === 'kn' ? '"ದಿನವಿಡೀ ಕಾಯುವ ಚಿಂತೆ ತಪ್ಪಿತು, ಹೊಲದ ಕೆಲಸ ಮುಗಿಸಿ ಗ್ಯಾಸ್ ಪಡೆಯುತ್ತಿದ್ದೇವೆ"' : '"We no longer lose a day\'s agricultural wage waiting on the roadside."'}
                </h4>
                <p className="text-xs text-slate-300">
                  {lang === 'kn' 
                    ? '— ಪಾರ್ವತಮ್ಮ, ಸಿ.ಎಸ್. ಪುರ ಗ್ರಾಮ, ತುಮಕೂರು ಜಿಲ್ಲೆ' 
                    : '— Parvathamma, Village Resident, Tumakuru District'}
                </p>
              </div>
            </div>
          </div>

          {/* Right side: 4 Impact Cards with quantitative metrics */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {t.benefits.cards.map((card, idx) => {
              const Icon = icons[idx] || Sparkles;

              return (
                <div
                  key={card.title}
                  className="bg-slate-50/70 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-emerald-700 flex items-center justify-center shadow-xs">
                        <Icon className="w-6 h-6" />
                      </span>
                      <span className="text-2xl font-black text-slate-900 tabular-nums">
                        {card.metric}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                      {card.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {card.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200/60 text-xs font-semibold text-emerald-800">
                    {card.metricLabel}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
