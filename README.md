# 🚀 react-native-perf-tools

<div align="center">
  <p><strong>A comprehensive performance & debugging toolkit for React Native.</strong></p>
  
  [![npm version](https://img.shields.io/npm/v/react-native-perf-tools.svg?style=flat-square)](https://www.npmjs.com/package/react-native-perf-tools)
  [![npm downloads](https://img.shields.io/npm/dm/react-native-perf-tools.svg?style=flat-square)](https://www.npmjs.com/package/react-native-perf-tools)
  [![license](https://img.shields.io/npm/l/react-native-perf-tools.svg?style=flat-square)](https://github.com/Yashmodi071/react-native-perf-tools/blob/main/LICENSE)
  [![stars](https://img.shields.io/github/stars/Yashmodi071/react-native-perf-tools?style=flat-square)](https://github.com/Yashmodi071/react-native-perf-tools/stargazers)
</div>

---

`react-native-perf-tools` is designed to help you detect, debug, and fix performance bottlenecks in your React Native applications. 

Most React Native apps suffer from **unnecessary re-renders**, **hard-to-debug performance drops**, and **inefficient hooks usage**. This library provides specialized hooks and Higher-Order Components (HOCs) to track rendering behavior and optimize it effortlessly.

## ✨ Features

### ⚡ Core Optimization
* **`smartMemo`** — Advanced `React.memo` with deep comparison support.
* **`useSmartMemo`** — Deep dependency memoization to prevent expensive recalculations.
* **`useSmartCallback`** — Stable function references that don't trigger re-renders.
* **`useSmartEffect`** — Optimized effect execution running only when dependencies truly change.

### 🔍 Debugging & Tracking
* **`useWhyDidYouRender`** — Detect exactly which prop changes caused a re-render.
* **`useRenderCount`** — Track the frequency of component updates.

### 🛠 Utility Hooks
* **`usePrevious`** — Access the previous value of a state or prop.
* **`useDebounce`** — Delay value updates (great for search inputs and API calls).
* **`useStableValue`** — Prevent object re-creation between renders.
* **`useDeepCompareEffect`** — Execute effects based on deep comparison of dependencies.

---

## 📦 Installation

Install via npm:

```bash
npm install react-native-perf-tools
```

Or via yarn:

```bash
yarn add react-native-perf-tools
```

---

## 🚀 Quick Start

Here's an example of how you can integrate multiple tools to debug and optimize a component simultaneously.

```tsx
import React from 'react';
import { Text, View } from 'react-native';
import {
  smartMemo,
  useWhyDidYouRender,
  useRenderCount,
  useSmartEffect,
} from 'react-native-perf-tools';

const UserProfile = (props) => {
  // 1. Track how many times this component renders
  const renderCount = useRenderCount();

  // 2. Find out exactly WHY it re-rendered
  useWhyDidYouRender('UserProfile', props);

  // 3. Run an effect only when props actually change (deep comparison)
  useSmartEffect(() => {
    console.log('User profile props deeply changed! 🚀');
  }, [props]);

  return (
    <View>
      <Text>Render Count: {renderCount}</Text>
    </View>
  );
};

// 4. Wrap with smartMemo to prevent unnecessary renders based on deep comparison
export default smartMemo(UserProfile, {
  deepCompare: true,
  debug: true,
});
```

---

## 📚 API Reference

### Optimization Tools

#### `smartMemo(Component, options)`
An advanced alternative to `React.memo`.

```tsx
const OptimizedComponent = smartMemo(MyComponent, {
  deepCompare: true, // Deeply compare props instead of shallow
  debug: true,       // Log when rendering is prevented
  ignoreProps: ['style', 'onPress'], // Ignore specific props during comparison
});
```

#### `useSmartMemo(factory, deps)`
Memoizes a value using deep comparison of its dependencies.

```tsx
const filteredData = useSmartMemo(() => filterLargeList(data), [data, query]);
```

#### `useSmartCallback(callback, deps)`
Returns a stable callback function.

```tsx
const handlePress = useSmartCallback(() => {
  console.log('Button pressed', id);
}, [id]);
```

#### `useSmartEffect(effect, deps)`
Runs the effect only when the dependencies have deeply changed.

```tsx
useSmartEffect(() => {
  fetchUserDetails(user.id);
}, [user]);
```

### Debugging Tools

#### `useWhyDidYouRender(componentName, props)`
Logs the exact props that triggered a re-render.

```tsx
useWhyDidYouRender('MyComponent', props);
```
**Example Output:**
```
[PerfTools] [WhyDidYouRender] MyComponent { name: { from: "Alice", to: "Bob" } }
```

#### `useRenderCount()`
Returns the number of times the component has rendered.

```tsx
const count = useRenderCount();
console.log(`Rendered ${count} times`);
```

### Utility Hooks

#### `usePrevious(value)`
Returns the value from the previous render cycle.

```tsx
const prevSearch = usePrevious(searchQuery);
```

#### `useDebounce(value, delay)`
Debounces a rapidly changing value.

```tsx
const debouncedSearch = useDebounce(searchQuery, 500);
```

#### `useStableValue(value)`
Returns a stable reference to an object, preventing re-creation if the contents haven't changed.

```tsx
const stableConfig = useStableValue({ theme: 'dark', id: 1 });
```

#### `useDeepCompareEffect(effect, deps)`
Identical to `useEffect`, but uses deep comparison for dependencies.

```tsx
useDeepCompareEffect(() => {
  syncData();
}, [complexNestedObject]);
```

---

## 🎯 Real-World Use Cases

- **FlatList Optimization:** Prevent list items from continuously re-rendering when parent state changes.
- **Form Inputs:** Use `useDebounce` to prevent API spam while typing.
- **Complex State:** Use `useStableValue` and `useDeepCompareEffect` when dealing with nested API responses.
- **Debugging Ghost Renders:** Drop `useWhyDidYouRender` into any component to instantly see what's causing layout thrashing.

---

## ⚙️ Compatibility

- React Native `>= 0.70`
- React `>= 17`

---

## 🚀 Roadmap

- [ ] FlatList advanced optimization wrappers
- [ ] Automated performance analytics and scoring
- [ ] Flipper / React Native Debugger integration
- [ ] On-device debug overlay UI

---

## 👨‍💻 Author

Created with ❤️ by **Yash Modi**.

If you find this library useful, please consider:
- ⭐️ Starring the [GitHub repository](https://github.com/Yashmodi071/react-native-perf-tools)
- 📢 Sharing it with the React Native community

## 📄 License

This project is licensed under the MIT License.
