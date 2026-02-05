'use client';

import { Button, Icon } from '@/components/ui';

export function Cta() {
  return (
    <section className="section-spacing" style={{ background: 'var(--bg-primary)', color: 'var(--fg-primary)' }}>
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <p className="text-caption text-[var(--fg-tertiary)]">Ready to build?</p>
            <h2 className="text-display font-serif text-[var(--fg-primary)]">
              Create bold. Deliver better.
            </h2>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <Button
              as="a"
              href="#contact"
              variant="primary"
              size="lg"
              icon={<Icon name="arrow" size={18} />}
              className="bg-white text-black"
            >
              Book a call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
