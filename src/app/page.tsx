import { HeroSection } from '@/components/home/HeroSection'
import { ManifestoSection } from '@/components/home/ManifestoSection'
import { ProjectsGrid } from '@/components/home/ProjectsGrid'
import { ProcessSection } from '@/components/home/ProcessSection'
import { CtaSection } from '@/components/home/CtaSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ManifestoSection />
      <ProjectsGrid />
      <ProcessSection />
      <CtaSection />
    </>
  )
}
