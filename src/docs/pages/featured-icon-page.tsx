import { useEffect } from 'react';
import { useDocsContext } from '@/docs/layout/docs-context';
import { Breadcrumb } from '@/docs/layout/breadcrumb';
import { SectionHeader } from '@/docs/components/section-header';
import { Preview } from '@/docs/components/preview';
import { PropsTable } from '@/docs/components/props-table';
import { InstallBlock } from '@/docs/components/install-block';
import { FeaturedIcon } from '@/components/foundations/featured-icon/featured-icon';
import { CheckCircle, AlertCircle, XCircle, InfoCircle, Settings01, Star01 } from '@untitledui/icons';

const SECTIONS = [
  { id: 'example', label: 'Featured icon example' },
  { id: 'installation', label: 'Installation' },
  { id: 'examples', label: 'Featured icon examples' },
  { id: 'colors', label: 'Colors' },
  { id: 'themes', label: 'Themes' },
  { id: 'sizes', label: 'Sizes' },
  { id: 'props', label: 'Props' },
  { id: 'faqs', label: 'FAQs' },
];

const PROPS = [
  { name: 'icon', type: 'FC | ReactNode', default: '—', description: 'Icon component or element to display inside the container' },
  { name: 'size', type: '"sm" | "md" | "lg" | "xl"', default: '"md"', description: 'Size of the icon container' },
  { name: 'color', type: '"brand" | "gray" | "error" | "warning" | "success"', default: '"brand"', description: 'Color scheme for the icon and its background' },
  { name: 'theme', type: '"light" | "gradient" | "dark" | "outline" | "modern" | "modern-neue"', default: '"light"', description: 'Visual style of the icon container' },
  { name: 'className', type: 'string', default: '—', description: 'Additional CSS classes for the container element' },
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

export function FeaturedIconPage() {
  const { setSections } = useDocsContext();

  useEffect(() => {
    setSections(SECTIONS);
    return () => setSections([]);
  }, [setSections]);

  return (
    <div>
      <Breadcrumb items={[{ label: 'Foundations' }, { label: 'Featured icon' }]} />

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
        <h1 style={{ fontSize: 28, fontWeight: 500, letterSpacing: '-0.02em', margin: 0, color: 'var(--text-primary)' }}>
          Featured icon
        </h1>
        <span style={{ fontSize: 11, fontWeight: 600, padding: '2px 8px', borderRadius: 20, border: '1px solid var(--border-default)', color: 'var(--text-tertiary)', letterSpacing: '0.04em' }}>
          FREE
        </span>
      </div>
      <p style={{ fontSize: 15, color: 'var(--text-secondary)', margin: '0 0 32px', lineHeight: 1.6, maxWidth: 600 }}>
        A decorative icon container for visual emphasis. Use featured icons in empty states, modal headers, section callouts, and anywhere you need an icon to carry more visual weight.
      </p>

      <hr style={hr} />

      <SectionHeader id="example" title="Featured icon example" />
      <Preview
        preview={
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'center' }}>
            <FeaturedIcon icon={CheckCircle} color="success" theme="light" size="md" />
            <FeaturedIcon icon={AlertCircle} color="warning" theme="light" size="md" />
            <FeaturedIcon icon={XCircle} color="error" theme="light" size="md" />
            <FeaturedIcon icon={InfoCircle} color="brand" theme="light" size="md" />
          </div>
        }
        code={`import { FeaturedIcon } from '@/components/foundations/featured-icon/featured-icon';
import { CheckCircle, AlertCircle, XCircle, InfoCircle } from '@untitledui/icons';

<FeaturedIcon icon={CheckCircle} color="success" theme="light" size="md" />
<FeaturedIcon icon={AlertCircle} color="warning" theme="light" size="md" />
<FeaturedIcon icon={XCircle} color="error" theme="light" size="md" />
<FeaturedIcon icon={InfoCircle} color="brand" theme="light" size="md" />`}
      />

      <hr style={hr} />

      <SectionHeader id="installation" title="Installation" subtitle="Add this component using the CLI or copy it manually." />
      <InstallBlock cliName="featured-icon" manualPath="src/components/foundations/featured-icon/featured-icon.tsx" />

      <hr style={hr} />

      <SectionHeader id="examples" title="Featured icon examples" subtitle="Below are examples and variations of the featured icon component." />

      <SectionHeader id="colors" title="Colors" subtitle="Five semantic color options — brand, gray, success, warning, and error." />
      <Preview
        preview={
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'center' }}>
            <FeaturedIcon icon={Star01} color="brand" theme="light" size="md" />
            <FeaturedIcon icon={Star01} color="gray" theme="light" size="md" />
            <FeaturedIcon icon={Star01} color="success" theme="light" size="md" />
            <FeaturedIcon icon={Star01} color="warning" theme="light" size="md" />
            <FeaturedIcon icon={Star01} color="error" theme="light" size="md" />
          </div>
        }
        code={`<FeaturedIcon icon={Star01} color="brand" theme="light" size="md" />
<FeaturedIcon icon={Star01} color="gray" theme="light" size="md" />
<FeaturedIcon icon={Star01} color="success" theme="light" size="md" />
<FeaturedIcon icon={Star01} color="warning" theme="light" size="md" />
<FeaturedIcon icon={Star01} color="error" theme="light" size="md" />`}
      />

      <SectionHeader id="themes" title="Themes" subtitle="Six visual themes — light, gradient, dark, outline, modern, and modern-neue." />
      <Preview
        preview={
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'center' }}>
            <FeaturedIcon icon={Settings01} color="brand" theme="light" size="md" />
            <FeaturedIcon icon={Settings01} color="brand" theme="gradient" size="md" />
            <FeaturedIcon icon={Settings01} color="brand" theme="dark" size="md" />
            <FeaturedIcon icon={Settings01} color="brand" theme="outline" size="md" />
            <FeaturedIcon icon={Settings01} color="gray" theme="modern" size="md" />
            <FeaturedIcon icon={Settings01} color="gray" theme="modern-neue" size="md" />
          </div>
        }
        code={`<FeaturedIcon icon={Settings01} color="brand" theme="light" size="md" />
<FeaturedIcon icon={Settings01} color="brand" theme="gradient" size="md" />
<FeaturedIcon icon={Settings01} color="brand" theme="dark" size="md" />
<FeaturedIcon icon={Settings01} color="brand" theme="outline" size="md" />

{/* modern and modern-neue are gray-only */}
<FeaturedIcon icon={Settings01} color="gray" theme="modern" size="md" />
<FeaturedIcon icon={Settings01} color="gray" theme="modern-neue" size="md" />`}
      />

      <SectionHeader id="sizes" title="Sizes" subtitle="Four sizes — sm, md, lg, and xl." />
      <Preview
        preview={
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'flex-end' }}>
            <FeaturedIcon icon={CheckCircle} color="brand" theme="light" size="sm" />
            <FeaturedIcon icon={CheckCircle} color="brand" theme="light" size="md" />
            <FeaturedIcon icon={CheckCircle} color="brand" theme="light" size="lg" />
            <FeaturedIcon icon={CheckCircle} color="brand" theme="light" size="xl" />
          </div>
        }
        code={`<FeaturedIcon icon={CheckCircle} color="brand" theme="light" size="sm" />
<FeaturedIcon icon={CheckCircle} color="brand" theme="light" size="md" />
<FeaturedIcon icon={CheckCircle} color="brand" theme="light" size="lg" />
<FeaturedIcon icon={CheckCircle} color="brand" theme="light" size="xl" />`}
      />

      <hr style={hr} />

      <SectionHeader id="props" title="Props" />
      <PropsTable props={PROPS} />

      <hr style={hr} />

      <div id="faqs">
        <SectionHeader id="faqs" title="FAQs" />
        <FaqItem
          q="What is the difference between modern and modern-neue?"
          a="Both are gray-only themes with a contemporary flat look. modern uses a solid gray background with a colored icon, while modern-neue adds a subtle inner shadow for a slightly raised appearance. Use them in settings panels and dashboard cards."
        />
        <FaqItem
          q="Can I use any icon from @untitledui/icons?"
          a="Yes. Pass the icon component reference directly — FeaturedIcon renders it at the correct size for each container. You can also pass a ReactNode element if you need custom sizing or stroke width adjustments."
        />
        <FaqItem
          q="When should I use the gradient vs dark theme?"
          a="Use gradient for a softer, more vibrant treatment — good for marketing sections and hero callouts. Use dark for maximum visual weight and contrast, such as error or confirmation modals where the icon is the focal point."
        />
      </div>
    </div>
  );
}
