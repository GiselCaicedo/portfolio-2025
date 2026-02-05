'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui';
import { siteConfig } from '@/data/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: 'var(--bg-primary)', color: 'var(--fg-primary)' }}
    >
      {/* Main Footer Content */}
      <div className="container-main section-spacing">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left Column - About */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-2">
              <p className="text-caption opacity-70">Creative Developer</p>
              <h3 className="text-subtitle font-medium">
                Building digital experiences that matter.
              </h3>
            </div>
            <div className="space-y-1 opacity-70">
              <p>{siteConfig.location}</p>
              <a href={`mailto:${siteConfig.email}`} className="hover:opacity-100 transition-opacity">
                {siteConfig.email}
              </a>
            </div>
            <div className="flex gap-4">
              {siteConfig.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                  aria-label={social.name}
                >
                  <Icon name={social.icon} size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Center Column - Navigation */}
          <div className="lg:col-span-4 lg:flex lg:justify-center">
            <nav className="space-y-4">
              <p className="text-caption opacity-70">Navigation</p>
              <ul className="space-y-3">
                {[{ label: 'Home', href: '/' }, ...siteConfig.navigation].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group flex items-center gap-2 text-lg font-medium hover:opacity-70 transition-opacity"
                    >
                      {item.label}
                      <Icon name="arrow" size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Right Column - CTA */}
          <div className="lg:col-span-4 lg:text-right space-y-6">
            <div className="space-y-2">
              <p className="text-caption opacity-70">Ready to start?</p>
              <h3 className="text-subtitle font-medium">
                Let&apos;s build something great together.
              </h3>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-lg font-medium border-b-2 pb-1 hover:gap-4 transition-all"
              style={{ borderColor: 'currentColor' }}
            >
              Get in touch
              <Icon name="arrow" size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Giant Text */}
      <div className="relative w-full overflow-hidden py-8" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="text-display font-bold tracking-tighter whitespace-nowrap opacity-10 select-none text-center">
          {siteConfig.name.toUpperCase()}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container-main py-6" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm opacity-60">
          <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p>Designed & Built with care</p>
        </div>
      </div>
    </footer>
  );
}
