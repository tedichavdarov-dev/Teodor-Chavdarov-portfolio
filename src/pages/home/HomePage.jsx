import HeroSection from '../../features/hero/HeroSection'
import AboutSection from '../../features/about/AboutSection'
import ProjectsSection from '../../features/projects/ProjectsSection'
import SkillsSection from '../../features/skills/SkillsSection'
import ExperienceSection from '../../features/experience/ExperienceSection'
import EducationSection from '../../features/education/EducationSection'
import ContactSection from '../../features/contact/ContactSection'

function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
    </>
  )
}

export default HomePage
