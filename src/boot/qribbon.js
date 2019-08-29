import QRibbon from '@quasar/quasar-app-extension-qribbon/src/component/QRibbon'
import { Colorize } from 'quasar-mixin-colorize'

export default ({ Vue }) => {
  Vue.component('q-ribbon', QRibbon)
  Vue.component(Colorize)
}
