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
        'top left',
        'top right',
        'bottom left',
        'bottom right',
        'left',
        'right',
        'full'
      ].includes(val)
    },
    type: {
      type: String,
      default: 'default',
      validator: (val) => [
        'default',
        'corner'
      ].includes(val)
    }
  },

  computed: {
    typeClass () {
      return `qribbon-${this.type}`
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
    __renderDefaultRibbon (h) {
      return h('div', {
        staticClass: this.typeClass,
        class: {
          [this.position]: true
        },
        style: this.styles
      }, slot(this, 'default'))
    },

    __renderCornerRibbon (h) {
      return h('div', {
        staticClass: this.typeClass,
        class: {
          [this.position]: true
        },
        style: this.styles
      }, [
        h('div', slot(this, 'default'))
      ])
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
      class: this.type === 'corner' ? '' : 'relative-position'
    }, [
      this.__renderRibbon(h)
    ])
  }

})
