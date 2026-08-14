"use client";
import { motion, Variants } from "framer-motion";
import { IExperience } from "@/types/portfolio";
import { seedExperience } from "@/lib/data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

interface ExperienceProps {
  experience?: IExperience[];
}

export default function Experience({ experience = seedExperience }: ExperienceProps) {
  return (
    <section id="experience" className="py-28 bg-bg-alt relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <span className="section-label">The Journey</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-text">
            Work <em className="italic bg-grad-text bg-clip-text text-transparent">Experience</em>
          </h2>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l border-border space-y-14 ml-2 sm:ml-4">
          {experience.map((item, idx) => (
            <motion.div
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              transition={{ delay: idx * 0.1 }}
              className="relative group pl-6 sm:pl-8"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-2 w-3.5 h-3.5 rounded-full border-2 border-primary bg-bg-alt group-hover:bg-primary transition-colors duration-300" />

              {/* Timeline Header */}
              <span className="inline-block text-[0.68rem] font-bold tracking-widest uppercase text-text-dim mb-1">
                {item.timeline}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold italic text-text mb-1">
                {item.company}
                <span className="text-sm font-sans font-normal text-text-muted ml-2">
                  · {item.location}
                </span>
              </h3>
              <p className="text-[0.78rem] font-bold tracking-wider uppercase text-primary mb-6">
                {item.role}
              </p>

              {/* Bullets */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-text-muted leading-relaxed">
                {item.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
