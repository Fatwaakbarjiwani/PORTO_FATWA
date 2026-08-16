import { useRef, useEffect, useState } from "react";
import { FaRocket } from "react-icons/fa";
import { useSpring } from "framer-motion";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Frontend JavaScript - Binar Academy",
      period: "Aug 2023 - Jan 2023",
      type: "Student",
      desc: [
        "Program akademi pengembangan aplikasi website dengan React JS.",
        "Membuat website trailler film responsive & interaktif dengan integrasi API IMDB.",
        "Membangun platform kursus dengan React.js & REST API.",
      ],
    },
    {
      title: "PT. Inovasi Cipta Teknologi - Semarang",
      period: "Feb 2024 - Jul 2024",
      type: "Magang",
      desc: [
        "Magang Frontend Developer di industri manajemen korporat.",
        "Mengembangkan website filantropi digital Semarang (React.js & Tailwind CSS).",
        "Implementasi UI/UX & integrasi API backend.",
      ],
    },
    {
      title: "PT. Inovasi Cipta Teknologi - Semarang",
      period: "Dec 2024 - Present",
      type: "Freelance",
      desc: [
        "Freelance Frontend Developer website filantropi digital Jogjakarta (Laravel & Tailwind CSS).",
        "Membangun sistem backend & frontend terintegrasi donasi digital.",
        "Pembaruan & pengembangan fitur berkala.",
      ],
    },
    {
      title: "LAZIS-SA - Semarang",
      period: "Aug 2024 - Jan 2025",
      type: "Freelance",
      desc: [
        "Mengembangkan frontend platform filantropi digital (React.js & Tailwind CSS).",
        "Pengembangan fitur utama: donasi, berita, dashboard backoffice.",
        "Kolaborasi tim lintas divisi, integrasi API, optimisasi responsif.",
      ],
    },
  ];

  // Config
  const cardCount = experiences.length;
  const heightPerCard = 180;
  const timelineX = 50; // px, center of SVG
  const svgWidth = 100;
  const extraHeight = 350;
  const svgHeight = (cardCount - 1) * heightPerCard + 40 + extraHeight;

  // Points for rocket (all x = timelineX, y = per card)
  const points = [
    ...Array.from({ length: cardCount }, (_, i) => [
      timelineX,
      i * heightPerCard,
    ]),
    [timelineX, (cardCount - 1) * heightPerCard + extraHeight],
  ];

  // Interpolate rocket position
  function getRocketPosition(progress) {
    const totalSegments = points.length - 1;
    const pos = progress * totalSegments;
    const seg = Math.floor(pos);
    const segProgress = pos - seg;
    if (seg >= points.length - 1) return points[points.length - 1];
    const [x1, y1] = points[seg];
    const [x2, y2] = points[seg + 1];
    return [x1 + (x2 - x1) * segProgress, y1 + (y2 - y1) * segProgress];
  }

  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const spring = useSpring(progress, { stiffness: 80, damping: 18 });
  const [rocketPos, setRocketPos] = useState(points[0]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleIntersect = (entries) => {
      if (entries[0].isIntersecting) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    const observer = new window.IntersectionObserver(handleIntersect, {
      threshold: 0.01,
    });
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function onScroll() {
      if (!containerRef.current) return;
      if (!active) {
        setProgress(0);
        return;
      }
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      let progress = (windowHeight - rect.top) / (rect.height + windowHeight);
      progress = Math.max(0, Math.min(1, progress));
      setProgress(progress);
    }
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [active]);

  useEffect(() => {
    return spring.onChange((p) => {
      setRocketPos(getRocketPosition(p));
    });
  }, [spring]);

  // SVG path string (vertical line)
  const path = `M ${timelineX} 0 L ${timelineX} ${
    (cardCount - 1) * heightPerCard + extraHeight
  }`;

  return (
    <section className="w-full py-16 bg-dark flex flex-col items-center">
      <div
        className="w-full px-2 md:px-8 relative"
        style={{ minHeight: svgHeight + 100 }}
        ref={containerRef}
      >
        <h2 className="text-4xl font-extrabold text-white mb-2 text-center">
          Experience
        </h2>
        <div className="h-1 w-20 bg-yellow-400 rounded-full mb-10 mx-auto"></div>
        <div
          className="relative flex flex-col items-center"
          style={{ minHeight: svgHeight }}
        >
          {/* SVG Timeline Path */}
          <svg
            className="absolute left-1/2 top-0 z-10"
            width={svgWidth}
            height={svgHeight}
            style={{ transform: "translateX(-50%)" }}
          >
            <path
              d={path}
              stroke="#fbbf24"
              strokeWidth="4"
              fill="none"
              strokeDasharray="10,10"
            />
          </svg>
          {/* Rocket with flame */}
          <div
            className="absolute left-1/2 z-20"
            style={{
              top: rocketPos[1],
              left: `calc(50% + ${rocketPos[0] - svgWidth / 2}px)`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="relative flex flex-col items-center">
              <FaRocket className="text-yellow-400 text-2xl drop-shadow-lg rotate-90" />
              {/* Flame animation */}
              <span className="absolute left-1/2 top-full -translate-x-1/2 mt-[-2px] flex flex-col items-center">
                <span className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse opacity-80" />
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-bounce opacity-70 mt-[-6px]" />
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping opacity-60 mt-[-4px]" />
              </span>
            </div>
          </div>
          {/* Cards */}
          <div
            className="relative w-full z-20 flex flex-col gap-10"
            style={{ minHeight: svgHeight }}
          >
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`flex w-full ${
                  idx % 2 === 0 ? "justify-start" : "justify-end"
                }`}
                style={{ minHeight: heightPerCard, alignItems: "center" }}
              >
                <div
                  className={`max-w-xl w-full bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-yellow-400/20`}
                  style={{
                    marginLeft: idx % 2 === 0 ? 0 : "min(40px,5vw)",
                    marginRight: idx % 2 === 0 ? "min(40px,5vw)" : 0,
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <span className="font-bold text-lg text-yellow-400">
                      {exp.title}
                    </span>
                    <span className="text-xs text-white/60 mt-1 md:mt-0">
                      {exp.period} | {exp.type}
                    </span>
                  </div>
                  <ul className="list-disc ml-5 text-white/90 text-base space-y-1">
                    {exp.desc.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
