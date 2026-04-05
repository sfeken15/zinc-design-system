import { useEffect } from 'react';
import { useDocsContext } from '@/docs/layout/docs-context';
import { Breadcrumb } from '@/docs/layout/breadcrumb';
import { Preview } from '@/docs/components/preview';
import { PropsTable } from '@/docs/components/props-table';
import { SectionHeader } from '@/docs/components/section-header';
import { StepDots } from '@/components/StepDots';

const SECTIONS = [
  { id: 'progress', label: 'Progress steps' },
  { id: 'counts', label: 'Different counts' },
  { id: 'props', label: 'Props' },
];

const PROPS = [
  { name: 'total', type: 'number', default: '4', description: 'Total number of steps' },
  { name: 'current', type: 'number', default: '1', description: 'Current active step (1-indexed)' },
  { name: 'className', type: 'string', default: '""', description: 'Additional CSS classes' },
];

export function StepDotsPage() {
  const { setSections } = useDocsContext();

  useEffect(() => {
    setSections(SECTIONS);
    return () => setSections([]);
  }, [setSections]);

  return (
    <div>
      <Breadcrumb items={[{ label: 'Components' }, { label: 'StepDots' }]} />

      <h1
        style={{
          fontSize: 28,
          fontWeight: 500,
          letterSpacing: '-0.02em',
          margin: '0 0 8px',
          color: 'var(--text-primary)',
        }}
      >
        StepDots
      </h1>
      <p style={{ fontSize: 15, color: 'var(--text-secondary)', margin: '0 0 32px' }}>
        Progress indicator dots for multi-step flows. Active step is a wider pill; completed steps are dimmed.
      </p>

      <hr style={{ border: 'none', borderTop: '1px solid var(--border-default)', margin: '0 0 40px' }} />

      <SectionHeader id="progress" title="Progress through 4 steps" />
      <Preview
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ fontSize: 12, color: 'var(--text-tertiary)', width: 32, flexShrink: 0 }}>1/4</span>
              <StepDots total={4} current={1} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ fontSize: 12, color: 'var(--text-tertiary)', width: 32, flexShrink: 0 }}>2/4</span>
              <StepDots total={4} current={2} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ fontSize: 12, color: 'var(--text-tertiary)', width: 32, flexShrink: 0 }}>3/4</span>
              <StepDots total={4} current={3} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ fontSize: 12, color: 'var(--text-tertiary)', width: 32, flexShrink: 0 }}>4/4</span>
              <StepDots total={4} current={4} />
            </div>
          </div>
        }
        code={`import { StepDots } from '@/components/StepDots';

<StepDots total={4} current={1} />
<StepDots total={4} current={2} />
<StepDots total={4} current={3} />
<StepDots total={4} current={4} />`}
      />

      <SectionHeader id="counts" title="Different step counts" />
      <Preview
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ fontSize: 12, color: 'var(--text-tertiary)', width: 48, flexShrink: 0 }}>3 steps</span>
              <StepDots total={3} current={2} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ fontSize: 12, color: 'var(--text-tertiary)', width: 48, flexShrink: 0 }}>5 steps</span>
              <StepDots total={5} current={3} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ fontSize: 12, color: 'var(--text-tertiary)', width: 48, flexShrink: 0 }}>6 steps</span>
              <StepDots total={6} current={4} />
            </div>
          </div>
        }
        code={`<StepDots total={3} current={2} />
<StepDots total={5} current={3} />
<StepDots total={6} current={4} />`}
      />

      <SectionHeader id="props" title="Props" />
      <PropsTable props={PROPS} />
    </div>
  );
}
