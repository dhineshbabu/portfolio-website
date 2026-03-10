import {
  Zap,
  Monitor,
  Cloud,
  Search,
  BarChart,
  Database,
  BookOpen,
  GitBranch,
  LucideProps,
} from "lucide-react";
import { ACHIEVEMENTS } from "@/data/portfolio";

type IconComponent = React.ComponentType<LucideProps>;

const ICON_MAP: Record<string, IconComponent> = {
  Zap,
  Monitor,
  Cloud,
  Search,
  BarChart,
  Database,
  BookOpen,
  GitBranch,
};

const ICON_COLORS = [
  "#22d3ee",
  "#a855f7",
  "#3b82f6",
  "#f59e0b",
  "#10b981",
  "#ef4444",
  "#f97316",
  "#ec4899",
];

export default function WorkHighlights() {
  return (
    <section id="work" className="py-24 px-6 bg-[#0d0d14]">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">Work Highlights</h2>
        <div className="w-16 h-1 rounded-full mb-3" style={{ background: "linear-gradient(90deg, #22d3ee, #3b82f6)" }} />
        <p className="section-subheading">Key projects and contributions across my career</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {ACHIEVEMENTS.map((item, i) => {
            const Icon = ICON_MAP[item.icon] || Zap;
            const color = ICON_COLORS[i % ICON_COLORS.length];
            return (
              <div
                key={item.title}
                className="glass-card p-6 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${color}18` }}
                >
                  <Icon size={20} color={color} />
                </div>
                <h3 className="text-sm font-semibold text-slate-200 mb-2 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
