"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSmartMemo = useSmartMemo;
const react_1 = require("react");
const fast_deep_equal_1 = __importDefault(require("fast-deep-equal"));
function useSmartMemo(value, deps) {
    const ref = (0, react_1.useRef)(null);
    if (!ref.current || !(0, fast_deep_equal_1.default)(ref.current.deps, deps)) {
        ref.current = { deps, value };
    }
    return ref.current.value;
}
