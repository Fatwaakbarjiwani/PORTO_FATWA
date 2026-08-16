import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Philanthropy Platform",
    image: "/src/assets/porto1.png", // ganti sesuai asset
    desc: "A digital donation platform built with React.js and Laravel, featuring secure payment integration and responsive UI.",
    demo: "https://your-demo-link.com",
    github: "https://github.com/your-repo",
  },
  {
    title: "Course Web App",
    image: "/src/assets/porto2.png",
    desc: "Online course platform with REST API, user dashboard, and modern UI/UX, built using React.js.",
    demo: "",
    github: "https://github.com/your-repo",
  },
  {
    title: "Movie Trailer App",
    image: "/src/assets/porto3.png",
    desc: "Responsive movie trailer website with IMDB API integration, built with React.js and Tailwind CSS.",
    demo: "",
    github: "https://github.com/your-repo",
  },
];

export default function ProjectSection() {
  return (
    <section className="w-full py-8 bg-gradient-to-b from-primary/10 to-second/10 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-second mb-2 text-center">
        PROJECTS
      </h2>
      <p className="text-white/80 text-lg mb-10 text-center max-w-2xl">
        Here are some of my featured projects, built with modern web
        technologies and a focus on UI/UX.
      </p>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-white/10 rounded-2xl shadow-xl overflow-hidden flex flex-col hover:scale-105 hover:shadow-2xl transition group border-2 border-primary/20"
          >
            <div className="w-full h-48 bg-black/20 overflow-hidden">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover group-hover:scale-110 transition"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2">
                {proj.title}
              </h3>
              <p className="text-white/90 mb-4 flex-1">{proj.desc}</p>
              <div className="flex gap-4 mt-auto">
                {proj.demo && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-second font-semibold hover:underline"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                )}
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary font-semibold hover:underline"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
