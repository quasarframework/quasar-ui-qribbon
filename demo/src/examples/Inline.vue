<template>
  <q-card class="q-my-lg q-pa-md">
    <q-card-section>
      <div class="box-ribbon-wrapper q-pt-xl">
        <div class="flex justify-between">
          <q-ribbon class="q-pb-md" inline>Inline Left Ribbon</q-ribbon>
          <q-ribbon class="q-pb-md" position="right" leaf-position="top" decoration="rounded-in" inline glow>Inline Right Ribbon</q-ribbon>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<style lang="sass" scoped>
.box-ribbon-wrapper
  margin: 0 auto
  position: relative
</style>
