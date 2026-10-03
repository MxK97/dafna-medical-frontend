export const supportedLocales = ['en', 'uk', 'de', 'he'];

export const localeMeta = {
  en: { label: 'English', short: 'EN', dir: 'ltr' },
  uk: { label: 'Українська', short: 'UA', dir: 'ltr' },
  de: { label: 'Deutsch', short: 'DE', dir: 'ltr' },
  he: { label: 'עברית', short: 'HE', dir: 'rtl' },
};

export const translations = {
  en: {
    nav: { home: 'Home', treatments: 'Treatments', specialists: 'VIP Support', about: 'About us', contact: 'Contact' },
    hero: {
      eyebrow: 'Welcome to Dafna Medical',
      title: 'Dafna Medical – Your safe bridge to a world of health, aesthetics, and fulfillment',
      text: 'A leading company in international medical tourism, dedicated to fulfilling dreams and providing medical, aesthetic, and family support to the highest European standards.',
      primary: 'Book a personal consultation',
      secondary: 'Explore treatments',
      chips: ['Experienced specialists', 'Private care', 'Mediterranean clinic'],
    },
    services: {
      eyebrow: 'Our treatments',
      title: 'Our advanced treatments and services',
      subtitle: '',
      learnMore: 'Learn more',
      cards: [
        {
          title: 'Advanced dental care',
          sub: 'Aesthetic and restorative dentistry',
          text: 'A perfect and healthy smile is your calling card. The exclusive clinics we partner with offer advanced solutions under one roof, using the latest digital technologies:',
          bullets: [
            { title: 'Dental implants & full mouth restoration', text: 'Advanced surgical solutions for complete jaw restoration and restored functionality and confidence.' },
            { title: 'Smile aesthetics & porcelain veneers (Hollywood Smile)', text: 'Premium laminate veneers and zirconia crowns, delivering a radiant, natural, and precise smile tailored to your facial structure.' },
            { title: 'Conservative care & dental surgery', text: 'Precise root canal treatments, surgical extractions, sinus lifts, and preventive care performed with advanced imaging equipment with minimal discomfort.' },
          ],
        },
        {
          title: 'Plastic surgery & advanced facial & body aesthetics',
          text: 'All surgeries are performed in high-standard hospitals under strict surgical conditions by senior specialist surgeons. The exclusive clinics we partner with offer a complete range of leading plastic surgeries, ensuring harmonious and safe aesthetic results:',
          bullets: [
            { title: 'Facelift', text: 'An advanced procedure to restore a fresh, smooth, and youthful appearance to the face and neck while maintaining a completely natural result.' },
            { title: 'Breast augmentation', text: 'A precise surgery providing a proportionate, full, and sculpted shape using high-quality implants adhering to the world’s strictest standards.' },
            { title: 'Eyelid surgery (Blepharoplasty)', text: 'A delicate and precise procedure to remove excess skin and fat around the eyes, restoring an open, vibrant, and youthful look.' },
            { title: 'Additional body contouring', text: 'Advanced technology liposuction, breast lifts, tummy tucks, and overall body sculpting.' },
          ],
        },
        {
          title: 'Fertility treatments, egg donation, gender selection & international surrogacy',
          text: 'This is one of the most sensitive, significant, and emotional journeys in life. Dafna Medical guides you with confidence, warmth, and professionalism toward realizing your dream of parenthood, working exclusively with top medical centers, advanced labs, and leading fertility experts:',
          bullets: [
            { title: 'Embryo gender selection (NGS / PGD)', text: 'Utilizing state-of-the-art Next Generation Sequencing for precise pre-implantation genetic diagnosis, complete genetic safety, and high-accuracy gender selection.' },
            { title: 'Advanced & supervised egg donation', text: 'Rigorous donor matching based on strict medical and genetic profiles, fully compliant with strict European standards and complete transparency.' },
            { title: 'Egg & sperm donation (Combined pathways)', text: 'Comprehensive and discreet solutions for patients and couples requiring dual gamete donation, utilizing top banks and ensuring high genetic quality.' },
            { title: 'Surrogacy in Cyprus', text: 'A nearby, accessible, and convenient surrogacy destination offering close European medical care and strict legal oversight from start to birth.' },
            { title: 'Surrogacy in Georgia', text: 'An established, legally secure, and medically proven surrogacy pathway in exclusive partnership with top clinics in Tbilisi.' },
            { title: 'Surrogacy in Armenia', text: 'An attractive, advanced, and leading destination offering surrogacy programs with high medical standards within a clear legal framework and full personal guidance.' },
          ],
        },
        {
          title: 'Hair & eyebrow transplants using the world’s most advanced technologies',
          text: 'Precise surgical procedures requiring exceptional expertise to ensure a natural, dense, and harmonious appearance over time:',
          bullets: [
            { title: 'FUE & Sapphire hair transplant', text: 'Using tiny sapphire blades to create precise micro-channels, minimizing scarring and recovery time while ensuring delicate follicle extraction and maximum viability.' },
            { title: 'Advanced eyebrow transplant', text: 'Meticulous eyebrow reshaping and density restoration with perfect alignment of growth angle, thickness, and contours tailored to your facial structure for a natural look.' },
            { title: 'Personalized hairline design', text: 'Creating a completely natural hairline that complements your facial structure and age, designed and executed by a specialist physician.' },
          ],
        },
      ],
    },
    why: {
      about: {
        title: 'About Dafna Medical',
        paragraphs: [
          'Dafna Medical is a leading company in international medical tourism, dedicated to fulfilling dreams and providing medical, aesthetic, and family support to the highest European standards. We believe that anyone embarking on a journey toward personal transformation or building a family needs more than just a service provider — they need a reliable partner, uncompromised integrity, and warm, personal guidance from the moment the decision is made until their return home.',
          'Our uniqueness lies in our complete exclusivity with elite clinics and select private hospitals employing top physicians, surgeons, and fertility specialists. Thanks to these partnerships, we guarantee our clients rigorous medical protocols, advanced technologies, and top priority at every step of the process.',
          'From advanced dental care, cutting-edge hair and eyebrow transplants, and complex plastic surgeries to surrogacy, egg donation, and gender selection programs (in Cyprus, Georgia, and Armenia) — Dafna Medical offers a full VIP suite including precise planning, seamless logistics abroad, and above all, full responsibility and ongoing backing even after you return home.',
        ],
        closing: 'Dafna Medical – Because your health, appearance, and dreams deserve the very best.',
      },
      eyebrow: 'Our medical standard',
      title: 'Our high medical standard – Why do patients choose us?',
      subtitle: 'In a world with many options, we at Dafna Medical choose never to compromise on any detail regarding your health and appearance:',
      items: ['Exclusive partnership with elite clinics', 'Rigorous medical protocols', 'Senior specialist medical teams'],
      descriptions: [
        'We don’t work with just anyone. We carefully select and thoroughly vet the clinics we partner with, operating with them on a fully exclusive basis. This exclusivity ensures our patients receive top priority, preferred conditions, and strict oversight at every stage of their treatment.',
        'Every procedure is conducted under strict European quality standards, including comprehensive pre-travel assessments, rigorous medical screening, and personalized treatment matching.',
        'The physicians and experts we work with are key opinion leaders in their fields, highly experienced, members of leading medical associations, and personally perform the procedures.',
      ],
    },
    process: {
      eyebrow: 'Our service',
      title: 'Full VIP suite – From the first moment until returning home',
      subtitle: 'Working exclusively with select clinics allows us to provide a comprehensive, worry-free service package:',
      steps: [
        { n: '01', title: 'Comprehensive pre-travel preparation', text: 'Creating a transparent action plan, answering all questions, and providing detailed medical guidance before departure.' },
        { n: '02', title: 'Hospitality & travel support abroad', text: 'Convenient flights, stays at selected luxury hotels tailored for recovery, and private VIP transfers between the airport, hotel, and clinic.' },
        { n: '03', title: '24/7 Personal support', text: 'Dedicated personal coordinators who greet you at the airport and accompany you step-by-step throughout your entire clinic stay.' },
        { n: '04', title: 'Ongoing care after returning home', text: 'Unlike other companies, Dafna Medical provides continuous backing, medical guidance, and follow-up care even after you return home.' },
      ],
    },
    testimonials: {
      eyebrow: 'Patient stories',
      title: 'What our patients say',
      quotes: [
        { name: 'Daniel R.', treatment: 'Dental treatment', text: 'The team guided me through every stage, keeping the entire process clear, transparent, and calm.' },
        { name: 'Maria K.', treatment: 'IVF', text: 'Everything was perfectly organized around our schedule, with prompt answers to all our questions.' },
        { name: 'Alex P.', treatment: 'Hair restoration', text: 'From the initial consultation to post-treatment follow-up, communication was genuinely personal and professional.' },
      ],
    },
    contact: {
      eyebrow: 'Get in touch',
      title: 'Ready to start your journey with complete confidence?',
      subtitle: 'Send an inquiry and our team will reach out with the next steps.',
      benefits: [
        { title: '24/7 Personal support', text: 'Dedicated personal coordinators throughout your stay' },
        { title: 'Comprehensive pre-travel preparation', text: 'Transparent action plan before departure' },
        { title: 'Ongoing care after returning home', text: 'Continuous follow-up even after you return home' },
      ],
      name: 'Full name',
      email: 'Email',
      phone: 'Phone number',
      treatment: 'Areas of interest',
      message: 'Message',
      consent: 'I agree to be contacted regarding my inquiry.',
      submit: 'Send inquiry – Get a free initial consultation from Dafna Medical experts',
      sending: 'Sending...',
      note: 'Your details are used solely to process your inquiry.',
      success: 'Thank you. Your inquiry has been sent successfully.',
      error: 'We could not send your inquiry. Please try again or contact us directly.',
      options: ['Dental care', 'Hair & eyebrow transplants', 'Plastic surgery', 'Fertility, NGS & surrogacy'],
      validation: {
        email: 'Please enter a valid, active email address',
        phone: 'Please enter a valid phone number',
        captcha: 'Captcha verification failed. Please try again.',
        timeout: 'Request timed out (2 min). Please try again.',
      },
    },
    footer: { tagline: 'Your journey, our care.', location: 'Cyprus, Mediterranean', privacy: 'Privacy policy', terms: 'Terms of use' },
  },
  uk: {
    nav: { home: 'Головна', treatments: 'Послуги', specialists: 'VIP-супровід', about: 'Про нас', contact: 'Контакти' },
    hero: {
      eyebrow: 'Вітаємо у Dafna Medical',
      title: 'Dafna Medical — ваш надійний міст у світ здоров’я, естетики та здійснення мрій',
      text: 'Провідна компанія у сфері міжнародного медичного туризму, присвячена здійсненню мрій та наданню медичного, естетичного й сімейного супроводу за найвищими європейськими стандартами.',
      primary: 'Записатися на консультацію',
      secondary: 'Переглянути послуги',
      chips: ['Досвідчені фахівці', 'Приватний сервіс', 'Клініка на Середземномор’ї'],
    },
    services: {
      eyebrow: 'Наші послуги',
      title: 'Наші сучасні лікувальні та медичні послуги',
      subtitle: '',
      learnMore: 'Дізнатися більше',
      cards: [
        {
          title: 'Сучасна стоматологія',
          sub: 'Естетична та відновлювальна стоматологія',
          text: 'Ідеальна та здорова усмішка — це ваша візитна картка. Ексклюзивні клініки, з якими ми співпрацюємо, пропонують комплексні рішення під одним дахом за найновішими цифровими технологіями:',
          bullets: [
            { title: 'Імплантація та повне відновлення зубного ряду', text: 'Сучасні хірургічні рішення для повного відновлення щелеп, жувальної функції та впевненості у собі.' },
            { title: 'Естетика усмішки та вініри (Hollywood Smile)', text: 'Вініри-ламінати та цирконієві коронки преміум-класу для сяючої, природної та гармонійної усмішки, підібраної під анатомію обличчя.' },
            { title: 'Терапевтичне лікування та дентальна хірургія', text: 'Точне лікування каналів, хірургічні видалення, синус-ліфтинг та профілактика з використанням сучасного діагностичного обладнання та без болю.' },
          ],
        },
        {
          title: 'Пластична хірургія та сучасна естетика обличчя й тіла',
          text: 'Усі операції проводяться у висококласних лікарнях із дотриманням суворих хірургічних стандартів провідними хірургами-експертами. Ексклюзивні клініки-партнери пропонують повний спектр пластичних операцій з гарантією безпечного та гармонійного результату:',
          bullets: [
            { title: 'Підтяжка обличчя (Фейсліфтинг)', text: 'Сучасна процедура для відновлення свіжості, гладкості та молодості шкіри обличчя й шиї зі збереженням максимально природного вигляду.' },
            { title: 'Збільшення грудей (Мамопластика)', text: 'Точна операція для створення пропорційної та гармонійної форми з використанням високоякісних імплантів за найсуворішими світовими стандартами.' },
            { title: 'Пластика повік (Блефаропластика)', text: 'Делікатна процедура з видалення надлишків шкіри та жирових тканин у зоні очей, що повертає відкритий, свіжий та молодий погляд.' },
            { title: 'Моделювання контурів тіла', text: 'Ліпосакція за передовими технологіями, підтяжка грудей, абдомінопластика та комплексна корекція фігури.' },
          ],
        },
        {
          title: 'Лікування безпліддя, донорство яйцеклітин, вибір статі дитини та міжнародне сурогатне материнство',
          text: 'Це одна з найчутливіших, найважливіших та найемоційніших сфер життя. Dafna Medical надає надійний, теплий та професійний супровід на шляху до батьківства, працюючи ексклюзивно з провідними медичними центрами, лабораторіями та репродуктологами:',
          bullets: [
            { title: 'Вибір статі дитини (аналіз NGS / PGD)', text: 'Застосування найсучасніших генетичних технологій (Next Generation Sequencing) для точності преімплантаційної діагностики, повної генетичної безпеки та визначення статі.' },
            { title: 'Сучасне та контрольоване донорство яйцеклітин', text: 'Ретельний підбір донорів за суворими медичними та генетичними критеріями з дотриманням європейських стандартів та повною прозорістю.' },
            { title: 'Донорство яйцеклітин та сперми (комбіновані програми)', text: 'Комплексні та конфіденційні рішення для пацієнтів і пар, які потребують подвійного донорства, із залученням найкращих банків.' },
            { title: 'Сурогатне материнство на Кіпрі', text: 'Зручний та доступний напрямок, що пропонує європейський медичний догляд та суворий юридичний контроль від старту до народження малюка.' },
            { title: 'Сурогатне материнство в Грузії', text: 'Перевірена, юридично захищена та медично надійна програма в ексклюзивній співпраці з найкращими клініками Тбілісі.' },
            { title: 'Сурогатне материнство у Вірменії', text: 'Привабливий та передовий напрямок із високими медичними стандартами, чіткими законодавчими рамками та повним персональним супроводом.' },
          ],
        },
        {
          title: 'Пересадка волосся та брів за найсучаснішими світовими технологіями',
          text: 'Високоточні хірургічні процедури, які вимагають майстерності для досягнення природного, густого та долготривалого результату:',
          bullets: [
            { title: 'Пересадка волосся методами FUE та Sapphire', text: 'Використання мікролез із сапфіру для створення точних каналів, що мінімізує рубцювання та прискорює відновлення, забезпечуючи максимальне приживання фолікулів.' },
            { title: 'Сучасна пересадка брів', text: 'Відновлення форми та густоти брів із точним дотриманням кута росту, товщини та контурів обличчя для природного естетичного вигляду.' },
            { title: 'Індивідуальний дизайн лінії росту волосся', text: 'Моделювання природної лінії чола відповідно до анатомії обличчя та віку пацієнта, яке виконує безпосередньо лікар-експерт.' },
          ],
        },
      ],
    },
    why: {
      about: {
        title: 'Про Dafna Medical',
        paragraphs: [
          'Компанія Dafna Medical є лідером у сфері міжнародного медичного туризму. Ми присвячуємо свою діяльність здійсненню мрій та наданню медичного, естетичного й сімейного супроводу за найвищими європейськими стандартами. Ми переконані, що кожна людина, яка прагне змін або мріє про народження дитини, потребує більше ніж просто виконавця послуг — їй потрібна надійна підтримка, безкомпромісна чесність і тепле, персональне ставлення від першого кроку до повернення додому.',
          'Наша унікальність полягає в ексклюзивній співпраці з елітними клініками та приватними лікарнями, де працюють найкращі лікарі, хірурги та репродуктологи. Завдяки цій партнерській формі ми гарантуємо нашим клієнтам суворі медичні протоколи, передові технології та найвищий пріоритет на кожному етапі.',
          'Від стоматології та пересадки волосся й брів за найновішими методами до складних пластичних операцій, програм сурогатного материнства, донорства яйцеклітин та вибору статі (на Кіпрі, у Грузії та Вірменії) — Dafna Medical забезпечує повний VIP-пакет: чітке планування, бездоганну логістику за кордоном та, головне, повну відповідальність і підтримку після повернення додому.',
        ],
        closing: 'Dafna Medical — адже ваше здоров’я, краса та мрії заслуговують на найкраще.',
      },
      eyebrow: 'Наш медичний стандарт',
      title: 'Наш високий медичний стандарт — чому пацієнти обирають нас?',
      subtitle: 'У світі з безліччю варіантів ми в Dafna Medical обираємо відсутність компромісів у всьому, що стосується вашого здоров’я та краси:',
      items: ['Ексклюзивна співпраця з обраними клініками', 'Суворі медичні протоколи', 'Провідний медичний персонал'],
      descriptions: [
        'Ми співпрацюємо не з усіма. Ми ретельно відбираємо та перевіряємо клініки, укладаючи угоди про повну ексклюзивність. Це гарантує нашим пацієнтам першочерговий пріоритет, привілейовані умови та суворий контроль кожного етапу лікування.',
        'Кожна процедура проходить під суворим європейським контролем якості, включаючи детальну первинну діагностику до виїзду, ретельний медичний відбір та індивідуальний підбір програми.',
        'Лікарі та експерти, з якими ми працюємо — це провідні фахівці у своїх галузях із багаторічним досвідом, члени міжнародних медичних асоціацій, які особисто проводять усі маніпуляції.',
      ],
    },
    process: {
      eyebrow: 'Наш сервіс',
      title: 'Повний VIP-супровід — від першої хвилини до повернення додому',
      subtitle: 'Ексклюзивна співпраця з клініками дозволяє нам надати вам повний комплекс послуг без жодних турбот:',
      steps: [
        { n: '01', title: 'Повна підготовка до виїзду', text: 'Побудова прозорого плану дій, відповіді на всі запитання та детальні медичні консультації ще до від’їзду.' },
        { n: '02', title: 'Прийом та перебування за кордоном', text: 'Зручні перельоти, проживання у преміум-готелях для комфортного відновлення та приватний VIP-трансфер між аеропортом, готелем і клінікою.' },
        { n: '03', title: 'Супровід 24/7', text: 'Персональні координатори, які зустрічають вас в аеропорту та супроводжують крок за кроком протягом усього перебування.' },
        { n: '04', title: 'Підтримка та відповідальність після повернення', text: 'На відміну від інших компаній, Dafna Medical надає надійну підтримку, медичні консультації та супровід після повернення додому.' },
      ],
    },
    testimonials: {
      eyebrow: 'Відгуки пацієнтів',
      title: 'Що говорять наші пацієнти',
      quotes: [
        { name: 'Daniel R.', treatment: 'Стоматологія', text: 'Команда супроводжувала мене на кожному етапі, і весь процес залишався зрозумілим, прозорим та спокійним.' },
        { name: 'Maria K.', treatment: 'IVF', text: 'Усе було організовано під наш графік, а на всі запитання ми миттєво отримували вичерпні відповіді.' },
        { name: 'Alex P.', treatment: 'Відновлення волосся', text: 'Від першої консультації до післялікувального супроводу комунікація була винятково персональною та професійною.' },
      ],
    },
    contact: {
      eyebrow: 'Зв’яжіться з нами',
      title: 'Готові розпочати свій шлях із повною впевненістю?',
      subtitle: 'Надішліть заявку, і наша команда зв’яжеться з вами для обговорення наступних кроків.',
      benefits: [
        { title: 'Супровід 24/7', text: 'Персональні координатори протягом усього перебування' },
        { title: 'Повна підготовка до виїзду', text: 'Прозорий план дій ще до від’їзду' },
        { title: 'Підтримка після повернення', text: 'Постійний супровід та контроль після повернення додому' },
      ],
      name: 'Ім’я та прізвище',
      email: 'Email',
      phone: 'Номер телефону',
      treatment: 'Послуги, що цікавлять',
      message: 'Повідомлення',
      consent: 'Я погоджуюся на зв’язок щодо моєї заявки.',
      submit: 'Надіслати заявку — отримайте безкоштовну первинну консультацію від експертів Dafna Medical',
      sending: 'Надсилання...',
      note: 'Ваші дані використовуються лише для обробки звернення.',
      success: 'Дякуємо. Заявку успішно надіслано.',
      error: 'Не вдалося надіслати заявку. Спробуйте ще раз або зв’яжіться з нами напряму.',
      options: ['Стоматологічні послуги', 'Пересадка волосся та брів', 'Пластична хірургія', 'Репродуктологія, NGS та сурогатне материнство'],
      validation: {
        email: 'Введіть діючу та коректну адресу email',
        phone: 'Введіть коректний номер телефону',
        captcha: 'Не вдалося перевірити капчу. Спробуйте ще раз.',
        timeout: 'Час очікування відповіді вичерпано (2 хв). Спробуйте ще раз.',
      },
    },
    footer: { tagline: 'Ваш шлях, наша турбота.', location: 'Кіпр, Середземномор’я', privacy: 'Політика конфіденційності', terms: 'Умови використання' },
  },
  de: {
    nav: { home: 'Startseite', treatments: 'Behandlungen', specialists: 'VIP-Betreuung', about: 'Über uns', contact: 'Kontakt' },
    hero: {
      eyebrow: 'Willkommen bei Dafna Medical',
      title: 'Dafna Medical – Ihre sichere Brücke in eine Welt voller Gesundheit, Ästhetik und Erfüllung',
      text: 'Ein führendes Unternehmen im internationalen Medizintourismus, das sich der Erfüllung von Träumen und der Bereitstellung medizinischer, ästhetischer und familiärer Betreuung nach höchsten europäischen Standards widmet.',
      primary: 'Persönliche Beratung vereinbaren',
      secondary: 'Behandlungen entdecken',
      chips: ['Erfahrene Spezialisten', 'Privater Service', 'Klinik am Mittelmeer'],
    },
    services: {
      eyebrow: 'Unsere Behandlungen',
      title: 'Unsere fortschrittlichen Behandlungen und Dienstleistungen',
      subtitle: '',
      learnMore: 'Mehr erfahren',
      cards: [
        {
          title: 'Fortschrittliche Zahnmedizin',
          sub: 'Ästhetische und restaurative Zahnheilkunde',
          text: 'Ein perfektes und gesundes Lächeln ist Ihre Visitenkarte. Unsere exklusiven Partnerkliniken bieten fortschrittliche Lösungen unter einem Dach mit den neuesten digitalen Technologien:',
          bullets: [
            { title: 'Zahnimplantate & vollständige Mundsanierung', text: 'Moderne chirurgische Lösungen zur vollständigen Wiederherstellung der Kieferfunktion und Ihres Selbstbewusstseins.' },
            { title: 'Lächeln-Ästhetik & Keramik-Veneers (Hollywood Smile)', text: 'Hochwertige Laminat-Veneers und Zirkonkronen für ein strahlendes, natürliches und präzises Lächeln, abgestimmt auf Ihre Gesichtszüge.' },
            { title: 'Konservierende Zahnheilkunde & Oralchirurgie', text: 'Präzise Wurzelkanalbehandlungen, chirurgische Extraktionen, Sinuslifts und Vorsorge mit modernsten Bildgebungsverfahren und minimalen Schmerzen.' },
          ],
        },
        {
          title: 'Plastische Chirurgie & fortschrittliche Gesichts- und Körperästhetik',
          text: 'Alle Operationen werden in hochklassigen Krankenhäusern unter strengen chirurgischen Bedingungen von leitenden Fachärzten durchgeführt. Unsere Partnerkliniken bieten ein umfassendes Spektrum führender plastischer Eingriffe:',
          bullets: [
            { title: 'Facelift', text: 'Fortschrittliches Verfahren zur Wiederherstellung eines frischen, glatten und jugendlichen Erscheinungsbilds von Gesicht und Hals bei völlig natürlichem Ergebnis.' },
            { title: 'Brustvergrößerung', text: 'Präzise Operation für eine proportionale, volle und geformte Silhouette mit hochwertigen Implantaten nach den weltweit strengsten Standards.' },
            { title: 'Lidstraffung (Blepharoplastik)', text: 'Sanfter und präziser Eingriff zur Entfernung überschüssiger Haut und Fettgewebe im Augenbereich für einen wachen und jugendlichen Blick.' },
            { title: 'Körperkonturierung', text: 'Fettabsaugung mit modernsten Technologien, Bruststraffung, Bauchdeckenstraffung und Neugestaltung der Körpersilhouette.' },
          ],
        },
        {
          title: 'Kinderwunschbehandlung, Eizellspende, Geschlechtsselektion & internationale Leihmutterschaft',
          text: 'Dies ist einer der sensibelsten und bedeutendsten Lebensbereiche. Dafna Medical begleitet Sie sicher, herzlich und professionell auf dem Weg zur Elternschaft in exklusiver Zusammenarbeit mit führenden Zentren und Laboren:',
          bullets: [
            { title: 'Geschlechtsselektion des Embryos (NGS / PGD)', text: 'Einsatz modernster genetischer Technologien (Next Generation Sequencing) für präzise Präimplantationsdiagnostik, vollständige genetische Sicherheit und hohe Präzision bei der Geschlechtsauswahl.' },
            { title: 'Fortschrittliche & überwachte Eizellspende', text: 'Sorgfältige Spenderinnenauswahl nach strengen medizinischen und genetischen Profilen unter Einhaltung europäischer Standards und voller Transparenz.' },
            { title: 'Eizell- und Samenspende (Kombinierte Programme)', text: 'Umfassende und diskrete Lösungen für Patienten und Paare, die eine doppelte Keimzellspende benötigen, mit erstklassigen Samen- und Eizellbanken.' },
            { title: 'Leihmutterschaft in Zypern', text: 'Ein nahegelegenes und komfortables Ziel mit enger europäischer medizinischer Betreuung und strenger juristischer Überwachung von Anfang an bis zur Geburt.' },
            { title: 'Leihmutterschaft in Georgien', text: 'Etablierte, rechtlich sichere und medizinisch bewährte Leihmutterschaft in exklusiver Kooperation mit den besten Kliniken in Tiflis.' },
            { title: 'Leihmutterschaft in Armenien', text: 'Attraktives und führendes Ziel mit hohen medizinischen Standards, klarem rechtlichem Rahmen und umfassender persönlicher Betreuung.' },
          ],
        },
        {
          title: 'Haar- & Augenbrauentransplantation mit den weltweit fortschrittlichsten Technologien',
          text: 'Präzise chirurgische Eingriffe, die hohes Fachwissen erfordern, um ein natürliches, dichtes und dauerhaft harmonisches Ergebnis zu gewährleisten:',
          bullets: [
            { title: 'Haartransplantation mit FUE & Saphir-Technik', text: 'Einsatz winziger Saphirklingen für präzise Kanäle, minimale Narbenbildung und schnelle Erholung bei schonender Entnahme der Follikel.' },
            { title: 'Fortschrittliche Augenbrauentransplantation', text: 'Präzise Neugestaltung und Verdichtung der Augenbrauen mit perfekter Anpassung von Wuchswinkel, Dichte und Konturen an die Gesichtsstruktur.' },
            { title: 'Individuelles Haaransatz-Design', text: 'Gestaltung eines vollkommen natürlichen Haaransatzes, der zur Gesichtsstruktur und zum Alter des Patienten passt, durchgeführt von Spezialärzten.' },
          ],
        },
      ],
    },
    why: {
      about: {
        title: 'Über Dafna Medical',
        paragraphs: [
          'Dafna Medical ist ein führendes Unternehmen im internationalen Medizintourismus, das sich der Erfüllung von Träumen und der Bereitstellung medizinischer, ästhetischer und familiärer Betreuung nach höchsten europäischen Standards widmet. Wir glauben, dass jeder Mensch auf dem Weg zu einer Veränderung oder Familiengründung mehr als nur einen Dienstleister braucht – eine verlässliche Adresse, kompromisslose Integrität und eine warme, persönliche Begleitung von der Entscheidung bis zur Rückkehr nach Hause.',
          'Unsere Besonderheit liegt in der vollständigen Exklusivität mit Spitzenkliniken und ausgewählten Privatkrankenhäusern, in denen führende Ärzte, Chirurgen und Kinderwunschspezialisten tätig sind. Dank dieser Partnerschaften garantieren wir unseren Kunden strenge medizinische Protokolle, fortschrittlichste Technologien und höchste Priorität in jeder Phase.',
          'Von fortschrittlicher Zahnmedizin über Haar- und Augenbrauentransplantationen mit neuesten Methoden und komplexen plastischen Operationen bis hin zu Leihmutterschafts- und Eizellspendeprogrammen (in Zypern, Georgien und Armenien) – Dafna Medical bietet ein vollständiges VIP-Paket inklusive präziser Planung, reibungsloser Logistik im Ausland und vor allem voller Verantwortung auch nach Ihrer Rückkehr nach Hause.',
        ],
        closing: 'Dafna Medical – Weil Ihre Gesundheit, Ihr Aussehen und Ihre Träume nur das Beste verdienen.',
      },
      eyebrow: 'Unser medizinischer Standard',
      title: 'Unser hoher medizinischer Standard – Warum Patienten uns wählen',
      subtitle: 'In einer Welt mit vielen Möglichkeiten gehen wir bei Dafna Medical keine Kompromisse ein, wenn es um Ihre Gesundheit und Ihr Aussehen geht:',
      items: ['Exklusive Zusammenarbeit mit ausgewählten Kliniken', 'Strenge medizinische Protokolle', 'Leitendes medizinisches Fachpersonal'],
      descriptions: [
        'Wir arbeiten nicht mit jedem zusammen. Wir wählen unsere Partnerkliniken sorgfältig aus, prüfen sie gründlich und arbeiten exklusiv mit ihnen zusammen. Diese Exklusivität garantiert unseren Patienten höchste Priorität, bevorzugte Konditionen und strenge Überwachung in jeder Phase.',
        'Jede Behandlung unterliegt strengen europäischen Qualitätskontrollen, einschließlich umfassender Vordiagnose vor der Abreise, sorgfältiger medizinischer Selektion und individueller Behandlungsabstimmung.',
        'Die Ärzte und Spezialisten, mit denen wir zusammenarbeiten, sind führende Experten auf ihrem Gebiet mit langjähriger Erfahrung, Mitglieder medizinischer Fachgesellschaften und führen die Eingriffe persönlich durch.',
      ],
    },
    process: {
      eyebrow: 'Unser Service',
      title: 'Vollständige VIP-Betreuung – Vom ersten Moment bis zur Rückkehr nach Hause',
      subtitle: 'Die exklusive Zusammenarbeit mit den Kliniken ermöglicht es uns, Ihnen ein rundum sorgloses Dienstleistungspaket anzubieten:',
      steps: [
        { n: '01', title: 'Vollständige Vorbereitung vor der Reise', text: 'Erstellung eines transparenten Behandlungsplans, Beantwortung aller Fragen und detaillierte medizinische Erklärungen bereits vor der Abreise.' },
        { n: '02', title: 'Betreuung & Aufenthalt im Ausland', text: 'Bequeme Flüge, Aufenthalt in ausgewählten Luxushotels für die Erholungsphase und private VIP-Transfers zwischen Flughafen, Hotel und Klinik.' },
        { n: '03', title: '24/7 Persönliche Betreuung', text: 'Persönliche Ansprechpartner, die Sie am Flughafen empfangen und Sie während des gesamten Aufenthalts Schritt für Schritt begleiten.' },
        { n: '04', title: 'Verlässliche Nachsorge nach der Rückkehr', text: 'Im Gegensatz zu anderen Anbietern bietet Dafna Medical Ihnen auch nach Ihrer Rückkehr verlässliche Unterstützung, medizinische Beratung und Nachsorge.' },
      ],
    },
    testimonials: {
      eyebrow: 'Patientenstimmen',
      title: 'Was unsere Patienten sagen',
      quotes: [
        { name: 'Daniel R.', treatment: 'Zahnmedizin', text: 'Das Team hat mich durch jeden Schritt begleitet und den gesamten Prozess transparent, klar und entspannt gehalten.' },
        { name: 'Maria K.', treatment: 'IVF', text: 'Alles wurde perfekt auf unseren Zeitplan abgestimmt und unsere Fragen wurden umgehend beantwortet.' },
        { name: 'Alex P.', treatment: 'Haarrestauration', text: 'Von der ersten Beratung bis zur Nachsorge war die Kommunikation durchweg persönlich und hochprofessionell.' },
      ],
    },
    contact: {
      eyebrow: 'Kontakt aufnehmen',
      title: 'Bereit, Ihre Reise mit voller Zuversicht zu beginnen?',
      subtitle: 'Senden Sie eine Anfrage und unser Team meldet sich bezüglich der nächsten Schritte bei Ihnen.',
      benefits: [
        { title: '24/7 Persönliche Betreuung', text: 'Persönliche Ansprechpartner während des gesamten Aufenthalts' },
        { title: 'Vollständige Vorbereitung vor der Reise', text: 'Transparenter Behandlungsplan vor der Abreise' },
        { title: 'Verlässliche Nachsorge nach der Rückkehr', text: 'Kontinuierliche Betreuung auch nach Ihrer Rückkehr nach Hause' },
      ],
      name: 'Vor- und Nachname',
      email: 'E-Mail',
      phone: 'Telefonnummer',
      treatment: 'Interessensgebiet',
      message: 'Nachricht',
      consent: 'Ich stimme zu, bezüglich meiner Anfrage kontaktiert zu werden.',
      submit: 'Anfrage senden – Erhalten Sie eine kostenlose Erstberatung von den Experten von Dafna Medical',
      sending: 'Wird gesendet...',
      note: 'Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.',
      success: 'Vielen Dank. Ihre Anfrage wurde erfolgreich gesendet.',
      error: 'Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.',
      options: ['Zahnmedizin', 'Haar- & Augenbrauentransplantation', 'Plastische Chirurgie', 'Kinderwunsch, NGS & Leihmutterschaft'],
      validation: {
        email: 'Bitte geben Sie eine gültige und aktive E-Mail-Adresse ein',
        phone: 'Bitte geben Sie eine gültige Telefonnummer ein',
        captcha: 'Captcha-Überprüfung fehlgeschlagen. Bitte versuchen Sie es erneut.',
        timeout: 'Zeitüberschreitung der Anfrage (2 Min.). Bitte versuchen Sie es erneut.',
      },
    },
    footer: { tagline: 'Ihr Weg, unsere Betreuung.', location: 'Zypern, Mittelmeer', privacy: 'Datenschutz', terms: 'Nutzungsbedingungen' },
  },
  he: {
    nav: { home: 'דף הבית', treatments: 'טיפולים', specialists: 'מעטפת VIP', about: 'אודותינו', contact: 'צור קשר' },
    hero: {
      eyebrow: 'ברוכים הבאים לדפנה מדיקל',
      title: 'דפנה מדיקל – הגשר הבטוח שלך לעולם של בריאות, אסתטיקה והגשמה',
      text: 'חברה מובילה בתחום תיירות המרפא הבינלאומית, המוקדשת להגשמת חלומות ולמתן מעטפת רפואית, אסתטית ומשפחתית בסטנדרטים האירופאיים הגבוהים ביותר.',
      primary: 'תיאום ייעוץ אישי',
      secondary: 'לצפייה בטיפולים',
      chips: ['מומחים בעלי ניסיון', 'שירות פרטי', 'מרפאה בים התיכון'],
    },
    services: {
      eyebrow: 'הטיפולים שלנו',
      title: 'הטיפולים והשירותים המתקדמים שלנו',
      subtitle: '',
      learnMore: 'למידע נוסף',
      cards: [
        {
          title: 'טיפולי שיניים מתקדמים',
          sub: 'רפואת שיניים אסתטית ומשקמת',
          text: 'חיוך מושלם ובריא הוא כרטיס הביקור שלך. המרפאות הבלעדיות שאנו עובדים איתן מציעות פתרונות מתקדמים תחת קורת גג אחת, בטכנולוגיות הדיגיטליות החדישות ביותר:',
          bullets: [
            { title: 'השתלות שיניים ושיקום הפה המלא', text: 'פתרונות כירורגיים מתקדמים לשיקום מלא של הלסתות והחזרת התפקוד והביטחון.' },
            { title: 'אסתטיקת חיוך וציפויי חרסינה (Hollywood Smile)', text: 'ציפויי למינייט וכתרי זירקוניה בסטנדרט גבוה במיוחד, המעניקים חיוך זוהר, טבעי ומדויק המותאם למבנה הפנים.' },
            { title: 'טיפולים משמרים וכירורגיה דנטלית', text: 'טיפולי שורש מדויקים, עקירות כירורגיות, הרמות סינוס וטיפולים מונעים המבוצעים עם ציוד הדמיה מתקדם ובמינימום אי-כאב.' },
          ],
        },
        {
          title: 'ניתוחים פלסטיים ואסתטיקה מתקדמת של הפנים והגוף',
          text: 'כל הניתוחים מתבצעים בבתי חולים בסטנדרט גבוה, תחת תנאים כירורגיים קפדניים ועל ידי רופא מנתח מומחה בכיר. המרפאות הבלעדיות שאנו עובדים איתן מציעות מעטפת מלאה של ניתוחים פלסטיים מובילים, המבטיחים תוצאות אסתטיות הרמוניות ובטוחות:',
          bullets: [
            { title: 'מתיחת פנים', text: 'פרוצדורה מתקדמת להשבת המראה הרענן, החלק והצעיר לעור הפנים והצוואר, תוך שמירה על תוצאה טבעית לחלוטין.' },
            { title: 'הגדלת חזה', text: 'ניתוח מדויק להענקת מראה פרופורציונלי, מלא ומעוצב, תוך שימוש בשתלים איכותיים העומדים בתקנים המחמירים בעולם.' },
            { title: 'ניתוח עפעפיים', text: 'הליך עדין ומדויק להסרת עודפי עור ושומן באזור העיניים, המעניק פתיחה מחודשת ומראה ערני וצעיר יותר למבט.' },
            { title: 'ניתוחי גוף נוספים', text: 'שאיבת שומן בטכנולוגיות מתקדמות, הרמות חזה, מתיחת בטן ועיצוב מחדש של מבנה הגוף.' },
          ],
        },
        {
          title: 'טיפולי פוריות, תרומת ביצית, בחירת מין העובר ופונדקאות בינלאומית',
          text: 'זהו אחד התחומים הרגישים, המשמעותיים והמרגשים ביותר בחיים. דפנה מדיקל מלווה אתכם בצעד בטוח, חם ומקצועי להגשמת החלום להפוך להורים, תוך עבודה בבלעדיות עם מרכזים רפואיים, מעבדות מתקדמות ומומחי פוריות מובילים:',
          bullets: [
            { title: 'בחירת מין העובר (בדיקת NGS / PGD)', text: 'שימוש בטכנולוגיות גנטיות מתקדמות ביותר (Next Generation Sequencing) המאפשרות אבחון טרום-השרשה מדויק, בטיחות גנטית מלאה ואפשרות לבחירת מין העובר ברמת דיוק גבוהה.' },
            { title: 'תרומת ביצית מתקדמת ומפוקחת', text: 'התאמת תורמות קפדנית המבוססת על פרופיל רפואי וגנטי מחמיר, עמידה בתקנים אירופאיים מחמירים ושקיפות מלאה.' },
            { title: 'תרומת ביצית וזרע (מסלולים משולבים)', text: 'פתרונות כוללים ודיסקרטיים למטופלים וזוגות הזקוקים לתרומת תאי רבייה כפולה, תוך שימוש במאגרים המובילים והבטחת איכות גנטית גבוהה.' },
            { title: 'פונדקאות בקפריסין', text: 'תהליך פונדקאות כיעד קרוב, נגיש ונוח, המאפשר מעטפת רפואית אירופאית צמודה ופיקוח משפטי מוקפד מתחילת התהליך ועד לידת התינוק.' },
            { title: 'פונדקאות בגאורגיה', text: 'מסלול פונדקאות ותיק, מוכר ובטוח מבחינה משפטית ורפואית בשיתוף פעולה בלעדי עם מיטב הקליניקות בטביליסי.' },
            { title: 'פונדקאות בארמניה', text: 'יעד אטרקטיבי, מתקדם ומוביל המציע מסלולי פונדקאות בסטנדרטים רפואיים גבוהים, במסגרת חוקית ברורה וליווי אישי מקיף.' },
          ],
        },
        {
          title: 'השתלות שיער והשתלות גבות בטכנולוגיות המתקדמות בעולם',
          text: 'פרוצדורות כירורגיות מדויקות הדורשות מומחיות רבה כדי להבטיח מראה טבעי, צפוף והרמוני לאורך זמן:',
          bullets: [
            { title: 'השתלת שיער בטכניקת FUE ו-Sapphire', text: 'שימוש בלהבי ספפיר זעירים לפתיחת תעלות מדויקות, המפחיתים למינימום את הצלקות ותקופת ההחלמה, יחד עם חילוץ עדין של הזקיקים ושמירה על חיותם.' },
            { title: 'השתלת גבות מתקדמת', text: 'עיצוב מחדש ומילוי גבות בשיטה קפדנית, תוך התאמה מושלמת של זווית הצמיחה, העובי וקווי המתאר למבנה הפנים, להשגת מראה טבעי ומרשים.' },
            { title: 'עיצוב קו שיער מותאם אישית', text: 'תכנון קו מצח טבעי לחלוטין המחמיא למבנה הפנים ולגיל המטופל, המבוצע על ידי רופא מומחה.' },
          ],
        },
      ],
    },
    why: {
      about: {
        title: 'אודות דפנה מדיקל',
        paragraphs: [
          'חברת דפנה מדיקל היא חברה מובילה בתחום תיירות המרפא הבינלאומית, המוקדשת להגשמת חלומות ולמתן מעטפת רפואית, אסתטית ומשפחתית בסטנדרטים האירופאיים הגבוהים ביותר. אנו מאמינים שכל אדם הפוסע לקראת שינוי או בניית משפחה זקוק ליותר מאשר ספק שירות – הוא זקוק לכתובת בטוחה, לאמינות ללא פשרות ולליווי אנושי חם ואישי מרגע ההחלטה ועד החזרה הביתה.',
          'הייחודיות שלנו מתבססת על עבודה בבלעדיות מלאה עם מרפאות עילית ובתי חולים פרטיים נבחרים, המעסיקים את מיטב הרופאים, המנתחים ומומחי הפריון. הודות לשיתופי פעולה אלו, אנו מבטיחים ללקוחותינו פרוטוקולים רפואיים קפדניים, טכנולוגיות מתקדמות ועדיפות עליונה בכל שלב בתהליך.',
          'החל מטיפולי שיניים מתקדמים, השתלות שיער וגבות בטכנולוגיות החדשניות ביותר, ניתוחים פלסטיים מורכבים ועד למסלולי פונדקאות, תרומת ביצית ובחירת מין העובר (בקפריסין, גאורגיה וארמניה) – דפנה מדיקל מציעה מעטפת VIP מלאה הכוללת תכנון מדויק בישראל, לוגיסטיקה חסרת דופי בחו"ל, ובעיקר גב ואחריות מלאה גם לאחר החזרה הביתה.',
        ],
        closing: 'דפנה מדיקל – כי הבריאות, המראה והחלומות שלך ראויים לטוב ביותר.',
      },
      eyebrow: 'הסטנדרט הרפואי שלנו',
      title: 'הסטנדרט הרפואי הגבוה שלנו – למה הלקוחות בוחרים בנו?',
      subtitle: 'בעולם שבו יש לא מעט אפשרויות, אנחנו ב-דפנה מדיקל בוחרים לא להתפשר על שום פרט שקשור לבריאות ולמראה שלך:',
      items: ['עבודה בבלעדיות עם מרפאות נבחרות', 'פרוטוקולים רפואיים קפדניים', 'צוות רפואי מומחה בכיר'],
      descriptions: [
        'אנחנו לא עובדים עם כל אחד. אנו בוחרים בקפידה ובודקים לעומק את המרפאות שאנו משתפים איתן פעולה, ופועלים מולן בבלעדיות מלאה. בלעדיות זו מבטיחה כי המטופלים שלנו מקבלים עדיפות עליונה, תנאים מועדפים, ופיקוח קפדני על כל שלב ושלב בתהליך הרפואי.',
        'כל פרוצדורה מתבצעת תחת בקרת איכות אירופאית מחמירה, הכוללת אבחון מקדים מעמיק בישראל, סינון רפואי קפדני ובדיקת התאמה אישית למטופל.',
        'הרופאים והמומחים שעובדים איתנו הם מובילי דעה בתחומם, בעלי ניסיון עשיר, החברים בארגונים ואיגודים רפואיים ומבצעים את הפרוצדורות הרפואיות בעצמם.',
      ],
    },
    process: {
      eyebrow: 'השירות שלנו',
      title: 'מעטפת VIP מלאה – מהרגע הראשון ועד החזרה הביתה',
      subtitle: 'העבודה בבלעדיות עם המרפאות מאפשרת לנו להעניק לך חבילת שירות כוללת ללא דאגות:',
      steps: [
        { n: '01', title: 'הכנה מלאה בישראל', text: 'בניית תוכנית עבודה שקופה, מענה על שאלות והסברים רפואיים מפורטים עוד לפני היציאה מהארץ.' },
        { n: '02', title: 'אירוח והתנהלות בחו״ל', text: 'טיסות נוחות, שהייה במלונות יוקרה נבחרים המותאמים לתקופת ההחלמה, והסעות פרטיות (VIP) בין שדה התעופה, המלון והמרפאה.' },
        { n: '03', title: 'ליווי צמוד סביב השעון (24/7)', text: 'נציגים דוברי עברית שמקבלים את פניך בשדה התעופה ומלווים אותך יד ביד לאורך כל השהות במרפאה.' },
        { n: '04', title: 'כתובת ואחריות גם בישראל', text: 'בניגוד לחברות אחרות, דפנה מדיקל מספקת לך גב, מענה רפואי ומעקב שוטף גם לאחר החזרה הביתה לישראל.' },
      ],
    },
    testimonials: {
      eyebrow: 'המלצות מטופלים',
      title: 'מה המטופלים שלנו אומרים',
      quotes: [
        { name: 'Daniel R.', treatment: 'רפואת שיניים', text: 'הצוות ליווה אותי בכל שלב, וכל התהליך היה שקוף, ברור ורגוע.' },
        { name: 'Maria K.', treatment: 'IVF', text: 'הכל אורגן בהתאם ללוח הזמנים שלנו, וקיבלנו מענה מהיר לכל שאלה.' },
        { name: 'Alex P.', treatment: 'שיקום שיער', text: 'מהייעוץ הראשון ועד הליווי שאחרי הטיפול, התקשורת הייתה אישית ומקצועית.' },
      ],
    },
    contact: {
      eyebrow: 'צרו עמנו קשר',
      title: 'מוכנים להתחיל את המסע שלכם בביטחון מלא?',
      subtitle: 'שלחו פנייה והצוות שלנו יצור איתכם קשר עם הצעדים הבאים.',
      benefits: [
        { title: 'ליווי צמוד סביב השעון (24/7)', text: 'נציגים דוברי עברית לאורך כל השהות' },
        { title: 'הכנה מלאה בישראל', text: 'תוכנית עבודה שקופה לפני היציאה' },
        { title: 'כתובת ואחריות גם בישראל', text: 'מעקב שוטף גם לאחר החזרה הביתה' },
      ],
      name: 'שם מלא',
      email: 'דוא"ל',
      phone: 'מספר טלפון',
      treatment: 'תחומי התעניינות',
      message: 'הודעה',
      consent: 'אני מסכים/ה ליצירת קשר בנוגע לפנייה שלי.',
      submit: 'שליחת פנייה – קבלו ייעוץ ראשוני חינם מהמומחים של דפנה מדיקל',
      sending: 'שולח...',
      note: 'הפרטים שלך ישמשו אך ורק לצורך טיפול בפנייה.',
      success: 'תודה רבה. הפנייה נשלחה בהצלחה.',
      error: 'שליחת הפנייה נכשלה. אנא נסו שוב או צרו עמנו קשר ישירות.',
      options: ['טיפולי שיניים', 'השתלות שיער וגבות', 'ניתוחים פלסטיים', 'פיריון, NGS ופונדקאות'],
      validation: {
        email: 'אנא הזן כתובת דוא"ל חוקית ופעילה',
        phone: 'אנא הזן מספר טלפון חוקי',
        captcha: 'אימות קאפצ\'ה נכשל. אנא נסה שוב.',
        timeout: 'זמן הבקשה פג (2 דקות). אנא נסו שוב.',
      },
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