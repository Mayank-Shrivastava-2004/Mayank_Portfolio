"use client";
import { motion, Variants } from "framer-motion";
import { ICertification } from "@/types/portfolio";
import { seedCertifications } from "@/lib/data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

interface CertificationsProps {
  certifications?: ICertification[];
}

export default function Certifications({ certifications = seedCertifications }: CertificationsProps) {
  return (
    <section className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label justify-center">Verified Credentials</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-text">
            Professional <em className="italic bg-grad-text bg-clip-text text-transparent">Certifications</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              transition={{ delay: idx * 0.08 }}
              className="bg-bg-card border border-border rounded-xl p-6 hover:border-border-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className={`text-2xl mb-4 ${cert.iconColor || "text-primary"}`}>
                  <i className={cert.icon} />
                </div>
                <h4 className="font-display text-lg font-bold italic text-text leading-snug mb-2">
                  {cert.title}
                </h4>
              </div>
              <span className="text-[0.68rem] font-bold tracking-widest uppercase text-text-dim mt-4">
                {cert.issuer}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
