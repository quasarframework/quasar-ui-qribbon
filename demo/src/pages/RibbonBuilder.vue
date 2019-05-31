<template>
  <q-page class="row justify-center items-baseline qribbon-builder">
    <q-card class="q-my-lg q-py-md flat bordered" style="width: 75%">
      <div class="ribbon-wrapper">
        <q-ribbon class="border-radius" type="default" position="left" color="#616161" background-color="#e0e0e0">QRibbon Builder</q-ribbon>
      </div>

      <q-separator class="q-mb-lg" />

      <q-ribbon
        :position="getPosition"
        :type="type"
        :color="color"
        :background-color="backgroundColor"
        :leaf-color="leafColor"
      >
        {{content}}
      </q-ribbon>

      <q-card-section>
        <div class="row justify-around q-mt-lg">
          <div class="text-center">
            Text Color
            <q-color v-model="color" no-header no-footer />
          </div>
          <div class="text-center">
            Background Color
            <q-color v-model="backgroundColor" no-header no-footer />
          </div>
          <div class="text-center">
            Leaf Color
            <q-color v-model="leafColor" no-header no-footer />
          </div>
        </div>
        <div class="row justify-around">
          <q-select
            label="Type"
            class="col-5"
            v-model="type"
            map-options
            emit-value
            :options="[
              { value: 'default', label: 'Default' },
              { value: 'corner', label: 'Corner' }
            ]"
          />

          <q-select
            label="Position"
            class="col-5"
            v-model="position"
            map-options
            emit-value
            :options="positionOptions"
          />
        </div>
      </q-card-section>
      <q-card-section>
        <q-input class="col-12" :value="componentOutput" ref="componentInput" type="textarea">
          <template #prepend>
            <q-icon name="file_copy" @click="copyComponentText" />
          </template>

          <template #append>
            <q-icon name="refresh" @click="reset" />
          </template>
        </q-input>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style>
</style>

<script>
function initialState () {
  return {
    positionVal: 'left',
    type: 'default',
    color: '#ffffff',
    backgroundColor: '#027BE3',
    leafColor: '',
    content: 'My Ribbon'
  }
}

export default {
  name: 'InteractiveDemo',

  computed: {
    positionOptions () {
      switch (this.type) {
        case 'corner':
          return [
            { value: 'top left', label: 'Top Left' },
            { value: 'top right', label: 'Top Right' },
            { value: 'bottom left', label: 'Bottom Left' },
            { value: 'bottom right', label: 'Bottom Right' }
          ]
        default:
          return [
            { value: 'left', label: 'Left' },
            { value: 'right', label: 'Right' },
            { value: 'full', label: 'Full' }
          ]
      }
    },
    position: {
      get () {
        return this.getPosition
      },
      set (val) {
        this.positionVal = val
      }
    },
    getPosition () {
      const positionOptions = this.positionOptions
      const foundPosition = positionOptions.find(f => {
        console.log(f.value)
        return f.value === this.positionVal
      })

      return foundPosition ? foundPosition.value : positionOptions[0].value
    },
    componentOutput () {
      const leaf = this.leafColor ? ` leaf-color="${this.leafColor}"` : ''
      const type = this.type === 'default' ? '' : ` type="${this.type}"`
      return `<q-ribbon${type} position="${this.getPosition}" color="${this.color}" background-color="${this.backgroundColor}"${leaf}></q-ribbon>`
    }
  },

  methods: {
    copyComponentText () {
      console.log('Click')
      console.log(this.$refs.componentInput)
      this.$refs.componentInput.select()
      document.execCommand('copy')

      this.$q.notify({
        message: 'Component has been copied to clipboard.',
        color: 'primary',
        position: 'top',
        actions: [ { icon: 'close', color: 'white' } ],
        timeout: 2000
      })
    },

    reset () {
      Object.assign(this.$data, initialState())
    }
  },

  data () {
    return initialState()
  }
}
</script>
