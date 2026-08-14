"use client";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="pt-24 sm:pt-32 lg:pt-36 pb-28 sm:pb-32 bg-bg-alt relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-start">
          {/* Left Column: Text and Details */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <span className="section-label">Professional Background</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-text leading-tight mb-8">
              Engineering with<br />
              <em className="italic bg-grad-text bg-clip-text text-transparent">Precision &amp; Passion</em>
            </h2>

            <div className="space-y-4 text-text-muted text-[1.03rem] leading-relaxed mb-10">
              <p>
                I&apos;m a Computer Science Engineer currently working as a{" "}
                <strong className="text-text font-semibold">
                  Frontend Developer Intern at iTUX Solutions
                </strong>
                , shipping production features for a live Next.js 15 e-commerce platform serving real users.
              </p>
              <p>
                With a strong foundation in{" "}
                <strong className="text-text font-semibold">
                  Java, DSA, and full-stack development
                </strong>
                , I build end-to-end applications from intelligent parking systems and ERP platforms to e-commerce solutions. I combine algorithmic thinking with modern engineering to create software that&apos;s performant and maintainable.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-border">
              <div className="flex flex-col gap-1">
                <span className="text-[0.65rem] font-bold tracking-widest uppercase text-text-dim">
                  B.Tech Degree
                </span>
                <span className="text-[0.95rem] font-semibold text-text">
                  Computer Science (Honors)
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[0.65rem] font-bold tracking-widest uppercase text-text-dim">
                  Institution
                </span>
                <span className="text-[0.95rem] font-semibold text-text">
                  SATI Vidisha (2023–2026)
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[0.65rem] font-bold tracking-widest uppercase text-text-dim">
                  CGPA
                </span>
                <span className="text-[0.95rem] font-semibold text-text">
                  8.07 / 10.0 (Honors)
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[0.65rem] font-bold tracking-widest uppercase text-text-dim">
                  Diploma
                </span>
                <span className="text-[0.95rem] font-semibold text-text">
                  CS Honors, CGPA 8.38
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[0.65rem] font-bold tracking-widest uppercase text-text-dim">
                  Current Role
                </span>
                <span className="text-[0.95rem] font-semibold text-text">
                  Frontend Dev @ iTUX Solutions
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[0.65rem] font-bold tracking-widest uppercase text-text-dim">
                  Location
                </span>
                <span className="text-[0.95rem] font-semibold text-text">
                  Madhya Pradesh, India
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Stat Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:sticky lg:top-28"
          >
            <div className="bg-bg-card border border-border rounded-xl p-7 hover:border-border-hover hover:-translate-y-1 transition-all duration-300">
              <div className="text-2xl text-primary mb-4">
                <i className="fas fa-code" />
              </div>
              <div className="font-display text-3xl font-bold text-text mb-1">4+</div>
              <div className="text-xs text-text-muted leading-relaxed">Full-stack projects built end-to-end</div>
            </div>

            <div className="bg-bg-card border border-border rounded-xl p-7 hover:border-border-hover hover:-translate-y-1 transition-all duration-300">
              <div className="text-2xl text-primary mb-4">
                <i className="fas fa-medal" />
              </div>
              <div className="font-display text-3xl font-bold text-text mb-1">8.07</div>
              <div className="text-xs text-text-muted leading-relaxed">B.Tech CGPA across all semesters</div>
            </div>

            <div className="bg-bg-card border border-border rounded-xl p-7 hover:border-border-hover hover:-translate-y-1 transition-all duration-300">
              <div className="text-2xl text-primary mb-4">
                <i className="fas fa-briefcase" />
              </div>
              <div className="font-display text-3xl font-bold text-text mb-1">3</div>
              <div className="text-xs text-text-muted leading-relaxed">Industry internships completed</div>
            </div>

            <div className="bg-bg-card border border-border rounded-xl p-7 hover:border-border-hover hover:-translate-y-1 transition-all duration-300">
              <div className="text-2xl text-primary mb-4">
                <i className="fas fa-certificate" />
              </div>
              <div className="font-display text-3xl font-bold text-text mb-1">5+</div>
              <div className="text-xs text-text-muted leading-relaxed">Professional certifications earned</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
