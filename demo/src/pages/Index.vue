<template>
  <q-page class="row justify-center">
    <q-card class="q-my-lg q-pt-md flat bordered" style="width: 75%">
      <q-card-section>
        <q-markdown :src="template" />
        <component-api
          title="QRibbon API"
          :json="json"
        />
        <q-markdown>
# Donate
If you appreciate the work that went into this App Extension, please consider [donating to Quasar](https://donate.quasar.dev).

---
This page created with [QMarkdown](https://quasarframework.github.io/app-extension-qmarkdown), another great Quasar App Extension.
    </q-markdown>
    <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
      <q-btn fab icon="keyboard_arrow_up" color="primary" />
    </q-page-scroller>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style>
</style>

<script>
import template from '../markdown/qribbon.md'
import { Api } from 'ui'

export default {
  name: 'PageIndex',

  data () {
    return {
      template: template,
      json: Api
    }
  }
}
</script>
