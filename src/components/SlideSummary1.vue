<template>
  <v-sheet class="bg-1 h-100 py-8 d-flex justify-center">
    <v-row class="h-100 w-75" v-if="!isMobile">
      <v-spacer
          cols="12" xs="1" sm="1" md="1" lg="1" xl="1"
      ></v-spacer>
      <v-col
          cols="12" xs="5" sm="5" md="5" lg="5" xl="5"
          class="d-flex flex-column align-center justify-center h-100"
      >
        <LazyPictures
            :src="chouCookie"
            :thumbnail="chouCookieThumbnail"
            class="drop-out"
            width="300"
            max-width="300"
        ></LazyPictures>
        <v-btn
            variant="outlined"
            size="x-large"
            class="drop-left mt-4"
            @click="scrollto('#savoir-faire')"
        >
          voir nos produits
        </v-btn>
<!--        TODO mettre voir la carte quand la page la carte existera -->
        <v-spacer></v-spacer>
      </v-col>
      <v-col
          cols="12" xs="5" sm="5" md="5" lg="5" xl="5"
          class="d-flex flex-column align-center justify-center h-100"
      >
        <div class="drop-right">
          <p>Découvrez notre gamme de choux</p>
          <h2 class="h2-defaut">UN SAVOIR-FAIRE<br>ARTISANAL</h2>
        </div>
        <LazyPictures
            class="drop-in"
            :src="boiteChoux"
            :thumbnail="boiteChouxThumbnail"
            max-width="300"
            width="300"
        ></LazyPictures>
      </v-col>
      <v-spacer
          cols="12" xs="1" sm="1" md="1" lg="1" xl="1"
      ></v-spacer>
    </v-row>
    <v-row class="h-100 w-75" v-else-if="isMobile">
      <v-row class="w-100 h-50 px-12 d-flex align-center justify-center">
        <v-col
            cols="6"
            class="d-flex flex-column align-center justify-center w-100 h-100">
          <LazyPictures
              :src="chouCookie"
              :thumbnail="chouCookieThumbnail"
              :is-mobile="isMobile"
              class="drop-out img-mobile"
          ></LazyPictures>
        </v-col>
        <v-col
            cols="6"
            class="d-flex flex-column align-center justify-center mt-12 h-100 w-100">
          <LazyPictures
              :is-mobile="isMobile"
              :src="boiteChoux"
              :thumbnail="boiteChouxThumbnail"
              class="drop-in img-mobile"
          ></LazyPictures>
        </v-col>
      </v-row>
      <v-row class="w-100">
        <v-col class="margin-center d-flex flex-column align-center justify-center">
          <div class="drop-right z-index-1">
            <p>Découvrez notre gamme de choux</p>
            <h2 class="h2-mobile">UN SAVOIR-FAIRE ARTISANAL</h2>
          </div>
        </v-col>
      </v-row>
      <v-row class="w-100">
        <v-col class="d-flex flex-column align-center h-100">
          <v-btn
              variant="outlined"
              color="tertiary"
              size="x-large"
              class="drop-left mt-4"
              @click="scrollto('#savoir-faire')"
          >
            voir la carte
          </v-btn>
        </v-col>
      </v-row>
      <v-spacer></v-spacer>
    </v-row>
  </v-sheet>
</template>

<script setup>
import LazyPictures from "@/components/LazyPictures.vue";
import chouCookie from "@/assets/photo/chouCookie.jpg";
import chouCookieThumbnail from "@/assets/thumbnail/chouCookie.jpg";
import boiteChoux from "@/assets/photo/boiteChoux.jpg";
import boiteChouxThumbnail from "@/assets/thumbnail/boiteChoux.jpg";

const emits = defineEmits(['onClick'])

const props = defineProps({isMobile: Boolean})

function scrollto(section) {
  emits('onClick', section)
}
</script>

<style scoped>
.bg-1 {
  background-color: rgb(var(--v-theme-tertiary));
}

p {
  color: black;
}

h2 {
  color: black;
}

.h2-defaut {
  font-size: 4em;
  font-weight: 100;
}

.h2-mobile {
  font-size: 2em;
  font-weight: 100;
}

.img-mobile {
  width: clamp(180px, 45vw, 320px);
  height: auto;
}

.z-index-1 {
  z-index: 1;
}

.drop-left {
  animation: slideInLeft 3s cubic-bezier(.22, 1, .36, 1) both,
  fadeIn 2000ms ease both;
  will-change: transform, opacity;
  backface-visibility: hidden;
}

.drop-right {
  animation: slideInRight 3s cubic-bezier(.22, 1, .36, 1) both,
  fadeIn 2000ms ease both;
  will-change: transform, opacity;
  backface-visibility: hidden;
}

.drop-in { /* depuis le haut */
  animation: slideInTop 3s cubic-bezier(.22, 1, .36, 1) both,
  fadeIn 2000ms ease both;
  will-change: transform, opacity;
  backface-visibility: hidden;
}

.drop-out { /* depuis le bas */
  animation: slideInBottom 3s cubic-bezier(.22, 1, .36, 1) both,
  fadeIn 2000ms ease both;
  will-change: transform, opacity;
  backface-visibility: hidden;
}

.margin-center {
  margin-left: 10%;
  margin-right: 10%;
}

/* ===== Keyframes ===== */
@keyframes slideInLeft {
  0% {
    transform: translate3d(-120vw, 0, 0);
  }
  70% {
    transform: translate3d(-2px, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideInRight {
  0% {
    transform: translate3d(120vw, 0, 0);
  }
  70% {
    transform: translate3d(2px, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideInTop {
  0% {
    transform: translate3d(0, -60vh, 0);
  }
  70% {
    transform: translate3d(0, -2px, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideInBottom {
  0% {
    transform: translate3d(0, 60vh, 0);
  }
  70% {
    transform: translate3d(0, 2px, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  30% {
    opacity: .2;
  }
  60% {
    opacity: .75;
  }
  100% {
    opacity: 1;
  }
}
</style>
