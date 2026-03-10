import { Award } from "lucide-react";
import { CERTIFICATIONS } from "@/data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 bg-[#0d0d14]">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">Certifications</h2>
        <div className="w-16 h-1 rounded-full mb-3" style={{ background: "linear-gradient(90deg, #22d3ee, #3b82f6)" }} />
        <p className="section-subheading">Professional certifications across cloud and security domains</p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={`${cert.issuer}-${cert.name}`}
              className="glass-card p-5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
              style={{ borderTopColor: cert.accent, borderTopWidth: "2px" }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: cert.bg }}
                >
                  <Award size={16} style={{ color: cert.accent }} />
                </div>
                <div>
                  <p
                    className="text-xs font-semibold mb-0.5"
                    style={{ color: cert.accent }}
                  >
                    {cert.issuer}
                  </p>
                  <p className="text-slate-300 text-xs leading-snug">{cert.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
