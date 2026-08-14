"use client";
import { motion, Variants } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";
import { IProject } from "@/types/portfolio";
import { seedProjects } from "@/lib/data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

interface ProjectsProps {
  projects?: IProject[];
}

export default function Projects({ projects = seedProjects }: ProjectsProps) {
  return (
    <section id="projects" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label justify-center">Engineering Exhibits</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-text">
            Selected <em className="italic bg-grad-text bg-clip-text text-transparent">Projects</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              transition={{ delay: idx * 0.1 }}
              className="h-full flex flex-col"
            >
              <ProjectCard project={proj} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
