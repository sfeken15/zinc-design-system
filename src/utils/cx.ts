import { twMerge } from "tailwind-merge";

export const cx = twMerge;

// sortCx is a no-op that returns its input — used by Untitled UI components for organization
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function sortCx<T extends Record<string, any>>(classes: T): T {
  return classes;
}
