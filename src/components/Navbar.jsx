import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import logoVisual from '../assets/logo.jpg';

export default function Navbar({ t, locale, setLocale }) {
  const [open, setOpen] = useState(false);
  const links = [
    ['home', '#home'], ['treatments', '#treatments'], ['specialists', '#specialists'], ['about', '#about'], ['contact', '#contact']
  ];
  return (
    <header className="navbar-wrap">
      <nav className="navbar container">
        <a className="brand" href="#home" aria-label="Dafna Medical">
          <img className='logo' src={logoVisual} alt="logo"/>
        </a>
        <button className="mobile-menu" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
        <div className={`nav-links ${open ? 'nav-links--open' : ''}`}>
          {links.map(([key, href]) => <a key={key} href={href} onClick={() => setOpen(false)}>{t.nav[key]}</a>)}
          <div className="nav-actions"><LanguageSwitcher locale={locale} setLocale={setLocale}/><a className="btn btn--gold btn--small" href="#contact" onClick={() => setOpen(false)}>{t.hero.primary}</a></div>
        </div>
      </nav>
    </header>
  );
}
