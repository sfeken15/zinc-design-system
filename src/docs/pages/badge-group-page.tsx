import { useEffect } from 'react';
import { useDocsContext } from '@/docs/layout/docs-context';
import { Breadcrumb } from '@/docs/layout/breadcrumb';
import { Preview } from '@/docs/components/preview';
import { PropsTable } from '@/docs/components/props-table';
import { SectionHeader } from '@/docs/components/section-header';
import { BadgeGroup } from '@/components/BadgeGroup';

const SECTIONS = [
  { id: 'light', label: 'Light theme' },
  { id: 'modern', label: 'Modern theme' },
  { id: 'colors', label: 'Colors' },
  { id: 'props', label: 'Props' },
];

const PROPS = [
  { name: 'addonText', type: 'string', default: '—', description: 'Text inside the badge addon (required)' },
  { name: 'children', type: 'string | ReactNode', default: '—', description: 'Main label text after the addon' },
  { name: 'size', type: '"md" | "lg"', default: '"md"', description: 'Badge size' },
  { name: 'color', type: '"brand" | "warning" | "error" | "gray" | "success"', default: '—', description: 'Badge color (required)' },
  { name: 'theme', type: '"light" | "modern"', default: '"light"', description: 'Visual style' },
  { name: 'align', type: '"leading" | "trailing"', default: '"leading"', description: 'Addon alignment' },
  { name: 'iconTrailing', type: 'FC | ReactNode', default: 'ArrowRight', description: 'Trailing icon' },
];

export function BadgeGroupPage() {
  const { setSections } = useDocsContext();

  useEffect(() => {
    setSections(SECTIONS);
    return () => setSections([]);
  }, [setSections]);

  return (
    <div>
      <Breadcrumb items={[{ label: 'Components' }, { label: 'BadgeGroup' }]} />

      <h1 style={{ fontSize: 28, fontWeight: 500, letterSpacing: '-0.02em', margin: '0 0 8px', color: 'var(--text-primary)' }}>
        BadgeGroup
      </h1>
      <p style={{ fontSize: 15, color: 'var(--text-secondary)', margin: '0 0 32px' }}>
        Composite badge with addon text, optional trailing icon, and multiple color/theme combinations.
      </p>
      <hr style={{ border: 'none', borderTop: '1px solid var(--border-default)', margin: '0 0 40px' }} />

      <SectionHeader id="light" title="Light theme" />
      <Preview
        preview={
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <BadgeGroup addonText="New" color="brand">Feature launch</BadgeGroup>
            <BadgeGroup addonText="Live" color="success">All systems go</BadgeGroup>
            <BadgeGroup addonText="Warning" color="warning">Degraded performance</BadgeGroup>
            <BadgeGroup addonText="Error" color="error">Service disruption</BadgeGroup>
          </div>
        }
        code={`<BadgeGroup addonText="New" color="brand">Feature launch</BadgeGroup>
<BadgeGroup addonText="Live" color="success">All systems go</BadgeGroup>
<BadgeGroup addonText="Warning" color="warning">Degraded performance</BadgeGroup>
<BadgeGroup addonText="Error" color="error">Service disruption</BadgeGroup>`}
      />

      <SectionHeader id="modern" title="Modern theme" />
      <Preview
        preview={
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <BadgeGroup addonText="New" color="brand" theme="modern">Dashboard redesign</BadgeGroup>
            <BadgeGroup addonText="v2.0" color="gray" theme="modern" size="lg">Just shipped</BadgeGroup>
          </div>
        }
        code={`<BadgeGroup addonText="New" color="brand" theme="modern">Dashboard redesign</BadgeGroup>
<BadgeGroup addonText="v2.0" color="gray" theme="modern" size="lg">Just shipped</BadgeGroup>`}
      />

      <SectionHeader id="colors" title="Colors" />
      <Preview
        preview={
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <BadgeGroup addonText="Brand" color="brand">Label</BadgeGroup>
            <BadgeGroup addonText="Gray" color="gray">Label</BadgeGroup>
            <BadgeGroup addonText="Success" color="success">Label</BadgeGroup>
            <BadgeGroup addonText="Warning" color="warning">Label</BadgeGroup>
            <BadgeGroup addonText="Error" color="error">Label</BadgeGroup>
          </div>
        }
        code={`<BadgeGroup addonText="Brand" color="brand">Label</BadgeGroup>
<BadgeGroup addonText="Gray" color="gray">Label</BadgeGroup>
<BadgeGroup addonText="Success" color="success">Label</BadgeGroup>
<BadgeGroup addonText="Warning" color="warning">Label</BadgeGroup>
<BadgeGroup addonText="Error" color="error">Label</BadgeGroup>`}
      />

      <SectionHeader id="props" title="Props" />
      <PropsTable props={PROPS} />
    </div>
  );
}
