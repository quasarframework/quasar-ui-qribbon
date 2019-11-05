import { version } from '../package.json'
import Component from './component/Component'
import Api from './component/QRibbon.json'

export {
  version,
  Component,
  Api
}

export default {
  version,
  Component,
  Api,

  install (Vue) {
    Vue.component(Component.name, Component)
  }
}
