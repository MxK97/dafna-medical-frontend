import { useEffect, useState, useRef } from 'react';
import { ArrowUpRight, Check, ChevronRight, Diamond, Globe2, Headphones, Heart, LockKeyhole, Mail, MapPin, MessageCircle, ShieldCheck, Star, Stethoscope, Users, Loader2 } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';
import Navbar from './components/Navbar';
import SectionHeading from './components/SectionHeading';
import { detectLocale, translations } from './i18n/translations';

import cardDental from './assets/card_dental.jpg';
import cardPlastic from './assets/card_plastic.jpg';
import cardIvf from './assets/card_ivf.jpg';
import cardHair from './assets/card_hair.jpg';
import heroVisual from './assets/hero_visual.jpg';

import danielAvatar from './assets/avatars/Daniel.jpg'
import alexAvatar from './assets/avatars/Alex.jpg'
import mariaAvatar from './assets/avatars/Maria.jpg'

const serviceImages = [cardDental, cardPlastic, cardIvf, cardHair];
const API_URL = import.meta.env.VITE_API_BASE_URL || '';
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '';

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M5.3 8.5H2.4V21h2.9V8.5ZM3.85 3C2.85 3 2 3.82 2 4.83c0 1.02.85 1.83 1.85 1.83S5.7 5.85 5.7 4.83C5.7 3.82 4.85 3 3.85 3ZM21.6 13.2c0-3.77-2.01-5.52-4.69-5.52-2.16 0-3.13 1.19-3.67 2.02h-.04V8.5h-2.77V21h2.89v-6.19c0-1.63.31-3.21 2.33-3.21 1.98 0 2.01 1.86 2.01 3.32V21h2.89v-6.8Z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <path d="M21 8.2a2.8 2.8 0 0 0-2-2C17.2 5.7 12 5.7 12 5.7s-5.2 0-7 .5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2.5 12a29 29 0 0 0 .5 3.8 2.8 2.8 0 0 0 2 2c1.8.5 7 .5 7 .5s5.2 0 7-.5a2.8 2.8 0 0 0 2-2 29 29 0 0 0 .5-3.8 29 29 0 0 0-.5-3.8Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="m10.3 9.4 5 2.6-5 2.6V9.4Z" fill="currentColor" />
    </svg>
  );
}

