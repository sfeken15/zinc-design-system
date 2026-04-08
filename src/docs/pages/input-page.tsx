import { useEffect } from 'react';
import { useDocsContext } from '@/docs/layout/docs-context';
import { Breadcrumb } from '@/docs/layout/breadcrumb';
import { Preview } from '@/docs/components/preview';
import { PropsTable } from '@/docs/components/props-table';
import { SectionHeader } from '@/docs/components/section-header';
import { Input } from '@/components/Input';
import { InputDate } from '@/components/base/input/input-date';
import { InputNumber } from '@/components/base/input/input-number';
import { PaymentInput } from '@/components/base/input/input-payment';
import { InputTags } from '@/components/base/input/input-tags';
import { PinInput } from '@/components/base/input/pin-input';
import { InputGroup, InputPrefix } from '@/components/base/input/input-group';
import { InputBase } from '@/components/base/input/input';
import { InputFile } from '@/components/base/input/input-file';
import { Button as UiButton } from '@/components/base/buttons/button';

const SECTIONS = [
  { id: 'default', label: 'Default' },
  { id: 'with-label', label: 'With label' },
  { id: 'with-hint', label: 'With hint' },
  { id: 'error', label: 'Error state' },
  { id: 'props', label: 'Props' },
  { id: 'date-input', label: 'Date input' },
  { id: 'number-input', label: 'Number input' },
  { id: 'payment-input', label: 'Payment input' },
  { id: 'tags-input', label: 'Tags input' },
  { id: 'pin-input', label: 'Pin input' },
  { id: 'input-group', label: 'Input group' },
  { id: 'file-input', label: 'File input' },
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

      <hr style={{ border: 'none', borderTop: '1px dotted var(--border-default)', margin: '48px 0' }} />

      <SectionHeader id="date-input" title="Date input" subtitle="A date field built on React Aria's DateField. Full keyboard and screen reader support." />
      <Preview
        preview={
          <div style={{ width: '100%', maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <InputDate label="Date of birth" placeholder="MM/DD/YYYY" />
            <InputDate label="Expiry date" isDisabled placeholder="MM/DD/YYYY" />
            <InputDate label="Start date" isInvalid hint="Please select a valid date." placeholder="MM/DD/YYYY" />
          </div>
        }
        code={`import { InputDate } from '@/components/base/input/input-date';

<InputDate label="Date of birth" placeholder="MM/DD/YYYY" />

{/* Disabled */}
<InputDate label="Expiry date" isDisabled placeholder="MM/DD/YYYY" />

{/* Error state */}
<InputDate label="Start date" isInvalid hint="Please select a valid date." />`}
      />

      <hr style={{ border: 'none', borderTop: '1px dotted var(--border-default)', margin: '48px 0' }} />

      <SectionHeader id="number-input" title="Number input" subtitle="A numeric input with increment/decrement controls. Supports min, max, and step constraints." />
      <Preview
        preview={
          <div style={{ width: '100%', maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <InputNumber label="Quantity" defaultValue={1} minValue={0} maxValue={100} step={1} />
            <InputNumber label="Quantity (horizontal)" defaultValue={5} minValue={0} orientation="horizontal" />
          </div>
        }
        code={`import { InputNumber } from '@/components/base/input/input-number';

<InputNumber label="Quantity" defaultValue={1} minValue={0} maxValue={100} step={1} />

{/* Horizontal stepper */}
<InputNumber label="Quantity" defaultValue={5} orientation="horizontal" />`}
      />

      <hr style={{ border: 'none', borderTop: '1px dotted var(--border-default)', margin: '48px 0' }} />

      <SectionHeader id="payment-input" title="Payment input" subtitle="A credit/debit card number input with automatic card type detection and formatted display." />
      <Preview
        preview={
          <div style={{ width: '100%', maxWidth: 360 }}>
            <PaymentInput label="Card number" placeholder="1234 5678 9012 3456" />
          </div>
        }
        code={`import { PaymentInput } from '@/components/base/input/input-payment';

<PaymentInput label="Card number" placeholder="1234 5678 9012 3456" />`}
      />

      <hr style={{ border: 'none', borderTop: '1px dotted var(--border-default)', margin: '48px 0' }} />

      <SectionHeader id="tags-input" title="Tags input" subtitle="An input that converts typed values into removable tag pills. Press Enter or comma to create a tag." />
      <Preview
        preview={
          <div style={{ width: '100%', maxWidth: 400 }}>
            <InputTags
              label="Technologies"
              placeholder="Add a tag..."
              defaultValue={['React', 'TypeScript']}
            />
          </div>
        }
        code={`import { InputTags } from '@/components/base/input/input-tags';

<InputTags
  label="Technologies"
  placeholder="Add a tag..."
  defaultValue={['React', 'TypeScript']}
/>`}
      />

      <hr style={{ border: 'none', borderTop: '1px dotted var(--border-default)', margin: '48px 0' }} />

      <SectionHeader id="pin-input" title="Pin input" subtitle="A segmented input for PINs, OTPs, and verification codes. Each digit gets its own focused cell." />
      <Preview
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <PinInput size="xxxs">
              <PinInput.Label>4-digit PIN</PinInput.Label>
              <PinInput.Group maxLength={4}>
                <PinInput.Slot index={0} />
                <PinInput.Slot index={1} />
                <PinInput.Slot index={2} />
                <PinInput.Slot index={3} />
              </PinInput.Group>
            </PinInput>
            <PinInput size="xxxs">
              <PinInput.Label>6-digit verification code</PinInput.Label>
              <PinInput.Group maxLength={6}>
                <PinInput.Slot index={0} />
                <PinInput.Slot index={1} />
                <PinInput.Slot index={2} />
                <PinInput.Separator />
                <PinInput.Slot index={3} />
                <PinInput.Slot index={4} />
                <PinInput.Slot index={5} />
              </PinInput.Group>
              <PinInput.Description>Check your email for the code.</PinInput.Description>
            </PinInput>
          </div>
        }
        code={`import { PinInput } from '@/components/base/input/pin-input';

{/* 4-digit */}
<PinInput size="xxxs">
  <PinInput.Label>4-digit PIN</PinInput.Label>
  <PinInput.Group maxLength={4}>
    <PinInput.Slot index={0} />
    <PinInput.Slot index={1} />
    <PinInput.Slot index={2} />
    <PinInput.Slot index={3} />
  </PinInput.Group>
</PinInput>

{/* 6-digit with separator */}
<PinInput size="xxxs">
  <PinInput.Label>Verification code</PinInput.Label>
  <PinInput.Group maxLength={6}>
    <PinInput.Slot index={0} />
    <PinInput.Slot index={1} />
    <PinInput.Slot index={2} />
    <PinInput.Separator />
    <PinInput.Slot index={3} />
    <PinInput.Slot index={4} />
    <PinInput.Slot index={5} />
  </PinInput.Group>
  <PinInput.Description>Check your email for the code.</PinInput.Description>
</PinInput>`}
      />

      <hr style={{ border: 'none', borderTop: '1px dotted var(--border-default)', margin: '48px 0' }} />

      <SectionHeader id="input-group" title="Input group" subtitle="Combine an input with leading or trailing addons — text, buttons, or dropdowns." />
      <Preview
        preview={
          <div style={{ width: '100%', maxWidth: 400, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <InputGroup label="Website" leadingAddon={<InputPrefix>https://</InputPrefix>}>
              <InputBase placeholder="yoursite.com" />
            </InputGroup>
            <InputGroup label="Amount" leadingAddon={<InputPrefix>$</InputPrefix>} trailingAddon={<InputPrefix position="trailing">USD</InputPrefix>}>
              <InputBase type="number" placeholder="0.00" />
            </InputGroup>
            <InputGroup label="Promo code" trailingAddon={<UiButton size="sm" color="secondary">Apply</UiButton>}>
              <InputBase placeholder="SUMMER2024" />
            </InputGroup>
          </div>
        }
        code={`import { InputGroup, InputPrefix } from '@/components/base/input/input-group';
import { InputBase } from '@/components/base/input/input';

{/* Leading text addon */}
<InputGroup label="Website" leadingAddon={<InputPrefix>https://</InputPrefix>}>
  <InputBase placeholder="yoursite.com" />
</InputGroup>

{/* Both addons */}
<InputGroup label="Amount"
  leadingAddon={<InputPrefix>$</InputPrefix>}
  trailingAddon={<InputPrefix position="trailing">USD</InputPrefix>}
>
  <InputBase type="number" placeholder="0.00" />
</InputGroup>

{/* Trailing button */}
<InputGroup label="Promo code" trailingAddon={<Button size="sm" color="secondary">Apply</Button>}>
  <InputBase placeholder="SUMMER2024" />
</InputGroup>`}
      />

      <hr style={{ border: 'none', borderTop: '1px dotted var(--border-default)', margin: '48px 0' }} />

      <SectionHeader id="file-input" title="File input" subtitle="A styled file input field with upload button. For a dropzone experience, see the File upload component." />
      <Preview
        preview={
          <div style={{ width: '100%', maxWidth: 400, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <InputFile label="Upload document" placeholder="No file chosen" />
            <InputFile label="Profile photo" acceptedFileTypes={['.jpg', '.png', '.webp']} placeholder="No file chosen" />
            <InputFile label="Attachments" allowsMultiple buttonText="Browse" placeholder="No files chosen" />
          </div>
        }
        code={`import { InputFile } from '@/components/base/input/input-file';

<InputFile label="Upload document" placeholder="No file chosen" />

{/* Restrict file types */}
<InputFile
  label="Profile photo"
  acceptedFileTypes={['.jpg', '.png', '.webp']}
/>

{/* Multiple files */}
<InputFile label="Attachments" allowsMultiple buttonText="Browse" />`}
      />
    </div>
  );
}
