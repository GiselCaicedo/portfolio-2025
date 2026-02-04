'use client';

import dynamic from 'next/dynamic';
import { Button, Icon } from '@/components/ui';
import { siteConfig } from '@/data/site';

const Spline = dynamic(() => import('@splinetool/react-spline/next'), {
  ssr: false,
});

export function HeroVisuvate() {
  return (
    <section className="relative min-h-screen text-white overflow-hidden flex items-center">
      <div className="absolute inset-0 pointer-events-none scale-110 origin-center" aria-hidden="true">
        <Spline
          scene="/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div
        className="glow-orb"
        style={{
          width: '520px',
          height: '520px',
          background: 'rgba(255, 77, 45, 0.25)',
          top: '-120px',
          left: '-80px',
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: '420px',
          height: '420px',
          background: 'rgba(0, 0, 0, 0.12)',
          bottom: '-120px',
          right: '-40px',
        }}
      />

      <div className="container-main relative z-10 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          <div className="lg:col-span-7">
            <div
              className="rounded-3xl p-8 lg:p-10 space-y-8"
              style={{
                background: 'rgba(0, 0, 0, 0.55)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <span className="badge border-white/40 text-white/80">
                Digital studio
              </span>
              <h1 className="text-hero font-serif text-white">
                {siteConfig.tagline}
              </h1>
              <p className="text-body-lg text-white/70 max-w-xl">
                {siteConfig.description}. We craft experiences with clear narrative,
                micro-interactions, and a solid technical foundation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  as="a"
                  href="#contact"
                  variant="primary"
                  size="lg"
                  icon={<Icon name="arrow" size={18} />}
                >
                  Start a project
                </Button>
                <Button
                  as="a"
                  href="#work"
                  variant="secondary"
                  size="lg"
                >
                  View work
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-white/60">
                <span>Delivery in 4-6 weeks</span>
                <span>Senior-led execution</span>
                <span>Remote worldwide</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex lg:justify-end">
            <div className="w-full max-w-md space-y-6">
              <div
                className="p-5 space-y-5 rounded-3xl"
                style={{
                  background: 'rgba(0, 0, 0, 0.55)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div className="flex items-center justify-between text-white/70 text-xs uppercase tracking-widest">
                  <span>Selected work</span>
                  <span>04</span>
                </div>
                <div className="space-y-3">
                  {[
                    { title: 'Aurora Health', tag: 'Healthcare', year: '2025' },
                    { title: 'Lumora Studio', tag: 'Creative', year: '2025' },
                    { title: 'North Commerce', tag: 'Ecommerce', year: '2024' },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center justify-between rounded-xl border border-white/10 px-4 py-3"
                      style={{ background: 'rgba(255,255,255,0.04)' }}
                    >
                      <div className="space-y-1">
                        <span className="font-medium text-white">
                          {item.title}
                        </span>
                        <div className="text-xs uppercase tracking-widest text-white/60">
                          {item.tag}
                        </div>
                      </div>
                      <span className="text-xs text-white/50">{item.year}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-white/60">
                  <span>Case studies available</span>
                  <span>View all</span>
                </div>
              </div>

              <div className="text-[var(--fg-tertiary)] text-sm">
                Available for new projects in Q2.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
