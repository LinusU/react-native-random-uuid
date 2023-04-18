# `crypto.randomUUID` for React Native

A small implementation of `crypto.randomUUID` for React Native.

## Installation

```sh
npm install react-native-random-uuid
npx pod-install
```

> 💡 If you use the Expo managed workflow you will see "CocoaPods is not supported in this project" - this is fine, it's not necessary.
This library works as a polyfill for the global `crypto.randomUUID`.

```javascript
// Add this line to your `index.js`
import 'react-native-random-uuid'
```

Now you can use `crypto.randomUUID` anywhere.

```javascript
console.log(crypto.randomUUID())
```

## API

### `crypto.randomUUID()`

The `randomUUID()` method of the `Crypto` interface is used to generate a v4 [UUID](https://developer.mozilla.org/en-US/docs/Glossary/UUID) using a cryptographically secure random number generator.

Returns a string containing a randomly generated, 36 character long v4 UUID.
