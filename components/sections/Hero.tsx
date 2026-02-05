'use client';

import { Button, Icon } from '@/components/ui';
import { siteConfig } from '@/data/site';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center  overflow-hidden">
      {/* Background Gradient Overlay */}
      <div
        className="absolute inset-0 opacity-40"
      
      />

      <div className="container-main relative z-10 pt-32 pb-20">
        <div className="max-w-4xl space-y-8">
          {/* Tagline */}
          <p
            className="text-caption tracking-wider"
            style={{ color: 'rgba(255, 255, 255, 0.6)' }}
          >
            {siteConfig.title}
          </p>

          {/* Main Headline - Serif typography like New Genre */}
          <h1
            className="font-serif text-headline tracking-tight"
            style={{ color: '#ffffff' }}
          >
            {siteConfig.name} is a creative developer crafting digital experiences that bridge{' '}
            <em className="not-italic opacity-70">design</em> and{' '}
            <em className="not-italic opacity-70">technology</em>.
          </h1>

          {/* Description */}
          <p
            className="text-body-lg max-w-2xl"
            style={{ color: 'rgba(255, 255, 255, 0.7)' }}
          >
            {siteConfig.description}. Focused on building performant, accessible, and visually compelling web experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              as="a"
              href="#work"
              variant="primary"
              size="lg"
              icon={<Icon name="arrow" size={18} />}
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                color: '#0a0a0a',
              }}
            >
              View Work
            </Button>

            <Button
              as="a"
              href="#contact"
              variant="secondary"
              size="lg"
              style={{
                borderColor: 'rgba(255, 255, 255, 0.3)',
                color: '#ffffff',
              }}
            >
              Get in Touch
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span
            className="text-xs uppercase tracking-widest"
            style={{ color: 'rgba(255, 255, 255, 0.5)' }}
          >
            Scroll
          </span>
          <div
            className="w-[1px] h-16"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 100%)',
            }}
          />
        </div>
      </div>
    </section>
  );
}
