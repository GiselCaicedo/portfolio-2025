'use client';

import { platforms } from '@/data/site';

export function Platforms() {
  return (
    <section className="section-spacing" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <p className="text-caption" style={{ color: 'var(--fg-tertiary)' }}>
              Flexible platforms
            </p>
            <h2 className="text-title font-serif">
              We adapt to your stack without losing quality.
            </h2>
            <p className="text-body" style={{ color: 'var(--fg-secondary)' }}>
              We work with modern platforms and your current CMS when needed.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {platforms.map((platform) => (
              <div key={platform.name} className="card-outline p-4 text-center">
                <span className="text-sm font-medium">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
