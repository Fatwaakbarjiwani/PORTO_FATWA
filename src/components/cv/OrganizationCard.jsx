import { motion } from "framer-motion";

const organizations = [
  {
    name: "Himpunan Mahasiswa Teknik Informatika Unissula - Semarang",
    period: "Oct 2021 - Oct 2023",
    role: "Anggota Devisi Sosmas",
    desc: [
      "Kerjasama eksternal antara himpunan mahasiswa dengan ormawa lain baik tingkat fakultas maupun luar fakultas.",
      "Kegiatan silaturahmi antar dua kampus untuk menambah wawasan mengenai keorganisasian.",
      "Pengumpulan kontribusi sukarela dalam bentuk uang atau sumber daya lain untuk yang membutuhkan.",
      "Menjalin kerja sama dengan himpunan ataupun organisasi lainnya di dalam/luar fakultas.",
    ],
  },
  {
    name: "Himpunan Mahasiswa Teknik Informatika Unissula",
    period: "Oct 2023 - Nov 2023",
    role: "Sekretaris Devisi PSDM/Human Resources",
    desc: [
      "Pengembangan sumber daya manusia di organisasi (softskill & hardskill).",
      "Open Recruitment (Penerimaan anggota baru).",
      "Makrab, kegiatan keakraban dan pengembangan potensi mahasiswa.",
      "Informatic day, acara bidang informatika untuk meningkatkan pemahaman teknologi informasi.",
      "Upgrading, peningkatan keterampilan atau potensi anggota.",
    ],
  },
];

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function OrganizationCard() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="bg-gradient-to-br from-primary via-primary/80 to-primary/90 rounded-2xl shadow-xl p-6 w-full mb-6 border border-white/20"
    >
      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <span>🤝</span> Organisasi
      </h3>
      <ul className="space-y-4">
        {organizations.map((org, idx) => (
          <motion.li key={idx} variants={item} className="text-white/90">
            <div className="font-bold">{org.name}</div>
            <div className="text-xs text-white/60 mb-1">
              {org.period} | {org.role}
            </div>
            <ul className="list-disc ml-5 text-sm space-y-1">
              {org.desc.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
