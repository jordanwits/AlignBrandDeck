import React, { useState } from 'react';

const TABS = ['Active Tab', 'Inactive Tab', 'Another Tab'];

export const NavigationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div id="tabs-nav" className="ds-section">
      <h2 className="ds-section-title">Tabs & Navigation</h2>
      <p className="ds-section-desc">Different ways to help people move through your site or switch between sections.</p>

      <div className="ds-surface">
        <div style={{ display: 'flex', borderBottom: '1px solid rgba(0,0,0,0.05)', gap: 'var(--space-6)', overflowX: 'auto', whiteSpace: 'nowrap' }}>
          {TABS.map((_, i) => {
            const isActive = activeTab === i;
            return (
              <div
                key={i}
                onClick={() => setActiveTab(i)}
                style={{
                  padding: 'var(--space-3) 0',
                  color: isActive ? 'var(--color-primary)' : 'var(--color-text-light)',
                  borderBottom: isActive ? '2px solid var(--color-primary)' : '2px solid transparent',
                  fontWeight: isActive ? 500 : 400,
                  cursor: 'pointer',
                  transition: 'color 0.15s, border-color 0.15s',
                  userSelect: 'none',
                }}
              >
                {isActive ? 'Active Tab' : i === ((activeTab + 1) % TABS.length) ? 'Inactive Tab' : 'Another Tab'}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