export default function App() {
  const [locale, setLocale] = useState(() => localStorage.getItem('dafna-locale') || detectLocale());
  const [form, setForm] = useState({ name: '', email: '', phone: '', treatment: '', message: '', consent: false });
  const [status, setStatus] = useState({ type: '', message: '' });

  const [loading, setLoading] = useState(false);
  const recaptchaRef = useRef(null);

  const t = translations[locale] || translations.en;

  useEffect(() => {
    localStorage.setItem('dafna-locale', locale);
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'he' ? 'rtl' : 'ltr';
  }, [locale]);

  function scrollTo(id) { document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' }); }

  function handlePhoneChange(e) {
    let input = e.target.value;
    input = input.replace(/[^\d+]/g, '');
    input = input.replace(/(?!^\+)\+/g, '');
    setForm({ ...form, phone: input });
  }

  async function submitForm(e) {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    const emailTrimmed = form.email.trim().toLowerCase();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const reservedDomains = ['.test', '.example', '.invalid', '.localhost', '.local'];
    const isReserved = reservedDomains.some(domain => emailTrimmed.endsWith(domain));

    if (!emailRegex.test(emailTrimmed) || isReserved) {
      setStatus({ 
        type: 'error', 
        message: locale === 'uk' 
          ? 'Введіть діючий email (домени .test, .example тощо заборонені)' 
          : 'Please enter a valid, active email address' 
      });
      return;
    }

    const phoneRegex = /^\+?\d{7,15}$/;
    if (!phoneRegex.test(form.phone.trim())) {
      setStatus({ 
        type: 'error', 
        message: locale === 'uk' 
          ? 'Введіть коректний номер телефону (наприклад, +380123456789)' 
          : 'Please enter a valid phone number' 
      });
      return;
    }

    setLoading(true);

    // Програмний виклик невидимої капчі
    let token = null;
    try {
      token = await recaptchaRef.current.executeAsync();
    } catch (err) {
      console.error('ReCAPTCHA execution error', err);
    }

    if (!token) {
      setStatus({
        type: 'error',
        message: locale === 'uk' 
          ? 'Не вдалося перевірити капчу. Спробуйте ще раз.' 
          : 'Captcha verification failed. Please try again.'
      });
      setLoading(false);
      return;
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      controller.abort();
    }, 120000); // 2 min

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify({ ...form, locale, captchaToken: token }),
        signal: controller.signal,
      });
      
      clearTimeout(timeoutId);
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.reason || data.detail || t.contact.error);
      }

      setStatus({ type: 'success', message: t.contact.success });
      setForm({ name: '', email: '', phone: '', treatment: '', message: '', consent: false });

    } catch (err) {
      clearTimeout(timeoutId);

      if (err.name === 'AbortError') {
        setStatus({ 
          type: 'error', 
          message: locale === 'uk'
            ? 'Час очікування відповіді вичерпано (2 хв). Перевірте з’єднання та спробуйте ще раз.'
            : 'Request timed out (2 min). Please try again.'
        });
      } else {
        setStatus({ type: 'error', message: err.message || t.contact.error });
      }
    } finally {
      recaptchaRef.current?.reset();
      setLoading(false);
    }
  }

  return (
    <div className="site">
      <Navbar t={t} locale={locale} setLocale={setLocale} />

      <main id="home">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span />{t.hero.eyebrow}<span /></div>
              <h1>{t.hero.title}</h1>
              <p>{t.hero.text}</p>
              <div className="hero-actions">
                <a className="btn btn--gold" href="#contact">{t.hero.primary}<ChevronRight size={17} /></a>
                <a className="btn btn--outline" href="#treatments">{t.hero.secondary}<ArrowUpRight size={17} /></a>
              </div>
              <div className="hero-chips">{t.hero.chips.map((x) => <span key={x}><Check size={14} />{x}</span>)}</div>
            </div>
            <div className="hero-visual">
              <div className="hero-photo-wrap"><img src={heroVisual} alt="Mediterranean coastline" /></div>
              <div className="hero-orbit hero-orbit--one" /><div className="hero-orbit hero-orbit--two" />
              <div className="floating-card floating-card--care"><Heart size={17} /><span>Personal care</span></div>
              <div className="floating-card floating-card--secure"><ShieldCheck size={17} /><span>Safe & discreet</span></div>
            </div>
          </div>
        </section>

        <section className="trust-strip"><div className="container trust-grid"><span><ShieldCheck size={18} /> {t.hero.chips[0]}</span><span><Stethoscope size={18} /> {t.hero.chips[1]}</span><span><Globe2 size={18} /> {t.hero.chips[2]}</span></div></section>

        <section id="treatments" className="section section--cream">
          <div className="container">
            <SectionHeading eyebrow={t.services.eyebrow} title={t.services.title} subtitle={t.services.subtitle} />
            <div className="services-grid">
              {t.services.cards.map((card, i) => (
                <article className="service-card" key={card.title}>
                  <div className="service-card__image"><img src={serviceImages[i]} alt="" /><span className="service-index">0{i + 1}</span></div>
                  <div className="service-card__body"><h3>{card.title}</h3><p>{card.text}</p><a href="#contact">{locale === 'uk' ? 'Дізнатися більше' : locale === 'de' ? 'Mehr erfahren' : 'Learn more'} <ArrowUpRight size={14} /></a></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section why-section">
          <div className="container why-grid">
            <div className="why-photo"><div className="why-mosaic">{serviceImages.map((src) => <img key={src} src={src} alt="" />)}</div><div className="why-photo__badge"><span>10+</span><small>years of experience</small></div></div>
            <div>
              <SectionHeading eyebrow={t.why.eyebrow} title={t.why.title} subtitle={t.why.subtitle} />
              <div className="why-items">
                {t.why.items.map((item, i) => { const icons = [Heart, Users, Stethoscope, MessageCircle, LockKeyhole, Globe2]; const Icon = icons[i]; return <div className="why-item" key={item}><span className="why-item__icon"><Icon size={18} /></span><div><h4>{item}</h4><p>{i === 0 ? 'One dedicated point of contact for your journey.' : i === 1 ? 'Access to experienced medical teams and specialists.' : i === 2 ? 'A plan shaped around your goals and priorities.' : i === 3 ? 'Practical coordination before, during and after care.' : i === 4 ? 'Your information and conversations are handled privately.' : 'Support for patients travelling from abroad.'}</p></div></div> })}
              </div>
            </div>
          </div>
        </section>

        <section id="specialists" className="section section--teal">
          <div className="container">
            <SectionHeading light eyebrow={t.process.eyebrow} title={t.process.title} subtitle="" />
            <div className="process-grid">
              {t.process.steps.map((step) => <article className="process-card" key={step.n}><div className="process-card__n">{step.n}</div><h3>{step.title}</h3><p>{step.text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section testimonials">
          <div className="container"><SectionHeading eyebrow={t.testimonials.eyebrow} title={t.testimonials.title} />
            <div className="testimonials-grid">{t.testimonials.quotes.map((q, i) => 
              <figure className="quote-card" key={q.name}>
                <div className="quote-card__top">
                  <div className="avatar">
                    {[<img className='avatar' src={danielAvatar}/>, <img className='avatar' src={mariaAvatar}/>, <img className='avatar' src={alexAvatar}/>][i]}
                  </div>
                  <div>
                    <strong>{q.name}</strong>
                    <span>{q.treatment}</span>
                  </div>
                  <div className="stars">
                    {Array.from({ length: 5 }, (_, x) => <Star key={x} size={14} fill="currentColor" />)}
                  </div>
                </div>
                <blockquote>“{q.text}”</blockquote>
              </figure>)}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-grid">
            <div className="contact-copy"><div className="eyebrow"><span />{t.contact.eyebrow}<span /></div><h2>{t.contact.title}</h2><p>{t.contact.subtitle}</p><div className="contact-benefits"><div><Headphones /><span>{t.why.items[0]}<small>Dedicated point of contact</small></span></div><div><Diamond /><span>{t.why.items[2]}<small>Built around your needs</small></span></div><div><Globe2 /><span>{t.why.items[5]}<small>International patient support</small></span></div></div></div>
            <form className="contact-form" onSubmit={submitForm}>
              <div className="form-row">
                <label>
                  <span>{t.contact.name}</span>
                  <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                </label>
                <label>
                  <span>{t.contact.email}</span>
                  <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                </label>
              </div>
              <div className="form-row">
                <label>
                  <span>{t.contact.phone}</span>
                  <input type="tel" value={form.phone} onChange={handlePhoneChange} required />
                </label>
                <label>
                  <span>{t.contact.treatment}</span>
                  <select value={form.treatment} onChange={e => setForm({ ...form, treatment: e.target.value })} required>
                    <option value="">—</option>
                    {t.contact.options.map(x => <option key={x}>{x}</option>)}
                  </select>
                </label>
              </div>
              <label><span>{t.contact.message}</span><textarea rows="5" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} /></label>
              <label className="checkbox"><input type="checkbox" checked={form.consent} onChange={e => setForm({ ...form, consent: e.target.checked })} required /><span>{t.contact.consent}</span></label>
              <div className="captcha-wrapper">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={RECAPTCHA_SITE_KEY}
                  size="invisible"
                />
              </div>
              <button className="btn btn--gold btn--submit" type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 size={16} className="spinner" style={{ animation: 'spin 1s linear infinite' }} />
                    {locale === 'uk' ? 'Надсилання...' : 'Sending...'}
                  </>
                ) : (
                  <>
                    {t.contact.submit}
                    <ArrowUpRight size={16} />
                  </>
                )}
              </button>
              <small className="form-note">{t.contact.note}</small>
              {status.message && <div className={`form-status form-status--${status.type}`}>{status.message}</div>}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-top"><div className="footer-col"><span className="footer-title">Contact</span><a href="mailto:info@dafnamedical.com"><Mail size={15} />info@dafnamedical.com</a><span><MapPin size={15} />{t.footer.location}</span></div><div className="footer-col"><span className="footer-title">Follow</span><div className="socials"><a aria-label="Instagram" href="#"><InstagramIcon /></a><a aria-label="LinkedIn" href="#"><LinkedinIcon /></a><a aria-label="YouTube" href="#"><YoutubeIcon /></a></div></div></div>
      </footer>
    </div>
  );
}