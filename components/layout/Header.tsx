'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui';
import { siteConfig } from '@/data/site';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInHero, setIsInHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight * 3;
      const progress = Math.min(scrollY / (heroHeight - window.innerHeight), 1);

      setScrollProgress(progress);
      setIsInHero(scrollY < heroHeight - 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Colors based on scroll position
  const isLight = !isInHero || scrollProgress > 0.7;
  const textColor = isLight ? '#0a0a0a' : '#ffffff';
  const bgColor = isLight ? 'rgba(255, 255, 255, 0.95)' : 'transparent';
  const borderColor = isLight ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)';

  const clients = siteConfig.clients || [];
  // Triplicamos para un loop más suave
  const duplicatedClients = [...clients, ...clients, ...clients];

  // Split navigation for centered logo layout
  const leftNav = siteConfig.navigation.slice(0, 2);
  const rightNav = siteConfig.navigation.slice(2);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{ background: bgColor, backdropFilter: isLight ? 'blur(20px)' : 'none' }}
    >
      {/* Ticker Bar */}
      <div
        className="relative overflow-hidden"
        style={{ background: '#000' }}
      >
        <div className="flex animate-marquee-slow whitespace-nowrap py-3">
          {/* First set */}
          <div className="flex items-center shrink-0">
            <span className="inline-flex items-center text-[11px] text-white/50 tracking-wide shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-400 mr-3" />
              Now creating
            </span>
            {clients.map((item, index) => (
              <span
                key={`a-${index}`}
                className="inline-flex items-center text-[11px] tracking-wide shrink-0 ml-10"
              >
                <span className="text-white/50">{item.desc}</span>
                <span className="text-white/50 mx-2">–</span>
                <span className="text-white">{item.client}</span>
              </span>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex items-center shrink-0 ml-10">
            <span className="inline-flex items-center text-[11px] text-white/50 tracking-wide shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-400 mr-3" />
              Now creating
            </span>
            {clients.map((item, index) => (
              <span
                key={`b-${index}`}
                className="inline-flex items-center text-[11px] tracking-wide shrink-0 ml-10"
              >
                <span className="text-white/50">{item.desc}</span>
                <span className="text-white/50 mx-2">–</span>
                <span className="text-white">{item.client}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container-main">
        <nav className="flex items-center justify-between h-16">
          {/* Left Navigation */}
          <div className="hidden md:flex items-center gap-8 flex-1">
            {leftNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors duration-300 hover:opacity-60"
                style={{ color: textColor }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Centered Logo */}
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight transition-colors duration-300 md:absolute md:left-1/2 md:-translate-x-1/2"
            style={{ color: textColor }}
          >
            {siteConfig.name}
            <span className="text-xs align-super ml-0.5">®</span>
          </Link>

          {/* Right Navigation */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-end">
            {rightNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors duration-300 hover:opacity-60"
                style={{ color: textColor }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2 transition-colors duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            style={{ color: textColor }}
          >
            <Icon name={mobileMenuOpen ? 'close' : 'menu'} size={24} />
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden py-6 animate-fade-in"
          style={{
            background: 'var(--bg-primary)',
            borderTop: '1px solid var(--border-subtle)',
          }}
        >
          <div className="container-main flex flex-col gap-4">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-medium py-2"
                style={{ color: 'var(--fg-primary)' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button
              className="mt-4 w-full py-3 text-center font-medium rounded-full transition-colors"
              style={{
                background: 'var(--fg-primary)',
                color: 'var(--bg-primary)',
              }}
              onClick={() => {
                setMobileMenuOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
