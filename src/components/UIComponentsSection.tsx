import React from 'react';

export const UIComponentsSection: React.FC = () => {
  return (
    <div id="buttons" className="ds-section">
        <h2 className="ds-section-title">Buttons</h2>
        <p className="ds-section-desc">Ways to guide people to take action without feeling pushy or aggressive.</p>
        
        <div className="ds-surface">
          <div className="ds-label">Primary actions</div>
          <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', marginBottom: 'var(--space-6)' }}>
            <button style={{
              backgroundColor: 'var(--color-primary)',
              color: 'white',
              border: 'none',
              padding: 'var(--space-3) var(--space-6)',
              borderRadius: 'var(--radius-md)',
              fontSize: '1.0625rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}>Primary Button</button>
            
            <button style={{
              backgroundColor: 'var(--color-text-main)',
              color: 'white',
              border: 'none',
              padding: 'var(--space-3) var(--space-6)',
              borderRadius: 'var(--radius-md)',
              fontSize: '1.0625rem',
              fontWeight: 500,
              cursor: 'pointer'
            }}>Secondary Action</button>
            
            <button style={{
              backgroundColor: 'transparent',
              color: 'var(--color-primary)',
              border: '1px solid var(--color-primary)',
              padding: 'var(--space-3) var(--space-6)',
              borderRadius: 'var(--radius-md)',
              fontSize: '1.0625rem',
              fontWeight: 500,
              cursor: 'pointer'
            }}>Outline Button</button>
            
            <button style={{
              backgroundColor: 'transparent',
              color: 'var(--color-text-light)',
              border: 'none',
              padding: 'var(--space-3) var(--space-6)',
              borderRadius: 'var(--radius-md)',
              fontSize: '1.0625rem',
              fontWeight: 500,
              cursor: 'pointer',
              textDecoration: 'underline'
            }}>Text Link</button>
          </div>
        </div>
    </div>
  );
};
