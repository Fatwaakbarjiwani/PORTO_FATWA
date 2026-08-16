import { motion } from "framer-motion";

export default function AboutCard() {
  return (
    <section className="mb-12 w-full">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-3 mb-2"
      >
        <div className="w-2 h-8 bg-primary rounded"></div>
        <h2 className="text-3xl font-extrabold text-white">Tentang Saya</h2>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-white/90 text-lg leading-relaxed max-w-2xl"
      >
        Front-End Developer berpengalaman dengan keahlian dalam membangun
        antarmuka pengguna responsif dan interaktif menggunakan HTML, CSS,
        JavaScript, PHP dan framework seperti Laravel dan React.js. Terbiasa
        bekerja dalam tim, mengoptimalkan performa website, serta menerapkan
        prinsip UI/UX untuk meningkatkan pengalaman pengguna. Memiliki pemahaman
        mendalam tentang pengembangan web modern, responsive design, dan
        integrasi API.
      </motion.p>
    </section>
  );
}
