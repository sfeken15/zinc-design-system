import { useEffect } from 'react';
import { useDocsContext } from '@/docs/layout/docs-context';
import { Breadcrumb } from '@/docs/layout/breadcrumb';
import { Preview } from '@/docs/components/preview';
import { PropsTable } from '@/docs/components/props-table';
import { SectionHeader } from '@/docs/components/section-header';
import { Configurator } from '@/docs/components/Configurator';
import { Avatar } from '@/components/Avatar';

const SECTIONS = [
  { id: 'playground', label: 'Playground' },
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
  { name: 'status', type: '"online" | "offline"', default: '—', description: 'Status indicator dot' },
  { name: 'verified', type: 'boolean', default: 'false', description: 'Shows a verified badge' },
  { name: 'border', type: 'boolean', default: 'false', description: 'Adds an outer ring border' },
  { name: 'rounded', type: 'boolean', default: 'true', description: 'Fully rounded (circle) shape' },
  { name: 'count', type: 'number', default: '—', description: 'Numeric count badge overlay' },
];

// ── Configurator setup ──────────────────────────────────────────────────────

const AVATAR_CONTROLS = [
  {
    type: 'text' as const,
    key: 'initials',
    label: 'Initials',
    placeholder: 'JD',
  },
  {
    type: 'button-group' as const,
    key: 'size',
    label: 'Size',
    options: [
      { label: 'XS', value: 'xs' },
      { label: 'SM', value: 'sm' },
      { label: 'MD', value: 'md' },
      { label: 'LG', value: 'lg' },
      { label: 'XL', value: 'xl' },
      { label: '2XL', value: '2xl' },
    ],
  },
  {
    type: 'select' as const,
    key: 'status',
    label: 'Status',
    options: [
      { label: 'None', value: 'none' },
      { label: 'Online', value: 'online' },
      { label: 'Offline', value: 'offline' },
    ],
  },
  {
    type: 'toggle' as const,
    key: 'verified',
    label: 'Verified',
  },
  {
    type: 'toggle' as const,
    key: 'border',
    label: 'Border',
  },
  {
    type: 'toggle' as const,
    key: 'rounded',
    label: 'Rounded',
  },
];

const AVATAR_DEFAULTS = {
  initials: 'JD',
  size: 'md',
  status: 'none',
  verified: false,
  border: false,
  rounded: true,
};

const avatarCodeTemplate = (v: Record<string, any>) => {
  const props: string[] = [];
  if (v.initials) props.push(`initials="${v.initials}"`);
  if (v.size !== 'md') props.push(`size="${v.size}"`);
  if (v.status !== 'none') props.push(`status="${v.status}"`);
  if (v.verified) props.push('verified');
  if (v.border) props.push('border');
  if (!v.rounded) props.push('rounded={false}');

  if (props.length === 0) return '<Avatar />';
  if (props.length <= 2) return `<Avatar ${props.join(' ')} />`;
  return `<Avatar\n${props.map(p => `  ${p}`).join('\n')}\n/>`;
};

// ────────────────────────────────────────────────────────────────────────────

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

      {/* ── Playground ── */}
      <SectionHeader id="playground" title="Playground" />

      <Configurator
        controls={AVATAR_CONTROLS}
        defaultValues={AVATAR_DEFAULTS}
        codeTemplate={avatarCodeTemplate}
      >
        {(v) => (
          <Avatar
            initials={v.initials || 'JD'}
            size={v.size}
            status={v.status === 'none' ? undefined : v.status}
            verified={v.verified}
            border={v.border}
            rounded={v.rounded}
          />
        )}
      </Configurator>

      {/* ── Sizes ── */}
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

      {/* ── Initials ── */}
      <SectionHeader id="initials" title="With initials" />
      <Preview
        preview={
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Avatar size="md" initials="OR" />
            <Avatar size="md" initials="AB" />
            <Avatar size="md" initials="ZW" />
          </div>
        }
        code={`<Avatar size="md" initials="OR" />
<Avatar size="md" initials="AB" />
<Avatar size="md" initials="ZW" />`}
      />

      {/* ── Status ── */}
      <SectionHeader id="status" title="With status" />
      <Preview
        preview={
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Avatar size="md" initials="JD" status="online" />
            <Avatar size="md" initials="JD" status="offline" />
            <Avatar size="md" initials="JD" verified />
            <Avatar size="md" initials="JD" border />
          </div>
        }
        code={`<Avatar size="md" initials="JD" status="online" />
<Avatar size="md" initials="JD" status="offline" />
<Avatar size="md" initials="JD" verified />
<Avatar size="md" initials="JD" border />`}
      />

      {/* ── Props ── */}
      <SectionHeader id="props" title="Props" />
      <PropsTable props={PROPS} />
    </div>
  );
}
