export const TypographySection = () => {
  return (
    <div id="typography" className="ds-section">
      <h2 className="ds-section-title">Fonts</h2>
      <p className="ds-section-desc">
        The fonts that give Align its personality. Headlines use Libre Baskerville for a trustworthy feel. Body text uses Inter (or Source Sans Pro when needed).
        Everything should feel easy to read, spacious, and calming.
      </p>

      <div className="ds-surface" style={{ marginBottom: 'var(--space-6)' }}>
        <div className="ds-label">Body fonts</div>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-4)', fontSize: '0.95rem' }}>
          <strong style={{ fontWeight: 600, color: 'var(--color-text-main)' }}>Main font:</strong> Inter
        </p>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-5)', fontSize: '0.95rem' }}>
          <strong style={{ fontWeight: 600, color: 'var(--color-text-main)' }}>Backup option:</strong> Source Sans Pro
        </p>
        <div className="ds-grid-2" style={{ marginTop: 'var(--space-2)' }}>
          <div>
            <div className="ds-label" style={{ marginBottom: 'var(--space-2)' }}>
              Inter sample
            </div>
            <p className="ds-body-reading" style={{ color: 'var(--color-text-main)', marginBottom: 0 }}>
              Many people who come to Align have already tried other care. Body text stays open and easy to read,
              with comfortable line height and width so nothing feels crowded or rushed.
            </p>
          </div>
          <div>
            <div className="ds-label" style={{ marginBottom: 'var(--space-2)' }}>
              Source Sans sample
            </div>
            <p className="ds-body-reading ds-body-reading--alt" style={{ color: 'var(--color-text-main)', marginBottom: 0 }}>
              The same text in the backup font. Stick with one font across your entire site. Only use the backup if a template or partner requires it.
            </p>
          </div>
        </div>
      </div>

      <div className="ds-surface" style={{ marginBottom: 'var(--space-6)' }}>
        <div className="ds-label">What makes good body text</div>
        <ul
          style={{
            margin: 0,
            paddingLeft: 'var(--space-5)',
            color: 'var(--color-text-main)',
            lineHeight: 1.7,
          }}
        >
          <li>Easy to read - comfortable size, clear structure, good contrast</li>
          <li>Breathing room - generous spacing between lines; no big blocks of dense text</li>
          <li>Calming - steady and consistent; nothing shouty</li>
          <li>Scannable - break content into short paragraphs with clear headings</li>
        </ul>
      </div>

      <div className="ds-surface" style={{ marginBottom: 'var(--space-6)' }}>
        <div className="ds-label">Things to avoid</div>
        <ul
          style={{
            margin: 0,
            paddingLeft: 'var(--space-5)',
            color: 'var(--color-text-main)',
            lineHeight: 1.7,
          }}
        >
          <li>Too much bold text - save bold for important emphasis only</li>
          <li>ALL-CAPS HEADLINES - stick to normal capitalization so it feels more human</li>
          <li>Trendy or flashy fonts that clash with the calm, professional tone</li>
        </ul>
      </div>

      <div className="ds-surface" style={{ marginBottom: 'var(--space-6)' }}>
        <div className="ds-label">Headlines (Libre Baskerville)</div>
        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: 'var(--space-5)' }}>
          Professional and trustworthy. Use normal capitalization, not all caps.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
          <div>
            <span style={{ color: 'var(--color-text-light)', fontSize: '0.8rem', marginRight: 'var(--space-4)' }}>H1</span>
            <h1 style={{ display: 'inline', margin: 0, fontWeight: 600 }}>Heading one</h1>
          </div>
          <div>
            <span style={{ color: 'var(--color-text-light)', fontSize: '0.8rem', marginRight: 'var(--space-4)' }}>H2</span>
            <h2 style={{ display: 'inline', margin: 0, fontWeight: 600 }}>Heading two</h2>
          </div>
          <div>
            <span style={{ color: 'var(--color-text-light)', fontSize: '0.8rem', marginRight: 'var(--space-4)' }}>H3</span>
            <h3 style={{ display: 'inline', margin: 0, fontWeight: 600 }}>Heading three</h3>
          </div>
          <div>
            <span style={{ color: 'var(--color-text-light)', fontSize: '0.8rem', marginRight: 'var(--space-4)' }}>H4</span>
            <h4 style={{ display: 'inline', margin: 0, fontWeight: 600 }}>Heading four</h4>
          </div>
          <div>
            <span style={{ color: 'var(--color-text-light)', fontSize: '0.8rem', marginRight: 'var(--space-4)' }}>H5</span>
            <h5 style={{ display: 'inline', margin: 0, fontWeight: 600 }}>Heading five</h5>
          </div>
        </div>
      </div>

      <div className="ds-surface" style={{ marginBottom: 'var(--space-6)' }}>
        <div className="ds-label">Body text and emphasis (Inter)</div>

        <div>
          <p className="lead ds-body-reading" style={{ marginBottom: 'var(--space-4)', color: 'var(--color-text-main)' }}>
            Lead text - slightly larger for opening paragraphs. Keep it calm and welcoming.
          </p>
          <p className="ds-body-reading" style={{ marginBottom: 'var(--space-4)', color: 'var(--color-text-main)' }}>
            Regular body text - the quick brown fox jumps over the lazy dog. Short paragraphs help pages feel less crowded.
          </p>
          <p className="text-muted ds-body-reading" style={{ marginBottom: 'var(--space-4)' }}>
            Lighter text for supporting details or less important information.
          </p>
          <p style={{ fontSize: '0.875rem', marginBottom: 'var(--space-4)', lineHeight: 1.7 }}>Smaller text for captions and footnotes.</p>

          <div className="ds-label" style={{ marginTop: 'var(--space-5)', marginBottom: 'var(--space-3)' }}>
            Font weight - start light, add emphasis only where needed
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', fontSize: '0.95rem' }}>
            <div className="fw-normal">Normal - for most paragraphs</div>
            <div className="fw-medium">Medium - for subtle emphasis</div>
            <div className="fw-semibold">Semibold - for subheadings or labels</div>
            <div className="fw-bold">Bold - for important emphasis only, not entire paragraphs</div>
          </div>
        </div>
      </div>
    </div>
  );
};
