import { useEffect, useState } from 'react';
import type { Selection } from 'react-aria-components';
import { useDocsContext } from '@/docs/layout/docs-context';
import { Breadcrumb } from '@/docs/layout/breadcrumb';
import { Preview } from '@/docs/components/preview';
import { PropsTable } from '@/docs/components/props-table';
import { SectionHeader } from '@/docs/components/section-header';
import { MultiSelect } from '@/components/MultiSelect';

const SECTIONS = [
  { id: 'default', label: 'Default' },
  { id: 'controlled', label: 'Controlled' },
  { id: 'props', label: 'Props' },
];

const PROPS = [
  { name: 'size', type: '"sm" | "md" | "lg"', default: '"md"', description: 'Size of the multi-select' },
  { name: 'label', type: 'string', default: '—', description: 'Field label' },
  { name: 'placeholder', type: 'string', default: '"Select"', description: 'Placeholder text' },
  { name: 'hint', type: 'string', default: '—', description: 'Helper text' },
  { name: 'items', type: 'SelectItemType[]', default: '—', description: 'Array of items' },
  { name: 'selectedKeys', type: 'Selection', default: '—', description: 'Controlled selected keys' },
  { name: 'defaultSelectedKeys', type: 'Selection', default: '—', description: 'Default selected keys' },
  { name: 'onSelectionChange', type: '(keys: Selection) => void', default: '—', description: 'Selection change handler' },
  { name: 'showSearch', type: 'boolean', default: 'true', description: 'Show search input' },
  { name: 'showFooter', type: 'boolean', default: 'true', description: 'Show reset/select all footer' },
  { name: 'onReset', type: '() => void', default: '—', description: 'Reset button handler' },
  { name: 'onSelectAll', type: '() => void', default: '—', description: 'Select all handler' },
];

const TAGS = [
  { id: 'design', label: 'Design' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'product', label: 'Product' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'sales', label: 'Sales' },
];

function ControlledExample() {
  const [selected, setSelected] = useState<Selection>(new Set(['design', 'product']));

  return (
    <div style={{ width: '100%', maxWidth: 320 }}>
      <MultiSelect
        label="Teams"
        placeholder="Select teams"
        items={TAGS}
        selectedKeys={selected}
        onSelectionChange={setSelected}
        onReset={() => setSelected(new Set())}
        onSelectAll={() => setSelected(new Set(TAGS.map((t) => t.id)))}
      >
        {(item) => <MultiSelect.Item id={item.id} textValue={item.label}>{item.label}</MultiSelect.Item>}
      </MultiSelect>
    </div>
  );
}

export function MultiSelectPage() {
  const { setSections } = useDocsContext();

  useEffect(() => {
    setSections(SECTIONS);
    return () => setSections([]);
  }, [setSections]);

  return (
    <div>
      <Breadcrumb items={[{ label: 'Components' }, { label: 'MultiSelect' }]} />

      <h1 style={{ fontSize: 28, fontWeight: 500, letterSpacing: '-0.02em', margin: '0 0 8px', color: 'var(--text-primary)' }}>
        MultiSelect
      </h1>
      <p style={{ fontSize: 15, color: 'var(--text-secondary)', margin: '0 0 32px' }}>
        Multi-selection dropdown with search, empty states, and reset/select all actions.
      </p>
      <hr style={{ border: 'none', borderTop: '1px solid var(--border-default)', margin: '0 0 40px' }} />

      <SectionHeader id="default" title="Default" />
      <Preview
        preview={
          <div style={{ width: '100%', maxWidth: 320 }}>
            <MultiSelect label="Categories" placeholder="Select categories" items={TAGS}>
              {(item) => <MultiSelect.Item id={item.id} textValue={item.label}>{item.label}</MultiSelect.Item>}
            </MultiSelect>
          </div>
        }
        code={`const TAGS = [
  { id: 'design', label: 'Design' },
  { id: 'engineering', label: 'Engineering' },
];

<MultiSelect label="Categories" placeholder="Select categories" items={TAGS}>
  {(item) => (
    <MultiSelect.Item id={item.id} textValue={item.label}>
      {item.label}
    </MultiSelect.Item>
  )}
</MultiSelect>`}
      />

      <SectionHeader id="controlled" title="Controlled" />
      <Preview
        preview={<ControlledExample />}
        code={`const [selected, setSelected] = useState<Selection>(new Set(['design']));

<MultiSelect
  label="Teams"
  items={TAGS}
  selectedKeys={selected}
  onSelectionChange={setSelected}
  onReset={() => setSelected(new Set())}
  onSelectAll={() => setSelected(new Set(TAGS.map(t => t.id)))}
>
  {(item) => (
    <MultiSelect.Item id={item.id} textValue={item.label}>
      {item.label}
    </MultiSelect.Item>
  )}
</MultiSelect>`}
      />

      <SectionHeader id="props" title="Props" />
      <PropsTable props={PROPS} />
    </div>
  );
}
