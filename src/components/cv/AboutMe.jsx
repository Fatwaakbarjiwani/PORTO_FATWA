import gambar from "../../assets/gambar.png";
import CVFile from "../../file/CV_FATWA_AKBAR_JIWANI.pdf";
import { FaDownload } from "react-icons/fa";

export default function AboutMe() {
  return (
    <section className="w-full min-h-[80vh] flex items-center justify-center bg-primary p-0 md:p-8 relative">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-0 md:gap-4 px-4 md:px-0">
        {/* Kiri: Foto Profil dengan Dot Grid Accent */}
        <div className="flex justify-center md:justify-center items-center relative h-full py-16 md:py-0 order-1 md:order-none">
          <div className="relative">
            {/* Dot grid top-left */}
            <div className="absolute rotate-90 -left-1 -top-1 z-0">
              <svg width="80" height="80">
                <g fill="#fff" fillOpacity="0.5">
                  {Array.from({ length: 6 }).map((_, y) =>
                    Array.from({ length: 6 }).map((_, x) => (
                      <circle
                        key={x + "-" + y}
                        cx={x * 15}
                        cy={y * 15}
                        r="2.2"
                      />
                    ))
                  )}
                </g>
              </svg>
            </div>
            {/* Dot grid bottom-right */}
            <div className="absolute -right-8 -bottom-8 z-0">
              <svg width="120" height="120">
                <g fill="#fff" fillOpacity="0.5">
                  {Array.from({ length: 6 }).map((_, y) =>
                    Array.from({ length: 6 }).map((_, x) => (
                      <circle
                        key={x + "-" + y}
                        cx={x * 15}
                        cy={y * 15}
                        r="2.2"
                      />
                    ))
                  )}
                </g>
              </svg>
            </div>
            <img
              src={gambar}
              alt="Fatwa Akbar Jiwani"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-white relative z-10"
            />
            {/* Nama vertikal di kiri */}
            <div
              className="hidden md:block absolute left-[-70px] top-1/2 -translate-y-1/2 text-white/40 tracking-widest text-base font-bold"
              style={{ writingMode: "vertical-rl", letterSpacing: "0.2em" }}
            >
              FATWA AKBAR JIWANI
            </div>
          </div>
        </div>
        {/* Kanan: Headline & Deskripsi */}
        <div className="flex flex-col justify-center h-full md:py-0 order-2 md:order-none">
          <h1 className="text-4xl md:text-6xl font-extrabold text-second leading-tight mb-6">
            I am a <br />
            <span className="text-second">Front-End Developer</span>
          </h1>
          <p className="text-white/80 text-lg mb-8 max-w-lg">
            Focused on modern web development, with
            core expertise in React.js and Next.js. I have hands-on experience
            building responsive, high-performance, and SEO-optimized user
            interfaces, and I consistently apply UI/UX principles in every
            project I undertake.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={CVFile}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-second text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
            >
              <FaDownload className="text-lg" />
              Download CV
            </a>
            <a
              href="#contact"
              className="text-second font-semibold underline underline-offset-4 hover:text-white transition"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
