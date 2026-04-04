"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
exports.logger = {
    log: (...args) => {
        const isDev = typeof globalThis !== 'undefined' &&
            globalThis.__DEV__ === true;
        if (isDev) {
            console.log('[PerfTools]', ...args);
        }
    },
};
