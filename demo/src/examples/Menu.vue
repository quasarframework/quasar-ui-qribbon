<template>
  <q-card class="q-my-lg q-pa-md">
    <q-card-section>
      <div class="box-ribbon-wrapper q-pt-xl">
        <q-ribbon class="q-pb-md cursor-pointer" leaf-position="top" decoration="point-out" position="right">
          QMenu QRibbon - click me
          <q-menu anchor="center left" self="top right">
            <q-list dense style="min-width: 100px">
              <q-item clickable v-close-popup>
                <q-item-section>Open...</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>New</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable>
                <q-item-section>Preferences</q-item-section>
                <q-item-section side>
                  <q-icon name="keyboard_arrow_right" />
                </q-item-section>

                <q-menu anchor="top right" self="top left">
                  <q-list>
                    <q-item
                      v-for="n in 3"
                      :key="n"
                      dense
                      clickable
                    >
                      <q-item-section>Submenu Label</q-item-section>
                      <q-item-section side>
                        <q-icon name="keyboard_arrow_right" />
                      </q-item-section>
                      <q-menu auto-close anchor="top right" self="top left">
                        <q-list>
                          <q-item
                            v-for="n in 3"
                            :key="n"
                            dense
                            clickable
                          >
                            <q-item-section>3rd level Label</q-item-section>
                          </q-item>
                        </q-list>
                      </q-menu>
                    </q-item>
                  </q-list>
                </q-menu>

              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section>Quit</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-ribbon>
      </div>
    </q-card-section>
  </q-card>
</template>

<style lang="sass" scoped>
.box-ribbon-wrapper
  margin: 0 auto
  position: relative
</style>
