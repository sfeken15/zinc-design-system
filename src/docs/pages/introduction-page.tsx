import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LayersThree01,
  Palette,
  Type01,
  Code01,
  GitBranch01,
  Moon01,
  Copy01,
  Check,
} from '@untitledui/icons';
import { useDocsContext } from '@/docs/layout/docs-context';
import { Breadcrumb } from '@/docs/layout/breadcrumb';
import { Button } from '@/components/Button';

const SECTIONS = [
  { id: 'whats-included', label: "What's included" },
  { id: 'tech-stack', label: 'Tech stack' },
  { id: 'getting-started', label: 'Getting started' },
  { id: 'quick-links', label: 'Quick links' },
];

const INCLUDED_CARDS = [
  {
    icon: LayersThree01,
    title: '11 components',
    description: 'Button, Input, Tag, Slider, Badge, Card, StepDots, and more.',
  },
  {
    icon: Palette,
    title: 'Brand tokens',
    description: 'Full color system — Graffiti, Blurple, and Zinc — light and dark mode.',
  },
  {
    icon: Type01,
    title: 'General Sans',
    description: "Explore Joplin's primary font applied across all components.",
  },
  {
    icon: Code01,
    title: 'React + TypeScript',
    description: 'Built on Vite, Tailwind CSS v4, and React Aria.',
  },
  {
    icon: GitBranch01,
    title: 'Open source',
    description: 'MIT licensed. Fork it, extend it, use it in any EJ product.',
  },
  {
    icon: Moon01,
    title: 'Dark mode default',
    description: 'Tools default to dark. Light mode available with a class toggle.',
  },
];

const STACK_CARDS = [
  {
    title: 'React 19 + TypeScript',
    description: 'Fully typed components with strict mode enabled.',
  },
  {
    title: 'Tailwind CSS v4',
    description: 'Utility-first styling with CSS custom property tokens.',
  },
  {
    title: 'React Aria Components',
    description: 'Accessible primitives for keyboard and screen reader support.',
  },
  {
    title: '1,179 icons',
    description: 'Untitled UI line-style icon library, tree-shakeable.',
  },
];

const CODE_SAMPLE = `import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Badge } from '@/components/Badge';
import { Tag } from '@/components/Tag';

export function Example() {
  return (
    <div className="flex items-center gap-3">
      <Badge label="New" variant="brand" />
      <Input placeholder="Search Joplin..." />
      <Button variant="primary">Explore</Button>
    </div>
  );
}`;

const QUICK_LINKS = [
  { label: 'Browse all components', href: '/components/button', external: false },
  { label: 'Colors & brand tokens', href: '/colors', external: false },
  { label: 'Typography', href: '/typography', external: false },
  { label: 'Logos', href: '/logos', external: false },
  {
    label: 'GitHub repository\u00a0↗',
    href: 'https://github.com/sfeken15/zinc-design-system',
    external: true,
  },
];

const sectionLabelStyle: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'var(--text-tertiary)',
  margin: '0 0 16px',
};

const cardStyle: React.CSSProperties = {
  padding: 20,
  borderRadius: 12,
  border: '1px solid var(--border-default)',
  background: 'var(--bg-surface)',
};

const cardTitleStyle: React.CSSProperties = {
  fontSize: 15,
  fontWeight: 600,
  color: 'var(--text-primary)',
  margin: '0 0 4px',
};

const cardDescStyle: React.CSSProperties = {
  fontSize: 13,
  color: 'var(--text-secondary)',
  margin: 0,
  lineHeight: 1.5,
};

