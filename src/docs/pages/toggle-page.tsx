import { useEffect, useState } from 'react';
import { useDocsContext } from '@/docs/layout/docs-context';
import { Breadcrumb } from '@/docs/layout/breadcrumb';
import { SectionHeader } from '@/docs/components/section-header';
import { Preview } from '@/docs/components/preview';
import { PropsTable } from '@/docs/components/props-table';
import { InstallBlock } from '@/docs/components/install-block';
import { Toggle } from '@/components/base/toggle/toggle';

const SECTIONS = [
  { id: 'example', label: 'Toggle example' },
  { id: 'installation', label: 'Installation' },
  { id: 'examples', label: 'Toggle examples' },
  { id: 'off-state', label: 'Off state' },
  { id: 'on-state', label: 'On state' },
  { id: 'with-label', label: 'With label' },
  { id: 'with-supporting-text', label: 'With supporting text' },
  { id: 'disabled', label: 'Disabled' },
  { id: 'slim', label: 'Slim toggle' },
  { id: 'sizes', label: 'Sizes' },
  { id: 'props', label: 'Props' },
  { id: 'faqs', label: 'FAQs' },
];

const PROPS = [
  { name: 'size', type: '"sm" | "md"', default: '"sm"', description: 'Size of the toggle' },
  { name: 'slim', type: 'boolean', default: 'false', description: 'Renders a thinner pill variant' },
  { name: 'label', type: 'string', default: '—', description: 'Label text displayed beside the toggle' },
  { name: 'hint', type: 'ReactNode', default: '—', description: 'Supporting text below the label' },
  { name: 'isSelected', type: 'boolean', default: '—', description: 'Controlled selected state' },
  { name: 'defaultSelected', type: 'boolean', default: 'false', description: 'Initial selected state (uncontrolled)' },
  { name: 'onChange', type: '(isSelected: boolean) => void', default: '—', description: 'Called when the toggle state changes' },
  { name: 'isDisabled', type: 'boolean', default: 'false', description: 'Disables interaction' },
];

const hr: React.CSSProperties = {
  border: 'none',
  borderTop: '1px dotted var(--border-default)',
  margin: '48px 0',
};

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <h3 style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)', margin: '0 0 6px' }}>{q}</h3>
      <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>{a}</p>
    </div>
  );
}

function ControlledToggle({ defaultSelected = false, ...props }: Parameters<typeof Toggle>[0] & { defaultSelected?: boolean }) {
  const [selected, setSelected] = useState(defaultSelected);
  return <Toggle {...props} isSelected={selected} onChange={setSelected} />;
}

export function TogglePage() {
  const { setSections } = useDocsContext();

  useEffect(() => {
    setSections(SECTIONS);
    return () => setSections([]);
  }, [setSections]);

  return (
    <div>
      <Breadcrumb items={[{ label: 'Components' }, { label: 'Toggle' }]} />

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
        <h1 style={{ fontSize: 28, fontWeight: 500, letterSpacing: '-0.02em', margin: 0, color: 'var(--text-primary)' }}>
          Toggle components
        </h1>
        <span style={{ fontSize: 11, fontWeight: 600, padding: '2px 8px', borderRadius: 20, border: '1px solid var(--border-default)', color: 'var(--text-tertiary)', letterSpacing: '0.04em' }}>
          FREE
        </span>
      </div>
      <p style={{ fontSize: 15, color: 'var(--text-secondary)', margin: '0 0 32px', lineHeight: 1.6, maxWidth: 600 }}>
        Free and open-source React toggle components. Built on React Aria's Switch primitive and styled with Tailwind CSS.
      </p>

      <hr style={hr} />

      <SectionHeader id="example" title="Toggle example" />
      <Preview
        preview={
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <ControlledToggle defaultSelected={false} />
            <ControlledToggle defaultSelected={true} />
          </div>
        }
        code={`import { Toggle } from '@/components/base/toggle/toggle';

<Toggle />
<Toggle defaultSelected />`}
      />

      <hr style={hr} />

      <SectionHeader id="installation" title="Installation" subtitle="Add this component using the CLI or copy it manually." />
      <InstallBlock cliName="toggle" manualPath="src/components/base/toggle/toggle.tsx" />

      <hr style={hr} />

      <SectionHeader id="examples" title="Toggle examples" subtitle="Below are examples and variations of the toggle component." />

      <SectionHeader id="off-state" title="Off state" />
      <Preview
        preview={<ControlledToggle defaultSelected={false} />}
        code={`<Toggle />`}
      />

      <SectionHeader id="on-state" title="On state" />
      <Preview
        preview={<ControlledToggle defaultSelected={true} />}
        code={`<Toggle defaultSelected />`}
      />

      <SectionHeader id="with-label" title="With label" />
      <Preview
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <ControlledToggle label="Remember me" />
            <ControlledToggle label="Remember me" defaultSelected />
          </div>
        }
        code={`<Toggle label="Remember me" />
<Toggle label="Remember me" defaultSelected />`}
      />

      <SectionHeader id="with-supporting-text" title="With supporting text" />
      <Preview
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <ControlledToggle label="Remember me" hint="Save my login details for next time." />
            <ControlledToggle label="Remember me" hint="Save my login details for next time." defaultSelected />
          </div>
        }
        code={`<Toggle label="Remember me" hint="Save my login details for next time." />
<Toggle label="Remember me" hint="Save my login details for next time." defaultSelected />`}
      />

      <SectionHeader id="disabled" title="Disabled" />
      <Preview
        preview={
          <div style={{ display: 'flex', gap: 24 }}>
            <Toggle label="Disabled off" isDisabled />
            <Toggle label="Disabled on" isSelected isDisabled />
          </div>
        }
        code={`<Toggle label="Disabled off" isDisabled />
<Toggle label="Disabled on" isSelected isDisabled />`}
      />

      <SectionHeader id="slim" title="Slim toggle" />
      <Preview
        preview={
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <ControlledToggle slim />
            <ControlledToggle slim defaultSelected />
            <ControlledToggle slim label="Slim with label" />
          </div>
        }
        code={`<Toggle slim />
<Toggle slim defaultSelected />
<Toggle slim label="Slim with label" />`}
      />

      <SectionHeader id="sizes" title="Sizes" />
      <Preview
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <ControlledToggle size="sm" label="Small (sm)" defaultSelected />
            <ControlledToggle size="md" label="Medium (md)" defaultSelected />
          </div>
        }
        code={`<Toggle size="sm" label="Small (sm)" defaultSelected />
<Toggle size="md" label="Medium (md)" defaultSelected />`}
      />

      <hr style={hr} />

      <SectionHeader id="props" title="Props" />
      <PropsTable props={PROPS} />

      <hr style={hr} />

      <div id="faqs">
        <SectionHeader id="faqs" title="FAQs" />
        <FaqItem
          q="How do I control the toggle state?"
          a="Use the isSelected and onChange props. The Toggle is built on React Aria's Switch, so it follows standard controlled/uncontrolled patterns. For uncontrolled usage, use defaultSelected."
        />
        <FaqItem
          q="Can I use toggles in forms?"
          a="Yes. The Toggle component works with React Hook Form using the Controller component. Pass field.value to isSelected and field.onChange to onChange."
        />
        <FaqItem
          q="What is the difference between the default and slim variants?"
          a="The default toggle is a standard pill with a circular thumb. The slim variant uses a thinner pill and slightly smaller thumb — better for dense UIs or settings panels."
        />
      </div>
    </div>
  );
}
