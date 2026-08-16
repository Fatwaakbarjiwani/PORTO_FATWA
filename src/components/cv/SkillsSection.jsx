import { useRef, useLayoutEffect, useState, useEffect } from "react";
import { motion, useTransform, useMotionValue } from "framer-motion";
import { FaGithub, FaGitAlt, FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFigma,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiLaravel,
  SiAdobephotoshop,
} from "react-icons/si";
import PropTypes from "prop-types";

const skillList = [
  { name: "React.js", icon: <FaReact className="text-2xl text-white mb-1" /> },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-2xl text-white mb-1" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-2xl text-white mb-1" />,
  },
  { name: "UI/UX Design" },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-2xl text-white mb-1" />,
  },
  { name: "HTML", icon: <SiHtml5 className="text-2xl text-white mb-1" /> },
  { name: "CSS", icon: <SiCss3 className="text-2xl text-white mb-1" /> },
  { name: "REST API" },
  { name: "Figma", icon: <SiFigma className="text-2xl text-white mb-1" /> },
  {
    name: "Photoshop",
    icon: <SiAdobephotoshop className="text-2xl text-white mb-1" />,
  },
  { name: "Laravel", icon: <SiLaravel className="text-2xl text-white mb-1" /> },
  { name: "Git", icon: <FaGitAlt className="text-2xl text-white mb-1" /> },
  { name: "GitHub", icon: <FaGithub className="text-2xl text-white mb-1" /> },
];

function useElementWidth(ref) {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) setWidth(ref.current.offsetWidth);
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [ref]);
  return width;
}

function MarqueeOnScroll({ children, numCopies = 3 }) {
  const baseX = useMotionValue(0);
  const copyRef = useRef(null);
  const copyWidth = useElementWidth(copyRef);
  const lastScrollY = useRef(window.scrollY);
  const lastTimestamp = useRef(Date.now());

  useEffect(() => {
    function onScroll() {
      const now = Date.now();
      const currentY = window.scrollY;
      const deltaY = currentY - lastScrollY.current;
      const deltaT = now - lastTimestamp.current;
      // velocity: px/ms, scale up for effect
      const velocity = (deltaY / Math.max(deltaT, 1)) * 60; // 40 = scale factor
      baseX.set(baseX.get() - velocity * (copyWidth ? copyWidth / 1000 : 1));
      lastScrollY.current = currentY;
      lastTimestamp.current = now;
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [baseX, copyWidth]);

  function wrap(min, max, v) {
    const range = max - min;
    const mod = (((v - min) % range) + range) % range;
    return mod + min;
  }
  const x = useTransform(baseX, (v) => {
    if (copyWidth === 0) return "0px";
    return `${wrap(-copyWidth, 0, v)}px`;
  });
  const spans = [];
  for (let i = 0; i < numCopies; i++) {
    spans.push(
      <span
        className="flex-shrink-0 flex gap-3"
        key={i}
        ref={i === 0 ? copyRef : null}
      >
        {children}
      </span>
    );
  }
  return (
    <div className="relative w-full select-none">
      <motion.div className="flex whitespace-nowrap" style={{ x }}>
        {spans}
      </motion.div>
    </div>
  );
}

MarqueeOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
  numCopies: PropTypes.number,
};

export default function SkillsSection() {
  return (
    <section className="w-full bg-second overflow-hidden p-6 items-center md:items-start gap-6 md:gap-0">
      <h2 className="text-3xl text-center md:text-4xl font-extrabold text-primary">
        SKILLS & TOOLS
      </h2>
      <p className="text-primary text-base md:text-lg mt-2 mb-6 text-center max-w-2xl mx-auto">
        These are the main skills and tools I use to build modern, responsive,
        and high-performance web applications.
      </p>
      <div className="flex-1 w-full mt-4">
        <MarqueeOnScroll numCopies={3}>
          {skillList.map((skill, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-primary/80 to-primary/90 rounded-xl p-3 w-40 flex flex-col items-center hover:scale-105 transition shadow-sm mx-1"
            >
              {skill.icon}
              <span className="text-white font-medium text-sm text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </MarqueeOnScroll>
      </div>
    </section>
  );
}
