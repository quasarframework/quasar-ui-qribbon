<template>
  <q-card class="q-my-lg q-pa-md">
    <q-card-section>
      <div class="box-ribbon-wrapper q-pt-xl">
        <q-ribbon class="q-pb-md"><q-icon name="home" style="width: 100px; text-align: center;" /></q-ribbon>
        <q-ribbon class="q-pb-md" color="red" background-color="#FFFF00"><q-icon name="bolt" style="font-size: 44px; width: 100px; text-align: center;"/></q-ribbon>
      </div>
    </q-card-section>
  </q-card>
</template>

<style lang="sass" scoped>
.box-ribbon-wrapper
  background-color: $grey-3
  margin: 0 auto
  position: relative

.border-radius-top
[class^=qribbon__]
  border-radius: 5px 5px 0 0

</style>
