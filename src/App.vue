<template>
  <v-app class="app-bg">
    <v-main>
      <v-parallax
        src="@/assets/photo/parallax.png"
        height="100vh"
        class="parallax"
    >
      <div class="d-flex flex-column fill-height justify-center align-center parallax-content text-center text-white">
        <img src="@/assets/photo/title.png"  :width="isMobile ? '100%' : '70%'" alt="CRAQUELINE"/>
        <p>Montpellier</p>
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


    <v-container class=" mt-5 pa-5 bg_blur" max-width="80em">
      <section id="section-1">
        <Bienvenue></Bienvenue>
      </section>
      <NosChoux></NosChoux>
      <LaBoutique></LaBoutique>
    </v-container>
    <MaintenanceBanner v-model="isMaintenance" ></MaintenanceBanner>
    </v-main>
  </v-app>
</template>
<script setup>
import Bienvenue from './components/Bienvenue.vue';
import NosChoux from "@/components/NosChoux.vue";
import MaintenanceBanner from "@/components/MaintenanceBanner.vue";
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useDisplay } from 'vuetify'
import LaBoutique from "@/components/LaBoutique.vue";
const isMaintenance = ref(false);

const cueOpacity = ref(1)

const { mobile: isMobile } = useDisplay()

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
  window.addEventListener('scroll', updateOpacity, { passive: true })
  window.addEventListener('resize', updateOpacity)
})
onUnmounted(() => {
  window.removeEventListener('scroll', updateOpacity)
  window.removeEventListener('resize', updateOpacity)
})

const scrollTo = (selector) => {
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
}

const scrollCueStyle = computed(() => ({
  opacity: cueOpacity.value,
  pointerEvents: cueOpacity.value < 0.1 ? 'none' : 'auto',
  visibility: cueOpacity.value < 0.02 ? 'hidden' : 'visible',
}))

</script>
<style scoped>
.parallax{
  position: relative;
  overflow: hidden;
  background: #000;
}

.parallax_blur{
  z-index: 1;
  position: absolute;
  inset: 0;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  /* léger assombrissement optionnel */
  pointer-events: none;
}
.parallax-content{ position: relative; z-index: 2; }
/* Indication de scroll */
.scroll-cue{
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
.scroll-cue .v-icon{
  animation: bounce 1.6s ease-in-out infinite;
}
.scroll-cue small{
  font-size: .72rem;
  letter-spacing: .08em;
  text-transform: uppercase;
  opacity: .85;
}
@keyframes bounce{
  0%,100%{ transform: translateY(0); }
  50%{ transform: translateY(6px); }
}

.app-bg{
  position: relative;
  min-height: 100vh;
  isolation: isolate;
}

.app-bg::before{
  content: "";
  position: fixed;          /* reste collé au viewport */
  inset: 0;
  z-index: 0;              /* derrière le contenu */
  background: url('@/assets/photo/background1.png') center / cover no-repeat fixed;
  /* facultatif : un peu plus de contraste/luminosité */
  filter: grayscale(100%) brightness(1.5);
}

.bg_blur{
  z-index: 1;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

</style>