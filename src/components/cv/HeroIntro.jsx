import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function HeroIntro() {
  return (
    <section className="flex flex-col md:flex-row w-full min-h-[60vh] bg-dark relative overflow-hidden py-12">
      {/* Kiri */}
      <div className="md:w-1/2 flex flex-col justify-center items-start p-8 relative z-10">
        <div className="relative mb-6">
          <span className="text-5xl md:text-7xl font-extrabold text-white block leading-tight">
            I’m <br />
            FATWA AKBAR <br />
            JIWANI<span className="text-yellow-400">.</span>
          </span>
          <div className="absolute top-0 right-[-40px] w-20 h-20 bg-yellow-400 rounded-full z-[-1]" />
        </div>
        <a
          href="#contact"
          className="border-2 border-yellow-400 text-yellow-400 px-6 py-2 rounded transition hover:bg-yellow-400 hover:text-dark font-semibold mb-6"
        >
          Contact Me
        </a>
        <div>
          <span className="text-white mb-2 block">Follow Me</span>
          <div className="flex gap-4 text-2xl text-white">
            <a
              href="https://www.linkedin.com/in/fatwa-akbar-8b1296330/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Fatwaakbarjiwani?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://instagram.com/fatwaakbarjiwani"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a href="mailto:fatwaakbar2003@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
      {/* Kanan */}
      <div className="md:w-1/2 flex flex-col justify-center p-8 relative z-10">
        <span className="text-white/80 mb-2">About Me</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Front-End Developer
        </h2>
        <p className="text-white/80 mb-4">
          Front-End Developer berpengalaman membangun antarmuka responsif &
          interaktif menggunakan React, Laravel, dan Tailwind. Passionate di
          UI/UX, kolaborasi tim, dan pengembangan web modern.
        </p>
        {/* Gradient blur accent */}
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 opacity-40 rounded-full blur-3xl z-0"></div>
      </div>
    </section>
  );
}
