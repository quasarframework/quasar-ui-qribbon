<template>
  <q-card class="q-my-lg q-pa-md">
    <q-card-section>
      <div class="box-ribbon-wrapper q-pt-xl">
          <q-ribbon class="q-pb-md qribbon-avatar" position="right" decoration="rounded-out">
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar.png">
            </q-avatar>
          </q-ribbon>
      </div>
    </q-card-section>
  </q-card>
</template>

<style lang="sass" scoped>
.box-ribbon-wrapper
  margin: 0 auto
  position: relative

.qribbon-avatar
[class*=horizontal--right].decorate-rounded-out
  border-top-left-radius: 45px
  border-bottom-left-radius: 45px
  padding-left: 5px

</style>
