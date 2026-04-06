import { useEffect } from 'react';
import { useDocsContext } from '@/docs/layout/docs-context';
import { Breadcrumb } from '@/docs/layout/breadcrumb';
import { SectionHeader } from '@/docs/components/section-header';

const SECTIONS = [
  { id: 'display', label: 'Display styles' },
  { id: 'body', label: 'Body styles' },
  { id: 'labels', label: 'UI labels' },
];

const DISPLAY_STYLES = [
  { name: 'Display LG', size: 60, weight: 500, sample: 'Explore Joplin' },
  { name: 'Display MD', size: 48, weight: 500, sample: 'Explore Joplin' },
  { name: 'Display SM', size: 36, weight: 500, sample: 'Explore Joplin' },
  { name: 'Heading LG', size: 30, weight: 500, sample: 'Explore Joplin' },
  { name: 'Heading MD', size: 24, weight: 500, sample: 'Explore Joplin' },
  { name: 'Heading SM', size: 20, weight: 500, sample: 'Explore Joplin' },
];

const BODY_STYLES = [
  { name: 'Body LG', size: 18, weight: 400, sample: 'The quick brown fox jumps over the lazy dog.' },
  { name: 'Body MD', size: 16, weight: 400, sample: 'The quick brown fox jumps over the lazy dog.' },
  { name: 'Body SM', size: 14, weight: 400, sample: 'The quick brown fox jumps over the lazy dog.' },
];

const LABEL_STYLES = [
  { name: 'Label LG / Medium', size: 16, weight: 500, tracking: 'normal', uppercase: false, sample: 'Label large' },
  { name: 'Label LG / Semibold', size: 16, weight: 600, tracking: 'normal', uppercase: false, sample: 'Label large' },
  { name: 'Label MD', size: 14, weight: 600, tracking: 'normal', uppercase: false, sample: 'Label medium' },
  { name: 'Label SM', size: 12, weight: 600, tracking: '0.04em', uppercase: false, sample: 'Label small' },
  { name: 'Overline', size: 12, weight: 600, tracking: '0.08em', uppercase: true, sample: 'Overline text' },
];

function TypeRow({ name, size, weight, sample, tracking = 'normal', uppercase = false }: {
  name: string; size: number; weight: number; sample: string; tracking?: string; uppercase?: boolean;
}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'baseline',
        gap: 24,
        paddingBottom: 20,
        borderBottom: '1px solid var(--border-subtle)',
        marginBottom: 20,
      }}
    >
      <div style={{ width: 120, flexShrink: 0 }}>
        <p style={{ fontSize: 12, color: 'var(--text-tertiary)', margin: '0 0 2px' }}>{name}</p>
        <p style={{ fontSize: 11, color: 'var(--text-tertiary)', margin: 0, fontFamily: 'var(--font-mono)' }}>
          {size}px / {weight}
        </p>
      </div>
      <p
        style={{
          fontSize: size,
          fontWeight: weight,
          color: 'var(--text-primary)',
          margin: 0,
          letterSpacing: tracking,
          textTransform: uppercase ? 'uppercase' : 'none',
          lineHeight: 1.2,
          flex: 1,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {sample}
      </p>
    </div>
  );
}

export function TypographyPage() {
  const { setSections } = useDocsContext();

  useEffect(() => {
    setSections(SECTIONS);
    return () => setSections([]);
  }, [setSections]);

  return (
    <div>
      <Breadcrumb items={[{ label: 'Foundations' }, { label: 'Typography' }]} />

      <h1
        style={{
          fontSize: 28,
          fontWeight: 500,
          letterSpacing: '-0.02em',
          margin: '0 0 8px',
          color: 'var(--text-primary)',
        }}
      >
        Typography
      </h1>
      <p style={{ fontSize: 15, color: 'var(--text-secondary)', margin: '0 0 32px' }}>
        General Sans across all styles. Medium (500) for display, semibold (600) for UI labels and interactive elements, regular (400) for body.
      </p>

      <hr style={{ border: 'none', borderTop: '1px solid var(--border-default)', margin: '0 0 40px' }} />

      <SectionHeader
        id="display"
        title="Display styles"
        subtitle="General Sans Medium 500 — for headlines and hero text."
      />
      {DISPLAY_STYLES.map((s) => (
        <TypeRow key={s.name} {...s} />
      ))}

      <SectionHeader
        id="body"
        title="Body styles"
        subtitle="General Sans Regular 400 — for paragraph and descriptive text."
      />
      {BODY_STYLES.map((s) => (
        <TypeRow key={s.name} {...s} />
      ))}

      <SectionHeader
        id="labels"
        title="UI labels"
        subtitle="General Sans Semibold 600 — for labels, buttons, nav items, and overlines. Label LG offers both Medium and Semibold variants."
      />
      {LABEL_STYLES.map((s) => (
        <TypeRow key={s.name} {...s} />
      ))}
    </div>
  );
}
