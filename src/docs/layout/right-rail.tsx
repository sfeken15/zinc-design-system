import { useDocsContext } from './docs-context';

export function RightRail() {
  const { sections } = useDocsContext();

  if (!sections.length) {
    return (
      <div
        style={{
          width: 200,
          position: 'fixed',
          right: 0,
          top: 0,
          bottom: 0,
          borderLeft: '1px solid var(--border-default)',
        }}
      />
    );
  }

  return (
    <div
      style={{
        width: 200,
        position: 'fixed',
        right: 0,
        top: 0,
        bottom: 0,
        padding: '48px 24px',
        borderLeft: '1px solid var(--border-default)',
        overflowY: 'auto',
        background: 'var(--bg-page)',
      }}
    >
      <p
        style={{
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--text-tertiary)',
          marginBottom: 12,
          marginTop: 0,
        }}
      >
        On this page
      </p>
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          style={{
            display: 'block',
            fontSize: 13,
            color: 'var(--text-tertiary)',
            textDecoration: 'none',
            padding: '4px 0',
            transition: 'color 0.15s',
          }}
        >
          {s.label}
        </a>
      ))}
    </div>
  );
}
