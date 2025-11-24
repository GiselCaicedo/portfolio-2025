'use client';

import { useState } from 'react';
import { projects } from '@/data/site';
import { Icon } from '@/components/ui';

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="work"
      className="section-spacing"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="container-main">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-caption mb-4" style={{ color: 'var(--fg-tertiary)' }}>
              Selected Work
            </p>
            <h2 className="text-title font-semibold" style={{ color: 'var(--fg-primary)' }}>
              Featured Projects
            </h2>
          </div>
          <a
            href="#"
            className="link-arrow text-sm"
            style={{ color: 'var(--fg-secondary)' }}
          >
            View all projects
          </a>
        </div>

        {/* Projects Stack/Grid */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group relative overflow-hidden rounded-2xl transition-all duration-500"
              style={{
                background: 'var(--bg-primary)',
                transform: hoveredIndex === index ? 'scale(1.02)' : 'scale(1)',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image Placeholder */}
                <div
                  className="aspect-[4/3] lg:aspect-auto lg:h-80 relative overflow-hidden"
                  style={{ background: 'var(--bg-tertiary)' }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="text-6xl font-bold opacity-10"
                      style={{ color: 'var(--fg-primary)' }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  {/* Hover Overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(180deg, transparent 0%, var(--fg-primary) 100%)',
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="text-caption"
                        style={{ color: 'var(--fg-muted)' }}
                      >
                        {project.category}
                      </span>
                      <span
                        className="text-sm"
                        style={{ color: 'var(--fg-tertiary)' }}
                      >
                        {project.year}
                      </span>
                    </div>

                    <h3
                      className="text-2xl lg:text-3xl font-semibold mb-4"
                      style={{ color: 'var(--fg-primary)' }}
                    >
                      {project.title}
                    </h3>

                    <p
                      className="text-body mb-6"
                      style={{ color: 'var(--fg-secondary)' }}
                    >
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full"
                          style={{
                            background: 'var(--bg-tertiary)',
                            color: 'var(--fg-secondary)',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow Link */}
                  <div className="mt-8">
                    <button
                      className="group/btn flex items-center gap-2 font-medium transition-colors"
                      style={{ color: 'var(--fg-primary)' }}
                    >
                      View Project
                      <Icon
                        name="arrow"
                        size={18}
                        className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
