<template>
  <v-carousel
      v-if="isMobile"
      cycle
      interval="5000"
      touch
      :show-arrows="false"
      class="carousel-auto"
  >
    <v-carousel-item
        v-for="(image, i) in images"
        :key="i"
        class="pa-6"
        height="400"
    >
      <LazyPictures
          :src="image.src"
          :alt="image.alt"
          ratio="0.4"
          color="secondary"
      />
    </v-carousel-item>
  </v-carousel>
  <div v-else class="d-flex flex-wrap justify-center">
    <SquareImagePopup v-for="(image, i) in images" :key="i" :src="image.src" class="pa-2"></SquareImagePopup>
  </div>
</template>

<script setup>
import LazyPictures from "@/components/LazyPictures.vue";
import SquareImagePopup from "@/components/SquareImagePopup.vue";

import chouPecan from '@/assets/photo/choux2/chouPecan.jpg'
import chouCookie2 from '@/assets/photo/choux2/chouCookie2.jpg'
import chouChocoValro from '@/assets/photo/choux2/chouChocoValro.jpg'
import chouCaramel from '@/assets/photo/choux2/chouCaramel.jpg'
import saintHonoMonoTheGlacee from '@/assets/photo/choux2/saintHonoMonoTheGlacee.jpg'
import chouquelines from '@/assets/photo/choux2/chouquelines.jpg'
import cafeLate from '@/assets/photo/choux2/cafeLate.jpg'
import theGlace from '@/assets/photo/choux2/theGlace.jpg'
import machaGlace from '@/assets/photo/choux2/machaGlace.jpg'
import saintHonoCarre from '@/assets/photo/choux2/saintHonoCarre.png'
import saintHo1 from "@/assets/photo/choux2/Saint-Ho1.png"

const props = defineProps({isMobile: Boolean})

const images = [
  {
    src: chouPecan,
    alt: "Choux Pecan"
  },
  {
    src: chouCookie2,
    alt: "Choux Cookie"
  },
  {
    src: chouChocoValro,
    alt: "Choux au Chocolat"
  },
  {
    src: chouCaramel,
    alt: "Choux au Caramel"
  },
  {
    src: saintHonoMonoTheGlacee,
    alt: "Saint honoré individuel avec un thé glacé"
  },
  {
    src: chouquelines,
    alt: "Chouquelines"
  },
  {
    src: cafeLate,
    alt: "Café Laté"
  },
  {src: theGlace,
    alt: "Thé Glacé"
  },
  {
    src: machaGlace,
    alt: "Macha Glacé"
  },
  {
    src: saintHonoCarre,
    alt: "Saint honoré 6 parts"
  },
  {
    src: saintHo1,
    alt: "Saint honoré 6 parts"
  }
]
</script>
<style scoped>
</style>
