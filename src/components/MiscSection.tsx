import { 
  Heart, 
  Activity, 
  ShieldCheck, 
  User, 
  Calendar, 
  MessageSquare, 
  ArrowRight, 
  ChevronDown 
} from 'lucide-react';

const SPACING_SCALE = [
  { label: 'Extra tight', px: 4, cssVar: '--space-1' as const },
  { label: 'Tight', px: 8, cssVar: '--space-2' as const },
  { label: 'Compact', px: 12, cssVar: '--space-3' as const },
  { label: 'Default', px: 16, cssVar: '--space-4' as const },
  { label: 'Comfortable', px: 24, cssVar: '--space-5' as const },
  { label: 'Roomy', px: 32, cssVar: '--space-6' as const },
  { label: 'Section', px: 48, cssVar: '--space-7' as const },
  { label: 'Large section', px: 64, cssVar: '--space-8' as const },
];

export const MiscSection = () => {
  return (
    <>
      <div id="effects" className="ds-section">
        <h2 className="ds-section-title">Visual Effects</h2>
        <p className="ds-section-desc">Shadows, animations, and hover effects that add polish without being distracting.</p>
        
        <div className="ds-surface">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-6)' }}>
            <div>
              <div className="ds-label">Shadows for light backgrounds</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', padding: 'var(--space-5)', background: 'var(--color-bg-main)', borderRadius: 'var(--radius-lg)' }}>
                <div style={{ background: 'white', padding: 'var(--space-4)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)', color: 'var(--color-text-main)', textAlign: 'center', fontSize: '0.875rem' }}>Light</div>
                <div style={{ background: 'white', padding: 'var(--space-4)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)', color: 'var(--color-text-main)', textAlign: 'center', fontSize: '0.875rem' }}>Medium</div>
                <div style={{ background: 'white', padding: 'var(--space-4)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', color: 'var(--color-text-main)', textAlign: 'center', fontSize: '0.875rem' }}>Strong</div>
              </div>
            </div>
            
            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                <div className="ds-label">Hover effects</div>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', fontStyle: 'italic' }}>mouse over to see effects</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <div style={{ 
                  padding: 'var(--space-4)', 
                  background: 'var(--color-bg-dark-surface)', 
                  border: '1px solid rgba(0,0,0,0.05)',
                  borderRadius: 'var(--radius-md)',
                  transition: 'all var(--transition-normal)',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(calc(var(--space-1) * -1))';
                  e.currentTarget.style.borderColor = 'var(--color-primary)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)';
                }}>
                  <div style={{ fontWeight: 500, marginBottom: 'var(--space-1)' }}>Lift and highlight</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-light)' }}>Move your cursor over this card</div>
                </div>
                
                <div style={{ 
                  padding: 'var(--space-4)', 
                  background: 'var(--color-bg-dark-surface)', 
                  borderRadius: 'var(--radius-md)',
                  transition: 'background-color var(--transition-fast)',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-bg-dark-surface-hover)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--color-bg-dark-surface)'}>
                  <div style={{ fontWeight: 500, marginBottom: 'var(--space-1)' }}>Subtle background change</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-light)' }}>Move your cursor over this card</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="icons" className="ds-section">
        <h2 className="ds-section-title">Icons</h2>
        <p className="ds-section-desc">Simple, clean icons for menus, buttons, and status indicators.</p>
        
        <div className="ds-surface">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: 'var(--space-5)', textAlign: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-2)' }}>
              <Heart size={24} color="var(--color-primary)" />
              <span style={{ fontSize: '0.75rem', color: 'var(--color-text-light)' }}>Heart</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-2)' }}>
              <Activity size={24} color="var(--color-primary)" />
              <span style={{ fontSize: '0.75rem', color: 'var(--color-text-light)' }}>Activity</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-2)' }}>
              <ShieldCheck size={24} color="var(--color-primary)" />
              <span style={{ fontSize: '0.75rem', color: 'var(--color-text-light)' }}>Shield</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-2)' }}>
              <User size={24} color="var(--color-primary)" />
              <span style={{ fontSize: '0.75rem', color: 'var(--color-text-light)' }}>User</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-2)' }}>
              <Calendar size={24} color="var(--color-primary)" />
              <span style={{ fontSize: '0.75rem', color: 'var(--color-text-light)' }}>Calendar</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-2)' }}>
              <MessageSquare size={24} color="var(--color-primary)" />
              <span style={{ fontSize: '0.75rem', color: 'var(--color-text-light)' }}>Message</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-2)' }}>
              <ArrowRight size={24} color="var(--color-primary)" />
              <span style={{ fontSize: '0.75rem', color: 'var(--color-text-light)' }}>Arrow</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-2)' }}>
              <ChevronDown size={24} color="var(--color-primary)" />
              <span style={{ fontSize: '0.75rem', color: 'var(--color-text-light)' }}>Chevron</span>
            </div>
          </div>
        </div>
      </div>

      <div id="spacing" className="ds-section">
        <h2 className="ds-section-title">Spacing</h2>
        <p className="ds-section-desc">Consistent spacing between elements helps everything feel organized and easy to scan.</p>
        
        <div className="ds-surface">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            {SPACING_SCALE.map((space) => (
              <div key={space.label} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
                <div style={{ minWidth: '100px', flex: '1 1 100px', fontSize: '0.875rem', color: 'var(--color-text-main)' }}>{space.label}</div>
                <div style={{ minWidth: '120px', flex: '1 1 120px', fontSize: '0.875rem', color: 'var(--color-text-light)' }}>{space.px}px ({space.cssVar})</div>
                <div style={{ 
                  height: 'var(--space-4)', 
                  width: `var(${space.cssVar})`,
                  minWidth: 2,
                  background: 'var(--color-primary)',
                  opacity: 0.5,
                  borderRadius: '2px'
                }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
