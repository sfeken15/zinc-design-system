import { NavLink, useLocation } from 'react-router-dom';
import { LogoHologram } from '@/components/logos/Logo';
import { useTheme } from '@/providers/theme-provider';

const NAV = [
  {
    group: 'Foundations',
    items: [
      { label: 'Introduction', path: '/introduction' },
      { label: 'Colors', path: '/colors' },
      { label: 'Typography', path: '/typography' },
      { label: 'Logos', path: '/logos' },
      { label: 'Spacing', path: '/spacing' },
    ],
  },
  {
    group: 'Components',
    items: [
      { label: 'Button', path: '/components/button' },
      { label: 'Input', path: '/components/input' },
      { label: 'Textarea', path: '/components/textarea' },
      { label: 'Tag', path: '/components/tag' },
      { label: 'Slider', path: '/components/slider' },
      { label: 'Badge', path: '/components/badge' },
      { label: 'Card', path: '/components/card' },
      { label: 'StepDots', path: '/components/stepdots' },
    ],
  },
];

export function Sidebar() {
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  return (
    <aside
      style={{
        width: 240,
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        borderRight: '1px solid var(--border-default)',
        background: 'var(--bg-page)',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 50,
        overflowY: 'auto',
      }}
    >
      <div style={{ padding: '24px 20px 20px', borderBottom: '1px solid var(--border-default)' }}>
        <LogoHologram height={20} />
      </div>

      <nav style={{ flex: 1, padding: '16px 0' }}>
        {NAV.map((section) => (
          <div key={section.group} style={{ marginBottom: 8 }}>
            <p
              style={{
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--text-tertiary)',
                padding: '8px 20px',
                margin: 0,
              }}
            >
              {section.group}
            </p>
            {section.items.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  style={{
                    display: 'block',
                    padding: '7px 20px',
                    fontSize: 14,
                    fontWeight: isActive ? 500 : 400,
                    color: isActive ? 'var(--text-brand)' : 'var(--text-tertiary)',
                    textDecoration: 'none',
                    borderLeft: isActive
                      ? '2px solid var(--graffiti-500)'
                      : '2px solid transparent',
                    transition: 'all 0.15s',
                  }}
                >
                  {item.label}
                </NavLink>
              );
            })}
          </div>
        ))}
      </nav>

      <div
        style={{
          padding: '16px 20px',
          borderTop: '1px solid var(--border-default)',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            fontSize: 13,
            color: 'var(--text-tertiary)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            fontFamily: 'inherit',
          }}
        >
          {theme === 'dark' ? '☀ Light mode' : '☾ Dark mode'}
        </button>
      </div>
    </aside>
  );
}
