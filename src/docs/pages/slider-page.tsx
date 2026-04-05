import { useEffect, useState } from 'react';
import { useDocsContext } from '@/docs/layout/docs-context';
import { Breadcrumb } from '@/docs/layout/breadcrumb';
import { Preview } from '@/docs/components/preview';
import { PropsTable } from '@/docs/components/props-table';
import { SectionHeader } from '@/docs/components/section-header';
import { Slider } from '@/components/Slider';

const SECTIONS = [
  { id: 'default', label: 'Default' },
  { id: 'with-labels', label: 'With labels' },
  { id: 'props', label: 'Props' },
];

const PROPS = [
  { name: 'value', type: 'number', description: 'Current value (controlled)' },
  { name: 'onChange', type: '(value: number) => void', description: 'Change handler' },
  { name: 'min', type: 'number', default: '0', description: 'Minimum value' },
  { name: 'max', type: 'number', default: '100', description: 'Maximum value' },
  { name: 'step', type: 'number', default: '1', description: 'Step increment' },
  { name: 'label', type: 'string', default: '—', description: 'Center label shown above the track' },
  { name: 'leftLabel', type: 'string', default: '—', description: 'Left side primary label' },
  { name: 'leftSub', type: 'string', default: '—', description: 'Left side secondary/sub label' },
  { name: 'rightLabel', type: 'string', default: '—', description: 'Right side primary label' },
  { name: 'rightSub', type: 'string', default: '—', description: 'Right side secondary/sub label' },
  { name: 'className', type: 'string', default: '""', description: 'Additional CSS classes' },
];

function BasicSlider() {
  const [val, setVal] = useState(50);
  return (
    <div style={{ width: '100%', maxWidth: 400 }}>
      <Slider value={val} onChange={setVal} />
    </div>
  );
}

function LabeledSlider() {
  const [val, setVal] = useState(40);
  return (
    <div style={{ width: '100%', maxWidth: 440 }}>
      <Slider
        leftLabel="Wendy's"
        leftSub="Playful & witty"
        rightLabel="Tiffany & Co."
        rightSub="Refined & elegant"
        label="Personality"
        value={val}
        onChange={setVal}
      />
    </div>
  );
}

export function SliderPage() {
  const { setSections } = useDocsContext();

  useEffect(() => {
    setSections(SECTIONS);
    return () => setSections([]);
  }, [setSections]);

  return (
    <div>
      <Breadcrumb items={[{ label: 'Components' }, { label: 'Slider' }]} />

      <h1
        style={{
          fontSize: 28,
          fontWeight: 500,
          letterSpacing: '-0.02em',
          margin: '0 0 8px',
          color: 'var(--text-primary)',
        }}
      >
        Slider
      </h1>
      <p style={{ fontSize: 15, color: 'var(--text-secondary)', margin: '0 0 32px' }}>
        Range slider built on React Aria. Supports left/right labels and a center label.
      </p>

      <hr style={{ border: 'none', borderTop: '1px solid var(--border-default)', margin: '0 0 40px' }} />

      <SectionHeader id="default" title="Default" />
      <Preview
        preview={<BasicSlider />}
        code={`import { Slider } from '@/components/Slider';

const [val, setVal] = useState(50);

<Slider value={val} onChange={setVal} />`}
      />

      <SectionHeader id="with-labels" title="With labels" />
      <Preview
        preview={<LabeledSlider />}
        code={`const [val, setVal] = useState(40);

<Slider
  leftLabel="Wendy's"
  leftSub="Playful & witty"
  rightLabel="Tiffany & Co."
  rightSub="Refined & elegant"
  label="Personality"
  value={val}
  onChange={setVal}
/>`}
      />

      <SectionHeader id="props" title="Props" />
      <PropsTable props={PROPS} />
    </div>
  );
}
