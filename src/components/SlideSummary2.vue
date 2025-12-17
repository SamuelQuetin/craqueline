<template>
  <v-sheet class="bg-1 h-100 py-8 d-flex justify-center">
    <v-row class="h-100 w-75" v-if="!isMobile">
      <v-spacer
          cols="1" xs="1" sm="1" md="1" lg="1" xl="1"
      ></v-spacer>
      <v-col
          cols="5" xs="5" sm="5" md="5" lg="5" xl="5"
          class="d-flex flex-column align-center justify-center h-100"
      >
        <div class="drop-left">
          <p>Sublimez vos évenements</p>
          <h2 class="h2-defaut">FAITES L'EXPERIENCE<br/>D'UNE PÂTISSERIE<br/>AUTHENTIQUE</h2>
        </div>
        <v-img
            src="@/assets/photo/chouxSaintHono.png"
            class="drop-out"
            width="300"
        ></v-img>
      </v-col>
      <v-col
          cols="5" xs="5" sm="5" md="5" lg="5" xl="5"
          class="d-flex flex-column align-center h-100"
      >
        <v-img
            class="drop-in"
            src="@/assets/photo/chouxTour.png"
            width="300"
        ></v-img>
        <v-btn
            variant="outlined"
            color="black"
            size="x-large"
            @click="goTo('Contact')"
            class="drop-right"
        >
          Demander un devis
        </v-btn>
        <v-spacer></v-spacer>
      </v-col>
      <v-spacer
          cols="1" xs="1" sm="1" md="1" lg="1" xl="1"
      ></v-spacer>
    </v-row>
    <v-row class="h-100 w-75" v-else-if="isMobile">
      <v-row class="w-100 h-50 px-12 d-flex align-center justify-center">
        <v-col
            cols="6"
            class="d-flex flex-column align-center justify-center w-100 h-100">
          <v-img
              src="@/assets/photo/chouxSaintHono.png"
              class="drop-out"
              width="300"
          ></v-img>
        </v-col>
        <v-col
            cols="6"
            class="d-flex flex-column align-center justify-center mt-12 h-100 w-100">
          <v-img
              class="drop-in"
              src="@/assets/photo/chouxTour.png"
              width="300"
          ></v-img>
        </v-col>
      </v-row>
      <v-row class="w-100">
        <v-col class="margin-center d-flex flex-column align-center justify-center">
          <div class="drop-left">
            <p>Sublimez vos évenements</p>
            <h2 class="h2-mobile">FAITES L'EXPERIENCE<br/>D'UNE PÂTISSERIE<br/>AUTHENTIQUE</h2>
          </div>
        </v-col>
      </v-row>
      <v-row class="w-100">
        <v-col class="d-flex flex-column align-center h-100">
          <v-btn
              variant="outlined"
              color="black"
              size="x-large"
              class="drop-right"
              @click="goTo('Contact')"
          >
            Demander un devis
          </v-btn>
        </v-col>
      </v-row>
      <v-spacer></v-spacer>
    </v-row>
  </v-sheet>
</template>

<script setup>
import router from "@/router/index.js";

const emits = defineEmits(['onClick'])

const props = defineProps({isMobile: Boolean})

function scrollto(section) {
  emits('onClick', section)
}
function goTo(page) {
  router.push({name: page})
}
</script>

<style scoped>
.bg-1 {
  background-color: rgb(var(--v-theme-primary));
}
.h2-defaut {
  font-size: 4em;
  font-weight: 100;
}

.h2-mobile {
  font-size: 2em;
  font-weight: 100;
}
p {
  color: black;
}

h2 {
  font-size: 4em;
  font-weight: 100;
  color: black;
}


/* ===== Classes ===== */
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

/* ===== Keyframes ===== */
@keyframes slideInLeft {
  0% {
    transform: translate3d(-120vw, 0, 0);
  }
  70% {
    transform: translate3d(2px, 0, 0);
  }
  /* mini dépassement */
  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideInRight {
  0% {
    transform: translate3d(120vw, 0, 0);
  }
  70% {
    transform: translate3d(-2px, 0, 0);
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
    transform: translate3d(0, 2px, 0);
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
    transform: translate3d(0, -2px, 0);
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