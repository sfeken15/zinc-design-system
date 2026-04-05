interface SectionHeaderProps {
  id: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ id, title, subtitle }: SectionHeaderProps) {
  return (
    <div id={id} style={{ marginBottom: 24, paddingTop: 48 }}>
      <h2
        style={{
          fontSize: 20,
          fontWeight: 500,
          color: 'var(--text-primary)',
          margin: '0 0 6px',
          letterSpacing: '-0.01em',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', margin: 0 }}>{subtitle}</p>
      )}
    </div>
  );
}
