<template>
  <q-card class="q-my-lg q-pa-md">
    <q-card-section>
      <div class="box-ribbon-wrapper">
        <div class="box-ribbon-wrapper q-py-md">
          <div class="ribbon-wrapper">
            <q-ribbon type="vertical" position="top-left" leaf-position="right" glow>Top Down Ribbon</q-ribbon>
          </div>

          <div class="ribbon-wrapper">
            <q-ribbon type="vertical" position="bottom-left" leaf-position="left" glow>Bottom Up Ribbon</q-ribbon>
          </div>

          <div class="ribbon-wrapper move-50">
            <q-ribbon type="vertical" position="top-left" leaf-position="right" decoration="point-in">Top Down Ribbon</q-ribbon>
          </div>

          <div class="ribbon-wrapper move-50">
            <q-ribbon type="vertical" position="bottom-left" leaf-position="left" decoration="point-out">Bottom Up Ribbon</q-ribbon>
          </div>

          <div class="ribbon-wrapper move-100">
            <q-ribbon type="vertical" position="top-left" leaf-position="right" decoration="rounded-in">Top Down Ribbon</q-ribbon>
          </div>

          <div class="ribbon-wrapper move-100">
            <q-ribbon type="vertical" position="bottom-left" leaf-position="left" decoration="rounded-out">Bottom Up Ribbon</q-ribbon>
          </div>

          <div class="ribbon-wrapper">
            <q-ribbon type="vertical" position="right" size="full" leaf-position="left" class="text-center">Full Ribbon (.text-center)</q-ribbon>
          </div>
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

.ribbon-wrapper.move-50
  .qribbon__vertical--top-left,
  .qribbon__vertical--bottom-left
    left: 50px

.ribbon-wrapper.move-100
  .qribbon__vertical--top-left,
  .qribbon__vertical--bottom-left
    left: 100px

.ribbon-wrapper
  height: 50px
</style>
