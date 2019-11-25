<template>
  <hero>
    <div class="q-markdown">
      <example-title title="Examples" />
      <example-card title="Sides" name="Sides" :tag-parts="getTagParts(require('!!raw-loader!../examples/Sides.vue').default)" />
      <example-card title="Vertical" name="Vertical" :tag-parts="getTagParts(require('!!raw-loader!../examples/Vertical.vue').default)" />
      <example-card title="Colors" name="Colors" :tag-parts="getTagParts(require('!!raw-loader!../examples/Colors.vue').default)" />
      <example-card title="Full Width" name="Full" :tag-parts="getTagParts(require('!!raw-loader!../examples/Full.vue').default)" />
      <example-card title="Corners" name="Corners" :tag-parts="getTagParts(require('!!raw-loader!../examples/Corners.vue').default)" />
      <example-card title="Inline" name="Inline" :tag-parts="getTagParts(require('!!raw-loader!../examples/Inline.vue').default)" />
      <example-card title="QToolBarTitle" name="ToolBarTitle" :tag-parts="getTagParts(require('!!raw-loader!../examples/ToolBarTitle.vue').default)" />
      <example-card title="QMenu" name="Menu" :tag-parts="getTagParts(require('!!raw-loader!../examples/Menu.vue').default)" />
      <!-- <example-card title="Marquee" name="Marquee" :tag-parts="getTagParts(require('!!raw-loader!../examples/Marquee.vue').default)" /> -->
      <example-card title="Glow" name="Glow" :tag-parts="getTagParts(require('!!raw-loader!../examples/Glow.vue').default)" />
      <example-card title="Avatar" name="Avatar" :tag-parts="getTagParts(require('!!raw-loader!../examples/Avatar.vue').default)" />
      <example-card title="Leaf Color" name="Leaf" :tag-parts="getTagParts(require('!!raw-loader!../examples/Leaf.vue').default)" />
      <example-card title="Icons" name="Icon" :tag-parts="getTagParts(require('!!raw-loader!../examples/Icon.vue').default)" />
    </div>
  </hero>
</template>

<style>
</style>

<script>
import Hero from '../components/Hero'
import ExampleTitle from '../components/ExampleTitle'
import ExampleCard from '../components/ExampleCard'
import { slugify } from 'assets/page-utils'
import { getTagParts } from '@quasar/quasar-ui-qmarkdown'

export default {
  name: 'PageIndex',

  components: {
    Hero,
    ExampleTitle,
    ExampleCard
  },

  data () {
    return {
      exampleTypes: ['all']
    }
  },

  mounted () {
    this.toc = []
    this.tempToc = []
    this.addToToc('Examples')
    this.addToToc('Sides', 2)
    this.addToToc('Vertical', 2)
    this.addToToc('Colors', 2)
    this.addToToc('Full Width', 2)
    this.addToToc('Corners', 2)
    this.addToToc('Inline', 2)
    this.addToToc('QToolBarTitle', 2)
    this.addToToc('QMenu', 2)
    this.addToToc('Glow', 2)
    this.addToToc('Avatar', 2)
    this.addToToc('Leaf Color', 2)
    this.addToToc('Icons', 2)

    this.toc = this.tempToc
  },

  computed: {
    toc:
    {
      get () {
        return this.$store.state.common.toc
      },
      set (toc) {
        this.$store.commit('common/toc', toc)
      }
    }
  },

  methods: {
    getTagParts,

    addToToc (name, level = 1) {
      const slug = slugify(name)
      this.tempToc.push({
        children: [],
        id: slug,
        label: name,
        level: level
      })
    },

    exampleTypeHas (type) {
      return this.exampleTypes.includes(type) || this.exampleTypes.includes('all')
    }
  }
}
</script>
