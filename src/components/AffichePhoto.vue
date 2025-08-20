<template>
  <v-select v-model="selected" :items="choice" label="Choisi un mode de vue des photos" class="mt-4"></v-select>

  <v-carousel
      v-if="selected === 'carousel'"
      height="700"
      cycle
      interval="5000"
      show-arrows="hover"
      touch
  >
    <v-carousel-item
        v-for="(image, i) in images"
        :src="image"
        cover
        :key="i"
    >
    </v-carousel-item>
  </v-carousel>
  <!-- Masonry -->
  <v-container v-else-if="selected === 'liste'" class="py-8">
    <div class="masonry">
      <figure v-for="(src, i) in images" :key="i" class="masonry-item">
        <img :src="src" loading="lazy" alt="" />
      </figure>
    </div>
  </v-container>

  <!-- Rien -->
  <div v-else class="text-center my-10 text-medium-emphasis">
    Aucun affichage sélectionné.
  </div>
</template>

<script setup>

import {ref} from "vue";

const choice = ref(['carousel','liste','rien'])
const selected = ref('carousel')

const modules = import.meta.glob(
    '/src/assets/photo/choux/*.{png,jpg,jpeg,webp,svg,gif}',
    { eager: true, import: 'default' }
)
const images = Object.entries(modules) // optionnel
    .map(([, url]) => url)

</script>

<style scoped>
.masonry { column-count: 4; column-gap: 16px; }
@media (max-width:1280px){ .masonry{ column-count:3; } }
@media (max-width:960px) { .masonry{ column-count:2; } }
@media (max-width:600px) { .masonry{ column-count:1; } }

.masonry-item { break-inside: avoid; margin-bottom: 16px; overflow: hidden; box-shadow: 0 4px 18px rgba(0,0,0,.25); }
.masonry-item img { display:block; width:100%; height:auto; }
</style>