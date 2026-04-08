import { useEffect } from 'react';
import { useDocsContext } from '@/docs/layout/docs-context';
import { Breadcrumb } from '@/docs/layout/breadcrumb';
import { Preview } from '@/docs/components/preview';
import { PropsTable } from '@/docs/components/props-table';
import { SectionHeader } from '@/docs/components/section-header';
import { Button } from '@/components/Button';
import { CloseButton } from '@/components/base/buttons/close-button';
import { ButtonUtility } from '@/components/base/buttons/button-utility';
import { SocialButton } from '@/components/base/buttons/social-button';
import { AppStoreButton, GooglePlayButton } from '@/components/base/buttons/app-store-buttons';
import { Copy01, Settings01, Trash01 } from '@untitledui/icons';

const SECTIONS = [
  { id: 'examples', label: 'Examples' },
  { id: 'primary', label: 'Primary' },
  { id: 'secondary', label: 'Secondary' },
  { id: 'ghost', label: 'Ghost' },
  { id: 'accent', label: 'Accent' },
  { id: 'sizes', label: 'Sizes' },
  { id: 'disabled', label: 'Disabled' },
  { id: 'props', label: 'Props' },
  { id: 'close-button', label: 'Close button' },
  { id: 'utility-button', label: 'Utility button' },
  { id: 'social-buttons', label: 'Social buttons' },
  { id: 'app-store-buttons', label: 'App store buttons' },
];

