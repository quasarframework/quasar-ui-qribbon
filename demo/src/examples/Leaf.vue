<template>
  <q-card class="q-my-lg q-pa-md">
    <q-markdown>
Auto shade the leaf by passing CSS color (e.g. #FF0000)
    </q-markdown>
    <q-card-section>
      <div class="box-ribbon-wrapper q-pt-xl">
        <q-ribbon class="q-pb-md" color="white" background-color="#FF0000">Shaded Leaf</q-ribbon>
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
