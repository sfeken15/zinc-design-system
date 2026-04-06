import { useEffect } from 'react';
import { useDocsContext } from '@/docs/layout/docs-context';
import { Breadcrumb } from '@/docs/layout/breadcrumb';
import { Preview } from '@/docs/components/preview';
import { PropsTable } from '@/docs/components/props-table';
import { SectionHeader } from '@/docs/components/section-header';
import { Checkbox } from '@/components/Checkbox';

const SECTIONS = [
  { id: 'default', label: 'Default' },
  { id: 'with-hint', label: 'With hint' },
  { id: 'states', label: 'States' },
  { id: 'props', label: 'Props' },
];

const PROPS = [
  { name: 'label', type: 'string', default: '—', description: 'Checkbox label' },
  { name: 'hint', type: 'string', default: '—', description: 'Helper text below the label' },
  { name: 'size', type: '"sm" | "md"', default: '"sm"', description: 'Size of the checkbox' },
  { name: 'isSelected', type: 'boolean', default: 'false', description: 'Controlled checked state' },
  { name: 'isDisabled', type: 'boolean', default: 'false', description: 'Disables the checkbox' },
  { name: 'isIndeterminate', type: 'boolean', default: 'false', description: 'Shows an indeterminate state' },
  { name: 'onChange', type: '(isSelected: boolean) => void', default: '—', description: 'Change handler' },
];

export function CheckboxPage() {
  const { setSections } = useDocsContext();

  useEffect(() => {
    setSections(SECTIONS);
    return () => setSections([]);
  }, [setSections]);

  return (
    <div>
      <Breadcrumb items={[{ label: 'Components' }, { label: 'Checkbox' }]} />

      <h1 style={{ fontSize: 28, fontWeight: 500, letterSpacing: '-0.02em', margin: '0 0 8px', color: 'var(--text-primary)' }}>
        Checkbox
      </h1>
      <p style={{ fontSize: 15, color: 'var(--text-secondary)', margin: '0 0 32px' }}>
        Accessible checkbox built on React Aria with label and hint text support.
      </p>
      <hr style={{ border: 'none', borderTop: '1px solid var(--border-default)', margin: '0 0 40px' }} />

      <SectionHeader id="default" title="Default" />
      <Preview
        preview={<Checkbox label="Accept terms and conditions" />}
        code={`<Checkbox label="Accept terms and conditions" />`}
      />

      <SectionHeader id="with-hint" title="With hint" />
      <Preview
        preview={
          <Checkbox
            label="Remember me"
            hint="Save my login details for next time."
          />
        }
        code={`<Checkbox
  label="Remember me"
  hint="Save my login details for next time."
/>`}
      />

      <SectionHeader id="states" title="States" />
      <Preview
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Checkbox label="Unchecked" />
            <Checkbox label="Checked" isSelected />
            <Checkbox label="Indeterminate" isIndeterminate />
            <Checkbox label="Disabled" isDisabled />
            <Checkbox label="Disabled checked" isSelected isDisabled />
          </div>
        }
        code={`<Checkbox label="Unchecked" />
<Checkbox label="Checked" isSelected />
<Checkbox label="Indeterminate" isIndeterminate />
<Checkbox label="Disabled" isDisabled />
<Checkbox label="Disabled checked" isSelected isDisabled />`}
      />

      <SectionHeader id="props" title="Props" />
      <PropsTable props={PROPS} />
    </div>
  );
}
