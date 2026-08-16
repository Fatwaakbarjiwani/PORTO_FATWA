import { motion } from "framer-motion";

const softSkills = [
  "public speaking",
  "problem solving",
  "team work",
  "leadership",
  "adaptive",
];

const hardSkills = [
  "microsoft office",
  "SQL",
  "HTML",
  "CSS",
  "React",
  "Laravel",
  "JavaScript",
  "PHP",
  "Photoshop",
  "Figma",
  "Canva",
];

export default function SkillsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="bg-gradient-to-br from-primary via-primary/80 to-primary/90 rounded-2xl shadow-xl p-6 w-full mb-6 border border-white/20"
    >
      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <span>🛠️</span> Keahlian
      </h3>
      <div className="mb-2">
        <div className="font-semibold text-white/80 mb-1">Soft Skills:</div>
        <div className="flex flex-wrap gap-2">
          {softSkills.map((skill, idx) => (
            <motion.span
              whileHover={{ scale: 1.1 }}
              key={idx}
              className="bg-green-200/80 text-green-900 px-3 py-1 rounded-full text-xs font-semibold shadow cursor-pointer transition-transform"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
      <div>
        <div className="font-semibold text-white/80 mb-1">Hard Skills:</div>
        <div className="flex flex-wrap gap-2">
          {hardSkills.map((skill, idx) => (
            <motion.span
              whileHover={{ scale: 1.1 }}
              key={idx}
              className="bg-blue-200/80 text-blue-900 px-3 py-1 rounded-full text-xs font-semibold shadow cursor-pointer transition-transform"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
