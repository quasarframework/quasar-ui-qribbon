import Vue from 'vue'
import { colors } from 'quasar'
const { lighten } = colors

const CSS_COLOR_NAMES = ['aliceblue','antiquewhite','aqua','aquamarine','azure','beige','bisque','black','blanchedalmond','blue','blueviolet','brown','burlywood','cadetblue','chartreuse','chocolate','coral','cornflowerblue','cornsilk','crimson','cyan','darkblue','darkcyan','darkgoldenrod','darkgray','darkgrey','darkgreen','darkkhaki','darkmagenta','darkolivegreen','darkorange','darkorchid','darkred','darksalmon','darkseagreen','darkslateblue','darkslategray','darkslategrey','darkturquoise','darkviolet','deeppink','deepskyblue','dimgray','dimgrey','dodgerblue','firebrick','floralwhite','forestgreen','fuchsia','gainsboro','ghostwhite','gold','goldenrod','gray','grey','green','greenyellow','honeydew','hotpink','indianred','indigo','ivory','khaki','lavender','lavenderblush','lawngreen','lemonchiffon','lightblue','lightcoral','lightcyan','lightgoldenrodyellow','lightgray','lightgrey','lightgreen','lightpink','lightsalmon','lightseagreen','lightskyblue','lightslategray','lightslategrey','lightsteelblue','lightyellow','lime','limegreen','linen','magenta','maroon','mediumaquamarine','mediumblue','mediumorchid','mediumpurple','mediumseagreen','mediumslateblue','mediumspringgreen','mediumturquoise','mediumvioletred','midnightblue','mintcream','mistyrose','moccasin','navajowhite','navy','oldlace','olive','olivedrab','orange','orangered','orchid','palegoldenrod','palegreen','paleturquoise','palevioletred','papayawhip','peachpuff','peru','pink','plum','powderblue','purple','red','rosybrown','royalblue','saddlebrown','salmon','sandybrown','seagreen','seashell','sienna','silver','skyblue','slateblue','slategray','slategrey','snow','springgreen','steelblue','tan','teal','thistle','tomato','turquoise','violet','wheat','white','whitesmoke','yellow','yellowgreen']

function isNamedCssColor (color) {
  return !!color && CSS_COLOR_NAMES.includes(color.toLowerCase())
}

function isCssColor (color) {
  return !!color && (!!color.match(/^(#|(rgb|hsl)a?\()/) || isNamedCssColor(color))
}

export default Vue.extend({
  name: 'colorize',
  
  data () {
    return {
      __leafColor: 'black'
    }
  },
  
  props: {
    color: {
      type: String,
      default: 'white'
    },
    backgroundColor: {
      type: String,
      default: '#027BE3'
    },
    leafColor: {
      type: String
    }
  },
  
  computed: {
    bgColor () {
      return this.getColor(this.backgroundColor, '#027BE3')
    },
    textColor () {
      return this.getColor(this.color, 'white')
    },
    bgLeafColor () {
      // TODO: Perhaps nesting ternary statements "can" get too much ... :D
      return this.leafColor // if leaf is defined then
        ? isCssColor(this.leafColor) // check to see if it's a CSS color
          ? this.leafColor // and just return it if so
          : this.makeQuasarColorVar(this.leafColor) // otherwise convert it to a quasar color
        : isCssColor(this.backgroundColor) && !isNamedCssColor(this.backgroundColor) // if leftColor not defined is bgColor a hex color
          ? lighten(this.backgroundColor, -25) // then we can lighten it
          : isCssColor(this.backgroundColor) //otherwise check and see if bgColor is a CSS color
            ? this.backgroundColor // and just return it
            : this.makeQuasarColorVar(this.backgroundColor, this.color) // otherwise return a quasar color.
    }
  },
  
  methods: {
    getColor (color, defaultColor) {
      return isCssColor(color)
        ? color
        : this.makeQuasarColorVar(color, defaultColor)
    },
    makeQuasarColorVar (color, defaultColor) {
      return `var(--q-color-${color}, '${defaultColor}')`
    }
  }
  
})
