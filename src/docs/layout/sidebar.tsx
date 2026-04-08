import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronUp, Moon01, Sun } from '@untitledui/icons';
import { LogoHologram, LogoBlack } from '@/components/logos/Logo';
import { navItemClass } from '@/components/NavItem';
import { useTheme } from '@/providers/theme-provider';

const NAV = [
  {
    group: 'Foundations',
    items: [
      { label: 'Colors', path: '/colors' },
      { label: 'Icons', path: '/icons' },
      { label: 'Logos', path: '/logos' },
      { label: 'Spacing', path: '/spacing' },
      { label: 'Typography', path: '/typography' },
    ],
  },
  {
    group: 'Components',
    items: [
      { label: 'Avatar', path: '/components/avatar' },
      { label: 'Badge', path: '/components/badge' },
      { label: 'BadgeGroup', path: '/components/badge-group' },
      { label: 'Button', path: '/components/button' },
      { label: 'ButtonGroup', path: '/components/button-group' },
      { label: 'Card', path: '/components/card' },
      { label: 'Checkbox', path: '/components/checkbox' },
      { label: 'Dropdown', path: '/components/dropdown' },
      { label: 'Featured icon', path: '/components/featured-icon' },
      { label: 'File upload', path: '/components/file-upload' },
      { label: 'Form', path: '/components/form' },
      { label: 'Input', path: '/components/input' },
      { label: 'MultiSelect', path: '/components/multi-select' },
      { label: 'Progress', path: '/components/progress' },
      { label: 'RadioButton', path: '/components/radio-button' },
      { label: 'Select', path: '/components/select' },
      { label: 'Slider', path: '/components/slider' },
      { label: 'StepDots', path: '/components/stepdots' },
      { label: 'Tag', path: '/components/tag' },
      { label: 'Textarea', path: '/components/textarea' },
      { label: 'Toggle', path: '/components/toggle' },
      { label: 'Tooltip', path: '/components/tooltip' },
    ],
  },
  {
    group: 'Custom Components',
    dividerAbove: true,
    items: [
      { label: 'Media card', path: '/custom/media-card' },
    ],
  },
];

export function Sidebar() {
  const { theme, setTheme } = useTheme();
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    Object.fromEntries(NAV.map((s) => [s.group, true]))
  );

  const toggleSection = (group: string) => {
    setOpenSections((prev) => ({ ...prev, [group]: !prev[group] }));
  };

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
        overflow: 'hidden',
      }}
    >
      {/* Fixed header — always visible */}
      <div
        style={{
          padding: '20px',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {theme === 'dark' ? <LogoHologram height={20} /> : <LogoBlack height={20} />}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 32,
            height: 32,
            borderRadius: 8,
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            color: 'var(--icon-subtle)',
            flexShrink: 0,
            transition: 'background 150ms ease, color 150ms ease',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = 'var(--nav-item-hover)';
            (e.currentTarget as HTMLButtonElement).style.color = 'var(--icon-default)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = 'none';
            (e.currentTarget as HTMLButtonElement).style.color = 'var(--icon-subtle)';
          }}
        >
          {theme === 'dark'
            ? <Sun style={{ width: 18, height: 18 }} />
            : <Moon01 style={{ width: 18, height: 18 }} />
          }
        </button>
      </div>

      {/* Scrollable nav — scrollbar hidden */}
      <nav
        style={{ flex: 1, overflowY: 'auto', scrollbarWidth: 'none', padding: '12px 0' }}
        className="[&::-webkit-scrollbar]:hidden"
      >
        {/* Standalone links — above the accordion groups */}
        <div style={{ padding: '0 8px 4px' }}>
          <NavLink to="/introduction" className={({ isActive }) => navItemClass(isActive)}>
            Introduction
          </NavLink>
          <NavLink to="/installation" className={({ isActive }) => navItemClass(isActive)}>
            Installation
          </NavLink>
        </div>

        {NAV.map((section) => {
          const isOpen = openSections[section.group];

          return (
            <div key={section.group}>
              {/* Solid divider for custom sections, dotted for standard groups */}
              <div
                style={
                  (section as any).dividerAbove
                    ? {
                        borderTop: '1px solid var(--border-default)',
                        margin: '14px 0 14px',
                      }
                    : {
                        borderTop: '1px dotted var(--border-default)',
                        margin: '10px 16px 14px',
                      }
                }
              />

              {/* Accordion section header */}
              <button
                onClick={() => toggleSection(section.group)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  padding: '4px 16px 8px',
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-tertiary)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                }}
              >
                {section.group}
                <ChevronUp
                  style={{
                    width: 14,
                    height: 14,
                    flexShrink: 0,
                    color: 'var(--text-quaternary)',
                    transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)',
                    transition: 'transform 0.2s ease',
                  }}
                />
              </button>

              {/* Nav items */}
              {isOpen && (
                <div style={{ padding: '0 8px' }}>
                  {section.items.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }) => navItemClass(isActive)}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

    </aside>
  );
}
