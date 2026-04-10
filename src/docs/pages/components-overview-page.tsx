import { useNavigate } from 'react-router-dom';
import { Breadcrumb } from '@/docs/layout/breadcrumb';
import { Badge } from '@/components/Badge';

// ── Color constants (hex, for use inside SVG) ──────────────────────────────
const T500 = '#15B79E'; // graffiti-500
const T300 = '#5FE9D0'; // graffiti-300
const T100 = '#CCFBEF'; // graffiti-100
const ZINC600 = '#52525B';
const ZINC400 = '#A1A1AA';
const ZINC300 = '#D4D4D8';
const WHITE = '#FFFFFF';

// ── SVG Preview Components ─────────────────────────────────────────────────

function AvatarPreview() {
  return (
    <svg width="100%" height="160" viewBox="0 0 280 160" preserveAspectRatio="xMidYMid meet">
      {/* Three overlapping circles */}
      <circle cx="112" cy="80" r="28" fill={T500} stroke={WHITE} strokeWidth="3" />
      <circle cx="140" cy="80" r="28" fill={T300} stroke={WHITE} strokeWidth="3" />
      <circle cx="168" cy="80" r="28" fill={T100} stroke={WHITE} strokeWidth="3" />
      {/* Initials simulation */}
      <text x="112" y="85" textAnchor="middle" fill={WHITE} fontSize="13" fontWeight="600">JD</text>
      <text x="140" y="85" textAnchor="middle" fill={T500} fontSize="13" fontWeight="600">AK</text>
      <text x="168" y="85" textAnchor="middle" fill={T500} fontSize="13" fontWeight="600">+2</text>
    </svg>
  );
}

function BadgePreview() {
  return (
    <svg width="100%" height="160" viewBox="0 0 280 160" preserveAspectRatio="xMidYMid meet">
      {/* Three pill badges stacked */}
      <rect x="100" y="38" width="80" height="24" rx="12" fill={T500} />
      <text x="140" y="54" textAnchor="middle" fill={WHITE} fontSize="11" fontWeight="600">Active</text>

      <rect x="100" y="70" width="80" height="24" rx="12" fill={T100} />
      <text x="140" y="86" textAnchor="middle" fill={T500} fontSize="11" fontWeight="600">New</text>

      <rect x="100" y="102" width="80" height="24" rx="12" fill={ZINC300} />
      <text x="140" y="118" textAnchor="middle" fill={ZINC600} fontSize="11" fontWeight="600">Draft</text>
    </svg>
  );
}

function BadgeGroupPreview() {
  return (
    <svg width="100%" height="160" viewBox="0 0 280 160" preserveAspectRatio="xMidYMid meet">
      {/* Avatar circle + badge pill */}
      <circle cx="104" cy="80" r="22" fill={T500} />
      <text x="104" y="85" textAnchor="middle" fill={WHITE} fontSize="11" fontWeight="600">OR</text>

      {/* Badge pill beside avatar */}
      <rect x="135" y="68" width="68" height="24" rx="12" fill={T100} />
      <circle cx="149" cy="80" r="4" fill={T500} />
      <text x="172" y="85" textAnchor="middle" fill={T500} fontSize="11" fontWeight="500">Online</text>
    </svg>
  );
}

function ButtonPreview() {
  return (
    <svg width="100%" height="160" viewBox="0 0 280 160" preserveAspectRatio="xMidYMid meet">
      {/* Primary */}
      <rect x="85" y="30" width="110" height="34" rx="8" fill={T500} />
      <text x="140" y="51" textAnchor="middle" fill={WHITE} fontSize="12" fontWeight="600">Get started</text>

      {/* Secondary */}
      <rect x="85" y="73" width="110" height="34" rx="8" fill="none" stroke={ZINC300} strokeWidth="1.5" />
      <text x="140" y="94" textAnchor="middle" fill={ZINC600} fontSize="12" fontWeight="600">Learn more</text>

      {/* Ghost/link */}
      <rect x="85" y="116" width="110" height="34" rx="8" fill="none" stroke={T300} strokeWidth="1.5" strokeDasharray="4 3" />
      <text x="140" y="137" textAnchor="middle" fill={T500} fontSize="12" fontWeight="600">Cancel</text>
    </svg>
  );
}

