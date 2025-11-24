import {
  HeroNewGenre,
  TechMarquee,
  Services,
  Projects,
  About,
  Contact,
} from '@/components/sections';

export default function Home() {
  return (
    <>
      {/* Hero Section - newgenre.studio style with scroll-based gradient (2 slides) */}
      <HeroNewGenre />

      {/* Tech Stack Marquee */}
      <TechMarquee />

      {/* Services Section */}
      <Services />

      {/* Projects Section */}
      <Projects />

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <Contact />
    </>
  );
}
