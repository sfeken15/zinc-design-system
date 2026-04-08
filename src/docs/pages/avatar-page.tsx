import { useEffect } from 'react';
import { useDocsContext } from '@/docs/layout/docs-context';
import { Breadcrumb } from '@/docs/layout/breadcrumb';
import { Preview } from '@/docs/components/preview';
import { PropsTable } from '@/docs/components/props-table';
import { SectionHeader } from '@/docs/components/section-header';
import { Configurator } from '@/docs/components/Configurator';
import { ZincAvatar } from '@/components/ZincAvatar';

const SECTIONS = [
  { id: 'playground', label: 'Playground' },
  { id: 'sizes', label: 'Sizes' },
  { id: 'gradient-only', label: 'Gradient (no initials)' },
  { id: 'with-initials', label: 'With initials' },
  { id: 'with-photo', label: 'With photo' },
  { id: 'label-group', label: 'Label group' },
  { id: 'group', label: 'Avatar group' },
  { id: 'props', label: 'Props' },
];

const PROPS = [
  { name: 'name', type: 'string', default: '"User"', description: 'Seeds the gradient — same name always generates the same avatar' },
  { name: 'src', type: 'string', default: '—', description: 'If provided, renders a photo instead of the gradient' },
  { name: 'showInitials', type: 'boolean', default: 'false', description: 'Overlays initials on the gradient' },
  { name: 'size', type: '"xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"', default: '"md"', description: 'Size variant' },
  { name: 'className', type: 'string', default: '""', description: 'Additional CSS classes' },
  { name: 'alt', type: 'string', default: 'name', description: 'Alt text for photo avatars' },
];

// ── Configurator setup ──────────────────────────────────────────────────────

const AVATAR_CONTROLS = [
  { type: 'text' as const, key: 'name', label: 'Name', placeholder: 'Jane Doe' },
  { type: 'text' as const, key: 'subLabel', label: 'Sub-label', placeholder: 'Product Designer' },
  { type: 'toggle' as const, key: 'showInitials', label: 'Show initials' },
  { type: 'toggle' as const, key: 'showName', label: 'Show name' },
  { type: 'toggle' as const, key: 'showSubLabel', label: 'Show sub-label' },
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
];

const AVATAR_DEFAULTS = {
  name: 'Jane Doe',
  subLabel: 'Product Designer',
  showInitials: false,
  showName: true,
  showSubLabel: true,
  size: 'md',
};

const avatarCodeTemplate = (v: Record<string, any>) => {
  const lines = [`<ZincAvatar`];
  lines.push(`  name="${v.name}"`);
  lines.push(`  size="${v.size}"`);
  if (v.showInitials) lines.push(`  showInitials`);
  lines.push(`/>`);

  if (v.showName) {
    return [
      `<div className="flex items-center gap-3">`,
      `  ${lines.join('\n  ')}`,
      `  <div>`,
      `    <p className="text-sm font-medium">${v.name}</p>`,
      v.showSubLabel
        ? `    <p className="text-sm text-[var(--text-tertiary)]">${v.subLabel}</p>`
        : '',
      `  </div>`,
      `</div>`,
    ]
      .filter(Boolean)
      .join('\n');
  }

  return lines.join('\n');
};

// ── Sample data ─────────────────────────────────────────────────────────────

const SAMPLE_NAMES = [
  'Jane Doe',
  'Marcus Hill',
  'Priya Nair',
  'Tom Chen',
  'Zoe Wright',
  'Alex Kim',
  'Sam Rivera',
  'Nina Park',
];

const LABEL_GROUP_PEOPLE = [
  { name: 'Jane Doe', sub: 'Product Designer' },
  { name: 'Marcus Hill', sub: 'Engineering Lead' },
  { name: 'Priya Nair', sub: 'Marketing Director' },
];

const GROUP_NAMES = ['Jane Doe', 'Marcus Hill', 'Priya Nair', 'Tom Chen', 'Zoe Wright'];

