<template>
  <div style="height:13dvh"></div>
  <v-sheet
      color="quaternary"
      class="header"
  >
    <v-row class="ma-0 pa-0">
      <v-col :cols="isShrunkOrMainPage ? '1':'12'" class="d-flex justify-center">
        <div>
          <v-img
              src="@/assets/logoSeul.webp"
              :class="isShrunkOrMainPage? 'logo-shrink' : 'logo'"
          />
          <h1 v-if="!isShrunkOrMainPage">CRAQUELINE</h1>
          <p v-if="!isShrunkOrMainPage">MONTPELLIER</p>
        </div>
      </v-col>
      <v-col :cols="isShrunkOrMainPage ? '11':'12'" :class="isMobile ? 'd-flex justify-end align-center' : 'd-flex justify-center align-center'">
        <v-menu v-if="isMobile">
          <template v-slot:activator="{ props }">
            <v-btn icon="mdi-menu" variant="outlined" size="x-large" v-bind="props"></v-btn>
          </template>
          <v-btn
              style="width: 100vw"
              tile
              flat
              @click="scrollto('#section-1')"
          >
            ACCUEIL
          </v-btn>
          <v-btn
              style="width: 100vw"
              tile
              flat
              @click="scrollto('#section-2')"
          >
            NOTRE HISTOIRE
          </v-btn>
          <v-btn
              style="width: 100vw"
              tile
              flat
              @click="scrollto('#section-3')"
          >
            LA CARTE
          </v-btn>
          <v-btn
              style="width: 100vw"
              tile
              flat
          >
            CONTACT
          </v-btn>
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

import {ref, onMounted, onUnmounted} from 'vue'

const isShrunkOrMainPage = ref(false)
const props = defineProps({isMobile: Boolean})

const emits = defineEmits(['onClick'])

function scrollto(section){
  emits('onClick',section)
}

const handleScroll = () => {
  isShrunkOrMainPage.value = window.scrollY > 50 || true
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
</style>