import type { ReactNode } from 'react';
import { cx } from '@/utils/cx';

/**
 * Returns the CSS class string for a sidebar/menu nav item.
 * Use with NavLink's className prop for router-aware active state:
 *
 *   <NavLink to={path} className={({ isActive }) => navItemClass(isActive)}>
 *     Label
 *   </NavLink>
 *
 * Or pass isActive directly:
 *
 *   <NavItem isActive={selected === id}>Label</NavItem>
 */
export function navItemClass(isActive: boolean, className?: string) {
  return cx(
    // Layout & shape
    'block w-full rounded-lg px-3 py-2 text-sm text-left transition duration-100 ease-linear',
    // Active state
    isActive
      ? 'bg-[var(--nav-item-active)] text-[var(--text-primary)] font-medium'
      : 'text-[var(--text-tertiary)] hover:bg-[var(--nav-item-hover)] hover:text-[var(--text-secondary)]',
    className,
  );
}

interface NavItemProps {
  /** Whether this item is currently selected/active */
  isActive?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Additional class names */
  className?: string;
  children: ReactNode;
}

/**
 * NavItem — styled sidebar/menu navigation item.
 *
 * Use this as the standard pattern for any navigation menu — sidebar,
 * drawer, dropdown, etc. Provides the UUI-style active and hover states:
 * - Active: solid rounded background (bg-[var(--nav-item-active)])
 * - Hover:  subtle tinted background (bg-[var(--nav-item-hover)])
 * - Border radius: 8px (rounded-lg)
 *
 * For router-aware active state via NavLink, use `navItemClass()` instead:
 *
 *   import { navItemClass } from '@/components/NavItem';
 *   <NavLink to={path} className={({ isActive }) => navItemClass(isActive)} />
 */
export function NavItem({ isActive = false, onClick, className, children }: NavItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={navItemClass(isActive, className)}
    >
      {children}
    </button>
  );
}
