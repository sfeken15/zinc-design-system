import { useEffect, useState } from 'react';
import { useDocsContext } from '@/docs/layout/docs-context';
import { Breadcrumb } from '@/docs/layout/breadcrumb';
import { Copy01, Check } from '@untitledui/icons';

const SECTIONS = [
  { id: 'requirements', label: 'Requirements' },
  { id: 'clone', label: 'Clone the repo' },
  { id: 'install', label: 'Install dependencies' },
  { id: 'import-tokens', label: 'Import tokens' },
  { id: 'use-components', label: 'Use components' },
  { id: 'dark-mode', label: 'Dark mode' },
  { id: 'existing-project', label: 'Existing project' },
];

// ── Shared styles ─────────────────────────────────────────────────────────────

const h2Style: React.CSSProperties = {
  fontSize: 20,
  fontWeight: 500,
  color: 'var(--text-primary)',
  margin: '0 0 8px',
  letterSpacing: '-0.01em',
};

const h3Style: React.CSSProperties = {
  fontSize: 15,
  fontWeight: 600,
  color: 'var(--text-primary)',
  margin: '0 0 8px',
};

const bodyStyle: React.CSSProperties = {
  fontSize: 14,
  color: 'var(--text-secondary)',
  lineHeight: 1.7,
  margin: '0 0 16px',
};

const hrStyle: React.CSSProperties = {
  border: 'none',
  borderTop: '1px solid var(--border-default)',
  margin: '0 0 48px',
};

const preStyle: React.CSSProperties = {
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
};

// ── NoteBlock ─────────────────────────────────────────────────────────────────

type NoteType = 'info' | 'tip' | 'success' | 'warning';

const noteStyles: Record<NoteType, { border: string; background: string }> = {
  info: {
    border: '3px solid var(--border-brand)',
    background: 'var(--bg-brand-subtle, rgba(104, 61, 238, 0.06))',
  },
  tip: {
    border: '3px solid #15B79E',
    background: 'rgba(21, 183, 158, 0.06)',
  },
  success: {
    border: '3px solid #15B79E',
    background: 'rgba(21, 183, 158, 0.08)',
  },
  warning: {
    border: '3px solid #F79009',
    background: 'rgba(247, 144, 9, 0.06)',
  },
};

function NoteBlock({ type, children }: { type: NoteType; children: React.ReactNode }) {
  const s = noteStyles[type];
  return (
    <div
      style={{
        borderLeft: s.border,
        background: s.background,
        borderRadius: '0 8px 8px 0',
        padding: '12px 16px',
        fontSize: 13,
        color: 'var(--text-secondary)',
        lineHeight: 1.6,
        margin: '16px 0',
      }}
    >
      {children}
    </div>
  );
}

// ── CodeBlock with copy button ────────────────────────────────────────────────

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  return (
    <div style={{ position: 'relative' }}>
      <pre style={preStyle}>
        <code>{code}</code>
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
          transition: 'background 100ms linear',
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
  );
}

// ── Package manager tab switcher ─────────────────────────────────────────────

type PM = 'npm' | 'yarn' | 'bun';

const PM_COMMANDS: Record<PM, string> = {
  npm: 'npm install',
  yarn: 'yarn install',
  bun: 'bun install',
};

