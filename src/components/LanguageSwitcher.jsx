import { Globe2 } from 'lucide-react';
import { localeMeta, supportedLocales } from '../i18n/translations';

export default function LanguageSwitcher({ locale, setLocale }) {
  return (
    <label className="language-switcher" aria-label="Language">
      <Globe2 size={16} strokeWidth={1.8} />
      <select value={locale} onChange={(e) => setLocale(e.target.value)}>
        {supportedLocales.map((code) => <option key={code} value={code}>{localeMeta[code].short}</option>)}
      </select>
    </label>
  );
}
