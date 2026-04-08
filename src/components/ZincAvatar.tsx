import { cx } from '@/utils/cx';

// Hologram palette — matches var(--gradient-hologram) in tokens.css
const HOLO_COLORS = [
  '#B6D0F7',
  '#EEF4E1',
  '#BAE4E2',
  '#FAFCFE',
  '#E2C1F9',
];

// Size map — px values for each named size
const SIZE_MAP = {
  xxs:  20,
  xs:   24,
  sm:   32,
  md:   40,
  lg:   48,
  xl:   56,
  '2xl': 72,
} as const;

type AvatarSize = keyof typeof SIZE_MAP;

interface ZincAvatarProps {
  /** Name used to seed the gradient — same name always produces the same avatar */
  name?: string;
  /** If provided, renders the image instead of the gradient */
  src?: string;
  /** Show initials on top of the gradient */
  showInitials?: boolean;
  /** Size variant */
  size?: AvatarSize;
  /** Additional CSS classes */
  className?: string;
  /** Alt text for image avatars */
  alt?: string;
}

/** Deterministic hash from a string — same string always returns same number */
function hashStr(str: string): number {
  let h = 5381;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) + h + str.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

/** Extract up to 2 initials from a name */
function getInitials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

/** Generate the hologram SVG as a data URL for use as background */
function generateHologramSVG(name: string, size: number): string {
  const h  = hashStr(name);
  const h2 = hashStr(name + '__b');
  const h3 = hashStr(name + '__c');
  const h4 = hashStr(name + '__d');

  // Pick a palette rotation from the name hash
  const paletteOffset = h % HOLO_COLORS.length;
  const p = (i: number) => HOLO_COLORS[(paletteOffset + i) % HOLO_COLORS.length];

  // Deterministic gradient blob positions (0–100 range)
  const cx1 = 10 + (h  % 50);
  const cy1 = 10 + (h2 % 45);
  const cx2 = 40 + (h2 % 40);
  const cy2 = 30 + (h3 % 40);
  const cx3 =  5 + (h3 % 55);
  const cy3 = 40 + (h4 % 40);
  const cx4 = 50 + (h4 % 40);
  const cy4 =  5 + (h  % 50);

  // Radii
  const r1 = 55 + (h  % 25);
  const r2 = 50 + (h2 % 30);
  const r3 = 45 + (h3 % 30);
  const r4 = 40 + (h4 % 25);

  const id = `zh_${hashStr(name).toString(36)}`;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 100 100">
    <defs>
      <radialGradient id="${id}a" cx="${cx1}%" cy="${cy1}%" r="${r1}%" gradientUnits="userSpaceOnUse">
        <stop offset="0%"   stop-color="${p(0)}" stop-opacity="1"/>
        <stop offset="60%"  stop-color="${p(0)}" stop-opacity="0.4"/>
        <stop offset="100%" stop-color="${p(0)}" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="${id}b" cx="${cx2}%" cy="${cy2}%" r="${r2}%" gradientUnits="userSpaceOnUse">
        <stop offset="0%"   stop-color="${p(2)}" stop-opacity="0.95"/>
        <stop offset="55%"  stop-color="${p(2)}" stop-opacity="0.35"/>
        <stop offset="100%" stop-color="${p(2)}" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="${id}c" cx="${cx3}%" cy="${cy3}%" r="${r3}%" gradientUnits="userSpaceOnUse">
        <stop offset="0%"   stop-color="${p(1)}" stop-opacity="0.85"/>
        <stop offset="60%"  stop-color="${p(1)}" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="${p(1)}" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="${id}d" cx="${cx4}%" cy="${cy4}%" r="${r4}%" gradientUnits="userSpaceOnUse">
        <stop offset="0%"   stop-color="${p(3)}" stop-opacity="0.8"/>
        <stop offset="100%" stop-color="${p(3)}" stop-opacity="0"/>
      </radialGradient>
      <clipPath id="${id}cp">
        <circle cx="50" cy="50" r="50"/>
      </clipPath>
    </defs>
    <g clip-path="url(#${id}cp)">
      <rect width="100" height="100" fill="${p(4)}"/>
      <rect width="100" height="100" fill="url(#${id}a)"/>
      <rect width="100" height="100" fill="url(#${id}b)"/>
      <rect width="100" height="100" fill="url(#${id}c)"/>
      <rect width="100" height="100" fill="url(#${id}d)"/>
    </g>
  </svg>`;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export function ZincAvatar({
  name = 'User',
  src,
  showInitials = false,
  size = 'md',
  className = '',
  alt,
}: ZincAvatarProps) {
  const px = SIZE_MAP[size];
  const initials = getInitials(name);
  const gradientUrl = generateHologramSVG(name, px);

  // Font size scales with avatar size
  const fontSizePx = px <= 24 ? px * 0.38 : px * 0.36;
  const fontSizeRem = (fontSizePx / 16).toFixed(3);

  const baseStyle: React.CSSProperties = {
    width: px,
    height: px,
    borderRadius: '50%',
    overflow: 'hidden',
    flexShrink: 0,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  };

  // If a real photo is provided, show it
  if (src) {
    return (
      <div style={baseStyle} className={cx('zinc-avatar', className)}>
        <img
          src={src}
          alt={alt || name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    );
  }

  // Gradient-only (no initials)
  if (!showInitials) {
    return (
      <div
        style={{
          ...baseStyle,
          backgroundImage: `url("${gradientUrl}")`,
          backgroundSize: 'cover',
        }}
        className={cx('zinc-avatar zinc-avatar--gradient', className)}
        role="img"
        aria-label={name}
      />
    );
  }

  // Gradient + initials overlay
  return (
    <div
      style={{
        ...baseStyle,
        backgroundImage: `url("${gradientUrl}")`,
        backgroundSize: 'cover',
      }}
      className={cx('zinc-avatar zinc-avatar--initials', className)}
      role="img"
      aria-label={name}
    >
      <span
        style={{
          fontSize: `${fontSizeRem}rem`,
          fontWeight: 500,
          fontFamily: "'General Sans', system-ui, -apple-system, sans-serif",
          color: 'rgba(9, 9, 11, 0.75)',
          letterSpacing: '-0.01em',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        {initials}
      </span>
    </div>
  );
}

export default ZincAvatar;
