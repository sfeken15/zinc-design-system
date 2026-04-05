import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDocsContext } from '@/docs/layout/docs-context';
import { Breadcrumb } from '@/docs/layout/breadcrumb';
import { LogoHologram } from '@/components/logos/Logo';

const SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'getting-started', label: 'Getting started' },
  { id: 'components', label: 'Components' },
];

const COMPONENTS = [
  { label: 'Button', path: '/components/button', description: 'Four variants, four sizes. Fully rounded.' },
  { label: 'Input', path: '/components/input', description: 'Text fields with label, hint, and error states.' },
  { label: 'Textarea', path: '/components/textarea', description: 'Multi-line input with character count.' },
  { label: 'Tag', path: '/components/tag', description: 'Selectable pill tags for filters and options.' },
  { label: 'Slider', path: '/components/slider', description: 'Range slider with left/right labels.' },
  { label: 'Badge', path: '/components/badge', description: 'Six semantic variants for status labeling.' },
  { label: 'Card', path: '/components/card', description: 'Surface container with active and hover states.' },
  { label: 'StepDots', path: '/components/stepdots', description: 'Progress indicator for multi-step flows.' },
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
      <Breadcrumb items={[{ label: 'Zinc Design System' }]} />

      <div style={{ marginBottom: 32 }}>
        <LogoHologram height={32} />
      </div>

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
      <p style={{ fontSize: 15, color: 'var(--text-secondary)', margin: '0 0 40px' }}>
        The official design system of Explore Joplin — built for consistency, accessibility, and speed.
      </p>

      <hr style={{ border: 'none', borderTop: '1px solid var(--border-default)', margin: '0 0 40px' }} />

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
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
          Zinc is a React component library built on React Aria Components for accessibility,
          styled with Tailwind CSS v4 and a curated set of CSS custom properties. It ships with
          a graffiti-teal primary palette, a blurple secondary, and zinc neutrals — all wired
          for dark-first theming with light mode opt-in.
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
            { label: 'Primary color', value: 'Graffiti', sub: '#15B79E' },
            { label: 'Secondary color', value: 'Blurple', sub: '#683DEE' },
            { label: 'Neutral', value: 'Zinc', sub: '#71717A mid' },
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
              <p
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  margin: '0 0 2px',
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontSize: 12,
                  color: 'var(--text-tertiary)',
                  margin: 0,
                  fontFamily: 'var(--font-mono)',
                }}
              >
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>

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
          All components are exported from the package root. Import and use directly:
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
          }}
        >
          <code>{`import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Badge } from '@/components/Badge';

<Button variant="primary">Save changes</Button>
<Input label="Email" placeholder="you@example.com" />
<Badge label="Success" variant="success" />`}</code>
        </pre>
      </div>

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
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 12,
          }}
        >
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
                transition: 'border-color 0.15s, background 0.15s',
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
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  margin: '0 0 4px',
                }}
              >
                {c.label}
              </p>
              <p style={{ fontSize: 13, color: 'var(--text-tertiary)', margin: 0 }}>
                {c.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
