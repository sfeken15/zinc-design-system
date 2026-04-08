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
import {
  Plus,
  Download01,
  Upload01,
  ArrowRight,
  Settings01,
  DotsHorizontal,
  Copy01,
  Trash01,
} from '@untitledui/icons';

const SECTIONS = [
  { id: 'example', label: 'Button example' },
  { id: 'installation', label: 'Installation' },
  { id: 'variants', label: 'Variants' },
  { id: 'primary', label: 'Primary buttons' },
  { id: 'secondary', label: 'Secondary buttons' },
  { id: 'ghost', label: 'Ghost buttons' },
  { id: 'accent', label: 'Accent buttons' },
  { id: 'sizes', label: 'Sizes' },
  { id: 'icon-leading', label: 'Icon leading' },
  { id: 'icon-trailing', label: 'Icon trailing' },
  { id: 'icon-only', label: 'Icon only' },
  { id: 'loading', label: 'Loading' },
  { id: 'disabled', label: 'Disabled' },
  { id: 'full-width', label: 'Full width' },
  { id: 'props', label: 'Props' },
  { id: 'close-button', label: 'Close button' },
  { id: 'utility-button', label: 'Utility button' },
  { id: 'social-buttons', label: 'Social buttons' },
  { id: 'app-store-buttons', label: 'App store buttons' },
];

