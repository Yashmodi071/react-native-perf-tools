import { useRef } from 'react';
import isEqual from 'fast-deep-equal';

export function useStableValue<T>(value: T) {
  const ref = useRef(value);

  if (!isEqual(ref.current, value)) {
    ref.current = value;
  }

  return ref.current;
}