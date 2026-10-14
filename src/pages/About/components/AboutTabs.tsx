import { useEffect, useRef, type KeyboardEvent } from 'react';
import { motion, useReducedMotion } from 'motion/react';

export type AboutSection = 'concept' | 'department' | 'exhibition' | 'team' | 'sponsors';

const tabs: Array<{ id: AboutSection; label: string }> = [
  { id: 'concept', label: '專展理念' },
  { id: 'department', label: '關於科技系' },
  { id: 'exhibition', label: '展覽資訊' },
  { id: 'team', label: '籌辦團隊' },
  { id: 'sponsors', label: '贊助單位' },
];

type AboutTabsProps = {
  activeSection: AboutSection;
  onChange: (section: AboutSection) => void;
};

export default function AboutTabs({ activeSection, onChange }: AboutTabsProps) {
  const shouldReduceMotion = useReducedMotion();
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    if (!window.matchMedia('(max-width: 720px)').matches) return;

    const activeIndex = tabs.findIndex((tab) => tab.id === activeSection);
    buttonRefs.current[activeIndex]?.scrollIntoView({
      behavior: shouldReduceMotion ? 'auto' : 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }, [activeSection, shouldReduceMotion]);

  const selectTab = (section: AboutSection, index: number) => {
    onChange(section);
    buttonRefs.current[index]?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex: number | undefined;

    if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = tabs.length - 1;

    if (nextIndex === undefined) return;

    event.preventDefault();
    selectTab(tabs[nextIndex].id, nextIndex);
  };

  return (
    <div className="about-tabs" role="tablist" aria-label="關於頁面分類">
      {tabs.map((tab, index) => (
        <motion.button
          key={tab.id}
          ref={(element) => { buttonRefs.current[index] = element; }}
          id={`about-tab-${tab.id}`}
          type="button"
          role="tab"
          aria-selected={activeSection === tab.id}
          aria-controls="about-section-panel"
          tabIndex={activeSection === tab.id ? 0 : -1}
          className={activeSection === tab.id ? 'is-active' : ''}
          onClick={() => onChange(tab.id)}
          onKeyDown={(event) => handleKeyDown(event, index)}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
        >
          {activeSection === tab.id && (
            <motion.span
              className="about-tab-indicator"
              layoutId="about-active-tab"
              transition={shouldReduceMotion
                ? { duration: 0 }
                : { type: 'spring', stiffness: 420, damping: 38, mass: 0.75 }}
            />
          )}
          <span className="about-tab-label">{tab.label}</span>
        </motion.button>
      ))}
    </div>
  );
}
