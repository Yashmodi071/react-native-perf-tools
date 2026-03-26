"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSmartEffect = useSmartEffect;
const react_1 = require("react");
const fast_deep_equal_1 = __importDefault(require("fast-deep-equal"));
function useSmartEffect(effect, deps) {
    const prevDeps = (0, react_1.useRef)(null);
    const hasChanged = !prevDeps.current || !(0, fast_deep_equal_1.default)(prevDeps.current, deps);
    (0, react_1.useEffect)(() => {
        if (hasChanged) {
            prevDeps.current = deps;
            return effect();
        }
    }, [hasChanged, effect]);
}
