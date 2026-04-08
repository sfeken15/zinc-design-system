import { useState, useCallback } from 'react';

export type ConfigControl =
  | { type: 'text'; key: string; label: string; placeholder?: string }
  | { type: 'toggle'; key: string; label: string }
  | { type: 'button-group'; key: string; label: string; options: { label: string; value: string }[] }
  | { type: 'select'; key: string; label: string; options: { label: string; value: string }[] };

interface ConfiguratorProps {
  controls: ConfigControl[];
  defaultValues: Record<string, any>;
  codeTemplate: (values: Record<string, any>) => string;
  children: (values: Record<string, any>) => React.ReactNode;
}

export function Configurator({ controls, defaultValues, codeTemplate, children }: ConfiguratorProps) {
  const [values, setValues] = useState<Record<string, any>>(defaultValues);
  const [copied, setCopied] = useState(false);

  const set = useCallback((key: string, value: any) => {
    setValues(prev => ({ ...prev, [key]: value }));
  }, []);

  const copyCode = () => {
    navigator.clipboard.writeText(codeTemplate(values));
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div style={{
      border: '1px solid var(--border-default)',
      borderRadius: 12,
      overflow: 'hidden',
      marginBottom: 48,
    }}>

      {/* Top: Preview + Controls */}
      <div style={{ display: 'flex', minHeight: 320 }}>

        {/* LEFT — Live preview */}
        <div style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--bg-page)',
          padding: 48,
          backgroundImage: 'radial-gradient(circle, var(--border-subtle) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}>
          {children(values)}
        </div>

        {/* RIGHT — Controls panel */}
        <div style={{
          width: 260,
          flexShrink: 0,
          borderLeft: '1px solid var(--border-default)',
          background: 'var(--bg-surface)',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          overflowY: 'auto',
        }}>
          <p style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--text-tertiary)',
            margin: 0,
          }}>
            Controls
          </p>

          {controls.map(control => (
            <div key={control.key} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <label style={{
                fontSize: 12,
                fontWeight: 600,
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-body)',
              }}>
                {control.label}
              </label>

              {/* TEXT INPUT */}
              {control.type === 'text' && (
                <input
                  type="text"
                  value={values[control.key]}
                  onChange={e => set(control.key, e.target.value)}
                  placeholder={control.placeholder}
                  style={{
                    width: '100%',
                    padding: '7px 10px',
                    fontSize: 13,
                    fontFamily: 'var(--font-body)',
                    background: 'var(--input-bg)',
                    color: 'var(--input-text)',
                    border: '1px solid var(--input-border)',
                    borderRadius: 'var(--input-radius)',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.15s',
                  }}
                  onFocus={e => (e.target.style.borderColor = 'var(--input-border-focus)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--input-border)')}
                />
              )}

              {/* TOGGLE */}
              {control.type === 'toggle' && (
                <button
                  onClick={() => set(control.key, !values[control.key])}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  <div style={{
                    width: 36,
                    height: 20,
                    borderRadius: 9999,
                    background: values[control.key] ? 'var(--graffiti-500)' : 'var(--border-default)',
                    position: 'relative',
                    transition: 'background 0.2s',
                    flexShrink: 0,
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: 2,
                      left: values[control.key] ? 18 : 2,
                      width: 16,
                      height: 16,
                      borderRadius: '50%',
                      background: 'white',
                      transition: 'left 0.2s',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
                    }} />
                  </div>
                  <span style={{
                    fontSize: 13,
                    color: values[control.key] ? 'var(--text-primary)' : 'var(--text-tertiary)',
                    fontFamily: 'var(--font-body)',
                  }}>
                    {values[control.key] ? 'On' : 'Off'}
                  </span>
                </button>
              )}

              {/* BUTTON GROUP */}
              {control.type === 'button-group' && (
                <div style={{
                  display: 'flex',
                  border: '1px solid var(--border-default)',
                  borderRadius: 8,
                  overflow: 'hidden',
                }}>
                  {control.options.map((opt, i) => (
                    <button
                      key={opt.value}
                      onClick={() => set(control.key, opt.value)}
                      style={{
                        flex: 1,
                        padding: '6px 4px',
                        fontSize: 12,
                        fontWeight: 600,
                        fontFamily: 'var(--font-body)',
                        cursor: 'pointer',
                        border: 'none',
                        borderLeft: i > 0 ? '1px solid var(--border-default)' : 'none',
                        background: values[control.key] === opt.value
                          ? 'var(--graffiti-500)'
                          : 'var(--bg-page)',
                        color: values[control.key] === opt.value
                          ? 'var(--zinc-950)'
                          : 'var(--text-tertiary)',
                        transition: 'all 0.15s',
                      }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}

              {/* SELECT */}
              {control.type === 'select' && (
                <select
                  value={values[control.key]}
                  onChange={e => set(control.key, e.target.value)}
                  style={{
                    width: '100%',
                    padding: '7px 10px',
                    fontSize: 13,
                    fontFamily: 'var(--font-body)',
                    background: 'var(--input-bg)',
                    color: 'var(--input-text)',
                    border: '1px solid var(--input-border)',
                    borderRadius: 'var(--input-radius)',
                    outline: 'none',
                    cursor: 'pointer',
                    appearance: 'none',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2371717A' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 10px center',
                    paddingRight: 28,
                    boxSizing: 'border-box',
                  }}
                >
                  {control.options.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM — Live code block */}
      <div style={{
        borderTop: '1px solid var(--border-default)',
        position: 'relative',
        background: 'var(--bg-subtle)',
      }}>
        <button
          onClick={copyCode}
          style={{
            position: 'absolute',
            top: 12,
            right: 12,
            padding: '4px 10px',
            fontSize: 11,
            fontWeight: 600,
            fontFamily: 'var(--font-body)',
            background: copied ? 'var(--graffiti-500)' : 'var(--bg-surface)',
            color: copied ? 'var(--zinc-950)' : 'var(--text-secondary)',
            border: '1px solid var(--border-default)',
            borderRadius: 6,
            cursor: 'pointer',
            transition: 'all 0.15s',
            zIndex: 1,
          }}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>

        <pre style={{
          margin: 0,
          padding: '20px 24px',
          fontSize: 12,
          fontFamily: 'var(--font-mono)',
          color: 'var(--text-secondary)',
          overflowX: 'auto',
          lineHeight: 1.7,
          paddingRight: 80,
          whiteSpace: 'pre',
        }}>
          <code>{codeTemplate(values)}</code>
        </pre>
      </div>
    </div>
  );
}
