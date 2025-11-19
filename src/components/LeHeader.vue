<template>
  <div :style="isOnTopOfThePage ? 'height:20dvh' : 'height:13dvh'"></div>
  <v-sheet
      color="quaternary"
      class="header"
  >
    <v-row class="ma-0 pa-0">
      <v-col :cols="isOnTopOfThePage ? '12':'6'">
        <v-row class="ma-0">
          <v-col :cols="isOnTopOfThePage ? '12':'3'" class="d-flex justify-center align-center">
            <v-img
                src="@/assets/logoSeul.webp"
                :class="!isOnTopOfThePage? 'logo-shrink' : 'logo'"
            />
          </v-col>
          <v-col :cols="isOnTopOfThePage ? '12':'9'" :class="isOnTopOfThePage ? 'd-flex justify-center align-center' : 'd-flex justify-start align-center'">
            <div>
              <h1 style="font-size: 40px">CRAQUELINE</h1>
              <p v-if="isOnTopOfThePage">MONTPELLIER</p>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col :cols="isOnTopOfThePage ? '12':'6'" :class="isMobile ? 'd-flex justify-end align-center' : 'd-flex justify-center align-center'">
        <v-menu v-if="isMobile"
                content-class="menu-fullscreen">
          <template v-slot:activator="{ props }">
            <v-btn icon="mdi-menu" variant="outlined" size="x-large" v-bind="props"></v-btn>
          </template>
          <v-sheet elevation="2">
            <v-btn block flat tile @click="scrollto('#section-1')">ACCUEIL</v-btn>
            <v-btn block flat tile @click="scrollto('#section-2')">NOTRE HISTOIRE</v-btn>
            <v-btn block flat tile @click="scrollto('#section-3')">LA CARTE</v-btn>
            <v-btn block flat tile>CONTACT</v-btn>
          </v-sheet>
        </v-menu>
        <div v-else class="py-4">
          <v-btn
              class="mx-4"
              tile
              flat
              @click="scrollto('#section-1')"
          >
            ACCUEIL
          </v-btn>
          <v-btn
              class="mx-4"
              tile
              flat
              @click="scrollto('#section-2')"
          >
            NOTRE HISTOIRE
          </v-btn>
          <v-btn
              class="mx-4"
              tile
              flat
              @click="scrollto('#section-3')"
          >
            LA CARTE
          </v-btn>
          <v-btn
              class="mx-4"
              tile
              flat
          >
            CONTACT
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script setup>

import {ref, onMounted, onUnmounted, computed} from 'vue'

const isOnTopOfThePage = ref(false)
const props = defineProps({isMobile: Boolean})

const emits = defineEmits(['onClick'])

function scrollto(section){
  emits('onClick',section)
}

const log = computed(() => window.scrollY)

const handleScroll = () => {
  isOnTopOfThePage.value = window.scrollY < 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.1s ease;
  padding: 1rem 0;
}

.logo {
  height: 20vh;
  width: 15vw;
  transition: all 0.1s ease;
}

.logo-shrink {
  height: 100px;
  width: 100px;
  left: 50px;
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