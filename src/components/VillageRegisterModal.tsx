import React, { useState } from 'react';
import { Language } from '../types';
import { X, CheckCircle2, Building, MapPin, Users, Phone } from 'lucide-react';

interface VillageRegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const VillageRegisterModal: React.FC<VillageRegisterModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [villageName, setVillageName] = useState('');
  const [panchayat, setPanchayat] = useState('');
  const [district, setDistrict] = useState('Mandya');
  const [representative, setRepresentative] = useState('');
  const [phone, setPhone] = useState('');
  const [households, setHouseholds] = useState('120');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              {lang === 'kn' ? 'ಗ್ರಾಮ ನೋಂದಣಿ ಸ್ವೀಕರಿಸಲಾಗಿದೆ!' : 'Village Registration Received!'}
            </h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              {lang === 'kn' 
                ? `ಧನ್ಯವಾದಗಳು. ನಿಮ್ಮ ಗ್ರಾಮ ${villageName} ಗಾಗಿ ಮಾರ್ಗ ನಕ್ಷೆ ಪರಿಶೀಲಿಸಲು ನಮ್ಮ ಅಧಿಕಾರಿಗಳು 24 ಗಂಟೆಗಳಲ್ಲಿ ಗ್ರಾಮ ಪಂಚಾಯತಿಯನ್ನು ಸಂಪರ್ಕಿಸುತ್ತಾರೆ.`
                : `Thank you. Route surveyors will verify delivery access for ${villageName} and sync with the nearest regional distributor within 24 hours.`}
            </p>
            <button
              onClick={handleReset}
              className="w-full py-3 px-4 rounded-xl text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800"
            >
              {lang === 'kn' ? 'ಮುಗಿಸಿ' : 'Done'}
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="p-2 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100">
                <Building className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {lang === 'kn' ? 'ಹೊಸ ಗ್ರಾಮ ನೋಂದಣಿ' : 'Register Your Village for Delivery Alerts'}
                </h3>
                <span className="text-xs text-slate-500">
                  {lang === 'kn' ? 'ಗ್ರಾಮ ಪಂಚಾಯತಿ ಅಥವಾ ಸ್ಥಳೀಯ ನಿವಾಸಿಗಳ ಮೂಲಕ' : 'Official Gram Panchayat Onboarding'}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 mb-6 mt-2 leading-relaxed">
              {lang === 'kn'
                ? 'ನಿಮ್ಮ ಗ್ರಾಮಕ್ಕೆ ಎಲ್‌ಪಿಜಿ ವಿತರಣಾ ವಾಹನದ ಲೈವ್ SMS & ಸೈರನ್ ಅಲರ್ಟ್ ಸೇವೆ ಪ್ರಾರಂಭಿಸಲು ಕೆಳಗಿನ ವಿವರ ನೀಡಿ.'
                : 'Connect your rural hamlet or Gram Panchayat to our real-time GPS arrival siren network.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  {lang === 'kn' ? 'ಗ್ರಾಮದ ಹೆಸರು' : 'Village / Hamlet Name'} *
                </label>
                <input
                  type="text"
                  required
                  value={villageName}
                  onChange={(e) => setVillageName(e.target.value)}
                  placeholder={lang === 'kn' ? 'ಉದಾ: ಶಿವಳ್ಳಿ, ಹಳ್ಳಿಬೈಲು' : 'e.g. Shivalli or Hallibailu'}
                  className="w-full text-sm py-2.5 px-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-slate-50/50"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    {lang === 'kn' ? 'ಗ್ರಾಮ ಪಂಚಾಯತಿ' : 'Gram Panchayat'} *
                  </label>
                  <input
                    type="text"
                    required
                    value={panchayat}
                    onChange={(e) => setPanchayat(e.target.value)}
                    placeholder={lang === 'kn' ? 'ಪಂಚಾಯತಿ ಹೆಸರು' : 'Panchayat Name'}
                    className="w-full text-sm py-2.5 px-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    {lang === 'kn' ? 'ಜಿಲ್ಲೆ' : 'District'}
                  </label>
                  <select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full text-sm py-2.5 px-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-slate-50/50"
                  >
                    <option value="Mandya">Mandya (ಮಂಡ್ಯ)</option>
                    <option value="Tumakuru">Tumakuru (ತುಮಕೂರು)</option>
                    <option value="Hassan">Hassan (ಹಾಸನ)</option>
                    <option value="Mysuru">Mysuru (ಮೈಸೂರು)</option>
                    <option value="Belagavi">Belagavi (ಬೆಳಗಾವಿ)</option>
                    <option value="Other">Other District</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    {lang === 'kn' ? 'ಸಂಪರ್ಕ ವ್ಯಕ್ತಿ / ಹೆಸರು' : 'Lead Contact Person'} *
                  </label>
                  <input
                    type="text"
                    required
                    value={representative}
                    onChange={(e) => setRepresentative(e.target.value)}
                    placeholder={lang === 'kn' ? 'ಹೆಸರು' : 'Name'}
                    className="w-full text-sm py-2.5 px-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    {lang === 'kn' ? 'ಮೊಬೈಲ್ ಸಂಖ್ಯೆ' : 'Mobile Number'} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="98450 XXXXX"
                    className="w-full text-sm py-2.5 px-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-slate-50/50 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  {lang === 'kn' ? 'ಅಂದಾಜು ಎಲ್‌ಪಿಜಿ ಕುಟುಂಬಗಳ ಸಂಖ್ಯೆ' : 'Approximate LPG Families'}
                </label>
                <input
                  type="number"
                  value={households}
                  onChange={(e) => setHouseholds(e.target.value)}
                  className="w-full text-sm py-2.5 px-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-slate-50/50"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 text-center text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-md transition-all cursor-pointer mt-2"
              >
                {lang === 'kn' ? 'ಗ್ರಾಮವನ್ನು ನೋಂದಾಯಿಸಿ' : 'Submit Village Registration'}
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
