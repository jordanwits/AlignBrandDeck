import React from 'react';

export const NavigationSection: React.FC = () => {
  return (
    <div id="tabs-nav" className="ds-section">
      <h2 className="ds-section-title">Tabs & Navigation</h2>
      <p className="ds-section-desc">Different ways to help people move through your site or switch between sections.</p>

      <div className="ds-surface">
        <div style={{ display: 'flex', borderBottom: '1px solid rgba(0,0,0,0.05)', gap: 'var(--space-6)', overflowX: 'auto', whiteSpace: 'nowrap' }}>
          <div
            style={{
              padding: 'var(--space-3) 0',
              color: 'var(--color-primary)',
              borderBottom: '2px solid var(--color-primary)',
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            Active Tab
          </div>
          <div style={{ padding: 'var(--space-3) 0', color: 'var(--color-text-light)', cursor: 'pointer' }}>
            Inactive Tab
          </div>
          <div style={{ padding: 'var(--space-3) 0', color: 'var(--color-text-light)', cursor: 'pointer' }}>
            Another Tab
          </div>
        </div>
      </div>
    </div>
  );
};
