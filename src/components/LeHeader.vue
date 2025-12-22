<template>
  <v-sheet
      ref="headerRef"
      color="quaternary"
      class="header"
  >
    <v-row class="ma-0 pa-0 d-flex justify-space-between">
      <v-col cols="8" xs="8" sm="8" md="4" class="d-flex justify-start align-center">
        <v-img
            src="@/assets/logoCraque.svg"
            class="logo-shrink d-flex justify-start justify-self-start"
            height="100px"
        />
      </v-col>
      <v-col cols="4" xs="4" sm="4" md="6" :class="isMobile ? 'd-flex justify-end align-center' : 'd-flex justify-center align-center'">
        <v-menu v-if="isMobile"
                content-class="menu-fullscreen">
          <template v-slot:activator="{ props }">
            <v-btn icon="mdi-menu" variant="outlined"  v-bind="props"></v-btn>
          </template>
          <v-sheet elevation="2">
            <v-btn block flat tile @click="scrollTo('#section-1')">ACCUEIL</v-btn>
            <v-btn block flat tile @click="scrollTo('#section-2')">NOTRE HISTOIRE</v-btn>
            <v-btn block flat tile @click="scrollTo('#section-3')">LA CARTE</v-btn>
            <v-btn block flat tile @click="goTo('Contact')">CONTACT</v-btn>
          </v-sheet>
        </v-menu>
        <div v-else class="py-4">
          <v-btn
              class="mx-4"
              tile
              flat
              @click="scrollTo('#section-1')"
          >
            ACCUEIL
          </v-btn>
          <v-btn
              class="mx-4"
              tile
              flat
              @click="scrollTo('#section-2')"
          >
            NOTRE HISTOIRE
          </v-btn>
          <v-btn
              class="mx-4"
              tile
              flat
              @click="scrollTo('#section-3')"
          >
            LA CARTE
          </v-btn>
          <v-btn
              class="mx-4"
              tile
              flat
              @click="goTo('Contact')"
          >
            CONTACT
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script setup>
import router from "@/router/index.js";

const props = defineProps({isMobile: Boolean})

const emits = defineEmits(['onClick'])

function scrollTo(section){
  emits('onClick',section)
}
function goTo(page){
  router.push({name: page})
}

</script>

<style scoped>
.header{
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.1s ease;
}

.logo {
  height: 20vh;
  width: 15vw;
  transition: all 0.1s ease;
}

.logo-shrink {
  transition: all 0.1s ease;
}

.v-btn {
  background-color:  rgb(var(--v-theme-quaternary));
  color: white;
}

::v-deep(.menu-fullscreen) {
  left: 0 !important;
  width: 100vw !important;
  max-width: 100vw !important;
}
</style>