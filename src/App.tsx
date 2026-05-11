import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { ColorsSection } from './components/ColorsSection';
import { TypographySection } from './components/TypographySection';
import { UIComponentsSection } from './components/UIComponentsSection';
import { NavigationSection } from './components/NavigationSection';
import { FormsAlertsSection } from './components/FormsAlertsSection';
import { MiscSection } from './components/MiscSection';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="ds-container">
      {/* Mobile header / toggle */}
      <div className="ds-mobile-header">
        <div style={{ fontWeight: 600, color: 'var(--color-text-main)', fontSize: '1.25rem', fontFamily: 'var(--font-heading)' }}>Align</div>
        <button className="ds-mobile-toggle" onClick={() => setIsSidebarOpen(true)} aria-label="Open menu">
          <Menu size={24} />
        </button>
      </div>

      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div className="ds-sidebar-overlay" onClick={() => setIsSidebarOpen(false)}></div>
      )}
      
      <main className="ds-main">
        <div className="ds-hero-section" style={{ marginBottom: 'var(--space-8)' }}>
          <div className="ds-label">Your Brand Guide</div>
          <h1 className="ds-hero-title" style={{ marginBottom: 'var(--space-4)', color: 'var(--color-text-main)', letterSpacing: '-0.02em' }}>Align's Look & Feel</h1>
          <p className="ds-section-desc" style={{ fontSize: '1.15rem', maxWidth: '800px', lineHeight: '1.6' }}>
            Everything that makes your practice look and feel like Align.
            Your brand reflects one simple idea: professional care with a human touch.
            Click any color below to copy it.
          </p>
        </div>

        <ColorsSection />
        <TypographySection />
        <UIComponentsSection />
        <NavigationSection />
        <FormsAlertsSection />
        <MiscSection />
        
        <div style={{ padding: 'var(--space-8) 0', textAlign: 'center', color: 'var(--color-text-muted)', fontSize: '0.875rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          Align Pain Management Brand Guide
        </div>
      </main>
    </div>
  );
}

export default App;
