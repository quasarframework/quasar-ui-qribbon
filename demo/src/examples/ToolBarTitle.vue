<template>
  <q-card class="q-my-lg q-pa-md">
    <q-card-section>
      <div class="box-ribbon-wrapper q-pt-xl">
        <q-toolbar class="q-pb-md">
          <q-ribbon
            position="left"
            color="rgba(0,0,0,.58)"
            background-color="#c0c0c0"
            leaf-color="#a0a0a0"
            leaf-position="bottom"
            decoration="rounded-out"
          >
            <q-toolbar-title
              class="example-title"
            >
              QToolbar / QRibbon - Left
            </q-toolbar-title>
          </q-ribbon>
        </q-toolbar>

        <q-toolbar class="q-pb-md">
          <q-ribbon
            position="right"
            color="purple"
            background-color="orange"
            leaf-color="purple"
            leaf-position="bottom"
            decoration="rounded-out"
          >
            <q-toolbar-title
              class="example-title"
            >
              QToolbar / QRibbon - Right
            </q-toolbar-title>
          </q-ribbon>
        </q-toolbar>

        <q-toolbar class="q-pb-md">
          <q-ribbon
            position="left"
            color="red"
            background-color="yellow"
            leaf-color="red"
            leaf-position="bottom"
            size="full"
            class="text-center"
          >
            <q-toolbar-title
              class="example-title"
            >
              QToolbar / QRibbon - Full
            </q-toolbar-title>
          </q-ribbon>
        </q-toolbar>
      </div>
    </q-card-section>
  </q-card>
</template>

<style lang="sass" scoped>
.box-ribbon-wrapper

</style>
