'use client';

import { techStack } from '@/data/site';

export function TechStack() {
  const duplicated = [...techStack, ...techStack];

  return (
    <section
      className="py-12 border-y"
      style={{
        borderColor: 'var(--border-subtle)',
        background: 'var(--bg-primary)',
      }}
    >
      <div className="container-main">
        <div className="flex items-center justify-between gap-6 mb-6">
          <p className="text-caption" style={{ color: 'var(--fg-tertiary)' }}>
            Stack and tools
          </p>
          <p className="text-sm" style={{ color: 'var(--fg-muted)' }}>
            Everything you need to launch fast
          </p>
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="animate-marquee flex items-center gap-12 whitespace-nowrap px-[var(--spacing-container)]">
          {duplicated.map((tech, index) => (
            <div key={`${tech.name}-${index}`} className="flex items-center gap-3 text-lg font-medium">
              <span style={{ color: 'var(--accent-primary)' }}>*</span>
              <span style={{ color: 'var(--fg-primary)' }}>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
