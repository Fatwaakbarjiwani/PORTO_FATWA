import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function CVSplitLayout() {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      {/* Kolom Kiri */}
      <div className="md:w-1/2 bg-second p-8 flex flex-col items-center border-r-4 border-primary/30">
        {/* Foto Profil */}
        <div className="w-32 h-32 rounded-full bg-gray-300 mb-4 overflow-hidden flex items-center justify-center shadow-lg">
          <img
            src="https://ui-avatars.com/api/?name=Fatwa+Akbar+Jiwani&background=FDE68A&color=111827&size=128"
            alt="Fatwa Akbar Jiwani"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Nama & Bio */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-extrabold text-primary uppercase tracking-widest mb-2 text-center"
        >
          Fatwa Akbar Jiwani
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-primary/80 text-center mb-4 text-sm max-w-xs"
        >
          Front-End Developer berpengalaman membangun antarmuka responsif &
          interaktif dengan React, Laravel, dan Tailwind. Passionate di UI/UX,
          kolaborasi tim, dan pengembangan web modern.
        </motion.p>
        {/* Kontak */}
        <div className="flex flex-col gap-2 w-full mb-6">
          <div className="flex items-center gap-2 text-primary">
            <FaEnvelope /> fatwaakbar2003@gmail.com
          </div>
          <div className="flex items-center gap-2 text-primary">
            <FaPhone /> +62895422905255
          </div>
          <div className="flex items-center gap-2 text-blue-700">
            <FaLinkedin />{" "}
            <a
              href="https://www.linkedin.com/in/fatwa-akbar-8b1296330/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex items-center gap-2 text-primary">
            <FaGithub />{" "}
            <a
              href="https://github.com/Fatwaakbarjiwani?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="border-b-2 border-primary/30 w-full my-4" />
        {/* Languages */}
        <div className="w-full mb-4">
          <h2 className="uppercase font-bold text-xs text-primary border-b-2 border-primary mb-2 tracking-widest">
            Languages
          </h2>
          <ul className="flex flex-wrap gap-2 text-xs text-primary/80">
            <li>Indonesia</li>
            <li>English</li>
          </ul>
        </div>
        {/* Softwares */}
        <div className="w-full mb-4">
          <h2 className="uppercase font-bold text-xs text-primary border-b-2 border-primary mb-2 tracking-widest">
            Softwares
          </h2>
          <ul className="flex flex-wrap gap-2 text-xs text-primary/80">
            <li>Photoshop</li>
            <li>Illustrator</li>
            <li>Figma</li>
            <li>Canva</li>
            <li>CorelDraw</li>
            <li>Microsoft Office</li>
            <li>SQL</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>Laravel</li>
            <li>JavaScript</li>
            <li>PHP</li>
          </ul>
        </div>
        {/* Sertifikat */}
        <div className="w-full mb-4">
          <h2 className="uppercase font-bold text-xs text-primary border-b-2 border-primary mb-2 tracking-widest">
            Certification
          </h2>
          <ul className="flex flex-wrap gap-2 text-xs text-primary/80">
            <li>Binar Academy - Studi Independen</li>
          </ul>
        </div>
      </div>
      {/* Kolom Kanan */}
      <div className="md:w-1/2 bg-dark p-8 text-white flex flex-col gap-8">
        {/* Pengalaman */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="uppercase font-bold text-lg border-b-2 border-primary mb-2 tracking-widest">
            Experience
          </h2>
          <ul className="space-y-3 text-sm">
            <li>
              <span className="font-bold">
                Frontend JavaScript - Binar Academy
              </span>{" "}
              <span className="text-xs text-primary/70">
                (Aug 2023 - Jan 2023)
              </span>
              <ul className="list-disc ml-5">
                <li>
                  Program akademi pengembangan aplikasi website dengan React JS.
                </li>
                <li>
                  Membuat website trailler film responsive & interaktif dengan
                  integrasi API IMDB.
                </li>
                <li>Membangun platform kursus dengan React.js & REST API.</li>
              </ul>
            </li>
            <li>
              <span className="font-bold">
                PT. Inovasi Cipta Teknologi - Semarang
              </span>{" "}
              <span className="text-xs text-primary/70">
                (Feb 2024 - Jul 2024)
              </span>
              <ul className="list-disc ml-5">
                <li>
                  Magang Frontend Developer di industri manajemen korporat.
                </li>
                <li>
                  Mengembangkan website filantropi digital Semarang (React.js &
                  Tailwind CSS).
                </li>
                <li>Implementasi UI/UX & integrasi API backend.</li>
              </ul>
            </li>
            <li>
              <span className="font-bold">
                PT. Inovasi Cipta Teknologi - Semarang
              </span>{" "}
              <span className="text-xs text-primary/70">
                (Dec 2024 - Present)
              </span>
              <ul className="list-disc ml-5">
                <li>
                  Freelance Frontend Developer website filantropi digital
                  Jogjakarta (Laravel & Tailwind CSS).
                </li>
                <li>
                  Membangun sistem backend & frontend terintegrasi donasi
                  digital.
                </li>
                <li>Pembaruan & pengembangan fitur berkala.</li>
              </ul>
            </li>
            <li>
              <span className="font-bold">LAZIS-SA - Semarang</span>{" "}
              <span className="text-xs text-primary/70">
                (Aug 2024 - Jan 2025)
              </span>
              <ul className="list-disc ml-5">
                <li>
                  Mengembangkan frontend platform filantropi digital (React.js &
                  Tailwind CSS).
                </li>
                <li>
                  Pengembangan fitur utama: donasi, berita, dashboard
                  backoffice.
                </li>
                <li>
                  Kolaborasi tim lintas divisi, integrasi API, optimisasi
                  responsif.
                </li>
              </ul>
            </li>
          </ul>
        </motion.div>
        {/* Pendidikan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="uppercase font-bold text-lg border-b-2 border-primary mb-2 tracking-widest">
            Education
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="font-bold">
                Universitas Islam Sultan Agung - Semarang
              </span>{" "}
              <span className="text-xs text-primary/70">(2021 - 2025)</span>
              <div className="text-xs text-primary/70">
                S1 Teknik Informatika | IPK: 3.85/4.00
              </div>
            </li>
            <li>
              <span className="font-bold">
                Binar Academy - Studi Independen
              </span>{" "}
              <span className="text-xs text-primary/70">
                (Aug 2023 - Jan 2023)
              </span>
            </li>
          </ul>
        </motion.div>
        {/* Organisasi */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="uppercase font-bold text-lg border-b-2 border-primary mb-2 tracking-widest">
            Organization
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="font-bold">
                Himpunan Mahasiswa Teknik Informatika Unissula
              </span>{" "}
              <span className="text-xs text-primary/70">
                (Oct 2021 - Oct 2023)
              </span>
              <div className="text-xs text-primary/70">
                Anggota Devisi Sosmas
              </div>
            </li>
            <li>
              <span className="font-bold">
                Himpunan Mahasiswa Teknik Informatika Unissula
              </span>{" "}
              <span className="text-xs text-primary/70">
                (Oct 2023 - Nov 2023)
              </span>
              <div className="text-xs text-primary/70">
                Sekretaris Devisi PSDM/Human Resources
              </div>
            </li>
          </ul>
        </motion.div>
        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="uppercase font-bold text-lg border-b-2 border-primary mb-2 tracking-widest">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold">
              public speaking
            </span>
            <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold">
              problem solving
            </span>
            <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold">
              team work
            </span>
            <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold">
              leadership
            </span>
            <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold">
              adaptive
            </span>
          </div>
        </motion.div>
        {/* Project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="uppercase font-bold text-lg border-b-2 border-primary mb-2 tracking-widest">
            Project
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="font-bold">
                Website Filantropi Digital (React & Tailwind CSS)
              </span>{" "}
              <span className="text-xs text-primary/70">(2022)</span>
              <div className="text-xs text-primary/70">
                Website filantropi digital terintegrasi API, campaign, donasi,
                laporan dana, berita, responsif.
              </div>
            </li>
            <li>
              <span className="font-bold">
                Website Filantropi Digital (Laravel & Tailwind CSS)
              </span>{" "}
              <span className="text-xs text-primary/70">(2024)</span>
              <div className="text-xs text-primary/70">
                Website filantropi digital terintegrasi API, campaign, donasi,
                laporan dana, responsif.
              </div>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
