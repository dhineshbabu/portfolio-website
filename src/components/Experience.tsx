import { MapPin } from "lucide-react";
import { EXPERIENCE } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading">Experience</h2>
        <div className="w-16 h-1 rounded-full mb-3" style={{ background: "linear-gradient(90deg, #22d3ee, #3b82f6)" }} />
        <p className="section-subheading mb-12">15+ years of performance engineering excellence</p>

        <div className="relative">
          {/* Vertical timeline line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-0.5"
            style={{ background: "linear-gradient(180deg, #22d3ee, #3b82f6, #a855f7)" }}
          />

          <div className="flex flex-col gap-10">
            {EXPERIENCE.map((entry) => (
              <div key={entry.company} className="flex gap-8">
                {/* Timeline node */}
                <div className="flex-shrink-0 mt-1">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center z-10 relative"
                    style={{
                      background: entry.current
                        ? "linear-gradient(135deg, #22d3ee, #3b82f6)"
                        : "rgba(255,255,255,0.06)",
                      border: "2px solid",
                      borderColor: entry.current ? "#22d3ee" : "rgba(255,255,255,0.15)",
                    }}
                  >
                    {entry.current && (
                      <div className="w-2 h-2 bg-black rounded-full" />
                    )}
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 glass-card p-6 hover:border-white/15 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="text-base font-semibold text-slate-100">{entry.company}</h3>
                    {entry.current && (
                      <span className="text-xs px-2 py-0.5 rounded-full text-accent-cyan border border-accent-cyan/30 bg-accent-cyan/10">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-accent-cyan text-sm font-medium mb-2">{entry.role}</p>
                  <div className="flex flex-wrap gap-4 text-xs text-slate-500">
                    <span>{entry.period}</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={11} />
                      {entry.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
