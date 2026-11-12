import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { mockVillages, mockDeliveryHistory } from '../data/mockData';
import { 
  CalendarDays, 
  BellRing, 
  Truck, 
  History, 
  Languages, 
  WifiOff, 
  CheckCircle2, 
  MessageSquare, 
  Clock, 
  Smartphone,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

interface FeaturesSectionProps {
  lang: Language;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'schedule' | 'alerts' | 'driver' | 'history' | 'kannada'>('schedule');
  const [scheduleSearch, setScheduleSearch] = useState('');
  const t = translations[lang];

  const filteredSchedule = mockVillages.filter(v => 
    v.villageName.toLowerCase().includes(scheduleSearch.toLowerCase()) ||
    v.villageNameKn.includes(scheduleSearch) ||
    v.taluk.toLowerCase().includes(scheduleSearch.toLowerCase()) ||
    v.talukKn.includes(scheduleSearch)
  );

  return (
    <section id="features" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mb-3">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.features.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
            {t.features.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.features.subtitle}
          </p>
        </div>

        {/* Feature Cards Grid (Overview of the 5 Core Features + Offline capability) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {t.features.items.map((item, idx) => {
            const icons = {
              schedule: CalendarDays,
              alerts: BellRing,
              driver: Truck,
              history: History,
              kannada: Languages,
              low_internet: WifiOff,
            };
            const Icon = icons[item.id as keyof typeof icons] || CheckCircle2;
            const isSelected = activeTab === item.id;

            return (
              <div
                key={item.id}
                onClick={() => {
                  if (item.id !== 'low_internet') {
                    setActiveTab(item.id as typeof activeTab);
                  }
                }}
                className={`p-6 rounded-2xl border transition-all cursor-pointer relative flex flex-col justify-between ${
                  isSelected 
                    ? 'border-emerald-600 bg-emerald-50/40 shadow-sm ring-1 ring-emerald-600/30' 
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      isSelected ? 'bg-emerald-700 text-white' : 'bg-slate-100 text-slate-700'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </span>
                    <span className="text-xs font-bold text-slate-400 tabular-nums">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-800">
                  <span className="truncate pr-2">{item.benefit}</span>
                  <ChevronRight className="w-4 h-4 shrink-0 text-emerald-600" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Feature Sandbox / Live Simulator */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                {lang === 'kn' ? 'ವೈಶಿಷ್ಟ್ಯಗಳ ಲೈವ್ ಡೆಮೊ' : 'Live Interactive Feature Explorer'}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                {lang === 'kn' ? 'ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ನೀವೇ ಪರೀಕ್ಷಿಸಿ' : 'Experience How Each Feature Works in Real Villages'}
              </h3>
            </div>

            {/* Segmented Control Filter Tabs */}
            <div className="flex items-center gap-1 p-1 bg-white border border-slate-200 rounded-xl overflow-x-auto max-w-full">
              {[
                { id: 'schedule', label: lang === 'kn' ? 'ವೇಳಾಪಟ್ಟಿ' : 'Schedule' },
                { id: 'alerts', label: lang === 'kn' ? 'ಎಚ್ಚರಿಕೆಗಳು' : 'Alerts' },
                { id: 'driver', label: lang === 'kn' ? 'ಚಾಲಕರ ಸ್ಥಿತಿ' : 'Driver Status' },
                { id: 'history', label: lang === 'kn' ? 'ಇತಿಹಾಸ' : 'Passbook' },
                { id: 'kannada', label: lang === 'kn' ? 'ಕನ್ನಡ ಬೆಂಬಲ' : 'Kannada Voice' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-emerald-700 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab 1: Village Delivery Schedule */}
          {activeTab === 'schedule' && (
            <div className="pt-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <p className="text-sm text-slate-600">
                  {lang === 'kn' 
                    ? 'ಗ್ರಾಮ ಪಂಚಾಯತಿ ಅಥವಾ ತಾಲೂಕಿನ ಹೆಸರನ್ನು ಟೈಪ್ ಮಾಡಿ ಮುಂಬರುವ ಗ್ಯಾಸ್ ವಿತರಣಾ ದಿನ ತಿಳಿಯಿರಿ:'
                    : 'Search your Gram Panchayat or Taluk to check the fixed arrival window:'}
                </p>
                <div className="relative w-full sm:w-64">
                  <input
                    type="text"
                    value={scheduleSearch}
                    onChange={(e) => setScheduleSearch(e.target.value)}
                    placeholder={lang === 'kn' ? 'ಗ್ರಾಮ ಹುಡುಕಿ (उदा: ಶಿವಳ್ಳಿ)...' : 'Search village (e.g. Shivalli)...'}
                    className="w-full text-xs py-2 px-3 pl-8 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                  <CalendarDays className="w-4 h-4 text-slate-400 absolute left-2.5 top-2.5" />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse bg-white rounded-xl overflow-hidden border border-slate-200">
                  <thead>
                    <tr className="bg-slate-100/80 text-[11px] font-bold text-slate-600 uppercase border-b border-slate-200">
                      <th className="py-3 px-4">{lang === 'kn' ? 'ಗ್ರಾಮ / ಪಂಚಾಯತಿ' : 'Village / Panchayat'}</th>
                      <th className="py-3 px-4">{lang === 'kn' ? 'ತಾಲೂಕು & ಜಿಲ್ಲೆ' : 'Taluk & District'}</th>
                      <th className="py-3 px-4">{lang === 'kn' ? 'ನಿಗದಿತ ದಿನ' : 'Scheduled Day'}</th>
                      <th className="py-3 px-4">{lang === 'kn' ? 'ಸಮಯ' : 'Time Window'}</th>
                      <th className="py-3 px-4">{lang === 'kn' ? 'ವಾಹನ & ಚಾಲಕರು' : 'Vehicle & Driver'}</th>
                      <th className="py-3 px-4">{lang === 'kn' ? 'ಸ್ಥಿತಿ' : 'Status'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs">
                    {filteredSchedule.map((row) => (
                      <tr key={row.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-900">
                          {lang === 'kn' ? row.villageNameKn : row.villageName}
                        </td>
                        <td className="py-3 px-4 text-slate-600">
                          {lang === 'kn' ? `${row.talukKn}, ${row.districtKn}` : `${row.taluk}, ${row.district}`}
                        </td>
                        <td className="py-3 px-4 font-medium text-emerald-800">
                          {lang === 'kn' ? row.scheduledDayKn : row.scheduledDay}
                        </td>
                        <td className="py-3 px-4 text-slate-700 font-mono tabular-nums">
                          {row.scheduledTime}
                        </td>
                        <td className="py-3 px-4 text-slate-700">
                          <div className="font-mono font-bold text-[11px]">{row.vehicleNumber}</div>
                          <div className="text-slate-500 text-[11px]">{row.driverName}</div>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-bold ${
                            row.status === 'arrived' 
                              ? 'bg-emerald-100 text-emerald-800' 
                              : row.status === 'on_route' 
                              ? 'bg-blue-100 text-blue-800' 
                              : 'bg-slate-100 text-slate-700'
                          }`}>
                            {lang === 'kn' ? row.statusKn : row.statusEn}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tab 2: Delivery Alerts Simulation */}
          {activeTab === 'alerts' && (
            <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-xs font-bold uppercase text-emerald-700">
                  {lang === 'kn' ? 'ಬಹುಮಾಧ್ಯಮ ಎಚ್ಚರಿಕೆಗಳು' : 'Multi-tier Alert System'}
                </span>
                <h4 className="text-xl font-bold text-slate-900 mt-1 mb-3">
                  {lang === 'kn' 
                    ? 'ಸಾಮಾನ್ಯ ಫೋನ್‌ಗಳಿಗೂ ತಲುಪುವ SMS & ಕರೆ ಸಂದೇಶಗಳು' 
                    : 'SMS, Voice Calls & WhatsApp Alerts Delivered to Any Phone'}
                </h4>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  {lang === 'kn'
                    ? 'ಗ್ರಾಹಕರಿಗೆ ಮೂರು ಹಂತಗಳಲ್ಲಿ ಮಾಹಿತಿ ಮುಟ್ಟುತ್ತದೆ: 1 ದಿನ ಮುಂಚಿತವಾಗಿ ವೇಳಾಪಟ್ಟಿ ನೆನಪಿಸುವುದು, ವಾಹನ ಹೊರಟಾಗ ಮಧ್ಯಂತರ ಮಾಹಿತಿ, ಮತ್ತು ಗ್ರಾಮ ಪ್ರವೇಶಿಸುವ 10 ನಿಮಿಷ ಮುಂಚಿತವಾಗಿ ಲೌಡ್ ಸೈರನ್ & SMS.'
                    : 'Villagers receive alerts in 3 timed stages: 24h prior route reminder, intermediate checkpoint updates, and a final 10-minute advance siren notice before entering the village square.'}
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <strong className="text-slate-900 block font-bold">{lang === 'kn' ? '1. ಮುನ್ಸೂಚನೆ SMS (24 ಗಂಟೆ ಮುಂಚೆ)' : 'Stage 1: Advance Notice (24h prior)'}</strong>
                      <span className="text-slate-600">{lang === 'kn' ? 'ಖಾಲಿ ಸಿಲಿಂಡರ್ ಮತ್ತು ಹಣ ಸಿದ್ಧವಾಗಿಟ್ಟುಕೊಳ್ಳಲು ಸಂದೇಶ.' : 'Reminds households to keep empty cylinder and cash ready.'}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <strong className="text-slate-900 block font-bold">{lang === 'kn' ? '2. ಲೈವ್ ಆಗಮನ ಎಚ್ಚರಿಕೆ (30 ನಿಮಿಷ ಮುಂಚೆ)' : 'Stage 2: Live Approach (30 mins prior)'}</strong>
                      <span className="text-slate-600">{lang === 'kn' ? 'ವಾಹನ ಪಕ್ಕದ ಹಳ್ಳಿಯಿಂದ ಹೊರಟಾಗ ಸ್ವಯಂಚಾಲಿತ ಧ್ವನಿ ಕರೆ.' : 'Automated Kannada voice call when vehicle departs previous stop.'}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <strong className="text-slate-900 block font-bold">{lang === 'kn' ? '3. ಗ್ರಾಮ ಆಗಮನ ಹಾರ್ನ್ / ಸೈರನ್' : 'Stage 3: Village Square Arrival Horn'}</strong>
                      <span className="text-slate-600">{lang === 'kn' ? 'ಗ್ರಾಮ ಚೌಕದಲ್ಲಿ ವಾಹನ ನಿಂತಾಗ ಧ್ವನಿ ಎಚ್ಚರಿಕೆ ಮೊಳಗುತ್ತದೆ.' : 'Mini truck driver rings the signature arrival chime so no one misses it.'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Realistic Rural Mobile Device Frame showing Native Kannada SMS */}
              <div className="max-w-xs mx-auto w-full bg-slate-900 text-white rounded-3xl p-4 shadow-2xl border-4 border-slate-800">
                <div className="flex justify-between items-center text-[10px] text-slate-400 pb-3 border-b border-slate-800">
                  <span className="font-mono">10:45 AM</span>
                  <div className="flex items-center gap-1">
                    <span>2G (Full)</span>
                    <Smartphone className="w-3 h-3" />
                  </div>
                </div>

                <div className="mt-3 text-center">
                  <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-800">
                    SMS · VK-GRAMGAS
                  </span>
                </div>

                <div className="mt-4 bg-slate-800/90 rounded-2xl p-3.5 border border-slate-700 text-left space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-300">
                    <span className="font-bold">LPG ವಾಹನ ಎಚ್ಚರಿಕೆ</span>
                    <span className="text-[10px] text-slate-400">10:42 AM</span>
                  </div>
                  <p className="text-xs leading-relaxed text-slate-100 font-sans">
                    ನಮಸ್ಕಾರ, ನಿಮ್ಮ ಗ್ರಾಮ <strong>ಶಿವಳ್ಳಿ</strong>ಗೆ ಗ್ಯಾಸ್ ವಿತರಣಾ ವಾಹನ <span className="text-emerald-400 font-mono font-bold">KA-11-EA-4219</span> ಇನ್ನೂ 18 ನಿಮಿಷಗಳಲ್ಲಿ ತಲುಪಲಿದೆ. ಚಾಲಕರು: ಮಂಜುನಾಥ್ (9845211029). ದಯವಿಟ್ಟು ಖಾಲಿ ಸಿಲಿಂಡರ್‌ನೊಂದಿಗೆ ಗ್ರಾಮ ಚೌಕದಲ್ಲಿ ಹಾಜರಿರಿ.
                  </p>
                  <div className="text-[10px] text-emerald-400 font-medium pt-1 border-t border-slate-700/60">
                    ✓ ಸರ್ಕಾರಿ ಗ್ರಾಮೀಣ ಎಲ್‌ಪಿಜಿ ಸೇವೆ
                  </div>
                </div>

                <div className="mt-4 p-2.5 rounded-xl bg-slate-800/50 text-[11px] text-slate-300 text-center border border-slate-700/50">
                  {lang === 'kn' ? 'ಕೀಪ್ಯಾಡ್ ಫೋನ್‌ನಲ್ಲೂ ನೇರ SMS ಬರುತ್ತದೆ' : 'Works identically on basic feature keypad phones'}
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Driver Status Updates */}
          {activeTab === 'driver' && (
            <div className="pt-6">
              <div className="max-w-2xl mx-auto">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">
                      {lang === 'kn' ? 'ಮಾರ್ಗ ಸಂಖ್ಯೆ: R-104 (ಪಾಂಡವಪುರ - ಶಿವಳ್ಳಿ ರಸ್ತೆ)' : 'Route R-104 (Pandavapura - Shivalli Circuit)'}
                    </h4>
                    <span className="text-xs text-slate-500">
                      {lang === 'kn' ? 'ಚಾಲಕರು: ಮಂಜುನಾಥ್ ಕೆ. · ವಾಹನ: KA-11-EA-4219' : 'Driver: Manjunatha K. · Vehicle: KA-11-EA-4219'}
                    </span>
                  </div>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-lg">
                    {lang === 'kn' ? 'ಲೈವ್ ಪ್ರಗತಿ' : 'Live Checkpoints'}
                  </span>
                </div>

                {/* Vertical Checkpoint Timeline */}
                <div className="space-y-4 relative before:absolute before:left-5 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-300 pl-2">
                  {mockVillages[0].routeStops.map((stop, idx) => (
                    <div key={idx} className="relative flex items-start gap-4">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-white text-xs font-bold z-10 ${
                        stop.completed 
                          ? 'bg-emerald-600' 
                          : stop.current 
                          ? 'bg-blue-600 ring-4 ring-blue-100' 
                          : 'bg-slate-300 text-slate-600'
                      }`}>
                        {stop.completed ? '✓' : idx + 1}
                      </div>
                      <div className={`p-4 rounded-xl border flex-1 ${
                        stop.current 
                          ? 'bg-blue-50/70 border-blue-300 shadow-sm' 
                          : stop.completed 
                          ? 'bg-white border-slate-200' 
                          : 'bg-slate-50 border-slate-200 opacity-75'
                      }`}>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-slate-900">
                            {lang === 'kn' ? stop.nameKn : stop.name}
                          </span>
                          <span className="font-mono text-xs text-slate-500 font-medium">
                            {stop.time}
                          </span>
                        </div>
                        <span className="text-xs text-slate-500 mt-1 block">
                          {stop.completed 
                            ? (lang === 'kn' ? 'ವಿತರಣೆ ಪೂರ್ಣಗೊಂಡಿದೆ' : 'Stops completed & cylinders distributed')
                            : stop.current 
                            ? (lang === 'kn' ? 'ಪ್ರಸ್ತುತ ಈ ಗ್ರಾಮದತ್ತ ವಾಹನ ಬರುತ್ತಿದೆ (ETA 18 ನಿಮಿಷ)' : 'Vehicle currently approaching this stop (ETA 18 mins)')
                            : (lang === 'kn' ? 'ಮುಂದಿನ ಸರದಿ' : 'Upcoming scheduled destination')}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Delivery History & Passbook */}
          {activeTab === 'history' && (
            <div className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-slate-600">
                  {lang === 'kn' 
                    ? 'ಗ್ರಾಹಕರ ಡಿಜಿಟಲ್ ಪಾಸ್‌ಬುಕ್ - ಸಿಲಿಂಡರ್ ಪಡೆದ ವಿವರ ಮತ್ತು ಬ್ಯಾಂಕ್ ಸಬ್ಸಿಡಿ ಮಾಹಿತಿ:'
                    : 'Digital Passbook - Past refill dates, delivery receipt numbers, and bank DBT subsidy status:'}
                </p>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                  {lang === 'kn' ? 'ನೇರ ಬ್ಯಾಂಕ್ ವರ್ಗಾವಣೆ (DBT) ಲಿಂಕ್' : 'DBT Bank Subsidies Verified'}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {mockDeliveryHistory.map((item) => (
                  <div key={item.id} className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                      <span className="font-mono font-bold text-slate-800">{item.id}</span>
                      <span>{item.date}</span>
                    </div>
                    <h5 className="font-bold text-sm text-slate-900 mb-1">{item.customerName}</h5>
                    <div className="text-xs text-slate-600 mb-3">{item.village}</div>
                    
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs space-y-1 mb-3">
                      <div className="flex justify-between">
                        <span className="text-slate-500">{lang === 'kn' ? 'ಸಿಲಿಂಡರ್' : 'Type'}:</span>
                        <span className="font-medium text-slate-800">14.2 kg Subsidized</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">{lang === 'kn' ? 'ಸಬ್ಸಿಡಿ' : 'Subsidy'}:</span>
                        <span className="font-bold text-emerald-700">{item.subsidyAmount} (Credited)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">{lang === 'kn' ? 'ಚಾಲಕರು' : 'Driver'}:</span>
                        <span className="text-slate-700">{item.driverName}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                      <span>{lang === 'kn' ? 'ಗ್ರಾಹಕರ ತೃಪ್ತಿ' : 'Customer Rating'}</span>
                      <span className="font-bold text-amber-500">★★★★★ 5.0</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 5: Kannada Language Support */}
          {activeTab === 'kannada' && (
            <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-xs font-bold uppercase text-emerald-700">
                  {lang === 'kn' ? 'ಮಾತೃಭಾಷೆಯಲ್ಲಿ ಸೇವೆ' : 'Native Language Experience'}
                </span>
                <h4 className="text-xl font-bold text-slate-900 mt-1 mb-3">
                  {lang === 'kn' 
                    ? 'ಪ್ರತಿಯೊಬ್ಬ ಗ್ರಾಮಸ್ಥನಿಗೂ ಅರ್ಥವಾಗುವ ಸ್ಪಷ್ಟ ಕನ್ನಡ' 
                    : 'Built Native Kannada-First for Maximum Rural Accessibility'}
                </h4>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  {lang === 'kn'
                    ? 'ಓದಲು ಬಾರದ ಹಿರಿಯರಿಗೂ ಧ್ವನಿ ಮುಖಾಂತರ ಗ್ಯಾಸ್ ಆಗಮನದ ಸಂದೇಶ ಕೇಳಿಬರುತ್ತದೆ. ಯಾವುದೇ ಇಂಗ್ಲಿಷ್ ಗೊಂದಲವಿಲ್ಲದೆ ಸುಲಭವಾಗಿ ಅರ್ಥವಾಗುತ್ತದೆ.'
                    : 'Designed for rural Karnataka. Every alert, IVR voice notification, app screen, and Gram Panchayat roster is fully localized in natural, easy-to-understand Kannada without robotic translation.'}
                </p>

                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-900 mb-1">
                    <Languages className="w-4 h-4 text-emerald-700" />
                    <span>{lang === 'kn' ? 'ಕನ್ನಡ ಧ್ವನಿ ಎಚ್ಚರಿಕೆಯ ಮಾದರಿ:' : 'Sample Kannada Audio Alert Transcript:'}</span>
                  </div>
                  <p className="text-xs text-slate-800 italic leading-relaxed">
                    "ಗ್ರಾಮಸ್ಥರೆ ಗಮನಿಸಿ! ನಿಮ್ಮ ಊರಿಗೆ ಭಾರತ ಗ್ಯಾಸ್ ವಿತರಣಾ ವಾಹನ ತಲುಪಿದೆ. ಖಾಲಿ ಸಿಲಿಂಡರ್ ನೀಡಿ ಹೊಸ ಸಿಲಿಂಡರ್ ಪಡೆಯಿರಿ."
                  </p>
                </div>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-slate-200 text-center shadow-sm">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-600 to-green-700 text-white flex items-center justify-center mx-auto mb-4 shadow-md shadow-emerald-700/20 text-2xl font-black font-sans">
                  ಕ
                </div>
                <h5 className="font-bold text-slate-900 text-base mb-1">
                  {lang === 'kn' ? 'ಏಕ-ಕ್ಲಿಕ್ ಕನ್ನಡ ಭಾಷಾ ಬದಲಾವಣೆ' : 'One-Click Instant Kannada Toggle'}
                </h5>
                <p className="text-xs text-slate-500 mb-4">
                  {lang === 'kn' 
                    ? 'ಪುಟದ ಮೇಲ್ಭಾಗದಲ್ಲಿರುವ ಕನ್ನಡ ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ ಇಡೀ ವೆಬ್‌ಸೈಟ್ ಅನ್ನು ಕನ್ನಡದಲ್ಲಿ ವೀಕ್ಷಿಸಿ.'
                    : 'Switch the toggle in the header anytime to browse the entire platform in Kannada.'}
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 py-1.5 px-3 rounded-lg border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{lang === 'kn' ? '100% ಕನ್ನಡ ಬೆಂಬಲ ಸಕ್ರಿಯವಾಗಿದೆ' : '100% Kannada Support Active'}</span>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
