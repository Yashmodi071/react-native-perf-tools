import { useEffect, useRef } from 'react';
import isEqual from 'fast-deep-equal';
import { logger } from '../utils/logger';

export function useWhyDidYouRender(name: string, props: any) {
  const prevProps = useRef(props);

  useEffect(() => {
    if (!isEqual(prevProps.current, props)) {
      const changes: any = {};

      Object.keys(props || {}).forEach((key) => {
        if (prevProps.current[key] !== props[key]) {
          changes[key] = {
            from: prevProps.current[key],
            to: props[key],
          };
        }
      });

      logger.log(`[WhyDidYouRender] ${name}`, changes);
    }

    prevProps.current = props;
  });
}