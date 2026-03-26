import { useRef } from 'react';
import isEqual from 'fast-deep-equal';

export function useSmartMemo<T>(value: T, deps: any[]) {
  const ref = useRef<{ deps: any[]; value: T } | null>(null);

  if (!ref.current || !isEqual(ref.current.deps, deps)) {
    ref.current = { deps, value };
  }

  return ref.current.value;
}