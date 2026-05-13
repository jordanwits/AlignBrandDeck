import React from 'react';

export const UIComponentsSection: React.FC = () => {
  return (
    <div id="buttons" className="ds-section">
        <h2 className="ds-section-title">Buttons</h2>
        <p className="ds-section-desc">Ways to guide people to take action without feeling pushy or aggressive.</p>
        
        <div className="ds-surface">
          <div className="ds-label">Primary actions</div>
          <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', marginBottom: 'var(--space-6)' }}>
            <button className="ds-demo-btn ds-demo-btn-primary">Primary Button</button>
            <button className="ds-demo-btn ds-demo-btn-secondary">Secondary Action</button>
            <button className="ds-demo-btn ds-demo-btn-outline">Outline Button</button>
            <button className="ds-demo-btn ds-demo-btn-text">Text Link</button>
          </div>
        </div>
    </div>
  );
};
