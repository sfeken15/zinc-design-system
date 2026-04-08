import { useEffect } from 'react';
import { useDocsContext } from '@/docs/layout/docs-context';
import { Breadcrumb } from '@/docs/layout/breadcrumb';
import { Preview } from '@/docs/components/preview';
import { PropsTable } from '@/docs/components/props-table';
import { SectionHeader } from '@/docs/components/section-header';
import { Configurator } from '@/docs/components/Configurator';
import { ZincCardMedia } from '@/components/cards/ZincCardMedia';

const SECTIONS = [
  { id: 'playground', label: 'Playground' },
  { id: 'sizes', label: 'Sizes' },
  { id: 'with-image', label: 'With image' },
  { id: 'without-image', label: 'Without image' },
  { id: 'with-excerpt', label: 'With excerpt' },
  { id: 'grid-layout', label: 'Grid layout' },
  { id: 'saved-state', label: 'Saved state' },
  { id: 'props', label: 'Props' },
];

const PROPS = [
  { name: 'title', type: 'string', default: 'required', description: 'Card headline — clickable when onClick is provided' },
  { name: 'image', type: 'string', default: '—', description: 'Image URL — shows placeholder SVG if omitted' },
  { name: 'imageAlt', type: 'string', default: '""', description: 'Alt text for the image' },
  { name: 'excerpt', type: 'string', default: '—', description: 'Short description shown below title' },
  { name: 'tag', type: 'string', default: '—', description: 'Category tag shown in the footer' },
  { name: 'tagColor', type: '"brand" | "accent" | "neutral" | "success" | "warning" | "error"', default: '"brand"', description: 'Badge variant for the tag.' },
  { name: 'size', type: '"sm" | "md" | "lg"', default: '"md"', description: 'Controls image height and text sizes' },
  { name: 'onClick', type: '() => void', default: '—', description: 'Called when the image or title is clicked' },
  { name: 'onSave', type: '() => void', default: '—', description: 'Called when the heart icon is clicked' },
  { name: 'isSaved', type: 'boolean', default: 'false', description: 'Shows filled heart in teal when true' },
  { name: 'className', type: 'string', default: '""', description: 'Additional CSS classes' },
];

// ── Configurator setup ──────────────────────────────────────────────────────

const CARD_CONTROLS = [
  { type: 'text' as const, key: 'title', label: 'Title', placeholder: 'Article title...' },
  { type: 'text' as const, key: 'excerpt', label: 'Excerpt', placeholder: 'Short description...' },
  { type: 'text' as const, key: 'tag', label: 'Tag label', placeholder: 'Local Guide' },
  {
    type: 'select' as const,
    key: 'tagColor',
    label: 'Badge color',
    options: [
      { label: 'Brand', value: 'brand' },
      { label: 'Accent', value: 'accent' },
      { label: 'Neutral', value: 'neutral' },
      { label: 'Success', value: 'success' },
      { label: 'Warning', value: 'warning' },
      { label: 'Error', value: 'error' },
    ],
  },
  { type: 'toggle' as const, key: 'showImage', label: 'Show image' },
  { type: 'toggle' as const, key: 'showExcerpt', label: 'Show excerpt' },
  { type: 'toggle' as const, key: 'isSaved', label: 'Saved state' },
  {
    type: 'button-group' as const,
    key: 'size',
    label: 'Size',
    options: [
      { label: 'SM', value: 'sm' },
      { label: 'MD', value: 'md' },
      { label: 'LG', value: 'lg' },
    ],
  },
];

const CARD_DEFAULTS = {
  title: "The Best Coffee Shops in Joplin, Missouri — Ranked by a Local",
  excerpt: "From the classics on Main Street to the hidden gems you'd only know about if you live here.",
  tag: 'Local Guide',
  tagColor: 'brand',
  showImage: true,
  showExcerpt: true,
  isSaved: false,
  size: 'md',
};

