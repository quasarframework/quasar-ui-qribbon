import { version } from '../package.json'
import QRibbon from './components/QRibbon'

export {
  version,
  QRibbon
}

export default {
  version,
  QRibbon,

  install (Vue) {
    Vue.component(QRibbon.name, QRibbon)
  }
}
