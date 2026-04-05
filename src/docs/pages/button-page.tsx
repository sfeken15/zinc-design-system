import { useEffect } from 'react';
import { useDocsContext } from '@/docs/layout/docs-context';
import { Breadcrumb } from '@/docs/layout/breadcrumb';
import { Preview } from '@/docs/components/preview';
import { PropsTable } from '@/docs/components/props-table';
import { SectionHeader } from '@/docs/components/section-header';
import { Button } from '@/components/Button';

const SECTIONS = [
  { id: 'examples', label: 'Examples' },
  { id: 'primary', label: 'Primary' },
  { id: 'secondary', label: 'Secondary' },
  { id: 'ghost', label: 'Ghost' },
  { id: 'accent', label: 'Accent' },
  { id: 'sizes', label: 'Sizes' },
  { id: 'disabled', label: 'Disabled' },
  { id: 'props', label: 'Props' },
];

const PROPS = [
  { name: 'variant', type: '"primary" | "secondary" | "ghost" | "accent"', default: '"primary"', description: 'Visual style of the button' },
  { name: 'size', type: '"sm" | "md" | "lg" | "xl"', default: '"md"', description: 'Size of the button' },
  { name: 'fullWidth', type: 'boolean', default: 'false', description: 'Stretches button to full container width' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables interaction and reduces opacity' },
  { name: 'onClick', type: '() => void', default: '—', description: 'Click handler' },
  { name: 'className', type: 'string', default: '""', description: 'Additional CSS classes' },
];

export function ButtonPage() {
  const { setSections } = useDocsContext();

  useEffect(() => {
    setSections(SECTIONS);
    return () => setSections([]);
  }, [setSections]);

  return (
    <div>
      <Breadcrumb items={[{ label: 'Components' }, { label: 'Button' }]} />

      <h1
        style={{
          fontSize: 28,
          fontWeight: 500,
          letterSpacing: '-0.02em',
          margin: '0 0 8px',
          color: 'var(--text-primary)',
        }}
      >
        Button
      </h1>
      <p style={{ fontSize: 15, color: 'var(--text-secondary)', margin: '0 0 32px' }}>
        Fully rounded buttons built with React Aria. Four variants, four sizes.
      </p>

      <hr style={{ border: 'none', borderTop: '1px solid var(--border-default)', margin: '0 0 40px' }} />

      <SectionHeader id="examples" title="Examples" />
      <Preview
        preview={
          <>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="accent">Accent</Button>
          </>
        }
        code={`import { Button } from '@/components/Button';

<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="accent">Accent</Button>`}
      />

      <SectionHeader id="primary" title="Primary" />
      <Preview
        preview={<Button variant="primary">Save changes</Button>}
        code={`<Button variant="primary">Save changes</Button>`}
      />

      <SectionHeader id="secondary" title="Secondary" />
      <Preview
        preview={<Button variant="secondary">Cancel</Button>}
        code={`<Button variant="secondary">Cancel</Button>`}
      />

      <SectionHeader id="ghost" title="Ghost" />
      <Preview
        preview={<Button variant="ghost">Learn more</Button>}
        code={`<Button variant="ghost">Learn more</Button>`}
      />

      <SectionHeader id="accent" title="Accent" />
      <Preview
        preview={<Button variant="accent">Get started</Button>}
        code={`<Button variant="accent">Get started</Button>`}
      />

      <SectionHeader id="sizes" title="Sizes" />
      <Preview
        preview={
          <>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra large</Button>
          </>
        }
        code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra large</Button>`}
      />

      <SectionHeader id="disabled" title="Disabled" />
      <Preview
        preview={
          <>
            <Button variant="primary" disabled>Disabled</Button>
            <Button variant="secondary" disabled>Disabled</Button>
            <Button variant="ghost" disabled>Disabled</Button>
          </>
        }
        code={`<Button variant="primary" disabled>Disabled</Button>
<Button variant="secondary" disabled>Disabled</Button>
<Button variant="ghost" disabled>Disabled</Button>`}
      />

      <SectionHeader id="props" title="Props" />
      <PropsTable props={PROPS} />
    </div>
  );
}
