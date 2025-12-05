<template>
  <div v-if="isUnderHeaderPosition" style="height: 170px;"></div>
  <v-sheet
      ref="headerRef"
      color="quaternary"
      :class="isUnderHeaderPosition ? 'header-fix' : 'header-relative'"
  >
    <v-row class="ma-0 pa-0 d-flex justify-space-between">
      <v-col cols="8" xs="8" sm="8" md="6">
        <v-row class="ma-0" v-if="!props.isMobile">
          <v-col cols="3" class="d-flex justify-center align-center">
            <v-img
                src="@/assets/logoSeul.webp"
                height="100px"
                width="100px"
                min-width="100px"
                class="logo-shrink"
            />

          </v-col>
          <v-col cols="9" class="d-flex justify-start align-center">
            <div>
              <h1 style="font-size: 40px">CRAQUELINE</h1>
              <p>MONTPELLIER</p>
            </div>
          </v-col>
        </v-row>
        <v-row class="ma-0" v-else>
          <v-col cols="12" class="d-flex justify-center align-center">
            <v-img
                src="@/assets/logoCraque.svg"
                height="100px"
                width="100px"
                min-width="100px"
                class="logo-shrink"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4" xs="4" sm="4" md="6" :class="props.isMobile ? 'd-flex justify-end align-center' : 'd-flex justify-center align-center'">
        <v-menu v-if="props.isMobile"
                content-class="menu-fullscreen">
          <template v-slot:activator="{ props }">
            <v-btn icon="mdi-menu" variant="outlined" size="x-large" v-bind="props"></v-btn>
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

import {ref, onMounted, onUnmounted, computed, onUpdated} from 'vue'
import router from "@/router/index.js";

const isOnTopOfThePage = ref(false)

const props = defineProps({isMobile: Boolean})

const emits = defineEmits(['onClick'])

const headerRef = ref(null)
const scrollY = ref(0)
const headerTop = ref(0)


const handleScroll = () => {
  scrollY.value = window.scrollY
  isOnTopOfThePage.value = scrollY.value < 50
}
const isUnderHeaderPosition = computed(() => {
  return scrollY.value > headerTop.value
})
function updateHeaderTop() {
  if (!headerRef.value) return
  headerTop.value = headerRef.value.$el.getBoundingClientRect().top + window.scrollY
}

onMounted(() => {
  window.addEventListener('resize', updateHeaderTop)
  window.addEventListener('load', updateHeaderTop)
  window.addEventListener('scroll', handleScroll, { passive: true })
})



onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function scrollTo(section){
  emits('onClick',section)
}
function goTo(page){
  router.push({name: page})
}

</script>

<style scoped>
.header-fix{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.1s ease;
  padding: 1rem 0;
}

.header-relative{
  position: relative;
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