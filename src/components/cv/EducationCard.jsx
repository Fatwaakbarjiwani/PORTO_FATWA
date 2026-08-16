import { motion } from "framer-motion";

const education = [
  {
    school: "Universitas Islam Sultan Agung - Semarang",
    degree: "S1 Teknik Informatika",
    year: "2021 - 2025",
    gpa: "3.85/4.00",
  },
  {
    school: "Binar Academy - Studi independen",
    degree: "",
    year: "Aug 2023 - Jan 2023",
    gpa: "",
  },
];

export default function EducationCard() {
  return (
    <section className="mb-12 w-full">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-3 mb-1"
      >
        <div className="w-2 h-8 bg-blue-400 rounded"></div>
        <h2 className="text-3xl font-extrabold text-white">Pendidikan</h2>
      </motion.div>
      <div className="h-1 w-32 bg-blue-400 rounded mb-4 ml-6"></div>
      <ul className="space-y-4 ml-6">
        {education.map((edu, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 * idx }}
            className="flex items-start gap-3"
          >
            <span className="text-blue-300 text-2xl mt-1">🎓</span>
            <div>
              <div className="font-bold text-white text-lg">{edu.school}</div>
              <div className="text-white/80 text-base">
                {edu.degree} {edu.gpa && `| IPK: ${edu.gpa}`}
              </div>
              <div className="text-xs text-white/60">{edu.year}</div>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
