<template>
  <q-page class="row justify-center">
    <q-card class="q-my-lg q-py-md flat bordered" style="width: 75%">
      <div class="ribbon-wrapper">
        <q-ribbon class="border-radius" type="default" position="left" color="#616161" background-color="#e0e0e0">QRibbon (type="default")</q-ribbon>
      </div>

      <q-separator class="q-mb-lg" />

      <div class="box-ribbon-wrapper q-py-md">
        <div class="ribbon-wrapper">
          <q-ribbon>Left Ribbon (default)</q-ribbon>
        </div>

        <div class="ribbon-wrapper">
          <q-ribbon class="border-radius">With border radius</q-ribbon>
        </div>

        <div class="ribbon-wrapper">
          <q-ribbon color="red" background-color="yellow">Hippy Ribbon</q-ribbon>
        </div>

        <div class="ribbon-wrapper">
          <q-ribbon color="white" background-color="#FF0000">Auto shade the leaf by passing CSS color (e.g. #FF0000)</q-ribbon>
        </div>

        <div class="ribbon-wrapper">
          <q-ribbon>
            <q-icon name="home" />
          </q-ribbon>
        </div>

        <div class="ribbon-wrapper">
          <q-ribbon>Inline Left Ribbon</q-ribbon>
          <q-ribbon position="right">Inline Right Ribbon</q-ribbon>
        </div>

        <div class="ribbon-wrapper">
          <q-ribbon position="right">Right Ribbon</q-ribbon>
        </div>

        <div class="ribbon-wrapper avatar">
          <q-ribbon position="right">
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar.png">
            </q-avatar>
          </q-ribbon>
        </div>

        <div class="ribbon-wrapper">
          <q-ribbon color="purple" leaf-color="purple" background-color="orange" position="right">Hippy Ribbon</q-ribbon>
        </div>

        <div class="ribbon-wrapper">
          <q-ribbon color="yellow" leaf-color="blue" background-color="green" position="right">Different Leaf Color - Hippy Ribbon</q-ribbon>
        </div>

        <div class="ribbon-wrapper">
          <q-ribbon class="text-center" position="full">Full Ribbon (.text-center)</q-ribbon>
        </div>

        <div class="ribbon-wrapper">
          <q-ribbon position="full">
            <marquee>Let's Marquee!</marquee>
          </q-ribbon>
        </div>

        <div class="ribbon-wrapper">
          <q-ribbon class="text-right" position="full" leaf-color="green" color="green" background-color="yellow">Full Inverted Hippy Ribbon (.text-right)</q-ribbon>
        </div>
      </div>
    </q-card>

    <q-card class="q-my-lg q-pt-md flat bordered" style="width: 75%">
      <div class="ribbon-wrapper">
        <q-ribbon class="border-radius" type="default" position="top left" color="#616161" background-color="#e0e0e0">QRibbon (type="corner")</q-ribbon>
      </div>

      <q-separator />

      <q-card-section>
        <div class="box-ribbon-wrapper">
          <q-ribbon position="top left" type="corner">Top Left</q-ribbon>
          <q-ribbon class="github-text" position="top right" type="corner" color="white" background-color="#5b5e63">
            <a href="#">FORK ME ON GITHUB!</a>
          </q-ribbon>
          <q-ribbon class="qribbon-bottom" position="bottom left" type="corner"><span class="rotate-270">Bottom Left</span></q-ribbon>
          <q-ribbon class="qribbon-bottom" position="bottom right" type="corner">Bottom Right</q-ribbon>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style>
</style>

<script>
import template from '../markdown/qribbon.md'
export default {
  name: 'PageIndex',

  data () {
    return {
      template: template
    }
  }
}
</script>

<style lang="stylus">
  .box-ribbon-wrapper
    width 90%
    min-height 400px
    background-color $grey-3
    margin 0 auto
    position relative

    .github-text
      font-size 14px

      a
        border-top 1px dashed white
        border-bottom 1px dashed white
        transform: rotate(45deg)
        text-decoration none
        padding 2px 0
</style>
