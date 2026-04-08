import { useEffect } from 'react';
import { useDocsContext } from '@/docs/layout/docs-context';
import { Breadcrumb } from '@/docs/layout/breadcrumb';
import { Preview } from '@/docs/components/preview';
import { PropsTable } from '@/docs/components/props-table';
import { SectionHeader } from '@/docs/components/section-header';
import { Select } from '@/components/Select';
import { NativeSelect } from '@/components/base/select/select-native';
import { TagSelectBase } from '@/components/base/select/tag-select';
import { SelectItem } from '@/components/base/select/select-item';
import { useListData } from 'react-stately';
import type { SelectItemType } from '@/components/base/select/select-shared';

const SECTIONS = [
  { id: 'default', label: 'Default' },
  { id: 'with-label', label: 'With label' },
  { id: 'sizes', label: 'Sizes' },
  { id: 'combobox', label: 'ComboBox' },
  { id: 'props', label: 'Props' },
  { id: 'native-select', label: 'Native select' },
  { id: 'tag-select', label: 'Tag select' },
];

const PROPS = [
  { name: 'size', type: '"sm" | "md" | "lg"', default: '"md"', description: 'Size of the select' },
  { name: 'label', type: 'string', default: '—', description: 'Field label' },
  { name: 'placeholder', type: 'string', default: '"Select"', description: 'Placeholder text' },
  { name: 'hint', type: 'string', default: '—', description: 'Helper text' },
  { name: 'items', type: 'SelectItemType[]', default: '—', description: 'Array of items for collection rendering' },
  { name: 'isDisabled', type: 'boolean', default: 'false', description: 'Disables the select' },
  { name: 'isRequired', type: 'boolean', default: 'false', description: 'Marks as required' },
  { name: 'isInvalid', type: 'boolean', default: 'false', description: 'Shows error state' },
];

const ITEM_TYPES = [
  { name: 'id', type: 'string | number', default: '—', description: 'Unique item identifier (required)' },
  { name: 'label', type: 'string', default: '—', description: 'Display text' },
  { name: 'supportingText', type: 'string', default: '—', description: 'Secondary text' },
  { name: 'avatarUrl', type: 'string', default: '—', description: 'Avatar image URL' },
  { name: 'icon', type: 'FC | ReactNode', default: '—', description: 'Leading icon' },
  { name: 'isDisabled', type: 'boolean', default: 'false', description: 'Disables this item' },
];

const PEOPLE = [
  { id: '1', label: 'Olivia Rhye', supportingText: '@olivia' },
  { id: '2', label: 'Phoenix Baker', supportingText: '@phoenix' },
  { id: '3', label: 'Lana Steiner', supportingText: '@lana' },
];

