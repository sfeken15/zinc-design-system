interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
      {items.map((item, i) => (
        <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {i > 0 && (
            <span style={{ fontSize: 13, color: 'var(--text-tertiary)' }}>›</span>
          )}
          <span
            style={{
              fontSize: 13,
              color: i === items.length - 1 ? 'var(--text-primary)' : 'var(--text-tertiary)',
              fontWeight: i === items.length - 1 ? 500 : 400,
            }}
          >
            {item.label}
          </span>
        </span>
      ))}
    </div>
  );
}