export function IntroductionPage() {
  const { setSections } = useDocsContext();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setSections(SECTIONS);
    return () => setSections([]);
  }, [setSections]);

  function handleCopy() {
    navigator.clipboard.writeText(CODE_SAMPLE).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  return (
    <div>
      <Breadcrumb items={[{ label: 'Introduction' }]} />

      {/* ── Hero ── */}
      <h1
        style={{
          fontSize: 28,
          fontWeight: 500,
          letterSpacing: '-0.02em',
          margin: '0 0 16px',
          color: 'var(--text-primary)',
        }}
      >
        Zinc Design System
      </h1>
      <p
        style={{
          fontSize: 16,
          color: 'var(--text-secondary)',
          margin: 0,
          maxWidth: 640,
          lineHeight: 1.7,
        }}
      >
        Zinc is the design system that powers Explore Joplin's products. It provides a curated set
        of React components, design tokens, and guidelines that keep every surface visually
        cohesive — from marketing pages to dashboards to AI-powered tools.
      </p>
      <p
        style={{
          fontSize: 16,
          color: 'var(--text-secondary)',
          margin: '12px 0 0',
          maxWidth: 640,
          lineHeight: 1.7,
        }}
      >
        Every component is built on React Aria, so keyboard navigation, focus management, and
        screen reader support are handled out of the box. Styling uses Tailwind CSS v4 with a
        layered token system — Graffiti, Blurple, and Zinc scales — that automatically adapts
        between dark and light mode.
      </p>

      <div style={{ display: 'flex', gap: 12, marginTop: 24, marginBottom: 40 }}>
        <Button variant="primary" size="md" onClick={() => navigate('/components/button')}>
          Browse components
        </Button>
        <Button
          variant="secondary"
          size="md"
          onClick={() =>
            window.open('https://github.com/sfeken15/zinc-design-system', '_blank')
          }
        >
          View on GitHub ↗
        </Button>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid var(--border-default)', margin: '0 0 48px' }} />

      {/* ── What's included ── */}
      <div id="whats-included" style={{ marginBottom: 48 }}>
        <p style={sectionLabelStyle}>What's included</p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
          }}
        >
          {INCLUDED_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} style={cardStyle}>
                <Icon
                  className="size-5"
                  style={{ color: 'var(--text-brand)', marginBottom: 12 }}
                  aria-hidden
                />
                <p style={cardTitleStyle}>{card.title}</p>
                <p style={cardDescStyle}>{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid var(--border-default)', margin: '0 0 48px' }} />

      {/* ── Tech stack ── */}
      <div id="tech-stack" style={{ marginBottom: 48 }}>
        <p style={sectionLabelStyle}>Tech stack</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          {STACK_CARDS.map((card) => (
            <div key={card.title} style={cardStyle}>
              <p style={cardTitleStyle}>{card.title}</p>
              <p style={cardDescStyle}>{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid var(--border-default)', margin: '0 0 48px' }} />

      {/* ── Getting started ── */}
      <div id="getting-started" style={{ marginBottom: 48 }}>
        <p style={sectionLabelStyle}>Getting started</p>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', margin: '0 0 16px', lineHeight: 1.6 }}>
          Components are imported directly from their module paths. Use named imports for best
          tree-shaking:
        </p>
        <div style={{ position: 'relative' }}>
          <pre
            style={{
              margin: 0,
              padding: 20,
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
            <code>{CODE_SAMPLE}</code>
          </pre>
          <button
            onClick={handleCopy}
            style={{
              position: 'absolute',
              top: 12,
              right: 12,
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              padding: '4px 10px',
              fontSize: 12,
              fontWeight: 500,
              fontFamily: 'inherit',
              borderRadius: 6,
              border: '1px solid var(--border-default)',
              background: 'var(--bg-surface)',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              transition: 'background 100ms linear, color 100ms linear',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = 'var(--bg-hover)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = 'var(--bg-surface)';
            }}
          >
            {copied ? (
              <>
                <Check className="size-3" aria-hidden />
                Copied!
              </>
            ) : (
              <>
                <Copy01 className="size-3" aria-hidden />
                Copy
              </>
            )}
          </button>
        </div>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid var(--border-default)', margin: '0 0 48px' }} />

      {/* ── Quick links ── */}
      <div id="quick-links">
        <p style={sectionLabelStyle}>Quick links</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {QUICK_LINKS.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  color: 'var(--text-brand)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.textDecoration = 'underline';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.textDecoration = 'none';
                }}
              >
                <span style={{ color: 'var(--text-tertiary)' }}>→</span>
                {link.label}
              </a>
            ) : (
              <button
                key={link.href}
                onClick={() => navigate(link.href)}
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  color: 'var(--text-brand)',
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontFamily: 'inherit',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.textDecoration = 'underline';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.textDecoration = 'none';
                }}
              >
                <span style={{ color: 'var(--text-tertiary)' }}>→</span>
                {link.label}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}
