import { useEffect, useState } from 'react';
import { useDocsContext } from '@/docs/layout/docs-context';
import { Breadcrumb } from '@/docs/layout/breadcrumb';
import { SectionHeader } from '@/docs/components/section-header';
import { Preview } from '@/docs/components/preview';
import { PropsTable } from '@/docs/components/props-table';
import { InstallBlock } from '@/docs/components/install-block';
import { Form } from '@/components/base/form/form';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

const SECTIONS = [
  { id: 'example', label: 'Form example' },
  { id: 'installation', label: 'Installation' },
  { id: 'examples', label: 'Form examples' },
  { id: 'basic-form', label: 'Basic form' },
  { id: 'with-validation', label: 'With validation' },
  { id: 'hook-form', label: 'With react-hook-form' },
  { id: 'props', label: 'Props' },
  { id: 'faqs', label: 'FAQs' },
];

const PROPS = [
  { name: 'onSubmit', type: 'FormEventHandler<HTMLFormElement>', default: '—', description: 'Submit handler — receives the native form event' },
  { name: 'validationErrors', type: 'Record<string, string | string[]>', default: '—', description: 'Server-side validation errors keyed by field name' },
  { name: 'validationBehavior', type: '"native" | "aria"', default: '"aria"', description: 'How validation errors are surfaced to the browser' },
  { name: 'action', type: 'string', default: '—', description: 'URL to submit the form to (native HTML form action)' },
  { name: 'className', type: 'string', default: '—', description: 'Additional CSS classes for the form element' },
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

function BasicFormDemo() {
  const [submitted, setSubmitted] = useState(false);
  return submitted ? (
    <div style={{ fontSize: 14, color: 'var(--text-secondary)' }}>Form submitted!</div>
  ) : (
    <Form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%', maxWidth: 360 }}
    >
      <Input label="Full name" placeholder="Olivia Rhye" />
      <Input label="Email" placeholder="olivia@untitledui.com" />
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
  );
}

function ValidationFormDemo() {
  const [attempted, setAttempted] = useState(false);
  return (
    <Form
      onSubmit={(e) => { e.preventDefault(); setAttempted(true); }}
      style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%', maxWidth: 360 }}
    >
      <Input
        label="Email"
        placeholder="olivia@untitledui.com"
        isInvalid={attempted}
        hint={attempted ? 'Please enter a valid email address.' : undefined}
      />
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
  );
}

export function FormPage() {
  const { setSections } = useDocsContext();

  useEffect(() => {
    setSections(SECTIONS);
    return () => setSections([]);
  }, [setSections]);

  return (
    <div>
      <Breadcrumb items={[{ label: 'Components' }, { label: 'Form' }]} />

      <h1 style={{ fontSize: 28, fontWeight: 500, letterSpacing: '-0.02em', margin: '0 0 8px', color: 'var(--text-primary)' }}>
        Form components
      </h1>
      <p style={{ fontSize: 15, color: 'var(--text-secondary)', margin: '0 0 32px', lineHeight: 1.6, maxWidth: 600 }}>
        React form component built on React Aria's Form primitive, with built-in support for server-side validation and React Hook Form integration.
      </p>

      <hr style={hr} />

      <SectionHeader id="example" title="Form example" />
      <Preview
        preview={<BasicFormDemo />}
        code={`import { Form } from '@/components/base/form/form';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';

<Form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
  <Input label="Full name" placeholder="Olivia Rhye" />
  <Input label="Email" placeholder="olivia@untitledui.com" />
  <Button variant="primary" type="submit">Submit</Button>
</Form>`}
      />

      <hr style={hr} />

      <SectionHeader id="installation" title="Installation" subtitle="Add this component using the CLI or copy it manually." />
      <InstallBlock cliName="form" manualPath="src/components/base/form/form.tsx" />

      <div style={{
        marginBottom: 32,
        padding: '12px 16px',
        borderLeft: '3px solid #15B79E',
        background: 'rgba(21, 183, 158, 0.06)',
        borderRadius: '0 8px 8px 0',
        fontSize: 13,
        color: 'var(--text-secondary)',
        lineHeight: 1.6,
      }}>
        <strong>react-hook-form</strong> is a required peer dependency for the hook-form integration pattern.
        Install it separately: <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>npm install react-hook-form</code>
      </div>

      <hr style={hr} />

      <SectionHeader id="examples" title="Form examples" subtitle="Below are examples and variations of the form component." />

      <SectionHeader id="basic-form" title="Basic form" subtitle="A simple form with name, email, and a submit button." />
      <Preview
        preview={<BasicFormDemo />}
        code={`<Form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 360 }}>
  <Input label="Full name" placeholder="Olivia Rhye" />
  <Input label="Email" placeholder="olivia@untitledui.com" />
  <Button variant="primary" type="submit">Submit</Button>
</Form>`}
      />

      <SectionHeader id="with-validation" title="With validation" subtitle="Show error states on fields when the form is submitted with invalid data." />
      <Preview
        preview={<ValidationFormDemo />}
        code={`function ContactForm() {
  const [attempted, setAttempted] = useState(false);

  return (
    <Form onSubmit={(e) => { e.preventDefault(); setAttempted(true); }}>
      <Input
        label="Email"
        isInvalid={attempted}
        hint={attempted ? 'Please enter a valid email address.' : undefined}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
}`}
      />

      <SectionHeader id="hook-form" title="With react-hook-form" subtitle="Wire any Zinc input to react-hook-form using the Controller component." />
      <Preview
        preview={
          <div style={{ padding: '12px 16px', background: 'var(--bg-subtle)', borderRadius: 8, border: '1px solid var(--border-default)', fontSize: 13, fontFamily: 'var(--font-mono)', color: 'var(--text-primary)', lineHeight: 1.6 }}>
            <pre style={{ margin: 0, overflowX: 'auto' }}>{`import { useForm, Controller } from 'react-hook-form';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';

export function ContactForm() {
  const { control, handleSubmit, formState: { errors } } = useForm();

  return (
    <Form onSubmit={handleSubmit((data) => console.log(data))}>
      <Controller
        name="email"
        control={control}
        rules={{ required: 'Email is required' }}
        render={({ field }) => (
          <Input
            {...field}
            label="Email"
            isInvalid={!!errors.email}
            hint={errors.email?.message as string}
          />
        )}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
}`}</pre>
          </div>
        }
        code={`import { useForm, Controller } from 'react-hook-form';
import { Form } from '@/components/base/form/form';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';

export function ContactForm() {
  const { control, handleSubmit, formState: { errors } } = useForm();

  return (
    <Form onSubmit={handleSubmit((data) => console.log(data))}>
      <Controller
        name="email"
        control={control}
        rules={{ required: 'Email is required' }}
        render={({ field }) => (
          <Input
            {...field}
            label="Email"
            isInvalid={!!errors.email}
            hint={errors.email?.message as string}
          />
        )}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
}`}
      />

      <hr style={hr} />

      <SectionHeader id="props" title="Props" />
      <PropsTable props={PROPS} />

      <hr style={hr} />

      <div id="faqs">
        <SectionHeader id="faqs" title="FAQs" />
        <FaqItem
          q="Do I need to install react-hook-form separately?"
          a="Yes. Run npm install react-hook-form. The Form component itself is a thin wrapper around React Aria's Form and doesn't bundle react-hook-form — it works with any form state management approach."
        />
        <FaqItem
          q="Can I use the Form component without react-hook-form?"
          a="Yes. The Form component accepts a standard onSubmit handler and works with any state management approach — useState, Zustand, or plain uncontrolled inputs. react-hook-form is just the recommended integration pattern."
        />
        <FaqItem
          q="How do I display server-side validation errors?"
          a="Pass an object to the validationErrors prop keyed by field name. React Aria's Form will automatically associate the errors with the matching input fields via ARIA attributes."
        />
      </div>
    </div>
  );
}
