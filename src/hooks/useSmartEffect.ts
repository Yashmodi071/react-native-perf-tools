import { useEffect, useRef } from 'react';
import isEqual from 'fast-deep-equal';

export function useSmartEffect(
  effect: () => void | (() => void),
  deps: any[]
) {
  const prevDeps = useRef<any[] | null>(null);

  const hasChanged =
    !prevDeps.current || !isEqual(prevDeps.current, deps);

  useEffect(() => {
    if (hasChanged) {
      prevDeps.current = deps;
      return effect();
    }
  }, [hasChanged, effect]);
}