import { useState } from 'react';
import gojoHero from './assets/gojo-hero.png';
import gojoContact from './assets/gojo-contact.png';
import previewImage from './assets/preview.png';

const translations = {
  cs: {
    nav: {
      home: 'Domů',
      contact: 'Kontakt',
      about: 'O mně',
      work: 'Podívat se na práci',
    },
    hero: {
      title: 'Ahoj, jsem Petr',
      description:
        'Přetvářím nápady do hladkých digitálních řešení. Díky zkušenostem s UI/UX designem a Reactem tvořím moderní, škálovatelné a uživatelsky přívětivé weby. Cílem je, aby rozhraní nejen dobře vypadalo, ale také bezchybně fungovalo.',
      aboutButton: 'O mně',
      projectsButton: 'Ukázky',
    },
    about: {
      title: 'Kdo jsem?',
      p1:
        'Jsem student informatiky žijící v Česku. Baví mě navrhovat a vytvářet moderní webové zážitky s čistým a funkčním designem.',
      p2:
        'Pro tvorbu spolehlivých webů používám React, TypeScript a Tailwind CSS. K designu rozhraní přistupuji s ohledem na použitelnost a přehlednost, zároveň se neustále učím novým technologiím a metodám.',
      resume: 'Stáhnout životopis',
      contact: 'Kontaktovat mě',
    },
    projects: {
      title: 'Moje projekty',
      subtitle: 'Zde najdete jeden důležitý projekt, na kterém jsem pracoval.',
      list: [
        {
          name: 'Sensory Gallery',
          description:
            'Webová ukázka projektu Sensory Gallery, propojená přímo na živý web s moderním a vizuálně čistým designem.',
          url: 'https://sensorygallery.vercel.app/',
          image: previewImage,
        },
      ],
    },
    contact: {
      title: 'Jak mě můžete kontaktovat?',
      github: 'Navštiv můj GitHub',
      email: 'Napiš mi e-mail',
      x: 'Sleduj mě na X',
      work: 'Pojďme spolupracovat!',
    },
    footer: {
      built: 'Postaveno mnou, samozřejmě.',
      copyright: '© 2026 – Petr Chaloupka',
    },
    langButton: 'English',
  },
  en: {
    nav: {
      home: 'Home',
      contact: 'Contact',
      about: 'About Me',
      work: 'View My Work',
    },
    hero: {
      title: "Hello, I'm Peter",
      description:
        'I turn ideas into seamless digital experiences. With a strong foundation in UI/UX design and hands-on experience in React development, I craft modern, scalable, and user-friendly websites. My goal is to bridge design and code so every interface looks great and performs flawlessly.',
      aboutButton: 'About Me',
      projectsButton: 'Look at My Work',
    },
    about: {
      title: 'Who am I?',
      p1:
        'I am a Computer Science student living in Czechia. I enjoy designing and building modern web experiences with a clean, functional style.',
      p2:
        'I use React, TypeScript and Tailwind CSS to build reliable web applications. I approach interface design with usability and clarity in mind and keep learning new technologies and techniques.',
      resume: 'Download my Resume',
      contact: 'Contact Me',
    },
    projects: {
      title: 'My Projects',
      subtitle: 'Here is one important project I have worked on.',
      list: [
        {
          name: 'Sensory Gallery',
          description:
            'A live example website for Sensory Gallery, linked directly to the hosted site with a clean visual design.',
          url: 'https://sensorygallery.vercel.app/',
          image: previewImage,
        },
      ],
    },
    contact: {
      title: 'How can you contact me?',
      github: 'Visit My GitHub',
      email: 'Send me an Email',
      x: 'Follow me on X',
      work: "Let's work together!",
    },
    footer: {
      built: 'Built by me, obviously.',
      copyright: '© 2026 – Petr Chaloupka',
    },
    langButton: 'Čeština',
  },
};

