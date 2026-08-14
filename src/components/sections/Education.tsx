"use client";
import { motion, Variants } from "framer-motion";
import { IEducation } from "@/types/portfolio";
import { seedEducation } from "@/lib/data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

interface EducationProps {
  education?: IEducation[];
}

export default function Education({ education = seedEducation }: EducationProps) {
  return (
    <section className="py-28 bg-bg-alt relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <span className="section-label">Academic Background</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-text">
            Education &amp; <em className="italic bg-grad-text bg-clip-text text-transparent">Qualifications</em>
          </h2>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l border-border space-y-12 ml-2 sm:ml-4">
          {education.map((item, idx) => (
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

              {/* Header */}
              <span className="inline-block text-[0.68rem] font-bold tracking-widest uppercase text-text-dim mb-1">
                {item.timeline}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold italic text-text mb-1">
                {item.institution}
              </h3>
              <p className="text-sm font-semibold text-primary mb-4">
                {item.degree} · <span className="text-text font-bold">CGPA: {item.cgpa}</span>
              </p>

              {/* Highlights */}
              {item.highlights && (
                <div className="space-y-2 text-sm text-text-muted">
                  <div className="text-xs font-semibold text-text-dim uppercase tracking-wider">
                    {item.location}
                  </div>
                  {item.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
