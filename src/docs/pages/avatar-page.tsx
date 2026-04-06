import { useEffect } from 'react';
import { useDocsContext } from '@/docs/layout/docs-context';
import { Breadcrumb } from '@/docs/layout/breadcrumb';
import { Preview } from '@/docs/components/preview';
import { PropsTable } from '@/docs/components/props-table';
import { SectionHeader } from '@/docs/components/section-header';
import { Avatar } from '@/components/Avatar';

const SECTIONS = [
  { id: 'sizes', label: 'Sizes' },
  { id: 'initials', label: 'With initials' },
  { id: 'status', label: 'With status' },
  { id: 'props', label: 'Props' },
];

const PROPS = [
  { name: 'size', type: '"xs" | "sm" | "md" | "lg" | "xl" | "2xl"', default: '"md"', description: 'Size of the avatar' },
  { name: 'src', type: 'string', default: '—', description: 'Image URL' },
  { name: 'alt', type: 'string', default: '—', description: 'Alt text for accessibility' },
  { name: 'initials', type: 'string', default: '—', description: 'Fallback initials when no image' },
  { name: 'status', type: '"online" | "offline"', default: '—', description: 'Status indicator' },
  { name: 'verified', type: 'boolean', default: 'false', description: 'Shows a verified badge' },
];

export function AvatarPage() {
  const { setSections } = useDocsContext();

  useEffect(() => {
    setSections(SECTIONS);
    return () => setSections([]);
  }, [setSections]);

  return (
    <div>
      <Breadcrumb items={[{ label: 'Components' }, { label: 'Avatar' }]} />

      <h1 style={{ fontSize: 28, fontWeight: 500, letterSpacing: '-0.02em', margin: '0 0 8px', color: 'var(--text-primary)' }}>
        Avatar
      </h1>
      <p style={{ fontSize: 15, color: 'var(--text-secondary)', margin: '0 0 32px' }}>
        User profile images with fallback initials, status indicators, and verified badges.
      </p>
      <hr style={{ border: 'none', borderTop: '1px solid var(--border-default)', margin: '0 0 40px' }} />

      <SectionHeader id="sizes" title="Sizes" />
      <Preview
        preview={
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Avatar size="xs" initials="JD" />
            <Avatar size="sm" initials="JD" />
            <Avatar size="md" initials="JD" />
            <Avatar size="lg" initials="JD" />
            <Avatar size="xl" initials="JD" />
            <Avatar size="2xl" initials="JD" />
          </div>
        }
        code={`<Avatar size="xs" initials="JD" />
<Avatar size="sm" initials="JD" />
<Avatar size="md" initials="JD" />
<Avatar size="lg" initials="JD" />
<Avatar size="xl" initials="JD" />
<Avatar size="2xl" initials="JD" />`}
      />

      <SectionHeader id="initials" title="With initials" />
      <Preview
        preview={
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Avatar size="md" initials="OR" />
            <Avatar size="md" initials="AB" />
          </div>
        }
        code={`<Avatar size="md" initials="OR" />
<Avatar size="md" initials="AB" />`}
      />

      <SectionHeader id="status" title="With status" />
      <Preview
        preview={
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Avatar size="md" initials="JD" status="online" />
            <Avatar size="md" initials="JD" status="offline" />
          </div>
        }
        code={`<Avatar size="md" initials="JD" status="online" />
<Avatar size="md" initials="JD" status="offline" />`}
      />

      <SectionHeader id="props" title="Props" />
      <PropsTable props={PROPS} />
    </div>
  );
}
