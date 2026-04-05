import { twMerge } from "tailwind-merge";

export const cx = twMerge;

export function sortCx<T extends Record<string, string>>(classes: T): T {
  return classes;
}
