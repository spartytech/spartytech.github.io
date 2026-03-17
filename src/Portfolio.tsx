import { useState } from "react";
import gojoHero from './assets/gojo-hero.png';
import gojoContact from './assets/gojo-contact.png';

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">

      {/* ── Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="flex items-center justify-between px-8 py-4">

          {/* Desktop nav links */}
          <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <li><a href="#home" className="hover:text-black transition-colors">Home</a></li>
            <li><a href="#contact" className="hover:text-black transition-colors">Contact</a></li>
            <li><a href="#about" className="hover:text-black transition-colors">About Me</a></li>
          </ul>

          {/* Desktop CTA */}
          <a
            href="#projects"
            className="hidden md:inline-block px-5 py-2 rounded-full border border-sky-400 text-sky-500 text-sm font-medium hover:bg-sky-50 transition-colors"
          >
            View My Work
          </a>

          {/* Mobile: logo / name placeholder + burger */}
          <span className="md:hidden text-sm font-semibold text-gray-700">Petr Chaloupka</span>
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile dropdown menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className="flex flex-col px-8 pb-4 gap-4 text-sm font-medium text-gray-600 border-t border-gray-100 pt-4">
            <li><a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-black transition-colors">Home</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-black transition-colors">Contact</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-black transition-colors">About Me</a></li>
            <li>
              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="inline-block px-5 py-2 rounded-full border border-sky-400 text-sky-500 text-sm font-medium hover:bg-sky-50 transition-colors"
              >
                View My Work
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-8 md:px-20 pt-24"
      >
        <div className="w-full flex items-center justify-center lg:justify-between max-w-6xl">
          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-5 leading-tight">
              Hello, I'm Peter
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              I turn ideas into seamless digital experiences. With a strong
              foundation in UI/UX design and hands-on experience in React
              development, I craft modern, scalable, and user-friendly websites.
              My goal is to bridge design and code — ensuring that every
              interface not only looks great but performs flawlessly.
            </p>
            <div className="flex gap-4 flex-wrap justify-center md:justify-start">
              <a
                href="#about"
                className="px-6 py-3 rounded-full border border-gray-300 text-sm font-medium hover:border-gray-500 transition-colors"
              >
                About Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-sky-100 text-sky-600 text-sm font-medium hover:bg-sky-200 transition-colors"
              >
                Look at My Work
              </a>
            </div>
          </div>

          <div className="hidden lg:block shrink-0 w-96 h-96 opacity-90 select-none pointer-events-none">
            <img
              src={gojoHero}
              alt="hero illustration"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="bg-sky-50 py-24 px-8 md:px-20 flex justify-center">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-black mb-8 tracking-tight">Who am I?</h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            I'm a Computer Science student living in Czechia. I'm passionate
            about designing and building modern web experiences. I'm
            particularly interested in combining the principles of UI/UX design
            with front-end development.
          </p>
          <p className="text-gray-600 leading-relaxed mb-10">
            My primary technologies for building robust web applications include
            React, TypeScript, and Tailwind CSS. I also use Figma for designing
            user-friendly interfaces and seamless user experiences. I'm a
            lifelong learner who's constantly looking for ways to hone my
            skills and expand my knowledge of the latest technologies for
            improving the user experience as well as the quality of my code.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#"
              className="px-6 py-3 rounded-full border border-gray-300 text-sm font-medium hover:border-gray-500 transition-colors"
            >
              Download my Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="py-24 px-8 md:px-20 flex justify-center">
        <div className="max-w-3xl w-full">
          <h2 className="text-4xl font-black mb-2 tracking-tight">My Projects</h2>
          <p className="text-gray-500 mb-12">Here are some of my best projects.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {["Project name 1", "Project name 2", "Project name 3", "Project name 4"].map(
            (name) => (
              <div
                key={name}
                className="group cursor-pointer rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="w-full h-48 bg-gray-100 group-hover:bg-gray-200 transition-colors" />
                <p className="px-4 py-3 text-sm font-medium text-gray-700">{name}</p>
              </div>
            )
          )}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="bg-sky-50 py-24 px-8 md:px-20 flex justify-center">
        <div className="max-w-3xl w-full">
            <h2 className="text-4xl font-black mb-10 tracking-tight text-center md:text-left">
              How can you Contact Me?
            </h2>
        <div className="w-full flex flex-col md:flex-row gap-16 items-center md:items-start justify-center">
          <img src={gojoContact} alt="Contact Illustration" className="w-80 h-90 rounded-2xl hidden md:block" />

            <div className="flex flex-col gap-5 w-full md:flex-1">
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                  Wanna see My Projects?
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
                  Visit My Github
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                  I don't bite — seriously, just say hi.
                </p>
                <a
                  href="mailto:spartyman999@gmail.com"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white border border-gray-200 text-sm font-medium hover:border-gray-400 transition-colors shadow-sm"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-10 7L2 7" />
                  </svg>
                  Send me an Email
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                  Find me rambling about dev stuff on X.
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
                  Look At My X
                </a>
              </div>

              <p className="mt-12 text-3xl font-black italic text-gray-800 text-center md:text-left">
                Lets Work Together!
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-6 px-8 md:px-20 flex items-center justify-center md:justify-between text-xs text-gray-400 border-t border-gray-100">
        <span>Built by me, obviously.</span>
        <span>© 2026 – Petr Chaloupka</span>
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
