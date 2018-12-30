## IM based on websocket

[![NPM version](https://img.shields.io/npm/v/@fxjs/websocket.im.svg)](https://www.npmjs.org/package/@fxjs/websocket.im)
[![Build Status](https://travis-ci.org/fxjs-modules/websocket.im.svg)](https://travis-ci.org/fxjs-modules/websocket.im)
[![Build status](https://ci.appveyor.com/api/projects/status/plarvl262d7279c3?svg=true)](https://ci.appveyor.com/project/richardo2016/websocket.im)


## Install

```sh
npm install @fxjs/websocket.im
```

## Server Select

- MySQL
- SQLite
- MongoDB

## Example

```js
var WebsocketIM   = require("@fxjs/websocket.im");
});

```
## Test

To test, first make sure you have development dependencies installed. Go to the root folder and do:

```sh
npm install
```

Then, just run the tests.

```sh
npm test
```

If you have a supported database server and want to test against it, first install the module:

And then run:

```sh
URI=mysql://username:password@localhost/database fibjs test/run-db
```