import Vue from 'vue'

// Styles
import './ribbon.styl'

// Utils
import slot from 'quasar/src/utils/slot.js'

// Mixins
import Colorize from './mixins/colorize'

export default Vue.extend({
  name: 'QRibbon',
  
  mixins: [ Colorize ],
  
  props: {
    right: Boolean,
    full: Boolean,
    inverted: Boolean
  },
  
  computed: {
    positionClass () {
      return this.right ? 'right' : this.full ? 'full' : 'left'
    }
  },
  
  methods: {
  
  },
  
  render (h) {
    return h('section', {
      class: 'relative'
    }, [
      h('div', this.setBothColors(this.color, this.backgroundColor, {
        staticClass: 'qribbon',
        class: {
          'right': this.right,
          'full': this.full,
          'left': !this.right && !this.full,
          'inverted': this.inverted
        }
      }), slot(this, 'default'))
    ])
  }
  
})