export default function Portfolio() {
  const [lang, setLang] = useState<'cs' | 'en'>('cs');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const t = translations[lang];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <li>
            <a href="#home" className="hover:text-black transition-colors" onClick={closeMenu}>
              {t.nav.home}
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-black transition-colors" onClick={closeMenu}>
              {t.nav.contact}
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-black transition-colors" onClick={closeMenu}>
              {t.nav.about}
            </a>
          </li>
        </ul>

        {/* Burger Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(prev => (prev === 'cs' ? 'en' : 'cs'))}
            className="px-4 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {t.langButton}
          </button>
          <a
            href="#projects"
            className="hidden md:inline-block px-5 py-2 rounded-full border border-sky-400 text-sky-500 text-sm font-medium hover:bg-sky-50 transition-colors"
            onClick={closeMenu}
          >
            {t.nav.work}
          </a>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 md:hidden">
            <div className="px-8 py-4 space-y-4">
              <a
                href="#home"
                className="block py-2 text-sm font-medium text-gray-600 hover:text-black transition-colors"
                onClick={closeMenu}
              >
                {t.nav.home}
              </a>
              <a
                href="#contact"
                className="block py-2 text-sm font-medium text-gray-600 hover:text-black transition-colors"
                onClick={closeMenu}
              >
                {t.nav.contact}
              </a>
              <a
                href="#about"
                className="block py-2 text-sm font-medium text-gray-600 hover:text-black transition-colors"
                onClick={closeMenu}
              >
                {t.nav.about}
              </a>
              <a
                href="#projects"
                className="block py-2 text-sm font-medium text-sky-500 hover:text-sky-600 transition-colors"
                onClick={closeMenu}
              >
                {t.nav.work}
              </a>
            </div>
          </div>
        )}
      </nav>

      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-8 md:px-20 pt-24"
      >
        <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between max-w-6xl">
          <div className="max-w-xl text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-5 leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8">
              {t.hero.description}
            </p>
            <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
              <a
                href="#about"
                className="px-6 py-3 rounded-full border border-gray-300 text-sm font-medium hover:border-gray-500 transition-colors"
                onClick={closeMenu}
              >
                {t.hero.aboutButton}
              </a>
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-sky-100 text-sky-600 text-sm font-medium hover:bg-sky-200 transition-colors"
                onClick={closeMenu}
              >
                {t.hero.projectsButton}
              </a>
            </div>
          </div>

          <div className="hidden lg:block shrink-0 w-80 lg:w-96 h-80 lg:h-96 opacity-90 select-none pointer-events-none">
            <img
              src={gojoHero}
              alt="hero illustration"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      <section id="about" className="bg-sky-50 py-24 px-8 md:px-20 flex justify-center">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-black mb-8 tracking-tight">{t.about.title}</h2>
          <p className="text-gray-600 leading-relaxed mb-5">{t.about.p1}</p>
          <p className="text-gray-600 leading-relaxed mb-10">{t.about.p2}</p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#"
              className="px-6 py-3 rounded-full border border-gray-300 text-sm font-medium hover:border-gray-500 transition-colors"
            >
              {t.about.resume}
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              {t.about.contact}
            </a>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 px-8 md:px-20 flex justify-center">
        <div className="max-w-3xl w-full">
          <h2 className="text-4xl font-black mb-2 tracking-tight">{t.projects.title}</h2>
          <p className="text-gray-500 mb-12">{t.projects.subtitle}</p>

          <div className="grid grid-cols-1 gap-6">
            {t.projects.list.map(project => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="group block rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-52 object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="px-4 py-5">
                  <p className="text-lg font-semibold text-gray-900">{project.name}</p>
                  <p className="mt-3 text-sm text-gray-500">{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-sky-50 py-24 px-8 md:px-20 flex justify-center">
        <div className="max-w-3xl w-full">
          <h2 className="text-3xl md:text-4xl font-black mb-10 tracking-tight text-center lg:text-left">
            {t.contact.title}
          </h2>
          <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start justify-center">
            <img
              src={gojoContact}
              alt="Contact Illustration"
              className="w-64 md:w-80 h-64 md:h-80 rounded-2xl hidden md:block"
            />
            <div className="flex flex-col gap-5 w-full lg:flex-1 items-center lg:items-start">
              <div className="text-center lg:text-left">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                  {t.projects.title}
                </p>
                <a
                  href="https://github.com/spartytech"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white border border-gray-200 text-sm font-medium hover:border-gray-400 transition-colors shadow-sm"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  {t.contact.github}
                </a>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                  {lang === 'cs' ? 'Napiš mi' : "Don't hesitate to say hi."}
                </p>
                <a
                  href="mailto:spartyman999@gmail.com"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white border border-gray-200 text-sm font-medium hover:border-gray-400 transition-colors shadow-sm"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-10 7L2 7" />
                  </svg>
                  {t.contact.email}
                </a>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                  {lang === 'cs' ? 'Najdete mě na X' : 'Find me on X'}
                </p>
                <a
                  href="https://x.com/PetrChaloupka13"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white border border-gray-200 text-sm font-medium hover:border-gray-400 transition-colors shadow-sm"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  {t.contact.x}
                </a>
              </div>
              <p className="mt-12 text-2xl md:text-3xl font-black italic text-gray-800 text-center lg:text-left">
                {t.contact.work}
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-6 px-8 md:px-20 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 text-xs text-gray-400 border-t border-gray-100">
        <span>{t.footer.built}</span>
        <span>{t.footer.copyright}</span>
        <div className="flex gap-4">
          <a href="mailto:spartyman999@gmail.com" aria-label="Email">
            <svg className="w-4 h-4 hover:text-gray-700 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-10 7L2 7" />
            </svg>
          </a>
          <a href="https://x.com/PetrChaloupka13" target="_blank" rel="noreferrer" aria-label="X">
            <svg className="w-4 h-4 hover:text-gray-700 transition-colors" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a href="https://github.com/spartytech" target="_blank" rel="noreferrer" aria-label="GitHub">
            <svg className="w-4 h-4 hover:text-gray-700 transition-colors" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}
