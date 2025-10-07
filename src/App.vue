<template>
  <v-app class="app-bg">

    <v-main>
      <section id="section-0">
      <v-parallax
          src="@/assets/photo/parallax.png"
          height="100dvh"
          class="parallax"
      >
        <div class="d-flex flex-column fill-height justify-center align-center parallax-content text-center text-white">

          <img src="@/assets/logoCraque.svg" :width="isMobile ? '100%' : '70%'" alt="CRAQUELINE"/>
        </div>
        <div class="parallax_blur" aria-hidden="true"></div>

        <div class="scroll-cue"
             :style="scrollCueStyle"
             @click="scrollTo('#section-1')"
             aria-label="Faites défiler">
          <v-icon size="28">mdi-chevron-down</v-icon>
          <small>Faites défiler</small>
        </div>
      </v-parallax>
      </section>
      <section id="section-1">
        <Summary :is-mobile="isMobile" @onClick="scrollTo"></Summary>
      </section>
      <v-container class=" pa-5 bg_base" max-width="90em">

        <section id="section-2">
          <Bienvenue :is-mobile="isMobile"></Bienvenue>
        </section>
        <div id="test"></div>
        <section id="section-3">
          <LaCarte></LaCarte>
        </section>

        <section id="section-4">
          <LaBoutique></LaBoutique>
        </section>
        <section id="section-5">
          <AffichePhoto></AffichePhoto>
        </section>
      </v-container>
      <MaintenanceBanner v-model="isMaintenance"></MaintenanceBanner>
    </v-main>
    <LeFooter></LeFooter>
  </v-app>



</template>
<script setup>
import Bienvenue from './components/Bienvenue.vue';
import MaintenanceBanner from "@/components/MaintenanceBanner.vue";
import {ref, computed, onMounted, onUnmounted} from 'vue';
import {useDisplay} from 'vuetify'
import LaBoutique from "@/components/LaBoutique.vue";
import Summary from "@/components/Summary.vue";
import LaCarte from "@/components/LaCarte.vue";
import LeFooter from "@/components/LeFooter.vue";
import AffichePhoto from "@/components/AffichePhoto.vue";

const isMaintenance = ref(false);

const cueOpacity = ref(1)

const {mobile: isMobile} = useDisplay()

const updateOpacity = () => {
  const y = window.scrollY || 0
  const vh = Math.max(window.innerHeight, 1)
  // Distance sur laquelle on “fade” (60% de la hauteur de l’écran)
  const fadeDistance = vh * 0.6
  const o = 1 - Math.min(y / fadeDistance, 1)
  cueOpacity.value = Math.max(0, Math.min(1, +o.toFixed(3)))
}

onMounted(() => {
  updateOpacity()
  window.addEventListener('scroll', updateOpacity, {passive: true})
  window.addEventListener('resize', updateOpacity)
})
onUnmounted(() => {
  window.removeEventListener('scroll', updateOpacity)
  window.removeEventListener('resize', updateOpacity)
})

const scrollTo = (selector) => {
  console.log(selector);
  document.querySelector(selector)?.scrollIntoView({behavior: 'smooth'})
}

const scrollCueStyle = computed(() => ({
  opacity: cueOpacity.value,
  pointerEvents: cueOpacity.value < 0.1 ? 'none' : 'auto',
  visibility: cueOpacity.value < 0.02 ? 'hidden' : 'visible',
}))

</script>
<style scoped>
.parallax {
  position: relative;
  overflow: hidden;
  background: #000;
}

.parallax_blur {
  z-index: 1;
  position: absolute;
  inset: 0;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  /* léger assombrissement optionnel */
  pointer-events: none;
}

.parallax-content {
  position: relative;
  z-index: 2;
}

/* Indication de scroll */
.scroll-cue {
  position: absolute;
  z-index: 3;
  left: 50%;
  bottom: 22px;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 6px 12px;
  border-radius: 999px;
  color: #fff;
  user-select: none;
  cursor: pointer;
  transition: opacity .2s linear, visibility .2s linear;
}

.scroll-cue .v-icon {
  animation: bounce 1.6s ease-in-out infinite;
}

.scroll-cue small {
  font-size: .72rem;
  letter-spacing: .08em;
  text-transform: uppercase;
  opacity: .85;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(6px);
  }
}


/* Conteneur de page */
.app-bg {
  position: relative;
  min-height: 100dvh;
  isolation: isolate; /* crée un nouveau stacking context */
  overflow: clip; /* ou hidden si tu préfères */
  background: rgb(var(--v-theme-tertiary)); /* couleur de fond proche du gradient pour éviter tout "flash" blanc */
}

.bg_base {
  z-index: 1;
  background: rgba(var(--v-theme-primary));
}

</style>