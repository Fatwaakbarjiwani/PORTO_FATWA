import { motion } from "framer-motion";

export default function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 flex flex-col items-center gap-2 w-full max-w-xl mx-auto mb-6 border border-white/20"
    >
      <h2 className="text-2xl font-bold text-white mb-1">FATWA AKBAR JIWANI</h2>
      <div className="text-white/80 text-sm mb-2 text-center">
        Geneng, Kec.Mijen / Kab.Demak
      </div>
      <div className="flex flex-wrap justify-center gap-3 mb-2">
        <a
          href="tel:+62895422905255"
          className="text-green-300 hover:underline"
        >
          +62895422905255
        </a>
        <span className="text-white/40">|</span>
        <a
          href="mailto:fatwaakbar2003@gmail.com"
          className="text-red-300 hover:underline"
        >
          fatwaakbar2003@gmail.com
        </a>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        <a
          href="https://www.linkedin.com/in/fatwa-akbar-8b1296330/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 hover:underline"
        >
          LinkedIn
        </a>
        <span className="text-white/40">|</span>
        <a
          href="https://github.com/Fatwaakbarjiwani?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:underline"
        >
          GitHub
        </a>
      </div>
    </motion.div>
  );
}
