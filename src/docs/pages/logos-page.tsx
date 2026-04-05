import { useEffect } from 'react';
import { useDocsContext } from '@/docs/layout/docs-context';
import { Breadcrumb } from '@/docs/layout/breadcrumb';
import { SectionHeader } from '@/docs/components/section-header';
import { CodeBlock } from '@/docs/components/code-block';
import { LogoHologram, LogoWhite, LogoBlack } from '@/components/logos/Logo';

const SECTIONS = [
  { id: 'hologram', label: 'Hologram' },
  { id: 'white', label: 'White' },
  { id: 'black', label: 'Black' },
];

export function LogosPage() {
  const { setSections } = useDocsContext();

  useEffect(() => {
    setSections(SECTIONS);
    return () => setSections([]);
  }, [setSections]);

  return (
    <div>
      <Breadcrumb items={[{ label: 'Foundations' }, { label: 'Logos' }]} />

      <h1
        style={{
          fontSize: 28,
          fontWeight: 500,
          letterSpacing: '-0.02em',
          margin: '0 0 8px',
          color: 'var(--text-primary)',
        }}
      >
        Logos
      </h1>
      <p style={{ fontSize: 15, color: 'var(--text-secondary)', margin: '0 0 32px' }}>
        Three logo variants for different contexts. Use hologram on dark backgrounds for maximum impact.
      </p>

      <hr style={{ border: 'none', borderTop: '1px solid var(--border-default)', margin: '0 0 40px' }} />

      <SectionHeader
        id="hologram"
        title="Hologram"
        subtitle="Gradient fill — use on dark backgrounds."
      />
      <div
        style={{
          background: '#09090B',
          borderRadius: 12,
          padding: '48px 40px',
          marginBottom: 16,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid var(--border-default)',
        }}
      >
        <LogoHologram height={32} />
      </div>
      <CodeBlock code={`import { LogoHologram } from '@/components/logos/Logo';

<LogoHologram height={32} />`} />

      <SectionHeader
        id="white"
        title="White"
        subtitle="White fill — use on dark or brand-colored backgrounds."
      />
      <div
        style={{
          background: '#09090B',
          borderRadius: 12,
          padding: '48px 40px',
          marginBottom: 16,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid var(--border-default)',
        }}
      >
        <LogoWhite height={32} />
      </div>
      <CodeBlock code={`import { LogoWhite } from '@/components/logos/Logo';

<LogoWhite height={32} />`} />

      <SectionHeader
        id="black"
        title="Black"
        subtitle="Black fill — use on light or white backgrounds."
      />
      <div
        style={{
          background: '#FAFAFA',
          borderRadius: 12,
          padding: '48px 40px',
          marginBottom: 16,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid var(--border-default)',
        }}
      >
        <LogoBlack height={32} />
      </div>
      <CodeBlock code={`import { LogoBlack } from '@/components/logos/Logo';

<LogoBlack height={32} />`} />
    </div>
  );
}
