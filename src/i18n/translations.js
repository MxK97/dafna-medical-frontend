export const supportedLocales = ['en', 'uk', 'de', 'he'];

export const localeMeta = {
  en: { label: 'English', short: 'EN', dir: 'ltr' },
  uk: { label: 'Українська', short: 'UA', dir: 'ltr' },
  de: { label: 'Deutsch', short: 'DE', dir: 'ltr' },
  he: { label: 'עברית', short: 'HE', dir: 'rtl' },
};

export const translations = {
  en: {
    nav: { home: 'Home', treatments: 'Treatments', specialists: 'Specialists', about: 'About us', contact: 'Contact' },
    hero: {
      eyebrow: 'Welcome to Dafna Medical',
      title: 'Your journey to better health starts here',
      text: 'Personal care, trusted specialists and modern medical treatments — in a calm Mediterranean setting.',
      primary: 'Book a personal consultation',
      secondary: 'Explore treatments',
      chips: ['Trusted specialists', 'Private care', 'Mediterranean clinic'],
    },
    services: {
      eyebrow: 'Our treatments',
      title: 'Advanced medical solutions, tailored to you',
      subtitle: 'From first consultation to follow-up, we coordinate your medical journey with care.',
      learnMore: 'Learn more',
      cards: [
        { title: 'Dental care', text: 'Implants, crowns, veneers and advanced restorative dentistry.' },
        { title: 'Aesthetic medicine', text: 'Personalized facial and body treatments with a natural-looking approach.' },
        { title: 'IVF & fertility', text: 'Coordinated fertility care with experienced medical teams.' },
        { title: 'Hair restoration', text: 'Modern hair restoration options and individualized treatment plans.' },
      ],
    },
    why: {
      eyebrow: 'Why choose Dafna Medical?',
      title: 'A medical journey designed around you',
      subtitle: 'Clear coordination, modern care and personal support from the first message to follow-up.',
      items: ['Personal support', 'Experienced specialists', 'Tailored treatment plans', 'Clear coordination', 'Private & discreet care', 'International patient support'],
      descriptions: [
        'One dedicated point of contact for your journey.',
        'Access to experienced medical teams and specialists.',
        'A plan shaped around your goals and priorities.',
        'Practical coordination before, during and after care.',
        'Your information and conversations are handled privately.',
        'Support for patients travelling from abroad.'
      ],
    },
    process: {
      eyebrow: 'How it works',
      title: 'Four simple steps',
      steps: [
        { n: '01', title: 'Tell us what you need', text: 'Share your goals, preferred treatment and a convenient way to reach you.' },
        { n: '02', title: 'Medical review', text: 'We collect the relevant details and coordinate an initial assessment.' },
        { n: '03', title: 'Plan & travel support', text: 'You receive a clear treatment plan and practical next steps.' },
        { n: '04', title: 'Care & follow-up', text: 'We stay in touch through treatment and aftercare.' },
      ],
    },
    testimonials: {
      eyebrow: 'Patient stories',
      title: 'What our patients say',
      quotes: [
        { name: 'Daniel R.', treatment: 'Dental treatment', text: 'The team guided me through every stage and kept the process clear and calm.' },
        { name: 'Maria K.', treatment: 'IVF coordination', text: 'Everything was organized around our schedule, with quick answers whenever we had questions.' },
        { name: 'Alex P.', treatment: 'Hair restoration', text: 'From the first consultation to follow-up, communication felt personal and professional.' },
      ],
    },
    contact: {
      eyebrow: 'Let’s talk',
      title: 'Tell us about your treatment',
      subtitle: 'Send a request and our team will contact you with the next steps.',
      name: 'Full name',
      email: 'Email',
      phone: 'Phone / WhatsApp',
      treatment: 'Treatment of interest',
      message: 'Message',
      consent: 'I agree to be contacted regarding my request.',
      submit: 'Send request',
      sending: 'Sending...',
      note: 'Your details are used only to respond to your request.',
      success: 'Thank you. Your request has been sent.',
      error: 'We could not send your request. Please try again or contact us directly.',
      options: ['Dental care', 'Aesthetic medicine', 'IVF & fertility', 'Hair restoration', 'Other / not sure'],
      validation: {
        email: 'Please enter a valid, active email address',
        phone: 'Please enter a valid phone number',
        captcha: 'Captcha verification failed. Please try again.',
        timeout: 'Request timed out (2 min). Please try again.'
      }
    },
    footer: { tagline: 'Your journey, our care.', location: 'Cyprus, Mediterranean', privacy: 'Privacy policy', terms: 'Terms of use' },
  },
  uk: {
    nav: { home: 'Головна', treatments: 'Послуги', specialists: 'Фахівці', about: 'Про нас', contact: 'Контакти' },
    hero: { eyebrow: 'Вітаємо у Dafna Medical', title: 'Ваш шлях до кращого самопочуття починається тут', text: 'Персональний супровід, перевірені фахівці та сучасне лікування — у спокійній атмосфері Середземномор’я.', primary: 'Замовити консультацію', secondary: 'Переглянути послуги', chips: ['Досвідчені фахівці', 'Приватний сервіс', 'Клініка на Середземномор’ї'] },
    services: {
      eyebrow: 'Наші послуги',
      title: 'Сучасні медичні рішення, підібрані саме для вас',
      subtitle: 'Від першої консультації до супроводу після лікування ми координуємо ваш медичний шлях.',
      learnMore: 'Дізнатися більше',
      cards: [
        { title: 'Стоматологія', text: 'Імплантація, коронки, вініри та сучасне відновлення зубів.' },
        { title: 'Естетична медицина', text: 'Індивідуальні процедури для обличчя та тіла з природним результатом.' },
        { title: 'IVF та репродукція', text: 'Координація програм лікування безпліддя з досвідченими командами.' },
        { title: 'Відновлення волосся', text: 'Сучасні методи відновлення волосся та персональні плани лікування.' }
      ]
    },
    why: {
      eyebrow: 'Чому Dafna Medical?',
      title: 'Медичний шлях, побудований навколо вас',
      subtitle: 'Зрозуміла координація, сучасний підхід і персональна підтримка від першого звернення.',
      items: ['Персональний супровід', 'Досвідчені фахівці', 'Індивідуальний план', 'Чітка координація', 'Приватність і конфіденційність', 'Підтримка міжнародних пацієнтів'],
      descriptions: [
        'Один персональний менеджер для супроводу на всьому шляху.',
        'Доступ до досвідчених медичних команд та вузькопрофільних спеціалістів.',
        'План лікування, адаптований до ваших цілей та пріоритетів.',
        'Повна координація до, під час та після лікування.',
        'Абсолютна конфіденційність вашої інформації та звернень.',
        'Організаційна підтримка для пацієнтів з інших країн.'
      ],
    },
    process: { eyebrow: 'Як це працює', title: 'Чотири прості кроки', steps: [ { n: '01', title: 'Розкажіть, що вам потрібно', text: 'Поділіться вашою метою, бажаною процедурою та зручним способом зв’язку.' }, { n: '02', title: 'Первинний аналіз', text: 'Ми збираємо необхідну інформацію та організовуємо первинну оцінку.' }, { n: '03', title: 'План та поїздка', text: 'Ви отримуєте зрозумілий план лікування та наступні кроки.' }, { n: '04', title: 'Лікування і супровід', text: 'Ми залишаємося на зв’язку під час лікування та після нього.' } ] },
    testimonials: { eyebrow: 'Відгуки пацієнтів', title: 'Що говорять наші пацієнти', quotes: [ { name: 'Daniel R.', treatment: 'Стоматологія', text: 'Команда супроводжувала мене на кожному етапі, і весь процес залишався зрозумілим та спокійним.' }, { name: 'Maria K.', treatment: 'IVF', text: 'Усе було організовано під наш графік, а на запитання ми швидко отримували відповіді.' }, { name: 'Alex P.', treatment: 'Відновлення волосся', text: 'Від першої консультації до післялікувального супроводу комунікація була персональною та професійною.' } ] },
    contact: {
      eyebrow: 'Зв’яжіться з нами',
      title: 'Розкажіть про ваше лікування',
      subtitle: 'Надішліть заявку — команда зв’яжеться з вами та пояснить наступні кроки.',
      name: 'Ім’я та прізвище',
      email: 'Email',
      phone: 'Телефон / WhatsApp',
      treatment: 'Послуга',
      message: 'Повідомлення',
      consent: 'Я погоджуюся на зв’язок щодо моєї заявки.',
      submit: 'Надіслати заявку',
      sending: 'Надсилання...',
      note: 'Ваші дані використовуються лише для обробки звернення.',
      success: 'Дякуємо. Заявку надіслано.',
      error: 'Не вдалося надіслати заявку. Спробуйте ще раз або зв’яжіться з нами напряму.',
      options: ['Стоматологія', 'Естетична медицина', 'IVF та репродукція', 'Відновлення волосся', 'Інше / не визначився'],
      validation: {
        email: 'Введіть діючий email (домени .test, .example тощо заборонені)',
        phone: 'Введіть коректний номер телефону (наприклад, +380123456789)',
        captcha: 'Не вдалося перевірити капчу. Спробуйте ще раз.',
        timeout: 'Час очікування відповіді вичерпано (2 хв). Перевірте з’єднання та спробуйте ще раз.'
      }
    },
    footer: { tagline: 'Ваш шлях, наша турбота.', location: 'Кіпр, Середземномор’я', privacy: 'Політика конфіденційності', terms: 'Умови використання' },
  },
  de: {
    nav: { home: 'Startseite', treatments: 'Behandlungen', specialists: 'Spezialisten', about: 'Über uns', contact: 'Kontakt' },
    hero: { eyebrow: 'Willkommen bei Dafna Medical', title: 'Ihr Weg zu besserer Gesundheit beginnt hier', text: 'Persönliche Betreuung, erfahrene Spezialisten und moderne medizinische Behandlungen — in mediterraner Atmosphäre.', primary: 'Persönliche Beratung anfragen', secondary: 'Behandlungen entdecken', chips: ['Erfahrene Spezialisten', 'Private Betreuung', 'Klinik am Mittelmeer'] },
    services: {
      eyebrow: 'Unsere Behandlungen',
      title: 'Moderne medizinische Lösungen, individuell für Sie',
      subtitle: 'Von der ersten Beratung bis zur Nachsorge koordinieren wir Ihre medizinische Reise.',
      learnMore: 'Mehr erfahren',
      cards: [
        { title: 'Zahnmedizin', text: 'Implantate, Kronen, Veneers und moderne restaurative Zahnmedizin.' },
        { title: 'Ästhetische Medizin', text: 'Individuelle Gesichts- und Körperbehandlungen mit natürlichem Ergebnis.' },
        { title: 'IVF & Kinderwunsch', text: 'Koordinierte Kinderwunschbehandlung mit erfahrenen medizinischen Teams.' },
        { title: 'Haartransplantation', text: 'Moderne Verfahren zur Haarwiederherstellung und individuelle Behandlungspläne.' }
      ]
    },
    why: {
      eyebrow: 'Warum Dafna Medical?',
      title: 'Eine medizinische Reise, die sich an Ihnen orientiert',
      subtitle: 'Klare Koordination, moderne Behandlung und persönliche Unterstützung von Anfang an.',
      items: ['Persönliche Betreuung', 'Erfahrene Spezialisten', 'Individueller Behandlungsplan', 'Klare Koordination', 'Privat & diskret', 'Unterstützung internationaler Patienten'],
      descriptions: [
        'Ein fester Ansprechpartner für Ihre gesamte Reise.',
        'Zugang zu erfahrenen medizinischen Teams und Spezialisten.',
        'Ein auf Ihre Ziele und Prioritäten abgestimmter Plan.',
        'Praktische Koordination vor, während und nach der Behandlung.',
        'Ihre Informationen und Gespräche werden vertraulich behandelt.',
        'Unterstützung für Patienten, die aus dem Ausland anreisen.'
      ],
    },
    process: { eyebrow: 'So funktioniert es', title: 'Vier einfache Schritte', steps: [ { n: '01', title: 'Erzählen Sie uns von Ihrem Anliegen', text: 'Teilen Sie Ihr Ziel, die gewünschte Behandlung und einen bevorzugten Kontaktweg.' }, { n: '02', title: 'Medizinische Prüfung', text: 'Wir erfassen die relevanten Informationen und koordinieren die erste Einschätzung.' }, { n: '03', title: 'Plan & Reiseunterstützung', text: 'Sie erhalten einen klaren Behandlungsplan und die nächsten Schritte.' }, { n: '04', title: 'Behandlung & Nachsorge', text: 'Wir bleiben während der Behandlung und danach für Sie erreichbar.' } ] },
    testimonials: { eyebrow: 'Patientenstimmen', title: 'Was unsere Patienten sagen', quotes: [ { name: 'Daniel R.', treatment: 'Zahnmedizin', text: 'Das Team hat mich durch jeden Schritt begleitet und den gesamten Prozess transparent gehalten.' }, { name: 'Maria K.', treatment: 'IVF', text: 'Alles wurde auf unseren Zeitplan abgestimmt und Fragen wurden schnell beantwortet.' }, { name: 'Alex P.', treatment: 'Haarrestauration', text: 'Von der ersten Beratung bis zur Nachsorge war die Kommunikation persönlich und professionell.' } ] },
    contact: {
      eyebrow: 'Kontakt aufnehmen',
      title: 'Erzählen Sie uns von Ihrer Behandlung',
      subtitle: 'Senden Sie eine Anfrage und unser Team meldet sich mit den nächsten Schritten.',
      name: 'Vor- und Nachname',
      email: 'E-Mail',
      phone: 'Telefon / WhatsApp',
      treatment: 'Behandlung',
      message: 'Nachricht',
      consent: 'Ich stimme zu, bezüglich meiner Anfrage kontaktiert zu werden.',
      submit: 'Anfrage senden',
      sending: 'Wird gesendet...',
      note: 'Ihre Daten werden nur zur Bearbeitung Ihrer Anfrage verwendet.',
      success: 'Vielen Dank. Ihre Anfrage wurde gesendet.',
      error: 'Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.',
      options: ['Zahnmedizin', 'Ästhetische Medizin', 'IVF & Kinderwunsch', 'Haartransplantation', 'Sonstiges / noch unklar'],
      validation: {
        email: 'Bitte geben Sie eine gültige, aktive E-Mail-Adresse ein',
        phone: 'Bitte geben Sie eine gültige Telefonnummer ein',
        captcha: 'Captcha-Überprüfung fehlgeschlagen. Bitte versuchen Sie es erneut.',
        timeout: 'Zeitüberschreitung der Anfrage (2 Min.). Bitte versuchen Sie es erneut.'
      }
    },
    footer: { tagline: 'Ihr Weg, unsere Betreuung.', location: 'Zypern, Mittelmeer', privacy: 'Datenschutz', terms: 'Nutzungsbedingungen' },
  },
  he: {
    nav: { home: 'דף הבית', treatments: 'טיפולים', specialists: 'מומחים', about: 'אודותינו', contact: 'צור קשר' },
    hero: { eyebrow: 'ברוכים הבאים ל-Dafna Medical', title: 'הדרך שלך להרגשה טובה יותר מתחילה כאן', text: 'ליווי אישי, מומחים בעלי ניסיון וטיפול מתקדם — באווירה הרגועה של הים התיכון.', primary: 'תיאום ייעוץ אישי', secondary: 'לצפייה בטיפולים', chips: ['מומחים בעלי ניסיון', 'שירות פרטי', 'מרפאה בים התיכון'] },
    services: {
      eyebrow: 'השירותים שלנו',
      title: 'פתרונות רפואיים מתקדמים, המותאמים במיוחד עבורך',
      subtitle: 'מהייעוץ הראשון ועד הליווי שאחרי הטיפול, אנו מתאמים את המסע הרפואי שלך.',
      learnMore: 'למידע נוסף',
      cards: [
        { title: 'רפואת שיניים', text: 'השתלות, כתרים, ציפויי חרסינה ושחזור שיניים מתקדם.' },
        { title: 'רפואה אסתטית', text: 'טיפולים מותאמים אישית לפנים ולגוף עם תוצאות טבעיות.' },
        { title: 'IVF ופוריות', text: 'תיאום תוכניות טיפולי פוריות עם צוותים מקצועיים ומנוסים.' },
        { title: 'שיקום ועיבוי שיער', text: 'שיטות מתקדמות לשיקום השיער ותוכניות טיפול אישיות.' }
      ]
    },
    why: {
      eyebrow: 'למה Dafna Medical?',
      title: 'מסע רפואי שנבנה סביבך',
      subtitle: 'תיאום ברור, גישה מתקדמת ותמיכה אישית מהפנייה הראשונה.',
      items: ['ליווי אישי', 'מומחים בעלי ניסיון', 'תוכנית טיפול אישית', 'תיאום ברור ושקוף', 'פרטיות ודיסקרטיות', 'תמיכה במטופלים בינלאומיים'],
      descriptions: [
        'איש קשר אחד ייעודי למסע שלכם.',
        'גישה לצוותים רפואיים ולמומחים מנוסים.',
        'תוכנית המעוצבת סביב המטרות והעדיפויות שלכם.',
        'תיאום מעשי לפני, במהלך ואחרי הטיפול.',
        'המידע והשיחות שלכם מטופלים באופן פרטי ודיסקרטי.',
        'תמיכה למטופלים המגיעים מחו"ל.'
      ],
    },
    process: { eyebrow: 'איך זה עובד', title: 'ארבעה צעדים פשוטים', steps: [ { n: '01', title: 'ספרו לנו מה אתם צריכים', text: 'שתפו אותנו במטרה שלכם, בטיפול המבוקש ובדרך ההתקשרות הנוחה לכם.' }, { n: '02', title: 'הערכה רפואית ראשונית', text: 'אנו אוספים את המידע הנדרש ומארגנים הערכה ראשונית.' }, { n: '03', title: 'תוכנית ונסיעה', text: 'אתם מקבלים תוכנית טיפול ברורה והנחיות לצעדים הבאים.' }, { n: '04', title: 'טיפול וליווי', text: 'אנו נשארים איתכם בקשר במהלך הטיפול וגם לאחריו.' } ] },
    testimonials: { eyebrow: 'המלצות מטופלים', title: 'מה המטופלים שלנו אומרים', quotes: [ { name: 'Daniel R.', treatment: 'רפואת שיניים', text: 'הצוות ליווה אותי בכל שלב, וכל התהליך היה שקוף, ברור ורגוע.' }, { name: 'Maria K.', treatment: 'IVF', text: 'הכל אורגן בהתאם ללוח הזמנים שלנו, וקיבלנו מענה מהיר לכל שאלה.' }, { name: 'Alex P.', treatment: 'שיקום שיער', text: 'מהייעוץ הראשון ועד הליווי שאחרי הטיפול, התקשורת הייתה אישית ומקצועית.' } ] },
    contact: {
      eyebrow: 'צרו עמנו קשר',
      title: 'ספרו לנו על הטיפול המבוקש',
      subtitle: 'שלחו פנייה והצוות שלנו יצור איתכם קשר עם הצעדים הבאים.',
      name: 'שם מלא',
      email: 'דוא"ל',
      phone: 'טלפון / WhatsApp',
      treatment: 'שירות מבוקש',
      message: 'הודעה',
      consent: 'אני מסכים/ה ליצירת קשר בנוגע לפנייה שלי.',
      submit: 'שליחת פנייה',
      sending: 'שולח...',
      note: 'הפרטים שלך ישמשו אך ורק לצורך טיפול בפנייה.',
      success: 'תודה רבה. הפנייה נשלחה בהצלחה.',
      error: 'שליחת הפנייה נכשלה. אנא נסו שוב או צרו עמנו קשר ישירות.',
      options: ['רפואת שיניים', 'רפואה אסתטית', 'IVF ופוריות', 'שיקום ועיבוי שיער', 'אחר / עדיין לא החלטתי'],
      validation: {
        email: 'אנא הזן כתובת דוא"ל חוקית ופעילה',
        phone: 'אנא הזן מספר טלפון חוקי',
        captcha: 'אימות קאפצ\'ה נכשל. אנא נסה שוב.',
        timeout: 'זמן הבקשה פג (2 דקות). אנא נסו שוב.'
      }
    },
    footer: { tagline: 'הדרך שלך, הטיפול שלנו.', location: 'קפריסין, הים התיכון', privacy: 'מדיניות פרטיות', terms: 'תנאי שימוש' },
  },
};

export function detectLocale() {
  const candidates = Array.isArray(navigator.languages) && navigator.languages.length ? navigator.languages : [navigator.language];
  for (const item of candidates) {
    const code = (item || '').toLowerCase().split('-')[0];
    if (supportedLocales.includes(code)) return code;
  }
  return 'en';
}