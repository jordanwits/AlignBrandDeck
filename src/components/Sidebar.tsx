import React, { useEffect, useRef, useState } from 'react';
import { 
  Palette, 
  Type, 
  MousePointerClick, 
  LayoutTemplate, 
  FormInput, 
  Wand2, 
  Shapes, 
  Maximize,
  X
} from 'lucide-react';

export const SECTIONS = [
  { id: 'colors', label: 'Your Colors', icon: Palette },
  { id: 'typography', label: 'Fonts', icon: Type },
  { id: 'buttons', label: 'Buttons', icon: MousePointerClick },
  { id: 'tabs-nav', label: 'Tabs & Navigation', icon: LayoutTemplate },
  { id: 'forms', label: 'Forms', icon: FormInput },
  { id: 'effects', label: 'Visual Effects', icon: Wand2 },
  { id: 'icons', label: 'Icons', icon: Shapes },
  { id: 'spacing', label: 'Spacing', icon: Maximize },
];

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const [activeSection, setActiveSection] = useState<string>('colors');
  const skipObserverRef = useRef(false);
  const skipObserverTimerRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // During smooth scroll, ratios flicker; observer can overwrite the clicked tab.
        if (skipObserverRef.current) return;
        // Find the first intersecting entry that is highly visible
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Sort by intersection ratio to find the most visible one
          visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: '-100px 0px -40% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    );

    SECTIONS.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    return () => {
      if (skipObserverTimerRef.current !== undefined) {
        window.clearTimeout(skipObserverTimerRef.current);
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      if (skipObserverTimerRef.current !== undefined) {
        window.clearTimeout(skipObserverTimerRef.current);
      }
      skipObserverRef.current = true;
      setActiveSection(id);
      element.scrollIntoView({ behavior: 'smooth' });
      skipObserverTimerRef.current = window.setTimeout(() => {
        skipObserverRef.current = false;
        skipObserverTimerRef.current = undefined;
      }, 900);
      
      // Close sidebar on mobile after clicking
      if (window.innerWidth <= 768) {
        setIsOpen(false);
      }
    }
  };

  return (
    <aside className={`ds-sidebar ${isOpen ? 'open' : ''}`}>
      <div style={{ padding: '0 var(--space-5)', marginBottom: 'var(--space-6)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '1.25rem', margin: 0, color: 'var(--color-text-main)' }}>Align</h2>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-primary)', marginTop: 'var(--space-1)' }}>
            Brand Guide
          </div>
        </div>
        <button 
          className="ds-mobile-close" 
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <X size={20} />
        </button>
      </div>
      
      <nav>
        {SECTIONS.map(({ id, label, icon: Icon }) => (
          <div 
            key={id}
            className={`ds-nav-item ${activeSection === id ? 'active' : ''}`}
            onClick={() => scrollToSection(id)}
          >
            <Icon size={16} />
            <span>{label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
};
