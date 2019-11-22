<template>
  <q-card class="q-my-lg q-pa-md">
    <q-card-section>
      <div class="box-ribbon-wrapper">
        <div class="flex justify-between q-pt-xl">
          <q-ribbon class="q-pb-md" decoration="point-in" background-color="secondary" inline>Quasar Color (secondary)</q-ribbon>
          <q-ribbon class="q-pb-md" position="right" background-color="red-5" leaf-color="purple-3" inline>Quasar Color (red-5)</q-ribbon>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<style lang="sass" scoped>
.box-ribbon-wrapper
  background-color: $grey-3
  margin: 0 auto
  position: relative
</style>
