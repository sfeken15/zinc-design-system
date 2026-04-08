import { useEffect } from 'react';
import { useDocsContext } from '@/docs/layout/docs-context';
import { Breadcrumb } from '@/docs/layout/breadcrumb';
import { Preview } from '@/docs/components/preview';
import { PropsTable } from '@/docs/components/props-table';
import { SectionHeader } from '@/docs/components/section-header';
import { Dropdown } from '@/components/Dropdown';
import { DropdownSearchSimple } from '@/components/base/dropdown/dropdown-search-simple';
import { DropdownAccountCardSM } from '@/components/base/dropdown/dropdown-account-card-sm';
import { DropdownIntegration } from '@/components/base/dropdown/dropdown-integration';
import { Settings01, Trash01, Mail01, Bell01 } from '@untitledui/icons';

const SECTIONS = [
  { id: 'default', label: 'Default' },
  { id: 'with-icons', label: 'With icons' },
  { id: 'with-sections', label: 'With sections' },
  { id: 'props', label: 'Props' },
  { id: 'dropdown-search', label: 'With search' },
  { id: 'dropdown-account', label: 'Account card' },
  { id: 'dropdown-destructive', label: 'With destructive item' },
  { id: 'dropdown-selection', label: 'Selection indicators' },
  { id: 'dropdown-integration', label: 'Integration' },
];

const PROPS = [
  { name: 'label', type: 'string', default: '—', description: 'Item label text' },
  { name: 'addon', type: 'string', default: '—', description: 'Trailing shortcut/addon text' },
  { name: 'icon', type: 'FC<{ className?: string }>', default: '—', description: 'Leading icon' },
  { name: 'avatarUrl', type: 'string', default: '—', description: 'Leading avatar image URL' },
  { name: 'selectionIndicator', type: '"checkmark" | "checkbox" | "radio" | "toggle" | "none"', default: '"checkmark"', description: 'Selection indicator style' },
  { name: 'isDisabled', type: 'boolean', default: 'false', description: 'Disables the item' },
];

