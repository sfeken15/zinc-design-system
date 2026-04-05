interface Prop {
  name: string;
  type: string;
  default?: string;
  description: string;
}

export function PropsTable({ props }: { props: Prop[] }) {
  const th: React.CSSProperties = {
    fontSize: 12,
    fontWeight: 500,
    color: 'var(--text-tertiary)',
    textAlign: 'left',
    padding: '10px 16px',
    borderBottom: '1px solid var(--border-default)',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
  };

  const td: React.CSSProperties = {
    fontSize: 13,
    padding: '12px 16px',
    borderBottom: '1px solid var(--border-subtle)',
    verticalAlign: 'top',
  };

  return (
    <div
      style={{
        border: '1px solid var(--border-default)',
        borderRadius: 8,
        overflow: 'hidden',
        marginTop: 16,
      }}
    >
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead style={{ background: 'var(--bg-subtle)' }}>
          <tr>
            <th style={th}>Prop</th>
            <th style={th}>Type</th>
            <th style={th}>Default</th>
            <th style={th}>Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((p, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? 'transparent' : 'var(--bg-subtle)' }}>
              <td style={td}>
                <code
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 12,
                    color: 'var(--text-brand)',
                    background: 'var(--bg-brand-subtle)',
                    padding: '2px 6px',
                    borderRadius: 4,
                  }}
                >
                  {p.name}
                </code>
              </td>
              <td style={td}>
                <code
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 12,
                    color: 'var(--text-accent)',
                  }}
                >
                  {p.type}
                </code>
              </td>
              <td style={{ ...td, color: 'var(--text-tertiary)' }}>{p.default ?? '—'}</td>
              <td style={{ ...td, color: 'var(--text-secondary)' }}>{p.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
