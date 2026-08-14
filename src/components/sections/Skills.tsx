"use client";
import { motion, Variants } from "framer-motion";
import { ISkillCategory } from "@/types/portfolio";
import { seedSkills } from "@/lib/data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

interface SkillsProps {
  skills?: ISkillCategory[];
}

export default function Skills({ skills = seedSkills }: SkillsProps) {
  return (
    <section id="skills" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label justify-center">Technical Stack</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-text">
            Full Stack <em className="italic bg-grad-text bg-clip-text text-transparent">Arsenal</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((cat, idx) => {
            const isTools = cat.id === "tools";
            return (
              <motion.div
                key={cat.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                transition={{ delay: idx * 0.08 }}
                className={`bg-bg-card border border-border rounded-xl p-7 hover:border-border-hover transition-colors duration-300 ${
                  isTools ? "lg:col-span-2" : ""
                }`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm flex-shrink-0">
                    <i className={cat.icon} />
                  </div>
                  <span className="text-[0.72rem] font-extrabold tracking-widest uppercase text-text-muted">
                    {cat.title}
                  </span>
                </div>

                {/* Content: Bars or Tags */}
                {cat.type === "bars" ? (
                  <div className="space-y-4">
                    {cat.items.map((bar) => (
                      <div key={bar.label}>
                        <div className="flex justify-between text-xs font-semibold mb-1">
                          <span className="text-text-muted">{bar.label}</span>
                          <span className="text-primary font-bold">{bar.pct}%</span>
                        </div>
                        <div className="w-full h-1 bg-border rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${bar.pct || 80}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="h-full rounded-full bg-gradient-to-r from-primary to-purple"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((tag) => (
                      <span key={tag.label} className="skill-tag">
                        {tag.label}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
