<template>
  <q-card class="q-my-lg q-pa-md">
    <q-card-section>
      <div class="box-ribbon-wrapper">
        <q-ribbon position="top-left" type="corner" glow>Glow Top Left</q-ribbon>
        <q-ribbon class="github-text" position="top-right" type="corner" color="white" background-color="#5b5e63">
          <a href="https://github.com/quasarframework/quasar-ui-qribbon" target="_blank">FORK ME ON GITHUB!</a>
        </q-ribbon>
        <q-ribbon class="qribbon-bottom" position="bottom-left" type="corner"><span class="rotate-270">Bottom Left</span></q-ribbon>
        <q-ribbon class="qribbon-bottom" position="bottom-right" type="corner">Bottom Right</q-ribbon>
      </div>
    </q-card-section>
  </q-card>
</template>

<style lang="sass" scoped>
// .box-ribbon-wrapper
//   width: 90%
//   min-height: 400px
//   background-color: $grey-3
//   margin: 0 auto
//   position: relative

.github-text
  font-size: 14px

a
  border-top: 1px dashed white
  border-bottom: 1px dashed white
  transform: rotate(45deg)
  text-decoration: none
  padding: 2px 0

// .qribbon-avatar
// [class*=horizontal--right].decorate-rounded-out
//   border-top-left-radius: 45px
//   border-bottom-left-radius: 45px
//   padding-left: 5px

// .q-toolbar.qribbon
//   padding-left: 0

// .border-radius-top
// [class^=qribbon__]
//   border-radius: 5px 5px 0 0

// .example-title
//   white-space: unset

</style>
