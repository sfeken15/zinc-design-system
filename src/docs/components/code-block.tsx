interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code }: CodeBlockProps) {
  return (
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
        overflowX: 'auto',
        lineHeight: 1.6,
      }}
    >
      <code>{code}</code>
    </pre>
  );
}
