import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const alignDropdownOptions = [
  { value: 'appointment', label: 'Request an appointment' },
  { value: 'records', label: 'Medical records or forms' },
  { value: 'billing', label: 'Billing or insurance' },
  { value: 'message', label: 'Message my care team' },
];

const AlignBrandDropdown: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  const selected = value ? alignDropdownOptions.find((o) => o.value === value) : null;
  const displayLabel = selected?.label ?? 'Select an option';
  const isPlaceholder = !selected;

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  return (
    <div ref={rootRef} style={{ position: 'relative' }}>
      <button
        type="button"
        id="align-brand-select-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={(e) => {
          if (e.key === 'Escape') setOpen(false);
        }}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'var(--space-3)',
          padding: 'var(--space-3) var(--space-4)',
          fontFamily: 'var(--font-body)',
          fontSize: '1rem',
          fontWeight: 500,
          lineHeight: 1.45,
          color: isPlaceholder ? 'var(--color-text-light)' : 'var(--color-text-main)',
          background: 'var(--color-bg-alt)',
          border: '1px solid rgba(47, 52, 55, 0.12)',
          borderRadius: 'var(--radius-md)',
          boxShadow: 'var(--shadow-sm)',
          cursor: 'pointer',
          outline: 'none',
          textAlign: 'left',
          transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)',
        }}
        className="ds-align-select-trigger"
      >
        <span style={{ flex: 1, minWidth: 0 }}>{displayLabel}</span>
        <ChevronDown
          size={18}
          strokeWidth={2}
          aria-hidden
          style={{
            flexShrink: 0,
            color: 'var(--color-text-muted)',
            transform: open ? 'rotate(180deg)' : undefined,
            transition: 'transform var(--transition-normal)',
          }}
        />
      </button>
      {open && (
        <ul
          role="listbox"
          aria-labelledby="align-brand-select-trigger"
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 'calc(100% + var(--space-1))',
            margin: 0,
            padding: 'var(--space-1) 0',
            listStyle: 'none',
            fontFamily: 'var(--font-body)',
            fontSize: '0.9375rem',
            background: 'var(--color-bg-alt)',
            border: '1px solid rgba(47, 52, 55, 0.1)',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-md)',
            zIndex: 20,
            maxHeight: '240px',
            overflowY: 'auto',
          }}
        >
          {alignDropdownOptions.map((opt) => {
            const active = opt.value === value;
            return (
              <li key={opt.value} role="option" aria-selected={active}>
                <button
                  type="button"
                  className={`ds-align-select-option${active ? ' ds-align-select-option--active' : ''}`}
                  onClick={() => {
                    setValue(opt.value);
                    setOpen(false);
                  }}
                >
                  {opt.label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export const FormsAlertsSection: React.FC = () => {
  return (
    <>
      <div id="forms" className="ds-section">
        <h2 className="ds-section-title">Forms</h2>
        <p className="ds-section-desc">Input fields, dropdowns, and messages when you need to get information or show errors.</p>
        
        <div className="ds-surface">
          <div className="ds-grid-2">
            <div>
              <div className="ds-label">Text fields</div>
              <div style={{ marginBottom: 'var(--space-4)' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: 'var(--space-2)', color: 'var(--color-text-light)' }}>Standard text field</label>
                <input 
                  type="text" 
                  placeholder="Type here" 
                  style={{ 
                    width: '100%', 
                    padding: 'var(--space-3) var(--space-4)', 
                    background: 'rgba(0,0,0,0.03)', 
                    border: '1px solid rgba(0,0,0,0.1)', 
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--color-text-main)',
                    outline: 'none'
                  }} 
                />
              </div>
              
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: 'var(--space-2)', color: 'var(--color-text-light)' }}>Field with error</label>
                <input 
                  type="text" 
                  defaultValue="Invalid value" 
                  style={{ 
                    width: '100%', 
                    padding: 'var(--space-3) var(--space-4)', 
                    background: 'rgba(220, 53, 69, 0.05)', 
                    border: '1px solid var(--color-danger)', 
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--color-text-main)',
                    outline: 'none'
                  }} 
                />
                <div style={{ color: 'var(--color-danger)', fontSize: '0.75rem', marginTop: 'var(--space-1)' }}>This field is required</div>
              </div>
            </div>
            
            <div>
              <div className="ds-label">Dropdowns & checkboxes</div>
              <div style={{ marginBottom: 'var(--space-4)' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: 'var(--space-2)', color: 'var(--color-text-light)' }}>Dropdown menu</label>
                <AlignBrandDropdown />
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginTop: 'var(--space-5)' }}>
                <input type="checkbox" id="check1" defaultChecked style={{ accentColor: 'var(--color-primary)', width: '16px', height: '16px' }} />
                <label htmlFor="check1" style={{ fontSize: '0.9rem' }}>Remember my preference</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
