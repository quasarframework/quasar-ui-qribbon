<template>
  <q-card class="q-my-lg q-pa-md">
    <q-card-section>
      <div class="box-ribbon-wrapper q-pt-xl">
          <q-toolbar class="q-pb-md qribbon">
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
                QToolbar / QRibbon with QToolBarTitle
              </q-toolbar-title>
            </q-ribbon>
          </q-toolbar>
      </div>
    </q-card-section>
  </q-card>
</template>

<style lang="sass" scoped>
.box-ribbon-wrapper
  background-color: $grey-3
  margin: 0 auto
  position: relative

.q-toolbar.qribbon
  padding-left: 0

</style>
