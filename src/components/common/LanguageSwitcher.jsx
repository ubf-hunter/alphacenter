import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher({ className = '' }) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith('en') ? 'en' : 'fr';
  const nextLang = currentLang === 'fr' ? 'en' : 'fr';
  const label = currentLang === 'fr' ? 'EN' : 'FR';

  return (
    <button
      onClick={() => i18n.changeLanguage(nextLang)}
      className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full border border-gray-200 hover:border-navy hover:bg-navy/5 transition-all duration-200 ${className}`}
      aria-label={currentLang === 'fr' ? 'Switch to English' : 'Passer en français'}
    >
      <Globe size={14} />
      {label}
    </button>
  );
}
