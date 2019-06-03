QRibbon
===

> Please note, this is currently a work-in-progress (WIP).

QRibbon is a [Quasar App Extension](https://quasar.dev/app-extensions/introduction). It allows you to display ribbons on your page.

# Install
To add this App Extension to your Quasar application, run the following (in your Quasar app folder):
```
quasar ext add qribbon
```

# Uninstall
To remove this App Extension from your Quasar application, run the following (in your Quasar app folder):
```
quasar ext remove qribbon
```

# Describe
You can use `quasar describe QRibbon` (to be implemented before QRibbon v1 release)

# Source
Can be found [here](https://github.com/webnoob/app-extension-qribbon/).

# Docs
Can be found [here](https://webnoob.github.io/app-extension-qribbon/demo/dist/spa/#/).

# Examples
Can be found [here](https://webnoob.github.io/app-extension-qribbon/demo/dist/spa/#/examples).

# Interactive Demo / QRibbon Builder
Can be found [here](https://webnoob.github.io/app-extension-qribbon/demo/dist/spa/#/builder).

# Demo (source) Project
Can be found [here](https://github.com/webnoob/app-extension-qribbon/tree/master/demo).

# QRibbon API

## Vue Properties

| Vue Property | Type | Default | Description |
| --- | --- | --- | --- |
| type | String | `horizontal` | Acceptable options are `horizontal`, `corner`, `vertical` |
| position | String | `left` or `top-left` | Acceptable strings are: <br/> Type==`horizontal`: `left`, `right`, `full`<br/> Type==`corner`or`vertical`: `top left`, `top right`, `bottom left`, `bottom right` |
| color | String | `white` | CSS Color for the text |
| background-color | String | `#027BE3` | CSS Color for the background |
| leaf-color | String | Auto shaded based on `background-color` | CSS Color for the leaf |
| leaf-position | String | `bottom` or `left` | Acceptable strings are: <br/> Type==`horizontal`: `top`, `bottom`<br/> Type==`vertical`: `left`, `right` |
| size | String | `null` | Acceptable option is `full` to fill the container. |
| decoration | String | `null` | Cannot be used with `corner` type ribbon. Acceptable options are `rounded-in`, `rounded-out`, `point-in`, `point-out`. |
| inline | Boolean | `false` | Used when 2 QRibbons are required to be inline (on left and right along the same X axis). Bith QRibbon's must be wrapped in a `<div class="flex justify-between"></div>`. |

## Vue Slots
| Slot Name | Description |
| --- | --- |
| default | Any content can be entered into the default slot and it will show in the ribbon. |

---
This page created with [QMarkdown](https://quasarframework.github.io/app-extension-qmarkdown), another great Quasar App Extension.
