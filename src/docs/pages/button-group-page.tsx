import { useEffect } from 'react';
import { useDocsContext } from '@/docs/layout/docs-context';
import { Breadcrumb } from '@/docs/layout/breadcrumb';
import { Preview } from '@/docs/components/preview';
import { PropsTable } from '@/docs/components/props-table';
import { SectionHeader } from '@/docs/components/section-header';
import { ButtonGroup, ButtonGroupItem } from '@/components/ButtonGroup';

const SECTIONS = [
  { id: 'default', label: 'Default' },
  { id: 'sizes', label: 'Sizes' },
  { id: 'props', label: 'Props' },
];

const PROPS = [
  { name: 'size', type: '"sm" | "md" | "lg"', default: '"md"', description: 'Size applied to all items' },
  { name: 'selectionMode', type: '"single" | "multiple" | "none"', default: '"single"', description: 'Selection behavior' },
  { name: 'disallowEmptySelection', type: 'boolean', default: 'false', description: 'Prevent deselecting all items' },
];

const ITEM_PROPS = [
  { name: 'id', type: 'Key', default: '—', description: 'Unique key for the item (required)' },
  { name: 'iconLeading', type: 'FC | ReactNode', default: '—', description: 'Leading icon' },
  { name: 'iconTrailing', type: 'FC | ReactNode', default: '—', description: 'Trailing icon' },
  { name: 'isDisabled', type: 'boolean', default: 'false', description: 'Disables the item' },
];

export function ButtonGroupPage() {
  const { setSections } = useDocsContext();

  useEffect(() => {
    setSections(SECTIONS);
    return () => setSections([]);
  }, [setSections]);

  return (
    <div>
      <Breadcrumb items={[{ label: 'Components' }, { label: 'ButtonGroup' }]} />

      <h1 style={{ fontSize: 28, fontWeight: 500, letterSpacing: '-0.02em', margin: '0 0 8px', color: 'var(--text-primary)' }}>
        ButtonGroup
      </h1>
      <p style={{ fontSize: 15, color: 'var(--text-secondary)', margin: '0 0 32px' }}>
        Segmented toggle button group built on React Aria's ToggleButtonGroup.
      </p>
      <hr style={{ border: 'none', borderTop: '1px solid var(--border-default)', margin: '0 0 40px' }} />

      <SectionHeader id="default" title="Default" />
      <Preview
        preview={
          <ButtonGroup>
            <ButtonGroupItem id="day">Day</ButtonGroupItem>
            <ButtonGroupItem id="week">Week</ButtonGroupItem>
            <ButtonGroupItem id="month">Month</ButtonGroupItem>
          </ButtonGroup>
        }
        code={`<ButtonGroup>
  <ButtonGroupItem id="day">Day</ButtonGroupItem>
  <ButtonGroupItem id="week">Week</ButtonGroupItem>
  <ButtonGroupItem id="month">Month</ButtonGroupItem>
</ButtonGroup>`}
      />

      <SectionHeader id="sizes" title="Sizes" />
      <Preview
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <ButtonGroup size="sm">
              <ButtonGroupItem id="sm-1">Small</ButtonGroupItem>
              <ButtonGroupItem id="sm-2">Group</ButtonGroupItem>
            </ButtonGroup>
            <ButtonGroup size="md">
              <ButtonGroupItem id="md-1">Medium</ButtonGroupItem>
              <ButtonGroupItem id="md-2">Group</ButtonGroupItem>
            </ButtonGroup>
            <ButtonGroup size="lg">
              <ButtonGroupItem id="lg-1">Large</ButtonGroupItem>
              <ButtonGroupItem id="lg-2">Group</ButtonGroupItem>
            </ButtonGroup>
          </div>
        }
        code={`<ButtonGroup size="sm">...</ButtonGroup>
<ButtonGroup size="md">...</ButtonGroup>
<ButtonGroup size="lg">...</ButtonGroup>`}
      />

      <SectionHeader id="props" title="ButtonGroup Props" />
      <PropsTable props={PROPS} />

      <SectionHeader id="props" title="ButtonGroupItem Props" />
      <PropsTable props={ITEM_PROPS} />
    </div>
  );
}