function ButtonGroupPreview() {
  return (
    <svg width="100%" height="160" viewBox="0 0 280 160" preserveAspectRatio="xMidYMid meet">
      {/* Connected button group */}
      {/* Left button — teal filled */}
      <rect x="60" y="62" width="72" height="36" rx="8" fill={T500} />
      <text x="96" y="83" textAnchor="middle" fill={WHITE} fontSize="11" fontWeight="600">Month</text>

      {/* Middle button — outlined, mask left/right corners */}
      <rect x="131" y="62" width="72" height="36" fill="none" stroke={ZINC300} strokeWidth="1.5" />
      <text x="167" y="83" textAnchor="middle" fill={ZINC600} fontSize="11" fontWeight="500">Quarter</text>

      {/* Right button */}
      <rect x="202" y="62" width="72" height="36" rx="8" fill="none" stroke={ZINC300} strokeWidth="1.5" />
      {/* Mask middle seams */}
      <rect x="131" y="63" width="4" height="34" fill="none" />
      <text x="238" y="83" textAnchor="middle" fill={ZINC600} fontSize="11" fontWeight="500">Year</text>
    </svg>
  );
}

function CheckboxPreview() {
  return (
    <svg width="100%" height="160" viewBox="0 0 280 160" preserveAspectRatio="xMidYMid meet">
      {/* Checked */}
      <rect x="92" y="38" width="18" height="18" rx="4" fill={T500} />
      <polyline points="96,47 100,51 106,44" fill="none" stroke={WHITE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="118" y="42" width="66" height="8" rx="4" fill={ZINC300} />

      {/* Unchecked */}
      <rect x="92" y="71" width="18" height="18" rx="4" fill="none" stroke={T500} strokeWidth="2" />
      <rect x="118" y="75" width="52" height="8" rx="4" fill={ZINC300} />

      {/* Disabled */}
      <rect x="92" y="104" width="18" height="18" rx="4" fill={ZINC300} />
      <rect x="118" y="108" width="42" height="8" rx="4" fill={ZINC300} />
    </svg>
  );
}

function DropdownPreview() {
  return (
    <svg width="100%" height="160" viewBox="0 0 280 160" preserveAspectRatio="xMidYMid meet">
      {/* Dropdown container */}
      <rect x="70" y="20" width="140" height="120" rx="8" fill="none" stroke={ZINC300} strokeWidth="1.5" />

      {/* Highlighted first item */}
      <rect x="70" y="20" width="140" height="34" rx="8" fill={T100} />
      <rect x="76" y="30" width="3" height="14" rx="2" fill={T500} />
      <rect x="86" y="33" width="60" height="8" rx="4" fill={T500} />

      {/* Menu items */}
      <rect x="86" y="67" width="52" height="7" rx="3.5" fill={ZINC400} />
      <rect x="86" y="92" width="70" height="7" rx="3.5" fill={ZINC400} />
      <rect x="86" y="117" width="44" height="7" rx="3.5" fill={ZINC400} />
    </svg>
  );
}

function FeaturedIconPreview() {
  return (
    <svg width="100%" height="160" viewBox="0 0 280 160" preserveAspectRatio="xMidYMid meet">
      {/* Outer ring */}
      <circle cx="140" cy="80" r="44" fill={T100} />
      {/* Inner circle */}
      <circle cx="140" cy="80" r="28" fill={T500} />
      {/* Lightning bolt icon */}
      <polygon points="144,62 134,80 140,80 136,98 150,76 143,76" fill={WHITE} />
    </svg>
  );
}

function FileUploadPreview() {
  return (
    <svg width="100%" height="160" viewBox="0 0 280 160" preserveAspectRatio="xMidYMid meet">
      {/* Dashed upload area */}
      <rect x="50" y="20" width="180" height="120" rx="8" fill="none" stroke={T300} strokeWidth="2" strokeDasharray="6 4" />

      {/* Upload icon circle */}
      <circle cx="140" cy="70" r="20" fill={T100} />
      {/* Up arrow */}
      <line x1="140" y1="78" x2="140" y2="60" stroke={T500} strokeWidth="2.5" strokeLinecap="round" />
      <polyline points="133,67 140,60 147,67" fill="none" stroke={T500} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Drop label */}
      <rect x="100" y="103" width="80" height="8" rx="4" fill={ZINC300} />
    </svg>
  );
}

