import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Building2, Truck, BellRing, ArrowRight, Play, CheckCircle } from 'lucide-react';

interface HowItWorksProps {
  lang: Language;
}

export const HowItWorksSection: React.FC<HowItWorksProps> = ({ lang }) => {
  const [simulationStep, setSimulationStep] = useState<number>(1);
  const t = translations[lang];

  const stepsData = [
    {
      step: "01",
      actorEn: "Gas Agency / Distributor",
      actorKn: "ಗ್ಯಾಸ್ ಏಜೆನ್ಸಿ / ವಿತರಕರು",
      titleEn: "Agency Posts Delivery Schedule",
      titleKn: "ಏಜೆನ್ಸಿಯಿಂದ ಮಾರ್ಗ ಮತ್ತು ವೇಳಾಪಟ್ಟಿ ಪ್ರಕಟಣೆ",
      descEn: "Agency manager configures weekly village routes, allocates cylinder stock, and syncs timetables with Gram Panchayat centers.",
      descKn: "ಏಜೆನ್ಸಿ ವ್ಯವಸ್ಥಾಪಕರು ಪ್ರತಿ ವಾರದ ಗ್ರಾಮವಾರು ಮಾರ್ಗವನ್ನು ನಿಗದಿಪಡಿಸಿ, ಎಷ್ಟು ಸಿಲಿಂಡರ್ ಕಳುಹಿಸಬೇಕು ಎಂದು ವೇಳಾಪಟ್ಟಿಯನ್ನು ಡಿಜಿಟಲ್ ರೂಪದಲ್ಲಿ ಪ್ರಕಟಿಸುತ್ತಾರೆ.",
      badgeEn: "Step 1: Planning & Dispatch",
      badgeKn: "ಹಂತ 1: ವೇಳಾಪಟ್ಟಿ ರಚನೆ",
      actionEn: "Route Broadcasted to 12 Villages",
      actionKn: "12 ಗ್ರಾಮಗಳಿಗೆ ವೇಳಾಪಟ್ಟಿ ಪ್ರಕಟಿಸಲಾಗಿದೆ",
      icon: Building2,
      color: "from-blue-600 to-indigo-700",
    },
    {
      step: "02",
      actorEn: "Delivery Mini-Truck Driver",
      actorKn: "ವಾಹನ ಚಾಲಕರು",
      titleEn: "Driver Updates Delivery Status",
      titleKn: "ಚಾಲಕರಿಂದ ನೇರ ಮಾರ್ಗ ನವೀಕರಣ",
      descEn: "With simple one-touch buttons on a rugged mobile phone, the driver logs departure, village checkpoints, and arrival at the village square.",
      descKn: "ಚಾಲಕರು ತಮ್ಮ ಮೊಬೈಲ್‌ನಲ್ಲಿ ಕೇವಲ ಒಂದು ಬಟನ್ ಒತ್ತುವ ಮೂಲಕ ವಾಹನ ಹೊರಟ ಸಮಯ, ರಸ್ತೆ ಅಡಚಣೆ ಮತ್ತು ಗ್ರಾಮದ ಚೌಕ ತಲುಪಿದ ವಿವರ ದಾಖಲಿಸುತ್ತಾರೆ.",
      badgeEn: "Step 2: Real-time Checkpoints",
      badgeKn: "ಹಂತ 2: ನೈಜ ಸಮಯದ ನವೀಕರಣ",
      actionEn: "GPS Milestone Checked: Shivalli Cross",
      actionKn: "ಜಿಪಿಎಸ್ ಮೈಲಿಗಲ್ಲು: ಶಿವಳ್ಳಿ ಕ್ರಾಸ್ ತಲುಪಿದೆ",
      icon: Truck,
      color: "from-emerald-600 to-teal-700",
    },
    {
      step: "03",
      actorEn: "Village Customer & Household",
      actorKn: "ಗ್ರಾಹಕರು & ಕುಟುಂಬಗಳು",
      titleEn: "Customers Receive Automated Alerts",
      titleKn: "ಗ್ರಾಹಕರಿಗೆ ತಕ್ಷಣದ ಎಚ್ಚರಿಕೆ & ವಿತರಣೆ",
      descEn: "Households receive automated Kannada SMS and voice alerts 30 minutes in advance, and the arrival siren sounds as the vehicle halts at the village square.",
      descKn: "ಗ್ರಾಮಸ್ಥರಿಗೆ 30 ನಿಮಿಷ ಮೊದಲೇ ಕನ್ನಡ SMS ಮತ್ತು ಕರೆ ಬರುತ್ತದೆ. ವಾಹನ ಗ್ರಾಮದ ಮಧ್ಯಭಾಗಕ್ಕೆ ಬಂದಾಗ ಸೈರನ್ ಮೊಳಗುತ್ತದೆ. ಯಾರೂ ಗ್ಯಾಸ್ ತಪ್ಪಿಸಿಕೊಳ್ಳುವುದಿಲ್ಲ.",
      badgeEn: "Step 3: Alert & Delivery",
      badgeKn: "ಹಂತ 3: ಎಚ್ಚರಿಕೆ & ವಿತರಣೆ",
      actionEn: "SMS Alert Delivered + Siren Sounded",
      actionKn: "SMS ಎಚ್ಚರಿಕೆ ತಲುಪಿದೆ + ಸೈರನ್ ಮೊಳಗಿದೆ",
      icon: BellRing,
      color: "from-amber-600 to-orange-700",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-200 mb-3">
            <span>{t.howItWorks.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
            {t.howItWorks.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.howItWorks.subtitle}
          </p>
        </div>

        {/* 3 Sequential Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-12">
          {stepsData.map((item, index) => {
            const Icon = item.icon;
            const isCurrentSim = simulationStep === index + 1;

            return (
              <div
                key={item.step}
                onClick={() => setSimulationStep(index + 1)}
                className={`bg-white rounded-2xl p-7 border transition-all cursor-pointer relative flex flex-col justify-between ${
                  isCurrentSim
                    ? 'border-emerald-600 shadow-md ring-2 ring-emerald-500/20'
                    : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black text-slate-300 tabular-nums">
                      {item.step}
                    </span>
                    <span className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center shadow-sm`}>
                      <Icon className="w-6 h-6" />
                    </span>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                    {lang === 'kn' ? item.actorKn : item.actorEn}
                  </span>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                    {lang === 'kn' ? item.titleKn : item.titleEn}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {lang === 'kn' ? item.descKn : item.descEn}
                  </p>
                </div>

                <div className={`pt-3 border-t text-xs font-semibold flex items-center gap-2 ${
                  isCurrentSim ? 'text-emerald-700 border-emerald-100' : 'text-slate-500 border-slate-100'
                }`}>
                  <CheckCircle className={`w-4 h-4 shrink-0 ${isCurrentSim ? 'text-emerald-600' : 'text-slate-400'}`} />
                  <span className="truncate">{lang === 'kn' ? item.actionKn : item.actionEn}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Step Visualizer */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {lang === 'kn' ? 'ನೇರ ಪ್ರಕ್ರಿಯೆ ಸಿಮ್ಯುಲೇಶನ್' : 'Live Interactive Step Simulator'}
              </span>
              <h4 className="text-lg font-bold text-slate-900 mt-0.5">
                {lang === 'kn' 
                  ? `ಪ್ರಸ್ತುತ ಹಂತ: ${simulationStep} / 3 - ${stepsData[simulationStep - 1].actorKn}`
                  : `Active Stage: ${simulationStep} of 3 - ${stepsData[simulationStep - 1].actorEn}`}
              </h4>
            </div>

            <button
              onClick={() => setSimulationStep((prev) => (prev % 3) + 1)}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm transition-all cursor-pointer self-start sm:self-auto"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>{lang === 'kn' ? 'ಮುಂದಿನ ಹಂತ ಪರೀಕ್ಷಿಸಿ' : 'Advance to Next Step'}</span>
            </button>
          </div>

          <div className="pt-6">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-xs">
                  {simulationStep}
                </span>
                <span className="text-sm font-semibold text-slate-800">
                  {lang === 'kn' ? stepsData[simulationStep - 1].actionKn : stepsData[simulationStep - 1].actionEn}
                </span>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-100/80 px-2.5 py-1 rounded">
                {lang === 'kn' ? 'ಸಕ್ರಿಯ' : 'Status: Live Verified'}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
