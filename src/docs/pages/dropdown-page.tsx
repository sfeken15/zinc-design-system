import { useEffect } from 'react';
import { useDocsContext } from '@/docs/layout/docs-context';
import { Breadcrumb } from '@/docs/layout/breadcrumb';
import { Preview } from '@/docs/components/preview';
import { PropsTable } from '@/docs/components/props-table';
import { SectionHeader } from '@/docs/components/section-header';
import { Dropdown } from '@/components/Dropdown';

const SECTIONS = [
  { id: 'default', label: 'Default' },
  { id: 'with-icons', label: 'With icons' },
  { id: 'with-sections', label: 'With sections' },
  { id: 'props', label: 'Props' },
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
    </div>
  );
}
