'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

interface FeaturedWork {
  id: string;
  number: string;
  title: string;
  category: string;
  impact: string;
  meta: string;
  description: string;
  panelColor: string;
}

export function Projects() {
  const items: FeaturedWork[] = useMemo(
    () => [
      {
        id: 'p2p',
        number: '01',
        title: 'P2P.org',
        category: 'Brand and Motion Design',
        impact: '$10B+ TVL',
        meta: '01 — BRAND + MOTION',
        description:
          'Brand and social motion design during the milestone moment when P2P.org surpassed $10B in total value locked.',
        panelColor: '#1e2a78',
      },
      {
        id: 'kelp',
        number: '02',
        title: 'Kelp DAO',
        category: 'UI/UX Design',
        impact: '$1.2B TVL',
        meta: '02 — UIUX DESIGN',
        description:
          'Supported brand and motion initiatives while Kelp DAO scaled from $900M to over $1.2B in TVL.',
        panelColor: '#1c7a55',
      },
      {
        id: 'blockwiz',
        number: '03',
        title: 'Blockwiz',
        category: 'Graphic Design',
        impact: '$250K+ Revenue',
        meta: '03 — GRAPHIC DESIGN',
        description:
          'Redesigned 40+ landing pages in two months, contributing to more than $250K in revenue.',
        panelColor: '#0f3c2e',
      },
      {
        id: 'bitfinity',
        number: '04',
        title: 'Bitfinity Network',
        category: 'Visual Identity',
        impact: '$2M+ Funding',
        meta: '04 — VISUAL IDENTITY',
        description:
          'Generalist design support for the second funding round, shaping a visual system that helped raise $2M+.',
        panelColor: '#4c2a7a',
      },
    ],
    [],
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const lockRef = useRef(false);
  const touchStartRef = useRef<number | null>(null);

  const clampIndex = (next: number) => Math.max(0, Math.min(items.length - 1, next));

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const inView = rect.top <= 0 && rect.bottom >= window.innerHeight;
      if (!inView) return;

      if (lockRef.current) {
        event.preventDefault();
        return;
      }

      const delta = event.deltaY;
      if (delta === 0) return;

      const goingDown = delta > 0;
      const nextIndex = clampIndex(activeIndex + (goingDown ? 1 : -1));

      if (nextIndex !== activeIndex) {
        event.preventDefault();
        lockRef.current = true;
        setActiveIndex(nextIndex);
        window.setTimeout(() => {
          lockRef.current = false;
        }, 700);
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartRef.current = event.touches[0]?.clientY ?? null;
    };

    const handleTouchMove = (event: TouchEvent) => {
      const section = sectionRef.current;
      if (!section || touchStartRef.current === null) return;

      const rect = section.getBoundingClientRect();
      const inView = rect.top <= 0 && rect.bottom >= window.innerHeight;
      if (!inView) return;

      if (lockRef.current) {
        event.preventDefault();
        return;
      }

      const currentY = event.touches[0]?.clientY ?? null;
      if (currentY === null) return;

      const delta = touchStartRef.current - currentY;
      if (Math.abs(delta) < 20) return;

      const goingDown = delta > 0;
      const nextIndex = clampIndex(activeIndex + (goingDown ? 1 : -1));

      if (nextIndex !== activeIndex) {
        event.preventDefault();
        lockRef.current = true;
        setActiveIndex(nextIndex);
        window.setTimeout(() => {
          lockRef.current = false;
        }, 700);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [activeIndex, items.length]);

  return (
    <section id="work" ref={sectionRef} style={{ background: 'var(--bg-primary)' }}>
      <div className="px-[var(--spacing-container)] pt-[var(--spacing-section)]">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
          <div className="space-y-4">
            <p className="text-caption" style={{ color: 'var(--fg-tertiary)' }}>
              Selected works
            </p>
            <h2 className="text-title font-serif">
              A sequential look at impact.
            </h2>
          </div>
          <p className="text-sm" style={{ color: 'var(--fg-muted)' }}>
            Scroll to move through projects.
          </p>
        </div>
      </div>

      <div
        className="relative"
        style={{ height: `${items.length * 100}vh` }}
      >
        <div className="sticky top-24">
          <div className="w-full grid grid-cols-1 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] gap-12 px-[var(--spacing-container)]">
            <div className="space-y-8" style={{ paddingRight: '24px' }}>
              {items.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className="w-full text-left"
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className="text-3xl font-serif"
                        style={{
                          color: isActive ? 'var(--fg-primary)' : 'var(--fg-muted)',
                          transition: 'color 0.3s ease',
                        }}
                      >
                        {item.number}
                      </span>
                      <div className="space-y-1">
                        <div
                          className="text-xl font-semibold"
                          style={{
                            color: isActive ? 'var(--fg-primary)' : 'var(--fg-tertiary)',
                            transition: 'color 0.3s ease',
                          }}
                        >
                          {item.title}
                        </div>
                        <div
                          className="text-xs tracking-widest uppercase"
                          style={{
                            color: isActive ? 'var(--fg-secondary)' : 'var(--fg-muted)',
                            transition: 'color 0.3s ease',
                          }}
                        >
                          {item.category}
                        </div>
                      </div>
                    </div>
                    <div
                      className="h-px mt-4"
                      style={{
                        background: isActive ? 'var(--fg-primary)' : 'var(--border-subtle)',
                        transition: 'background 0.3s ease',
                      }}
                    />
                  </button>
                );
              })}
            </div>

            <div className="relative min-h-[1080px]">
              {items.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={item.id}
                    className="transition-all duration-500"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? 'translateY(0px)' : 'translateY(24px)',
                      pointerEvents: isActive ? 'auto' : 'none',
                      position: isActive ? 'relative' : 'absolute',
                      inset: 0,
                    }}
                  >
                    <div
                      className="rounded-3xl p-24 text-white shadow-lg min-h-[900px] flex flex-col justify-between"
                      style={{
                        background: item.panelColor,
                      }}
                    >
                      <div className="flex items-center justify-between mb-16">
                        <span className="text-xs uppercase tracking-widest">Featured</span>
                        <span className="bg-black/70 text-white text-xs uppercase tracking-widest px-3 py-1 rounded-full">
                          {item.impact}
                        </span>
                      </div>
                      <div>
                        <div className="text-4xl lg:text-5xl font-serif">
                          {item.title}
                        </div>
                        <div className="text-sm uppercase tracking-widest text-white/70 mt-2">
                          {item.category}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 space-y-3">
                      <div className="text-xs uppercase tracking-widest" style={{ color: 'var(--fg-tertiary)' }}>
                        {item.meta}
                      </div>
                      <p className="text-body" style={{ color: 'var(--fg-secondary)' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: 'var(--spacing-section)' }} />
    </section>
  );
}
