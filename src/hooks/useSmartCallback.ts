import { useRef } from 'react';
import isEqual from 'fast-deep-equal';

export function useSmartCallback<T extends (...args: any[]) => any>(
  callback: T,
  deps: any[]
): T {
  const ref = useRef<{ deps: any[]; fn: T } | null>(null);

  if (!ref.current || !isEqual(ref.current.deps, deps)) {
    ref.current = { deps, fn: callback };
  }

  return ref.current.fn;
}