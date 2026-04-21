<template>
  <v-container>
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
      >
        <LazyPictures
            :src="image.src"
            :thumbnail="image.thumbnail"
            :alt="image.alt"
            max-width="100%"
            color="secondary"
        />
      </v-carousel-item>
    </v-carousel>
    <div v-else class="d-flex flex-wrap justify-center">
      <SquareImagePopup v-for="(image, i) in images" :key="i" :src="image.src" :thumbnail="image.thumbnail" class="pa-2"></SquareImagePopup>
    </div>
  </v-container>
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

import chouPecanThumbnails from '@/assets/thumbnail/choux2/chouPecan.jpg'
import chouCookie2Thumbnails from '@/assets/thumbnail/choux2/chouCookie2.jpg'
import chouChocoValroThumbnails from '@/assets/thumbnail/choux2/chouChocoValro.jpg'
import chouCaramelThumbnails from '@/assets/thumbnail/choux2/chouCaramel.jpg'
import saintHonoMonoTheGlaceeThumbnails from '@/assets/thumbnail/choux2/saintHonoMonoTheGlacee.jpg'
import chouquelinesThumbnails from '@/assets/thumbnail/choux2/chouquelines.jpg'
import cafeLateThumbnails from '@/assets/thumbnail/choux2/cafeLate.jpg'
import theGlaceThumbnails from '@/assets/thumbnail/choux2/theGlace.jpg'
import machaGlaceThumbnails from '@/assets/thumbnail/choux2/machaGlace.jpg'
import saintHonoCarreThumbnails from '@/assets/thumbnail/choux2/saintHonoCarre.png'
import saintHo1Thumbnails from "@/assets/thumbnail/choux2/Saint-Ho1.png"

const props = defineProps({isMobile: Boolean})

const images = [
  {
    src: chouPecan,
    thumbnail: chouPecanThumbnails,
    alt: "Choux Pecan"
  },
  {
    src: chouCookie2,
    thumbnail: chouCookie2Thumbnails,
    alt: "Choux Cookie"
  },
  {
    src: chouChocoValro,
    thumbnail: chouChocoValroThumbnails,
    alt: "Choux au Chocolat"
  },
  {
    src: chouCaramel,
    thumbnail: chouCaramelThumbnails,
    alt: "Choux au Caramel"
  },
  {
    src: saintHonoMonoTheGlacee,
    thumbnail: saintHonoMonoTheGlaceeThumbnails,
    alt: "Saint honoré individuel avec un thé glacé"
  },
  {
    src: chouquelines,
    thumbnail: chouquelinesThumbnails,
    alt: "Chouquelines"
  },
  {
    src: cafeLate,
    thumbnail: cafeLateThumbnails,
    alt: "Café Laté"
  },
  {
    src: theGlace,
    thumbnail: theGlaceThumbnails,
    alt: "Thé Glacé"
  },
  {
    src: machaGlace,
    thumbnail: machaGlaceThumbnails,
    alt: "Macha Glacé"
  },
  {
    src: saintHonoCarre,
    thumbnail: saintHonoCarreThumbnails,
    alt: "Saint honoré 6 parts"
  },
  {
    src: saintHo1,
    thumbnail: saintHo1Thumbnails,
    alt: "Saint honoré 6 parts"
  }
]
</script>
<style scoped>
</style>
