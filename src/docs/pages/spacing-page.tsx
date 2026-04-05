import { useEffect } from 'react';
import { useDocsContext } from '@/docs/layout/docs-context';
import { Breadcrumb } from '@/docs/layout/breadcrumb';
import { SectionHeader } from '@/docs/components/section-header';

const SECTIONS = [{ id: 'scale', label: 'Spacing scale' }];

const SPACING = [
  { name: 'space-1', px: 4 },
  { name: 'space-2', px: 8 },
  { name: 'space-3', px: 12 },
  { name: 'space-4', px: 16 },
  { name: 'space-5', px: 20 },
  { name: 'space-6', px: 24 },
  { name: 'space-7', px: 28 },
  { name: 'space-8', px: 32 },
  { name: 'space-9', px: 36 },
  { name: 'space-10', px: 40 },
  { name: 'space-12', px: 48 },
  { name: 'space-14', px: 56 },
  { name: 'space-16', px: 64 },
];

export function SpacingPage() {
  const { setSections } = useDocsContext();

  useEffect(() => {
    setSections(SECTIONS);
    return () => setSections([]);
  }, [setSections]);

  return (
    <div>
      <Breadcrumb items={[{ label: 'Foundations' }, { label: 'Spacing' }]} />

      <h1
        style={{
          fontSize: 28,
          fontWeight: 500,
          letterSpacing: '-0.02em',
          margin: '0 0 8px',
          color: 'var(--text-primary)',
        }}
      >
        Spacing
      </h1>
      <p style={{ fontSize: 15, color: 'var(--text-secondary)', margin: '0 0 32px' }}>
        4px base unit spacing scale. Use Tailwind's built-in spacing utilities (p-4, gap-6, m-8, etc.).
      </p>

      <hr style={{ border: 'none', borderTop: '1px solid var(--border-default)', margin: '0 0 40px' }} />

      <SectionHeader
        id="scale"
        title="Spacing scale"
        subtitle="Each step is a multiple of the 4px base unit."
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {SPACING.map((s) => (
          <div
            key={s.name}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
            }}
          >
            <div style={{ width: 80, flexShrink: 0 }}>
              <p
                style={{
                  fontSize: 13,
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-secondary)',
                  margin: 0,
                }}
              >
                {s.name}
              </p>
            </div>
            <div style={{ width: 48, flexShrink: 0 }}>
              <p
                style={{
                  fontSize: 12,
                  color: 'var(--text-tertiary)',
                  margin: 0,
                  fontFamily: 'var(--font-mono)',
                }}
              >
                {s.px}px
              </p>
            </div>
            <div
              style={{
                height: 20,
                width: s.px * 2,
                background: 'var(--graffiti-500)',
                borderRadius: 3,
                flexShrink: 0,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
