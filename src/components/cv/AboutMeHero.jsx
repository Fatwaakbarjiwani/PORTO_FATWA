import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import CVFile from "../../file/CV_FATWA_AKBAR_JIWANI.pdf";

export default function AboutMeHero() {
  return (
    <section className="w-full min-h-screen bg-dark relative overflow-hidden flex flex-col md:flex-row  justify-center">
      <div className="flex flex-col items-start p-6 relative z-10">
        <span className="text-yellow-400 font-bold text-lg mb-2">About Me</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
          I&apos;m Fatwa Akbar Jiwani
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-yellow-400 mb-4">
          Front-End Developer & UI/UX Enthusiast
        </h2>
        <p className="text-white/80 mb-6">
          I am a Front-End Developer focused on modern web development, with
          core expertise in React.js and Next.js. I have hands-on experience
          building responsive, high-performance, and SEO-optimized user
          interfaces, and I consistently apply UI/UX principles in every project
          I undertake. <br />
          <br />
          During my studies at Sultan Agung Islamic University and training at
          Binar Academy, I developed various dynamic web applications using
          React.js and explored the Next.js ecosystem for building server-side
          rendered (SSR) and static site generated (SSG) websites. I&apos;m also
          experienced in integrating REST APIs and optimizing web performance
          across multiple devices. <br />
          <br />
          In my previous projects, I developed digital platforms in the field of
          philanthropy and online donations, collaborating with UI/UX and
          backend teams to build efficient, user-friendly systems. I also
          utilize Tailwind CSS to streamline the styling process and ensure
          modern, consistent designs. <br />
          <br />
          I&apos;m committed to continuously enhancing my skills in React.js and
          Next.js, and to contributing to the development of impactful and
          scalable web technologies. I&apos;m open to freelance collaborations
          as well as professional roles in dynamic and innovative environments.
        </p>
        <div className="flex items-center gap-6 mb-4">
          <a
            href="#contact"
            className="border-2 border-yellow-400 text-yellow-400 px-6 py-2 rounded transition hover:bg-yellow-400 hover:text-dark font-semibold"
          >
            Contact Me
          </a>
          <a
            href={CVFile}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-yellow-400 text-yellow-400 px-6 py-2 rounded transition hover:bg-yellow-400 hover:text-dark font-semibold"
          >
            Download CV
          </a>
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
        {/* Gradient blur accent */}
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 opacity-40 rounded-full blur-3xl z-0"></div>
      </div>
    </section>
  );
}
