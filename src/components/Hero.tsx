import Image from "next/image";
import { Linkedin, Github, Mail, MapPin } from "lucide-react";
import { SiX, SiLeetcode } from "react-icons/si";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function Hero() {
  const { name, title, company, location, summary, image, socials, email } = PERSONAL_INFO;

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-20 pb-16 px-6"
      style={{
        background: "linear-gradient(135deg, #0a0a0f 0%, #0f1729 50%, #0a0a0f 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Text content */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-accent-cyan text-sm font-mono mb-2 tracking-widest uppercase">
              Hi, I&apos;m
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 leading-tight gradient-text">
              {name}
            </h1>
            <h2 className="text-lg md:text-xl text-slate-300 font-medium mb-1">
              {title}
            </h2>
            <p className="text-accent-blue font-semibold mb-4">@ {company}</p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-slate-500 text-sm mb-6">
              <MapPin size={14} />
              <span>{location}</span>
            </div>
            <p className="text-slate-400 text-base leading-relaxed max-w-xl mb-8">
              {summary}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <a
                href="#skills"
                className="px-6 py-3 bg-accent-cyan text-black font-semibold rounded-lg hover:bg-cyan-300 transition-colors duration-200"
              >
                View My Work
              </a>
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 px-6 py-3 border border-white/20 text-slate-300 rounded-lg hover:border-accent-cyan hover:text-accent-cyan transition-all duration-200"
              >
                <Mail size={16} />
                Email Me
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5 justify-center md:justify-start">
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate-500 hover:text-accent-cyan transition-colors duration-200 hover:scale-110 transform"
              >
                <Linkedin size={22} />
              </a>
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-slate-500 hover:text-accent-cyan transition-colors duration-200 hover:scale-110 transform"
              >
                <Github size={22} />
              </a>
              <a
                href={socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="text-slate-500 hover:text-accent-cyan transition-colors duration-200 hover:scale-110 transform"
              >
                <SiX size={20} />
              </a>
              <a
                href={socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className="text-slate-500 hover:text-accent-cyan transition-colors duration-200 hover:scale-110 transform"
              >
                <SiLeetcode size={22} />
              </a>
              <a
                href={`mailto:${email}`}
                aria-label="Email"
                className="text-slate-500 hover:text-accent-cyan transition-colors duration-200 hover:scale-110 transform"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* Profile image */}
          <div className="flex-shrink-0">
            <div
              className="relative w-56 h-56 md:w-72 md:h-72"
              style={{
                filter: "drop-shadow(0 0 40px rgba(34, 211, 238, 0.25))",
              }}
            >
              <Image
                src={image}
                alt={name}
                fill
                className="rounded-full object-cover border-2 border-accent-cyan"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
