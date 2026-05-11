import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface ColorCardProps {
  name: string;
  value: string;
  description?: string;
  /** Use when the swatch is very light so the copy affordance stays visible */
  lightSwatch?: boolean;
}

export const ColorCard = ({ name, value, description, lightSwatch }: ColorCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="ds-color-card" onClick={handleCopy} title="Copy color">
      <div
        className="ds-color-swatch"
        style={{
          backgroundColor: value,
          color: lightSwatch ? '#2F3437' : 'white',
        }}
      >
        <div
          className="ds-copy-icon"
          style={
            lightSwatch
              ? { background: 'rgba(47,52,55,0.12)', color: '#2F3437' }
              : undefined
          }
        >
          {copied ? <Check size={20} /> : <Copy size={20} />}
        </div>
      </div>
      <div className="ds-color-info">
        <div className="ds-color-name">{name}</div>
        <div className="ds-color-value">{value}</div>
        {description && (
          <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', marginTop: 'var(--space-1)' }}>
            {description}
          </div>
        )}
      </div>
    </div>
  );
};

export const ColorsSection = () => {
  return (
    <div id="colors" className="ds-section">
      <h2 className="ds-section-title">Your Colors</h2>
      <p className="ds-section-desc">
        The colors that represent Align across everything from your website to printed materials. Click any color to copy it for your use.
      </p>

      <div className="ds-label" style={{ marginTop: 'var(--space-6)' }}>
        Main brand colors
      </div>
      <div className="ds-color-grid">
        <ColorCard
          name="Soft Charcoal"
          value="#2F3437"
          description="For main text - confident without being harsh"
        />
        <ColorCard
          name="Warm Off-White"
          value="#F7F6F3"
          lightSwatch
          description="Background - feels softer than pure white"
        />
        <ColorCard name="Muted Sage" value="#7E9C8C" description="Your signature color - healing and grounded" />
        <ColorCard
          name="Dusty Blue"
          value="#6F8FA3"
          description="Trust and reliability - steady, not cold"
        />
        <ColorCard
          name="Soft Clay"
          value="#C9A38D"
          description="Adds warmth - use as an accent"
        />
      </div>

      <div className="ds-label" style={{ marginTop: 'var(--space-7)' }}>
        Status colors
      </div>
      <div className="ds-color-grid">
        <ColorCard name="Success" value="#198754" />
        <ColorCard name="Danger" value="#dc3545" />
        <ColorCard name="Warning" value="#ffc107" lightSwatch />
      </div>
    </div>
  );
};
