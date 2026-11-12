import React, { useState } from 'react';
import { Language, VillageDeliveryInfo } from '../types';
import { translations } from '../data/translations';
import { mockVillages } from '../data/mockData';
import { playArrivalAlertSound } from '../utils/audioAlert';
import { 
  Truck, 
  MapPin, 
  Clock, 
  PhoneCall, 
  Volume2, 
  Download, 
  ShieldCheck, 
  ChevronRight,
  Sparkles,
  Users,
  Navigation
} from 'lucide-react';

interface HeroProps {
  lang: Language;
  onOpenRegisterModal: () => void;
  onOpenDownloadModal: () => void;
  selectedVillage: VillageDeliveryInfo;
  onSelectVillage: (village: VillageDeliveryInfo) => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onOpenRegisterModal,
  onOpenDownloadModal,
  selectedVillage,
  onSelectVillage,
}) => {
  const [isPlayingSiren, setIsPlayingSiren] = useState(false);
  const [districtFilter, setDistrictFilter] = useState<string>("All");
  const t = translations[lang];

  const handleTestSiren = async () => {
    if (isPlayingSiren) return;
    setIsPlayingSiren(true);
    await playArrivalAlertSound();
    setIsPlayingSiren(false);
  };

  const filteredVillages = districtFilter === "All" 
    ? mockVillages 
    : mockVillages.filter(v => v.district === districtFilter);

  const districts = ["All", "Mandya", "Tumakuru", "Hassan", "Mysuru"];

  return (
    <section id="home" className="relative bg-gradient-to-b from-emerald-50/60 via-white to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden border-b border-slate-200">
      
      {/* Background visual ambience with subtle radial soft green & blue accents */}
      <div className="absolute top-0 right-0 -mr-48 -mt-48 w-96 h-96 rounded-full bg-emerald-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -ml-40 w-80 h-80 rounded-full bg-blue-200/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Value Proposition & Action Buttons */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Trust Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-4 bg-emerald-100/70 py-1.5 px-3 rounded-full w-fit border border-emerald-200">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>{t.hero.kicker}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18] mb-4 text-balance">
              {t.hero.title}
            </h1>

            {/* Slogan */}
            <p className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
              "{t.hero.slogan}"
            </p>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              {t.hero.subtitle}
            </p>

            {/* Call to action buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={onOpenRegisterModal}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-bold text-white bg-emerald-700 hover:bg-emerald-800 shadow-md shadow-emerald-700/20 transition-all cursor-pointer active:scale-95"
              >
                <Sparkles className="w-5 h-5 text-amber-300" />
                <span>{t.hero.registerVillage}</span>
              </button>

              <button
                onClick={onOpenDownloadModal}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-bold text-slate-800 bg-white hover:bg-slate-50 border-2 border-slate-300 hover:border-slate-400 shadow-sm transition-all cursor-pointer active:scale-95"
              >
                <Download className="w-5 h-5 text-blue-600" />
                <span>{t.hero.downloadApp}</span>
              </button>
            </div>

            {/* Quick Proof Metrics bar */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div>
                <span className="block text-2xl font-black text-slate-900 tabular-nums">1,240+</span>
                <span className="text-xs font-medium text-slate-600">{t.hero.activeVillagesCount}</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-emerald-700 tabular-nums">85,000+</span>
                <span className="text-xs font-medium text-slate-600">{t.hero.satisfiedFamilies}</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-2xl font-black text-blue-700 tabular-nums">100%</span>
                <span className="text-xs font-medium text-slate-600">{lang === 'kn' ? 'ಉಚಿತ ಎಚ್ಚರಿಕೆ ಸೇವೆ' : 'Free SMS & Voice Alerts'}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Image + Interactive Quick Tracker Card */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            {/* Real generated high-definition photograph of LPG delivery mini truck in lush green Indian village */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100 group">
              <img
                src="/src/assets/images/rural_lpg_delivery_truck_1794497750538.jpg"
                alt="Rural LPG gas cylinder delivery mini truck navigating green village road"
                className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end p-4">
                <div className="text-white">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>{lang === 'kn' ? 'ನೇರ ಚಾಲನೆ ಲೈವ್ ಜಿಪಿಎಸ್' : 'Active Rural Route Monitoring'}</span>
                  </div>
                  <p className="text-sm font-bold text-white mt-0.5">
                    {lang === 'kn' ? 'ಗ್ರಾಮೀಣ ಭಾಗದ ಮನೆ ಬಾಗಿಲಿಗೆ ನಿಖರ ಸಿಲಿಂಡರ್ ವಿತರಣೆ' : 'Doorstep LPG Delivery for Rural Households'}
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Live Tracker Mini-Card */}
            <div id="tracker" className="bg-white rounded-2xl border border-slate-200 shadow-md p-5 sm:p-6 transition-all">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <span className="p-2 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-100">
                    <Truck className="w-5 h-5" />
                  </span>
                  <div>
                    <h2 className="text-base font-bold text-slate-900 leading-tight">
                      {t.tracker.title}
                    </h2>
                    <span className="text-xs text-slate-500 font-medium">
                      {lang === 'kn' ? 'ನೈಜ ಸಮಯದ ವಾಹನ ಮಾಹಿತಿ' : 'Real-time GPS vehicle position'}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{selectedVillage.status === 'on_route' ? (lang === 'kn' ? 'ಮಾರ್ಗದಲ್ಲಿದೆ' : 'In Transit') : (lang === 'kn' ? 'ತಲುಪಿದೆ' : 'At Village')}</span>
                  </span>
                </div>
              </div>

              {/* Village Selector Dropdown */}
              <div className="mt-4">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {lang === 'kn' ? 'ಗ್ರಾಮ ಆಯ್ಕೆ ಮಾಡಿ' : 'Choose Village Route'}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {mockVillages.map((v) => (
                    <button
                      key={v.id}
                      onClick={() => onSelectVillage(v)}
                      className={`px-3 py-2 text-left rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                        selectedVillage.id === v.id
                          ? 'border-emerald-600 bg-emerald-50/80 text-emerald-900 ring-2 ring-emerald-500/20'
                          : 'border-slate-200 bg-slate-50/60 hover:bg-slate-100 text-slate-700'
                      }`}
                    >
                      <div className="truncate font-bold">{lang === 'kn' ? v.villageNameKn : v.villageName}</div>
                      <div className="text-[11px] text-slate-500 truncate">{lang === 'kn' ? v.districtKn : v.district}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Current Tracking Metrics */}
              <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2.5">
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Navigation className="w-3.5 h-3.5 text-blue-600" />
                    {t.tracker.currentLocation}:
                  </span>
                  <span className="font-semibold text-slate-900 text-right truncate max-w-[190px]">
                    {lang === 'kn' ? selectedVillage.currentLocationKn : selectedVillage.currentLocationEn}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    {t.tracker.eta}:
                  </span>
                  <span className="font-bold text-emerald-700 tabular-nums">
                    {selectedVillage.etaMinutes === 0 
                      ? (lang === 'kn' ? 'ಗ್ರಾಮದಲ್ಲಿದೆ (ಈಗ ಲಭ್ಯ)' : 'Arrived at Village')
                      : (lang === 'kn' ? `${selectedVillage.etaMinutes} ನಿಮಿಷಗಳಲ್ಲಿ` : `In ${selectedVillage.etaMinutes} mins`)}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-emerald-600" />
                    {t.tracker.truckNumber}:
                  </span>
                  <span className="font-mono font-bold text-slate-800 bg-white px-2 py-0.5 rounded border border-slate-200">
                    {selectedVillage.vehicleNumber}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-purple-600" />
                    {t.tracker.driver}:
                  </span>
                  <span className="font-medium text-slate-800">
                    {selectedVillage.driverName}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-200/60">
                  <span className="text-slate-500">
                    {t.tracker.stockRemaining}:
                  </span>
                  <span className="font-bold text-slate-900 tabular-nums">
                    {selectedVillage.remainingCylinders} / {selectedVillage.totalCylinders} {lang === 'kn' ? 'ಸಿಲಿಂಡರ್‌ಗಳು' : 'Cylinders'}
                  </span>
                </div>

              </div>

              {/* Action Buttons: Direct Call to Driver & Siren Sound preview */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href={`tel:${selectedVillage.driverPhone}`}
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 shadow-sm transition-all text-center cursor-pointer"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>{t.tracker.callDriver}</span>
                </a>

                <button
                  onClick={handleTestSiren}
                  disabled={isPlayingSiren}
                  className={`inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer border ${
                    isPlayingSiren
                      ? 'bg-amber-100 text-amber-900 border-amber-300 animate-pulse'
                      : 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100'
                  }`}
                  title="Simulate village arrival sound alert"
                >
                  <Volume2 className={`w-3.5 h-3.5 ${isPlayingSiren ? 'text-amber-700 animate-bounce' : 'text-emerald-700'}`} />
                  <span>{isPlayingSiren ? t.tracker.sirenPlaying : t.tracker.testSiren}</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
