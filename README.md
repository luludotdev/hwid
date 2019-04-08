# 💻 HWID

[![NPM version](https://img.shields.io/npm/v/hwid.svg?maxAge=3600)](https://www.npmjs.com/package/hwid)
[![NPM downloads](https://img.shields.io/npm/dt/hwid.svg?maxAge=3600)](https://www.npmjs.com/package/hwid)
[![Build status](https://travis-ci.org/lolPants/hwid.svg)](https://travis-ci.org/lolPants/hwid)
[![Dependencies](https://img.shields.io/david/lolpants/hwid.svg?maxAge=3600)](https://david-dm.org/lolpants/hwid)
[![Coverage Status](https://coveralls.io/repos/github/lolPants/hwid/badge.svg?branch=master)](https://coveralls.io/github/lolPants/hwid?branch=master)

_Grab the system's unique hardware ID!_  
Written in TypeScript, compiled down to ES5 for use in any Node.js version!

## 💾 Installation
The package is on the NPM registry as `hwid`. Simply install it with your NPM client of choice.

## 🔧 Usage
First, import the module:
```js
// CommonJS
const { getHWID } = require('hwid')

// ES Modules
import { getHWID } from 'hwid'
```

From there, simply call the function. It returns a promise with the hardware ID as a string.
```js
getHWID().then(id => {
  // use ID however you want
})
```

### 🎉 Options
You can pass options to the function as an optional object.

| Key | Type | Description |
| - | - | - |
| `hash` | `boolean` | Hashes the output before returning |
| `algorithm` | `string` | Hash algorithm to use |
| `upper` | `boolean` | Return the HWID in uppercase
