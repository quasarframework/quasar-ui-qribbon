import Vue from 'vue'
import { Colorize, isCssColor, makeQuasarColorVar, isNamedCssColor } from 'quasar-mixin-colorize'
import { colors } from 'quasar'
const { lighten } = colors

export default Vue.extend({
  name: 'qribbon-colorize',
  
  data () {
    return {
      __leafColor: 'black'
    }
  },
  
  mixins: [ Colorize ],
  
  props: {
    leafColor: {
      type: String
    }
  },
  
  computed: {
    bgLeafColor () {
      // TODO: Perhaps nesting ternary statements "can" get too much ... :D
      return this.leafColor // if leaf is defined then
        ? isCssColor(this.leafColor) // check to see if it's a CSS color
          ? this.leafColor // and just return it if so
          : makeQuasarColorVar(this.leafColor) // otherwise convert it to a quasar color
        : isCssColor(this.backgroundColor) && !isNamedCssColor(this.backgroundColor) // if leftColor not defined is bgColor a hex color
          ? lighten(this.backgroundColor, -25) // then we can lighten it
          : isCssColor(this.backgroundColor) //otherwise check and see if bgColor is a CSS color
            ? this.backgroundColor // and just return it
            : makeQuasarColorVar(this.backgroundColor, this.color) // otherwise return a quasar color.
    }
  }
})
