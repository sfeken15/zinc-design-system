import { useEffect } from 'react';
import { useDocsContext } from '@/docs/layout/docs-context';
import { Breadcrumb } from '@/docs/layout/breadcrumb';
import { SectionHeader } from '@/docs/components/section-header';
import { Preview } from '@/docs/components/preview';
import { PropsTable } from '@/docs/components/props-table';
import { InstallBlock } from '@/docs/components/install-block';
import { ProgressBar, ProgressBarBase } from '@/components/base/progress-indicators/progress-indicators';
import { ProgressBarCircle } from '@/components/base/progress-indicators/progress-circles';
import { CircleProgressBar } from '@/components/base/progress-indicators/simple-circle';

const SECTIONS = [
  { id: 'example', label: 'Progress indicator example' },
  { id: 'installation', label: 'Installation' },
  { id: 'examples', label: 'Progress indicator examples' },
  { id: 'progress-bar', label: 'Progress bar' },
  { id: 'with-label', label: 'With label' },
  { id: 'floating-label', label: 'Floating label' },
  { id: 'progress-circle', label: 'Progress circle' },
  { id: 'simple-circle', label: 'Simple circle' },
  { id: 'props', label: 'Props' },
  { id: 'faqs', label: 'FAQs' },
];

const BAR_PROPS = [
  { name: 'value', type: 'number', default: '—', description: 'Current progress value (required)' },
  { name: 'min', type: 'number', default: '0', description: 'Minimum value' },
  { name: 'max', type: 'number', default: '100', description: 'Maximum value' },
  { name: 'labelPosition', type: '"right" | "bottom" | "top-floating" | "bottom-floating"', default: '—', description: 'Position of the value label' },
  { name: 'valueFormatter', type: '(value, pct) => string | number', default: '—', description: 'Custom function to format the displayed value' },
  { name: 'className', type: 'string', default: '—', description: 'Additional classes for the track container' },
  { name: 'progressClassName', type: 'string', default: '—', description: 'Additional classes for the fill element' },
];