const PROPS = [
  { name: 'variant', type: '"primary" | "secondary" | "ghost" | "accent"', default: '"primary"', description: 'Visual style of the button' },
  { name: 'size', type: '"sm" | "md" | "lg" | "xl"', default: '"md"', description: 'Size of the button' },
  { name: 'fullWidth', type: 'boolean', default: 'false', description: 'Stretches button to full container width' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables interaction and reduces opacity' },
  { name: 'onClick', type: '() => void', default: '—', description: 'Click handler' },
  { name: 'className', type: 'string', default: '""', description: 'Additional CSS classes' },
];

export function ButtonPage() {
  const { setSections } = useDocsContext();

  useEffect(() => {
    setSections(SECTIONS);
    return () => setSections([]);
  }, [setSections]);

  return (
    <div>
      <Breadcrumb items={[{ label: 'Components' }, { label: 'Button' }]} />

      <h1
        style={{
          fontSize: 28,
          fontWeight: 500,
          letterSpacing: '-0.02em',
          margin: '0 0 8px',
          color: 'var(--text-primary)',
        }}
      >
        Button
      </h1>
      <p style={{ fontSize: 15, color: 'var(--text-secondary)', margin: '0 0 32px' }}>
        Fully rounded buttons built with React Aria. Four variants, four sizes.
      </p>

      <hr style={{ border: 'none', borderTop: '1px solid var(--border-default)', margin: '0 0 40px' }} />

      <SectionHeader id="examples" title="Examples" />
      <Preview
        preview={
          <>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="accent">Accent</Button>
          </>
        }
        code={`import { Button } from '@/components/Button';

<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="accent">Accent</Button>`}
      />

      <SectionHeader id="primary" title="Primary" />
      <Preview
        preview={<Button variant="primary">Save changes</Button>}
        code={`<Button variant="primary">Save changes</Button>`}
      />

      <SectionHeader id="secondary" title="Secondary" />
      <Preview
        preview={<Button variant="secondary">Cancel</Button>}
        code={`<Button variant="secondary">Cancel</Button>`}
      />

      <SectionHeader id="ghost" title="Ghost" />
      <Preview
        preview={<Button variant="ghost">Learn more</Button>}
        code={`<Button variant="ghost">Learn more</Button>`}
      />

      <SectionHeader id="accent" title="Accent" />
      <Preview
        preview={<Button variant="accent">Get started</Button>}
        code={`<Button variant="accent">Get started</Button>`}
      />

      <SectionHeader id="sizes" title="Sizes" />
      <Preview
        preview={
          <>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra large</Button>
          </>
        }
        code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra large</Button>`}
      />

      <SectionHeader id="disabled" title="Disabled" />
      <Preview
        preview={
          <>
            <Button variant="primary" disabled>Disabled</Button>
            <Button variant="secondary" disabled>Disabled</Button>
            <Button variant="ghost" disabled>Disabled</Button>
          </>
        }
        code={`<Button variant="primary" disabled>Disabled</Button>
<Button variant="secondary" disabled>Disabled</Button>
<Button variant="ghost" disabled>Disabled</Button>`}
      />

      <SectionHeader id="props" title="Props" />
      <PropsTable props={PROPS} />

      <hr style={{ border: 'none', borderTop: '1px dotted var(--border-default)', margin: '48px 0' }} />

      <SectionHeader id="close-button" title="Close button" subtitle="A small icon button used to dismiss modals, alerts, and overlay elements." />
      <Preview
        preview={
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
            <CloseButton size="xs" />
            <CloseButton size="sm" />
            <CloseButton size="md" />
            <CloseButton size="lg" />
          </div>
        }
        code={`import { CloseButton } from '@/components/base/buttons/close-button';

{/* Sizes: xs | sm | md | lg */}
<CloseButton size="xs" />
<CloseButton size="sm" />
<CloseButton size="md" />
<CloseButton size="lg" />`}
      />

      <SectionHeader id="close-button-theme" title="Close button — dark theme" />
      <Preview
        preview={
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '16px 20px', background: 'var(--bg-brand-solid)', borderRadius: 12 }}>
            <CloseButton size="sm" theme="dark" />
            <CloseButton size="md" theme="dark" />
          </div>
        }
        code={`{/* Use theme="dark" on solid/brand backgrounds */}
<CloseButton size="md" theme="dark" />`}
      />

      <hr style={{ border: 'none', borderTop: '1px dotted var(--border-default)', margin: '48px 0' }} />

      <SectionHeader id="utility-button" title="Utility button" subtitle="Icon-only buttons for compact actions. Use in toolbars, table rows, and tight UI spaces." />
      <Preview
        preview={
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
            <ButtonUtility icon={Copy01} tooltip="Copy" />
            <ButtonUtility icon={Settings01} tooltip="Settings" />
            <ButtonUtility icon={Trash01} tooltip="Delete" />
          </div>
        }
        code={`import { ButtonUtility } from '@/components/base/buttons/button-utility';
import { Copy01, Settings01, Trash01 } from '@untitledui/icons';

<ButtonUtility icon={Copy01} tooltip="Copy" />
<ButtonUtility icon={Settings01} tooltip="Settings" />
<ButtonUtility icon={Trash01} tooltip="Delete" />`}
      />

      <SectionHeader id="utility-button-variants" title="Utility button — colors and sizes" />
      <Preview
        preview={
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
            <ButtonUtility icon={Settings01} color="secondary" size="sm" tooltip="Secondary sm" />
            <ButtonUtility icon={Settings01} color="tertiary" size="sm" tooltip="Tertiary sm" />
            <ButtonUtility icon={Settings01} color="secondary" size="xs" tooltip="Secondary xs" />
            <ButtonUtility icon={Settings01} color="tertiary" size="xs" tooltip="Tertiary xs" />
          </div>
        }
        code={`{/* color: "secondary" | "tertiary"  •  size: "sm" | "xs" */}
<ButtonUtility icon={Settings01} color="secondary" size="sm" />
<ButtonUtility icon={Settings01} color="tertiary" size="sm" />
<ButtonUtility icon={Settings01} color="secondary" size="xs" />
<ButtonUtility icon={Settings01} color="tertiary" size="xs" />`}
      />

      <hr style={{ border: 'none', borderTop: '1px dotted var(--border-default)', margin: '48px 0' }} />

      <SectionHeader id="social-buttons" title="Social buttons" subtitle="Pre-styled buttons for social authentication flows. Supports Google, Apple, Twitter/X, Facebook, Figma, and Dribble." />
      <Preview
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 360, width: '100%' }}>
            <SocialButton social="google">Continue with Google</SocialButton>
            <SocialButton social="apple">Continue with Apple</SocialButton>
            <SocialButton social="facebook">Continue with Facebook</SocialButton>
          </div>
        }
        code={`import { SocialButton } from '@/components/base/buttons/social-button';

<SocialButton social="google">Continue with Google</SocialButton>
<SocialButton social="apple">Continue with Apple</SocialButton>
<SocialButton social="facebook">Continue with Facebook</SocialButton>`}
      />

      <SectionHeader id="social-buttons-icon-only" title="Social buttons — icon only" />
      <Preview
        preview={
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <SocialButton social="google" />
            <SocialButton social="apple" />
            <SocialButton social="twitter" />
            <SocialButton social="figma" />
            <SocialButton social="dribble" />
          </div>
        }
        code={`{/* Icon-only: no children */}
<SocialButton social="google" />
<SocialButton social="apple" />
<SocialButton social="twitter" />
<SocialButton social="figma" />
<SocialButton social="dribble" />`}
      />

      <hr style={{ border: 'none', borderTop: '1px dotted var(--border-default)', margin: '48px 0' }} />

      <SectionHeader id="app-store-buttons" title="App store buttons" subtitle="Standard App Store and Google Play download badges." />
      <Preview
        preview={
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            <AppStoreButton />
            <GooglePlayButton />
          </div>
        }
        code={`import { AppStoreButton, GooglePlayButton } from '@/components/base/buttons/app-store-buttons';

<AppStoreButton />
<GooglePlayButton />`}
      />

      <SectionHeader id="app-store-buttons-lg" title="App store buttons — large" />
      <Preview
        preview={
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            <AppStoreButton size="lg" />
            <GooglePlayButton size="lg" />
          </div>
        }
        code={`<AppStoreButton size="lg" />
<GooglePlayButton size="lg" />`}
      />
    </div>
  );
}
