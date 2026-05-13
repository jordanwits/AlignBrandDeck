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
    let rafId: number;

    const update = () => {
      if (skipObserverRef.current) return;
      // Find the last section whose top edge is above the midpoint of the viewport.
      // This means the section is occupying the top half of what the user sees.
      const trigger = window.innerHeight * 0.4;
      let activeId = SECTIONS[0].id;
      for (const { id } of SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= trigger) {
          activeId = id;
        }
      }
      setActiveSection(activeId);
    };

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run after a short delay so fonts/layout have settled
    setTimeout(update, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
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
      }, 1500);
      
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