function FormPreview() {
  return (
    <svg width="100%" height="160" viewBox="0 0 280 160" preserveAspectRatio="xMidYMid meet">
      {/* Label 1 */}
      <rect x="70" y="16" width="48" height="7" rx="3.5" fill={ZINC400} />
      {/* Input 1 */}
      <rect x="70" y="28" width="140" height="28" rx="6" fill="none" stroke={ZINC300} strokeWidth="1.5" />

      {/* Label 2 */}
      <rect x="70" y="63" width="40" height="7" rx="3.5" fill={ZINC400} />
      {/* Input 2 */}
      <rect x="70" y="75" width="140" height="28" rx="6" fill="none" stroke={ZINC300} strokeWidth="1.5" />

      {/* Submit button */}
      <rect x="70" y="118" width="140" height="28" rx="6" fill={T500} />
      <text x="140" y="136" textAnchor="middle" fill={WHITE} fontSize="11" fontWeight="600">Submit</text>
    </svg>
  );
}

function InputPreview() {
  return (
    <svg width="100%" height="160" viewBox="0 0 280 160" preserveAspectRatio="xMidYMid meet">
      {/* Label */}
      <rect x="70" y="44" width="52" height="8" rx="4" fill={ZINC400} />

      {/* Input with focus ring */}
      <rect x="70" y="58" width="140" height="36" rx="8" fill="none" stroke={T500} strokeWidth="2" />

      {/* Cursor */}
      <line x1="90" y1="70" x2="90" y2="82" stroke={T500} strokeWidth="2" strokeLinecap="round" />

      {/* Hint text */}
      <rect x="70" y="100" width="80" height="7" rx="3.5" fill={ZINC300} />
    </svg>
  );
}

