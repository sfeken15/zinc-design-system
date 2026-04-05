import { Slider as AriaSlider, SliderTrack, SliderThumb } from "react-aria-components";
import { cx } from "@/utils/cx";

interface SliderProps {
  label?: string;
  leftLabel?: string;
  leftSub?: string;
  rightLabel?: string;
  rightSub?: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
}

export function Slider({ label, leftLabel, leftSub, rightLabel, rightSub, value, onChange, min = 0, max = 100, step = 1, className = "" }: SliderProps) {
  return (
    <div className={cx("flex flex-col gap-3", className)}>
      {(leftLabel || rightLabel) && (
        <div className="flex justify-between items-end">
          <div>
            {leftLabel && <p className="text-sm font-medium text-[var(--text-primary)]">{leftLabel}</p>}
            {leftSub && <p className="text-xs text-[var(--text-tertiary)] mt-0.5">{leftSub}</p>}
          </div>
          {label && <span className="text-xs font-medium tracking-widest uppercase text-[var(--text-tertiary)]">{label}</span>}
          <div className="text-right">
            {rightLabel && <p className="text-sm font-medium text-[var(--text-primary)]">{rightLabel}</p>}
            {rightSub && <p className="text-xs text-[var(--text-tertiary)] mt-0.5">{rightSub}</p>}
          </div>
        </div>
      )}
      <AriaSlider value={value} onChange={onChange} minValue={min} maxValue={max} step={step}
        className="relative flex items-center w-full">
        <SliderTrack className="relative w-full h-1 rounded-full bg-[var(--slider-track-bg)]">
          {({ state }) => (
            <>
              <div className="absolute h-full rounded-full bg-[var(--slider-track-fill)]"
                style={{ width: state.getThumbPercent(0) * 100 + "%" }} />
              <SliderThumb className="w-5 h-5 rounded-full top-1/2 bg-[var(--slider-thumb-bg)] border-2 border-[var(--slider-thumb-border)] outline-none transition-all cursor-grab active:cursor-grabbing focus-visible:ring-2 focus-visible:ring-[var(--border-focus)]" />
            </>
          )}
        </SliderTrack>
      </AriaSlider>
    </div>
  );
}