function PMTabs() {
  const [selected, setSelected] = useState<PM>('npm');

  return (
    <div>
      <div
        style={{
          display: 'flex',
          gap: 0,
          borderBottom: '1px solid var(--border-default)',
          marginBottom: 0,
        }}
      >
        {(['npm', 'yarn', 'bun'] as PM[]).map((pm) => (
          <button
            key={pm}
            onClick={() => setSelected(pm)}
            style={{
              padding: '8px 16px',
              fontSize: 13,
              fontWeight: selected === pm ? 600 : 400,
              fontFamily: 'inherit',
              color: selected === pm ? 'var(--text-primary)' : 'var(--text-tertiary)',
              background: 'none',
              border: 'none',
              borderBottom: selected === pm
                ? '2px solid var(--text-brand, #15B79E)'
                : '2px solid transparent',
              marginBottom: -1,
              cursor: 'pointer',
              transition: 'color 100ms linear',
            }}
          >
            {pm}
          </button>
        ))}
      </div>
      <CodeBlock code={PM_COMMANDS[selected]} />
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

const REQUIREMENTS = [
  { dep: 'Node.js', version: '18.0+' },
  { dep: 'React', version: '18.0+' },
  { dep: 'TypeScript', version: '5.0+' },
  { dep: 'Tailwind CSS', version: '4.0+' },
  { dep: 'Vite', version: '5.0+' },
];

const KEY_DEPS = [
  { pkg: 'react-aria-components', desc: 'Accessible component primitives' },
  { pkg: '@untitledui/icons', desc: '1,179 line-style icons' },
  { pkg: 'tailwind-merge', desc: 'Intelligent Tailwind class merging' },
  { pkg: 'tailwindcss-animate', desc: 'Animation utilities' },
  { pkg: 'tailwindcss-react-aria-components', desc: 'React Aria + Tailwind integration' },
];

const CODE_CLONE = `git clone https://github.com/sfeken15/zinc-design-system.git
cd zinc-design-system`;

const CODE_TOKENS = `// src/main.tsx
import '@/styles/globals.css'; // Imports tokens, fonts, and base styles`;

const CODE_COMPONENTS = `import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Tag } from '@/components/Tag';
import { Badge } from '@/components/Badge';
import { Card } from '@/components/Card';

export function MyScreen() {
  return (
    <Card>
      <Badge label="New" variant="brand" />
      <Input
        label="Business name"
        placeholder="What's your business called?"
      />
      <Button variant="primary" size="md">
        Continue
      </Button>
    </Card>
  );
}`;

const CODE_DARK_PROVIDER = `// src/main.tsx — already configured in zinc-design-system
import { ThemeProvider } from '@/providers/theme-provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark">
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);`;

const CODE_DARK_TOGGLE = `import { useTheme } from '@/providers/theme-provider';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? 'Light mode' : 'Dark mode'}
    </button>
  );
}`;

const CODE_PEER_DEPS = `npm install react-aria-components @untitledui/icons tailwind-merge tailwindcss-animate tailwindcss-react-aria-components @tailwindcss/vite`;

const CODE_IMPORT_GLOBALS = `import '@/styles/globals.css';`;

const FILE_TREE = `zinc-design-system/
├── src/
│   ├── components/     ← All Zinc components
│   ├── tokens/         ← tokens.css + fonts.css
│   ├── providers/      ← ThemeProvider, RouteProvider
│   ├── utils/          ← cx.ts (tailwind-merge utility)
│   └── styles/         ← globals.css
└── public/
    └── fonts/          ← General Sans font files`;

export function InstallationPage() {
  const { setSections } = useDocsContext();

  useEffect(() => {
    setSections(SECTIONS);
    return () => setSections([]);
  }, [setSections]);

  return (
    <div>
      <Breadcrumb items={[{ label: 'Foundations' }, { label: 'Installation' }]} />

      <h1
        style={{
          fontSize: 28,
          fontWeight: 500,
          letterSpacing: '-0.02em',
          margin: '0 0 8px',
          color: 'var(--text-primary)',
        }}
      >
        Installation
      </h1>
      <p style={{ fontSize: 15, color: 'var(--text-secondary)', margin: '0 0 40px', lineHeight: 1.7, maxWidth: 600 }}>
        Get started with Zinc in a new or existing Vite + React project. Everything you need is
        already included in the zinc-design-system repository.
      </p>

      <hr style={hrStyle} />

      {/* ── Requirements ── */}
      <div id="requirements" style={{ marginBottom: 48 }}>
        <h2 style={h2Style}>Requirements</h2>
        <p style={bodyStyle}>Zinc requires the following versions or higher.</p>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: 13,
            border: '1px solid var(--border-default)',
            borderRadius: 8,
            overflow: 'hidden',
          }}
        >
          <thead>
            <tr style={{ background: 'var(--bg-subtle)' }}>
              <th
                style={{
                  padding: '10px 16px',
                  textAlign: 'left',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  borderBottom: '1px solid var(--border-default)',
                }}
              >
                Dependency
              </th>
              <th
                style={{
                  padding: '10px 16px',
                  textAlign: 'left',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  borderBottom: '1px solid var(--border-default)',
                }}
              >
                Version
              </th>
            </tr>
          </thead>
          <tbody>
            {REQUIREMENTS.map((row, i) => (
              <tr
                key={row.dep}
                style={{ background: i % 2 === 0 ? 'var(--bg-surface)' : 'var(--bg-subtle)' }}
              >
                <td
                  style={{
                    padding: '10px 16px',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 13,
                    borderBottom: i < REQUIREMENTS.length - 1 ? '1px solid var(--border-default)' : 'none',
                  }}
                >
                  {row.dep}
                </td>
                <td
                  style={{
                    padding: '10px 16px',
                    color: 'var(--text-secondary)',
                    borderBottom: i < REQUIREMENTS.length - 1 ? '1px solid var(--border-default)' : 'none',
                  }}
                >
                  {row.version}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr style={hrStyle} />

      {/* ── Clone ── */}
      <div id="clone" style={{ marginBottom: 48 }}>
        <h2 style={h2Style}>Clone the repository</h2>
        <p style={bodyStyle}>Start by cloning the Zinc design system repository.</p>
        <CodeBlock code={CODE_CLONE} />
        <NoteBlock type="tip">
          💡 <strong>Tip:</strong> If you're starting a new product, clone this repo and use it as
          your project foundation. All Zinc components and tokens are already wired up.
        </NoteBlock>
      </div>

      <hr style={hrStyle} />

      {/* ── Install ── */}
      <div id="install" style={{ marginBottom: 48 }}>
        <h2 style={h2Style}>Install dependencies</h2>
        <p style={bodyStyle}>
          Install all required packages using your preferred package manager.
        </p>
        <PMTabs />

        <div style={{ marginTop: 32 }}>
          <h3 style={h3Style}>Key dependencies</h3>
          <p style={bodyStyle}>These are the core packages Zinc is built on:</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {KEY_DEPS.map((d) => (
              <div key={d.pkg} style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                <code
                  style={{
                    fontSize: 12,
                    fontFamily: 'var(--font-mono)',
                    background: 'var(--bg-subtle)',
                    border: '1px solid var(--border-default)',
                    borderRadius: 4,
                    padding: '2px 8px',
                    color: 'var(--text-primary)',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}
                >
                  {d.pkg}
                </code>
                <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{d.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr style={hrStyle} />

      {/* ── Import tokens ── */}
      <div id="import-tokens" style={{ marginBottom: 48 }}>
        <h2 style={h2Style}>Import tokens</h2>
        <p style={bodyStyle}>
          Zinc uses CSS custom properties for all design tokens. Make sure{' '}
          <code
            style={{
              fontSize: 12,
              fontFamily: 'var(--font-mono)',
              background: 'var(--bg-subtle)',
              border: '1px solid var(--border-default)',
              borderRadius: 4,
              padding: '1px 6px',
              color: 'var(--text-primary)',
            }}
          >
            globals.css
          </code>{' '}
          is imported in your entry point.
        </p>
        <CodeBlock code={CODE_TOKENS} />
        <NoteBlock type="info">
          The tokens file (<code style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>src/tokens/tokens.css</code>) defines all color, typography, spacing, and component
          tokens for both light and dark mode. It is automatically included via globals.css.
        </NoteBlock>
      </div>

      <hr style={hrStyle} />

      {/* ── Use components ── */}
      <div id="use-components" style={{ marginBottom: 48 }}>
        <h2 style={h2Style}>Use components</h2>
        <p style={bodyStyle}>Import any Zinc component directly from its module path.</p>
        <CodeBlock code={CODE_COMPONENTS} />
        <NoteBlock type="info">
          All components accept a{' '}
          <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>className</code> prop for
          custom overrides via Tailwind utility classes.
        </NoteBlock>
      </div>

      <hr style={hrStyle} />

      {/* ── Dark mode ── */}
      <div id="dark-mode" style={{ marginBottom: 48 }}>
        <h2 style={h2Style}>Dark mode</h2>
        <p style={bodyStyle}>
          Zinc defaults to dark mode for tools. The ThemeProvider manages theme state and persists
          the user's preference to localStorage.
        </p>
        <CodeBlock code={CODE_DARK_PROVIDER} />

        <p style={{ ...bodyStyle, marginTop: 24 }}>
          Use the <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>useTheme</code>{' '}
          hook to toggle the theme from any component:
        </p>
        <CodeBlock code={CODE_DARK_TOGGLE} />

        <NoteBlock type="info">
          Dark mode is applied via the{' '}
          <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>.dark-mode</code> class on
          the <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>&lt;html&gt;</code>{' '}
          element. All tokens automatically adapt — no component changes needed.
        </NoteBlock>
      </div>

      <hr style={hrStyle} />

      {/* ── Existing project ── */}
      <div id="existing-project">
        <h2 style={h2Style}>Using in an existing project</h2>
        <p style={bodyStyle}>
          To use Zinc components in an existing Vite + React project, copy the following
          directories into your project:
        </p>

        <pre
          style={{
            ...preStyle,
            marginBottom: 24,
          }}
        >
          <code>{FILE_TREE}</code>
        </pre>

        <p style={bodyStyle}>Then install the required peer dependencies:</p>
        <CodeBlock code={CODE_PEER_DEPS} />

        <p style={{ ...bodyStyle, marginTop: 24 }}>Then import globals.css in your entry point:</p>
        <CodeBlock code={CODE_IMPORT_GLOBALS} />

        <NoteBlock type="success">
          ✓ <strong>You're all set.</strong> Import components from{' '}
          <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>@/components/</code> and
          they'll use your existing Tailwind config with Zinc token overrides.
        </NoteBlock>
      </div>
    </div>
  );
}