function MultiSelectPreview() {
  return (
    <svg width="100%" height="160" viewBox="0 0 280 160" preserveAspectRatio="xMidYMid meet">
      {/* Input container */}
      <rect x="60" y="56" width="160" height="40" rx="8" fill="none" stroke={T500} strokeWidth="2" />

      {/* Tag 1 */}
      <rect x="68" y="64" width="44" height="22" rx="11" fill={T100} />
      <text x="90" y="79" textAnchor="middle" fill={T500} fontSize="9" fontWeight="600">React</text>

      {/* Tag 2 */}
      <rect x="116" y="64" width="44" height="22" rx="11" fill={T100} />
      <text x="138" y="79" textAnchor="middle" fill={T500} fontSize="9" fontWeight="600">Next</text>

      {/* Cursor */}
      <line x1="168" y1="69" x2="168" y2="81" stroke={T500} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ProgressPreview() {
  return (
    <svg width="100%" height="160" viewBox="0 0 280 160" preserveAspectRatio="xMidYMid meet">
      {/* Horizontal progress bar */}
      <rect x="50" y="60" width="148" height="10" rx="5" fill={ZINC300} />
      <rect x="50" y="60" width="96" height="10" rx="5" fill={T500} />

      {/* Circle progress */}
      <circle cx="228" cy="65" r="22" fill="none" stroke={ZINC300} strokeWidth="6" />
      <circle cx="228" cy="65" r="22" fill="none" stroke={T500} strokeWidth="6"
        strokeDasharray="87 51" strokeLinecap="round"
        transform="rotate(-90 228 65)" />
      <text x="228" y="70" textAnchor="middle" fill={T500} fontSize="10" fontWeight="700">65%</text>

      {/* Label */}
      <rect x="50" y="80" width="60" height="7" rx="3.5" fill={ZINC300} />
    </svg>
  );
}

function RadioButtonPreview() {
  return (
    <svg width="100%" height="160" viewBox="0 0 280 160" preserveAspectRatio="xMidYMid meet">
      {/* Selected */}
      <circle cx="100" cy="50" r="9" fill="none" stroke={T500} strokeWidth="2" />
      <circle cx="100" cy="50" r="4" fill={T500} />
      <rect x="116" y="46" width="60" height="8" rx="4" fill={ZINC300} />

      {/* Unselected */}
      <circle cx="100" cy="80" r="9" fill="none" stroke={ZINC300} strokeWidth="2" />
      <rect x="116" y="76" width="50" height="8" rx="4" fill={ZINC300} />

      {/* Unselected */}
      <circle cx="100" cy="110" r="9" fill="none" stroke={ZINC300} strokeWidth="2" />
      <rect x="116" y="106" width="66" height="8" rx="4" fill={ZINC300} />
    </svg>
  );
}

function SelectPreview() {
  return (
    <svg width="100%" height="160" viewBox="0 0 280 160" preserveAspectRatio="xMidYMid meet">
      {/* Label */}
      <rect x="70" y="46" width="44" height="8" rx="4" fill={ZINC400} />

      {/* Select input */}
      <rect x="70" y="60" width="140" height="36" rx="8" fill="none" stroke={T500} strokeWidth="2" />

      {/* Placeholder text line */}
      <rect x="84" y="74" width="80" height="8" rx="4" fill={ZINC300} />

      {/* Chevron */}
      <polyline points="192,74 198,80 204,74" fill="none" stroke={ZINC400} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SliderPreview() {
  return (
    <svg width="100%" height="160" viewBox="0 0 280 160" preserveAspectRatio="xMidYMid meet">
      {/* Track background */}
      <rect x="50" y="74" width="180" height="6" rx="3" fill={ZINC300} />
      {/* Track fill */}
      <rect x="50" y="74" width="108" height="6" rx="3" fill={T500} />
      {/* Thumb */}
      <circle cx="158" cy="77" r="11" fill={WHITE} stroke={T500} strokeWidth="2.5" />

      {/* Min/Max labels */}
      <rect x="50" y="96" width="20" height="7" rx="3.5" fill={ZINC300} />
      <rect x="210" y="96" width="20" height="7" rx="3.5" fill={ZINC300} />
    </svg>
  );
}

function TagPreview() {
  return (
    <svg width="100%" height="160" viewBox="0 0 280 160" preserveAspectRatio="xMidYMid meet">
      {/* Row of tag pills */}
      <rect x="66" y="68" width="56" height="24" rx="12" fill={T500} />
      <text x="94" y="84" textAnchor="middle" fill={WHITE} fontSize="11" fontWeight="600">Design</text>

      <rect x="130" y="68" width="52" height="24" rx="12" fill={T100} />
      <text x="156" y="84" textAnchor="middle" fill={T500} fontSize="11" fontWeight="600">React</text>

      <rect x="190" y="68" width="48" height="24" rx="12" fill="none" stroke={ZINC300} strokeWidth="1.5" />
      <text x="214" y="84" textAnchor="middle" fill={ZINC600} fontSize="11" fontWeight="500">Draft</text>
    </svg>
  );
}

function TextareaPreview() {
  return (
    <svg width="100%" height="160" viewBox="0 0 280 160" preserveAspectRatio="xMidYMid meet">
      {/* Textarea box */}
      <rect x="60" y="20" width="160" height="100" rx="8" fill="none" stroke={ZINC300} strokeWidth="1.5" />

      {/* Text lines */}
      <rect x="72" y="36" width="120" height="7" rx="3.5" fill={ZINC400} />
      <rect x="72" y="52" width="100" height="7" rx="3.5" fill={ZINC400} />
      <rect x="72" y="68" width="80" height="7" rx="3.5" fill={ZINC300} />

      {/* Resize handle */}
      <line x1="204" y1="114" x2="214" y2="104" stroke={ZINC400} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="200" y1="118" x2="214" y2="104" stroke={ZINC300} strokeWidth="1" strokeLinecap="round" />

      {/* Char count */}
      <rect x="176" y="128" width="44" height="7" rx="3.5" fill={ZINC300} />
    </svg>
  );
}

function TogglePreview() {
  return (
    <svg width="100%" height="160" viewBox="0 0 280 160" preserveAspectRatio="xMidYMid meet">
      {/* Toggle ON */}
      <rect x="98" y="50" width="48" height="26" rx="13" fill={T500} />
      <circle cx="133" cy="63" r="10" fill={WHITE} />
      <rect x="154" y="57" width="40" height="8" rx="4" fill={ZINC300} />

      {/* Toggle OFF */}
      <rect x="98" y="88" width="48" height="26" rx="13" fill={ZINC300} />
      <circle cx="111" cy="101" r="10" fill={WHITE} />
      <rect x="154" y="95" width="36" height="8" rx="4" fill={ZINC300} />
    </svg>
  );
}

function TooltipPreview() {
  return (
    <svg width="100%" height="160" viewBox="0 0 280 160" preserveAspectRatio="xMidYMid meet">
      {/* Tooltip bubble */}
      <rect x="96" y="28" width="88" height="30" rx="6" fill={T500} />
      <text x="140" y="47" textAnchor="middle" fill={WHITE} fontSize="11" fontWeight="500">Hover for help</text>
      {/* Tooltip arrow */}
      <polygon points="136,58 144,58 140,65" fill={T500} />

      {/* Button */}
      <rect x="100" y="80" width="80" height="32" rx="6" fill="none" stroke={ZINC300} strokeWidth="1.5" />
      <text x="140" y="100" textAnchor="middle" fill={ZINC600} fontSize="11" fontWeight="500">Button</text>
    </svg>
  );
}

function MediaCardPreview() {
  return (
    <svg width="100%" height="160" viewBox="0 0 280 160" preserveAspectRatio="xMidYMid meet">
      {/* Card */}
      <rect x="60" y="14" width="160" height="132" rx="8" fill="none" stroke={ZINC300} strokeWidth="1.5" />

      {/* Image area gradient */}
      <defs>
        <linearGradient id="cardGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={T500} />
          <stop offset="100%" stopColor={T300} />
        </linearGradient>
      </defs>
      <rect x="60" y="14" width="160" height="76" rx="8" fill="url(#cardGrad)" />
      <rect x="60" y="70" width="160" height="20" fill="url(#cardGrad)" />

      {/* Text lines */}
      <rect x="72" y="100" width="110" height="9" rx="4.5" fill={ZINC400} />
      <rect x="72" y="115" width="80" height="7" rx="3.5" fill={ZINC300} />

      {/* Tag pill */}
      <rect x="72" y="128" width="44" height="14" rx="7" fill={T100} />
      <text x="94" y="139" textAnchor="middle" fill={T500} fontSize="8" fontWeight="600">Design</text>

      {/* Heart icon */}
      <text x="198" y="139" textAnchor="middle" fill={ZINC400} fontSize="12">♡</text>
    </svg>
  );
}

function CardPreview() {
  return (
    <svg width="100%" height="160" viewBox="0 0 280 160" preserveAspectRatio="xMidYMid meet">
      {/* Card outline */}
      <rect x="60" y="24" width="160" height="112" rx="10" fill="none" stroke={ZINC300} strokeWidth="1.5" />

      {/* Icon area */}
      <circle cx="88" cy="52" r="16" fill={T100} />
      <polygon points="88,44 84,52 92,52" fill={T500} transform="rotate(0 88 52)" />
      <rect x="84" y="54" width="8" height="6" rx="1" fill={T500} />

      {/* Content lines */}
      <rect x="72" y="76" width="90" height="9" rx="4.5" fill={ZINC400} />
      <rect x="72" y="92" width="136" height="7" rx="3.5" fill={ZINC300} />
      <rect x="72" y="105" width="110" height="7" rx="3.5" fill={ZINC300} />

      {/* Footer button */}
      <rect x="72" y="118" width="60" height="12" rx="6" fill={T500} />
      <text x="102" y="128" textAnchor="middle" fill={WHITE} fontSize="8" fontWeight="600">Learn more</text>
    </svg>
  );
}

function StepDotsPreview() {
  return (
    <svg width="100%" height="160" viewBox="0 0 280 160" preserveAspectRatio="xMidYMid meet">
      {/* Connecting line */}
      <line x1="90" y1="80" x2="190" y2="80" stroke={ZINC300} strokeWidth="2" />

      {/* Step 1 - done */}
      <circle cx="90" cy="80" r="10" fill={T500} />
      <polyline points="85,80 89,84 96,76" fill="none" stroke={WHITE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      {/* Step 2 - active */}
      <circle cx="140" cy="80" r="12" fill={T100} stroke={T500} strokeWidth="2" />
      <circle cx="140" cy="80" r="5" fill={T500} />

      {/* Step 3 - pending */}
      <circle cx="190" cy="80" r="10" fill={ZINC300} />
      <text x="190" y="84" textAnchor="middle" fill={WHITE} fontSize="10" fontWeight="700">3</text>

      {/* Labels */}
      <rect x="72" y="98" width="36" height="7" rx="3.5" fill={ZINC300} />
      <rect x="122" y="98" width="36" height="7" rx="3.5" fill={T100} />
      <rect x="172" y="98" width="36" height="7" rx="3.5" fill={ZINC300} />
    </svg>
  );
}

// ── Component data ─────────────────────────────────────────────────────────

interface ComponentEntry {
  name: string;
  description: string;
  path: string;
  preview: React.ReactNode;
}

const BASE_COMPONENTS: ComponentEntry[] = [
  {
    name: 'Avatar',
    description: 'User profile images with hologram gradient fallback.',
    path: '/components/avatar',
    preview: <AvatarPreview />,
  },
  {
    name: 'Badge',
    description: 'Status indicators and label pills in multiple colors.',
    path: '/components/badge',
    preview: <BadgePreview />,
  },
  {
    name: 'Badge group',
    description: 'Grouped badges with avatar, icon, or text.',
    path: '/components/badge-group',
    preview: <BadgeGroupPreview />,
  },
  {
    name: 'Button',
    description: 'Primary, secondary, ghost, and accent button variants.',
    path: '/components/button',
    preview: <ButtonPreview />,
  },
  {
    name: 'Button group',
    description: 'Connected button clusters for related actions.',
    path: '/components/button-group',
    preview: <ButtonGroupPreview />,
  },
  {
    name: 'Card',
    description: 'Surface container with border, shadow, and hover states.',
    path: '/components/card',
    preview: <CardPreview />,
  },
  {
    name: 'Checkbox',
    description: 'Accessible checkboxes with checked, unchecked, and indeterminate states.',
    path: '/components/checkbox',
    preview: <CheckboxPreview />,
  },
  {
    name: 'Dropdown',
    description: 'Menu dropdowns with icons, search, and grouped items.',
    path: '/components/dropdown',
    preview: <DropdownPreview />,
  },
  {
    name: 'Featured icon',
    description: 'Icon containers for highlights and empty states.',
    path: '/components/featured-icon',
    preview: <FeaturedIconPreview />,
  },
  {
    name: 'File upload',
    description: 'File selection trigger with drag-and-drop support.',
    path: '/components/file-upload',
    preview: <FileUploadPreview />,
  },
  {
    name: 'Form',
    description: 'Form wrapper with React Hook Form integration.',
    path: '/components/form',
    preview: <FormPreview />,
  },
  {
    name: 'Input',
    description: 'Text inputs with label, hint, error, and addon variants.',
    path: '/components/input',
    preview: <InputPreview />,
  },
  {
    name: 'Multi-select',
    description: 'Select multiple values displayed as removable tags.',
    path: '/components/multi-select',
    preview: <MultiSelectPreview />,
  },
  {
    name: 'Progress',
    description: 'Bar and circle progress indicators with brand colors.',
    path: '/components/progress',
    preview: <ProgressPreview />,
  },
  {
    name: 'Radio button',
    description: 'Single-select radio controls with label and description.',
    path: '/components/radio-button',
    preview: <RadioButtonPreview />,
  },
  {
    name: 'Select',
    description: 'Dropdown select with native and custom variants.',
    path: '/components/select',
    preview: <SelectPreview />,
  },
  {
    name: 'Slider',
    description: 'Range slider with teal track and configurable steps.',
    path: '/components/slider',
    preview: <SliderPreview />,
  },
  {
    name: 'Step dots',
    description: 'Step indicator for multi-step flows and wizards.',
    path: '/components/stepdots',
    preview: <StepDotsPreview />,
  },
  {
    name: 'Tag',
    description: 'Selectable and filterable tag pills.',
    path: '/components/tag',
    preview: <TagPreview />,
  },
  {
    name: 'Textarea',
    description: 'Multiline text input with character count.',
    path: '/components/textarea',
    preview: <TextareaPreview />,
  },
  {
    name: 'Toggle',
    description: 'On/off switch built on React Aria.',
    path: '/components/toggle',
    preview: <TogglePreview />,
  },
  {
    name: 'Tooltip',
    description: 'Contextual tooltips in four positions.',
    path: '/components/tooltip',
    preview: <TooltipPreview />,
  },
];

const CUSTOM_COMPONENTS: ComponentEntry[] = [
  {
    name: 'Media card',
    description: 'Content card with image, tag, and save action.',
    path: '/custom/media-card',
    preview: <MediaCardPreview />,
  },
];

// ── ComponentCard ──────────────────────────────────────────────────────────

function ComponentCard({
  component,
  onClick,
}: {
  component: ComponentEntry;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-default)',
        borderRadius: 12,
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease',
        outline: 'none',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = 'var(--border-strong)';
        el.style.transform = 'translateY(-2px)';
        el.style.boxShadow = 'var(--shadow-md)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = 'var(--border-default)';
        el.style.transform = 'translateY(0)';
        el.style.boxShadow = 'none';
      }}
      onFocus={(e) => {
        (e.currentTarget as HTMLElement).style.outline = '2px solid var(--graffiti-500)';
        (e.currentTarget as HTMLElement).style.outlineOffset = '2px';
      }}
      onBlur={(e) => {
        (e.currentTarget as HTMLElement).style.outline = 'none';
      }}
    >
      {/* Preview area */}
      <div
        style={{
          height: 160,
          background: 'var(--bg-page)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          borderBottom: '1px solid var(--border-default)',
        }}
      >
        {component.preview}
      </div>

      {/* Info */}
      <div style={{ padding: '12px 14px 14px' }}>
        <p
          style={{
            margin: '0 0 4px',
            fontSize: 14,
            fontWeight: 600,
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-body)',
          }}
        >
          {component.name}
        </p>
        <p
          style={{
            margin: 0,
            fontSize: 12,
            color: 'var(--text-tertiary)',
            lineHeight: 1.5,
            fontFamily: 'var(--font-body)',
          }}
        >
          {component.description}
        </p>
      </div>
    </div>
  );
}

// ── Section label ──────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--text-tertiary)',
        margin: '0 0 16px',
        fontFamily: 'var(--font-body)',
      }}
    >
      {children}
    </p>
  );
}

