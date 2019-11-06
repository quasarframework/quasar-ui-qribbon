import Sides from '../examples/Sides'
import Colors from '../examples/Colors'
import Full from '../examples/Full'
import Corners from '../examples/Corners'
import ToolBarTitle from '../examples/ToolBarTitle'

export default ({ Vue }) => {
  Vue.component('Sides', Sides)
  Vue.component('Colors', Colors)
  Vue.component('Full', Full)
  Vue.component('Corners', Corners)
  Vue.component('ToolBarTitle', ToolBarTitle)
}
