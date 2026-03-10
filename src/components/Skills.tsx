import { SKILLS } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">Skills &amp; Tools</h2>
        <div className="w-16 h-1 rounded-full mb-3" style={{ background: "linear-gradient(90deg, #22d3ee, #3b82f6)" }} />
        <p className="section-subheading">Technologies I work with across the performance engineering stack</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {SKILLS.map((category) => (
            <div
              key={category.label}
              className="glass-card p-5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
              style={{ borderLeftColor: category.accent, borderLeftWidth: "3px" }}
            >
              <h3
                className="text-sm font-semibold mb-3"
                style={{ color: category.accent }}
              >
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs px-2 py-1 rounded-full text-slate-400 border border-white/10"
                    style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