export function DropdownPage() {
  const { setSections } = useDocsContext();

  useEffect(() => {
    setSections(SECTIONS);
    return () => setSections([]);
  }, [setSections]);

  return (
    <div>
      <Breadcrumb items={[{ label: 'Components' }, { label: 'Dropdown' }]} />

      <h1 style={{ fontSize: 28, fontWeight: 500, letterSpacing: '-0.02em', margin: '0 0 8px', color: 'var(--text-primary)' }}>
        Dropdown
      </h1>
      <p style={{ fontSize: 15, color: 'var(--text-secondary)', margin: '0 0 32px' }}>
        Context menu and dropdown built on React Aria's Menu with flexible selection indicators.
      </p>
      <hr style={{ border: 'none', borderTop: '1px solid var(--border-default)', margin: '0 0 40px' }} />

      <SectionHeader id="default" title="Default" />
      <Preview
        preview={
          <Dropdown.Root>
            <Dropdown.DotsButton />
            <Dropdown.Popover>
              <Dropdown.Menu>
                <Dropdown.Item label="Edit" />
                <Dropdown.Item label="Duplicate" />
                <Dropdown.Separator />
                <Dropdown.Item label="Delete" />
              </Dropdown.Menu>
            </Dropdown.Popover>
          </Dropdown.Root>
        }
        code={`<Dropdown.Root>
  <Dropdown.DotsButton />
  <Dropdown.Popover>
    <Dropdown.Menu>
      <Dropdown.Item label="Edit" />
      <Dropdown.Item label="Duplicate" />
      <Dropdown.Separator />
      <Dropdown.Item label="Delete" />
    </Dropdown.Menu>
  </Dropdown.Popover>
</Dropdown.Root>`}
      />

      <SectionHeader id="with-sections" title="With sections" />
      <Preview
        preview={
          <Dropdown.Root>
            <Dropdown.DotsButton />
            <Dropdown.Popover>
              <Dropdown.Menu>
                <Dropdown.Section>
                  <Dropdown.SectionHeader>Account</Dropdown.SectionHeader>
                  <Dropdown.Item label="Profile" />
                  <Dropdown.Item label="Settings" />
                </Dropdown.Section>
                <Dropdown.Separator />
                <Dropdown.Section>
                  <Dropdown.Item label="Sign out" />
                </Dropdown.Section>
              </Dropdown.Menu>
            </Dropdown.Popover>
          </Dropdown.Root>
        }
        code={`<Dropdown.Root>
  <Dropdown.DotsButton />
  <Dropdown.Popover>
    <Dropdown.Menu>
      <Dropdown.Section>
        <Dropdown.SectionHeader>Account</Dropdown.SectionHeader>
        <Dropdown.Item label="Profile" />
        <Dropdown.Item label="Settings" />
      </Dropdown.Section>
      <Dropdown.Separator />
      <Dropdown.Section>
        <Dropdown.Item label="Sign out" />
      </Dropdown.Section>
    </Dropdown.Menu>
  </Dropdown.Popover>
</Dropdown.Root>`}
      />

      <SectionHeader id="props" title="Dropdown.Item Props" />
      <PropsTable props={PROPS} />

      <hr style={{ border: 'none', borderTop: '1px dotted var(--border-default)', margin: '48px 0' }} />

      <SectionHeader id="dropdown-search" title="Dropdown with search" subtitle="A dropdown with a built-in search input to filter long option lists." />
      <Preview
        preview={<DropdownSearchSimple />}
        code={`import { useState } from 'react';
import { SearchLg } from '@untitledui/icons';
import { Autocomplete, SearchField, useFilter } from 'react-aria-components';
import { Dropdown } from '@/components/Dropdown';
import { InputBase } from '@/components/base/input/input';

const [selectedUsers, setSelectedUsers] = useState(new Set(['olivia']));
const { contains } = useFilter({ sensitivity: 'base' });

<Dropdown.Root>
  <Button color="secondary">Manage access</Button>
  <Dropdown.Popover className="w-60">
    <Autocomplete filter={contains}>
      <SearchField className="flex gap-3 border-b border-secondary p-3">
        <InputBase size="md" placeholder="Search" icon={SearchLg} />
      </SearchField>
      <Dropdown.Menu selectionMode="multiple" selectedKeys={selectedUsers} onSelectionChange={setSelectedUsers}>
        <Dropdown.Item id="olivia" textValue="Olivia Rhye" selectionIndicator="checkbox">
          Olivia Rhye
        </Dropdown.Item>
        <Dropdown.Item id="phoenix" textValue="Phoenix Baker" selectionIndicator="checkbox">
          Phoenix Baker
        </Dropdown.Item>
      </Dropdown.Menu>
    </Autocomplete>
  </Dropdown.Popover>
</Dropdown.Root>`}
      />

      <hr style={{ border: 'none', borderTop: '1px dotted var(--border-default)', margin: '48px 0' }} />

      <SectionHeader id="dropdown-account" title="Account card dropdown" subtitle="A dropdown with a user account card header — avatar, name, and email — followed by menu actions." />
      <Preview
        preview={<DropdownAccountCardSM />}
        code={`import { Dropdown } from '@/components/Dropdown';
import { Avatar } from '@/components/base/avatar/avatar';
import { Settings01, User01, HelpCircle, LogOut01 } from '@untitledui/icons';

<Dropdown.Root>
  {/* Custom trigger with avatar */}
  <button className="flex items-center gap-2 rounded-lg bg-primary_alt p-1.5 ring-1 ring-border-secondary">
    <Avatar size="sm" src="/avatar.jpg" status="online" />
    <span className="text-sm font-semibold text-primary">Olivia Rhye</span>
  </button>

  <Dropdown.Popover className="w-60">
    <div className="flex flex-col border-b border-secondary px-4 py-3">
      <p className="text-sm font-semibold text-primary">PRO account</p>
      <p className="text-sm text-tertiary">olivia@untitledui.com</p>
    </div>
    <Dropdown.Menu>
      <Dropdown.Item icon={User01} addon="⌘K->P">View profile</Dropdown.Item>
      <Dropdown.Item icon={Settings01} addon="⌘S">Settings</Dropdown.Item>
      <Dropdown.Separator />
      <Dropdown.Item icon={LogOut01}>Sign out</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown.Popover>
</Dropdown.Root>`}
      />

      <hr style={{ border: 'none', borderTop: '1px dotted var(--border-default)', margin: '48px 0' }} />

      <SectionHeader id="dropdown-destructive" title="With destructive item" subtitle="Use a trash or delete item at the bottom of a menu to signal an irreversible action." />
      <Preview
        preview={
          <Dropdown.Root>
            <Dropdown.DotsButton />
            <Dropdown.Popover>
              <Dropdown.Menu>
                <Dropdown.Item icon={Mail01}>Send message</Dropdown.Item>
                <Dropdown.Item icon={Bell01}>Notifications</Dropdown.Item>
                <Dropdown.Item icon={Settings01}>Settings</Dropdown.Item>
                <Dropdown.Separator />
                <Dropdown.Item icon={Trash01}>Delete</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Popover>
          </Dropdown.Root>
        }
        code={`import { Trash01, Settings01 } from '@untitledui/icons';

<Dropdown.Root>
  <Dropdown.DotsButton />
  <Dropdown.Popover>
    <Dropdown.Menu>
      <Dropdown.Item icon={Settings01}>Settings</Dropdown.Item>
      <Dropdown.Separator />
      {/* Destructive action at bottom */}
      <Dropdown.Item icon={Trash01}>Delete</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown.Popover>
</Dropdown.Root>`}
      />

      <hr style={{ border: 'none', borderTop: '1px dotted var(--border-default)', margin: '48px 0' }} />

      <SectionHeader id="dropdown-selection" title="Selection indicators" subtitle="Use checkbox, radio, or toggle indicators for selectable menu items." />
      <Preview
        preview={
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Dropdown.Root>
              <Dropdown.DotsButton />
              <Dropdown.Popover>
                <Dropdown.Menu selectionMode="multiple" defaultSelectedKeys={new Set(['compact'])}>
                  <Dropdown.Item id="compact" selectionIndicator="checkbox">Compact view</Dropdown.Item>
                  <Dropdown.Item id="grid" selectionIndicator="checkbox">Grid layout</Dropdown.Item>
                  <Dropdown.Item id="sidebar" selectionIndicator="checkbox">Show sidebar</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Popover>
            </Dropdown.Root>
          </div>
        }
        code={`{/* Checkboxes — multiple selection */}
<Dropdown.Menu selectionMode="multiple" defaultSelectedKeys={new Set(['compact'])}>
  <Dropdown.Item id="compact" selectionIndicator="checkbox">Compact view</Dropdown.Item>
  <Dropdown.Item id="grid" selectionIndicator="checkbox">Grid layout</Dropdown.Item>
</Dropdown.Menu>

{/* Radio — single selection */}
<Dropdown.Menu selectionMode="single" defaultSelectedKeys={new Set(['light'])}>
  <Dropdown.Item id="light" selectionIndicator="radio">Light</Dropdown.Item>
  <Dropdown.Item id="dark" selectionIndicator="radio">Dark</Dropdown.Item>
  <Dropdown.Item id="system" selectionIndicator="radio">System</Dropdown.Item>
</Dropdown.Menu>

{/* Toggle */}
<Dropdown.Menu selectionMode="single" defaultSelectedKeys={new Set(['dark'])}>
  <Dropdown.Item id="dark" selectionIndicator="toggle">Dark mode</Dropdown.Item>
</Dropdown.Menu>`}
      />

      <hr style={{ border: 'none', borderTop: '1px dotted var(--border-default)', margin: '48px 0' }} />

      <SectionHeader id="dropdown-integration" title="Integration dropdown" subtitle="A dropdown for opening content in third-party tools and services — with service logos." />
      <Preview
        preview={<DropdownIntegration />}
        code={`import { DropdownIntegration } from '@/components/base/dropdown/dropdown-integration';

{/* Self-contained pre-built variant */}
<DropdownIntegration />`}
      />
    </div>
  );
}
