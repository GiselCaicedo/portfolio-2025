'use client';

import { projects } from '@/data/site';

export function Projects() {
  return (
    <section id="work" className="section-spacing" style={{ background: 'var(--bg-primary)' }}>
      <div className="container-main">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="space-y-4">
            <p className="text-caption" style={{ color: 'var(--fg-tertiary)' }}>
              Selected projects
            </p>
            <h2 className="text-title font-serif">
              Recent work with real impact.
            </h2>
          </div>
          <a href="#contact" className="link-arrow text-sm">
            View all projects
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article key={project.id} className="card overflow-hidden">
              <div className="relative aspect-[4/3] bg-[var(--bg-tertiary)]">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                <div className="absolute top-6 left-6 badge border-white/30 text-white/80">
                  {project.category}
                </div>
                <div className="absolute bottom-6 left-6 text-white/80">
                  <div className="text-5xl font-semibold opacity-70">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm" style={{ color: 'var(--fg-tertiary)' }}>
                    {project.year}
                  </span>
                  <span className="text-sm" style={{ color: 'var(--fg-muted)' }}>
                    {project.tags.join(' / ')}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-body" style={{ color: 'var(--fg-secondary)' }}>
                  {project.description}
                </p>
                <button className="link-arrow text-sm">
                  View project
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
