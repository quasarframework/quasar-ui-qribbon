import Vue from 'vue'

// Styles
import './ribbon-default.styl'
import './ribbon-corner.styl'

// Utils
import slot from 'quasar/src/utils/slot.js'

// Mixins
import Colorize from './mixins/colorize'

export default Vue.extend({
  name: 'QRibbon',

  mixins: [ Colorize ],

  props: {
    position: {
      type: String,
      default: 'left',
      validator: (val) => [
        'top-left',
        'top-right',
        'bottom-left',
        'bottom-right',
        'left',
        'right'
      ].includes(val)
    },
    type: {
      type: String,
      default: 'horizontal',
      validator: (val) => [
        'horizontal',
        'vertical',
        'corner'
      ].includes(val)
    },
    leafPosition: {
      type: String,
      default: 'bottom',
      validator: (val) => [
        'top',
        'bottom',
        'left',
        'right'
      ].includes(val)
    },
    size: {
      type: String,
      validator: (val) => [
        'full'
      ].includes(val)
    },
    decoration: {
      type: String,
      validator: (val) => [
        'round-in',
        'round-out',
        'triangle-in',
        'triangle-out'
      ].includes(val)
    }
  },

  computed: {
    ribbonClass () {
      let className = `qribbon__${this.type}--${this.position}`
      if (this.size !== void 0) className += `-${this.size}`
      if (this.leafPosition !== void 0) className += ` leaf-${this.leafPosition}`
      if (this.decoration !== void 0) className += ` decorate-${this.decoration}`
      return className
    },
    styles () {
      let style = {}
      style['--qribbon-text-color'] = this.color
      style['--qribbon-background-color'] = this.backgroundColor
      style['--qribbon-leaf-color'] = this.leafColor || this.__leafColor
      return style
    }
  },

  methods: {
    __renderBaseRibbon (h, children) {
      const lastParam = children || slot(this, 'default')
      return h('div', {
        staticClass: this.ribbonClass,
        style: this.styles
      }, lastParam)
    },

    __renderDefaultRibbon (h) {
      return this.__renderBaseRibbon(h, [ h('div', slot(this, 'default')) ])
    },

    __renderCornerRibbon (h) {
      return this.__renderBaseRibbon(h, [ h('div', slot(this, 'default')) ])
    },

    __renderRibbon (h) {
      switch (this.type) {
        case 'corner':
          return this.__renderCornerRibbon(h)
        default:
          return this.__renderDefaultRibbon(h)
      }
    }
  },

  render (h) {
    return h('div', {
      staticClass: 'qribbon__container'
    }, [
      this.__renderRibbon(h)
    ])
  }

})
