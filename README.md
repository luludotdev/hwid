# 💻 HWID
![Node.js CI](https://github.com/lolPants/hwid/workflows/Node.js%20CI/badge.svg?branch=master)
[![NPM version](https://img.shields.io/npm/v/hwid.svg?maxAge=3600)](https://www.npmjs.com/package/hwid)
[![NPM downloads](https://img.shields.io/npm/dt/hwid.svg?maxAge=3600)](https://www.npmjs.com/package/hwid)
[![Dependencies](https://img.shields.io/david/lolpants/hwid.svg?maxAge=3600)](https://david-dm.org/lolpants/hwid)
> Grab the system's unique hardware ID!

## 💾 Installation
This package is published to the NPM registry as [`hwid`](https://www.npmjs.com/package/hwid). Install it with your NPM client of choice.

## 🔧 Usage
First, import the module:
```js
// CommonJS
const { getHWID } = require('hwid')

// ES Modules
import { getHWID } from 'hwid'
```

From there, simply call the function. It returns a promise with the hardware ID as a string. As it returns a promise, you can also use it in an async/await context.
```js
// Promises
getHWID().then(id => {
  // use ID however you want
})

// async/await
async function main() {
  const id = await getHWID()
  // use ID however you want
}
```

### 🎉 Options
You can pass options to the function as an optional object.

| Key | Type | Description | Default |
| - | - | - | - |
| `hash` | `boolean` | Whether or not to hash the HWID before returning | `false` |
| `algorithm` | `string` | Hashing algorithm to use if `hash` is `true` | `sha256` |
| `upper` | `boolean` | Convert HWID to UPPERCASE before returning | `false` |
