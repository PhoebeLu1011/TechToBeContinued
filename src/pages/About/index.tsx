import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import './about.css';

import arrowLeft from '../../assets/images/decorations/02箭頭二.png';
import arrowRight from '../../assets/images/decorations/02箭頭三.png';
import floatingCorner from '../../assets/images/decorations/02箭頭三白.png';
import floatingSpark from '../../assets/images/decorations/03Loading .png';
import aboutTitle from '../../assets/images/titles/關於.png';
import AboutTabs, { type AboutSection } from './components/AboutTabs';
import ConceptSection from './sections/ConceptSection';
import DepartmentSection from './sections/DepartmentSection';
import ExhibitionSection from './sections/ExhibitionSection';
import SponsorsSection from './sections/SponsorsSection';
import TeamSection from './sections/TeamSection';

const sections: Record<AboutSection, React.ReactNode> = {
  concept: <ConceptSection />,
  department: <DepartmentSection />,
  exhibition: <ExhibitionSection />,
  team: <TeamSection />,
  sponsors: <SponsorsSection />,
};

const sectionOrder: AboutSection[] = ['concept', 'department', 'exhibition', 'team', 'sponsors'];

export default function About() {
  const [activeSection, setActiveSection] = useState<AboutSection>('concept');
  const [direction, setDirection] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const changeSection = (nextSection: AboutSection) => {
    if (nextSection === activeSection) return;

    setDirection(sectionOrder.indexOf(nextSection) - sectionOrder.indexOf(activeSection));
    setActiveSection(nextSection);
  };

  const sectionVariants = {
    enter: (travelDirection: number) => ({
      opacity: 0,
      x: shouldReduceMotion ? 0 : travelDirection > 0 ? 18 : -18,
    }),
    center: { opacity: 1, x: 0 },
    exit: (travelDirection: number) => ({
      opacity: 0,
      x: shouldReduceMotion ? 0 : travelDirection > 0 ? -18 : 18,
    }),
  };

  return (
    <div className={`about-page about-page--${activeSection}`}>
      <header className="about-hero">
        <div className="about-hero-floaters" aria-hidden="true">
          <img className="about-hero-symbol about-hero-symbol--spark" src={floatingSpark} alt="" />
          <img className="about-hero-symbol about-hero-symbol--corner" src={floatingCorner} alt="" />
          <span className="about-hero-symbol about-hero-symbol--chevron" />
        </div>
        <h1 className="about-title">
          <img src={aboutTitle} alt="關於" />
        </h1>
        <AboutTabs activeSection={activeSection} onChange={changeSection} />
      </header>

      <main
        id="about-section-panel"
        role="tabpanel"
        aria-labelledby={`about-tab-${activeSection}`}
        className="about-content"
      >
        <img className="about-decoration about-decoration--left" src={arrowLeft} alt="" aria-hidden="true" />
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.div
            key={activeSection}
            className="about-section-transition"
            custom={direction}
            variants={sectionVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={shouldReduceMotion
              ? { duration: 0 }
              : { duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {sections[activeSection]}
          </motion.div>
        </AnimatePresence>
        {activeSection !== 'team' && (
          <img className="about-decoration about-decoration--right" src={arrowRight} alt="" aria-hidden="true" />
        )}
      </main>
    </div>
  );
}
