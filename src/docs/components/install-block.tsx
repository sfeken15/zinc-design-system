import { useState } from 'react';

interface InstallBlockProps {
  cliName: string;
  manualPath: string;
}

export function InstallBlock({ cliName, manualPath }: InstallBlockProps) {
  const [tab, setTab] = useState<'cli' | 'manual'>('cli');

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

  const preStyle: React.CSSProperties = {
    margin: 0,
    padding: 20,
    background: 'var(--bg-subtle)',
    border: '1px solid var(--border-default)',
    borderTop: 'none',
    borderRadius: '0 0 8px 8px',
    fontSize: 13,
    fontFamily: 'var(--font-mono)',
    color: 'var(--text-primary)',
    overflowX: 'auto',
    lineHeight: 1.6,
  };

  return (
    <div style={{ marginBottom: 32 }}>
      <div style={{ display: 'flex', borderBottom: '1px solid var(--border-default)' }}>
        <button style={tabStyle(tab === 'cli')} onClick={() => setTab('cli')}>CLI</button>
        <button style={tabStyle(tab === 'manual')} onClick={() => setTab('manual')}>Manual</button>
      </div>
      {tab === 'cli' ? (
        <pre style={preStyle}><code>{`npx untitledui@latest add ${cliName}`}</code></pre>
      ) : (
        <pre style={preStyle}><code>{`// Copy the component from:\n// ${manualPath}`}</code></pre>
      )}
    </div>
  );
}
