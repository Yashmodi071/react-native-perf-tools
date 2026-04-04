import { useEffect, useRef } from 'react';
import isEqual from 'fast-deep-equal';

export function useDeepCompareEffect(
  effect: () => void | (() => void),
  deps: any[]
) {
  const prev = useRef<any[] | undefined>(undefined);

  if (!isEqual(prev.current, deps)) {
    prev.current = deps;
  }

  useEffect(() => {
    return effect();
  }, [prev.current]);
}