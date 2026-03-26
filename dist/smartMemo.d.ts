import React from 'react';
type Options = {
    deepCompare?: boolean;
    debug?: boolean;
    ignoreProps?: string[];
};
export declare function smartMemo<T>(Component: React.FC<T>, options?: Options): React.MemoExoticComponent<React.FC<T>>;
export {};
