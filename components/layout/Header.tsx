'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui';
import { siteConfig } from '@/data/site';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColor = '#ffffff';
  const bgColor = isScrolled ? 'rgba(0, 0, 0, 0.6)' : 'transparent';
  const borderColor = 'transparent';

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: bgColor,
        backdropFilter: isScrolled ? 'blur(18px)' : 'none',
        borderBottom: `1px solid ${borderColor}`,
      }}
    >
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 100%)',
        }}
      />
      <div className="container-main">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 text-lg font-semibold tracking-tight transition-colors duration-300"
            style={{ color: textColor }}
          >
            <span
              className="inline-flex items-center justify-center w-8 h-8 rounded-full border"
              style={{ borderColor: textColor }}
            >
              {siteConfig.name.charAt(0).toUpperCase()}
            </span>
            <span>{siteConfig.name}</span>
          </Link>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors duration-300 hover:opacity-70"
                style={{ color: textColor }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <span
              className="text-xs uppercase tracking-widest px-3 py-1 rounded-full border"
              style={{ color: textColor, borderColor: 'rgba(0,0,0,0.25)' }}
            >
              Booking open
            </span>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full transition-colors"
              style={{
                background: '#ffffff',
                color: '#0a0a0a',
              }}
            >
              Let's talk
              <Icon name="arrow" size={16} />
            </a>
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
              Let's talk
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
