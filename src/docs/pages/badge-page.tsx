import { useEffect } from 'react';
import { useDocsContext } from '@/docs/layout/docs-context';
import { Breadcrumb } from '@/docs/layout/breadcrumb';
import { Preview } from '@/docs/components/preview';
import { PropsTable } from '@/docs/components/props-table';
import { SectionHeader } from '@/docs/components/section-header';
import { Badge } from '@/components/Badge';

const SECTIONS = [
  { id: 'variants', label: 'All variants' },
  { id: 'brand', label: 'Brand' },
  { id: 'accent', label: 'Accent' },
  { id: 'semantic', label: 'Semantic' },
  { id: 'props', label: 'Props' },
];

const PROPS = [
  { name: 'label', type: 'string', description: 'Text content of the badge' },
  {
    name: 'variant',
    type: '"brand" | "accent" | "neutral" | "success" | "warning" | "error"',
    default: '"neutral"',
    description: 'Color variant of the badge',
  },
  { name: 'className', type: 'string', default: '""', description: 'Additional CSS classes' },
];

export function BadgePage() {
  const { setSections } = useDocsContext();

  useEffect(() => {
    setSections(SECTIONS);
    return () => setSections([]);
  }, [setSections]);

  return (
    <div>
      <Breadcrumb items={[{ label: 'Components' }, { label: 'Badge' }]} />

      <h1
        style={{
          fontSize: 28,
          fontWeight: 500,
          letterSpacing: '-0.02em',
          margin: '0 0 8px',
          color: 'var(--text-primary)',
        }}
      >
        Badge
      </h1>
      <p style={{ fontSize: 15, color: 'var(--text-secondary)', margin: '0 0 32px' }}>
        Small status labels with six semantic color variants. Use to communicate state or category.
      </p>

      <hr style={{ border: 'none', borderTop: '1px solid var(--border-default)', margin: '0 0 40px' }} />

      <SectionHeader id="variants" title="All variants" />
      <Preview
        preview={
          <>
            <Badge label="Brand" variant="brand" />
            <Badge label="Accent" variant="accent" />
            <Badge label="Neutral" variant="neutral" />
            <Badge label="Success" variant="success" />
            <Badge label="Warning" variant="warning" />
            <Badge label="Error" variant="error" />
          </>
        }
        code={`import { Badge } from '@/components/Badge';

<Badge label="Brand" variant="brand" />
<Badge label="Accent" variant="accent" />
<Badge label="Neutral" variant="neutral" />
<Badge label="Success" variant="success" />
<Badge label="Warning" variant="warning" />
<Badge label="Error" variant="error" />`}
      />

      <SectionHeader id="brand" title="Brand" subtitle="Use for primary category labeling." />
      <Preview
        preview={<Badge label="New" variant="brand" />}
        code={`<Badge label="New" variant="brand" />`}
      />

      <SectionHeader id="accent" title="Accent" subtitle="Use for secondary highlights." />
      <Preview
        preview={<Badge label="Pro" variant="accent" />}
        code={`<Badge label="Pro" variant="accent" />`}
      />

      <SectionHeader id="semantic" title="Semantic variants" subtitle="Success, warning, and error for status communication." />
      <Preview
        preview={
          <>
            <Badge label="Active" variant="success" />
            <Badge label="Pending" variant="warning" />
            <Badge label="Failed" variant="error" />
            <Badge label="Draft" variant="neutral" />
          </>
        }
        code={`<Badge label="Active" variant="success" />
<Badge label="Pending" variant="warning" />
<Badge label="Failed" variant="error" />
<Badge label="Draft" variant="neutral" />`}
      />

      <SectionHeader id="props" title="Props" />
      <PropsTable props={PROPS} />
    </div>
  );
}