const PROPS = [
  { name: 'variant', type: '"primary" | "secondary" | "ghost" | "accent"', default: '"primary"', description: 'Visual style of the button' },
  { name: 'size', type: '"sm" | "md" | "lg" | "xl"', default: '"md"', description: 'Size of the button' },
  { name: 'fullWidth', type: 'boolean', default: 'false', description: 'Stretches button to fill its container' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables interaction' },
  { name: 'onClick', type: '() => void', default: '—', description: 'Click handler' },
  { name: 'className', type: 'string', default: '""', description: 'Additional CSS classes' },
  { name: 'children', type: 'ReactNode', default: '—', description: 'Button label and/or icon' },
];

const variantCards = [
  { variant: 'primary' as const, label: 'Primary', description: 'Highest emphasis. Main action on any screen.' },
  { variant: 'secondary' as const, label: 'Secondary', description: 'Supporting action. Sits alongside a primary.' },
  { variant: 'ghost' as const, label: 'Ghost', description: 'Lowest emphasis. Navigation or cancel actions.' },
  { variant: 'accent' as const, label: 'Accent', description: 'Brand-colored action. Use sparingly for impact.' },
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
        Button components
      </h1>
      <p style={{ fontSize: 15, color: 'var(--text-secondary)', margin: '0 0 8px' }}>
        Buttons trigger actions and navigation. Four variants cover the full range of emphasis —
        from primary CTAs to subtle ghost actions.
      </p>
      <a
        href="https://github.com/sfeken15/zinc-design-system/blob/main/src/components/Button.tsx"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          fontSize: 12,
          fontWeight: 500,
          color: 'var(--text-tertiary)',
          textDecoration: 'none',
          border: '1px solid var(--border-default)',
          borderRadius: 6,
          padding: '3px 10px',
          marginBottom: 32,
        }}
      >
        GitHub — src/components/Button.tsx
      </a>

      <hr style={{ border: 'none', borderTop: '1px solid var(--border-default)', margin: '0 0 40px' }} />

      {/* ------------------------------------------------------------------ */}
      <SectionHeader id="example" title="Button example" />
      <Preview
        preview={
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', justifyContent: 'center' }}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="accent">Accent</Button>
          </div>
        }
        code={`import { Button } from '@/components/Button';

<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="accent">Accent</Button>`}
      />

      {/* ------------------------------------------------------------------ */}
      <SectionHeader id="installation" title="Installation" />
      <div
        style={{
          background: 'var(--bg-subtle)',
          border: '1px solid var(--border-default)',
          borderRadius: 8,
          padding: '16px 20px',
          fontFamily: 'var(--font-mono)',
          fontSize: 13,
          color: 'var(--text-primary)',
          marginBottom: 32,
        }}
      >
        import {'{ Button }'} from '@/components/Button';
      </div>

      {/* ------------------------------------------------------------------ */}
      <SectionHeader
        id="variants"
        title="Variants"
        subtitle="Four variants provide a clear hierarchy of emphasis. Use primary for the main CTA on a page, secondary for supporting actions, ghost for tertiary actions, and accent to highlight brand-colored actions."
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 12,
          marginBottom: 40,
        }}
      >
        {variantCards.map(({ variant, label, description }) => (
          <div
            key={variant}
            style={{
              border: '1px solid var(--border-default)',
              borderRadius: 10,
              padding: 20,
              background: 'var(--bg-surface)',
            }}
          >
            <div style={{ marginBottom: 12 }}>
              <Button variant={variant} size="sm">{label}</Button>
            </div>
            <p style={{ fontSize: 13, color: 'var(--text-secondary)', margin: 0 }}>{description}</p>
          </div>
        ))}
      </div>

      {/* ------------------------------------------------------------------ */}
      <SectionHeader
        id="primary"
        title="Primary buttons"
        subtitle="The primary button uses maximum contrast — black on light mode, white on dark mode — for the main action on any screen. Use one primary button per section."
      />
      <Preview
        title="Primary"
        preview={<Button variant="primary">Save changes</Button>}
        code={`<Button variant="primary">Save changes</Button>`}
      />
      <Preview
        title="Primary sizes"
        preview={
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary" size="md">Medium</Button>
            <Button variant="primary" size="lg">Large</Button>
            <Button variant="primary" size="xl">Extra large</Button>
          </div>
        }
        code={`<Button variant="primary" size="sm">Small</Button>
<Button variant="primary" size="md">Medium</Button>
<Button variant="primary" size="lg">Large</Button>
<Button variant="primary" size="xl">Extra large</Button>`}
      />

      {/* ------------------------------------------------------------------ */}
      <SectionHeader
        id="secondary"
        title="Secondary buttons"
        subtitle="Secondary buttons use a muted surface — zinc-100 in light mode, zinc-800 in dark mode — for supporting actions that sit alongside a primary."
      />
      <Preview
        title="Secondary"
        preview={<Button variant="secondary">Cancel</Button>}
        code={`<Button variant="secondary">Cancel</Button>`}
      />
      <Preview
        title="Primary + Secondary pairing"
        preview={
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <Button variant="primary">Save changes</Button>
            <Button variant="secondary">Cancel</Button>
          </div>
        }
        code={`<Button variant="primary">Save changes</Button>
<Button variant="secondary">Cancel</Button>`}
      />

      {/* ------------------------------------------------------------------ */}
      <SectionHeader
        id="ghost"
        title="Ghost buttons"
        subtitle={`Ghost buttons have no fill — only text and a subtle border. Use for the lowest-emphasis actions: navigation links, "learn more", or tertiary choices.`}
      />
      <Preview
        title="Ghost"
        preview={<Button variant="ghost">Learn more</Button>}
        code={`<Button variant="ghost">Learn more</Button>`}
      />
      <Preview
        title="Ghost in a navigation context"
        preview={
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <Button variant="primary">Get started</Button>
            <Button variant="ghost">View demo</Button>
          </div>
        }
        code={`<Button variant="primary">Get started</Button>
<Button variant="ghost">View demo</Button>`}
      />

      {/* ------------------------------------------------------------------ */}
      <SectionHeader
        id="accent"
        title="Accent buttons"
        subtitle="Accent buttons use the Graffiti teal brand color — darker teal in light mode, brighter teal in dark mode. Use for brand-highlighted CTAs like explore, discover, or feature actions."
      />
      <Preview
        title="Accent"
        preview={<Button variant="accent">Explore Joplin</Button>}
        code={`<Button variant="accent">Explore Joplin</Button>`}
      />
      <Preview
        title="Accent in context"
        preview={
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <Button variant="accent">Start exploring</Button>
            <Button variant="ghost">Browse all</Button>
          </div>
        }
        code={`<Button variant="accent">Start exploring</Button>
<Button variant="ghost">Browse all</Button>`}
      />

      {/* ------------------------------------------------------------------ */}
      <SectionHeader
        id="sizes"
        title="Sizes"
        subtitle="Four sizes to fit any layout density. The default size is md."
      />
      <Preview
        title="All sizes"
        preview={
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary" size="md">Medium</Button>
            <Button variant="primary" size="lg">Large</Button>
            <Button variant="primary" size="xl">Extra large</Button>
          </div>
        }
        code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra large</Button>`}
      />

      {/* ------------------------------------------------------------------ */}
      <SectionHeader
        id="icon-leading"
        title="Icon leading"
        subtitle="Add a leading icon to reinforce the button's action."
      />
      <Preview
        title="Icon leading"
        preview={
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            <Button variant="primary">
              <Plus className="w-4 h-4" />
              Add item
            </Button>
            <Button variant="secondary">
              <Download01 className="w-4 h-4" />
              Download
            </Button>
            <Button variant="ghost">
              <Upload01 className="w-4 h-4" />
              Upload
            </Button>
          </div>
        }
        code={`import { Plus, Download01, Upload01 } from '@untitledui/icons';

