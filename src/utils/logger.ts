export const logger = {
  log: (...args: any[]) => {
    const isDev =
      typeof globalThis !== 'undefined' &&
      (globalThis as any).__DEV__;

    if (isDev) {
      console.log('[PerfTools]', ...args);
    }
  },
};