const ALL_SIZES = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const;

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

      <h1
        style={{
          fontSize: 28,
          fontWeight: 500,
          letterSpacing: '-0.02em',
          margin: '0 0 8px',
          color: 'var(--text-primary)',
        }}
      >
        Avatar
      </h1>
      <p style={{ fontSize: 15, color: 'var(--text-secondary)', margin: '0 0 32px' }}>
        Deterministic hologram gradient avatars seeded from a user's name. No broken
        image states — the gradient is always the fallback.
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
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <ZincAvatar
              name={v.name || 'Jane Doe'}
              size={v.size}
              showInitials={v.showInitials}
            />
            {v.showName && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    fontFamily: "'General Sans', system-ui, sans-serif",
                  }}
                >
                  {v.name || 'Jane Doe'}
                </span>
                {v.showSubLabel && (
                  <span
                    style={{
                      fontSize: 13,
                      color: 'var(--text-tertiary)',
                      fontFamily: "'General Sans', system-ui, sans-serif",
                    }}
                  >
                    {v.subLabel}
                  </span>
                )}
              </div>
            )}
          </div>
        )}
      </Configurator>

      {/* ── Sizes ── */}
      <SectionHeader id="sizes" title="Sizes" />
      <Preview
        preview={
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              gap: 16,
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {ALL_SIZES.map((size) => (
              <div
                key={size}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
              >
                <ZincAvatar name="Jane Doe" size={size} />
                <span style={{ fontSize: 11, color: 'var(--text-tertiary)' }}>{size}</span>
              </div>
            ))}
          </div>
        }
        code={`<ZincAvatar name="Jane Doe" size="xxs" />
<ZincAvatar name="Jane Doe" size="xs" />
<ZincAvatar name="Jane Doe" size="sm" />
<ZincAvatar name="Jane Doe" size="md" />
<ZincAvatar name="Jane Doe" size="lg" />
<ZincAvatar name="Jane Doe" size="xl" />
<ZincAvatar name="Jane Doe" size="2xl" />`}
      />

      {/* ── Gradient only ── */}
      <SectionHeader
        id="gradient-only"
        title="Gradient (no initials)"
        subtitle="The default avatar — a deterministic hologram gradient seeded from the user's name. Same name always produces the same gradient."
      />
      <Preview
        preview={
          <div
            style={{
              display: 'flex',
              gap: 12,
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {SAMPLE_NAMES.map((name) => (
              <div
                key={name}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}
              >
                <ZincAvatar name={name} size="md" />
                <span style={{ fontSize: 11, color: 'var(--text-tertiary)' }}>
                  {name.split(' ')[0]}
                </span>
              </div>
            ))}
          </div>
        }
        code={`<ZincAvatar name="Jane Doe" size="md" />
<ZincAvatar name="Marcus Hill" size="md" />
<ZincAvatar name="Priya Nair" size="md" />`}
      />

      {/* ── With initials ── */}
      <SectionHeader
        id="with-initials"
        title="With initials"
        subtitle="Add showInitials to overlay the user's initials on the gradient. Text uses General Sans Medium at a size relative to the avatar."
      />
      <Preview
        preview={
          <div
            style={{
              display: 'flex',
              gap: 12,
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {SAMPLE_NAMES.map((name) => (
              <div
                key={name}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}
              >
                <ZincAvatar name={name} size="md" showInitials />
                <span style={{ fontSize: 11, color: 'var(--text-tertiary)' }}>
                  {name.split(' ')[0]}
                </span>
              </div>
            ))}
          </div>
        }
        code={`<ZincAvatar name="Jane Doe" size="md" showInitials />
<ZincAvatar name="Marcus Hill" size="md" showInitials />
<ZincAvatar name="Priya Nair" size="md" showInitials />`}
      />

      {/* ── With photo ── */}
      <SectionHeader
        id="with-photo"
        title="With photo"
        subtitle="When a src is provided, the photo renders instead of the gradient. The gradient is the fallback — no broken image states."
      />
      <Preview
        preview={
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', justifyContent: 'center' }}>
            <ZincAvatar
              name="Jane Doe"
              src="https://i.pravatar.cc/150?img=47"
              size="xl"
            />
            <ZincAvatar
              name="Marcus Hill"
              src="https://i.pravatar.cc/150?img=12"
              size="xl"
            />
            <ZincAvatar
              name="No Photo"
              size="xl"
            />
          </div>
        }
        code={`{/* With photo */}
<ZincAvatar name="Jane Doe" src="/path/to/photo.jpg" size="xl" />

{/* Falls back to gradient */}
<ZincAvatar name="Jane Doe" size="xl" />`}
      />

      {/* ── Label group ── */}
      <SectionHeader
        id="label-group"
        title="Label group"
        subtitle="Compose ZincAvatar with text for user identification labels."
      />
      <Preview
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {LABEL_GROUP_PEOPLE.map(({ name, sub }) => (
              <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <ZincAvatar name={name} size="md" showInitials />
                <div>
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: 500,
                      color: 'var(--text-primary)',
                      margin: 0,
                    }}
                  >
                    {name}
                  </p>
                  <p style={{ fontSize: 13, color: 'var(--text-tertiary)', margin: 0 }}>{sub}</p>
                </div>
              </div>
            ))}
          </div>
        }
        code={`<div className="flex items-center gap-3">
  <ZincAvatar name="Jane Doe" size="md" showInitials />
  <div>
    <p className="text-sm font-medium">Jane Doe</p>
    <p className="text-sm text-[var(--text-tertiary)]">Product Designer</p>
  </div>
</div>`}
      />

      {/* ── Avatar group ── */}
      <SectionHeader
        id="group"
        title="Avatar group"
        subtitle="Stack multiple avatars for team or participant displays."
      />
      <Preview
        preview={
          <div style={{ display: 'flex', marginLeft: 8 }}>
            {GROUP_NAMES.map((name, i) => (
              <div
                key={name}
                style={{ marginLeft: i === 0 ? 0 : -8, zIndex: GROUP_NAMES.length - i }}
              >
                <ZincAvatar
                  name={name}
                  size="md"
                  showInitials
                  className="ring-2 ring-[var(--bg-page)]"
                />
              </div>
            ))}
          </div>
        }
        code={`<div className="flex">
  {users.map((user, i) => (
    <div
      key={user.name}
      style={{ marginLeft: i === 0 ? 0 : -8, zIndex: users.length - i }}
    >
      <ZincAvatar
        name={user.name}
        size="md"
        showInitials
        className="ring-2 ring-[var(--bg-page)]"
      />
    </div>
  ))}
</div>`}
      />

      {/* ── Props ── */}
      <SectionHeader id="props" title="Props" />
      <PropsTable props={PROPS} />
    </div>
  );
}
