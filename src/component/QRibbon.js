import Vue from 'vue'

// Styles
import './styl/common/glow.styl'
import './styl/horizontal/main.styl'
import './styl/vertical/main.styl'
import './styl/corner/main.styl'

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
        'rounded-in',
        'rounded-out',
        'point-in',
        'point-out'
      ].includes(val)
    },

    glow: Boolean,
    glowSpeed: {
      type: Number,
      default: 1.5
    },
    glowIterationCount: {
      type: String,
      default: 'infinite'
    },

    inline: Boolean
  },

  computed: {
    ribbonClass () {
      let className = `qribbon__${this.type}--${this.position}`
      if (this.size !== void 0) className += `-${this.size}`
      if (this.leafPosition !== void 0) className += ` leaf-${this.leafPosition}`
      if (this.decoration !== void 0) className += ` decorate-${this.decoration}`
      return className
    },
    ribbonContainerClass () {
      return `qribbon__container ${this.position} ${this.inline ? 'inline' : ''}`
    },
    styles () {
      let style = {}
      style['--qribbon-text-color'] = this.color
      style['--qribbon-background-color'] = this.backgroundColor
      style['--qribbon-leaf-color'] = this.leafColor || this.__leafColor
      style['--qribbon-glow-speed'] = `${this.glowSpeed}s`
      style['--qribbon-glow-iteration-count'] = this.glowIterationCount
      return style
    }
  },

  methods: {
    __renderDefaultRibbon (h) {
      return h('div', {
        staticClass: this.ribbonClass,
        style: this.styles
      }, [
        this.glow ? h('div', {
          staticClass: 'glow'
        }) : null,
        slot(this, 'default')
      ])
    },

    __renderCornerRibbon (h) {
      return h('div', {
        staticClass: this.ribbonClass,
        style: this.styles
      }, [
          h('div', [
          this.glow ? h('div', {
            staticClass: 'glow'
          }) : null,
          slot(this, 'default')
        ])
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
      staticClass: this.ribbonContainerClass
    }, [
      this.__renderRibbon(h)
    ])
  }

})
