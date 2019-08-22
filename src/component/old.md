# QRibbon API

## Vue Properties

| Vue Property | Type | Default | Description |
| --- | --- | --- | --- |
| type | String | `horizontal` | Acceptable options are `horizontal`, `corner`, `vertical` |
| position | String | `left` or `top-left` | Acceptable strings are: <br/> Type==`horizontal`: `left`, `right`, `full`<br/> Type==`corner`or`vertical`: `top left`, `top right`, `bottom left`, `bottom right` |
| color | String | `white` | Set the text color using any CSS color, Quasar Color or CSS var pointing to a color  |
| background-color | String | `#027BE3` | Set the background color using any CSS color, Quasar Color or CSS var pointing to a color |
| leaf-color | String | Auto shaded based on `background-color` | CSS Color for the leaf |
| leaf-position | String | `bottom` or `left` | Acceptable strings are: <br/> Type==`horizontal`: `top`, `bottom`<br/> Type==`vertical`: `left`, `right` |
| size | String | `null` | Acceptable option is `full` to fill the container. |
| decoration | String | `null` | Cannot be used with `corner` type ribbon. Acceptable options are `rounded-in`, `rounded-out`, `point-in`, `point-out`. |
| inline | Boolean | `false` | Used when 2 QRibbons are required to be inline (on left and right along the same X axis). Bith QRibbon's must be wrapped in a `<div class="flex justify-between"></div>`. |
| glow | Boolean | `false` | Add a moving glow to the ribbon. |
| glow-speed | Number | `1.5` | The duration it takes for the animation to complete. |
| glow-iteration-count | String | `infinite` | A number or string representing how many times the animation will run. |

## Vue Slots
| Slot Name | Description |
| --- | --- |
| default | Any content can be entered into the default slot and it will show in the ribbon. |
