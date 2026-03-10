import { PERSONAL_INFO } from "@/data/portfolio";

const STATS = [
  { value: "15+", label: "Years Experience" },
  { value: "3", label: "Cloud Platforms" },
  { value: "12+", label: "Certifications" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#0d0d14]">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">About Me</h2>
        <div className="w-16 h-1 rounded-full mb-6" style={{ background: "linear-gradient(90deg, #22d3ee, #3b82f6)" }} />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-slate-400 leading-relaxed text-base mb-6">
              {PERSONAL_INFO.summary}
            </p>
            <p className="text-slate-400 leading-relaxed text-base">
              With deep expertise across the full performance engineering lifecycle — from
              benchmarking and load testing to production observability and SRE practices — I
              help engineering teams build faster, more resilient systems at scale. Currently at{" "}
              <span className="text-accent-cyan font-medium">Workday</span>, I focus on
              enterprise-grade performance for large-scale cloud applications.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="glass-card p-6 text-center"
              >
                <div className="text-3xl font-extrabold gradient-text mb-1">{stat.value}</div>
                <div className="text-slate-500 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
