import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertTriangle, LifeBuoy } from 'lucide-react';

interface ContactProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactProps> = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    village: '',
    district: 'Mandya',
    userType: 'customer',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const t = translations[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.village.trim()) {
      setErrorMsg(lang === 'kn' ? 'ದಯವಿಟ್ಟು ಹೆಸರು, ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ಮತ್ತು ಗ್ರಾಮವನ್ನು ನಮೂದಿಸಿ.' : 'Please fill in Name, Phone, and Village name.');
      return;
    }
    if (formData.phone.replace(/\D/g, '').length < 10) {
      setErrorMsg(lang === 'kn' ? 'ದಯವಿಟ್ಟು ಸರಿಯಾದ 10 ಅಂಕಿಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ.' : 'Please enter a valid 10-digit mobile number.');
      return;
    }

    setErrorMsg('');
    const randomTicket = `GLPG-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(randomTicket);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      village: '',
      district: 'Mandya',
      userType: 'customer',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mb-3">
            <Mail className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.contact.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
            {t.contact.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Helpline & Support Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Toll-free support card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-emerald-50/80 border border-emerald-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center shadow-xs">
                  <Phone className="w-6 h-6" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-emerald-950">
                    {t.contact.helpline.title}
                  </h3>
                  <span className="text-xs text-emerald-800 font-medium">
                    {t.contact.helpline.hours}
                  </span>
                </div>
              </div>

              <div className="text-2xl sm:text-3xl font-black text-emerald-900 font-mono tracking-tight mb-2">
                {t.contact.helpline.phone}
              </div>
              <p className="text-xs text-emerald-800 leading-relaxed">
                {lang === 'kn' 
                  ? 'ಕನ್ನಡದಲ್ಲೇ ಮಾತನಾಡಿ: ಗ್ರಾಮದ ವೇಳಾಪಟ್ಟಿ, ಚಾಲಕರ ಮಾಹಿತಿ ಮತ್ತು ಗ್ರಾಮ ಪಂಚಾಯತಿ ನೋಂದಣಿಗೆ ಕರೆ ಮಾಡಿ.' 
                  : 'Speak directly in Kannada or English for route schedules, driver contacts, and village onboarding.'}
              </p>
            </div>

            {/* Emergency Gas Leakage Warning Box */}
            <div className="p-6 rounded-2xl bg-amber-50/80 border border-amber-200 flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-amber-950">
                  {lang === 'kn' ? 'ತುರ್ತು ಗ್ಯಾಸ್ ಸೋರಿಕೆ ಸಹಾಯವಾಣಿ' : 'LPG Safety & Gas Leakage Hotline'}
                </h4>
                <div className="text-xl font-black text-amber-900 font-mono my-1">
                  1906 (24x7 Toll-Free)
                </div>
                <p className="text-xs text-amber-800 leading-relaxed">
                  {lang === 'kn'
                    ? 'ಸಿಲಿಂಡರ್ ಸೋರಿಕೆ ಅಥವಾ ವಾಸನೆ ಬಂದರೆ ತಕ್ಷಣ ರೆಗ್ಯುಲೇಟರ್ ಆಫ್ ಮಾಡಿ 1906 ಕ್ಕೆ ಕರೆ ಮಾಡಿ.'
                    : 'If you smell gas leakage, switch off the regulator immediately and dial 1906 without delay.'}
                </p>
              </div>
            </div>

            {/* Regional Rural Coordination Hub */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                <MapPin className="w-4 h-4 text-emerald-700" />
                <span>{lang === 'kn' ? 'ಗ್ರಾಮೀಣ ಸಂಪರ್ಕ ಕೇಂದ್ರ' : 'Karnataka State Logistics Operations'}</span>
              </div>
              <p>
                {lang === 'kn'
                  ? 'ಸಹಕಾರ ಭವನ, ಜಿಲ್ಲಾ ಪಂಚಾಯತಿ ಆವರಣ, ಮಂಡ್ಯ & ತುಮಕೂರು ವಲಯ ಕಛೇರಿ.'
                  : 'Sahakara Bhavan, Zilla Panchayat Complex, Rural LPG Distribution Cell, Karnataka.'}
              </p>
              <div className="pt-2 text-slate-500 font-medium">
                Email: grama.lpg.alert@karnataka.gov.in (Support Desk)
              </div>
            </div>

          </div>

          {/* Right Column: Contact & Registration Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md">
            
            {submitted ? (
              <div className="text-center py-10 px-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {t.contact.form.successTitle}
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                  {t.contact.form.successMsg}
                  <strong className="font-mono text-emerald-700 block text-lg mt-2 font-black">
                    {ticketId}
                  </strong>
                </p>
                <button
                  onClick={handleReset}
                  className="px-6 py-3 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl cursor-pointer"
                >
                  {lang === 'kn' ? 'ಮತ್ತೊಂದು ಸಂದೇಶ ಕಳುಹಿಸಿ' : 'Send Another Inquiry'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {errorMsg && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 font-medium flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 shrink-0 text-red-600" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      {t.contact.form.name} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={lang === 'kn' ? 'ನಿಮ್ಮ ಹೆಸರು (ಉದಾ: ಮಲ್ಲಿಕಾರ್ಜುನ್)' : 'Your Name (e.g. Ramesh)'}
                      className="w-full text-sm py-2.5 px-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-slate-50/50"
                    />
                  </div>

                  {/* Phone field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      {t.contact.form.phone} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="98450 XXXXX"
                      className="w-full text-sm py-2.5 px-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-slate-50/50 font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Village field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      {t.contact.form.village} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.village}
                      onChange={(e) => setFormData({ ...formData, village: e.target.value })}
                      placeholder={lang === 'kn' ? 'ಗ್ರಾಮದ ಹೆಸರು (ಉದಾ: ಶಿವಳ್ಳಿ)' : 'e.g. Shivalli Village'}
                      className="w-full text-sm py-2.5 px-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-slate-50/50"
                    />
                  </div>

                  {/* District selector */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      {t.contact.form.district}
                    </label>
                    <select
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      className="w-full text-sm py-2.5 px-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-slate-50/50"
                    >
                      <option value="Mandya">{lang === 'kn' ? 'ಮಂಡ್ಯ' : 'Mandya'}</option>
                      <option value="Tumakuru">{lang === 'kn' ? 'ತುಮಕೂರು' : 'Tumakuru'}</option>
                      <option value="Hassan">{lang === 'kn' ? 'ಹಾಸನ' : 'Hassan'}</option>
                      <option value="Mysuru">{lang === 'kn' ? 'ಮೈಸೂರು' : 'Mysuru'}</option>
                      <option value="Belagavi">{lang === 'kn' ? 'ಬೆಳಗಾವಿ' : 'Belagavi'}</option>
                      <option value="Other">{lang === 'kn' ? 'ಇತರೆ ಜಿಲ್ಲೆ' : 'Other District'}</option>
                    </select>
                  </div>
                </div>

                {/* User Type */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {t.contact.form.userType}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'customer', label: lang === 'kn' ? 'ಗ್ರಾಹಕರು' : 'Customer' },
                      { id: 'panchayat', label: lang === 'kn' ? 'ಪಂಚಾಯತಿ' : 'Panchayat' },
                      { id: 'agency', label: lang === 'kn' ? 'ಏಜೆನ್ಸಿ' : 'Agency' },
                      { id: 'driver', label: lang === 'kn' ? 'ಚಾಲಕರು' : 'Driver' },
                    ].map(type => (
                      <button
                        type="button"
                        key={type.id}
                        onClick={() => setFormData({ ...formData, userType: type.id })}
                        className={`py-2 px-3 rounded-lg text-xs font-semibold border text-center transition-all cursor-pointer ${
                          formData.userType === type.id
                            ? 'bg-emerald-50 border-emerald-600 text-emerald-900 font-bold'
                            : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message field */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={lang === 'kn' ? 'ನಿಮ್ಮ ಗ್ರಾಮಕ್ಕೆ ಗ್ಯಾಸ್ ವಾಹನ ಬರುವ ಸಮಯ ತಿಳಿಯಲು ಅಥವಾ ಸೇವೆ ಸೇರಿಸಲು ಸಂದೇಶ ಬರೆಯಿರಿ...' : 'Please specify how we can help your village or agency...'}
                    className="w-full text-sm py-2.5 px-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-slate-50/50"
                  />
                </div>

                {/* Submit button with large click target */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl text-base font-bold text-white bg-emerald-700 hover:bg-emerald-800 shadow-md shadow-emerald-700/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.contact.form.submit}</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
