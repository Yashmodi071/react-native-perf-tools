import React, { memo } from 'react';
import isEqual from 'fast-deep-equal';
import { shallowCompare } from './utils/shallowCompare';
import { logger } from './utils/logger';

type Options = {
  deepCompare?: boolean;
  debug?: boolean;
  ignoreProps?: string[];
};

export function smartMemo<T>(
  Component: React.FC<T>,
  options: Options = {}
) {
  const {
    deepCompare = false,
    debug = false,
    ignoreProps = [],
  } = options;

  return memo(Component, (prevProps, nextProps) => {
    const filteredPrev = filterProps(prevProps, ignoreProps);
    const filteredNext = filterProps(nextProps, ignoreProps);

    const isSame = deepCompare
      ? isEqual(filteredPrev, filteredNext)
      : shallowCompare(filteredPrev, filteredNext);

    if (debug && !isSame) {
      logger.log('Re-render:', getChangedProps(prevProps, nextProps));
    }

    return isSame;
  });
}

function filterProps(props: any, ignore: string[]) {
  const ignoreSet = new Set(ignore);
  const newProps: any = {};

  Object.keys(props || {}).forEach((key) => {
    if (!ignoreSet.has(key)) {
      newProps[key] = props[key];
    }
  });

  return newProps;
}

function getChangedProps(prev: any, next: any) {
  const changes: any = {};

  Object.keys(next || {}).forEach((key) => {
    if (prev[key] !== next[key]) {
      changes[key] = {
        from: prev[key],
        to: next[key],
      };
    }
  });

  return changes;
}