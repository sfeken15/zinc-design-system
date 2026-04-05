import { TextField, Label, TextArea as AriaTextarea } from "react-aria-components";
import { cx } from "@/utils/cx";

interface TextareaProps {
  label?: string;
  placeholder?: string;
  hint?: string;
  error?: string;
  value?: string;
  onChange?: (value: string) => void;
  rows?: number;
  maxLength?: number;
  showCount?: boolean;
  className?: string;
}

export function Textarea({ label, placeholder, hint, error, value, onChange, rows = 4, maxLength, showCount = false, className = "" }: TextareaProps) {
  return (
    <TextField value={value} onChange={onChange} isInvalid={!!error}
      className={cx("flex flex-col gap-1.5", className)}>
      {label && <Label className="text-sm font-medium text-[var(--text-secondary)]">{label}</Label>}
      <AriaTextarea placeholder={placeholder} rows={rows} maxLength={maxLength}
        className={cx(
          "w-full rounded-2xl px-5 py-4 text-base leading-relaxed",
          "bg-[var(--input-bg)] text-[var(--input-text)]",
          "border border-[var(--input-border)]",
          "placeholder:text-[var(--input-placeholder)]",
          "outline-none transition-all duration-200 resize-none",
          "focus:border-[var(--input-border-focus)] focus:bg-[var(--input-bg-focus)]",
          error && "border-[var(--color-error)]"
        )}
      />
      <div className="flex justify-between">
        {hint && !error && <p className="text-xs text-[var(--text-tertiary)]">{hint}</p>}
        {error && <p className="text-xs text-[var(--color-error-text)]">{error}</p>}
        {showCount && maxLength && value !== undefined && (
          <p className="text-xs text-[var(--text-tertiary)] ml-auto">{value.length}/{maxLength}</p>
        )}
      </div>
    </TextField>
  );
}
