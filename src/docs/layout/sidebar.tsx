import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronUp, Moon01, Sun, Palette, Star01, Image01, Ruler, Type01 } from '@untitledui/icons';
import { LogoHologram, LogoBlack } from '@/components/logos/Logo';
import { navItemClass } from '@/components/NavItem';
import { useTheme } from '@/providers/theme-provider';
import type { FC } from 'react';

interface NavItem {
  label: string;
  path: string;
  icon?: FC<{ style?: React.CSSProperties; className?: string }>;
}

interface NavGroup {
  group: string;
  items: NavItem[];
}

const NAV: NavGroup[] = [
  {
    group: 'Foundations',
    items: [
      { label: 'Colors',      path: '/colors',      icon: Palette },
      { label: 'Icons',       path: '/icons',       icon: Star01 },
      { label: 'Logos',       path: '/logos',       icon: Image01 },
      { label: 'Spacing',     path: '/spacing',     icon: Ruler },
      { label: 'Typography',  path: '/typography',  icon: Type01 },
    ],
  },
  {
    group: 'Custom Components',
    items: [
      { label: 'Media card', path: '/custom/media-card' },
    ],
  },
  {
    group: 'Components',
    items: [
      { label: 'Avatar',        path: '/components/avatar' },
      { label: 'Badge',         path: '/components/badge' },
      { label: 'BadgeGroup',    path: '/components/badge-group' },
      { label: 'Button',        path: '/components/button' },
      { label: 'ButtonGroup',   path: '/components/button-group' },
      { label: 'Card',          path: '/components/card' },
      { label: 'Checkbox',      path: '/components/checkbox' },
      { label: 'Dropdown',      path: '/components/dropdown' },
      { label: 'Featured icon', path: '/components/featured-icon' },
      { label: 'File upload',   path: '/components/file-upload' },
      { label: 'Form',          path: '/components/form' },
      { label: 'Input',         path: '/components/input' },
      { label: 'MultiSelect',   path: '/components/multi-select' },
      { label: 'Progress',      path: '/components/progress' },
      { label: 'RadioButton',   path: '/components/radio-button' },
      { label: 'Select',        path: '/components/select' },
      { label: 'Slider',        path: '/components/slider' },
      { label: 'StepDots',      path: '/components/stepdots' },
      { label: 'Tag',           path: '/components/tag' },
      { label: 'Textarea',      path: '/components/textarea' },
      { label: 'Toggle',        path: '/components/toggle' },
      { label: 'Tooltip',       path: '/components/tooltip' },
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
              {/* Dotted divider — consistent for all groups */}
              <div
                style={{
                  borderTop: '1px dotted var(--border-default)',
                  margin: '10px 16px 14px',
                }}
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
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-primary)',
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
                    color: 'var(--text-tertiary)',
                    transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)',
                    transition: 'transform 0.2s ease',
                  }}
                />
              </button>

              {/* Nav items */}
              {isOpen && (
                <div style={{ padding: '0 8px' }}>
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => navItemClass(isActive)}
                      >
                        {Icon ? (
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                            <Icon style={{ width: 15, height: 15, flexShrink: 0, opacity: 0.7 }} />
                            {item.label}
                          </span>
                        ) : (
                          item.label
                        )}
                      </NavLink>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