const CIRCLE_PROPS = [
  { name: 'value', type: 'number', default: '—', description: 'Current progress value (required)' },
  { name: 'min', type: 'number', default: '0', description: 'Minimum value' },
  { name: 'max', type: 'number', default: '100', description: 'Maximum value' },
  { name: 'size', type: '"xxs" | "xs" | "sm" | "md" | "lg"', default: '—', description: 'Size of the circle (required)' },
  { name: 'label', type: 'string', default: '—', description: 'Label text inside the circle' },
  { name: 'valueFormatter', type: '(value, pct) => string | number', default: '—', description: 'Custom value formatter' },
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

export function ProgressPage() {
  const { setSections } = useDocsContext();

  useEffect(() => {
    setSections(SECTIONS);
    return () => setSections([]);
  }, [setSections]);

  return (
    <div>
      <Breadcrumb items={[{ label: 'Components' }, { label: 'Progress indicators' }]} />

      <h1 style={{ fontSize: 28, fontWeight: 500, letterSpacing: '-0.02em', margin: '0 0 8px', color: 'var(--text-primary)' }}>
        Progress indicator components
      </h1>
      <p style={{ fontSize: 15, color: 'var(--text-secondary)', margin: '0 0 32px', lineHeight: 1.6, maxWidth: 600 }}>
        Free and open-source React progress indicator components. Use progress bars, circles, and simple indicators to show loading states and completion percentage.
      </p>

      <hr style={hr} />

      <SectionHeader id="example" title="Progress indicator example" />
      <Preview
        preview={
          <div style={{ width: '100%', maxWidth: 400 }}>
            <ProgressBar value={60} labelPosition="right" />
          </div>
        }
        code={`import { ProgressBar } from '@/components/base/progress-indicators/progress-indicators';

<ProgressBar value={60} labelPosition="right" />`}
      />

      <hr style={hr} />

      <SectionHeader id="installation" title="Installation" subtitle="Add this component using the CLI or copy it manually." />
      <InstallBlock cliName="progress-indicator" manualPath="src/components/base/progress-indicators/" />

      <hr style={hr} />

      <SectionHeader id="examples" title="Progress indicator examples" subtitle="Below are examples and variations of the progress indicator components." />

      <SectionHeader id="progress-bar" title="Progress bar" subtitle="Horizontal bar at various completion levels." />
      <Preview
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%', maxWidth: 400 }}>
            <ProgressBarBase value={0} />
            <ProgressBarBase value={25} />
            <ProgressBarBase value={50} />
            <ProgressBarBase value={75} />
            <ProgressBarBase value={100} />
          </div>
        }
        code={`import { ProgressBarBase } from '@/components/base/progress-indicators/progress-indicators';

<ProgressBarBase value={0} />
<ProgressBarBase value={25} />
<ProgressBarBase value={50} />
<ProgressBarBase value={75} />
<ProgressBarBase value={100} />`}
      />

      <SectionHeader id="with-label" title="With label" subtitle="Show the percentage value to the right or below the bar." />
      <Preview
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, width: '100%', maxWidth: 400 }}>
            <ProgressBar value={65} labelPosition="right" />
            <ProgressBar value={65} labelPosition="bottom" />
          </div>
        }
        code={`<ProgressBar value={65} labelPosition="right" />
<ProgressBar value={65} labelPosition="bottom" />`}
      />

      <SectionHeader id="floating-label" title="Floating label" subtitle="A tooltip-style label that floats above or below the progress point." />
      <Preview
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 48, width: '100%', maxWidth: 400, padding: '32px 0' }}>
            <ProgressBar value={65} labelPosition="top-floating" />
            <ProgressBar value={65} labelPosition="bottom-floating" />
          </div>
        }
        code={`<ProgressBar value={65} labelPosition="top-floating" />
<ProgressBar value={65} labelPosition="bottom-floating" />`}
      />

      <SectionHeader id="progress-circle" title="Progress circle" subtitle="Circular progress indicator with optional label text." />
      <Preview
        preview={
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', alignItems: 'center' }}>
            <ProgressBarCircle value={25} size="xs" />
            <ProgressBarCircle value={50} size="xs" />
            <ProgressBarCircle value={75} size="xs" />
            <ProgressBarCircle value={100} size="xs" />
          </div>
        }
        code={`import { ProgressBarCircle } from '@/components/base/progress-indicators/progress-circles';

<ProgressBarCircle value={25} size="xs" />
<ProgressBarCircle value={50} size="xs" />
<ProgressBarCircle value={75} size="xs" />
<ProgressBarCircle value={100} size="xs" />`}
      />

      <SectionHeader id="simple-circle" title="Simple circle" subtitle="A lightweight small circle variant suited for inline or compact use." />
      <Preview
        preview={
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'center' }}>
            <CircleProgressBar value={25} />
            <CircleProgressBar value={50} />
            <CircleProgressBar value={75} />
            <CircleProgressBar value={100} />
          </div>
        }
        code={`import { CircleProgressBar } from '@/components/base/progress-indicators/simple-circle';

<CircleProgressBar value={25} />
<CircleProgressBar value={50} />
<CircleProgressBar value={75} />
<CircleProgressBar value={100} />`}
      />

      <hr style={hr} />

      <SectionHeader id="props" title="Props — ProgressBar" />
      <PropsTable props={BAR_PROPS} />

      <div style={{ marginTop: 32 }}>
        <SectionHeader id="props-circle" title="Props — ProgressBarCircle" />
        <PropsTable props={CIRCLE_PROPS} />
      </div>

      <hr style={hr} />

      <div id="faqs">
        <SectionHeader id="faqs" title="FAQs" />
        <FaqItem
          q="How do I animate the progress bar?"
          a="Pass the value prop and update it over time. The fill element uses a CSS transform-based approach for smooth transitions — no additional animation setup needed."
        />
        <FaqItem
          q="What is the difference between ProgressBarCircle and CircleProgressBar?"
          a="ProgressBarCircle is the full-featured circle with size variants (xxs–lg), optional label text, and half-circle support. CircleProgressBar is a simpler, smaller utility circle with a fixed size — use it when you need a quick inline indicator."
        />
        <FaqItem
          q="Can I use a custom value format?"
          a="Yes. Pass a valueFormatter function: (value, percentage) => string. For example, you can format it as '2 of 5 steps' or a custom unit like '650 KB / 1 MB'."
        />
      </div>
    </div>
  );
}
