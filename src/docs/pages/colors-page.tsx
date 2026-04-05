import { useEffect } from 'react';
import { useDocsContext } from '@/docs/layout/docs-context';
import { Breadcrumb } from '@/docs/layout/breadcrumb';
import { SectionHeader } from '@/docs/components/section-header';
import { ColorSwatch } from '@/docs/components/color-swatch';

const SECTIONS = [
  { id: 'zinc', label: 'Zinc scale' },
  { id: 'graffiti', label: 'Graffiti scale' },
  { id: 'blurple', label: 'Blurple scale' },
  { id: 'hologram', label: 'Hologram gradient' },
];

const ZINC = [
  { name: 'White', hex: '#FFFFFF', textDark: true },
  { name: 'Zinc 50', hex: '#FAFAFA', textDark: true },
  { name: 'Zinc 100', hex: '#F4F4F5', textDark: true },
  { name: 'Zinc 200', hex: '#E4E4E7', textDark: true },
  { name: 'Zinc 300', hex: '#D4D4D8', textDark: true },
  { name: 'Zinc 400', hex: '#A1A1AA', textDark: true },
  { name: 'Zinc 500', hex: '#71717A', textDark: false },
  { name: 'Zinc 600', hex: '#52525B', textDark: false },
  { name: 'Zinc 700', hex: '#3F3F46', textDark: false },
  { name: 'Zinc 800', hex: '#27272A', textDark: false },
  { name: 'Zinc 900', hex: '#18181B', textDark: false },
  { name: 'Zinc 950', hex: '#09090B', textDark: false },
  { name: 'Black', hex: '#000000', textDark: false },
];

const GRAFFITI = [
  { name: 'Graffiti 100', hex: '#CCFBEF', textDark: true },
  { name: 'Graffiti 300', hex: '#5FE9D0', textDark: true },
  { name: 'Graffiti 500', hex: '#15B79E', textDark: false },
  { name: 'Graffiti 700', hex: '#107569', textDark: false },
];

const BLURPLE = [
  { name: 'Blurple 100', hex: '#DEE0FF', textDark: true },
  { name: 'Blurple 400', hex: '#8D81FF', textDark: false },
  { name: 'Blurple 600', hex: '#683DEE', textDark: false },
];

export function ColorsPage() {
  const { setSections } = useDocsContext();

  useEffect(() => {
    setSections(SECTIONS);
    return () => setSections([]);
  }, [setSections]);

  return (
    <div>
      <Breadcrumb items={[{ label: 'Foundations' }, { label: 'Colors' }]} />

      <h1
        style={{
          fontSize: 28,
          fontWeight: 500,
          letterSpacing: '-0.02em',
          margin: '0 0 8px',
          color: 'var(--text-primary)',
        }}
      >
        Colors
      </h1>
      <p style={{ fontSize: 15, color: 'var(--text-secondary)', margin: '0 0 32px' }}>
        Three scales: zinc neutrals, graffiti teal, and blurple purple. Click any swatch to copy the hex.
      </p>

      <hr style={{ border: 'none', borderTop: '1px solid var(--border-default)', margin: '0 0 40px' }} />

      <SectionHeader
        id="zinc"
        title="Zinc scale"
        subtitle="The primary neutral palette — 70% of the UI."
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: 16,
          marginBottom: 48,
        }}
      >
        {ZINC.map((c) => (
          <ColorSwatch key={c.name} {...c} />
        ))}
      </div>

      <SectionHeader
        id="graffiti"
        title="Graffiti scale"
        subtitle="Primary brand color — teal/mint. 20% of the UI."
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: 16,
          marginBottom: 48,
        }}
      >
        {GRAFFITI.map((c) => (
          <ColorSwatch key={c.name} {...c} />
        ))}
      </div>

      <SectionHeader
        id="blurple"
        title="Blurple scale"
        subtitle="Secondary brand color — purple. 10% of the UI."
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: 16,
          marginBottom: 48,
        }}
      >
        {BLURPLE.map((c) => (
          <ColorSwatch key={c.name} {...c} />
        ))}
      </div>

      <SectionHeader
        id="hologram"
        title="Hologram gradient"
        subtitle="Used for the logo and hero moments."
      />
      <div
        style={{
          width: '100%',
          height: 200,
          borderRadius: 12,
          background:
            'linear-gradient(90deg, #B6D0F7 0%, #EEF4E1 15%, #BAE4E2 32%, #FAFCFE 55%, #E2C1F9 76%, #B6D0F7 100%)',
          border: '1px solid var(--border-subtle)',
          marginBottom: 12,
        }}
      />
      <p
        style={{
          fontSize: 12,
          color: 'var(--text-tertiary)',
          fontFamily: 'var(--font-mono)',
          margin: 0,
        }}
      >
        linear-gradient(90deg, #B6D0F7, #EEF4E1, #BAE4E2, #FAFCFE, #E2C1F9, #B6D0F7)
      </p>
    </div>
  );
}
