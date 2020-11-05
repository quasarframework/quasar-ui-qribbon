# Component QRibbon

[![npm](https://img.shields.io/npm/v/@quasar/quasar-ui-qribbon.svg?label=quasar-ui-qribbon)](https://www.npmjs.com/package/@quasar/quasar-ui-qribbon)
[![npm](https://img.shields.io/npm/dt/@quasar/quasar-ui-qribbon.svg)](https://www.npmjs.com/package/@quasar/quasar-ui-qribbon)

# QRibbon
Add Ribbons to your Quasar Apps


# Usage

## Quasar CLI project

Install the [App Extension](../app-extension).

**OR**:

Create and register a boot file:

```js
import Vue from 'vue'
import { QRibbon } from '@quasar/quasar-ui-qribbon'
import '@quasar/quasar-ui-qribbon/dist/index.css'

Vue.use(Plugin)
```

**OR**:

```html
<style src="@quasar/quasar-ui-qribbon/dist/index.css"></style>

<script>
import { QRibbon } from '@quasar/quasar-ui-qribbon'

export default {
  components: {
    QRibbon
  }
}
</script>
```

## Vue CLI project

```js
import Vue from 'vue'
import { QRibbon } from '@quasar/quasar-ui-qribbon'
import '@quasar/quasar-ui-qribbon/dist/index.css'

Vue.use(Plugin)
```

**OR**:

```html
<style src="@quasar/quasar-ui-qribbon/dist/index.css"></style>

<script>
import { QRibbon } from '@quasar/quasar-ui-qribbon'

export default {
  components: {
    QRibbon
  }
}
</script>
```

## UMD variant

Exports `window.QRibbon`.

Add the following tag(s) after the Quasar ones:

```html
<head>
  <!-- AFTER the Quasar stylesheet tags: -->
  <link href="https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qribbon/dist/index.min.css" rel="stylesheet" type="text/css">
</head>
<body>
  <!-- at end of body, AFTER Quasar script(s): -->
  <script src="https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qribbon/dist/index.umd.min.js"></script>
</body>
```
If you need the RTL variant of the CSS, then go for the following (instead of the above stylesheet link):
```html
<link href="https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qribbon/dist/index.rtl.min.css" rel="stylesheet" type="text/css">
```

# Setup
```bash
$ yarn
```

# Developing
```bash
# start dev in SPA mode
$ yarn dev

# start dev in UMD mode
$ yarn dev:umd

# start dev in SSR mode
$ yarn dev:ssr

# start dev in Cordova iOS mode
$ yarn dev:ios

# start dev in Cordova Android mode
$ yarn dev:android

# start dev in Electron mode
$ yarn dev:electron
```

# Building package
```bash
$ yarn build
```

# Donate
If you appreciate the work that went into this, please consider donating to [Quasar](https://donate.quasar.dev) or [Allan](https://github.com/sponsors/webnoob).

# License
MIT (c) Allan Gaunt <allan@quasar.dev>
