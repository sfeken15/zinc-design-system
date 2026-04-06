import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDocsContext } from '@/docs/layout/docs-context';
import { Breadcrumb } from '@/docs/layout/breadcrumb';

const SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'stack', label: 'Tech stack' },
  { id: 'getting-started', label: 'Getting started' },
  { id: 'components', label: 'Components' },
];

const COMPONENTS = [
  { label: 'Avatar', path: '/components/avatar', description: 'Profile images with status, verified badge, and initials fallback.' },
  { label: 'Badge', path: '/components/badge', description: 'Semantic status labels in six color variants.' },
  { label: 'Button', path: '/components/button', description: 'Four variants, four sizes, loading and icon states.' },
  { label: 'Checkbox', path: '/components/checkbox', description: 'Boolean selection with indeterminate support.' },
  { label: 'Input', path: '/components/input', description: 'Text fields with label, hint, icon, and error states.' },
  { label: 'Select', path: '/components/select', description: 'Dropdown and combobox selection with search.' },
  { label: 'Tag', path: '/components/tag', description: 'Selectable pill tags for filters and categories.' },
  { label: 'Tooltip', path: '/components/tooltip', description: 'Contextual hints anchored to any element.' },
];

const STACK = [
  { label: 'React 19 + TypeScript', description: 'Fully typed components with strict mode enabled.' },
  { label: 'Tailwind CSS v4', description: 'Utility-first styling with CSS custom property tokens.' },
  { label: 'React Aria Components', description: 'Accessible primitives for keyboard and screen reader support.' },
  { label: '1,179 icons', description: 'Untitled UI line-style icon library, tree-shakeable.' },
];

export function IntroductionPage() {
  const { setSections } = useDocsContext();
  const navigate = useNavigate();

  useEffect(() => {
    setSections(SECTIONS);
    return () => setSections([]);
  }, [setSections]);

  return (
    <div>
      <Breadcrumb items={[{ label: 'Introduction' }]} />

      <h1
        style={{
          fontSize: 28,
          fontWeight: 500,
          letterSpacing: '-0.02em',
          margin: '0 0 8px',
          color: 'var(--text-primary)',
        }}
      >
        Zinc Design System
      </h1>
      <p style={{ fontSize: 15, color: 'var(--text-secondary)', margin: '0 0 32px' }}>
        A React component library built for Explore Joplin — consistent, accessible, and ready to ship.
      </p>

      <hr style={{ border: 'none', borderTop: '1px solid var(--border-default)', margin: '0 0 40px' }} />

      {/* ── Overview ── */}
      <div id="overview" style={{ marginBottom: 48 }}>
        <h2
          style={{
            fontSize: 20,
            fontWeight: 500,
            color: 'var(--text-primary)',
            margin: '0 0 12px',
            letterSpacing: '-0.01em',
          }}
        >
          Overview
        </h2>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.75, margin: '0 0 12px' }}>
          Zinc is the design system that powers Explore Joplin's products. It provides a curated set of
          React components, design tokens, and guidelines that keep every surface — marketing pages,
          dashboards, forms — visually cohesive and behaving predictably.
        </p>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.75, margin: 0 }}>
          Every component is built on React Aria Components, so keyboard navigation, focus management,
          and screen reader announcements are handled out of the box. Styling is done with Tailwind CSS
          v4 and a layered token system: primitive values (raw zinc, graffiti, blurple scales) feed into
          semantic aliases (text-primary, bg-surface, border-default) that automatically adapt between
          dark and light modes.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
            marginTop: 24,
          }}
        >
          {[
            { label: 'Primary', value: 'Graffiti Teal', sub: '#15B79E' },
            { label: 'Secondary', value: 'Blurple', sub: '#683DEE' },
            { label: 'Neutral', value: 'Zinc', sub: '#71717A' },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                padding: '20px 24px',
                borderRadius: 12,
                border: '1px solid var(--border-default)',
                background: 'var(--bg-surface)',
              }}
            >
              <p style={{ fontSize: 12, color: 'var(--text-tertiary)', margin: '0 0 6px' }}>
                {stat.label}
              </p>
              <p style={{ fontSize: 18, fontWeight: 500, color: 'var(--text-primary)', margin: '0 0 2px' }}>
                {stat.value}
              </p>
              <p style={{ fontSize: 12, color: 'var(--text-tertiary)', margin: 0, fontFamily: 'var(--font-mono)' }}>
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Tech stack ── */}
      <div id="stack" style={{ marginBottom: 48 }}>
        <h2
          style={{
            fontSize: 20,
            fontWeight: 500,
            color: 'var(--text-primary)',
            margin: '0 0 16px',
            letterSpacing: '-0.01em',
          }}
        >
          Tech stack
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
          {STACK.map((item) => (
            <div
              key={item.label}
              style={{
                padding: '16px 20px',
                borderRadius: 10,
                border: '1px solid var(--border-default)',
                background: 'var(--bg-surface)',
              }}
            >
              <p style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-primary)', margin: '0 0 4px' }}>
                {item.label}
              </p>
              <p style={{ fontSize: 13, color: 'var(--text-tertiary)', margin: 0, lineHeight: 1.6 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Getting started ── */}
      <div id="getting-started" style={{ marginBottom: 48 }}>
        <h2
          style={{
            fontSize: 20,
            fontWeight: 500,
            color: 'var(--text-primary)',
            margin: '0 0 12px',
            letterSpacing: '-0.01em',
          }}
        >
          Getting started
        </h2>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', margin: '0 0 16px' }}>
          Components are imported directly from their module paths. Use named imports for best tree-shaking:
        </p>
        <pre
          style={{
            margin: 0,
            padding: 24,
            background: 'var(--bg-subtle)',
            border: '1px solid var(--border-default)',
            borderRadius: 8,
            fontSize: 13,
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-primary)',
            lineHeight: 1.6,
            overflowX: 'auto',
          }}
        >
          <code>{`import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Avatar } from '@/components/Avatar';
import { Home01 } from '@untitledui/icons';

<Button variant="primary" size="md">Save changes</Button>
<Input label="Email" placeholder="you@example.com" />
<Avatar initials="JD" size="md" status="online" />
<Home01 className="size-5 text-primary" />`}</code>
        </pre>
      </div>

      {/* ── Components ── */}
      <div id="components">
        <h2
          style={{
            fontSize: 20,
            fontWeight: 500,
            color: 'var(--text-primary)',
            margin: '0 0 16px',
            letterSpacing: '-0.01em',
          }}
        >
          Components
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
          {COMPONENTS.map((c) => (
            <button
              key={c.path}
              onClick={() => navigate(c.path)}
              style={{
                padding: '16px 20px',
                borderRadius: 10,
                border: '1px solid var(--border-default)',
                background: 'var(--bg-surface)',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'border-color 100ms linear, background 100ms linear',
                fontFamily: 'inherit',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border-brand)';
                (e.currentTarget as HTMLButtonElement).style.background = 'var(--bg-subtle)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border-default)';
                (e.currentTarget as HTMLButtonElement).style.background = 'var(--bg-surface)';
              }}
            >
              <p style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-primary)', margin: '0 0 4px' }}>
                {c.label}
              </p>
              <p style={{ fontSize: 13, color: 'var(--text-tertiary)', margin: 0, lineHeight: 1.6 }}>
                {c.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
