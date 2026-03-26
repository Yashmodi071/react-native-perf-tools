"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRenderCount = useRenderCount;
const react_1 = require("react");
function useRenderCount() {
    const count = (0, react_1.useRef)(0);
    count.current += 1;
    return count.current;
}
