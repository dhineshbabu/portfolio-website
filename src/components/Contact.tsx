import { Mail } from "lucide-react";
import { Linkedin, Github } from "lucide-react";
import { SiX, SiLeetcode } from "react-icons/si";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function Contact() {
  const { email, socials } = PERSONAL_INFO;

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="section-heading">Let&apos;s Connect</h2>
        <div className="w-16 h-1 rounded-full mb-6 mx-auto" style={{ background: "linear-gradient(90deg, #22d3ee, #3b82f6)" }} />
        <p className="text-slate-400 mb-10 leading-relaxed">
          Open to performance engineering discussions, consulting engagements,
          and collaboration opportunities. Feel free to reach out!
        </p>

        {/* Email */}
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-3 px-8 py-4 glass-card text-slate-200 hover:text-accent-cyan hover:border-accent-cyan/30 transition-all duration-300 mb-10 text-sm font-medium"
        >
          <Mail size={18} className="text-accent-cyan" />
          {email}
        </a>

        {/* Social links */}
        <div className="flex items-center justify-center gap-6 mb-10">
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-12 h-12 glass-card flex items-center justify-center text-slate-400 hover:text-accent-cyan hover:border-accent-cyan/30 transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-12 h-12 glass-card flex items-center justify-center text-slate-400 hover:text-accent-cyan hover:border-accent-cyan/30 transition-all duration-300 hover:scale-110"
          >
            <Github size={20} />
          </a>
          <a
            href={socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X / Twitter"
            className="w-12 h-12 glass-card flex items-center justify-center text-slate-400 hover:text-accent-cyan hover:border-accent-cyan/30 transition-all duration-300 hover:scale-110"
          >
            <SiX size={18} />
          </a>
          <a
            href={socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            className="w-12 h-12 glass-card flex items-center justify-center text-slate-400 hover:text-accent-cyan hover:border-accent-cyan/30 transition-all duration-300 hover:scale-110"
          >
            <SiLeetcode size={20} />
          </a>
        </div>

      </div>
    </section>
  );
}