function Divider() {
  return (
    <hr
      style={{
        border: 'none',
        borderTop: '1px solid var(--border-default)',
        margin: '0 0 32px',
      }}
    />
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export function ComponentsOverviewPage() {
  const navigate = useNavigate();

  return (
    <div>
      <Breadcrumb items={[{ label: 'Components' }, { label: 'Overview' }]} />

      {/* Page header */}
      <div style={{ marginBottom: 40 }}>
        <h1
          style={{
            fontSize: 28,
            fontWeight: 500,
            color: 'var(--text-primary)',
            margin: '0 0 8px',
            letterSpacing: '-0.02em',
            fontFamily: 'var(--font-body)',
          }}
        >
          Components
        </h1>
        <p
          style={{
            fontSize: 15,
            color: 'var(--text-secondary)',
            margin: '0 0 20px',
            lineHeight: 1.6,
            maxWidth: 560,
            fontFamily: 'var(--font-body)',
          }}
        >
          A growing library of open-source React components built with Tailwind CSS v4
          and React Aria — styled to the Zinc design system.
        </p>

        {/* Stats row */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
          <Badge label={`${BASE_COMPONENTS.length} components`} variant="neutral" />
        </div>
      </div>

      <Divider />

      {/* Base Components grid */}
      <SectionLabel>Base components</SectionLabel>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: 16,
          marginBottom: 48,
        }}
      >
        {BASE_COMPONENTS.map((component) => (
          <ComponentCard
            key={component.name}
            component={component}
            onClick={() => navigate(component.path)}
          />
        ))}
      </div>

      <Divider />

      {/* Custom Components section */}
      <SectionLabel>Custom components</SectionLabel>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: 16,
        }}
      >
        {CUSTOM_COMPONENTS.map((component) => (
          <ComponentCard
            key={component.name}
            component={component}
            onClick={() => navigate(component.path)}
          />
        ))}
      </div>
    </div>
  );
}
