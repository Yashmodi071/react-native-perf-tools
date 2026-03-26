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

## 🔥 Features

* ⚡ **smartMemo** → Advanced `React.memo` with debug logs
* 🔍 **useWhyDidYouRender** → Track why component re-rendered
* 🔢 **useRenderCount** → Monitor render count
* 🧠 **useSmartMemo** → Deep dependency comparison
* 🔁 **useSmartCallback** → Stable callbacks
* 🎯 **useSmartEffect** → Prevent unnecessary effects

---

## 🧠 API

### smartMemo

```ts
smartMemo(Component, {
  deepCompare?: boolean,
  debug?: boolean,
  ignoreProps?: string[]
})
```

---

### useWhyDidYouRender

```ts
useWhyDidYouRender(name, props)
```

---

### useRenderCount

```ts
const count = useRenderCount()
```

---

### useSmartMemo

```ts
const value = useSmartMemo(data, [deps])
```

---

### useSmartCallback

```ts
const callback = useSmartCallback(fn, [deps])
```

---

### useSmartEffect

```ts
useSmartEffect(effect, [deps])
```

---

## 🧪 Example Output

```bash
[PerfTools] Re-render: { count: { from: 1, to: 2 } }
[PerfTools] [WhyDidYouRender] DemoComponent { count: {...} }
```

---

## 🎯 Use Cases

* Optimize FlatList performance
* Debug unnecessary re-renders
* Improve app responsiveness
* Track component lifecycle behavior

---

## 📸 Demo (Recommended)

👉 Add screenshots or GIF here

Example:

* Render count tracking
* Console debug logs
* FlatList optimization

---

## ⚙️ Compatibility

* React Native ≥ 0.70
* React ≥ 17

---

## 📄 License

MIT

---

## 👨‍💻 Author

Yash Modi

---

## ⭐ Support

If you like this project:

👉 Give it a star on GitHub
👉 Share with other developers

---

## 🚀 Roadmap

* [ ] FlatList advanced optimization
* [ ] Performance analytics
* [ ] DevTools integration
* [ ] Debug overlay UI

---