<Button variant="primary">
  <Plus className="w-4 h-4" />
  Add item
</Button>
<Button variant="secondary">
  <Download01 className="w-4 h-4" />
  Download
</Button>
<Button variant="ghost">
  <Upload01 className="w-4 h-4" />
  Upload
</Button>`}
      />

      {/* ------------------------------------------------------------------ */}
      <SectionHeader id="icon-trailing" title="Icon trailing" />
      <Preview
        title="Icon trailing"
        preview={
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            <Button variant="primary">
              Next
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="ghost">
              Learn more
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        }
        code={`import { ArrowRight } from '@untitledui/icons';

<Button variant="primary">
  Next
  <ArrowRight className="w-4 h-4" />
</Button>
<Button variant="ghost">
  Learn more
  <ArrowRight className="w-4 h-4" />
</Button>`}
      />

      {/* ------------------------------------------------------------------ */}
      <SectionHeader
        id="icon-only"
        title="Icon only"
        subtitle="When space is tight, use icon-only buttons. Always include an aria-label for accessibility."
      />
      <Preview
        title="Icon only"
        preview={
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <Button variant="primary" aria-label="Add item">
              <Plus className="w-4 h-4" />
            </Button>
            <Button variant="secondary" aria-label="Settings">
              <Settings01 className="w-4 h-4" />
            </Button>
            <Button variant="ghost" aria-label="More options">
              <DotsHorizontal className="w-4 h-4" />
            </Button>
          </div>
        }
        code={`<Button variant="primary" aria-label="Add item">
  <Plus className="w-4 h-4" />
</Button>`}
      />

      {/* ------------------------------------------------------------------ */}
      <SectionHeader
        id="loading"
        title="Loading"
        subtitle="Show a loading spinner during async operations. The button is automatically disabled while loading."
      />
      <Preview
        title="Loading state"
        preview={
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <Button variant="primary" disabled>
              <span
                style={{
                  display: 'inline-block',
                  width: 16,
                  height: 16,
                  border: '2px solid currentColor',
                  borderTopColor: 'transparent',
                  borderRadius: '50%',
                  animation: 'spin 0.6s linear infinite',
                }}
              />
              Saving...
            </Button>
            <Button variant="secondary" disabled>
              <span
                style={{
                  display: 'inline-block',
                  width: 16,
                  height: 16,
                  border: '2px solid currentColor',
                  borderTopColor: 'transparent',
                  borderRadius: '50%',
                  animation: 'spin 0.6s linear infinite',
                }}
              />
              Loading
            </Button>
          </div>
        }
        code={`<Button variant="primary" disabled>
  <LoadingSpinner />
  Saving...
</Button>`}
      />

      {/* ------------------------------------------------------------------ */}
      <SectionHeader
        id="disabled"
        title="Disabled"
        subtitle="Disabled buttons prevent interaction. Use when an action is not currently available — always pair with a tooltip or message explaining why."
      />
      <Preview
        title="Disabled state"
        preview={
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            <Button variant="primary" disabled>Primary</Button>
            <Button variant="secondary" disabled>Secondary</Button>
            <Button variant="ghost" disabled>Ghost</Button>
            <Button variant="accent" disabled>Accent</Button>
          </div>
        }
        code={`<Button variant="primary" disabled>Disabled</Button>`}
      />

      {/* ------------------------------------------------------------------ */}
      <SectionHeader
        id="full-width"
        title="Full width"
        subtitle="Use fullWidth for form submissions, mobile layouts, or any context where the button should fill its container."
      />
      <Preview
        title="Full width"
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%', maxWidth: 384 }}>
            <Button variant="primary" fullWidth>Create account</Button>
            <Button variant="secondary" fullWidth>Sign in instead</Button>
          </div>
        }
        code={`<Button variant="primary" fullWidth>Create account</Button>`}
      />

      {/* ------------------------------------------------------------------ */}
      <SectionHeader id="props" title="Props" />
      <PropsTable props={PROPS} />

      <hr style={{ border: 'none', borderTop: '1px dotted var(--border-default)', margin: '48px 0' }} />

      {/* ------------------------------------------------------------------ */}
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
