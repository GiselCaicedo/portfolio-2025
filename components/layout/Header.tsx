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
  const textColor = '#ffffff';
  const bgColor = 'transparent';

  const clients = siteConfig.clients || [];
  const tickerItems = [...clients, ...clients, ...clients];

  // Split navigation for centered logo layout
  const leftNav = siteConfig.navigation.slice(0, 2);
  const rightNav = siteConfig.navigation.slice(2);

  return (
    <header
      className="fixed left-0 right-0 z-50 transition-all duration-500"
      style={{
        top: 0,
        background: bgColor,
        backdropFilter: 'none',
      }}
    >
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0) 100%)',
        }}
      />
      {/* Ticker Bar */}
      <div className="relative overflow-hidden" style={{ background: '#000' }}>
        <div className="header-marquee-track">
          {[0, 1].map((group) => (
            <div key={group} className="header-marquee-group">
              <span className="header-marquee-label">
                <span className="header-marquee-dot" />
                Now creating
              </span>
              {tickerItems.map((item, index) => (
                <span
                  key={`${group}-${index}`}
                  className="header-marquee-item"
                >
                  <span className="header-marquee-muted">{item.desc}</span>
                  <span className="header-marquee-muted">–</span>
                  <span className="header-marquee-strong">{item.client}</span>
                </span>
              ))}
            </div>
          ))}
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
