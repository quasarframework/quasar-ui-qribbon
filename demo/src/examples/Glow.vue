<template>
  <q-card class="q-my-lg q-pa-md">
    <q-card-section>
      <div class="box-ribbon-wrapper">
        <div class="ribbon-wrapper move-1">
          <q-ribbon type="vertical" position="bottom-left" leaf-position="left" glow>Bottom Up Ribbon</q-ribbon>
        </div>
        <div class="ribbon-wrapper move-1">
          <q-ribbon type="vertical" position="top-left" leaf-position="right" glow>Top Down Ribbon</q-ribbon>
        </div>
        <q-ribbon class="q-pb-md border-radius" glow>With border radius - GLOWING!</q-ribbon>
        <q-ribbon class="q-pb-md border-radius" glow :glow-speed="4" glow-iteration-count="5">Glow 5 times for 4 seconds each</q-ribbon>
        <div class="flex justify-end">
          <q-ribbon class="q-pb-md" position="right" leaf-position="top" decoration="rounded-in" inline glow>Inline Right Ribbon</q-ribbon>
        </div>
        <q-ribbon class="q-pb-md text-right q-mt-md" leaf-position="top" size="full" leaf-color="green" color="green" background-color="yellow" glow>Full Inverted Hippy Ribbon (.text-right)</q-ribbon>
        <q-ribbon position="top-right" type="corner" glow>Glow Top Right</q-ribbon>
      </div>
    </q-card-section>
  </q-card>
</template>

<style lang="sass" scoped>
.box-ribbon-wrapper
  background-color: $grey-3
  margin: 0 auto
  position: relative

.ribbon-wrapper
  height: 70px
</style>
