import {
  HeroVisuvate,
  TechStack,
  Intro,
  Services,
  Projects,
  Platforms,
  Process,
  Faq,
  Contact,
  Cta,
} from '@/components/sections';

export default function Home() {
  return (
    <>
      <HeroVisuvate />
      <Projects />
      <Services />
      <Platforms />
      <Process />
      <Faq />
      <Contact />
    </>
  );
}
