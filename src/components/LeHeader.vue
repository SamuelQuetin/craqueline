<template>
  <div style="height:13dvh"></div>
  <v-sheet
      color="quaternary"
      class="header"
  >
    <v-row>
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
      <v-col :cols="isShrunkOrMainPage ? '11':'12'" class="d-flex justify-center align-center">
        <div class="py-4">
          <v-btn
              class="mx-4"
              variant="text"
          >
            ACCUEIL
          </v-btn>
          <v-btn
              class="mx-4"
              variant="text"
          >
            NOTRE HISTOIRE
          </v-btn>
          <v-btn
              class="mx-4"
              variant="text"
          >
            LA CARTE
          </v-btn>
          <v-btn
              class="mx-4"
              variant="text"
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
  height: 10vh;

  width: 10vw;
  transition: all 0.1s ease;
}
</style>