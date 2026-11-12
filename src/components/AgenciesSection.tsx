import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { mockAgenciesData } from '../data/mockData';
import { 
  Building2, 
  CalendarRange, 
  Navigation2, 
  FileSpreadsheet, 
  CheckCircle2, 
  SlidersHorizontal,
  Truck,
  ArrowUpRight,
  TrendingDown,
  ShieldCheck
} from 'lucide-react';

interface AgenciesProps {
  lang: Language;
}

export const AgenciesSection: React.FC<AgenciesProps> = ({ lang }) => {
  const [showPortalDemo, setShowPortalDemo] = useState(false);
  const t = translations[lang];

  return (
    <section id="agencies" className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 mb-3">
            <Building2 className="w-3.5 h-3.5 text-blue-700" />
            <span>{t.agencies.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
            {t.agencies.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.agencies.subtitle}
          </p>
        </div>

        {/* Agency Feature Split: Logistics depot photo & 3 core agency tools */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-12">
          
          {/* Real photograph of LPG Distribution Depot and Fleet Hub */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 group">
              <img
                src="/src/assets/images/gas_agency_dispatch_hub_1794497750943.jpg"
                alt="Modern regional LPG gas cylinder distribution logistics center and vehicle fleet"
                className="w-full h-72 sm:h-88 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="text-xs font-bold uppercase text-emerald-400">
                    {lang === 'kn' ? 'ಗ್ಯಾಸ್ ವಿತರಕರಿಗೆ ಸಂಪೂರ್ಣ ಡಿಜಿಟಲ್ ಬೆಂಬಲ' : 'End-to-End Distributor Operations'}
                  </span>
                  <p className="text-sm font-semibold text-slate-200 mt-1">
                    {lang === 'kn' ? 'ಕಡಿಮೆ ಇಂಧನ ಖರ್ಚು ಮತ್ತು ಪರಿಪೂರ್ಣ ಸಿಲಿಂಡರ್ ಲೆಕ್ಕಪರಿಶೋಧನೆ' : 'Eliminate dead kilometers and unverified cylinder losses'}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stat Overlay Strip */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="p-3 bg-white rounded-xl border border-slate-200 text-center shadow-xs">
                <span className="block text-lg font-black text-slate-900 tabular-nums">98.6%</span>
                <span className="text-[11px] text-slate-500 font-medium">{lang === 'kn' ? 'ಸಮಯಪಾಲನೆ' : 'On-Time'}</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 text-center shadow-xs">
                <span className="block text-lg font-black text-emerald-700 tabular-nums">-18%</span>
                <span className="text-[11px] text-slate-500 font-medium">{lang === 'kn' ? 'ಇಂಧನ ಉಳಿತಾಯ' : 'Fuel Saved'}</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 text-center shadow-xs">
                <span className="block text-lg font-black text-blue-700 tabular-nums">0%</span>
                <span className="text-[11px] text-slate-500 font-medium">{lang === 'kn' ? 'ಕರೆ ಒತ್ತಡ' : 'Phone Clutter'}</span>
              </div>
            </div>
          </div>

          {/* Agency 3 Key Pillars */}
          <div className="lg:col-span-6 space-y-5">
            {t.agencies.features.map((feat, idx) => {
              const icons = [CalendarRange, Navigation2, FileSpreadsheet];
              const Icon = icons[idx] || SlidersHorizontal;

              return (
                <div
                  key={feat.title}
                  className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-sm transition-all"
                >
                  <div className="flex items-start gap-4">
                    <span className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-100">
                      <Icon className="w-6 h-6" />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                        {feat.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="pt-2">
              <button
                onClick={() => setShowPortalDemo(!showPortalDemo)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 shadow-md shadow-blue-700/20 transition-all cursor-pointer"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>{showPortalDemo ? (lang === 'kn' ? 'ಪೋರ್ಟಲ್ ಮುಚ್ಚಿ' : 'Hide Portal Demo') : t.agencies.portalCta}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Expandable Live Agency Operations Portal Simulation */}
        {showPortalDemo && (
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl transition-all">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                    DISTRIBUTOR LOGISTICS CONSOLE
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white mt-1">
                  Kaveri Gas Agency (Mandya Regional Hub)
                </h4>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-slate-300">
                <span>Active Fleet: 4 Trucks</span>
                <span>·</span>
                <span className="text-emerald-400">140 / 260 Refills Completed</span>
              </div>
            </div>

            {/* Fleet Status Table inside Agency Portal */}
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 font-mono text-[11px]">
                    <th className="py-2.5 px-3">Vehicle ID</th>
                    <th className="py-2.5 px-3">Driver Name</th>
                    <th className="py-2.5 px-3">Assigned Route</th>
                    <th className="py-2.5 px-3">Cylinder Stock</th>
                    <th className="py-2.5 px-3">GPS Speed</th>
                    <th className="py-2.5 px-3">Current Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 font-sans">
                  {mockAgenciesData.activeVehicles.map(v => (
                    <tr key={v.id} className="hover:bg-slate-800/40">
                      <td className="py-3 px-3 font-mono font-bold text-emerald-400">{v.reg}</td>
                      <td className="py-3 px-3 text-slate-200 font-medium">{v.driver}</td>
                      <td className="py-3 px-3 text-slate-300">{v.route}</td>
                      <td className="py-3 px-3 font-mono text-slate-200 tabular-nums">{v.cylinders}</td>
                      <td className="py-3 px-3 font-mono text-slate-400 tabular-nums">{v.speed}</td>
                      <td className="py-3 px-3">
                        <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-950 text-emerald-400 border border-emerald-800">
                          {v.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Encrypted OTP customer delivery confirmation enabled</span>
              </div>
              <div className="font-mono text-slate-300">
                Automatic customer SMS dispatch latency: &lt; 800ms
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
