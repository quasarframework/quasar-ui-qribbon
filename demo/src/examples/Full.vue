<template>
  <q-card class="q-my-lg q-pa-md">
    <q-card-section>
      <div class="box-ribbon-wrapper q-pt-xl">
        <q-ribbon class="q-pb-md text-center border-radius-top" size="full">Full Ribbon (.text-center) with border-radius</q-ribbon>
        <q-ribbon class="q-pb-md text-right q-mt-md" leaf-position="top" size="full" leaf-color="green" color="green" background-color="yellow" glow>Full Inverted Hippy Ribbon (.text-right)</q-ribbon>
      </div>
    </q-card-section>
  </q-card>
</template>

<style lang="sass" scoped>
.box-ribbon-wrapper
  margin: 0 auto
  position: relative

.border-radius-top
[class^=qribbon__]
  border-radius: 5px 5px 0 0

</style>
