"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.smartMemo = smartMemo;
const react_1 = require("react");
const fast_deep_equal_1 = __importDefault(require("fast-deep-equal"));
const shallowCompare_1 = require("./utils/shallowCompare");
const logger_1 = require("./utils/logger");
function smartMemo(Component, options = {}) {
    const { deepCompare = false, debug = false, ignoreProps = [], } = options;
    return (0, react_1.memo)(Component, (prevProps, nextProps) => {
        const filteredPrev = filterProps(prevProps, ignoreProps);
        const filteredNext = filterProps(nextProps, ignoreProps);
        const isSame = deepCompare
            ? (0, fast_deep_equal_1.default)(filteredPrev, filteredNext)
            : (0, shallowCompare_1.shallowCompare)(filteredPrev, filteredNext);
        if (debug && !isSame) {
            logger_1.logger.log('Re-render:', getChangedProps(prevProps, nextProps));
        }
        return isSame;
    });
}
function filterProps(props, ignore) {
    const ignoreSet = new Set(ignore);
    const newProps = {};
    Object.keys(props || {}).forEach((key) => {
        if (!ignoreSet.has(key)) {
            newProps[key] = props[key];
        }
    });
    return newProps;
}
function getChangedProps(prev, next) {
    const changes = {};
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
