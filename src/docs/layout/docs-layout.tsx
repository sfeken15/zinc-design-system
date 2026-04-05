import { Outlet } from 'react-router-dom';
import { Sidebar } from './sidebar';
import { RightRail } from './right-rail';
import { DocsProvider } from './docs-context';

export function DocsLayout() {
  return (
    <DocsProvider>
      <div
        style={{
          display: 'flex',
          minHeight: '100vh',
          background: 'var(--bg-page)',
          color: 'var(--text-primary)',
          fontFamily: 'var(--font-body)',
        }}
      >
        <Sidebar />

        <main
          style={{
            flex: 1,
            marginLeft: 240,
            marginRight: 200,
            padding: '48px 56px',
            minWidth: 0,
          }}
        >
          <Outlet />
        </main>

        <RightRail />
      </div>
    </DocsProvider>
  );
}
