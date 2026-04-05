import { useEffect, useState } from 'react';
import { useDocsContext } from '@/docs/layout/docs-context';
import { Breadcrumb } from '@/docs/layout/breadcrumb';
import { Preview } from '@/docs/components/preview';
import { PropsTable } from '@/docs/components/props-table';
import { SectionHeader } from '@/docs/components/section-header';
import { Tag } from '@/components/Tag';

const SECTIONS = [
  { id: 'states', label: 'States' },
  { id: 'group', label: 'Tag group' },
  { id: 'disabled', label: 'Disabled' },
  { id: 'props', label: 'Props' },
];

const PROPS = [
  { name: 'label', type: 'string', description: 'Text content of the tag' },
  { name: 'selected', type: 'boolean', default: 'false', description: 'Whether the tag is selected/active' },
  { name: 'onClick', type: '() => void', default: '—', description: 'Click handler to toggle selection' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables interaction and reduces opacity' },
  { name: 'className', type: 'string', default: '""', description: 'Additional CSS classes' },
];

const TAG_OPTIONS = ['Bold', 'Warm', 'Modern', 'Classic', 'Playful', 'Premium'];

function TagGroup() {
  const [selected, setSelected] = useState<string | null>('Modern');
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {TAG_OPTIONS.map((t) => (
        <Tag
          key={t}
          label={t}
          selected={selected === t}
          onClick={() => setSelected(selected === t ? null : t)}
        />
      ))}
    </div>
  );
}

export function TagPage() {
  const { setSections } = useDocsContext();

  useEffect(() => {
    setSections(SECTIONS);
    return () => setSections([]);
  }, [setSections]);

  return (
    <div>
      <Breadcrumb items={[{ label: 'Components' }, { label: 'Tag' }]} />

      <h1
        style={{
          fontSize: 28,
          fontWeight: 500,
          letterSpacing: '-0.02em',
          margin: '0 0 8px',
          color: 'var(--text-primary)',
        }}
      >
        Tag
      </h1>
      <p style={{ fontSize: 15, color: 'var(--text-secondary)', margin: '0 0 32px' }}>
        Selectable pill tags for filters, categories, and multi-select options.
      </p>

      <hr style={{ border: 'none', borderTop: '1px solid var(--border-default)', margin: '0 0 40px' }} />

      <SectionHeader id="states" title="States" />
      <Preview
        preview={
          <div style={{ display: 'flex', gap: 8 }}>
            <Tag label="Unselected" />
            <Tag label="Selected" selected />
          </div>
        }
        code={`import { Tag } from '@/components/Tag';

<Tag label="Unselected" />
<Tag label="Selected" selected />`}
      />

      <SectionHeader id="group" title="Tag group" subtitle="Single-select example with state management." />
      <Preview
        preview={<TagGroup />}
        code={`const [selected, setSelected] = useState<string | null>(null);
const options = ['Bold', 'Warm', 'Modern', 'Classic', 'Playful', 'Premium'];

<div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
  {options.map((t) => (
    <Tag
      key={t}
      label={t}
      selected={selected === t}
      onClick={() => setSelected(selected === t ? null : t)}
    />
  ))}
</div>`}
      />

      <SectionHeader id="disabled" title="Disabled" />
      <Preview
        preview={
          <div style={{ display: 'flex', gap: 8 }}>
            <Tag label="Disabled" disabled />
            <Tag label="Selected + disabled" selected disabled />
          </div>
        }
        code={`<Tag label="Disabled" disabled />
<Tag label="Selected + disabled" selected disabled />`}
      />

      <SectionHeader id="props" title="Props" />
      <PropsTable props={PROPS} />
    </div>
  );
}
