import { useState } from 'react';
import type { ReactNode } from 'react';

interface PreviewProps {
  title?: string;
  preview: ReactNode;
  code: string;
}

export function Preview({ title, preview, code }: PreviewProps) {
  const [tab, setTab] = useState<'preview' | 'code'>('preview');

  const tabStyle = (active: boolean): React.CSSProperties => ({
    padding: '6px 14px',
    fontSize: 13,
    fontWeight: 500,
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    fontFamily: 'inherit',
    color: active ? 'var(--text-primary)' : 'var(--text-tertiary)',
    borderBottom: active ? '2px solid var(--graffiti-500)' : '2px solid transparent',
    transition: 'all 0.15s',
  });

  return (
    <div style={{ marginBottom: 32 }}>
      {title && (
        <h3
          style={{
            fontSize: 16,
            fontWeight: 500,
            color: 'var(--text-primary)',
            marginBottom: 12,
            marginTop: 0,
          }}
        >
          {title}
        </h3>
      )}

      <div
        style={{
          display: 'flex',
          borderBottom: '1px solid var(--border-default)',
        }}
      >
        <button style={tabStyle(tab === 'preview')} onClick={() => setTab('preview')}>
          Preview
        </button>
        <button style={tabStyle(tab === 'code')} onClick={() => setTab('code')}>
          Code
        </button>
      </div>

      {tab === 'preview' && (
        <div
          style={{
            minHeight: 160,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 40,
            border: '1px solid var(--border-default)',
            borderTop: 'none',
            borderRadius: '0 0 8px 8px',
            background: 'var(--bg-surface)',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          {preview}
        </div>
      )}

      {tab === 'code' && (
        <pre
          style={{
            margin: 0,
            padding: 24,
            background: 'var(--bg-subtle)',
            border: '1px solid var(--border-default)',
            borderTop: 'none',
            borderRadius: '0 0 8px 8px',
            fontSize: 13,
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-primary)',
            overflowX: 'auto',
            lineHeight: 1.6,
          }}
        >
          <code>{code}</code>
        </pre>
      )}
    </div>
  );
}