export function SelectPage() {
  const { setSections } = useDocsContext();

  useEffect(() => {
    setSections(SECTIONS);
    return () => setSections([]);
  }, [setSections]);

  return (
    <div>
      <Breadcrumb items={[{ label: 'Components' }, { label: 'Select' }]} />

      <h1 style={{ fontSize: 28, fontWeight: 500, letterSpacing: '-0.02em', margin: '0 0 8px', color: 'var(--text-primary)' }}>
        Select
      </h1>
      <p style={{ fontSize: 15, color: 'var(--text-secondary)', margin: '0 0 32px' }}>
        Dropdown selection built on React Aria with avatar, icon, and supporting text support.
      </p>
      <hr style={{ border: 'none', borderTop: '1px solid var(--border-default)', margin: '0 0 40px' }} />

      <SectionHeader id="default" title="Default" />
      <Preview
        preview={
          <div style={{ width: '100%', maxWidth: 320 }}>
            <Select label="Team member" placeholder="Select member" items={PEOPLE}>
              {(item) => (
                <Select.Item id={item.id} textValue={item.label}>
                  {item.label}
                </Select.Item>
              )}
            </Select>
          </div>
        }
        code={`const PEOPLE = [
  { id: '1', label: 'Olivia Rhye', supportingText: '@olivia' },
  { id: '2', label: 'Phoenix Baker', supportingText: '@phoenix' },
];

<Select label="Team member" placeholder="Select member" items={PEOPLE}>
  {(item) => (
    <Select.Item id={item.id} textValue={item.label}>
      {item.label}
    </Select.Item>
  )}
</Select>`}
      />

      <SectionHeader id="with-label" title="With supporting text" />
      <Preview
        preview={
          <div style={{ width: '100%', maxWidth: 320 }}>
            <Select label="Assign to" placeholder="Select person" items={PEOPLE}>
              {(item) => (
                <Select.Item id={item.id} supportingText={item.supportingText} textValue={item.label}>
                  {item.label}
                </Select.Item>
              )}
            </Select>
          </div>
        }
        code={`<Select label="Assign to" placeholder="Select person" items={PEOPLE}>
  {(item) => (
    <Select.Item id={item.id} supportingText={item.supportingText} textValue={item.label}>
      {item.label}
    </Select.Item>
  )}
</Select>`}
      />

      <SectionHeader id="sizes" title="Sizes" />
      <Preview
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 320, width: '100%' }}>
            <Select size="sm" placeholder="Small" items={PEOPLE}>
              {(item) => <Select.Item id={item.id} textValue={item.label}>{item.label}</Select.Item>}
            </Select>
            <Select size="md" placeholder="Medium" items={PEOPLE}>
              {(item) => <Select.Item id={item.id} textValue={item.label}>{item.label}</Select.Item>}
            </Select>
            <Select size="lg" placeholder="Large" items={PEOPLE}>
              {(item) => <Select.Item id={item.id} textValue={item.label}>{item.label}</Select.Item>}
            </Select>
          </div>
        }
        code={`<Select size="sm" placeholder="Small" items={PEOPLE}>...</Select>
<Select size="md" placeholder="Medium" items={PEOPLE}>...</Select>
<Select size="lg" placeholder="Large" items={PEOPLE}>...</Select>`}
      />

      <SectionHeader id="combobox" title="ComboBox (searchable)" />
      <Preview
        preview={
          <div style={{ width: '100%', maxWidth: 320 }}>
            <Select.ComboBox label="Search member" placeholder="Search..." items={PEOPLE}>
              {(item) => (
                <Select.Item id={item.id} textValue={item.label}>
                  {item.label}
                </Select.Item>
              )}
            </Select.ComboBox>
          </div>
        }
        code={`<Select.ComboBox label="Search member" placeholder="Search..." items={PEOPLE}>
  {(item) => (
    <Select.Item id={item.id} textValue={item.label}>
      {item.label}
    </Select.Item>
  )}
</Select.ComboBox>`}
      />

      <SectionHeader id="props" title="Select Props" />
      <PropsTable props={PROPS} />

      <SectionHeader id="props" title="Select.Item Props (SelectItemType)" />
      <PropsTable props={ITEM_TYPES} />

      <hr style={{ border: 'none', borderTop: '1px dotted var(--border-default)', margin: '48px 0' }} />

      <SectionHeader id="native-select" title="Native select" subtitle="A styled native HTML select element. Use for maximum browser compatibility or when OS-native dropdown behavior is required." />
      <Preview
        preview={
          <div style={{ width: '100%', maxWidth: 320, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <NativeSelect
              label="Country"
              options={[
                { label: 'Select a country...', value: '' },
                { label: 'United States', value: 'us' },
                { label: 'Canada', value: 'ca' },
                { label: 'United Kingdom', value: 'uk' },
                { label: 'Australia', value: 'au' },
              ]}
            />
            <NativeSelect
              label="Role (disabled)"
              disabled
              options={[{ label: 'Admin', value: 'admin' }]}
            />
          </div>
        }
        code={`import { NativeSelect } from '@/components/base/select/select-native';

<NativeSelect
  label="Country"
  options={[
    { label: 'Select a country...', value: '' },
    { label: 'United States', value: 'us' },
    { label: 'Canada', value: 'ca' },
    { label: 'United Kingdom', value: 'uk' },
  ]}
/>

{/* Disabled */}
<NativeSelect label="Role" disabled options={[{ label: 'Admin', value: 'admin' }]} />`}
      />

      <hr style={{ border: 'none', borderTop: '1px dotted var(--border-default)', margin: '48px 0' }} />

      <SectionHeader id="tag-select" title="Tag select" subtitle="A multi-select component that displays selected values as removable tag pills inside the input field." />
      <Preview
        preview={<TagSelectDemo />}
        code={`import { TagSelectBase } from '@/components/base/select/tag-select';
import { SelectItem } from '@/components/base/select/select-item';
import { useListData } from 'react-stately';
import type { SelectItemType } from '@/components/base/select/select-shared';

const allItems: SelectItemType[] = [
  { id: '1', label: 'React' },
  { id: '2', label: 'TypeScript' },
  { id: '3', label: 'Tailwind CSS' },
  { id: '4', label: 'Vite' },
  { id: '5', label: 'Next.js' },
];

function TagSelectDemo() {
  const selectedItems = useListData<SelectItemType>({
    initialItems: [
      { id: '1', label: 'React' },
      { id: '2', label: 'TypeScript' },
    ],
  });

  return (
    <TagSelectBase
      label="Technologies"
      placeholder="Search..."
      items={allItems}
      selectedItems={selectedItems}
    >
      {(item) => (
        <SelectItem id={item.id} textValue={item.label ?? ''}>
          {item.label}
        </SelectItem>
      )}
    </TagSelectBase>
  );
}`}
      />
    </div>
  );
}

const TAG_ITEMS: SelectItemType[] = [
  { id: '1', label: 'React' },
  { id: '2', label: 'TypeScript' },
  { id: '3', label: 'Tailwind CSS' },
  { id: '4', label: 'Vite' },
  { id: '5', label: 'Next.js' },
];

function TagSelectDemo() {
  const selectedItems = useListData<SelectItemType>({
    initialItems: [
      { id: '1', label: 'React' },
      { id: '2', label: 'TypeScript' },
    ],
  });

  return (
    <div style={{ width: '100%', maxWidth: 360 }}>
      <TagSelectBase
        label="Technologies"
        placeholder="Search..."
        items={TAG_ITEMS}
        selectedItems={selectedItems}
      >
        {(item) => (
          <SelectItem id={item.id} textValue={item.label ?? ''}>
            {item.label}
          </SelectItem>
        )}
      </TagSelectBase>
    </div>
  );
}
