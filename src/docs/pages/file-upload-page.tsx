import { useEffect } from 'react';
import { useDocsContext } from '@/docs/layout/docs-context';
import { Breadcrumb } from '@/docs/layout/breadcrumb';
import { SectionHeader } from '@/docs/components/section-header';
import { Preview } from '@/docs/components/preview';
import { PropsTable } from '@/docs/components/props-table';
import { InstallBlock } from '@/docs/components/install-block';
import { FileTrigger } from '@/components/base/file-upload-trigger/file-upload-trigger';
import { Button } from '@/components/Button';

const SECTIONS = [
  { id: 'example', label: 'File upload example' },
  { id: 'installation', label: 'Installation' },
  { id: 'examples', label: 'File upload examples' },
  { id: 'button-trigger', label: 'Button trigger' },
  { id: 'multiple-files', label: 'Multiple files' },
  { id: 'file-type-restriction', label: 'File type restriction' },
  { id: 'directory', label: 'Directory upload' },
  { id: 'props', label: 'Props' },
  { id: 'faqs', label: 'FAQs' },
];

const PROPS = [
  { name: 'children', type: 'ReactNode', default: '—', description: 'The trigger element (button, link, or custom element)' },
  { name: 'onSelect', type: '(files: FileList | null) => void', default: '—', description: 'Called when the user selects files' },
  { name: 'acceptedFileTypes', type: 'string[]', default: '—', description: 'MIME types to accept, e.g. ["image/png", "image/jpeg"]' },
  { name: 'allowsMultiple', type: 'boolean', default: 'false', description: 'Allow selecting multiple files at once' },
  { name: 'acceptDirectory', type: 'boolean', default: 'false', description: 'Allow selecting a folder instead of individual files' },
  { name: 'defaultCamera', type: '"user" | "environment"', default: '—', description: 'Opens front or rear camera on mobile devices' },
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

export function FileUploadPage() {
  const { setSections } = useDocsContext();

  useEffect(() => {
    setSections(SECTIONS);
    return () => setSections([]);
  }, [setSections]);

  return (
    <div>
      <Breadcrumb items={[{ label: 'Components' }, { label: 'File upload' }]} />

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
        <h1 style={{ fontSize: 28, fontWeight: 500, letterSpacing: '-0.02em', margin: 0, color: 'var(--text-primary)' }}>
          File upload trigger
        </h1>
        <span style={{ fontSize: 11, fontWeight: 600, padding: '2px 8px', borderRadius: 20, border: '1px solid var(--border-default)', color: 'var(--text-tertiary)', letterSpacing: '0.04em' }}>
          FREE
        </span>
      </div>
      <p style={{ fontSize: 15, color: 'var(--text-secondary)', margin: '0 0 32px', lineHeight: 1.6, maxWidth: 600 }}>
        A trigger component for file upload interactions. Wraps any pressable element with a hidden file input — no drag-and-drop library needed.
      </p>

      <hr style={hr} />

      <SectionHeader id="example" title="File upload example" />
      <Preview
        preview={
          <FileTrigger onSelect={(files) => console.log(files)}>
            <Button variant="secondary">Upload file</Button>
          </FileTrigger>
        }
        code={`import { FileTrigger } from '@/components/base/file-upload-trigger/file-upload-trigger';
import { Button } from '@/components/Button';

<FileTrigger onSelect={(files) => console.log(files)}>
  <Button variant="secondary">Upload file</Button>
</FileTrigger>`}
      />

      <hr style={hr} />

      <SectionHeader id="installation" title="Installation" subtitle="Add this component using the CLI or copy it manually." />
      <InstallBlock cliName="file-upload-trigger" manualPath="src/components/base/file-upload-trigger/file-upload-trigger.tsx" />

      <hr style={hr} />

      <SectionHeader id="examples" title="File upload examples" subtitle="Below are examples and variations of the file upload trigger." />

      <SectionHeader id="button-trigger" title="Button trigger" subtitle="Wrap any button variant to open the native file picker." />
      <Preview
        preview={
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <FileTrigger onSelect={(files) => console.log(files)}>
              <Button variant="primary">Upload</Button>
            </FileTrigger>
            <FileTrigger onSelect={(files) => console.log(files)}>
              <Button variant="secondary">Choose file</Button>
            </FileTrigger>
            <FileTrigger onSelect={(files) => console.log(files)}>
              <Button variant="ghost">Browse…</Button>
            </FileTrigger>
          </div>
        }
        code={`<FileTrigger onSelect={(files) => console.log(files)}>
  <Button variant="primary">Upload</Button>
</FileTrigger>

<FileTrigger onSelect={(files) => console.log(files)}>
  <Button variant="secondary">Choose file</Button>
</FileTrigger>

<FileTrigger onSelect={(files) => console.log(files)}>
  <Button variant="ghost">Browse…</Button>
</FileTrigger>`}
      />

      <SectionHeader id="multiple-files" title="Multiple files" subtitle="Allow the user to select more than one file at once." />
      <Preview
        preview={
          <FileTrigger allowsMultiple onSelect={(files) => console.log(files)}>
            <Button variant="secondary">Select multiple files</Button>
          </FileTrigger>
        }
        code={`<FileTrigger allowsMultiple onSelect={(files) => console.log(files)}>
  <Button variant="secondary">Select multiple files</Button>
</FileTrigger>`}
      />

      <SectionHeader id="file-type-restriction" title="File type restriction" subtitle="Restrict the file picker to specific MIME types." />
      <Preview
        preview={
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <FileTrigger acceptedFileTypes={['image/png', 'image/jpeg', 'image/webp']} onSelect={(files) => console.log(files)}>
              <Button variant="secondary">Images only</Button>
            </FileTrigger>
            <FileTrigger acceptedFileTypes={['application/pdf']} onSelect={(files) => console.log(files)}>
              <Button variant="secondary">PDF only</Button>
            </FileTrigger>
          </div>
        }
        code={`<FileTrigger
  acceptedFileTypes={['image/png', 'image/jpeg', 'image/webp']}
  onSelect={(files) => console.log(files)}
>
  <Button variant="secondary">Images only</Button>
</FileTrigger>

<FileTrigger
  acceptedFileTypes={['application/pdf']}
  onSelect={(files) => console.log(files)}
>
  <Button variant="secondary">PDF only</Button>
</FileTrigger>`}
      />

      <SectionHeader id="directory" title="Directory upload" subtitle="Let the user pick an entire folder instead of individual files." />
      <Preview
        preview={
          <FileTrigger acceptDirectory onSelect={(files) => console.log(files)}>
            <Button variant="secondary">Upload folder</Button>
          </FileTrigger>
        }
        code={`<FileTrigger acceptDirectory onSelect={(files) => console.log(files)}>
  <Button variant="secondary">Upload folder</Button>
</FileTrigger>`}
      />

      <hr style={hr} />

      <SectionHeader id="props" title="Props" />
      <PropsTable props={PROPS} />

      <hr style={hr} />

      <div id="faqs">
        <SectionHeader id="faqs" title="FAQs" />
        <FaqItem
          q="How do I handle the selected file?"
          a="The onSelect prop receives the FileList from the input. Access individual files via files[0] or Array.from(files) to process them. You can then upload via fetch, axios, or any HTTP client."
        />
        <FaqItem
          q="Does this component handle uploading?"
          a="No — FileTrigger handles file selection UI only. You provide the upload logic in your onSelect handler. This keeps the component decoupled from any specific HTTP client or storage service."
        />
        <FaqItem
          q="Can I style the trigger element?"
          a="Yes. The FileTrigger passes an onClick handler to its single child, so any pressable element works — buttons, links, divs with onClick, or custom components built with React Aria's usePress."
        />
      </div>
    </div>
  );
}
