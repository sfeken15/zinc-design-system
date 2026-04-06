import { useEffect } from 'react';
import { useDocsContext } from '@/docs/layout/docs-context';
import { Breadcrumb } from '@/docs/layout/breadcrumb';
import { Preview } from '@/docs/components/preview';
import { PropsTable } from '@/docs/components/props-table';
import { SectionHeader } from '@/docs/components/section-header';
import { RadioButton, RadioGroup } from '@/components/RadioButton';

const SECTIONS = [
  { id: 'default', label: 'Default' },
  { id: 'with-hints', label: 'With hints' },
  { id: 'sizes', label: 'Sizes' },
  { id: 'props', label: 'Props' },
];

const RADIO_PROPS = [
  { name: 'label', type: 'string', default: '—', description: 'Radio button label' },
  { name: 'hint', type: 'string', default: '—', description: 'Helper text below the label' },
  { name: 'size', type: '"sm" | "md"', default: '"sm"', description: 'Size of the radio button' },
  { name: 'isDisabled', type: 'boolean', default: 'false', description: 'Disables the radio button' },
  { name: 'value', type: 'string', default: '—', description: 'Value of the radio button (required)' },
];

const GROUP_PROPS = [
  { name: 'value', type: 'string', default: '—', description: 'Controlled selected value' },
  { name: 'defaultValue', type: 'string', default: '—', description: 'Default selected value' },
  { name: 'onChange', type: '(value: string) => void', default: '—', description: 'Change handler' },
  { name: 'orientation', type: '"vertical" | "horizontal"', default: '"vertical"', description: 'Layout direction' },
  { name: 'isDisabled', type: 'boolean', default: 'false', description: 'Disables all radio buttons' },
  { name: 'aria-label', type: 'string', default: '—', description: 'Accessible label for the group' },
];

export function RadioButtonPage() {
  const { setSections } = useDocsContext();

  useEffect(() => {
    setSections(SECTIONS);
    return () => setSections([]);
  }, [setSections]);

  return (
    <div>
      <Breadcrumb items={[{ label: 'Components' }, { label: 'RadioButton' }]} />

      <h1 style={{ fontSize: 28, fontWeight: 500, letterSpacing: '-0.02em', margin: '0 0 8px', color: 'var(--text-primary)' }}>
        RadioButton
      </h1>
      <p style={{ fontSize: 15, color: 'var(--text-secondary)', margin: '0 0 32px' }}>
        Accessible radio buttons with label and hint text, built on React Aria.
      </p>
      <hr style={{ border: 'none', borderTop: '1px solid var(--border-default)', margin: '0 0 40px' }} />

      <SectionHeader id="default" title="Default" />
      <Preview
        preview={
          <RadioGroup aria-label="Notification preference">
            <RadioButton value="all" label="All notifications" />
            <RadioButton value="mentions" label="Mentions only" />
            <RadioButton value="none" label="None" />
          </RadioGroup>
        }
        code={`<RadioGroup aria-label="Notification preference">
  <RadioButton value="all" label="All notifications" />
  <RadioButton value="mentions" label="Mentions only" />
  <RadioButton value="none" label="None" />
</RadioGroup>`}
      />

      <SectionHeader id="with-hints" title="With hints" />
      <Preview
        preview={
          <RadioGroup aria-label="Plan">
            <RadioButton value="free" label="Free" hint="Up to 5 projects" />
            <RadioButton value="pro" label="Pro" hint="Unlimited projects" />
            <RadioButton value="enterprise" label="Enterprise" hint="Custom limits" />
          </RadioGroup>
        }
        code={`<RadioGroup aria-label="Plan">
  <RadioButton value="free" label="Free" hint="Up to 5 projects" />
  <RadioButton value="pro" label="Pro" hint="Unlimited projects" />
  <RadioButton value="enterprise" label="Enterprise" hint="Custom limits" />
</RadioGroup>`}
      />

      <SectionHeader id="sizes" title="Sizes" />
      <Preview
        preview={
          <div style={{ display: 'flex', gap: 32 }}>
            <RadioGroup aria-label="Small size">
              <RadioButton value="a" label="Option A" size="sm" />
              <RadioButton value="b" label="Option B" size="sm" />
            </RadioGroup>
            <RadioGroup aria-label="Medium size">
              <RadioButton value="a" label="Option A" size="md" />
              <RadioButton value="b" label="Option B" size="md" />
            </RadioGroup>
          </div>
        }
        code={`<RadioGroup aria-label="Small size">
  <RadioButton value="a" label="Option A" size="sm" />
</RadioGroup>

<RadioGroup aria-label="Medium size">
  <RadioButton value="a" label="Option A" size="md" />
</RadioGroup>`}
      />

      <SectionHeader id="props" title="RadioButton Props" />
      <PropsTable props={RADIO_PROPS} />

      <SectionHeader id="props" title="RadioGroup Props" />
      <PropsTable props={GROUP_PROPS} />
    </div>
  );
}
