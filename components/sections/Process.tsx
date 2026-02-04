'use client';

import { processSteps } from '@/data/site';

export function Process() {
  return (
    <section id="process" className="section-spacing" style={{ background: 'var(--bg-primary)' }}>
      <div className="container-main">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="space-y-4">
            <p className="text-caption" style={{ color: 'var(--fg-tertiary)' }}>
              Process
            </p>
            <h2 className="text-title font-serif">
              A clear system to deliver fast and with precision.
            </h2>
          </div>
          <span className="badge">Delivery in 4-6 weeks</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div key={step.id} className="card p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="text-caption" style={{ color: 'var(--fg-muted)' }}>
                  Step {index + 1}
                </span>
                <span className="pill">0{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-body" style={{ color: 'var(--fg-secondary)' }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
