# 🚀 react-native-perf-tools

![npm](https://img.shields.io/npm/v/react-native-perf-tools)
![downloads](https://img.shields.io/npm/dm/react-native-perf-tools)
![license](https://img.shields.io/npm/l/react-native-perf-tools)
![stars](https://img.shields.io/github/stars/Yashmodi071/react-native-perf-tools?style=social)

> ⚡ Performance & Debugging Toolkit for React Native

---

## ✨ Overview

`react-native-perf-tools` helps you detect and fix performance issues in React Native apps.

Most apps suffer from:

* ❌ Unnecessary re-renders
* ❌ Hard-to-debug performance issues
* ❌ Inefficient hooks usage

👉 This library gives you tools to **track, debug, and optimize rendering behavior**

---

## 📦 Installation

```bash
npm install react-native-perf-tools
```

---

## 🚀 Quick Example

```tsx
import {
  smartMemo,
  useWhyDidYouRender,
  useRenderCount,
  useSmartEffect,
} from 'react-native-perf-tools';

const Demo = (props) => {
  const renderCount = useRenderCount();

  useWhyDidYouRender('DemoComponent', props);

  useSmartEffect(() => {
    console.log('Effect triggered 🚀');
  }, [props]);

  return <Text>Render Count: {renderCount}</Text>;
};

export default smartMemo(Demo, {
  debug: true,
});
```

---

# 🔥 Features

### Core Performance

* ⚡ **smartMemo** → Advanced `React.memo`
* 🧠 **useSmartMemo** → Deep dependency memoization
* 🔁 **useSmartCallback** → Stable function references
* 🎯 **useSmartEffect** → Optimized effect execution

### Debugging

* 🔍 **useWhyDidYouRender** → Detect unnecessary renders
* 🔢 **useRenderCount** → Track render frequency

### New Hooks (v1.1.0)

* 🧭 **usePrevious** → Access previous value
* ⏱ **useDebounce** → Delay value updates
* 🧊 **useStableValue** → Prevent object re-creation
* 🧪 **useDeepCompareEffect** → Deep dependency effect

---

# 🧠 API + EXAMPLES

---

## ⚡ smartMemo

```tsx
const Optimized = smartMemo(Component, {
  deepCompare: true,
  debug: true,
  ignoreProps: ['style'],
});
```

👉 Prevent unnecessary re-renders with smart comparison

---

## 🔍 useWhyDidYouRender

```tsx
useWhyDidYouRender('ProfileCard', props);
```

👉 Logs which props changed

---

## 🔢 useRenderCount

```tsx
const count = useRenderCount();
<Text>Render: {count}</Text>
```

👉 Track how many times component renders

---

## 🧠 useSmartMemo

```tsx
const filteredList = useSmartMemo(list, [list]);
```

👉 Avoid expensive recalculations

---

## 🔁 useSmartCallback

```tsx
const handleClick = useSmartCallback(() => {
  console.log('clicked');
}, []);
```

👉 Prevent callback recreation

---

## 🎯 useSmartEffect

```tsx
useSmartEffect(() => {
  fetchData();
}, [filters]);
```

👉 Runs only when deps truly change

---

# 🆕 NEW HOOKS

---

## 🧭 usePrevious

```tsx
const prevValue = usePrevious(value);

console.log('Previous:', prevValue);
```

👉 Compare previous vs current value

---

## ⏱ useDebounce

```tsx
const debouncedSearch = useDebounce(search, 500);
```

👉 Useful for API calls / search input

---

## 🧊 useStableValue

```tsx
const stableUser = useStableValue(user);
```

👉 Prevent unnecessary re-renders from object changes

---

## 🧪 useDeepCompareEffect

```tsx
useDeepCompareEffect(() => {
  fetchData();
}, [filters]);
```

👉 Deep compare dependencies

---

# 🧪 Example Output

```bash
[PerfTools] Re-render: { count: { from: 1, to: 2 } }
[PerfTools] [WhyDidYouRender] ProfileCard { name: {...} }
```

---

# 🎯 Real Use Cases

* Optimize FlatList performance
* Debug re-render issues
* Prevent unnecessary API calls
* Improve app responsiveness
* Handle complex dependency objects

---

# ⚙️ Compatibility

* React Native ≥ 0.70
* React ≥ 17

---

# 📄 License

MIT

---

# 👨‍💻 Author

Yash Modi

---

# ⭐ Support

If you find this useful:

👉 ⭐ Star the repo
👉 🔁 Share with dev community

---

# 🚀 Roadmap

* [ ] FlatList advanced optimization
* [ ] Performance analytics
* [ ] DevTools integration
* [ ] Debug overlay UI

---