const cardCodeTemplate = (v: Record<string, any>) => {
  const lines = ['<ZincCardMedia'];
  if (v.showImage) lines.push(`  image="/path/to/image.jpg"`);
  lines.push(`  title="${v.title}"`);
  if (v.showExcerpt && v.excerpt) lines.push(`  excerpt="${v.excerpt}"`);
  if (v.tag) lines.push(`  tag="${v.tag}"`);
  if (v.tag && v.tagColor !== 'brand') lines.push(`  tagColor="${v.tagColor}"`);
  lines.push(`  size="${v.size}"`);
  if (v.isSaved) lines.push(`  isSaved`);
  lines.push(`  onClick={() => navigate('/article')}`);
  lines.push(`  onSave={() => toggleSave()}`);
  lines.push('/>');
  return lines.join('\n');
};

// ── Sample data ─────────────────────────────────────────────────────────────

const GRID_CARDS_3 = [
  { seed: 'g1', title: 'Weekend guide: 12 things to do in Joplin', tag: 'What to Do' },
  { seed: 'g2', title: 'Behind the scenes at Route 66 Motors', tag: 'Business Spotlight' },
  { seed: 'g3', title: 'Only in Joplin: the murals you need to find', tag: 'Only in Joplin' },
  { seed: 'g4', title: "Joplin's top 10 parks, ranked for families", tag: 'Outdoors' },
  { seed: 'g5', title: 'New restaurants opening this fall in Joplin', tag: 'Food & Drink' },
  { seed: 'g6', title: 'A photo tour of the historic downtown district', tag: 'History' },
];

// ────────────────────────────────────────────────────────────────────────────

