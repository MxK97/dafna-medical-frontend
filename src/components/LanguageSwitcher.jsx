import { Globe2, ChevronDown } from 'lucide-react';
import { localeMeta, supportedLocales } from '../i18n/translations';

import { useState, useRef, useEffect } from 'react';

export default function LanguageSwitcher({ locale, setLocale }) {
  const [isOpen, setIsOpen] = useState(false);
  const switcherRef = useRef(null);

  // Закриваємо список при кліку поза елементом
  useEffect(() => {
    function handleClickOutside(event) {
      if (switcherRef.current && !switcherRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="language-switcher-container" ref={switcherRef}>
      {/* Кнопка перемикача */}
      <button 
        type="button" 
        className="language-switcher-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <Globe2 size={16} strokeWidth={1.8} />
        <span>{localeMeta[locale]?.short}</span>
        <ChevronDown size={14} className={`arrow ${isOpen ? 'open' : ''}`} />
      </button>

      {/* Кастомний випадаючий список */}
      {isOpen && (
        <div className="language-dropdown" role="listbox">
          {supportedLocales.map((code) => {
            const isActive = code === locale;
            return (
              <button
                key={code}
                type="button"
                className={`dropdown-item ${isActive ? 'active' : ''}`}
                onClick={() => {
                  setLocale(code);
                  setIsOpen(false);
                }}
              >
                {localeMeta[code].label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}