import React, { useState } from 'react';
import { Language } from '../types';
import { X, Smartphone, Download, MessageSquare, PhoneCall, Check, ExternalLink } from 'lucide-react';

interface DownloadAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const DownloadAppModal: React.FC<DownloadAppModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const [downloadStarted, setDownloadStarted] = useState(false);

  if (!isOpen) return null;

  const handleSimulateDownload = () => {
    setDownloadStarted(true);
    setTimeout(() => {
      setDownloadStarted(false);
    }, 4000);
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

        <div className="flex items-center gap-2.5 mb-2">
          <span className="p-2 rounded-xl bg-blue-50 text-blue-700 border border-blue-100">
            <Smartphone className="w-5 h-5" />
          </span>
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              {lang === 'kn' ? 'ಮೊಬೈಲ್ ಆ್ಯಪ್ ಡೌನ್‌ಲೋಡ್' : 'Download GramaLPG Mobile App'}
            </h3>
            <span className="text-xs text-slate-500">
              {lang === 'kn' ? 'ಗ್ರಾಮೀಣ ನೆಟ್‌ವರ್ಕ್‌ಗಳಿಗೆ ವಿಶೇಷ ಆವೃತ್ತಿ (4.2 MB)' : 'Lightweight Version for Low Bandwidth (4.2 MB)'}
            </span>
          </div>
        </div>

        <p className="text-xs text-slate-600 mb-6 leading-relaxed">
          {lang === 'kn'
            ? 'ಸ್ಮಾರ್ಟ್‌ಫೋನ್ ಬಳಕೆದಾರರು ಆ್ಯಪ್ ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಬಹುದು; ಸಾಮಾನ್ಯ ಕೀಪ್ಯಾಡ್ ಫೋನ್ ಇರುವವರು ಉಚಿತ SMS ಎಚ್ಚರಿಕೆಯನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಬಹುದು.'
            : 'Get live GPS tracking and arrival siren notifications on Android, or activate free SMS alerts on any basic phone.'}
        </p>

        {/* Primary Options */}
        <div className="space-y-4">
          
          {/* Option 1: Direct Android APK */}
          <div className="p-4 rounded-2xl border border-emerald-200 bg-emerald-50/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-1.5 font-bold text-sm text-emerald-950">
                <Download className="w-4 h-4 text-emerald-700" />
                <span>{lang === 'kn' ? 'ನೇರ ಆಂಡ್ರಾಯ್ಡ್ APK ಡೌನ್‌ಲೋಡ್' : 'Direct Android APK (Lightweight)'}</span>
              </div>
              <span className="text-xs text-emerald-800">
                v2.4.1 · 4.2 MB · {lang === 'kn' ? 'ಆಫ್‌ಲೈನ್ ಬೆಂಬಲ' : 'Works on 2G & low storage'}
              </span>
            </div>

            <button
              onClick={handleSimulateDownload}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                downloadStarted
                  ? 'bg-emerald-800 text-white'
                  : 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-sm'
              }`}
            >
              {downloadStarted ? (
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  {lang === 'kn' ? 'ಡೌನ್‌ಲೋಡ್ ಆಗುತ್ತಿದೆ...' : 'Downloading...'}
                </span>
              ) : (
                <span>{lang === 'kn' ? 'APK ಡೌನ್‌ಲೋಡ್' : 'Download APK'}</span>
              )}
            </button>
          </div>

          {/* Option 2: Google Play Store */}
          <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 flex items-center justify-between gap-3">
            <div>
              <div className="font-bold text-sm text-slate-900">
                Google Play Store
              </div>
              <span className="text-xs text-slate-500">
                {lang === 'kn' ? 'ಆಟೋ-ಅಪ್‌ಡೇಟ್ ಸೌಲಭ್ಯದೊಂದಿಗೆ' : 'Auto-updates via Google Play'}
              </span>
            </div>

            <button
              onClick={handleSimulateDownload}
              className="px-4 py-2 text-xs font-bold rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-800 flex items-center gap-1 cursor-pointer"
            >
              <span>{lang === 'kn' ? 'ಪ್ಲೇ ಸ್ಟೋರ್' : 'Play Store'}</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </button>
          </div>

          {/* Option 3: For Keypad / Basic Feature Phones (Zero Internet required) */}
          <div className="p-4 rounded-2xl border border-blue-200 bg-blue-50/70">
            <div className="flex items-center gap-2 mb-1.5">
              <MessageSquare className="w-4 h-4 text-blue-700" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900">
                {lang === 'kn' ? 'ಇಂಟರ್ನೆಟ್ ಇಲ್ಲದ ಸಾಮಾನ್ಯ ಫೋನ್‌ಗಳಿಗೆ (ಕೀಪ್ಯಾಡ್)' : 'For Basic Keypad Phones (Zero Internet)'}
              </h4>
            </div>
            <p className="text-xs text-blue-950 mb-2 leading-relaxed">
              {lang === 'kn' 
                ? 'ನಿಮ್ಮ ಮೊಬೈಲ್‌ನಿಂದ SMS ಕಳುಹಿಸಿ: ' 
                : 'Send a quick text message from any mobile to start alerts:'}
              <code className="bg-white px-2 py-0.5 rounded border border-blue-200 font-mono font-bold text-blue-900 ml-1">
                GAS &lt;ಗ್ರಾಮದ ಹೆಸರು&gt; to 56161
              </code>
            </p>
            <div className="text-[11px] text-blue-800 font-medium">
              {lang === 'kn' ? 'ಅಥವಾ ಮಿಸ್ಡ್ ಕಾಲ್ ನೀಡಿ: 1800-425-7890 (ಉಚಿತ)' : 'Or give a missed call to: 1800-425-7890 (Toll-Free)'}
            </div>
          </div>

        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 text-center">
          <button
            onClick={onClose}
            className="text-xs font-semibold text-slate-500 hover:text-slate-800"
          >
            {lang === 'kn' ? 'ಮುಚ್ಚಿ' : 'Close'}
          </button>
        </div>

      </div>
    </div>
  );
};
