"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWhyDidYouRender = useWhyDidYouRender;
const react_1 = require("react");
const fast_deep_equal_1 = __importDefault(require("fast-deep-equal"));
const logger_1 = require("../utils/logger");
function useWhyDidYouRender(name, props) {
    const prevProps = (0, react_1.useRef)(props);
    (0, react_1.useEffect)(() => {
        if (!(0, fast_deep_equal_1.default)(prevProps.current, props)) {
            const changes = {};
            Object.keys(props || {}).forEach((key) => {
                if (prevProps.current[key] !== props[key]) {
                    changes[key] = {
                        from: prevProps.current[key],
                        to: props[key],
                    };
                }
            });
            logger_1.logger.log(`[WhyDidYouRender] ${name}`, changes);
        }
        prevProps.current = props;
    });
}