export function MediaCardPage() {
  const { setSections } = useDocsContext();

  useEffect(() => {
    setSections(SECTIONS);
    return () => setSections([]);
  }, [setSections]);

  return (
    <div>
      <Breadcrumb items={[{ label: 'Custom Components' }, { label: 'Media card' }]} />

      <h1
        style={{
          fontSize: 28,
          fontWeight: 500,
          letterSpacing: '-0.02em',
          margin: '0 0 8px',
          color: 'var(--text-primary)',
        }}
      >
        Media card
      </h1>
      <p style={{ fontSize: 15, color: 'var(--text-secondary)', margin: '0 0 16px' }}>
        A content card for showcasing articles, guides, and local stories. Image-forward
        with clickable zones, a category tag, and save action.
      </p>

      {/* Custom component note */}
      <div
        style={{
          display: 'flex',
          gap: 10,
          alignItems: 'flex-start',
          padding: '12px 14px',
          background: 'var(--bg-brand-subtle)',
          border: '1px solid var(--border-brand)',
          borderRadius: 10,
          marginBottom: 32,
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--text-brand)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ flexShrink: 0, marginTop: 1 }}
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
        <p style={{ fontSize: 13, color: 'var(--text-brand)', margin: 0, lineHeight: 1.5 }}>
          This is a custom Zinc component — not part of the Untitled UI library. It is built
          from scratch using Zinc tokens and the existing design system.
        </p>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid var(--border-default)', margin: '0 0 40px' }} />

      {/* ── Playground ── */}
      <SectionHeader id="playground" title="Playground" />
      <Configurator
        controls={CARD_CONTROLS}
        defaultValues={CARD_DEFAULTS}
        codeTemplate={cardCodeTemplate}
      >
        {(v) => (
          <div style={{ width: 320 }}>
            <ZincCardMedia
              image={v.showImage ? 'https://picsum.photos/seed/joplin1/800/450' : undefined}
              title={v.title}
              excerpt={v.showExcerpt ? v.excerpt : undefined}
              tag={v.tag}
              tagColor={v.tagColor}
              size={v.size}
              isSaved={v.isSaved}
              onClick={() => {}}
              onSave={() => {}}
            />
          </div>
        )}
      </Configurator>

      {/* ── Sizes ── */}
      <SectionHeader
        id="sizes"
        title="Sizes"
        subtitle="Three sizes for different layout contexts — sm for dense grids, md for standard feeds, lg for featured stories."
      />
      <Preview
        title="All sizes"
        preview={
          <div
            style={{
              display: 'flex',
              gap: 16,
              flexWrap: 'wrap',
              alignItems: 'flex-start',
              justifyContent: 'center',
            }}
          >
            <div style={{ width: 200 }}>
              <p style={{ fontSize: 11, color: 'var(--text-tertiary)', marginBottom: 8, margin: '0 0 8px' }}>SM</p>
              <ZincCardMedia
                image="https://picsum.photos/seed/sm1/400/300"
                title="Best tacos in Joplin"
                tag="Food & Drink"
                size="sm"
                onClick={() => {}}
              />
            </div>
            <div style={{ width: 280 }}>
              <p style={{ fontSize: 11, color: 'var(--text-tertiary)', margin: '0 0 8px' }}>MD</p>
              <ZincCardMedia
                image="https://picsum.photos/seed/md1/400/300"
                title="The best coffee shops in Joplin, ranked"
                excerpt="From Main Street classics to hidden gems."
                tag="Local Guide"
                size="md"
                onClick={() => {}}
              />
            </div>
            <div style={{ width: 340 }}>
              <p style={{ fontSize: 11, color: 'var(--text-tertiary)', margin: '0 0 8px' }}>LG</p>
              <ZincCardMedia
                image="https://picsum.photos/seed/lg1/800/450"
                title="Joplin's most iconic restaurants — the classics that define this city"
                excerpt="These are the spots that have been here for decades and aren't going anywhere."
                tag="Deep Dive"
                size="lg"
                onClick={() => {}}
              />
            </div>
          </div>
        }
        code={`<ZincCardMedia image="/img.jpg" title="Best tacos in Joplin" tag="Food & Drink" size="sm" />
<ZincCardMedia image="/img.jpg" title="The best coffee shops..." excerpt="..." tag="Local Guide" size="md" />
<ZincCardMedia image="/img.jpg" title="Joplin's most iconic restaurants..." excerpt="..." tag="Deep Dive" size="lg" />`}
      />

      {/* ── With image ── */}
      <SectionHeader id="with-image" title="With image" />
      <Preview
        title="With image"
        preview={
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, width: '100%' }}>
            <ZincCardMedia
              image="https://picsum.photos/seed/a1/400/300"
              title="Weekend guide: 12 things to do in Joplin"
              tag="What to Do"
              size="md"
              onClick={() => {}}
            />
            <ZincCardMedia
              image="https://picsum.photos/seed/b2/400/300"
              title="Behind the scenes at Route 66 Motors"
              tag="Business Spotlight"
              size="md"
              onClick={() => {}}
            />
            <ZincCardMedia
              image="https://picsum.photos/seed/c3/400/300"
              title="Only in Joplin: the murals you need to find"
              tag="Only in Joplin"
              size="md"
              onClick={() => {}}
            />
          </div>
        }
        code={`<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
  <ZincCardMedia
    image="/images/weekend-guide.jpg"
    title="Weekend guide: 12 things to do in Joplin"
    tag="What to Do"
    size="md"
    onClick={() => navigate('/post/weekend-guide')}
  />
  {/* ... */}
</div>`}
      />

      {/* ── Without image ── */}
      <SectionHeader
        id="without-image"
        title="Without image"
        subtitle="When no image is available, a placeholder fills the image zone. The card still works — use for text-only content or breaking news."
      />
      <Preview
        title="Without image"
        preview={
          <div style={{ width: 280 }}>
            <ZincCardMedia
              title="New business opening: Rangoon House adds second location downtown"
              excerpt="The beloved Joplin restaurant is expanding to a second spot on Main Street."
              tag="New in Joplin"
              size="md"
              onClick={() => {}}
            />
          </div>
        }
        code={`{/* No image prop — shows placeholder */}
<ZincCardMedia
  title="New business opening: Rangoon House adds second location downtown"
  excerpt="The beloved Joplin restaurant is expanding."
  tag="New in Joplin"
  size="md"
  onClick={() => navigate('/post')}
/>`}
      />

      {/* ── With excerpt ── */}
      <SectionHeader
        id="with-excerpt"
        title="With excerpt"
        subtitle="The excerpt adds a preview line for richer content scanning. It's truncated automatically by line count based on size."
      />
      <Preview
        title="With excerpt vs. without"
        preview={
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <ZincCardMedia
              image="https://picsum.photos/seed/ex1/400/300"
              title="With excerpt — shows extra context"
              excerpt="This is the excerpt text that gives readers more context before they click through to read the full article."
              tag="Real Talk"
              size="md"
              onClick={() => {}}
            />
            <ZincCardMedia
              image="https://picsum.photos/seed/ex2/400/300"
              title="Without excerpt — cleaner, more compact"
              tag="Real Talk"
              size="md"
              onClick={() => {}}
            />
          </div>
        }
        code={`{/* With excerpt */}
<ZincCardMedia
  image="/img.jpg"
  title="With excerpt — shows extra context"
  excerpt="This is the excerpt text that gives readers more context."
  tag="Real Talk"
  size="md"
/>

{/* Without excerpt */}
<ZincCardMedia
  image="/img.jpg"
  title="Without excerpt — cleaner, more compact"
  tag="Real Talk"
  size="md"
/>`}
      />

      {/* ── Grid layout ── */}
      <SectionHeader
        id="grid-layout"
        title="Grid layout"
        subtitle="Use CSS Grid to create responsive card feeds. The sm size fits 4 columns, md fits 3, lg fits 2."
      />
      <Preview
        title="3-column grid (MD)"
        preview={
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, width: '100%' }}>
            {GRID_CARDS_3.map(({ seed, title, tag }) => (
              <ZincCardMedia
                key={seed}
                image={`https://picsum.photos/seed/${seed}/400/300`}
                title={title}
                tag={tag}
                size="md"
                onClick={() => {}}
              />
            ))}
          </div>
        }
        code={`{/* 3-column feed */}
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
  {articles.map(article => (
    <ZincCardMedia key={article.id} {...article} size="md" />
  ))}
</div>

{/* 4-column dense grid */}
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
  {articles.map(article => (
    <ZincCardMedia key={article.id} {...article} size="sm" />
  ))}
</div>`}
      />
      <Preview
        title="2-column grid (LG)"
        preview={
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, width: '100%' }}>
            <ZincCardMedia
              image="https://picsum.photos/seed/feat1/800/450"
              title="Joplin's most iconic restaurants — the classics that have defined this city for decades"
              excerpt="These are the spots that have been here for decades and aren't going anywhere soon."
              tag="Deep Dive"
              size="lg"
              onClick={() => {}}
            />
            <ZincCardMedia
              image="https://picsum.photos/seed/feat2/800/450"
              title="The complete guide to Joplin's music scene — from blues bars to indie venues"
              excerpt="A city with a rich musical history, Joplin's live scene is quietly thriving again."
              tag="Culture"
              size="lg"
              onClick={() => {}}
            />
          </div>
        }
        code={`{/* 2-column featured layout */}
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
  {featuredArticles.map(article => (
    <ZincCardMedia key={article.id} {...article} size="lg" />
  ))}
</div>`}
      />

      {/* ── Saved state ── */}
      <SectionHeader
        id="saved-state"
        title="Saved state"
        subtitle="The heart icon toggles between saved and unsaved. The graffiti teal fill indicates saved state."
      />
      <Preview
        title="Saved state"
        preview={
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <div style={{ width: 260 }}>
              <ZincCardMedia
                image="https://picsum.photos/seed/s1/400/300"
                title="Unsaved — default state"
                tag="Local Guide"
                size="md"
                isSaved={false}
                onClick={() => {}}
                onSave={() => {}}
              />
            </div>
            <div style={{ width: 260 }}>
              <ZincCardMedia
                image="https://picsum.photos/seed/s2/400/300"
                title="Saved — heart fills with teal"
                tag="Local Guide"
                size="md"
                isSaved={true}
                onClick={() => {}}
                onSave={() => {}}
              />
            </div>
          </div>
        }
        code={`const [saved, setSaved] = useState(false);

<ZincCardMedia
  image="/img.jpg"
  title="Save this article"
  tag="Local Guide"
  isSaved={saved}
  onSave={() => setSaved(s => !s)}
  onClick={() => navigate('/article')}
/>`}
      />

      {/* ── Props ── */}
      <SectionHeader id="props" title="Props" />
      <PropsTable props={PROPS} />
    </div>
  );
}
