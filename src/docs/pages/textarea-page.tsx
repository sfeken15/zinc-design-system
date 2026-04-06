import { useEffect, useState } from 'react';
import { useDocsContext } from '@/docs/layout/docs-context';
import { Breadcrumb } from '@/docs/layout/breadcrumb';
import { Preview } from '@/docs/components/preview';
import { PropsTable } from '@/docs/components/props-table';
import { SectionHeader } from '@/docs/components/section-header';
import { TextArea as Textarea } from '@/components/Textarea';

const SECTIONS = [
  { id: 'default', label: 'Default' },
  { id: 'with-label', label: 'With label' },
  { id: 'character-count', label: 'Character count' },
  { id: 'error', label: 'Error state' },
  { id: 'props', label: 'Props' },
];

const PROPS = [
  { name: 'label', type: 'string', default: '—', description: 'Field label displayed above the textarea' },
  { name: 'placeholder', type: 'string', default: '—', description: 'Placeholder text' },
  { name: 'hint', type: 'string', default: '—', description: 'Helper text below the textarea' },
  { name: 'isInvalid', type: 'boolean', default: 'false', description: 'Marks the textarea as invalid' },
  { name: 'value', type: 'string', default: '—', description: 'Controlled value' },
  { name: 'onChange', type: '(value: string) => void', default: '—', description: 'Change handler' },
  { name: 'rows', type: 'number', default: '—', description: 'Number of visible text rows' },
];

function CountedTextarea() {
  const [val, setVal] = useState('');
  return (
    <div style={{ width: '100%', maxWidth: 400 }}>
      <Textarea
        label="Description"
        placeholder="Describe your project..."
        value={val}
        onChange={setVal}
        rows={3}
        hint={`${val.length}/200 characters`}
      />
    </div>
  );
}

export function TextareaPage() {
  const { setSections } = useDocsContext();

  useEffect(() => {
    setSections(SECTIONS);
    return () => setSections([]);
  }, [setSections]);

  return (
    <div>
      <Breadcrumb items={[{ label: 'Components' }, { label: 'Textarea' }]} />

      <h1
        style={{
          fontSize: 28,
          fontWeight: 500,
          letterSpacing: '-0.02em',
          margin: '0 0 8px',
          color: 'var(--text-primary)',
        }}
      >
        Textarea
      </h1>
      <p style={{ fontSize: 15, color: 'var(--text-secondary)', margin: '0 0 32px' }}>
        Multi-line text input with optional label, hint, character count, and error states.
      </p>

      <hr style={{ border: 'none', borderTop: '1px solid var(--border-default)', margin: '0 0 40px' }} />

      <SectionHeader id="default" title="Default" />
      <Preview
        preview={
          <div style={{ width: '100%', maxWidth: 400 }}>
            <Textarea placeholder="Enter your message..." />
          </div>
        }
        code={`import { Textarea } from '@/components/Textarea';

<Textarea placeholder="Enter your message..." />`}
      />

      <SectionHeader id="with-label" title="With label" />
      <Preview
        preview={
          <div style={{ width: '100%', maxWidth: 400 }}>
            <Textarea
              label="Message"
              placeholder="Tell us more..."
              hint="Be as specific as possible."
            />
          </div>
        }
        code={`<Textarea
  label="Message"
  placeholder="Tell us more..."
  hint="Be as specific as possible."
/>`}
      />

      <SectionHeader id="character-count" title="Character count" />
      <Preview
        preview={<CountedTextarea />}
        code={`const [val, setVal] = useState('');

<Textarea
  label="Description"
  placeholder="Describe your project..."
  value={val}
  onChange={setVal}
  rows={3}
  hint={\`\${val.length}/200 characters\`}
/>`}
      />

      <SectionHeader id="error" title="Error state" />
      <Preview
        preview={
          <div style={{ width: '100%', maxWidth: 400 }}>
            <Textarea
              label="Bio"
              placeholder="Tell us about yourself..."
              isInvalid
              hint="Bio is required."
            />
          </div>
        }
        code={`<Textarea
  label="Bio"
  placeholder="Tell us about yourself..."
  isInvalid
  hint="Bio is required."
/>`}
      />

      <SectionHeader id="props" title="Props" />
      <PropsTable props={PROPS} />
    </div>
  );
}
