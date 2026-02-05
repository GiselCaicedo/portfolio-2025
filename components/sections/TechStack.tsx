'use client';

import { techStack } from '@/data/site';

export function TechStack() {
  const items = [...techStack, ...techStack, ...techStack];

  return (
    <section
      className="py-12 border-y"
      style={{
        borderColor: 'var(--border-subtle)',
        background: 'var(--bg-primary)',
      }}
    >
      <div className="overflow-hidden">
        <div className="marquee-track">
          {[0, 1].map((group) => (
            <div key={group} className="marquee-group">
              {items.map((tech) => (
                <div key={`${group}-${tech.name}`} className="marquee-item">
                  <span className="marquee-sep">*</span>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
