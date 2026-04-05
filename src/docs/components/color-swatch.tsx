import { useState } from 'react';

interface ColorSwatchProps {
  name: string;
  hex: string;
  textDark?: boolean;
}

export function ColorSwatch({ name, hex, textDark = false }: ColorSwatchProps) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={copy}
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        textAlign: 'left',
        fontFamily: 'inherit',
      }}
    >
      <div
        style={{
          width: '100%',
          height: 56,
          borderRadius: 8,
          background: hex,
          border: '1px solid var(--border-subtle)',
          marginBottom: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 11,
          color: textDark ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.7)',
          transition: 'opacity 0.15s',
        }}
      >
        {copied ? 'Copied!' : ''}
      </div>
      <p style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-primary)', margin: '0 0 2px' }}>
        {name}
      </p>
      <p
        style={{
          fontSize: 11,
          color: 'var(--text-tertiary)',
          margin: 0,
          fontFamily: 'var(--font-mono)',
        }}
      >
        {hex}
      </p>
    </button>
  );
}
