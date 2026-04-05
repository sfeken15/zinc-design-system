import { useEffect } from 'react';
import { useDocsContext } from '@/docs/layout/docs-context';
import { Breadcrumb } from '@/docs/layout/breadcrumb';
import { Preview } from '@/docs/components/preview';
import { PropsTable } from '@/docs/components/props-table';
import { SectionHeader } from '@/docs/components/section-header';
import { Card } from '@/components/Card';

const SECTIONS = [
  { id: 'default', label: 'Default' },
  { id: 'active', label: 'Active state' },
  { id: 'non-hoverable', label: 'Non-hoverable' },
  { id: 'padding', label: 'Padding sizes' },
  { id: 'props', label: 'Props' },
];

const PROPS = [
  { name: 'active', type: 'boolean', default: 'false', description: 'Applies active border color and background' },
  { name: 'hoverable', type: 'boolean', default: 'true', description: 'Enables hover background and border transition' },
  { name: 'padding', type: '"sm" | "md" | "lg" | "xl"', default: '"md"', description: 'Internal padding size' },
  { name: 'onClick', type: '() => void', default: '—', description: 'Click handler — adds pointer cursor when provided' },
  { name: 'className', type: 'string', default: '""', description: 'Additional CSS classes' },
  { name: 'children', type: 'ReactNode', default: '—', description: 'Card content' },
];

function CardContent({ title, sub }: { title: string; sub: string }) {
  return (
    <>
      <p style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-primary)', margin: '0 0 4px' }}>
        {title}
      </p>
      <p style={{ fontSize: 13, color: 'var(--text-tertiary)', margin: 0 }}>{sub}</p>
    </>
  );
}

export function CardPage() {
  const { setSections } = useDocsContext();

  useEffect(() => {
    setSections(SECTIONS);
    return () => setSections([]);
  }, [setSections]);

  return (
    <div>
      <Breadcrumb items={[{ label: 'Components' }, { label: 'Card' }]} />

      <h1
        style={{
          fontSize: 28,
          fontWeight: 500,
          letterSpacing: '-0.02em',
          margin: '0 0 8px',
          color: 'var(--text-primary)',
        }}
      >
        Card
      </h1>
      <p style={{ fontSize: 15, color: 'var(--text-secondary)', margin: '0 0 32px' }}>
        Surface container with active selection, hover states, and configurable padding.
      </p>

      <hr style={{ border: 'none', borderTop: '1px solid var(--border-default)', margin: '0 0 40px' }} />

      <SectionHeader id="default" title="Default" />
      <Preview
        preview={
          <div style={{ width: '100%', maxWidth: 320 }}>
            <Card>
              <CardContent title="Default card" sub="Hover to see the hover state" />
            </Card>
          </div>
        }
        code={`import { Card } from '@/components/Card';

<Card>
  <p>Default card</p>
</Card>`}
      />

      <SectionHeader id="active" title="Active state" subtitle="Used for selected items in a list or grid." />
      <Preview
        preview={
          <div style={{ width: '100%', maxWidth: 320 }}>
            <Card active>
              <CardContent title="Active card" sub="Selected state with brand border" />
            </Card>
          </div>
        }
        code={`<Card active>
  <p>Active card</p>
</Card>`}
      />

      <SectionHeader id="non-hoverable" title="Non-hoverable" subtitle="Use for static content that isn't interactive." />
      <Preview
        preview={
          <div style={{ width: '100%', maxWidth: 320 }}>
            <Card hoverable={false}>
              <CardContent title="Static card" sub="No hover effect" />
            </Card>
          </div>
        }
        code={`<Card hoverable={false}>
  <p>Static card</p>
</Card>`}
      />

      <SectionHeader id="padding" title="Padding sizes" />
      <Preview
        preview={
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {(['sm', 'md', 'lg', 'xl'] as const).map((p) => (
              <Card key={p} padding={p} hoverable={false}>
                <p style={{ fontSize: 13, color: 'var(--text-tertiary)', margin: 0 }}>
                  padding="{p}"
                </p>
              </Card>
            ))}
          </div>
        }
        code={`<Card padding="sm">sm padding</Card>
<Card padding="md">md padding</Card>
<Card padding="lg">lg padding</Card>
<Card padding="xl">xl padding</Card>`}
      />

      <SectionHeader id="props" title="Props" />
      <PropsTable props={PROPS} />
    </div>
  );
}
