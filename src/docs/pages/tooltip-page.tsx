import { useEffect } from 'react';
import { useDocsContext } from '@/docs/layout/docs-context';
import { Breadcrumb } from '@/docs/layout/breadcrumb';
import { Preview } from '@/docs/components/preview';
import { PropsTable } from '@/docs/components/props-table';
import { SectionHeader } from '@/docs/components/section-header';
import { Tooltip, TooltipTrigger } from '@/components/Tooltip';
import { Button } from '@/components/Button';

const SECTIONS = [
  { id: 'default', label: 'Default' },
  { id: 'placement', label: 'Placement' },
  { id: 'with-arrow', label: 'With arrow' },
  { id: 'props', label: 'Props' },
];

const PROPS = [
  { name: 'title', type: 'ReactNode', default: '—', description: 'Tooltip title (required)' },
  { name: 'description', type: 'ReactNode', default: '—', description: 'Optional description text' },
  { name: 'placement', type: '"top" | "bottom" | "left" | "right"', default: '"top"', description: 'Tooltip placement' },
  { name: 'arrow', type: 'boolean', default: 'false', description: 'Show an arrow pointer' },
  { name: 'delay', type: 'number', default: '300', description: 'Open delay in milliseconds' },
  { name: 'isDisabled', type: 'boolean', default: 'false', description: 'Disables the tooltip' },
  { name: 'children', type: 'ReactNode', default: '—', description: 'Trigger element (required)' },
];

export function TooltipPage() {
  const { setSections } = useDocsContext();

  useEffect(() => {
    setSections(SECTIONS);
    return () => setSections([]);
  }, [setSections]);

  return (
    <div>
      <Breadcrumb items={[{ label: 'Components' }, { label: 'Tooltip' }]} />

      <h1 style={{ fontSize: 28, fontWeight: 500, letterSpacing: '-0.02em', margin: '0 0 8px', color: 'var(--text-primary)' }}>
        Tooltip
      </h1>
      <p style={{ fontSize: 15, color: 'var(--text-secondary)', margin: '0 0 32px' }}>
        Accessible floating tooltip built on React Aria with configurable placement.
      </p>
      <hr style={{ border: 'none', borderTop: '1px solid var(--border-default)', margin: '0 0 40px' }} />

      <SectionHeader id="default" title="Default" />
      <Preview
        preview={
          <div style={{ padding: '32px 0' }}>
            <Tooltip title="Save your changes">
              <TooltipTrigger>
                <Button>Hover me</Button>
              </TooltipTrigger>
            </Tooltip>
          </div>
        }
        code={`<Tooltip title="Save your changes">
  <TooltipTrigger>
    <Button>Hover me</Button>
  </TooltipTrigger>
</Tooltip>`}
      />

      <SectionHeader id="placement" title="Placement" />
      <Preview
        preview={
          <div style={{ display: 'flex', gap: 12, padding: '32px 0', flexWrap: 'wrap' }}>
            <Tooltip title="Top tooltip" placement="top">
              <TooltipTrigger><Button size="sm">Top</Button></TooltipTrigger>
            </Tooltip>
            <Tooltip title="Bottom tooltip" placement="bottom">
              <TooltipTrigger><Button size="sm">Bottom</Button></TooltipTrigger>
            </Tooltip>
            <Tooltip title="Left tooltip" placement="left">
              <TooltipTrigger><Button size="sm">Left</Button></TooltipTrigger>
            </Tooltip>
            <Tooltip title="Right tooltip" placement="right">
              <TooltipTrigger><Button size="sm">Right</Button></TooltipTrigger>
            </Tooltip>
          </div>
        }
        code={`<Tooltip title="Top tooltip" placement="top"><TooltipTrigger>...</TooltipTrigger></Tooltip>
<Tooltip title="Bottom tooltip" placement="bottom"><TooltipTrigger>...</TooltipTrigger></Tooltip>
<Tooltip title="Left tooltip" placement="left"><TooltipTrigger>...</TooltipTrigger></Tooltip>
<Tooltip title="Right tooltip" placement="right"><TooltipTrigger>...</TooltipTrigger></Tooltip>`}
      />

      <SectionHeader id="with-arrow" title="With arrow" />
      <Preview
        preview={
          <div style={{ padding: '32px 0' }}>
            <Tooltip title="Tooltip with arrow" description="Extra detail here." arrow>
              <TooltipTrigger>
                <Button>With arrow</Button>
              </TooltipTrigger>
            </Tooltip>
          </div>
        }
        code={`<Tooltip title="Tooltip with arrow" description="Extra detail here." arrow>
  <TooltipTrigger>
    <Button>With arrow</Button>
  </TooltipTrigger>
</Tooltip>`}
      />

      <SectionHeader id="props" title="Props" />
      <PropsTable props={PROPS} />
    </div>
  );
}
