import Vue from 'vue'

// Styles
import './ribbon.styl'

// Utils
import slot from 'quasar/src/utils/slot.js'

export default Vue.extend({
  name: 'QRibbon',
  
  props: {
    right: Boolean,
    full: Boolean
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
      h('div', {
        staticClass: 'qribbon',
        class: this.positionClass
      }, slot(this, 'default'))
    ])
  }
  
})
