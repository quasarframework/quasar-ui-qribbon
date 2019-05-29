<template>
  <q-page class="flex flex-center">
    <q-card class="q-py-xs flat bordered" style="width: 500px;">
      <div class="ribbon-wrapper">
        <q-ribbon class="q-my-sm q-mr-md">Left Ribbon (default)</q-ribbon>
      </div>

      <div class="ribbon-wrapper">
        <q-ribbon class="q-my-sm q-mr-md border-radius">With border radius</q-ribbon>
      </div>

      <div class="ribbon-wrapper">
        <q-ribbon class="q-my-sm q-mr-md" color="red" background-color="yellow">Hippy Ribbon</q-ribbon>
      </div>

      <div class="ribbon-wrapper">
        <q-ribbon class="q-my-sm q-mr-md" >
          <q-icon name="home" />
        </q-ribbon>
      </div>

      <div class="ribbon-wrapper">
        <q-ribbon class="q-my-sm q-mr-md">Inline Left Ribbon</q-ribbon>
        <q-ribbon class="q-my-sm q-mr-md" right>Inline Right Ribbon</q-ribbon>
      </div>

      <div class="ribbon-wrapper">
        <q-ribbon class="q-my-sm q-mr-md" right>Right Ribbon</q-ribbon>
      </div>

      <div class="ribbon-wrapper">
        <q-ribbon class="q-my-sm q-mr-md" color="purple" background-color="orange" right inverted>Inverted Hippy Ribbon</q-ribbon>
      </div>

      <div class="ribbon-wrapper">
        <q-ribbon full class="q-my-sm q-mr-md text-center">Full Ribbon (.text-center)</q-ribbon>
      </div>

      <div class="ribbon-wrapper">
        <q-ribbon full class="q-my-sm q-mr-md">
          <marquee>Let's Marquee!</marquee>
        </q-ribbon>
      </div>

      <div class="ribbon-wrapper">
        <q-ribbon full class="q-my-sm q-mr-md text-right" color="green" background-color="yellow" inverted>Full Inverted Hippy Ribbon (.text-right)</q-ribbon>
      </div>
    </q-card>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex'
}
</script>

<style lang="stylus">
  .ribbon-wrapper
    height 40px
    margin-top 20px

  &.border-radius
    .qribbon
      border-radius 0 4px 4px 0
</style>
