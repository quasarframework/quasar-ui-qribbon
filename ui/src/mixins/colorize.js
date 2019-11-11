import { QColorizeMixin } from 'q-colorize-mixin'
import { colors } from 'quasar'
const { lighten } = colors

export default {
  name: 'QRibbonColorize',

  data () {
    return {
      __leafColor: 'black'
    }
  },

  mixins: [ QColorizeMixin ],

  props: {
    leafColor: {
      type: String
    }
  },

  computed: {
    bgLeafColor () {
      // TODO: Perhaps nesting ternary statements "can" get too much ... :D
      return this.leafColor // if leaf is defined then
        ? this.isCssColor(this.leafColor) // check to see if it's a CSS color
          ? this.leafColor // and just return it if so
          : this.makeQuasarColorVar(this.leafColor) // otherwise convert it to a quasar color
        : this.isCssColor(this.backgroundColor) && !this.isNamedCssColor(this.backgroundColor) // if leftColor not defined is bgColor a hex color
          ? lighten(this.backgroundColor, -25) // then we can lighten it
          : this.isCssColor(this.backgroundColor) // otherwise check and see if bgColor is a CSS color
            ? this.backgroundColor // and just return it
            : this.makeQuasarColorVar(this.backgroundColor, this.color) // otherwise return a quasar color.
    }
  }
}
