<template>
  <q-page class="row justify-center">
    <q-card class="q-my-lg q-pa-md relative-position" style="width: 75%">
      <q-card-section>
        <div class="box-ribbon-wrapper" style="min-height: 300px">
          <q-ribbon position="top-left" type="corner" glow>Glow Top Left</q-ribbon>
          <q-ribbon class="github-text" position="top-right" type="corner" color="white" background-color="#5b5e63">
            <a href="https://github.com/quasarframework/quasar-ui-qribbon" target="_blank">FORK ME ON GITHUB!</a>
          </q-ribbon>
          <q-ribbon class="qribbon-bottom" position="bottom-left" type="corner"><span class="rotate-270">Bottom Left</span></q-ribbon>
          <q-ribbon class="qribbon-bottom" position="bottom-right" type="corner">Bottom Right</q-ribbon>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style>
  .box-ribbon-wrapper {
    width: 90%;
    min-height: 400px;
    background-color: #eee;
    margin: 0 auto;
    position: relative;
  }
</style>
