'use client';

import { techStack } from '@/data/site';

export function TechMarquee() {
  const duplicatedStack = [...techStack, ...techStack];

  return (
    <section
      className="py-8 overflow-hidden"
      style={{
        background: 'var(--fg-primary)',
        color: 'var(--bg-primary)'
      }}
    >
      <div className="relative flex">
        {/* Marquee Container */}
        <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
          {duplicatedStack.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center gap-3 text-lg font-medium"
            >
              <span className="opacity-30">&#9679;</span>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
