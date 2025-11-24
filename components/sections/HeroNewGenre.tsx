'use client';

import { useEffect, useState, useRef } from 'react';

interface HeroSlide {
  headline: string;
  subtext?: string;
}

const slides: HeroSlide[] = [
  {
    headline: 'Crafting digital experiences that matter.',
    subtext: 'Creative Developer & Designer',
  },
  {
    headline: 'From concept to reality, with precision.',
    subtext: 'Full-Stack Development',
  },
  {
    headline: 'Design meets technology, beautifully.',
    subtext: 'UI/UX & Brand Identity',
  },
];

// Gradient: black → white (same for both modes)
const gradientStops = [
  '#0C0C0E',
  '#1A1A1A',
  '#3A3A3A',
  '#6A6A6A',
  '#A0A0A0',
  '#D0D0D0',
  '#FFFFFF',
];

export function HeroNewGenre() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const scrollY = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Progress through the hero section (0 to 1)
      const progress = Math.min(scrollY / (heroHeight - viewportHeight), 1);

      setScrollProgress(progress);
      // 3 slides now
      if (progress < 0.33) setCurrentSlide(0);
      else if (progress < 0.66) setCurrentSlide(1);
      else setCurrentSlide(2);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get interpolated background color based on scroll
  const getBackgroundColor = () => {
    const numStops = gradientStops.length;
    const progressIndex = scrollProgress * (numStops - 1);
    const lowerIndex = Math.floor(progressIndex);
    const upperIndex = Math.min(lowerIndex + 1, numStops - 1);
    const t = progressIndex - lowerIndex;

    return interpolateColor(gradientStops[lowerIndex], gradientStops[upperIndex], t);
  };

  // Color interpolation
  const interpolateColor = (color1: string, color2: string, t: number) => {
    const c1 = hexToRgb(color1);
    const c2 = hexToRgb(color2);

    const r = Math.round(c1.r + (c2.r - c1.r) * t);
    const g = Math.round(c1.g + (c2.g - c1.g) * t);
    const b = Math.round(c1.b + (c2.b - c1.b) * t);

    return `rgb(${r}, ${g}, ${b})`;
  };

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    } : { r: 0, g: 0, b: 0 };
  };

  // Text color: white on dark, black on light
  const getTextColor = () => {
    return scrollProgress > 0.6 ? '#0a0a0a' : '#ffffff';
  };

  return (
    <section
      ref={heroRef}
      className="relative"
      style={{ height: '300vh' }} // 3 viewports for 3 slides
    >
      {/* Sticky Container - stays in place while scrolling through hero */}
      <div
        className="sticky top-0 h-screen flex items-center overflow-hidden"
        style={{
          background: getBackgroundColor(),
        }}
      >
        {/* Decorative gradient orbs */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          style={{ opacity: 0.4 }}
        >
          <div
            className="absolute w-[600px] h-[600px] rounded-full blur-[120px] transition-all duration-1000"
            style={{
              background: scrollProgress < 0.5
                ? 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 70%)',
              top: '10%',
              right: '-10%',
              transform: `translate(${scrollProgress * -100}px, ${scrollProgress * 50}px)`,
            }}
          />
          <div
            className="absolute w-[400px] h-[400px] rounded-full blur-[100px] transition-all duration-1000"
            style={{
              background: scrollProgress < 0.5
                ? 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%)',
              bottom: '20%',
              left: '-5%',
              transform: `translate(${scrollProgress * 80}px, ${scrollProgress * -30}px)`,
            }}
          />
        </div>

        {/* Content */}
        <div className="container-main relative z-10">
          <div className="max-w-5xl">
            {/* Slide Counter */}
            <div
              className="flex items-center gap-3 mb-8 transition-all duration-500"
              style={{ opacity: 0.5 }}
            >
              <span
                className="text-sm font-mono tracking-wider"
                style={{ color: getTextColor() }}
              >
                0{currentSlide + 1}
              </span>
              <div
                className="w-12 h-px transition-colors duration-500"
                style={{ background: getTextColor() }}
              />
              <span
                className="text-sm font-mono tracking-wider"
                style={{ color: getTextColor() }}
              >
                0{slides.length}
              </span>
            </div>

            {/* Subtext */}
            <p
              className="text-caption mb-6 transition-all duration-700 tracking-widest uppercase text-sm"
              style={{
                color: getTextColor(),
                opacity: 0.7,
              }}
            >
              {slides[currentSlide].subtext}
            </p>

            {/* Headline */}
            <h1
              className="font-serif text-hero transition-colors duration-300 relative"
              style={{
                color: getTextColor(),
              }}
            >
              {slides.map((slide, index) => (
                <span
                  key={index}
                  className="block transition-all duration-700 ease-out"
                  style={{
                    opacity: currentSlide === index ? 1 : 0,
                    transform: `translateY(${currentSlide === index ? 0 : (currentSlide > index ? -30 : 30)}px) scale(${currentSlide === index ? 1 : 0.98})`,
                    position: index === 0 ? 'relative' : 'absolute',
                    top: 0,
                    left: 0,
                    filter: currentSlide === index ? 'blur(0px)' : 'blur(4px)',
                  }}
                >
                  {slide.headline}
                </span>
              ))}
            </h1>

            {/* CTA Button */}
            <div
              className="mt-12 transition-all duration-700"
              style={{
                opacity: scrollProgress < 0.9 ? 1 : 0,
                transform: `translateY(${scrollProgress > 0.8 ? 20 : 0}px)`,
              }}
            >
              <a
                href="#work"
                className="inline-block text-sm font-medium transition-opacity duration-300 hover:opacity-60"
                style={{ color: getTextColor() }}
              >
                View work ↓
              </a>
            </div>
          </div>
        </div>

        {/* Progress Bar at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/10">
          <div
            className="h-full transition-all duration-300 ease-out"
            style={{
              width: `${scrollProgress * 100}%`,
              background: scrollProgress < 0.6
                ? 'linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%)'
                : 'linear-gradient(90deg, rgba(10,10,10,0.8) 0%, rgba(10,10,10,0.4) 100%)',
            }}
          />
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-all duration-500"
          style={{
            opacity: scrollProgress < 0.1 ? 1 : 0,
            transform: `translateY(${scrollProgress > 0.05 ? 20 : 0}px)`,
          }}
        >
          <div
            className="w-6 h-10 rounded-full border-2 flex justify-center pt-2"
            style={{ borderColor: `${getTextColor()}40` }}
          >
            <div
              className="w-1 h-2 rounded-full animate-bounce"
              style={{ background: getTextColor() }}
            />
          </div>
          <span
            className="text-xs uppercase tracking-widest"
            style={{ color: `${getTextColor()}60` }}
          >
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}
