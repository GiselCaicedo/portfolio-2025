'use client';

import { Icon } from '@/components/ui';

export function About() {
  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '30+' },
  ];

  return (
    <section
      id="about"
      className="section-spacing"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-caption" style={{ color: 'var(--fg-tertiary)' }}>
              About
            </p>

            <h2
              className="text-title font-semibold"
              style={{ color: 'var(--fg-primary)' }}
            >
              A passion for creating meaningful digital experiences.
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 lg:col-start-6 space-y-8">
            <div className="space-y-6">
              <p
                className="text-body-lg"
                style={{ color: 'var(--fg-secondary)' }}
              >
                With a background spanning design and development, I bring a unique perspective to every project. I believe in the power of thoughtful design and clean code to create experiences that truly resonate with users.
              </p>

              <p
                className="text-body"
                style={{ color: 'var(--fg-tertiary)' }}
              >
                My approach combines strategic thinking with hands-on execution. Whether it&apos;s building a complex web application or crafting a brand identity, I focus on understanding the problem before jumping to solutions. This ensures that every pixel and line of code serves a purpose.
              </p>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-8 pt-8"
              style={{ borderTop: '1px solid var(--border-default)' }}
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p
                    className="text-3xl lg:text-4xl font-bold mb-2"
                    style={{ color: 'var(--fg-primary)' }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-small"
                    style={{ color: 'var(--fg-tertiary)' }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-6 pt-4">
              <a
                href="#"
                className="link-arrow"
                style={{ color: 'var(--fg-secondary)' }}
              >
                Download Resume
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-medium transition-opacity hover:opacity-70"
                style={{ color: 'var(--fg-secondary)' }}
              >
                <Icon name="linkedin" size={18} />
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-medium transition-opacity hover:opacity-70"
                style={{ color: 'var(--fg-secondary)' }}
              >
                <Icon name="github" size={18} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
