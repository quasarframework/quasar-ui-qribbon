<template>
  <q-page class="row justify-center">
    <q-card class="q-my-lg q-pt-md flat bordered" style="width: 75%">
      <q-card-section>
        <q-markdown :src="template" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style>
</style>

<script>
import template from '../markdown/qribbon.md'
export default {
  name: 'PageIndex',

  data () {
    return {
      template: template
    }
  }
}
</script>
