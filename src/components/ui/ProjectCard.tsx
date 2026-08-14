import Image from "next/image";
import { IProject } from "@/types/portfolio";

interface ProjectCardProps {
  project: IProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { links } = project;
  const hasAnyLink =
    Boolean(links?.live) ||
    Boolean(links?.vercel) ||
    Boolean(links?.appetize) ||
    Boolean(links?.backendSource) ||
    Boolean(links?.video) ||
    Boolean(links?.github);

  return (
    <div className="h-full w-full bg-bg-card border border-border rounded-xl overflow-hidden hover:border-border-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
      {/* Project Image Header */}
      <div className="relative h-60 w-full overflow-hidden bg-bg flex-shrink-0">
        <Image
          src={project.image}
          alt={project.imageAlt || project.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          className="object-cover grayscale-[0.6] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent flex items-end p-5 gap-2">
          <span className="text-[0.65rem] font-bold tracking-wider uppercase bg-primary text-white px-2.5 py-1 rounded">
            {project.tag}
          </span>
          <span className="text-[0.65rem] font-bold tracking-wider uppercase bg-purple/90 text-white px-2.5 py-1 rounded">
            {project.timeline}
          </span>
        </div>
      </div>

      {/* Project Body - Flex 1 to ensure equal stretch */}
      <div className="p-7 flex-1 flex flex-col justify-between">
        <div className="flex-1">
          <div className="flex items-start justify-between gap-3 mb-1.5">
            <h3 className="font-display text-xl sm:text-2xl font-bold italic text-text group-hover:text-primary transition-colors">
              {project.name}
            </h3>
          </div>
          <p className="text-xs font-semibold text-primary/90 uppercase tracking-wider mb-3">
            {project.tagline}
          </p>
          <p className="text-sm text-text-muted leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        {/* Tech Chips & Actions Area - Pinned to bottom */}
        <div className="pt-5 border-t border-border flex flex-col gap-4 mt-auto">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[0.65rem] font-bold tracking-wider uppercase text-text-dim border border-border rounded-full px-2.5 py-0.5"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Action Links Row */}
          <div className="flex flex-wrap items-center gap-2 pt-1 min-h-[38px]">
            {/* Appetize / Live Demo */}
            {links?.appetize && (
              <a
                href={links.appetize}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-primary hover:bg-primary/90 px-3.5 py-2 rounded-lg transition-colors shadow-sm"
              >
                <i className="fas fa-mobile-screen-button text-[11px]" />
                <span>Live Demo</span>
              </a>
            )}

            {/* Live Demo / Web Link */}
            {links?.live && !links?.appetize && (
              <a
                href={links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-primary hover:bg-primary/90 px-3.5 py-2 rounded-lg transition-colors shadow-sm"
              >
                <i className="fas fa-arrow-up-right-from-square text-[10px]" />
                <span>Live Demo</span>
              </a>
            )}

            {/* Video Demo */}
            {links?.video && (
              <a
                href={links.video}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-accent border border-accent/40 hover:border-accent hover:bg-accent/10 px-3.5 py-2 rounded-lg transition-colors"
              >
                <i className="fas fa-play text-[10px]" />
                <span>Video Demo</span>
              </a>
            )}

            {/* Vercel */}
            {links?.vercel && links.vercel !== links.live && (
              <a
                href={links.vercel}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-text-muted hover:text-text border border-border hover:border-primary/50 px-3 py-1.5 rounded-lg transition-colors"
              >
                <i className="fab fa-vercel text-[10px]" />
                <span>Vercel</span>
              </a>
            )}

            {/* Backend Source */}
            {links?.backendSource && (
              <a
                href={links.backendSource}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-purple border border-purple/30 hover:border-purple hover:bg-purple/10 px-3 py-1.5 rounded-lg transition-colors"
              >
                <i className="fas fa-server text-[10px]" />
                <span>Backend Src</span>
              </a>
            )}

            {/* GitHub Repo */}
            {links?.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View on GitHub"
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text-muted hover:border-primary hover:text-primary transition-colors text-sm ml-auto"
              >
                <i className="fab fa-github" />
              </a>
            )}

            {/* If no links provided (e.g. proprietary / live production in stealth) */}
            {!hasAnyLink && (
              <div className="inline-flex items-center gap-2 text-xs font-medium text-text-dim italic">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Enterprise Internal Codebase · Production</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
