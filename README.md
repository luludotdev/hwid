# hwid

[![Node.js CI](https://github.com/luludotdev/hwid/actions/workflows/ci.yml/badge.svg)](https://github.com/luludotdev/hwid/actions/workflows/ci.yml)
[![NPM version](https://img.shields.io/npm/v/hwid.svg?maxAge=3600)](https://www.npmjs.com/package/hwid)
[![NPM downloads](https://img.shields.io/npm/dt/hwid.svg?maxAge=3600)](https://www.npmjs.com/package/hwid)

> Get the current system's unique hardware ID

## Install

```sh
pnpm i hwid
```

## Usage

```ts
import { hwid } from "hwid";

// detects platform automatically
const id: string = await hwid();
```

### Platform-specific

Supported platforms: `windows`, `macos`, and `linux`

```ts
// will only work on macos
import { hwid } from "hwid/macos";

const id: string = await hwid();
```

## CLI

```sh
pnpm dlx hwid@latest
```
