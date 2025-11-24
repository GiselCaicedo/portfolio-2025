'use client';

import { useEffect, useState } from 'react';

export function HeroEveryDay() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Radial Gradients with Parallax */}
      <div
        className="radial-bg radial-primary animate-radial-drift"
        style={{
          width: '60vw',
          height: '60vw',
          maxWidth: '800px',
          maxHeight: '800px',
          top: '5%',
          left: '-10%',
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
        }}
      />
      <div
        className="radial-bg radial-secondary animate-radial-drift"
        style={{
          width: '50vw',
          height: '50vw',
          maxWidth: '700px',
          maxHeight: '700px',
          bottom: '10%',
          right: '-5%',
          animationDelay: '-5s',
          transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
        }}
      />
      <div
        className="radial-bg radial-accent animate-radial-drift"
        style={{
          width: '40vw',
          height: '40vw',
          maxWidth: '500px',
          maxHeight: '500px',
          top: '40%',
          left: '30%',
          animationDelay: '-10s',
          opacity: 0.5,
          transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
        }}
      />

      {/* Left Polaroid */}
      <div
        className="absolute left-8 md:left-16 lg:left-24 top-1/2 -translate-y-1/2 z-10 polaroid animate-float-slow hidden md:block"
        style={{
          width: 'clamp(120px, 15vw, 200px)',
          transform: `translateY(-50%) rotate(-6deg) translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
        }}
      >
        <div
          className="aspect-[3/4] rounded"
          style={{ background: 'linear-gradient(135deg, var(--radial-primary) 0%, var(--radial-secondary) 100%)' }}
        />
      </div>

      {/* Right Polaroid */}
      <div
        className="absolute right-8 md:right-16 lg:right-24 top-1/3 z-10 polaroid animate-float hidden md:block"
        style={{
          width: 'clamp(100px, 12vw, 160px)',
          animationDelay: '-2s',
          transform: `rotate(8deg) translate(${mousePosition.x * -0.1}px, ${mousePosition.y * -0.1}px)`,
        }}
      >
        <div
          className="aspect-[4/5] rounded"
          style={{ background: 'linear-gradient(45deg, var(--radial-accent) 0%, var(--radial-primary) 100%)' }}
        />
      </div>

      {/* Bottom Right Polaroid */}
      <div
        className="absolute right-16 md:right-32 bottom-24 z-10 polaroid animate-float-slow hidden lg:block"
        style={{
          width: 'clamp(80px, 10vw, 140px)',
          animationDelay: '-4s',
          transform: `rotate(-4deg) translate(${mousePosition.x * 0.15}px, ${mousePosition.y * 0.15}px)`,
        }}
      >
        <div
          className="aspect-square rounded"
          style={{ background: 'linear-gradient(180deg, var(--radial-secondary) 0%, var(--radial-accent) 100%)' }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center container-main">
        {/* Large Text */}
        <h1 className="text-mega font-bold animate-fade-in-up" style={{ color: 'var(--fg-primary)' }}>
          FOR THE
          <br />
          IMPACT
        </h1>

        {/* CTA */}
        <div className="mt-12 animate-fade-in-up delay-300">
          <a
            href="#services"
            className="btn btn-secondary inline-flex items-center gap-3"
            style={{
              padding: '16px 32px',
              borderRadius: 'var(--radius-full)',
            }}
          >
            <span>Challenge us — we dare you</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Small text indicator */}
      <div
        className="absolute bottom-16 right-8 md:right-16 text-right animate-fade-in delay-500"
        style={{ color: 'var(--fg-tertiary)' }}
      >
        <p className="text-sm">Accelerate with</p>
        <p className="text-sm">platforms, AI & automation</p>
      </div>
    </section>
  );
}
