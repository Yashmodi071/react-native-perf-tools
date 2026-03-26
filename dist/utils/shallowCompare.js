"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shallowCompare = shallowCompare;
function shallowCompare(obj1, obj2) {
    if (obj1 === obj2)
        return true;
    const keys1 = Object.keys(obj1 || {});
    const keys2 = Object.keys(obj2 || {});
    if (keys1.length !== keys2.length)
        return false;
    for (let key of keys1) {
        if (obj1[key] !== obj2[key])
            return false;
    }
    return true;
}
