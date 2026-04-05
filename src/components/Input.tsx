import { TextField, Label, Input as AriaInput } from "react-aria-components";
import { cx } from "@/utils/cx";

interface InputProps {
  label?: string;
  placeholder?: string;
  hint?: string;
  error?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  type?: string;
}

export function Input({ label, placeholder, hint, error, value, onChange, className = "", ...props }: InputProps) {
  return (
    <TextField value={value} onChange={onChange} isInvalid={!!error}
      className={cx("flex flex-col gap-1.5", className)} {...props}>
      {label && <Label className="text-sm font-medium text-[var(--text-secondary)]">{label}</Label>}
      <AriaInput placeholder={placeholder}
        className={cx(
          "w-full rounded-xl px-4 py-3.5 text-base",
          "bg-[var(--input-bg)] text-[var(--input-text)]",
          "border border-[var(--input-border)]",
          "placeholder:text-[var(--input-placeholder)]",
          "outline-none transition-all duration-200",
          "focus:border-[var(--input-border-focus)] focus:bg-[var(--input-bg-focus)]",
          error && "border-[var(--color-error)]"
        )}
      />
      {hint && !error && <p className="text-xs text-[var(--text-tertiary)]">{hint}</p>}
      {error && <p className="text-xs text-[var(--color-error-text)]">{error}</p>}
    </TextField>
  );
}
