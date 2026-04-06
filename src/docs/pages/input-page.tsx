import { useEffect } from 'react';
import { useDocsContext } from '@/docs/layout/docs-context';
import { Breadcrumb } from '@/docs/layout/breadcrumb';
import { Preview } from '@/docs/components/preview';
import { PropsTable } from '@/docs/components/props-table';
import { SectionHeader } from '@/docs/components/section-header';
import { Input } from '@/components/Input';

const SECTIONS = [
  { id: 'default', label: 'Default' },
  { id: 'with-label', label: 'With label' },
  { id: 'with-hint', label: 'With hint' },
  { id: 'error', label: 'Error state' },
  { id: 'props', label: 'Props' },
];

const PROPS = [
  { name: 'label', type: 'string', default: '—', description: 'Field label displayed above the input' },
  { name: 'placeholder', type: 'string', default: '—', description: 'Placeholder text' },
  { name: 'hint', type: 'string', default: '—', description: 'Helper text displayed below the input' },
  { name: 'isInvalid', type: 'boolean', default: 'false', description: 'Marks the input as invalid' },
  { name: 'value', type: 'string', default: '—', description: 'Controlled value' },
  { name: 'onChange', type: '(value: string) => void', default: '—', description: 'Change handler' },
  { name: 'type', type: 'string', default: '"text"', description: 'HTML input type' },
  { name: 'className', type: 'string', default: '""', description: 'Additional CSS classes' },
];

export function InputPage() {
  const { setSections } = useDocsContext();

  useEffect(() => {
    setSections(SECTIONS);
    return () => setSections([]);
  }, [setSections]);

  return (
    <div>
      <Breadcrumb items={[{ label: 'Components' }, { label: 'Input' }]} />

      <h1
        style={{
          fontSize: 28,
          fontWeight: 500,
          letterSpacing: '-0.02em',
          margin: '0 0 8px',
          color: 'var(--text-primary)',
        }}
      >
        Input
      </h1>
      <p style={{ fontSize: 15, color: 'var(--text-secondary)', margin: '0 0 32px' }}>
        Text input built on React Aria's TextField. Supports label, hint text, and error states.
      </p>

      <hr style={{ border: 'none', borderTop: '1px solid var(--border-default)', margin: '0 0 40px' }} />

      <SectionHeader id="default" title="Default" />
      <Preview
        preview={
          <div style={{ width: '100%', maxWidth: 360 }}>
            <Input placeholder="Enter text..." />
          </div>
        }
        code={`import { Input } from '@/components/Input';

<Input placeholder="Enter text..." />`}
      />

      <SectionHeader id="with-label" title="With label" />
      <Preview
        preview={
          <div style={{ width: '100%', maxWidth: 360 }}>
            <Input label="Business name" placeholder="What's your business called?" />
          </div>
        }
        code={`<Input label="Business name" placeholder="What's your business called?" />`}
      />

      <SectionHeader id="with-hint" title="With hint" />
      <Preview
        preview={
          <div style={{ width: '100%', maxWidth: 360 }}>
            <Input
              label="Email"
              placeholder="you@example.com"
              hint="We'll never share your email with anyone."
            />
          </div>
        }
        code={`<Input
  label="Email"
  placeholder="you@example.com"
  hint="We'll never share your email with anyone."
/>`}
      />

      <SectionHeader id="error" title="Error state" />
      <Preview
        preview={
          <div style={{ width: '100%', maxWidth: 360 }}>
            <Input
              label="Email"
              placeholder="you@example.com"
              value="not-an-email"
              isInvalid
              hint="Please enter a valid email address."
            />
          </div>
        }
        code={`<Input
  label="Email"
  placeholder="you@example.com"
  value="not-an-email"
  isInvalid
  hint="Please enter a valid email address."
/>`}
      />

      <SectionHeader id="props" title="Props" />
      <PropsTable props={PROPS} />
    </div>
  );
}
