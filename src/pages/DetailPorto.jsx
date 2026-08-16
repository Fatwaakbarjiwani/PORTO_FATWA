import CardSwap, { Card } from "../components/CardSwap";
import porto1 from "../assets/porto1.png";
import porto2 from "../assets/porto2.png";
import porto3 from "../assets/porto3.png";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import SkillsSection from "../components/cv/SkillsSection";
import ProjectSection from "../components/cv/ProjectSection";
import AboutMe from "../components/cv/AboutMe";
import Message from "../components/cv/Message";

export default function DetailPorto() {
  return (
    <div>
      <div className="absolute bottom-[-5%] left-[-5%] w-96 h-96 bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 opacity-40 rounded-full blur-3xl z-0 animate-move-glow"></div>
      <div className="overflow-hidden relative px-16 min-h-[90vh]">
        <div className="max-w-3xl font-archivo">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            <span className="block text-white drop-shadow-lg">
              HEY, I&apos;M
              <br />
              <span className="text-transparent font-extrabold stroke-text">
                FATWA AKBAR JIWANI
              </span>
            </span>
            <span className="block text-white drop-shadow-lg">
              BUT YOU CAN CALL ME
              <span className="ml-2 text-indigo-300 font-extrabold stroke-text">
                AKBAR
              </span>
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl w-3/4 text-white font-extralight">
            Experienced Front-End Developer skilled in building responsive and
            interactive interfaces using React, Laravel, and Tailwind.
            Passionate about UI/UX, team collaboration, and modern web
            development.
          </p>
          {/* Social Media & Location Buttons */}
          <div className="mt-6 flex flex-wrap gap-3 items-center">
            {/* Instagram */}
            <a
              href="https://instagram.com/fatwaakbarjiwani"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center h-12 rounded-full bg-pink-500/30 backdrop-blur-md border border-pink-400/40 text-white shadow hover:bg-pink-500/60 hover:shadow-pink-400/40 transition-all duration-300 overflow-hidden px-3 w-12 hover:w-auto min-w-12"
              aria-label="Instagram"
              style={{
                transitionProperty: "width, background, box-shadow, color",
              }}
            >
              <FaInstagram className="text-2xl flex-shrink-0" />
              <span className="ml-2 whitespace-nowrap text-pink-200 font-semibold text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                @fatwaakbarjiwani
              </span>
            </a>
            {/* Gmail */}
            <a
              href="mailto:fatwaakbar2003@gmail.com"
              className="group flex items-center h-12 rounded-full bg-red-500/30 backdrop-blur-md border border-red-400/40 text-white shadow hover:bg-red-500/60 hover:shadow-red-400/40 transition-all duration-300 overflow-hidden px-3 w-12 hover:w-auto min-w-12"
              aria-label="Gmail"
              style={{
                transitionProperty: "width, background, box-shadow, color",
              }}
            >
              <MdEmail className="text-2xl flex-shrink-0" />
              <span className="ml-2 whitespace-nowrap text-red-200 font-semibold text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                fatwaakbar2003@gmail.com
              </span>
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/Fatwaakbarjiwani"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center h-12 rounded-full bg-gray-800/30 backdrop-blur-md border border-gray-500/40 text-white shadow hover:bg-gray-800/60 hover:shadow-gray-400/40 transition-all duration-300 overflow-hidden px-3 w-12 hover:w-48 min-w-12"
              aria-label="GitHub"
              style={{
                transitionProperty: "width, background, box-shadow, color",
              }}
            >
              <FaGithub className="text-2xl flex-shrink-0" />
              <span className="ml-2 whitespace-nowrap text-gray-200 font-semibold text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Fatwaakbarjiwani
              </span>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/fatwa-akbar-8b1296330/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center h-12 rounded-full bg-blue-600/30 backdrop-blur-md border border-blue-400/40 text-white shadow hover:bg-blue-600/60 hover:shadow-blue-400/40 transition-all duration-300 overflow-hidden px-3 w-12 hover:w-48 min-w-12"
              aria-label="LinkedIn"
              style={{
                transitionProperty: "width, background, box-shadow, color",
              }}
            >
              <FaLinkedin className="text-2xl flex-shrink-0" />
              <span className="ml-2 whitespace-nowrap text-blue-200 font-semibold text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                fatwa akbar
              </span>
            </a>
            {/* Location */}
            <div
              className="group flex items-center h-12 rounded-full bg-green-600/30 backdrop-blur-md border border-green-400/40 text-white shadow hover:bg-green-600/60 hover:shadow-green-400/40 transition-all duration-300 overflow-hidden px-3 w-12 hover:w-auto min-w-12 cursor-default"
              aria-label="Location"
              style={{
                transitionProperty: "width, background, box-shadow, color",
              }}
            >
              <FaMapMarkerAlt className="text-2xl flex-shrink-0" />
              <span className="ml-2 whitespace-nowrap text-green-200 font-semibold text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Semarang, Jawa Tengah, Indonesia
              </span>
            </div>
          </div>
          <div className="mt-6 flex gap-8 text-lg text-white font-semibold">
            <a href="#projects" className="hover:underline">
              → see my projects
            </a>
            <a href="/about" className="hover:underline">
              → more about me
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 right-0">
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={true}
          >
            <Card>
              <h3 className="text-second border-b-2 border-white bg-gradient-to-t from-second/50 to-black w-full rounded-t-lg p-2">
                LAZISMU JOGJA (jalankebaikan.id)
              </h3>
              <div className="p-2 w-full h-full">
                <img
                  className="rounded-2xl object-center object-cover"
                  src={[porto1]}
                  alt=""
                />
              </div>
            </Card>
            <Card>
              <h3 className="text-second border-b-2 border-white bg-gradient-to-t from-second/50 to-black w-full rounded-t-lg p-2">
                FAKBMOVIE
              </h3>
              <div className="p-2 w-full h-full">
                <img
                  className="w-full h-full rounded-2xl object-center object-cover"
                  src={[porto2]}
                  alt=""
                />
              </div>
            </Card>
            <Card>
              <h3 className="text-second border-b-2 border-white bg-gradient-to-t from-second/50 to-black w-full rounded-t-lg p-2">
                LAZIS-SULTAN AGUNG
              </h3>
              <div className="p-2 w-full h-full">
                <img
                  className="w-full h-full rounded-2xl object-center object-cover"
                  src={[porto3]}
                  alt=""
                />
              </div>
            </Card>
            <Card>
              <h3 className="text-second border-b-2 border-white bg-gradient-to-t from-second/50 to-black w-full rounded-t-lg p-2">
                Card 4
              </h3>
              <div className="p-2 w-full h-full">
                <img
                  className="w-full h-full rounded-2xl object-center object-cover"
                  src={[porto1]}
                  alt=""
                />
              </div>
            </Card>
          </CardSwap>
        </div>
      </div>
      {/* Skills Section Modern */}
      <SkillsSection />
      <AboutMe />
      {/* Porto */}
      <ProjectSection />
      <Message />
    </div>
  );
}
