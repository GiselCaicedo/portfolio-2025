'use client';

import { services } from '@/data/site';
import { Button, Icon } from '@/components/ui';

export function Services() {
  const serviceLabels = ['WEB DEVELOPMENT', 'UI/UX DESIGN', 'BRAND IDENTITY'];

  return (
    <section id="services" className="section-spacing" style={{ background: 'var(--bg-primary)' }}>
      <div className="container-main">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-caption mb-4" style={{ color: 'var(--fg-tertiary)' }}>
            What can I do for you
          </p>
        </div>

        {/* Creative Typography Display - Inspired by the PDF */}
        <div className="space-y-4 mb-20">
          {serviceLabels.map((label, index) => (
            <div
              key={label}
              className="text-title md:text-5xl lg:text-6xl font-bold tracking-tight flex items-center gap-4"
              style={{ color: 'var(--fg-primary)' }}
            >
              <span>{label}</span>
              {index === 0 && (
                <div
                  className="w-16 h-10 md:w-24 md:h-14 rounded-full overflow-hidden"
                  style={{ background: 'var(--bg-tertiary)' }}
                />
              )}
              {index === 1 && (
                <div
                  className="w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden"
                  style={{ background: 'var(--bg-accent)' }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group p-8 rounded-2xl transition-all duration-300 hover:shadow-lg"
              style={{
                background: 'var(--bg-secondary)',
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex items-start justify-between mb-6">
                <span
                  className="text-caption"
                  style={{ color: 'var(--fg-muted)' }}
                >
                  0{index + 1}
                </span>
                <Icon
                  name="arrow"
                  size={20}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>

              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: 'var(--fg-primary)' }}
              >
                {service.title}
              </h3>

              <p
                className="text-body"
                style={{ color: 'var(--fg-secondary)' }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button
            as="a"
            href="#contact"
            variant="primary"
            size="lg"
            icon={<Icon name="arrow" size={18} />}
          >
            View all Services
          </Button>
        </div>
      </div>
    </section>
  );
}
