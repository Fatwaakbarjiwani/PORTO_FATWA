import { motion } from "framer-motion";

const experiences = [
  {
    title: "Frontend JavaScript - Binar Academy",
    period: "Aug 2023 - Jan 2023",
    type: "Student",
    desc: [
      "Program akademi yang melatih untuk mengembangkan aplikasi website dengan React JS.",
      "Membuat website trailler film yang responsive dan interaktif dengan integrasi API IMDB.",
      "Membangun platform kelas kursus menggunakan React.js dan REST API.",
    ],
  },
  {
    title: "PT. Inovasi Cipta Teknologi - Semarang",
    period: "Feb 2024 - Jul 2024",
    type: "Magang",
    desc: [
      "Magang sebagai Frontend Developer di industri manajemen korporat.",
      "Mengembangkan website filantropi digital Semarang untuk Donasi, Zakat, Infak, dan Wakaf menggunakan React.js dan Tailwind CSS.",
      "Implementasi tampilan antarmuka sesuai desain UI/UX dan integrasi API backend.",
    ],
  },
  {
    title: "PT. Inovasi Cipta Teknologi - Semarang",
    period: "Dec 2024 - Present",
    type: "Freelance",
    desc: [
      "Freelance Frontend Developer untuk website filantropi digital Jogjakarta (Laravel & Tailwind CSS).",
      "Membangun sistem backend dan frontend terintegrasi untuk donasi digital.",
      "Menangani pembaruan dan pengembangan fitur secara berkala.",
    ],
  },
  {
    title:
      "Lembaga Amil Zakat, Infak, dan Sedekah Sultan Agung (LAZIS-SA) - Semarang",
    period: "Aug 2024 - Jan 2025",
    type: "Freelance",
    desc: [
      "Mengembangkan infrastruktur frontend dari awal menggunakan React.js dan Tailwind CSS.",
      "Pengembangan fitur utama: sistem donasi, halaman berita, dashboard backoffice.",
      "Kolaborasi dengan tim lintas divisi untuk desain konsisten dan integrasi API.",
      "Scope: slicing desain, integrasi API, optimisasi tampilan responsif.",
    ],
  },
];

export default function ExperienceCard() {
  return (
    <section className="mb-12 w-full">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-3 mb-1"
      >
        <div className="w-2 h-8 bg-primary rounded"></div>
        <h2 className="text-3xl font-extrabold text-white">Pengalaman</h2>
      </motion.div>
      <div className="h-1 w-32 bg-primary rounded mb-4 ml-6"></div>
      <div className="relative ml-10 mt-6">
        {/* Garis timeline vertikal */}
        <div className="absolute left-0 top-0 h-full w-1 bg-primary/30 rounded"></div>
        <ul className="space-y-10">
          {experiences.map((exp, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              className="relative pl-8"
            >
              {/* Node timeline */}
              <div className="absolute -left-10 top-1.5 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-lg shadow-lg border-4 border-background">
                <span>💼</span>
              </div>
              <div className="font-bold text-white text-lg mb-1">
                {exp.title}
              </div>
              <div className="text-xs text-white/60 mb-1">
                {exp.period} | {exp.type}
              </div>
              <ul className="list-disc ml-5 text-white/90 text-base space-y-1">
                {exp.desc.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
