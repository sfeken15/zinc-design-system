import { cx } from '@/utils/cx';
import { Badge } from '@/components/base/badges/badges';
import type { BadgeColors } from '@/components/base/badges/badge-types';

interface ZincCardMediaProps {
  image?: string;
  imageAlt?: string;
  tag?: string;
  tagColor?: BadgeColors;
  title: string;
  excerpt?: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  onSave?: () => void;
  isSaved?: boolean;
  className?: string;
}

const SIZE = {
  sm: { imageH: '140px', titlePx: 14, titleLines: 2, excerptLines: 0, pad: '12px' },
  md: { imageH: '180px', titlePx: 15, titleLines: 3, excerptLines: 2, pad: '14px' },
  lg: { imageH: '240px', titlePx: 17, titleLines: 3, excerptLines: 3, pad: '16px' },
};

export function ZincCardMedia({
  image,
  imageAlt = '',
  tag,
  tagColor = 'brand',
  title,
  excerpt,
  size = 'md',
  onClick,
  onSave,
  isSaved = false,
  className = '',
}: ZincCardMediaProps) {
  const c = SIZE[size];

  return (
    <article
      className={cx('zinc-card-media', className)}
      style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-default)',
        borderRadius: 16,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-color 0.2s ease, transform 0.2s ease',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = 'var(--border-strong)';
        el.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = 'var(--border-default)';
        el.style.transform = 'translateY(0)';
      }}
    >
      {/* IMAGE ZONE — clickable, image zooms on hover */}
      <div
        onClick={onClick}
        style={{
          height: c.imageH,
          overflow: 'hidden',
          cursor: onClick ? 'pointer' : 'default',
          flexShrink: 0,
          background: 'var(--bg-subtle)',
        }}
      >
        {image ? (
          <img
            src={image}
            alt={imageAlt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transition: 'transform 0.35s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)';
            }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              background: 'var(--bg-muted)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--border-strong)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" fill="var(--icon-subtle)" stroke="none" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
          </div>
        )}
      </div>

      {/* CONTENT ZONE */}
      <div
        style={{
          padding: c.pad,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}
      >
        {/* Title — clickable, teal on hover */}
        <h3
          onClick={onClick}
          style={{
            margin: 0,
            fontSize: c.titlePx,
            fontWeight: 600,
            lineHeight: 1.4,
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-body)',
            cursor: onClick ? 'pointer' : 'default',
            display: '-webkit-box',
            WebkitLineClamp: c.titleLines,
            WebkitBoxOrient: 'vertical' as const,
            overflow: 'hidden',
            transition: 'color 0.15s ease',
          }}
          onMouseEnter={(e) => {
            if (onClick) (e.currentTarget as HTMLElement).style.color = 'var(--text-brand)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
          }}
        >
          {title}
        </h3>

        {/* Excerpt */}
        {excerpt && c.excerptLines > 0 && (
          <p
            style={{
              margin: 0,
              fontSize: 13,
              color: 'var(--text-tertiary)',
              lineHeight: 1.5,
              fontFamily: 'var(--font-body)',
              display: '-webkit-box',
              WebkitLineClamp: c.excerptLines,
              WebkitBoxOrient: 'vertical' as const,
              overflow: 'hidden',
            }}
          >
            {excerpt}
          </p>
        )}
      </div>

      {/* FOOTER ZONE */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          padding: `8px ${c.pad} ${c.pad}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px solid var(--border-subtle)',
        }}
      >
        {/* Tag left — Badge component */}
        <div>
          {tag ? (
            <Badge type="badge-color" size="sm" color={tagColor}>{tag}</Badge>
          ) : (
            <div style={{ width: 4 }} />
          )}
        </div>

        {/* Action buttons right */}
        <div style={{ display: 'flex', gap: 4 }}>
          {/* Heart / Save */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSave?.();
            }}
            aria-label={isSaved ? 'Unsave' : 'Save'}
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: isSaved ? 'var(--graffiti-500)' : 'var(--icon-subtle)',
              transition: 'color 0.15s, background 0.15s',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'var(--bg-subtle)';
              el.style.color = isSaved ? 'var(--graffiti-500)' : 'var(--icon-default)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'none';
              el.style.color = isSaved ? 'var(--graffiti-500)' : 'var(--icon-subtle)';
            }}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill={isSaved ? 'currentColor' : 'none'}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>

          {/* More options */}
          <button
            onClick={(e) => e.stopPropagation()}
            aria-label="More options"
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--icon-subtle)',
              transition: 'color 0.15s, background 0.15s',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'var(--bg-subtle)';
              el.style.color = 'var(--icon-default)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'none';
              el.style.color = 'var(--icon-subtle)';
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="5" cy="12" r="1.8" />
              <circle cx="12" cy="12" r="1.8" />
              <circle cx="19" cy="12" r="1.8" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}

export default ZincCardMedia;
