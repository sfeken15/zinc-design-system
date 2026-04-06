import { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import * as Icons from '@untitledui/icons';
import { SearchSm, Copy01, Check } from '@untitledui/icons';
import { useDocsContext } from '@/docs/layout/docs-context';
import { Breadcrumb } from '@/docs/layout/breadcrumb';

// ── Build icon list from package exports ──────────────────────────────────────

const ALL_ICONS: string[] = Object.entries(Icons as Record<string, unknown>)
  .filter(([, v]) => typeof v === 'function')
  .map(([name]) => name)
  .sort();

// ── Helpers ──────────────────────────────────────────────────────────────────

// Convert PascalCase icon name to a readable label for display
function toLabel(name: string): string {
  return name.replace(/([A-Z][a-z])/g, ' $1').replace(/([0-9]+)/g, ' $1').trim();
}

const SECTIONS = [{ id: 'icons', label: 'Icons' }];

const SIZE_OPTIONS = [
  { label: 'SM', px: 16 },
  { label: 'MD', px: 20 },
  { label: 'LG', px: 24 },
];

// ── Icon cell ─────────────────────────────────────────────────────────────────

interface IconCellProps {
  name: string;
  size: number;
}

function IconCell({ name, size }: IconCellProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const copy = useCallback(() => {
    const importStr = `import { ${name} } from '@untitledui/icons';`;
    navigator.clipboard.writeText(importStr).then(() => {
      setCopied(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 1500);
    });
  }, [name]);

  useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }, []);

  const IconComponent = (Icons as Record<string, any>)[name];

  return (
    <button
      onClick={copy}
      title={`${name}\nClick to copy import`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        padding: '16px 8px 12px',
        borderRadius: 8,
        border: '1px solid transparent',
        background: 'transparent',
        cursor: 'pointer',
        transition: 'background 100ms linear, border-color 100ms linear',
        position: 'relative',
        width: '100%',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = 'var(--bg-subtle, var(--zinc-900))';
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-subtle, var(--zinc-800))';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = 'transparent';
        (e.currentTarget as HTMLElement).style.borderColor = 'transparent';
      }}
    >
      {/* Icon or copy-confirmed state */}
      <div style={{
        width: size + 8,
        height: size + 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: copied ? 'var(--fg-success-primary, #16a34a)' : 'var(--text-secondary)',
        flexShrink: 0,
      }}>
        {copied
          ? <Check size={size} />
          : <IconComponent size={size} />
        }
      </div>

      {/* Name label */}
      <span style={{
        fontSize: 10,
        lineHeight: 1.3,
        color: copied ? 'var(--text-brand-secondary, var(--text-tertiary))' : 'var(--text-tertiary)',
        fontFamily: 'var(--font-body)',
        textAlign: 'center',
        wordBreak: 'break-word',
        maxWidth: 80,
        transition: 'color 100ms linear',
      }}>
        {copied ? 'Copied!' : name}
      </span>
    </button>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export function IconsPage() {
  const { setSections } = useDocsContext();
  const [search, setSearch] = useState('');
  const [iconSize, setIconSize] = useState(20);

  useEffect(() => {
    setSections(SECTIONS);
    return () => setSections([]);
  }, [setSections]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return ALL_ICONS;
    return ALL_ICONS.filter((name) =>
      name.toLowerCase().includes(q) || toLabel(name).toLowerCase().includes(q)
    );
  }, [search]);

  return (
    <div>
      <Breadcrumb items={[{ label: 'Foundations' }, { label: 'Icons' }]} />

      <h1 style={{ fontSize: 28, fontWeight: 500, letterSpacing: '-0.02em', margin: '0 0 8px', color: 'var(--text-primary)' }}>
        Icons
      </h1>
      <p style={{ fontSize: 15, color: 'var(--text-secondary)', margin: '0 0 8px' }}>
        {ALL_ICONS.length.toLocaleString()} line-style icons from <strong>@untitledui/icons</strong>. Click any icon to copy its import statement.
      </p>
      <hr style={{ border: 'none', borderTop: '1px solid var(--border-default)', margin: '24px 0 32px' }} />

      {/* ── Controls ── */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
        {/* Search */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          flex: '1 1 240px',
          minWidth: 200,
          maxWidth: 400,
          padding: '8px 12px',
          borderRadius: 8,
          border: '1px solid var(--border-default)',
          background: 'var(--bg-primary)',
        }}>
          <SearchSm size={16} style={{ color: 'var(--text-tertiary)', flexShrink: 0 }} />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search icons…"
            style={{
              flex: 1,
              border: 'none',
              background: 'transparent',
              outline: 'none',
              fontSize: 14,
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-body)',
            }}
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              style={{
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                padding: 0,
                color: 'var(--text-tertiary)',
                lineHeight: 1,
                display: 'flex',
              }}
            >
              <Icons.XClose size={14} />
            </button>
          )}
        </div>

        {/* Size toggle */}
        <div style={{
          display: 'flex',
          borderRadius: 8,
          border: '1px solid var(--border-default)',
          overflow: 'hidden',
          flexShrink: 0,
        }}>
          {SIZE_OPTIONS.map(({ label, px }) => (
            <button
              key={px}
              onClick={() => setIconSize(px)}
              style={{
                padding: '7px 14px',
                fontSize: 13,
                fontWeight: iconSize === px ? 600 : 400,
                fontFamily: 'var(--font-body)',
                border: 'none',
                borderRight: '1px solid var(--border-default)',
                background: iconSize === px ? 'var(--nav-item-active)' : 'transparent',
                color: iconSize === px ? 'var(--text-primary)' : 'var(--text-tertiary)',
                cursor: 'pointer',
                transition: 'background 100ms linear, color 100ms linear',
              }}
            >
              {label}
            </button>
          ))}
          {/* remove trailing border on last button */}
          <style>{`.icon-size-btn:last-child { border-right: none !important; }`}</style>
        </div>

        {/* Count */}
        <span style={{ fontSize: 13, color: 'var(--text-tertiary)', whiteSpace: 'nowrap' }}>
          {filtered.length.toLocaleString()} icon{filtered.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* ── Import hint ── */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '10px 14px',
        borderRadius: 8,
        background: 'var(--bg-subtle, var(--zinc-900))',
        border: '1px solid var(--border-subtle, var(--zinc-800))',
        marginBottom: 24,
        fontSize: 13,
        color: 'var(--text-tertiary)',
        fontFamily: 'var(--font-mono, monospace)',
      }}>
        <Copy01 size={14} style={{ color: 'var(--text-tertiary)', flexShrink: 0 }} />
        <span>import &#123; IconName &#125; from &apos;@untitledui/icons&apos;;</span>
      </div>

      {/* ── Grid ── */}
      {filtered.length === 0 ? (
        <div style={{
          padding: '64px 0',
          textAlign: 'center',
          color: 'var(--text-tertiary)',
          fontSize: 15,
        }}>
          No icons found for &ldquo;{search}&rdquo;
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(96px, 1fr))',
          gap: 4,
        }}>
          {filtered.map((name) => (
            <IconCell key={name} name={name} size={iconSize} />
          ))}
        </div>
      )}
    </div>
  );
}
