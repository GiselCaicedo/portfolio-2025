'use client';

import { services } from '@/data/site';
import { Button, Icon } from '@/components/ui';

export function Services() {
  return (
    <section id="services" className="section-spacing" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container-main">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="space-y-4">
            <p className="text-caption" style={{ color: 'var(--fg-tertiary)' }}>
              Services
            </p>
            <h2 className="text-title font-serif">
              Elevate your digital presence without losing focus.
            </h2>
          </div>
          <Button
            as="a"
            href="#contact"
            variant="primary"
            size="lg"
            icon={<Icon name="arrow" size={18} />}
          >
            Start now
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.id} className="card p-8">
              <div className="flex items-start justify-between mb-6">
                <span className="text-caption" style={{ color: 'var(--fg-muted)' }}>
                  0{index + 1}
                </span>
                <span className="badge" style={{ color: 'var(--fg-tertiary)' }}>
                  Service
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-body" style={{ color: 'var(--fg-secondary)' }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
