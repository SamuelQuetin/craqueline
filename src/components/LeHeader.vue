<template>
  <v-sheet
      color="quaternary"
      class="header"
  >
    <v-row>
      <v-col :cols="isShrunk ? '1':'12'" class="d-flex justify-center">
        <div>
          <v-img
              src="@/assets/logoSeul.webp"
              :class="isShrunk? 'logo-shrink' : 'logo'"
          />
          <h1 v-if="!isShrunk">CRAQUELINE</h1>
          <p v-if="!isShrunk">MONTPELLIER</p>
        </div>
      </v-col>
      <v-col :cols="isShrunk ? '11':'12'" class="d-flex justify-center align-center">
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

const isShrunk = ref(false)

const handleScroll = () => {
  isShrunk.value = window.scrollY > 50
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